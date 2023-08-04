import { CartItemType } from './reducer'

export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
}

export function addItem(itemToAdd: CartItemType) {
  return {
    type: ActionType.ADD_ITEM,
    payload: {
      itemToAdd,
    },
  }
}

export function removeItem(itemToRemove: CartItemType) {
  return {
    type: ActionType.REMOVE_ITEM,
    payload: {
      itemToRemove,
    },
  }
}
