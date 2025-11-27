/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 19
*/



// file: ore.js

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<7;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 70);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, 82, 7, 6);
    }
}
);




Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.01){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y,  coords.z, 17, 3);
World.setBlock(coords.x,coords.y+2,  coords.z, 17, 3);        
 World.setBlock(coords.x,coords.y+1,  coords.z, 17, 3);       
World.setBlock(coords.x,coords.y+3,  coords.z, 18, 3); 
World.setBlock(coords.x+1,coords.y+2,  coords.z, 18, 3);        
World.setBlock(coords.x-1,coords.y+2,  coords.z, 18, 3); 
World.setBlock(coords.x,coords.y+2,  coords.z+1, 18, 3); 
World.setBlock(coords.x,coords.y+2,  coords.z-1, 18, 3);
World.setBlock(coords.x,coords.y+1,  coords.z-1, 127, 0);          
        }}});




// file: tapcrop.js

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
World.drop(coords.x, coords.y, coords.z, seedId[i], counsId[i], 0);
Player.addExperience(1);
}}); 




// file: mobdrop.js

Callback.addCallback("EntityDeath", function(entity){
 var count = [1, 2, 3];
 var rnd = Math.floor((Math.random()*10)+1)
 
 if(Entity.getType(entity) == 23&&rnd <= 5||Entity.getType(entity) == 24&&rnd <= 5||Entity.getType(entity) == 25&&rnd <= 5){
 
var rnd2 = Math.floor(Math.random()*(count.length));
 		var coords = Entity.getPosition(entity); 
     World.drop(coords.x, coords.y, coords.z, 363, count[rnd2]);}
});




// file: armormob.js

Callback.addCallback("EntityAdded", function (entity) {
var sword = [267, 268, 272, 276, 283, 258, 271, 275, 279, 286];
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [32, 36, 44, 47, 48];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i]&&Math.random() < 0.1)
{
var rnd1 = Math.floor(Math.random()*(sword.length));
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));
Entity.setCarriedItem(entity, sword[rnd1], 1, 0);
Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});




Callback.addCallback("EntityAdded", function (entity) {
var helm = [298, 302, 306, 310, 314];
var chest = [299, 303, 307, 311, 315];
var legg = [300, 304, 308, 312, 316];
var boot = [301, 305, 309, 313, 317];
var mob = [34, 46];
for(var i=0; i<6; i++)
if(Entity.getType(entity) == mob[i]&&Math.random() < 0.1)
{
var rnd2 = Math.floor(Math.random()*(helm.length));
var rnd3 = Math.floor(Math.random()*(chest.length));
var rnd4 = Math.floor(Math.random()*(legg.length));
var rnd5 = Math.floor(Math.random()*(boot.length));

Entity.setArmorSlot(entity,0, helm[rnd2], 1);
Entity.setArmorSlot(entity,1, chest[rnd3], 1);
Entity.setArmorSlot(entity,2, legg[rnd4], 1);
Entity.setArmorSlot(entity,3, boot[rnd5], 1);
}});




// file: treecuter.js


Callback.addCallback("DestroyBlock", function(coords, block, player){
var getBlock = World.getBlockID(coords.x, coords.y, coords.z);
item=Player.getCarriedItem(true);
if(getBlock==17||getBlock==162){
for(var xx = -1; xx <=1; xx++){
for(var yy = -1; yy <=20; yy++){
for(var zz = -1; zz <=1; zz++){
if(World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 17||World.getBlockID(coords.x + xx, coords.y + yy, coords.z + zz) == 162) {
World.destroyBlock(coords.x + xx, coords.y + yy, coords.z + zz, true);}}}};}});




// file: test.js

IDRegistry.genItemID("fcarrot");
Item.createFoodItem("fcarrot", "baked carrot", {name:"baked_carrot"}, {food:7});
Recipes.addFurnace(391, ItemID.fcarrot, 0);

IDRegistry.genItemID("fbread");
Item.createFoodItem("fbread", "baked bread", {name:"baked_bread"}, {food:10});
Recipes.addFurnace(297, ItemID.fbread, 0);

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);

