var Gauntlet = (function(aah){

  aah.Combatants.Orc = function() {
    this.health = this.health + 20;
    this.species = "Orc";
    this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

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

  aah.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

  return aah;

}(Gauntlet || {}));
