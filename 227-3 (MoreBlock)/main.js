IDRegistry.genBlockID("bigFur");
IDRegistry.genBlockID("lavaGen");
IDRegistry.genBlockID("furBrick");
IDRegistry.genBlockID("harderenCasingBlock");
IDRegistry.genBlockID("infusiblock");
IDRegistry.genBlockID("metalCasingBlock");
IDRegistry.genBlockID("bigChest");
Block.createBlockWithRotation("lavaGen", [{name: "Lava Generator", texture: [["lavaGen", 0], ["lavaGen", 0], ["lavaGen", 0], ["lavaGen", 0], ["lavaGen", 0], ["lavaGen", 0]], inCreative: true}], "opaque");
Block.createBlockWithRotation("bigFur", [{name: "Big Furnace Controller", texture: [["nFur", 0], ["nFur", 0], ["nFur", 0], ["nFur", 0], ["nFur", 0], ["nFur", 0]], inCreative: true}], "opaque");
Block.createBlockWithRotation("furBrick", [{name: "Casing Block", texture: [["casingBlock", 0], ["casingBlock", 0], ["casingBlock", 0], ["casingBlock", 0], ["casingBlock", 0], ["casingBlock", 0]], inCreative: true}], "opaque");
Block.createBlockWithRotation("infusiblock", [{name: "Auto Anvil", texture: [["antiVerstak", 0], ["antiVerstak", 0], ["antiVerstak", 0], ["antiVerstak", 0], ["antiVerstak", 0], ["antiVerstak", 0]], inCreative: true}], "opaque");
Block.createBlockWithRotation("harderenCasingBlock", [{name: "Improved Casing Block", texture:[["harderenCasingBlock", 0], ["harderenCasingBlock", 0], ["harderenCasingBlock", 0], ["harderenCasingBlock", 0], ["harderenCasingBlock", 0], ["harderenCasingBlock", 0]], inCreative: true}], "opaque");
Block.createBlockWithRotation("metalCasingBlock", [{name: "Metal Casing Block", texture: [["metalCasingBlock", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0]], inCreative: true}], "opaque");

Block.createBlockWithRotation("bigChest", [{name: "Big Chest", texture: [["sss", 0], ["sss", 0], ["sss", 0], ["ppp", 0], ["sss", 0], ["sss", 0]], inCreative: true}], "opaque");
//item
IDRegistry.genItemID("crudeSolution");
IDRegistry.genItemID("brickSolution");
IDRegistry.genItemID("treatedCrudeSolution");
IDRegistry.genItemID("treatedBrickSolution");
IDRegistry.genItemID("waterOrb");

IDRegistry.genItemID("bedrockLom");

Item.createItem("crudeSolution", "Crude Solution", {name: "crudeSolution", meta: 0}, {stack: 64});
Item.createItem("brickSolution", "Brick Solution", {name: "brickSolution", meta: 0}, {stack: 64});
Item.createItem("treatedCrudeSolution", "Treated Crude Solution", {name: "treatedCrudeSolution", meta: 0}, {stack: 64});
Item.createItem("treatedBrickSolution", "Treated Brick Solution", {name: "treatedBrickSolution", meta: 0}, {stack: 64});
Item.createItem("waterOrb", "Water Orb", {name: "waterOrb"}, {stack: 1});Item.setMaxDamage(ItemID.waterOrb, 94);

