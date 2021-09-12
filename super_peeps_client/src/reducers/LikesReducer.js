

function likesReducer (state= [{likes: 0}], action){
  switch(action.type) {
    case "LIKE_CHARACTERS":
      console.log('LIKE_CHARS', action.payload)
        return [...state], state.likes += 1


    default:
      return state
  }

}

export default likesReducer
