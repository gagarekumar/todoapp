import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import axios from'axios'
import './modal.css'
import Cookies from 'js-cookie';
export class CreateExercises extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            description:'',
            date:new Date(),
            label:'',
            status:"new",
            users:[],
            email:Cookies.get("email")
       
             
        }
   
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeLabel=this.onChangeLabel.bind(this);
    this.changeStatus=this.changeStatus.bind(this);
    }

    
    componentDidMount() {
      const email={
        email:Cookies.get("email")
      }
        axios.post('http://localhost:5000/users/',email)
          .then(response => {
            console.log(response);
            if (response.data.length > 0) {
              this.setState({
                users: response.data.map(user => user.username),
              })
            }
          })
          .catch((error) => {
            console.log(error);
          })
    
      }
      changeStatus()
      {
       
    var gapi=window.gapi
    var CLIENT_ID=""
    var API_KEY=""
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

    gapi.load('client:auth2',() =>{

      console.log('loaded Client');

      gapi.client.init({
        apikey:API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope:SCOPES,
      })
     // date = new Date(d)
      gapi.client.load('calendar','v3',()=> console.log('bammmm!'))
      const eventStartTime = new Date()
     
      const eventEndTime = new Date(this.state.date)
      eventEndTime.toISOString().substring(0, 10);
     // console.log(typeof(eventEndTime));
     // eventEndTime.setDate(eventEndTime.getDay() + 4)
      //eventEndTime.setMinutes(eventEndTime.getMinutes() + 45)
      const d = new Date();

     // d.setUTCHours(0,0,0,0);
//console.log(d.toISOString());
      gapi.auth2.getAuthInstance().signIn()
      .then(()=>{

      console.log(d.toISOString().substring(0, 10));
      console.log(eventEndTime.toISOString().substring(0, 10))
        var event = {
          'summary': this.state.title,
          //'location': '800 Howard St., San Francisco, CA 94103',
          'description':this.state.description,
         'start': {
             date:eventEndTime.toISOString().substring(0, 10), 
            //'timeZone': 'Asia/Kolkata'
          },
          'end': {
            date:eventEndTime.toISOString().substring(0, 10),
          //  'timeZone': 'Asia/Kolkata'
          },
          
         /* 'recurrence': [
            'RRULE:FREQ=DAILY;COUNT=2'
          ],*/
        //  'attendees': [
          //  {'email': 'kumargagare1@gmail.com'},
           // {'email': 'jayeshPawar941999@gmail.com'}
          //],
         'reminders': {
            'useDefault': false,
            'overrides': [
              {'method': 'email', 'minutes':  60},
              {'method': 'popup', 'minutes': 10}
            ]
          }
        };
        var request = gapi.client.calendar.events.insert({
          'calendarId':'primary',
           'resource': event,
        })
        request.execute(event=>{
          window.open(event.htmlLink)
        })
      })
    })

      }

    onChangeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    onChangeLabel(e){
      this.setState({
        label:e.target.value
      })
  }
    onChangeDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date:date
        })
    }

    onSubmit(e){
        e.preventDefault();
        const task={
            title:this.state.title,
            description:this.state.description,
            date:this.state.date,
            label:this.state.label,
            status:this.state.status,
            email:this.state.email
        }

        axios.post('http://localhost:5000/exercises/add',task)
          .then(res => console.log(res.data));

          
        
       
          
    }
    

    render() {
        return (
          
   <div>


     
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
      <center> <h3>Create your Notes</h3></center><br></br>
          <label>Title: </label>
          <input 
              type="text" 
              placeholder="Enter Title"
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text" required
              className="form-control"
              placeholder="Enter Decription"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group"> 
          <label>label: </label>
          <select ref="userInput"
              required
              placeholder="Add label"
              className="form-control"
              value={this.state.label}
              

              onChange={this.onChangeLabel}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Add Task" className="btn btn-success" />
        </div>
        
      </form>
      
     
     <label style={{color:'#27bb47'}}>Add to Google calendar:      </label>
     <button type="button" onClick={this.changeStatus} class="btn btn-primary">
    <span class="glyphicon glyphicon-calendar">click</span>

    </button>
     
   </div>
        )
    }
}

export default CreateExercises