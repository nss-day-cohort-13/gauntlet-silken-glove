/*
  Create global variables to hold player name, class and weapon,
  to be defined as player navigates through character creation.

  Create global variables for what will become the player character
  and the enemy.
*/

var userName = "";
var userClass = "";
var userWeapon = "";
var player;
var enemy;

$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();


  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    nextPage(nextCard)
  });

  function nextPage (nextCard) {
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        userName = $("#player-name").val();
        console.log("userName: ", userName);
        break;
      case "card--weapon":
        moveAlong = (userClass !== "");
        break;
      case "card--battleground":
        moveAlong = (userWeapon !== "");
        Gauntlet.combatSetup(userClass, userName, userWeapon);
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  }
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

  /*
    When a class button is clicked, the text of the button
    is stored in userClass.
  */
  $(".class__link").click(function(e){
    userClass = $(this).attr("name");
  });

  /*
    When a weapon button is clicked, the text of the button
    is stored in userWeapon.
  */
  $(".weapon__link").click(function(e){
    userWeapon = $(this).attr("name");
  });

  /*
    When the attack button is clicked, the function to resolve
    combat is triggered.
  */
  $(".launchAttack").click(Gauntlet.combat);


//Player Name Text Field Listener.
//This will listen for keyup on the Enter key
//while the the Enter Name text field is selected
//and will advance the player to the Class Selection screen.
  $("#player-name").keyup(function(e){
    if (e.which === 13) {
      nextPage("card--class");
    }
  });

  $(".btn--blue").click(function(e) {
    var nextCard = $(this).attr("next");
    nextPage(nextCard)
  });

 $(".btn--yellow").click(function(e) {
    var nextCard = $(this).attr("next");
    nextPage(nextCard)
  });

});




//Button Listeners for All Three Player Classes.
//This will listen for a click on those buttons and,
//on click, will advance player to the Weapon Selection Screen.












