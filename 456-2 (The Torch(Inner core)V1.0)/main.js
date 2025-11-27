/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: Music.js

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==50){ 
Entity.setFire(victim, 60);
 }
});




