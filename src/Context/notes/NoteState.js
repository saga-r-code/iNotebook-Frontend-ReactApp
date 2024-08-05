const apiUrl = process.env.REACT_APP_BACKEND_URL;
import { useState } from "react";
import ContextNote from "./contextNote";

const NoteState = ({ children }) => {
  const host = apiUrl;
  const initialNote = []
  const [notes, setnotes] = useState(initialNote);

  //Get all notes
  // const getNotes = async () => {
  //   console.log("Addes");
  //   // Api Call
  //   const response = await fetch(`${host}/api/notes/fetchnotes`, {
  //     //fetch user notes
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-token":
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
  //     },
  //   });
    
  //   const json = await response.json()
  //   console.log(json)
  // };


  //AddNote
  const addNote = async (title, description, tag) => {
    console.log("Adding");

    // Api Call
    const data = await fetch(`${host}/api/notes/addnote`, {
      //fetch user notes
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = Response.json();

    //Add note on client
    const note = {
      _id: "66a4217dfe0a05c94e0ad90rh",
      user: "66a404eb5f82c89799e5bd19",
      title: title,
      description: description,
      tag: tag,
      date: "2024-07-26T22:21:49.439Z",
      __v: 0,
    };
    setnotes(notes.concat(note));
  };

  //DeleteNote
  const deleteNote = (id) => {
    //API call Reamining
    console.log("Deleted" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNotes);
  };

  //EditNote
  const editNote = async (id, title, description, tag) => {
    //API call Reamining
    const data = await fetch(`${host}/api/notes/updatenote/${id}`, {
      //fetch user notes
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = data.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];

      if (element._id !== id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <ContextNote.Provider value={{ notes, addNote, deleteNote, editNote,  }}> 
    {/* //getNotes */}
      {children}
    </ContextNote.Provider>
  );
};

export default NoteState;
