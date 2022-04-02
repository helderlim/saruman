import './Navbar.css'
import React from 'react';
import {  Link } from "react-router-dom";



function Navbar() {
  return(
    <div>
        <button type="submit" className="button">
          Search
        </button>
        <li>
      <Link to="/">Dogs</Link>
      </li>
    <li>
      <Link to="/about">Cats</Link>
    </li>
    <li>
      <Link to="/sheeps">Sheeps</Link>
    </li>
    <li>
      <Link to="/goats">Goats</Link>
    </li>
    </div>
  )
}

export default Navbar;