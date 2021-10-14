var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SELECT * FROM MESSAGES', (err, data) => {
      if (err) {
        console.log('something');
        callback(err, null);
      } else {
        //success
        console.log('This is our data: ', data);
        callback(null, data);
      }
    });
  }, // a function which produces all the messages
  create: function ({text, room, username}, callback) {
    //console.log('our data: ', typeof text, typeof room, typeof username);
    db.query(`INSERT INTO messages (text, roomname, userID) VALUES('${text}','${room}',(SELECT id FROM users where user='${username}'))`, (err, data) => {
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        console.log('this is being sent: ', data);
        callback(null, data);
      }
    });
  } // a function which can be used to insert a message into the database
};