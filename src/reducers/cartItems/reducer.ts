import { produce } from 'immer'
import { ActionType } from './actions'

export interface CartItemType {
  id: string
  pictureSrc: string
  name: string
  price: number
  amount: number
}

interface CartItemState {
  cartItems: CartItemType[]
}

export function cartItemsReducer(state: CartItemState, action: any) {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      const cartItemIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.name === action.payload.itemToAdd.name
      })

      if (cartItemIndex >= 0) {
        return produce(state, (draft) => {
          draft.cartItems[cartItemIndex].amount +=
            action.payload.itemToAdd.amount
        })
      }

      return produce(state, (draft) => {
        draft.cartItems.push(action.payload.itemToAdd)
      })
    }

    case ActionType.REMOVE_ITEM: {
      const cartItemIndex = state.cartItems.findIndex((cartItem) => {
        return cartItem.id === action.payload.itemToRemoveId
      })

      if (cartItemIndex < 0) {
        return state
      }

      const currentCartItem = state.cartItems[cartItemIndex]

      if (currentCartItem.amount > action.payload.amountToRemove) {
        const amountRest =
          currentCartItem.amount - action.payload.amountToRemove

        return produce(state, (draft) => {
          draft.cartItems[cartItemIndex].amount = amountRest
        })
      }

      return produce(state, (draft) => {
        draft.cartItems.splice(cartItemIndex, 1)
      })
    }

    default:
      return state
  }
}
