const Header = ({ name }) => <h1>{name}</h1>

// const Total = ({ sum }) => <p>Number of exercises {sum}</p>

const Part = ({ part }) =>
  part.map(p => {
    return (
      <p key={p.id}>
        {p.name} {p.exercises}
      </p>
    )
  })

const Content = ({ course }) =>
  <>
    <Part
      part={course.parts}
    />
  </>

const Course = ({ course }) =>
  <>
    <Header name={course.name} />
    <Content course={course} />
  </>


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App