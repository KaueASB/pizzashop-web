import { expect, test } from '@playwright/test'

test('sign-up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
  await page.getByLabel('Seu nome').fill('Ada Lovelace')
  await page.getByLabel('Seu e-mail').fill('ada@example.com')
  await page.getByLabel('Seu telefone').fill('11987878645')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  expect(page.getByText('Restaurante cadastrado com sucesso!')).toBeVisible()

  await page.getByRole('button', { name: 'Login' }).click()

  expect(page.url()).toContain('sign-in?email=ada@example.com')
  expect(await page.getByLabel('Seu e-mail').inputValue()).toEqual(
    'ada@example.com',
  )
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByLabel('Nome do estabelecimento').fill('Invalid name')
  await page.getByLabel('Seu nome').fill('Ada Lovelace')
  await page.getByLabel('Seu e-mail').fill('ada@example.com')
  await page.getByLabel('Seu telefone').fill('11987878645')

  await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
  // await page.waitForTimeout(1000)
})
