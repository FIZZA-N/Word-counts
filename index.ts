#! /usr/bin/env/ node 

//  imported inquirer from npm 
import inquirer from 'inquirer'

//  declare a constant answer ans assign it  to the result of inquirer

const answers: {
    Sentence: string 
} = await inquirer.prompt([
    { name: "Sentence",
        type: "input",
        message: "Enter your sentence to count  the words: "

    }
])

// trim = is used to remove all the spaces from the sentence  like this .                  fi   z    a    naya b    # resuit will be  .fizzanayab
//  .split is used to split the  words  from each others (" "), likw this if we dont do this or if we do like this ("") [ 'i', 'like', 'this'] it will split all the characters like this ['L', 'i', 'k', 'e']
const words = answers.Sentence.trim().split(" ");

//  print the array of words to the console
console.log(words);

//  print the words count of the sentence 
console.log(`Your sentence word count is ${words.length}`);

// console.log(answers.Sentence);


