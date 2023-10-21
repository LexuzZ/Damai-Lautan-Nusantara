module.exports = (app) => {
  const tickets = require("../controllers/ticket.controller");
  const router = require("express").Router();

  router.get("/", tickets.findAll);
  app.use("/api/tickets", router);
};
