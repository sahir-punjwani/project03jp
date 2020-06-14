import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.png';
import './App.css';
import './Hello.js';
import { App3 } from './Hello.js';

function App1(props) {
  return (
    <div className="App">
      <header className="App-header">
        <body>
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is App1 from App.js: And I am function using props:</p>
          <p>Hello <strong>{props.name}!</strong>, your orignal age is {props.age} and in 'App1' your age is {props.age-10}</p>
          <div>
            <p>And <strong>{props.name}!</strong>, I have another div inside 'App1' and in this your age is {props.age-15} </p> 
          </div>
        </body>
      </header>
    </div>
  );
}

function App2({name, age}){
  return (
    <div className="App">
      <header className="App-header2">
        <body>
          <img src={logo2} className="App-logo2" alt="logo2" />
          <p>This is App2 from App.js: I am App Plain function in 'App2'</p>
          <p>Hello <strong>{name}!</strong>, your age in 'App2' is {age}</p>
          <br/>
          <p>This function is called from Hello.js</p>
          <App3 app3name={name} app3age={age}></App3>
        </body>
      </header>
    </div>
  );
}

export {App1, App2};

