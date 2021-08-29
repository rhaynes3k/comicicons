import React from 'react'
import './App.css'
import Image from './Image'
import Info from './Info'

function CharacterCard(props) {

  return(
    <div className='char-card'>
      <h3> CharacterCard Component </h3>
      <h5>{props.name}</h5>
      <Image name='name goes here'/>
      <Info id='c.id'/>
    </div>
  )

}

export default CharacterCard
