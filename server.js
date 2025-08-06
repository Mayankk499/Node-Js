const express = require("express");
const app = express();
const db = require("./db.js");
const Person = require("./models/person.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hello server");
});
// POST method to add data in database...
app.post("/person", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const savedPerson = await newPerson.save();
    console.log("data saved");
    res.status(200).json(savedPerson);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
// GET method to get data of person from database..
app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
