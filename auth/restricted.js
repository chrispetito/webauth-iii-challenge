const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, secrets.jwtSecret, (error, decodeToken) => {
      if (error) {
        res.status(401).json({ message: "You shall not pass!" });
      } else {
        req.user = {
          department: decodeToken.department,
          username: decodeToken.username
        };
      }
    });
  } else {
    res.status(400).json({ message: "Please provide a token" });
  }
};
