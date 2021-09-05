import React from 'react'


class CharacterCard extends React.Component {
  render(){
    let c = this.props.chars
      return(
        <div className='char-card' key={c.id}>
          <div className='img-cont'>
            <img src={c.image} alt='k' />
          </div>
          <div>
          <h3> Name: {c.name} </h3>
          <p> Publisher: {c.publisher} </p>
          <p> First Appearance: {c.first_appearance} </p>
          </div>
        </div>
      )
  }
}

export default CharacterCard
