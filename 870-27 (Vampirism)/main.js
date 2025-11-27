/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 14
*/



// file: API.js

IMPORT("SoundAPI");

Callback.addCallback('LevelDisplayed', function () {
    Game.message(Native.Color.GREEN + '[VAMPIRISM] MOD LOADED!');
});
Callback.addCallback('ServerPlayerLoaded', function(player) {
    VM.createPlayers();
});
Network.addClientPacket("Vampirism.message", function(data){
    if (data.type == 'default') {
        Game.message(data.text);
    } else if (data.type == 'tip') {
        Game.tipMessage(data.text);
    }
});
Network.addClientPacket("Vampirism.playSound", function(data) {
    let sound = new Sound(data.fileName + ".ogg");
    if (!sound.isPlaying()) {
        sound.play();
    }
});
Network.addClientPacket("Vampirism.display", function(data) {
    BLOOD_SCALE.setDisplay(data.status);
});

function decreaseCarriedItem(count, player) {
    let item = Entity.getCarriedItem(player);
    if (item) {
        Entity.setCarriedItem(player, item.id, item.count-count, item.data, item.extra);
    }
}

let BloodManager = {
    bloodLvlUp:function(value, player) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        let bloodLevel = scale.getValue() + value;
        if (bloodLevel <= 20) {
            scale.setValue(bloodLevel);
        } else {
            scale.setValue(20);
        }
    },
    bloodLvlDown:function(value, player) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        let bloodLevel = scale.getValue() - value;
        if (bloodLevel <= 20) {
            scale.setValue(bloodLevel);
        } else {
            scale.setValue(20);
        }
    },
    bloodLvlSet:function(value, player) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        scale.setValue(value);
    },
    bloodBottleDataUp:function(item, value, player, slot) {
        if (slot == undefined) slot = null;
        if (!slot) {
            Entity.setCarriedItem(player, item.id, item.count, item.data+value, item.extra);
        } else {
            let actor = new PlayerActor(player);
            actor.setInventorySlot(slot, item.id, item.count, item.data+value, item.extra);
        }
    },
    bloodBottleDataDown:function(item, value, player, slot) {
        if (slot == undefined) slot = null;
        if (!slot) {
            Entity.setCarriedItem(player, item.id, item.count, item.data-value, item.extra);
        } else {
            let actor = new PlayerActor(player);
            actor.setInventorySlot(slot, item.id, item.count, item.data-value, item.extra);
        }
    },
    setScaleVisible:function(player, status) {
        let client = Network.getClientForPlayer(player);
        if (client) {
            client.send("Vampirism.display", {
                status: status
            });
        }
    }
};

let VM = {
    players: {},
    BM: BloodManager,
    
    getPlayer: function(player) {
        if (this.players[player] !== undefined) {
            return this.players[player];
        } else {
            return false;
        }
    },
    createPlayers: function() {
        let players = Network.getConnectedPlayers();
        players.forEach(function(item, index, array) {
            if (!VM.getPlayer(item)) {
                VM.players[item] = {};
                VM.players[item]['infected'] = false;
                VM.players[item]['level'] = 0;
            }
        });
    },
    playerInfection: function(player, addEffects) {
        this.players[player]['infected'] = true;
        if (addEffects) {
            Entity.addEffect(player, 9, 2, 300);
            Entity.addEffect(player, 2, 1, 200);
        }
        this.sendClientMessage(player, "default", Translation.translate("You feel tired and nauseous. I wonder if there will be side effects from your actions? It is worth waiting."));
    },
    playerUpgradeLvL: function(player) {
        this.players[player]['level'] += 1;
        this.sendClientMessage(player, "default", Native.Color.RED+Translation.translate("Your vampire level has been upgraded to ") + this.players[player]['level'] + '!');
    },
    playerReset: function(player) {
        this.players[player]['infected'] = false;
        this.players[player]['level'] = 0;
    },
    sendClientMessage: function(player, type, text) {
        let client = Network.getClientForPlayer(player);
        if (client) {
            client.send("Vampirism.message", {
                type: type,
                text: text
            });
        }
    },
    playSound:function(coords, range, player, file) {
        let dimension = new PlayerActor(player).getDimension();
        new NetworkConnectedClientList().setupDistancePolicy(coords.x, coords.y, coords.z, dimension, range).send("Vampirism.playSound", {
            fileName: file
        });
	}
};

Saver.addSavesScope("Vampirism",
    function read(data) {
        if (!data.players) {} 
        else {
            VM.players = data.players;
        }
    },
    function save() {
        return {
            players: VM.players
        };
    }
);
ModAPI.registerAPI("VampirismAPI", VM);




// file: translation.js

// Translation.addTranslation("", {ru: ""});
Translation.addTranslation("Vampire Fang", {ru: "Клык вампира"});
Translation.addTranslation("Pitchfork", {ru: "Вилы"});
Translation.addTranslation("Vampire's helmet", {ru: "Вампирский шлем"});
Translation.addTranslation("Vampire's chestplate", {ru: "Вампирская кирасса"});
Translation.addTranslation("Vampire's leggings", {ru: "Вампирские поножи"});
Translation.addTranslation("Vampire's boots", {ru: "Вампирские ботинки"});
Translation.addTranslation("You are already infected!", {ru: "Вы уже инфицированны!"});
Translation.addTranslation("Your vampire level has been upgraded to ", {ru: "Вампирский уровень был повышен до "});
Translation.addTranslation("Blood Bottle", {ru: "Бутылка для крови"});
Translation.addTranslation("\nStorage: ", {ru: "\nХраниться: "});
Translation.addTranslation("You feel tired and nauseous. I wonder if there will be side effects from your actions? It is worth waiting.", {ru: "Вы чувствуете усталость и тошноту. Интересно, будут ли побочные эффекты от ваших действий? Стоит подождать."});
Translation.addTranslation("Dracula", {ru: "Дракула"});
Translation.addTranslation("Mod in development, upgrade level is not yet available! Follow the news in our VK group.", {ru: "Мод в разработке, повышение уровня пока недоступно! Следите за новостями в нашей группе VK."});
Translation.addTranslation("Have you decided to choose the path of the vampire? Well, for doing my bidding I will raise your vampire level. If you can’t handle a vampire’s life, make and administer a lethal injection.", {ru: "Решил встать на путь вампира? Что ж, за выполнение моих поручений я буду повышать тебе вампирический уровень. Если вампирская жизнь тебе не по силам, то изготовь и примени смертельную инъекцию."});
Translation.addTranslation("Reaper", {ru: "Жнец"});
Translation.addTranslation("Human Heart", {ru: "Человеческое сердце"});
Translation.addTranslation("Garlic", {ru: "Чеснок"});
Translation.addTranslation("Injection", {ru: "Инъекция"});
Translation.addTranslation("Cursed Earth", {ru: "Проклятая Земля"});
Translation.addTranslation("Purple Castle Brick", {ru: "Фиолетовый кирпич замка"});
Translation.addTranslation("Dark Castle Brick", {ru: "Тëмный кирпич замка"});
Translation.addTranslation("Dark Castle Slab", {ru: "Тëмный камень замка"});
Translation.addTranslation("Purple Castle Slab", {ru: "Фиолетовый камень замка"});
Translation.addTranslation("Dark Bloody Castle Brick", {ru: "Тëмный кровавый кирпич замка"});
Translation.addTranslation("You’re not a vampire!", {ru: "Вы не вампир!"});




// file: gui/blood_scale.js

IMPORT("Scales");

let helf_texture = "textures/ui/blood_scale_1_right";
if (__config__.getBool('left_bar_position')) 
    helf_texture = "textures/ui/blood_scale_1_left";
    
let BLOOD_SCALE = Scales.register({
    name: "BLOOD",
    full: "textures/ui/blood_scale_0",
    helf: helf_texture,
    empty: "textures/ui/blood_scale_2",
    isLeft: __config__.getBool('left_bar_position'),
    isReset: true
});




// file: items/pitchfork.js

IDRegistry.genItemID("pitchfork");
Item.createItem("pitchfork", "Pitchfork", {name: "pitchfork"}, {isTech: false, stack: 1});

ToolAPI.registerTool(ItemID.pitchfork, "iron", ["fibre"], {
        damage: 4, 
        isWeapon: true,
        brokenId: 0,
    }
);
Item.setToolRender("pitchfork", true);
Item.setEnchantType("pitchfork", Native.EnchantType.weapon, 4);

Recipes.addShaped({id: ItemID.pitchfork, count: 1, data: 0},
	["i i", " s ", " s "],
	['i', VanillaItemID.iron_ingot, 0, 's', VanillaItemID.stick, 0]
); 




// file: items/vampire_armor.js

IDRegistry.genItemID("vampireArmorHelmet");
IDRegistry.genItemID("vampireArmorChestplate");
IDRegistry.genItemID("vampireArmorLeggings");
IDRegistry.genItemID("vampireArmorBoots");

Item.createArmorItem("vampireArmorHelmet", "Vampire's helmet", {name: "vampireArmorHelmet", meta: 0}, {isTech: false, armor: 2, durability: 165, stack: 1, type: "helmet", texture: "armor/vampireArmor_1.png"});
Item.createArmorItem("vampireArmorChestplate", "Vampire's chestplate", {name: "vampireArmorChestplate", meta: 0}, {isTech: false, armor: 6, durability: 240, stack: 1, type: "chestplate", texture: "armor/vampireArmor_1.png"});
Item.createArmorItem("vampireArmorLeggings", "Vampire's leggings", {name: "vampireArmorLeggings", meta: 0}, {isTech: false, armor: 5, durability: 225, stack: 1, type: "leggings", texture: "armor/vampireArmor_2.png"});
Item.createArmorItem("vampireArmorBoots", "Vampire's boots", {name: "vampireArmorBoots", meta: 0}, {isTech: false, armor: 2, durability: 195, stack: 1, type: "boots", texture: "armor/vampireArmor_1.png"});

Recipes.addShaped({id: ItemID.vampireArmorHelmet, count: 1, data: 0},
	["iii", "ibi"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);
Recipes.addShaped({id: ItemID.vampireArmorChestplate, count: 1, data: 0},
	["ibi", "iii", "iii"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);
Recipes.addShaped({id: ItemID.vampireArmorLeggings, count: 1, data: 0},
	["iii", "ibi", "i i"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);
Recipes.addShaped({id: ItemID.vampireArmorBoots, count: 1, data: 0},
	["ibi", "i i"],
	['i', VanillaItemID.iron_ingot, 0, 'b', ItemID.bloodBottle, 3]
);




// file: items/vampire_fang.js

IDRegistry.genItemID("vampireFang");
Item.createItem("vampireFang", "Vampire Fang", {name: "vampireFang"});

Item.registerUseFunction("vampireFang", function(coords, item, block, player) {
    if (VM.players[player]['infected']) {
        VM.sendClientMessage(player, "tip", Native.Color.RED + Translation.translate('You are already infected!'));
    } else {
        decreaseCarriedItem(1, player);
        VM.playerInfection(player, true);
    }
});

Callback.addCallback('EntityDeath', function(entity, attacker, damageType) {
    if (Entity.getType(entity) == Native.EntityType.BAT) {
      let coords = Entity.getPosition(entity);
      World.drop(coords.x, coords.y, coords.z, ItemID.vampireFang, 1);
    }
});




// file: items/blood_bottle.js

IDRegistry.genItemID("bloodBottle");
Item.createItem("bloodBottle", "Blood Bottle", {name: "bloodBottle2"}, {stack: 1});

Item.registerUseFunction("bloodBottle", function(coords, item, block, player) {
    if (item.data) {
        if (VM.players[player]['level']) {
            let scale = Scales.getScaleByPlayer(player, "BLOOD");
            if (scale.getValue() < 20) {
                VM.BM.bloodBottleDataDown(item, 1, player);
                VM.BM.bloodLvlUp(2, player);
                VM.playSound(coords, 12, player, "drink");
            }
        } else {
            VM.BM.bloodBottleDataDown(item, 1, player);
            VM.playSound(coords, 12, player, "drink");
            Entity.addEffect(player, 9, 2, 300);
        }
    }
});

Item.registerNoTargetUseFunction("bloodBottle", function(item, player) {
    if (VM.players[player]['level'] && item.data < 3) {
        let scale = Scales.getScaleByPlayer(player, "BLOOD");
        if (scale.getValue() > 2) {
            VM.BM.bloodLvlDown(2, player);
            VM.BM.bloodBottleDataUp(item, 1, player);
        }
    }
});

Item.registerIconOverrideFunction("bloodBottle", function(item, isModUi) {
    if (!isModUi) {
        if (item.data >= 3) {
            return {name: "bloodBottle2"};
        } else if (item.data > 0 && item.data < 3) {
            return {name: "bloodBottle1"};
        } else {
            return {name: "bloodBottle0"};
        }
    }
});
Item.registerNameOverrideFunction("bloodBottle", function(item, translation, name) {
    return Translation.translate("Blood Bottle") + Translation.translate("\nStorage: ") + item.data;
});

Recipes.addShaped({id: ItemID.bloodBottle, count: 1, data: 0},
	[" i ", "g g", " g "],
	['i', VanillaItemID.gold_ingot, 0, 'g', VanillaBlockID.glass, 0]
); 




// file: items/reaper.js

IDRegistry.genItemID("reaper");
Item.createItem("reaper", "Reaper", {name: "reaper"}, {stack: 1});
ToolAPI.registerTool(ItemID.reaper, "iron", ["fibre"], {
        damage: 2, 
        isWeapon: true,
        brokenId: 0,
    }
);
Item.setToolRender("reaper", true);

Callback.addCallback('EntityDeath', function(victum, attacker, damageType) {
    let tool = Entity.getCarriedItem(attacker);
    if (tool.id == ItemID.reaper && VM.players[attacker]['level'] && Network.getConnectedPlayers().indexOf(attacker) != -1) {
        for (let slot=0; slot < 36; slot++) {
            let item = new PlayerActor(attacker).getInventorySlot(slot);
            if (item.id == ItemID.bloodBottle && item.data < 3) {
                VM.BM.bloodBottleDataUp(item, 1, attacker, slot);
                break;
            }
        }
    }
});

Recipes.addShaped({id: ItemID.reaper, count: 1, data: 0},
	["fif", "fif", " s "],
	['f', ItemID.vampireFang, 0, 'i', VanillaItemID.iron_ingot, 0, 's', VanillaItemID.stick, 0]
);




// file: items/human_heart.js

IDRegistry.genItemID("humanHeart");
Item.createItem("humanHeart", "Human Heart", {name: "humanHeart"});

 Callback.addCallback('EntityDeath', function(entity, attacker, damageType) {
    entityTypes = [Native.EntityType.VILLAGER, Native.EntityType.VILLAGER_V2, Native.EntityType.VINDICATOR, Native.EntityType.WANDERING_TRADER, Native.EntityType.WHITCH];
    if (entityTypes.indexOf(Entity.getType(entity)) == 1) {
        let coords = Entity.getPosition(entity);
        World.drop(coords.x, coords.y, coords.z, ItemID.humanHeart, 1);
    }
});




// file: items/injection.js

IDRegistry.genItemID("injection");
Item.createItem("injection", "Injection", {name: "injection"});

Item.registerUseFunction("injection", function(coords, item, block, player) {
    if (VM.players[player]['level']) {
        VM.playerReset(player);
        decreaseCarriedItem(1, player);
        Entity.damageEntity(player, Entity.getHealth(player));
    } else {
        VM.sendClientMessage(player, "tip", Native.Color.RED + Translation.translate('You’re not a vampire!'));
    }
});

Recipes.addShaped({id: ItemID.injection, count: 1, data: 0},
	[" si", "sgs", "is "],
	['s', VanillaBlockID.glass, 0, 'i', VanillaItemID.iron_ingot, 0, 'g', ItemID.garlic, 0]
);




// file: blocks/garlic_seeds.js

IMPORT("TileRender");

IDRegistry.genItemID("garlic");
Item.createItem("garlic", "Garlic", {name: "garlic"});
Item.registerUseFunction("garlic", function(coords, item, block, player) {
    let source = BlockSource.getDefaultForActor(player);
    if (source.getBlock(coords.x, coords.y, coords.z).id == VanillaBlockID.farmland) {
        source.setBlock(coords.x, coords.y+1, coords.z, BlockID.garlicCrop, 0);
        decreaseCarriedItem(1, player);
    }
});

IDRegistry.genBlockID("garlicCrop");
Block.createSpecialType({
  base: VanillaTileID.wheat,
  destroytime: 0,
  explosionres: 0,
  opaque: false,
  lightopacity: 0,
  rendertype: 6,
  sound: "grass"
}, "plant");
Block.createBlock("garlicCrop", [
	{name: "Garlic Crop", texture: [["garlic_stage", 0]], inCreative: false},
	{name: "Garlic Crop", texture: [["garlic_stage", 1]], inCreative: false},
	{name: "Garlic Crop", texture: [["garlic_stage", 2]], inCreative: false},
	{name: "Garlic Crop", texture: [["garlic_stage", 3]], inCreative: false}
], "plant");
TileRenderer.setEmptyCollisionShape(BlockID.garlicCrop);
Block.setShape(BlockID.garlicCrop, 1 / 8, 0, 1 / 8, 7 / 8, 7 / 8, 7 / 8);
Block.registerDropFunction(BlockID.garlicCrop, function(coords, block, data) {
    if (data == 3) {
        return [[ItemID.garlic, Math.floor(Math.random() * 3) + 1, 0]];
    } else {
        return [[ItemID.garlic, 1, 0]];
    }
});
Block.registerNeighbourChangeFunction(BlockID.garlicCrop, function(coords, block, changedCoords, region) {
  if (World.getBlock(coords.x, coords.y-1, coords.z).id !== VanillaBlockID.farmland) {
    World.destroyBlock(coords.x, coords.y, coords.z);
    World.drop(coords.x, coords.y, coords.z, ItemID.garlic, 1);
  }
});
Block.registerClickFunction(BlockID.garlicCrop, function(coords, item, block, player) {
  if (item.id == VanillaItemID.bone_meal && block.data < 3) {
    let source = BlockSource.getDefaultForActor(player);
    source.setBlock(coords.x, coords.y, coords.z, block.id, block.data+1);
    decreaseCarriedItem(1, player);
  }
});
Block.registerDropFunctionForID(VanillaBlockID.tallgrass, function(coords, block, data) {
    if ((Math.random() * 2) <= 0.05) {
        World.drop(coords.x, coords.y, coords.z, ItemID.garlic, 1);
    }
});
Block.setRandomTickCallback(BlockID.garlicCrop, function(x, y, z, id, data) {
    if (data < 3) {
        World.setBlock(x, y, z, id, data+1);
    }
});




// file: blocks/decorate_blocks.js

IDRegistry.genBlockID("cursedEarth");
Block.createBlock("cursedEarth", [
	{name: "Cursed Earth", texture: [["cursedEarth", 0]], inCreative: true}
]);
IDRegistry.genBlockID("castlePurpleBrick");
Block.createBlock("castlePurpleBrick", [
	{name: "Purple Castle Brick", texture: [["castlePurpleBrick", 0]], inCreative: true}
]);
IDRegistry.genBlockID("castleDarkBrick");
Block.createBlock("castleDarkBrick", [
	{name: "Dark Castle Brick", texture: [["castleDarkBrick", 0]], inCreative: true}
]);
IDRegistry.genBlockID("castleDarkSlab");
Block.createBlock("castleDarkSlab", [
	{name: "Dark Castle Slab", texture: [["castleDarkSlab", 0]], inCreative: true}
]);
IDRegistry.genBlockID("castlePurpleSlab");
Block.createBlock("castlePurpleSlab", [
	{name: "Purple Castle Slab", texture: [["castlePurpleSlab", 0]], inCreative: true}
]);
IDRegistry.genBlockID("castleDarkBrickBloody");
Block.createBlock("castleDarkBrickBloody", [
	{name: "Dark Bloody Castle Brick", texture: [["castleDarkBrickBloody", 0]], inCreative: true}
]);




// file: world/sun_damager.js

Callback.addCallback("ServerPlayerTick", function(player) {
    if(World.getThreadTime() % 20 == 0){
        let gamemode = new PlayerActor(player).getGameMode();
        if (gamemode !== Native.GameMode.CREATIVE) {
            if (VM.players[player]['level']) {
                let worldtime = World.getWorldTime();
                let time = 24000 - (Math.ceil(worldtime / 24000) * 24000 - worldtime);
                if (time<=12900||time>=23450) {
                    let coords = Entity.getPosition(player);
                    let source = BlockSource.getDefaultForActor(player);
                    if (source.canSeeSky(coords.x, coords.y, coords.z)) {
                        Entity.setFire(player, 40);
                    }
                }
            }
        }
    }
});




// file: world/blood_scale_logic.js

const BLOOD_SCALE_DOWN = 120; // sec
const HUNGER_SATURATION_INTERVAL = 5; // sec

Callback.addCallback("ServerPlayerTick", function(player) {
    let thirstDamageStart = false;
    let time = World.getThreadTime();
    let actor = new PlayerActor(player);
    let infectionStart = false;
    let scale = Scales.getScaleByPlayer(player, "BLOOD");
    if (time % (BLOOD_SCALE_DOWN*20) == 0) {
        if (actor.getGameMode() !== Native.GameMode.CREATIVE) {
            if (VM.players[player]['level']) {
                if (scale.getValue() > 0) {
                    VM.BM.bloodLvlDown(1, player);
                }
            }
        }
    }
    if (scale.getValue() == 0) {
        thirstDamageStart = true;
    } else {
        thirstDamageStart = false;
    }
    if (time % 40 == 0 && thirstDamageStart) {
        Entity.damageEntity(player, 2);
    }
    if (Object.keys(VM.players).length) {
        // Не логика шкалы, ну и што, удобно разместить тут
        if (VM.players[player]['infected'] && !VM.players[player]['level'] && !infectionStart) {
            infectionStart = true;
        }
        if (VM.players[player]['level']) {
            VM.BM.setScaleVisible(player, true);
        } else {
            VM.BM.setScaleVisible(player, false);
        }
        if (time % (HUNGER_SATURATION_INTERVAL*20) == 0 && __config__.getBool('hunger_scale_disabled') && VM.players[player]['level']) {
            actor.setHunger(20);
        }
    }
    // тоже не шкала, ну и штоо
    if (time % 6000 == 0 && infectionStart) {
        infectionStart = false;
        VM.playerUpgradeLvL(player);
    }
});

Callback.addCallback("EntityDeath", function(entity) {
    if (Network.getConnectedPlayers().indexOf(entity) != -1) {
        VM.BM.bloodLvlSet(20, entity);
    }
});




