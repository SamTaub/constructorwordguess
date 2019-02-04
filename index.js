//Variables to require "word.js" and Inquirer package.
var word = require('./word.js');
var inquirer = require('inquirer');
//String of letters in the alphabet that will be used to validate user inputs.
var alphabetString = "abcdefghijklmnopqrstuvwxyz";
//Array of words the game will use (last names of 2008 Phillies players).
var gameWordBank = ["hamels", "moyer", "blanton", "myers", "lidge", "rollins", "utley", "howard", "victorino", "feliz", "werth", "burrell", "ruiz"];
//Select a random word from "gameWords".
var randomWord = gameWordBank[Math.floor(Math.random() * gameWordBank.length)];
//Creates the word the game will use in our Word Consturctor.
var currentWord = new Word(randomWord);
//Arrays to store users correct and incorrect guesses.
var userCorrectGuess = [];
var userIncorrectGuess = [];
//Sets the maximum user guesses to 10.
var maxGuesses = 10;

function startNewGame(){
    
}