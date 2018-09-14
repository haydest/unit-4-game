 
 var score = 0;
 var wins = 0;
 var losses = 0;
 var chad;
 var deryck;
 var jesse;
 var evan;
 


function reset() {   
   score = 0; 
   var chadRandom = Math.floor(Math.random() * 12) + 1;
   var deryckRandom = Math.floor(Math.random() * 12) + 1;
   var jesseRandom = Math.floor(Math.random() * 12) + 1;
   var evanRandom = Math.floor(Math.random() * 12) + 1;
   var randomNumber = Math.floor(Math.random() * 120) + 19;
   $("#randomNumber").text(randomNumber);
   console.log(randomNumber);
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
   if (score > randomNumber) {
       losses++;
       $("#losses").text("losses: " + losses);
       reset();
   }
 
   else if (score === randomNumber) {
       wins++;
       $("#wins").text("wins: " + wins);
       reset();
       
   }
  //  else if (score < randomNumber) {
  //      console.log(score);
  //  }
};

$(document).ready(function() {    
 
  reset();

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
  
  
  

}) 