Item.createItem("bedrockLom", "Breaker of Bedrock", {name: "bedrockLom"}, {stack: 1});
//reciept
Recipes.addShaped({id: ItemID.crudeSolution, count: 4, data: 0}, ["bab","axa","bab"], ['x', 13, 0, 'a', 12, 0, 'b', 337, 0]);
Recipes.addFurnace(ItemID.crudeSolution, ItemID.brickSolution, 0); 
Recipes.addShaped({id: BlockID.furBrick, count: 3, data: 0}, [
"xxx","xax","xxx"], ['x', ItemID.brickSolution, 0, 'a', ItemID.crudeSolution, 0]);
Recipes.addShaped({id: BlockID.bigFur, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', BlockID.furBrick, 0, 'a', 61, -1]);	
Recipes.addShaped({id: ItemID.treatedCrudeSolution, count: 1, data: 0}, [" a ","axa"," a "], ['x', 337, 0, 'a', ItemID.crudeSolution, 0]);	
Recipes.addFurnace(ItemID.treatedCrudeSolution, ItemID.treatedBrickSolution, 0); 	
Recipes.addShaped({id: BlockID.harderenCasingBlock, count: 3, data: 0}, ["xxx","xax","xxx"], ['x', ItemID.treatedBrickSolution, 0, 'a', ItemID.crudeSolution, 0]);
Recipes.addShaped({id: BlockID.infusiblock, count: 1, data: 0}, ["xxx","xax","xxx"], ['x', BlockID.harderenCasingBlock, 0, 'a', 145, -1]);
Recipes.addShaped({id: ItemID.waterOrb, count: 1, data: 0}, [
" a ","aca"," a "], ['a', 325, 8, 'c',351, 4]);

Recipes.addShaped({id: ItemID.bedrockLom, count: 1, data: 0}, 
[" a "," a "," b "], ['a', 49, 0, 'b', 57, 0]);
Recipes.addShaped({id: BlockID.bigChest, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 17, -1, 'a', 54, 0]);

Recipes.addShaped({id: BlockID.metalCasingBlock, count: 3, data: 0}, 
["aaa","aba","aaa"], ['a', 265, 0, 'b', BlockID.harderenCasingBlock, 0]);
Recipes.addShaped({id: BlockID.lavaGen, count: 1, data: 0}, 
["aaa","aba","aaa"], ['a', BlockID.metalCasingBlock, 0, 'b', 325, 10]);



const directions = [[-1, 0, 0], [-1, 0, -1], [-1, 0, 1], [1, 0, 0], [1, 0, 1], [1, 0, -1], [-1, 1, 0], [-1, 1, -1], [-1, 1, 1], [1, 1, 0], [1, 1, 1], [1, 1, -1], [-1, -1, 0], [-1, -1, -1], [-1, -1, 1], [1, -1, 0], [1, -1, 1], [1, -1, -1], [0, -1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1], [0, -1, -1], [0, -1, 1], [0, 1, -1], [0, 1, 1]];

Callback.addCallback("ItemUse", function (coords, item, block) {if(block.id === BlockID.furBrick){
for(let index in directions){
let dir = directions[index];
let tile = World.getTileEntity(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]);
if(tile && World.getBlockID(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]) === BlockID.bigFur){
tile.container.openAs(guiTnyFurnace);
break;}}}});

Callback.addCallback("ItemUse", function (coords, item, block) {if(block.id === BlockID.harderenCasingBlock){
for(let index in directions){
let dir = directions[index];
let tile = World.getTileEntity(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]);
if(tile && World.getBlockID(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]) === BlockID.infusiblock){
tile.container.openAs(decGui);
break;}}}});

Callback.addCallback("ItemUse", function (coords, item, block) {if(block.id === BlockID.metalCasingBlock){
for(let index in directions){
let dir = directions[index];
let tile = World.getTileEntity(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]);
if(tile && World.getBlockID(coords.x + dir[0], coords.y + dir[1], coords.z + dir[2]) === BlockID.lavaGen){
tile.container.openAs(GUI);
break;}}}});

var guiTnyFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Big Furnace/Большая печь"}},
		inventory: {standart: true},
		background: {standart: true}},
	drawing: [{type: "bitmap", x: 530, y: 150, bitmap: "furnace_bar_background", scale: 3.2},
{type: "bitmap", x: 450, y: 146, bitmap: "fire_scale", scale: 3.2}],
elements: {
"progressScale": {type: "scale", x: 530, y: 150, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
"slotSource": {type: "slot", x: 441, y: 75},
"slotResult": {type: "slot", x: 625, y: 146},
"slotRes": {type: "slot", x: 625, y: 263}}});

