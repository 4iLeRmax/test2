import { omit } from 'lodash';

import { ADD_PERSON_TO_FAVOURITE, REMOVE_PERSON_FROM_FAVOURITE } from "../constants/actionTypes";
import { getLocalStorage } from '../../utils/localStorage';


const initialState = getLocalStorage('store');

export const favouriteReducer = (state = initialState, {type, payload})=>{
  switch (type) {
    case ADD_PERSON_TO_FAVOURITE:
      return {
        ...state, 
        ...payload
      }
    case REMOVE_PERSON_FROM_FAVOURITE:
      return omit(state, [payload])
    default:
      return state
  }
}