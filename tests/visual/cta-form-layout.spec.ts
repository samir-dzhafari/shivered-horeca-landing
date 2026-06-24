import {expect, test} from '@playwright/test';

const VIEWPORTS = [1440, 1920] as const;

for (const width of VIEWPORTS) {
	test(`cta form width at ${width}px`, async ({page}) => {
		await page.setViewportSize({width, height: 1080});
		await page.goto('/#register');
		await page.waitForLoadState('networkidle');

		const cta = page.getByTestId('cta-section');
		await cta.scrollIntoViewIfNeeded();

		const metrics = await page.evaluate(() => {
			const section = document.querySelector('[data-testid="cta-section"]');
			const inner = section?.querySelector(':scope > div:last-of-type') as HTMLElement | undefined;
			const form = section?.querySelector('form') as HTMLElement | undefined;
			const input = section?.querySelector('input[name="name"]') as HTMLElement | undefined;

			if (!inner || !form || !input) {
				return {error: 'cta elements not found'};
			}

			return {
				formWidth: Math.round(form.getBoundingClientRect().width),
				inputWidth: Math.round(input.getBoundingClientRect().width),
			};
		});

		if ('error' in metrics) {
			throw new Error(metrics.error);
		}

		expect(metrics.formWidth, `form too narrow at ${width}px`).toBeGreaterThan(400);
		expect(metrics.inputWidth, `input too narrow at ${width}px`).toBeGreaterThan(150);
	});
}
