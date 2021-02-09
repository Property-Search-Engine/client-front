import React, { useState } from 'react'; 
import Contact from '../Contact/Contact';
import PropertyCharacteristics from './PropertyCharacteristics/PropertyCharacteristics';
import './SinglePropertyDetails.scss'; 

export default function SinglePropertyDetails(props) {

    const { Number, Address, Location, Price, beds, baths, m2} = props; 

    const [heartGrey, setheartGrey] = useState(true); 

    const handleLikeClick = () => {
        setheartGrey(!heartGrey); 
    }; 

    return (
        <>
        <div className="d-flex flex-row justify-content-between detailsContainer">
            <div className="details">
                <p className="address">{Number} {Address}</p>
                <p className="location">{Location}</p>
                <p className="price">${Price}</p>
            </div>
            <div className="icon">
                <img onClick={handleLikeClick} src={heartGrey ? "/assets/icons/like.svg" : "/assets/icons/like-red.svg"}></img>
            </div>
            
        </div>
        <div className="d-flex flex-row propertyCharacteristics border-top">
            <PropertyCharacteristics beds={beds} baths={baths} m2={m2}/>
            <Contact/>
        </div>
        </>
    )
}
