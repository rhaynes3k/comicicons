import React from 'react'


class Image extends React.Component {

  render(){
    console.log('IMAGE', this.props.c)
    return(
      <div className='image-cont'>
        <h6> Image Component </h6>
        

      </div>
    )
  }

}


export default Image
