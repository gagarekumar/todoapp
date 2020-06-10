import React,{Component} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import './tabs.css';
import Tabs from './tabs.js';


const styles={
  fontFamily: 'sans-serif',
};

export class EditExercise extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            title:'',
            description:'',
            date:new Date(),
            label:'',
            status:'',
            users:[],
            active:'aTab'

             
        }
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeLabel=this.onChangeLabel.bind(this);
    this.changeStatus=this.changeStatus.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:5000/exercises/'+this.props.match.params.id)
      .then(
          
          response=>
          {
          this.setState({
              title:response.data.title,
              description:response.data.description,
            
            label:response.data.label,
            status:response.data.status


          })
      }).catch(function(error){
              console.log(error);
          })


        axios.get('http://localhost:5000/users/')
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
      this.state.status=="new"?
      this.setState({
        status:"completed"
      }):this.setState({
        status:"new"
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
            status:this.state.status
        }
        console.log(task);

        axios.post('http://localhost:5000/exercises/update/'+this.props.match.params.id,task)
        .then(res=>console.log(res.data));
        window.location='/boards';
    }


    render() {
      const content = {
        aTab: <span> <label className="alert alert-dark" role="alert">{this.state.label}</label>
        <div className="form-group"> 
        <label>Select New Label: </label>
        <select ref="userInput"
            required
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
        
      
       </span> 
        ,
        bTab: <span><label id="k1" className="alert alert-dark" role="alert">{this.state.status}</label>
     
      <button type="button" onClick={this.changeStatus}>Change status</button>
        </span> 
      };
        return (
            <div>
      <h3>Edit </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group">
        <b>  <label>Title: </label></b>
          <input 
              type="text" 
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group"> 
         <b> <label>Description: </label></b>
          <input  type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>


        <div style={styles} id="k1">
        <Tabs
          active={this.state.active}
          onChange={active => this.setState({active})}
        >
          <div key="aTab">Change Label</div>
          <div key="bTab">Change Status</div>
          </Tabs>
       <b> <p>{content[this.state.active]}
        </p></b>
      </div>
       
        
        <div className="form-group">
       <b><label>Date: </label></b>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

      
     
        <div className="form-group">
          <input type="submit" value="Edit Task" className="btn btn-primary" />
          <a href='http://localhost:3000/boards'>
          <input type="button" value="Back" className="btn btn-danger" />
          </a>
        </div>
      </form>
    </div>
        )
    }
}

export default EditExercise