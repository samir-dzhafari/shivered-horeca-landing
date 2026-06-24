import {expect, test} from '@playwright/test';

const VIEWPORTS = [1440, 1280, 1200, 1100, 1024, 768] as const;

for (const width of VIEWPORTS) {
	test(`how-it-works layout metrics at ${width}px`, async ({page}) => {
		await page.setViewportSize({width, height: 900});
		await page.goto('/');
		await page.waitForLoadState('networkidle');

		const section = page.getByTestId('how-it-works-section');
		await section.scrollIntoViewIfNeeded();

		const metrics = await page.evaluate(() => {
			const sectionEl = document.querySelector('[data-testid="how-it-works-section"]');
			const inner = sectionEl?.children[0] as HTMLElement | undefined;
			const text = inner?.children[0] as HTMLElement | undefined;
			const chat = inner?.children[1] as HTMLElement | undefined;

			if (!inner || !text || !chat) {
				return {error: 'elements not found'};
			}

			const innerRect = inner.getBoundingClientRect();
			const textRect = text.getBoundingClientRect();
			const chatRect = chat.getBoundingClientRect();

			const horizontalOverlap = Math.max(0, textRect.right - chatRect.left);
			const chatOverflowRight = Math.max(0, chatRect.right - innerRect.right);
			const gap = chatRect.left - textRect.right;

			return {
				horizontalOverlap: Math.round(horizontalOverlap),
				chatOverflowRight: Math.round(chatOverflowRight),
				gap: Math.round(gap),
				verticalOffset: Math.round(chatRect.top - textRect.bottom),
			};
		});

		if ('error' in metrics) {
			throw new Error(metrics.error);
		}

		const isStacked = metrics.verticalOffset >= 0;

		if (!isStacked) {
			expect(metrics.horizontalOverlap, `text/chat overlap at ${width}px`).toBeLessThanOrEqual(1);
			expect(metrics.gap, `text/chat gap at ${width}px`).toBeGreaterThanOrEqual(0);
		}

		expect(metrics.chatOverflowRight, `chat overflow at ${width}px`).toBeLessThanOrEqual(1);
	});
}
