import React from "react";
import dln from "./dln.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <img src={dln} alt="react logo" width="50" />
        <a className="navbar-brand  p-1" href="#">
          PT. DAMAI LAUTAN NUSANTARA
        </a>
        <a className="navbar-brand text-info">CONNECTING INDONESIA</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
