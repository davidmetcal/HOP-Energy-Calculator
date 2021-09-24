import React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import { styled } from '@mui/material/styles';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import SavingsIcon from '@mui/icons-material/Savings';
// import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import PickUp2 from './Pick-up2';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ElectricScooterIcon from '@mui/icons-material/ElectricScooter';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import RedeemIcon from '@mui/icons-material/Redeem';



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


// 14.3 from https://www.carbonindependent.org/17.html

  // const Item = styled(Paper)(({ theme }) => ({
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  //   color: theme.palette.text.secondary,
  // }));
  

  // const StyledTableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: "#59D0D3",
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));
  
  // const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  //   // hide last border
  //   '&:last-child td, &:last-child th': {
  //     border: 0,
  //   },
  // }));




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
                {/* <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                <Grid item xs={4}>
                <div style={{ width: '100%'}}>
                  <Table style={{ width: '100%', marginLeft: 60 }}>
                  <TableHead>
                      <StyledTableCell></StyledTableCell>
                      <StyledTableCell align="right">Your entry</StyledTableCell>
                  </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.entry}{row.measurementUnits}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  </Table>      
                </div>
                </Grid>
                <Grid item xs={8}> */}
                    
                      {/* display outputs here */}

                {/* <img src="iconmonstr-car-14.png" alt="CO2 icon" />


                <h4>You use {carbonDioxideMonth} kg of C02 every month!</h4>
                
                <AttachMoneyIcon sx={{fontSize: 85, color: "black"}} />
                <h4>{fuelCostMonth} Q per month in fuel</h4>

                <ElectricalServicesIcon sx={{fontSize: 85, color: "black"}}/>

                <h4>{costEnergyMonth} Q in electricity per month</h4>
                
                <img src="iconmonstr-weather-91.png" alt="CO2 cloud icon" className="co2bike" />
                <ElectricBikeIcon sx={{fontSize: 85, color: "black"}} />
                <h4>{eVehicleC02} kg of C02 for E-bike</h4> */}


                {/* </Grid>
              </Grid>
            </Box> */}
            <Box sx={{ flexGrow: 1 }} >
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5} >
            <img src="iconmonstr-car-14.png" alt="CO2 icon" />
            <h4>You use {carbonDioxideMonth} kg of C02 every month!</h4>
            </Grid>
            <Grid item xs={2}>
            
            {currentVehicle === "Car" && (
            <div className="middleIcon">
            <KeyboardArrowLeftIcon />
            <DirectionsCarIcon sx={{fontSize: 50}} />
            <KeyboardArrowRightIcon />
            </div>
            )}

            {currentVehicle === "Moto" && (
              <div className="middleIcon">
            <KeyboardArrowLeftIcon />
            <TwoWheelerIcon sx={{fontSize: 50}} />
            <KeyboardArrowRightIcon />
            </div>
            )}

            {currentVehicle === "Pickup" && (
            <div className="middleIcon">
            <KeyboardArrowLeftIcon />
            <PickUp2 />
            <KeyboardArrowRightIcon />
            </div>
            )}
            </Grid>

            <Grid item xs={5}>
            <AttachMoneyIcon sx={{fontSize: 90, color: "black"}} />
                <h4>{fuelCostMonth} Q per month in fuel</h4>
            </Grid>


            <Grid item xs={5}>
            <img src="iconmonstr-weather-91.png" alt="CO2 cloud icon" className="co2bike" />
                <ElectricBikeIcon sx={{fontSize: 90, color: "black"}} />
                <h4>{eVehicleC02} kg of C02 for E-bike</h4>
            </Grid>
           
            <Grid item xs={2}>
            
              {eVehicle === "E-Scooter" && (
                <div className="middleIcon">
                <KeyboardArrowLeftIcon />
                <ElectricScooterIcon sx={{fontSize: 50}}/>
                <KeyboardArrowRightIcon />
                </div>
              )}

              {eVehicle === "E-Bike" && (
                <div className="middleIcon">
                <KeyboardArrowLeftIcon />
                <ElectricBikeIcon sx={{fontSize: 50}}/>
                <KeyboardArrowRightIcon />
                </div>
              )}

              {eVehicle === "E-Moto" && (
                <div className="middleIcon">
                <KeyboardArrowLeftIcon />
                <ElectricMopedIcon sx={{fontSize: 50}}/>
                <KeyboardArrowRightIcon />
                </div>
              )}



            </Grid>
            <Grid item xs={5}>
            <ElectricalServicesIcon sx={{fontSize: 90, color: "black"}}/>

            <h4>{costEnergyMonth} Q in electricity per month</h4>
            </Grid>

            <Grid item xs={5}>
            <img src="iconmonstr-tree-2-240.png" alt="CO2 cloud icon" />
                <h4>{treeSaving} trees a year</h4>
            </Grid>
           
            <Grid item xs={2}>
            <div className="middleIcon">
                <KeyboardArrowLeftIcon />
                <RedeemIcon sx={{fontSize: 50}}/>
                <KeyboardArrowRightIcon />
                </div>
            </Grid>
            <Grid item xs={5}>
            <SavingsIcon sx={{fontSize: 90, color: "black"}}/>

            <h4>{moneySaving} Q a year</h4>
            </Grid>

          </Grid>

          </Box>

            </div>

    )
}

export default Calculator;
