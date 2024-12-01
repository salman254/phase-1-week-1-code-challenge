function speedDetector() {
    const speed = prompt("Enter the speed of the car:"); // Prompt the user for the speed input
    const speedInt = parseInt(speed); // Convert the string input to a number

    if (speedInt < 70) {
        console.log("Ok"); // If the speed is less than 70, print "Ok"
    } else {
        const demeritPoints = Math.floor((speedInt - 70) / 5); // speedInt which is input - 70 speed limit then divide by 5 to get the number of 5km/hr intervals.

        if (demeritPoints > 12) {
            console.log("License suspended"); // If more than 12 points, suspend the license
        } else {
            console.log(`Points: ${demeritPoints}`); // Otherwise, print the number of demerit points
        }
    }
}


