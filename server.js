const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("hello server");
});
app.get("/chicken", function (req, res) {
  res.send("hello server, i'm here to serve you delicious chicken");
});

app.get('/idli', (req,  res) => {
    var customized_idli = {
        name: 'rava idli',
        size: '10 cm dia',
        is_sambhar: true,
        is_chutney: true
    }
    res.send(customized_idli); 
})

app.listen(3000);
