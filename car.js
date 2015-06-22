// "Constructor Function"

function Car(initialSpeed) {
  this.speed = initialSpeed || 10;
  /* I could put more methods here, but won't...why?
  this.accelerate */
}


Car.prototype = {
  accelerate: function(howMuch) {
    this.speed += (howMuch || 10)
  },

  decelerate: function(howMuch) {
    this.speed -= (howMuch || 10)
  },

  speedReport: function() {
    return "The car is cruising at " + this.speed + " mph";
  }
}

Car.prototype = {
  accelerate: function(howMuch) {
    this.speed -= (howMuch || 10)
  },

  decelerate: function(howMuch) {
    this.speed += (howMuch || 10)
  },

  speedReport: function() {
    return "The car is levitating at " + this.speed + " mph";
  }
}

Car.prototype = { // for Marco
  sizzle: function() {},
  poach: "yummy",
  fried: "greasy"
}

// Adds a method to the prototype so that future instances will be able to
// execute the function

Car.prototype.celebrateOurNationsHeroes = function(){
  console.log("Cue 'Proud to be an American' by Lee Greenwood");
}

function Indy500(cars) {
  this.competitors = cars;
}

Indy500.prototype.startRace = function() {
  this.competitors.forEach(function(car) {
    console.log("Gentlemen start your engines");
    car.accelerate(180);
  });
}

Indy500.prototype.status = function() {
  this.competitors.forEach(function(car) {
    console.log(car.speedReport());
  });
};

var memorialDayRace = new Indy500([
  new Car(10),
  new Car(20)
]);

memorialDayRace.startRace();
memorialDayRace.status();
