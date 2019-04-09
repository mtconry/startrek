import React, { Component } from 'react';
import FadeIn from '../transitions/fade-in';

export default class Ship extends Component {

    handleClick = () => {
        this.props.onShipClick(this.props.index);
    }

    render(){ return(
        <FadeIn
            delay='1.5s'
            duration={500}>
            <div className='ship'>
                <img
                    src={this.props.ship.img}
                    alt='ship'
                    className= 'ship-pic'
                    onClick={this.handleClick}/>
            </div>
            </FadeIn>
    )}
}