import React, { Component } from 'react';
import './style.scss';
import HomeIcon from '../../assets/home.svg';
import Home from './Home/index';
import Header from './Header/index'

class Dashboard extends Component {
  state = {
    adminOption: [
      {label: HomeIcon, url:'/Dashboard/home', toolTipText: 'HOME'},
      {label: HomeIcon, url:'/Dashboard/diaries', toolTipText: 'DIARY'},
      {label: HomeIcon, url:'/Dashboard/filter', toolTipText: 'FILTER'},
    ],
      isSelected: '/Dashboard/home',
  };

  selectedTab = (selectedUrl) => {
    const {history} = this.props;
    this.setState({
      isSelected: selectedUrl,
    })
    history.push(selectedUrl);
  };

  render() {
   const { isSelected, adminOption } = this.state,
      optionsList = adminOption.map((option, index) => {
      return (
          <li
            key={index}
            onClick={(event) => this.selectedTab(option.url)}
            className={isSelected === option.url ? 'active' : ''}
            data-toggle="tooltip" title={option.toolTipText}
          >
            <img alt="option-icon" src={option.label}></img>
        </li>
      )
      }); 
      return (
        <>
        <Header/>
        <div className="admin-wrapper">
          <div className="row">
            <div className="dashboard-options">
              <ul>
                {optionsList}
              </ul>
            </div>
            <div>
              <div className="">
                {isSelected === '/Dashboard/home' && <Home />}
              </div>
            </div>
          </div>
        </div>
        </>
      );
  }
}

export default Dashboard;