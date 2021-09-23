import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const EScooter = (props) => {

    const scooterImage = [{name: "Xiaomi M365", img:"Xiaomi-M365-Product.jpeg", battery: "36V 7.8AH"}, {name: "Xiaomi Pro", img:"mi-scooter-pro-min.jpg", battery: "37V 12.8Ah"},
{name: "Urbike", img:"Urbike-Rojo-Product.jpeg", battery: "48V 12AH"} ]

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 120,
      }));
      
      function scooterClicked(scooter) {
        const {name} = scooter;
        props.setProduct(name);
        scooterImage.forEach(element => {
          if(name === element.name) {
            const batDeets = element.battery
            const batCap = batDeets.match(/\d+([\/.]\d+)?/g);
            props.setBatteryCapacity(batCap[0] * batCap[1])

          }
        })

        props.setActiveStep((prevActiveStep) => prevActiveStep + 1);

      }
      
          return (
            
              <div className="productAlign">
      
                <Box   sx={{ flexGrow: 1}}>  
                  <Grid container spacing={{ xs: 12, md: 12 }} columns={{ xs: 12, sm: 12, md: 12 }}>
      
                  {scooterImage.map((bike, index) => {

                  return  (
                    <Grid  className="productCard" item xs={12} sm={6} md={4} key={index}>
                    <Item
                    onClick={() => scooterClicked(bike)}>
                    <img src={bike.img} className="productImage"/>
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
      
      export default EScooter;
      