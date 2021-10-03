import React from 'react';
import IconButton from '@mui/material/IconButton';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const TypographyMobile = styled(Typography) `

@media (max-width: 992px) {
  font-size: 2.5em;
}

`



const EVehicle = (props) => {

    const eVehicles = ["E-Scooter", "E-Bike", "E-Moto"]



    function clickListener(e) {
        props.setEVehicle(e);
        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    return (

        <div>

        <Box sx={{mt: 4}}>
        <TypographyMobile variant="h4">Type of HOP E-Vehicle?</TypographyMobile>
        </Box>

        <div className = "container-three-icons" >

        {eVehicles.map((name, index) => {
            return (
        <div className="buttonContain-large">
        <IconButton  onClick={() => {return clickListener(name)}} color="primary" >
        {name === "E-Scooter" &&  <ElectricScooterIcon color="primary" className="svg_icons-evehicles"  sx={{ fontSize: 200 }} />}
        {name === "E-Bike" && <ElectricBikeIcon color="primary" className="svg_icons-evehicles" sx={{ fontSize: 200 }}/>}
        {name === "E-Moto" && <ElectricMopedIcon color="primary" className="svg_icons-evehicles" sx={{ fontSize: 200 }}/>}
        </IconButton>
        </div>
            )
        })}
        </div>
        </div>
        

    );
}

export default EVehicle;