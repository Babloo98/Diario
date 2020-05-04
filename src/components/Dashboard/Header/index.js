import React from 'react';
import './style.scss';
import InputBox from '../../common/InputBox/index';
import logo from '../../../assets/diario-logo.png';
import avatar from '../../../assets/avatar.png';

class Header extends React.Component{
    render(){
        return(
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
                    <div className="profile">
                        <img src={avatar} alt="PP" />
                    </div>
               </div>
            </div>
        )
    }
};

export default Header;
