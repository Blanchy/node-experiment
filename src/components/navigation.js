import React, { Component } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Navigation = () => {
    const history = useHistory()
    return (
        <div className="navigation-container">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/testList">Test List</Link>
                    </li>
                    <li>
                        <Link to="/customListDemo">Custom List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Navigation;
/* 
            <Route exact path="/home" component={Home} />
<Route path="/opportunity/:opportunityId/scenarios/compare" render={this.renderComponent(CompareScenarios)} />
        <Route path="/opportunity/:opportunityId/scenarios" component={Scenarios} />
        <Route path="/opportunity/:opportunityId/dashboard" component={OpportunityDashboard} />
        <Route path="/" component={Opportunities} /> 
        */