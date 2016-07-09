
$(document).on("ready", function() {
    console.log ("sanity check");

    $(document).on("keypress", function slothMove(event) {
      if (event.which==115) {
        $("#playerSloth").animate({left: "+=100"}, "fast");
        console.log ("key s");
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
