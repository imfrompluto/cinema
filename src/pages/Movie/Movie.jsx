import {NavLink} from "react-router-dom";
import img from "./starwars.png"
import line from './line.svg'
// import noise from "./NOISE.png"
import './Movie.css';
function Movie() {
  return (
    <div className="movie">
      {/* <img src={noise} id="noise" /> */}
      <header>
        <div className="container">
          <button></button>
          <h3>Movie Detail</h3>
        </div>
      </header>
      <div className="container">
          <img id="poster" src={img} />
          <h1>Star Wars</h1>
          <p>1997 • Action • 2h 31m</p>
          <p>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span></span>
          </p>
          <p id="swinfo">The Star Wars Trilogy Special Edition was a theatrical anniversary edition of the original trilogy, in order to celebrate the 20th anniversary of the release of Star Wars: Episode IV A New Hope.</p>
      <NavLink className={"buy"} to = "/booking">buy ticket <img src={line} alt="" /></NavLink>
      </div>
    </div>
  );
}

export default Movie;