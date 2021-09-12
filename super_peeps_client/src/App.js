// import logo from './logo.svg';
import React from 'react'
import CharacterContainer from './components/CharacterContainer'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import { connect } from 'react-redux'
import { fetchCharacters } from './actions/characterActions'

class App extends React.Component {


    // state = {
    //   characters: [],
    //   likes: []
    // }

    componentDidMount = () => {
      this.props.dispatchFetchCharacters()
    }

    render(){
      return (
        <Router>
          <Link to='/home'>
          <div className='home-cont-btn'>
            <input type='button' name='home' value='Home'/>
          </div>
          </Link>

          <Link to='/heroes'>
            <div className='h-cont-btn'>
              <input type='button' name='heroes' value='Heroes'/>
            </div>
          </Link>

          <Link to='/villians'>
            <div className='v-cont-btn'>
              <input type='button' name='villians' value='Villians'/>
            </div>
          </Link>

          <div>
            <CharacterContainer name='Character Component'  key='5' chars={this.props.characters} />
          </div>

        </Router>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    characters: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchCharacters: () => dispatch(fetchCharacters())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
