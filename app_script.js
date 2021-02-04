var scores, roundScore, activePlayer, prevDiceRoll, gamePlaying;

int();

document.querySelector('.btn-roll').addEventListener('click', function () {

  if (gamePlaying) {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
  }

  document.getElementById('dice1').style.display = 'block';
  document.getElementById('dice2').style.display = 'block';
  document.getElementById('dice1').src = 'dice-' + dice1 + '.png';
  document.getElementById('dice2').src = 'dice-' + dice2 + '.png';

  if(dice1 === 6 && prevDiceRoll === 6) {
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    nextPlayer();
  } else if (dice1 !== 1 && dice2 !== 1) {
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
      nextPlayer();
  }
})

