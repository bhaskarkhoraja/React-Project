var jwt = require("jsonwebtoken");

const JWT_SECRET = "peterisagooddog";

const fetuser = (req, res, next) => {
  // get user from token and add it to the request
  const token = req.header("auth-token");

  // If the token is wrong send code 401
  if (!token) {
    res.status(401).send({ error: "Please use a valid token" });
  }

  // Verify if the token is correct
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please use a valid token" });
  }
};

module.exports = fetuser;
