import React, { Component } from 'react';
import style from './TestList.scss';
// using class
class TestList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers:[]
        }
    }

    componentDidMount() {
        fetch('/api/customerList')
        .then(response =>{
            return response.json()
        })
        .then(resp =>{
            console.log('data', resp)
            this.setState({customers: resp})
        })
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
                </div>
                <div className="list-scroll-container">
                    <div className="list-scroll">
                        {cust.length ? 
                        this.renderList() : <h2>This is test list</h2>}
                    </div>
                </div>
            </div>
        )
    }
}

export default TestList;