IDRegistry.genItemID("hp");
Item.createItem("hp", "hp", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 331, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+2)}}); 


Callback.addCallback("EntityDeath", function (entity) {
if(entity.id == 63){
Player.setHunger(0);
Player.setHealth(1);
}});







// file: wildcrop.js

var BLOCKTYPE_PLANT = Block.createSpecialType({ 
	base: 59,
});

IDRegistry.genBlockID("wild_carrot_bush");
Block.createBlockWithRotation("wild_carrot_bush", [{name: "wild_carrot_bush", texture: [["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0], ["wild_carrot_bush", 0]], inCreative: true},],BLOCKTYPE_PLANT);
			
Block.registerDropFunction("wild_carrot_bush", function(coords, blockID, data, diggingLevel, toolLevel){
var count = [1, 2, 3];
var gg = Math.floor((Math.random()*2)+1);
if(gg==1){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[391, count[rnd], 0]];
}
else
if(gg==2){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[392, count[rnd], 0]];
}});

		Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.09){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z) && World.getBlock(coords.x, coords.y, coords.z).id === 2) {
        World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.wild_carrot_bush, 0);	
        }}});			
			
				Block.setBlockShape(BlockID.wild_carrot_bush, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});
				
BlockRenderer.addRenderCallback(BlockID.wild_carrot_bush, function(api, coords, block) {

var box = BlockID.wild_carrot_bush;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.wild_carrot_bush);			
//


IDRegistry.genBlockID("wild_wheat_bush");
Block.createBlockWithRotation("wild_wheat_bush", [{name: "wild_wheat_bush", texture: [["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0], ["wild_wheat_bush", 0]], inCreative: true},],BLOCKTYPE_PLANT);
Block.registerDropFunction("wild_wheat_bush", function(coords, blockID, data, diggingLevel, toolLevel){
var count = [0, 1, 2];
if(data!==60){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[295, count[rnd], 0], [296, 1, 0]];
}});
			

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.08){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z) && World.getBlock(coords.x, coords.y, coords.z).id === 2) {
        World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.wild_wheat_bush, 0);	
        }}});			
			

			
			
			
			
				Block.setBlockShape(BlockID.wild_wheat_bush, {x: 0.01, y: 0, z: 0.01}, {x: 0.9, y: 0.05, z: 0.9});
				
BlockRenderer.addRenderCallback(BlockID.wild_wheat_bush, function(api, coords, block) {

var box = BlockID.wild_wheat_bush;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.wild_wheat_bush);			
//






// file: saww.js

var BLOCK_TYPE_SAWW = Block.createSpecialType({
	base: 5,
	explosionres: 7,
	destroytime: 1,
});
IDRegistry.genBlockID("Saww");
Block.createBlock("Saww", [
	{name: "Saww", texture: [["saww", 1],["saww", 1],["saww", 0],["saww", 0],["saww", 0]], inCreative: true}
],BLOCK_TYPE_SAWW);

Recipes.addShaped({id: BlockID.Saww, count: 1, data: 0}, ["aaa", "bbb", "cdc"], ["a", 258, 0,"b", 5, -1, "c", 61, -1, "d", 331, -1]);


var decGui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "saww"
			},
			},
			minHeight: 700,
			inventory: {
				standart: true
		}, 
		background: { 
		standart: true 
		}
},
    
    drawing: [
	{type: "bitmap", x: 585, y: 225, bitmap: "furnace_bar_background", scale: 5}
	],
    
	elements: {
		"DecSlot0": {type: "slot", x: 445, y: 210, size: 100},
        "DecSlot1": {type: "slot", x: 735, y: 210-15, size: 130},
        "Progress": {type: "scale", x: 585, y: 225, direction: 0, scale: 5, bitmap: "furnace_bar_scale"}
			}
		
});


var sawwRecipe=[];


