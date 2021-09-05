import React from 'react'
import { searchChars } from '../actions/characterActions'
import { connect } from 'react-redux'

class Search extends React.Component {

  state = {
    text: ''
  }

handleChange = (event) => {
  
  this.props.searchChars(event.target.value)
  this.setState({
    [event.target.name]: event.target.value
  })

}

handleSubmit = (event) => {
  // event.preventDefault()
}
  render(){
    // console.log(event.target.value)
    console.log('REDUX STATE', this.props)
    console.log(this.state.text)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} name='text' onChange={this.handleChange}/>
          <input type='submit' value='search' />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {console.log('MSTP CONNECT STATE', state)
  return{
    text: state
  }
}

/* const mapDispatchToProps = (dispatch) => {
    return {
      dispatchACTION: () => dispatch(ACTION)
  }
}
  IS THE SAME AS { searchChars } IN THE EXPORT BELOW */

export default connect(mapStateToProps, { searchChars })(Search)
