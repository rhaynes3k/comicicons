import React from 'react'
import {
  Link
} from "react-router-dom"

class CharacterCard extends React.Component {
  render(){
    let c = this.props.chars
      return(

        <Link to={`/chars/${c.id}`}>
          <div className='char-card'>
            <img src={c.image} alt='No File Found' key={c.id} />
              <h4 className='card-name'> {c.name} </h4>
          </div>
        </Link>
      )
  }
}

export default CharacterCard
