//Require "Letter.js"
var letter = require('./letter.js');

function Word(answer){
    this.letterArray = [];
    //Loop through the game answer and place each letter into the empty array "this.letterArray".
    for (var i = 0; i < answer.length; i++){
        var newLetter = new letter(answer[i]);
        this.letterrArray.push(newLetter);
    };
    //Loop through the "this.letter array" to populate the "gameAnswer" variable so an answer can be printed.
    this.printAnswer = function(){
        var gameAnswer = "";
        for (var i = 0; i < this.letterArray.length; i++){
            gameanswer += this.letterArray[i];
        };
        console.log(gameAnswer + "\n");
    };
    //Takes the letter and calls the "this.guess" function to update the 
    this.checkLetter = function(letter){
        for (var i = 0; i < this.letterArray.length; i++){
            this.letterArray[i].guess(letter);
        };
    };
};