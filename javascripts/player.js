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
    this.enemyNames = ["Tickle-brained Tim", "Saucy Sally", "Pungent Pam", "Bootless Bill", "Dankish Dan", "Incestuous Irene"]
    var random = Math.floor(Math.random() * (this.enemyNames.length));
    var randomEnemy = this.enemyNames[random];
    this.species = null;
    this.class = null;
    this.weapon = null;
    this.name = this.name || randomEnemy;
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
    this.pomposity = 10;
    this.social_grace = 10;
    this.allowedWeapon = ["your_Mother", "Curses", "character_Attacks"];
  };
  aug.Combatants.Aristocrat.prototype = new aug.Combatants.Player();


  /*
    Define the base properties for a monster in a
    constructor function.
   */
  aug.Combatants.Peasant = function() {
    this.species = "Peasant";
    this.health = this.health - 20;
    this.filth = 10;
    this.hunger = 10;
    this.poverty = 10;
    this.social_disease = 10;
    this.damnedness = 10;
    this.allowedWeapon = ["excrement", "rotten_fruit"];
    this.generateWeapon = function() {
      var random = Math.floor(Math.random()* (this.allowedWeapon.length - 1));
      var randomWeapon = this.allowedWeapon[random];
      this.weapon = new Gauntlet[randomWeapon]();
    }
  };

  aug.Combatants.Peasant.prototype = new aug.Combatants.Player();

  return aug;

}(Gauntlet || {}));
