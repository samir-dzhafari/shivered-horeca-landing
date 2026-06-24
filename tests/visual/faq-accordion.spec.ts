import {expect, test} from '@playwright/test';

test('faq accordion spacing', async ({page}) => {
	await page.goto('/');
	await page.waitForLoadState('networkidle');

	const faq = page.getByTestId('faq-section');
	await faq.scrollIntoViewIfNeeded();

	const metrics = await page.evaluate(() => {
		const section = document.querySelector('[data-testid="faq-section"]');
		const buttons = section?.querySelectorAll(':scope button[aria-expanded]');
		const list = section?.querySelector(':scope div[class*="list"]') as HTMLElement | undefined;
		const firstButton = buttons?.[0] as HTMLElement | undefined;
		const secondButton = buttons?.[1] as HTMLElement | undefined;

		if (!firstButton || !secondButton || !list) {
			return {error: 'faq elements not found'};
		}

		const listStyle = getComputedStyle(list);
		const firstItem = firstButton.closest('div');
		const itemStyle = firstItem ? getComputedStyle(firstItem) : null;
		const firstRect = firstButton.getBoundingClientRect();
		const secondRect = secondButton.getBoundingClientRect();

		return {
			listGap: parseFloat(listStyle.rowGap || listStyle.gap || '0'),
			questionMinHeight: Math.round(firstRect.height),
			gapBetweenQuestions: Math.round(secondRect.top - firstRect.bottom),
			itemPaddingBottom: itemStyle?.paddingBottom ?? '0',
			itemMarginBottom: itemStyle?.marginBottom ?? '0',
			itemBorderBottom: itemStyle?.borderBottomWidth ?? '0',
		};
	});

	if ('error' in metrics) {
		throw new Error(metrics.error);
	}

	expect(metrics.listGap).toBe(0);
	expect(metrics.questionMinHeight).toBeGreaterThanOrEqual(62);
	expect(metrics.itemPaddingBottom).toBe('32px');
	expect(metrics.itemMarginBottom).toBe('32px');
	expect(metrics.itemBorderBottom).toBe('1px');
	expect(
		await page.getByTestId('faq-section').getByRole('button').first().evaluate((el) => getComputedStyle(el).fontWeight),
	).toBe('500');
	// 32px before border + 1px border + 32px after border
	expect(metrics.gapBetweenQuestions).toBe(65);
});

test('faq open state shows minus icon', async ({page}) => {
	await page.goto('/');
	await page.waitForLoadState('networkidle');

	const faq = page.getByTestId('faq-section');
	await faq.scrollIntoViewIfNeeded();

	const firstButton = faq.getByRole('button').first();
	await firstButton.click();

	const iconSrc = await firstButton.locator('img').getAttribute('src');
	const iconTransform = await firstButton.locator('img').evaluate((el) => getComputedStyle(el).transform);

	expect(iconSrc).toContain('faq-minus.svg');
	expect(iconTransform).toBe('none');
});
