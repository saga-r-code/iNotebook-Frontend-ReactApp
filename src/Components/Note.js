import React, { useContext, useEffect } from "react";
import ContextNote from "../Context/notes/contextNote";
import NotesItem from "./NotesItem";
import AddNote from './AddNote';

const Note = () => {
  const NoteContextValue = useContext(ContextNote);
  const { notes, getNotes } = NoteContextValue;

  useEffect(() => {
    getNotes();
  }, []);

  console.log(notes); // Verify if notes are correctly fetched

  return (
    <>
      <AddNote />
      <div className="flex flex-col gap-8 justify-center items-center">
        <h2 className="text-4xl font-bold">Your Notes</h2>
        <div className="notes w-[80%] flex flex-wrap">
          {notes.length > 0 ? (
            notes.map((note) => (
              <NotesItem note={note} key={note._id} />
            ))
          ) : (
            <p>No notes available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Note;
