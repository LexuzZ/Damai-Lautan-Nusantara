module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      nameOfShip: String,
      classOfDeparture: String,
      vehicleType: String,
      ticketPrice: Number,
      route: String,
      description: String,
    },
    {
      currentBooks: [],
    },
    {
      timestamps: true,
    }
  );
  schema.method("toJSON", function () {
    const { _v, _id, ...object } = this.toObject();
    object.id = _id;

    return object;
  });

  const Ticket = mongoose.model("tickets", schema);
  return Ticket;
};