addsawwRecipe(17, 0, 5, 0, 20,1,6); 
addsawwRecipe(17, 1, 5, 1, 20,1,6); 
addsawwRecipe(17, 2, 5, 2, 20,1,6); 
addsawwRecipe(17, 3, 5, 3, 20,1,6); 
addsawwRecipe(162, 0, 5, 4, 20,1,6); 
addsawwRecipe(162, 1, 5, 5, 20,1,6); 
addsawwRecipe(5, -1, 280, 1, 20,1,3); 



function addsawwRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	sawwRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addSawwRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	sawwRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.Saww, {
	defaultValues: {
		time:0,
		recipe:null,
		id:0,
		data:0,
		rotation:0
	},
	animation:null,
	tick: function(){
		var content = this.container.getGuiContent(); 
		if(this.data.id!=this.container.getSlot("DecSlot0").id||this.data.data!=this.container.getSlot("DecSlot0").data){
		
		}	
			if(this.data.time==0){
				if(this.data.recipe){
					this.container.getSlot("DecSlot1").id=this.data.recipe.outputId;
					this.container.getSlot("DecSlot1").data=this.data.recipe.outputData;
						this.container.getSlot("DecSlot0").count-=this.data.recipe.inputCount;
							this.container.getSlot("DecSlot1").count+=this.data.recipe.outputCount;
					this.data.recipe=null;
						this.container.validateAll();
					
				}
				if(this.data.recipe==null){
				for(var i in sawwRecipe){
					if(this.container.getSlot("DecSlot0").id==sawwRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=sawwRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==sawwRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- sawwRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==sawwRecipe[i].inputData||sawwRecipe[i].inputData==-1){
								this.data.recipe=sawwRecipe[i];
							this.data.time=sawwRecipe[i].time;
							}
								
						}
					}	
				}
			}
			}
		if(content){
			if(this.data.time){
					this.container.setScale("Progress",Math.floor(22*(1-this.data.time/this.data.recipe.time))/22);
				}else{
					this.container.setScale("Progress",0);
				}
		}
		if(this.data.time>0){

			if(this.container.getSlot("DecSlot1").count>63-this.data.recipe.outputCount||this.container.getSlot("DecSlot0").id!=this.data.recipe.inputId||this.container.getSlot("DecSlot0").count<this.data.recipe.inputCount){
				this.data.time=0;
				this.data.recipe=null;
			}else{
						if(this.container.getSlot("DecSlot0").data==this.data.recipe.inputData||this.data.recipe.inputData==-1){
								this.data.time--;
							
						}
					}
				}
	},
	getGuiScreen: function(){
		return decGui;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addSawwRecipeQ:addSawwRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});












// file: food.js

IDRegistry.genItemID("fcarrot");
Item.createFoodItem("fcarrot", "baked carrot", {name:"baked_carrot"}, {food:7});
Recipes.addFurnace(391, ItemID.fcarrot, 0);

IDRegistry.genItemID("fbread");
Item.createFoodItem("fbread", "baked bread", {name:"baked_bread"}, {food:10});
Recipes.addFurnace(297, ItemID.fbread, 0);

Recipes.addShaped({id: 81, count: 1, data: 0},[" a "," a "," a "],['a', 18, 0]);
Recipes.addShaped({id: 388, count: 1, data: 0},[" a ","aba"," a "],['a', 351, 2, 'b', 20, 0]);
Recipes.addShaped({id: 351, count: 1, data: 2},[" a ","   ","   "],['a', 81, 0]);





// file: hp.js

