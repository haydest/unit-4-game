 


$(document).ready(function() {  
  
  var score = 0;
  var wins = 0;
  var losses = 0;
  var chad;
  var deryck;
  var jesse;
  var evan;
  var randomNumber = function(min, max) {
   return Math.floor(Math.random() * (max - min +1)) + min;
  };
  
 
 
 function reset() {   
    score = 0; 
    var chadRandom = Math.floor(Math.random() * 12) + 1;
    var deryckRandom = Math.floor(Math.random() * 12) + 1;
    var jesseRandom = Math.floor(Math.random() * 12) + 1;
    var evanRandom = Math.floor(Math.random() * 12) + 1;
    targetScore = randomNumber(19, 120);
    $("#randomNumber").text(targetScore);
    console.log(targetScore);
    $("#score").text("your total score is: " + score);
    chad = chadRandom;
    $("#chad").val(chad);
    deryck = deryckRandom;
    $("#deryck").val(deryck);
    jesse = jesseRandom;
    $("#jesse").val(jesse);
    evan = evanRandom;
    $("#evan").val(evan);
   };
 
 function evaluateScore() {
    if (score > targetScore) {
        losses++;
        $("#losses").text("losses: " + losses);
        reset();
    }
  
    else if (score === targetScore) {
        wins++;
        $("#wins").text("wins: " + wins);
        reset();
        
    }
 };

  $("#chad").on("click", function() {
    score += chad;
    $("#score").text("your total score is: " + score);
    console.log(score);
    // evaluateScore();
  });

  $("#deryck").on("click", function() {
    score += deryck;
    $("#score").text("your total score is: " + score);
    console.log(score);
    // evaluateScore();
  });

  $("#jesse").on("click", function() {
    score += jesse;
    $("#score").text("your total score is: " + score);
    console.log(score);
    // evaluateScore();
  });

  $("#evan").on("click", function() {
    score += evan;
    $("#score").text("your total score is: " + score);
    console.log(score);
    // evaluateScore();
  });
  evaluateScore();
  
  reset();
  

}) 

