import React, { Component } from 'react';
import logo from '../../assets/web-logo.png';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction } from "../../Actions/login.action";
import { registerAction } from "../../Actions/register.action";
import { get } from "lodash";
import {Redirect, withRouter} from 'react-router-dom';
import { setLocalstorage } from "../../helper";
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            redirect: false,
            regForm: {
                firstName: '',
                lastName: '',
                userName: '',
                number:'',
                email: '',
                password: ''
            }
        };
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = (e) => {
        e.preventDefault();
        const{regForm} = this.state;
        const currentUserData = regForm;
        currentUserData[e.target.name] =  e.target.value;
        this.setState({
            regForm: currentUserData
        })
    }

    loginSubmit = async (e) => {
        e.preventDefault();
        const{loginAction} = this.props;
        const {email, password} = this.state;
        const data = {
            email,
            password
        }
        try{
            await loginAction(undefined, data);
            const {loginData} = this.props;
            if(get(loginData, "isAuthenticated") === true){
                setLocalstorage("user_data", loginData)
                this.setState({
                    redirect: true
                })
            }
            else{
                localStorage.clear();
                this.setState({
                    redirect: false
                })
            }
        }
        catch(e){
            console.log(`Error while loggin in ${e.message}`)
        }
    }

    registerSubmit = async (e) => {
        e.preventDefault();
        const{registerAction} = this.props;
        const {firstName, lastName, userName, number, email, password} = this.state.regForm;
        const data = {
            firstName,
            lastName,
            userName,
            number,
            email,
            password,
        }
        try{
            await registerAction(undefined, data);
        }
        catch(e){
            console.log(`Error while loggin in ${e.message}`)
        }
    }

    render() {
        const { loginModal, loginToggle, isLogin, registerToggle, isRegister, location } = this.props;
        const { from } = location.state || { from: { pathname: '/Dashboard' } };
        if (this.state.redirect === true) return <Redirect to={from.pathname} />;
        return (
            <div className="login">
                <div className="modal">
                <div className="close" onClick={loginModal}></div>
                    <div className="login-wrapper">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="form-wrapper">
                            <h2><span onClick={registerToggle}>Register</span> | <span onClick={loginToggle}>Login</span></h2>
                            {isLogin &&
                                <form className="input-wrapper log" onSubmit={(e)=> this.loginSubmit(e)}>
                                    <input type="text" name="email" placeholder="Email" onChange={(e)=>this.handleLogin(e)}/>
                                    <input type="password" name="password" placeholder="Password" onChange={(e)=>this.handleLogin(e)}/>
                                    <div className="submit">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            }
                            {isRegister && 
                                <form className="input-wrapper" onSubmit={(e)=> this.registerSubmit(e)}>
                                    <input type="text" name="firstName" placeholder="First Name" onChange={(e)=>this.handleRegister(e)}/>
                                    <input type="text" name="lastName" placeholder="Last Name" onChange={(e)=>this.handleRegister(e)}/>
                                    <input type="text" name="userName" placeholder="Username" onChange={(e)=>this.handleRegister(e)}/>
                                    <input type="tel" name="number" placeholder="Phone" onChange={(e)=>this.handleRegister(e)}/>
                                    <input type="email" name="email" placeholder="Email" onChange={(e)=>this.handleRegister(e)}/>
                                    <input type="password" name="password" placeholder="Password" onChange={(e)=>this.handleRegister(e)}/>
                                    <div className="submit">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            }
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
}

const mapStateToprops = (state) => {
    return{
        loginData: state.loginReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loginAction: loginAction,
        registerAction
    }, dispatch);
};

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Login));