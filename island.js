var passengers;

var prof = { name: "Professor", profession: "Scientist"}
var mary = { name: "Maryanne", profession: "Ingenue"}
var ginger = { name: "Ginger", profession: "The Movie Star"}
var gill = { name: "Gilligan", profession: "The First Mate"}
var skipper = { name: "The Skipper", profession: "Captain"}
var howell = { name: "Thurston Howell III", profession: "Captain of Industry"}
var lady = { name: "Lovey Howell", profession: "Lady who Does Lunch"}

passengers = [prof, mary, ginger, gill, skipper, howell, lady]

function loseTheMinnow(passengers) {
  passengers.forEach(function(passenger) { // The way to do Enumerables in JS
    passenger.status = "lost"
  });
}

loseTheMinnow(passengers)

  passengers.forEach(function(passenger) { // The way to do Enumerables in JS
    console.log(passenger);
  });
