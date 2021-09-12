import LikesReducer from './reducers'
import CharacterReducer from './reducers'

const rootReducer = combinedReducers({
  char: CharacterReducer,
  likes: LikesReducer
})


export default rootReducer
