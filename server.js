const express = require("express");

const app = express();
const DBConfig = require("./db");
const ticketRoute = require("./routes/ticketRoute");

app.use("/api/ticket", ticketRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("node server menggunakan nodemon"));
