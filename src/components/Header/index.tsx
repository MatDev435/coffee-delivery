import { HeaderContainer, RightSide } from './styled'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
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
        </NavLink>
      </RightSide>
    </HeaderContainer>
  )
}
