import { useState } from 'react'
import './App.css'

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

  const Button = ({ handleClick, text }) => {
    return (
      <button onClick={handleClick}>{text}</button>
    )
  }

  const StatisticLine = (props) => {
    return (

      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td >{props.text}</td>
            <td> {props.value}</td>
          </tr>
        </tbody>
      </table>

    )
  }

  const Statistics = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <p>No feedback given yet!</p>
      )

    } else {
      return (
        <div>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />

          <StatisticLine text="Overall" value={good + neutral + bad} />
          <StatisticLine text="Average" value={(good + neutral + bad) / 3} />
          <StatisticLine text="Positive" value={good / (good + neutral + bad) * 100 + `%`} />
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Please give feedback</h1>
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="neutral" />
      <Button handleClick={handleBad} text="bad" />

      <h2>Statistics</h2>

      <Statistics allClicks={allClicks}></Statistics>
    </div>
  )
}

export default App