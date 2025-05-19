import { test, expect, APIRequestContext } from '@playwright/test';



test('has title', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByText('Products');
  await page.getByTestId('add-to-cart-sauce-labs-backpack').nth(0).isVisible();
  await page.getByText('Add to cart').nth(0).click();
});

test('deve remover todos os botões Remove', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  const botaoRemove = page.locator('button', { hasText: 'Remove' });
  while (await botaoRemove.count() > 0) {
    await botaoRemove.first().click();
    await page.waitForTimeout(200);
  }

  expect(await botaoRemove.count()).toBe(0);
});

