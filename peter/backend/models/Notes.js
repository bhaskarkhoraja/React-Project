const mongoose = require("mongoose");

const { Schema } = mongoose;

// user's type is objectid and there must be a reference
// reference taken from models/User.js line 22
const NoteSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId
    ,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    default: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// create a collection named notes
const Note = mongoose.model("notes", NoteSchema);
module.exports = Note;
