var React = require('react')

module.exports = React.createClass({
  render () {
    return <ul className='list-root'>
      {this.renderComments()}
    </ul>
  },
  renderComments () {
    return this.props.comments.slice(0,20).map(function(comment){
      return <li className='list-group-item comment-box' key={comment.id}>
        <span className='badge'>{comment.ups}</span>
        <h5>{comment.author}</h5>
        {comment.comment}
      </li>
    });
  }
});