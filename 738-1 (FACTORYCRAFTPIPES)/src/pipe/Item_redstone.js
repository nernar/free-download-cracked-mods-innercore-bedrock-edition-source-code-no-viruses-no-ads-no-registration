Translation.addTranslation("Redstone Transport Pipe", {ru: "Редстоуновая транспортная труба"});

IDRegistry.genBlockID("pipeItemRedstone");
Block.createBlock("pipeItemRedstone", [
	{name: "Redstone Transport Pipe", texture: [["pipe_redstone",0]], inCreative: true},
]);

Recipes.addShaped({id: BlockID.pipeItemRedstone, count: 1, data: 0}, [
	"aba"
	], ['a', 331,0,'b',20,0]);

/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemRedstone, 0, [
	{ id:331, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemRedstone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);
Pipe.registerTile(BlockID.pipeItemRedstone);

var ui_redstone_pipe= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Redstone Pipe/Редстоун труба"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	params: { 
	slot: "slotFactory", 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
	],
	
	elements: {
		"slot1": {type: "slot", x: 400, y: 110,size:70},
		"slot2": {type: "slot", x: 470, y: 110,size:70},
		"slot3": {type: "slot", x: 540, y: 110,size:70},
		"slot4": {type: "slot", x: 610, y: 110,size:70},
		"slot5": {type: "slot", x: 680, y: 110,size:70},
		"slot6": {type: "slot", x: 750, y: 110,size:70}
	}
});

TileEntity.registerPrototype(BlockID.pipeItemRedstone,{
	getGuiScreen: function(){
		return ui_redstone_pipe;
	},
	setPipeFunctions:function(item){
		for(var i = 1;i<7;i++){
			var slot=this.container.getSlot("slot"+i);
			if(slot.id==item.item.id&&slot.data==item.item.data){
				return
			}
		}
		item.turnBack();
	}
});