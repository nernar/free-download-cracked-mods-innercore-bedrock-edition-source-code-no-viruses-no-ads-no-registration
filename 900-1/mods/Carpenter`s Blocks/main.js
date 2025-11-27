/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 4
*/



// file: header.js

IMPORT("RenderUtil");




// file: blocks.js

Translation.addTranslation("Frame", {
	ru: "Рамка"
});
IDRegistry.genBlockID("full_frame");
Block.createBlock("full_frame", [
	{
		name: "Frame",
		texture: [
			["full_frame",0]
		],
		inCreative: true
	}
],{
	baseBlock: 1,
	destroyTime: 25,
	explosionResistance: 150,
	renderLayer: 1,
	sound: "wood"
});

const BLACK_LIST = [ItemID.chisel, ItemID.hammer, BlockID.full_frame];
let caches = new RenderUtil.ModelsCache("full_frame");
const NAME = "m";
let COUNT = 12;
const STANDARD = new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, 1, 1, 1, BlockID.full_frame, 0);

BlockRenderer.enableCoordMapping(BlockID.full_frame, 0, STANDARD.getICRenderModel());

caches.add("0", STANDARD);

caches.add("1", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, 1, .5, 1, 0, 0));
caches.add("2", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, .5, 0, 1, 1, 1, 0, 0));

caches.add("3", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, .5, 1, 1, 0, 0));
caches.add("4", new RenderUtil.Model()
	.addBoxByBlock(NAME, .5, 0, 0, 1, 1, 1, 0, 0));
	
caches.add("5", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, 1, 1, .5, 0, 0));
caches.add("6", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, .5, 1, 1, 1, 0, 0));
	
caches.add("7", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, 1, 1/16, 1, 0, 0));
caches.add("8", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 1/16, 0, 1, 1, 1, 0, 0));

caches.add("9", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, 1/16, 1, 1, 0, 0));
caches.add("10", new RenderUtil.Model()
	.addBoxByBlock(NAME, 1/16, 0, 0, 1, 1, 1, 0, 0));
	
caches.add("11", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 0, 1, 1, 1/16, 0, 0));
caches.add("12", new RenderUtil.Model()
	.addBoxByBlock(NAME, 0, 0, 1/16, 1, 1, 1, 0, 0));

TileEntity.registerPrototype(BlockID.full_frame, {
	defaultValues: {
		id: 0,
		data: 0,
		model: 0
	},
	client: new RenderUtil.TileEntityClient({
		buildModel(model){
			model.getBoxes()[NAME].id = Number(Network.serverToLocalId(this.networkData.getInt("id"))) || BlockID.full_frame;
			model.getBoxes()[NAME].data = Number(this.networkData.getInt("data"));
		}
	}),
	init(){
		this.updateModel();
	},
	dropItem(){
		this.blockSource.spawnDroppedItem(this.x, this.y, this.z, this.data.id, 1, this.data.data);
	},
	destroyBlock(){
		this.dropItem();
	},
	updateModel(){
		RenderUtil.updateModelTileEntity(this.networkData, "full_frame", String(this.data.model));
		this.networkData.putInt("id", this.data.id);
		this.networkData.putInt("data", this.data.data);
		this.networkData.sendChanges();
	},
	click(id, count, data, coords, player){
		if(BLACK_LIST.indexOf(id) != -1) return;
		if(this.data.id != 0) this.dropItem();
		this.data.id = id; 
		this.data.data = data;
		this.updateModel();
		Game.prevent();
		Entity.setCarriedItem(player, id, count-1, data);
	}
});

Recipes.addShaped({id: BlockID.full_frame, count: 5, data: 0}, [
	"aaa",
	"aba",
	"aaa"
], [
	'a', VanillaItemID.stick, 0,
	'b', VanillaBlockID.planks, 0
]);

let places = {};
let isItemSpendingAllowed = Game.isItemSpendingAllowed;
Callback.addCallback("ItemUse", function(coords, item, block){
	if(block.id == BlockID.full_frame && Block.placeFuncs[item.id]){
		places[item.id] = Block.placeFuncs[item.id];
		Block.placeFuncs[item.id] = function(){};
		Game.isItemSpendingAllowed = function(){
			return false;
		}
	}
}, 2);
Callback.addCallback("ItemUse", function(coords, item, block){
	if(places[item.id]){
		Block.placeFuncs[item.id] = places[item.id];
		places[item.id] = undefined;
		Game.isItemSpendingAllowed = isItemSpendingAllowed;
	}
}, -2);




// file: items.js

Translation.addTranslation("Chisel", {
	ru: "Стамеска"
});
IDRegistry.genItemID("chisel");
Item.createItem("chisel", "Chisel", {name: "chisel", meta: 0});

Translation.addTranslation("Hammer", {
	ru: "Молот"
});
IDRegistry.genItemID("hammer");
Item.createItem("hammer", "Hammer", {name: "hammer", meta: 0});

Item.registerUseFunction(ItemID.chisel, function(pos, item, block, player){
	if(block.id == BlockID.full_frame){
		let region = BlockSource.getDefaultForActor(player);
		let tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
		if(!tile) tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
		if(tile){
			tile.dropItem();
			tile.data.id = 0;
			tile.data.data = 0;
			tile.updateModel();
		}
	}
});
Item.registerUseFunction(ItemID.hammer, function(pos, item, block, player){
	if(block.id == BlockID.full_frame){
		let region = BlockSource.getDefaultForActor(player);
		let tile = TileEntity.getTileEntity(pos.x, pos.y, pos.z, region);
		if(!tile) tile = TileEntity.addTileEntity(pos.x, pos.y, pos.z, region);
		if(tile){
			tile.data.model++;
			if(tile.data.model > COUNT)
				tile.data.model = 0;
			tile.updateModel();
		}
	}
});

Recipes.addShaped({id: ItemID.chisel, count: 1, data: 0}, [
	"   ",
	" b ",
	" a "
], [
	'a', BlockID.full_frame,0,
	'b', VanillaItemID.iron_ingot, 0
]);
Recipes.addShaped({id: ItemID.hammer, count: 1, data: 0}, [
	"bb ",
	" ab",
	" a "
], [
	'a', BlockID.full_frame,0,
	'b', VanillaItemID.iron_ingot, 0
]);




// file: shared.js

ModAPI.registerAPI("CarpenterBlocks", {
requireGlobal(cmd){
return eval(cmd);
}
});




