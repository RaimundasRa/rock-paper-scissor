const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add('fadeOut');
      match.classList.add('fadeIn');
    });
  };
  // play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function () {
        this.style.animation = '';
      });
    });
    // computers options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function () {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // setting starting hand for player and computer for each round to be Rock
        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;
        setTimeout(() => {
          // here is where we call compare hands
          compareHands(this.textContent, computerChoice);

          // update images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        // animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
      });
    });
  };

  // update score
  const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    // we are checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie.';
      return;
    }
    // checking for Rock
    if (playerChoice === 'rock') {
      if (computerChoice == 'scissors') {
        winner.textContent = 'Player wins!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
        updateScore();
        return;
      }
    }
    // checking for Paper
    if (playerChoice === 'paper') {
      if (computerChoice == 'rock') {
        winner.textContent = 'Player wins!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
        updateScore();
        return;
      }
    }
    // checking for Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice == 'paper') {
        winner.textContent = 'Player wins!';
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
        updateScore();
        return;
      }
    }
  };

  // call all inner function
  startGame();
  playMatch();
};

// start the game function
game();
