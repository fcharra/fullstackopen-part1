const Course = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <p>
        {props.part1Name} {props.exercises1Count}
      </p>
      <p>
        {props.part2Name} {props.exercises2Count}
      </p>
      <p>
        {props.part3Name} {props.exercises3Count}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exerciseTotalCount}</p>
    </>
  )
}

const App = () => {
  const courseName = 'Half Stack application development'
  const part1Name = 'Fundamentals of React'
  const exercises1Count = 10
  const part2Name = 'Using props to pass data'
  const exercises2Count = 7
  const part3Name = 'State of a component'
  const exercises3Count = 14

  return (
    <div>
      <Course courseName={courseName} />
      <Content part1Name={part1Name} exercises1Count={exercises1Count} part2Name={part2Name} exercises2Count={exercises2Count} part3Name={part3Name} exercises3Count={exercises3Count} />
      <Total exerciseTotalCount={exercises1Count + exercises2Count + exercises3Count} />
    </div>
  )
}

export default App