import React from 'react';
import './SpreadTrend.css';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['FEB 09','FEB 16','FEB 23','MAR 08','MAR 16','MAR 22','MAR 29'],
  datasets: [
    {
      // label: 'Spread Trends',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [548,643,920,1406,2075,2877,5509]
    }
  ]
}

const spreadTrend=()=> {
    return (
        <div className="article-left">
                {/* <div className="Heading">
                         <h4 className="h4">Spread Trends</h4>
                 </div> */}
        <Line
          data={state}
          // width={10}
          // height={10}
          options={{
            title:{
              display:true,
              text:'Spread Trends              Confirmed Recovered Deceased',
              fontSize:15
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    );
}
export default spreadTrend;

