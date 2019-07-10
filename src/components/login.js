import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';

class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            name: '',
            password: '',
            redirect: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    handleChange = (e) => {
            this.setState({ [this.handleChange.name]: e.target.value})
        }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const { name, password } = this.state;
        axios.post(`http://test.exesoft.org:8008/`, {
            name,
            password
        },{
            headers: { Authorization: 'Bearer a4d5c33e12795c21a3e40a53d94ddfd0'}
        }).then(() => this.setState({ redirect: true }))
    }
    
    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to='/' />
        }
        return(
            <div className="uk-container">
                <div className="uk-position-center uk-position-small loginpanel">
                   <div className="uk-panel uk-text-center enterlog">
                       <h4 className="uk-text-bold uk-padding-small uk-light">Вход</h4>
                    </div>
                    <form onChange={this.handleFormSubmit} className="uk-form-horizontal uk-margin uk-padding">
                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-bold" htmlFor="form-horizontal-text">Username</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" onChange={this.handleChange} id="username" name="username" type="text" placeholder="username"/>
                            </div>
                        </div>
                        <div className="uk-margin">
                            <label className="uk-form-label uk-text-bold" htmlor="form-horizontal-text">Password</label>
                            <div className="uk-form-controls">
                                <input className="uk-input" onChange={this.handleChange} id="password" name="password" type="password" placeholder=""/>
                            </div>
                        </div>
                        <div className="uk-form-controls">
                             <a href="#login" className="uk-button uk-button-primary" id="submit">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;