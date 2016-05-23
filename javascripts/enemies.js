var Gauntlet = (function(aah){

  aah.GuildHall.Tosher = function() {
    this.name = "Tosher";
    this.health = this.health + 20;
    this.filth += 4;
    this.hunger += 4;
    this.poverty += 5;
    this.social_disease += 2;
    this.damnedness += 3;
  };
  aah.GuildHall.Tosher.prototype = new Gauntlet.Combatants.Peasant();

  aah.GuildHall.Mudlark = function() {
    this.name = "Mudlark"
    this.health = this.health + 10;
    this.filth += 3;
    this.hunger += 5;
    this.poverty += 3;
    this.social_disease += 5;
    this.damnedness += 2;
  };
  aah.GuildHall.Mudlark.prototype = new Gauntlet.Combatants.Peasant();

  aah.GuildHall.Pauper = function() {
    this.name = "Pauper"
    this.filth += 1;
    this.hunger += 6;
    this.poverty += 3;
    this.social_disease += 4;
    this.damnedness += 4;
  };
  aah.GuildHall.Pauper.prototype = new Gauntlet.Combatants.Peasant();

  return aah;
}(Gauntlet || {}));
