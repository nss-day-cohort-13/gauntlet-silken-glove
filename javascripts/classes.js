
/*
  Base function for a player, or enemy, fighter class (profession)
 */

var Gauntlet = (function(muscles) {
  muscles.GuildHall = {};

  //BASE CLASS
  muscles.GuildHall.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    }
  };

    muscles.GuildHall.Fighter = function() {
      this.healthBonus = 20;
      this.strengthBonus = 10;
    };
    muscles.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();

    muscles.GuildHall.Warrior = function() {
      this.name = "Warrior";
      this.healthBonus = this.healthBonus + 25;
      this.strengthBonus = this.strengthBonus + 30;
    };
    muscles.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();

    muscles.GuildHall.Valkyrie = function() {
      this.name = "Valkyrie";
      this.healthBonus = this.healthBonus + 20;
      this.strengthBonus = this.strengthBonus + 10;
    };
    muscles.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();

    muscles.GuildHall.Berserker = function() {
      this.name = "Berserker";
      this.healthBonus = this.healthBonus + 35;
      this.strengthBonus = this.strengthBonus + 20;
    };
    muscles.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();

    muscles.GuildHall.Monk = function() {
      this.name = "Monk";
      this.healthBonus = this.healthBonus + 10;
      this.strengthBonus = this.strengthBonus + 40;
    };
    muscles.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();

  return muscles;
})(Gauntlet || {})



/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */

