import React, {useContext} from "react";
import ContextNote from "../Context/notes/contextNote"; //import ContextNote to access NoteState
import { MdDeleteForever, MdEdit } from "react-icons/md";

const NotesItem = ({ note }) => {
  const NoteContextValue = useContext(ContextNote);
  const { deleteNote } = NoteContextValue;
  return (
    <div className=" w-1/3">
      <div className="flex flex-col m-4 rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          {/* tag is pending */}
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {note.title}
          </h5>
          <p className="block font-sans text-lg font-semibold leading-relaxed text-inherit antialiased">
            {note.description}
          </p>

          <div className="tool-section flex justify-end items-center gap-8 text-slate-200 font-bold mt-10">
            <div className="delte flex gap-2 bg-red-500 py-2 px-3 rounded-full cursor-pointer" onClick={()=>deleteNote(note._id)}>
              <p>Delete Note</p>
              <MdDeleteForever size={24} />
            </div>
            <div className="edit flex gap-2 bg-green-500 py-2 px-3 rounded-full cursor-pointer">
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
