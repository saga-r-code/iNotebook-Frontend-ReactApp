import React from "react";


const NotesItem = ({ note }) => {
  return (
    <div className=" w-1/3">
      <div className="flex flex-col m-4 rounded-xl bg-slate-100 bg-clip-border text-gray-700 shadow-md">
        <div className="p-6">
          <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {note.title}
          </h5>
          <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {note.description} 
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesItem;
