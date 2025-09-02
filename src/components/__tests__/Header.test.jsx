import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header Component', () => {
  it('renders the header with company name', () => {
    render(<Header />)
    expect(screen.getByText('Autonique')).toBeInTheDocument()
  })

  it('renders the logo image', () => {
    render(<Header />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('src')
  })

  it('renders all navigation links', () => {
    render(<Header />)

    const expectedLinks = [
      'الرئيسية',
      'الحلول السيبرانية',
      'خدماتنا',
      'من نحن؟',
      'تواصل معنا'
    ]

    expectedLinks.forEach(linkText => {
      expect(screen.getByText(linkText)).toBeInTheDocument()
    })
  })

  it('renders mobile menu button', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button')
    expect(menuButton).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    const menuButton = screen.getByRole('button')

    // Menu should be closed initially
    expect(screen.queryByText('الرئيسية')).toBeInTheDocument()

    // Click menu button
    fireEvent.click(menuButton)

    // Menu should be open now (mobile menu is always rendered but hidden with CSS)
    expect(screen.getAllByText('الرئيسية')).toHaveLength(2) // Desktop + mobile versions
  })

  it('has correct CSS classes for styling', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('fixed', 'top-0', 'left-0', 'right-0', 'z-50')
  })

  it('navigation links have correct href attributes', () => {
    render(<Header />)

    const homeLink = screen.getByText('الرئيسية')
    const solutionsLink = screen.getByText('الحلول السيبرانية')
    const servicesLink = screen.getByText('خدماتنا')
    const aboutLink = screen.getByText('من نحن؟')
    const contactLink = screen.getByText('تواصل معنا')

    expect(homeLink).toHaveAttribute('href', '#home')
    expect(solutionsLink).toHaveAttribute('href', '#solutions')
    expect(servicesLink).toHaveAttribute('href', '#services')
    expect(aboutLink).toHaveAttribute('href', '#about')
    expect(contactLink).toHaveAttribute('href', '#contact')
  })
})