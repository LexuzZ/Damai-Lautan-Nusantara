const dbConfig = require("../db");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tickets = require("./ticket.model")(mongoose);

module.exports = db;
