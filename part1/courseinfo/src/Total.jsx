const Total = (props) => {
  const sections = props.parts
  let partsLeft = 0
  for (let i = 0; i < sections.length; i++) {
    partsLeft += sections[i].exercises
  }

  return (
    <p>Number of Exercises Remaining : {partsLeft}</p>
  )
}

export default Total