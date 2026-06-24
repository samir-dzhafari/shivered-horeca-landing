import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
	await page.goto('/');
	await page.waitForLoadState('networkidle');
});

test.describe('Landing visual regression', () => {
	test('full page', async ({page}) => {
		await expect(page).toHaveScreenshot('landing-full.png', {
			fullPage: true,
			maxDiffPixelRatio: 0.02,
		});
	});

	test('faq to cta boundary', async ({page}) => {
		const faq = page.getByTestId('faq-section');
		const cta = page.getByTestId('cta-section');

		await faq.scrollIntoViewIfNeeded();
		await cta.scrollIntoViewIfNeeded();

		const faqBox = await faq.boundingBox();
		const ctaBox = await cta.boundingBox();

		if (!faqBox || !ctaBox) {
			throw new Error('FAQ or CTA section not found');
		}

		const clip = {
			x: 0,
			y: Math.max(0, faqBox.y + faqBox.height - 120),
			width: page.viewportSize()?.width ?? 1920,
			height: 200,
		};

		await expect(page).toHaveScreenshot('faq-cta-boundary.png', {clip, maxDiffPixelRatio: 0.02});
	});

	test('footer', async ({page}) => {
		const footer = page.getByTestId('footer');
		await footer.scrollIntoViewIfNeeded();
		await expect(footer).toHaveScreenshot('footer.png', {maxDiffPixelRatio: 0.02});
	});

	test('header', async ({page}) => {
		const header = page.getByTestId('header');
		await expect(header).toBeVisible();

		const box = await header.boundingBox();

		if (!box) {
			throw new Error('Header not found');
		}

		await expect(page).toHaveScreenshot('header.png', {
			clip: box,
			maxDiffPixelRatio: 0.02,
		});
	});

	test('format section', async ({page}) => {
		const format = page.getByTestId('format-section');
		await format.scrollIntoViewIfNeeded();
		await expect(format).toHaveScreenshot('format-section.png', {maxDiffPixelRatio: 0.01});
	});
});

test.describe('i18n', () => {
	test('switches language to English', async ({page}) => {
		await page.getByRole('button', {name: 'EN'}).click();
		await expect(page.locator('html')).toHaveAttribute('lang', 'en');
		await expect(page.getByRole('heading', {level: 1})).toContainText('Build an AI booking system');
	});
});

test.describe('Mobile layout', () => {
	test.use({viewport: {width: 375, height: 812}});

	test('header shows language switch and does not overlap logo', async ({page}) => {
		const header = page.getByTestId('header');
		const langSwitch = page.getByRole('group', {name: 'Language'});
		const logo = header.locator('a').first();
		const cta = header.getByRole('link').filter({hasText: /Записаться|Book/});

		await expect(langSwitch).toBeVisible();

		const logoBox = await logo.boundingBox();
		const ctaBox = await cta.boundingBox();

		if (!logoBox || !ctaBox) {
			throw new Error('Header elements not found');
		}

		expect(logoBox.x + logoBox.width).toBeLessThanOrEqual(ctaBox.x);
	});
});
