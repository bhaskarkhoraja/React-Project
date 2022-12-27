import React, { useContext } from "react";
import initialNotes from "../context/notes/noteContext";

export const NotesItems = (props) => {
  const { note, updateNote } = props;

  const context = useContext(initialNotes);
  const { deleteNotes } = context;

  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
        <div className="updateButtons">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              updateNote(note);
            }}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              deleteNotes(note._id);
              props.showalert("Note Deleted Successfully", "success");
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
