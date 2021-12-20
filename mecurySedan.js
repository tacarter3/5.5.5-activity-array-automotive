//this includes the vehicle class as a module

import Vehicle from "./vehicle.js"

const VehicleModule = require("./vehicleBaseClass.js")


class Model extends Vehicle {
    constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage)
    this.maximumPassengers = 6;
    this.passengers = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 200;
    this.fuel = 100;
    this.scheduleService = false;
    }

    loadPassenger(num){
        if (this.passenger < this.maximumPassengers) {
            if((num + this.passenger) <= this.maximumPassengers)
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not enough room for all passengers.");
            
        } else { 
            console.log(this.model + " " + this.make + " is full.");
        }
    }


    }
    start() {
        if(this.fuel > 0) {
        console.log("Engine has started.")
        
        } else {
        console.log("Out of fuel.");
        }
    }
    
    scheduleService(mileage) {
        if(this.mileage > 30000) {
            this.scheduleService == true;
            return this.scheduleService
        
        }
        
        
    }


    

    
     


//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


