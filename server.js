const express = require("express");
const app = express();
const db = require("./db.js");

const MenuItem = require("./models/menu.js");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hello server");
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

const personRoutes = require('./routes/personRoutes.js')
app.use('/person', personRoutes);



app.listen(3000, () => {
  console.log("listening on port 3000");
});
