const express = require("express");
const app = express();
const db = require("./db.js");
require("dotenv").config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Person = require("./models/person.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

// Middleware

const logRequest = (req, res, next) => {
  console.log(
    `${new Date().toLocaleString()} Request made to : ${req.originalUrl}`
  );
  next();
};

app.get("/", logRequest, function (req, res) {
  res.send("Welcome to our Hotel Site");
});

app.use(logRequest);

app.use(
  new LocalStrategy(async (USERNAME, password, done) => {
    // Authentication logic goes here

    try {
      console.log("received credentials:", USERNAME, password);
      const user = Person.findOne({ username: USERNAME });
      if (!user) return done(null, false, { message: "Incorrect username." });
      const isPasswordMatch = user.password === password ? true : false;
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password" });
      }
    } catch (error) {}
  })
);

app.get("/", function (req, res) {
  res.send("hello server");
});

const personRoutes = require("./routes/personRoutes.js");
app.use("/person", personRoutes);

const menuRoutes = require("./routes/menuRoutes.js");
const router = require("./routes/personRoutes.js");
const Person = require("./models/person.js");
app.use("/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
