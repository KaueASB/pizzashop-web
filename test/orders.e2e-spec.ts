import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  expect(
    page.getByRole('cell', { name: 'customer-name-1', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'customer-name-10', exact: true }),
  ).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  expect(
    page.getByRole('cell', { name: 'customer-name-11', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'customer-name-20', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  expect(
    page.getByRole('cell', { name: 'customer-name-51', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'customer-name-60', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  expect(
    page.getByRole('cell', { name: 'customer-name-41', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'customer-name-50', exact: true }),
  ).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  expect(
    page.getByRole('cell', { name: 'customer-name-1', exact: true }),
  ).toBeVisible()

  expect(
    page.getByRole('cell', { name: 'customer-name-10', exact: true }),
  ).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('ID do pedido').fill('order-id-13')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(
    page.getByRole('cell', { name: 'order-id-13', exact: true }),
  ).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('customer-name-13')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  expect(
    page.getByRole('cell', { name: 'customer-name-13', exact: true }),
  ).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Cancelado').getByText('Cancelado').click()

  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  // const tableRows = page.getByRole('cell', { name: 'Cancelado'}).all()

  expect(page.getByText('Pendente')).not.toBeVisible()
  expect(page.getByText('Em preparo')).not.toBeVisible()
  expect(page.getByText('Em entrega')).not.toBeVisible()
  expect(page.getByText('Entregue')).not.toBeVisible()
})
