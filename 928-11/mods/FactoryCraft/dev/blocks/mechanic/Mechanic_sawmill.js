Translation.addTranslation("Mechanic Sawmill", {
	ru: "Механическая лесопилка"
});

IDRegistry.genBlockID("machineMechanicSawmill");
Block.createBlockWithRotation("machineMechanicSawmill", [
	{name:"Mechanic Sawmill", texture: [
	["block_machine_wooden",0],["block_machine_wooden", 0],
	["block_machine_wooden",0],["block_mechanic_sawmill",0],
	["block_machine_wooden",0],["block_machine_wooden",0]
		 ], inCreative: true}
],"opaque");


var UI_mechanic_sawmill = new UI.StandartWindow({
	standart: {
		header: {
			text: {
				text:Translation.translate("Mechanic Sawmill")
			}
		},
		minHeight: 700,
		inventory: {standart: true},
		background: {standart: true}
	},		
	drawing: [
		{type: "bitmap", x: 0, y: 0, bitmap: "gui_ground", scale: 8},
		{type: "bitmap", x: 585, y: 350, bitmap: "progressbar.ground", scale: 5},
		{type: "bitmap", x: 490, y: 345, bitmap: "gear", scale: 5}
	],
	params: { 
		slot: "slotFactory", 
		invSlot: "slotFactory", 	
		selection: "selectionFactory"
	},
	elements: {
		"slot1": {type: "slot", x: 400, y: 60, size: 70},
		"slot2": {type: "slot", x: 470, y: 60, size: 70},
		"slot3": {type: "slot", x: 540, y: 60, size: 70},
		"slot4": {type: "slot", x: 610, y: 60, size: 70},
		"slot5": {type: "slot", x: 680, y: 60, size: 70},
		"slot6": {type: "slot", x: 750, y: 60, size: 70},
		"slot7": {type: "slot", x: 820, y: 60, size: 70},
		"slot8": {type: "slot", x: 400, y: 130, size: 70},
		"slot9": {type: "slot", x: 470, y: 130, size: 70},
		"slot10": {type: "slot", x: 540, y: 130, size: 70},
		"slot11": {type: "slot", x: 610, y: 130, size: 70},
		"slot12": {type: "slot", x: 680, y: 130, size: 70},
		"slot13": {type: "slot", x: 750, y: 130, size: 70},
		"slot14": {type: "slot", x: 820, y: 130, size: 70},
		"slot15": {type: "slot", x: 400, y: 200, size: 70},
		"slot16": {type: "slot", x: 470, y: 200, size: 70},
		"slot17": {type: "slot", x: 540, y: 200, size: 70},
		"slot18": {type: "slot", x: 610, y: 200, size: 70},
		"slot19": {type: "slot", x: 680, y: 200, size: 70},
		"slot20": {type: "slot", x: 750, y: 200, size: 70},
		"slot21": {type: "slot", x: 820, y: 200, size: 70},
		"slot22": {type: "slot", x: 400, y: 270, size: 70},
		"slot23": {type: "slot", x: 470, y: 270, size: 70},
		"slot24": {type: "slot", x: 540, y: 270, size: 70},
		"slot25": {type: "slot", x: 610, y: 270, size: 70},
		"slot26": {type: "slot", x: 680, y: 270, size: 70},
		"slot27": {type: "slot", x: 750, y: 270, size: 70},
		"slot28": {type: "slot", x: 820, y: 270, size: 70},
		"progressScale": {type: "scale", x: 585, y: 350, direction: 0, scale: 5, bitmap: "progressbar.scale"},
		"slotU1": {type: "slot", x: 400, y: 430, size: 70},
		"slotU2": {type: "slot", x: 470, y: 430, size: 70},
		"slotU3": {type: "slot", x: 540, y: 430, size: 70},
		"slotU4": {type: "slot", x: 610, y: 430, size: 70},
		"slotU5": {type: "slot", x: 680, y: 430, size: 70},
		"slotU6": {type: "slot", x: 750, y: 430, size: 70},
		"slotU7": {type: "slot", x: 820, y: 430, size: 70},
	}
});

let saplings = {};
for(let i = 0;i < 4;i++)
 saplings[17+":"+i] = [6, i];
saplings[162+":"+0] = [6, 4];
saplings[162+":"+1] = [6, 5];


FactAPI.machine.registerTile(BlockID.machineMechanicSawmill,{
	useNetworkItemContainer: true,
	defaultValues: {
		progress:0,
		active:true
	},
	getConfig:function(){
		return {
			time: 100
		}
	},
	getScreenByName(){
		return UI_mechanic_sawmill;
	},
	putChest: function(item){
		let a = FactAPI.machineContainer.addItemToContainer(this.container,item);
		if(a)
			this.blockSource.spawnDroppedItem(this.x+0.5, this.y+1, this.z+0.5, item.id, a, item.data);
	},
	
	tick(){
		let cfg = this.getConfig();
		
		this.container.setScale("progressScale", this.data.progress/cfg.time);
	},
	
	MechanicDeploy(){
		for (let y = 0 - (this.data.modY / 2); y < 10 + (this.data.modY / 2); y++)
			for (let x = 0; x < 9; x++)
				for (let z = 0; z < 9; z++) {
					let block = this.blockSource.getBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
					if (ItemType.is(block.id,"wood")||ItemType.is(block.id,"leaves")) {
						let drop = ToolLib.getBlockDrop({x: this.x - 4 + x, y: this.y + y, z: this.z - 4 + z}, block.id, block.data, 1, {}, {id: 0, data: 0, count: 0}, this.blockSource);
						if(drop === null || JSON.stringify(drop) == "[]")
							drop = [[block.id, 1,block.getNamedStatesScriptable().old_leaf_type||block.data]];
					for (let i in drop)
							this.putChest({id: drop[i][0], count: drop[i][1],data: drop[i][2]});
						this.blockSource.destroyBlock(this.x - 4 + x, this.y + y, this.z - 4 + z);
       let dirt = this.blockSource.getBlockId(this.x - 4 + x, this.y + y -1, this.z - 4 + z);
        if((dirt==2||dirt==3)&&saplings[block.id+":"+block.data])
          this.blockSource.setBlock(this.x - 4 + x, this.y + y, this.z - 4 + z, saplings[block.id+":"+block.data][0], saplings[block.id+":"+block.data][1]);
						return;
					}
				}
	}
},{item:true});

StorageInterface.createInterface(BlockID.machineMechanicSawmill, {
	slots: {
		"slot^1-28": {output: true}
	},
});

ItemType.set(17, "wood");
ItemType.set(162, "wood");
ItemType.set(18,"leaves");
ItemType.set(161,"leaves");

ModAPI.addAPICallback("ENR", function(){
	let arr = [BlockID.ex_infestedRaw0, BlockID.ex_infestedRaw1, BlockID.ex_infestedRaw2, BlockID.ex_infestedLeaf0, BlockID.ex_infestedLeaf1,  BlockID.ex_infestedLeaf0];
	for(let i in arr)
		ItemType.set(arr[i], "wood");
});

ModAPI.addAPICallback("ICore", function(api){
	ItemType.set(BlockID.rubberTreeLog, "wood");
	ItemType.set(BlockID.rubberTreeLogLatex, "wood");
	ItemType.set(BlockID.rubberTreeLeaves, "leaves");
 saplings[BlockID.rubberTreeLog+":"+0] = [BlockID.rubberTreeSapling, 0];
 saplings[BlockID.rubberTreeLogLatex+":"+0] = [BlockID.rubberTreeSapling, 0];
})
