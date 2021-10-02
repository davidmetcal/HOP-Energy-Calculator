import React, { useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FilterHdrOutlinedIcon from '@mui/icons-material/FilterHdrOutlined';
import Typography from '@mui/material/Typography';


const EBikes = (props) => {

  const TypographyMobile = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down('lg')]: {
      fontSize: "2.5em",
    },
  }))

  const ButtonMobile = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('lg')]: {
    fontSize: 60,
    }
  }))

  const ButtonMobileBack = styled(Button)(({theme}) => ({
    [theme.breakpoints.down('lg')]: {
    fontSize: 30,
    }
  }))

  const FilterHdrOutlinedIconMobile = styled(FilterHdrOutlinedIcon)(({theme}) => ({
    [theme.breakpoints.down('lg')]: {
      fontSize: 80,
    }
  }))


  const [eCrossSelected, setECrossSelected] = useState(false);
  const [ePowerSelected, setEPowerSelected] = useState(false);
  const [showInitialForm, setShowInitialForm] = useState(true);

    const bikeImage = [{name: "E-Cross", img: "E-Cross-250-Product-Picture.jpeg", battery: {"250W": "36V 10AH", "500W": "48V 15.6V"}},
    {name: "E-City", img: "E-City-Product-Pic.jpg", battery:"36V 10AH"}, {name: "E-Fit", img:"E-Fit-Black-Product.jpeg", battery: "48V 10AH"} , {name: "E-Classic", img:"E-Class.jpg", battery:"48V 15.6AH"},
    {name:"E-Power", img:"E-Power-Product.jpeg", battery: {"500W": "48V 10AH", "750W" : "48V 14AH" }}, {name:"EM-Drive", img:"EM-Drive-product-pic.jpeg", battery: "48V 10AH"}]

    const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 120,



}));

  const clickListener = (e) => {
    const {name, battery} = e

    props.setProduct(name);

    if(name === "E-Cross") {
      setECrossSelected(true);
      setShowInitialForm(false);

    }

    if(name === "E-Power") {
      setEPowerSelected(true);
      setShowInitialForm(false);
    }

    if((name !== "E-Cross") && (name !== "E-Power")) {

      const batteryArray = battery.match(/\d+([\/.]\d+)?/g);
      props.setBatteryCapacity(batteryArray[0] * batteryArray[1]);
      props.setActiveStep((prevActiveStep) => prevActiveStep + 1);

    }

  }

  const optionSelectorClick = (e) => {
    bikeImage.forEach(element => {
      if(eCrossSelected && (element.name === "E-Cross")) {
          const batDeets = element.battery[e]
          const batCap = batDeets.match(/\d+([\/.]\d+)?/g);
          props.setBatteryCapacity(batCap[0] * batCap[1]);
          props.setActiveStep((prevActiveStep) => prevActiveStep + 1);

      } else if(ePowerSelected && (element.name === "E-Power")) {
          const batDeets = element.battery[e]
          const batCap = batDeets.match(/\d+([\/.]\d+)?/g);
          props.setBatteryCapacity(batCap[0] * batCap[1]);
          props.setActiveStep((prevActiveStep) => prevActiveStep + 1);

      }

    })
  
  }

  const backEBike = () => {

    setShowInitialForm(true);
    setECrossSelected(false);
    setEPowerSelected(false);
  }

    return (
   
        <div className="productAlign">

        {showInitialForm && (

          <TypographyMobile variant="h4" sx={{mt:3}}>Select a HOP E-Bike</TypographyMobile>

        )}



        {showInitialForm && (
          <Box   sx={{ display: 'flex', mt: 5}}>  
            <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>

            {bikeImage.map((bike, index) => {
            return  (
              <Grid className="productCard" item xs={2} sm={2} md={6} lg={4} key={index}>
              <Item
              onClick={() => clickListener(bike)}>
              <img src={bike.img} alt="bike"  className="productImage"  height="100%"/>
              </Item>
              <h3 className="productLabel">{bike.name}</h3>
              </Grid>
            )
            })}

            </Grid>
          </Box>
        )}

        {eCrossSelected && (
          <div>

          
          <TypographyMobile variant="h4" sx={{mt:2, mb:2}}>Select E-Cross Motor Power</TypographyMobile>

          <Box sx={{ '& button': { m: 1 } }}>

            <div className="mobile-button-container">
              <ButtonMobile variant="outlined" size="large"
              onClick={() => optionSelectorClick("250W")}>
              <FilterHdrOutlinedIconMobile size="large"/>  250W 
              </ButtonMobile>
              <ButtonMobile variant="outlined" size="large"
              onClick={() => optionSelectorClick("500W")}>
              <FilterHdrOutlinedIconMobile size="large"/>  500W
              </ButtonMobile>
            </div>

            <div>
              <Button onClick={backEBike}>Back to E-Bike</Button>
            </div>

          </Box>
          </div>
        )}

        {ePowerSelected && (
          <div>

          <TypographyMobile variant="h4" sx={{mt:2, mb:2}}>Select E-Power Motor Power</TypographyMobile>

          <Box sx={{ '& button': { m: 1 } }}>

            <div className="mobile-button-container">
              <ButtonMobile
              onClick={() => optionSelectorClick("500W")}
               variant="outlined" size="large">
              <FilterHdrOutlinedIconMobile size="small"/>  500W 
              </ButtonMobile>
              <ButtonMobile
              onClick={() => optionSelectorClick("750W")}
               variant="outlined" size="large">
              <FilterHdrOutlinedIconMobile size="large"/>  750W
              </ButtonMobile>
            </div>

            <div>
              <ButtonMobileBack className="back-to-bike"
              onClick={backEBike}>Back to E-Bike</ButtonMobileBack>
            </div>

          </Box>
          </div>
        )}
         
        </div>

    )
}

export default EBikes;

