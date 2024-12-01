function netSalaryCalculator() {
    const basicSalary = parseFloat(prompt("Enter basic salary:")); // Basic Salary input
    const benefits = parseFloat(prompt("Enter benefits:")); // Benefits input

    const grossSalary = basicSalary + benefits; // Gross Salary calculation

    // Calculate PAYE (Progressive Tax Brackets)
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

    // Calculate NHIF Deduction (based on gross salary)
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

    // Calculate NSSF Deduction (6% contribution)
    let nssfDeduction = 0;
    if (grossSalary <= 7000) {
        nssfDeduction = grossSalary * 0.06;
    } else if (grossSalary <= 36000) {
        nssfDeduction = grossSalary * 0.06;
    }

    // Housing Levy (1.5% of gross salary starting March 2024)
    const housingLevy = grossSalary * 0.015;

    // Calculate Net Salary
    const totalDeductions = tax + nhifDeduction + nssfDeduction + housingLevy;
    const netSalary = grossSalary - totalDeductions;

    // Output the breakdown
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Tax Deduction: ${tax}`);
    console.log(`NHIF Deduction: ${nhifDeduction}`);
    console.log(`NSSF Deduction: ${nssfDeduction}`);
    console.log(`Housing Levy Deduction: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
}
