CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER(100),
  text VARCHAR(1000),
  roomname VARCHAR(40),
  userID INTEGER(100),
  PRIMARY KEY (id)
);

/* Create other tables and define schemas for them here! */
CREATE TABLE users (
id INTEGER(100),
user VARCHAR(40),
PRIMARY KEY (id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

