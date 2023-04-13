const game = () => {
  let pScore = 0;
  let cScore = 0;

  // start the game
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  // play match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    // computers options
    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        // computer choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        // here is where we call compare hands


        // update images
        playerHand.src = `./assets/${this.textContent}.png`
        computerHand.src = `./assets/${computerChoice}.png`
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');
    // we are checking for a tie
    if(playerChoice === computerChoice) {
      winner.textContent = 'It is a tie.';
      return;
    }
    // checking for Rock
    if(playerChoice === 'rock') {
      if(computerChoice == 'scissors') {
        winner.textContent = 'Player wins!';
        return;
      } else {
        winner.textContent = 'Computer wins!';
        return;
      }
    }
    // checking for Paper
    if(playerChoice === 'paper') {
      if(computerChoice == 'rock') {
        winner.textContent = 'Player wins!';
        return;
      } else {
        winner.textContent = 'Computer wins!';
        return;
      }
    }
    // checking for Scissors
    if(playerChoice === 'scissors') {
      if(computerChoice == 'paper') {
        winner.textContent = 'Player wins!';
        return;
      } else {
        winner.textContent = 'Computer wins!';
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
