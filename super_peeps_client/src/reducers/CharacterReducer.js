
  function characterReducer = (state = [{
    characters: []
    }], action) {
    switch(action.type) {
      case 'MODIFY_CHARACTERS':
        return action.payload
      case 'ADD_LIKE':
        return //state
      case 'REMOVE_LIKE':
        return //state
      case 'SEARCH_FORM':
        return //state


      default:
        return state
  }

}
