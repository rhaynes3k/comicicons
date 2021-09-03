// import logo from './logo.svg';
import React from 'react'
import './App.css';
import CharacterContainer from './CharacterContainer'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom"

class App extends React.Component {


    state = {
      characters: [],
      likes: []
    }

    componentDidMount(){
      fetch('http://localhost:3000/chars')
      .then(resp => resp.json())
      .then(chars => {
        this.setState({ characters: chars })
      })
    }

    render(){
      console.log('THIS IS STATE - APP', this.state.characters)
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
            <CharacterContainer name='CharacterContainer' chars={this.state.characters} />
          </div>

        </Router>
      )
    }
}

export default App
