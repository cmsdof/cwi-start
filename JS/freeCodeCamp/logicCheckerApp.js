let truthyOrFalsy =  true;
console.log(`truthyOrFalsy =  true | Boolean returns:${Boolean(truthyOrFalsy)}`);

// Different values that return true
truthyOrFalsy =  "freeCodeCamp";
console.log(`truthyOrFalsy =  "freeCodeCamp" | Boolean returns:${Boolean(truthyOrFalsy)}`);
truthyOrFalsy =  5;
console.log(`truthyOrFalsy =  5 | Boolean returns:${Boolean(truthyOrFalsy)}`);

// Different values that return false
truthyOrFalsy =  0;
console.log(`truthyOrFalsy =  0 | Boolean returns:${Boolean(truthyOrFalsy)}`);
truthyOrFalsy =  "";
console.log(`truthyOrFalsy =  "" | Boolean returns:${Boolean(truthyOrFalsy)}`);
truthyOrFalsy =  null;
console.log(`truthyOrFalsy =  null | Boolean returns:${Boolean(truthyOrFalsy)}`);
truthyOrFalsy =  undefined;
console.log(`truthyOrFalsy =  undefined | Boolean returns:${Boolean(truthyOrFalsy)}`);
truthyOrFalsy =  NaN;
console.log(`truthyOrFalsy =  NaN | Boolean returns:${Boolean(truthyOrFalsy)}`);

let hasDeveloperJob = true;

if (hasDeveloperJob){
  console.log("Timmy is employed as a developer.");
}

let isTimmyAGamer = false;

if (isTimmyAGamer) {
  console.log("Timmy loves to play World of Warcraft.")
}

let timmyAge = 18, jimmyAge = 15;

function canDrive (age){    
    if (age >= 16) {
    return "Driver is old enough to drive.";
    } else {
    return "Driver is not old enough to drive.";
    }
}

console.log(canDrive(timmyAge));
console.log(canDrive(jimmyAge));