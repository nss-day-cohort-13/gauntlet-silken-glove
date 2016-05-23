/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(aug){

  aug.Combatants = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  aug.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;
    this.name = this.name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);
  };

  aug.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

  /*
    Define the base properties for a human in a
    constructor function.
   */
  aug.Combatants.Aristocrat = function() {
    this.species = "Aristocrat";
    this.vigor = 10;
    this.potency = 10;
    this.richesse = 10;
    this.allowedWeapon = ["your_Mother", "Curses", "character_Attacks"];
  };
  aug.Combatants.Aristocrat.prototype = new aug.Combatants.Player();


  /*
    Define the base properties for a monster in a
    constructor function.
   */
  aug.Combatants.Peasant = function() {
    this.health = this.health - 30;
    this.filth = 10;
    this.hunger = 10;
    this.poverty = 10;
    this.allowedClasses = ["Tosher", "Mudlark", "Pauper"];
    this.allowedWeapon = ["your_Mother", "Curses", "character_Attacks"];
    this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
    };
    this.generateWeapon = function() {
      var random = Math.round(Math.random()* (this.allowedWeapon.length - 1));
      var randomWeapon = this.allowedWeapon[random];
      this.weapon = new Gauntlet[randomWeapon]();
    }
  };

  aug.Combatants.Peasant.prototype = new aug.Combatants.Player();

  return aug;

}(Gauntlet || {}));

