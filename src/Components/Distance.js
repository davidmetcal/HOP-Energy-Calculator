import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const SliderComp = styled(Slider)`

@media (max-width: 992px) {

    margin-top: 50px;


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

const TypographyMobile = styled(Typography) `


@media (max-width: 992px) {


    font-size: 3.2em


}

`;

const BoxMobile = styled(Box) `
    margin-top: 1em;
    width: 45%;

@media (max-width: 992px) {
    margin-top: 1em;
    width: 70%;
    height: 12em;

}
`;

const TypographyMobileUnits = styled(Typography) `
  @media (max-width: 992px) {
    font-size: 2em;
}

`

const Distance = (props) => {


function changeListener(e) {
    const newValue = e.target.value;

    props.setDistance(newValue);
    

}

    return (
            <div>

            <Box sx={{mt: 4}}>
            <TypographyMobile variant="h4">Distance per day?</TypographyMobile>
            </Box>

            <BoxMobile className="slider">


            <SliderComp
            
            onChange={changeListener}
             defaultValue={props.distance}
             value={props.distance} aria-label="Default" valueLabelDisplay="auto"/>
            <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center'}}>
            <TypographyMobile variant="h3" component="h4" mt={2} >{props.distance} </TypographyMobile>
            <TypographyMobileUnits variant="h5" mt={2} ml={1} >km/day</TypographyMobileUnits>
            </Box>
            </BoxMobile>
            </div>
    );
}

export default Distance;
