import Part from './Part.jsx'

/*
First implementation of Content

const Content = (props) => {
  let sections = []

  for(let i = 0; i < props.parts.length; i++) {
    sections[i] = {section:props.parts[i], exs: props.exs[i]}
    console.log(sections[i])
  }

  return (
    <ul>
      {sections.map(function(nextSection, index) {
        return <li key = { index }><Part part={nextSection.section} exs={nextSection.exs}/></li>
      })}
    </ul>
  )
}
*/

const Content = (props) => {
  return (
    <ul>
      {props.parts.map(function(nextPart, index) {
        console.log(nextPart, index)
        return <li key={index}><Part part={nextPart.part} exs={nextPart.ex}/></li>
      })}
    </ul>
  )
}

export default Content