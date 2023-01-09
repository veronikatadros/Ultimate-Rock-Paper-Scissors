//assign variables to the inputs
const boxA = document.querySelector("#option1");
const boxB = document.querySelector("#option2");

const inputButton = document.querySelector("#submit");
const inputButton2 = document.querySelector("#submit2");
const gameSection = document.querySelector("#game");
const message = document.querySelector("#message1");
const intromessage = document.querySelector("#intromessage");
const intermessage = document.querySelector("#intermessage");


//when the input button is clicked, store the inputs
inputButton.addEventListener("click", (e) => {
  
  intromessage.classList.add("hidden");
  intermessage.classList.remove("hidden");

  let option1 = boxA.value;
  let option2 = boxB.value;
  
  message.innerHTML = `So, you want to know if you should ${option1} or ${option2}, huh? Let's play a quick game while we decide your fate!`;

  console.log("test");
});

//Reveals the game
inputButton2.addEventListener("click", (e) =>{
  intermessage.classList.add("hidden");
  gameSection.classList.remove("hidden");
})

//now we play the game to decide which option wins
//code from basic.js
const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let moves = 0;


  // Function to
  const playGame = () => {
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorBtn = document.querySelector('.scissor');
    const playerOptions = [rockBtn, paperBtn, scissorBtn];
    const computerOptions = ['rock', 'paper', 'scissors'];

    // Function to start playing game
    playerOptions.forEach(option => {
      option.addEventListener('click', function() {
        const movesLeft = document.querySelector('#movesleft');
        //
        moves++;
        movesLeft.innerHTML = `<span class='tag is-black'>Moves Left: ${5-moves}</span>`;


        const choiceNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[choiceNumber];
        
        // Function to check who wins
        winner(this.innerText, computerChoice)

        // Calling gameOver function after 10 moves
        if (moves == 5) {
          gameOver(playerOptions, movesLeft);
        }
      })
    })

  }
 
  // Function to decide winner
  const winner = (player, computer) => {
    const result = document.querySelector('.result');
    const playerScoreBoard = document.querySelector('.p-count');
    const computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    console.log(player);

    if (player === computer) {
      result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.`;
      gif.innerHTML = '<iframe src="https://giphy.com/embed/cwTtbmUwzPqx2" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    }
    else if (player == 'rock') {
      if (computer == 'paper') {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.`;
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/a5viI92PAF89q" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

      } else {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> `;
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/WRQBXSCnEFJIuxktnw" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      }
    }
    else if (player == 'scissors') {
      if (computer == 'rock') {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.`;
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/a5viI92PAF89q" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

      } else {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.`;
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/WRQBXSCnEFJIuxktnw" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      }
    }
    else if (player == 'paper') {
      if (computer == 'scissors') {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.`;
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/a5viI92PAF89q" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      } else {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.`;
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/WRQBXSCnEFJIuxktnw" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      }
    }
  }

  // Function to run when game is over
  const gameOver = (playerOptions,movesLeft) => {

		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

    let option1 = boxA.value;
    let option2 = boxB.value;

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

    movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.innerHTML = `<p><strong>${option1} wins!</strong></p>`;
		}
		else if(playerScore < computerScore){
			result.innerHTML = `<p><strong>${option2} it is.</strong></p>`;
		}
		else{
			result.innerHTML = '<p><strong>Flip a coin maybe?</strong></p>';
		}
    gif.innerHTML = "";
    reloadBtn.classList.remove("hidden");
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex';
		reloadBtn.addEventListener('click',() => {
      reloadBtn.classList.add("hidden");
			window.location.reload();
		})
	}


  // Calling playGame function inside game
  playGame();
}

// Calling the game function
game();
