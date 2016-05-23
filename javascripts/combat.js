var Gauntlet = (function(battle) {

//Display the initial statistics for the player and the enemy.

battle.combatSetup = function(userClass, userName, userWeapon) {
    player = new Gauntlet.GuildHall[userClass];
    player.name = userName;
    player.weapon = new Gauntlet[userWeapon];
    $("#player_stats").html(`<p class="player_name">adventurer: ${player.name}</p> <p class="player_name">class: ${player.class}</p>
      <p>species: ${player.species}</p> <p>health: ${player.health}</p>
      <p>Vigor: ${player.vigor}</p>
      <p>Potency: ${player.potency}</p>
      <p>Richesse: ${player.richesse}</p>
      <p>Pomposity: ${player.pomposity}</p>
      <p>Social Grace: ${player.social_grace}</p>
      <p>weapon: ${player.weapon}</p>`);
  }

battle.displayStats = function (){
      $("#player_stats").html(`<p class="player_name">adventurer: ${player.name}</p> <p class="player_name">class: ${player.class}</p>
      <p>species: ${player.species}</p> <p>health: ${player.health}</p>
      <p>Vigor: ${player.vigor}</p>
      <p>Potency: ${player.potency}</p>
      <p>Richesse: ${player.richesse}</p>
      <p>Pomposity: ${player.pomposity}</p>
      <p>Social Grace: ${player.social_grace}</p>
      <p>weapon: ${player.weapon}</p>`);
       $("#enemy_stats").html(`<p class="player_name"> enemy: ${enemy.name} </p> <p class="player_name"> class: ${enemy.class}</p> <p> species: ${enemy.species}</p>
      <p>health: ${enemy.health} </p>
      <p>Filth: ${enemy.filth}</p>
      <p>Poverty: ${enemy.poverty}</p>
      <p>Hunger: ${enemy.hunger}</p>
      <p>Social Disease: ${enemy.social_disease}</p>
      <p>Damnedness: ${enemy.damnedness}</p>
      <p>weapon: ${enemy.weapon}</p>`);
}
battle.enemySetup = function() {
    var random = Math.floor(Math.random() * Gauntlet.GuildHall.allowedEnemyClasses.length);
    var enemyClass = Gauntlet.GuildHall.allowedEnemyClasses[random];
    enemy = new Gauntlet.GuildHall[enemyClass];
    enemy.generateWeapon();
    $("#enemy_stats").html(`<p class="player_name"> enemy: ${enemy.name} </p> <p class="player_name"> class: ${enemy.class}</p> <p> species: ${enemy.species}</p>
      <p>health: ${enemy.health} </p>
      <p>Filth: ${enemy.filth}</p>
      <p>Poverty: ${enemy.poverty}</p>
      <p>Hunger: ${enemy.hunger}</p>
      <p>Social Disease: ${enemy.social_disease}</p>
      <p>Damnedness: ${enemy.damnedness}</p>
      <p>weapon: ${enemy.weapon}</p>`);

}
//Have a button with the label "Attack".
 //Each time the attack button is clicked, the player's chosen character and the generated enemy shouLd
 //attack with their weapon, and once the damage is calculated, subtract that from the opponents' health.


battle.combat = function() {
var playerDamage = Math.floor(Math.random() * 10 + player.weapon.damage);
var enemyDamage =Math.floor(Math.random() * 10 + enemy.weapon.damage);
var playerPhrase =player.weapon.generatePhrase();
var enemyPhrase = enemy.weapon.generatePhrase();
console.log(playerPhrase);
$("#player_weapon").html(`<p class="weapon_display">${playerPhrase}</p><p class="weapon_display">Damage: ${playerDamage}</p>`);
console.log(playerDamage);
$("#enemy_weapon").html(`<p class="weapon_display">${enemyPhrase}</p><p class="weapon_display">Damage: ${enemyDamage}</p>`);
console.log(enemyDamage);
enemy.health -= playerDamage;
player.health -= enemyDamage;


Gauntlet.displayStats();

  if (enemy.health <= 0 && player.health <=0){
      alert("both died at the same time")
  } else if (enemy.health <= 0) {
      $('.attack'). disabled = true;
      alert(player.name + ' has slain ' + enemy.name);
        } else if (player.health <= 0) {
            $('.attack'). disabled = true;
            alert(enemy.name + ' has slain ' + player.name);
        };

}
return battle;

})(Gauntlet || {});










