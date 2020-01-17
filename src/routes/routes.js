import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from '../components/navigation'
import HomeTabPage from '../tabpages/home/HomeTabPage'
import AboutTabPage from '../tabpages/about/AboutTabPage'
import TestList from '../tabpages/testList/TestList'
import CustomListDemo from '../tabpages/customListDemo/customListDemo'

const Routes = () => {
    return (
        <Switch>
          <Route exact path="/" component={HomeTabPage}/>
          <Route path="/about" component={AboutTabPage}/>
          <Route path="/testList" component={TestList}/>
          <Route path="/customListDemo" component={CustomListDemo}/>
        </Switch>
    )
};

export default Routes;
/* 
            <Route exact path="/home" component={Home} />
<Route path="/opportunity/:opportunityId/scenarios/compare" render={this.renderComponent(CompareScenarios)} />
        <Route path="/opportunity/:opportunityId/scenarios" component={Scenarios} />
        <Route path="/opportunity/:opportunityId/dashboard" component={OpportunityDashboard} />
        <Route path="/" component={Opportunities} /> 
        */