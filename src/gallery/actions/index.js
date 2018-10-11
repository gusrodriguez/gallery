import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
  REQUEST_IMAGES,
  LOAD_IMAGES,
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

const loadImages = () => {
  const images = ["https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/falls2.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/mist.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/ocean.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/mountainskies.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/falls2.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/nature.jpg",
    "https://www.w3schools.com/w3images/mist.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/ocean.jpg",
    "https://www.w3schools.com/w3images/wedding.jpg",
    "https://www.w3schools.com/w3images/mountainskies.jpg",
    "https://www.w3schools.com/w3images/rocks.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
  ]
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

const fetchImages = () => {
  return (dispatch) => {
    dispatch(requestImages());
    dispatch(loadImages());
  };
};

export default {
  displayImage,
  closeImage,
  fetchImages,
};
