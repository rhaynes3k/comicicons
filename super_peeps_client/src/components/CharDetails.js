import React from 'react'
import { useParams } from 'react-router-dom'


const CharDetails = (props) => {

    const { id } = useParams()
    const newArr = []
    let chr = []
    for(let h of props.dets.heros) {
      newArr.push(h)
    }
    console.log('HEROS', props.dets.heros)
    for(let v of props.dets.villians) {
      newArr.push(v)
    }
console.log('VILLIANS', props.dets.villians)
    chr = newArr.filter(c => c.id == id)
    console.log('CHR', chr, 'NEW_ARRAY', newArr)
    return(
      <div className='char-details'>
        <h2> Character Details </h2>
        <h3> {chr[0].name} </h3>
        <img src={chr[0].image} alt="No Image Found" />
        <h3> Combat: {chr[0].combat} </h3>
        <h3> Intelligence: {chr[0].intelligence} </h3>
        <h3> Power: {chr[0].power} </h3>
        <h3> Strength: {chr[0].strength} </h3>
        <h3> Relatives: {chr[0].relatives} </h3>
        <h3> Affiliations:{chr[0].affiliations} </h3>
        <h3> First Appearance: {chr[0].first_appearance} </h3>
      </div>


    )
  // const {data: chr} = props.map(c => c.id === id)
  // const dets = {props}
  // debugger
  // let det = {props.dets}.map(c => c.id === id)
  // console.log('DET', chr)



}


export default CharDetails
