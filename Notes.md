for(let c of this.props.chars.heros){
  if(c['alignment'] === 'good'){
    this.setState({hero: c})
  }else {
    this.setState({villian: c})
    return true
  }
  console.log(c['alignment'])
}



****
CharacterContainer
console.log(this.props.chars)
console.log(this.props.chars.heros) // THIS ONE WORKS AS AN ARRAY FOR OF LOOP!!!
console.log('THIS IS STATE', "HERO", this.state.hero, 'VILLIAN', this.state.villian)
console.log("PROPS FROM APP", this.props)
console.log('THIS.STATE', this.state)
****



****
App
console.log('THIS.STATE.CHARACTERS ON APP PAGE', this.state.characters)
console.log('STATE FROM APP', this.state)
****
