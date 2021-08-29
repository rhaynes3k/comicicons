import React from 'react';
import CharacterCard from './CharacterCard'

function CharacterContainer() {

    return (
      <div className='char-cont'>
        <h1> CharacterContainer </h1>
        <CharacterCard name='Heros'/>
        <CharacterCard name='Villians'/>
      </div>
    )
}

export default CharacterContainer
