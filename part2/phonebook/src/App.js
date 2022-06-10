import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('')

  const handleInput = (e) => {
    setNewName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const personsObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(personsObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInput} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2 >Numbers</h2>
      <div>debug: {persons.map(persons => <div key={persons.name}>{persons.name}</div>)}</div>
    </div>
  )
}

export default App