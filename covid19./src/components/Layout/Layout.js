import React, { Component, Fragment } from 'react';
import './Layout.css';
import Fever from '../../images/fever.svg';
import Cases from '../Layout/Cases/Cases';
import WorldCountries from '../Layout/WorldCountries/WorldCountries';
import Carousel from '../Layout/Carousel/Carousel';
import RecoveryChart from './RecoveryChart/RecoveryChart';
import SpreadTrend from './SpreadTrend/SpreadTrend';
import Map from '../Layout/Map/Map';
import Twitterr from './Twitter/Twitterr';
// import MapChart from './Map/MapChart';
class Layout extends Component {
    state = {
        totalCases: '',
        recovered: '',
        active: '',
        deaths: '',
        totalDeath:'',
        flag:'',
        countries:'',
        country:'',
        filteredCountries: [],
        searchedText: '',
        recoveredRatio:'',
        x_axis:'',
        y_axis:''
    }
    async componentDidMount() {
        const response = await fetch("https://corona.lmao.ninja/v2/all");
        const data = await response.json();
        const totalCases = JSON.stringify(data.cases);
        const recovered = JSON.stringify(data.recovered);
        const integer1 = parseInt(recovered, 10);
        const integer2=parseInt(totalCases,10);
        const recoveredRatio=(integer1/integer2)*100;
        const active = JSON.stringify(data.active);
        const deaths = JSON.stringify(data.deaths);
        this.setState({ totalCases: totalCases, recovered: recovered, active: active, deaths: deaths,recoveredRatio:recoveredRatio});
        const Country = await fetch("https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search");
        const dataCountry = await Country.json();
        const countries = dataCountry.data.rows;
        const flag = JSON.stringify(dataCountry.data.rows.flag);
        this.setState({ countries: countries, flag: flag});
        const dataApi=await fetch("https://pomber.github.io/covid19/timeseries.json");
        const dataSet = await dataApi.json();
        for( let i=0;i<10;i++)
        {
        const x_axis=JSON.stringify(dataSet.China[i].date);
        const y_axis=JSON.stringify(dataSet.China[i].confirmed);
        this.setState({x_axis:x_axis,y_axis:y_axis});
        }
        setTimeout(function abc() {
            location.reload();
                }, 10000);
    }
    searchHandler = (event) => {
        const searchedText = event.target.value;
        const filteredCountries = this.state.countries.filter(x => x.country.toLowerCase().indexOf(searchedText) > -1)
        this.setState({ searchedText, filteredCountries });
    }
    render() 
    {
        const countriesData = this.state.filteredCountries.length ? this.state.filteredCountries : this.state.countries;
        return (
            <Fragment>
                <div className="container">
                    <div className="Main-Section">
                         <Cases totalCases={this.state.totalCases} recovered={this.state.recovered} active={this.state.active}deaths={this.state.deaths}
                         />
                            <div className="section">
                                <div className="LeftSection">
                                    <div className="search-container">
                                    <input className="input-field" value={this.state.country} type="text"placeholder="Search Location" onChange={this.searchHandler.bind(this)}
                                     />
                                 </div>
                                < WorldCountries countries={countriesData}/>
                                </div>
                                <div className="Right-Section">
                                    <Map/>
                                    {/* <MapChart/> */}
                                    {/* <div className="Map-Section">Map</div> */}
                                </div>
                                </div>

                            <div className="article">
                                <div className="Spread">
                                    <SpreadTrend 
                                        X_axis={this.state.x_axis}
                                        Y_axis={this.state.y_axis}
                                    />
                                </div>
                                <div className="article-right">
                                     <div className="article-right-img">
                                        <div className="article-right-box">
                                            <img src={Fever} className="art" alt="" style={{ height: "80%", width: "" }} />
                                        </div>
                                    </div>
                                    <div className="article-right-feed">
                                     <div className="top">
                                            <button className="btnNews">News & Updates</button>
                                        </div> 
                                        <div className="between">
                                        <Carousel/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <div className="aside">
                            <div>
                                <RecoveryChart recoveredRatio={this.state.recoveredRatio} totalCases={this.state.totalCases}recovered={this.state.recovered} />
                            </div>
                            <Twitterr/>        
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default Layout;