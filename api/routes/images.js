const express = require('express');
const config = require('../config');
const axios = require('axios');

const router = express.Router();

router.get('/images', (req, res) => {
  const promises = [];
  const response = [];
  axios({
    url: `services/rest/?method=flickr.photos.search&api_key=${config.api.flickrApiKey}&tags='london'&page=${req.query.page}tag_mode=any&per_page=30&format=json&nojsoncallback=1`,
    baseURL: 'https://api.flickr.com/',
    method: 'GET',
  })
    .then((apiResponse) => {
      apiResponse.data.photos.photo.forEach((image) => {
        promises.push(
          axios({
            url: `services/rest/?method=flickr.photos.getInfo&api_key=${config.api.flickrApiKey}&photo_id=${image.id}&secret=${image.secret}&format=json&nojsoncallback=1`,
            baseURL: 'https://api.flickr.com/',
            method: 'GET',
          }),
        );
      });

      Promise.all(promises)
        .then((values) => {
          values.forEach((value) => {
            response.push({
              id: value.data.photo.id,
              server: value.data.photo.server,
              secret: value.data.photo.secret,
              farm: value.data.photo.farm,
              userName: value.data.photo.owner.username,
              postUrl: value.data.photo.urls.url[0]._content
            });
          });
          
          res.json(response);
        });
    });
});

module.exports = router;
