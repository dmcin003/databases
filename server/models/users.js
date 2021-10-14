var db = require('../db');

module.exports = {
  getAll: function (callback) {
    db.query('SElECT * FROM users', (err, data) =>{
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  create: function ({username}, callback) {
    db.query('SElECT * FROM users', (err, data) =>{
      if (err) {
        callback(err, null);
      } else {
        var listOfNames = [];
        for (var i = 0; i < data.length; i ++) {
          listOfNames.push(data[i].user);
        }
        if (!listOfNames.includes(username)) {
          db.query(`INSERT INTO users (user) VALUES('${username}')`, (err, data) => {
            if (err) {
              callback(err, null);
            } else {
              callback(null, data);
            }
          });
        } else {
          callback(null, data);
        }
      }
    });
  }
};