const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllTransactions = function(callback) {
  connection.query(`Select * from transactions`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  })
};

const getAllCategories = function(callback) {
  connection.query(`Select * from categories`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  })
};

const addACat = function(cat, budg, callback) {
  connection.query(`Insert ignore into categories (category, budget) values ('${cat}', '${budg}')`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  })
};

const getACat = function(cat, callback) {
  connection.query(`Select * from transactions inner join categories on category_id = categories.id where category = '${cat}'`, (err, data) => {
    if (err) {
      throw err;
    } else {
      callback(null, data);
    }
  })
};

module.exports = {
  getAllTransactions,
  getAllCategories,
  addACat,
  getACat
};
