import React from 'react'
import { likeCharacters } from '../actions/likeActions'
import { connect } from 'react-redux'

class LikeButton extends React.Component {

state = {
  likes: 0,
  id: this.props.chrId
}
  handleClick = () => {
    this.setState({
      likes: this.state.likes += 1
    })
    this.props.likeCharacters(this.state)
  }

  render() {

    return (
      <div className='lk-btn'>
        <input type='button' value='Likes' onClick={this.handleClick} />
        <h3> {this.state.likes} </h3>
      </div>

    )

  }

}
const mapStateToProps = (state) => {
  return {
    characters: state
  }
}

export default connect(mapStateToProps, { likeCharacters })(LikeButton)
