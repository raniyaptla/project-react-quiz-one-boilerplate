import { Component } from "react";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
import "./App.css";

export default class App extends Component{
  render(){
    return(
      <div>
        <Home/>
        <Quiz/> 
        <Result/>
      </div>
    );
  };
}