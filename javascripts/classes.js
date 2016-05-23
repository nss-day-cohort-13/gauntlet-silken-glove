
/*
  Base function for a player, or enemy, fighter class (profession)
 */

var Gauntlet = (function(money) {

  money.GuildHall = {};

  money.GuildHall.RobberBaron = function() {
    this.class = "Robber Baron"
    this.vigor += 2;
    this.potency += 2;
    this.richesse += 4;
    this.pomposity = this.pomposity + 7;
    this.social_grace += 3;
  };
  money.GuildHall.RobberBaron.prototype = new Gauntlet.Combatants.Aristocrat();

  money.GuildHall.LandedGentry = function() {
    this.class = "LandedGentry";
    this.vigor += 1;
    this.potency += 8;
    this.richesse += 0;
    this.pomposity += 4;
    this.social_grace += 5;
  };
  money.GuildHall.LandedGentry.prototype = new Gauntlet.Combatants.Aristocrat();

  money.GuildHall.ChivalrousCourter = function() {
    this.class = "ChivalrousCourter";
    this.vigor -= 1;
    this.potency += 4;
    this.richesse += 9;
    this.pomposity += 4;
    this.social_grace += 3;
  };
  money.GuildHall.ChivalrousCourter.prototype = new Gauntlet.Combatants.Aristocrat();

  return money;

}(Gauntlet || {}));
