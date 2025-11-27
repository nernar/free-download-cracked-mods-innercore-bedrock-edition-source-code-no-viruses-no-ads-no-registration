importLib("ToolType", "*");


var BLOCKTYPE_PLANT = Block.createSpecialType({ 
	base: 59,
});

IDRegistry.genBlockID("purslane");
Block.createBlockWithRotation("purslane", [{name: "Purslane", texture: [["purslane", 0], ["purslane", 0], ["purslane", 0], ["purslane", 0], ["purslane", 0], ["purslane", 0]], inCreative: true},],BLOCKTYPE_PLANT);
			
Block.registerDropFunction("purslane", function(coords, blockID, data, diggingLevel, toolLevel){
var count = [1, 2, 3];
var gg = Math.floor((Math.random()*2)+1);
if(gg==1){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[ItemID.charreddirt, count[rnd], 0]];
}
else
if(gg==2){
var rnd = Math.floor(Math.random()*(count.length)); 			
return [[ItemID.purslaneitem, count[rnd], 0]];
}});

		Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.09){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z) && World.getBlock(coords.x, coords.y, coords.z).id === 2) {
        World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.purslane, 0);	
        }}});			
			
				Block.setBlockShape(BlockID.purslane, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});
				
BlockRenderer.addRenderCallback(BlockID.purslane, function(api, coords, block) {

var box = BlockID.purslane;

api.renderBoxId(coords.x, coords.y, coords.z, .497, 0.10, 0.10, .507, 0.90, .90, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0.10, .10, .497, .90, 0.90, .507, box, 0);
                 
});
BlockRenderer.enableCustomRender(BlockID.purslane);			



IDRegistry.genBlockID("apolbush");
Block.createBlock("apolbush", [
	{name: "Apple Bush", texture: [["apolbush", 0], ["apolbush", 0], ["apolbush", 0], ["apolbush", 0], ["apolbush", 0], ["apolbush", 0]], inCreative: true}]);
	IDRegistry.genBlockID("apolbushb");
Block.createBlock("apolbushb", [
	{name: "Apple Bush", texture: [["apolbush", 1], ["apolbush", 1], ["apolbush", 1], ["apolbush", 1], ["apolbush", 1], ["apolbush", 1]], inCreative: false}]);
	


Block.setDestroyTime(BlockID.apolbush, 0.4);
ToolAPI.registerBlockMaterial(BlockID.apolbush, "wood");
Block.setRandomTickCallback(BlockID.apolbush, function(x, y, z, id, data){
	if(data==0 && Math.random() < 0.1){
		World.setBlock(x, y, z, BlockID.apolbushb, 0);
	}});
	



Callback.addCallback("ItemUse", function (coords, item, block) { 
if(block.id==BlockID.apolbushb){
World.setBlock(coords.x, coords.y, coords.z, BlockID.apolbush, 0);
World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, 260, 2, 0);
}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 512);
    if(Math.random() < 0.09){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

    if (World.getBlock(coords.x, coords.y + 1, coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z) && World.getBlock(coords.x, coords.y, coords.z).id === 2) {
        World.setBlock(coords.x,coords.y+1,  coords.z, BlockID.apolbush, 0);	
        }}});			
        
        var BLOCK_TYPE_ambifor = Block.createSpecialType({
	base: 5,
	explosionres: 7,
	destroytime: 1,
});
IDRegistry.genBlockID("ambifor");
Block.createBlock("ambifor", [
	{name: "Ambient Forge", texture: [["ambientforge", 1],["ambientforge", 1],["ambientforge", 0],["ambientforge", 0],["ambientforge", 0]], inCreative: true}
],BLOCK_TYPE_ambifor);


var brauh = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Ambient Forge"
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


var ambiforRecipe=[];

addambiforRecipe(ItemID.cruciblepro2, -1, ItemID.heatedsteel, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro3, -1, ItemID.heatedbrooso, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro4, -1, ItemID.heatedlithium, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro5, -1, ItemID.heatedvrass, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro6, -1, ItemID.heatedcobalt, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro7, -1, ItemID.heatedtitaniopro, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro8, -1, ItemID.heatednordicg, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblepro9, -1, ItemID.heatedniobium, 1, 20,1,2); 
addambiforRecipe(ItemID.cruciblex2, -1, ItemID.heatedsteel, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex3, -1, ItemID.heatedbrooso, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex4, -1, ItemID.heatedlithium, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex5, -1, ItemID.heatedvrass, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex6,  -1, ItemID.heatedcobalt, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex7, -1, ItemID.heatedtitaniopro, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex8, -1, ItemID.heatednordicg, 1, 20,1,1); 
addambiforRecipe(ItemID.cruciblex9, -1, ItemID.heatedniobium, 1, 20,1,1); 


function addambiforRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	ambiforRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addambiforRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	ambiforRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.ambifor, {
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
				for(var i in ambiforRecipe){
					if(this.container.getSlot("DecSlot0").id==ambiforRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=ambiforRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==ambiforRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- ambiforRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==ambiforRecipe[i].inputData||ambiforRecipe[i].inputData==-1){
								this.data.recipe=ambiforRecipe[i];
							this.data.time=ambiforRecipe[i].time;
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
		return brauh;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addambiforRecipeQ:addambiforRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});




var BLOCK_TYPE_krucher = Block.createSpecialType({
	base: 5,
	explosionres: 7,
	destroytime: 1,
});
IDRegistry.genBlockID("krucher");
Block.createBlock("krucher", [
	{name: "Crusher", texture: [["krusher", 1],["krusher", 1],["krusher", 0],["krusher", 0],["krusher", 0]], inCreative: true}
],BLOCK_TYPE_krucher);


var brah = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Crusher"
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


var krucherRecipe=[];

addkrucherRecipe(ItemID.charcoalgrade1, -1, ItemID.charcoalpowder, 1, 20,1,3); 
addkrucherRecipe(ItemID.charcoalgrade2, -1, ItemID.charcoalpowder2, 1, 20,1,3); 



function addkrucherRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	krucherRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addkrucherRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	krucherRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.krucher, {
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
				for(var i in krucherRecipe){
					if(this.container.getSlot("DecSlot0").id==krucherRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=krucherRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==krucherRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- krucherRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==krucherRecipe[i].inputData||krucherRecipe[i].inputData==-1){
								this.data.recipe=krucherRecipe[i];
							this.data.time=krucherRecipe[i].time;
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
		return brah;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addkrucherRecipeQ:addkrucherRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});


var BLOCK_TYPE_staker = Block.createSpecialType({
	base: 5,
	explosionres: 7,
	destroytime: 1,
});
IDRegistry.genBlockID("staker");
Block.createBlock("staker", [
	{name: "Stacker", texture: [["staker", 1],["staker", 1],["staker", 0],["staker", 0],["staker", 0]], inCreative: true}
],BLOCK_TYPE_staker);


var bruh = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Stacker"
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


var stakerRecipe=[];

addstakerRecipe(ItemID.plank, -1, ItemID.stackplank, 1, 20,1,3); 



function addstakerRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	stakerRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addstakerRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	stakerRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.staker, {
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
				for(var i in stakerRecipe){
					if(this.container.getSlot("DecSlot0").id==stakerRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=stakerRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==stakerRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- stakerRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==stakerRecipe[i].inputData||stakerRecipe[i].inputData==-1){
								this.data.recipe=stakerRecipe[i];
							this.data.time=stakerRecipe[i].time;
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
		return bruh;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addstakerRecipeQ:addstakerRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});



var BLOCK_TYPE_SOOU = Block.createSpecialType({
	base: 5,
	explosionres: 7,
	destroytime: 1,
});
IDRegistry.genBlockID("soou");
Block.createBlock("soou", [
	{name: "Saw", texture: [["soou", 1],["soou", 1],["soou", 0],["soou", 0],["soou", 0]], inCreative: true}
],BLOCK_TYPE_SOOU);


var decGui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "Saw"
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


var soouRecipe=[];


addsoouRecipe(17, 0, 5, 0, 20,1,6); 
addsoouRecipe(17, 1, 5, 1, 20,1,6); 
addsoouRecipe(17, 2, 5, 2, 20,1,6); 
addsoouRecipe(17, 3, 5, 3, 20,1,6); 
addsoouRecipe(162, 0, 5, 4, 20,1,6); 
addsoouRecipe(162, 1, 5, 5, 20,1,6); 
addsoouRecipe(5, -1, ItemID.plank, 1, 20,1,3); 



function addsoouRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	soouRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addsoouRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	soouRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.soou, {
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
				for(var i in soouRecipe){
					if(this.container.getSlot("DecSlot0").id==soouRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=soouRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==soouRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- soouRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==soouRecipe[i].inputData||soouRecipe[i].inputData==-1){
								this.data.recipe=soouRecipe[i];
							this.data.time=soouRecipe[i].time;
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
	addsoouRecipeQ:addsoouRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});


ToolType.machete = {
		enchantType: Native.EnchantType.pickaxe,
		damage: 6,
		blockTypes: ["fibre","wood",]
}


IDRegistry.genItemID("worksaw");
IDRegistry.genItemID("plank");
IDRegistry.genItemID("stackplank");
IDRegistry.genItemID("plantfibre");
IDRegistry.genItemID("stgalager");
IDRegistry.genItemID("irongalager");
IDRegistry.genItemID("goldgalager");
IDRegistry.genItemID("diamgalager");
IDRegistry.genItemID("copperchunkhtp");
IDRegistry.genItemID("radiumchunk");
IDRegistry.genItemID("bariumchunk");
IDRegistry.genItemID("tiinchunk1");
IDRegistry.genItemID("heatedsteel");
IDRegistry.genItemID("coldsteel");
IDRegistry.genItemID("mudclay");
IDRegistry.genItemID("charcoalpowder");
IDRegistry.genItemID("charcoalpowder2");
IDRegistry.genItemID("alloypowderlel");
IDRegistry.genItemID("alloypowderrar");
IDRegistry.genItemID("alloypowderrer");
IDRegistry.genItemID("alloypowderlal");
IDRegistry.genItemID("alloypowderzip");
IDRegistry.genItemID("alloypowderwinzip");
IDRegistry.genItemID("alloypowderwinrar");
IDRegistry.genItemID("alloypowderidk");
IDRegistry.genItemID("woodbucket");
IDRegistry.genItemID("mudclaybucket");
IDRegistry.genItemID("fclaysword");
IDRegistry.genItemID("fclayshovel");
IDRegistry.genItemID("fclaypickaxe");
IDRegistry.genItemID("fclayhoe");
IDRegistry.genItemID("fclayaxe");
IDRegistry.genItemID("clayaxe");
IDRegistry.genItemID("claysword");
IDRegistry.genItemID("clayshovel");
IDRegistry.genItemID("clayhoe");
IDRegistry.genItemID("claypickaxe");
IDRegistry.genItemID("cruciblepro");
IDRegistry.genItemID("cruciblepro2");
IDRegistry.genItemID("cruciblepro3");
IDRegistry.genItemID("cruciblepro4");
IDRegistry.genItemID("cruciblepro5");
IDRegistry.genItemID("cruciblepro6");
IDRegistry.genItemID("cruciblepro7");
IDRegistry.genItemID("cruciblepro8");
IDRegistry.genItemID("cruciblepro9");
IDRegistry.genItemID("cruciblex");
IDRegistry.genItemID("cruciblex2");
IDRegistry.genItemID("cruciblex3");
IDRegistry.genItemID("cruciblex4");
IDRegistry.genItemID("cruciblex5");
IDRegistry.genItemID("cruciblex6");
IDRegistry.genItemID("cruciblex7");
IDRegistry.genItemID("cruciblex8");
IDRegistry.genItemID("cruciblex9");
IDRegistry.genItemID("cssword");
IDRegistry.genItemID("cspick");
IDRegistry.genItemID("csaxe");
IDRegistry.genItemID("csshovel");
IDRegistry.genItemID("cshoe");
IDRegistry.genItemID("charcoalgrade1");
IDRegistry.genItemID("charcoalgrade2");
IDRegistry.genItemID("broososword");
IDRegistry.genItemID("broosopick");
IDRegistry.genItemID("broosoaxe");
IDRegistry.genItemID("broososhovel");
IDRegistry.genItemID("broosohoe");
IDRegistry.genItemID("coldbrooso");
IDRegistry.genItemID("heatedbrooso");
IDRegistry.genItemID("flontsword");
IDRegistry.genItemID("flontpick");
IDRegistry.genItemID("flontaxe")
IDRegistry.genItemID("flontshovel");
IDRegistry.genItemID("flonthoe");
IDRegistry.genItemID("coldflont");
IDRegistry.genItemID("heatedflont");
IDRegistry.genItemID("lithiumsword");
IDRegistry.genItemID("lithiumpick");
IDRegistry.genItemID("lithiumaxe");
IDRegistry.genItemID("lithiumshovel");
IDRegistry.genItemID("lithiumhoe");
IDRegistry.genItemID("coldlithium");
IDRegistry.genItemID("heatedlithium");
IDRegistry.genItemID("coldvrass");
IDRegistry.genItemID("heatedvrass");
IDRegistry.genItemID("coldcobalt");
IDRegistry.genItemID("heatedcobalt");
IDRegistry.genItemID("vrasssword");
IDRegistry.genItemID("vrasspick");
IDRegistry.genItemID("vrassaxe");
IDRegistry.genItemID("vrassshovel");
IDRegistry.genItemID("vrasshoe");
IDRegistry.genItemID("cobaltsword");
IDRegistry.genItemID("cobaltpick");
IDRegistry.genItemID("cobaltaxe");
IDRegistry.genItemID("cobaltshovel");
IDRegistry.genItemID("cobalthoe");
IDRegistry.genItemID("coldtitaniopro");
IDRegistry.genItemID("heatedtitaniopro");
IDRegistry.genItemID("titanioprosword");
IDRegistry.genItemID("titaniopropick");
IDRegistry.genItemID("titanioproaxe");
IDRegistry.genItemID("titanioproshovel");
IDRegistry.genItemID("titanioprohoe");
IDRegistry.genItemID("heatednordicg");
IDRegistry.genItemID("nordicgsword");
IDRegistry.genItemID("nordicgpick");
IDRegistry.genItemID("nordicgaxe");
IDRegistry.genItemID("nordicgshovel");
IDRegistry.genItemID("nordicghoe");
IDRegistry.genItemID("coldnordicgold");
IDRegistry.genItemID("heatedniobium");
IDRegistry.genItemID("niobiumsword");
IDRegistry.genItemID("niobiumpick");
IDRegistry.genItemID("niobiumaxe");
IDRegistry.genItemID("niobiumshovel");
IDRegistry.genItemID("niobiumhoe");
IDRegistry.genItemID("coldniobium");
IDRegistry.genItemID("machete1");
IDRegistry.genItemID("machete2");
IDRegistry.genItemID("machete3");
IDRegistry.genItemID("machete4");
IDRegistry.genItemID("charreddirt");
IDRegistry.genItemID("blueprint1");
IDRegistry.genItemID("blueprint2");
IDRegistry.genItemID("purslanesnack");
IDRegistry.genItemID("knifeboi");
IDRegistry.genItemID("purslaneitem");
IDRegistry.genItemID("saupro");
IDRegistry.genItemID("plaate1");
IDRegistry.genItemID("irongear");
IDRegistry.genItemID("lacquerstick");
IDRegistry.genItemID("blueprint3");
IDRegistry.genItemID("blueprint4");




Item.createItem("purslaneitem", "Purslane", {name: "purslaneplant", meta: 0}, {stack: 64});
Item.createFoodItem("purslanesnack", "Purslane Snack", {name: "purslanesnack", meta: 0}, {food: 5});
Item.createItem("plank", "Plank", {name: "plank", meta: 0}, {stack: 64});
Item.createItem("stackplank", "Stacked Planks", {name: "plankstack", meta: 0}, {stack: 32});
Item.createItem("plantfibre", "Plant Fiber", {name: "fibre", meta: 0}, {stack: 64});
Item.createItem("mudclay", "Clay", {name: "mudclay", meta: 0}, {stack: 64});
Item.createItem("lacquerstick", "Lacquer Stick", {name: "lacquerstick", meta: 0}, {stack: 64});
Item.createItem("charreddirt", "Charred Dirt \n  Actually Useless... ", {name: "chardirt", meta: 0}, {stack: 64});
Item.createItem("charcoalpowder", "Charcoal Powder \n Poor Grade", {name: "charcoalpowder", meta: 0}, {stack: 64});
Item.createItem("charcoalpowder2", "Charcoal Powder \n Good Grade", {name: "charcoalpowder2", meta: 0}, {stack: 64});
Item.createItem("alloypowderlel", "Alloy Powder", {name: "alloypowder12", meta: 0}, {stack: 64});
Item.createItem("alloypowderlal", "Alloy Powder", {name: "alloypowder13", meta: 0}, {stack: 64});
Item.createItem("alloypowderrar", "Alloy Powder", {name: "alloypowder14", meta: 0}, {stack: 64});
Item.createItem("alloypowderrer", "Alloy Powder", {name: "alloypowder17", meta: 0}, {stack: 64});
Item.createItem("alloypowderzip", "Alloy Powder", {name: "alloypowder15", meta: 0}, {stack: 64});
Item.createItem("alloypowderwinrar", "Alloy Powder", {name: "alloypowder16", meta: 0}, {stack: 64});
Item.createItem("alloypowderwinzip", "Alloy Powder", {name: "alloypowder18", meta: 0}, {stack: 64});
Item.createItem("alloypowderidk", "Alloy Powder", {name: "alloypowder19", meta: 0}, {stack: 64});
Item.createItem("stgalager", "Stone Ghalager", {name: "stgala", meta: 0}, {stack: 40});
Item.createItem("irongalager", "Iron Ghalager", {name: "irongala", meta: 0}, {stack: 40});
Item.createItem("goldgalager", "Gold Ghalager", {name: "goldgala", meta: 0}, {stack: 40});
Item.createItem("diamgalager", "Diamond Ghalager", {name: "diagala", meta: 0}, {stack: 40});
Item.createItem("worksaw", "Work Blade", {name: "workb", meta: 0}, {stack: 40});
Item.createItem("woodbucket", "Wooden Bucket", {name: "woodbuck", meta: 0}, {stack: 1});
Item.createItem("mudclaybucket", "Clay Bucket", {name: "mudclaybucket", meta: 0}, {stack: 1});
Item.createItem("blueprint1", "Saw Blueprint", {name: "blueprint1", meta: 0}, {stack: 64});
Item.createItem("blueprint2", "Stacker Blueprint", {name: "blueprint2", meta: 0}, {stack: 64});
Item.createItem("blueprint3", "Crusher Blueprint", {name: "blueprint3", meta: 0}, {stack: 64});
Item.createItem("blueprint4", "Ambient Forge Blueprint", {name: "blueprint4", meta: 0}, {stack: 64});
Item.createItem("plaate1", "Plate Iron", {name: "plateiroon", meta: 0}, {stack: 64});
Item.createItem("saupro", "Saw", {name: "sieerra", meta: 0}, {stack: 64});
Item.createItem("irongear", "Iron Gear", {name: "geariron", meta: 0}, {stack: 64});
Item.createItem("cruciblepro", "Crucible", {name: "crucible1", meta: 0}, {stack: 1});
Item.createItem("cruciblepro2", "Steel Crucible", {name: "crucible2", meta: 0}, {stack: 1});
Item.createItem("cruciblepro3", "Bronze Crucible", {name: "crucible3", meta: 0}, {stack: 1});
Item.createItem("cruciblepro4", "Lithium Crucible", {name: "crucible4", meta: 0}, {stack: 1});
Item.createItem("cruciblepro5", "Brass Crucible", {name: "crucible5", meta: 0}, {stack: 1});
Item.createItem("cruciblepro6", "Cobalt Crucible", {name: "crucible6", meta: 0}, {stack: 1});
Item.createItem("cruciblepro7", "Titanium Crucible", {name: "crucible7", meta: 0}, {stack: 1});
Item.createItem("cruciblepro8", "Nordic Gold Crucible", {name: "crucible8", meta: 0}, {stack: 1});
Item.createItem("cruciblepro9", "Niobium Crucible", {name: "crucible9", meta: 0}, {stack: 1});
Item.createItem("cruciblex", "Graphite Crucible", {name: "cruciblex1", meta: 0}, {stack: 1});
Item.createItem("cruciblex2", "Steel Graphite Crucible", {name: "cruciblex2", meta: 0}, {stack: 1});
Item.createItem("cruciblex3", "Bronze Graphite Crucible", {name: "cruciblex3", meta: 0}, {stack: 1});
Item.createItem("cruciblex4", "Lithium Graphite Crucible", {name: "cruciblex4", meta: 0}, {stack: 1});
Item.createItem("cruciblex5", "Brass Graphite Crucible", {name: "cruciblex5", meta: 0}, {stack: 1});
Item.createItem("cruciblex6", "Cobalt Graphite Crucible", {name: "cruciblex6", meta: 0}, {stack: 1});
Item.createItem("cruciblex7", "Titanium Graphite Crucible", {name: "cruciblex7", meta: 0}, {stack: 1});
Item.createItem("cruciblex8", "Nordic Gold Graphite Crucible", {name: "cruciblex8", meta: 0}, {stack: 1});
Item.createItem("cruciblex9", "Niobium Graphite Crucible", {name: "cruciblex9", meta: 0}, {stack: 1});
Item.createItem("charcoalgrade1", "Charcoal \n Poor Grade", {name: "charcoalpro1", meta: 0}, {stack: 20});
Item.createItem("charcoalgrade2", "Charcoal  \n Good Grade", {name: "charcoalpro2", meta: 0}, {stack: 20});
Item.createItem("coldbrooso", "Cold Bronze", {name: "coldbrooso", meta: 0}, {stack: 64});
Item.createItem("heatedbrooso", "Melted Bronze", {name: "heatedbrooso", meta: 0}, {stack: 64});
Item.createItem("coldlithium", "Cold Lithium", {name: "coldlithium", meta: 0}, {stack: 64});
Item.createItem("heatedlithium", "Melted Lithium", {name: "heatedlithium", meta: 0}, {stack: 64});
Item.createItem("coldsteel", "Cold Steel", {name: "coldsteel", meta: 0}, {stack: 64});
Item.createItem("heatedsteel", "Melted Steel", {name: "heatedsteel", meta: 0}, {stack: 64});
Item.createItem("coldvrass", "Cold Brass", {name: "coldvrass", meta: 0}, {stack: 64});
Item.createItem("heatedvrass", "Melted Brass", {name: "heatedvrass", meta: 0}, {stack: 64});
Item.createItem("coldcobalt", "Cold Cobalt", {name: "coldcobalt", meta: 0}, {stack: 64});
Item.createItem("heatedcobalt", "Melted Cobalt", {name: "heatedcobalt", meta: 0}, {stack: 64});
Item.createItem("coldtitaniopro", "Cold Titanium", {name: "coldtitaniopro", meta: 0}, {stack: 64});
Item.createItem("heatedtitaniopro", "Melted Titanium", {name: "heatedtitaniopro", meta: 0}, {stack: 64});
Item.createItem("coldnordicgold", "Cold Nordic Gold", {name: "coldnordicgold", meta: 0}, {stack: 64});
Item.createItem("heatednordicg", "Melted Nordic Gold", {name: "heatednordicgold", meta: 0}, {stack: 64});
Item.createItem("coldniobium", "Cold Niobium", {name: "coldniobium", meta: 0}, {stack: 64});
Item.createItem("heatedniobium", "Melted Niobium", {name: "heatedniobium", meta: 0}, {stack: 64});
Item.createItem("coldflont", "Cold Flint", {name: "coldflint", meta: 0}, {stack: 64});
Item.createItem("heatedflont", "Melted Flint", {name: "meltedflint", meta: 0}, {stack: 64});
Item.createItem("tiinchunk1", "Tin Chunk", {name: "stchunk1", meta: 0}, {stack: 64});
Item.createItem("copperchunkhtp", "Copper Chunk", {name: "stchunk2", meta: 0}, {stack: 64});
Item.createItem("radiumchunk", "Nickel Chunk", {name: "stchunk3", meta: 0}, {stack: 64});
Item.createItem("bariumchunk", "Barium Chunk", {name: "stchunk4", meta: 0}, {stack: 64});




Item.createItem("clayaxe", "Clay Axe \n Unfired", {name: "clayaxe", meta: 0}, {stack: 1});
Item.createItem("claysword", "Clay Sword \n Unfired", {name: "claysword", meta: 0}, {stack: 1});
Item.createItem("claypickaxe", "Clay Pickaxe \n Unfired", {name: "claypickaxe", meta: 0}, {stack: 1});
Item.createItem("clayhoe", "Clay Hoe \n Unfired", {name: "clayhoe", meta: 0}, {stack: 1});
Item.createItem("clayshovel", "Clay Shovel \n Unfired", {name: "clayshovel", meta: 0}, {stack: 1});

Item.createItem("fclayaxe", "Clay Axe \n Fired", {name: "firedclayaxe", meta: 0}, {stack: 1});
Item.createItem("fclaysword", "Clay Sword \n Fired", {name: "firedclaysword", meta: 0}, {stack: 1});
Item.createItem("fclaypickaxe", "Clay Pickaxe \n Fired", {name: "firedclaypickaxe", meta: 0}, {stack: 1});
Item.createItem("fclayhoe", "Clay Hoe \n Fired", {name: "firedclayhoe", meta: 0}, {stack: 1});
Item.createItem("fclayshovel", "Clay Shovel \n Fired", {name: "firedclayshovel", meta: 0}, {stack: 1});


Item.createItem("cssword", "Steel Sword", {name: "coldsteelsword", meta: 0}, {stack: 1});
Item.createItem("csshovel", "Steel Shovel", {name: "coldsteelshovel", meta: 0}, {stack: 1});
Item.createItem("cspick", "Steel Pickaxe", {name: "coldsteelpickaxe", meta: 0}, {stack: 1});
Item.createItem("csaxe", "Steel Axe", {name: "coldsteelaxe", meta: 0}, {stack: 1});
Item.createItem("cshoe", "Steel Hoe", {name: "coldsteelhoe", meta: 0}, {stack: 1});

Item.createItem("broososword", "Bronze  Sword", {name: "coldbroososword", meta: 0}, {stack: 1});
Item.createItem("broososhovel", "Bronze  Shovel", {name: "coldbroososhovel", meta: 0}, {stack: 1});
Item.createItem("broosopick", "Bronze  Pickaxe", {name: "coldbroosopickaxe", meta: 0}, {stack: 1});
Item.createItem("broosoaxe", "Bronze  Axe", {name: "coldbroosoaxe", meta: 0}, {stack: 1});
Item.createItem("broosohoe", "Bronze  Hoe", {name: "coldbroosohoe", meta: 0}, {stack: 1});


Item.createItem("flontsword", "Flint Sword", {name: "flintsword", meta: 0}, {stack: 1});
Item.createItem("flontshovel", "Flint Shovel", {name: "flintshovel", meta: 0}, {stack: 1});
Item.createItem("flontpick", "Flint Pickaxe", {name: "flintpickaxe", meta: 0}, {stack: 1});
Item.createItem("flontaxe", "Flint Axe", {name: "flintaxe", meta: 0}, {stack: 1});
Item.createItem("flonthoe", "Flint Hoe", {name: "flinthoe", meta: 0}, {stack: 1});


Item.createItem("lithiumsword", "Lithium Sword", {name: "coldlithiumsword", meta: 0}, {stack: 1});
Item.createItem("lithiumshovel", "Lithium  Shovel", {name: "coldlithiumshovel", meta: 0}, {stack: 1});
Item.createItem("lithiumpick", "Lithium Pickaxe", {name: "coldlithiumpickaxe", meta: 0}, {stack: 1});
Item.createItem("lithiumaxe", "Lithium Axe", {name: "coldlithiumaxe", meta: 0}, {stack: 1});
Item.createItem("lithiumhoe", "Lithium Hoe", {name: "coldlithiumhoe", meta: 0}, {stack: 1});



Item.createItem("vrasssword", "Brass Sword", {name: "vrasssword", meta: 0}, {stack: 1});
Item.createItem("vrassshovel", "Brass Shovel", {name: "vrassshovel", meta: 0}, {stack: 1});
Item.createItem("vrasspick", "Brass  Pickaxe", {name: "vrasspickaxe", meta: 0}, {stack: 1});
Item.createItem("vrassaxe", "Brass Axe", {name: "vrassaxe", meta: 0}, {stack: 1});
Item.createItem("vrasshoe", "Brass Hoe", {name: "vrasshoe", meta: 0}, {stack: 1});



Item.createItem("cobaltsword", "Cobalt Sword", {name: "cobaltsword", meta: 0}, {stack: 1});
Item.createItem("cobaltshovel", "Cobalt Shovel", {name: "cobaltshovel", meta: 0}, {stack: 1});
Item.createItem("cobaltpick", "Cobalt Pickaxe", {name: "cobaltpickaxe", meta: 0}, {stack: 1});
Item.createItem("cobaltaxe", "Cobalt Axe", {name: "cobaltaxe", meta: 0}, {stack: 1});
Item.createItem("cobalthoe", "Cobalt Hoe", {name: "cobalthoe", meta: 0}, {stack: 1});



Item.createItem("titanioprosword", "Titanium Sword", {name: "coldtitanioprosword", meta: 0}, {stack: 1});
Item.createItem("titanioproshovel", "Titanium Shovel", {name: "coldtitanioproshovel", meta: 0}, {stack: 1});
Item.createItem("titaniopropick", "Titanium Pickaxe", {name: "coldtitaniopropickaxe", meta: 0}, {stack: 1});
Item.createItem("titanioproaxe", "Titanium Axe", {name: "coldtitanioproaxe", meta: 0}, {stack: 1});
Item.createItem("titanioprohoe", "Titanium Hoe", {name: "coldtitanioprohoe", meta: 0}, {stack: 1});


Item.createItem("nordicgsword", "Nordic Gold Sword", {name: "nordicgsword", meta: 0}, {stack: 1});
Item.createItem("nordicgshovel", "Nordic Gold Shovel", {name: "nordicgshovel", meta: 0}, {stack: 1});
Item.createItem("nordicgpick", "Nordic Gold Pickaxe", {name: "nordicgpickaxe", meta: 0}, {stack: 1});
Item.createItem("nordicgaxe", "Nordic Gold Axe", {name: "nordicgaxe", meta: 0}, {stack: 1});
Item.createItem("nordicghoe", "Nordic Gold Hoe", {name: "nordicghoe", meta: 0}, {stack: 1});


Item.createItem("niobiumsword", "Niobium Sword", {name: "niobiumsword", meta: 0}, {stack: 1});
Item.createItem("niobiumshovel", "Niobium Shovel", {name: "niobiumshovel", meta: 0}, {stack: 1});
Item.createItem("niobiumpick", "Niobium Pickaxe", {name: "niobiumpickaxe", meta: 0}, {stack: 1});
Item.createItem("niobiumaxe", "Niobium Axe", {name: "niobiumaxe", meta: 0}, {stack: 1});
Item.createItem("niobiumhoe", "Niobium Hoe", {name: "niobiumhoe", meta: 0}, {stack: 1});


Item.createItem("machete1", "Iron Machete", {name: "machiri", meta: 0}, {stack: 1});
Item.createItem("machete2", "Flint Machete", {name: "machiri2", meta: 0}, {stack: 1});
Item.createItem("machete3", "Brass Machete", {name: "machiri3", meta: 0}, {stack: 1});
Item.createItem("machete4", "Steel Machete", {name: "machiri4", meta: 0}, {stack: 1});
Item.createItem("knifeboi", "Knife", {name: "knifecraf", meta: 0}, {stack: 64});

IDRegistry.genItemID("infinishield");
Item.createArmorItem("infinishield", "Shield \n Very Durable.", {name: "ishield"}, {type: "chestplate", armor: 10, durability: 10000, texture: "chicken/inshield"});

ToolAPI.addToolMaterial("firedclay", {durability: 50, level: 2, efficiency: 5, damage: 6, enchantability: 30});
ToolAPI.addToolMaterial("coldsteel", {durability: 300, level: 10, efficiency: 6, damage: 7, enchantability: 30});
ToolAPI.addToolMaterial("coldbrooso", {durability: 200, level: 5, efficiency: 5, damage: 6, enchantability: 30});
ToolAPI.addToolMaterial("flintxdpro", {durability: 50, level: 2, efficiency: 5, damage: 6, enchantability: 30});
ToolAPI.addToolMaterial("lithiumxd", {durability: 500, level: 20, efficiency: 7, damage: 10, enchantability: 100});
ToolAPI.addToolMaterial("cobaltpro", {durability: 700, level: 20, efficiency: 12, damage: 12, enchantability: 100});
ToolAPI.addToolMaterial("broosopro", {durability: 500, level: 20, efficiency: 7, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("titaniopropro", {durability: 800, level: 20, efficiency: 14, damage: 11, enchantability: 100});
ToolAPI.addToolMaterial("nordicgoldpro", {durability: 900, level: 20, efficiency: 16, damage: 10, enchantability: 100});
ToolAPI.addToolMaterial("niobiumpro", {durability: 1000, level: 20, efficiency: 20, damage: 13, enchantability: 100});
ToolAPI.addToolMaterial("machetepro", {durability: 100, level: 1, efficiency: 8, damage: 6, enchantability: 100});
ToolAPI.addToolMaterial("machetepro2", {durability: 50, level: 1, efficiency: 8, damage: 5, enchantability: 100});
ToolAPI.addToolMaterial("machetepro3", {durability: 70, level: 20, efficiency: 8, damage: 7, enchantability: 100});
ToolAPI.addToolMaterial("machetepro4", {durability: 200, level: 20, efficiency: 8, damage: 8, enchantability: 100});
ToolAPI.addToolMaterial("kenaif", {durability: 20, level: 20, efficiency: 8, damage: 8, enchantability: 100});


ToolAPI.setTool(ItemID.fclaysword, "firedclay", ToolType.sword);
ToolAPI.setTool(ItemID.fclayshovel, "firedclay", ToolType.shovel);
ToolAPI.setTool(ItemID.fclayhoe, "firedclay", ToolType.hoe);
ToolAPI.setTool(ItemID.fclayaxe, "firedclay", ToolType.axe);
ToolAPI.setTool(ItemID.fclaypickaxe, "firedclay", ToolType.pickaxe);

ToolAPI.setTool(ItemID.cssword, "coldsteel", ToolType.sword);
ToolAPI.setTool(ItemID.cspick, "coldsteel", ToolType.pickaxe);
ToolAPI.setTool(ItemID.csaxe, "coldsteel", ToolType.axe);
ToolAPI.setTool(ItemID.csshovel, "coldsteel", ToolType.shovel);
ToolAPI.setTool(ItemID.cshoe, "coldsteel", ToolType.hoe);

ToolAPI.setTool(ItemID.broososword, "coldbrooso", ToolType.sword);
ToolAPI.setTool(ItemID.broosopick, "coldbrooso", ToolType.pickaxe);
ToolAPI.setTool(ItemID.broosoaxe, "coldbrooso", ToolType.axe);
ToolAPI.setTool(ItemID.broososhovel, "coldbrooso", ToolType.shovel);
ToolAPI.setTool(ItemID.broosohoe, "coldbrooso", ToolType.hoe);

ToolAPI.setTool(ItemID.flontsword, "flintxdpro", ToolType.sword);
ToolAPI.setTool(ItemID.flontpick, "flintxdpro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.flontaxe, "flintxdpro", ToolType.axe);
ToolAPI.setTool(ItemID.flontshovel, "flintxdpro", ToolType.shovel);
ToolAPI.setTool(ItemID.flonthoe, "flintxdpro", ToolType.hoe);


ToolAPI.setTool(ItemID.lithiumsword, "lithiumxd", ToolType.sword);
ToolAPI.setTool(ItemID.lithiumpick, "lithiumxd", ToolType.pickaxe);
ToolAPI.setTool(ItemID.lithiumaxe, "lithiumxd", ToolType.axe);
ToolAPI.setTool(ItemID.lithiumshovel, "lithiumxd", ToolType.shovel);
ToolAPI.setTool(ItemID.lithiumhoe, "lithiumxd", ToolType.hoe);


ToolAPI.setTool(ItemID.vrasssword, "broosopro", ToolType.sword);
ToolAPI.setTool(ItemID.vrasspick, "broosopro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.vrassaxe, "broosopro", ToolType.axe);
ToolAPI.setTool(ItemID.vrassshovel, "broosopro", ToolType.shovel);
ToolAPI.setTool(ItemID.vrasshoe, "broosopro", ToolType.hoe);



ToolAPI.setTool(ItemID.cobaltsword, "cobaltpro", ToolType.sword);
ToolAPI.setTool(ItemID.cobaltpick, "cobaltpro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.cobaltaxe, "cobaltpro", ToolType.axe);
ToolAPI.setTool(ItemID.cobaltshovel, "cobaltpro", ToolType.shovel);
ToolAPI.setTool(ItemID.cobalthoe, "cobaltpro", ToolType.hoe);


ToolAPI.setTool(ItemID.titanioprosword, "titaniopropro", ToolType.sword);
ToolAPI.setTool(ItemID.titaniopropick, "titaniopropro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.titanioproaxe, "titaniopropro", ToolType.axe);
ToolAPI.setTool(ItemID.titanioproshovel, "titaniopropro", ToolType.shovel);
ToolAPI.setTool(ItemID.titanioprohoe, "titaniopropro", ToolType.hoe);


ToolAPI.setTool(ItemID.nordicgsword, "nordicgoldpro", ToolType.sword);
ToolAPI.setTool(ItemID.nordicgpick, "nordicgoldpro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.nordicgaxe, "nordicgoldpro", ToolType.axe);
ToolAPI.setTool(ItemID.nordicgshovel, "nordicgoldpro", ToolType.shovel);
ToolAPI.setTool(ItemID.nordicghoe, "nordicgoldpro", ToolType.hoe);

ToolAPI.setTool(ItemID.niobiumsword, "niobiumpro", ToolType.sword);
ToolAPI.setTool(ItemID.niobiumpick, "niobiumpro", ToolType.pickaxe);
ToolAPI.setTool(ItemID.niobiumaxe, "niobiumpro", ToolType.axe);
ToolAPI.setTool(ItemID.niobiumshovel, "niobiumpro", ToolType.shovel);
ToolAPI.setTool(ItemID.niobiumhoe, "niobiumpro", ToolType.hoe);

ToolAPI.setTool(ItemID.machete1, "machetepro", ToolType.machete);
ToolAPI.setTool(ItemID.machete2, "machetepro2", ToolType.machete);
ToolAPI.setTool(ItemID.machete3, "machetepro3", ToolType.machete);
ToolAPI.setTool(ItemID.machete4, "machetepro4", ToolType.machete);

ToolAPI.setTool(ItemID.knifeboi, "kenaif", ToolType.machete);

Recipes.deleteRecipe({id: 263, count: 1, data: 1});


Recipes.addShaped({id: ItemID.infinishield, count: 1, data: 0}, [
"xox",
"aoa",
"xox"
], ['x', 5, 0, 'o', ItemID.coldniobium, 0, "a", 265, 0]);

Recipes.addShaped({id: ItemID.mudclay, count: 10, data: 0}, 
["a a", 
 "  a",
 "   "],
["a", ItemID.mudclaybucket, 0]);

Recipes.addShaped({id: ItemID.woodbucket, count: 1, data: 0}, 
["a a", 
 "a a",
 " a "],
["a", 5, 0]);


Recipes.addShaped({id: ItemID.mudclaybucket, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aba"],
["a", 3, 0, "b", ItemID.woodbucket, 0]);


Recipes.addShaped({id: 82, count: 1, data: 0}, [
     "ooo",
     "oxo",
     "ooo"
], ['x', ItemID.mudclay, 0]);

Recipes.addShaped({id: ItemID.clayaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", 82, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.claysword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", 82, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.clayshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", 82, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.clayhoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", 82, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.claypickaxe, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", 82, 0, "b", 280, 0]);

Recipes.addShaped({id: ItemID.stgalager, count: 30, data: 0}, 
["aaa", 
 "bbb",
 "aba"],
["a", 4, 0, "b", 280, 0]);

Recipes.addShaped({id: ItemID.irongalager, count: 20, data: 0}, 
["aaa", 
 "aba",
 "bab"],
["a", 265, 0, "b", 280, 0]);

Recipes.addShaped({id: ItemID.goldgalager, count: 20, data: 0}, 
["aaa", 
 "bbb",
 "aba"],
["a", 266, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.diamgalager, count: 20, data: 0}, 
["aaa", 
 "aba",
 "bab"],
["a", 264, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.charcoalpowder, count: 9, data: 0}, 
["bab", 
 "bbb",
 "bbb"],
["a", ItemID.stgalager, 0, "b", ItemID.charcoalgrade1, 0]);

Recipes.addShaped({id: ItemID.charcoalpowder2, count: 9, data: 0}, 
["bab", 
 "bbb",
 "bbb"],
["a", ItemID.stgalager, 0, "b", ItemID.charcoalgrade2, 0]);


Recipes.addShaped({id: ItemID.alloypowderlel, count: 2, data: 0}, 
["aba", 
 "aca",
 "aba"],
["a", ItemID.charcoalpowder, 0, "b", 15, 0, "c", ItemID.stgalager, 0]);

Recipes.addShaped({id: ItemID.alloypowderrar, count: 2, data: 0}, 
["aca", 
 "cbc",
 "aca"],
["a", ItemID.charcoalpowder, 0, "b", ItemID.irongalager, 0, "c", ItemID.tiinchunk1, 0]);

Recipes.addShaped({id: ItemID.alloypowderlal, count: 2, data: 0}, 
["aba", 
 "aca",
 "ada"],
["a", ItemID.charcoalpowder, 0, "b", ItemID.tiinchunk1, 0, "c", ItemID.stgalager, 0, "d", ItemID.copperchunkhtp, 0]);

Recipes.addShaped({id: ItemID.alloypowderzip, count: 2, data: 0}, 
["aca", 
 "cbc",
 "aca"],
["a", ItemID.charcoalpowder, 0, "b", ItemID.irongalager, 0, "c", ItemID.nickelchunk, 0]);

Recipes.addShaped({id: ItemID.alloypowderwinrar, count: 2, data: 0}, 
["aba", 
 "aca",
 "ada"],
["a", ItemID.charcoalpowder, 0, "b", ItemID.bariumchunk, 0, "c", ItemID.diamgalager, 0, "d", ItemID.radiumchunk, 0]);

Recipes.addShaped({id: ItemID.alloypowderrer, count: 2, data: 0}, 
["aba", 
 "dcd",
 "aba"],
["a", ItemID.charcoalpowder2, 0, "b", ItemID.bariumchunk, 0, "c", ItemID.diamgalager, 0, "d", ItemID.radiumchunk, 0]);

Recipes.addShaped({id: ItemID.alloypowderwinzip, count: 2, data: 0}, 
["aba", 
 "aca",
 "aea"],
["a", ItemID.charcoalpowder, 0, "b", ItemID.bariumchunk, 0, "c", ItemID.diamgalager, 0, "d", ItemID.radiumchunk, 0, "e", 265, 0]);


Recipes.addShaped({id: ItemID.alloypowderidk, count: 2, data: 0}, 
["aba", 
 "aca",
 "aea"],
["a", ItemID.charcoalpowder2, 0, "b", ItemID.bariumchunk, 0, "c", ItemID.diamgalager, 0, "d", ItemID.tiinchunk1, 0, "e", 265, 0]);



Recipes.addShaped({id: ItemID.cruciblepro, count: 1, data: 0}, 
["a a", 
 " a ",
 "bbb"],
["a", 4, 0, "b", ItemID.mudclay, 0]);

Recipes.addShaped({id: ItemID.cruciblepro2, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderlel, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro4, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderrar, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro3, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder, 0, "c", ItemID.alloypowderlal, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro5, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder, 0, "c", ItemID.alloypowderzip, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro6, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderwinrar, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro7, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderrer, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro8, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderwinzip, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblepro9, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblepro, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderidk, 0, "d", ItemID.charcoalpowder, 0]);


Recipes.addShaped({id: ItemID.cruciblex, count: 3, data: 0}, 
["a a", 
 " a ",
 "bbb"],
["a", 4, 0, "b", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex2, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderlel, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex4, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderrar, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex3, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder, 0, "c", ItemID.alloypowderlal, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex5, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder, 0, "c", ItemID.alloypowderzip, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex6, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderwinrar, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex7, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderrer, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex8, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderwinzip, 0, "d", ItemID.charcoalpowder, 0]);

Recipes.addShaped({id: ItemID.cruciblex9, count: 1, data: 0}, 
["bab", 
 "xdx",
 "bcb"],
["a", ItemID.cruciblex, 0, "b", ItemID.charcoalpowder2, 0, "c", ItemID.alloypowderidk, 0, "d", ItemID.charcoalpowder, 0]);



Recipes.addShaped({id: ItemID.coldsteel, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedsteel, 0]);

Recipes.addShaped({id: ItemID.csaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldsteel, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.machete1, count: 1, data: 0}, 
["aaa", 
 "aa ",
 " b "],
["a", 265, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.machete2, count: 1, data: 0}, 
["aaa", 
 "aa ",
 " b "],
["a", ItemID.coldflont, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.machete3, count: 1, data: 0}, 
["aaa", 
 "aa ",
 " b "],
["a", ItemID.coldvrass, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.machete4, count: 1, data: 0}, 
["aaa", 
 "aa ",
 " b "],
["a", ItemID.coldsteel, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cssword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldsteel, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.csshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldsteel, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cshoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldsteel, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cspick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldsteel, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.coldbrooso, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedbrooso, 0]);

Recipes.addShaped({id: ItemID.broosoaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldbrooso, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.broososword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldbrooso, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.broososhovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldbrooso, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.broosohoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldbrooso, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.broosopick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldbrooso, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.coldflont, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedflont, 0]);

Recipes.addShaped({id: ItemID.flontaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldflont, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.flontsword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldflont, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.flontshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldflont, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.flonthoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldflont, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.flontpick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldflont, 0, "b", 280, 0]);


Recipes.addShaped({id: ItemID.coldlithium, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedlithium, 0]);

Recipes.addShaped({id: ItemID.lithiumaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldlithium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.lithiumsword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldlithium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.lithiumshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldlithium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.lithiumhoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldlithium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.lithiumpick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldlithium, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.coldvrass, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedvrass, 0]);

Recipes.addShaped({id: ItemID.vrassaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldvrass, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.vrasssword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldvrass, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.vrassshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldvrass, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.vrasshoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldvrass, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.vrasspick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldvrass, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.coldcobalt, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedcobalt, 0]);

Recipes.addShaped({id: ItemID.cobaltaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldcobalt, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cobaltsword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldcobalt, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cobaltshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldcobalt, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cobalthoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldcobalt, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.cobaltpick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldcobalt, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.coldtitaniopro, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedtitaniopro, 0]);

Recipes.addShaped({id: ItemID.titanioproaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldtitaniopro, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.titanioprosword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldtitaniopro, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.titanioproshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldtitaniopro, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.titanioprohoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldtitaniopro, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.titaniopropick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldtitaniopro, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.coldnordicgold, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatednordicg, 0]);

Recipes.addShaped({id: ItemID.nordicgaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldnordicgold, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.nordicgsword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldnordicgold, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.nordicgshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldnordicgold, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.nordicghoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldnordicgold, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.nordicgpick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldnordicgold, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.coldniobium, count: 1, data: 0}, 
["ooo", 
 "oao",
 "ooo"],
["a", ItemID.heatedniobium, 0]);

Recipes.addShaped({id: ItemID.niobiumaxe, count: 1, data: 0}, 
["aa ", 
 "ab ",
 " b "],
["a", ItemID.coldniobium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.niobiumsword, count: 1, data: 0}, 
[" a ", 
 " a ",
 " b "],
["a", ItemID.coldniobium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.niobiumshovel, count: 1, data: 0}, 
[" a ", 
 " b ",
 " b "],
["a", ItemID.coldniobium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.niobiumhoe, count: 1, data: 0}, 
["aa ", 
 " b ",
 " b "],
["a", ItemID.coldniobium, 0, "b", ItemID.lacquerstick, 0]);


Recipes.addShaped({id: ItemID.niobiumpick, count: 1, data: 0}, 
["aaa", 
 " b ",
 " b "],
["a", ItemID.coldniobium, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.worksaw, count: 20, data: 0}, 
[" aa", 
 "aa ",
 "bb "],
["a", 265, 0, "b", 280, 0]);

Recipes.addShaped({id: ItemID.plank, count: 1, data: 0}, 
["ab ", 
 "   ",
 "   "],
["a", 5, 0, "b", ItemID.worksaw, 0]);

Recipes.addShaped({id: ItemID.stackplank, count: 2, data: 0}, 
["aab", 
 "aab",
 "bb "],
["a", ItemID.plank, 0, "b", ItemID.plantfibre, 0]);

Recipes.addShaped({id: BlockID.soou, count: 1, data: 0}, 
["ada", 
 "ccc",
 " b "],
["a", ItemID.plank, 0, "b", ItemID.blueprint1, 0, "c", 4, 0, "d", ItemID.saupro, 0]);

Recipes.addShaped({id: BlockID.staker, count: 1, data: 0}, 
["ada", 
 "ccc",
 " b "],
["a", 265, 0, "b", ItemID.blueprint2, 0, "c", 4, 0, "d", ItemID.irongear, 0]);


Recipes.addShaped({id: ItemID.knifeboi, count: 2, data: 0}, 
["#a#", 
 "#bb",
 "#b#"],
["a", 265, 0, "b", 280, 0]);

Recipes.addShaped({id: ItemID.blueprint1, count: 1, data: 0}, 
["cdc", 
 "aaa",
 "bbb"],
["a", ItemID.stackplank, 0, "b", 339, 0, "c", 4, 0, "d", 265, 0]);

Recipes.addShaped({id: ItemID.purslanesnack, count: 1, data: 0}, 
[" a ", 
 " a ",
 " a "],
["a", ItemID.purslaneitem, 0]);

Recipes.addShaped({id: ItemID.plaate1, count: 2, data: 0}, 
["##b", 
 "aa#",
 "aa#"],
["a", 265, 0, "b", ItemID.stgalager, 0]);


Recipes.addShaped({id: ItemID.irongear, count: 1, data: 0}, 
["#ab", 
 "aa#",
 "a##"],
["a", 265, 0, "b", ItemID.stgalager, 0]);

Recipes.addShaped({id: ItemID.saupro, count: 1, data: 0}, 
[" a ", 
 "aba",
 " a "],
["a", ItemID.plaate1, 0, "b", ItemID.lacquerstick, 0]);

Recipes.addShaped({id: ItemID.blueprint2, count: 1, data: 0}, 
["ccc", 
 "aaa",
 "bbb"],
["a", ItemID.stackplank, 0, "b", 339, 0, "c", 4, 0, "d", 265, 0]);

Recipes.addShaped({id: ItemID.lacquerstick, count: 1, data: 0}, 
["aaa", 
 "   ",
 " b "],
["a", ItemID.charcoalpowder, 0, "b", 280, 0]);

Recipes.addShaped({id: BlockID.krucher, count: 1, data: 0}, 
["cac", 
 "cdc",
 " b "],
["a", 265, 0, "b", ItemID.blueprint3, 0, "c", 4, 0, "d", ItemID.irongear, 0]);

Recipes.addShaped({id: BlockID.ambifor, count: 1, data: 0}, 
["ada", 
 "cec",
 " b "],
["a", 265, 0, "b", ItemID.blueprint4, 0, "c", 4, 0, "d", ItemID.irongear, 0, "e", 61, 0]);

Recipes.addShaped({id: ItemID.blueprint3, count: 1, data: 0}, 
["dbd", 
 "aba",
 "bbb"],
["a", ItemID.stackplank, 0, "b", 339, 0, "c", 4, 0, "d", 265, 0]);

Recipes.addShaped({id: ItemID.blueprint4, count: 1, data: 0}, 
["cac", 
 "ada",
 "bbb"],
["a", ItemID.stackplank, 0, "b", 339, 0, "c", 4, 0, "d", 61, 0]);

Recipes.addFurnace(ItemID.plank, ItemID.charcoalgrade1);
Recipes.addFurnace(ItemID.stackplank, ItemID.charcoalgrade2);
Recipes.addFurnace(5, ItemID.charcoalgrade1);
Recipes.addFurnace(17, ItemID.charcoalgrade2);
Recipes.addFurnace(318, ItemID.heatedflont);
Recipes.addFurnace(ItemID.clayaxe, ItemID.fclayaxe);
Recipes.addFurnace(ItemID.clayshovel, ItemID.fclayshovel);
Recipes.addFurnace(ItemID.claysword, ItemID.fclaysword);
Recipes.addFurnace(ItemID.clayhoe, ItemID.fclayhoe);
Recipes.addFurnace(ItemID.claypickaxe, ItemID.fclaypickaxe);
Recipes.addFurnace(ItemID.cruciblepro2, ItemID.heatedsteel);
Recipes.addFurnace(ItemID.cruciblepro3, ItemID.heatedbrooso);
Recipes.addFurnace(ItemID.cruciblepro4, ItemID.heatedlithium);
Recipes.addFurnace(ItemID.cruciblepro5, ItemID.heatedvrass);
Recipes.addFurnace(ItemID.cruciblepro6, ItemID.heatedcobalt);
Recipes.addFurnace(ItemID.cruciblepro7, ItemID.heatedtitaniopro);
Recipes.addFurnace(ItemID.cruciblepro8, ItemID.heatednordicg);
Recipes.addFurnace(ItemID.cruciblepro9, ItemID.heatedniobium);
Recipes.addFurnace(ItemID.cruciblex2, ItemID.heatedsteel);
Recipes.addFurnace(ItemID.cruciblex3, ItemID.heatedbrooso);
Recipes.addFurnace(ItemID.cruciblex4, ItemID.heatedlithium);
Recipes.addFurnace(ItemID.cruciblex5, ItemID.heatedvrass);
Recipes.addFurnace(ItemID.cruciblex6, ItemID.heatedcobalt);
Recipes.addFurnace(ItemID.cruciblex7, ItemID.heatedtitaniopro);
Recipes.addFurnace(ItemID.cruciblex8, ItemID.heatednordicg);
Recipes.addFurnace(ItemID.cruciblex9, ItemID.heatedniobium);


Item.registerUseFunction(ItemID.stgalager, function(crd,i,block){
let c = crd.relative;
  if(block.id==1||block.id==4){
    if(Math.random()<=0.60){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.copperchunkhtp,1,0);
    }
  }
});

Item.registerUseFunction(ItemID.irongalager, function(crd,item,block){
let c = crd.relative;
  if(ToolAPI.blockData[block.id].material.name=="stone"&&Entity.getSneaking(Player.get())){
    if(Math.random()<=0.2){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.tiinchunk1,1,0);
    }
  }
});

Item.registerUseFunction(ItemID.goldgalager, function(crd,i,block){
let c = crd.relative;
  if(block.id==1||block.id==4){
    if(Math.random()<=0.60){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.radiumchunk,1,0);
    }
  }
});

Item.registerUseFunction(ItemID.diamgalager, function(crd,item,block){
let c = crd.relative;
  if(ToolAPI.blockData[block.id].material.name=="stone"&&Entity.getSneaking(Player.get())){
    if(Math.random()<=0.2){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.bariumchunk,1,0);
    }
  }
});


Item.registerUseFunction(ItemID.worksaw, function(crd,item,block){
let c = crd.relative;
  if(ToolAPI.blockData[block.id].material.name=="wood"&&Entity.getSneaking(Player.get())){
    if(Math.random()<=0.8){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.plantfibre,4,0);
    }
  }
});