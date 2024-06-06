import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Movie from "./pages/Movie/Movie"
import Booking from "./pages/Booking/Booking"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/movie" element = {<Movie></Movie>} />
        <Route path="/booking" element = {<Booking></Booking> }/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
