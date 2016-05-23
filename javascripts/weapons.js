
//base function used to generate weapons
//see line 43 in player.js

var Gauntlet = (function(ouch) {

    ouch.Weapon = function() {
      this.name = "bare hands";
      this.damage = 1;
      this.hands = 2;

      this.toString = function() {
        return this.name;
      }
    };

    ouch.Dirk = function() {
      this.name = "Dirk";
      this.damage = 4;
      this.hands = 1;
    };
    ouch.Dirk.prototype = new ouch.Weapon();

    ouch.Rapier = function() {
      this.name = "broad sword";
      this.damage = 14;
      this.hands = 2;
    };
    ouch.Rapier.prototype = new ouch.Weapon();

    ouch.WarAxe = function() {
      this.name = "war axe";
      this.damage = 18;
      this.hands = 2;
    };
    ouch.WarAxe.prototype = new ouch.Weapon();

  return ouch;
})(Gauntlet || {})
