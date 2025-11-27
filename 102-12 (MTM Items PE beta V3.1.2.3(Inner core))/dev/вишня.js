IDRegistry.genBlockID("azhenetc_vishni");
Block.createBlock("azhenetc_vishni", [{name: "листва вишни", texture: [["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0], ["саженец_вишни", 0]], inCreative: false}]);
IDRegistry.genBlockID("veshni");
Block.createBlock("veshni", [{name: "листва вишни", texture: [["вешня", 0], ["вешня", 0], ["вешня", 0], ["вешня", 0], ["вешня", 0], ["вешня", 0]], inCreative: false}]);
function createCherryRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (0.5, 14/16, 0.5, 0.55, 15/16, 0.5,  idMaterial, dataMaterial);
model.addBox (0.45, 15/16, 0.5, 0.5, 1, 0.5,  idMaterial, dataMaterial);//1/16=6.25
model.addBox (0.45, 49/64, 0.45, 0.55, 14/16, 0.55,  BlockID.veshni,0);
model.addBox (0.47, 48/64, 0.47, 0.53, 57/64, 0.53,  BlockID.veshni,0);
render.addEntry(model);
}
createCherry("avishnia","сито_из_дубовых_досок","вишня",0, "Вишня", ItemID.avishnia, BlockID.avishnia,0);
createCherryRender(BlockID.avishnia, 35, 12);
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.avishnia) 
{
Game.prevent();
}});
IDRegistry.genBlockID("drevesina_vishni");
Block.createBlock("drevesina_vishni", [{name: "Древесина вишни", texture: [["древесина_вишни_верх", 0], ["древесина_вишни_верх", 0], ["древесина_вишни", 0], ["древесина_вишни", 0], ["древесина_вишни", 0], ["древесина_вишни", 0]], inCreative: true}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("drevesina_palmi");
Block.createBlock("drevesina_palmi", [{name: "Древесина пальмы", texture: [["древесина_пальмы_верх", 0], ["древесина_пальмы_верх", 0], ["древесина_пальмы", 0], ["древесина_пальмы", 0], ["древесина_пальмы", 0], ["древесина_пальмы", 0]], inCreative: true}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("drevesina_dyriana");
Block.createBlockWithRotation("drevesina_dyriana", [{name: "Древесина дурианового дерева", texture: [["image23", 0], ["image23", 0], ["image19", 0], ["image21", 0], ["image20", 0], ["image22", 0]], inCreative: false}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("drevesina_dyrianad");
Block.createBlockWithRotation("drevesina_dyrianad", [{name: "Древесина дурианового дерева", texture: [["image23", 0], ["image23", 0], ["image19", 0], ["image211", 0], ["image20", 0], ["image22", 0]], inCreative: false}], BLOCK_TYPE_WOOD);
IDRegistry.genBlockID("listva_vishni");
Block.createBlock("listva_vishni", [{name: "Листва вишни", texture: [["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_palmi");
Block.createBlock("listva_palmi", [{name: "Листва пальмы", texture: [["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_dyriana");
Block.createBlock("listva_dyriana", [{name: "Листва дурианового дерева", texture: [["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_vishnii");
Block.createBlock("listva_vishnii", [{name: "Листва вишни", texture: [["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0], ["листва_вишни", 0]], inCreative: true}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_palmii");
Block.createBlock("listva_palmii", [{name: "Листва пальмы", texture: [["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0], ["листва_пальмы", 0]], inCreative: true}], BLOCK_TYPE_LISTVA);
IDRegistry.genBlockID("listva_dyrianaa");
Block.createBlock("listva_dyrianaa", [{name: "Листва дурианового дерева", texture: [["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0], ["image11", 0]], inCreative: false}], BLOCK_TYPE_LISTVA);
Block.setBlockShape(BlockID.drevesina_vishni, {x: 3/16, y: 0, z: 3/16}, {x: 13/16, y: 1, z: 13/16})
Block.setBlockShape(BlockID.avishnia, {x: 0.55, y: 48/64, z: 0.45}, {x: 0.45, y: 57/64, z: 0.55})
var CHERRY_SAPLING_GROUND_TILS = {
	2: true,
	3: true,
	243: true,
	60: true
};
IDRegistry.genItemID("sazhenetc_vishni");
Item.createItem("sazhenetc_vishni", "Саженец вишни", {name: "саженец_вишни", data: 0});
Item.registerUseFunction("sazhenetc_vishni", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && CHERRY_SAPLING_GROUND_TILS[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.vis);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});
IDRegistry.genBlockID("vis");
Block.createBlock("vis", [
	{name: "Cherry Tree Saplin", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
], BLOCK_TYPE_SAZHENETC);
Callback.addCallback("ItemUse", function(coords, item, block){
if(block.id == BlockID.avishnia) 
{
Game.prevent();
}});
Block.setBlockShape(BlockID.vis, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("vis", function(){
	return [[ItemID.sazhenetc_vishni, 1, 0]];
});
TileEntity.registerPrototype(BlockID.vis, {
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
			id: ItemID.sazhenetc_vishni,
			count: 1,
			data: 0,
			rotation: "x",
			size: this.data.size
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.sazhenetc_vishni,
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
			if (!CHERRY_SAPLING_GROUND_TILS[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},
	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 128 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},
	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 500;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 512){
			this.selfDestroy();
			World.setBlock(this.x, this.y, this.z, BlockID.drevesina_vishni, 0);//да не нормальный код на генерацию структуры, а че не так?
			World.setBlock(this.x, this.y+1, this.z, BlockID.drevesina_vishni, 0);
			World.setBlock(this.x, this.y+2, this.z, BlockID.drevesina_vishni, 0);
			World.setBlock(this.x, this.y+3, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+3, this.z);
			World.setBlock(this.x, this.y+4, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+4, this.z);
			World.setBlock(this.x, this.y+3, this.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+3, this.z+1);
			World.setBlock(this.x, this.y+3, this.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+3, this.z-1);
			World.setBlock(this.x+1, this.y+3, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x+1, this.y+3, this.z);
			World.setBlock(this.x-1, this.y+3, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x-1, this.y+3, this.z);
			World.setBlock(this.x, this.y+2, this.z+1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+2, this.z+1);
			World.setBlock(this.x, this.y+2, this.z-1, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x, this.y+2, this.z-1);
			World.setBlock(this.x+1, this.y+2, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x+1, this.y+2, this.z);
			World.setBlock(this.x-1, this.y+2, this.z, BlockID.listva_vishni, 0);
			World.addTileEntity(this.x-1, this.y+2, this.z);
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+1, this.z, BlockID.avishnia, 0);
World.addTileEntity(this.x-1, this.y+1, this.z);
}
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+1, this.z, BlockID.avishnia, 0);
World.addTileEntity(this.x+1, this.y+1, this.z);
}
	if(Math.random() < .5){
World.setBlock(this.x, this.y+1, this.z+1, BlockID.avishnia, 0);
World.addTileEntity(this.x, this.y+1, this.z+1);
}
	if(Math.random() < .5){
World.setBlock(this.x, this.y+1, this.z-1, BlockID.avishnia, 0);
World.addTileEntity(this.x, this.y+1, this.z-1);
}
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+2, this.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x-1, this.y+2, this.z+1);
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+1, this.z+1, BlockID.avishnia, 0);
World.addTileEntity(this.x-1, this.y+1, this.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+2, this.z+1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x+1, this.y+2, this.z+1);
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+1, this.z+1, BlockID.avishnia, 0);
World.addTileEntity(this.x+1, this.y+1, this.z+1);
}
}
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+2, this.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x-1, this.y+2, this.z-1);
	if(Math.random() < .5){
World.setBlock(this.x-1, this.y+1, this.z-1, BlockID.avishnia, 0);
World.addTileEntity(this.x-1, this.y+1, this.z-1);
}
}
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+2, this.z-1, BlockID.listva_vishni, 0);
World.addTileEntity(this.x+1, this.y+2, this.z-1);
	if(Math.random() < .5){
World.setBlock(this.x+1, this.y+1, this.z-1, BlockID.avishnia, 0);
World.addTileEntity(this.x+1, this.y+1, this.z-1);
}
}
		}
	}
});
TileEntity.registerPrototype(BlockID.avishnia, {//тут проверяет блок над вишенкой каждые 3 тика(это не так часто и нагрузки соответственно тоже не много)
	tick: function(){
    if (Config.realism) {
		if (World.getThreadTime() % 3 == 0){
			if (World.getBlockID(this.x, this.y + 1, this.z)!==BlockID.listva_vishni){
				World.destroyBlock(this.x, this.y, this.z, true);
			}
		}
	}
}
});
TileEntity.registerPrototype(BlockID.listva_vishni, {
	tick: function(){
    if (Config.realism) {
if(World.getBlockID(this.x, this.y-1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y-2, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y-1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y-1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y-1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y-1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y-1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y-1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y-1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y-1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y+1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x, this.y+1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y+1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y+1, this.z) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y+1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y+1, this.z-1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x+1, this.y+1, this.z+1) !== BlockID.drevesina_vishni)
{
if(World.getBlockID(this.x-1, this.y+1, this.z-1) !== BlockID.drevesina_vishni)
{
		if (World.getThreadTime() % 30 == 0){
	if(Math.random() < .05){
				World.destroyBlock(this.x, this.y, this.z, true);
}}}}}}}}}}}}}}}}}}}}}}}}}}
}
			}
		}
	}
});