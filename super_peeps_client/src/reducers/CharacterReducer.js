
  function characterReducer (state = [{heros: [{id: 1}]}], action){
    switch(action.type) {
      case "SET_CHARACTERS":
        return action.payload
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
