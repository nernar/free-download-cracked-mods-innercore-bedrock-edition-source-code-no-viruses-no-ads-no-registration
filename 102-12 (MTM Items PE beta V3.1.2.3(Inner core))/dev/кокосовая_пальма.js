IDRegistry.genBlockID("c");
Block.createBlock("c", [{name: "этот предмет бесполезный(выкинь)", texture: [["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0]], inCreative: false}]);
IDRegistry.genBlockID("azhenetc_palmi");
Block.createBlock("azhenetc_palmi", [{name: "этот предмет бесполезный(выкинь)", texture: [["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0], ["саженец_пальмы", 0]], inCreative: false}]);
IDRegistry.genBlockID("palmovie_doski");
Block.createBlock("palmovie_doski", [{name: "Пальмовые доски", texture: [["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0], ["пальмовые_доски", 0]], inCreative: false}], BLOCK_TYPE_WOOD);
function createKokosRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (6/16, 10/16, 6/16, 10/16, 15/16, 10/16,  BlockID.c,0);
model.addBox (7/16, 9/16, 7/16, 9/16, 1, 9/16,  BlockID.c,0);
model.addBox (5/16, 11/16, 7/16, 11/16, 14/16, 9/16,  BlockID.c,0);
model.addBox (7/16, 11/16, 5/16, 9/16, 14/16, 11/16,  BlockID.c,0);
model.addBox (13/32, 21/32, 11/32, 19/32, 29/32, 21/32,  BlockID.c,0);
model.addBox (11/32, 21/32, 13/32, 21/32, 29/32, 19/32,  BlockID.c,0);
model.addBox (13/32, 19/32, 13/32, 19/32, 31/32, 19/32,  BlockID.c,0);
render.addEntry(model);
}
IDRegistry.genBlockID("kokos");
Block.createBlock("kokos", [{name: "тест", texture: [["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0], ["кокос", 0]], inCreative: false}], BLOCK_TYPE_KOKOS);
createKokosRender(BlockID.kokos, 35, 12);
Block.setBlockShape(BlockID.kokos, {x: 5/16, y: 9/16, z: 5/16}, {x: 11/16, y: 1, z: 11/16})
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.kokos) 
{
Game.prevent();
}});
var RU_SAPLING_GROUND_TILS = {
	12: true,
	2: true,
	3: true,
	60: true,
	243: true
};
IDRegistry.genItemID("sazhenetc_palmi");
Item.createItem("sazhenetc_palmi", "Саженец пальмы", {name: "саженец_пальмы", data: 0}, {});
Item.registerUseFunction("sazhenetc_palmi", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && RU_SAPLING_GROUND_TILS[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.vi);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
IDRegistry.genBlockID("vi");
Block.createBlock("vi", [
	{name: "Rubber Tree Saplin", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
], BLOCK_TYPE_SAZHENETC);
Block.setBlockShape(BlockID.vi, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("vi", function(){
	return [[ItemID.sazhenetc_palmi, 1, 0]];
});
TileEntity.registerPrototype(BlockID.vi, {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation1.describeItem({
			id: ItemID.sazhenetc_palmi,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.sazhenetc_palmi,
			count: 1,
			data: 0,
			rotation: "z",
			size: this.data.size
		});
		this.animation2.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},
	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},
	
	init: function(){
		this.initAnimation();
	},
	
	destroy: function(){
		this.destroyAnimation();
	},
	
	tick: function(){
		if (World.getThreadTime() % 30 == 0){
			this.data.growth += Math.random() * 2;
			this.checkGrowth();
			}
		if (World.getThreadTime() % 2 == 0){
			if (!RU_SAPLING_GROUND_TILS[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},
	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 98 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 1000;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 1024){
			this.selfDestroy();
			World.setBlock(this.x, this.y, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+6, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+5, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+4, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+3, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+2, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+1, this.z, BlockID.drevesina_palmi, 0);
			World.setBlock(this.x, this.y+7, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+7, this.z);
			World.setBlock(this.x+1, this.y+6, this.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+1, this.y+6, this.z+1);
			World.setBlock(this.x+1, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+1, this.y+6, this.z);
			World.setBlock(this.x+1, this.y+6, this.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+1, this.y+6, this.z-1);
			World.setBlock(this.x-1, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-1, this.y+6, this.z);
			World.setBlock(this.x-1, this.y+6, this.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-1, this.y+6, this.z+1);
			World.setBlock(this.x-1, this.y+6, this.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-1, this.y+6, this.z-1);
			World.setBlock(this.x, this.y+6, this.z-1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z-1);
			World.setBlock(this.x, this.y+6, this.z+1, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z+1);
			World.setBlock(this.x+2, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+2, this.y+6, this.z);
			World.setBlock(this.x+3, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+3, this.y+6, this.z);
			World.setBlock(this.x+2, this.y+6, this.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+2, this.y+6, this.z+2);
			World.setBlock(this.x+2, this.y+6, this.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x+2, this.y+6, this.z-2);
			World.setBlock(this.x-2, this.y+6, this.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-2, this.y+6, this.z-2);
			World.setBlock(this.x-2, this.y+6, this.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-2, this.y+6, this.z+2);
			World.setBlock(this.x-2, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-2, this.y+6, this.z);
			World.setBlock(this.x-3, this.y+6, this.z, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x-3, this.y+6, this.z);
			World.setBlock(this.x, this.y+6, this.z-2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z-2);
			World.setBlock(this.x, this.y+6, this.z-3, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z-3);
			World.setBlock(this.x, this.y+6, this.z+2, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z+2);
			World.setBlock(this.x, this.y+6, this.z+3, BlockID.listva_palmi, 0);
			World.addTileEntity(this.x, this.y+6, this.z+3);
	if(Math.random() < .3){
World.setBlock(this.x+1, this.y+5, this.z+1, BlockID.kokos, 0);
World.addTileEntity(this.x+1, this.y+5, this.z+1);
}
	if(Math.random() < .3){
World.setBlock(this.x+1, this.y+5, this.z-1, BlockID.kokos, 0);
World.addTileEntity(this.x+1, this.y+5, this.z-1);
}
	if(Math.random() < .3){
World.setBlock(this.x+1, this.y+5, this.z, BlockID.kokos, 0);
World.addTileEntity(this.x+1, this.y+5, this.z);
}
	if(Math.random() < .3){
World.setBlock(this.x-1, this.y+5, this.z+1, BlockID.kokos, 0);
World.addTileEntity(this.x-1, this.y+5, this.z+1);
}
	if(Math.random() < .3){
World.setBlock(this.x-1, this.y+5, this.z-1, BlockID.kokos, 0);
World.addTileEntity(this.x-1, this.y+5, this.z-1);
}
	if(Math.random() < .3){
World.setBlock(this.x-1, this.y+5, this.z, BlockID.kokos, 0);
World.addTileEntity(this.x-1, this.y+5, this.z);
}
	if(Math.random() < .3){
World.setBlock(this.x, this.y+5, this.z+1, BlockID.kokos, 0);
World.addTileEntity(this.x, this.y+5, this.z+1);
}
	if(Math.random() < .3){
World.setBlock(this.x, this.y+5, this.z-1, BlockID.kokos, 0);
World.addTileEntity(this.x, this.y+5, this.z-1);
}
	if(Math.random() < .7){
World.setBlock(this.x+4, this.y+5, this.z, BlockID.listva_palmi, 0);
World.addTileEntity(this.x+4, this.y+5, this.z);
}
	if(Math.random() < .7){
World.setBlock(this.x-4, this.y+5, this.z, BlockID.listva_palmi, 0);
World.addTileEntity(this.x-4, this.y+5, this.z);
}
	if(Math.random() < .7){
World.setBlock(this.x, this.y+5, this.z-4, BlockID.listva_palmi, 0);
World.addTileEntity(this.x, this.y+5, this.z-4);
}
	if(Math.random() < .7){
World.setBlock(this.x, this.y+5, this.z+4, BlockID.listva_palmi, 0);
World.addTileEntity(this.x, this.y+5, this.z+4);
}
	if(Math.random() < .7){
World.setBlock(this.x+3, this.y+5, this.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x+3, this.y+5, this.z-3);
}
	if(Math.random() < .7){
World.setBlock(this.x-3, this.y+5, this.z-3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x-3, this.y+5, this.z-3);
}
	if(Math.random() < .7){
World.setBlock(this.x+3, this.y+5, this.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x+3, this.y+5, this.z+3);
}
	if(Math.random() < .7){
World.setBlock(this.x-3, this.y+5, this.z+3, BlockID.listva_palmi, 0);
World.addTileEntity(this.x-3, this.y+5, this.z+3);
}
		}
	}
});
TileEntity.registerPrototype(BlockID.kokos, {
	tick: function(){
	    if (Config.realism) {
		if (World.getThreadTime() % 2 == 0){
			if (World.getBlockID(this.x, this.y + 1, this.z)!==BlockID.listva_palmi){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.listva_palmi, {
	tick: function(){
    if (Config.realism) {
if(World.getBlockID(this.x, this.y-1, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z+1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z-1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+1, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-1, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-1, this.y, this.z+1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+1, this.y, this.z-1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+1, this.y, this.z+1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-1, this.y, this.z-1) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z+2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z-2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+2, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-2, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-3, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+3, this.y, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z+3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y, this.z-3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-4, this.y+1, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+4, this.y+1, this.z) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y+1, this.z+4) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x, this.y+1, this.z-4) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+2, this.y, this.z+2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-2, this.y, this.z-2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+2, this.y, this.z-2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-2, this.y, this.z+2) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+3, this.y+1, this.z+3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-3, this.y+1, this.z-3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x+3, this.y+1, this.z-3) !== BlockID.drevesina_palmi)
{
if(World.getBlockID(this.x-3, this.y+1, this.z+3) !== BlockID.drevesina_palmi)
{
		if (World.getThreadTime() % 30 == 0){
	if(Math.random() < .05){
				World.destroyBlock(this.x, this.y, this.z, true);
}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
}
			}
		}
	}
});