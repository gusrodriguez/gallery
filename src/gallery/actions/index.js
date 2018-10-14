import axios from 'axios';
import config from '../../../config';
import {
  REQUEST_IMAGES,
  LOAD_IMAGES,
  RESIZE_IMAGES,
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
} from './types';

const loadImages = (response) => {
  const urls = response.data.map((entry) => {
    return `https://farm${entry.farm}.staticflickr.com/${entry.server}/${entry.id}_${entry.secret}.jpg`
  });
  return {
    type: LOAD_IMAGES,
    payload: {
      images: urls,
      fetching: false,
    },
  };
};

const requestImages = () => {
  return {
    type: REQUEST_IMAGES,
    payload: { fetching: true },
  };
};

const fetchImages = page => async (dispatch) => {
  const response = await axios.get(`${config.apiBaseUrl}/api/images?page=${page}`);
  dispatch(requestImages());
  dispatch(loadImages(response));
};

const resizeImages = (containerWidth, imageSize) => {
  const imagesPerRow = Math.round(containerWidth / imageSize);
  const size = (containerWidth / imagesPerRow);
  return {
    type: RESIZE_IMAGES,
    payload: { imageSize: size },
  };
}

const displayImage = () => (dispatch) => {
  dispatch({
    type: DISPLAY_IMAGE,
    payload: true,
  });
};

const closeImage = () => {
  return {
    type: CLOSE_IMAGE,
    payload: false,
  };
};

export default {
  fetchImages,
  resizeImages,
  displayImage,
  closeImage,
};
