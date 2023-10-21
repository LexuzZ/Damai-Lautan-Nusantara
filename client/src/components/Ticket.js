import React from "react";

function Ticket({ ticket }) {
  return (
    <div className="col-md-4 ">
      <h1>{ticket.nameOfShip}</h1>
      <p>Kelas : {ticket.classOfDeparture}</p>
      <p>Tipe Kendaraan : {ticket.vehicleType}</p>
      <p>Harga Tiket : {ticket.ticketPrice}</p>
      <p>Rute Penyeberangan : {ticket.route}</p>
      <p>Deskripsi : {ticket.description}</p>
      <div style={{ float: "right" }}>
        <button className="btn btn-primary">View Detaails</button>
      </div>
    </div>
  );
}
export default Ticket;
