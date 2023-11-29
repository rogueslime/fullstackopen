const Content = (props) => {
  let sections = []

  for(let i = 0; i < props.parts.length; i++) {
    sections[i] = {section:props.parts[i], exs: props.exs[i]}
    console.log(sections[i])
  }

  return (
    <ul>
      {sections.map(function(nextSection, index) {
        return <li key = { index }>{nextSection.section} : {nextSection.exs}</li>
      })}
    </ul>
  )
}

export default Content