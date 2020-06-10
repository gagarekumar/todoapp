import React from 'react'
import './cardstyle.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';


function LabelUi(props) {
    return (
      <div className='cs1'>
      <Card >
      <Card.Body>
      <Card.Text>
      <div className="alert alert-primary" role="alert">
      {props.exercise}
      </div> 
      </Card.Text>
      </Card.Body>
      </Card>
      
      </div>
    )
}

export default LabelUi