
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  const Header = (props) => {
    console.log(props)
    return <h1>{props.course}</h1>
  }

  const Part1 = (props) => {
    return (<p> {parts[0].name} {parts[0].exercises}</p>)
  }

  const Part2 = (props) => {
    return <p> {parts[1].name} {parts[1].exercises}</p>
  }

  const Part3 = (props) => {
    return <p>{parts[2].name} {parts[2].exercises}</p>
  }

  const Content = () => {
    return (
      <div>
        <Part1 ></Part1>
        <Part2 ></Part2>
        <Part3></Part3>
      </div>
    )
  }

  const Total = () => {
    return (
      <div>
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

      </div>
    )
  }

  return (
    <div>
      <Header course={course}>
      </Header>
      <Content></Content>
      <Total></Total>
    </div>
  )
}

export default App