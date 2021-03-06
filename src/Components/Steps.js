import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VehicleSelect from './VehicleSelect';
import Distance from './Distance';
import EVehicle from './E-Vehicle'
import Products from './Products';
import Calculator from './Calculator';
import styled from '@emotion/styled';

const ButtonMobile = styled(Button) `
  @media (max-width: 992px) {
    font-size: 2.2em;
  }
`


const Steps = () => {

    const steps = ['Current Vehicle', 'How many km/day?', 'Type of E-Vehicle', 'Product', 'Results'];

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    //my States passed up from Chidren
    const [currentVehicle, setCurrentVehicle] = React.useState("");
    const [distance, setDistance] = React.useState("20");
    const [eVehicle, setEVehicle] = React.useState("");
    const [batteryCapacity, setBatteryCapacity] = React.useState("");
    const [product, setProduct] = React.useState("");
    const [fuelEfficiency, setFuelEfficiency] = React.useState();
  
    const isStepOptional = (step) => {
      return step === 7;
    };
  
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
    const handleNext = () => {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleSkip = () => {
      if (!isStepOptional(activeStep)) {
        // You probably want to guard against something like this,
        // it should never occur unless someone's actively trying to break something.
        throw new Error("You can't skip a step that isn't optional.");
      }
  
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
  
    return (

      <Box sx={{ width: '100%', mt:2 }}>

        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (

              
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
     
        {/* Enter inforamtion into stepper here */}
        {activeStep === 0 && (
            <div className="stepContainer">
            <VehicleSelect
            setCurrentVehicle={setCurrentVehicle}
            setFuelEfficiency={setFuelEfficiency}
            fuelEfficiency={fuelEfficiency}
            currentVehicle={currentVehicle}
             />
            </div>)
        }

        {activeStep === 1 && (
            <div className="stepContainer">
            <Distance
            setDistance={setDistance}
            distance={distance}

             />

            </div>)
        }

        {activeStep === 2 && (
            <div className="stepContainer">
            <EVehicle
            setEVehicle={setEVehicle}
            eVehicle={eVehicle}
            setActiveStep={setActiveStep}
             />
            </div>)
        }

        {activeStep === 3 && (
            <div className="stepContainer">
            <Products
            setBatteryCapacity = {childData => setBatteryCapacity(childData)}
            batteryCapacity = {batteryCapacity}
            eVehicle={eVehicle}
            setProduct= {childData => setProduct(childData)}
            setActiveStep={childData => setActiveStep(childData)}
             />
            </div>)
        }

        {activeStep === 4 && (
            <div className="stepContainer">
            <Calculator 
            currentVehicle = {currentVehicle}
            distance = {distance}
            eVehicle = {eVehicle}
            batteryCapacity = {batteryCapacity}
            product={product}
            fuelEfficiency={fuelEfficiency}
            currentVehicle={currentVehicle}
            />
            </div>)
        }


   

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <ButtonMobile
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </ButtonMobile>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <ButtonMobile color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </ButtonMobile>
              )}
  
              <ButtonMobile onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </ButtonMobile>
            </Box>
          </React.Fragment>
        )}
      </Box>
      

    );


}

export default Steps;
