import React, { useState } from 'react'
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Slider from '@mui/material/Slider';
import PickUp from './Pick-up';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const SliderComp = styled(Slider)`

@media (max-width: 992px) {


  	.MuiSlider-rail {
      height: 15px;
    }

    .MuiSlider-track	{
      height: 20px;
      
    }

    .MuiSlider-thumb  {
      height: 50px;
      width: 50px;
    }

    .MuiSlider-valueLabel {
      font-size: 4em;
    }

    .MuiSlider-mark {
      height: 10px;
      width: 10px;
    }

    .MuiSlider-markLabel {
      font-size: 1.8em;
    }
}
`;

const LocalGasStationIconMobile = styled(LocalGasStationIcon) `

  @media (max-width: 992px) {
    font-size: 3.6em;
  }

`

const ButtonMobile = styled(Button) `

@media (max-width: 992px) {
    font-size: 1.5em;
  }
`



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

    

    return (

        <div>
        {!isSelected && (
        <div className="container-three-icons">
        <div className="buttonContain-large">
        <IconButton  onClick={() => {return clickListener("Moto")}} color="primary" >
        <TwoWheelerIcon className="svg_icons"  sx={{ fontSize: 300 }} />
        </IconButton>
        </div>

        <div className="buttonContain">
        <IconButton  onClick={() => {return clickListener("Car")}} color="primary">
        <DirectionsCarIcon className="svg_icons"  sx={{ fontSize: 300 }} />
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

          <Typography
          variant="h3"
          component="div"
          gutterBottom
          sx={{m: 6}}
          >Whats your fuel efficiency?</ Typography>

          <Box width={400} className="slider">
            <SliderComp


            onChange={sliderChange}
            defaultValue={fuelEfficiency} 
            aria-label="Custom marks"
            valueLabelDisplay="auto"
            marks={marks}
            max= "65"
        />
            </Box>

            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <LocalGasStationIconMobile className="inline" sx={{color: "#ba000d", fontSize: 40 }}/>
            <Typography variant="h3" component="h5">{fuelEfficiency}</Typography>
            <Typography variant="h5" sx={{ml: 1}}>km/gallon</Typography>
            </Box>

          <Box sx={{ '& button': { mt: 3 } }} >
              <ButtonMobile onClick={backVehicle}>Back to vehicles</ButtonMobile>
          </Box>
          </div>
        )}
        </div>

        
    )
}

export default VehicleSelect;
