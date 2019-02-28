
$(document).on("ready", function() {

// function startLine (event) {
//
// }
$('.jumbotron').hide();


/////click start button
$('.go').on("click", function startGame(event) {
  $(this).on("click", function() {
    $('#playerSloth').css('left', 0);
    $('#playerKoala').css('left', 0);
    $('#playerMonkey').css('left', 0);
    $('#playerBear').css('left', 0);
  });

  // var jungleTrackWidth = $(window).width();

      // var startLine = (slothCount, bearCount, koalaCount, monkeyCount);
      // function startGame(event) {
      //   if (startLine === 0) {
      //
      //     $('#playerSloth').stop();
      //     $('#playerSloth').clearQueue();
      //     $('#playerBear').stop();
      //     $('#playerBear').clearQueue();
      //     $('#playerKoala').stop();
      //     $('#playerMonkey').clearQueue();
      //   }
      //   }
      // var jungleWidth =
      var slothCount = 0;
      var bearCount = 0;
      var koalaCount = 0;
      var monkeyCount = 0;
      var moveCount = 0;
        console.log ("players starting line");

        function win (playerWinner) {
          $( '.jumbotron' ).show( 15 );
          $('.winning').text(playerWinner + " " + "is Victorious!");
          moveCount++;
        }
//
// choose player
// sloth - "s"
// koala - "k"
// monkey - "m"
// bear - "b"


        /////playerSloth


        $(document).on("keypress", function slothMove(event) {
          if ((slothCount >= 46) || (moveCount ===1)) {
            // console.log("sloth wins!");
            ////stops sloth from happening
          } else if (event.which==115) {
            $("#playerSloth").animate({left: "+=25"}, 20);
            slothCount ++;
            console.log(slothCount);
            if (slothCount === 46) {
              win("Sloth");
              $(".winning").append(('<img id="theImg" src="./slothwin.png" width="270" height="130"/> ' + ' <img id="theImg" src="./sloths.gif" />' ));
              $(".badgeSloth").append( + 1);
            }
          }
        });

        /////playerBear

        $(document).on("keypress", function bearMove(event) {
          if ((bearCount >= 46) || (moveCount ===1)) {
            // console.log("bear wins!");
          } else if (event.which==98) {
            $("#playerBear").animate({left: "+=25"}, 20);
            bearCount ++;
            console.log (bearCount);
            if (bearCount === 46) {
              win ("Bear");
              $(".winning").append(('<img id="theImg" src="./bearwin.gif" width="480" height="280"/> ' + ' <img id="theImg" src="./bearlywin.gif" width="300" height="200"/>' ));
              $(".badgeBear").append( + 1);
            }
          }
        });

        ///////playerKoala

        $(document).on("keypress", function koalaMove(event) {
          if ((koalaCount >= 46) || (moveCount ===1)) {
            // console.log("koala wins!");
          } else if (event.which==107) {
            $("#playerKoala").animate({left: "+=25"}, 20);
            koalaCount ++;
            console.log (koalaCount);
            if (koalaCount === 46) {
              win ("Koala");
              $(".winning").append(('<img id="theImg" src="./koalafied.png" width="270" height="300"/> ' + ' <img id="theImg" src="./koalty.gif" />' ));
              $(".badgeKoala").append( + 1);
            }
          }
        });



        ///////playerMonkey

        $(document).on("keypress", function monkeyMove(event) {
          if ((monkeyCount >= 46) || (moveCount ===1)) {
            // console.log("monkey wins!");
          } else if (event.which==109) {
            $("#playerMonkey").animate({left: "+=25"}, 20);
            monkeyCount ++;
            console.log (monkeyCount);
            if (monkeyCount === 46) {
              win ("Monkey");
              $(".winning").append(('<img id="theImg" src="../monkeywin.gif"/> ' + ' <img id="theImg" src="../monkeybusiness.gif" />' ));
              $(".badgeMonkey").append( + 1);
          }
         }
        });



        /////reset button ////
        $(".btn").on('click', function(event) {
          $(".jumbotron").each (function (event) {
             $(this).hide();
             ////reset .animate?? reset counter?
           });
         });



        // function end game?

        /// function scoreboard
          // $(#button).append(winCount + 1)

  });

});
