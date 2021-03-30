//wait for the Dom to finish loading before running the game
// get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // iterate through all button elements in the array button
    for (let button of buttons) {
        // listen for button click event and execute function
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")=="submit") {
                checkAnswer();
            }else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }
    runGame("addition");
});

function runGame(gameType) {
    //Generate two random numbers between 1 and 25
    //Math.floor rounds down to the whole number
    //math.random generates random number

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

   // Selects and displays the question depending on the gameType
    // which we set when we called the function
    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}, aborting...`; // stops JavaScript and executes error massage
    }

}

function checkAnswer() {
     
    //checks the answer against the first element in 
   // the returned calculateCorrectAnswer array
    
   let userAnswer = parseInt(document.getElementById("answer-box").value);
   let calculatedAnswer = calculateCorrectAnswer(); //Returns an array
   let isCorrect = userAnswer === calculatedAnswer[0]; // checks if true or false

   if (isCorrect) {
       alert("Hey! You got it right! :D");
       incrementScore();
   } else {
       alert (`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
       incrementWrongAnswer();
   }

   runGame(calculatedAnswer[1]);
}

function calculateCorrectAnswer() {
    
    // Gets the operands (the numbers) and the operator (plus, minus etc)
    //directly from the DOM -> parseInt() -> parses string and returns integer
    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;
    //check operator
    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}, aborting!`;
    }
    
}

function incrementScore() {

    // Gets the current score from the DOM and increments it
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore; // value + 1

}

function incrementWrongAnswer() {
    // Gets the current tally of incorrect answers from the DOM and increments it
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}
