//wait for the Dom to finish loading before running the game
// get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // iterate through all button elements in the array button
    for (let button of buttons) {
        // listen for button click event and execute function
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")=="submit") {
                alert("you clicked submit");
            }else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
});

function runGame() {
    //Generate two random numbers between 1 and 25
    //Math.floor rounds down to the whole number
    //math.random generates random number

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {
    
}

function incrementScore() {

}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}
