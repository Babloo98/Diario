import React from 'react';
import Login from '../Login';
import './homepage.scss';

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,
            isLogin: false,
            isRegister: true
        };
    };

    loginModal = () =>{
        this.setState(prevState => ({
            isModalOpen: !prevState.isModalOpen
        }));
    };

    loginToggle = () =>{
        this.setState({
            isLogin: true,
            isRegister: false
        });
    }

    registerToggle = () =>{
        this.setState({
            isLogin: false,
            isRegister: true
        });
    }

    render(){
        const { isModalOpen, isLogin, isRegister } = this.state;
        return(
            <div className="homepage-wrapper">
                <div className="homepage">
                    <div className="banner-text">
                        <h4>Diario</h4> 
                        <p>Your private, 100% customizable dairy.</p>
                        <p> Loved by writers around the world.</p>  
                        <button className="start" onClick={this.loginModal}>Get Started</button> 
                    </div>  
                </div>
                <div className="cause-section">
                    <div className="cause-test-section">
                        <h4 className="pt-5">What are you writing for?</h4>
                        <p>" Whether you’re looking for a tool to record your daily emotions and activities in a reflective journal, keep track of milestones in your personal online diary customized for you ."</p>
                        <button className="start-button btn btn-primary">Get Started</button>
                    </div>
                </div>
                <div className="features-section">
                    <span className="silent">Silent</span><span className="features">Features</span>
                    <div className="row">
                        <div className="col-lg-4">
                            <i class="fas fa-lock"></i>
                            <h4>100% Private</h4>
                            <p>Designed to focus on privacy, your entries are totally private by default!</p>
                        </div>
                        <div className="col-lg-4">
                            <i class="fas fa-mobile-alt"></i>
                            <h4>Available Everywhere</h4>
                            <p>Enjoy Penzu on the move. Available for iOS and Android and totally free!</p>
                        </div>
                        <div className="col-lg-4">
                            <i class="far fa-clock"></i>
                            <h4>Never Forget to Write</h4>
                            <p>Custom email reminders help you make sure you never forget to write.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <i class="fas fa-lock"></i>
                            <h4>100% Private</h4>
                            <p>Designed to focus on privacy, your entries are totally private by default!</p>
                        </div>
                        <div className="col-lg-4">
                            <i class="fas fa-mobile-alt"></i>
                            <h4>Available Everywhere</h4>
                            <p>Enjoy Penzu on the move. Available for iOS and Android and totally free!</p>
                        </div>
                        <div className="col-lg-4">
                            <i class="far fa-clock"></i>
                            <h4>Never Forget to Write</h4>
                            <p>Custom email reminders help you make sure you never forget to write.</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="title"><span className="contact">Contact</span><span className="info">Info</span></div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <h5>Phone</h5>
                            <h6>Babloo : +91 9871736723</h6>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h5>Email</h5>
                            <h6>babloomshr@gmail.com</h6>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h5>Location</h5>
                            <h6>India</h6>
                        </div>
                    </div>
                    <div className="lower-footer row">
                        <div className="col-lg-4 offset-lg-1">
                            <h5>Copyright ©2019 All rights reserved</h5>
                            <h6>This template is made with ♡ by Software Revalador</h6>
                        </div>
                        <div class=" col-lg-5 offset-lg-1 social-connect"><i class="fab fa-facebook" aria-hidden="true"></i><i class="fab fa-twitter" aria-hidden="true"></i></div>
                    </div>
                </div>
                {isModalOpen === true && 
                    <Login 
                        loginModal={this.loginModal} 
                        loginToggle={this.loginToggle}
                        registerToggle={this.registerToggle}
                        isLogin={isLogin}
                        isRegister={isRegister}
                    />
                }
            </div>    
        )
    }
};

export default Homepage;