import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './aos.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AOS from 'aos';
import "../node_modules/aos/dist/aos.css";
import * as firebase from 'firebase';
AOS.init();
var config = {
    apiKey: "AIzaSyCAZS-14yDcR8its35FkTa-qASjjC6cy-8",
    authDomain: "ayushyamitabh-3c202.firebaseapp.com",
    databaseURL: "https://ayushyamitabh-3c202.firebaseio.com",
    projectId: "ayushyamitabh-3c202",
    storageBucket: "ayushyamitabh-3c202.appspot.com",
    messagingSenderId: "423859419654"
  };
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
