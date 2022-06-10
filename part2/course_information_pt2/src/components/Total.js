
const Total = ({ total }) => {

    const sum = total.parts.reduce(
        (prev, curr) => prev + curr.exercises, 0
    )
    return <p><strong>Number of exercises {sum}</strong></p>
}

export default Total