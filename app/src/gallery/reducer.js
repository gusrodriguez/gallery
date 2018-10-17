import { clone } from '../utils/clone';
import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
  REQUEST_IMAGES,
  LOAD_IMAGES,
  DISPLAY_ERROR,
} from './actions/types';

const initialState = { 
  images: [],
  imageDisplayed: null,
  nextPage: 1,
  fetching: true,
  error: false,
};
const nextStateImageDisplayed = (state, payload) => {
  const next = clone(state);
  next.imageDisplayed = payload;
  return next;
};

const nextStateRequestImages = (state, payload) => {
  const next = clone(state);
  next.fetching = payload.fetching;
  return next;
};

const nextStateLoadImages = (state, payload) => {
  const next = clone(state);
  next.nextPage += 1;
  next.images = [...state.images].concat([...payload.images]);
  next.fetching = payload.fetching;
  return next;
};

const nextStateDisplayError = (state, payload) => {
  const next = clone(state);
  next.fetching = false;
  next.error = payload;
  return next;
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_IMAGE:
      return nextStateImageDisplayed(state, action.payload);
    case CLOSE_IMAGE:
      return nextStateImageDisplayed(state, action.payload);
    case REQUEST_IMAGES:
      return nextStateRequestImages(state, action.payload);
    case LOAD_IMAGES:
      return nextStateLoadImages(state, action.payload);
    case DISPLAY_ERROR:
      return nextStateDisplayError(state, action.payload);
    default:
      return state;
  }
};

export default galleryReducer;
