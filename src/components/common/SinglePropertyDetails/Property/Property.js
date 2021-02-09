import React from 'react'
import ImageCarousel from '../../ImageCarousel/ImageCarousel'
import SinglePropertyDetails from '../SinglePropertyDetails'; 
import { propertyEx } from "../../../../utils/mockOfProperties";


export default function Property() {

    const property = propertyEx;

    return (
        <div className="property">
            <ImageCarousel property={property}/>
            <SinglePropertyDetails Number={property.address.number} Address={property.address.street} Location={property.address.city} Price={property.price}/>
        </div>
    )
}
