import React from 'react';
import './Map.css';
import Data from './Data.json';
const Map=(props)=>
{
    return(
    <div className="Map-Section">
          <div className="CardHeading">
                <h4 className="WorldGeographicalCardh4">COVID-19 Affected Areas</h4>
                <p className=".Cardp"><span className="Most"></span>Most Affected</p>
                <p className=".Cardp"><span className="Less"></span>Less Affected</p>
            </div>
            {/* <MapChart data={Data} /> */}
        </div>
    )
}
export default Map;