import React, { Component } from "react";
import axios from 'axios';


export default class ChatBenevole extends Component {

    constructor(props){
        super(props);
        this.state ={
          chats: []
        }
      }

      componentDidMount(){
        axios.get('http://localhost:8080/chat')
        .then(res =>{
          this.setState({ chats : res.data
        })
        console.log(res.data);
      })
    }

    
   render() { 
    const {chats} = this.state
    return (
      <div className="App">
        <ul>{chats.map(chat=> <li key={chat.id}>{chat.dateDebut}</li>)}</ul>
  
        
      </div>
    );
   }
}