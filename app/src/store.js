import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import galleryReducer from './gallery/reducer';

const store = createStore(
  galleryReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ),
);

export default store;
