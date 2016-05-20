
// var Gauntlet = Gauntlet || {};
// Gauntlet.GuildHall = {};

// //BASE CLASS
// Gauntlet.GuildHall.PlayerClass = function() {
//   this.name = "Beggar";
//   this.healthBonus = 0;
//   this.strengthBonus = 0;
//   this.intelligenceBonus = 0;
//   this.magical = false;

//   this.toString = function() {
//     return this.name;
//   }
// };

// /*
//     MAGICAL CLASSES
//       - Shaman
//       - Wizard
//       - Conujurer
//       - Sorcerer
//  */
// Gauntlet.GuildHall.Mage = function() {
//   this.name = "Mage";
//   this.magical = true;
//   this.healthBonus = this.healthBonus - 10;
//   this.strengthBonus = this.strengthBonus - 20;
//   this.intelligenceBonus = this.intelligenceBonus + 20;
// };
// Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();


// Gauntlet.GuildHall.Shaman = function() {
//   this.name = "Shaman";
//   this.healthBonus = this.healthBonus + 5;
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 20;
// };
// Gauntlet.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();


// Gauntlet.GuildHall.Wizard = function() {
//   this.name = "Wizard";
//   this.healthBonus = this.healthBonus - 15;
//   this.strengthBonus = this.strengthBonus - 25;
//   this.intelligenceBonus = this.intelligenceBonus + 40;
// };
// Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


// Gauntlet.GuildHall.Conjurer = function() {
//   this.name = "Conjurer";
//   this.strengthBonus = this.strengthBonus - 10;
//   this.intelligenceBonus = this.intelligenceBonus + 10;
// };
// Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


// Gauntlet.GuildHall.Sorcerer = function() {
//   this.name = "Sorcerer";
//   this.healthBonus = this.healthBonus - 5;
//   this.strengthBonus = this.strengthBonus - 20;
//   this.intelligenceBonus = this.intelligenceBonus + 30;
// };
// Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();