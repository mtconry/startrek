import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import ShipBox from './shipBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
        .map(a =>[Math.random(), a])
        .sort((a, b) => a[0] - b[0])
        .map(a => a[1])
);

const initialShips =[
    {
        name: 'Bird of Prey',
        img: 'images/250X180/birdofprey.jpg',
        clicked: false
    },
    {
        name:'Borg Cube',
        img:'images/250X180/borgcube.jpg',
        clicked: false
    },
    {
        name:'Defiant',
        img:'images/250X180/defiant.jpg',
        clicked: false
    },
    {
        name:'Discovery',
        img:'images/250X180/discovery.jpg',
        clicked: false
    },
    {
        name:'Enterprise E',
        img:'images/250X180/enterprise_e1.jpg',
        clicked: false
    },
    {
        name:'Spocks Jellyfish',
        img:'images/250X180/jellyfish.jpg',
        clicked: false
    },
    {
        name:'Reliant',
        img:'images/250X180/reliant.jpg',
        clicked: false
    },
    {
        name:'Romulan Bird of Prey',
        img:'images/250X180/rombird.jpg',
        clicked: false
    },
    {
        name:'Voyager',
        img:'images/250X180/voyager.jpg',
        clicked: false
    },

]

export default class Board extends Component {
    
    constructor(props){
        super(props);

        this.state={
            user: {
                score: 0
            },
            ships: shuffleArray( initialShips )
        };
    }

    onShipClick = (index) =>{
        if( !this.state.ships[index].clicked ){
            this.setState({
                ships: shuffleArray( this.state.ships.map( (ship, current) =>{
                    return ( current === index ) ? { ...ship, clicked:true } : ship
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //Shuffle them
        } else {
            this.setState({
                ships: shuffleArray(this.state.ships.map( ship => { return { ...ship, clicked : false} })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
        }
    }
    render(){
        return (
            <div className="Board">
                <FadeIn
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every ship once. Once you click a ship the board will shuffle. <br></br> Try not to click the same ship more than once of its GAME OVER!</h4>
                    </FadeIn>
                    <FadeIn
                        in={true}
                        duration={500}
                        direction={'bottom'}
                        delay={'1.5s'}>
                        <ScoreDisplay
                            score={this.state.user.score} />
                    </FadeIn>
                    <ShipBox
                        ships={this.state.ships}
                        onShipClick={this.onShipClick} />
                </div>
        )
    }
}
