import React,{Component,Fragment} from 'react';
import '../FAQ/FAQ.css';
class Faq extends Component
{
    render()
    {
        return(
            <Fragment>
            <header><div className="faq-heading">
                <h2 className="headingg">COVID-19: Frequently Asked Questions on Visa Application</h2>
                </div>
                <div className="containner">
               <div className="mainn">
                   <div className="sectionn">
                       <div className="box">
                <div className="question">How do I check if the country I wish to travel to is accepting visa applications?</div> 
                <div className="answer">In view of the ongoing COVID-19-related safety measures, many countries have issued detailed travel advisories. In rapidly changing scenarios, while some countries have closed Visa Application Centres completely, others remain functional and are accepting visa applications.</div> 
                     </div>
                     <div className="box">
                <div className="question">I have a valid visa, but the country I’m going to has issued a travel advisory. Can I still travel to that country?</div>
                <div className="answer">Advisories for various countries differ with regards to who can enter, irrespective of whether they hold a valid visa or not. Some countries have imposed border control measures that only allow citizens, residents or specific permit holders to enter the country, and disallow other non-essential travellers even if they hold a valid visa.</div>
               </div> <div className="box">  <div className="question">If a government has suspended visa services, does it mean the Visa Application Centre is closed and I cannot submit any visa applications?</div>
                <div className="answer">Not necessarily, and this differs from country to country. Certain governments might have suspended some visa services and may not be accepting application for certain visa categories, but you may still be able to apply for other visa categories</div>
                </div> <div className="box">  <div className="question">I submitted my passport with the visa application before services were suspended. How do I get my passport back?</div>
                <div className="answer">Once an application is submitted, you can receive updates on your application’s progress through VFS Global’s online tracking service, or via text messaging if you have opted for the SMS service. The status will be updated as and when your passport is ready for collection/delivery.</div>
                </div> <div className="box">  <div className="question">How can I reschedule / cancel an appointment I’ve already booked?</div>
                <div className="answer">If you wish to cancel or reschedule your appointment, please visit the country-specific page accessed by entering the name of the country you’re applying from and the country you wish to travel to) and follow cancellation / rescheduling process as stated on the website of that particular country.</div>
                </div> <div className="box">   <div className="question">My freshly issued visa will be invalid in a few weeks. Can I apply for an extension?</div>
                <div className="answer">Please check if the concerned Visa Application Centre is open in your city/country. If it is, or when it re-opens, you will be able to re-apply for the visa.</div>
                </div> <div className="box">  <div className="question">I booked a visa appointment, but the Visa Application Centre is now closed. What can I do?</div>
                <div className="answer">You will be able to schedule a new appointment or reschedule an existing one (as per the process stipulated on the country-specific website), once VFS Global is directed to re-open the Visa Application Centre.</div>
                </div> <div className="box">  <div className="question">Do I get a refund if my visa is already issued but I can’t travel and enter a country?</div>
                <div className="answer">If your visa application is under processing, you might still be able to withdraw your application and get a refund of the visa fee. Please note, refund policies vary among governments and VFS Global does not decide on visa fee refunds. This is at the sole discretion of the government/embassy/consulate</div>
                </div>
                   </div>
                   </div></div>
            </header>
            </Fragment>
        );
    }
}
export default Faq;