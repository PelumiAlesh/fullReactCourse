import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [reduxThunk];

// export const creatStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
// export const store = creatStoreWithMiddleware(RootReducer);
const store = createStore(RootReducer, {}, compose(
  applyMiddleware(...middlewares),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

export default store;
