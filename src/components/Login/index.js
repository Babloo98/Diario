import React, { Component } from 'react';
import logo from '../../assets/web-logo.png';
import './login.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const { loginModal, loginToggle, isLogin, registerToggle, isRegister } = this.props;
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
                                <form className="input-wrapper log">
                                    <input type="text" name="username" placeholder="Username" />
                                    <input type="password" name="password" placeholder="Password" />
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

export default Login;