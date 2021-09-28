import React from 'react';
import EBikes from './E-Bikes';
import EScooter from './E-Scooter';
import EMotos from './E-Motos';

const Products = (props) => {



    return (
        <div>

            {props.eVehicle === "E-Bike" && <EBikes
            setBatteryCapacity = {props.setBatteryCapacity}
            batteryCapacity = {props.batteryCapacity}
            setProduct = {props.setProduct}
            setActiveStep={props.setActiveStep}


            />}
            {props.eVehicle === "E-Scooter" && <EScooter
            setBatteryCapacity = {props.setBatteryCapacity}
            batteryCapacity = {props.batteryCapacity}
            setProduct = {props.setProduct}
            setActiveStep= {props.setActiveStep}
             /> }
            {props.eVehicle === "E-Moto" && <EMotos
            setBatteryCapacity = {props.setBatteryCapacity}
            batteryCapacity = {props.batteryCapacity}
            setProduct = {props.setProduct}
            setActiveStep= {props.setActiveStep}
             />}
        </div>
    )
}

export default Products
