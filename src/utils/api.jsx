var Fetch = require('whatwg-fetch')
var rootUrl = 'https://api.imgur.com/3/'
var apiKey = 'c26b1e9317f1184';

module.exports = window.api = {
  get (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey,
      }
    })
    .then(function(response) {
      return response.json()
    })
  },
}