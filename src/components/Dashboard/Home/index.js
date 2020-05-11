import React from "react";
import StarRatings from 'react-star-ratings';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'
import './style.scss';

class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            rating: 0
        };
    };

    changeRating = ( newRating, name ) => {
        this.setState({
          rating: newRating
        });
    }

    onChange = () => {

    }

    render(){
        return(
            <div className="dashboard">
                <div className="input-wrap">
                    <input placeholder="ENTER TITLE HERE" />
                    <div className="diary-rating">
                        <p>How was your day</p>
                        <StarRatings
                            rating={this.state.rating}
                            starRatedColor="blue"
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            starDimension={'20px'}
                            starEmptyColor={'gray'}
                            starRatedColor={'#fcba03'}
                            starHoverColor={'rgb(218,165,32)'}
                        />
                    </div>
                </div>
                <div className="input-wrap"><input type="date" className="diary-date" /></div>
                <div className="diary-content">
                    {/* <textarea placeholder="ENTER YOU THOUGHTS"></textarea> */}
                    <HtmlEditor
                        options={options}
                        value={''}
                        onChange={this.onChange}
                        render={({ editor, view }) => (
                        <div>
                            <MenuBar menu={menu} view={view} />
                            {editor}
                        </div>
                        )}
                    />
                </div>
            </div>
        )
    }
};

export default Home;