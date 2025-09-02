import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AdminDashboard from '../AdminDashboard'

// Mock AuthContext
vi.mock('../../contexts/AuthContext', () => ({
  useAuth: () => ({
    currentUser: { email: 'admin@test.com' },
    logout: vi.fn(),
  }),
}))

// Mock React Router
const mockNavigate = vi.fn()
vi.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}))

// Mock Firebase
vi.mock('../../firebase/config', () => ({
  db: {},
}))

// Mock Firebase Firestore
vi.mock('firebase/firestore', () => ({
  doc: vi.fn(),
  getDoc: vi.fn(),
  updateDoc: vi.fn(),
  setDoc: vi.fn(),
  collection: vi.fn(),
  getDocs: vi.fn(),
  onSnapshot: vi.fn(() => vi.fn()),
}))

describe('AdminDashboard Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the admin dashboard header', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('لوحة تحكم المدير')).toBeInTheDocument()
  })

  it('displays admin email in header', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('admin@test.com')).toBeInTheDocument()
  })

  it('renders logout button', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('تسجيل الخروج')).toBeInTheDocument()
  })

  it('renders contact information section', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('معلومات التواصل')).toBeInTheDocument()
  })

  it('renders working hours section', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('ساعات العمل')).toBeInTheDocument()
  })

  it('renders form fields management section', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('إدارة حقول النموذج')).toBeInTheDocument()
  })

  it('renders footer management section', () => {
    render(<AdminDashboard />)
    expect(screen.getByText('إدارة الفوتر')).toBeInTheDocument()
  })

  it('allows adding new contact info item', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const addButton = screen.getByText('إضافة عنصر تواصل جديد')
    await user.click(addButton)

    // Check if new item is added (should show in preview)
    await waitFor(() => {
      expect(screen.getByText('عنصر جديد')).toBeInTheDocument()
    })
  })

  it('allows adding new working hours item', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const addButton = screen.getByText('إضافة فترة عمل جديدة')
    await user.click(addButton)

    // Check if new item is added
    await waitFor(() => {
      expect(screen.getByText('يوم جديد')).toBeInTheDocument()
    })
  })

  it('allows adding new form field', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const addButton = screen.getByText('إضافة حقل جديد')
    await user.click(addButton)

    // Check if new field is added
    await waitFor(() => {
      expect(screen.getByText('حقل جديد')).toBeInTheDocument()
    })
  })

  it('allows adding new social link', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const addButton = screen.getByText('إضافة منصة')
    await user.click(addButton)

    // Check if new social link is added
    await waitFor(() => {
      expect(screen.getByText('منصة جديدة')).toBeInTheDocument()
    })
  })

  it('allows adding new section link', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const addButtons = screen.getAllByText('إضافة رابط')
    await user.click(addButtons[0]) // Click first add link button

    // Check if new link is added
    await waitFor(() => {
      expect(screen.getByText('رابط جديد')).toBeInTheDocument()
    })
  })

  it('allows editing contact info labels', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const labelInputs = screen.getAllByPlaceholderText('اسم الحقل')
    await user.clear(labelInputs[0])
    await user.type(labelInputs[0], 'New Label')

    expect(labelInputs[0]).toHaveValue('New Label')
  })

  it('allows editing working hours labels', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const labelInputs = screen.getAllByPlaceholderText('اسم اليوم أو الفترة')
    await user.clear(labelInputs[0])
    await user.type(labelInputs[0], 'New Day')

    expect(labelInputs[0]).toHaveValue('New Day')
  })

  it('allows editing form field labels', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const labelInputs = screen.getAllByPlaceholderText('اسم الحقل')
    await user.clear(labelInputs[0])
    await user.type(labelInputs[0], 'New Field')

    expect(labelInputs[0]).toHaveValue('New Field')
  })

  it('allows changing field types', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const typeSelects = screen.getAllByDisplayValue('نص')
    await user.selectOptions(typeSelects[0], 'email')

    expect(typeSelects[0]).toHaveValue('email')
  })

  it('allows changing icon types', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const iconSelects = screen.getAllByDisplayValue(/📞 الهاتف/)
    await user.selectOptions(iconSelects[0], 'email')

    expect(iconSelects[0]).toHaveValue('email')
  })

  it('allows toggling working hours visibility', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const toggleButton = screen.getByRole('button', { name: /إظهار القسم/i })
    await user.click(toggleButton)

    // The toggle should change state
    expect(toggleButton).toBeInTheDocument()
  })

  it('allows editing company info', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const companyNameInput = screen.getByPlaceholderText('اسم الشركة')
    await user.clear(companyNameInput)
    await user.type(companyNameInput, 'New Company Name')

    expect(companyNameInput).toHaveValue('New Company Name')
  })

  it('allows editing company description', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const descriptionTextarea = screen.getByPlaceholderText('وصف الشركة')
    await user.clear(descriptionTextarea)
    await user.type(descriptionTextarea, 'New company description')

    expect(descriptionTextarea).toHaveValue('New company description')
  })

  it('allows editing copyright text', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const copyrightInput = screen.getByPlaceholderText('جميع الحقوق محفوظة.')
    await user.clear(copyrightInput)
    await user.type(copyrightInput, 'New copyright text')

    expect(copyrightInput).toHaveValue('New copyright text')
  })

  it('allows editing social link names', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const socialNameInputs = screen.getAllByPlaceholderText('اسم المنصة')
    await user.clear(socialNameInputs[0])
    await user.type(socialNameInputs[0], 'New Platform')

    expect(socialNameInputs[0]).toHaveValue('New Platform')
  })

  it('allows editing social link URLs', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const urlInputs = screen.getAllByPlaceholderText('https://')
    await user.clear(urlInputs[0])
    await user.type(urlInputs[0], 'https://newplatform.com')

    expect(urlInputs[0]).toHaveValue('https://newplatform.com')
  })

  it('allows changing social link icons', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const iconSelects = screen.getAllByDisplayValue('LinkedIn')
    await user.selectOptions(iconSelects[0], 'twitter')

    expect(iconSelects[0]).toHaveValue('twitter')
  })

  it('allows editing section titles', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const titleInputs = screen.getAllByPlaceholderText('عنوان القسم')
    await user.clear(titleInputs[0])
    await user.type(titleInputs[0], 'New Section Title')

    expect(titleInputs[0]).toHaveValue('New Section Title')
  })

  it('allows editing section link names', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const linkNameInputs = screen.getAllByPlaceholderText('اسم الرابط')
    await user.clear(linkNameInputs[0])
    await user.type(linkNameInputs[0], 'New Link Name')

    expect(linkNameInputs[0]).toHaveValue('New Link Name')
  })

  it('allows editing section link URLs', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const linkUrlInputs = screen.getAllByPlaceholderText('#')
    await user.clear(linkUrlInputs[0])
    await user.type(linkUrlInputs[0], '#new-link')

    expect(linkUrlInputs[0]).toHaveValue('#new-link')
  })

  it('shows save buttons for each section', () => {
    render(<AdminDashboard />)

    const saveButtons = screen.getAllByText(/حفظ/)
    expect(saveButtons.length).toBeGreaterThan(0)
  })

  it('shows preview sections', () => {
    render(<AdminDashboard />)

    expect(screen.getByText('معاينة المعلومات')).toBeInTheDocument()
    expect(screen.getByText('معاينة ساعات العمل')).toBeInTheDocument()
    expect(screen.getByText('معاينة النموذج')).toBeInTheDocument()
  })

  it('handles logout correctly', async () => {
    const user = userEvent.setup()
    render(<AdminDashboard />)

    const logoutButton = screen.getByText('تسجيل الخروج')
    await user.click(logoutButton)

    // Should navigate to login page
    expect(mockNavigate).toHaveBeenCalledWith('/admin/login')
  })
})