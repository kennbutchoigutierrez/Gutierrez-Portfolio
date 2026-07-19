import { defineConfig, devices } from '@playwright/test';

// Serves the static portfolio on a loopback port and runs the tests in
// tests/ against it. If a dev server is already running on the port, it's
// reused; otherwise Playwright starts one with Python's http.server.

const PORT = 8000;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'html',

  use: {
    baseURL,
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
    // Mobile Safari (WebKit) is available but omitted by default — WebKit's
    // headless launch is flaky on Windows. Add it back on macOS/Linux/CI:
    // { name: 'Mobile Safari', use: { ...devices['iPhone 13'] } },
  ],

  webServer: {
    command: `python -m http.server ${PORT} --bind 127.0.0.1`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
