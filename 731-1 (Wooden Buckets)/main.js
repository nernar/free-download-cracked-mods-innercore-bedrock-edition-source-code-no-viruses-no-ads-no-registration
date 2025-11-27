//сообщение внизу экрана:
alert("«Wooden Buckets» by Максим Помазуев");

//сообщение в чате игры:
Callback.addCallback("LevelLoaded", function(){
Game.message("§9«Wooden Buckets» by Максим Помазуев");
});

//добавляем "setTimeout" function
const setTimeout = function(func, ticks){
    var upd = {
        ticks: 0,
        update: function(){
            this.ticks++
            if(this.ticks >= ticks){
                func();
                this.remove = true
            }
        }
    };
    Updatable.addUpdatable(upd);
};

//создание вёдер
//деревянное
IDRegistry.genItemID("woodenBucket"); 
Item.createItem("woodenBucket", "Wooden bucket", {name: "wooden_bucket", meta: 0}, {stack: 1});
Item.setLiquidClip("woodenBucket",true);
Translation.addTranslation("Wooden bucket", {ru: "Деревянное ведро"});


//ведро с водой
IDRegistry.genItemID("woodenWaterBucket");
Item.createItem("woodenWaterBucket", "Wooden bucket with water", {name: "wooden_water_bucket", meta: 0}, {stack: 1});
//Item.setLiquidClip("woodenWaterBucket",true);
Translation.addTranslation("Wooden bucket with water", {ru: "Деревянное ведро воды"});

//ведро с лавой
IDRegistry.genItemID("woodenLavaBucket");
Item.createItem("woodenLavaBucket", "Wooden bucket with lava", {name: "wooden_lava_bucket", meta: 0}, {stack: 1});
Translation.addTranslation("Wooden bucket with lava", {ru: "Деревянное ведро лавы"});


//ведро с молоком
IDRegistry.genItemID("woodenMilkBucket"); 
Item.createFoodItem("woodenMilkBucket", "Wooden bucket with milk", {name: "wooden_milk_bucket", meta: 0}, {food: 0, stack: 1});
Translation.addTranslation("Wooden bucket with milk", {ru: "Деревянное ведро с молоком"});



Callback.addCallback("PreLoaded", function(){
//делаем чтоб вёдра горели в печке:
Recipes.addFurnaceFuel(ItemID.woodenBucket, 0, 300);
Recipes.addFurnaceFuel(ItemID.woodenLavaBucket, 0, 20000);

//добавляем рецепты:
for(var i = 0; i < 6; i++){
Recipes.addShaped({id: ItemID.woodenBucket, count: 1, data: 0},
	["*c*" ,"a*a", "*a*"], 
	['c', 280, 0, 'a', 5, i])};
	
//создаем рецепт торта
Recipes.addShaped({id: 354, count: 1, data: 0},
["aaa", "bcb", "ddd"],
['a', ItemID.woodenMilkBucket, 0, 'b', 353, 0, 'c', 344, 0, 'd', 296, 0]);
});

