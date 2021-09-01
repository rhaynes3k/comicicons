// import logo from './logo.svg';
import React from 'react'
import './App.css';
import CharacterContainer from './CharacterContainer'


class App extends React.Component {


    state = {
      characters: []
    }

    componentDidMount(){
      fetch('http://localhost:3000/characters')
      .then(resp => resp.json())
      .then(chars => {
        this.setState({ characters: chars })
      })
    }

    render(){
      console.log(this.state.characters)
      return (
        <div>
        <CharacterContainer chars={this.state.characters} />
        <CharacterContainer chars={this.state.characters} />
        </div>
      )
    }
}

export default App
