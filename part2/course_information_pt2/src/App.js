import Total from './components/Total'
import Content from './components/Content'

const Header = ({ name }) => <h1>{name}</h1>

const Course = ({ course }) =>
  <>
    <Header name={course.name} />
    <Content course={course} />
    <Total parts={course.parts} />
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