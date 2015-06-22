var container = {
  x: "hi",
  y: "bye"
}

var otherContainer = {}
otherContainer.x = "hi";
otherContainer.y = "bye";
otherContainer.z = function() { console.log("You are the z's knees!") }
otherContainer.z()

var yetanotherContainer = {}
otherContainer["x"] = "hi";
otherContainer["y"] = "bye";

