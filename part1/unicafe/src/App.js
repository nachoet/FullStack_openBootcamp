import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  // save all clicks to otherstate
  const [allClicks, setAllClicks] = useState([])

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
    setAllClicks(allClicks.concat('g'))
    // console.log(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    setAllClicks(allClicks.concat('n'))
    // console.log(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    setAllClicks(allClicks.concat('b'))
  }

  const Statistics = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <p>No feedback given yet!</p>
      )

    } else {
      return (
        <div>
          <p>Good {good}</p>
          <p>Neutral {neutral}</p>
          <p>Bad {bad}</p>
          <p>Overall {good + neutral + bad}</p>
          <p>Averages: {(good + neutral + bad) / 3}</p>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Please give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      <h2>Statistics</h2>

      <Statistics allClicks={allClicks}></Statistics>
    </div>
  )
}

export default App