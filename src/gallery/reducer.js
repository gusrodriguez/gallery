import { clone } from '../utils/clone';
import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
} from './actions/types';

const initialState = { 
  imageDisplayed: false,
  images: [],
};
const nextStateImageDisplayed = (state, payload) => {
  const next = clone(state);
  next.imageDisplayed = payload;
  return next;
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_IMAGE:
      return nextStateImageDisplayed(state, action.payload);
    case CLOSE_IMAGE:
      return nextStateImageDisplayed(state, action.payload);
    default:
      return state;
  }
};

export default galleryReducer;
