var models = require('../models');


module.exports = {
  get: function (req, res) {
    models.messages.getAll( (err, data) => {
      if (err) {
        res.sendStatus(404);
      } else {
        res.writeHead(200).end(JSON.stringify(data));
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.messages.create( req.body, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(400);
      } else {
        res.writeHead(200).end(JSON.stringify(data));
      }
    });
  } // a function which handles posting a message to the database
};
