import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
//import store from './store';
import anecdoteService from './services/anecdotes'
import filterReducer from './reducers/filterReducer'

//1. Design the store
//2. Define the actions
//3. create a reducer
//4. set up the store
const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer
})

const store = createStore(reducer, composeWithDevTools())

anecdoteService.getAll().then(anecdotes => 
  store.dispatch(initializeAnecdotes(anecdotes)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)