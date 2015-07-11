var React = require('react');
var Actions = require('../actions')
var ImageStore = require('../stores/image-store')
var Reflux = require('reflux')
var ImagePreview = require('./image-preview')

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState () {
    return {
      images: [],
    }
  },
  componentWillReceiveProps (nextProps) {
    Actions.getImages(nextProps.params.id);
  },
  componentWillMount () {
    Actions.getImages(this.props.params.id);
  },
  render () {
    return <div className='topic'>
      {this.renderImages()}
    </div>
  },
  renderImages () {
    return this.state.images.slice(0,20).map(function(image){
      return <ImagePreview key={image.id} {...image} />
    });
  },
  onChange (event, images) {
    this.setState({ images })
  }
});