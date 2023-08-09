import { createContext, ReactNode, useReducer, useEffect } from 'react'
import { CartItemType, cartItemsReducer } from '../reducers/cartItems/reducer'
import {
  addItemToCartAction,
  removeItemFromCartAction,
  RemoveItemFromCartProps,
} from '../reducers/cartItems/actions'

interface addNewItemType {
  pictureSrc: string
  name: string
  price: number
  amount: number
}

interface CartContextProps {
  cartItems: CartItemType[]
  addItemToCart: (itemToAdd: addNewItemType) => void
  removeItemFromCart: ({
    itemToRemoveId,
    amountToRemove,
  }: RemoveItemFromCartProps) => void
}

export const CartItemsContext = createContext({} as CartContextProps)

interface CartCntextProvider {
  children: ReactNode
}

export function CartItemsContextProvider({ children }: CartCntextProvider) {
  const [cartItemsState, dispatch] = useReducer(
    cartItemsReducer,
    {
      cartItems: [],
    },
    (initialState) => {
      const storedCartItemsAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-items-1.0.0',
      )

      if (storedCartItemsAsJSON) {
        return JSON.parse(storedCartItemsAsJSON)
      }

      return initialState
    },
  )

  const { cartItems } = cartItemsState

  useEffect(() => {
    const stateJSON = JSON.stringify(cartItemsState)

    localStorage.setItem('@coffee-delivery:cart-items-1.0.0', stateJSON)
  }, [cartItemsState])

  function addItemToCart(itemToAdd: addNewItemType) {
    const id = String(new Date().getTime())

    const item: CartItemType = {
      id,
      pictureSrc: itemToAdd.pictureSrc,
      name: itemToAdd.name,
      price: itemToAdd.price,
      amount: itemToAdd.amount,
    }

    dispatch(addItemToCartAction(item))
  }

  function removeItemFromCart({
    itemToRemoveId,
    amountToRemove,
  }: RemoveItemFromCartProps) {
    dispatch(
      removeItemFromCartAction({
        itemToRemoveId,
        amountToRemove,
      }),
    )
  }

  return (
    <CartItemsContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartItemsContext.Provider>
  )
}
