

  function characterReducer (state = [{likes: 0}], action){
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

    }
  }

export default characterReducer
