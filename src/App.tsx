import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { CartItemsContextProvider } from './contexts/CartContext'
import { AdressContextProvider } from './contexts/AdressContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AdressContextProvider>
          <CartItemsContextProvider>
            <Router />
          </CartItemsContextProvider>
        </AdressContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
