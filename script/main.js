
$(document).on("ready", function() {
  $('.jumbotron').hide();
  var counter = 0;
    console.log ("sanity check");

function win (playerWinner) {
      $( '.jumbotron' ).show( 15 );
      $('.winning').text(playerWinner + " " + "JUST WON!");
}
    $(document).on("keypress", function slothMove(event) {
      if (counter >= 65) {
        console.log("sloth wins!");
        ////stops sloth from happening
      } else if (event.which==115) {
        $("#playerSloth").animate({left: "+=10"}, 100);
        counter ++;
        console.log(counter);
        if (counter === 65) {
          win("Sloth");
        }
        }
      });

    $(document).on("keypress", function bearMove(event) {
      if (event.which==98) {
        $("#playerBear").animate({left: "+=10"}, 100);
        console.log ("key b");
      }
    });

    $(document).on("keypress", function koalaMove(event) {
      if (event.which==107) {
        $("#playerKoala").animate({left: "+=10"}, 100);
        console.log ("key k");
      }
    });

    $(document).on("keypress", function monkeyMove(event) {
      if (event.which==54) {
        $("#playerMonkey").animate({left: "+=10"}, 100);
        console.log ("key 6");
      }
    });



});
