
export const likeCharacters = (likes, id) => {
  console.log('LIKES_FROM_ADD', likes)
  let chr_updt = {likes: likes.likes}
  console.log(chr_updt)
  return (dispatch) => {
    fetch(`http://localhost:3000/characters/${likes.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        Accept: 'application/json'
          },
        body: JSON.stringify(chr_updt)
      })
        .then(response => response.json())
        .then(data => console.log('DATA', data))
        .catch((error) => {
        console.log('Error:', error);
        })

  }
}
