/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 1
*/



// file: main.js




importLib("ENV", "*");




var itemdef = {
addItem: function(id, material, i1, i2){
IDRegistry.genItemID(id + "t");
Item.createItem(id + "t", id + " Hammer", {name: id + "t", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "t"], true);
ToolAPI.registerTool(ItemID[id + "t"], material, ["stone"], {damage: 5});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "t"], count: 1, data: 0}, [
	"aaa",
	"aba",
	" b "
], ['a', i1, -1, 'b', i2, -1]);});
	}
}

ToolAPI.addToolMaterial("gold", {
      durability: 36, 
      level: 2, 
      efficiency: 20, 
      damage: 0, 
      enchantability: 15
});

ToolAPI.addToolMaterial("obsidian", {
      durability: 77777, 
      level: 8, 
      efficiency: 20, 
      damage: 10, 
      enchantability: 15
});


ToolAPI.addToolMaterial("netherite", {
      durability: 5000, 
      level: 9, 
      efficiency: 25, 
      damage: 15, 
      enchantability: 20
});








itemdef.addItem("Wood", "wood", 5, 280);
itemdef.addItem("Stone", "stone", 4, 280);
itemdef.addItem("Gold", "gold", 266, 280);
itemdef.addItem("Iron", "iron", 265, 280);
itemdef.addItem("Diamond", "diamond", 264, 280);
itemdef.addItem("Obsidian", "obsidian", 49, 280);
itemdef.addItem("Netherite", "netherite", VanillaItemID.netherite_ingot, 280);



Item.setEnchantType(ItemID.Woodt, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.Stonet, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.Goldt, Native.EnchantType.pickaxe, 50);
Item.setEnchantType(ItemID.Iront, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.Diamondt, Native.EnchantType.pickaxe, 14);
Item.setEnchantType(ItemID.Netheritet, Native.EnchantType.pickaxe, 14);



Item.addRepairItemIds(ItemID.Woodt, [17]);
Item.addRepairItemIds(ItemID.Stonet, [4]);
Item.addRepairItemIds(ItemID.Goldt, [266]);
Item.addRepairItemIds(ItemID.Iront, [265]);
Item.addRepairItemIds(ItemID.Diamondt, [264]);
Item.addRepairItemIds(ItemID.Netheritet, [VanillaItemID.netherite_ingot]);


Item.addCreativeGroup("Hammmers", Translation.translate("Hammmers"), [
	ItemID.Woodt,
	ItemID.Stonet,
	ItemID.Iront,
	ItemID.Goldt,
	ItemID.Diamondt,
	ItemID.Netheritet,
	ItemID.Obsidiant
]);






Callback.addCallback("ItemUse", function (coords, item, block) {
var tool = [257, 270, 274, 278, 285, ItemID.Woodt, ItemID.Stonet, ItemID.Goldt, ItemID.Iront, ItemID.Diamondt, ItemID.Obsidiant, ItemID.Netheritet];
var side = coords.side;
coords = coords.relative;
block = World.getBlockID(coords.x, coords.y, coords.z);
for(var t=0; t<15; t++)
if(item.id==tool[t]&&block==0){
for(var i = 0; i < 36; i++){
var slot = Player.getInventorySlot(i);
if(slot.id==50){
slot.count--;
if(!slot.count) slot.id = 0;
Player.setInventorySlot(i, slot.id, slot.count, 0);
World.setBlock(coords.x, coords.y, coords.z, 50, (6 - side)%6);
}}}});


Callback.addCallback("DestroyBlock", function(coords, block, player){
if(Entity.getSneaking(Player.get())){

for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=1; yy++){
for(var zz = -1; zz <=1; zz++){
item=Player.getCarriedItem(true);
if(World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.Woodt||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.Stonet||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.Goldt||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.Iront||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.Diamondt||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.Netheritet||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz)== block.id&&item.id==ItemID.Obsidiant) {
World.destroyBlock(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz, true);}}}};}});

























IDRegistry.genBlockID("randomblock"); Block.createBlock("randomblock", [ {name: "Random Item Block", texture: [["Random_Block", 0], ["Random_Block", 0], ["Random_Block", 0], ["Random_Block", 0], ["Random_Block", 0], ["Random_Block", 0]], inCreative: true}]);



Recipes.addShaped({id: BlockID.randomblock, count: 1, data: 0}, [ "aaa", "aba", "aca" ], ['a', 266, 0, 'b', 264, 0, 'c', 54, 0]);

