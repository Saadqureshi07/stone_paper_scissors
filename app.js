let userScore = 0;
let CompScore = 0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")


const drawGame = () =>{
  console.log("Game was draw")
  msg.innerText = "Game was Draw , play again"
  msg.style.backgroundColor = "black"
  msg.style.Color = "white"
}
const showWinner = (userWin) =>{
  if(userWin){
   console.log("You Win")  
   msg.innerText = "You Win";
   msg.style.backgroundColor = "Green"
  }
  else{
    console.log("You loss");
     msg.innerText = "You loss"
     msg.style.backgroundColor = "Red"
  }
}

//computerchoice
const genCompChoice = () => {
  const options = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random() * 3) 
  return options[randIdx];
}




// comparing both choices
const playGame = (userChoice) =>{
  console.log("User choice = ",userChoice)
  //computer choice
const compChoice = genCompChoice();
console.log( "comp choice = ",compChoice)



if(userChoice === compChoice){
   drawGame();
}else{
 let userWin = true;
   if(userChoice === "rock" ){
   userWin = compChoice === "paper" ? false : true;
   }
   else if(userChoice === "paper"){
    userWin = compChoice === "scissors" ? false : true;
  }
   else{
    userWin = compChoice ==="rock" ? false : true;
  }
  showWinner(userWin);
}
};


// userchoice
choices.forEach((choice)=>{
 choice.addEventListener("click",()=>{
  let userChoice = choice.getAttribute("id");
  playGame(userChoice)
 })
})