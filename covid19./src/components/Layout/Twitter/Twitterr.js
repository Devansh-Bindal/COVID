import React,{Fragment} from 'react';
import Twitter from '../../../images/Twitter.svg';
import WHO from '../../../images/WHO.png';
import Modi from '../../../images/MODI.png';
import Donald from '../../../images/DONALD.png'
import like from '../../../images/like.svg';
import share from '../../../images/share.svg';
const twitterr=()=>{
    return(
        <Fragment>
            <div className="twitter">
            <div className="twitter-top">
             <div className="twitter-heading">Latest Tweets</div>
                <div className="twitter-img"> <img src={Twitter} alt="" /></div>
               </div>

               <div className="twitter-info">
                                    <div className="twitter-info-img">
                                        <img src={WHO} alt="" className="twitter-info-img-left" />
                                    </div>
                                    <div className="twitter-info-right">
                                        <div className="LogoName">World Health Organization</div>
                                        <div className="Logo-Subscript">@WHO</div>
                                    </div>

                                </div>
                                <div className="twitter-para">
                                    We are the #UnitedNations health agency.We are committed to achieving better health for everyone,everywhere -#HealthForAll
                            </div>
                                <div className="twitter-footer">
                                    <img src={like} alt="" className="twitter-footer-like" />
                                    <h5 className="likes">4.6k</h5>
                                    <img src={share} alt="" className="twitter-footer-share" />
                                    <h5 className="shares">247</h5>
                                    <h5 className="date">27th Mar</h5>
                                </div>

                                <div className="twitter-info">
                                    <div className="twitter-info-img">
                                        <img src={Modi} alt="" className="twitter-info-img-left" />
                                    </div>
                                    <div className="twitter-info-right">
                                        <div className="LogoName">PMO India</div>
                                        <div className="Logo-Subscript">@PMOIndia</div>
                                    </div>
                                </div>
                                <div className="twitter-para">
                                    PM@narendramodi loads spirit of COVID-19 survivors,urges them to share their success with people.#MannKibaat
                            </div>
                                <div className="twitter-footer">
                                    <img src={like} alt="" className="twitter-footer-like-modi" />
                                    <h5 className="likes">10k</h5>
                                    <img src={share} alt="" className="twitter-footer-share-modi" />
                                    <h5 className="shares">1.67k</h5>
                                    <h5 className="date-modi">13th Mar</h5>
                                </div>


                                <div className="twitter-info">
                                    <div className="twitter-info-img">
                                        <img src={Donald} alt="" className="twitter-info-img-left" />
                                    </div>
                                    <div className="twitter-info-right">
                                        <div className="LogoName">Donald J. Trump</div>
                                        <div className="Logo-Subscript">@realDonaldTrump</div>
                                    </div>
                                </div>
                                <div className="twitter-para">
                                    We are fighting the coronavirus on every possible front-and we will achieve total victory with the help
                            </div>
                            </div> 
</Fragment>
    )

}
export default twitterr;