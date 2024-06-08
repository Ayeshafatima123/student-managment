import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Student",
        type: "input",
        message: "Enter Student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the courses to enrolled",
        choices: ["MS.office", "html", "Javascript", "Typescript", "Python"]
    }
]);
const tutionfee = {
    "MS.office": 2000,
    "html": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Python": 10000,
};
console.log(`\nTution Fees: ${tutionfee[answer.courses]}/-\n`);
console.log(`Balance:${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank transfer", "Easy pasia", "jazzcash"],
    },
    {
        name: "amount",
        type: "input",
        message: "Easy pasia:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionFees = tutionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratuiation,you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "What would like to do next?",
            choices: ["View Status", "Exist"]
        }
    ]);
    if (ans.Select === "View Status") {
        console.log("\n********* Status ********\n");
        console.log(`Student Name: ${answer.Student}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExisting Student Management System\n");
    }
}
else {
    console.log("Invalid amount due to course");
}
