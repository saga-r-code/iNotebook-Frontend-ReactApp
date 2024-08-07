import { useState } from "react";
import ContextNote from "./contextNote";

const NoteState = ({ children }) => {
  const host = process.env.REACT_APP_BACKEND_URL;
  const initialNote = [];
  const [notes, setnotes] = useState(initialNote);

  // Get all notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
        },
      });
      const json = await response.json();
      // console.log(json);
      setnotes(json); // Assuming the response is the list of notes
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // AddNote
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      // console.log(json);

      // Add note on client
      const newNote = {
        _id: json._id, // Assuming the backend returns the new note with its _id
        user: "66a404eb5f82c89799e5bd19",
        title: title,
        description: description,
        tag: tag,
        date: new Date().toISOString(), // Use the current date
        __v: 0,
      };
      setnotes(notes.concat(newNote));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // DeleteNote
  const deleteNote = async (id) => {
    try {
      // API call to delete the note
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
        },
      });
      // Remove note from client
      const newNotes = notes.filter((note) => note._id !== id);
      setnotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // EditNote
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PATCH",  
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhNDA0ZWI1ZjgyYzg5Nzk5ZTViZDE5In0sImlhdCI6MTcyMjAyNTIxN30.xH6r4r_2Ie1EMg-tp6KMRN5z19HMjIEgB4jMR570U5E",
        },
        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      // console.log(json);

      // Update note on client
      const updatedNotes = notes.map((note) =>
        note._id === id ? { ...note, title, description, tag } : note
      );
      setnotes(updatedNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <ContextNote.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {children}
    </ContextNote.Provider>
  );
};

export default NoteState;
