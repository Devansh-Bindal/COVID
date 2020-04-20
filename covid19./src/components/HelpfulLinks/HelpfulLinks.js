import React,{Component,Fragment} from 'react';
import CovidBack from '../../images/covid-back.jpg';
import './HelpfulLinks.css';
class HelpfulLinks extends Component
{
    render()
    {
        return(
            <Fragment>
            <div className="header">
                <div className="headding">Global Climate & Health Alliance</div>
            </div>
            <div className="linksection">
                <img src={CovidBack}  alt=""className="LinkImg"/>
                    <h2 className="contentHeading">Covid-19 Useful Links</h2>
                    <h4 className="contentSubHeading">We have compiled a non-exhaustive list of useful links to associations and organisations providing the latest information and guidelines about the coronavirus, causing an illness called Covid-19. </h4>
                    <h4 className="contentSUBheading">The virus is spreading worldwide and it is important we all follow recommendations to limit its spread and protect those more at risk.
                        Elderly people and people with underlying health conditions are most at risk. Although, currently, there is limited detailed information, this may include people with asthma and cardiovascular conditions.
                        We will keep updating the list with useful resources. Stay safe, protect yourself and those around you.</h4>
            </div>
            <div className="info">
                <div className="boxGlobal">
                <h2 className="info-heading">Global:</h2>
               <p className="info-para"> The World Health Organization (WHO) provides regularly updated information on Covid-19 and guidance for health professionals but also practical advice for the public.</p>
                </div>
                <div className="boxItaly">
                <h2 className="info-heading">Italy:</h2>
                <p className="info-para">https://www.federasmaeallergie.org/sitoFA/</p>
                </div>
                <div className="boxEurope">
                <h2 className="info-heading">Europe:</h2>
                <p className="info-para">The European Lung Foundation brings together all major national respiratory patient organisations in Europe, provides links to national organisations with useful advice on how to protect ourselves from COVID-19.</p>
                </div>
                <div className="boxGermany">
                <h2 className="info-heading">Germany:</h2>
                <p className="info-para">https://www.daab.de/</p>
                </div>
                <div className="boxSpain">
                <h2 className="info-heading">Spain:</h2>
                <p className="info-para">https://www.daab.de/</p>
                <p className="info-para">http://www.seicap.es/es </p>
                <p className="info-para">https://enfamilia.aeped.es/temas-salud/recomendaciones-sociedad-espanola-cardiologia-pediatrica</p>
                <p className="info-para">https://www.seaic.org/inicio/sala-de-prensa/coronavirus-e-inmunodeficiencias-primarias.html</p>
                </div>
                <div className="boxUK">
                <h2 className="info-heading">UK:</h2>
                <p className="info-para">https://www.blf.org.uk/support-for-you/coronavirus</p>
                </div>
                <div className="boxFrance">
                <h2 className="info-heading">France:</h2>
                <p className="info-para">https://sante-respiratoire.com/category/actualites/</p>
                <p className="info-para">https://www.lesouffle.org/</p>
                </div>
                </div>
            </Fragment>
        );
    }
}
export default HelpfulLinks;

