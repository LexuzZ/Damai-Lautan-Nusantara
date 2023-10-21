const express = require("express");

const DBConfig = require("./db");
// const ticketRoute = require("./routes/ticketRoute");
const app = express();
// app.use("/api/ticket", ticketRoute);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const db = require("./models/");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("db connect");
  })
  .catch((err) => {
    console.log("cannot connect db", err);
    process.exit;
  });
app.get("/", (req, res) => {
  res.json({
    message: "welcome",
  });
});
require("./routes/tiket.route")(app);
const PORT = 5000;
app.listen(PORT, () => {
  console.log("server ready on http://localhost:5000");
});
