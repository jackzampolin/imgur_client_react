var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
  listenables: [Actions],
  getImage (id) {
    return Api.get('gallery/' + id  + '/comments')
      .then(function(json){
        this.comment = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange () {
    this.trigger('change', this.topics)
  }
});