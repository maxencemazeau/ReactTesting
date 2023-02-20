import axios from 'axios';
import React, { useState } from 'react'

export default function PostForm(){

    const [eventData, setEventData] = useState({
        nomEvent: '',
        description: '',
        tarif: '',
        platforme: '',
        lieu: '',
        lienZoom: ''
    });


    const handleSubmit = (event) => {
        event.preventDefault();
          axios.post('http://localhost:8080/creerActivite', eventData);
          setEventData({
            nomEvent: '',
            description: '',
            tarif: '',
            platforme: '',
            lieu: '',
            lienZoom: ''
          })
             
        
      };
        

        return(
            <div>
                 <form onSubmit={handleSubmit}>
      <input type="text" value={eventData.nomEvent} onChange={(event) => setEventData({...eventData, nomEvent: event.target.value})} />
      <input type="text" value={eventData.description} onChange={(event) => setEventData({...eventData, description: event.target.value})} />
      <input type="text" value={eventData.tarif} onChange={(event) => setEventData({...eventData, tarif: event.target.value})} />
      <input type="text" value={eventData.platforme} onChange={(event) => setEventData({...eventData, platforme: event.target.value})} />
      <input type="text" value={eventData.lieu} onChange={(event)=> setEventData({...eventData, lieu: event.target.value})} />
      <input type="text" value={eventData.lienZoom} onChange={(event)=> setEventData({...eventData, lienZoom: event.target.value})} /> 
      <button type="submit">ssss</button>     
      </form>
            </div>
        );
 }
