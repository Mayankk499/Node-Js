const express = require("express");
const router = express.Router();
const Person = require("../models/person");
const {jwtAuthMiddleware, generateToken} = require('./../jwt');

// POST method to add data in database...
router.post("/signup", async (req, res) => {
  try {
    const data = req.body;

    const newPerson = new Person(data);

    const response = await newPerson.save();
    console.log("data saved");

    const payload = {
      id: response.id,
      username: response.username
    }

    const token = generateToken(payload);

    res.status(200).json({response: response, token: token});
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.post('/login', async(req, res,) => {
  try {
    const {username, password} = req.body;

    const user = await Person.findOne({username: username});
    if(!user || !(await user.comparePassword(password))){
      return res.status(401).json({error: 'Invalid username or password'});
    }

    const payload = {
      id: user.id,
      username:  user.username
    }
    const token = generateToken(payload);

    res.json({token})
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal login error" });
  }
})

// GET method to get data of person from database..
router.get("/",async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:workType", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "Person not found" }); 
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await Person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "Person not found" }); 
    }
    console.log('data deleted successfully');
    res.status(200).json({message: 'person deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
})

module.exports = router;

