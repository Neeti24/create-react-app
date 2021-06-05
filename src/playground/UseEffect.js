const Note = ({ note, removeNote }) => {
    // using useEffect as a componentDidNotMount
    useEffect(() => {
        console.log('seeting up effect');

        // to clean useEffect
        return () => {
            console.log('cleaning up effect');
        }
    }, [])

    return (
        <div>
        <h3>{note.title}</h3>
        <p>{note.body}</p>
        <button onClick={() => removeNote(note.title)}>x</button>
    </div>
    )
}