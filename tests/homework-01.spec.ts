import { test, expect } from '@playwright/test';

test('Verify page title ', async ({ page }) => {
  test.step('Navigate to the target website', async() =>{
    //await page.goto('https://e-commerce.betterbytesvn.com/');
    await page.goto('https://google.com/');
  });

  test.step('Verify title', async() =>{
    await expect(page).toHaveTitle('E-commerce site for automation testing');
  });
});