//физика предметов
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){
let client = Network.getClientForPlayer(player);
let blockSource = BlockSource.getDefaultForActor(player);
if (client != null){
//физика деревянного ведра (+вода)
if (item.id == ItemID.woodenBucket && (block.id == 9 || block.id == 8)){
blockSource.setBlock(coords.x, coords.y, coords.z, 0, 0);
Player.setCarriedItem(ItemID.woodenWaterBucket, 1, 0, null);
};
//физика деревянного ведра (-вода)
if(item.id == ItemID.woodenWaterBucket && blockSource.getBlockId(coords.x, coords.y, coords.z) != 0 && Block.isSolid(blockSource.getBlockId(coords.x, coords.y, coords.z)) == true){
//низ
if(blockSource.getBlockId(coords.x, coords.y-1, coords.z) == 0 && Player.getPointed().pos.side == 0){
blockSource.setBlock(coords.x, coords.y-1, coords.z, 8, 0);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
};
//верх
if(blockSource.getBlockId(coords.x, coords.y+1, coords.z) == 0 && Player.getPointed().pos.side == 1){
blockSource.setBlock(coords.x, coords.y+1, coords.z, 8, 0);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
};
//север
if(blockSource.getBlockId(coords.x, coords.y, coords.z-1) == 0 && Player.getPointed().pos.side == 2){
blockSource.setBlock(coords.x, coords.y, coords.z-1, 8, 0);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
};
//юг
if(blockSource.getBlockId(coords.x, coords.y, coords.z+1) == 0 && Player.getPointed().pos.side == 3){
blockSource.setBlock(coords.x, coords.y, coords.z+1, 8, 0);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
};
//запад
if(blockSource.getBlockId(coords.x-1, coords.y, coords.z) == 0 && Player.getPointed().pos.side == 4){
blockSource.setBlock(coords.x-1, coords.y, coords.z, 8, 0);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
};
//восток
if(blockSource.getBlockId(coords.x+1, coords.y, coords.z) == 0 && Player.getPointed().pos.side == 5){
blockSource.setBlock(coords.x+1, coords.y, coords.z, 8, 0);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
}
};
//физика деревянного ведра (+лава)
if (item.id == ItemID.woodenBucket && (block.id == 10 || block.id == 11)){
blockSource.setBlock(coords.x, coords.y, coords.z, 0, 0);
Player.setCarriedItem(ItemID.woodenLavaBucket, 1, 0, null);
};
}
});

//физика деревянного ведра (для котла)
Callback.addCallback("ItemUseLocalServer", function (coords, item, block, isExternal, player){
let client = Network.getClientForPlayer(player);
let blockSource = BlockSource.getDefaultForActor(player);
if (client != null){
//убираем воду из котла
if(item.id == ItemID.woodenBucket && block.id == 118 && block.data == 6){
blockSource.setBlock(coords.x, coords.y, coords.z, 118, 0);
Player.setCarriedItem(ItemID.woodenWaterBucket, 1, 0, null);
};
//добавляем воду в котёл
if(item.id == ItemID.woodenWaterBucket && block.id == 118 && (block.data == 0 || block.data == 1 || block.data == 2 || block.data == 3 || block.data == 4 || block.data == 5)){
blockSource.setBlock(coords.x, coords.y, coords.z, 118, 6);
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
};
}
});

//делаем что бы можно было доить коров
Callback.addCallback("EntityInteract", function (entity, player){
if((Entity.getType(entity) == 11 || Entity.getType(entity) == 16) && Player.getCarriedItem().id == ItemID.woodenBucket){
Player.setCarriedItem(ItemID.woodenMilkBucket, 1, 0, null);
}
});

//делаем эффект молока
Callback.addCallback("FoodEaten", function(heal, satRatio, player){
if(Player.getCarriedItem().id == ItemID.woodenMilkBucket){
setTimeout(function(){
Player.setCarriedItem(ItemID.woodenBucket, 1, 0, null);
}, 0.01);
Entity.clearEffects(player);

}
});

Callback.addCallback("VanillaWorkbenchCraft", function (result, container, player){
switch (result.id){
case VanillaBlockID.cake:
Player.addItemToInventory(ItemID.woodenBucket, 1, 0, null, false);
Player.addItemToInventory(ItemID.woodenBucket, 1, 0, null, false);
Player.addItemToInventory(ItemID.woodenBucket, 1, 0, null, false);
break;
}
});

//делаем чтоб лава разливалась)
Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead){
for(var q = 0; q < 36; q++){
var pos = Entity.getPosition(player);
var blockSource = BlockSource.getDefaultForActor(player);
var slot = Player.getInventorySlot(q);
if(slot.id == ItemID.woodenLavaBucket){
blockSource.setBlock(pos.x, pos.y, pos.z, 10, 0);
Player.setInventorySlot(q, 263, 1, 1, null);
}
}
});
