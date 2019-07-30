import * as types from '../actions/actionTypes';

const initialState = []

export default function itemReducer(state = initialState, action) {

  switch(action.type) {
    case types.FETCH_ITEMS_SUCCESS:
      return action.items
    default:
      return state
  }

}
