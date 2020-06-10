import React from 'react'
import './cardstyle.css'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';


function CardsUi(props) {
    return (
      <div className='cs'>
      <Card >
      <Card.Body >
      <Card.Title>
<div className="alert alert-primary" role="alert">
     {props.exercise.status}
          
      </div>
      </Card.Title>
      
      <Card.Text>
      <span>Title : 
      <b >
      {props.exercise.title}
      </b>
     
      </span>
      </Card.Text>
      
      <Card.Text>
      <span>Description : 
      <b >
      {props.exercise.description}
      </b></span>
      </Card.Text>
      <Card.Text>
       {props.exercise.date.substring(0,10)}
      </Card.Text>
      <Card.Text>
      </Card.Text>
      <Link className='btn btn-outline-success' to={"/edit/"+props.exercise._id}>edit</Link>  <a href="#" className='btn btn-outline-success' onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
      </Card.Body>
      <Card.Footer>
     <div className="alert alert-dark" role="alert1">{props.exercise.label}
     </div> 
      
      
      </Card.Footer>
      </Card>
      
      </div>
      
      
      
        
        
        
        
      
    )
}

export default CardsUi