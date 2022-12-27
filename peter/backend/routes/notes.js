const express = require("express");
const router = express.Router();
// For getting user details
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");

// Route 1: create a user using: GET "/api/notes/fetchallnotes" No login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Somthing went wrong");
  }
});

// Route 2: add notes using : POST "/api/notes/addnote" Login required
router.post(
  "/addnotes",
  fetchuser,
  [
    body("title", "Too short title").isLength({ min: 3 }),
    body("description", "Too short description").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      // If there are error then, return bad request and error message
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();
      res.json(savedNote);
    } catch (error) {
      console.log(error);
      res.status(500).send("Somthing went wrong");
    }
  }
);

// Route 3: updating notes using : PUT "/api/notes/updatenotes:id" Login required
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;

  try {
    // create new note to exchange the note with
    const newNote = {};

    // If key new keyvalue is available store it in newNote
    // E.G -> If only title is provided, only it will be stored in newNote. Please see line 82 as well
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    // Find the notes to be updated and update it
    let notes = await Notes.findById(req.params.id);

    // Check if note exists
    if (!notes) {
      return res.status(404).send("Not Found");
    }
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Request Unauthorized");
    }

    // Find by ID and Update it
    // If newNote contain only title, only the value of title will be updated. The rest of the data will be same as before
    // New true means if new key value is added it will be cerated automatically
    notes = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(notes);
  } catch (error) {
    console.log(error);
    res.status(500).send("Somthing went wrong");
  }
});

// Route 3: delete existing notes : DELETE "/api/notes/deletenotes:id" Login required
router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  try {
    // Find the notes to be updated and delet it
    let notes = await Notes.findById(req.params.id);

    // Check if note exists
    if (!notes) {
      return res.status(404).send("Not Found");
    }
    if (notes.user.toString() !== req.user.id) {
      return res.status(401).send("Request Unauthorized");
    }

    // Find by ID and Update it
    // New true means if new key value is added it will be cerated automatically
    notes = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "The notes was deleted successfully", notes: notes });
  } catch (error) {
    console.log(error);
    res.status(500).send("Somthing went wrong");
  }
});
module.exports = router;
