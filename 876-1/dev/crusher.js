IDRegistry.genBlockID("pili_crusher");

Block.createBlockWithRotation("pili_crusher",[ {name: "crusher", texture: [["pili_block", 0],["pili_block", 0],["pili_block",0],["pili_crusher",0],["pili_block",0],["pili_block",0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.pili_crusher, "stone", 1, true);    

Translation.addTranslation("crusher", {ru: "дробитель"});

Recipes.addShaped({id: BlockID.pili_crusher, count: 1, data: 0}, [
        "aba",
        "bcb",
        "aba"
        ], ["a", 318, -1, "b", 45, -1, "c", BlockID.basic_machine_block, -1]);





var crusherpiliUI = new UI.StandartWindow({
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
	{type: "bitmap", x: 585, y: 225, bitmap: "progress0", scale: 5}
	],
    
	elements: {
		"DecSlot0": {type: "slot", x: 445, y: 210, size: 100},
        "DecSlot1": {type: "slot", x: 735, y: 210-15, size: 130},
        "Progress": {type: "scale", x: 585, y: 225, direction: 0, scale: 5, bitmap: "progress1"}
			}
		
});


var crusherpiliRecipe=[];


addcrusherpiliRecipe(4, 0, 13, 0, 90,1,1);
addcrusherpiliRecipe(13, 0, 3, 0, 90,1,1);
addcrusherpiliRecipe(3, 0, 12, 0, 90,1,1);

addcrusherpiliRecipe(16, 0, 263, 0, 90,1,4);
addcrusherpiliRecipe(15, 0, ItemID.raw_iron, 0, 90,1,2);
addcrusherpiliRecipe(14, 0, ItemID.raw_gold, 0, 90,1,2);
addcrusherpiliRecipe(56, 0, 264, 0, 90,1,4);
addcrusherpiliRecipe(129, 0, 388, 0, 90,1,4);
addcrusherpiliRecipe(153, 0, 406, 0, 90,1,4);
addcrusherpiliRecipe(352, 0, 351, 15, 90,1,4);
addcrusherpiliRecipe(369, 0, 377, 0, 90,1,4);

function addcrusherpiliRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	crusherpiliRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addCrusherRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	crusherpiliRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.pili_crusher, {
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
				for(var i in crusherpiliRecipe){
					if(this.container.getSlot("DecSlot0").id==crusherpiliRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=crusherpiliRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==crusherpiliRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- crusherpiliRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==crusherpiliRecipe[i].inputData||crusherpiliRecipe[i].inputData==-1){
								this.data.recipe=crusherpiliRecipe[i];
							this.data.time=crusherpiliRecipe[i].time;
							}
								
						}
					}	
				}
			}
			}
		if(content){
			if(this.data.time){
					this.container.setScale("Progress",Math.floor(91*(1-this.data.time/this.data.recipe.time))/91);
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
		return crusherpiliUI;
	}
});

ModAPI.registerAPI("Deconstruction", {
	addCrusherRecipeQ:addCrusherRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});








StorageInterface.createInterface(BlockID.pili_crusher, {
    slots: {
        "DecSlot0": {input: true},
        "DecSlot1": {output: true}
        }});
        
