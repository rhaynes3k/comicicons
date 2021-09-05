import { createStore, applyMiddleware, compose } from 'redux'
import characterReducer from './reducers/CharacterReducer'
// import searchReducer from './reducers/CharacterReducer'
import thunk from 'redux-thunk'

const composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composedReducer = characterReducer
const store = createStore(
  composedReducer,
  undefined,
  composedEnhancer
)




export default store
