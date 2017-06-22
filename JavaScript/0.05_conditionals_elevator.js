

var elevatorUp = true;
var elevatorDown= true;
var elevatorBroken = true;
var elevatorIsStuckWhileWeAreOnIt = false;
var elevatorNumber = 13;

if(elevatorUp === true){
	console.log("Going up!");
} else {
	console.log("Going down!")
}

if(elevatorBroken === true){
	console.log("Uh Oh!")
} else {
	console.log("Going up!")
}

if(elevatorIsStuckWhileWeAreOnIt){
	console.log("Oh no! We are stuck!");
}


if(elevatorBroken || elevatorDown){
	console.log("Oh no!!!")
}

if(elevatorNumber === 13 && elevatorIsStuckWhileWeAreOnIt){
	console.log("Oh Crap!!!")
} else {
	console.log("We are fine!")
}