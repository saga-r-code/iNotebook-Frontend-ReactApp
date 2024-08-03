import { useState } from "react";
import ContextNote from "./contextNote";

const NoteState = ({children}) => {
    const initialNote = [
        {
          "_id": "66a4217dfe0a05c94e0ad90f3",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "Client",
          "description": "Nothing to print",
          "tag": "public",
          "date": "2024-07-26T22:21:49.439Z",
          "__v": 0
        },
        {
          "_id": "66a913df69771cd5dec8545e4",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "My Notes",
          "description": "Nothing to print 2",
          "tag": "public 2",
          "date": "2024-07-30T16:25:03.213Z",
          "__v": 0
        }, {
          "_id": "66a4217dfe0a05c94e0ad90f451",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "Client",
          "description": "Nothing to print",
          "tag": "public",
          "date": "2024-07-26T22:21:49.439Z",
          "__v": 0
        }, 
        {
          "_id": "66a913df69771cd5dec8545e454",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "My Notes",
          "description": "Nothing to print 2",
          "tag": "public 2",
          "date": "2024-07-30T16:25:03.213Z",
          "__v": 0
        }, {
          "_id": "66a4217dfe0a05c94e0ad90f45231",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "Client",
          "description": "Nothing to print",
          "tag": "public",
          "date": "2024-07-26T22:21:49.439Z",
          "__v": 0
        },  
      ]
      
      const [notes, setnotes] = useState(initialNote)

      //AddNote
      const addNote = (title, description, tag) =>{
        console.log("Addes")
        const note = {
          "_id": "66a4217dfe0a05c94e0ad90rh",
          "user": "66a404eb5f82c89799e5bd19",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-07-26T22:21:49.439Z",
          "__v": 0
        }
        setnotes(notes.concat(note))
      }

      //DeleteNote
      const deleteNote = (id) => {
        console.log("Deleted"+ id);
        const newNotes = notes.filter((note) => {return note._id !== id});
        setnotes(newNotes);
      };

      //EditNote
      const editNote = () =>{

      }

  return (
        <ContextNote.Provider value={{notes, addNote, deleteNote, editNote}}>
            {children}
            </ContextNote.Provider>
  )
}

export default NoteState
