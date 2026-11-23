import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('comeca com zero favoritos', async ({ page }) => {
  await expect(page.getByTestId('contador-favoritos')).toHaveText('♥ 0');
  await expect(page.getByRole('button', { name: 'Favoritar Lumina Pro' })).toHaveAttribute('aria-pressed', 'false');
});

test('favoritar um plano atualiza o botao e o contador', async ({ page }) => {
  await page.getByRole('button', { name: 'Favoritar Lumina Pro' }).click();

  const botao = page.getByRole('button', { name: 'Remover Lumina Pro dos favoritos' });
  await expect(botao).toHaveAttribute('aria-pressed', 'true');
  await expect(botao).toHaveText('♥ Favoritado');
  await expect(page.getByTestId('contador-favoritos')).toHaveText('♥ 1');
});

test('clicar de novo remove o plano dos favoritos', async ({ page }) => {
  await page.getByRole('button', { name: 'Favoritar Lumina Pro' }).click();
  await page.getByRole('button', { name: 'Remover Lumina Pro dos favoritos' }).click();

  await expect(page.getByRole('button', { name: 'Favoritar Lumina Pro' })).toHaveAttribute('aria-pressed', 'false');
  await expect(page.getByTestId('contador-favoritos')).toHaveText('♥ 0');
});

test('favoritar varios planos funciona de forma independente', async ({ page }) => {
  await page.getByRole('button', { name: 'Favoritar Lumina Essencial' }).click();
  await page.getByRole('button', { name: 'Favoritar Lumina Studio' }).click();

  await expect(page.getByTestId('contador-favoritos')).toHaveText('♥ 2');
  await expect(page.getByRole('button', { name: 'Favoritar Lumina Pro' })).toHaveAttribute('aria-pressed', 'false');

  await page.getByRole('button', { name: 'Remover Lumina Essencial dos favoritos' }).click();
  await expect(page.getByTestId('contador-favoritos')).toHaveText('♥ 1');
  await expect(page.getByRole('button', { name: 'Remover Lumina Studio dos favoritos' })).toHaveAttribute('aria-pressed', 'true');
});

test('favoritos continuam depois de recarregar a pagina', async ({ page }) => {
  await page.getByRole('button', { name: 'Favoritar Lumina Pro' }).click();
  await page.reload();

  await expect(page.getByTestId('contador-favoritos')).toHaveText('♥ 1');
  await expect(page.getByRole('button', { name: 'Remover Lumina Pro dos favoritos' })).toHaveAttribute('aria-pressed', 'true');
});