TileEntity.registerPrototype(BlockID.bigFur, {
	defaultValues: {
		progress: 0
	},
getGuiScreen: function(){
return guiTnyFurnace;},	
tick: function(){
var sourceSlot = this.container.getSlot("slotSource");
var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
for(let index in directions){
let dir = directions[index];
if(result&&World.getBlockID(this.x + dir[0], this.y + dir[1], this.z + dir[2]) == BlockID.furBrick){
var resultSlot = this.container.getSlot("slotResult");
var resultSl = this.container.getSlot("slotRes");
if((resultSlot.id == result.id && resultSl.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 8000){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				resultSl.id = result.id;
				resultSl.data = result.data;
				resultSl.count++;
				this.container.validateAll();
				this.data.progress = 0;
}}else {
this.data.progress = 0;
}
this.container.setScale("progressScale", this.data.progress / 8000);}}});

var decGui = new UI.StandartWindow({
standart: {
header: {text: {text: "Auto Anvil/Авто наковальня"}},
inventory: {standart: true}, 
background: { 
standart: true 
}},
drawing: [
{type: "bitmap", x: 700, y: 194, bitmap: "furnace_bar_background", scale: 3.2}],
elements: {
"slotSource": {type: "slot", x: 445, y: 190},
"slotResult": {type: "slot", x: 835, y: 190},
"slotBoock": {type: "slot", x: 585, y: 190},
"progressScale": {type: "scale", x: 700, y: 194, direction: 0, scale: 3.2, bitmap: "furnace_bar_scale"}}});

TileEntity.registerPrototype(BlockID.infusiblock, {
    defaultValues: {
		progress: 0},
getGuiScreen: function(){return decGui;},
getTransportSlots: function(){return {input: ["slotSource"], output: ["slotResult"]};},
    tick: function(){
        var sourceSlot = this.container.getSlot("slotSource");
        var resultSlot = this.container.getSlot("slotResult");
        var bokSlot = this.container.getSlot("slot books ");
for(let index in directions){let dir = directions[index];
if(sourceSlot.data !== 0&&bokSlot.count == 0&&World.getBlockID(this.x + dir[0], this.y + dir[1], this.z + dir[2]) == BlockID.harderenCasingBlock){
var resultSlot = this.container.getSlot("slotResult");
if((resultSlot.id == resultSlot.id && resultSlot.data == resultSlot.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 5000){
				sourceSlot.count--;
				resultSlot.id = sourceSlot.id;
				resultSlot.data = 0;
				resultSlot.enchant = sourceSlot.enchant;
				resultSlot.count ++;
				this.container.validateAll();
				this.data.progress = 0;
}}else {this.data.progress = 0;}
this.container.setScale("progressScale", this.data.progress / 5000);}}});



const GUI = new UI.StandartWindow({
standart: {
header: {text: {text: "Lava Generator/Генератор лавы"}},
inventory: {standart: true},
background: {standart: true}},
drawing: [{type: "bitmap", x: 570, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
{type: "bitmap", x: 450, y: 146, bitmap: "fire_scale", scale: 3.2}],
elements: {"progressScale": {type: "scale", x: 570, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
"slotSource": {type: "slot", x: 441, y: 75},
"slotResult": {type: "slot", x: 441, y: 200},
"slot3": {type: "slot", x: 700, y: 75},
"slot4": {type: "slot", x: 700, y: 200},
"text0": {type: "text", x: 800, y: 77, width: 40, height: 10, font: {size: 22}},
"text1": {type: "text", x: 832, y: 109, width: 40, height: 10, font: {size: 22}}}});

TileEntity.registerPrototype(BlockID.lavaGen, {
defaultValues: {
progress: 0},
getGuiScreen: function(){return GUI;},
getTransportSlots: function(){return {input: ["slot3"], output: ["slot4"]};},
tick: function(){
const s0 = this.container.getSlot("slotSource");
const s1 = this.container.getSlot("slotResult");
const s2 = this.container.getSlot("slot3");
const s3 = this.container.getSlot("slot4");
const stored = this.liquidStorage.getLiquidStored();
this.container.setText("text0", stored?LiquidRegistry.getLiquidName(stored):"Empty");
this.container.setText("text1", this.liquidStorage.getAmount(stored));
if(s2.id && s1.count < Item.getMaxStack(s3.id) || 64){
const liq = LiquidRegistry.getItemLiquid(s2.id, s2.data);
const full = LiquidRegistry.getFullItem(s2.id, s2.data, stored);
if(liq){
const empty = LiquidRegistry.getEmptyItem(s2.id, s2.data);
if((!stored || stored == liq) && (!s3.id || s3.id == empty.id && s3.data == empty.data)){
          s2.count--;
          this.container.validateSlot("slot3");
          s3.id = empty.id;
          s3.data = empty.data;
          s3.count++;
          this.liquidStorage.addLiquid(liq, 1); }}
else if(full){
if(!s3.id || s3.id == full.id && s3.data == full.data){
          s2.count--;
          this.container.validateSlot("slot3");
          s3.id = full.id;
          s3.data = full.data;
          s3.count++;
          this.liquidStorage.getLiquid(stored, 1); }}}
for(let index in directions){let dir = directions[index];
if(s0.id == 4 && s0.data == s0.data && s0.count <= 64&&World.getBlockID(this.x + dir[0], this.y + dir[1], this.z + dir[2]) == BlockID.metalCasingBlock){
if((s0.id == 4 && s0.data == s0.data && s0.count <= 64 ) && this.data.progress++ >= 8000){
				s0.count--;
this.container.validateSlot("slotSource");
this.liquidStorage.addLiquid("lava", 1);
this.data.progress = 0;}}else {
this.data.progress = 0;}
this.container.setScale("progressScale", this.data.progress / 8000);}}});






const regChest = function(id, count, data, max){
Game.prevent();
item=Player.getCarriedItem(true);
if(!Entity.getSneaking(Player.get())){
if(this.data.id){
if(this.data.id == id && this.data.data == data){
this.data.count += count;
Player.setCarriedItem(0);}else{let slot;for(let i = 36; i--;){
slot = Player.getInventorySlot(i+9);
this.data.id == slot.id && this.data.data == slot.data && (this.data.count += slot.count)&Player.setInventorySlot(i+9, 0);}Game.message(Item.getName(this.data.id, this.data.data)+" "+this.data.count)}}
else if(id){
      this.data.id = id;
      this.data.count = count;
      this.data.data = data;
      Player.setCarriedItem(0);}
this.data.count > max && World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, max-this.data.count, this.data.data);
}else if(this.data.id){
const get = Math.min(64, this.data.count);
World.drop(this.x+.5, this.y+1, this.z+.5, this.data.id, get, this.data.data);
this.data.count -= get;
!this.data.count && (this.data.id = this.data.data = 0);}};


TileEntity.registerPrototype(BlockID.bigChest, {
  defaultValues: {
    id: 0,
    data: 0,
    count: 0},
click: function(id, count, data){this.run(id, count, data, 2e9);},
run: regChest});


IDRegistry.genItemID("hp");
Item.createItem("hp", "Heart", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [" a ","aba"," a "], ['a', 351, 1, 'b', 322, 0]);
IDRegistry.genItemID("ghp");
Item.createItem("ghp", "Gold Heart", {name: "gold_hp", meta: 0});
Recipes.addShaped({id: ItemID.ghp, count: 1, data: 0}, [
" c ","aba"," a "], ['a', 266, 0, 'b', ItemID.hp, 0, 'c', 264, 0]);
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.ghp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+2)}}); 
Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 63){
Entity.setMaxHealth(Player.get(), 20)}});