Block.registerDropFunction("randomblock", function(coords, blockID, blockData, level){
	var drop = getDropBlock();
	World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
	return [];
});

var Random_Block_DROP = [


	{chance: 1, id: 1, data: 0},
	{chance: 1, id: 2, data: 0},
	{chance: 1, id: 3, data: 0},
	{chance: 1, id: 4, data: 0},
	{chance: 1, id: 5, data: 0},
	{chance: 1, id: 6, data: 0},
	{chance: 1, id: 7, data: 0},
	{chance: 1, id: 8, data: 0},
	{chance: 1, id: 9, data: 0},
	{chance: 1, id: 10, data: 0},
	{chance: 1, id: 11, data: 0},
	{chance: 1, id: 12, data: 0},
	{chance: 1, id: 13, data: 0},
	{chance: 1, id: 14, data: 0},
	{chance: 1, id: 15, data: 0},
	{chance: 1, id: 16, data: 0},
	{chance: 1, id: 17, data: 0},
	{chance: 1, id: 18, data: 0},
	{chance: 1, id: 19, data: 0},
	{chance: 1, id: 20, data: 0},
	{chance: 1, id: 21, data: 0},
	{chance: 1, id: 22, data: 0},
	{chance: 1, id: 23, data: 0},
	{chance: 1, id: 24, data: 0},
	{chance: 1, id: 25, data: 0},
	{chance: 1, id: 26, data: 0},
	{chance: 1, id: 27, data: 0},
	{chance: 1, id: 28, data: 0},
	{chance: 1, id: 29, data: 0},
	{chance: 1, id: 30, data: 0},
	{chance: 1, id: 31, data: 0},
	{chance: 1, id: 32, data: 0},
	{chance: 1, id: 33, data: 0},
	{chance: 1, id: 34, data: 0},
	{chance: 1, id: 35, data: 0},
	{chance: 1, id: 36, data: 0},
	{chance: 1, id: 37, data: 0},
	{chance: 1, id: 38, data: 0},
	{chance: 1, id: 39, data: 0},
	{chance: 1, id: 40, data: 0},
	{chance: 1, id: 41, data: 0},
	{chance: 1, id: 42, data: 0},
	{chance: 1, id: 43, data: 0},
	{chance: 1, id: 44, data: 0},
	{chance: 1, id: 45, data: 0},
	{chance: 1, id: 46, data: 0},
	{chance: 1, id: 47, data: 0},
	{chance: 1, id: 48, data: 0},
	{chance: 1, id: 49, data: 0},
	{chance: 1, id: 50, data: 0},
	{chance: 1, id: 51, data: 0},
	{chance: 1, id: 52, data: 0},
	{chance: 1, id: 53, data: 0},
	{chance: 1, id: 54, data: 0},
	{chance: 1, id: 55, data: 0},
	{chance: 1, id: 56, data: 0},
	{chance: 1, id: 57, data: 0},
	{chance: 1, id: 58, data: 0},
	{chance: 1, id: 59, data: 0},
	{chance: 1, id: 60, data: 0},
	{chance: 1, id: 61, data: 0},
	{chance: 1, id: 62, data: 0},
	{chance: 1, id: 63, data: 0},
	{chance: 1, id: 64, data: 0},
	{chance: 1, id: 65, data: 0},
	{chance: 1, id: 66, data: 0},
	{chance: 1, id: 67, data: 0},
	{chance: 1, id: 68, data: 0},
	{chance: 1, id: 69, data: 0},
	{chance: 1, id: 70, data: 0},
	{chance: 1, id: 71, data: 0},
	{chance: 1, id: 72, data: 0},
	{chance: 1, id: 73, data: 0},
	{chance: 1, id: 74, data: 0},
	{chance: 1, id: 75, data: 0},
	{chance: 1, id: 76, data: 0},
	{chance: 1, id: 78, data: 0},
	{chance: 1, id: 79, data: 0},
	{chance: 1, id: 80, data: 0},
	{chance: 1, id: 81, data: 0},
	{chance: 1, id: 82, data: 0},
	{chance: 1, id: 83, data: 0},
	{chance: 1, id: 84, data: 0},
	{chance: 1, id: 85, data: 0},
	{chance: 1, id: 86, data: 0},
	{chance: 1, id: 87, data: 0},
	{chance: 1, id: 88, data: 0},
	{chance: 1, id: 89, data: 0},
	{chance: 1, id: 90, data: 0},
	{chance: 1, id: 91, data: 0},
	{chance: 1, id: 92, data: 0},
	{chance: 1, id: 93, data: 0},
	{chance: 1, id: 94, data: 0},
	{chance: 1, id: 95, data: 0},
	{chance: 1, id: 96, data: 0},
	{chance: 1, id: 97, data: 0},
	{chance: 1, id: 98, data: 0},
	{chance: 1, id: 99, data: 0},
	{chance: 1, id: 100, data: 0},
	{chance: 1, id: 101, data: 0},
	{chance: 1, id: 102, data: 0},
	{chance: 1, id: 103, data: 0},
	{chance: 1, id: 104, data: 0},
	{chance: 1, id: 105, data: 0},
	{chance: 1, id: 106, data: 0},
	{chance: 1, id: 107, data: 0},
	{chance: 1, id: 108, data: 0},
	{chance: 1, id: 109, data: 0},
	{chance: 1, id: 110, data: 0},
	{chance: 1, id: 111, data: 0},
	{chance: 1, id: 112, data: 0},
	{chance: 1, id: 113, data: 0},
	{chance: 1, id: 114, data: 0},
	{chance: 1, id: 115, data: 0},
	{chance: 1, id: 116, data: 0},
	{chance: 1, id: 117, data: 0},
	{chance: 1, id: 118, data: 0},
	{chance: 1, id: 119, data: 0},
	{chance: 1, id: 120, data: 0},
	{chance: 1, id: 121, data: 0},
	{chance: 1, id: 122, data: 0},
	{chance: 1, id: 123, data: 0},
	{chance: 1, id: 124, data: 0},
	{chance: 1, id: 125, data: 0},
	{chance: 1, id: 126, data: 0},
	{chance: 1, id: 127, data: 0},
	{chance: 1, id: 128, data: 0},
	{chance: 1, id: 129, data: 0},
	{chance: 1, id: 130, data: 0},
	{chance: 1, id: 131, data: 0},
	{chance: 1, id: 132, data: 0},
	{chance: 1, id: 133, data: 0},
	{chance: 1, id: 134, data: 0},
	{chance: 1, id: 135, data: 0},
	{chance: 1, id: 136, data: 0},
	{chance: 1, id: 137, data: 0},
	{chance: 1, id: 138, data: 0},
	{chance: 1, id: 139, data: 0},
	{chance: 1, id: 140, data: 0},
	{chance: 1, id: 141, data: 0},
	{chance: 1, id: 142, data: 0},
	{chance: 1, id: 143, data: 0},
	{chance: 1, id: 144, data: 0},
	{chance: 1, id: 145, data: 0},
	{chance: 1, id: 146, data: 0},
	{chance: 1, id: 147, data: 0},
	{chance: 1, id: 148, data: 0},
	{chance: 1, id: 149, data: 0},
	{chance: 1, id: 150, data: 0},
	{chance: 1, id: 151, data: 0},
	{chance: 1, id: 152, data: 0},
	{chance: 1, id: 153, data: 0},
	{chance: 1, id: 154, data: 0},
	{chance: 1, id: 155, data: 0},
	{chance: 1, id: 156, data: 0},
	{chance: 1, id: 157, data: 0},
	{chance: 1, id: 158, data: 0},
	{chance: 1, id: 159, data: 0},
	{chance: 1, id: 160, data: 0},
	{chance: 1, id: 161, data: 0},
	{chance: 1, id: 162, data: 0},
	{chance: 1, id: 163, data: 0},
	{chance: 1, id: 164, data: 0},
	{chance: 1, id: 165, data: 0},
	{chance: 1, id: 166, data: 0},
	{chance: 1, id: 167, data: 0},
	{chance: 1, id: 168, data: 0},
	{chance: 1, id: 169, data: 0},
	{chance: 1, id: 170, data: 0},
	{chance: 1, id: 171, data: 0},
	{chance: 1, id: 172, data: 0},
	{chance: 1, id: 173, data: 0},
	{chance: 1, id: 174, data: 0},
	{chance: 1, id: 175, data: 0},
	{chance: 1, id: 176, data: 0},
	{chance: 1, id: 177, data: 0},
	{chance: 1, id: 178, data: 0},
	{chance: 1, id: 179, data: 0},
	{chance: 1, id: 180, data: 0},
	{chance: 1, id: 181, data: 0},
	{chance: 1, id: 182, data: 0},
	{chance: 1, id: 183, data: 0},
	{chance: 1, id: 184, data: 0},
	{chance: 1, id: 185, data: 0},
	{chance: 1, id: 186, data: 0},
	{chance: 1, id: 187, data: 0},
	{chance: 1, id: 188, data: 0},
	{chance: 1, id: 189, data: 0},
	{chance: 1, id: 190, data: 0},
	{chance: 1, id: 191, data: 0},
	{chance: 1, id: 192, data: 0},
	{chance: 1, id: 193, data: 0},
	{chance: 1, id: 194, data: 0},
	{chance: 1, id: 195, data: 0},
	{chance: 1, id: 196, data: 0},
	{chance: 1, id: 197, data: 0},
	{chance: 1, id: 198, data: 0},
	{chance: 1, id: 199, data: 0},
	{chance: 1, id: 200, data: 0},
	{chance: 1, id: 201, data: 0},
	{chance: 1, id: 202, data: 0},
	{chance: 1, id: 203, data: 0},
	{chance: 1, id: 204, data: 0},
	{chance: 1, id: 205, data: 0},
	{chance: 1, id: 206, data: 0},
	{chance: 1, id: 207, data: 0},
	{chance: 1, id: 208, data: 0},
	{chance: 1, id: 209, data: 0},
	{chance: 1, id: 210, data: 0},
	{chance: 1, id: 211, data: 0},
	{chance: 1, id: 212, data: 0},
	{chance: 1, id: 213, data: 0},
	{chance: 1, id: 214, data: 0},
	{chance: 1, id: 215, data: 0},
	{chance: 1, id: 216, data: 0},
	{chance: 1, id: 217, data: 0},
	{chance: 1, id: 218, data: 0},
	{chance: 1, id: 219, data: 0},
	{chance: 1, id: 220, data: 0},
	{chance: 1, id: 221, data: 0},
	{chance: 1, id: 222, data: 0},
	{chance: 1, id: 223, data: 0},
	{chance: 1, id: 224, data: 0},
	{chance: 1, id: 225, data: 0},
	{chance: 1, id: 226, data: 0},
	{chance: 1, id: 227, data: 0},
	{chance: 1, id: 228, data: 0},
	{chance: 1, id: 229, data: 0},
	{chance: 1, id: 230, data: 0},
	{chance: 1, id: 231, data: 0},
	{chance: 1, id: 232, data: 0},
	{chance: 1, id: 233, data: 0},
	{chance: 1, id: 234, data: 0},
	{chance: 1, id: 235, data: 0},
	{chance: 1, id: 236, data: 0},
	{chance: 1, id: 237, data: 0},
	{chance: 1, id: 238, data: 0},
	{chance: 1, id: 239, data: 0},
	{chance: 1, id: 240, data: 0},
	{chance: 1, id: 241, data: 0},
	{chance: 1, id: 242, data: 0},
	{chance: 1, id: 243, data: 0},
	{chance: 1, id: 244, data: 0},
	{chance: 1, id: 245, data: 0},
	{chance: 1, id: 246, data: 0},
	{chance: 1, id: 247, data: 0},
	{chance: 1, id: 248, data: 0},
	{chance: 1, id: 249, data: 0},
	{chance: 1, id: 250, data: 0},
	{chance: 1, id: 251, data: 0},
	{chance: 1, id: 252, data: 0},
	{chance: 1, id: 253, data: 0},
	{chance: 1, id: 254, data: 0},
	{chance: 1, id: 255, data: 0},
	{chance: 1, id: 256, data: 0},
	{chance: 1, id: 257, data: 0},
	{chance: 1, id: 258, data: 0},
	{chance: 1, id: 259, data: 0},
	{chance: 1, id: 260, data: 0},
	{chance: 1, id: 261, data: 0},
	{chance: 1, id: 262, data: 0},
	{chance: 1, id: 262, data: 0},
	{chance: 1, id: 263, data: 0},
	{chance: 1, id: 264, data: 0},
	{chance: 1, id: 265, data: 0},
	{chance: 1, id: 266, data: 0},
	{chance: 1, id: 267, data: 0},
	{chance: 1, id: 268, data: 0},
	{chance: 1, id: 269, data: 0},
	{chance: 1, id: 270, data: 0},
	{chance: 1, id: 271, data: 0},
	{chance: 1, id: 272, data: 0},
	{chance: 1, id: 273, data: 0},
	{chance: 1, id: 274, data: 0},
	{chance: 1, id: 275, data: 0},
	{chance: 1, id: 276, data: 0},
	{chance: 1, id: 277, data: 0},
	{chance: 1, id: 278, data: 0},
	{chance: 1, id: 279, data: 0},
	{chance: 1, id: 280, data: 0},
	{chance: 1, id: 281, data: 0},
	{chance: 1, id: 282, data: 0},
	{chance: 1, id: 283, data: 0},
	{chance: 1, id: 284, data: 0},
	{chance: 1, id: 285, data: 0},
	{chance: 1, id: 286, data: 0},
	{chance: 1, id: 287, data: 0},
	{chance: 1, id: 288, data: 0},
	{chance: 1, id: 289, data: 0},
	{chance: 1, id: 290, data: 0},
	{chance: 1, id: 291, data: 0},
	{chance: 1, id: 292, data: 0},
	{chance: 1, id: 293, data: 0},
	{chance: 1, id: 294, data: 0},
	{chance: 1, id: 295, data: 0},
	{chance: 1, id: 296, data: 0},
	{chance: 1, id: 297, data: 0},
	{chance: 1, id: 298, data: 0},
	{chance: 1, id: 299, data: 0},
	{chance: 1, id: 300, data: 0},
	{chance: 1, id: 301, data: 0},
	{chance: 1, id: 302, data: 0},
	{chance: 1, id: 303, data: 0},
	{chance: 1, id: 304, data: 0},
	{chance: 1, id: 305, data: 0},
	{chance: 1, id: 306, data: 0},
	{chance: 1, id: 307, data: 0},
	{chance: 1, id: 308, data: 0},
	{chance: 1, id: 309, data: 0},
	{chance: 1, id: 310, data: 0},
	{chance: 1, id: 311, data: 0},
	{chance: 1, id: 312, data: 0},
	{chance: 1, id: 313, data: 0},
	{chance: 1, id: 314, data: 0},
	{chance: 1, id: 315, data: 0},
	{chance: 1, id: 316, data: 0},
	{chance: 1, id: 317, data: 0},
	{chance: 1, id: 320, data: 0},
	{chance: 1, id: 321, data: 0},
	{chance: 1, id: 322, data: 0},
	{chance: 1, id: 323, data: 0},
	{chance: 1, id: 324, data: 0},
	{chance: 1, id: 325, data: 0},
	{chance: 1, id: 326, data: 0},
	{chance: 1, id: 327, data: 0},
	{chance: 1, id: 328, data: 0},
	{chance: 1, id: 329, data: 0},
	{chance: 1, id: 330, data: 0},
	{chance: 1, id: 331, data: 0},
	{chance: 1, id: 332, data: 0},
	{chance: 1, id: 333, data: 0},
	{chance: 1, id: 334, data: 0},
	{chance: 1, id: 335, data: 0},
	{chance: 1, id: 336, data: 0},
	{chance: 1, id: 337, data: 0},
	{chance: 1, id: 338, data: 0},
	{chance: 1, id: 339, data: 0},
	{chance: 1, id: 340, data: 0},
	{chance: 1, id: 341, data: 0},
	{chance: 1, id: 342, data: 0},
	{chance: 1, id: 343, data: 0},
	{chance: 1, id: 344, data: 0},
	{chance: 1, id: 345, data: 0},
	{chance: 1, id: 346, data: 0},
	{chance: 1, id: 347, data: 0},
	{chance: 1, id: 348, data: 0},
	{chance: 1, id: 349, data: 0},
	{chance: 1, id: 350, data: 0},
	{chance: 1, id: 351, data: 0},
	{chance: 1, id: 352, data: 0},
	{chance: 1, id: 353, data: 0},
	{chance: 1, id: 354, data: 0},
	{chance: 1, id: 355, data: 0},
	{chance: 1, id: 356, data: 0},
	{chance: 1, id: 357, data: 0},
	{chance: 1, id: 358, data: 0},
	{chance: 1, id: 359, data: 0},
	{chance: 1, id: 360, data: 0},
	{chance: 1, id: 361, data: 0},
	{chance: 1, id: 362, data: 0},
	{chance: 1, id: 363, data: 0},
	{chance: 1, id: 364, data: 0},
	{chance: 1, id: 365, data: 0},
	{chance: 1, id: 366, data: 0},
	{chance: 1, id: 367, data: 0},
	{chance: 1, id: 368, data: 0},
	{chance: 1, id: 369, data: 0},
	{chance: 1, id: 370, data: 0},
	{chance: 1, id: 371, data: 0},
	{chance: 1, id: 372, data: 0},
	{chance: 1, id: 373, data: 0},
	{chance: 1, id: 374, data: 0},
	{chance: 1, id: 375, data: 0},
	{chance: 1, id: 376, data: 0},
	{chance: 1, id: 377, data: 0},
	{chance: 1, id: 378, data: 0},
	{chance: 1, id: 379, data: 0},
	{chance: 1, id: 380, data: 0},
	{chance: 1, id: 381, data: 0},
	{chance: 1, id: 382, data: 0},
	{chance: 1, id: 383, data: 0},
	{chance: 1, id: 384, data: 0}
	];
	
