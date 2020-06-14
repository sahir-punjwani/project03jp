import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App1, App2} from './App';
import {App3, App4} from './Hello';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <body>
    <p>Hello I am from index.js</p>
    <p>I have total four following functions in me:</p>
    <ul>
      <li>App:1 Built with props, with a additinal div tag in it.</li>
      <li>App:2 Bulit with plain function with a called function from app3.</li>
      <li>App:3 Built with const.</li>
      <li>App:4 Built with =>.</li>
    </ul>
    
    
    <div>
      <App1 name="Jimmy Punjwani" age={45}/>
    </div>
    <div>
      <App2 name="Jimmy" age={25}/>
    </div>
    <div>
      <App4 name="Punjwani" age={55}/>
    </div>
    <div>
      <App3 app3name="J.Punjwani" app3age={15}/>
    </div>
  </body>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
