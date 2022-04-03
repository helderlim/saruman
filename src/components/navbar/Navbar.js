import './Navbar.css'
import React from 'react';
import {  Link } from "react-router-dom";
import { FaHome, FaSearch, FaKeyboard, FaUser, FaMapMarkerAlt } from 'react-icons/fa';



function Navbar() {
  return(
    <div className='container'>
      <li className='list-item'>
      <Link className="list-navbar" to="/">
        <FaHome className='list-item' />
          Feed
        </Link>
      </li>
      <li>
        <Link className="list-navbar" to="/about">
          <FaSearch className='list-item' />
          Pesquisar
        </Link>
      </li>
      <li>
        <Link className="list-navbar" to="/about">
          <FaMapMarkerAlt/>
          Map
        </Link>
      </li>
      <li className='list-item'>
        <Link className="list-navbar" to="/about">
          <FaKeyboard className='list-item' />
          Chat
        </Link>
      </li>
      <li className='list-item'>
        <Link className="list-navbar" to="/about">
          <FaUser className='list-item' />
          Perfil
        </Link>
      </li>
    </div>
  )
}

export default Navbar;