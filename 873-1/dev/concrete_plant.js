IMPORT("StorageInterface");

IDRegistry.genBlockID("concrete_plant");
Block.createBlock("concrete_plant", [
{name: "concrete plant", texture: [["concrete_plant", 0]], inCreative: true}]);    ToolAPI.registerBlockMaterial(BlockID.concrete_plant, "stone", 1, true);    

Recipes.addShaped({id: BlockID.concrete_plant, count: 1, data: 0}, 
["aaa",
"aba",
"aaa"], 
["a", 4, -1, "b", 325, 8]);


Translation.addTranslation("concrete plant", {ru: "бетонный завод"});



var decGui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "concrete plant"
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
	{type: "bitmap", x: 585, y: 225, bitmap: "progress0", scale: 5}
	],
    
	elements: {
		"DecSlot0": {type: "slot", x: 445, y: 210, size: 100, bitmap: "icon_water_bucket"},
        "DecSlot1": {type: "slot", x: 735, y: 210-15, size: 130, bitmap: "icon_iron_pickaxe"},
        "Progress": {type: "scale", x: 585, y: 225, direction: 0, scale: 5, bitmap: "progress1"}
			}
		
});


var concreteRecipe=[];


addconcreteRecipe(237, 0, 236, 0, 20,1,1);
addconcreteRecipe(237, 1, 236, 1, 20,1,1);
addconcreteRecipe(237, 2, 236, 2, 20,1,1);
addconcreteRecipe(237, 3, 236, 3, 20,1,1);
addconcreteRecipe(237, 4, 236, 4, 20,1,1); 
addconcreteRecipe(237, 5, 236, 5, 20,1,1);
addconcreteRecipe(237, 6, 236, 6, 20,1,1);
addconcreteRecipe(237, 7, 236, 7, 20,1,1);
addconcreteRecipe(237, 8, 236, 8, 20,1,1);
addconcreteRecipe(237, 9, 236, 9, 20,1,1);
addconcreteRecipe(237, 10, 236, 10, 20,1,1);
addconcreteRecipe(237, 11, 236, 11, 20,1,1);
addconcreteRecipe(237, 12, 236, 12, 20,1,1);
addconcreteRecipe(237, 13, 236, 13, 20,1,1);
addconcreteRecipe(237, 14, 236, 14, 20,1,1);
addconcreteRecipe(237, 15, 236, 15, 20,1,1);
addconcreteRecipe(237, 16, 236, 16, 20,1,1);

function addconcreteRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	concreteRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addConcreteRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	concreteRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.concrete_plant, {
	defaultValues: {
		time:0,
		recipe:null,
		id:0,
		data:0,
		rotation:0
	},
	animation:null,
	tick: function(){
	StorageInterface.checkHoppers(this);
        
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
				for(var i in concreteRecipe){
					if(this.container.getSlot("DecSlot0").id==concreteRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=concreteRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==concreteRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- concreteRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==concreteRecipe[i].inputData||concreteRecipe[i].inputData==-1){
								this.data.recipe=concreteRecipe[i];
							this.data.time=concreteRecipe[i].time;
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

			if(this.container.getSlot("DecSlot1").count>64-this.data.recipe.outputCount||this.container.getSlot("DecSlot0").id!=this.data.recipe.inputId||this.container.getSlot("DecSlot0").count<this.data.recipe.inputCount){
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
	addConcreteRecipeQ:addConcreteRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});








StorageInterface.createInterface(BlockID.concrete_plant, {
    slots: {
        "DecSlot0": {input: true},
        "DecSlot1": {output: true}
        }});
        
