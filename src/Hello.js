import React from 'react';
import logo from './logo.svg';
import logo2 from './logo2.png';
import './App.css';

const App3 = function({app3name, app3age}){
    return (
      <div className="App">
        <header className="App-header3">
          <body>
            <img src={logo} className="App-logo2" alt="logo2" />
            <p>I am App Const function in 'App3' of Hello.js</p>
            <div>Hello <strong>{app3name}!</strong>, your age is 'App3' {app3age+15}</div>
          </body>
        </header>
      </div>
    );
  }
  
  const App4 = ({name, age}) => {
    return (
      <div className="App">
        <header className="App-header4">
          <body>
            <img src={logo2} className="App-logo2" alt="logo2" />
            <p>I am App Const function in 'App3' of Hello.js</p>
            <div>Hello <strong>{name}</strong>!, your age is 'App3' {age+15}</div>
          </body>
        </header>
      </div>
    );
  }
  
  export {App3, App4};
  