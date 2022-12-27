const express = require("express");
const User = require("../models/User");
const router = express.Router();

// For validation
const { body, validationResult } = require("express-validator");
// For hashing
const bcrypt = require("bcryptjs");
// For providing token
var jwt = require("jsonwebtoken");
// For getting user details
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "peterisagooddog";

// Route 1: create a user using: POST "/api/auth/createuser" No login required
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password must be minimum 5 letter").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;

    // If there are error then, return bad request and error message
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    // Check weither the user exits
    try {
      let user = await User.findOne({ email: req.body.email });

      if (user) {
        return res.status(400).json({
          success,
          error: "This email is already registered in our system",
        });
      }
      const salt = await bcrypt.genSalt(10);
      secPassword = await bcrypt.hash(req.body.password, salt);

      // Create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
      });

      // get id of user
      const data = {
        user: {
          id: user.id,
        },
      };

      success = true;
      // generate token for the user
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success, authToken });

      // Catch error, not sure what error might occur. So just for formatlity
    } catch (error) {
      console.log(error);
      res.status(500).send("Somthing went wrong");
    }
  }
);

// Route 2: Authenticate user : POST "api/auth/login" no login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // If there are error then, return bad request and error message
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    // Pulling email and password from database
    const { email, password } = req.body;
    try {
      // Check for email in system
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success, error: "Wrong credentials" });
      }

      // Compare password
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success, error: "Wrong credentials" });
      }

      // get id of user
      const data = {
        user: {
          id: user.id,
        },
      };

      success = true;
      // generate token for the user
      const authToken = jwt.sign(data, JWT_SECRET);
      res.json({ success, authToken });
    } catch (error) {
      console.log(error);
      res.status(500).send({ success, error: "Internal error occured" });
    }
  }
);

// Route 3: Get login user details : POST "api/auth/getuser" no login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    // user id appended in request on fetchuser.js line 14
    userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal error occured");
  }
});
module.exports = router;
