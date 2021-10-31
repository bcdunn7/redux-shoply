import { ADD_ITEM, REMOVE_ITEM } from './actionTypes';

export function addItem(id) {
    return {
        type: ADD_ITEM,
        itemId: id
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        itemId: id
    }
}