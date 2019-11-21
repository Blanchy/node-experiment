import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import PageLayout from './components/pageLayout';
import './app.scss';

ReactDOM.render(
  <div>
    <Fragment>
       <PageLayout/>
    </Fragment>
  </div>,
  document.getElementById('app')
);

