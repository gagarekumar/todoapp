/*import React, {Component} from 'react';
import {Link,Route} from 'react-router-dom';
import CreateUser from "./create-user.component";
import Boards from "./boards";


export default class Navbar extends Component{
  
    render(){
        return (
          <div>
          
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
              <Link to='/' className="navbar-brand">ToDoApp</Link>

              
              
              <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">TODO tasks</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link"> Add task</Link>
                </li>
                <li className="navbar-item">
                <Link to="/boards" className="nav-link"> Boards</Link>
                </li>
              </ul>
              </div>
            </nav>
            
            </div>
          );



    
        
    }
}*/

import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoard.css";
import Content from './Content';
import '../App.css'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import './navbar.css'
import SideBar from './Sidebar'
import { FaPlusCircle} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import Cookies from 'js-cookie';
export default class Navbarr extends Component {
  
    
    render() {
   
return(
          <div >
        <div className="container center">
          <nav className="menu">
        
              <h4 className="menu__logo"></h4>

              <div className="menu__right">
                  <ul className="menu__list">
                      <li className="menu__list-item"><Link to='/' className="menu__link menu__link--active">ToDo</Link></li>
                      <li className="menu__list-item"><Link to='/create' class="menu__link">Create</Link></li>
                      <li className="menu__list-item"><Link to='/boards' class="menu__link" >Boards</Link></li>
                      <li className="menu__list-item"><Link to='/user' class="menu__link" >Labels</Link></li>
                  </ul>
                  <button className="menu__search-button"></button>


                  <form className="menu__search-form hide" method="POST">
                      <input className="menu__search-input" placeholder="Type and hit enter"/>
                  </form>
                  
              </div>
          </nav>
        </div>
        </div>

)

  }
}