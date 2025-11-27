var BLOCK_TYPE_SAWW = Block.createSpecialType({
	base: 5,
	explosionres: 7,
	destroytime: 1,
});
IDRegistry.genBlockID("Saww");
Block.createBlock("Saww", [
	{name: "Saww", texture: [["saww", 1],["saww", 1],["saww", 0],["saww", 0],["saww", 0]], inCreative: true}
],BLOCK_TYPE_SAWW);

Recipes.addShaped({id: BlockID.Saww, count: 1, data: 0}, ["aaa", "bbb", "cdc"], ["a", 258, 0,"b", 5, -1, "c", 61, -1, "d", 331, -1]);


var decGui = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text: "saww"
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


var sawwRecipe=[];


addsawwRecipe(17, 0, 5, 0, 20,1,6); 
addsawwRecipe(17, 1, 5, 1, 20,1,6); 
addsawwRecipe(17, 2, 5, 2, 20,1,6); 
addsawwRecipe(17, 3, 5, 3, 20,1,6); 
addsawwRecipe(162, 0, 5, 4, 20,1,6); 
addsawwRecipe(162, 1, 5, 5, 20,1,6); 
addsawwRecipe(5, -1, 280, 1, 20,1,3); 



function addsawwRecipe(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	sawwRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
var addSawwRecipeQ = function(inputId, inputData, outputId, ouputData, time, inputCount, outputCount){
	sawwRecipe.push({inputId:inputId, inputData:inputData, outputId:outputId, outputData:ouputData, time:time, inputCount:inputCount, outputCount:outputCount})
}
TileEntity.registerPrototype(BlockID.Saww, {
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
				for(var i in sawwRecipe){
					if(this.container.getSlot("DecSlot0").id==sawwRecipe[i].inputId&&this.container.getSlot("DecSlot0").count>=sawwRecipe[i].inputCount){
						if(this.container.getSlot("DecSlot1").id==sawwRecipe[i].outputId&&this.container.getSlot("DecSlot1").count<65- sawwRecipe[i].outputCount||this.container.getSlot("DecSlot1").id==0){
							if(this.container.getSlot("DecSlot0").data==sawwRecipe[i].inputData||sawwRecipe[i].inputData==-1){
								this.data.recipe=sawwRecipe[i];
							this.data.time=sawwRecipe[i].time;
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
	addSawwRecipeQ:addSawwRecipeQ,
	requireGlobal: function(command){
		return eval(command);
	}
});








