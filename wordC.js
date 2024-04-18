#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.magenta(`\n \t\t <<<=====================================>>>`));
console.log(chalk.bold.magenta("\n<<<===========>>> Welcome to HashTech Coding - To-Do List <<<===========>>>"));
console.log(chalk.bold.magenta(`\n \t\t <<<=====================================>>>`));
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: chalk.blue("\nEnter a sentence to count your words: ")
    }
]);
const words = answer.Sentence.trim().split(" ");
console.log(words);
console.log(chalk.white(`\nThe number of words in your sentence are: ${chalk.blueBright(words.length)}`));
