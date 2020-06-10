/*import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './app.layout';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {LandingPage} from './LandingPage';
import {ProtectedRoute} from './protected.route';
import Login from './components/auth/Login';
import auth from './auth';
import AuthApi from './AuthApi';
function App(){
    const [auth ,setAuth] =React.useState(false);
    return(
        <div className="App">
        <h1>Weclome! </h1>
<Router>
        <Route exact path="/" component={Login} ></Route>
        <ProtectedRoute exact path="/app" component={AppLayout}/>
</Router>        </div>
    )
}

export default App;*/

import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route,Link, Redirect} from 'react-router-dom';
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';
import AppLayout from './app.layout';
import Loogin from './components/auth/Login'
function App(){
    const readCookie = () =>{
        const user = Cookies.get("user");
        if(user)
        {
            setAuth(true);
        }
    }

    const [auth,setAuth]= React.useState(false);
    
    React.useEffect(()=>{
        readCookie();
    })
  return(
      <div>
    <AuthApi.Provider value={{auth,setAuth}}>
     <Router>
      <Routes/>
      </Router>
      </AuthApi.Provider>

</div>
  )
  }
  
  const Login = () => {
      const Auth = React.useContext(AuthApi);

      const handleOnClick=()=>{
Auth.setAuth(true);
Cookies.set("user","loginTrue");
      }
      return(
          <div>        <h1>Login Screen</h1>
     
         <Loogin handleLogIn={handleOnClick}/>
         </div>
         )
  }

  const Dashboard=()=>{
    const Auth = React.useContext(AuthApi);
    const handleOnClick=()=>{
       Auth.setAuth(false);
        Cookies.remove("user");
        console.log("hks")
     }
     return(
    <AppLayout handleLogOut={handleOnClick}/>)
  }
const Routes = () =>{
    const Auth = React.useContext(AuthApi);
    return(
        <Switch>
        <ProtectedLogin exact path ="/login" component={Login} auth={Auth.auth}/>
        <ProtectedRoute exact path="/Dashboard" auth={Auth.auth} email={Auth.email} component={Dashboard}/>
        <Route exact path="/404" component={()=>"error"}></Route>
        <Redirect to="/404/"></Redirect>
        </Switch>
    )
}


const ProtectedRoute= ({auth,component:Component,...rest})=>{
    return(
       
        <Route {...rest}
        render={()=>auth?
            (<Component/>
            )
            :(
                <Redirect to="/login"/>
            )
        
        }/>
    )

}

const ProtectedLogin= ({auth,component:Component,...rest})=>{
    return(
        <Route {...rest}
        render={()=>!auth?
            (<Component/>
            )
            :(
                <Redirect to="/Dashboard"/>
            )
        
        }/>
    )

}

export default App;