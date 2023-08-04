import { CartItemType } from './reducer'

export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export interface RemoveItemFromCartProps {
  itemToRemoveId: string
  amountToRemove: number
}

export function addItemToCartAction(itemToAdd: CartItemType) {
  return {
    type: ActionType.ADD_ITEM,
    payload: {
      itemToAdd,
    },
  }
}

export function removeItemFromCartAction({
  itemToRemoveId,
  amountToRemove,
}: RemoveItemFromCartProps) {
  return {
    type: ActionType.REMOVE_ITEM,
    payload: {
      itemToRemoveId,
      amountToRemove,
    },
  }
}
