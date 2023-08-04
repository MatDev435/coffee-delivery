import { useContext } from 'react'
import { HeaderContainer, RightSide } from './styled'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { CartItemsContext } from '../../contexts/CartContext'

export function Header() {
  const { cartItems } = useContext(CartItemsContext)

  const totalItemsInCart = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.amount
  }, 0)

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
      </div>

      <RightSide>
        <p>
          <MapPin size={22} />
          Porto Alegre, RS
        </p>

        <NavLink to="/cart">
          <ShoppingCart size={22} />
          {totalItemsInCart > 0 && <span>{totalItemsInCart}</span>}
        </NavLink>
      </RightSide>
    </HeaderContainer>
  )
}
