const Header = (props) => {
  return (
    <>
      <h1>{props.courseheader}</h1>
    </>
  )
}
const Content = (props) => {
  const sections = props.parts

  return (
    <ul>
      {sections.map(function(section, index){
        return <li key={ index }>{section}</li>
      })}
    </ul>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const parts = ['Fundamentals of React','Using props to pass data','State of a component']

  return (
    <div>
      <Header courseheader={course}/>
      <Content parts={parts} numleft={exercises1}/>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
