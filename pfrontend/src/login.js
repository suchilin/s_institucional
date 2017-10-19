import React, { Component } from 'react';
var auth = require('./auth')

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            canSubmit:false,
            errors:'',
            username:'',
            password:''
        }
    }

    handleSubmit(event) {
        var lgn = auth.login(this.state.username,this.state.password)
        console.log(lgn)
        if(lgn===200){
            this.props.history.push('/')
        }else if(lgn===400){
            this.setState({
                errors:"Su usuario o contraseña no son correctos, porfavor verifiquelos"
            })
        }
        event.preventDefault();
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

    enableButton() {
        this.setState({
            canSubmit: true
        })
    }

    disableButton() {
        this.setState({
            canSubmit: false
        })
    }

    render() {
            return (
                <div>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <label>
                            UserName:
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange.bind(this)}/>
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
                        </label>
                        <br />
                        <input type="submit" value="Login"/>
                    </form>
                <span>{this.state.errors}</span>
                </div>
            )
        }
}

export default Login;
