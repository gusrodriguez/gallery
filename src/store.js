import { createStore } from 'redux';
import galleryReducer from './gallery/reducer';

const store = createStore(
  galleryReducer,
);

export default store;
