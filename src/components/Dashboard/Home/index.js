import React from "react";
import './style.scss';

class Home extends React.Component{
    render(){
        return(
            <div className="dashboard">
                <div className="input-wrap"><input placeholder="ENTER TITLE HERE" /></div>
                <div className="input-wrap"><input type="date" className="diary-date" /></div>
                <div className="diary-content"><textarea placeholder="ENTER YOU THOUGHTS"></textarea></div>
            </div>
        )
    }
};

export default Home;