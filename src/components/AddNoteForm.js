import React, { useState, useContext, useReducer } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';

const AddNoteForm = () => {
    const { dispatch } = useContext(NotesContext)
    const [title, setTitle] = useState('');
    const [body, setbody] = useState('');
    const position = useMousePosition()
    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        setTitle('')
        setbody('')
    }

    return (
        <div>
            <p>Add Note {position.x} {position.y}</p>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <textarea value={body} onChange={(e) => setbody(e.target.value)}></textarea>
                <button>Add Note</button>
            </form>
        </div>
    )
}

export { AddNoteForm as default };