import * as types from './actionTypes'
import ItemApi from '../api/ItemApi'


export function fetchItemsSuccess(items) {
  return {type: 'FETCH_ITEMS_SUCCESS', items}
}

export function fetchItems() {
  return function(dispatch) {
    return ItemApi.fetchItems().then(items => {
      dispatch(fetchItemsSuccess(items))
    }).catch(error => {
      throw(error)
    })
  }
}
