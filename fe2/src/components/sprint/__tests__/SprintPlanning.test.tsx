import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SprintPlanning from '../SprintPlanning'

describe('SprintPlanning', () => {
  it('renders sprint planning component correctly', () => {
    render(<SprintPlanning />)
    
    expect(screen.getByText('Sprint Planning')).toBeInTheDocument()
    expect(screen.getByText('Product Backlog')).toBeInTheDocument()
    expect(screen.getByText('Current Sprint')).toBeInTheDocument()
  })

  it('displays initial stories in correct sections', () => {
    render(<SprintPlanning />)
    
    // Check backlog items
    expect(screen.getByText('Implement user authentication')).toBeInTheDocument()
    expect(screen.getByText('Add login and registration functionality with JWT tokens')).toBeInTheDocument()
    
    // Check sprint items
    expect(screen.getByText('Create sprint board UI')).toBeInTheDocument()
    expect(screen.getByText('Design and implement the drag-and-drop sprint board interface')).toBeInTheDocument()
  })

  it('adds a new story to backlog', async () => {
    render(<SprintPlanning />)
    
    // Fill in the form
    await userEvent.type(screen.getByPlaceholderText('Story title'), 'New Feature')
    await userEvent.type(screen.getByPlaceholderText('Description'), 'Implement new feature')
    await userEvent.type(screen.getByPlaceholderText('Story points'), '3')
    await userEvent.selectOptions(screen.getByRole('combobox'), 'high')

    // Submit the form
    fireEvent.click(screen.getByText('Add Story'))

    // Check if the new story appears
    expect(screen.getByText('New Feature')).toBeInTheDocument()
    expect(screen.getByText('Implement new feature')).toBeInTheDocument()
  })

  it('moves story from backlog to sprint', async () => {
    render(<SprintPlanning />)
    
    const moveButton = screen.getAllByText('Move to Sprint →')[0]
    fireEvent.click(moveButton)

    await waitFor(() => {
      // Check if the story appears in sprint section
      const sprintSection = screen.getByText('Current Sprint').parentElement
      expect(sprintSection).toContainElement(screen.getByText('Implement user authentication'))
    })
  })

  it('moves story from sprint to backlog', async () => {
    render(<SprintPlanning />)
    
    const moveButton = screen.getByText('← Move to Backlog')
    fireEvent.click(moveButton)

    await waitFor(() => {
      // Check if the story appears in backlog section
      const backlogSection = screen.getByText('Product Backlog').parentElement
      expect(backlogSection).toContainElement(screen.getByText('Create sprint board UI'))
    })
  })

  it('validates form inputs before adding story', async () => {
    render(<SprintPlanning />)
    
    // Try to submit without title
    fireEvent.click(screen.getByText('Add Story'))
    expect(screen.queryByText('New Story')).not.toBeInTheDocument()

    // Add only title
    await userEvent.type(screen.getByPlaceholderText('Story title'), 'New Story')
    fireEvent.click(screen.getByText('Add Story'))
    expect(screen.queryByText('New Story')).not.toBeInTheDocument()

    // Add description to make it valid
    await userEvent.type(screen.getByPlaceholderText('Description'), 'Description')
    fireEvent.click(screen.getByText('Add Story'))
    expect(screen.getByText('New Story')).toBeInTheDocument()
  })

  it('displays story points and priority correctly', async () => {
    render(<SprintPlanning />)
    
    // Add a new story with points and priority
    await userEvent.type(screen.getByPlaceholderText('Story title'), 'Prioritized Story')
    await userEvent.type(screen.getByPlaceholderText('Description'), 'Important task')
    await userEvent.type(screen.getByPlaceholderText('Story points'), '5')
    await userEvent.selectOptions(screen.getByRole('combobox'), 'high')
    fireEvent.click(screen.getByText('Add Story'))

    // Check if points and priority are displayed
    expect(screen.getByText('5 points')).toBeInTheDocument()
    expect(screen.getByText('high')).toBeInTheDocument()
  })

  it('clears form after successful story addition', async () => {
    render(<SprintPlanning />)
    
    // Fill and submit form
    await userEvent.type(screen.getByPlaceholderText('Story title'), 'Test Story')
    await userEvent.type(screen.getByPlaceholderText('Description'), 'Test Description')
    await userEvent.type(screen.getByPlaceholderText('Story points'), '3')
    fireEvent.click(screen.getByText('Add Story'))

    // Check if form is cleared
    expect(screen.getByPlaceholderText('Story title')).toHaveValue('')
    expect(screen.getByPlaceholderText('Description')).toHaveValue('')
    expect(screen.getByPlaceholderText('Story points')).toHaveValue(0)
  })
}) 