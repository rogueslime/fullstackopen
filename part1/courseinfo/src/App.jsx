import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header courseheader={course}/>
      <Content parts = {[{part:part1,ex:exercises1},{part:part2,ex:exercises2},{part:part3,ex:exercises3}]}/>
      <Total exs = {[exercises1, exercises2, exercises3]}/>
    </div>
  )
}

export default App
