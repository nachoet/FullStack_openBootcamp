import Total from './Total'
import Header from './Header'
import Part from './Part'

const Course = ({ courses }) => {
    const [first, second] = courses
    // console.log(first, second);

    return (
        <>
            <Header header={first}></Header>
            <Part part={first}></Part>
            <Total total={first}></Total>
            <Header header={second} />
            <Part part={second}></Part>
            <Total total={second}></Total>
        </>
    )
}

export default Course