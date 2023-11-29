const Content = (props) => {
    const sections = props.parts
  
    return (
      <ul>
        {sections.map(function(nextSection, index) {
          return <li key = { index }>{nextSection.section} : {nextSection.exs}</li>
        })}
      </ul>
    )
  }

export default Content