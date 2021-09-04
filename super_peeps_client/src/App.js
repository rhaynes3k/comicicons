// import logo from './logo.svg';
import React from 'react'
import './App.css';
import CharacterContainer from './CharacterContainer'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"
import { connect } from 'react-redux'
import { setCharacters } from './actions/characterActions'

class App extends React.Component {


    // state = {
    //   characters: [],
    //   likes: []
    // }

    componentDidMount = () => {
      console.log(this)
      fetch('http://localhost:3000/chars')
      .then(resp => resp.json())
      .then(chars => {
        this.props.dispatchSetCharacters(chars)
      })
    }

    render(){
      console.log('THIS IS STATE - APP', this.props.characters)
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
            <CharacterContainer name='Character Component' chars={this.props.characters} />
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
    dispatchSetCharacters: (characters) => dispatch(setCharacters(characters))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
