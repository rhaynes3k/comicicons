import React from 'react'
import './App.css'

class CharacterCard extends React.Component {
  render(){
    let c = this.props.chars
      return(
        <div key={c.id}>
          <div>
            <img src={c.image} alt='k' />
          </div>
          <div>
          <p> {this.props.name} </p>
          <p> {c.name} </p>
          <h3> {c.publisher} </h3>
          <h3> {c.first_appearance} </h3>
          </div>
        </div>
      )
  }
}

export default CharacterCard
