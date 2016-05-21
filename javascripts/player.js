/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.name = this.name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

// Gauntlet.Combatants.Player.prototype.generateClass = function() {
//   // Get a random index from the allowed classes array
//   var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

//   // Get the string at the index
//   var randomClass = this.allowedClasses[random];

//   // Composes the corresponding player class into the player object
//   this.class = new Gauntlet.GuildHall[randomClass]();

//   // Add the health bonus
//   this.health += this.class.healthBonus;
//   return this.class;
// };

/*
  Define the base properties for a human in a
  constructor function.
 */
Gauntlet.Combatants.Aristocrat = function() {
  this.species = "Aristocrat";
  this.vigor = 90;
  this.potency = 90;
  this.richesse = 90;
};
Gauntlet.Combatants.Aristocrat.prototype = new Gauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */
Gauntlet.Combatants.Peasant = function() {
  this.health = this.health - 30;
  this.filth = 90;
  this.hunger = 90;
  this.poverty = 90;
  this.allowedClasses = ["Tosher", "Mudlark", "Pauper"];
  this.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();
  return this.class;
  }
};

Gauntlet.Combatants.Peasant.prototype = new Gauntlet.Combatants.Player();

