
//base function used to generate weapons
//see line 43 in player.js

var Gauntlet = (function(ouch) {

    ouch.Weapon = function() {
      this.name = "bare hands";
      this.damage = 1;
      this.hands = 2;

      this.generatePhrase = function(){
        var random= Math.round(Math.random() * (this.phrases.length - 1));
        var randomPhrase = this.phrases[random];
        console.log(randomPhrase);
      };

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

    ouch.your_Mother = function(){
      this.name = "Attacks on mother";
      this.damage = 10;
      this.phrases = ['"Your mother indulges in drink with such reckless abandon her ruddy cheeks could light the whole of London of a night".',
                      '"Your mother is so corpulent her boudoir must be stocked with mended ship sails"!',
                      '"Your mother’s appetite is so indefatigable that she finds famine in the most decadent of feasts"!',
                      '"Your mother’s morals are so unscrupulous that the whole of London’s poor could be clothed with the abandoned garments of her suitors"!',
                      '"your mother’s phrenological examination warranted the doctor checking her arse for a tail that he might have missed"!'];

    };
    ouch.your_Mother.prototype = new ouch.Weapon();

    ouch.Curses = function(){
      this.name ="Curses";
      this.damage = 15;
      this.phrases = ['"May a thousand syphalitic camels spit in your cous cous"',
                      '"May the fleas of a thousand dogs color your smallclothes"',
                      '"May the flies of a thousand horse droppings land in your stew"',
                      '"May your wits be so dim that you cannot steal oxygen from the very air you breathe"!'];
    };
    ouch.Curses.prototype = new ouch.Weapon();

    ouch.character_Attacks = function(){
      this.name = "Attacks on character";
      this.damage = 5;
      this.phrases = ["'Thou loathed issue of thy father's loins'!",
                      '"Your hygiene is so utterly disastrous, your approach looked like the onset of an Arabian sandstorm"!',
                      '"Step down. You are not even worthy to cross the path of my concubine"!',
                      '"Avert your glare before it sullies my garments"!',
                      '"Fetch me your rucksack so my man may thrash you with it"!',
                      '"Should your offspring be any more wretched than you, biologists may well suspect the human species is stumbling drunkenly back from whence it came"!'];
    };
    ouch.character_Attacks.prototype = new ouch.Weapon();

  return ouch;
})(Gauntlet || {})
