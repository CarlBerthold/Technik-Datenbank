import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import service from "../api/service";


export default function AddTechnik(props) {

    const API_URL = 'http://localhost:5005';

    const [hersteller, setHersteller]= useState('');
    const [art, setArt]= useState('');
    const [watt, setWatt]= useState('');
    const [inventarnummer, setInventarNummer]= useState('');
    const [geprüft, setGeprüft]= useState(Boolean);
    const [jahr, setJahr]= useState(Number);
    const [bemerkung, setBemerkung]= useState('');
    const [besitzer, setBesitzer]= useState('');
    const [anzahl, setAnzahl]= useState(Number);
    const [imgUrl, setImgUrl]= useState('');


    const handleFileUpload = (e) => {
        const uploadData = new FormData();
        uploadData.append("imgUrl", e.target.files[0]);

        service
            .handleUpload(uploadData)
            .then(response => {
                //console.log("response is: ", response);
            setImgUrl(response.secure_url);
            })
            .catch(err => console.log("error while uploading the file!!!", err));
    };



    const handleSubmit = e => {
        e.preventDefault();
        //props.setTechniks()


        service
		.saveNewTechnik({ hersteller, art, watt, inventarnummer, geprüft, jahr, bemerkung, besitzer, anzahl, imgUrl })
		.then(res => {
			console.log("added new Technik ", res);
		})
		.catch(err => console.log("Error while adding the new Technik", err))


        const requestBody = { hersteller, art, watt, inventarnummer, geprüft, jahr, bemerkung, besitzer, anzahl, imgUrl };
        axios.post(`${API_URL}/add`, requestBody)
        //console.log(requestBody)
        //console.log(props)
        .then(Response => {
            setHersteller('');
            setArt('');
            setWatt('');
            setInventarNummer('');
            setGeprüft(false);
            setJahr(null);
            setBemerkung('');
            setBesitzer('');
            setAnzahl(null);
            setImgUrl('');
            props.refreshTechniks();
        })
        .catch(err => console.log(err))
        alert(`Technik: ${requestBody.anzahl} x ${requestBody.hersteller} ${requestBody.inventarnummer} was successfully added`)
        props.history.push('/Techniks')
    }   


    
    
    return (
    <div className="AddCard"> 
        <div className="AddBox">
            
            
        <>
            <form onSubmit={handleSubmit}>
            <h3>Ab in meine Sammlung damit</h3>
            <ul>
                <li>
                    <label htmlFor="hersteller">hersteller:</label>
                    <input type="text" value={hersteller}
                    onChange={e => setHersteller(e.target.value)}/>
                </li>
            
                <li>
                    <label htmlFor="art">Art</label>
                    <input type="text" value={art}
                    onChange={e => setArt(e.target.value)}/>
                </li>
            
                <li>
                    <label htmlFor="watt">Watt</label>
                    <input type="text"value={watt}
                    onChange={e => setWatt(e.target.value)}/>
                </li>
            
                <li>
                    <label htmlFor="inventarnummer">Inventarnummer:</label>
                    <input type="text" value={inventarnummer}
                    onChange={e => setInventarNummer(e.target.value)}/>
                </li>
            
                <li>
                    <label htmlFor="geprüft">Geprüft</label>
                    <input type="checkbox"value={geprüft}
                    onChange={e => setGeprüft(e.target.value)}/>
                </li>


                {/* dropdown menu geprüft im jahr  */}

                
                <li>
                    <label htmlFor="jahr">Wann</label>
                    <select name="jahr" id="jahr" onChange={e => setJahr(e.target.value)}>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2000</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                    </select>
                </li>
  


            
                {/* <label htmlFor="jahr">Jahr</label>
                <Select
                    option value="2000">2000 
                    type="text"
                    value={jahr}
                */}


            
                <li>
                    <label htmlFor="bemerkung">Bemerkung</label>
                    <input type="text" value={bemerkung}
                    onChange={e => setBemerkung(e.target.value)}/>
                </li> 
            
                <li>
                    <label htmlFor="besitzer">Besitzer</label>
                    <input type="text" value={besitzer}
                    onChange={e => setBesitzer(e.target.value)}/>
                </li> 
            
                <li>
                    <label htmlFor="anzahl">Anzahl</label>
                    <input type="text" value={anzahl}
                    onChange={e => setAnzahl(e.target.value)}/>
                </li> 
            
                <li>
                    <input type="File" name="imgUrl"
				    onChange={handleFileUpload} />
				    {imgUrl && <img src={imgUrl} alt="err" style={{ height: '150px '}}/> }
                </li>    
            <button type="submit">Add this Technik</button>
            </ul>
            </form>

        </>

        </div>
    </div>
    )
}
