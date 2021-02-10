import React from 'react'
import Property from '../Property/Property'; 
import { propertyEx, propertyEx2, propertyEx3 } from "../../../utils/mockOfProperties";
import './Properties.scss'; 


export default function Properties(props) {

   

    const { setsinglePropertyId, setMain, properties } = props; 

    // const properties = [propertyEx, propertyEx2, propertyEx3]; 

   
        return (
            <div className="propertyList" >{
                properties.map((propertyMapped, i) => {
                    return (<Property key={`property_${i}` } setMain={setMain} isProperties={true} setsinglePropertyId={setsinglePropertyId} property={propertyMapped}/>)
                })}
            </div>
        )
    
}
