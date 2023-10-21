const db = require("../models");
const Ticket = db.tickets;

exports.findAll = (req, res) => {
  Ticket.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        messsage: err.message || "Some error",
      });
    });
};
