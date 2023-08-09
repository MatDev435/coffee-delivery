import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Router } from './Router'
import { CartItemsContextProvider } from './contexts/CartContext'
import { DeliveryInfoContextProvider } from './contexts/DeliveryInfoContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DeliveryInfoContextProvider>
          <CartItemsContextProvider>
            <Router />
          </CartItemsContextProvider>
        </DeliveryInfoContextProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
