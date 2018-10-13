import {
  DISPLAY_IMAGE,
  CLOSE_IMAGE,
  REQUEST_IMAGES,
  LOAD_IMAGES,
  RESIZE_IMAGES,
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

const loadImages = (page) => {
  const images = { 1: ["https://www.w3schools.com/w3images/wedding.jpg",
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
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
    "https://www.w3schools.com/w3images/paris.jpg",
  ], 
  2: [
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",  
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
    "https://www.w3schools.com/w3images/underwater.jpg",
  ],
}
  return {
    type: LOAD_IMAGES,
    payload: {
      images: images[page],
      fetching: false,
    },
  };
};


const resizeImages = (containerWidth, imageSize) => {
  const imagesPerRow = Math.round(containerWidth / imageSize);
  const size = (containerWidth / imagesPerRow);
  return {
    type: 'RESIZE_IMAGES',
    payload: { imageSize: size },
  };
}

const requestImages = () => {
  return {
    type: REQUEST_IMAGES,
    payload: { fetching: true },
  };
};

const fetchImages = (page) => {
  return (dispatch) => {
    dispatch(requestImages());
    dispatch(loadImages(page));
  };
};

export default {
  displayImage,
  closeImage,
  fetchImages,
  resizeImages,
};
