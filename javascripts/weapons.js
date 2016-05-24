
//base function used to generate weapons
//see line 43 in player.js

var Gauntlet = (function(ouch) {

    ouch.Weapon = function() {
      this.damage = 10;
      this.vigorBonus = 0;
      this.potencyBonus = 0;
      this.richesseBonus = 0;
      this.pomposityBonus = 0;
      this.graceBonus = 0;
      this.generatePhrase = function(){
        var random = Math.floor(Math.random() * (this.phrases.length - 1));
        var randomPhrase = this.phrases[random];
        return randomPhrase;
      };
    };

    ouch.your_Mother = function(){
      this.name = "Attacks on mother";
      this.vigorBonus = 1;
      this.richesseBonus = 1;
      this.phrases = [`"Your mother indulges in drink with such reckless abandon her ruddy cheeks could light the whole of London of a night."`,
                      `"Your mother is so corpulent her boudoir must be stocked with mended ship sails!"`,
                      `"Your mother’s appetite is so indefatigable that she finds famine in the most decadent of feasts!"`,
                      `"Your mother’s morals are so unscrupulous that the whole of London’s poor could be clothed with the abandoned garments of her suitors!"`,
                      `"Your mother’s phrenological examination warranted the doctor checking her arse for a tail that he might have missed!"`,
                      `"The sole approbation I can afford your mother is that she snores with such joie de vivre!"`
                      `"Your mother smells of linden trees!"`
                      `"Your mother is so corpulant that the new Ministry of Transport has proposed to grease the omnibus wheels with her shadow."`
                      `"I saw your mother in an opium den wearing a green hat!"`
                      `"Your mother is so fat that she requires a clipper ship to trim her hair."`
                      `"Your mother is so hirsute that Sir Shackleton specified her pelt to supply his expidition."`
                      ];

    };
    ouch.your_Mother.prototype = new ouch.Weapon();

    ouch.curses = function(){
      this.name = "Curses";
      this.potencyBonus = 1;
      this.graceBonus = 1;
      this.phrases = [`"May a thousand syphalitic camels spit in your cous cous!"`,
                      `"May the fleas of a thousand dogs color your smallclothes!"`,
                      `"May the flies from a thousand horse droppings land in your stew!"`,
                      `"May your wits be so dim that you cannot steal oxygen from the very air you breathe!"`,
                      `"Damn your seventh grandmother!"`
                      `"May the stench of a thousand linden trees perfume your collar!"`
                      `"May a thousand tax collectors of ten thousand audits find you eating the Queen's venison."`
                      `"May your daughter inherit your nose and your son your breasts."`
                      `"May you be visited on your death bed by everyone who now thinks you pretty."`
                      `"'Tis true that I am fat, but you are ugly and I can diet."`
                      `"'Tis said that beauty is but skin deep but your kind of ugly goes verily to the bone."`
                      `"God is omnipresent. A louse cannot fall from your pustulent scalp without God seeing and blessing the creature he loves for having escaped."`
                      ];
    };
    ouch.curses.prototype = new ouch.Weapon();

    ouch.character_Attacks = function(){
      this.name = "Attacks on character";
      this.pomposityBonus = 1;
      this.richesseBonus = 1;
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
                      `"Oh! Thou unsightly leper queen! May the cleansing waters of the sea wash thee away into little bits."`
                      `"How is a peasant dog like a tree? They both lose their bark when their dead!"`
                      `"You have a face like a salad."`
                      `"Like a dying fire, you leave your spouse cold by going out at night."`
                      `"Like a ship lying at the wharf, you stretch out in a pool of your own making waiting for your fat belly to be filled by the labor of honest men."`
                      `"Like a bad fireworks you go off too soon."`
                      `"Like a cheap cupboard door you have become loose from an excess of banging."`
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
