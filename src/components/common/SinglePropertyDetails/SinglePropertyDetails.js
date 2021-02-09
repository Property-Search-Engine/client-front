import React, { useState } from 'react'; 
import './SinglePropertyDetails.scss'; 

export default function SinglePropertyDetails(props) {

    const { Number, Address, Location, Price} = props; 

    const [svg, setsvg] = useState("/assets/icons/like.svg"); 

    const handleLikeClick = () => {
        if(svg === "/assets/icons/like.svg"){
            setsvg("/assets/icons/like-red.svg")
        } else {
            setsvg("/assets/icons/like.svg")
        } 
    }; 

    return (
        <div className="d-flex flex-row justify-content-between detailsContainer">
            <div className="details">
                <p className="address">{Number} {Address}</p>
                <p className="location">{Location}</p>
                <p className="price">{Price}</p>
            </div>
            <div className="icon" >
                <img onClick={handleLikeClick} src={svg}></img>
            </div>
        </div>
    )
}
