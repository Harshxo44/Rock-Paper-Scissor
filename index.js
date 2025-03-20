let usescore = 0;
let compscore = 0;
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let msg = document.getElementById("msg");

const choices = document.querySelectorAll(".choice");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
    
}
// const playGame = (choiceId) => { 
//     console.log("user choice" , choiceId);
//     //Genrate computer
//     const computerChoice = genComputerChoice();
//     console.log("computer choice" , computerChoice);

//     if(choiceId === computerChoice){
//         alert("Tie");
//     }
//     else if(choiceId === "rock" && computerChoice === "paper"){
//         alert("You lose");
//         compscore++;
//         computer.innerText = `Computer : ${compscore}`;
//     }
//     else if(choiceId === "rock" && computerChoice === "scissor"){
//         alert("You win");
//         usescore++;
//         player.innerText = `Player : ${usescore}`;
// }
//

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    });
});
const randomPrompts = [
    "Looks like your bot!",
    "Hmm, let me think...",
    "I'm choosing...",
    "What will I pick?",
    "This is a tough one!",
    "Human! Let's see what happens!",
    "Noob! All the best"
];

const getRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * randomPrompts.length);
    return randomPrompts[randomIndex];
};

const playGame = (choiceId) => { 
    console.log("user choice", choiceId);

    // Display a random prompt
    msg.innerText = getRandomPrompt();

    // Generate computer choice
    const computerChoice = genComputerChoice();
    console.log("computer choice", computerChoice);

    setTimeout(() => {
        if (choiceId === computerChoice) {
            alert("Tie");
        } else if (choiceId === "rock" && computerChoice === "paper") {
            alert("You lose");
            compscore++;
            computer.innerText = `Computer : ${compscore}`;
        } else if (choiceId === "rock" && computerChoice === "scissor") {
            alert("You win");
            usescore++;
            player.innerText = `Player : ${usescore}`;
        }
        msg.innerText = "Play Your Move :)";
    }, 1000);
};

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    usescore = 0;
    compscore = 0;
    player.innerText = `Player : ${usescore}`;
    computer.innerText = `Computer : ${compscore}`;
});



 

