
$(document).on("ready", function() {
  $('.jumbotron').hide();
  var counter = 0;
    console.log ("sanity check");
// 
// function win (playerWinner) {
//       $( '.jumbotron' ).show( 10 );
//       // PSEUDO $('.playerWinText').text(playerWinner + "JUST WON!")
// }
    $(document).on("keypress", function slothMove(event) {
      if (counter >= 10) {
        console.log("sloth wins!");
      } else if (event.which==115) {
        $("#playerSloth").animate({left: "+=100"}, "fast");
        counter ++;
        console.log(counter);
        if (counter === 10) {
          win("Sloth");
        }
        }
      });

    $(document).on("keypress", function bearMove(event) {
      if (event.which==98) {
        $("#playerBear").animate({left: "+=100"}, "fast");
        console.log ("key b");
      }
    });

    $(document).on("keypress", function koalaMove(event) {
      if (event.which==107) {
        $("#playerKoala").animate({left: "+=100"}, "fast");
        console.log ("key k");
      }
    });

    $(document).on("keypress", function monkeyMove(event) {
      if (event.which==54) {
        $("#playerMonkey").animate({left: "+=100"}, "fast");
        console.log ("key 6");
      }
    });



});
