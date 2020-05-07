import React from "react";
import './style.scss';

class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <input placeholder="ENTER TITLE HERE" />
                <input type="date" />
                <textarea placeholder="Textarea"></textarea>
            </React.Fragment>
        )
    }
};

export default Home;