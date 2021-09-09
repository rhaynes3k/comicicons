
  // const initialState = {
  //   heros: {},
  //   villians: {},
  //   text: '',
  //   displayState: {}
  // }

  function characterReducer (state = [], action){
    switch(action.type) {
      case "SET_CHARACTERS":
        return action.payload
      case "SEARCH_CHARS":
      if (action.payload){
        console.log('STATE', state)
        return {
          ...state,
          villians: state.villians.filter( (h) => h.name.toLowerCase().includes(action.payload)),


          heros: state.heros.filter( (h) => h.name.toLowerCase().includes(action.payload))}

        }else{
          return state
        }
        default:
        return state
        
      // const fullState = []
      // for(let s of state.heros){
      //   fullState.push(s)
      //   console.log('FULL_STATE', fullState)
      // }
      // for(let s of state.villians){
      //   fullState.push(s)
      //   console.log('FULL_STATE', fullState)
      // }
      // state = fullState
  }

}

export default characterReducer
