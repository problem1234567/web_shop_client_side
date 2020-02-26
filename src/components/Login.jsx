import React,{useState} from 'react';
import showAlert,{host} from '../lib';
import '../css/signin.css';
import { Redirect } from 'react-router-dom';
// const nodeFetch = require('node-fetch')
// const fetch = require('fetch-cookie')(nodeFetch)


function Login(){

  const [info,setInfo] = useState({
    username:"",
    password:""
  });
  const [isLogin,setLogin] = useState(false);

  function handleChange(e){
    const {name,value} = e.target;
    console.log(info);
    setInfo(prev => {
      return {
        ...prev,
        [name]:value
      }
    });
  }

  function handleClick(e){
    e.preventDefault();
    const route = '/login'; 
    console.log(info);
    fetch(host+route,{
      method:'post',
      mode:'cors',
      credentials: 'include',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info)
    }).then(response => {
      if(response.status===401){
        showAlert("Wrong username or password");
        setInfo({
            username:"",
            password:""
      })} else if(response.status===200){
          showAlert('Login success');
          setLogin(true);
        } else {
          showAlert("Login failed");
        }
      });
  }

  if(isLogin){
    return <Redirect to="/"/>
  }

  return (<div className="text-center">
    <form className="form-signin">
  <img className="mb-4" src="login.jpg" alt="" width="72" height="72"/>
  <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label htmlFor="inputEmail" className="sr-only">Email address</label>
  <input type="email" name='username' id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" value={info.username} onChange={handleChange}/>
  <label htmlFor="inputPassword" className="sr-only">Password</label>
  <input type="password" name='password' id="inputPassword" className="form-control" placeholder="Password" required="" value={info.password} onChange={handleChange}/>
  <div className="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"/> Remember me
    </label>
  </div>
  <button className="btn btn-lg btn-primary btn-block" onClick={handleClick} type="submit">Sign in</button>
</form>
</div>);
}   

export default Login;