const express = require('express');
const config = require('../config');
const axios = require('axios');

const router = express.Router();

function getListPromise(page) {
  return (
    axios({
      url: `services/rest/?method=flickr.photos.search&api_key=${config.api.flickrApiKey}&tags='dogs'&page=${page}tag_mode=any&per_page=30&format=json&nojsoncallback=1`,
      baseURL: 'https://api.flickr.com/',
      method: 'GET',
    })
  );
}

function getImagePromise(id, secret) {
  return (
    axios({
      url: `services/rest/?method=flickr.photos.getInfo&api_key=${config.api.flickrApiKey}&photo_id=${id}&secret=${secret}&format=json&nojsoncallback=1`,
      baseURL: 'https://api.flickr.com/',
      method: 'GET',
    })
  );
}

router.get('/images', (req, res) => {
  const promises = [];
  const response = [];
  getListPromise(req.query.page)
    .then((apiResponse) => {
      apiResponse.data.photos.photo.forEach((image) => {
        promises.push(
          getImagePromise(image.id, image.secret),
        );
      });

      Promise.all(promises)
        .then((values) => {
          values.forEach((value) => {
            response.push({
              id: value.data.photo.id,
              title: value.data.photo.title._content,
              server: value.data.photo.server,
              secret: value.data.photo.secret,
              farm: value.data.photo.farm,
              author: value.data.photo.owner.username,
              postUrl: value.data.photo.urls.url[0]._content,
            });
          });

          res.json(response);
        });
    });
});

module.exports = router;
