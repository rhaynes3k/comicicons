
export const likeCharacters = (likes, id) => {
  console.log('LIKES_FROM_ADD', likes)
  return (dispatch) => {
    fetch(`http://localhost:3000/characters/${likes.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        Accept: 'application/json'
          },
        body: JSON.stringify({
          likes: likes.likes
        })
      })
        .then(response => response.json())
        .then(data => console.log('Liked', data))
        .catch((error) => {
        console.log('Error:', error);
        })
  }
}
