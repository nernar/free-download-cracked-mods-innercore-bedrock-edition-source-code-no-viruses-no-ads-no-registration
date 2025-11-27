//Создание Сердец
IDRegistry.genItemID("heart");
IDRegistry.genItemID("gold_heart");
IDRegistry.genItemID("crystal_heart");

Item.createItem("heart", "Heart", {name: "heart", meta: 0}, {stack: 1});
Item.createItem("gold_heart", "Golden Heart", {name: "gold_heart", meta: 0}, {stack: 1});
Item.createItem("crystal_heart", "Crystal Heart", {name: "crystal_heart", meta: 0}, {stack: 1});

Item.setGlint(ItemID.gold_heart, true);
Item.setGlint(ItemID.crystal_heart, true);

Item.addCreativeGroup("hearts", Translation.translate("Hearts"), [
    	ItemID.heart,
    	ItemID.gold_heart,
    	ItemID.crystal_heart
]);

//Выпадание
Callback.addCallback("EntityDeath", function(entity, attacker, damageType){
//entity
let getMaxHealth = Entity.getMaxHealth(entity);
let pos = Entity.getPosition(entity);
let region = BlockSource.getDefaultForActor(entity);
//attacker
let getHealth = Entity.getHealth(attacker);
let getMaxHealthAttacker = Entity.getMaxHealth(attacker);
//work
if(getHealth < getMaxHealthAttacker && Entity.getType(attacker) == 63){
region.spawnDroppedItem(pos.x, pos.y, pos.z, ItemID.heart, getRandomInt(2, 5), 0, null);
if(getMaxHealth <= 49){
    if(Math.random() < 0.05){
region.spawnDroppedItem(pos.x, pos.y, pos.z, ItemID.crystal_heart, 1, 0, null);
} else {
    if(Math.random() < 0.5){
        if(getHealth <= Math.ceil(((getMaxHealthAttacker / 100) * 25))){
            region.spawnDroppedItem(pos.x, pos.y, pos.z, ItemID.gold_heart, 1, 0, null)
        }
}}};
if(getMaxHealth >= 50){
    if(Math.random() < 0.2){
        region.spawnDroppedItem(pos.x, pos.y, pos.z, ItemID.crystal_heart, 1, 0, null);
} else {
    if(getHealth <= Math.ceil(((getMaxHealthAttacker / 100) * 25))){
blockSource.spawnDroppedItem(pos.x, pos.y, pos.z, ItemID.gold_heart, 1, 0, null);
}}}};
});

//использование
Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead){
let nomer = getRandomInt(0, effects.length);
let effect = effects[nomer];
let getHealth = Entity.getHealth(player);
for(let i = 0; i < 36; i++){
let slot = Player.getInventorySlot(i);

//сердце
    if(slot.id == ItemID.heart){
    Player.setInventorySlot(i, slot.id, slot.count - 1, slot.data, slot.extra);
    Player.setHealth(getHealth + 1)};
    
//золотое сердце
    if(slot.id == ItemID.gold_heart){
    Player.setInventorySlot(i, slot.id, slot.count - 1, slot.data, slot.extra);
    Entity.addEffect(player, 22, 0, 2400, config, config);
    Entity.addEffect(player, 10, 0, 75, config, config)};

//хрустальное сердце
if(slot.id == ItemID.crystal_heart){
    Player.setInventorySlot(i, slot.id, slot.count - 1, slot.data, slot.extra);
    Entity.setHealth(player, getHealth + 3);
    Entity.addEffect(player, effect, 0, 22500, config, config);
}};
});
