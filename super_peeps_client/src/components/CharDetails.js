import React from 'react'
import { useParams } from 'react-router-dom'
import LikeButton from './LikeButton'

const CharDetails = (props) => {

    const { id } = useParams()
    const newArr = []
    let chr = []
    for(let h of props.dets.heros) {
      newArr.push(h)
    }

    for(let v of props.dets.villians) {
      newArr.push(v)
    }

    chr = newArr.filter(c => c.id == id)
    console.log('CHRID', chr[0].id)
    return(
      <div>
      <div className='char-details'>
        <h2> Character Details </h2>
        <h3> {chr[0].name} </h3>
        <img src={chr[0].image} alt="No File Found" />
        <h3> Combat: {chr[0].combat} </h3>
        <h3> Intelligence: {chr[0].intelligence} </h3>
        <h3> Power: {chr[0].power} </h3>
        <h3> Strength: {chr[0].strength} </h3>
        <h3> Relatives: {chr[0].relatives} </h3>
        <h3> Affiliations:{chr[0].affiliations} </h3>
        <h3> First Appearance: {chr[0].first_appearance} </h3>
      </div>
        <div>
          <LikeButton text='Like' chrId={chr[0].id}/>
        </div>
      </div>
    )


}


export default CharDetails
