const express = require("express");
const app = express();
const db = require("./db.js");
const Person = require("./models/person.js");
const MenuItem = require("./models/menu.js");
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

app.post("/menu", async (req, res) => {
  try {
    const data = req.body;

    const newMenu = new MenuItem(data);
    const savedmenu = await newMenu.save();
    console.log("new menu saved");
    res.status(200).json(savedmenu);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

app.get("/menu", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("menu fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

app.get("/person/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
