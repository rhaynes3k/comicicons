import React from 'react'
import { searchChars } from '../actions/characterActions'
import { connect } from 'react-redux'

class Search extends React.Component {

  state = {
    text: ''
  }

  handleChange = (event) => {
    this.props.searchChars(event.target.value)
    // this.filteredList(this.state.text)
    this.setState({
      text: event.target.value
    })
  }


  // filteredList = () => {
  //  this.props.hero.filter( (c) => c.name.includes(this.state.text))
  // }

  render(){
    return(
      <div>
        <form>
          <input type='text' value={this.state.text} name='text' onChange={this.handleChange}/>
          <input type='submit' value='Reset' />
        </form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    heros: state.heros,
    villians: state.villians
  }
}


/* const mapDispatchToProps = (dispatch) => {
    return {
      dispatchSearchChars: () => dispatch(ACTION)
  }
}
  IS THE SAME AS { searchChars } IN THE EXPORT BELOW */

  export default connect(mapStateToProps, { searchChars })(Search)
