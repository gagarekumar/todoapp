import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import CardsUi from '../cards/CardsUi';
import FlipMove from 'react-flip-move';
import {Container , Row, Col } from 'reactstrap';
import LoadingSpinner from './loadingSpinner';
import Cookies from 'js-cookie';


export default class ExercisesList extends Component{
    constructor(props)
    {
        super(props);

        this.deleteExercise =this.deleteExercise.bind(this);
        this.state={
            exercises:[],
            loading:false,
            email:Cookies.get("email")

        }
    }
    
    componentDidMount()
    {

         
        this.setState({loading:true},()=>{
            const email={
                email:this.state.email
            }
        axios.post('http://localhost:5000/ntasks/',email).then
        (
            
            response=>{
            this.setState({
                exercises:response.data,
                loading:false
            })
        }).catch((error)=>{
            console.log(error);
        })
    });

      
    }

    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
        .then(res=>console.log(res.data));

        this.setState({
            exercises : this.state.exercises.filter(el=>el._id !==id)
        })
    }
    exerciseList(){
        return(this.state.exercises.map(currentExercise =>{
            return <CardsUi exercise={currentExercise}
            deleteExercise={this.deleteExercise} key={currentExercise._id}
            />;
        }))
    }
    render(){
        return(
            <div>
            {this.state.loading? <LoadingSpinner/> :(
                <FlipMove duration={300} easing="ease-in-out">
                <Container fluid>
                    <Col>
            <Row fnoGutters={true}> 
    
            { this.exerciseList() }
    
            </Row>
            </Col>
            </Container>
            </FlipMove>
            )}     
             
          </div>
        )
        
    }
}