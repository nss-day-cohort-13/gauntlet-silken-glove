/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that inherits from Gaunlet.Spellbook and defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

//randomizes type of magic damage
console.log(this.name)
  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

//concatenates name, type , and damage of spell
  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental sphere that can be cast by a magic class

 */

 //creats a new type of spell named sphere and randomizes damage from 10-20
 // sphere inherits from Gauntlet.Spellbook.Spell()
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  //randomizes damage , and damage type
  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];

};
Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();
