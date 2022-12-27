import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import initialNotes from "../context/notes/noteContext";
import { AddNotes } from "./AddNotes";
import { NotesItems } from "./NotesItems";

export const Notes = (props) => {
  const context = useContext(initialNotes);
  const { notes, fetchNotes, editNotes } = context;
  const navigate = useNavigate();
  const [note, setnote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      fetchNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const ref = useRef(null);

  const updateNote = (currentNote) => {
    ref.current.click();
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = async (event) => {
    event.preventDefault(); //Prevent from reloading the page
    editNotes(note.id, note.etitle, note.edescription, note.etag);
    props.showalert("Note Updated Successfully", "success");
  };

  const handleChange = (event) => {
    setnote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <>
      <AddNotes showalert={props.showalert} />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={handleChange}
                    value={note.etitle}
                  />
                  <div id="emailHelp" className="form-text">
                    Title for your Notes
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={handleChange}
                    value={note.edescription}
                  />
                  <div id="emailHelp" className="form-text">
                    Description for your Notes
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={handleChange}
                    value={note.etag}
                  />
                  <div id="emailHelp" className="form-text">
                    Tag for your notes
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                disabled={
                  note.etitle.length < 5 ||
                  note.edescription.length < 5 ||
                  note.etag.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container mx-2">
          {notes.length === 0 && "No notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <NotesItems
              key={note._id}
              updateNote={updateNote}
              note={note}
              showalert={props.showalert}
            />
          );
        })}
      </div>
    </>
  );
};
