var mysql = require('mysql');

var connection = mysql.createConnection({
  host      : 'catan-scoreboard.crso7nwhsf8f.us-east-2.rds.amazonaws.com',
  port      : '3306',
  user      : 'sheeplord',
  password  : '!!J2WTye!kvCCF',
  database  : 'CatanScoreBoard'
});

connection.connect(function(err) {
  if (err) {
    console.error("Database failed " + err.stack);
    return;
  }
  console.log("Connected to Database")
});

connection.query('SELECT player_name from Players where player_ID >= 3', function (error, results, fields){
  console.log(results.map(p => p.player_name))

})

connection.end();
