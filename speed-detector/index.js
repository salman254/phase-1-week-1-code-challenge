const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector(speed) {
    const speedInt = parseInt(speed); // Convert the string input to an integer

    if (isNaN(speedInt) || speedInt < 0) {
        console.log("Invalid input. Please enter a valid positive number for speed.");
        return;
    }

    if (speedInt < 70) {
        console.log("Ok"); // If the speed is less than 70, print "Ok"
    } else {
        const demeritPoints = Math.floor((speedInt - 70) / 5); // Calculate demerit points

        if (demeritPoints > 12) {
            console.log("License suspended"); // If more than 12 points, suspend the license
        } else {
            console.log(`Points: ${demeritPoints}`); // Otherwise, print the number of demerit points
        }
    }
}

// Prompt the user for input
rl.question('Enter the speed of the car: ', (speedInput) => {
    speedDetector(speedInput); // Call the function with user input
    rl.close(); // Close the readline interface
});
