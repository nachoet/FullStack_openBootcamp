const Header = ({ header }) => {
    // console.log(header);
    return (
        <div key={header.id}>
            <h1>
                {header.name}
            </h1>
        </div>
    )
}

export default Header