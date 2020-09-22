import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Route path="/" exact component={LoginComponent} />
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/welcome" component={WelcomeComponent} />
                </Router>
            </div>
        );
    }
}

class WelcomeComponent extends Component{
    render() {
        return <div>Welcome page!!!!!!!</div>
    }
}


class LoginComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: 'foysal',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handleChange(event){
            console.log(this.state);
            this.setState({
                [event.target.name]:event.target.value}
                )
    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState({username:event.target.value})
    // }

    // handlePasswordChange(event) {
    //     this.setState({password:event.target.value})
    // }
    loginClicked() {
        if(this.state.username==='foysal' && this.state.password==='dummy'){
            this.props.history.push("/welcome")
            // this.setState({showSuccessMessage:true})
            // this.setState({hasLoginFailed:false})
        }
        else {
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginFailed:true})
        }
    }


    render() {
        return (
            <div>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
           
        );
    }

}


export default TodoApp;