/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new Gauntlet.WarAxe());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Gauntlet.BroadSword());
console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());

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
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        userName = $("#player-name").val();
        console.log("userName: ", userName);
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

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
    userClass = $(this).children("span.btn__text").text();
    console.log("userClass: ", userClass);
  });

  /*
    When a weapon button is clicked, the text of the button
    is stored in userWeapon.
  */
  $(".weapon__link").click(function(e){
    userWeapon = $(this).children("span.btn__text").text();
    console.log("userWeapon: ", userWeapon);
    Gauntlet.combatSetup();
  });

  /*
    When the attack button is clicked, the function to resolve
    combat is triggered.
  */
  $(".attack").click(Gauntlet.combat);

});