IDRegistry.genItemID("endPortal");
Item.createItem("endPortal", "Ender Portal", {name: "endPortal", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.endPortal, count: 1, data: 0}, [
"bab","axa","bab"], ['x', 264, 0, 'a', 368, 0, 'b', 49, 0]);
Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.endPortal&&block.id !==0){
Player.setCarriedItem(item.id, item.count - 1, 0);
World.setBlock(coords.x, coords.y+1, coords.z, 119, 0); 
World.setBlock(coords.x+1, coords.y+1, coords.z, 7, 0); 
World.setBlock(coords.x-1, coords.y+1, coords.z, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z+1, 7, 0);
World.setBlock(coords.x, coords.y+1, coords.z-1, 7, 0);
Entity.spawn(coords.x, coords.y+1, coords.z, 93); }}); 

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
//function sword lom
Item.registerUseFunction("bedrockLom",
function(coords, item, block){
if(item.id == ItemID.bedrockLom && block.id == 7 ){
World.setBlock(coords.x, coords.y, coords.z, 0);
World.drop(coords.x, coords.y, coords.z, 7, 1, 0);}});


ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}

Callback.addCallback("ItemUse", function (coords, item, block) {
var cropId = [59, 141, 142, 244];
var dropId = [296, 391, 392, 457];
var seedId = [295, 0, 0, 458];
var countId = [2, 3, 4, 2];
var counsId = [1, 0, 0, 1];
for(var i=0; i<6; i++)
if(block.id == cropId[i] && block.data == 7 ){
World.setBlock(coords.x, coords.y, coords.z, 0);
World.setBlock(coords.x, coords.y, coords.z, cropId[i], 0);
World.drop(coords.x, coords.y, coords.z, dropId[i], countId[i], 0);
World.drop(coords.x, coords.y, coords.z, seedId[i], counsId[i], 0);}}); 

