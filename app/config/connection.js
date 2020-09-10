var mysql = require("mysql"); 
var connection; 


// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password:'Brooke1.',
    database: 'graph_master_db'
  });
};

connection.connect(); 

// Exports the connection for other files to use
module.exports = connection;
