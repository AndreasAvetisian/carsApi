const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'AvGo263739423',
  database: 'carsdb'
});
module.exports = connection;