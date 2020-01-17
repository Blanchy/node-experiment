import React, { Component } from 'react';
import { fetch } from '../../utils/commons';
import style from './TestList.scss';
import ReactDOM from 'react-dom';
import '../../webComponents/customButton';
import { setTimeout } from 'timers';
// using class
class TestList extends Component {
    
    constructor(props) {
        super(props);
        this.buttonElement = null;
        this.state = {
            customers:[]
        }
    }

    componentDidMount() {
        this.buttonElement = ReactDOM.findDOMNode(this.refs.buttonElement)
        fetch('/api/customerList')
        .then(resp =>{
            console.log('data', resp)
            this.setState({customers: resp})
        })
        setTimeout(()=>{
            this.buttonElement.style.backgroundColor = 'green'
            this.buttonElement.complexData = {title:'hello title'}
            console.log('this.buttonElement', this.buttonElement._complexData)
        }, 2000)
    }

    renderList() {
        return (
            this.state.customers.map(cust=>(
                <div key={cust.ID} className="list-row">
                    <div className="col-1">{cust.FirstNameLastName}</div>
                    <div className="col-2">{cust.JobTitle}</div>                
                </div>
                )
            )
        )
    }
    
    render () {
        const cust = this.state.customers
        return (
            <div className="test-list-container">
                <div className="list-header">
                    <div className="col-1">Name</div>
                    <div className="col-2">Title</div> 
                    <custom-button ref="buttonElement" >Hello test</custom-button>
                </div>
                <div className="list-scroll-container">
                    <div className="list-scroll">
                        {(cust && cust.length) ? 
                        this.renderList() : <h2>This is test list</h2>}
                    </div>
                </div>
            </div>
        )
    }
}

export default TestList;