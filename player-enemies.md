# player.js

player.js contains most of the prototypal tree necessary to create both the player and monster combatant. This JavaScript file is set up to be modular, with all functions prefixed with "Gauntlet.Combatants".

#### Line 11-57
define the base object **Player** for  either a human player or a monster. this object contains the stat attributes, species, class and weapon.

This function's prototype object contains two functions, one to generate a random class (lines 47-57) and one to set a weapon. (lines 43-45).

#### line 63-88
lines 63-75 create a new function **Human** that inherits from **Player**. This is the game player's character.

Lines 82-88 create a new function **Monster** which inherits from **Player**. this is the enemy character.

# enemies.js

creates a function **Orc** which inherits from **Monster**. this function re- generates the combatants class to an allowed class, which is specified in this function.

