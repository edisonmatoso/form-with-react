import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ScreenContext from './context/ScreenProvider/ScreenContext'
import App from './App'

describe('App component', () => {
  it('should mount component', () => {
    const isMobile = false
    createComponent(isMobile)
    const defaultText = screen.getByText(/Criar meu cadastro/i)
    expect(defaultText).toBeInTheDocument()
  })

  it('should render with the CoverArea when the screen width is bigger than 768 pixels', () => {
    const isMobile = false
    createComponent(isMobile)
    const coverText = screen.getByText(/Sideral Tecnologia/i)
    expect(coverText).toBeInTheDocument()
  })

  it('should render without the CoverArea when the screen width is smaller than 768 pixels', () => {
    const isMobile = true
    createComponent(isMobile)
    const coverText = screen.queryByText(/Sideral Tecnologia/i)
    expect(coverText).not.toBeInTheDocument()
  })

  it('should show a success message when the form is sent successfully', async () => {
    const isMobile = true
    const { container } = createComponent(isMobile)

    const email = container.querySelector("input[name='email']")
    const cpf = container.querySelector("input[name='cpf']")
    const birthday = container.querySelector("input[name='birthday']")
    const password = container.querySelector("input[name='password']")
    const privacyPolicy = container.querySelector("input[name='password']")

    fireEvent.input(email, {
      target: {
        value: 'meu@email.com'
      }
    })
    fireEvent.input(cpf, {
      target: {
        value: '111.111.111-11'
      }
    })
    fireEvent.input(birthday, {
      target: {
        value: '1111-11-11'
      }
    })
    fireEvent.input(password, {
      target: {
        value: '1111111'
      }
    })
    fireEvent.input(privacyPolicy, {
      target: {
        value: true
      }
    })

    fireEvent.click(screen.getByTestId('submitButton'))
    await waitFor(() =>
      expect(screen.getByTestId('successMessage')).toBeInTheDocument()
    )
  })
})

const createComponent = (isMobile) => {
  return render(
    <ScreenContext.Provider value={{ isMobile }}>
      <App />
    </ScreenContext.Provider>
  )
}
