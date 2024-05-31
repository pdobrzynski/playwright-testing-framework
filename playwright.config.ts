import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
import { Env } from '@shared/utils/env';

if (process.env.ENVIRONMENT) {
  console.log("ENVIRONMENT: ", process.env.ENVIRONMENT);
  config({
    path: `.env.${process.env.ENVIRONMENT}`,
    override: true,
  });
} else {
  config();
}

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "allure-results",
        suiteTitle: false,
      },     
    ], ["./shared/testrail/TestRailReporter.ts"]
  ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: Env.URL,
    launchOptions: {
      headless: true,
      args: [
        "--auth-server-allowlist=\"\"",
     ],
    },
    extraHTTPHeaders: {
      'Authorization': Env.API_TOKEN,
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: 
      { 
        ...devices['Desktop Chrome'],
      },
    },

  ],
});
