We're going to create a very simple server and database from scratch and make them talk to each other. I'm going to assume you already have node.js and Postman installed.

Throughout this guide I will provide the code needed to create a functioning app. I recommend you type every line to build muscle memory and take the time to fully understand the purpose of each line of code.

Express Documentation: https://expressjs.com/en/starter/installing.html
mysql Documentation: https://www.npmjs.com/package/mysql

****************************************
Part 1: Install modules and set up the file structure
****************************************
TODO: If you haven't already, create a root directory for your app and make that your working directory

TODO: Create package.json by running "npm init". Answer yes to the prompts, and when you get to "entry point:" enter "app.js" and it will create your main app file.

TODO: Install nodemon by running "npm install nodemon"

TODO: Install Express by running "npm install express"

TODO: Install the Node.js mysql module by running "npm install mysql"

TODO: Move your current index.js into the server directory

TODO: Create a subdirectory called 'db'

TODO: Create an 'index.js' file inside of the db directory

TODO: Open package.json and under "scripts:" add:
"start": "nodemon server/index.js"
so you can run nodemon with npm start.

****************************************
Part 2: Setup Your Server
****************************************
TODO: Write the following code into your app.js file:
********
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
********

Congratulations, you made a server!

TODO: Start your server by running 'npm start' in the terminal. In Postman, enter 'http://localhost:3000' for the URL and send a GET request to your server. It should respond with 'Hello World!' in the body.

Now lets set up the Database, then we'll come back to the server to add more functionality.

****************************************
Part 3: Setup Your Database
****************************************

TODO: Write the following code into db/index.js and change the ****** to match your information for mysql:
********
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : '******',
  password : '******',
  database : 'simple_db'
});

connection.connect();
********

TODO: Inside the db directory create a file called "schema.sql". This file, when initialized with mySQL, will create the database and a table pre-populated with sample data to play with. Copy the following code into that file:
********
CREATE DATABASE simple_db;

USE simple_db;

CREATE TABLE simple_table (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(50),
  PRIMARY KEY(id)
);

INSERT INTO simple_db (first_name, last_name, email) VALUES ('Jane', 'Doe', 'janedoe@gmail.com'), ('John', 'Doe', 'johndoe@gmail.com');
********

TODO: In terminal, make sure you are in your root directory and run the following:
mysql -uroot -p < db/schema.sql
and enter your mysql password.

TODO: Verify that your database and table successfully loaded by running:
mysql -uroot -p
and enter your password.
Run:
SHOW DATABASES;
and you should see 'simple_db'
Now run:
USE simple_db
then:
SHOW TABLES;
and you should see 'simple_table'

Congratulations, you have a database!

Now lets make the server and the database communicate.

****************************************
Part 4: Connecting the Server and Database
****************************************

TODO: The first thing we need to do is export our database connection. At the bottom of db/index.js insert the follow:
********
modules.exports = connections;
********

TODO: Now at the top of app.js insert the following:
********
const connection = require('../db')
********

*** Fun fact: if you point a 'require' statement to a directory (like '../db'), it will default to the index file located in that directory.

TODO: Let's start with creating a controller function and a model function for a GET request. Keep in mind that these could be abstracted to their own directories and files, but for simplicity we'll just write it in server/index.js. A controller function will handle the incoming requests from the client (in our case we are using Postman to simulate a client) and will call a model function depending on the parameters provided by the GET request.

TODO: Add app.use(express.json()) to top of app.js