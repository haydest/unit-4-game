

$(document).ready(function() {
  //var vals = []
  var score = 0
    //for (var i = 0; i < vals.length; i++) {
        //score += vals[i]
    //}
  var chadRandom = Math.floor(Math.random() * 12) + 1;
  var deryckRandom = Math.floor(Math.random() * 12) + 1;
  var jesseRandom = Math.floor(Math.random() * 12) + 1;
  var evanRandom = Math.floor(Math.random() * 12) + 1;

  function reset() {    
   var randomNumber = Math.floor(Math.random() * 120) + 19;
   $("#randomNumber").append(randomNumber);
   console.log(randomNumber);
   $("#score").append("your total score is: " + score);
   $("#chad").val(chadRandom);
     console.log(chadRandom);
   $("#deryck").val(deryckRandom);
     console.log(deryckRandom);
   $("#jesse").val(jesseRandom);
     console.log(jesseRandom);
   $("#evan").val(evanRandom);
     console.log(evanRandom);
  };
  reset();

  $("#chad").on("click", function() {
      score = score += $("#chad");
      $("#score").append(score);
    console.log(score);
  });

  $("#deryck").on("click", function() {
    $("#score").append(deryckRandom);
    score = score += deryckRandom;
    console.log(score);
  });

  $("#jesse").on("click", function() {
    $("#score").append(jesseRandom);
    score = score += jesseRandom;
    console.log(score);
  });

  $("#evan").on("click", function() {
    $("#score").append(evanRandom);
    score = score += evanRandom;
    console.log(score);
  });

  

}) 

