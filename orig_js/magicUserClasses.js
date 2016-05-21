
/*
  Base function for a player, or enemy, magic class (profession)
 */

var Gauntlet = (function(brains) {
  brains.GuildHall = {};

  //BASE CLASS
  brains.GuildHall.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    }
  };

    brains.GuildHall.Mage = function() {
      this.name = "Mage";
      this.magical = true;
      this.healthBonus = this.healthBonus - 10;
      this.strengthBonus = this.strengthBonus - 20;
      this.intelligenceBonus = this.intelligenceBonus + 20;
    };
    brains.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();

      brains.GuildHall.Shaman = function() {
        this.name = "Shaman";
        this.healthBonus = this.healthBonus + 5;
        this.strengthBonus = this.strengthBonus - 10;
        this.intelligenceBonus = this.intelligenceBonus + 20;
      };
      brains.GuildHall.Shaman.prototype = new Gauntlet.GuildHall.Mage();

      brains.GuildHall.Wizard = function() {
        this.name = "Wizard";
        this.healthBonus = this.healthBonus - 15;
        this.strengthBonus = this.strengthBonus - 25;
        this.intelligenceBonus = this.intelligenceBonus + 40;
      };
      brains.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();

      brains.GuildHall.Conjurer = function() {
        this.name = "Conjurer";
        this.healthBonus = this.healthBonus - 5;
        this.strengthBonus = this.strengthBonus - 10;
        this.intelligenceBonus = this.intelligenceBonus + 10;
      };
      brains.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();

      brains.GuildHall.Sorcerer = function() {
        this.name = "Sorcerer";
        this.healthBonus = this.healthBonus - 5;
        this.strengthBonus = this.strengthBonus - 20;
        this.intelligenceBonus = this.intelligenceBonus + 30;
      };
      brains.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();

  return brains;
})(Gauntlet || {})
