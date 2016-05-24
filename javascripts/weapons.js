
//base function used to generate weapons
//see line 43 in player.js

var Gauntlet = (function(ouch) {

    ouch.Weapon = function() {
      this.damage = 10;
      this.generatePhrase = function(){
        var random = Math.floor(Math.random() * (this.phrases.length - 1));
        var randomPhrase = this.phrases[random];
        return randomPhrase;
      };
    };

    ouch.your_Mother = function(){
      this.name = "Attacks on mother";
      this.phrases = [`"Your mother indulges in drink with such reckless abandon her ruddy cheeks could light the whole of London of a night."`,
                      `"Your mother is so corpulent her boudoir must be stocked with mended ship sails!"`,
                      `"Your mother’s appetite is so indefatigable that she finds famine in the most decadent of feasts!"`,
                      `"Your mother’s morals are so unscrupulous that the whole of London’s poor could be clothed with the abandoned garments of her suitors!"`,
                      `"Your mother’s phrenological examination warranted the doctor checking her arse for a tail that he might have missed!"`,
                      `"The sole approbation I can afford your mother is that she snores with such joie de vivre!"`
                      ];

    };
    ouch.your_Mother.prototype = new ouch.Weapon();

    ouch.curses = function(){
      this.name ="Curses";
      this.phrases = [`"May a thousand syphalitic camels spit in your cous cous!"`,
                      `"May the fleas of a thousand dogs color your smallclothes!"`,
                      `"May the flies of a thousand horse droppings land in your stew!"`,
                      `"May your wits be so dim that you cannot steal oxygen from the very air you breathe!"`
                      ];
    };
    ouch.curses.prototype = new ouch.Weapon();

    ouch.character_Attacks = function(){
      this.name = "Attacks on character";
      this.phrases = [`"Thou loathed issue of thy father's loins!"`,
                      `"Your hygiene is so utterly disastrous, your approach looked like the onset of an Arabian sandstorm!"`,
                      `"Step down. You are not even worthy to cross the path of my concubine!"`,
                      `"Avert your glare before it sullies my garments!"`,
                      `"Fetch me your rucksack so my man may thrash you with it!"`,
                      `"Should your offspring be any more wretched than you, biologists may well suspect the human species is stumbling drunkenly back from whence it came!"`,
                      `"Your vestments are so tattered, you would fare better wrapping your sickly frame in fishnets!"`,
                      `"Seeing you, wretch, I can hardly imagine a clumsier or more disjointed framework for the display of tawdry wares."`,
                      `"Your absent father is so unreliable, I’m surprised he was punctual enough to attend the occasion of your conception!"`,
                      `"I’ll wager you’ve begged enough petty coin to armor an elephant."`
                      ];
    };
    ouch.character_Attacks.prototype = new ouch.Weapon();

    ouch.rotten_fruit = function(){
      this.name = "Rotten Fruit";
      this.phrases = ["Hurls a half eaten, rotten tomato!", "Tosses a molded pear!"];
    };
    ouch.rotten_fruit.prototype = new ouch.Weapon();

    ouch.excrement = function(){
      this.name = "excrement";
      this.phrases = ["Threateningly wields their own feces, while glaring wildly!", "Tosses excrement at you!"];
    };
    ouch.excrement.prototype = new ouch.Weapon();


  return ouch;

})(Gauntlet || {});
