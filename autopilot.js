var newCar =   {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  }

// console.log(getNewCar);

var cars = []

var addCar = function() {
  cars.push(newCar)
  console.log("Adding new car to fleet. Fleet size is now " + cars.length);
}

// addCar({City:'Montreal',pasengers:0,gas:50})


var pickUpPassenger = function() {
  for (var index = 0; index < cars.length; index ++){
    cars[index]['passengers'] +=1;
    cars[index]['gas'] -=10;
    console.log("Picked up passenger. Car now has " + cars[index]['passengers'] + " passengers.");
  }
}

var destination = function () {
    for (var index = 0; index < cars.length; index ++){
      if (cars[index]['city'] === 'Toronto') {
        return 'Mississauga';
        } else if (cars[index]['city'] === 'Mississauga') {
        return 'London';
        } else if (cars[index]['city'] === 'London') {
        return 'Toronto'
      }
    }
  }

var fillUpGas = function () {
  for (var index = 0; index < cars.length; index ++){
      var oldGas = (cars[index]['gas']);
      cars[index]['gas'] = 100;
      console.log("Filled up to " + cars[index]['gas'] + " on gas from " + oldGas);
    }
}

var gasDisplay = function() {
  for (var index = 0; index < cars.length; index ++){
    console.log(cars[index]['gas']);
  }
}

var distanceBetweenCities = 50;

var drive = function() {
  for (var index = 0; index < cars.length; index ++){
    if (cars[index]['gas'] < distanceBetweenCities) {
      return fillUpGas()
    }
    newDestination = destination(cars[index]['city']);
    cars[index]['gas'] -= distanceBetweenCities
    console.log('Drove to ' + newDestination + '. Remaining gas: ' + cars[index]['gas']);
  }
}

var dropOffPassengers = function() {
  for (var index = 0; index < cars.length; index ++){
    previousPassengers = (cars[index]['passengers']);
    cars[index]['passengers'] = 0;
    console.log('Dropped off ' + previousPassengers + ' passengers.');
  }
}

var act = function() {
  for (var index = 0; index < cars.length; index ++) {
    if (cars[index]['gas'] < 20) {
      return fillUpGas();
    } else if (cars[index]['passengers'] < 3) {
      return pickUpPassenger();
    } else if (cars[index]['gas'] < distanceBetweenCities) {
      return fillUpGas();
    }
    drive();
    dropOffPassengers();
  }
}

var commandFleet = function() {
  for (var index = 0; index < cars.length; index ++) {
      var action = act(cars[index]);
      console.log('Car ' + cars[index] + ': ' + action);
    }
}

var addOneCarPerDay = function(numOfDays) {
  for (var index = 0; index < numOfDays; index ++) {
      addCar();
}
      commandFleet();
}

// addCar()
// pickUpPassenger()
// pickUpPassenger()
// pickUpPassenger()
// console.log(destination());
// fillUpGas()
// gasDisplay()
// act()
// commandFleet()
addOneCarPerDay(10)
