// server/index.js

const path = require('path');
const express = require("express");
const mysql = require('mysql');

const PORT = process.env.PORT || 3001;
const app = express();

const connection = mysql.createConnection({
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

connection.query('SELECT player_name from Players', function (error, results, fields){
  app.get("/api", (req, res) => {
    res.json({message: results.map(p=>p.player_name)})
  })
})

// Have node serve the filels for our built react app
app.use(express.static(path.resolve(__dirname, '../client/build')))

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
});


connection.end();
