import React, {useEffect} from 'react'
import NewAnecdote from './components/NewAnecdote'
import Anecdotes from './components/Anecdotes'
//import {createStore} from 'redux'
import { /*useSelector,*/ useDispatch} from 'react-redux'
import VisibilityFilter from './components/VisibilityFilter'
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
//import anecdoteReducer from './reducers/anecdoteReducer'


const App = () => {
  //const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then(anecdotes => dispatch(initializeAnecdotes(anecdotes)))
  }, [dispatch])

  //const vote = (id) => {
    
  //   console.log('vote', id)
  // }

  return (
    <div>
      <NewAnecdote />
      <VisibilityFilter />
      <Anecdotes />
    </div>
  )
}

export default App