import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component, useState, state } from "react";
import axios from "axios";
import { act } from "react-dom/test-utils";

export default class Activite extends Component {

  constructor(props){
    super(props);
    this.state ={
      activite: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8080/activite')
    .then(res =>{
      this.setState({ activite : res.data
    })
    console.log(res.data);
  })
}

  deleteActivite = (id) =>{
  const ident = id;
  axios.delete(`http://localhost:8080/deleteActivite/${ident}`)
  .then(res => console.log('Supprimer'))
   
  } 




render(){
  const {activite} = this.state
  return (
    <div className="App">
      <ul>{activite.map(activites=> <li key={activites.id}>{activites.nomEvent}
        <button onClick={()=> this.deleteActivite(activites.id)}>Delete</button></li>)}</ul>

      
    </div>
  );
}
}