Callback.addCallback("DestroyBlock", function(coords, block, player){
if(Entity.getSneaking(Player.get())){
for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=10; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162) {
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});



Callback.addCallback("EntityHurt", function (attacker, victim, damage) {
if(Entity.getType(attacker) == 32 && Entity.getType(victim) == 63){
Entity.addEffect(Player.get(), 9, 1, 500)}else
if(Entity.getType(attacker) == 42 && Entity.getType(victim) == 63){
Entity.setFire(Player.get(), 20)}else
if(Entity.getType(attacker) == 38 && Entity.getType(victim) == 63){
Entity.addEffect(Player.get(), 15, 1, 500)}});



function addRecipeWithCraftingTool(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
		for (var i in field){
			if (field[i].id == tool){
				field[i].data++;
				if (field[i].data >= 94){
					field[i].id = field[i].count = field[i].data = 0;
				}
			}
			else {
				api.decreaseFieldSlot(i);
			}
		}
	});
}


//рецепты пластин и камня
Callback.addCallback("PostLoaded", function(){

addRecipeWithCraftingTool({id: 337, count: 3, data: 0}, [{id:12, data:0},{id:13, data:0}],ItemID.waterOrb);
addRecipeWithCraftingTool({id: 79, count: 1, data: 0}, [{id:20, data:0}],ItemID.waterOrb);
addRecipeWithCraftingTool({id: 174, count: 1, data: 0}, [{id:79, data:0},{id:79, data:0}],ItemID.waterOrb);
addRecipeWithCraftingTool({id: 80, count: 1, data: 0}, [{id:1, data:1}],ItemID.waterOrb);
addRecipeWithCraftingTool({id: 409, count: 1, data: 0}, [{id:263, data:-1}],ItemID.waterOrb);
addRecipeWithCraftingTool({id: 422, count: 1, data: 0}, [{id:331, data:0}],ItemID.waterOrb);});






importLib("ENV", "*");

IDRegistry.genItemID("bigStick");
Item.createItem("bigStick", "Big Stick", {name: "bigStick"}, {stack: 16});


Recipes.addShaped({id: ItemID.bigStick, count: 1, data: 0}, [
	" a ",
	" a "
], ['a', 17, -1]);

Recipes.addShaped({id: ItemID.bigStick, count: 1, data: 0}, [
	" a ",
	" a "
], ['a', 162, -1]);


