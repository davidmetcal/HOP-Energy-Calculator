import React, { useState } from 'react'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import IconButton from '@mui/material/IconButton';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Slider from '@mui/material/Slider';
import PickUp from './Pick-up';


const VehicleSelect = ({setCurrentVehicle, setFuelEfficiency, fuelEfficiency, currentVehicle}) => {

    const [isSelected, setIsSelected] = useState(false);
    
    function clickListener(e) {

    const defaultVal = marks.filter(function(item) {
        return item.label === e;
    });

    setFuelEfficiency(defaultVal[0].value);

    setIsSelected(true);
    setCurrentVehicle(e);

    }

    const backVehicle = () => {
        setIsSelected(false);
    }

    const sliderChange = (e) => {
        
        setFuelEfficiency(e.target.value);

    }

    const marks = [
      {
        value: 35,
        label: 'Car',
      },
      {
        value: 18,
        label: 'Pickup'
      },
      {
        value: 56,
        label: 'Moto'
      }

    ];



    function valuetext(value) {
      return `${value}`;
    }
    

    return (

        <div>
        {!isSelected && (
        <div className="container">
        <div className="buttonContain">
        <IconButton  onClick={() => {return clickListener("Moto")}} color="primary" >
        <TwoWheelerIcon  sx={{ fontSize: 85 }} />
        </IconButton>
        </div>

        <div className="buttonContain">
        <IconButton  onClick={() => {return clickListener("Car")}} color="primary">
        <DirectionsCarIcon  sx={{ fontSize: 85 }} />
        </IconButton>
        </div>

        <div className="buttonContain">
        <IconButton  onClick={() => {return clickListener("Pickup")}} color="primary">
        <PickUp />
        </IconButton>
        </div>
        </div>
        )}

        {isSelected && (
          <div>
          <h2>Whats your fuel efficiency?</h2>
          

          <Box width={400} className="slider">
            <Slider
            onChange={sliderChange}
            defaultValue={fuelEfficiency} 
            aria-label="Custom marks"
            valueLabelDisplay="auto"
            marks={marks}
            max= "65"
        />
            </Box>

            <div>
            <LocalGasStationIcon className="inline" sx={{color: "#ba000d", fontSize: 30 }}/><p className="inline"><span className='preUnits'>{fuelEfficiency}</span><span className='units'>km/gallon</span></p>
            </div>

          <Box sx={{ '& button': { m: 1 } }}>

            <div>
              <Button onClick={backVehicle}>Back to vehicles</Button>
            </div>

          </Box>
          </div>
        )}
        </div>

        
    )
}

export default VehicleSelect;
