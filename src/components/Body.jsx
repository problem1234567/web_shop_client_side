import React from 'react';
import '../css/product.css';


function BodyHome(){
    const styleCard = {
        "width": "80%", 
        "height": "300px", 
        "borderRadius": "21px 21px 0 0"
    };
    return(<div>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-light shadow-sm mx-auto" style={styleCard}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={styleCard}></div>
  </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-dark shadow-sm mx-auto" style={styleCard}></div>
  </div>
  <div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-light shadow-sm mx-auto" style={styleCard}></div>
  </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={styleCard}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={styleCard}></div>
  </div>
</div>

<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 p-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={styleCard}></div>
  </div>
  <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
    <div className="my-3 py-3">
      <h2 className="display-5">Another headline</h2>
      <p className="lead">And an even wittier subheading.</p>
    </div>
    <div className="bg-white shadow-sm mx-auto" style={styleCard}></div>
  </div>
</div>
    </div>);
}

function BodyItem(){
    return(<div>

    </div>);
}

export {BodyHome,BodyItem};