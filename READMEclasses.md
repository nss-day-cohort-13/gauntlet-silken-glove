# classes.js

classes.js is all about prototypal inhereitance. The file gies us (appropriately enough) the character classes from which a player can choose. Enemy classes are not included in classes.js. The base player class function is ```Gauntlet.GuildHall.PlayerClass```. It defines the base class as "Beggar" ```this.name = "Beggar";``` (lines 10-18). It appears to be the default player class if no class is user-defined. Beggar has several other properties defined on it, as follows.
* ```.healthBonus```
* ```.strenghtbonus```
* ```.intelligenceBonus```, and
* ```.magical```, which defaults to "false".

Those three bonuses default to zero.

We are then given two groups of more specific character classes: "Fighter Classes" (lines 29-65) and "Magical Classes" (lines 75-117). A third group, "Stealth Classes", is referred to in comments but not yet coded. Each of the Fighter and Magical class groups has its own base class function,
* ```Gauntlet.GuildHall.Fighter```(line 29)(hereinafter "Fighter") and
* ```Gauntlet.GuildHall.Mage```(line 75)(hereinafter "Mage"),

respectively, that inherits from the Beggar class and serves as a template for the class group.

The base Fighter class directly inherits only ```.healthBonus``` and ```.strenghtbonus``` as ```.hasOwnProperty``` from Beggar whilst the Mage directly inherits all four of Beggar's stat properties. Predictibly, ```this.magical = true``` for the Mage class and its heirs.

The Fighter and Mage set new default bonuses for the health, strength and intel properties. Subsequent, more specialised classes in their respective groups inherit from Fighter and Mage and further modify those properties.

## Things That Exist

* ```Gountlet.GuildHall = {}``` is the baseline object.

## Named Functions

* ```Gauntlet.GuildHall.PlayerClass```
    * ```Gauntlet.GuildHall.Fighter```
        * ```Gauntlet.GuildHall.Warrior```
        * ```Gauntlet.GuildHall.Valkyrie```
        * ```Gauntlet.GuildHall.Berserker```
        * ```Gauntlet.GuildHall.Monk```
    * ```Gauntlet.GuildHall.Mage```
        * ```Gauntlet.GuildHall.Shaman```
        * ```Gauntlet.GuildHall.Wizard```
        * ```Gauntlet.GuildHall.Conjurer```
        * ```Gauntlet.GuildHall.Sorcerer```
