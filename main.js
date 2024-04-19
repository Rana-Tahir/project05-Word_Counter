#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright.bold(`\n\t\t  Welcome to Word-Counter App \n\n`));
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: (chalk.greenBright("Enter a sentence to count the word: "))
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(chalk.magentaBright(`\n\t\t Your sentence have ${words.length} words. `));
