import { createContext, ReactNode, useReducer } from 'react'
import { CartItemType, cartItemsReducer } from '../reducers/cartItems/reducer'
import { addItem } from '../reducers/cartItems/actions'

interface addNewItemType {
  pictureSrc: string
  name: string
  price: number
  amount: number
}

interface CartContextProps {
  cartItems: CartItemType[]
  addItemToCart: (itemToAdd: addNewItemType) => void
}

export const CartItemsContext = createContext({} as CartContextProps)

interface CartCntextProvider {
  children: ReactNode
}

export function CartItemsContextProvider({ children }: CartCntextProvider) {
  const [cartItemsState, dispatch] = useReducer(cartItemsReducer, {
    cartItems: [],
  })

  const { cartItems } = cartItemsState

  function addItemToCart(itemToAdd: addNewItemType) {
    const id = String(new Date().getTime())

    const item: CartItemType = {
      id,
      pictureSrc: itemToAdd.pictureSrc,
      name: itemToAdd.name,
      price: itemToAdd.price,
      amount: itemToAdd.amount,
    }

    dispatch(addItem(item))
  }

  return (
    <CartItemsContext.Provider value={{ cartItems, addItemToCart }}>
      {children}
    </CartItemsContext.Provider>
  )
}
