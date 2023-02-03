export default function LeftDialogue( {text, portrait} ) {
    return (
        <div className="grid">
            <p> {text} </p>
            <img src={portrait}></img>
        </div>
    )
}