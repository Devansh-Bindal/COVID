import React from 'react';
import './WorldCountry.css';
import Up from '../../../images/Up.svg';
import Down from '../../../images/Down.svg';
const WorldCountry = (props) => {
    let arrow = Up;
    let activeCase = props.totalCases - props.recovered;
    if (activeCase < props.recovered) {
        arrow = Down;
    }
    let TotalCases = props.totalCases;
    if (TotalCases >= 1000) {
        // TotalCases = `${props.totalCases.toFixed(1)}k`;
            TotalCases = props.totalCases/1000;
            Math.round(TotalCases*10)/10;
    }
    let Recover = props.recovered
    if (Recover >= 1000) {
        Recover = `${props.Recover.toFixed(1)}k`;
    }
    return (
        <div className="box">
            <img src={props.flag} alt="" style={{ width: "10%", height: "30%", position: "absolute", top: "20%", left: "3%" }} />
            <div className="countryName">{props.country}</div>
            <div className="affected">{`${TotalCases}k`} Affected | {Recover} Recovered</div>
            <img src={arrow} alt="" width="8%" style={{ position: "absolute", top: "45%", left: "85%" }} />
        </div>
    )
}
export default WorldCountry;