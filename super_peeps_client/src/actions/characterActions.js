export const fetchCharacters = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/chars")
    .then(resp => resp.json())
    .then(data => dispatch({
      type: 'SET_CHARACTERS',
      payload: data
    }))
  }
}
  // return {
  //   type: "SET_CHARACTERS",
  //   payload: characters
  // }
export const searchChars = (text) => dispatch => {
  dispatch ({
    type: 'SEARCH_CHARS',
    payload: text
  })
  console.log('ACTION_TEXT', text)
}
