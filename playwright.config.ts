import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
	testDir: './tests',
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 2 : 0,
	reporter: 'list',
	snapshotPathTemplate: '{testDir}/screenshots/{projectName}/{arg}{ext}',
	use: {
		baseURL: 'http://localhost:3000',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'desktop',
			use: {
				...devices['Desktop Chrome'],
				viewport: {width: 1920, height: 1080},
			},
		},
		{
			name: 'tablet',
			use: {
				...devices['Desktop Chrome'],
				viewport: {width: 768, height: 1024},
			},
		},
		{
			name: 'mobile',
			use: {
				...devices['Pixel 5'],
				viewport: {width: 375, height: 812},
			},
		},
	],
	webServer: {
		command: 'npm run dev',
		url: 'http://localhost:3000',
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
});
