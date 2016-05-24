var Gauntlet = (function(battle) {

//Display the initial statistics for the player and the enemy.

battle.combatSetup = function(userClass, userName, userWeapon) {
  player = new Gauntlet.GuildHall[userClass];
  player.name = userName;
  player.weapon = new Gauntlet[userWeapon];
  player.vigor += player.weapon.vigorBonus;
  player.potency += player.weapon.potencyBonus;
  player.richesse += player.weapon.richesseBonus;
  player.pomposity += player.weapon.pomposityBonus;
  player.social_grace += player.weapon.graceBonus;
  var random = Math.floor(Math.random() * Gauntlet.GuildHall.allowedEnemyClasses.length);
  var enemyClass = Gauntlet.GuildHall.allowedEnemyClasses[random];
  enemy = new Gauntlet.GuildHall[enemyClass];
  enemy.generateWeapon();
  Gauntlet.displayStats();
}

battle.displayStats = function (){
  $("#player_stats").html(`<p class="player_name">Adventurer: ${player.name}</p> <p class="player_name">Class: ${player.class}</p>
  <p>Species: ${player.species}</p> <p>Health: ${player.health}</p>
  <p>Vigor: ${player.vigor}</p>
  <p>Potency: ${player.potency}</p>
  <p>Richesse: ${player.richesse}</p>
  <p>Pomposity: ${player.pomposity}</p>
  <p>Social Grace: ${player.social_grace}</p>
  <p>Weapon: ${player.weapon.name}</p>`);
   $("#enemy_stats").html(`<p class="player_name"> Enemy: ${enemy.name} </p> <p class="player_name"> Class: ${enemy.class}</p> <p> Species: ${enemy.species}</p>
  <p>Health: ${enemy.health} </p>
  <p>Filth: ${enemy.filth}</p>
  <p>Poverty: ${enemy.poverty}</p>
  <p>Hunger: ${enemy.hunger}</p>
  <p>Social Disease: ${enemy.social_disease}</p>
  <p>Damnedness: ${enemy.damnedness}</p>
  <p>Weapon: ${enemy.weapon.name}</p>`);
}

//Have a button with the label "Attack".
 //Each time the attack button is clicked, the player's chosen character and the generated enemy shouLd
 //attack with their weapon, and once the damage is calculated, subtract that from the opponents' health.

battle.calcDamage = function() {
  var playerRoll = (Math.round(Math.random() * player.vigor));
  playerRoll += (Math.round(Math.random() * player.potency));
  playerRoll += (Math.round(Math.random() * player.richesse));
  playerRoll += (Math.round(Math.random() * player.pomposity));
  playerRoll += (Math.round(Math.random() * player.social_grace));
  var enemyRoll = (Math.round(Math.random() * enemy.filth));
  enemyRoll += (Math.round(Math.random() * enemy.hunger));
  enemyRoll += (Math.round(Math.random() * enemy.poverty));
  enemyRoll += (Math.round(Math.random() * enemy.social_disease));
  enemyRoll += (Math.round(Math.random() * enemy.damnedness));
  var statContest = playerRoll - enemyRoll;
  console.log("playerRoll: ", playerRoll);
  console.log("enemyRoll: ", enemyRoll);
  console.log("statContest: ", statContest);
  return statContest;
}

battle.combat = function() {
  if ($(".launchAttack").attr("disabled")) {
    return;
  } else {
    var statContest = Gauntlet.calcDamage();
    var playerDamage = Math.floor(Math.random() * 10 + player.weapon.damage + statContest);
    var enemyDamage =Math.floor(Math.random() * 10 + enemy.weapon.damage - statContest);
    var playerPhrase = player.weapon.generatePhrase();
    var enemyPhrase = enemy.weapon.generatePhrase();
    $("#player_weapon").html(`<p class="weapon_display">${playerPhrase}</p><p class="weapon_display">Damage: ${playerDamage}</p>`);
    console.log(playerDamage);
    $("#enemy_weapon").html(`<p class="weapon_display">${enemyPhrase}</p><p class="weapon_display">Damage: ${enemyDamage}</p>`);
    console.log(enemyDamage);
    enemy.health -= playerDamage;
    player.health -= enemyDamage;
    Gauntlet.displayStats();
    if (enemy.health <= 0 && player.health <=0){
      $('.launchAttack').attr("disabled", "disabled");
      alert("That wretched peasant got the better of you, but by God, you weren't vanquished in vain! You are carried off to be tended to on your chaise while that rotten fool is being carted to prison where he belongs.")
    } else if (enemy.health <= 0) {
        $('.launchAttack').attr("disabled", "disabled");
        alert("Good show, old boy! That peasant's wretched constitution couldn't withstand your assault. His limp frame is dragged off by the authorities.");
      } else if (player.health <= 0) {
          $('.launchAttack').attr("disabled", "disabled");
          alert("Zounds! You swoon as the peasant overcomes you with his damnedness. He attempts to flee, but is arrested tout de suite and thrown in a dungeon.");
        };
    }

}
return battle;

})(Gauntlet || {});










