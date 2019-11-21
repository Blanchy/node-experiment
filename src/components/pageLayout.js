import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './navigation'
import Routes from '../routes/Routes';

// pageheader
// page body
const PageLayout = () => {
    return (
        <Router basename="/">
            <div className="page-layout-conatiner">
                <div className="page-layout-header">
                    <Navigation/>
                </div>
                <div className="page-layout-body">
                    <Routes />
                </div>
            </div>
        </Router>
    );
}

export default PageLayout;