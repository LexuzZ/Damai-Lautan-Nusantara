import react, { useState, useEffect } from "react";
import axios from "axios";

function Homescreen() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("/api/tickets/");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home Screen</h1>
      <h1>{data.length}</h1>
    </div>
  );
}

export default Homescreen;
