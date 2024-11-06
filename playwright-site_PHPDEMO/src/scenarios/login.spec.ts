import { test, expect } from '@playwright/test';

test('login na demo do PHPTravels', async ({ page }) => {
  // Acesse a URL da página de demonstração do PHPTravels
  await page.goto('https://phptravels.com/demo/');

  // Clique no botão de login para abrir o formulário
  await page.click('text=Login');

  // Preencha o formulário de login com as credenciais
  await page.fill('input[name="email"]', 'user@phptravels.com');
  await page.fill('input[name="password"]', 'demouser');

  // Clique no botão de login
  await page.click('button[type="submit"]');

  // Aguarde a navegação para a página de dashboard
  await page.waitForURL('https://phptravels.com/demo/account/');

  // Verifique se o usuário foi redirecionado para a página de conta
  await expect(page).toHaveURL('https://phptravels.com/demo/account/');

  // Verifique se o nome de usuário aparece na página após o login
  await expect(page.locator('h3:has-text("Hello, User")')).toBeVisible();
});
