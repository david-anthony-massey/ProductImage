const express = require("express");
const bodyParser = require("body-parser");
const db = require("../database");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

//response to componentDidMount pulls image info from db based on product id
app.get("/getImages", (req, res) => {
  db.getImage(req.query.productId, (err, data) => {
    if (err) {
      console.error("server get error");
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
