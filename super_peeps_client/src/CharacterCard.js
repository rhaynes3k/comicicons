import React from 'react'
import './App.css'

class CharacterCard extends React.Component {

  render(){
    let charArray = this.props.chr.map(c => {
      return(
        <div className='char-card' key={c.name}>
          <div>
            <h5> CharacterCard Component </h5>
            <h3> {c.name} </h3>
            <h5> {c.alignment} </h5>
            <h4> {c.publisher} </h4>

          </div>
          <div>
            <img src = {c.image} alt='pic-here' name='name goes here' />
          </div>
        </div>
      )

    })
    return (
      <div>
  <h4> {this.props.name} </h4>
        {charArray}
      </div>
    )
  }
}

export default CharacterCard
