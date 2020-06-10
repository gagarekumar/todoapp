import React from "react";
import { Accordion, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class SubMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      username:'',
      collapsed: true
    };
    this.searchByUsername = this.searchByUsername.bind(this);
  }
  searchByUsername(e){
  
    this.setState({
      username:e.target.value
  })
  console.log(this.state.username);
 
}

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { icon, title, items } = this.props;

    return (
      <div>
       
      
      <Nav.Item className={classNames({ open: !this.state.collapsed })}>
        <Accordion className="acc">
          <Accordion.Toggle
            as={Nav.Link}
            variant="link"
            eventKey="0"
            onClick={this.toggleNavbar}
          >

            <FontAwesomeIcon icon={icon} className="mr-2" />
            {title}
            <FontAwesomeIcon
              icon={this.state.collapsed ? faCaretDown : faCaretUp}
              className="float-right"
            />
          </Accordion.Toggle>
   
         
   
          <Accordion.Collapse eventKey="0">
            <nav className="nav flex-column">
              {items.map(item => ( 
              
                 <Link onClick={this.searchByUsername} className='acc btn btn-outline-success' value={item} to={"/labels/"+this.state.username}>{item}</Link>
                 
                    
              )
                
              )}

            </nav>
          </Accordion.Collapse>
          
          
        </Accordion>
      </Nav.Item>
      </div>
    );
  }
}

export default SubMenu;