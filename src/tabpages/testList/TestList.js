import React, { Component } from 'react';
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
            this.state.customers.map(cust=>(<div key={cust.ID}>{cust.FirstNameLastName + ' - ' + cust.JobTitle}</div>))
        )
    }
    
    render () {
        const cust = this.state.customers
        return (
            <div>
                {cust.length ? 
                this.renderList() : <h2>This is test list</h2>}
            </div>
        )
    }
}

export default TestList;