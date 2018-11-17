import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import './App.css';
//import *API from GoogleMaps API ?
//import Filters ?
//import Markers ?


let this;

let map;

let markers = [];

let marker;

let locationState = [
  xxxxx]


class App extends Component {

  state = {

    googleMap: [],

    //xxxxxx

  }


  componentDidMount() {
     // xxxx


  render() {


//xxxxxxx


    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title">Neighborhood Maps Project</h1>

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            //href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
       <div id='map'></div>
    );
  }
}

export default App;
