import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { NavLink } from './nav-link'

describe('NavLink', () => {
  it('should highlight the nav link when is the current page link', () => {
    const component = render(
      <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
        },
      },
    )

    expect(component.getByText('Home').dataset.current).toEqual('true')
    expect(component.getByText('About').dataset.current).toEqual('false')
  })
})
