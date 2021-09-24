import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const EMotos = (props) => {

    const motoImages = [{name: "Urbike", img:"Urbike-Rojo-Product.jpeg", battery: "48V 12AH"},{name: "E-Talia", img:"E-Talia-Product-Front.jpeg", battery: "60V 20AH"},
{name: "E-Sport", img:"E-Sport-Product.jpeg", battery: "72V 20AH"}]

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 120
      }));

      const clickListener = (bike) => {
        const {name} = bike;
        props.setProduct(name);
        motoImages.forEach(element => {
          if(name === element.name) {
            const batDeets = element.battery;
            const batCap = batDeets.match(/\d+([\/.]\d+)?/g);
            props.setBatteryCapacity(batCap[0] * batCap[1]);
          }
        })
        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
      
          return (
            
              <div className="productAlign">
      
                <Box   sx={{ flexGrow: 1}}>  
                  <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      
                  {motoImages.map((bike, index) => {
                  return  (
                    <Grid className="productCard" item xs={4} sm={4} md={4} key={index}>
                    <Item
                    onClick={() => clickListener(bike)}
                    >
                    <img src={bike.img} alt="bike" className="productImage"/>
                    </Item>
                    <h3 className="productLabel">{bike.name}</h3>
                    </Grid>
                  )
                  })}
                  
                  </Grid>
                </Box>
                  
              </div>
      
          );
      }


export default EMotos;
