import React, { useState, useEffect } from "react";
import axios from "axios";
import Ticket from "../components/Ticket";

const Homescreen = () => {
  const [tickets, settickets] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setloading(true);
        const data = (await axios.get("/api/tickets/")).data;
        settickets(data);
        setloading(false);
      } catch (error) {
        seterror(true);
        setloading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          tickets.map((ticket) => {
            return (
              <div className="col-md-9">
                <Ticket ticket={ticket} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Homescreen;
