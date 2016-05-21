
/*
  Base function for a player, or enemy, fighter class (profession)
 */

var Gauntlet = (function(money) {
  money.GuildHall = {};

  money.GuildHall.RobberBaron = function() {
    this.name = "Robber Baron"
    this.richesse += 5;
  };
  money.GuildHall.RobberBaron.prototype = new Gauntlet.GuildHall.Aristocrat();

  money.GuildHall.LandedGentry = function() {
    this.name = "LandedGentry";
    this.vigor += 5;
  };
  money.GuildHall.LandedGentry.prototype = new Gauntlet.GuildHall.Aristocrat();

  money.GuildHall.ChivalrousCourter = function() {
    this.name = "ChivalrousCourter";
    this.potency += 5;
  };
  money.GuildHall.ChivalrousCourter.prototype = new Gauntlet.GuildHall.Aristocrat();

  return money;

})(Gauntlet || {})
