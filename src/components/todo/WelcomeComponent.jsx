import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class WelcomeComponent extends Component{
    render() {
        return(
            <>
                <h1>Welcome Page</h1>
                <div className="container">
                Welcome {this.props.match.params.name}. You can manage yout Todos <Link to="/todos">here</Link>
                </div>
            </>
        )
    
    }
}

export default WelcomeComponent