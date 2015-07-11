var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link

module.exports = React.createClass({
  getInitialState () {
    return {
      hovering: false
    }
  },
  render () {
    return <Link
      to={'images/' + this.props.id}
      className='image-preview'
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.props.animated && this.state.hovering ? this.animate() :this.image()}
      {this.props.animated && !this.state.hovering ? this.icon() : ''}
      {this.state.hovering ? this.inset() : ''}
    </Link>
  },
  inset () {
    return <div className='inset'>
      Views: {this.props.views}
      <br/>
      Upvotes: {this.props.ups}
    </div>
  },
  icon () {
    return <span className='glyphicon glyphicon-play'></span>
  },
  image () {
    var src = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return <img src={src} />
  },
  animate () {
    return <div>
      <video preload='auto' autoPlay='autoplay' loop='loop' webkit-playsinline>
        <source src={this.props.mp4}/>
      </video>
    </div>
  },
  handleMouseEnter () {
    this.setState({hovering: true})
  },
  handleMouseLeave () {
    this.setState({hovering: false})
  },
});