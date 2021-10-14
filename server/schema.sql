CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
id INTEGER(100) NOT NULL AUTO_INCREMENT,
user VARCHAR(40),
PRIMARY KEY (id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER(100) NOT NULL AUTO_INCREMENT,
  text VARCHAR(1000),
  roomname VARCHAR(40),
  userID INTEGER(100),
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

