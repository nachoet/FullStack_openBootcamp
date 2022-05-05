
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
    return <h1>{props.course}</h1>
  }

  const Parts = (props) => {
    return ((parts.map(value =>
      <div key={value.name}>
        <p>{value.name}</p>
        <p>{value.exercises}</p>
      </div>
    )))
  }

  const Content = () => {
    return (
      <div>
        <Parts parts={parts}></Parts>
      </div>
    )
  }

  const Total = (props) => {
    console.log(props)

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
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App