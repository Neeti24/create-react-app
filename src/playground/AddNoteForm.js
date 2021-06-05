import React, { useState } from 'react';

const AddNoteForm = ({ dispatch }) => {
        // const noteData = JSON.parse(localStorage.getItem('notes'))
        // const [notes, setNotes] = useState(noteData || []);
        // const [notes, setNotes] = useState([]);
        const [title, setTitle] = useState('');
        const [body, setbody] = useState('');
    
    
        const addNote = (e) => {
            e.preventDefault()
            dispatch({
                type : 'ADD_NOTE',
                title, 
                body
            })
            // setNotes([
            //     ...notes,
            //     { title, body }
            // ])
            setTitle('')
            setbody('')
        }

    return (
        <>
          <p>Add Note</p>
          <form onSubmit={addNote}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea value={body} onChange={(e) => setbody(e.target.value)}></textarea>
            <button>Add Note</button>
           </form>
        </>
    )
}

export { AddNoteForm as default };