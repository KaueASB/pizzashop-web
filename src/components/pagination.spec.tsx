import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
  beforeEach(() => {
    onPageChangeCallback.mockClear()
  })
  it('should display the correct amount of pages and results', () => {
    const component = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {
          //
        }}
      />,
    )

    expect(component.getByText('Total de 200 item(s)')).toBeInTheDocument()
    expect(component.getByText('Página 1 de 20')).toBeInTheDocument()
  })

  it('should be able to navigate to the next page', async () => {
    const user = userEvent.setup()

    const component = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const nextPageButton = component.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(1)
    expect(onPageChangeCallback).toHaveBeenCalledTimes(1)
  })

  it('should be able to navigate to the previous page', async () => {
    const user = userEvent.setup()

    const component = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const previousPageButton = component.getByRole('button', {
      name: 'Página anterior',
    })

    await user.click(previousPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(4)
    expect(onPageChangeCallback).toHaveBeenCalledTimes(1)
  })

  it('should be able to navigate to the first page', async () => {
    const user = userEvent.setup()

    const component = render(
      <Pagination
        pageIndex={5}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const firstPageButton = component.getByRole('button', {
      name: 'Primeira página',
    })

    await user.click(firstPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(0)
    expect(onPageChangeCallback).toHaveBeenCalledTimes(1)
  })

  it('should be able to navigate to the last page', async () => {
    const user = userEvent.setup()

    const component = render(
      <Pagination
        pageIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallback}
      />,
    )

    const lastPageButton = component.getByRole('button', {
      name: 'Última página',
    })

    await user.click(lastPageButton)

    expect(onPageChangeCallback).toHaveBeenCalledWith(19)
    expect(onPageChangeCallback).toHaveBeenCalledTimes(1)
  })
})