var Hammerss = {
addItem: function(id, material, i1, i2){
IDRegistry.genItemID(id + "Hammers");
Item.createItem(id + "Hammers", id + " Hammer", {name: id + "Hammers", meta: 0}, {stack: 1});
Item.setToolRender(ItemID[id + "Hammers"], true);
ToolAPI.registerTool(ItemID[id + "Hammers"], material, ["stone"], {damage: 5});
Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID[id + "Hammers"], count: 1, data: 0}, [
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

Hammerss.addItem("Wood", "wood", 17, ItemID.bigStick);
Hammerss.addItem("Stone", "stone", 1, ItemID.bigStick);
Hammerss.addItem("Gold", "gold", 266, ItemID.bigStick);
Hammerss.addItem("Iron", "iron", 265, ItemID.bigStick);
Hammerss.addItem("Diamond", "diamond", 264, ItemID.bigStick);
Hammerss.addItem("Obsidian", "obsidian", 49, ItemID.bigStick);




Callback.addCallback("ItemUse", function (coords, item, block) {
var tool = [257, 270, 274, 278, 285, ItemID.WoodHammers, ItemID.StoneHammers, ItemID.GoldHammers, ItemID.IronHammers, ItemID.DiamondHammers, ItemID.ObsidianHammers];
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
if(World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.WoodHammers||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.StoneHammers||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.GoldHammers||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.IronHammers||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.DiamondHammers||World.getBlockID(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz) == block.id&&item.id==ItemID.ObsidianHammers) {
World.destroyBlock(coords.relative.x + xx, coords.relative.y + yy, coords.relative.z + zz, true);}}}};}});

IDRegistry.genBlockID("grinder");
IDRegistry.genBlockID("mobSpawn");
IDRegistry.genBlockID("vacHopvacHop");




