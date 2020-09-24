import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

// LoginComponent
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

            AuthenticationService.registerSuccessfullogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
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
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}

                    UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> <br/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /> <br/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>

                </div>
                
            </div>
           
        );
    }

}

export default LoginComponent