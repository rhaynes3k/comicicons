import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/CharacterReducer'
// import searchReducer from './reducers/CharacterReducer'
import thunk from 'redux-thunk'

const composedEnhancer = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composedReducer = rootReducer
const store = createStore(
  composedReducer,
  undefined,
  composedEnhancer
)

window.store = store


export default store
