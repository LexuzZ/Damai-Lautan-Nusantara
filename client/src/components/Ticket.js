import React from "react";
import dln from "./public/batulayar.jpeg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
function Ticket({ ticket }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="row bs ">
      <div className="col-md-4 mt-3">
        <img src={dln} alt="react logo" className="picture-content" />
      </div>
      <div className="col-md-7 mt-3">
        <h1>{ticket.nameOfShip}</h1>
        <b>
          {""}
          <p>Kelas :{ticket.classOfDeparture}</p>
          <p>Tipe Kendaraan :{ticket.vehicleType}</p>
          <p>Harga Tiket :{ticket.ticketPrice}</p>
          <p>Rute Penyeberangan :{ticket.route}</p>
        </b>
        <div className="btn">
          <button className="btn btn-primary" onClick={handleShow}>
            view details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{ticket.nameOfShip}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevlabel="" nextlabel="">
            <Carousel.Item>
              <img className="d-block w-100 bigimg" src={dln} />
            </Carousel.Item>
          </Carousel>
          <p>{ticket.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Ticket;
