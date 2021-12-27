import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechnikCard from '../components/TechnikCard';






export default function TechnikListPage() {

    const API_URL = 'http://localhost:5005';

    const [techniks, setTechniks] = useState([]);

    const getAllTechniks = () => {
        axios.get(`${API_URL}/api/techniks`)
            .then(response => {
                //console.log(response.data)
                setTechniks(response.data);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getAllTechniks();
    }, [])

   

    return (
        <>
        <div> 
            <h1>All the Techniks</h1>
            <p>here are coming all database entries via the TechnikCard component!</p>
            <div>
                {techniks.map(technik => <TechnikCard key={technik._id} {...technik}/>)}
                {/* <AddTechnik refreshTechniks={getAllTechniks}/> */}
            </div>
        </div>
        </>
    )
}
