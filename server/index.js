const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/transactions', (req, res) => {
  db.getAllTransactions((err, data) => {
    res.send(data);
  })
});

app.get('/api/categories', (req, res) => {
  db.getAllCategories((err, data) => {
    res.send(data);
  })
});

app.get('/api/category', (req, res) => {
  db.getACat(req.body.cat, (err, data) => {
    res.send(data);
  })
});

app.post('/api/categories', (req, res) => {
  db.addACat(req.body.cat, req.body.budget, (err, data) => {
    res.send(data);
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
