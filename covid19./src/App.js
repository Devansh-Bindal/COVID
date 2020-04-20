import React, { Component,Fragment } from 'react';
import {Route,Switch} from 'react-router-dom';
import Faq from '../src/components/FAQ/FAQ';
import HelpfulLinks from '../src/components/HelpfulLinks/HelpfulLinks';
import Layout from './components/Layout/Layout';
import Header from '../src/components/Header/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Switch>
        <Route path="/" exact component={Layout}/> 
        <Route path="/faq" component={Faq}/>
        <Route path="/helpful-links" component={HelpfulLinks}/>
       </Switch>
       {/* <Layout/> */}
      </Fragment>
    );
  }
}
export default App;


