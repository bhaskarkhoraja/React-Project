import React, { useContext, useState } from "react";
import initialNotes from "../context/notes/noteContext";

export const AddNotes = (props) => {
  const context = useContext(initialNotes);
  const { addNotes } = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = async (event) => {
    event.preventDefault(); //Prevent from reloading the page
    await addNotes(note.title, note.description, note.tag);
    setnote({ title: "", description: "", tag: "" });
    props.showalert("Notes added Successfully", "success");
  };

  const handleChange = (event) => {
    setnote({ ...note, [event.target.name]: event.target.value });
  };

  return (
    <div className="my-4">
      <h1>Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={handleChange}
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
            id="desc"
            name="description"
            value={note.description}
            onChange={handleChange}
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
            id="tag"
            name="tag"
            value={note.tag}
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            Tag for your notes
          </div>
        </div>
        <button
          disabled={
            note.title.length < 5 ||
            note.description.length < 5 ||
            note.tag.length < 5
          }
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add
        </button>
      </form>
    </div>
  );
};
