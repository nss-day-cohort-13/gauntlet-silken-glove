
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

    ouch.Dagger = function() {
      this.name = "dagger";
      this.damage = 4;
      this.hands = 1;
    };
    ouch.Dagger.prototype = new ouch.Weapon();

    ouch.BroadSword = function() {
      this.name = "broad sword";
      this.damage = 14;
      this.hands = 2;
    };
    ouch.BroadSword.prototype = new ouch.Weapon();

    ouch.WarAxe = function() {
      this.name = "war axe";
      this.damage = 18;
      this.hands = 2;
    };
    ouch.WarAxe.prototype = new ouch.Weapon();

  return ouch;
})(Gauntlet || {})
