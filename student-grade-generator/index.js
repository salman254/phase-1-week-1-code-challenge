const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function studentGradesGenerator(marks) {
    const marksInt = parseInt(marks); // Convert the string input to an integer

    if (marksInt >= 0 && marksInt <= 100) { // Validate the input
        if (marksInt > 79) {
            console.log("Grade: A"); // Marks greater than 79
        } else if (marksInt >= 60) {
            console.log("Grade: B"); // Marks between 60 and 79
        } else if (marksInt >= 50) {
            console.log("Grade: C"); // Marks between 50 and 59
        } else if (marksInt >= 40) {
            console.log("Grade: D"); // Marks between 40 and 49
        } else {
            console.log("Grade: E"); // Marks less than 40
        }
    } else {
        console.log("Incorrect input. Please enter marks between 0 and 100."); // Handle invalid input
    }
}

// Prompt the user for input
rl.question('Enter student marks (0-100): ', (marksInput) => {
    studentGradesGenerator(marksInput); // To Call the function with user input
    rl.close(); // To Close the readline interface
});
