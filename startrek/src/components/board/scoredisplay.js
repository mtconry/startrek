import React from 'react';
import Ship from './ship';

const ShipBox = (props) => {
    return(
        <div className='ship-box'>
            {props.ships.map( (ship, index) => <Ship ship={ship} index={index} onShipClick={props.onShipClick} key={ship.name} />)}
        </div>
    )
};

export default ShipBox