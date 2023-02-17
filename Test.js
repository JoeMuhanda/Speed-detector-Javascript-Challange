
  
const  readline = require ('readline')
const input =readline.createInterface(
{
};

  
  #alterantively

  // Set the speed limit (in miles per hour)
const speedLimit = 60;

// Define a function to check the speed
function checkSpeed(speed) {
  if (speed <= speedLimit) {
    console.log("You are driving within the speed limit.");
  } else {
    const overSpeed = speed - speedLimit;
    const demeritPoints = Math.floor(overSpeed / 5);
    console.log(`You are driving over the speed limit by ${overSpeed} mph.`);
    console.log(`You have received ${demeritPoints} demerit points.`);
  }
}

// Test the function with some sample speeds
checkSpeed(50); // Output: "You are driving within the speed limit."
checkSpeed(65); // Output: "You are driving over the speed limit by 5 mph." and "You have received 1 demerit points."
