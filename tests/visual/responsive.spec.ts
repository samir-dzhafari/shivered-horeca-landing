import {expect, test} from '@playwright/test';

const VIEWPORTS = [
	{width: 320, height: 568, name: '320'},
	{width: 375, height: 812, name: '375'},
	{width: 768, height: 1024, name: '768'},
	{width: 1024, height: 768, name: '1024'},
] as const;

for (const viewport of VIEWPORTS) {
	test(`no horizontal overflow at ${viewport.name}px`, async ({page}) => {
		await page.setViewportSize({width: viewport.width, height: viewport.height});
		await page.goto('/');
		await page.waitForLoadState('networkidle');

		const metrics = await page.evaluate(() => {
			const vw = window.innerWidth;
			const docOverflow =
				document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
			const overflowingSections = Array.from(
				document.querySelectorAll<HTMLElement>('main > *, [data-testid]'),
			)
				.filter((el) => {
					const rect = el.getBoundingClientRect();
					return rect.right > vw + 1 || rect.width > vw + 1;
				})
				.map((el) => ({
					testId: el.getAttribute('data-testid'),
					tag: el.tagName,
					width: Math.round(el.getBoundingClientRect().width),
				}));

			return {docOverflow, overflowingSections};
		});

		expect(metrics.docOverflow, `horizontal overflow at ${viewport.width}px`).toBe(false);
		expect(
			metrics.overflowingSections,
			`sections wider than viewport at ${viewport.width}px`,
		).toEqual([]);
	});
}
