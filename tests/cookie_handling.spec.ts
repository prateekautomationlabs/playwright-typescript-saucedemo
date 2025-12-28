import { test, expect } from '@playwright/test';

test('cookie setup', async ({ page }) => {
   await page.goto('https://www.saucedemo.com/');
   await page.getByPlaceholder('Username').fill('standard_user');
   await page.getByPlaceholder('Password').fill('secret_sauce');
   await page.getByRole('button',{name:'Login'}).click();
   await page.context().storageState({path:'auth.json'});
   

});

test('Validate Pre Login Using Cookie', async ({ page }) => {
   await page.goto('https://www.saucedemo.com/inventory.html');
   await expect(page.getByTestId('inventory-list')).toBeVisible();

  const inventoryList = page.getByTestId('inventory-list');
  const boltTee = inventoryList.getByTestId('inventory-item-name')
  .filter({hasText:'Sauce Labs Bolt T-Shirt'});

  await expect(boltTee).toBeVisible();

});