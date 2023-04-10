import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import  thunk from 'redux-thunk';
// import { configureStore } from 'redux';
import { rootReducer } from './reducers';
import { setLocalStorage } from '../utils/localStorage';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(()=>{
  // console.log('update', store.getState().favouriteReducer);
  // localStorage.setItem('fav', JSON.stringify(store.getState().favouriteReducer));
  setLocalStorage('store', (store.getState().favouriteReducer));


})

export default store;