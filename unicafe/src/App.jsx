import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const FeedbackPanel = ({feedback, handleClicks}) => (
  <div>
    <h2>give feedback</h2>
    <Button handleClick={() => handleClicks.good(feedback)} text="good" />
    <Button handleClick={() => handleClicks.neutral(feedback)} text="neutral" />
    <Button handleClick={() => handleClicks.bad(feedback)} text="bad" />
  </div>
)

const StatisticsPanel = ({feedback}) => {

  const feedbackExists = feedback.good || feedback.neutral || feedback.bad

  if (!feedbackExists) {
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  // else
  const getVoteCount        = () => feedback.good + feedback.neutral + feedback.bad
  const getVoteAverage      = () => ( feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1 ) / getVoteCount()
  const getVotePercPositive = () => feedback.good * 100 / getVoteCount()

  return (
    <div>
      <h2>statistics</h2>
      <StatisticLine text="good" value={feedback.good} />
      <StatisticLine text="neutral" value={feedback.neutral} />
      <StatisticLine text="bad" value={feedback.bad} />
      <StatisticLine text="all" value={getVoteCount()} />
      <StatisticLine text="average" value={getVoteAverage()} />
      <StatisticLine text="positive" value={getVotePercPositive() + " %"} />
    </div>
  )
}

const App = () => {
  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0})

  const handleClickGood = (feedback) => {
    setFeedback({...feedback, good: feedback.good + 1})
  }
  
  const handleClickNeutral = (feedback) => {
    setFeedback({...feedback, neutral: feedback.neutral + 1})
  }
  
  const handleClickBad = (feedback) => {
    setFeedback({...feedback, bad: feedback.bad + 1})
  }

  const handleClicks = {
    good: handleClickGood,
    neutral: handleClickNeutral,
    bad: handleClickBad
  }

  return (
    <div>
      <FeedbackPanel feedback={feedback} handleClicks={handleClicks} />
      <StatisticsPanel feedback={feedback} />
    </div>
  )

}

export default App
