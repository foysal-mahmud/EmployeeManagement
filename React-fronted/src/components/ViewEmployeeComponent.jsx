import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';



class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee:{}
        }

    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <div>
                
                <div className="card col-md-6 offset-md-3 mt-5">
                    <h3 className="text-center card-subtitle mt-3 text-muted">View Employee Details</h3>
                    <br/><br/>
                
                    <div className="row">
                        <label>Employee First Name: </label>
                        <div> { this.state.employee.firstName }</div>
                    </div>
                    <div className="row">
                        <label>Employee Last Name: </label>
                        <div> { this.state.employee.lastName }</div>
                    </div>
                    <div className="row">
                        <label>Employee Email Id: </label>
                        <div> { this.state.employee.emailId }</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent