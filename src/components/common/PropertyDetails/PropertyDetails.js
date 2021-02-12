import React from 'react'; 
import Property from '../Property/Property'; 
import { propertyEx, propertyEx2, propertyEx3 } from '../../../utils/mockOfProperties'; 
import { camelCaseStringToCapitalizeString } from '../../../utils/helpers';
import './PropertyDetails.scss';  

export default function PropertyDetails(props) {

    const { id, setMain } = props; 
    
    const properties = [propertyEx, propertyEx2, propertyEx3]; 
    const property = properties.filter(property => id === property._id)[0]

    const handleClick = (e) => {
        setMain(true); 
    }

    return (
        <div>
            <img onClick={handleClick} src="/assets/icons/left-arrow.svg"></img>
            <Property isProperties={false} property={property}/>
            <div className="propertyDetails">
                <p>{property.description}</p>
                <h4>Main Features</h4>
                <ul>
                    {property.filters.map(element =>
                        <li>&#8594;{camelCaseStringToCapitalizeString(element)}</li>
                    )}
                    <li>&#8594;Condition: {camelCaseStringToCapitalizeString(property.condition)}</li>
                    <li>&#8594;Equipment: {camelCaseStringToCapitalizeString(property.equipment)}</li>
                </ul>
                <div className="buttonContainer">
                    <button>Book a visit</button>
                </div>
            </div>
        </div>
    )
}