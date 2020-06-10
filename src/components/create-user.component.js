import React, {Component} from 'react';
import axios from 'axios';
import '../App.css';
import FlipMove from 'react-flip-move';
import {Link} from 'react-router-dom';
import {Container , Row, Col } from 'reactstrap';
import LoadingSpinner from './loadingSpinner';
import LabelUi from '../cards/labelCard';
import Cookies from 'js-cookie';

export default class CreateUser extends Component{
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
this.LabelList=this.LabelList.bind(this);

        this.state={
            username : '',
            labels:[],
            loading:false
        }
    }


    componentDidMount(){

        this.setState({loading:true},()=>{
            const email={
                email:Cookies.get("email")
            }
            axios.post('http://localhost:5000/users/',email)
            .then(response => {
              console.log(response);
              if (response.data.length > 0) {
                this.setState({
                  labels: response.data.map(user => user.username),
                 loading:false
                })
              }
            })
            .catch((error) => {
              console.log(error);
            })
        });
        
    }

    onChangeUsername(e){
        this.setState({
            username:e.target.value
        });
    }
    
    onSubmit(e){
        e.preventDefault();
  
        const user ={
            username:this.state.username  ,
            email:Cookies.get("email")          
        }
        

        axios.post('http://localhost:5000/users/add', user)
        .then(response=>{
            if(response.data.length>0)
            {
                window.location="/dashboard";
            }
        })
        .catch(err=>console.log(err+"Hi")) ;

      


      
 }

    LabelList(){
      
        return(this.state.labels.map(currentLabel =>{
            return <LabelUi exercise={currentLabel}/>
        }))
    }
 
    
    render(){
        return(
            <div >
            <h3 style={{color: "red"}}>Add New Label</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group"> 
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    />
              </div>
              <div className="form-group">
                <input type="submit" value="Add" className="btn btn-success" />
              </div>
            </form>
             <h3 style={{color: "red"}}>existing label</h3>
             {this.state.loading? <LoadingSpinner/> :(
             <div >
                    <FlipMove duration={300} easing="ease-in-out">
                        <Container fluid>
                            <Col>
                    <Row fnoGutters={true}> 
                    {this.LabelList() }
                 
                    </Row>
                    </Col>
                    </Container>
                    </FlipMove>
          </div>  )}
            
         </div> 
        )
    }}
        
    