import React from 'react';
import Tabs from './tabs.js';
import ExercisesList from "./exercises-list.component";
import NewTaskList from "./newtasks.component";
import CompleteTaskList from "./completedtask.component";
import {BrowserRouter as Router,Route} from "react-router-dom";
import '../App.css'
const styles={
    fontFamily: 'sans-serif',
};

class Boards extends React.Component{
    constructor(props) {
        super(props);
        this.state = {active: 'bTab'};
      }
      render() {
        const content = {
          aTab: <Route exact component ={ExercisesList}/>
          ,
          bTab: <Route exact component ={NewTaskList}/>
          ,
          cTab: <Route exact component={CompleteTaskList}/>,
        };
        return (
          <div style={styles}>
          <h1>{this.props.username}</h1>
            <Tabs
              active={this.state.active}
              onChange={active => this.setState({active})}
            >
              <div key="aTab">All tasks</div>
              <div key="bTab">New Tasks</div>
              <div key="cTab">{this.state.active !== 'bTab' ? 'Completed ' : 'Completed Tasks'}</div>
            </Tabs>
            <p>{content[this.state.active]}</p>
          </div>
        );
      }
    };
    export default Boards;
