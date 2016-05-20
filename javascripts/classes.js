/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "Beggar";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
// Gauntlet.GuildHall.Fighter = function() {
//   this.healthBonus = 20;
//   this.strengthBonus = 10;
// };
// Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


// Gauntlet.GuildHall.Warrior = function() {
//   this.name = "Warrior";
//   this.healthBonus = this.healthBonus + 25;
//   this.strengthBonus = this.strengthBonus + 30;
// };
// Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


// Gauntlet.GuildHall.Valkyrie = function() {
//   this.name = "Valkyrie";
//   this.healthBonus = this.healthBonus + 20;
//   this.strengthBonus = this.strengthBonus + 10;
// };
// Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


// Gauntlet.GuildHall.Berserker = function() {
//   this.name = "Berserker";
//   this.healthBonus = this.healthBonus + 35;
//   this.strengthBonus = this.strengthBonus + 20;
// };
// Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


// Gauntlet.GuildHall.Monk = function() {
//   this.name = "Monk";
//   this.healthBonus = this.healthBonus + 10;
//   this.strengthBonus = this.strengthBonus + 40;
// };
// Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();





/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

