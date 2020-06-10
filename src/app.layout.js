import React ,{Component} from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateTask from "./components/create-task.component";
import CreateUser from "./components/create-user.component";
import Boards from './components/boards';
import DashBoard from './components/Dashboard';
import Label from "./components/labels";
import info from "./components/info";
import './App.css';
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';
import auth from './auth';
class AppLayout extends Component{
  constructor(props){
    super(props);
   
     
    this.state={
      user:props.email,
      loggedInStatus:props.loggedInStatus
   
    }
  }
  
     componentDidMount(){
    /*  if(auth.isAuthenticated())
      {
        console.log(auth.giveuser());
      }*/
     }
     render(){
     
     return (
      <div>
        <div>
         <Router>
          <div  >
        <div className="sidenav">
        <DashBoard username={this.state.user} props={this.props}/>
        </div>
          <div className="main">
          
          <Navbar />
         
          <br/>
         <div className="container">
      <Route exact path ="/dashboard" component ={()=><ExercisesList/>}/>
      <Route exact path ="/edit/:id" strict exact component={()=><EditExercise />}/>
      <Route exact path ="/create"  component={()=><CreateTask />}/>
      
      <Route path ="/user" component={()=><CreateUser  loggedInStatus={this.props.loggedInStatus}/>}  />
      <Route exact path ="/boards" component={()=><Boards />}/>
      <Route exact path="/labels/:label" component={Label}/>
      <Route exact path="/info"  component={info}/>
      <button onClick={this.props.handleLogOut}>Sign oUt</button>
      <h1>Auth : {auth.email}</h1>
     
      </div>
      </div>
      </div>
       </Router>
        </div>
      </div>
    );
     }  
  

}

export default AppLayout;
