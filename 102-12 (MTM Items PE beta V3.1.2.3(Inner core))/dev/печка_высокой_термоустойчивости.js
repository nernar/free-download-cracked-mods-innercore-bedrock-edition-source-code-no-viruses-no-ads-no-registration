createFurnitureStone("oker","Термоустойчивая_печь","iron_block",0, "термоустойчивая печь", ItemID.oker, BlockID.oker);
IDRegistry.genBlockID("reshetka");
Block.createBlock("reshetka", [{name: "сито из дубовых досок", texture: [["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0], ["решётка_для_печки_высокой_термоустойчивости", 0]], inCreative: false}]);
Item.registerUseFunction("oker", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.oker);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
});
var render = new ICRender.Model();
var render1 = new ICRender.Model();
var render2 = new ICRender.Model();
var render3 = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.oker, 0, render);
var model = BlockRenderer.createModel();
var model1 = BlockRenderer.createModel();
var model2 = BlockRenderer.createModel();
var model3 = BlockRenderer.createModel();

var modelArray=ModelAPI.newArray();
modelArray.addBoxByID("mainBlock1", 0, 0, 0, 1, 2/16, 1, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock2", 0, 13/16, 0, 1, 1, 1, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock3", 0, 2/16, 0, 1, 13/16, 3/16, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock4", 0, 2/16, 13/16, 1, 13/16, 1, BlockID.stalnoi_block);
modelArray.addBoxByID("mainBlock5", 14/16, 2/16, 3/16, 1, 13/16, 13/16, BlockID.stalnoi_block);

modelArray.addBoxByID("resheto", 0, 2/16, 3/16, 15/16, 13/16, 13/16, BlockID.reshetka);

for(var i = 3; i<14; i+=2){
	modelArray.addBoxByID("rod"+i, i/16, 5/16, 3/16, (i+1)/16, 5.3/16, 13/16, BlockID.stalnoi_block);
}

modelArray.compile(model);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model1);
modelArray.rotation("all", "y",180,{x:.5, y:.5, z:.5});
modelArray.compile(model2);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model3);
render.addEntry(model);
render1.addEntry(model1);
render2.addEntry(model2);
render3.addEntry(model3);
BlockRenderer.enableCoordMapping (BlockID.oker, -1, render);
var GUI_BAR_STANDART_SCALE=3.2;
var guiCooker = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Термоустойчивая печь(Heat-resistant furnace)"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_backgroun", scale: GUI_BAR_STANDART_SCALE},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: GUI_BAR_STANDART_SCALE}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: GUI_BAR_STANDART_SCALE},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: GUI_BAR_STANDART_SCALE},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});


TileEntity.registerPrototype(BlockID.oker, {
	init:function(){
		this.animationDown = new Animation.Item(this.x+.5, this.y+.18, this.z+.5);
		this.animationUp = new Animation.Item(this.x+.5, this.y+.36, this.z+.5);
		if(this.data.orientation==1){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render);
		}else if(this.data.orientation==2){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render2);
		}else if(this.data.orientation==3){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render3);
		}else if(this.data.orientation==4){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render1);
		}
	},
	defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},
	
	getGuiScreen: function(){
		return guiCooker;
	},
	
	
	addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(Recipes.getFuelBurnDuration(item.id, item.data) && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	getTransportSlots: function(){
		return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
	},
	
	tick:function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var resultSlot = this.container.getSlot("slotResult");
		if(World.getWorldTime()%2==0){
			if(sourceSlot.id!=0){
				this.animationDown.describeItem({
			id: sourceSlot.id,
			count: 1,
			data: sourceSlot.data,
			size: .27,
			rotation:[3.14/2, 0, 0]
		});
		this.animationDown.load();
			}else {
				this.animationDown.destroy();
			}
			if(resultSlot.id!=0){
				this.animationUp.describeItem({
			id: resultSlot.id,
			count: 1,
			data: resultSlot.data,
			size: .3,
			rotation:[3.14/2, 0, 0]
		});
		this.animationUp.load();
			}else{
				this.animationUp.destroy();
			}
		}
	
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 17){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 17);
	},
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
});