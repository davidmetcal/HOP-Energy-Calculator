import React from 'react';
import IconButton from '@mui/material/IconButton';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';


const EVehicle = (props) => {

    const eVehicles = ["E-Scooter", "E-Bike", "E-Moto"]



    function clickListener(e) {
        props.setEVehicle(e);
        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    return (

        <div className = "buttonContain" >
        {eVehicles.map((name, index) => {
            return (
        <div >
        <IconButton  onClick={() => {return clickListener(name)}} color="primary" >
        {name === "E-Scooter" &&  <ElectricScooterIcon color="primary"  sx={{ fontSize: 250 }} />}
        {name === "E-Bike" && <ElectricBikeIcon color="primary" sx={{ fontSize: 250 }}/>}
        {name === "E-Moto" && <ElectricMopedIcon color="primary" sx={{ fontSize: 250 }}/>}
        </IconButton>
        </div>
            )
        })}
        </div>
        

    );
}

export default EVehicle;