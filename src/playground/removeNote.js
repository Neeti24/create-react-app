import React from 'react';

const Note = ({ note, removeNote }) => {
    const removeNote = (title) => {
    dispatch({
        type : 'REMOVE_NOTE',
        title
    })
    // setNotes(notes.filter((note) => note.title !== title))
}

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

export  { Note as default };