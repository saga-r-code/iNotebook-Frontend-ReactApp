import React, { useContext } from "react";
import ContextNote from "../Context/notes/contextNote";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const NotesItem = ({ note }) => {
  const NoteContextValue = useContext(ContextNote);
  const { deleteNote, editNote } = NoteContextValue;

  const handleEditClick = () => {
    // Provide necessary parameters for editing
    editNote(note._id, note.title, note.description, note.tag);
  };

  return (
    <div className="w-1/3">
      <div className="flex flex-col m-4 rounded-xl bg-slate-100 text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
            {note.title}
          </h5>
          <p className="text-lg font-semibold">
            {note.description}
          </p>
          <div className="tool-section flex justify-end items-center gap-8 text-slate-200 font-bold mt-10">
            <div
              className="delete flex gap-2 bg-red-500 py-2 px-3 rounded-full cursor-pointer"
              onClick={() => deleteNote(note._id)}
            >
              <p>Delete Note</p>
              <MdDeleteForever size={24} />
            </div>
            <div
              className="edit flex gap-2 bg-green-500 py-2 px-3 rounded-full cursor-pointer"
              onClick={handleEditClick}
            >
              <p>Edit Note</p>
              <MdEdit size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
