import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import SavingsIcon from '@mui/icons-material/Savings';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import Pickup from './Pickup';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import RedeemIcon from '@mui/icons-material/Redeem';
import CarCO2 from './CarCO2';
import Typography from '@mui/material/Typography';
import Co2 from './co2';
import Tree from './Tree';
import Enviroment from './Enviroment';



const Calculator = (props) => {

  const {currentVehicle, fuelEfficiency, distance, eVehicle, product, batteryCapacity} = props;

const fuelCost = 28.79
// gallon
const kWhCost = 1.527
//Q per kWh

//Calcs

//fuel
const fuelVolumeDay = distance / fuelEfficiency;

const fuelCostDay = fuelVolumeDay * fuelCost;

const fuelCostWeek = fuelCostDay * 5;

const fuelCostMonth = (Math.round((fuelCostWeek * 4.35) * 100)) /100;


//C02 vehicle
const carbonDioxideDay = fuelVolumeDay * 14.3;

const carbonDioxideWeek = carbonDioxideDay * 5;

const carbonDioxideMonth = (Math.round((carbonDioxideWeek * 4.35)* 100)) / 100;

//Battery energy based on 100% charging efficiency and bike doing 60km per charge
const kWCapacityOfBattert = batteryCapacity / 1000;
const efficencyPerKm = kWCapacityOfBattert / 60;

//energy details
const energyRequiredForDistanceDay = efficencyPerKm * distance;

//C02 e-vehicle


const energyRequiredForDistanceMonth = (energyRequiredForDistanceDay*5) * 4.35;
//Energy cost per month
const costEnergyMonth = (Math.round((energyRequiredForDistanceMonth * kWhCost) * 100) /100 );
//C02 Energy per month
const eVehicleC02 = (Math.round((energyRequiredForDistanceMonth * 0.391) * 100) ) / 100;

const treeSaving = Math.round(((carbonDioxideMonth * 12) - (eVehicleC02 * 12)) / 21.77);
const moneySaving =  Math.round((fuelCostMonth * 12) - (costEnergyMonth * 12));




    function createData(name, entry, measurementUnits) {
        return { name, entry, measurementUnits};
      }

      const rows = [
        createData('Your current vehicle', currentVehicle, ""),
        createData('Your fuel efficiency', fuelEfficiency, " km/gallon"),
        createData('Distance in km/day', distance, " km"),
        createData('E-Vehicle type', eVehicle, ""),
        createData('Product', product, ""),
        createData('Battery capcity', batteryCapacity, " W"),
      ];

    return (
            <div>

            <Box>
            
            <Grid display="flex" justifyContent="space-evenly" alignItems="center">

            <Grid item>
            <CarCO2 sx={{fontSize: 120, color: 'black'}} />
            <Typography variant="h6" sx={{mt:1}}> {carbonDioxideMonth} kg of C02 every month!</Typography>
            </Grid>

            <Grid item >
            {currentVehicle === "Car" && (
              <Box display="flex"  alignItems="center">
            <KeyboardArrowLeftIcon />
            <DirectionsCarIcon sx={{fontSize: 60}} />
            <KeyboardArrowRightIcon />
            </Box>
            )}

            {currentVehicle === "Moto" && (
              <Box display="flex"  alignItems="center">
            <KeyboardArrowLeftIcon />
            <TwoWheelerIcon sx={{fontSize: 60}} />
            <KeyboardArrowRightIcon />
            </Box>
            )}

            {currentVehicle === "Pickup" && (

            <Box display="flex"  alignItems="center">
            <KeyboardArrowLeftIcon />

            <Pickup sx={{fontSize: 60}} />

            <KeyboardArrowRightIcon />
            </Box>


            )}
            
            </Grid>

            <Grid item>
            <MonetizationOnIcon sx={{fontSize: 110, color: "black", mt:1}} />

            <Typography variant="h6" sx={{mt:1}}>{fuelCostMonth} Q per month in fuel</Typography>


            </Grid>

            </Grid>

            <Grid display='flex' justifyContent='space-evenly' alignItems='center' sx={{mt:5}}>

            <Grid item>
            <Grid display='flex' justifyContent='center' alignItems='center'>
            <Co2 sx={{fontSize: 70, color: 'black'}} />
            <ElectricBikeIcon sx={{fontSize: 120, color: "black"}} />
            </Grid>
            <Typography variant="h6" sx={{mt:1}}> {eVehicleC02} kg of C02 every month!</Typography>
            </Grid>



            <Grid item sx={{ml: 5}}>

            {eVehicle === "E-Scooter" && (
              <Box display="flex"  alignItems="center">
                <KeyboardArrowLeftIcon />
                <ElectricScooterIcon sx={{fontSize: 60}}/>
                <KeyboardArrowRightIcon />
                </Box>
              )}

              {eVehicle === "E-Bike" && (
                <Box display="flex"  alignItems="center">
                <KeyboardArrowLeftIcon />
                <ElectricBikeIcon sx={{fontSize: 60}}/>
                <KeyboardArrowRightIcon />
                </Box>
              )}

              {eVehicle === "E-Moto" && (
                <Box display="flex"  alignItems="center">
                <KeyboardArrowLeftIcon />
                <ElectricMopedIcon sx={{fontSize: 60}}/>
                <KeyboardArrowRightIcon />
                </Box>
              )}


            </Grid>

            <Grid item>
            <ElectricalServicesIcon sx={{fontSize: 120, color: "black"}}/>
            <Typography variant="h6" >{costEnergyMonth} Q in electricity per month</Typography>

            </Grid>

            </Grid>

            <Grid display='flex' justifyContent='space-evenly' alignItems='center' sx={{mt: 5}}>

            <Grid item>
            <Tree sx={{color: 'black', fontSize:120}} />
            <Typography variant="h6">{treeSaving} trees a year</Typography>
            </Grid>

            <Grid item>
            <Box display='flex' alignItems='center'>
            <KeyboardArrowLeftIcon />
            <Enviroment sx={{fontSize: 60}} />
            <KeyboardArrowRightIcon />
            </Box>

            </Grid>

            <Grid item display='flex' flexDirection='column' alignItems='center'>

            <SavingsIcon sx={{fontSize: 120, color: "black"}}/>
            <Typography variant='h6'> {moneySaving} Q a year</Typography>

                
            </Grid>

            </Grid>

            </Box>


            </div>

    )
}

export default Calculator;
