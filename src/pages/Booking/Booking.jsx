import { NavLink } from "react-router-dom";
import './Booking.css';
import {seats} from './seats.js'
import screen from './screen.svg'
import { useState } from "react";
// component
function Booking() {
  // state
  const [chairs, setChairs] = useState(seats)
  // function
  const handleSeat = (id) => {

  }
    return (

      <div className="booking">
        <header>
          <div className="container">
            <button id="arrow" ></button>
            <h3>select seats</h3>
            <button id="calendar" ></button>
          </div>
        </header>
        <div className="container">
              <img id="screen" src={screen} alt="" />

            <div className="seats">
              {
                chairs.map((el,id) => 
                <div className={"seat " + (el.available === false ? "reserved" : "")} onClick={() => handleSeat(id)} > </div>
                )
              }
            </div>
            <div className="status">
            <p> <span>•</span>available</p>
            <p> <span id="orange" >•</span>selected</p>
            <p> <span id="white" >•</span>reserved</p>
            </div>
            <div className="time">
              <button>12:00AM</button>
              <button>3:00PM</button>
              <button>6:00PM</button>
            </div>
            <div className="buttons">
              <button>pay £12</button>
            </div>
        </div>
        <div className="cancel">
        <NavLink to = "/movie">cancel</NavLink>
        </div>
      </div>
    );
  }
  
  export default Booking;