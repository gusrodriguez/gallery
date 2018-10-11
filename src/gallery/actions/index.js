import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
} from './types';

const displayImage = () => {
  return {
    type: DISPLAY_IMAGE,
    payload: true,
  };
};

const closeImage = () => {
  return {
    type: CLOSE_IMAGE,
    payload: false,
  };
};

export default {
  displayImage,
  closeImage,
};
