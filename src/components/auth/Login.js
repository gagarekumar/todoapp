import React, { Component, useContext } from "react";
import axios from "axios";
import Cookies from 'js-cookie';
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    const loginuser={
      email: email,
      password: password
    }
    
    axios.post(
        "http://localhost:5000/sessions/",loginuser)
      .then(response => {
       if (response.data.length>0) {
        this.props.handleLogIn();
        response.data.map(email=>{
          Cookies.set("email",email.email)
        })
      
        }
        else{
          alert("wrong password or email,try again!");
          window.location.href="/login";
        }
      })
      .catch(error => {
       alert("login error");
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button  type="submit">Login</button>
        </form>
      </div>
    );
  }
}