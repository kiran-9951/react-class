



const TextComponent = (props) => {
    const {name,age} = props.children
    
    return (<>
        <h3>{age}</h3>
        <h1>{name}</h1>
        </> );
}

export default TextComponent;
