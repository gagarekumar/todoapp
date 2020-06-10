import React from "react";
import { FaPlusCircle, FaCog} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfo,
  faPaperPlane,
  faSignOutAlt,
  faCog,
  faCopy,
  faTimes,
  faInfoCircle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import SubMenu from "./Submenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import axios from'axios'
import auth from "../auth";
import LoadingSpinner from './loadingSpinner';
import Cookies from 'js-cookie';
class SideBar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username:'',
      users:[],
      loading:false
       
    }
  }
  
  componentDidMount() {

    /*axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
        
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })*/


      this.setState({loading:true},()=>{
        const email={
            email:Cookies.get("email")
        }
        axios.post('http://localhost:5000/users/',email)
        .then(response => {
          console.log(response);
          if (response.data.length > 0) {
            this.setState({
              users: response.data.map(user => user.username),
             loading:false
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
    });
    

  }
  
  render() {
    return (
      
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>User Profile Appear here!</h3>
        </div>

        <Nav className="flex-column pt-2">

          <Nav.Item className="active">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>

          {this.state.loading? <LoadingSpinner/> :(
          <SubMenu
            title="Labels"
            icon={faCopy}
            items={this.state.users.map(function(user) {
              return <option 
              key={user}
               value={user}>{user}
               
                </option>;
                
            })}
 
 
            />)}
 
 
            <Nav.Item>
           <Link to="/user">
              <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
              Add label
               </Link>
            
          </Nav.Item>
  
        
          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </Nav.Link>
          </Nav.Item>

         
          <button onClick={()=>{
            auth.logout(()=>{
              this.props.p.history.push("/");
            });
          }}>Sign out</button>
 

          <Nav.Item>
            <Nav.Link href="/info">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Developers
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar;