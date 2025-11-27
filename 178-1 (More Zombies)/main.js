var ZombieCore = {AI: {EnemyWatcher: new EntityAIWatcher({execute: function () {
    if (World.getThreadTime() % this.params.find_delay == 0) {
        var attackAI = this.getAI(this.params.attackAI);
        var followAI = this.getAI(this.params.followAI);
        if (Entity.getDistanceToCoords(Player.get(), Entity.getPosition(this.entity)) <= this.params.feelingModifier) {
            this.setPriority(this.params.attackAI, this.params.priority_on_attack);
            this.setPriority(this.params.followAI, this.params.priority_on_attack);
            attackAI.data.target = parseInt(Player.get());
            followAI.data.target = Player.getPosition();
        } else {
            this.setPriority(this.params.attackAI, this.params.priority_on_idle);
            this.setPriority(this.params.followAI, this.params.priority_on_idle);
            attackAI.data.target = null;
            followAI.data.target = null;
        }
    }
}, params: {attackAI: "attack", followAI: "follow", find_delay: 20, priority_on_attack: 5, priority_on_idle: 0, feelingModifier: 10}})}};
IDRegistry.genItemID("disco_zombie_spawn");
Item.createItem("disco_zombie_spawn", "Spawn Disco Zombie", {name: "disco_spawn", meta: 0});
Item.registerUseFunction("disco_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("disco_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("alchemist_zombie_spawn");
Item.createItem("alchemist_zombie_spawn", "Spawn Zombie Alchemist", {name: "alchemist_spawn", meta: 0});
Item.registerUseFunction("alchemist_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("alchemist_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("chef_zombie_spawn");
Item.createItem("chef_zombie_spawn", "Spawn Zombie Chef", {name: "chef_spawn", meta: 0});
Item.registerUseFunction("chef_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("chef_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("cyborg_zombie_spawn");
Item.createItem("cyborg_zombie_spawn", "Spawn Zombie Cyborg", {name: "cyborg_spawn", meta: 0});
Item.registerUseFunction("cyborg_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("cyborg_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("dwarf_zombie_spawn");
Item.createItem("dwarf_zombie_spawn", "Spawn Zombie Dwarf", {name: "dwarf_spawn", meta: 0});
Item.registerUseFunction("dwarf_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("dwarf_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("herobrine_zombie_spawn");
Item.createItem("herobrine_zombie_spawn", "Spawn Zombie Herobrine", {name: "herobrine_spawn", meta: 0});
Item.registerUseFunction("herobrine_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("herobrine_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("king_zombie_spawn");
Item.createItem("king_zombie_spawn", "Spawn King Zombie", {name: "king_spawn", meta: 0});
Item.registerUseFunction("king_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("king_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("knight_zombie_spawn");
Item.createItem("knight_zombie_spawn", "Spawn Zombie Knight", {name: "knight_spawn", meta: 0});
Item.registerUseFunction("knight_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("knight_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("miner_zombie_spawn");
Item.createItem("miner_zombie_spawn", "Spawn Zombie Miner", {name: "miner_spawn", meta: 0});
Item.registerUseFunction("miner_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("miner_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("nether_zombie_spawn");
Item.createItem("nether_zombie_spawn", "Spawn Nether Zombie", {name: "nether_spawn", meta: 0});
Item.registerUseFunction("nether_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("nether_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("notch_zombie_spawn");
Item.createItem("notch_zombie_spawn", "Spawn Zombie Notch", {name: "notch_spawn", meta: 0});
Item.registerUseFunction("notch_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("notch_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("pa_zombie_spawn");
Item.createItem("pa_zombie_spawn", "Spawn Zombie Pa", {name: "pa_spawn", meta: 0});
Item.registerUseFunction("pa_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("pa_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("pirate_zombie_spawn");
Item.createItem("pirate_zombie_spawn", "Spawn Zombie Pirate", {name: "pirate_spawn", meta: 0});
Item.registerUseFunction("pirate_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("pirate_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("survivor_spawn");
Item.createItem("survivor_spawn", "Spawn Survivor", {name: "survivor_spawn", meta: 0});
Item.registerUseFunction("survivor_spawn", function (coords, item, block) {
    Entity.spawnCustom("survivor", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
IDRegistry.genItemID("creeper_zombie_spawn");
Item.createItem("creeper_zombie_spawn", "Spawn Zombie Creeper", {name: "zcreeper_spawn", meta: 0});
Item.registerUseFunction("creeper_zombie_spawn", function (coords, item, block) {
    Entity.spawnCustom("creeper_zombie", coords.relative.x + 0.5, coords.relative.y + 1.5, coords.relative.z + 0.5);
});
var disco_zombie = MobRegistry.registerEntity("disco_zombie");
disco_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/DiscoZombie.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
disco_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 348, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.75});
    return drop;
}, getHealth: function () {
    return 30;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
disco_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.15, angular_speed: 0.2, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.2, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 3, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var alchemist_zombie = MobRegistry.registerEntity("alchemist_zombie");
alchemist_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieAlchemist.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
alchemist_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 384, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
    return drop;
}, getHealth: function () {
    return 35;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
alchemist_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 4, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var chef_zombie = MobRegistry.registerEntity("chef_zombie");
chef_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieChef.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
chef_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 392, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.7}, {id: 393, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.25});
    return drop;
}, getHealth: function () {
    return 40;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
chef_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 3, attack_range: 3, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var cyborg_zombie = MobRegistry.registerEntity("cyborg_zombie");
cyborg_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieCyborg.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
cyborg_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 331, count: {min: 1, max: 4}, data: 0, separate: true, chance: 1});
    return drop;
}, getHealth: function () {
    return 35;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
cyborg_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 4, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var dwarf_zombie = MobRegistry.registerEntity("dwarf_zombie");
dwarf_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieDwarf.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
dwarf_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 263, count: {min: 1, max: 4}, data: 0, separate: true, chance: 0.5});
    return drop;
}, getHealth: function () {
    return 25;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
dwarf_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.25, angular_speed: 0.2, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.25, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 2, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var herobrine_zombie = MobRegistry.registerEntity("herobrine_zombie");
herobrine_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieHerobrine.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
herobrine_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 264, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
    return drop;
}, getHealth: function () {
    return 45;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
herobrine_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 6, attack_range: 4, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var king_zombie = MobRegistry.registerEntity("king_zombie");
king_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieKing.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
king_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 310, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01}, {id: 171, count: {min: 1, max: 3}, data: 14, separate: true, chance: 0.5});
    return drop;
}, getHealth: function () {
    return 50;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
king_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 7, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var knight_zombie = MobRegistry.registerEntity("knight_zombie");
knight_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieKnight.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
knight_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 307, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01}, {id: 302, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.25});
    return drop;
}, getHealth: function () {
    return 35;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
knight_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.15, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 5, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var miner_zombie = MobRegistry.registerEntity("miner_zombie");
miner_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieMiner.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
miner_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 285, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1}, {id: 265, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.5});
    return drop;
}, getHealth: function () {
    return 30;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
miner_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 5, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var notch_zombie = MobRegistry.registerEntity("notch_zombie");
notch_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombieNotch.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
notch_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 466, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01}, {id: 260, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.5});
    return drop;
}, getHealth: function () {
    return 50;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
notch_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 3, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var pa_zombie = MobRegistry.registerEntity("pa_zombie");
pa_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombiePa.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
pa_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 318, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.5}, {id: 313, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.01});
    return drop;
}, getHealth: function () {
    return 60;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
pa_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 3, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var pirate_zombie = MobRegistry.registerEntity("pirate_zombie");
pirate_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/ZombiePirate.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
pirate_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 371, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.75}, {id: 266, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
    return drop;
}, getHealth: function () {
    return 20;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
pirate_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.15, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 6, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var nether_zombie = MobRegistry.registerEntity("nether_zombie");
nether_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/NetherZombie.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
nether_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 372, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.5}, {id: 377, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
    return drop;
}, getHealth: function () {
    return 30;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
nether_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 6, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var creeper_zombie = MobRegistry.registerEntity("creeper_zombie");
creeper_zombie.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 24);
    Entity.setSkin(this.entity, "mob/ZombieCreeper.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
creeper_zombie.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 289, count: {min: 1, max: 2}, data: 0, separate: true, chance: 0.7});
    return drop;
}, getHealth: function () {
    return 25;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
creeper_zombie.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 5, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});
var survivor = MobRegistry.registerEntity("survivor");
survivor.customizeEvents({tick: function () {
    Entity.setRender(this.entity, 17);
    Entity.setSkin(this.entity, "mob/Survivor.png");
}, attackedBy: function (attacker, amount) {
    World.playSoundAtEntity(this.entity, "mob.endermen.hit2", 1, 1);
}});
survivor.customizeDescription({getDrop: function () {
    var drop = [];
    drop.push({id: 334, count: {min: 1, max: 3}, data: 0, separate: true, chance: 0.5}, {id: 333, count: {min: 1, max: 1}, data: 0, separate: true, chance: 0.1});
    return drop;
}, getHealth: function () {
    return 15;
}, getHitbox: function () {
    return {w: 1, h: 2};
}});
survivor.customizeAI({getAITypes: function () {
    return {wander: {type: EntityAI.Wander, priority: 4, speed: 0.1, angular_speed: 0.1, delay_weigth: 0.5}, follow: {type: EntityAI.Follow, priority: 0, speed: 0.1, rotateHead: true}, attack: {type: EntityAI.Attack, priority: 0, attack_damage: 6, attack_range: 2, attack_rate: 30}, enemy_watcher: {type: ZombieCore.AI.EnemyWatcher}};
}});

