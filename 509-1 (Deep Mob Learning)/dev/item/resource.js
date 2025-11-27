IDRegistry.genItemID("charred_redstone");
Item.createItem("charred_redstone", "Soot-covered Redstone", {name: "charred_redstone"});

Item.registerNameOverrideFunction(ItemID.charred_redstone, function(item, name){
    return name + "\n§7Crafted by crushing §c" + Item.getName(331) + " §7against a §f" + Item.getName(173) + " §7(long tap)";
});

Callback.addCallback("DestroyBlockStart", function(coords, block){
    if(block.id === 173 && Player.getCarriedItem().id === 331){
        Player.decreaseCarriedItem();
        World.drop(coords.x + 0.5, coords.y + 1, coords.z + 0.5, ItemID.charred_redstone, 1, 0);
        Particles.addParticle(Native.ParticleType.smoke, coords.x + 0.5, coords.y + 1, coords.z + 0.5, 0, 0, 0);
    }
});

IDRegistry.genItemID("charred_plate");
Item.createItem("charred_plate", "Soot-covered Plate", {name: "charred_plate"});
Recipes2.addShapeless(ItemID.charred_plate, [ItemID.charred_redstone, {id: 49, count: 3}]);

IDRegistry.genBlockID("charred_machine");
Block.createBlock("charred_machine", [{name: "Soot-covered Machine Casing", texture: [["charred_machine", 0]], inCreative: true}]);
Recipes2.addShaped(BlockID.charred_machine, "aba:bcb:aba", {a: ItemID.charred_plate, b: 265, c: ItemID.charred_redstone});

IDRegistry.genItemID("polymer_clay");
Item.createItem("polymer_clay", "Polymer Clay", {name: "polymer_clay"});
Recipes2.addShaped({id: ItemID.polymer_clay, count: 16}, "abo:bcb:obd", {a: 266, b: 337, c: {id: 351, data: 4}, d: 265});


const matterXP = {};
const matterUseFunction = function(coords, item){
    const count = Entity.getSneaking(player) ? item.count : 1;
    Player.addExperience(matterXP[item.id] * count);
    Player.decreaseCarriedItem(count);
};

matterXP[IDRegistry.genItemID("matter_overworld")] = 10;
Item.createItem("matter_overworld", "Overworldian Matter", {name: "matter_overworld"});
Item.registerUseFunction("matter_overworld", matterUseFunction);

matterXP[IDRegistry.genItemID("matter_hell")] = 14;
Item.createItem("matter_hell", "Hellish Matter", {name: "matter_hell"});
Item.registerUseFunction("matter_hell", matterUseFunction);
Recipes2.addShaped(ItemID.matter_hell, "oao:aba:oao", {a: ItemID.matter_overworld, b: 87});

matterXP[IDRegistry.genItemID("matter_extra")] = 20;
Item.createItem("matter_extra", "Extraterrestrial Matter", {name: "matter_extra"});
Item.registerUseFunction("matter_extra", matterUseFunction);
Recipes2.addShaped(ItemID.matter_extra, "oao:aba:oao", {a: ItemID.matter_hell, b: 121});


Callback.addCallback("PreLoaded", function(){
    if(__config__.getBool("matter_recipe")){
        Recipes2.addShapeless({id: 30, count: 4}, [287, 341, {id: ItemID.matter_overworld, count: 2}]);
        Recipes2.addShapeless({id: 289, count: 16}, [ItemID.matter_overworld, {id: 263, data: 0}]);
        Recipes2.addShapeless({id: 375, count: 2}, [367, 260, 40, ItemID.matter_overworld]);
        Recipes2.addShapeless({id: 262, count: 12}, [280, 318, ItemID.matter_overworld]);
        Recipes2.addShapeless({id: 352, count: 22}, [ItemID.matter_overworld, {id: 351, data: 15}]);
        Recipes2.addShapeless({id: 265, count: 8}, [{id: ItemID.matter_overworld, count: 4}, 367]);
        Recipes2.addShapeless({id: 367, count: 16}, [ItemID.matter_overworld, 319]);
        Recipes2.addShapeless({id: 392, count: 2}, [ItemID.matter_overworld, 391]);
        Recipes2.addShapeless({id: 391, count: 2}, [ItemID.matter_overworld, 295]);
        Recipes2.addShapeless({id: 409, count: 2}, [ItemID.matter_overworld, 406]);
        Recipes2.addShapeless({id: 2, count: 4}, [3, 18, ItemID.matter_overworld]);
        Recipes2.addShapeless({id: 372, count: 4}, [ItemID.matter_hell, 40]);
        Recipes2.addShapeless({id: 266, count: 6}, [348, 265, ItemID.matter_hell]);
        Recipes2.addShapeless({id: 370, count: 3}, [375, 353, {id: ItemID.matter_hell, count: 2}]);
        Recipes2.addShapeless(369, [352, {id: ItemID.matter_hell, count: 2}]);
        Recipes2.addShapeless({id: 377, count: 2}, [ItemID.matter_hell, 289]);
        Recipes2.addShapeless({id: 88, count: 4}, [ItemID.matter_hell, 12]);
        Recipes2.addShapeless(432, [ItemID.matter_extra, 260]);
        Recipes2.addShaped(399, "aba:ccc:oco", {a: {id: 397, data: 1}, b: ItemID.matter_extra, c: 88});
        Recipes2.addShapeless(368, [ItemID.matter_extra, 388, 332, 341]);
        Recipes2.addShapeless({id: 121, count: 8}, [{id: 24, count: 2}, 368, ItemID.matter_extra]);  
    }
});