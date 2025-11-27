IDRegistry.genBlockID("blet");//кароче этого кода в моде сейчас нет поэтому можешь не смотреть
Block.createBlock("blet", [{name: "Откуда это у тебя????", texture: [["зола", 0], ["зола", 0], ["зола", 0], ["зола", 0], ["зола", 0], ["зола", 0]], inCreative: false}]);
IDRegistry.genBlockID("vo");
Block.createBlock("vo", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_н_н", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_п", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtvp");
Block.createBlock("shgtvp", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_п2", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtvvpp");
Block.createBlock("shgtvvpp", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_в_п", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtvv");
Block.createBlock("shgtvv", [{name: "Откуда это у тебя????", texture: [["ш_галактический_торговец_н_н", 0], ["ш_галактический_торговец_в_в2", 0], ["ш_галактический_торговец_в_п", 0], ["ш_галактический_торговец_в_з", 0], ["ш_галактический_торговец_в_б2", 0], ["ш_галактический_торговец_в_б", 0]], inCreative: false}], BLOCK_TYPE_STAL);
IDRegistry.genBlockID("shgtn");
Block.createBlock("shgtn", [{name: "Этот блок тебе не нужен атвечаю", texture: [["ш_галактический_торговец_н_н", 0], ["ш_галактический_торговец_в_в", 0], ["ш_галактический_торговец_н_п", 0], ["ш_галактический_торговец_н_з", 0], ["ш_галактический_торговец_н_б2", 0], ["ш_галактический_торговец_н_б", 0]], inCreative: false}], BLOCK_TYPE_RYBU);
function createGTBrownBottomRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (5/16, 0, 6/16, 11/16, 5/16, 10/16,  idMaterial, dataMaterial);
model.addBox (4/16, 5/16, 5/16, 12/16, 1, 11/16,  idMaterial, dataMaterial);
model.addBox (0, 14/16, 4/16, 1, 15/16, 6/16,  idMaterial, dataMaterial);
model.addBox (0, 15/16, 3/16, 1, 1, 7/16,  idMaterial, dataMaterial);
render.addEntry(model);
}
createGTBrownBottomRender(BlockID.shgtn, BlockID.shgtn, 0);
function createGTBrownTopRender(id, idMaterial, dataMaterial){
var render = new ICRender.Model();
BlockRenderer.setStaticICRender (id, 0, render);
var model = BlockRenderer.createModel();
model.addBox (4/16, 0, 5/16, 12/16, 7/16, 11/16,  BlockID.vo, 0);
model.addBox (7/32, 7/16, 4/16, 25/32, 31/32, 25/32,  BlockID.shgtvvpp, 0);
model.addBox (7/32, 8/16, 7/32, 4/16, 15/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (12/16, 8/16, 7/32, 25/32, 15/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (7/32, 7/16, 7/32, 25/32, 8/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (7/32, 15/16, 7/32, 25/32, 31/32, 4/16,  BlockID.shgtvp, 0);
model.addBox (0, 0, 2/16, 1, 1/16, 8/16,  BlockID.shgtvv, 0);
model.addBox (0, 1/16, 2/16, 1, 2/16, 9/16,  BlockID.shgtvv, 0);
model.addBox (0, 2/16, 3/16, 1, 3/16, 10/16,  BlockID.shgtvv, 0);
model.addBox (0, 3/16, 4/16, 1, 4/16, 11/16,  BlockID.shgtvv, 0);
model.addBox (0, 4/16, 5/16, 1, 5/16, 11/16,  BlockID.shgtvv, 0);
model.addBox (0, 5/16, 6/16, 1, 6/16, 11/16,  BlockID.shgtvv, 0);
model.addBox (0, 6/16, 7/16, 1, 7/16, 10/16,  BlockID.shgtvv, 0);
model.addBox (5/16, 10/16, 7/32, 6/16, 11/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (5/16, 11/16, 7/32, 8/16, 12/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (5/16, 12/16, 7/32, 9/16, 13/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (5/16, 13/16, 7/32, 10/16, 14/16, 4/16,  BlockID.shgtvp, 0);
model.addBox (4/16, 14/16, 7/32, 10/16, 15/16, 4/16,  BlockID.shgtvp, 0);
render.addEntry(model);
}
createGTBrownTopRender(BlockID.blet, BlockID.vo, 0);
TileEntity.registerPrototype(BlockID.shgtn, {
	defaultValues: {
		size: 0,
	},
	
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},
	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .55, this.y + 1, this.z + .69);
		this.animation2 = new Animation.Item(this.x + .55, this.y + 1, this.z + .69);
		this.animation3 = new Animation.Item(this.x + .37, this.y + 0.7, this.z + .29);
		this.animation1.describeItem({
			id: ItemID.shgt,
			count: 1,
			data: 0,
			rotation: "x",
			size: 0.65
		});
		this.animation1.load();
		
		this.animation2.describeItem({
			id: ItemID.shgt,
			count: 1,
			data: 0,
			rotation: "z",
			size: 0.65
		});
		this.animation2.load();
		
		this.animation3.describeItem({
			id: ItemID.shgtt,
			count: 1,
			data: 0,
			rotation: "x",
			size: 0.6
		});
		this.animation3.load();
	},
	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
		if (this.animation3){
			this.animation3.destroy();
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
	}
});
var guiSouu = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Галактический торговец рудами()"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 510, y: 150, bitmap: "furnace_bar_backgroun", scale: 3.2},
	],
	
	elements: {
		"progressScale": {type: "scale", x: 510, y: 150, direction: 0, value: 0.5, bitmap: "просеивание", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 146},
	}
});