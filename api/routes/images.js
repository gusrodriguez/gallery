const express = require('express');
const config = require('../config');
const axios = require('axios');

const router = express.Router();

router.get('/images', (req, res) => {
  axios({
    url: `services/rest/?method=flickr.photos.search&api_key=${config.api.flickrApiKey}&tags='london'&page=${req.query.page}tag_mode=any&per_page=30&format=json&nojsoncallback=1`,
    baseURL: 'https://api.flickr.com/',
    method: 'GET',
  })
    .then((apiResponse) => {
      res.json(apiResponse.data.photos.photo);
    });
});

router.get('/info', (req, res) => {
  axios({
    url: `services/rest/?method=flickr.photos.getInfo&api_key=${config.api.flickrApiKey}&photo_id=${req.query.photoId}&secret=${req.query.secret}&format=json&nojsoncallback=1`,
    baseURL: 'https://api.flickr.com/',
    method: 'GET',
  })
    .then((apiResponse) => {
      res.json(apiResponse.data);
    });
});

module.exports = router;
