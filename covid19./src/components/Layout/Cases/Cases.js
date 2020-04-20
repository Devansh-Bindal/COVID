import React,{Fragment} from 'react';
import BG from '../../../images/BG.svg';
import Up from '../../../images/Up.svg';
import Down from '../../../images/Down.svg';
import Graph from '../../../images/Graph.svg';
import Graph1 from '../../../images/Graph(1).svg';
import Graph2 from '../../../images/Graph (2).svg';
import Graph3 from '../../../images/Graph (3).svg';
import './Cases.css';
const cases=(props)=>
{
    return(
    <Fragment>
        <div className="main">
        <div className="img1">
        <img src={BG} width="100%" height="100%" alt="" />
        <div className="totalCase">Total Cases
        <img src={Up} width="8%" alt="" />
        </div>
        <div className="count">{props.totalCases}</div>
        <img src={Graph} className="im" alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
        </div>
    
        <div className="img2"><img src={BG} alt="" width="100%" height="100%" />
        <div className="totalCase">Recovered<img src={Down} alt="" width="8%"></img></div>
        <div className="count">{props.recovered}</div>
        <img src={Graph3} className="im" alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
        </div>

        <div className="img3"><img src={BG} alt="" width="100%" height="100%" />
        <div className="totalCase">Active Cases<img src={Up} alt="" width="8%"></img></div>
        <div className="count">{props.active}</div>
        <img src={Graph1} className="im" alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
        </div>
    
        <div className="img4"><img src={BG} alt="" width="100%" height="100%" />
        <div className="totalCase">Total Death<img src={Up} alt="" width="8%"></img></div>
        <div className="count">{props.deaths}</div>
        <img src={Graph2} alt="" style={{ width: "25%", height: "32%", position: 'absolute', top: '35%', left: '60%' }}></img>
        </div>
        </div>
    </Fragment>
    )
}
export default cases;