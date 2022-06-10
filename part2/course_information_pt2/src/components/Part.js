
const Part = ({ part }) => {
    return (
        part.parts.map(
            p => {
                // console.log(part);
                return (
                    <div key={p.id}>
                        {p.name} {p.exercises}
                    </div>
                )
            }
        )
    )

}


export default Part