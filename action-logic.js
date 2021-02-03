var scores, roundScore, activePlayer, gamePlaying;

int();


document.querySelector('.btn-roll').addEventListener('click', function (){

//GAME PLAYING ALGORITHM START 
  if(gamePlaying) {
    
    var dice = Math.floor(Math.random() * 6) + 1;

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '0.png';

    if(dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }
}) 
//GAME PLAYING ALGORITHM END