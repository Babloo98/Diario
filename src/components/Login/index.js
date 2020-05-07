import React, { Component } from 'react';
import logo from '../../assets/web-logo.png';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction } from "../../Actions/login.action";
import { get } from "lodash";
import {Redirect, withRouter} from 'react-router-dom';
import { setLocalstorage, getLocalstorage } from "../../helper";
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            phone: '',
            redirect: false
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const{loginAction} = this.props;
        const {email, phone, redirect} = this.state;
        const data = {
            email,
            number: phone
        }
        try{
            await loginAction(undefined, data);
            const {loginData} = this.props;
            console.log('^^',get(loginData, "isAuthenticated"), this.props)
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
                                <form className="input-wrapper log" onSubmit={(e)=> this.handleSubmit(e)}>
                                    <input type="text" name="username" placeholder="Username" onChange={(e)=>this.handleChange(e)}/>
                                    <input type="number" name="phone" placeholder="Number" onChange={(e)=>this.handleChange(e)}/>
                                    <div className="submit">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            }
                            {isRegister && 
                                <form className="input-wrapper">
                                    <input type="text" name="username" placeholder="Username" />
                                    <input type="password" name="password" placeholder="Password" />
                                    <input type="email" name="email" placeholder="Email" />
                                    <input type="tel" name="phone" placeholder="Phone" />
                                    <input type="text" name="state" placeholder="State" />
                                    <input type="text" name="city" placeholder="City" />
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
        loginAction: loginAction
    }, dispatch);
};

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Login));