import React, { useState } from 'react'; 
import Properties from '../../common/Properties/Properties'; 
import HeaderComponent from '../../common/HeaderComponent/HeaderComponent'; 
import PropertyDetails from '../../common/PropertyDetails/PropertyDetails';

export default function Main() {

    const [main, setMain] = useState(true);
    const [singlePropertyId, setsinglePropertyId] = useState("");

    return (
        <div className="mainContainer">
            {main ? <Properties setMain={setMain} setsinglePropertyId={setsinglePropertyId}/> : <PropertyDetails setMain={setMain} id={singlePropertyId}/>}
        </div>
    )
}
