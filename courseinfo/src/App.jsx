const Course = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.partName} {props.exercisesCount}
      </p>
    </>    
  )
}

const Content = (props) => {
  return (
    <>
      <Part partName={props.part1Name} exercisesCount={props.exercises1Count} />
      <Part partName={props.part2Name} exercisesCount={props.exercises2Count} />
      <Part partName={props.part3Name} exercisesCount={props.exercises3Count} />
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