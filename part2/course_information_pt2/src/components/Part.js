const Part = ({ part }) =>
    part.map(p => {
        return (
            <p key={p.id}>
                {p.name} {p.exercises}
            </p>
        )
    })

export default Part