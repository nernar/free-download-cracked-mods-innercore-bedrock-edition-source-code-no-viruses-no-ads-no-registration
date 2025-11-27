Translation.addTranslation("Diamond Transport Pipe", {ru: "Алмазная транспортная труба"});

IDRegistry.genBlockID("pipeItemDiamond");
Block.createBlock("pipeItemDiamond", [
	{name: "Diamond Transport Pipe", texture: [["pipe_diamond",6]], inCreative: true},
]);


function setupDiamondPipeRender(id, width, groups) {
	var render = new ICRender.Model();
	BlockRenderer.setStaticICRender(id, 0, render);
		var boxes = [
			{side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2],data:0},
			{side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2],data:1},
			{side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2],data:2},
			{side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2],data:3},
			{side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1],data:4},
			{side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2],data:5},
		]
	for(var i in groups){
		var group = ICRender.getGroup(groups[i].name);
		if (groups[i].add) {
			group.add(id, -1);
		}
		for (var i in boxes) {
			var box = boxes[i];
			var model = BlockRenderer.createModel();
			model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5],"pipe_diamond", box.data);
			render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
		}
	}
	var model = BlockRenderer.createModel();
		model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
		render.addEntry(model);
		width = Math.max(width, 0.5);
	Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}

setupDiamondPipeRender(BlockID.pipeItemDiamond,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);


Pipe.registerTile(BlockID.pipeItemDiamond,{});
Recipes.addShaped({id: BlockID.pipeItemDiamond, count: 4, data: 0}, [
	"aba"
	], ['a', 264,0,'b',20,0]);

var ui_pipe_diamond= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Diamond Pipe/Алмазная труба"}},
		inventory: {standart: true},
		minHeight: 700,
		background: {standart: true}
	},
	params: { 
	invSlot: "slotFactory", 	
	selection: "selectionFactory"
	},
	
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		
		{
			type: "frame",
			x: 390,
			y: 60,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_white",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 150,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_black",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 240,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_red",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 330,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_blue",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 420,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_yellow",
			scale: 1
		},
		{
			type: "frame",
			x: 390,
			y: 510,
			width: 440,
			height: 90,
			bitmap:"pipe.slot_green",
			scale: 1
		},
	],
	
	elements: {
		//white
		"white_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 70,size:70},
		"white_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 70,size:70},
		"white_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 70,size:70},
		"white_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 70,size:70},
		"white_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 70,size:70},
		"white_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 70,size:70},
		
		//black
		"black_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 160,size:70},
		"black_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y:160,size:70},
		"black_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y:160,size:70},
		"black_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y:160,size:70},
		"black_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y:160,size:70},
		"black_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 160,size:70},
		
		//red
		"red_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 250,size:70},
		"red_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 250,size:70},
		"red_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 250,size:70},
		"red_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 250,size:70},
		"red_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 250,size:70},
		"red_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 250,size:70},
		
		//blue
		"blue_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 340,size:70},
		"blue_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 340,size:70},
		"blue_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 340,size:70},
		"blue_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 340,size:70},
		"blue_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 340,size:70},
		"blue_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 340,size:70},
		
		//yellow
		"yellow_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 430,size:70},
		"yellow_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 430,size:70},
		"yellow_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 430,size:70},
		"yellow_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 430,size:70},
		"yellow_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 430,size:70},
		"yellow_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 430,size:70},
		
		//green
		"green_slot1": {type: "slot", bitmap:"slotFactory",x: 400, y: 520,size:70},
		"green_slot2": {type: "slot", bitmap:"slotFactory",x: 470, y: 520,size:70},
		"green_slot3": {type: "slot", bitmap:"slotFactory",x: 540, y: 520,size:70},
		"green_slot4": {type: "slot", bitmap:"slotFactory",x: 610, y: 520,size:70},
		"green_slot5": {type: "slot", bitmap:"slotFactory",x: 680, y: 520,size:70},
		"green_slot6": {type: "slot", bitmap:"slotFactory",x: 750, y: 520,size:70}
		
	}
});

TileEntity.registerPrototype(BlockID.pipeItemDiamond,{
	getGuiScreen: function(){
		return ui_pipe_diamond;
	},
	reloadFilter:function(){
		this.data.filter=null;
		var all=["white","black","red","blue","yellow","green"];
		for(var i in all){
			var dir = all[i];
			for(var s=1;s<7;s++){
				var slot = this.container.getSlot(dir+"_slot"+s);
				if(!this.data.filter)this.data.filter={
					white:{length:0},
					black:{length:0},
					red:{length:0},
					blue:{lengtg:0},
					yellow:{length:0},
					green:{length:0}
				}
				this.data.filter[dir][slot.id+":"+slot.data]=true
				this.data.filter[dir]["length"]++;
			}
		}
	},
	
	getTransportingDirections: function(item){
		this.reloadFilter();
		var dir = null;
		var freedir = null;
		for(var i in this.data.filter){
			var d=this.data.filter[i];
			if(d[item.item.id+":"+item.item.data]){
				dir=i;
				break;
			}
			if(d.length==0&&!freedir){
				freedir=i;
			}
		}
		if(dir){
			switch(dir){
				case "white": return [Pipe.directions[3]]
				case "black": return [Pipe.directions[2]]
				case "blue": return [Pipe.directions[5]]
				case "red": return [Pipe.directions[4]]
				case "yellow": return [Pipe.directions[1]]
				case "green": return [Pipe.directions[0]]
			}
		}
		if(freedir) {
			switch(freedir){
				case "white": return [Pipe.directions[3]]
				case "black": return [Pipe.directions[2]]
				case "blue": return [Pipe.directions[5]]
				case "red": return [Pipe.directions[4]]
				case "yellow": return [Pipe.directions[1]]
				case "green": return [Pipe.directions[0]]
			}
		}
	}
});