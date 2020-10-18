import {createStore,combineReducers,applyMiddleware} from 'redux'
import userReducer  from '../reducers/user'
import postReducer from '../reducers/post'
import postDataReducer from '../reducers/postData'
import thunk from 'redux-thunk'

const configureStore = ()=>{
    const store = createStore(combineReducers({
        users : userReducer,
        posts : postReducer,
        postData : postDataReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore