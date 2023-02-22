import React, { Component, useState } from 'react'
import axios from 'axios'
import {
    
    useNavigate
  } from "react-router-dom";
import Chat from '../chat/Chat'

export default function CreerChat(){

    const navigate = useNavigate();


    const creerChat = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8080/creerChat');
        console.log(res.data);
        navigate(`/Chat/${res.data.id}`);
    }

    return(
        <div>
            
            <form onSubmit={creerChat}>
            <button type="submit">Commencer un chat</button>
            </form>
            

        </div>
    )
} 