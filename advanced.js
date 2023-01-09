//advanced rps, with 9 options


// Complete logic of game inside this function
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	// Function to
	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
    const fireBtn = document.querySelector('.fire')
    const humanBtn = document.querySelector('.human')
    const spongeBtn = document.querySelector('.sponge')
    const waterBtn = document.querySelector('.water')
    const airBtn = document.querySelector('.air')
    const gunBtn = document.querySelector('.gun')
		const playerOptions = [rockBtn,paperBtn,scissorBtn,humanBtn,spongeBtn,waterBtn,airBtn,gunBtn, fireBtn];
		const computerOptions = ['sponge','human','scissors','fire','rock','gun','water','air','paper'];
    const gif = document.querySelector("#gif");

    // Making negative indexes work for the winner() function
    const proxy = new Proxy(computerOptions, {
        get(target, prop) {
            if (!isNaN(prop)) {
                prop = parseInt(prop, 10);
                if (prop < 0) {
                    prop += target.length;
                }
            }
            return target[prop];
        }
    });

		
		// Function to start playing game
		playerOptions.forEach(option => {
			option.addEventListener('click',function() {
				const movesLeft = document.querySelector('#movesleft');
  
				moves++;
				movesLeft.innerHTML = `<span class='tag is-black'>Moves Left: ${10-moves}</span>`;
				
        // Randomizing the computer's move
				const choiceNumber = Math.floor(Math.random()*9);
				const computerChoice = computerOptions[choiceNumber];

				// Function to check who wins
				winner(this.innerText,computerChoice)
	
				// Calling gameOver function after 10 moves
				if(moves == 10){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}
  
	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
    //document.getElementById('p-rps').innerHTML = player.toLowerCase()
    //document.getElementById('c-rps').innerHTML = computer
    let whowins = false
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> Stalemate.`;
      gif.innerHTML = '<iframe src="https://giphy.com/embed/sUbVGq7zdvCOk" width="330" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p>Tie</p>';
      whowins = true
      console.log("tie")
		}
    // find playerchoiceindex, find computerchoiceindex, if computerchoice index is between the range (playerchoiceindex-4 to playerchoiceindex-1), player wins
		else {
      const computerOptions = ['sponge',
                               'human',
                               'scissors',
                               'fire',
                               'rock',
                               'gun',
                               'water',
                               'air',
                               'paper'];
      // let computerChoiceIndex = parseInt(computerOptions.indexOf(computer))
      let playerChoiceIndex = parseInt(computerOptions.indexOf(player));
      if (whowins == false) {
        for (var i = playerChoiceIndex - 4; i < playerChoiceIndex; i++) {
          if (computerOptions.at(i) == computer){
            console.log("computer = ", computer, "player =" , player, "player wins")
            result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> But can you win the war?`;
            gif.innerHTML = '<iframe src="https://giphy.com/embed/l4pTfx2qLszoacZRS" width="330" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
            
            playerScore++;
            playerScoreBoard.textContent = playerScore;
            whowins = true
          }}
      if (whowins == false) {  
          console.log("computer = ", computer, "player =" , player, "comp wins")
          result.innerHTML = `<p>Your choice: ${player}.<br> Computer played: ${computer}.<br> Better luck next time.`;
          gif.innerHTML = `<iframe src="https://giphy.com/embed/ISOckXUybVfQ4" width="330" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> `;
          computerScore++;
          computerScoreBoard.textContent = computerScore;
          whowins = true
      }}
}
}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

    movesLeft.style.display = "none";

		if(playerScore > computerScore){
			result.innerHTML = '<p><strong>You Won!</strong></p>'
		}
		else if(playerScore < computerScore){
			result.innerHTML = '<p><strong>You Lost.</strong></p>';
    }
		else{
			result.innerHTML = '<p><strong>The game was a tie!</strong></p>';
		}

    gif.innerHTML = '';
    reloadBtn.classList.remove("hidden");
    reloadBtn.classList.add("needCenter");
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
      reloadBtn.classList.add("hidden");
      reloadBtn.classList.remove("needCenter");
			window.location.reload();
		})
	}

//All hidden elements come back once start game button is clicked, start game button disappears
const page = document.querySelectorAll(".gamestart");
const pre = document.querySelector(".prestart");
startBtn = document.querySelector(".start");
startBtn.addEventListener("click", (e) => {
  page.forEach((item) =>{
    item.classList.remove("hidden");
  })
  
  pre.classList.add("hidden");
  pre.classList.remove("needCenter");
})

// Calling playGame function inside game
playGame();
}

// Calling the game function
game();

