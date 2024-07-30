import React from 'react'

const NotesItem = ({note}) => {
  return (
    <div>
      {note.title}<br/>
      {note.description}
      
    </div>
  )
}

export default NotesItem
