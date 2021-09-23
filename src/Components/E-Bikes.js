import React, { useState} from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EarbudsBatteryIcon from '@mui/icons-material/EarbudsBattery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FilterHdrOutlinedIcon from '@mui/icons-material/FilterHdrOutlined';

const EBikes = (props) => {

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

      const batteryArray = battery.match(/\d+([\/.]\d+)?/g)
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
          <Box   sx={{ flexGrow: 1}}>  
            <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

            {bikeImage.map((bike, index) => {
            return  (
              <Grid className="productCard" item xs={2} sm={2} md={3} key={index}>
              <Item
              onClick={() => clickListener(bike)}>
              <img src={bike.img}  className="productImage"/>
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
          <h2>Select E-Cross Motor Power </h2>

          <Box sx={{ '& button': { m: 1 } }}>

            <div>
              <Button variant="outlined" size="large"
              onClick={() => optionSelectorClick("250W")}>
              <FilterHdrOutlinedIcon size="small"/>  250W 
              </Button>
              <Button variant="outlined" size="large"
              onClick={() => optionSelectorClick("500W")}>
              <FilterHdrOutlinedIcon size="large"/>  500W
              </Button>
            </div>

            <div>
              <Button onClick={backEBike}>Back to E-Bike</Button>
            </div>

          </Box>
          </div>
        )}

        {ePowerSelected && (
          <div>
          <h2>Select E-Power Motor Power </h2>

          <Box sx={{ '& button': { m: 1 } }}>

            <div>
              <Button
              onClick={() => optionSelectorClick("500W")}
               variant="outlined" size="large">
              <FilterHdrOutlinedIcon size="small"/>  500W 
              </Button>
              <Button
              onClick={() => optionSelectorClick("750W")}
               variant="outlined" size="large">
              <FilterHdrOutlinedIcon size="large"/>  750W
              </Button>
            </div>

            <div>
              <Button
              onClick={backEBike}>Back to E-Bike</Button>
            </div>

          </Box>
          </div>
        )}
         
        </div>

    )
}

export default EBikes;

