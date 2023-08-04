import { CartItemType } from '../../../../reducers/cartItems/reducer'
import {
  CartItemContainer,
  CartItemInfo,
  CartItemCounter,
  CartItemInfoHeader,
  CartItemInfoFooter,
} from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'

interface CartItemProps {
  cartItem: CartItemType
}

export function CartItem({ cartItem }: CartItemProps) {
  const formatedPrice = String(cartItem.price).replace('.', ',').concat('0')

  return (
    <CartItemContainer>
      <div>
        <img src={cartItem.pictureSrc} alt="" />
      </div>

      <CartItemInfo>
        <CartItemInfoHeader>
          <h1>{cartItem.name}</h1>

          <h2>R$ {formatedPrice}</h2>
        </CartItemInfoHeader>

        <CartItemInfoFooter>
          <CartItemCounter>
            <button type="button">
              <Minus size={14} />
            </button>

            <h1>{cartItem.amount}</h1>

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
