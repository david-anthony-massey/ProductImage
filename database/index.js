const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getImage = function(prodId, callback) {
  connection.query(`select imgUrl, productName from ImageUrls where ProductId = '${prodId}';`, (err, data) => {
    if (err) {
      throw err;
    } else {
      // console.log(data);
      callback(null, data);
    }
  })
};

const addTo = function(id, url, name, callback) {
  connection.query(`Insert into imageUrls (productId, imgUrl, productName) values ('${id}', '${url}', '${name}')`, (err, data) => {
    if (err) {
      console.error('database addTo error');
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  addTo,
  getImage
};
