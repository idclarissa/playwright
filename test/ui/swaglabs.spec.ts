import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  });

test.describe('acess link', () => {
  test('should allow me to add todo items', async ({ page }) => {
    const newTodo = page.getByPlaceholder('Accepted usernames are:');
    });

  test.describe('ignore spam', () => {
    test('should allow me to add todo items', async ({ page }) => {
      const spam = page.on('dialog', dialog => console.log(dialog.message()));
    
      await page.getByRole('button').click();
    });

  test.describe('add products in car', () => {
    test('add products in car', async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.fill('#user-name', 'standard_user');
      await page.fill('#password', 'secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();
      });
    });
  });
});