Block.createBlockWithRotation("grinder", [{name: "Mob Grinder", texture: [["metalCasingBlock", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0], ["nGrinder", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.grinder, count: 1, data: 0}, 
["cac",
"axa",
"aba"], ['x', BlockID.metalCasingBlock, -1, 'a', 101, -1, 'c', 267, -1, 'b', 266, -1]);	


Block.createBlockWithRotation("mobSpawn", [{name: "Mob Spawner", texture: [["metalCasingBlock", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0], ["nSpawner", 0], ["metalCasingBlock", 0], ["metalCasingBlock", 0]], inCreative: true}], "opaque");


Recipes.addShaped({id: BlockID.mobSpawn, count: 1, data: 0}, 
["cac",
"axa",
"bbb"], ['x', BlockID.metalCasingBlock, -1, 'a', 101, -1, 'c', 344, -1, 'b', 48, -1]);	


Block.createBlockWithRotation("vacHopvacHop", [{name: "Vacuum Hopper", texture: [["vhop", 0], ["vhop", 0], ["vhop", 0], ["vhop", 0], ["vhop", 0], ["vhop", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.vacHopvacHop, count: 1, data: 0}, 
["cac",
"axa",
"bbb"], ['x', BlockID.metalCasingBlock, -1, 'a', 101, -1, 'c', 410, -1, 'b', 368, -1]);	


var guiGrind = new UI.StandartWindow({
standart: {
header: {text: {text: "Mob Grinder/Уничтожитель мобов"}},
inventory: {standart: true},
background: {standart: true}},
drawing: [{type: "bitmap", x: 570, y: 150, bitmap: "furnace_bar_background", scale: 3.2}],
elements: {
		"slotGlass": {type: "slot", x: 441, y: 146},
		"textInfo4": {type: "text", x: 393, y: 121, width: 300, height: 28, text: "Vanilla Sword"},
		"slot3": {type: "slot", x: 700, y: 75},
		"slot4": {type: "slot", x: 700, y: 200},
		"textInfo2": {type: "text", x: 800, y: 91, width: 300, height: 30, text: "xp:"},
		"textInfo1": {type: "text", x: 840, y: 91, width: 300, height: 30, text: "0"},
		"textInfo3": {type: "text", x: 800, y: 196, width: 300, height: 30, text: "radius: 7"},
		"textInfo5": {type: "text", x: 800, y: 236, width: 300, height: 30, text: "redstone:"},
		"textInfo7": {type: "text", x: 924, y: 236, width: 300, height: 30},
}});
var evilMobs = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];

TileEntity.registerPrototype(BlockID.grinder,{
	defaultValues: {
  damage: 100,
  range: 7,
  exp: 0,
  work:0
  },
getGuiScreen: function(){return guiGrind;},
getTransportSlots: function(){
return {input: ["slot3"], output: ["slot4"]};},
redstone: function(params){ 
if(this.data.work == 1)
{
this.data.work = 0;
}
else{
if(this.data.work == 0)
{
this.data.work = 1;
}}},
tick: function(){
	var expSlot3 = this.container.getSlot("slot3");
    var expSlot4 = this.container.getSlot("slot4");
this.container.setText("textInfo1", parseInt(this.data.exp));
this.container.setText("textInfo7", parseInt(this.data.work));
var glassId = this.container.getSlot("slotGlass");

if(World.getThreadTime()%10== 0&&this.data.work==0){
for(let i in evilMobs){

let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
var sword = [268, 283, 272, 267, 276];
var swordData = [59, 32, 131, 250, 1561];
for(var g=0; g<5; g++)
if(ent && glassId.id == sword[g] && glassId.data <= swordData[g] && this.data.work == 0){
glassId.data++;

Entity.damageEntity(ent, 100);
this.data.exp += 3;}}}

if(expSlot3.id == 374&&expSlot3.count > 0&&this.data.exp >= 20){	
		expSlot3.count--;
		this.data.exp -= 20;
	    expSlot4.id = 384; 
		expSlot4.count++;}}});


Recipes.addShaped({id: 383, count: 1, data: 0}, [" a ","axa"," a "], ['x', 266, -1, 'a', 344, -1]);	








var guiSpawn = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Mob Spawner/Спаунер мобов"}},
		inventory: {standart: true},
		background: {standart: true}},
drawing: [{type: "bitmap", x: 570, y: 150, bitmap: "furnace_bar_background", scale: 3.2}],
elements: {"slotGlass": {type: "slot", x: 441, y: 146},
"textInfo4": {type: "text", x: 410, y: 121, width: 300, height: 28, text: "Spawn Egg"},
"textInfo5": {type: "text", x: 800, y: 236, width: 300, height: 30, text: "redstone:"},
		"textInfo7": {type: "text", x: 924, y: 236, width: 300, height: 30}
}});
TileEntity.registerPrototype(BlockID.mobSpawn,{
	defaultValues:{
	work:0
	},
	getGuiScreen: function(){return guiSpawn;},
	redstone: function(params){ 
if(this.data.work == 1)
{
this.data.work = 0;
}
else{
if(this.data.work == 0)
{
this.data.work = 1;
}}},
tick: function(){
this.container.setText("textInfo7", parseInt(this.data.work));
var glassId = this.container.getSlot("slotGlass");
var crisId = this.container.getSlot("slotCris");
if(World.getThreadTime()%100== 0&&this.data.work==0){
if(glassId.id == 383&&glassId.data==glassId.data&&this.data.work==0){

Entity.spawn(this.x+0.5, this.y+2, this.z+0.5, glassId.data)}}}});





Callback.addCallback("PlayerAttack",function(player,victim){
var mobId = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];
item=Player.getCarriedItem(true);
for(var i=0; i<106; i++)
if(item.id==383&&item.data==0&&Entity.getType(victim)==mobId[i]){
var pos = Entity.getPosition(victim);
Entity.damageEntity(victim, 400000);
Player.setCarriedItem(0, 0, 0, 0);
World.drop(pos.x, pos.y, pos.z, 383, 1, mobId[i]);}});







var guiHop = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Vacuum Hopper/Вакуумный загрузчик"}},
		inventory: {standart: true},
		background: {standart: true}},
elements: {
"textInfo1": {type: "text", x: 455, y: 80, width: 300, height: 28, text: "Hopper above the block?"},
"textInfo2": {type: "text", x: 455, y: 110, width: 300, height: 28, text: "Загрузочная воронка над блоком?"},
"textInfo3": {type: "text", x: 800, y: 196, width: 300, height: 30, text: "radius: 5"},
"textInfo5": {type: "text", x: 800, y: 236, width: 300, height: 30, text: "redstone:"},
		"textInfo7": {type: "text", x: 924, y: 236, width: 300, height: 30}


}});

var dropId = [64];

