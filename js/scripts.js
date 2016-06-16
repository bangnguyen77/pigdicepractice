// Back-End logic
var rollResult = function() {
  return Math.floor(Math.random() * 6 + 1); // roll for random number
}

function Scores(pScore, diceTotal) {
  this.playerScore = pScore;
  this.turnTotal = diceTotal;
}

Scores.prototype.turnTicker = function (turnRoll) {
  this.turnTotal += turnRoll;
  return this.turnTotal;
}

Scores.prototype.scoreTotal = function () {
  this.playerScore += this.turnTotal;
  this.turnTotal = 0;
  return this.playerScore;
}

var p1 = new Scores(0,0);
var p2 = new Scores(0,0);



// Front-End logic
$(document).ready(function (event) {
  $("#player1RollButton").click(function (event) {
    var thisRoll = rollResult();
    $(".rollDisplay").text(thisRoll);
    p2.turnTotal = 0;
    if (thisRoll === 1) {
      p1.turnTotal = 0;
      $(".player1Buttons").fadeOut();
      $(".player2Buttons").fadeIn();
    } else {
      p1.turnTicker(thisRoll);
      }
      $(".turnTotalDisplay").text(p1.turnTotal);
  });

  $("#player1HoldButton").click(function (event) {
    var turnOver = p1.turnTotal;
    $("#player1Score").text(p1.scoreTotal() );

    if (p1.playerScore >= 100) {
      $(".winner").fadeIn();
    }
    $(".turnTotalDisplay").text('0');
    $(".player1Buttons").fadeOut();
    $(".player2Buttons").fadeIn();
  });



  $("#player2RollButton").click(function (event) {
    var thisRoll = rollResult();
    $(".rollDisplay").text(thisRoll);
    p1.turnTotal = 0;
    if (thisRoll === 1) {
      p2.turnTotal = 0;
      $(".player1Buttons").fadeIn();
      $(".player2Buttons").fadeOut();
    } else {
      p2.turnTicker(thisRoll);
    }
    $(".turnTotalDisplay").text(p2.turnTotal);
  });

  $("#player2HoldButton").click(function (event) {
    var turnOver = p2.turnTotal;
    $("#player2Score").text(p2.scoreTotal() );
    if (p2.playerScore >= 100) {
      $(".winner").fadeIn();
    }
    $(".turnTotalDisplay").text('0');
    $(".player1Buttons").fadeIn();
    $(".player2Buttons").fadeOut();
  });

});
