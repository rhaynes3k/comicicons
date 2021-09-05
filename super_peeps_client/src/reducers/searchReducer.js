
const initialState = {
  text: ''
}

function searchReducer (state, action){
  switch(action.type) {
    case "SEARCH_CHARS":
      return Object.assign({}, state, {
              text: action.text



    default:
      return state
  }

}

export default searchReducer
