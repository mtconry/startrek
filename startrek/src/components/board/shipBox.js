import React from 'react';

import Ship from './Ship';

const ShipBox = (props) => {
    return(
        <div className="Ship-box">
            {props.Ships.map( (Ship, index) => <Ship Ship={Ship} index={index} onShipClick={props.onShipClick} key={Ship.name} />)}
        </div>
    )
};

export default ShipBox;