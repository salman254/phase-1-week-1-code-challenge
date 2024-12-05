const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    // Gross salary
    const grossSalary = basicSalary + benefits; // Formula for Gross Salary calculation

    // PAYE calculation
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.10; // 10% tax
    } else if (grossSalary <= 32333) {
        tax = grossSalary * 0.25; // 25% tax
    } else if (grossSalary <= 500000) {
        tax = grossSalary * 0.30; // 30% tax
    } else if (grossSalary <= 800000) {
        tax = grossSalary * 0.325; // 32.5% tax
    } else {
        tax = grossSalary * 0.35; // 35% tax
    }

    // NHIF deduction calculation
    let nhifDeduction = 0;
    if (grossSalary <= 5999) {
        nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
        nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
        nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
        nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
        nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
        nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
        nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
        nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
        nhifDeduction = 950;
    } else if (grossSalary <= 43999) {
        nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
        nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
        nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
        nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
        nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
        nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
        nhifDeduction = 1600;
    } else {
        nhifDeduction = 1700;
    }

    // NSSF deduction calculation
    let nssfDeduction = grossSalary * 0.06;

    // Housing levy
    const housingLevy = grossSalary * 0.015; // (1.5% of gross salary) = House levy

    // Net salary calculation
    const totalDeductions = tax + nhifDeduction + nssfDeduction + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    // Output the results
    console.log(`\nGross Salary: ${grossSalary}`);
    console.log(`Tax Deduction: ${tax}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Housing Levy Deduction: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
}

// To get the input from the user
rl.question('Enter basic salary: ', (basicSalaryInput) => {
    const basicSalary = parseFloat(basicSalaryInput);

    rl.question('Enter benefits: ', (benefitsInput) => {
        const benefits = parseFloat(benefitsInput);

        // To Calculate net salary
        calculateNetSalary(basicSalary, benefits);

        // function to Close the readline interface
        rl.close();
    });
});
