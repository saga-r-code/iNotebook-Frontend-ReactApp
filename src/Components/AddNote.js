import React, { useContext, useState } from "react";
import ContextNote from "../Context/notes/contextNote"; //import ContextNote to access NoteState

const AddNote = () => {
  const NoteContextValue = useContext(ContextNote);
  const { addNote } = NoteContextValue;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleChange = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    // setNote({ title: "", description: "", tag: "" });//Clear the form after submission
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form method="get" onSubmit={handleChange}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={onChange}
                placeholder="Enter the book title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Description
              </label>
              <textarea
                rows="4"
                name="description"
                id="description"
                onChange={onChange}
                placeholder="Enter the note description here..."
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="tag"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Note Tag
              </label>
              <input
                type="text"
                name="tag"
                id="tag"
                onChange={onChange}
                placeholder="Enter Tag here"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                onClick={handleChange}
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
