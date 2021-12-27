import React from 'react';
import { Link } from 'react-router-dom';

//The TechnikCard inlcudes every Detail from the DB entry (Model)

export default function TechnikCard({ hersteller, art, watt, inventarnummer, geprüft, jahr, bemerkung, besitzer, anzahl, imgUrl, _id }) {
    //console.log(_id)
    return (
    
        <div>
            <Link to={`/techniks/${_id}`}>
            <img src={imgUrl} alt="vorschau"></img>
            </Link>
            <h2>Hersteller: {hersteller}</h2>
            <h3>Art: {art}</h3>
            
        </div>
    
    )
}







// import { Link } from 'react-router-dom';

// // here we destructure the fields from the props object
// export default function TechnikCard({ name, tarId, _id }) {
// 	console.log(name);
// 	return (
// 		<div>
// 			<Link to={`/techniks/${_id}`}>
// 				<h3>{name}</h3>
// 			</Link>
// 			<p>{tarId}</p>
// 		</div>
// 	)
// }
