import React from 'react'
import './App.css'

class CharacterCard extends React.Component {
  render(){
    let c = this.props.chars
      return(
        <div key={c.id}>
          <img src={c.image} alt='k' />
        </div>
      )
  }
}

export default CharacterCard
