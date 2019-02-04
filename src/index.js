import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
// import App from "./components/App.js";
import App from "./components/App.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';

import configureStore from './configureStore';


const store = configureStore()


ReactDOM.render(
        <Provider store={store}>
          <App/>
        </Provider>
       
        ,
 document.getElementById("root"))
