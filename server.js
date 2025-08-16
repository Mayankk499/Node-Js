const express = require("express");
const app = express();
const db = require("./db.js");
require("dotenv").config({ debug: false });
const passport = require('./auth.js');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
// Middleware

const logRequest = (req, res, next) => {
  next();
};


app.use(logRequest);

app.use(passport.initialize());
const localMiddlewareAuth = passport.authenticate('local', {session: false})

app.get("/",function (req, res) {
  res.send("Welcome to our Hotel Site");
});

const personRoutes = require("./routes/personRoutes.js");
const menuRoutes = require("./routes/menuRoutes.js");

app.use("/person",localMiddlewareAuth ,  personRoutes);
app.use("/menu",menuRoutes);

const router = require("./routes/personRoutes.js");
const Person = require("./models/person.js");

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
