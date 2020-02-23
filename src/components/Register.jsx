import React,{useState} from 'react';
import '../css/signin.css';

function Register(){
    const [pass,setPass] = useState('');

    function handleChange(e){
        const password = e.target.value;
        setPass(password);
        getPassword(password)
    }

    function getPassword(pass) {
        var text = pass;
    
        var length = document.getElementById('length');
        var lowercase = document.getElementById('lowercase');
        var uppercase = document.getElementById('uppercase');
        var number = document.getElementById('number');
        var special = document.getElementById('special');
    
        checkIfEightChar(text) ? length.classList.add('list-group-item-success') : length.classList.remove('list-group-item-success');
        checkIfOneLowercase(text) ? lowercase.classList.add('list-group-item-success') : lowercase.classList.remove('list-group-item-success');
        checkIfOneUppercase(text) ? uppercase.classList.add('list-group-item-success') : uppercase.classList.remove('list-group-item-success');
        checkIfOneDigit(text) ? number.classList.add('list-group-item-success') : number.classList.remove('list-group-item-success');
        checkIfOneSpecialChar(text) ? special.classList.add('list-group-item-success') : special.classList.remove('list-group-item-success');
    }
    
    function checkIfEightChar(text){
        return text.length >= 8;
    }
    
    function checkIfOneLowercase(text) {
        return /[a-z]/.test(text);
    }
    
    function checkIfOneUppercase(text) {
        return /[A-Z]/.test(text);
    }
    
    function checkIfOneDigit(text) {
        return /[0-9]/.test(text);
    }
    
    function checkIfOneSpecialChar(text) {
        return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text); // eslint-disable-line
    }
    
    return(<div className="text-center">
    <form className="form-signin">
  <img className="mb-4" src="register.png" alt="" width="72" height="72"/>
  <h1 className="h3 mb-3 font-weight-normal">Register</h1>
  <label htmlFor="inputEmail" className="sr-only">Email address</label>
  <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus=""/>
  <label htmlFor="password" className="sr-only">Password</label>
  <input id="password" type="password" className="form-control" placeholder="Password" required=""  value={pass} onChange={handleChange}/>
  <label htmlFor="repeatPassword" className="sr-only">Repeat Password</label>
  <input type="password" id="repeatPassword" className="form-control" placeholder="RepeatPassword" required=""/>
  <ul className="lead list-group" id="requirements">
  <li id="length" className="list-group-item">At least 8 characters</li>
  <li id="lowercase" className="list-group-item">At least 1 lowercase letter</li>
  <li id="uppercase" className="list-group-item">At least 1 uppercase letter</li>
  <li id="number" className="list-group-item">At least 1 numerical number</li>
  <li id="special" className="list-group-item">At least 1 special character</li>
</ul>

  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
</form>
</div>);
}

export default Register;