import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homescreen from "./screen/Homescreen";

function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/home" exact element={<Homescreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
