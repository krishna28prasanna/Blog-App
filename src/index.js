import React from 'react'
import ReactDOM from'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {startGetUser} from './actions/user'
import {startGetPosts} from './actions/post'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
const store = configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(startGetUser())
store.dispatch(startGetPosts())
const jsx=(
    <Provider  store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));