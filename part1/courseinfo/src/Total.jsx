const Total = (props) => {
    const sections = props.exs
    let partsLeft = 0
    for(let i = 0; i < sections.length; i++) {
      partsLeft += sections[i]
    }
  
    return (
      <p>Number of Exercises Remaining : {partsLeft}</p>
    )
  }

export default Total