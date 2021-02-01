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
})