function getDropBlock(){
	var total = 0;
	for (var i in Random_Block_DROP){
		total += Random_Block_DROP[i].chance;
	}
	var random = Math.random() * total * 1.4;
	var current = 0;
	for (var i in Random_Block_DROP){
		var drop = Random_Block_DROP[i];
		if (current < random && current + drop.chance > random){
			return drop;
		}
		current += drop.chance;
	}
	return {id: 0, data: 0};
}

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y,  coords.z, BlockID.randomblock, 0);
        }}});








var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
	explosionres: 2
}, "stone");



IDRegistry.genItemID("rubyed");
Item.createItem("rubyed", "Ruby", {name: "rubyed", meta: 0}, {stack: 64});






IDRegistry.genBlockID("rubyedore");
Block.createBlock("rubyedore", [
	{name: "Ruby Ore", texture: [["rubyedore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.rubyedore, "stone", 3, true);

Block.registerDropFunction("rubyedore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
		return [[ItemID.rubyed, 1, 0]]
	}
	return [];
}, 3);

IDRegistry.genBlockID("blockofruby");
Block.createBlock("blockofruby", [
	{name: "Block of Ruby", texture: [["blockofruby", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.blockofruby, "stone", 2, true);
Block.setDestroyLevel("blockofruby", 2);




Recipes.addShaped({id: BlockID.blockofruby, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.rubyed, 0]);







Recipes.addShaped({id: ItemID.rubyed, count: 9, data: 0}, [
	"   ",
	" a ",
	"   "
], ['a', BlockID.blockofruby, 0]);



Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.rubyedore,
   data: 0,
   size: 4,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});










/*

IDRegistry.genBlockID("diaronlapiredcoalgold"); Block.createBlock("diaronlapiredcoalgold", [ {name: "Diaronlapiredcoalgold Ore", texture: [["lapis_ore", 0], ["redstone_ore", 0], ["diamond_ore", 0], ["iron_ore", 0], ["gold_ore", 0], ["coal_ore", 0]], inCreative: true}]);



Block.registerDropFunction("diaronlapiredcoalgold", function(coords, blockID, blockData, level, enchant){
	var drop = getDropBlock();
	World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
	
if(level > 2){
	if(enchant.silk){
	return [[blockID, 1, 0]];
	}
	ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
	
	return [];
}});










var sixore = [


	{chance: 1, id: 351, data: 4},
	{chance: 1, id: 264, data: 0},
	{chance: 1, id: 265, data: 0},
	{chance: 1, id: 266, data: 0},
	{chance: 1, id: 263, data: 0},
	{chance: 1, id: 331, data: 0},

	];
	
function getDropBlock(){
	var total = 0;
	for (var i in sixore){
		total += sixore[i].chance;
	}
	var random = Math.random() * total * 1.4;
	var current = 0;
	for (var i in sixore){
		var drop = sixore[i];
		if (current < random && current + drop.chance > random){
			return drop;
		}
		current += drop.chance;
	}
	return {id: 0, data: 0};
}






Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
  var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 60);
for (var q = 0; q < 15;q++){
  if (Math.random() < 7/10) GenerationUtils.genMinable(coords.x, coords.y, coords.z, {
   id: BlockID.diaronlapiredcoalgold,
   data: 0,
   size: 6,
   ratio: .3,
   checkerTile: 1,
   checkerMode: false
   });
}
});




