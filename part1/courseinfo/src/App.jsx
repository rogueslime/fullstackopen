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

  const sections = [
    {section : part1, exs : exercises1},
    {section : part2, exs : exercises2},
    {section : part3, exs : exercises3}    
  ]

  return (
    <div>
      <Header courseheader={course}/>
      <Content parts = {sections}/>
      <Total parts = {sections}/>
    </div>
  )
}

export default App
