import React, { Component } from 'react';
import { fetch } from '../../utils/commons';
import ReactDOM from 'react-dom';
import '../../webComponents/customList';
import { setTimeout } from 'timers';
// using class
class CustomListDemo extends Component {
    
    constructor() {
        super();
        this.customListElement = null;
        // this.state = {
        //     customers:[]
        // }
    }

    componentDidMount() {
        this.customListElement = ReactDOM.findDOMNode(this.refs.customListElement)
        console.log('customListElement', this.customListElement)
        fetch('/api/customerList')
        .then(resp =>{
            console.log('data', resp)
            // this.setState({customers: resp})
            setTimeout(()=>{
                console.log('assign data')
                this.customListElement.listData =resp;                
                console.log('this.customListElement.listData', this.customListElement.setListData)
            },500)
        })
    }
    
    render () {
        // const cust = this.state.customers
        return (
            <div className="test-list-container">
                <custom-list ref="customListElement">something</custom-list>
            </div>
        )
    }
}

export default CustomListDemo;