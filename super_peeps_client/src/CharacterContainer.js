import React from 'react';
import CharacterCard from './CharacterCard'

class CharacterContainer extends React.Component {

  state = {
    hero: [],
    villian: []
  }


  componentDidMount(){
    let heros = []
    let villians = []
    this.props.chars.forEach(c => {
      console.log(c.alignment)
      if(c['alignment'] === 'good'){
        heros.push(c)
        this.setState({hero: heros})
      }else {
        villians.push(c)
        this.setState({villian: villians})
        console.log('villian', this.state.villian)
      }
    })


  }


  render(){

console.log('THIS IS STATE', "HEROs", this.state.hero, 'VILLIANs', this.state.villian)
      return (
        <div>
          <h3> hello </h3>
          <CharacterCard name='Heros' chr={this.state.hero} />
          <CharacterCard name='Villians' chr={this.state.villian} />
        </div>
      )
  }
}
export default CharacterContainer
