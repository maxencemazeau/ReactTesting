import axios from 'axios';
import React, { useState } from 'react'

export default function PostForm(){

   /* const [nomEvent, setNomEvent] = useState('');
    const [description, setDescription] = useState('');
    const [tarif, setTarif] = useState('');
    const [platform, setPlatform] = useState('');
    const [lieu, setLieu] = useState('');
    const [lienZoom, setLienZoom] = useState(''); */

    const [eventData, setEventData] = useState({
        nomEvent: '',
        description: '',
        tarif: '',
        platform: '',
        lieu: '',
        LienZoom: ''
    })


    const handleSubmit = (event) => {
        event.preventDefault();
          axios.post('http://localhost:8080/creerActivite', eventData);
          setEventData({
            nomEvent: '',
            description: '',
            tarif: '',
            platform: '',
            lieu: '',
            LienZoom: ''
          })
          .then((response) =>{console.log(response.config.data)});
         
          
        
      };
        
        
     

        return(
            <div>
                 <form onSubmit={handleSubmit}>
      <input type="text" value={eventData.nomEvent} onChange={(event) => setEventData({...eventData, nomEvent: event.target.value})} />
      <input type="text" value={eventData.description} onChange={(event) => setEventData({...eventData, description: event.target.value})} />
      <input type="text" value={eventData.tarif} onChange={(event) => setEventData({...eventData, tarif: event.target.value})} />
      <input type="text" value={eventData.platform} onChange={(event) => setEventData({...eventData, platform: event.target.value})} />
      <input type="text" value={eventData.lieu} onChange={(event)=> setEventData({...eventData, lieu: event.target.value})} />
      <input type="text" value={eventData.LienZoom} onChange={(event)=> setEventData({...eventData, LienZoom: event.target.value})} /> 
      <button type="submit">ssss</button>     
      </form>
            </div>
        );
 }
