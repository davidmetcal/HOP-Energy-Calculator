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

const ElectricScooterIconMobile = styled(ElectricScooterIcon) `
@media (max-width: 992px) {
  font-size: 13em;
}
`

const ElectricBikeIconMobile = styled(ElectricBikeIcon) `
@media (max-width: 992px) {
  font-size: 13em;
}
`

const ElectricMopedIconMobile = styled(ElectricMopedIcon) `
@media (max-width: 992px) {
  font-size: 13em;
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
        {name === "E-Scooter" &&  <ElectricScooterIconMobile color="primary" className="svg_icons-evehicles"  sx={{ fontSize: 200 }} />}
        {name === "E-Bike" && <ElectricBikeIconMobile color="primary" className="svg_icons-evehicles" sx={{ fontSize: 200 }}/>}
        {name === "E-Moto" && <ElectricMopedIconMobile color="primary" className="svg_icons-evehicles" sx={{ fontSize: 200 }}/>}
        </IconButton>
        </div>
            )
        })}
        </div>
        </div>
        

    );
}

export default EVehicle;