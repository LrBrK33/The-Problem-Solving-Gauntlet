const express = require('express');
const app = express();
const port = 3000;
const connection = require('./db');
app.use(express.json());
var mysql = require('mysql');

// Model functions communicate with the database

var getAllUsers = function (callback) {
  const retrieveAllUsers = 'SELECT * FROM simple_table';

  connection.query(retrieveAllUsers, (err, results) => {
    callback(err, results);
  });
};

var addUser = function (params, callback) {
  const addNewUser =
    'INSERT INTO simple_table (first_name, last_name, email) VALUES (?, ?, ?)';

  connection.query(addNewUser, params, (err, results) => {
    if (err) callback(err);
    callback(results);
  });
};

var deleteUser = function (params, callback) {
  const deleteUser = `DELETE FROM simple_table WHERE first_name = ?`;

  connection.query(deleteUser, params, (err, results) => {
    if (err) callback(err);
    callback(results);
  });
};

// Controllers handle incoming requests from client
app.get('/users', (req, res) => {
  // res.send('Hello World!')
  getAllUsers((err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/users', (req, res) => {
  var params = Object.values(req.body);
  addUser(params, (err, results) => {
    if (err) res.status(404).send(err);
    res.send('Successfully added user');
  });
});

app.delete('/users', (req, res) => {
  var params = Object.values(req.body);
  deleteUser(params, (err, results) => {
    if (err) res.status(404).send(err);
    res.send();
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// app.get('/', (req, res) => {
//   // hypothetical, we don't have a getAll function yet
//   getAll((err, results) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(results);
//     }
//   })
// })

// app.get('/cat', (req, res) => {
//   res.send('Meow')
// })

// app.post('/', (req, res) => {
//   console.log(countLetters(req.body.test));

//   res.send(countLetters(req.body.test).toString())
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
