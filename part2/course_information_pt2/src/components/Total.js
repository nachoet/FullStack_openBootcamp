
const Total = ({ parts }) => {
    const sum = parts.reduce(
        (prev, curr) => prev + curr.exercises, 0
    )
    return <p>Number of exercises {sum}</p>
}

export default Total