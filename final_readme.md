<<<<<<< UPDATED README
Phase 1 Week 1 Code Challenge
Overview
This repo contains solutions for the Code Challenge which includes four tasks:
Student Grade Generator
Speed detector
net salary calculator

SOLUTIONS FOR THE CODEGRADE 
1. **STUDENT GRADE GENERATOR**
**QUESTION** : Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

**SOLUTION**
You first need to understand the question and what it requires for instance the qn asks one to create an input in which there is student score that ranges from 0 - 100 and the output should correspond giving out a grade for each case.

- To create the prompt, you first need a function for my case i named it studentGradeGenerator and then a local variable needs to be declared for my case the marks needed to be declared i declared the marks using const then using the inbuilt js prompt and writing "Enter student marks (0-100):". Since the inbuilt js prompt is a string and we want a value in number i used parseInt and stored a new variable marksInt

function studentGradesGenerator() {
    const marks = prompt("Enter student marks (0-100):"); 
    const marksInt = parseInt(marks); 
}

- Second step we need to deal with the output of the marks in this case we are going to validate the input before proceeding to assign grades.
if (marksInt >= 0 && marksInt <= 100)

According to the qn A > 79 so here is how we deal with it 
 if (marksInt > 79) {
            console.log("Grade: A");
 } // This shows that if the marks are above 79 the person has Grade A.

 B = 60 to 79  Here is how we solve it in my case i used else if
 else if (marksInt >= 60) {
            console.log("Grade: B"); // Marks between 60 and 79
        }  // I used else if and the >= sign since there are conditions so it shows that if the persin is in the range of 60 -79 he/she has a grade B.

The process applies upto grade E and i also created an input that tells one invalid input if he/she did not put the correct value.
    


2. **Speed Detector**
**QUESTION** Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

**SOLUTION**

- The question is quite similar to the previous question we are going to use the same formula to execute it. 

First we need a function, a local variable, prompt and a parse 
The function will be speedDetector, we use const to declare the speed and prompt it to say "Enter the speed of the car"
we declare the speed again as speedInt and use parseInt to convert string to number.

According to the question , If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
- We use if and else in our case so the first one is if the speed is less than 70 it should give output "OK" else we declare a new variable demerit points and give it the formula that it should use to deal with the demerit points.
        const demeritPoints = Math.floor((speedInt - 70) / 5);
        // speedInt which is input - 70 speed limit then divide by 5 to get the number of 5km/hr intervals. math.floor converts decimal to whole number.
The question continues for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points. For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.
- if the demerit points are greater than 12 it suspends the licence otherwise it prints the number of demerit points.

3. **Net Salary Calculator**
**QUESTION**
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

**SOLUTION**
According to the question we need 2 inputs, we need to calculate gross salary, PAYE calculation, NHIF Deduction calculation, NSSF Deduction Calculation, Housing Levy Calculation, Net Salary Calculation and output of the results.

- Input 
I have created 2 inputs one for basic salary and another one for the benefits input each having their own prompt. I used parseFloat to make the value in the prompt a floating - point decimal

- Gross Salary 
Here i calculated the gross salary using the formula gross salary = basic salary + benefits

- PAYE calculation
Using the rates from the KRA, i declared the tax using let and gave it a value 0.

The KRA table had a range from 24000 to a range above 800,00 each having a certain percentage I used the if and else if method dealing with each group

- NHIF deduction calculation
Using the rates from the KRA, I used same technique as PAYE calculation declared variable using let and gave it 0 and then the if and else if formula.

The KRA table had a range from 5,999 to a range of 99,999 and above each having a certain deduction based on income brackets.

- NSSF deduction calculation
Using the rates from the KRA, I used same technique of the if and else if

The NSSF table had a range of 7,000 to a range fo 36,000 each having a certain percentage to pay.

- Housing levy
Using the KRA table the housing levy was calculated as gross salary * 1.5%

I used the variable const to declare the housing levy and then = gross salary * 0.015 as the formula

- Net salary calculation 
The formula of calculating the net salary is gross salary - total deductions.

I made a const for the total deductions and calculated the totals then another const for net salary showcasing gross salary which was existing - total deductions.

- Output of the results
console log all the calculations we have done for debbuging and verification of calculations.
=======

>>>>>>> 8564703c437178437d0b3caea444881bdeb335e6