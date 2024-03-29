import { useState } from 'react'

const Button = ({handlerClick, text}) => <button onClick={handlerClick}>{text}</button>

const AnecdoteDisplay = ({anecdote}) => (
  <>
    <p>{anecdote.text}</p>
    <p>has {anecdote.votes} votes</p>
  </>
)

const AnecdoteOfTheDayPanel = ({anecdote}) => {
  return (
    <>
      <h2>Anecdote of the day</h2>
      <AnecdoteDisplay anecdote={anecdote} />
    </>
  )
}

const AnecdoteMostVotedPanel = ({anecdote}) => {
  return (
    <>
      <h2>Anecdote with most votes</h2>
      <AnecdoteDisplay anecdote={anecdote} />
    </>
  )
}

const App = () => {
  // I chose to use an array of objects, since it made more sense to me semantically.
  const [anecdotes, setAnecdotes] = useState([
    {votes: 0, text: 'If it hurts, do it more often.'},
    {votes: 0, text: 'Adding manpower to a late software project makes it later!'},
    {votes: 0, text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.'},
    {votes: 0, text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'},
    {votes: 0, text: 'Premature optimization is the root of all evil.'},
    {votes: 0, text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'},
    {votes: 0, text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'},
    {votes: 0, text: 'The only way to go fast, is to go well.'}
  ])

  const getRandomInteger = (top) => Math.floor(Math.random() * top)
   
  const [selected, setSelected] = useState(getRandomInteger(anecdotes.length))
  
  const setNextAnecdote = () => setSelected(getRandomInteger(anecdotes.length))
  
  const addVote = (index) => {
    // Since it's an array of objects, first it's necessary to get a copy of the whole array.
    let anecdotesCopy = [...anecdotes]
    // ...then we copy the object that's on the selected index, redefining only the value of the votes key.
    anecdotesCopy[index] = {...anecdotesCopy[index], votes: anecdotesCopy[index].votes + 1}
    
    setAnecdotes(anecdotesCopy)
  }

  // Using a higher order function to traverse the array and find the index of the anecdote with the most votes.
  const getMostVotedIndex = () => anecdotes.reduce(
    (acc, curr, idx) => curr.votes > acc.votes ? {index: idx, votes: curr.votes} : acc,
    {index: 0, votes: 0}
  ).index

  return (
    <div>
      <AnecdoteOfTheDayPanel anecdote={anecdotes[selected]} />
      <Button handlerClick={() => addVote(selected)} text="vote" />
      <Button handlerClick={setNextAnecdote} text="next anecdote" />
      <AnecdoteMostVotedPanel anecdote={anecdotes[getMostVotedIndex()]} />
    </div>
  )
}

export default App