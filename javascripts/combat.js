var Gauntlet = (function(battle) {

Gauntlet.combat = {};


//Display the initial statistics for the player and the enemy.

battle.combat.Setup = function(userClass, userName, userWeapon) {
    player = new Gauntlet.Combatants.Human();
    console.log("player", player)
    player.name = userName;
    player.class = new Gauntlet.GuildHall[userClass]();
    player.weapon = new Gauntlet[userWeapon];
    $("#player_stats").html(`<p>adventurer: ${player.name}</p> <p>class: ${player.class}</p>
      <p>species: ${player.species}</p> <p>health: ${player.health}</p> <p>strength: ${player.strength}</p>
      <p>weapon: ${player.weapon}</p>`)
  }


battle.combat.enemySetup = function() {
    var enemy = new Gauntlet.Combatants.Monster();
    console.log("enemy", enemy)
    $("#enemy_stats").html(`<p> enemy: </p> <p> class: ${enemy.class}</p> <p> species: ${enemy.species}</p>
      <p> health: ${enemy.health} </p>  <p> strength: ${enemy.strength} </p> <p>weapon: ${player.weapon}</p>`)

}
//Have a button with the label "Attack".
 //Each time the attack button is clicked, the player's chosen character and the generated enemy shouLd
 //attack with their weapon, and once the damage is calculated, subtract that from the opponents' health.



// battle.combat.attack = function() {
// }



// battle.combat.weapon = function() {
//   this.name = null;
//   this.damage = Math.floor(Math.random() * 10 + 10);
// }



//As soon as either combatant reaches health of 0, disable the attack button and annouce the winner.

//     if (enemy.health <= 0 || player.health <=0) {
//     $('.attack'). disabled = true;
//     alert(player + 'has slain' + enemy);
// }

return battle

})(Gauntlet || {});










