import { useState } from "react";
import ContextNote from "./contextNote";

const NoteState = ({children}) => {
    const initialNote = [
        {
          "_id": "66a4217dfe0a05c94e0ad90f",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "Client",
          "description": "Nothing to print",
          "tag": "public",
          "date": "2024-07-26T22:21:49.439Z",
          "__v": 0
        },
        {
          "_id": "66a913df69771cd5dec8545e",
          "user": "66a404eb5f82c89799e5bd19",
          "title": "My Notes",
          "description": "Nothing to print 2",
          "tag": "public 2",
          "date": "2024-07-30T16:25:03.213Z",
          "__v": 0
        }
      ]
      
      const [notes, setnotes] = useState(initialNote)
  return (
        <ContextNote.Provider value={{notes, setnotes}}>
            {children}
            </ContextNote.Provider>
  )
}

export default NoteState
