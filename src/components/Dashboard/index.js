import React, { Component } from 'react';
import './style.scss';
import HomeIcon from '../../assets/home.svg';
import Home from './Home/index';
import Header from './Header/index'

class Dashboard extends Component {
  state = {
    adminOption: [
      {label: HomeIcon, url:'Home', toolTipText: 'HOME'},
      {label: HomeIcon, url:'Diaries', toolTipText: 'DIARY'},
      {label: HomeIcon, url:'Filter', toolTipText: 'FILTER'},
    ],
      isSelected: 'Home',
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
                {isSelected === 'Home' && <Home />}
              </div>
            </div>
          </div>
        </div>
        </>
      );
  }
}

export default Dashboard;