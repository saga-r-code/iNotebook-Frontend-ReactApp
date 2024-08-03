import React, { useContext } from "react";
import ContextNote from "../Context/notes/contextNote"; //import ContextNote to access NoteState
import NotesItem from "./NotesItem";
import AddNote from './AddNote'

const Note = () => {
  const NoteContextValue = useContext(ContextNote);
  const { notes } = NoteContextValue;

  return (
    <>
    <AddNote/>
    <div className="flex flex-col  gap-8 justify-center items-center">
      <h2 className="text-4xl font-bold">Your Notes</h2>
      <div className="notes w-[80%] flex flex-wrap">
        {notes.map((note) => {
          return <NotesItem note={note} key={note._id}/>;
        })}
      </div>
    </div>
    </>
  );
};

export default Note;
