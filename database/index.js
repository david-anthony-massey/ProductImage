const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getImage = function(prodId, callback) {
  connection.query(`Select imgUrl from imageUrls where ProductId = ${prodId}`, (err, data) => {
    if (err) {
      console.error('database get');
    } else {
      callback(null, data);
    }
  })
};

const addTo = function(id, url, callback) {
  connection.query(`Insert into imageUrls (productId, imgUrl) values ('${id}', '${url}')`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  addTo,
  getImage
};
