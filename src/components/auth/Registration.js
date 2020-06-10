import React, {Component} from 'react';
import axios from 'axios';
export default class Registration extends Component{
    constructor(props){
        super(props);

        this.state={
            email="",
            password="",
            password_confirmation="",
            registrationErrors=""
        }
       this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value;
        })

        handleSubmit(event){
        const {email,password,password_confirmation}=this.state;
        axios.post("http://localhost:5000/registrations",
        {
            user:{
                email:email,
                password:password,
                password_confirmation:password_confirmation
            }},
            {withCredentials:true}
        )
        .then(response=>{
            if(response.data.status==="created"){
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error=>{
            console.log("registration error",error);
        });
        
    }
    event.preventDefault();
    }

render(){
    return(
<div>
<form onSubmit={this.handleSubmit}>

<input type="email" name="email" placeholder="Email here"
value={this.state.email} onChange={this.handleChange}
required
>

</input>
<input type="password" name="password" placeholder="Password here"
value={this.state.password} onChange={this.handleChange}
required
>

</input>


<input type="password" name= "password_confirmation" placeholder="one more tiem here"
value={this.state.password_confirmation} onChange={this.handleChange}
required
>

</input>
<button type="submit">Register</button>
</form>
</div>

    )
}
}