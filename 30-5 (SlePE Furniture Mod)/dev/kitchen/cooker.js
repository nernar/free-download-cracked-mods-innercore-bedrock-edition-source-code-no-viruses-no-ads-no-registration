createFurnitureStone("cooker","cooker","quartz_block",0, "Cooker", ItemID.cooker, BlockID.cooker);
Translation.addTranslation("Cooker", {ru: "Кухонная Плита"});
Recipes.addShaped({id: IDData.item.cooker, count: 1, data: 0}, ["iii", "iii", "ibi"], ["i",265,0, "b",42,0]);
Item.registerUseFunction("cooker", function(coords, item, block){
	World.setBlock(coords.relative.x,coords.relative.y,coords.relative.z, BlockID.cooker);
	World.addTileEntity(coords.relative.x,coords.relative.y,coords.relative.z);
	var look = Entity.getLookVector(Player.get());
	if(look.x>.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=1;
	}
	if(look.x<-.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=3;
	}
	if(look.z>.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=2;
	}
	if(look.z<-.75){
		World.getTileEntity(coords.relative.x,coords.relative.y,coords.relative.z).data.orientation=4;
	}
});
var render0 = new ICRender.Model();
var render1 = new ICRender.Model();
var render2 = new ICRender.Model();
var render3 = new ICRender.Model();
BlockRenderer.setStaticICRender (BlockID.cooker, 0, render);
var model = BlockRenderer.createModel();
var model1 = BlockRenderer.createModel();
var model2 = BlockRenderer.createModel();
var model3 = BlockRenderer.createModel();

var modelArray=ModelAPI.newArray();
modelArray.addBoxByID("mainBlock1", 0, 0, 0, 1, 2/16, 1, 155);
modelArray.addBoxByID("mainBlock2", 0, 12/16, 0, 1, 15/16, 1, 155);
modelArray.addBoxByID("mainBlock3", 0, 2/16, 0, 1, 12/16, 3/16, 155);
modelArray.addBoxByID("mainBlock4", 0, 2/16, 13/16, 1, 12/16, 1, 155);
modelArray.addBoxByID("mainBlock5", 14/16, 2/16, 3/16, 1, 12/16, 13/16, 155);

modelArray.addBoxByID("fire1", 3/16, 15/16, 3/16, 7/16, 1, 7/16, 173);
modelArray.addBoxByID("fire3", 9/16, 15/16, 9/16, 13/16, 1, 13/16, 173);
modelArray.addBoxByID("fire2", 3/16, 15/16, 9/16, 7/16, 1, 13/16, 173);
modelArray.addBoxByID("fire4", 9/16, 15/16, 3/16, 13/16, 1, 7/16, 173);
modelArray.addBoxByID("ledge1", 0, 15/16, 0, 1, 1, 1/16, 155);
modelArray.addBoxByID("ledge2", 0, 15/16, 15/16, 1, 1, 1, 155);
modelArray.addBoxByID("ledge3", 0, 15/16, 1/16, 1/16, 1, 15/16, 155);
modelArray.addBoxByID("ledge4", 15/16, 15/16, 1/16, 1, 1, 15/16, 155);

modelArray.addBoxByID("glass", -1/16, 3/16, 3/16, 0, 11/16, 13/16, 20);
modelArray.addBoxByID("ledgeGlass1", -1/16, 2/16, 2/16, 0, 3/16, 14/16, 155);
modelArray.addBoxByID("ledgeGlass2", -1/16, 11/16, 2/16, 0, 12/16, 14/16, 155);
modelArray.addBoxByID("ledgeGlass3", -1/16, 3/16, 2/16, 0, 11/16, 3/16, 155);
modelArray.addBoxByID("ledgeGlass4", -1/16, 3/16, 13/16, 0, 11/16, 14/16, 155);

modelArray.addBoxByID("1", -2/16, 11/16, 6/16, -1/16, 12/16, 10/16, 173);

modelArray.addBoxByID("2", -.3/16, 12.5/16, 1/16, 0, 14.5/16, 3/16, 44);
modelArray.addBoxByID("3", -.3/16, 12.5/16, 4/16, 0, 14.5/16, 6/16, 44);
modelArray.addBoxByID("4", -.3/16, 12.5/16, 7/16, 0, 14.5/16, 9/16, 44);
modelArray.addBoxByID("5", -.3/16, 12.5/16, 10/16, 0, 14.5/16, 12/16, 44);

modelArray.addBoxByID("6", -.5/16, 12.5/16, 14/16, 0, 13.5/16, 15/16, 35, 5);
modelArray.addBoxByID("7", -.5/16, 13.5/16, 14/16, 0, 14.5/16, 15/16, 35, 14);

for(var i = 3; i<14; i+=2){
	modelArray.addBoxByID("rod"+i, i/16, 5/16, 3/16, (i+1)/16, 5.3/16, 13/16, 44);
}

modelArray.compile(model);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model1);
modelArray.rotation("all", "y",180,{x:.5, y:.5, z:.5});
modelArray.compile(model2);
modelArray.rotation("all", "y",90,{x:.5, y:.5, z:.5});
modelArray.compile(model3);
render0.addEntry(model);
render1.addEntry(model1);
render2.addEntry(model2);
render3.addEntry(model3);
var FURNACE_FUEL_MAP = {
	5: 300,
	6: 100,
	17: 300,
	263: 1600,
	280: 100,
	268: 200,
	269: 200,
	270: 200,
	271: 200,
	85: 300,
	107: 300,
	134: 300,
	135: 300,
	158: 150,
	162: 300,
	163: 300,
	164: 300,
	184: 300,
	185: 300,
	186: 300,
	187: 300,
	53: 300,
	54: 300,
	58: 300
};
BlockRenderer.enableCoordMapping (BlockID.cooker, -1, render);
var GUI_BAR_STANDART_SCALE=3.2;
var guiCooker = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Cooker"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: GUI_BAR_STANDART_SCALE},
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
TileEntity.registerPrototype(BlockID.cooker, {
	init:function(){
		this.animationDown = new Animation.Item(this.x+.5, this.y+.18, this.z+.5);
		this.animationUp = new Animation.Item(this.x+.5, this.y+.38, this.z+.5);
		if(this.data.orientation==1){
			BlockRenderer.mapAtCoords (this.x, this.y, this.z, render0);
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
		burnMax: 0
	},
	
	getGuiScreen: function(){
		return guiCooker;
	},
	
	tick:function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var resultSlot = this.container.getSlot("slotResult");
		if(World.getThreadTime()%20==0){
			if(sourceSlot.id!=0){
				this.animationDown.describeItem({
			id: sourceSlot.id,
			count: 1,
			data: sourceSlot.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		if(!this.animationDown.isLoaded)this.animationDown.load();
			}else {
				if(this.animationDown.isLoaded)this.animationDown.destroy();
			}
			if(resultSlot.id!=0){
				this.animationUp.describeItem({
			id: resultSlot.id,
			count: 1,
			data: resultSlot.data,
			size: .5,
			rotation:[3.14/2, 0, 0]
		});
		if(!this.animationUp.isLoaded)this.animationUp.load();
			}else{
			if(this.animationUp.isLoaded)this.animationUp.destroy();
			}
		}
	
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result && this.data.burn > 0){
			
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 160){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		else if(result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 160);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = FURNACE_FUEL_MAP[fuelSlot.id];
			if(burn){
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
			if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
				var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
				fuelSlot.id = empty.id;
				fuelSlot.data = empty.data;
				return 20000;
			}
		}
		return 0;
	}
});
