import React from 'react'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import SinglePropertyDetails from '../SinglePropertyDetails/SinglePropertyDetails'; 
import { propertyEx, propertyEx2 } from "../../../utils/mockOfProperties";
import './Property.scss'; 


export default function Property() {

    const properties = [propertyEx, propertyEx2]; 

    return (

            properties.map((property) => {

                return (
                <div className="property">
                    <ImageCarousel property={property}/>
                    <SinglePropertyDetails Number={property.address.number} Address={property.address.street} Location={property.address.city} Price={property.price} beds={property.bedRooms} baths={property.bathRooms} m2={property.surface}/>
                </div>)
        })

       
    )
}
