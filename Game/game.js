const button = document.querySelectorAll(".symbol");
const result = document.querySelector(".result");
const userSco = document.getElementById("your-score");
const compSco = document.getElementById("comp-score");

var userScore = 0;
var compScore = 0;

button.forEach((btn)=>{
    btn.addEventListener(("click"),()=> {
        result.innerHTML = finalResult(btn.id,compChoice());
    })
})

function compChoice(){
    const choices = ["rock","paper","scissor"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function finalResult(userSelection,compSelection){

    if(userSelection === compSelection){
        return "Its a tie!";
    }else if(
        (userSelection === "rock" && compSelection === "scissor") ||
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissor" && compSelection === "paper")
    ){
         userScore++;  
         userSco.innerText = userScore;
         return `You won! ${userSelection} beats ${compSelection}`;
    }else{
         compScore++;
         compSco.innerText = compScore;
         return `You lose! ${compSelection} beats ${userSelection}`;
    }
}