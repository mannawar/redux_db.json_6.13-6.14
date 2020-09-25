import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {anecdote.content} <strong>{anecdote.important ? 'important' : ''}</strong>
    </li>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if(filter === 'ALL'){
      return anecdotes
    }
    return filter === 'IMPORTANT' ?
    anecdotes.filter(anecdote => anecdote.important) :
    anecdotes.filter(anecdote => !anecdote.important)
  })

  return(
    <ul>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
            dispatch(toggleImportanceOf(anecdote.id))
          }
        />
      )}
    </ul>
  )
}

export default Anecdotes