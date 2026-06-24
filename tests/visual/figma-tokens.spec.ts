import {expect, test} from '@playwright/test';

test.beforeEach(async ({page}) => {
	await page.goto('/');
	await page.waitForLoadState('networkidle');
});

test('all section labels use Blue/600 accent', async ({page}) => {
	const cases = [
		'Для кого этот воркшоп?',
		'сравнение',
		'что вы получите?',
		'как это работает?',
		'Технология',
		'эксперты',
		'После воркшопа',
		'Кому подходит воркшоп',
		'программа',
		'Почему этот формат работает',
		'Сравнение',
		'Вопросы',
	] as const;

	for (const text of cases) {
		const label = page.getByText(text, {exact: true});
		await label.scrollIntoViewIfNeeded();
		const color = await label.evaluate((el) => getComputedStyle(el).color);
		expect(color).toBe('rgb(27, 77, 255)');
	}
});

test('program active tab uses blue background', async ({page}) => {
	await page.locator('#program').scrollIntoViewIfNeeded();
	const programTab = page.locator('#program').getByRole('tab', {name: 'День 1 - Бот'});

	const bg = await programTab.evaluate((el) => getComputedStyle(el).backgroundColor);
	const color = await programTab.evaluate((el) => getComputedStyle(el).color);

	expect(bg).toBe('rgb(27, 77, 255)');
	expect(color).toBe('rgb(255, 255, 255)');
});

test('program tabs container has Neutral/200 border', async ({page}) => {
	await page.locator('#program').scrollIntoViewIfNeeded();
	const tablist = page.locator('#program').getByRole('tablist');

	const border = await tablist.evaluate((el) => {
		const style = getComputedStyle(el);
		return {
			width: style.borderTopWidth,
			color: style.borderTopColor,
		};
	});

	expect(border.width).toBe('1px');
	expect(border.color).toBe('rgb(229, 229, 229)');
});

test('competitors fired badge uses red palette', async ({page}) => {
	const badge = page.getByText('уволен', {exact: false}).first();
	await badge.scrollIntoViewIfNeeded();

	const styles = await badge.evaluate((el) => {
		const node = el.closest('span');
		if (!node) {
			return null;
		}

		const computed = getComputedStyle(node);
		return {
			background: computed.backgroundColor,
			color: computed.color,
		};
	});

	expect(styles).not.toBeNull();
	expect(styles?.background).toBe('rgb(254, 242, 242)');
	expect(styles?.color).toBe('rgb(239, 68, 68)');
});

test('cta form and telegram button use glass surface', async ({page}) => {
	await page.goto('/#register');
	await page.waitForLoadState('networkidle');

	const formStyles = await page.locator('[data-testid="cta-section"] form').evaluate((el) => {
		const style = getComputedStyle(el);
		return {
			borderWidth: style.borderTopWidth,
			backdropFilter: style.backdropFilter,
			boxShadow: style.boxShadow,
			background: style.backgroundColor,
		};
	});

	const telegramStyles = await page
		.getByTestId('cta-section')
		.getByRole('link', {name: 'Написать в Telegram'})
		.evaluate((el) => {
			const style = getComputedStyle(el);
			return {
				borderWidth: style.borderTopWidth,
				backdropFilter: style.backdropFilter,
				boxShadow: style.boxShadow,
			};
		});

	const footerBorder = await page.getByTestId('footer').evaluate((el) => {
		const style = getComputedStyle(el);
		return style.borderTopWidth;
	});

	expect(formStyles.borderWidth).toBe('0px');
	expect(formStyles.backdropFilter).toContain('saturate');
	expect(formStyles.boxShadow).toContain('inset');
	expect(formStyles.background).toBe('rgba(38, 38, 38, 0.7)');
	expect(telegramStyles.borderWidth).toBe('0px');
	expect(telegramStyles.backdropFilter).toContain('saturate');
	expect(telegramStyles.boxShadow).toContain('inset');
	expect(footerBorder).toBe('1px');
});
