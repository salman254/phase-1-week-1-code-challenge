function studentGradesGenerator() {
    const marks = prompt("Enter student marks (0-100):"); // Prompt the user for input
    const marksInt = parseInt(marks); // Convert the string input to a number

    if (marksInt >= 0 && marksInt <= 100) { // To validate the input before proceeding to assign grades
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


