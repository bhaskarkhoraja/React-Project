/* import { useState } from "react"; */
/* import NoteContext from "./noteContext"; */
/**/
/* const NoteState = (props)=>{ */
/*   const s1 = { */
/*     "name":"Peter", */
/*     "age":"4", */
/*   } */
/*   const [state, setState] = useState(s1); */
/**/
/*   const update =()=>{ */
/*     setTimeout(() => { */
/*       setState({ */
/*         "name":"John Cena", */
/*         "age":"5", */
/*       }) */
/*     }, 1000); */
/*   } */
/**/
/*   return( */
/*     <NoteContext.Provider value = {{state,update}}> */
/*       {props.children} */
/*     </NoteContext.Provider> */
/*   ) */
/* } */
/**/
/* export default NoteState; */
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setnotes] = useState(notesInitial);

  // Fetch notes
  const fetchNotes = async () => {
    // API Calls
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth"),
      },
    });

    const initialNotes = await response.json();
    setnotes(initialNotes);
  };

  // Add notes
  const addNotes = async (title, description, tag) => {
    // API Calls
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth"),
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    const newNotes = await response.json();
    setnotes(notes.concat(newNotes)); // Add note to notes
  };

  // Delete notes
  const deleteNotes = async (id) => {
    // API Calls
    await fetch(`${host}/api/notes/deletenotes/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth"),
      },
    });

    // Remove that notes from object newNote
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setnotes(newNote);
  };

  // edit notes
  const editNotes = async (id, title, description, tag) => {
    // API Calls
    await fetch(`${host}/api/notes/updatenotes/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth"),
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        console.log("matched");
        break;
      }
    }
    setnotes(newNotes);
    console.log(notes);
    console.log(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNotes, deleteNotes, editNotes, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
