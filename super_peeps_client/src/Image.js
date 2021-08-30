import React from 'react'

function Image(props) {
  return(
    <div className='image-cont'>
      <h6> Image Component </h6>
        <div className='img-title'>
          <img src="this.renderImg()" name='{this.renderImg()}.name'/>
        </div>
    </div>
  )
}

fetch('http://localhost:3000/characters')
  .then(resp => resp.json())
  .then(chars => {
    renderImg(chars)
  }
  )
function renderImg(chars){
  console.log(chars[0].image)
  return chars[0].image
}

export default Image
