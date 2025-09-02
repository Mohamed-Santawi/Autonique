import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../Contact'

// Mock Firebase
vi.mock('../../firebase/config', () => ({
  db: {},
}))

// Mock Firebase Firestore
vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  onSnapshot: vi.fn(() => vi.fn()), // Returns unsubscribe function
}))

describe('Contact Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
  })

  it('renders the contact section with title', () => {
    render(<Contact />)
    expect(screen.getByText('تواصل معنا')).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByText('أرسل لنا رسالة')).toBeInTheDocument()
  })

  it('renders form fields with correct labels', () => {
    render(<Contact />)

    const expectedFields = [
      'الاسم الأول',
      'اسم العائلة',
      'البريد الإلكتروني',
      'رقم الهاتف',
      'الشركة',
      'الرسالة'
    ]

    expectedFields.forEach(fieldLabel => {
      expect(screen.getByText(fieldLabel)).toBeInTheDocument()
    })
  })

  it('renders contact information section', () => {
    render(<Contact />)
    expect(screen.getByText('معلومات التواصل')).toBeInTheDocument()
  })

  it('renders working hours section when enabled', () => {
    render(<Contact />)
    expect(screen.getByText('ساعات العمل')).toBeInTheDocument()
  })

    it('form fields are required when specified', () => {
    render(<Contact />)

    const firstNameInput = screen.getByLabelText(/الاسم الأول/)
    const lastNameInput = screen.getByLabelText(/اسم العائلة/)
    const emailInput = screen.getByLabelText(/البريد الإلكتروني/)
    const phoneInput = screen.getByLabelText(/رقم الهاتف/)
    const messageInput = screen.getByLabelText(/الرسالة/)

    expect(firstNameInput).toBeRequired()
    expect(lastNameInput).toBeRequired()
    expect(emailInput).toBeRequired()
    expect(phoneInput).toBeRequired()
    expect(messageInput).toBeRequired()
  })

  it('company field is not required', () => {
    render(<Contact />)
    const companyInput = screen.getByLabelText(/الشركة/)
    expect(companyInput).not.toBeRequired()
  })

  it('shows email client selection modal when form is submitted', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    // Fill in required fields
    await user.type(screen.getByLabelText(/الاسم الأول/), 'John')
    await user.type(screen.getByLabelText(/اسم العائلة/), 'Doe')
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com')
    await user.type(screen.getByLabelText(/رقم الهاتف/), '123456789')
    await user.type(screen.getByLabelText(/الرسالة/), 'Test message')

    // Submit form
    const submitButton = screen.getByText('إرسال الرسالة')
    await user.click(submitButton)

    // Check if email modal appears
    await waitFor(() => {
      expect(screen.getByText('اختر بريدك الإلكتروني')).toBeInTheDocument()
    })
  })

  it('displays email client options in modal', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    // Fill and submit form
    await user.type(screen.getByLabelText('الاسم الأول *'), 'John')
    await user.type(screen.getByLabelText('اسم العائلة *'), 'Doe')
    await user.type(screen.getByLabelText('البريد الإلكتروني *'), 'john@example.com')
    await user.type(screen.getByLabelText('رقم الهاتف *'), '123456789')
    await user.type(screen.getByLabelText('الرسالة *'), 'Test message')

    await user.click(screen.getByText('إرسال الرسالة'))

    await waitFor(() => {
      expect(screen.getByText('Gmail')).toBeInTheDocument()
      expect(screen.getByText('Outlook')).toBeInTheDocument()
      expect(screen.getByText('Yahoo Mail')).toBeInTheDocument()
      expect(screen.getByText('Default Email Client')).toBeInTheDocument()
    })
  })

  it('closes modal when cancel button is clicked', async () => {
    const user = userEvent.setup()
    render(<Contact />)

        // Fill and submit form
    await user.type(screen.getByLabelText(/الاسم الأول/), 'John')
    await user.type(screen.getByLabelText(/اسم العائلة/), 'Doe')
    await user.type(screen.getByLabelText(/البريد الإلكتروني/), 'john@example.com')
    await user.type(screen.getByLabelText(/رقم الهاتف/), '123456789')
    await user.type(screen.getByLabelText(/الرسالة/), 'Test message')

    await user.click(screen.getByText('إرسال الرسالة'))

    await waitFor(() => {
      expect(screen.getByText('اختر بريدك الإلكتروني')).toBeInTheDocument()
    })

    // Click cancel
    await user.click(screen.getByText('إلغاء'))

    await waitFor(() => {
      expect(screen.queryByText('اختر بريدك الإلكتروني')).not.toBeInTheDocument()
    })
  })

  it('validates email format', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const emailInput = screen.getByLabelText(/البريد الإلكتروني/)

    // Enter invalid email
    await user.type(emailInput, 'invalid-email')

    // Check if input has email validation
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('validates phone number format', () => {
    render(<Contact />)

    const phoneInput = screen.getByLabelText(/رقم الهاتف/)

    // Check if input has tel validation
    expect(phoneInput).toHaveAttribute('type', 'tel')
  })

  it('message field is a textarea', () => {
    render(<Contact />)
    const messageField = screen.getByLabelText(/الرسالة/)
    expect(messageField.tagName).toBe('TEXTAREA')
  })

  it('form resets after successful submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    // Fill form
    const firstNameInput = screen.getByLabelText(/الاسم الأول/)
    const lastNameInput = screen.getByLabelText(/اسم العائلة/)
    const emailInput = screen.getByLabelText(/البريد الإلكتروني/)
    const phoneInput = screen.getByLabelText(/رقم الهاتف/)
    const messageInput = screen.getByLabelText(/الرسالة/)

    await user.type(firstNameInput, 'John')
    await user.type(lastNameInput, 'Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(phoneInput, '123456789')
    await user.type(messageInput, 'Test message')

    // Submit form
    await user.click(screen.getByText('إرسال الرسالة'))

    // Select an email client
    await waitFor(() => {
      expect(screen.getByText('Gmail')).toBeInTheDocument()
    })

    // Mock window.open
    const mockOpen = vi.fn()
    window.open = mockOpen

    await user.click(screen.getByText('Gmail'))

    // Check if form is reset
    await waitFor(() => {
      expect(firstNameInput).toHaveValue('')
      expect(lastNameInput).toHaveValue('')
      expect(emailInput).toHaveValue('')
      expect(phoneInput).toHaveValue('')
      expect(messageInput).toHaveValue('')
    })
  })
})