const express = require("express");
const router = express.Router();

const Ticket = require("../models/ticket");

router.get("/getallticket", async (req, res) => {
  try {
    const ticket = await Ticket.find({});
    res.send(ticket);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
