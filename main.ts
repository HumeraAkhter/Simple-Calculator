#!/usr/bin/env code
import inquirer from "inquirer";
import chalk from  "chalk";

const answers : {
    numberOne: number,
    numberTwo: number,
    opertor:  string,
} = await inquirer.prompt([
    {type: "number",
    name:  "numberOne",
    message: "Enter your first number"
    },
    {type:  "number",
    name:   "numberTwo",
    message: "Enter your second number"
    },
    {type: "list",
    name:  "opertor",
    message: "Enter your opertor",
    choices:["+","-", "*", "/"]}

])
// console.log(answers , "answers");



    
const {numberOne, numberTwo, opertor} = answers;
// console.log(numberOne , numberTwo , opertor)
let result
switch(opertor){
    case "+" : result = numberOne + numberTwo;
    break;
    case "-" : result = numberOne - numberTwo;
    break;
    case "*" : result = numberOne * numberTwo;
    break;
    case "/" : result = numberOne / numberTwo;
    break;
    default:
    console.log("invalid opertor");
}
// console.log(result , "result")
console.log (`${numberOne}  ${opertor}  ${numberTwo} = ${result}` );

