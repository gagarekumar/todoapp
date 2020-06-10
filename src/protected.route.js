/*import React, { Component } from 'react';
import {Route, Redirect,Router} from 'react-router-dom';
import auth from './auth';
export const ProtectedRoute =({component : Component, ...rest})=>{
    return(
        <Route {...rest} 
        render={ (props)=>
            {
               
                if(auth.isAuthenticated())
                {
                return <Component {...props}/>
                }
                else {
                    return <Redirect to={
                     {
                         pathname:"/",
                         state:{
                             from:props.location
                         }
                     }   
                    }/>
                }
            }}

                />

    )

}*/

/*import React, { Component } from 'react';
import {Route, Redirect,Router} from 'react-router-dom';
import auth from './auth';
export const ProtectedRoute =({component : Component, ...rest})=>{
    return(
        <Route {...rest} 
        render={ (props)=>
            {
               
                if(auth.isAuthenticated())
                {
                return <Component {...props}/>
                }
                else {
                    return <Redirect to={
                     {
                         pathname:"/",
                         state:{
                             from:props.location
                         }
                     }   
                    }/>
                }
            }}

                />

    )

}

*/