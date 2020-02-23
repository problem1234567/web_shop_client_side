import React from 'react';
import '../css/product.css';

function Title(){
    const spaceButton = {
        "margin":"0px 5px"
    }
    return(<div id='title' className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
  <div className="col-md-5 p-lg-5 mx-auto my-5">
    <h1 className="display-4 font-weight-normal">Ocean</h1>
    <p className="lead font-weight-normal">The most suitable phone is the most beautiful phone for you.</p>
    <a type='button' href='/login' className="btn btn-lg btn-primary" style={spaceButton}>Login</a>
    <a type='button' href='/register' className="btn btn-lg btn-outline-primary" style={spaceButton}>Register</a>
  </div>
  <div className="product-device shadow-sm d-none d-md-block"></div>
  <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
</div>);
}

export default Title;