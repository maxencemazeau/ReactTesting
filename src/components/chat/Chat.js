import React, { Component, useState } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Chat (){

    const Donne = () => {
        const location = useLocation();
        const { data } = location.state;
        console.log(data);
    }
    const componentDidMount = (id) =>{
        const data = axios.get(`http:/localhost/discussion/${id}`);
        console.log(data);
    };

    const envoieMessage = (e) => {
        e.preventDefault();

    }



    
    return(
        <div>
            <p>Vous êtes dans le chat</p>
            <form onSubmit={envoieMessage}>
                <input type="text" placeholder="Message"></input>
            </form>
            <p></p>
            
        </div>
    )
    
}