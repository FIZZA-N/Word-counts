//  imported inquirer from npm 
import inquirer from 'inquirer';
//  declare a constant answer ans assign it  to the result of inquirer
const answers = await inquirer.prompt([
    { name: "Sentence",
        type: "input",
        message: "Enter your sentence to count  the words: "
    }
]);
// trim = is used to remove all the spaces from the sentence  like this .                  fi   z    a    naya b    # resuit will be  .fizzanayab
const words = answers.Sentence.trim().split(" ");
//  print the array of words to the console
console.log(words);
//  print the words count of the sentence 
console.log(`Your sentence word count is ${words.length}`);
// console.log(answers.Sentence);
