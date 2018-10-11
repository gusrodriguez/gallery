import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import galleryReducer from './gallery/reducer';

const store = createStore(
  galleryReducer,
  compose(
    applyMiddleware(thunk),
  ),
);

export default store;
