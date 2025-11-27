IMPORT("EntityState");
var SCALE_NAME = "water";
Scales.register({
    name: SCALE_NAME,
    full: "textures/ui/scale_water_full",
    helf: "textures/ui/scale_water_helf",
    empty: "textures/ui/scale_water_empty",
    isLeft: false,
    isReset: true
});
var onCompleteItems = [373, 322, 466];
Callback.addCallback("ItemUsingComplete", function (item, player) {
    if (new PlayerActor(player).getHunger() >= 20 && onCompleteItems.indexOf(item.id) == -1) {
        Game.prevent();
    }
    if (item.id == 373 && item.data == 0) {
        Scales.getScaleByPlayer(player, SCALE_NAME).addValue(5);
    }
});
Translation.addTranslation("Flask", { ru: "Фляга" });
IDRegistry.genItemID("flask");
Item.createItem("flask", "Flask", { name: "flask", meta: 0 });
Item.setMaxDamage(ItemID.flask, 20);
Item.setLiquidClip(ItemID.flask, true);
Item.setMaxUseDuration(ItemID.flask, 20);
Item.setUseAnimation(ItemID.flask, 2);
Recipes.addShaped({ id: ItemID.flask, count: 1, data: 20 }, [
    " s ",
    "vlv",
    " v "
], ['v', 265, 0, 'l', 334, 0, 's', 287, 0]);
Callback.addCallback("ItemUsingComplete", function (item, player) {
    if (item.id != ItemID.flask)
        return;
    var scale = Scales.getScaleByPlayer(player, SCALE_NAME);
    var water = scale.getValue();
    if (water < 20) {
        var add = Math.min(20 - water, 20 - item.data);
        scale.setValue(water + add);
        Entity.setCarriedItem(player, item.id, 1, item.data + add);
    }
});
Callback.addCallback("ItemUse", function (coords, item, block, isExter, player) {
    if (item.id == ItemID.flask) {
        if (block.id == 8 || block.id == 9)
            Entity.setCarriedItem(player, item.id, 1, 0);
    }
    var c = coords.relative;
    block = BlockSource.getDefaultForActor(player).getBlock(c.x, c.y, c.z);
    var scale = Scales.getScaleByPlayer(player, SCALE_NAME);
    var water = scale.getValue();
    if (water < 20 && item.id == 0 && (block.id == 8 || block.id == 9) && block.data == 0) {
        scale.setValue(water + 2);
    }
});
var HOT_BIOMES = [2, 35, 36, 37, 38, 39, 135, 164, 165, 166, 167];
var balance = 3;
var WaterData = {
    sun: [1, 2],
    destroy: 1,
    jump: 1,
    run: 1
};
var isDestroyingBlock = {};
Callback.addCallback("ServerPlayerTick", function (player) {
    // if player is alive
    if (Entity.getHealth(player) <= 0 || !Scales.isCreative(player, SCALE_NAME))
        return;
    var scale = Scales.getScaleByPlayer(player, SCALE_NAME);
    var isInTheSun = false;
    // check temperature
    if (World.getThreadTime() % 900 == 0) {
        var pos = Entity.getPosition(player);
        var region = BlockSource.getDefaultForActor(player);
        var biome = region.getBiome(pos.x, pos.z);
        var time = World.getWorldTime() % 24000;
        if (biome == 8 ||
            HOT_BIOMES.indexOf() != -1 && time <= 12000 && World.getLightLevel(pos.x, pos.y, pos.z) == 15) {
            isInTheSun = true;
        }
        else {
            isInTheSun = false;
        }
    }
var water = scale.getValue();
if (water <= 6) {
        Entity.addEffect(player, Native.PotionEffect.movementSlowdown, 2 - Math.ceil(water / 3), 30);
    }
    if (water <= 3) {
        Entity.addEffect(player, Native.PotionEffect.weakness, 1, 30);
    }
    if (water <= 0) {
        Entity.addEffect(player, Native.PotionEffect.blindness, 0, 40);
        if (World.getThreadTime() % 100 == 0) {
            Entity.damageEntity(player, 1);
        }
    }
    if (World.getThreadTime() % 2500 != 0)
        return;
    
    water -= isInTheSun ? WaterData.sun[0] : WaterData.sun[1];
    // check block destroying
    if (isDestroyingBlock[player]) {
        water -= WaterData.destroy;
        isDestroyingBlock[player] = false;
    }
    // check player moving
    var state = EntityState.getPlayerState(player);
    if (state.checkFlags(EntityState.RUNNING) || state.checkFlags(EntityState.JUMPING)) {
        water -= WaterData.jump;
    }
    else if (state.checkFlags(EntityState.WALKING) || state.checkFlags(EntityState.SWIMMING) || state.checkFlags(EntityState.FLOATING)) {
        water -= WaterData.run;
    }
    scale.setValue(water);
    // dehydration effects
    disableRegeneration = water <= 10;
    if (disableRegeneration) {
        var actor = new PlayerActor(player);
        var hunger = actor.getHunger();
        if (hunger > 16) {
            actor.setHunger(16);
            actor.setSaturation(actor.getSaturation() + hunger - 16);
        }
    }
    if (water <= 6) {
        Entity.addEffect(player, Native.PotionEffect.movementSlowdown, 2 - Math.ceil(water / 3), 30);
    }
    if (water <= 3) {
        Entity.addEffect(player, Native.PotionEffect.weakness, 1, 30);
    }
    if (water <= 0) {
        Entity.addEffect(player, Native.PotionEffect.blindness, 0, 40);
        if (World.getThreadTime() % 100 == 0) {
            Entity.damageEntity(player, 1);
        }
    }
});
ModAPI.registerAPI("_ThirstMod", {
    Scales: Scales,
    requireGlobal: function (code) {
        eval(code);
    }
});
Callback.addCallback("DestroyBlockContinue", function (coords, block, progress, player) {
    isDestroyingBlock[player] = true;
});
/*Scales.register("water", {
    full(i, value){
        return "scale_water_0";
    },
    half(i, value){
        return "scale_water_1"
    },
    empty(i, value){
        return "scale_water_2";
    },
    getSize(){
        return {
            x: 24,
            y: 24
        };
    },
    position: "right",
    reset: true
});

Translation.addTranslation("Flask", {ru: "Фляга"});
IDRegistry.genItemID("flask");
Item.createItem("flask", "Flask", {name: "flask", meta: 0});
Item.setMaxDamage(ItemID.flask, 20);
Item.setLiquidClip(ItemID.flask, true);
Item.setMaxUseDuration(ItemID.flask, 20);
Item.setUseAnimation(ItemID.flask, 2);

Recipes.addShaped({id: ItemID.flask, count: 1, data: 20}, [
    " s ",
    "vlv",
    " v "
], ['v', 265, 0, 'l', 334, 0, 's', 287, 0]);


Callback.addCallback("ItemUsingComplete", function(item, player){
    if(item.id != ItemID.flask)
        return;
    let water = Scales.getScaleValue(player, "water");
    if(water < 20){
        let add = Math.min(20 - water, 20 - item.data);
        if(Scales.setScaleValue(player, "water", water+add))
            Entity.setCarriedItem(player, item.id, 1, item.data + add);
    }
});

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){
    if(item.id == ItemID.flask){
        if(block.id == 8 || block.id == 9)
            Entity.setCarriedItem(player, item.id, 1, 0);
    }
    let c = coords.relative;
    block = BlockSource.getDefaultForActor(player).getBlock(c.x, c.y, c.z);
    let water = Scales.getScaleValue(player, "water");
    if(water < 20 && item.id == 0 && (block.id == 8 || block.id == 9) && block.data == 0){
        Scales.setScaleValue(player, "water", water+2);
    }
});

let onCompleteItems = [373, 322, 466];

Callback.addCallback("ItemUsingComplete", function(item, player){
    if(new PlayerActor(player).getHunger() >= Scales.getMaxHunger("water") && onCompleteItems.indexOf(item.id) == -1){
        Game.prevent();
    }
    if(item.id == 373 && item.data == 0){
        Scales.addScaleValue(player, "water", 5);
    }
});

let HOT_BIOMES = [2, 35, 36, 37, 38, 39, 135, 164, 165, 166, 167];
let balance = 3;
let WaterData = {
    sun: [.3/4, .25/4],
    destroy: .1/4,
    jump: .1/4,
    run: .2/4
};

let isDestroyingBlock = {};
Callback.addCallback("ServerPlayerTick", function(player){
    // if player is alive
    if(Entity.getHealth(player) <= 0 || !Scales.isCreative(player, "water"))
        return;
    let isInTheSun = false;
    // check temperature
    if(World.getThreadTime()%20 == 0){
        let pos = Entity.getPosition(player);
        let region = BlockSource.getDefaultForActor(player);
        let biome = region.getBiome(pos.x, pos.z);
        let time = World.getWorldTime()%24000;
        if(biome == 8 ||
          HOT_BIOMES.indexOf() != -1 && time <= 12000 && World.getLightLevel(pos.x, pos.y, pos.z) == 15){
            isInTheSun = true;
        } else {
            isInTheSun = false;
        }
    }
    if(World.getThreadTime()%50 != 0)
        return;
    let water = Scales.getScaleValue(player, "water");
    water -= isInTheSun? WaterData.sun[0]/balance : WaterData.sun[1]/balance;
    // check block destroying
    if(isDestroyingBlock[player]){
        water-=WaterData.destroy/balance;
        isDestroyingBlock[player] = false;
    }
    // check player moving
    let state = EntityState.getPlayerState(player);
    if(state.checkFlags(EntityState.RUNNING) || state.checkFlags(EntityState.JUMPING)){
        water-=WaterData.jump/balance;
    } else if(state.checkFlags(EntityState.WALKING) || state.checkFlags(EntityState.SWIMMING) || state.checkFlags(EntityState.FLOATING)){
        water -= WaterData.run/balance;
    }
    Scales.setScaleValue(player, "water", water);
    // dehydration effects
    disableRegeneration = water <= 10;
    if(disableRegeneration){
        let actor = new PlayerActor(player)
        let hunger = actor.getHunger();
        if(hunger > 16){
            actor.setHunger(16);
            actor.setSaturation(actor.getSaturation() + hunger - 16);
        }
    }
    if(water <= 6){
        Entity.addEffect(player, MobEffect.movementSlowdown, 2 - Math.ceil(water/3), 30);
    }
    if(water <= 3){
        Entity.addEffect(player, MobEffect.weakness, 1, 30);
    }
    if(water <= 0){
        Entity.addEffect(player, MobEffect.blindness, 0, 40);
        if(World.getThreadTime()%100 == 0){
            Entity.damageEntity(player, 1);
        }
    }
});

ModAPI.registerAPI("_ThirstMod", {
    Scales: Scales,
    requireGlobal(code){
        eval(code);
    }
});


Callback.addCallback("DestroyBlockContinue", function(coords, block, progress, player){
    isDestroyingBlock[player] = true;
});*/
