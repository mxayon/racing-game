
$(document).on("ready", function() {
  $('.jumbotron').hide();
  var slothCount = 0;
  var bearCount = 0;
  var koalaCount = 0;
  var monkeyCount = 0;
  var winCount = 0;
    console.log ("sanity check");

function win (playerWinner) {
      $( '.jumbotron' ).show( 15 );
      $('.winning').text(playerWinner + " " + "JUST WON!");
      winCount++;
}
    $(document).on("keypress", function slothMove(event) {
      if ((slothCount >= 65) || (winCount ===1)) {
        console.log("sloth wins!");
        ////stops sloth from happening
      } else if (event.which==115) {
        $("#playerSloth").animate({left: "+=10"}, 100);
        slothCount ++;
        console.log(slothCount);
        if (slothCount === 65) {
          win("Sloth");

        }
        }
      });

    $(document).on("keypress", function bearMove(event) {
      if ((bearCount >= 65) || (winCount ===1)) {
        console.log("bear wins!");
      } else if (event.which==98) {
        $("#playerBear").animate({left: "+=10"}, 100);
        bearCount ++;
        console.log (bearCount);
        if (bearCount === 65) {
          win ("Bear");
        }
      }
    });

    $(document).on("keypress", function koalaMove(event) {
      if ((koalaCount >= 65) || (winCount ===1)) {
        console.log("koala wins!");
      } else if (event.which==107) {
        $("#playerKoala").animate({left: "+=10"}, 100);
        koalaCount ++;
        console.log (koalaCount);
        if (koalaCount === 65) {
          win ("Koala");
        }
      }
    });

    $(document).on("keypress", function monkeyMove(event) {
      if ((monkeyCount >= 65) || (winCount ===1)) {
        console.log("monkey wins!");
      } else if (event.which==54) {
        $("#playerMonkey").animate({left: "+=10"}, 100);
        monkeyCount ++;
        console.log (monkeyCount);
        if (monkeyCount === 65) {
          win ("Monkey");
      }
     }
    });

/////reset button ////
    $(".btn").on('click', function(event) {
      $(".jumbotron").each (function (event) {
         $(this).hide();
         $('#playerSloth').stop();
         $('#playerSloth').clearQueue();
       });
     });



});
