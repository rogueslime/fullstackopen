const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Wow... a new app! Makes me feel like a {props.name}, {props.age} years old too!</p>
    </div>
  )
}

const App = () => {
  const age = 15
  const name = 'GibGob'

  return (
    <div>
      <h1>Hello Chutney!</h1>
      <Hello name='Gobble' age = {age}/>
      <Hello name={name} age = {5 + 2}/>
    </div>
  )
}

export default App