var BLOCK_TYPE_WD = Block.createSpecialType({
	base: 5,
	destroytime: 0.01,
	opaque: true
});

IDRegistry.genItemID("zola");
Item.createItem("zola", "зола", {name: "зола", meta: 0}, {});

IDRegistry.genBlockID("ka");
Block.createBlock("ka", [
{name: "ящик", texture: [["ka", 0], ["ka", 0], ["ka", 0],["ka", 0], ["ka", 0], ["ka", 0]], inCreative: false}]);
IDRegistry.genBlockID("zo");
Block.createBlock("zo", [
{name: "ящик", texture: [["empty", 0], ["зола", 0], ["empty", 0],["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}], BLOCK_TYPE_WD);
IDRegistry.genBlockID("z");
Block.createBlock("z", [
{name: "ящик", texture: [["z", 0], ["z", 0], ["empty", 0],["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}]);
IDRegistry.genBlockID("kb");
Block.createBlock("kb", [
{name: "ящик", texture: [["kb", 0], ["kb", 0], ["kb", 0],["kb", 0], ["kb", 0], ["kb", 0]], inCreative: false}]);
IDRegistry.genBlockID("kc");
Block.createBlock("kc", [
{name: "ящик", texture: [["kc", 0], ["kc", 0], ["kc", 0],["kc", 0], ["kc", 0], ["kc", 0]], inCreative: false}]);
IDRegistry.genBlockID("kd");
Block.createBlock("kd", [
{name: "ящик", texture: [["kd", 0], ["kd", 0], ["kd", 0],["kd", 0], ["kd", 0], ["kd", 0]], inCreative: false}]);

var BLOCK_TYPE_WOD = Block.createSpecialType({
	base: 5,
	lightlevel:10,
	destroytime: 2,
	opaque: true
});

function createkstr(stringId,textureItem, textureBlock, textureIndex,itemName, itemId, blockId, itemIndex){
IDRegistry.genBlockID(stringId);
Block.createBlock(stringId, [
	{name: itemName, texture: [[textureBlock, textureIndex]], inCreative: false}
],BLOCK_TYPE_WOD);
IDRegistry.genItemID(stringId);
Item.createItem(stringId, itemName, {name: textureItem, meta: itemIndex}, {});

Block.registerDropFunction(stringId, function(coords, id, data, diggingLevel, toolLevel){
	return [[itemId, 1, 0]]; 
});
Item.registerUseFunction(stringId, function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, blockId);
Player.decreaseCarriedItem (1)
});
}

IDRegistry.genBlockID("kst");
Block.createBlock("kst", [
{name: "ящик", texture: [["log_oak", 0], ["log_oak", 0], ["log_oak", 0],["log_oak", 0], ["kstr", 0], ["kstr", 0]], inCreative: false}]);

IDRegistry.genBlockID("ks");
Block.createBlock("ks", [
{name: "ящик", texture: [["log_oak", 0], ["log_oak", 0], ["kstr", 0],["kstr", 0], ["log_oak", 0], ["log_oak", 0]], inCreative: false}]);

createkstr("kstr","kstr","log_oak",0, "костёр", ItemID.kstr, BlockID.kstr,0);
ToolAPI.registerBlockMaterial(BlockID.kstr, "wood");

function createKSRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (11/16, 0, 5/16, 20/16, 6/16, 11/16,  BlockID.kst, 0);
model.addBox (20/16, 0, 10/16, 21/16, 6/16, 11/16,  BlockID.kst, 0);
model.addBox (20/16, 0, 5/16, 21/16, 6/16, 6/16,  BlockID.kst, 0);
model.addBox (20/16, 0, 6/16, 21/16, 1/16, 10/16,  BlockID.kst, 0);
model.addBox (20/16, 5/16, 6/16, 21/16, 6/16, 10/16,  BlockID.kst, 0);
model.addBox (5/16, 0, -4/16, 11/16, 6/16, 5/16,  BlockID.ks, 0);
model.addBox (5/16, 0, -5/16, 6/16, 6/16, -4/16,  BlockID.ks, 0);
model.addBox (10/16, 0, -5/16, 11/16, 6/16, -4/16,  BlockID.ks, 0);
model.addBox (6/16, 0, -5/16, 10/16, 1/16, -4/16,  BlockID.ks, 0);
model.addBox (6/16, 5/16, -5/16, 10/16, 6/16, -4/16,  BlockID.ks, 0);
model.addBox (5/16, 0, 11/16, 11/16, 6/16, 20/16,  BlockID.ks, 0);
model.addBox (10/16, 0, 20/16, 11/16, 6/16, 21/16,  BlockID.ks, 0);
model.addBox (5/16, 0, 20/16, 6/16, 6/16, 21/16,  BlockID.ks, 0);
model.addBox (6/16, 5/16, 20/16, 10/16, 6/16, 21/16,  BlockID.ks, 0);
model.addBox (6/16, 0, 20/16, 10/16, 1/16, 21/16,  BlockID.ks, 0);
model.addBox (-4/16, 0, 5/16, 5/16, 6/16, 11/16,  BlockID.kst, 0);
model.addBox (-5/16, 0, 5/16, -4/16, 6/16, 6/16,  BlockID.kst, 0);
model.addBox (-5/16, 0, 10/16, -4/16, 6/16, 11/16,  BlockID.kst, 0);
model.addBox (-5/16, 5/16, 6/16, -4/16, 6/16, 10/16,  BlockID.kst, 0);
model.addBox (-5/16, 0, 6/16, -4/16, 1/16, 10/16,  BlockID.kst, 0);
model.addBox (5/16, 1/128, 5/16, 161/512, 11/16, 11/16,  51, 0);
model.addBox (351/512, 1/128, 5/16, 11/16, 11/16, 11/16,  51, 0);
model.addBox (5/16, 1/128, 351/512, 11/16, 11/16, 11/16,  51, 0);
model.addBox (5/16, 1/128, 5/16, 11/16, 11/16, 161/512,  51, 0);
model.addBox (6/16, 1/128, 5/16, 193/512, 11/16, 11/16,  51, 0);
model.addBox (319/512, 1/128, 5/16, 10/16, 11/16, 11/16,  51, 0);
model.addBox (5/16, 1/128, 319/512, 11/16, 11/16, 10/16,  51, 0);
model.addBox (5/16, 1/128, 6/16, 11/16, 11/16, 193/512,  51, 0);
model.addBox (5/16, 0, 5/16, 11/16, 1/128, 11/16,  BlockID.z, 0);
model.addBox (4/16, 0, 11/16, 5/16, 1/16, 12/16,  BlockID.kc, 0);
model.addBox (4/16, 0, 12/16, 5/16, 1/16, 13/16,  BlockID.kb, 0);
model.addBox (3/16, 0, 11/16, 4/16, 1/16, 12/16,  BlockID.ka, 0);
model.addBox (3/16, 0, 12/16, 4/16, 1/16, 13/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 13/16, 3/16, 1/16, 14/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 12/16, 3/16, 1/16, 13/16,  BlockID.ka, 0);
model.addBox (3/16, 0, 13/16, 4/16, 1/16, 14/16,  BlockID.kb, 0);
model.addBox (1/16, 0, 14/16, 2/16, 1/16, 15/16,  BlockID.ka, 0);
model.addBox (1/16, 0, 13/16, 2/16, 1/16, 14/16,  BlockID.ka, 0);
model.addBox (2/16, 0, 14/16, 3/16, 1/16, 15/16,  BlockID.kb, 0);
model.addBox (4/16, 0, 4/16, 5/16, 1/16, 5/16,  BlockID.kc, 0);
model.addBox (4/16, 0, 3/16, 5/16, 1/16, 4/16,  BlockID.kb, 0);
model.addBox (3/16, 0, 4/16, 4/16, 1/16, 5/16,  BlockID.ka, 0);
model.addBox (3/16, 0, 3/16, 4/16, 1/16, 4/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 2/16, 3/16, 1/16, 3/16,  BlockID.kd, 0);
model.addBox (2/16, 0, 3/16, 3/16, 1/16, 4/16,  BlockID.ka, 0);
model.addBox (3/16, 0, 2/16, 4/16, 1/16, 3/16,  BlockID.kb, 0);
model.addBox (1/16, 0, 1/16, 2/16, 1/16, 2/16,  BlockID.ka, 0);
model.addBox (1/16, 0, 2/16, 2/16, 1/16, 3/16,  BlockID.ka, 0);
model.addBox (2/16, 0, 1/16, 3/16, 1/16, 2/16,  BlockID.kb, 0);
model.addBox (11/16, 0, 4/16, 12/16, 1/16, 5/16,  BlockID.kc, 0);
model.addBox (11/16, 0, 3/16, 12/16, 1/16, 4/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 4/16, 13/16, 1/16, 5/16,  BlockID.ka, 0);
model.addBox (12/16, 0, 3/16, 13/16, 1/16, 4/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 2/16, 14/16, 1/16, 3/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 3/16, 14/16, 1/16, 4/16,  BlockID.ka, 0);
model.addBox (12/16, 0, 2/16, 13/16, 1/16, 3/16,  BlockID.kb, 0);
model.addBox (14/16, 0, 1/16, 15/16, 1/16, 2/16,  BlockID.ka, 0);
model.addBox (14/16, 0, 2/16, 15/16, 1/16, 3/16,  BlockID.ka, 0);
model.addBox (13/16, 0, 1/16, 14/16, 1/16, 2/16,  BlockID.kb, 0);
model.addBox (11/16, 0, 11/16, 12/16, 1/16, 12/16,  BlockID.kc, 0);
model.addBox (11/16, 0, 12/16, 12/16, 1/16, 13/16,  BlockID.kb, 0);
model.addBox (12/16, 0, 11/16, 13/16, 1/16, 12/16,  BlockID.ka, 0);
model.addBox (12/16, 0, 12/16, 13/16, 1/16, 13/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 13/16, 14/16, 1/16, 14/16,  BlockID.kd, 0);
model.addBox (13/16, 0, 12/16, 14/16, 1/16, 13/16,  BlockID.ka, 0);
model.addBox (12/16, 0, 13/16, 13/16, 1/16, 14/16,  BlockID.kb, 0);
model.addBox (14/16, 0, 14/16, 15/16, 1/16, 15/16,  BlockID.ka, 0);
model.addBox (14/16, 0, 13/16, 15/16, 1/16, 14/16,  BlockID.ka, 0);
model.addBox (13/16, 0, 14/16, 14/16, 1/16, 15/16,  BlockID.kb, 0);
model.addBox (7/16, 1/32, 12/16, 9/16, 15/16, 14/16,  idMaterial, dataMaterial);
model.addBox (7/16, 1/32, 2/16, 9/16, 15/16, 4/16,  idMaterial, dataMaterial);
model.addBox (15/32, 15/16, 25/32, 17/32, 31/32, 27/32,  idMaterial, dataMaterial);
model.addBox (15/32, 15/16, 5/32, 17/32, 31/32, 7/32,  idMaterial, dataMaterial);
model.addBox (15/32, 13/16, 3/32, 17/32, 14/16, 29/32,  idMaterial, dataMaterial);
model.addBox (-2/16, 0, -2/16, -1/16, 1/16, -1/16,  4, 0);
model.addBox (3/16, 0, 15/16, 4/16, 1/16, 1,  4, 0);
model.addBox (18/16, 0, 17/16, 19/16, 1/16, 18/16,  4, 0);
model.addBox (15/16, 0, 14/16, 1, 1/16, 15/16,  4, 0);
render.addEntry(model);
}

function createKRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (11/16, 0, 5/16, 21/16, 6/16, 11/16,  BlockID.kst, 0);
model.addBox (5/16, 0, 11/16, 11/16, 6/16, 21/16,  BlockID.ks, 0);
model.addBox (-5/16, 0, 5/16, 5/16, 6/16, 11/16,  BlockID.kst, 0);
model.addBox (5/16, 0, -5/16, 11/16, 6/16, 5/16,  BlockID.ks, 0);
model.addBox (7/16, 0, 12/16, 9/16, 15/16, 14/16,  idMaterial, dataMaterial);
model.addBox (7/16, 0, 2/16, 9/16, 15/16, 4/16,  idMaterial, dataMaterial);
model.addBox (15/32, 13/16, 5/32, 17/32, 14/16, 27/32,  idMaterial, dataMaterial);
render.addEntry(model);
}

createKSRender(BlockID.kstr, 5, 0);

Block.setBlockShape(BlockID.zo, {x: 0, y: 0, z: 0}, {x: 1, y: 0.01, z: 1});

TileEntity.registerPrototype(BlockID.kstr, {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	tick: function(){
			this.data.growth += 1;
			this.checkGrowth();
	},
	
	click: function(id, count, data){
		if (id == 319 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 320, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 349 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 350, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 363 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 364, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 365 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 366, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 392 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 393, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 423 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 424, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 460 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 463, 1, 0);
			Player.setCarriedItem(id, count - 1, data);
		}
		if (id == 264 && data == 0){
			this.data.growth += 105;
			this.checkGrowth();
			World.drop(this.x+0.5, this.y+1, this.z+0.5, 263, 1, 0);
			Game.message(ChatColor.RED + "Да ты просто сверхразум...P.S:Gojsjs(110010111101(2))");
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 1;
			this.data.lastGrowth = this.data.growth;
		}
		if (this.data.growth > 4800){
			World.setBlock(this.x, this.y, this.z, BlockID.zo, 0);
			}
		}
});

Block.registerDropFunction(BlockID.zo, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.zola, 1, 0]);
	return drop;
});

Recipes.addFurnaceFuel(BlockID.kstr, 0, 200);
Recipes.addFurnaceFuel(ItemID.zola, 0, 20);

Translation.addTranslation("зола", {en: "ash"});
Translation.addTranslation("костёр", {en: "bonfire"});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: 263, count: 1, data: 1}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.zola, 0]);
    Recipes.addShaped({id: ItemID.kstr, count: 1, data: 0}, [
        "aaa",
        "bab",
        "cac"
    ], ['a', 280, 0, 'b', 318, 0, 'c', 17, -1]);
});

Item.registerUseFunction("kstr", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.kstr, 0);
Player.decreaseCarriedItem (1)
});