import { expect, test } from '@playwright/test';

test.describe('Test E2E Policy Category', () => {
  test('Search Policy Category', async ({ page }) => {
    await page.goto('https://itsam01.deha.vn/category');
    await page.evaluate(() => {
      localStorage.setItem(
        'token',
        '65|Z1DkLFFFht94ZQ9bVSq30ZUYsA24DTNRh0liZzqX936f2cf6',
      );
      localStorage.setItem(
        'user',
        '{"id":4,"name":"Trần Ngọc Nam","email":"namtn@deha-soft.com","avatar":"https://lh3.googleusercontent.com/a/ACg8ocIyZCJKV0UsKQWf8e5ie1uZXlnbObvLkoXpoNzfNzYLQkgdGA=s96-c","create_by":"Namtn"}',
      );
    });
    const searchInput = page.locator('input[placeholder="Search..."]');
    await searchInput.fill('Onsite');
    const searchResult = page.locator('text=Onsite');
    await expect(searchResult).toBeVisible();
    const otherResults = page.locator('tbody tr');
    await expect(otherResults).toHaveCount(1);
  });
});
