# app.js

The app.js file creates some basic functionality for the site itself, but it has little to do with anything gameplay-related. However, it has the only hint we're given about how battle should play out per the original designer's plans. The fighting is never resolved, but the character generation stuff is a good enough place to start. Beyond that, **the bulk of this script is concerned with defining the logic for navigating between different HTML sections.**

### Outline
So broadly speaking, here's what's happening in app.js:
  1. In the console, a player-character and a monster get weapons, and a spell (that does nothing but calculate random elemental damage) is cast.
  2. The first page is shown when the document is ready, and event listeners are added to build the navigation logic.
  3. Logic is added to govern which pages/sections will display when the user is navigating through character creation.
  4. Logic is added to allow the player to go to a previous page when the back button is clicked.

### Summary of functionality
##### Lines 1-18: Combat test
  * A new instance of `Gauntlet.Combatants.Human` is created in the variable `warrior`, and the warrior is given a `WarAxe` as a weapon. Similarly, a new instance of `Gauntlet.Combatants.Orc` is created in the variable `orc`, and the orc is given a `Broadsword` as a weapon.
  * A random class is generated for both the human and the orc, and both are introduced by a sentence created using the `.toString()` method.
  * A new instance of `Gauntlet.Spellbook.Sphere` is created in the variable spell. Elemental damage is calculated when the object is instantiated, but no damage is applied, and combat is not resolved. The spell cast is detailed with the `.toString()` method.

##### Lines 21-[end]: Document ready
  * When `document` is loaded, the HTML section with the id `#player-setup` is displayed.
  * Click listeners are added to navigation links with anonymous functions that define what pages are hidden and displayed.

##### Lines 27-48: Navigating forward
  * All elements with the class name `.card__link` are given click listeners with an anonymous callback.
  * The variable `nextCard` is set to the value of the "next" attribute on the `.card__link` clicked.
  * `moveAlong` is set to false, which will prevent the user from navigating forward while the name input field is empty.
  * The `switch/case` block tries to match the class name stored in `nextCard` with a card class that the user wants to navigate to. If `nextCard` matches with either `.card--class` or `card--weapon`, **and** if the name input field is not empty, `moveAlong` is set to true.
  * Finally, if `moveAlong` is true, the app hides all HTML cards. Then, it shows the card with the class name that is stored in `nextCard`.

##### Lines 50-59: Navigating backward
  * All elements with the class name `.card__back` are given click listeners with an anonymous callback.
  * The variable `previousCard` is set to the value of the "previous" attribute on the `.card__back` clicked.
  * The app hides all HTML cards. Then, it shows the card with the class name that is stored in `previousCard`.

### Elements, variables, and functions
##### DOM elements
###### `$("#player-setup")`
This is the section with a class of `.card` that displays on page load.

###### `$("#player-name")`
The text input field on the intial page.

###### `$(".card__link")`
All buttons dealing with navigation have the class that's selected here. Some of these have a "next" attribute that will eventually get stored in `nextCard`. Some also have a "previous" attribute that will eventually get stored in `previousCard`.

##### Named functions
###### `new Gauntlet.Combatants.Human()`
Defines a new object with human characteristics that inherits properties from `Player`, `Combatants`, and `Gauntlet` (see player.js, line 66).

###### `new Gauntlet.Combatants.Orc()`
Defines a new object with orc characteristics that inherits properties from `Monster`, `Combatants`, and `Gauntlet` (see enemies.js, line 1).

###### `new Gauntlet.Spellbook.Sphere()`
Defines a new spell object that randomizes both damage type and number.

###### `.toString()`
Concatenates properties on combatant and spell objects into a string that reads like a sentence. This property is defined on `Gauntlet.Combantants`--so it is available to all combatants down the chain--and `Gauntlet.Spell`, which `Gauntlet.Sphere` takes as prototype.

###### `.setWeapon()`
Defined on `Gauntlet.Combatants.Player.prototype` (in player.js, line 43). This function accepts a Weapon constructor function as an argument (see weapons.js). `new WarAxe()` is passed in on line 5, and `new Broadsword()` is passed in on line 11.

###### `.generateClass()`
Defined on `Gauntlet.Combatants.Player.prototype` (in player.js, line 47). This function randomizes a class for the player's character.

##### Variables
###### `warrior`
New instance of `Gauntlet.Combatants.Human` used in the combat test.

###### `orc`
New instance of `Gauntlet.Combatants.Orc` used in the combat test.

###### `spell`
New instance of `Gauntlet.Spellbook.Spell` used in the combat test.

###### `nextCard`
When one of the navigation buttons is clicked (other than "Back"), this variable's value is set to the value of the "next" attribute on the link that was clicked. The "next" attribute holds the name of a card class that should display next. The two card classes that appear in this script are `.card--class` and `.card--weapon`.

###### `previousCard`
When one of the "back" navigation buttons is clicked, this variable's value is set to the value of the "previous" attribute on the link that was clicked. The "previous" attribute holds the name of the card class that came before.

###### `moveAlong`
This variable holds a boolean that will determine whether the user can move forward through the site. Here, it only checks to see if `$("#player-name")` is not an empty string.
