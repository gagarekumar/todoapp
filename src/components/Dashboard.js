import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashBoard.css";
import SideBar from "./Sidebar";
import Content from './Content';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import '../App.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: true,
      isMobile: true
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    
  };

  render() {
    return (
        <div> <Button variant="outline-info" onClick={this.toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <div className='apps'>
      <div className="App wrapper">
          
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
        
      </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;