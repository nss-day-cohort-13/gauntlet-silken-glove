var Gauntlet = (function(aah){

  aah.GuildHall.Tosher = function() {
    this.name = "Tosher";
    this.health = this.health + 20;
    this.poverty += 5;
    this.allowedWeapon = ["Excrement", "Tomato", "Damnedness"];
    this.generateWeapon = function() {
      var random = Math.round(Math.random()* (this.allowedWeapon.length - 1));
      var randomWeapon = this.allowedWeapon[random];
      this.weapon = new Gauntlet[randomWeapon]();
    }
  };
  aah.GuildHall.Tosher.prototype = new Gauntlet.Combatants.Peasant();

  aah.GuildHall.Mudlark = function() {
    this.name = "Mudlark"
    this.health = this.health + 10;
    this.filth += 5;
    this.allowedWeapon = ["Excrement", "Tomato", "Damnedness"];
    this.generateWeapon = function() {
      var random = Math.round(Math.random()* (this.allowedWeapon.length - 1));
      var randomWeapon = this.allowedWeapon[random];
      this.weapon = new Gauntlet[randomWeapon]();
    }
  };
  aah.GuildHall.Mudlark.prototype = new Gauntlet.Combatants.Peasant();

  aah.GuildHall.Pauper = function() {
    this.name = "Pauper"
    this.hunger += 5;
    this.allowedWeapon = ["Excrement", "Tomato", "Damnedness"];
    this.generateWeapon = function() {
      var random = Math.round(Math.random()* (this.allowedWeapon.length - 1));
      var randomWeapon = this.allowedWeapon[random];
      this.weapon = new Gauntlet[randomWeapon]();
    }
  };
  aah.GuildHall.Pauper.prototype = new Gauntlet.Combatants.Peasant();

  return aah;

}(Gauntlet || {}));
