import react from "react";
import dln from "./dln.png";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <img src={dln} alt="react logo" width="50" />
        <a class="navbar-brand  p-1" href="#">
          PT. DAMAI LAUTAN NUSANTARA
        </a>
        <a class="navbar-brand text-info">CONNECTING INDONESIA</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
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
