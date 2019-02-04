function Letter(input){
    this.letter = input;
    this.guessed = false;
    //Return "_" if the letter has not been guessed.  Return the letter if it has been guessed.
    this.toString = function(){
        if (!this.guessed){
            return "_";
        } else {
            return this.guessed;
        }
    };
    //Update this.guessed to true if the user input matches "this.letter".
    this.guess = function(char){
        if (char === this.letter){
            this.guessed = true;
        }
    };
};
//Allow file to be linked as "Letter".
module.exports = Letter;