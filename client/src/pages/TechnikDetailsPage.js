import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TechnikDetailsPage(props) {

    const API_URL = 'http://localhost:5005';

    const [technik, setTechnik] = useState(null);
    
    const technikId = props.match.params.id;

    const getTechnik = () => {
        axios.get(`${API_URL}/api/techniks/${technikId}`)
        .then(response => {
            //console.log(response.data);
            setTechnik(response.data);
        })
        .catch(err => console.log(err))
    }  
    
    useEffect(() => {
        getTechnik();
    },)

    return (
        <div>            
            {technik && (
                <>
                    <h1>DetailList</h1>
                    <img src={technik.imgUrl} alt="err" />
                    <li>Name: {technik.hersteller}</li>
                    <li>Art: {technik.art}</li>
                    <li>Watt: {technik.inventarnummer}</li>
                    <li>Geprüft: {technik.geprüft} {technik.jahr}</li>
                    <li>Bemerkung: {technik.bemerkung}</li>
                    <li>Besitzer: {technik.besitzer}</li>
                    <li>Anzahl: {technik.anzahl}</li> 
                </>
            )}  
        </div>
    );
}