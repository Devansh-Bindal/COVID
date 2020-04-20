import React from 'react';
import './RecoveryChart.css';
import { CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const RecoveryChart= (props) =>{
    let total=props.totalCases/1000;
    Math.round(total*10)/10;
    let recover=props.recovered/1000;
    let ratio=props.recoveredRatio;
    let ratio_approx=Math.round(ratio*10)/10;
    return (
        <div className="Recovery-ratio">
            <h4 className="RecoveryHeading">Ratio Of Recovery</h4>
            <CircularProgressbarWithChildren  className="ProgressBar" value={ratio} text={`${ratio_approx}%`}
             styles={buildStyles({
                textSize: '0.8rem',
                pathTransitionDuration: 0.5,
                pathColor: '#00FA9A',
                textColor: '#30313A',
                trailColor: '#f4f4f4',
                // backgroundColor: 'green',
              })}
            >
            </CircularProgressbarWithChildren>
            <p className="InfectedData">
                <span>{`${total}k`} Affected</span>&nbsp;|&nbsp;<span>{`${recover}k`}  Recovered</span>
            </p>
        </div>
    )
}

export default RecoveryChart;