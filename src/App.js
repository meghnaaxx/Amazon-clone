import React from "react";
 import './App.css';
 import Header from './Headers';
 import Home from "./Home";
 //import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    
    <div className="app">
           <Header />
           <Home />   
                </div>
  );
}

export default App;
