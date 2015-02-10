$(document).ready(function(){
  
  $("span").text(BettingGame.money +"$");

  $("#betting-form").on("submit", BettingGame.start);
  $(".reload-btn").on("click", function(){
    location.reload(true);
  });
  
});





var BettingGame = {
  start: function(event){
    event.preventDefault();
    BettingGame.placeBet();
    BettingGame.generateRandomNumber();
    BettingGame.guessNumber();
    BettingGame.checkGuess();
    BettingGame.gameOver();
  },
  money: 100,
  rotate: 60,
  placeBet: function(){
    BettingGame.bet = +$("#bet").val();
  },
  generateRandomNumber: function(){
    BettingGame.randomNumber = Math.floor(Math.random()*16);
  },
  guessNumber: function(){
    BettingGame.guess = +$("#guess").val(); 
  },
  checkGuess: function(){
    if(BettingGame.guess === BettingGame.randomNumber)
    {
      alert("You doubled your earnings!");
      BettingGame.money*= 2;
      $("span").text(BettingGame.money +"$");
      rotateImg();
    }
    else if(BettingGame.guess === BettingGame.randomNumber+1 || BettingGame.guess === BettingGame.randomNumber-1)
    {
      alert('So Close! The number was ' + BettingGame.randomNumber);
      rotateImg();
    }
    else
    {
      alert('Wrong! The number was ' + BettingGame.randomNumber);
      BettingGame.money-=BettingGame.bet;
      $("span").text(BettingGame.money +"$");
      rotateImg();
    }
  },
  gameOver: function(){
    if(BettingGame.money <= 0)
    {
      alert("Game Over!");
      location.reload(true);
    }
  }
};

var rotateImg = function(){
  $("img").css({
      transform: 'rotate('+BettingGame.rotate+'deg)'
      });
      BettingGame.rotate+=60;
};

