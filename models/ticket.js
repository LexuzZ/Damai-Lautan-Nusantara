const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    nameOfShip: {
      type: String,
      require: true,
    },
    classOfDeparture: {
      type: String,
      require: true,
    },

    vehicleType: {
      type: String,
      require: true,
    },
    ticketPrice: {
      type: Number,
      require: true,
    },
    route: {
      type: String,
      require: true,
    },

    currentBooks: {},
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const ticketModels = mongoose.model("ticket", ticketSchema);

module.exports = ticketModels;
