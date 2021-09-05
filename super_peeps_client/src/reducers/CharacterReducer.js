
  const initialState = {
    heros: {},
    villians: {},
    text: ''
  }

  function characterReducer (state = [], action){
    switch(action.type) {
      case "SET_CHARACTERS":
        return action.payload
      case "SEARCH_CHARS":
      if (action.payload.length > 0){
        return Object.assign({}, state,{
            ...state,
            heros: state.heros.filter ((h) => h.name.includes(action.payload))})
          }else{
            return 
          }

    //   case 'REMOVE_LIKE':
    //     return action.payload
    //   case 'SEARCH_FORM':
    //     return action.payload
    //
    //
      default:
        return state
  }

}

export default characterReducer
