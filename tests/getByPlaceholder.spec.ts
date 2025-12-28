import { test, expect } from '@playwright/test';
import { Test_DATA } from './fixtures/testData';
import {LoginPage} from './pages/loginPage';
import {InventoryPage} from './pages/inventoryPage';

test('validate the list is not empty', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigateToLoginPage(Test_DATA.BASE_URL);
  await loginPage.login(Test_DATA.CREDENTIALS.USERNAME, Test_DATA.CREDENTIALS.PASSWORD);
  
  await inventoryPage.verifyInventoryListVisible();
  
  const count = await inventoryPage.getInventoryItemCount();
  expect(count).toBeGreaterThan(0);
});