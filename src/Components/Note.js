import React, { useContext } from 'react'
import ContextNote from '../Context/notes/contextNote' //import ContextNote to access NoteState
import NotesItem from './NotesItem'

const Note = () => {
    const NoteContextValue = useContext(ContextNote)
    const {notes, setnotes} = NoteContextValue

  return (
    <div>
      <div className="notes my-10">
          <h2 className="text-3xl font-bold">Your Notes</h2>
          {notes.map((note)=>{
            return <NotesItem note={note}/>
          })}
        </div>
    </div>
  )
}

export default Note
