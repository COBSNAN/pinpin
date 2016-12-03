var config = require("./mysqlConfig.json");
var mysql = require('mysql');
var connection = mysql.createConnection(config);

module.exports = connection;