import React, { Component } from 'react';

const NavBar = (props) => {
   
    return (  
   
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">navbar
            <span className="badge badge-pill badge-secondary m-2"> {props.totalCounter}</span>
        </a>
      </nav>
    );
}
 
export default NavBar;