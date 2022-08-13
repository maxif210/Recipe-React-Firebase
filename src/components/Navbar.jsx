import React  from 'react';
import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";


export const Navbar = () => (

 

  <nav className="navbar navbar-expand-lg navbar-dark bg-danger bg-gradient">
    <div className="container d-flex justify-content-between">
      <Link className="navbar-brand d-flex" to="/">
        <SiFirebase size="1.5rem" className="me-2" />
        FoodApp
      </Link>

      
      
      <div className="">
        <ul className="navbar-nav ms-auto d-flex">
          <li className="nav-item d-flex gap-5">
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/add"
            >
              <AiOutlineSave className="me-1" size="1.5rem" />
              Save a Recipe
            </Link>
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/search"
            >
             
              Search a Recipe
      </Link>
      <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/login"
            >
             
              Login
      </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
