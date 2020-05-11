import React, { Fragment } from 'react';
import './style.scss';
import InputBox from '../../common/InputBox/index';
import logo from '../../../assets/diario-logo.png';
import avatar from '../../../assets/avatar.png';
import {setLocalstorage} from "../../../helper";
import {Redirect} from "react-router-dom";

class Header extends React.Component{

    state = {
        isProfile: false,
        redirectToHome: false
    };

    showProfile = () =>{
        this.setState(prevState=>({
            isProfile: !prevState.isProfile
        }));
    };

    onLogout = () => {
        setLocalstorage("user_data", "");
        localStorage.clear();
        this.setState({
            redirectToHome: true
        })
    }

    render(){
        const { isProfile, redirectToHome } = this.state;
        if(redirectToHome === true){ return <Redirect to="/" />}

        return(
            <Fragment>
                <div className="Header">
                    <div className="logo">
                        <img alt = "logo-img" src = {logo}></img>
                    </div>
                    <div className="notification-bar">
                        <InputBox
                            name='header-search'
                            className='form-control'
                            type="text"
                            onChange={this.handleChange}
                        />  
                        <div className="profile" onClick={this.showProfile}>
                            <i className="icon-user"></i>
                        </div>
                    </div>
                </div>
                {
                    isProfile && 
                    <div className="header-profile">
                        <div className="modal">
                            <div className="profile">
                                <img src={avatar} alt="PP" />
                            </div>
                            <p>Joyesh Malik</p>
                            <p>121 Stories</p>
                            <div className="logout">
                                <button type="button" onClick={this.onLogout}>Logout</button>
                            </div>
                        </div>
                    </div>
                }
            </Fragment>
        )
    }
};

export default Header;
