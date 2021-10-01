import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Distance = (props) => {


function changeListener(e) {
    const newValue = e.target.value;

    props.setDistance(newValue);
    

}

    return (

            <Box className="slider">

            <Slider
            
            onChange={changeListener}
             defaultValue={props.distance}
             value={props.distance} aria-label="Default" valueLabelDisplay="auto"/>

            <h2>{props.distance} km/day</h2>
            </Box>
    );
}

export default Distance;
