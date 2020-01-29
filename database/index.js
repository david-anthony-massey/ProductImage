const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getImage = function(prodId, callback) {
  connection.query(`select imgUrl from imageurls where ProductId = '${prodId}';`, (err, data) => {
    if (err) {
      console.error('database getImage error');
    } else {
      callback(null, data);
    }
  })
};

const addTo = function(id, url, callback) {
  connection.query(`Insert into imageUrls (productId, imgUrl) values ('${id}', '${url}')`, (err, data) => {
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
