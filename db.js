const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://haerultaka255:IpnLEsyvVR7qqWRk@newcluster.f1rc51m.mongodb.net/mern-ticketing";
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;
connection.on("error", () => {
  console.log("mongodb connection fail");
});
connection.on("connected", () => {
  console.log("mongodb connection success");
});
module.exports = mongoose;