IDRegistry.genItemID("hp");
Item.createItem("hp", "hp", {name: "hp", meta: 0});
Recipes.addShaped({id: ItemID.hp, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "], ['a', 331, -1, 'b', 322, -1]);

Callback.addCallback("ItemUse", function (coords, item, block) {
var hp = Entity.getMaxHealth(Player.get());
if(item.id == ItemID.hp&&block.id !==0&&hp <=40){
Player.setCarriedItem(item.id, item.count - 1, 0);
Entity.setMaxHealth(Player.get(), hp+2)}}); 


Callback.addCallback("EntityDeath", function (entity) {
if(entity.id == 63){
Player.setHunger(0);
Player.setHealth(1);
}});







// file: lombedrok.js


IDRegistry.genItemID("bedlom");
Item.createItem("bedlom", "bedlom", {name: "bedlom", meta: 0}, {stack: 1}, {damage: 666});
Item.setMaxDamage(ItemID.bedlom, 10);

Recipes.addShaped({id: ItemID.bedlom, count: 1, data: 0}, 
["aba",
 "bcb",
 "aba"], 
 ['a', 49, -1, 'b', 42, -1, 'c', 173, -1]);




Callback.addCallback("ItemUse", function (coords, item, block) {

if(item.id == ItemID.bedlom&&World.getBlockID(coords.x, coords.y, coords.z)==7){
World.destroyBlock(coords.x, coords.y, coords.z, true)}}); 





// file: findore.js

IDRegistry.genItemID("findore");
Item.createItem("findore", "find ore", {name: "stick", meta: 0}, {stack: 1}, {damage: 150});
Item.setMaxDamage(ItemID.findore, 150);

Recipes.addShaped({id: ItemID.findore, count: 1, data: 0}, 
["a",
 "ba",
 "b"], 
 ['a', 265, -1, 'b', 17, -1]);

 

Callback.addCallback("ItemUse", function (coords, item, block) {
var ore = [14, 15, 16, 21, 56, 73, 129, 153];
var nameore = ["golden ore", "iron ore", "coal ore", "lapis ore", "diamond ore", "redstoun ore", "emerald ore", "quarz ore"];
for(var i=0; i<9; i++)
if(item.id==ItemID.findore){
for(var yy=-120; yy<126; yy++){
if(World.getBlockID(coords.x, coords.y+yy, coords.z)==ore[i]){
 Game.message(nameore[i]);
ToolAPI.breakCarriedTool(1);

}}}});



ToolAPI.breakCarriedTool = function(damage){
	var item = Player.getCarriedItem(true);
	item.data += damage;
	if(item.data > Item.getMaxDamage(item.id)){
		item.id = 0;
	}
	Player.setCarriedItem(item.id, item.count, item.data, item.enchant);
}








// file: bigchest.js

IDRegistry.genBlockID("bigChest");
Block.createBlockWithRotation("bigChest", [{name: "big chest", texture: [["sss", 0], ["sss", 0], ["sss", 0], ["ppp", 0], ["sss", 0], ["sss", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.bigChest, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 17, -1, 'a', 54, 0]);

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









// file: decor.js

IDRegistry.genBlockID("andesite_brick");
Block.createBlockWithRotation("andesite_brick", [{name: "andesite brick", texture: [["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.andesite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 6]);

IDRegistry.genBlockID("diorite_brick");
Block.createBlockWithRotation("diorite_brick", [{name: "diorite brick", texture: [["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.diorite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 4]);

IDRegistry.genBlockID("granite_brick");
Block.createBlockWithRotation("granite_brick", [{name: "granite brick", texture: [["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.granite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 2]);

Recipes.addShaped({id: 351, count: 2, data: 0}, [
"xa","",""], ['x', 263, -1, 'a', 351, 15]);

IDRegistry.genBlockID("black_stone");
Block.createBlockWithRotation("black_stone", [{name: "black stone", texture: [["black_stone", 0], ["black_stone", 0], ["black_stone", 0], ["black_stone", 0], ["black_stone", 0], ["black_stone", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.black_stone, count: 8, data: 0}, [
"xxx","xax","xxx"], ['x', 1, 0, 'a', 351, 0]);

IDRegistry.genBlockID("black_stone_bricks");
Block.createBlockWithRotation("black_stone_bricks", [{name: "black stone bricks", texture: [["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0], ["black_stone_bricks", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.black_stone_bricks, count: 4, data: 0}, [
"xx","xx",""], ['x', BlockID.black_stone, -1]);

IDRegistry.genBlockID("black_stone_smallbricks");
Block.createBlockWithRotation("black_stone_smallbricks", [{name: "black stone smallbricks", texture: [["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0], ["black_stone_smallbricks", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.black_stone_smallbricks, count: 4, data: 0}, [
"xx","xx",""], ['x', BlockID.black_stone_bricks, -1]);




// file: graw.js

var GRAV_TYPE_BLOCK = Block.createSpecialType({
lightlevel: 5,
lightopacity: 15 });

IDRegistry.genBlockID("mobdropblock"); Block.createBlock("mobdropblock", [ {name: "ggg", texture: [["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0], ["stonebrick", 0]], inCreative: true} ], GRAV_TYPE_BLOCK);







Block.registerDropFunction("mobdropblock", function(coords, blockID, data, diggingLevel, toolLevel){ 
var badloot = [50, 30, 287, 296, 295, 352, 367, 288, 280, 339, 337, 374, 281, 297, 260, 340, 329, 392, 334, 263, 391, 371, 336, 344, 349, 262, 268, 269, 270, 271, 290, 265, 266, 409, 422, 259, 289, 331, 341, 346, 406, 416, 420, 421, 348, 368, 381, 291, 298, 299, 301, 301, 272, 273, 274, 275, 30, 263, 264, 265, 266, 287, 288, 289, 328, 320, 329, 331, 334, 341, 348, 352, 367, 357, 297];
var dnr = [1, 2, 3];
var mob = [32, 33, 34, 35, 39, 40];
var rnd = Math.floor((Math.random()*1)+1);
for(var i=0; i<4; i++)
if(rnd == 1){
var rnd2 = Math.floor(Math.random()*(badloot.length));
var rnd3 = Math.floor(Math.random()*(badloot.length));
var rnd4 = Math.floor(Math.random()*(badloot.length));
var rnd5 = Math.floor(Math.random()*(mob.length));
Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, mob[rnd5]);
Entity.spawn(coords.x+0.5, coords.y+2, coords.z+1.5, mob[rnd5]);
return [[badloot[rnd2], 1, data], [badloot[rnd3], 1, data], [badloot[rnd4], 1, data]];  }});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.002){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
        World.setBlock(coords.x,coords.y-1,  coords.z, BlockID.mobdropblock, 0);
       World.setBlock(coords.x,coords.y,  coords.z, 243, 0);
World.setBlock(coords.x,coords.y,  coords.z+1, 243, 0);  
World.setBlock(coords.x,coords.y,  coords.z+2, 243, 0);   
World.setBlock(coords.x,coords.y+1,  coords.z, 139, 0); 
World.setBlock(coords.x,coords.y+2,  coords.z, 139, 0);
World.setBlock(coords.x,coords.y+3,  coords.z, 139, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z, 139, 0);
World.setBlock(coords.x+1,coords.y+2,  coords.z, 139, 0);}}});




// file: dayblock.js

IDRegistry.genBlockID("dayredblock");
Block.createBlockWithRotation("dayredblock", [{name: "time set day block", texture: [["daytime", 0], ["daytime", 0], ["daytime", 0], ["daytime", 0], ["daytime", 0], ["daytime", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.dayredblock, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 266, -1, 'a', 151, -1, 'c', 406, -1, 'b', 404, -1]);

TileEntity.registerPrototype(BlockID.dayredblock, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWorldTime(0) }
}});



IDRegistry.genBlockID("nighttime");
Block.createBlockWithRotation("nighttime", [{name: "time set night block", texture: [["nighttime", 0], ["nighttime", 0], ["nighttime", 0], ["nighttime", 0], ["nighttime", 0], ["nighttime", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.nighttime, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 263, -1, 'a', 151, -1, 'c', 406, -1, 'b', 404, -1]);

TileEntity.registerPrototype(BlockID.nighttime, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWorldTime(13800) }
}});



IDRegistry.genBlockID("weatherrain");
Block.createBlockWithRotation("weatherrain", [{name: "no work", texture: [["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0], ["weatherrain", 0]], inCreative: true}], "opaque");

TileEntity.registerPrototype(BlockID.weatherrain, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWeather(4) }
}});



IDRegistry.genBlockID("weatherclear");
Block.createBlockWithRotation("weatherclear", [{name: "weather clear block", texture: [["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0], ["weatherclear", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.weatherclear, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 123, -1, 'a', 251, -1, 'c', 325, 8, 'b', 404, -1]);

TileEntity.registerPrototype(BlockID.weatherclear, {
defaultValues: {},

redstone: function(params){
if(params.power >1){
World.setWeather(1) }
}});

IDRegistry.genBlockID("grinder");
Block.createBlockWithRotation("grinder", [{name: "mob grinder", texture: [["grinder", 0], ["grinder", 0], ["grinder", 0], ["grinder", 0], ["grinder", 0], ["grinder", 0]], inCreative: true}], "opaque");

Recipes.addShaped({id: BlockID.grinder, count: 1, data: 0}, [
"cxc","xax","bxb"], ['x', 267, -1, 'a', 251, -1, 'c', 145, -1, 'b', 152, -1]);





var evilMobs = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];

TileEntity.registerPrototype(BlockID.grinder,{
	defaultValues: {
  damage: 100,
  range: 7
  },
redstone: function(params){ 
if(params.power >1){
for(let i in evilMobs){
let ent = Entity.findNearest({x: this.x, y: this.y, z: this.z}, evilMobs[i], this.data.range);
if(ent){
Entity.damageEntity(ent, 100);
this.data.exp += 3;}}}}});





// file: apple.js

IDRegistry.genBlockID("applebb");
Block.createBlock("applebb", [
	{name: "apple bush", texture: [["applebb", 0], ["applebb", 0], ["applebb", 0], ["applebb", 0], ["applebb", 0], ["applebb", 0]], inCreative: true}]);
	IDRegistry.genBlockID("applebbb");
Block.createBlock("applebbb", [
	{name: "apple bush", texture: [["applebb", 1], ["applebb", 1], ["applebb", 1], ["applebb", 1], ["applebb", 1], ["applebb", 1]], inCreative: false}]);
	
	Recipes.addShaped({id: BlockID.applebb, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', 18, -1, 'a', 260, -1]);

Block.setDestroyTime(BlockID.applebb, 0.4);
ToolAPI.registerBlockMaterial(BlockID.applebb, "wood");
Block.setRandomTickCallback(BlockID.applebb, function(x, y, z, id, data){
	if(data==0 && Math.random() < 0.1){
		World.setBlock(x, y, z, BlockID.applebbb, 0);
	}});
	



Callback.addCallback("ItemUse", function (coords, item, block) { 
if(block.id==BlockID.applebbb){
World.setBlock(coords.x, coords.y, coords.z, BlockID.applebb, 0);
World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, 260, 2, 0);
}});



	




// file: stonebrick.js

IDRegistry.genBlockID("andesite_brick");
Block.createBlockWithRotation("andesite_brick", [{name: "andesite brick", texture: [["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0], ["andesite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.andesite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 6]);

IDRegistry.genBlockID("diorite_brick");
Block.createBlockWithRotation("diorite_brick", [{name: "diorite brick", texture: [["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0], ["diorite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.diorite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 4]);

IDRegistry.genBlockID("granite_brick");
Block.createBlockWithRotation("granite_brick", [{name: "granite brick", texture: [["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0], ["granite_brick", 0]], inCreative: true}], "opaque");
Recipes.addShaped({id: BlockID.granite_brick, count: 4, data: 0}, [
"xx","xx",""], ['x', 1, 2]);

Recipes.addShaped({id: 351, count: 2, data: 0}, [
"xa","",""], ['x', 263, -1, 'a', 351, 15]);





// file: soul.js

IDRegistry.genItemID("dustevil");
Item.createItem("dustevil", "dust evil", {name: "dustvile", meta: 0}); 

Recipes.addShaped({id: ItemID.dustevil, count: 1, data: 0}, 
["aba",
 "aca",
 "ada"], 
 ['a', 88, -1, 'b', 289, -1, 'c', 331, -1, 'd', 348, -1]);

IDRegistry.genItemID("evilflint");
Item.createItem("evilflint", "evil flint", {name: "soulflint", meta: 0}); 

Recipes.addShaped({id: ItemID.evilflint, count: 1, data: 0}, 
["aaa",
 "aba",
 "aaa"], 
 ['a', 88, -1, 'b', 318, -1]);
 
 
IDRegistry.genItemID("demonicdust");
Item.createItem("demonicdust", "demonic dust", {name: "demonicdust", meta: 0}); 

Recipes.addShaped({id: ItemID.demonicdust, count: 1, data: 0}, 
["a  ",
 " b ",
 "  a"], 
 ['a', ItemID.dustevil, -1, 'b', ItemID.evilflint, -1]);
 
 
IDRegistry.genItemID("soulingot");
Item.createItem("soulingot", "soul ingot", {name: "soulingot", meta: 0}); 
Recipes.addShaped({id: ItemID.soulingot, count: 1, data: 0}, 
["aaa",
 "aba",
 "aaa"], 
 ['a', 266, -1, 'b', ItemID.demonicdust, -1]); 
 
 
 
IDRegistry.genItemID("swordsoul");
Item.createItem("swordsoul", "sword soul", {name: "swordsoul", meta: 0}); 
Recipes.addShaped({id:
ItemID.swordsoul, count: 1, data: 0}, 
["a",
 "a",
 "b"], 
 ['a', ItemID.soulingot, -1, 'b', ItemID.demonicdust, -1]); 
 
Callback.addCallback("PlayerAttack",function(player,victim){

var mobId = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 55, 57, 104, 105];
for(var i=0; i<106; i++)
{
item=Player.getCarriedItem(true);


if(item.id==ItemID.swordsoul&&Entity.getType(victim)==mobId[i]&&Math.random() < 0.01)
{
var coords = Entity.getPosition(victim);
Entity.damageEntity(victim, 9);
World.drop(coords.x, coords.y, coords.z, 383, 1, mobId[i]);}}});

Callback.addCallback("PlayerAttack",function(player,victim){
item=Player.getCarriedItem(true);
if(item.id==ItemID.swordsoul&&Entity.getType(victim)!==0){
Entity.damageEntity(victim, 9);
}});

 
IDRegistry.genBlockID("mobSpawners");
Block.createBlockWithRotation("mobSpawners", [{name: "mob spawner", texture: [["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0], ["mspawner", 0]], inCreative: true}]);

Recipes.addShaped({id: BlockID.mobSpawners, count: 1, data: 0}, [
"xxx","xax","xxx"], ['x', ItemID.soulingot, -1, 'a', 383, -1]);

var guiSpawn = new UI.StandartWindow({
	standart: {
		header: {text: {text: "mob spawner"}},
		inventory: {standart: true},
		background: {standart: true}},
drawing: [{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2}],
elements: {"slotGlass": {type: "slot", x: 441, y: 75},
"textInfo4": {type: "text", x: 441, y: 50, width: 300, height: 28, text: "spawn egg"},
"textInfo5": {type: "text", x: 800, y: 230, width: 300, height: 30, text: "redstoune:"},
		"textInfo7": {type: "text", x: 930, y: 230, width: 300, height: 30}
}});
TileEntity.registerPrototype(BlockID.mobSpawners,{
	defaultValues:{
	work:0
	},
	getGuiScreen: function(){return guiSpawn;},
	redstone: function(params){ 
if(this.data.work == 1&&params.power >1)
{
this.data.work = 0;
}
else{
if(this.data.work == 0&&params.power >1)
{
this.data.work = 1;
}}},
tick: function(){
this.container.setText("textInfo7", parseInt(this.data.work));
var glassId = this.container.getSlot("slotGlass");
var crisId = this.container.getSlot("slotCris");
if(World.getThreadTime()%100== 0&&this.data.work==1){
if(glassId.id == 383&&glassId.data==glassId.data&&this.data.work==1){

Entity.spawn(this.x+0.5, this.y+2, this.z+0.5, glassId.data)}}}});



 
 
 





