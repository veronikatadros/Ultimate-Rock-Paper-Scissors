// app.js
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
      result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}.<br> Stalemate.`;
      gif.innerHTML = '<iframe src="https://giphy.com/embed/bbK3EMTNekRs43JwJH" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    }
    else if (player == 'rock') {
      if (computer == 'paper') {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> So close.`;
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/htpP7g02u95DrpJAe9" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

      } else {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> Job's not finished.`;
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/1hMgJdn1fAzfV08hYD" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      }
    }
    else if (player == 'scissors') {
      if (computer == 'rock') {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> So close.`;
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/htpP7g02u95DrpJAe9" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';

      } else {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> Job's not finished.`;
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/1hMgJdn1fAzfV08hYD" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      }
    }
    else if (player == 'paper') {
      if (computer == 'scissors') {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> So close.`;
        computerScore++;
        computerScoreBoard.textContent = computerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/htpP7g02u95DrpJAe9" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      } else {
        result.innerHTML =  `<p>Your choice: ${player}.<br>Computer played: ${computer}. <br> Job's not finished.`;
        playerScore++;
        playerScoreBoard.textContent = playerScore;

        gif.innerHTML = '<iframe src="https://giphy.com/embed/1hMgJdn1fAzfV08hYD" width="220" height="220" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
      }
    }
  }

  // Function to run when game is over
  const gameOver = (playerOptions,movesLeft) => {

		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

    movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			result.innerHTML = '<p><strong>You Won!</strong></p>';
		}
		else if(playerScore < computerScore){
			result.innerHTML = '<p><strong>You Lost.</strong></p>';
		}
		else{
			result.innerHTML = '<p><strong>The game was a tie!</strong></p>';
		}
    gif.innerHTML = "";
    reloadBtn.classList.remove("hidden");
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
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
