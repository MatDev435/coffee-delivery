import {
  CartItemContainer,
  CartItemInfo,
  CartItemCounter,
  CartItemInfoHeader,
  CartItemInfoFooter,
} from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

import expresso from '../../../../assets/expresso.png'

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <img src={expresso} alt="" />
      </div>

      <CartItemInfo>
        <CartItemInfoHeader>
          <h1>Expresso Tradicional</h1>

          <h2>R$ 9,90</h2>
        </CartItemInfoHeader>

        <CartItemInfoFooter>
          <CartItemCounter>
            <button type="button">
              <Minus size={14} />
            </button>

            <h1>1</h1>

            <button type="button">
              <Plus size={14} />
            </button>
          </CartItemCounter>

          <button type="button">
            <Trash size={16} />
            REMOVER
          </button>
        </CartItemInfoFooter>
      </CartItemInfo>
    </CartItemContainer>
  )
}
