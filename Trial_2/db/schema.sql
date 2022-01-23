DROP DATABASE simple_db;

CREATE DATABASE simple_db;

USE simple_db;

CREATE TABLE simple_table (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(50),
  PRIMARY KEY(id)
);

INSERT INTO simple_table (first_name, last_name, email) VALUES ('Jane', 'Doe', 'janedoe@gmail.com'), ('John', 'Doe', 'johndoe@gmail.com');