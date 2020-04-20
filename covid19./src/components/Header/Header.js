import React,{Component} from 'react';
import virus from '../../images/virus.png';
import NavigationItems from '../Layout/NavigationItems/NavigationItems';
import '../../components/Header/Header.css';
class header extends Component
{
    render()
    {
        return(
            <div className="Header">
                    <div className='Layout'> <a href="/"><img src={virus} alt="" /></a></div>
                        <div className="header_separation">
                            <div className="Heading"><h3>COVID'19</h3></div>
                            <nav><NavigationItems /></nav>
                    </div>
                </div>
        );
    }
}
export default header;