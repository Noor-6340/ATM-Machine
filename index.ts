#! /usr/bin/env node


import inquirer from "inquirer";

// Initialize user balance and pin code
let myBalance = 7000;
let myPin = 1122;

async function startATM() {
    // Print welcome message
    console.log("Welcome to code with Shumaila - ATM Machine");

    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            type: "number",
            message: "Enter your pin code",
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("pin is correct, login Successfully!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                type: "list",
                message: "Select an operation",
                choices: ["Withdraw Amount", "Check Balance"]
            }
        ]);

        if (operationAns.operation === "Withdraw Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            } else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} Amount Withdrawn Successfully`);
                console.log(`Your Remaining Balance is: ${myBalance}`);
            }
        } else if (operationAns.operation === "Check Balance") {
            console.log(`Current Account Balance is ${myBalance}`);
        }
    } else {
        console.log("pin is incorrect, Please Try Again!");
    }
}

// Call the async function to start the ATM interaction
startATM();
