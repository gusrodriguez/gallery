import axios from 'axios';
import config from '../../../config';
import {
  REQUEST_IMAGES,
  LOAD_IMAGES,
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
} from './types';

const loadImages = (response) => {
  const images = response.data.map((value) => {
    return {
      src: `https://farm${value.farm}.staticflickr.com/${value.server}/${value.id}_${value.secret}.jpg`, 
      title: value.title,
      author: value.author,
      postUrl: value.postUrl,
    };
  });
  return {
    type: LOAD_IMAGES,
    payload: {
      images,
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
  dispatch(requestImages());
  const response = await axios.get(`${config.apiBaseUrl}/api/images?page=${page}`);
  dispatch(loadImages(response));
};

const displayImage = image => (dispatch) => {
  dispatch({
    type: DISPLAY_IMAGE,
    payload: image,
  });
};

const closeImage = () => {
  return {
    type: CLOSE_IMAGE,
    payload: null,
  };
};

export default {
  fetchImages,
  displayImage,
  closeImage,
  loadImages,
  requestImages,
};
