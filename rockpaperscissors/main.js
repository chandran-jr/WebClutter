const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const model = document.querySelector('.model');
const scoreboard = {
    player:0,
    computer:0
};

//play game
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    console.log(e.target.id,computerChoice);
    const winner = getWinner(playerChoice,computerChoice);
    console.log(winner);

    showWinner(winner,computerChoice);
}

//Get Computer choice
function getComputerChoice() {
    // body...
    const rand = Math.random();
    if(rand<0.34){
        return 'rock';
    }
    else if(rand <=0.67){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//get game winner
function getWinner(p,c) {
    // body...
    if(p===c){
        return 'draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'paper'){
        if (c === 'scissors') {
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else{
        if (c === 'rock') {
            return 'computer';
        }
        else{
            return 'player';
        }
    }
}

function showWinner(winner,computerChoice) {
    // body...
    if(winner === 'player'){
        //inc p score
        scoreboard.player++;
        //show model result
        result.innerHTML = `
        <h1 class="text-win">You win
        </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x">
        </i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
        </strong></p>
        `;
    }
    else if(winner === 'computer'){
        //inc p score
        scoreboard.computer++;
        //show model result
        result.innerHTML = `
        <h1 class="text-lose">You Lose
        </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x">
        </i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
        </strong></p>
        `;
    }
    else{
        //show model result
        result.innerHTML = `
        <h1>It's a draw
        </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x">
        </i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase()+computerChoice.slice(1)}
        </strong></p>
        `;
    }
    //show score 
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
    model.style.display = 'block';
}

//Clear model
function clearModel(e) {
    // body...
    if(e.target == model){
        model.style.display = 'none';
    }
}

//RestartGame
function restartGame(argument) {
    // body...
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}
//Event listeners
choices.forEach(choice=>choice.addEventListener('click',play));

window.addEventListener('click',clearModel);

restart.addEventListener('click',restartGame);