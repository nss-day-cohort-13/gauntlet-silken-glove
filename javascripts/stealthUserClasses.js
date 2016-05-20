
/*
  Base function for a player, or enemy, magic class (profession)
 */

var Gauntlet = (function(feets) {
  feets.GuildHall = {};

  //BASE CLASS
  feets.GuildHall.playerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    }
  };

    feets.GuildHall.backStabber = function() {
      this.name = "backStabber";
      this.healthBonus = this.healthBonus - 0;
      this.strengthBonus = this.strengthBonus - 10;
      this.intelligenceBonus = this.intelligenceBonus + 10;
    };
    feets.GuildHall.backStabber.prototype = new Gauntlet.GuildHall.PlayerClass();

      feets.GuildHall.Thief = function() {
        this.name = "Thief";
        this.healthBonus = this.healthBonus - 5;
        this.strengthBonus = this.strengthBonus - 10;
        this.intelligenceBonus = this.intelligenceBonus + 5;
      };
      feets.GuildHall.Thief.prototype = new Gauntlet.GuildHall.backStabber();

      feets.GuildHall.Ninja = function() {
        this.name = "Ninja";
        this.healthBonus = this.healthBonus + 10;
        this.strengthBonus = this.strengthBonus + 5;
        this.intelligenceBonus = this.intelligenceBonus + 15;
      };
      feets.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.backStabber();

      feets.GuildHall.Assassin = function() {
        this.name = "Assassin";
        this.healthBonus = this.healthBonus - 10;
        this.strengthBonus = this.strengthBonus - 5;
        this.intelligenceBonus = this.intelligenceBonus + 20;
      };
      feets.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.backStabber();

 return feets;
})(Gauntlet || {})
