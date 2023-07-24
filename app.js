//*******************Part One************************** */

//create a class for "vehicle". Each vehicle should have the following properties:
    //make
    //model
    //year
//each vehicle should have access to a method called "honk", which returns the string "Beep"
//let myFirstVehicle = new Vehicle ("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); //"Beep"
class Vehicle {
    constructor (make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }

//each vehicle shoudl have a method called "toString", which returns the string containing "make, model, and year"
//let myFirstVehicle = new Vehicle ("Honda", "Monster Truck", 1999);
//myFirstVehicle.tostring (); // "The vehicle is a ${Honda}, ${Monster Truck}  from ${1999}."
    toString(){
        return "The vehicle is a ${this.make}, ${this.model} from ${this.year}."
    }
}

// *********************Part Two****************************
//create a class for a car.  The "Car" class should inherit from "Vehicle" and each car should have a property called "numWheels" which has a value of 4

//let myFirstCar = new Car ("Toyota" "Corolla", 2005);
// myFirstCar.toString();  //"The vehicle is a Toyota Corolla from 2005."
//myFirstCar.honk();       //"Beep"
//myFirstCar.numWheels;    // 4

class Car extends Vehicle{
    constructor (make, model, year){
        super (make, model, year);
        this.numWheels = 4;
    }
}

//****************Part Three************ */
//create a clas for a Motorcycle.  This class should inherit from Vehicle and each motorcycle should have a property called numWheels which has a value of 2.  It should also have a revEngine method which returns "Vroom"

// let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// myFirstMotorcycle.toString();
    //"The vehicle is a Honda Nighthawk from 2000"
//myFirstMotorcyle.honk();          //"Beep"
//myFirstMotorcycle.revEngine();    //"Vroom"
//myFirstMotorcycle.numWheels;      //2

class Motorcycle extends Vehicle {
    constructor (make, model, year){
        super (make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "Vroom";
    }
}


// ****************Part Four*********
//create a class for a garage.  It should have a property called "vehicles" which will store an array of [vehicles] and a property called "capacity" which is a number indicating how many vehicles will fit in the garage.  When you create a garage, "vehicles" will always be empty; you only need to provide the "capacity"

//A garage should also have an "add" method, which attempts to add a vehicle to the array of vehicles.  However, if you try to add somethig which is not a vehicle, the garage should return the message "Only vehicles are allowed in here!" Also, if the garage is at capacity, it should say "Sorry, we're full"

class Garage {
    constrictor (capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }
    add (newVehicle){
        if (!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here"
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry we're full"
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added";
    }
}