TileEntity.registerPrototype(BlockID.vacHopvacHop,{
	defaultValues: {
  work:0,
  range: 5
  },
  getGuiScreen: function(){return guiHop;},
redstone: function(params){ 
if(this.data.work == 1)
{
this.data.work = 0;
}
else{
if(this.data.work == 0)
{
this.data.work = 1;
}}},
tick: function(){
	this.container.setText("textInfo7", parseInt(this.data.work));
if(World.getThreadTime()%10== 0&&World.getBlockID(this.x, this.y+1, this.z) == 154){
for(let i in dropId){

let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, dropId[i], this.data.range);

if(ent&&this.data.work == 0){
Entity.setPosition(ent, this.x+0.5, this.y+1.8, this.z+0.5) 
//Entity.damageEntity(ent, 100);
}}}
}});





IDRegistry.genBlockID("tpBlockA");
Block.createBlockWithRotation("tpBlockA", [
{name: "Teleporter", texture: [["teleporter", 0], ["teleporter", 0], ["teleporter", 0],["teleporter", 1], ["teleporter", 0], ["teleporter", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.tpBlockA, "stone");

Recipes.addShaped({id: BlockID.tpBlockA, count: 1, data: 0}, ["aaa","aba","a a"], ['a', 35, -1, 'b', 368, 0]);
 

TileEntity.registerPrototype(BlockID.tpBlockA, {
defaultValues: {},
click: function(id, count, data, coords){ 
if(!Entity.getSneaking(Player.get()))
{
for(var yy = 2; yy <= 20; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}
else
if(Entity.getSneaking(Player.get()))
{
for(var yy = -20; yy <= -2; yy++){			

if(World.getBlockID(this.x,this.y+yy,this.z)==BlockID.tpBlockA){
Game.prevent();
Player.setPosition(this.x+0.5, this.y+yy+3, this.z+0.5)}}}}});

Translation.addTranslation("Lava Generator", {ru: "Генератор лавы"});
Translation.addTranslation("Big Furnace Controller", {ru: "Контроллер большой печи"});
Translation.addTranslation("Casing Block", {ru: "Корпус"});
Translation.addTranslation("Auto Anvil", {ru: "Авто наковальня"});
Translation.addTranslation("Improved Casing Block", {ru: "Улучшенный корпус"});
Translation.addTranslation("Metal Casing Block", {ru: "Металлический корпус"});
Translation.addTranslation("Big Chest", {ru: "Большой сундук"});
Translation.addTranslation("Crude Solution", {ru: "Сырой раствор"});
Translation.addTranslation("Brick Solution", {ru: "Кирпич"});
Translation.addTranslation("Treated Crude Solution", {ru: "Обработанный сырой раствор"});
Translation.addTranslation("Treated Brick Solution", {ru: "Обработанный кирпич"});
Translation.addTranslation("Water Orb", {ru: "Водная сфера"});
Translation.addTranslation("Breaker of Bedrock", {ru: "Разрушитель коренной породы"});
Translation.addTranslation("Heart", {ru: "Сердце"});
Translation.addTranslation("Gold Heart", {ru: "Золотое сердце"});
Translation.addTranslation("Ender Portal", {ru: "Портал в Край"});
Translation.addTranslation("Wood Hammer", {ru: "Деревянный молот"});
Translation.addTranslation("Stone Hammer", {ru: "Каменный молот"});
Translation.addTranslation("Iron Hammer", {ru: "Железный молот"});
Translation.addTranslation("Gold Hammer", {ru: "Золотой молот"});
Translation.addTranslation("Diamond Hammer", {ru: "Алмазный молот"});
Translation.addTranslation("Obsidian Hammer", {ru: "Обсидиановый молот"});
Translation.addTranslation("Mob Grinder", {ru: "Уничтожитель мобов"});
Translation.addTranslation("Mob Spawner", {ru: "Спаунер мобов"});
Translation.addTranslation("Vacuum Hopper", {ru: "Вакуумный загрузчик"});
Translation.addTranslation("Big Stick", {ru: "Большая палка"});
Translation.addTranslation("Teleporter", {ru: "Телепортер"});

