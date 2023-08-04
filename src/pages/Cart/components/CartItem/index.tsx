import { useContext, useState } from 'react'
import { CartItemType } from '../../../../reducers/cartItems/reducer'
import {
  CartItemContainer,
  CartItemInfo,
  CartItemCounter,
  CartItemInfoHeader,
  CartItemInfoFooter,
} from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CartItemsContext } from '../../../../contexts/CartContext'

interface CartItemProps {
  cartItem: CartItemType
}

export function CartItem({ cartItem }: CartItemProps) {
  const [itemAmount, setItemAmount] = useState(1)

  const { removeItemFromCart } = useContext(CartItemsContext)

  function handleRemoveAmount() {
    if (itemAmount > 1) {
      setItemAmount((state) => {
        return state - 1
      })
    }
  }

  function handleAddAmount() {
    if (itemAmount < cartItem.amount) {
      setItemAmount((state) => {
        return state + 1
      })
    }
  }

  function handleRemoveItem() {
    removeItemFromCart({
      itemToRemoveId: cartItem.id,
      amountToRemove: itemAmount,
    })
  }

  const formatedPrice = String(cartItem.price).replace('.', ',').concat('0')

  return (
    <CartItemContainer>
      <div>
        <img src={cartItem.pictureSrc} alt="" />
      </div>

      <CartItemInfo>
        <CartItemInfoHeader>
          <h1>
            {cartItem.amount > 1
              ? `${cartItem.name} (${cartItem.amount})`
              : cartItem.name}
          </h1>

          <h2>R$ {formatedPrice}</h2>
        </CartItemInfoHeader>

        <CartItemInfoFooter>
          <CartItemCounter>
            <button onClick={handleRemoveAmount} type="button">
              <Minus size={14} />
            </button>

            <h1>{itemAmount}</h1>

            <button onClick={handleAddAmount} type="button">
              <Plus size={14} />
            </button>
          </CartItemCounter>

          <button onClick={handleRemoveItem} type="button">
            <Trash size={16} />
            REMOVER
          </button>
        </CartItemInfoFooter>
      </CartItemInfo>
    </CartItemContainer>
  )
}
