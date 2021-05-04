import { createStore,combineReducers,applyMiddleware } from 'redux'
import resultConver from './number-reducer'
import thunkMiddlewear from 'redux-thunk'



let reducer = combineReducers({
   resultConver,
   // 
})

let store = createStore(reducer,applyMiddleware(thunkMiddlewear))

window.store = store

export default store