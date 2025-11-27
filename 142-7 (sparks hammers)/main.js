/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 12
*/



// file: header.js

/*
┏━━━┓╋╋╋╋╋╋╋┏┓
┃┏━┓┃╋╋╋╋╋╋╋┃┃
┃┗━━┳━━┳━━┳━┫┃┏┓
┗━━┓┃┏┓┃┏┓┃┏┫┗┛┛
┃┗━┛┃┗┛┃┏┓┃┃┃┏┓┓
┗━━━┫┏━┻┛┗┻┛┗┛┗┛s
╋╋╋╋┃┃
╋╋╋╋┗┛
┏┓╋┏┓
┃┃╋┃┃
┃┗━┛┣━━┳┓┏┳┓┏┳━━┳━┓
┃┏━┓┃┏┓┃┗┛┃┗┛┃┃━┫┏┛
┃┃╋┃┃┏┓┃┃┃┃┃┃┃┃━┫┃
┗┛╋┗┻┛┗┻┻┻┻┻┻┻━━┻┛s
by NikuJagajaga
*/

IMPORT("NJJCore", "Inventory");
IMPORT("NJJCore", "Utility");
IMPORT("RegisterFunction");
IMPORT("EntityTypeUtil");


const Cfg = {
	fast: __config__.getBool("fast_mode"),
	shrine: __config__.getNumber("gen_shrine_chance")
};


const SHammer = {

	params: {
		Wood: {level: 1, durability: 354, efficiency: 1.2, damage: 3},
		Stone: {level: 2, durability: 786, efficiency: 2.4, damage: 4},
		Iron: {level: 3, durability: 1500, efficiency: 3.6, damage: 5},
		Gold: {level: 1, durability: 192, efficiency: 7.2, damage: 3},
		Diamond: {level: 4, durability: 9366, efficiency: 4.8, damage: 6},
		Obsidian: {level: 2, durability: 6000, efficiency: 2.4, damage: 3},
		Copper: {level: 2, durability: 768, efficiency: 2.4, damage: 4},
		Tin: {level: 2, durability: 192, efficiency: 1.8, damage: 3.8},
		Lead: {level: 1, durability: 192, efficiency: 0.6, damage: 3.3},
		Silver: {level: 2, durability: 768, efficiency: 3, damage: 4.3},
		Steel: {level: 3, durability: 2880, efficiency: 4.8, damage: 5},
		Bronze: {level: 3, durability: 768, efficiency: 4.8, damage: 5},
		Aluminium: {level: 3, durability: 1320, efficiency: 7.2, damage: 4.8},
		Nickel: {level: 2, durability: 768, efficiency: 2.4, damage: 4},
		Platinum: {level: 2, durability: 960, efficiency: 1.8, damage: 3.8},
		Invar: {level: 3, durability: 1920, efficiency: 5.4, damage: 5.3},
		Electrum: {level: 2, durability: 768, efficiency: 3, damage: 4.3},
		Chrome: {level: 4, durability: 3600, efficiency: 4.2, damage: 7},
		Zinc: {level: 1, durability: 192, efficiency: 0.6, damage: 3.3},
		Ruby: {level: 3, durability: 1920, efficiency: 3.7, damage: 5.7},
		Sapphire: {level: 3, durability: 3720, efficiency: 3, damage: 5},
		Brass: {level: 3, durability: 576, efficiency: 2.1, damage: 4.6},
		Osmium: {level: 3, durability: 3000, efficiency: 6, damage: 7},
		Peridot:	{level: 3, durability: 2400, efficiency: 4.2, damage: 5.4},
		Manasteel: {level: 3, durability: 3000, efficiency: 3.7, damage: 5},
		Elementium: {level: 4, durability: 4320, efficiency: 3.7, damage: 5},
		Terrasteel: {level: 5, durability: 6000, efficiency: 5.4, damage: 6},
		Darksteel: {level: 6, durability: 9366, efficiency: 3.7, damage: 5},
		Machalite: {level: 3, durability: 3000, efficiency: 4.2, damage: 6},
		Dragonite: {level: 4, durability: 4500, efficiency: 4.2, damage: 7},
		Gossamite: {level: 4, durability: 6000, efficiency: 4.8, damage: 8}
	},

	data1: {},
	data2: {},
	preRecipe: null,
	setRecipe: function(rec, res){
		const arr = [];
		const opt = {};
		const req = {};
		let item;
		rec.push(280, 280, 280, 280);
		for(let i = 14; i--;){
			if(typeof rec[i] == "string"){
				item = rec[i].split(":");
				arr[i] = item[0];
				opt[i] = item[1];
			}
			else{
				arr[i] = rec[i];
			}
			if(rec[i]){
				req[rec[i]] || (req[rec[i]] = 0);
				req[rec[i]]++;
			}
		}
		this.data1[arr.join(",")] = {result: res, option: opt};
		this.data2[res] = req;
	},
	getResult: function(){
		const arr = [];
		let i = 0;
		for(i = 14; i--;){
			arr[i] = container.getSlot("slot" + i).id;
		}
		const key = arr.join(",");
		if(this.data1[key]){
			for(i in this.data1[key].option){
				if(container.getSlot("slot" + i).data != this.data1[key].option[i]){
					return 0;
				}
			}
			return this.data1[key].result;
		}
	},
	setField: function(id){
		if(Inventory.decreaseItems(this.data2[id])){
			let rec;
			for(key in SHammer.data1){
				if(SHammer.data1[key].result == id){
					rec = key;
					break;
				}
			}
			if(!rec){
				alert("[Error] Cannot find recipe.");
				this.preRecipe = null;
				return false;
			}
			const arr = rec.split(",");
			for(let i = 14; i--;){
				container.setSlot("slot" + i, arr[i], 1, SHammer.data1[rec].option[i] || 0);
			}
			return true;
		}
		else{
			alert("Not enough items.");
			return false;
		}
	},

	destroy: function(x, y, z, type, item){
		const block = World.getBlock(x, y, z);
		const material = ToolAPI.getBlockMaterial(block.id) || {};
		if(material.name == type && ToolAPI.getBlockDestroyLevel(block.id) <= ToolAPI.getCarriedToolLevel()){
			if(Item.getMaxDamage(item.id) < ++item.data){
				Player.setCarriedItem(0);
				return true;
			}
			if(Cfg.fast){
				const arr = Block.getBlockDropViaItem(block, item, {x: x, y: y, z: z}) || [];
				for(let i = arr.length; i--;){
					World.drop(x + 0.5, y, z + 0.5, arr[i][0], arr[i][1], arr[i][2]);
				}
				World.setBlock(x, y, z, 0);
			}
			else{
				World.destroyBlock(x, y, z, true);
			}
		}
	},

	returnInv: function(){
		const items = {};
		let slot;
		let key;
		let item;
		for(let i = 14; i--;){
			slot = container.getSlot("slot" + i);
			if(slot.id){
				key = slot.id + ":" + slot.data;
				items[key] || (items[key] = 0);
				items[key] += slot.count;
				container.clearSlot("slot" + i);
			}
		}
		for(key in items){
			item = key.split(":");
			Inventory.addItem(item[0], items[key], item[1]);
		}
	}

};


Saver.addSavesScope("SparksHammersScope",
	function read(scope){
		SHammer.preRecipe = scope.preRecipe;
	},
	function save(){
		return {
			preRecipe: SHammer.preRecipe
		}
	}
);




// file: block/mjolnir.js

IDRegistry.genBlockID("mjolnir");
Block.createBlock("mjolnir", [{name: "Mjolnir", texture: [["iron_block", 0]]}]);
ToolAPI.registerBlockMaterial(BlockID.mjolnir, "stone");
Block.setDestroyTime(BlockID.mjolnir, -1);
const render = new ICRender.Model();
const model = BlockRenderer.createModel();
model.addBox(01/16, 01/16, 05/16, 15/16, 07/16, 11/16, "iron_block", 0);
model.addBox(01/16, 00/16, 07/16, 15/16, 01/16, 09/16, "iron_block", 0);
model.addBox(01/16, 07/16, 07/16, 15/16, 08/16, 09/16, "iron_block", 0);
model.addBox(01/16, 03/16, 04/16, 15/16, 05/16, 05/16, "iron_block", 0);
model.addBox(01/16, 03/16, 11/16, 15/16, 05/16, 12/16, "iron_block", 0);
model.addBox(07/16, 08/16, 07/16, 09/16, 15/16, 09/16, 17, 0);
model.addBox(06/16, 15/16, 06/16, 10/16, 16/16, 10/16, "anvil_base", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.mjolnir, 0, render);


Block.registerClickFunction("mjolnir", function(c, item, block){
	Game.prevent();
	World.setBlock(c.x, c.y, c.z, 0);
	World.drop(c.x + 0.5, c.y + 0.5, c.z + 0.5, ItemID.hamMjolnir, 1);
});




// file: block/shrine.js

const shrineArray = [
	[5, 6, 3, {id: 44, data: 6}],
	[5, 6, 4, {id: 44, data: 6}],
	[3, 6, 5, {id: 44, data: 6}],
	[4, 6, 5, {id: 44, data: 6}],
	[5, 6, 5, {id: 44, data: 6}],
	[6, 6, 5, {id: 44, data: 6}],
	[7, 6, 5, {id: 44, data: 6}],
	[5, 6, 6, {id: 44, data: 6}],
	[5, 6, 7, {id: 44, data: 6}],
	[3, 5, 3, {id: 51, data: 0}],
	[4, 5, 3, {id: 156, data: 0}],
	[5, 5, 3, {id: 41, data: 0}],
	[6, 5, 3, {id: 156, data: 1}],
	[7, 5, 3, {id: 51, data: 0}],
	[3, 5, 4, {id: 156, data: 2}],
	[4, 5, 4, {id: 156, data: 2}],
	[5, 5, 4, {id: 155, data: 0}],
	[6, 5, 4, {id: 156, data: 2}],
	[7, 5, 4, {id: 156, data: 2}],
	[3, 5, 5, {id: 41, data: 0}],
	[4, 5, 5, {id: 155, data: 0}],
	[5, 5, 5, {id: 155, data: 1}],
	[6, 5, 5, {id: 155, data: 0}],
	[7, 5, 5, {id: 41, data: 0}],
	[3, 5, 6, {id: 156, data: 3}],
	[4, 5, 6, {id: 156, data: 3}],
	[5, 5, 6, {id: 155, data: 0}],
	[6, 5, 6, {id: 156, data: 3}],
	[7, 5, 6, {id: 156, data: 3}],
	[3, 5, 7, {id: 51, data: 0}],
	[4, 5, 7, {id: 156, data: 0}],
	[5, 5, 7, {id: 41, data: 0}],
	[6, 5, 7, {id: 156, data: 1}],
	[7, 5, 7, {id: 51, data: 0}],
	[3, 4, 2, {id: 156, data: 6}],
	[7, 4, 2, {id: 156, data: 6}],
	[2, 4, 3, {id: 156, data: 4}],
	[3, 4, 3, {id: 87, data: 0}],
	[4, 4, 3, {id: 155, data: 6}],
	[5, 4, 3, {id: 155, data: 6}],
	[6, 4, 3, {id: 155, data: 6}],
	[7, 4, 3, {id: 87, data: 0}],
	[8, 4, 3, {id: 156, data: 5}],
	[3, 4, 4, {id: 155, data: 10}],
	[4, 4, 4, {id: 44, data: 14}],
	[5, 4, 4, {id: 156, data: 6}],
	[6, 4, 4, {id: 44, data: 14}],
	[7, 4, 4, {id: 155, data: 10}],
	[3, 4, 5, {id: 155, data: 10}],
	[4, 4, 5, {id: 156, data: 4}],
	[6, 4, 5, {id: 156, data: 5}],
	[7, 4, 5, {id: 155, data: 10}],
	[3, 4, 6, {id: 155, data: 10}],
	[4, 4, 6, {id: 44, data: 14}],
	[5, 4, 6, {id: 156, data: 7}],
	[6, 4, 6, {id: 44, data: 14}],
	[7, 4, 6, {id: 155, data: 10}],
	[2, 4, 7, {id: 156, data: 4}],
	[3, 4, 7, {id: 87, data: 0}],
	[4, 4, 7, {id: 155, data: 6}],
	[5, 4, 7, {id: 155, data: 6}],
	[6, 4, 7, {id: 155, data: 6}],
	[7, 4, 7, {id: 87, data: 0}],
	[8, 4, 7, {id: 156, data: 5}],
	[3, 4, 8, {id: 156, data: 7}],
	[7, 4, 8, {id: 156, data: 7}],
	[3, 3, 3, {id: 155, data: 2}],
	[4, 3, 3, {id: 102, data: 0}],
	[5, 3, 3, {id: 102, data: 0}],
	[6, 3, 3, {id: 102, data: 0}],
	[7, 3, 3, {id: 155, data: 2}],
	[3, 3, 4, {id: 102, data: 0}],
	[7, 3, 4, {id: 102, data: 0}],
	[3, 3, 5, {id: 102, data: 0}],
	[7, 3, 5, {id: 102, data: 0}],
	[3, 3, 6, {id: 102, data: 0}],
	[7, 3, 6, {id: 102, data: 0}],
	[3, 3, 7, {id: 155, data: 2}],
	[4, 3, 7, {id: 102, data: 0}],
	[5, 3, 7, {id: 102, data: 0}],
	[6, 3, 7, {id: 102, data: 0}],
	[7, 3, 7, {id: 155, data: 2}],
	[3, 2, 3, {id: 155, data: 2}],
	[4, 2, 3, {id: 102, data: 0}],
	[5, 2, 3, {id: 102, data: 0}],
	[6, 2, 3, {id: 102, data: 0}],
	[7, 2, 3, {id: 155, data: 2}],
	[3, 2, 4, {id: 102, data: 0}],
	[7, 2, 4, {id: 102, data: 0}],
	[3, 2, 5, {id: 102, data: 0}],
	[5, 2, 5, {id: BlockID.mjolnir, data: 0}],
	[7, 2, 5, {id: 102, data: 0}],
	[3, 2, 6, {id: 102, data: 0}],
	[7, 2, 6, {id: 102, data: 0}],
	[3, 2, 7, {id: 155, data: 2}],
	[4, 2, 7, {id: 102, data: 0}],
	[5, 2, 7, {id: 102, data: 0}],
	[6, 2, 7, {id: 102, data: 0}],
	[7, 2, 7, {id: 155, data: 2}],
	[3, 1, 3, {id: 155, data: 2}],
	[4, 1, 3, {id: 102, data: 0}],
	[5, 1, 3, {id: 102, data: 0}],
	[6, 1, 3, {id: 102, data: 0}],
	[7, 1, 3, {id: 155, data: 2}],
	[3, 1, 4, {id: 102, data: 0}],
	[4, 1, 4, {id: 171, data: 4}],
	[5, 1, 4, {id: 171, data: 4}],
	[6, 1, 4, {id: 171, data: 4}],
	[7, 1, 4, {id: 102, data: 0}],
	[3, 1, 5, {id: 102, data: 0}],
	[4, 1, 5, {id: 171, data: 4}],
	[5, 1, 5, {id: 155, data: 1}],
	[6, 1, 5, {id: 171, data: 4}],
	[7, 1, 5, {id: 102, data: 0}],
	[3, 1, 6, {id: 102, data: 0}],
	[4, 1, 6, {id: 171, data: 4}],
	[5, 1, 6, {id: 171, data: 4}],
	[6, 1, 6, {id: 171, data: 4}],
	[7, 1, 6, {id: 102, data: 0}],
	[3, 1, 7, {id: 155, data: 2}],
	[4, 1, 7, {id: 102, data: 0}],
	[5, 1, 7, {id: 102, data: 0}],
	[6, 1, 7, {id: 102, data: 0}],
	[7, 1, 7, {id: 155, data: 2}],
	[4, 0, 0, {id: 156, data: 2}],
	[5, 0, 0, {id: 156, data: 2}],
	[6, 0, 0, {id: 156, data: 2}],
	[2, 0, 1, {id: 156, data: 0}],
	[3, 0, 1, {id: 156, data: 2}],
	[4, 0, 1, {id: 156, data: 0}],
	[5, 0, 1, {id: 155, data: 10}],
	[6, 0, 1, {id: 156, data: 1}],
	[7, 0, 1, {id: 156, data: 2}],
	[8, 0, 1, {id: 156, data: 1}],
	[1, 0, 2, {id: 156, data: 2}],
	[2, 0, 2, {id: 156, data: 0}],
	[3, 0, 2, {id: 155, data: 0}],
	[4, 0, 2, {id: 155, data: 0}],
	[5, 0, 2, {id: 155, data: 10}],
	[6, 0, 2, {id: 155, data: 0}],
	[7, 0, 2, {id: 155, data: 0}],
	[8, 0, 2, {id: 156, data: 1}],
	[9, 0, 2, {id: 156, data: 2}],
	[1, 0, 3, {id: 156, data: 0}],
	[2, 0, 3, {id: 155, data: 0}],
	[3, 0, 3, {id: 155, data: 0}],
	[4, 0, 3, {id: 155, data: 0}],
	[5, 0, 3, {id: 155, data: 10}],
	[6, 0, 3, {id: 155, data: 0}],
	[7, 0, 3, {id: 155, data: 0}],
	[8, 0, 3, {id: 155, data: 0}],
	[9, 0, 3, {id: 156, data: 1}],
	[0, 0, 4, {id: 156, data: 2}],
	[1, 0, 4, {id: 156, data: 0}],
	[2, 0, 4, {id: 155, data: 0}],
	[3, 0, 4, {id: 155, data: 0}],
	[4, 0, 4, {id: 155, data: 0}],
	[5, 0, 4, {id: 89, data: 0}],
	[6, 0, 4, {id: 155, data: 0}],
	[7, 0, 4, {id: 155, data: 0}],
	[8, 0, 4, {id: 155, data: 0}],
	[9, 0, 4, {id: 156, data: 1}],
	[10, 0, 4, {id: 156, data: 2}],
	[0, 0, 5, {id: 156, data: 0}],
	[1, 0, 5, {id: 155, data: 6}],
	[2, 0, 5, {id: 155, data: 6}],
	[3, 0, 5, {id: 155, data: 6}],
	[4, 0, 5, {id: 89, data: 0}],
	[5, 0, 5, {id: 155, data: 0}],
	[6, 0, 5, {id: 89, data: 0}],
	[7, 0, 5, {id: 155, data: 6}],
	[8, 0, 5, {id: 155, data: 6}],
	[9, 0, 5, {id: 155, data: 6}],
	[10, 0, 5, {id: 156, data: 1}],
	[0, 0, 6, {id: 156, data: 3}],
	[1, 0, 6, {id: 156, data: 0}],
	[2, 0, 6, {id: 155, data: 0}],
	[3, 0, 6, {id: 155, data: 0}],
	[4, 0, 6, {id: 155, data: 0}],
	[5, 0, 6, {id: 89, data: 0}],
	[6, 0, 6, {id: 155, data: 0}],
	[7, 0, 6, {id: 155, data: 0}],
	[8, 0, 6, {id: 155, data: 0}],
	[9, 0, 6, {id: 156, data: 1}],
	[10, 0, 6, {id: 156, data: 3}],
	[1, 0, 7, {id: 156, data: 0}],
	[2, 0, 7, {id: 155, data: 0}],
	[3, 0, 7, {id: 155, data: 0}],
	[4, 0, 7, {id: 155, data: 0}],
	[5, 0, 7, {id: 155, data: 10}],
	[6, 0, 7, {id: 155, data: 0}],
	[7, 0, 7, {id: 155, data: 0}],
	[8, 0, 7, {id: 155, data: 0}],
	[9, 0, 7, {id: 156, data: 1}],
	[1, 0, 8, {id: 156, data: 3}],
	[2, 0, 8, {id: 156, data: 0}],
	[3, 0, 8, {id: 155, data: 0}],
	[4, 0, 8, {id: 155, data: 0}],
	[5, 0, 8, {id: 155, data: 10}],
	[6, 0, 8, {id: 155, data: 0}],
	[7, 0, 8, {id: 155, data: 0}],
	[8, 0, 8, {id: 156, data: 1}],
	[9, 0, 8, {id: 156, data: 3}],
	[2, 0, 9, {id: 156, data: 0}],
	[3, 0, 9, {id: 156, data: 3}],
	[4, 0, 9, {id: 155, data: 0}],
	[5, 0, 9, {id: 155, data: 10}],
	[6, 0, 9, {id: 155, data: 0}],
	[7, 0, 9, {id: 156, data: 3}],
	[8, 0, 9, {id: 156, data: 1}],
	[4, 0, 10, {id: 156, data: 3}],
	[5, 0, 10, {id: 156, data: 3}],
	[6, 0, 10, {id: 156, data: 3}]
];

const genShrine = function(x, y, z){
	for(let i = shrineArray.length; i--;){
		World.setFullBlock(x + shrineArray[i][0], y + shrineArray[i][1], z + shrineArray[i][2], shrineArray[i][3]);
	}
};

Callback.addCallback("GenerateChunk", function (x, z){
	if(Math.random() <= Cfg.shrine){
		let c = GenerationUtils.randomCoords(x, z, 64, 128);
		c = GenerationUtils.findSurface(c.x, c.y, c.z);
		if(!World.getBlock(c.x, c.y + 1, c.z).id && GenerationUtils.canSeeSky(c.x, c.y + 1, c.z)){
			genShrine(c.x - 5, c.y + 1, c.z - 5);
		}
	}
});

IDRegistry.genItemID("hamDebug");
Item.createItem("hamDebug", "Super Secret Wand Of Magical Things", {name: "hamDebug"}, {stack: 1});
Item.registerUseFunction("hamDebug", function(c){
	genShrine(c.x, c.y + 1, c.z);
});




// file: block/craft/guide.js

let GuideAPI;
let GuideHelper;
let PageControllers;
ModAPI.addAPICallback("GuideAPI", function(api){
	GuideAPI = api.GuideAPI;
	GuideHelper = api.GuideHelper;
	PageControllers = api.PageControllers;
	Utility.createButtonTex(18, 18);
});


Callback.addCallback("PostLoaded", function(){

	if(!GuideAPI){
		return
	}

	const Func = {
		link: function(key){
			return function(){
				GuideAPI.openPage(GuideAPI.openedGuide.pages[key]);
			}
		},
		field: function(key){
			return function(){
				SHammer.returnInv();
				SHammer.setField(ItemID[key]) && GuideAPI.container.close();
			}
		}
	};

	const Page = {

		main: function(params, elements, con, section){
			const xp = {left: 50, right: 550}[section];
			let yp = 100;
			let link;
			for(let i = 0; i < 3; i++){
				elements["slot_" + params.items[i].link] = {type: "slot", x: xp, y: yp, size: 100, bitmap: "slot_empty", visual: true, clicker: {onClick: Func.link(params.items[i].link)}};
				elements["text_" + params.items[i].link] = {type: "text", x: xp + 100, y: yp + 60, font: {size: 20}, text: params.items[i].name};
				con.setSlot("slot_" + params.items[i].link, ItemID[params.items[i].icon], 1, 0);
				yp += 150;
			}
		},

		recipe: function(params, elements, con, section){
			params.items.push(280, 280, 280, 280);
			elements.title = {type: "text", x: 90, y: 90, font: {size: 24}, text: params.title};
			elements.slot0 = {type: "slot", x: 90, y: 150, visual: true};
			elements.slot1 = {type: "slot", x: 150, y: 150, visual: true};
			elements.slot2 = {type: "slot", x: 210, y: 150, visual: true};
			elements.slot3 = {type: "slot", x: 270, y: 150, visual: true};
			elements.slot4 = {type: "slot", x: 330, y: 150, visual: true};
			elements.slot5 = {type: "slot", x: 90, y: 210, visual: true};
			elements.slot6 = {type: "slot", x: 150, y: 210, visual: true};
			elements.slot7 = {type: "slot", x: 210, y: 210, visual: true};
			elements.slot8 = {type: "slot", x: 270, y: 210, visual: true};
			elements.slot9 = {type: "slot", x: 330, y: 210, visual: true};
			elements.slot10 = {type: "slot", x: 210, y: 270, visual: true};
			elements.slot11 = {type: "slot", x: 210, y: 330, visual: true};
			elements.slot12 = {type: "slot", x: 210, y: 390, visual: true};
			elements.slot13 = {type: "slot", x: 210, y: 450, visual: true};
			let item;
			for(let i = 14; i--;){
				if(typeof params.items[i] == "number"){
					con.setSlot("slot" + i, params.items[i], 1, 0);
				}
				else{
					item = params.items[i].split(":");
					con.setSlot("slot" + i, item[0], 1, item[1]);
				}
			}
		},

		infoBasic: function(params, elements, con, section){
			GuideHelper.drawTextArray(params.elements, 550, 50, 13, elements, section);
			elements.button = {type: "button", x: 722, y: 300, bitmap: "btnNJJ1_18x18", bitmap2: "btnNJJ2_18x18", scale: 3.2, clicker: {
				onClick: function(){
					SHammer.returnInv();
					SHammer.setField(ItemID[params.result]) && GuideAPI.container.close();
				}
			}};
			elements.slotResult = {type: "slot", x: 722, y: 298, z: 1, bitmap: "slot_empty", visual: true};
			con.setSlot("slotResult", ItemID[params.result], 1, 0);
		},

		infoSpecial: function(params, elements, con, section){
			GuideHelper.drawTextArray(params.elements, 550, 50, 13, elements, section);
			let xp = 560;
			let yp = 300;
			for(let key in SHammer.params){
				if(ItemID[params.type + key]){
					elements["button" + key] = {type: "button", x: xp, y: yp, bitmap: "btnNJJ1_18x18", bitmap2: "btnNJJ2_18x18", scale: 3.2, clicker: {onClick: Func.field(params.type + key)}};
					elements["slot" + key] = {type: "slot", x: xp, y: yp - 2, z: 1, bitmap: "slot_empty", visual: true};
					con.setSlot("slot" + key, ItemID[params.type + key], 1, 0);
					xp += 65;
					if(xp >= 950){
						xp = 560;
						yp += 65;
					}
				}
			}

		},

		image: function(params, elements, con, section){
			elements.text = {type: "text", x: 90, y: 90, font: {size: 32}, text: params.title};
			elements.image = {type: "image", x: 70, y: 150, bitmap: params.image, scale: 0.3};
		}

	};


	GuideAPI.registerGuide("SparksHammersGuide", {
		pages: {

			default: {
				left: {
					controller: Page.main,
					items: [
						{name: "Regular Hammers", icon: "hamIron", link: "hammer"},
						{name: "Regular Excavators", icon: "excIron", link: "excavator"},
						{name: "Mini Hammer", icon: "hamMini", link: "mini"}
					]
				},
				right: {
					controller: Page.main,
					items: [
						{name: "Giant Hammer", icon: "hamGiant", link: "giant"},
						{name: "Netherstar Hammer", icon: "hamNetherstar", link: "netherstar"},
						{name: "Mjolnir", icon: "hamMjolnir", link: "mjolnir"}
					]
				}
			},

			hammer: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Regular Hammers",
					items: [265, 265, 265, 265, 265, 265, 265, 265, 265, 265]
				},
				right: {
					controller: Page.infoSpecial,
					elements: [
						{text: "Hammers are items like pickaxes except they mine out a 3×3 area around the block broken."},
						{text: "However, like pickaxes, they will only effectively mine out stone-like materials."},
						{text: "Also, the extra blocks around the block hit will only break if their hardness is less than or equal to the block hit."}
					],
					type: "ham"
				}
			},

			excavator: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Regular Excavators",
					items: [0, 265, 265, 265, 0, 265, 265, 265, 265, 265]
				},
				right: {
					controller: Page.infoSpecial,
					elements: [
						{text: "Excavators are essentially the dirt-like material efficient tool equivalent of the hammers."},
						{text: "They will dig out a 3×3 area of dirt-like blocks."}
					],
					type: "exc"
				}
			},

			mini: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Mini Hammer",
					items: [0, 265, 265, 265, 0, 0, 265, 265, 265, 0]
				},
				right: {
					controller: Page.infoBasic,
					elements: [
						{text: "The Mini Hammer, instead of mining a 3×3, will mine out a 1×3 area (3 blocks vertically)."},
						{text: "Sneaking will change the mined area to a 3×1 area (3 blocks horizontally)."},
						{text: "Note that due to it’s smaller size, it has less durability than a regular hammer."}
					],
					result: "hamMini"
				}
			},

			giant: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Giant Hammer",
					items: [42, 42, 42, 42, 42, 42, 42, "351:5", 42, 42]
				},
				right: {
					controller: Page.infoBasic,
					elements: [
						{text: "The Giant Hammer, instead of mining a 3×3, will mine out a 9×9 area."},
						{text: "If you are flying or are mining up or down, then the area is centered on the block hit."},
						{text: "Otherwise the area will be shifted upwards so that the bottom of the mined area is at the floor level of the player."},
						{text: "Due to the increased material cost and size of the hammer, it has much more durability than a regular hammer."}
					],
					result: "hamGiant"
				}
			},

			netherstar: {
				preLink: "default",
				left: {
					controller: Page.recipe,
					title: "Netherstar Hammer",
					items: [264, 264, 41, 264, 264, 264, 41, 399, 41, 264]
				},
				right: {
					controller: Page.infoBasic,
					elements: [
						{text: "The Nether Star Hammer is a powerful hammer capable of creating tunnels with a single use."},
						{text: "It will mine a 3×3 hole 16 blocks deep by default and the hammer will only have 10 durability."},
						{text: "1 durability will be used for every tunnel mined."}
					],
					result: "hamNetherstar"
				}
			},

			mjolnir: {
				preLink: "default",
				left: {
					controller: Page.image,
					title: "Mjolnir",
					image: "imageShrine"
				},
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "This legendary hammer, “forged in the heart of a dying star”, has been lying dormant in a shrine somewhere out in the world just waiting for the right person to pick it up."},
						{text: "Many have seen it, and some have built a shrine around it to keep it safe from those unworthy of it’s power."},
						{text: "Perhaps you are worthy of this mighty hammer?"},
						{text: "It is heard that worthiness can be gained in the slaying of a great beast in another dimension…"}
					]
				}
			}

		}
	});

});




// file: block/craft/gui.js

const container = new UI.Container();
const window = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Hammer Crafting Table"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	drawing: [
		{type: "bitmap", x: 700, y: 240, bitmap: "_workbench_bar", scale: 0.8}
	],
	elements: {
		slot0: {type: "slot", x: 360, y: 60},
		slot1: {type: "slot", x: 420, y: 60},
		slot2: {type: "slot", x: 480, y: 60},
		slot3: {type: "slot", x: 540, y: 60},
		slot4: {type: "slot", x: 600, y: 60},
		slot5: {type: "slot", x: 360, y: 120},
		slot6: {type: "slot", x: 420, y: 120},
		slot7: {type: "slot", x: 480, y: 120},
		slot8: {type: "slot", x: 540, y: 120},
		slot9: {type: "slot", x: 600, y: 120},
		slot10: {type: "slot", x: 480, y: 180},
		slot11: {type: "slot", x: 480, y: 240},
		slot12: {type: "slot", x: 480, y: 300},
		slot13: {type: "slot", x: 480, y: 360},
		slotResult: {type: "slot", x: 780, y: 225, size: 90, visual: true, clicker: {
			onClick: function(){
				const res = container.getSlot("slotResult");
				if(res.id){
					Inventory.addItem(res.id, 1, 0);
					SHammer.preRecipe = res.id;
					if(!Inventory.decreaseItems(SHammer.data2[res.id])){
						let slot;
						for(let i = 14; i--;){
							slot = container.getSlot("slot" + i);
							if(slot.id){
								--slot.count || (slot.id = slot.data = 0);
							}
						}
					}
				}
			}
		}},
		buttonClear: {type: "button", x: 360, y: 380, bitmap: "_button_prev_48x24", bitmap2: "_button_prev_48x24p", scale: 1.6, clicker: {
			onClick: function(){
				SHammer.returnInv();
				SHammer.preRecipe = null;
			}
		}},
		buttonGuide: {type: "button", x: 680, y: 60, bitmap: "ic_loading_glow", scale: 0.1, clicker: {
			onClick: function(){
				GuideAPI ?
					GuideAPI.openGuide("SparksHammersGuide") :
					alert("Please install GuideAPI.");
			}
		}}
	}
});




// file: block/craft/tile.js

IDRegistry.genBlockID("hamCraft");
Block.createBlock("hamCraft", [{name: "Hammer Crafting Table", texture: [["hamCraft", 0], ["hamCraft", 1], ["hamCraft", 2]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.hamCraft, "stone");
Block.setDestroyTime(BlockID.hamCraft, 5);

Block.registerClickFunction("hamCraft", function(c, item, block){
	Game.prevent();
	container.openAs(window);
	SHammer.preRecipe && SHammer.setField(SHammer.preRecipe);
});

Callback.addCallback("tick", function(){
	if(container.isOpened()){
		const res = SHammer.getResult();
		res ?
			container.setSlot("slotResult", res, 1, 0) :
			container.clearSlot("slotResult");
	}
});

container.setOnCloseListener({
	onClose: function(){
		SHammer.returnInv();
	}
});




// file: tools/regular.js

const regRegular = function(name, param, mat){
	mat || (mat = ItemID["ingot" + name]);
	const hamID = "ham" + name;
	const excID = "exc" + name;
	IDRegistry.genItemID(hamID);
	IDRegistry.genItemID(excID);
	Item.createItem(hamID, name + " Hammer", {name: hamID}, {stack: 1});
	Item.createItem(excID, name + " Excavator", {name: excID}, {stack: 1});
	ToolAPI.registerTool(ItemID[hamID], param, ["stone"]);
	ToolAPI.registerTool(ItemID[excID], param, ["dirt"]);
	Callback.addCallback("DestroyBlock", function(c, block){
		const item = Player.getCarriedItem();
		if(item.id == ItemID[hamID]){
			for(let i = -1; i <= 1; i++){
			for(let j = -1; j <= 1; j++){
				switch(c.side & 6){
					case 0:
						if(SHammer.destroy(c.x + i, c.y, c.z + j, "stone", item))return;
						break;
					case 2:
						if(SHammer.destroy(c.x + i, c.y + j, c.z, "stone", item))return;
						break;
					case 4:
						if(SHammer.destroy(c.x, c.y + i, c.z + j, "stone", item))return;
						break;
				}
			}
			}
			Player.setCarriedItem(item.id, 1, item.data);
		}
		if(item.id == ItemID[excID]){
			for(let i = -1; i <= 1; i++){
			for(let j = -1; j <= 1; j++){
				switch(c.side & 6){
					case 0:
						if(SHammer.destroy(c.x + i, c.y, c.z + j, "dirt", item))return;
						break;
					case 2:
						if(SHammer.destroy(c.x + i, c.y + j, c.z, "dirt", item))return;
						break;
					case 4:
						if(SHammer.destroy(c.x, c.y + i, c.z + j, "dirt", item))return;
						break;
				}
			}
			}
			Player.setCarriedItem(item.id, 1, item.data);
		}
	});
	SHammer.setRecipe([mat, mat, mat, mat, mat, mat, mat, mat, mat, mat], ItemID[hamID]);
	SHammer.setRecipe([0, mat, mat, mat, 0, mat, mat, mat, mat, mat], ItemID[excID]);
};


IDRegistry.genItemID("hamHead");
IDRegistry.genItemID("excHead");
Item.createItem("hamHead", "Hammer Head", {name: "hamHead"});
Item.createItem("excHead", "Excavator Head", {name: "excHead"});

Recipes.addShaped({id: ItemID.hamHead}, ["aaa", "aaa"], ["a", 17, -1]);
Recipes.addShaped({id: ItemID.hamHead}, ["aaa", "aaa"], ["a", 162, -1]);
Recipes.addShaped({id: ItemID.excHead}, ["oao", "aaa"], ["a", 17, -1]);
Recipes.addShaped({id: ItemID.excHead}, ["oao", "aaa"], ["a", 162, -1]);

regRegular("Wood", SHammer.params.Wood, 5);
regRegular("Stone", SHammer.params.Stone, 4);
regRegular("Iron", SHammer.params.Iron, 265);
regRegular("Gold", SHammer.params.Gold, 266);
regRegular("Diamond", SHammer.params.Diamond, 264);
regRegular("Obsidian", SHammer.params.Obsidian, 49);

Recipes.addShaped({id: ItemID.hamWood}, ["a", "b", "b"], ["a", ItemID.hamHead, 0, "b", 5, -1]);
Recipes.addShaped({id: ItemID.excWood}, ["a", "b", "b"], ["a", ItemID.excHead, 0, "b", 5, -1]);
Recipes.addShaped({id: BlockID.hamCraft}, ["aba", "bcb", "aba"], ["a", 1, 0, "b", 58, 0, "c", ItemID.hamWood, 0]);

ModAPI.addAPICallback("ICore", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Lead", SHammer.params.Lead);
	regRegular("Silver", SHammer.params.Silver);
	regRegular("Steel", SHammer.params.Steel);
	regRegular("Bronze", SHammer.params.Bronze);
});

ModAPI.addAPICallback("ATCore", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Lead", SHammer.params.Lead);
	regRegular("Silver", SHammer.params.Silver);
	regRegular("Steel", SHammer.params.Steel);
	regRegular("Bronze", SHammer.params.Bronze);
	regRegular("Aluminium", SHammer.params.Aluminium);
	regRegular("Nickel", SHammer.params.Nickel);
	regRegular("Platinum", SHammer.params.Platinum);
	regRegular("Invar", SHammer.params.Invar);
	regRegular("Electrum", SHammer.params.Electrum);
	regRegular("Chrome", SHammer.params.Chrome);
	regRegular("Zinc", SHammer.params.Zinc);
	regRegular("Ruby", SHammer.params.Ruby, ItemID.gemRuby);
});

ModAPI.addAPICallback("ForestryAPI", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Bronze", SHammer.params.Bronze);
});

ModAPI.addAPICallback("ThermalExpansionAPI", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Lead", SHammer.params.Lead);
	regRegular("Silver", SHammer.params.Silver);
	regRegular("Steel", SHammer.params.Steel);
	regRegular("Bronze", SHammer.params.Bronze);
	regRegular("Aluminium", SHammer.params.Aluminium);
	regRegular("Nickel", SHammer.params.Nickel);
	regRegular("Platinum", SHammer.params.Platinum);
	regRegular("Invar", SHammer.params.Invar);
	regRegular("Electrum", SHammer.params.Electrum);
});




// file: tools/giant.js

IDRegistry.genItemID("hamGiant");
Item.createItem("hamGiant", "Giant Hammer", {name: "hamGiant"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamGiant, {level: 3, durability: 9000, efficiency: 1.8, damage: 8}, ["stone"]);
SHammer.setRecipe([42, 42, 42, 42, 42, 42, 42, "351:5", 42, 42], ItemID.hamGiant);

Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	if(item.id == ItemID.hamGiant){
		for(let i = -4; i <= 4; i++){
		for(let j = -4; j <= 4; j++){
			switch(c.side & 6){
				case 0:
					if(SHammer.destroy(c.x + i, c.y, c.z + j, "stone", item))return;
					break;
				case 2:
					if(SHammer.destroy(c.x + i, c.y + j + 3, c.z, "stone", item))return;
					break;
				case 4:
					if(SHammer.destroy(c.x, c.y + i + 3, c.z + j, "stone", item))return;
					break;
			}
		}
		}
		Player.setCarriedItem(item.id, 1, item.data);
	}
});




// file: tools/mini.js

IDRegistry.genItemID("hamMini");
Item.createItem("hamMini", "Mini Hammer", {name: "hamMini"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamMini, {level: 3, durability: 750, efficiency: 3.6, damage: 5}, ["stone"]);
SHammer.setRecipe([0, 265, 265, 265, 0, 0, 265, 265, 265, 0], ItemID.hamMini);

Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	const player = Player.get();
	const sneak = Entity.getSneaking(Player.get());
	if(item.id == ItemID.hamMini){
		let yaw = ((Entity.getLookAngle(player).yaw * 180 / Math.PI) - 45) / 90;
		yaw < 0 && yaw--;
		yaw &= 1;
		let flag = !!yaw;
		sneak && (flag = !flag);
		for(let i = -1; i <= 1; i++){
			if(c.side >= 2){
				if(sneak){
					if(c.side < 4){
						if(SHammer.destroy(c.x + i, c.y, c.z, "stone", item))return;
					}
					else{
						if(SHammer.destroy(c.x, c.y, c.z + i, "stone", item))return;
					}
				}
				else{
					if(SHammer.destroy(c.x, c.y + i, c.z, "stone", item))return;
				}
			}
			else{
				if(flag){
					if(SHammer.destroy(c.x, c.y, c.z + i, "stone", item))return;
				}
				else{
					if(SHammer.destroy(c.x + i, c.y, c.z, "stone", item))return;
				}
			}
		}
		Player.setCarriedItem(item.id, 1, item.data);
	}
});




// file: tools/mjolnir.js

let cooldown = 0;
IDRegistry.genItemID("hamMjolnir");
Item.createItem("hamMjolnir", "Mjolnir", {name: "hamIron"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamMjolnir, {level: 10, durability: 25, efficiency: 10, damage: 10}, ["stone"], {onBroke: function(){return true}});
Item.setGlint(ItemID.hamMjolnir, true);
Item.registerNoTargetUseFunction("hamMjolnir", function(item){
	if(!item.data){
		const pos = Player.getPosition();
		const vec = Entity.getLookVector(Player.get());
		const c = {};
		const oldArray = Entity.getAll();
		const array = [];
		for(let i = oldArray.length; i--;){
			!Entity.isAbiosis(Entity.getType(oldArray[i])) && !Player.isPlayer(oldArray[i]) && array.push(oldArray[i]);
		}
		label:
		for(let t = 0; t <= 128; t++){
			c.x = pos.x + vec.x * t;
			c.y = pos.y + vec.y * t;
			c.z = pos.z + vec.z * t;
			for(let i = array.length; i--;){
				if(Entity.getDistanceToCoords(array[i], c) < 4){
					Entity.spawn(c.x, c.y + 1, c.z, 93);
					Entity.setHealth(array[i], Entity.setHealth(array[i]) - 10);
					Player.setCarriedItem(ItemID.hamMjolnir, 1, 25);
					break label; 
				}
			}
			if(World.getBlockID(c.x, c.y, c.z)){
				t >= 16 &&
					Entity.spawn(c.x, c.y + 1, c.z, 93) &
					Player.setCarriedItem(ItemID.hamMjolnir, 1, 25);
				break label;
			}
		}
	}
});

Callback.addCallback("tick", function(){
	if(!(World.getThreadTime() & 7)){
		const item = Player.getCarriedItem();
		item.id == ItemID.hamMjolnir && item.data && Player.setCarriedItem(ItemID.hamMjolnir, 1, item.data - 1);
	}
});

Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	const dummy = {id: ItemID.hamMjolnir, count: 1, data: -10};
	if(item.id == ItemID.hamMjolnir){
		for(let i = -1; i <= 1; i++){
		for(let j = -1; j <= 1; j++){
			switch(c.side & 6){
				case 0:
					if(SHammer.destroy(c.x + i, c.y, c.z + j, "stone", dummy))return;
					break;
				case 2:
					if(SHammer.destroy(c.x + i, c.y + j, c.z, "stone", dummy))return;
					break;
				case 4:
					if(SHammer.destroy(c.x, c.y + i, c.z + j, "stone", dummy))return;
					break;
			}
		}
		}
		Player.setCarriedItem(item.id, 1, item.data - 1);
	}
});




// file: tools/netherstar.js

IDRegistry.genItemID("hamNetherstar");
Item.createItem("hamNetherstar", "Netherstar Hammer", {name: "hamNetherstar"}, {stack: 1});
ToolAPI.registerTool(ItemID.hamNetherstar, {level: 3, durability: 10, efficiency: 1.8, damage: 8}, ["stone"]);
Item.setGlint(ItemID.hamNetherstar, true);
SHammer.setRecipe([264, 264, 41, 264, 264, 264, 41, 399, 41, 264], ItemID.hamNetherstar);

const target = [];
Callback.addCallback("DestroyBlock", function(c, block){
	const item = Player.getCarriedItem();
	const dummy = {id: ItemID.hamNetherstar, count: 1, data: -10};
	if(item.id == ItemID.hamNetherstar){
		for(let i = 1; i <= 16; i++){
			switch(c.side){
				case 0: target[target.length] = {x: c.x, y: c.y + i, z: c.z, side: 0}; break;
				case 1: target[target.length] = {x: c.x, y: c.y - i, z: c.z, side: 0}; break;
				case 2: target[target.length] = {x: c.x, y: c.y, z: c.z + i, side: 2}; break;
				case 3: target[target.length] = {x: c.x, y: c.y, z: c.z - i, side: 2}; break;
				case 4: target[target.length] = {x: c.x + i, y: c.y, z: c.z, side: 4}; break;
				case 5: target[target.length] = {x: c.x - i, y: c.y, z: c.z, side: 4}; break;
			}	 
		}
		for(let i = -1; i <= 1; i++){
		for(let j = -1; j <= 1; j++){
			switch(c.side & 6){
				case 0:
					SHammer.destroy(c.x + i, c.y, c.z + j, "stone", dummy);
					break;
				case 2:
					SHammer.destroy(c.x + i, c.y + j, c.z, "stone", dummy);
					break;
				case 4:
					SHammer.destroy(c.x, c.y + i, c.z + j, "stone", dummy);
					break;
			}
		}
		}
		++item.data <= 10 ?
			Player.setCarriedItem(item.id, 1, item.data) :
			Player.setCarriedItem(0);
	}
});

Callback.addCallback("tick", function(){
	if(target.length && !(World.getThreadTime()&3)){
		const dummy = {id: ItemID.hamNetherstar, count: 1, data: 0};
		const c = target[0];
		for(let i = -1; i <= 1; i++){
		for(let j = -1; j <= 1; j++){
			switch(c.side){
				case 0:
					SHammer.destroy(c.x + i, c.y, c.z + j, "stone", dummy);
					break;
				case 2:
					SHammer.destroy(c.x + i, c.y + j, c.z, "stone", dummy);
					break;
				case 4:
					SHammer.destroy(c.x, c.y + i, c.z + j, "stone", dummy);
					break;
			}
		}
		}
		target.shift();
	}
});




// file: recipe_viewer.js

ModAPI.addAPICallback("RecipeViewer", function(api){

	const convertRecipe = function(id){
		for(let key in SHammer.data1){
			if(SHammer.data1[key].result == id){
				return {
					input: key.split(",").map(function(value, index){
						return {id: value - 0, count: 1, data: SHammer.data1[key]. option[index] || 0};
					}),
					output: [{id: id, count: 1, data: 0}]
				};
			}
		}
	};

	api.Core.registerRecipeType("shammer_craft", {
		contents: {
			icon: BlockID.hamCraft,
			drawing: [
				{type: "image", x: 590, y: 230, bitmap: "_workbench_bar", scale: 0.8}
			],
			elements: {
				input0: {type: "slot", x: 160, y: 40, size: 80},
				input1: {type: "slot", x: 240, y: 40, size: 80},
				input2: {type: "slot", x: 320, y: 40, size: 80},
				input3: {type: "slot", x: 400, y: 40, size: 80},
				input4: {type: "slot", x: 480, y: 40, size: 80},
				input5: {type: "slot", x: 160, y: 120, size: 80},
				input6: {type: "slot", x: 240, y: 120, size: 80},
				input7: {type: "slot", x: 320, y: 120, size: 80},
				input8: {type: "slot", x: 400, y: 120, size: 80},
				input9: {type: "slot", x: 480, y: 120, size: 80},
				input10: {type: "slot", x: 320, y: 200, size: 80},
				input11: {type: "slot", x: 320, y: 280, size: 80},
				input12: {type: "slot", x: 320, y: 360, size: 80},
				input13: {type: "slot", x: 320, y: 440, size: 80},
				output0: {type: "slot", x: 750, y: 200, size: 120}
			}
		},
		getList: function(id, data, isUsage){
			let key = "";
			if(isUsage){
				const list = [];
				for(key in SHammer.data2){
					if(SHammer.data2[key][id] || SHammer.data2[key][id + ":" + data]){
						list.push(convertRecipe(key - 0));
					}
				}
				return list;
			}
			for(key in SHammer.data1){
				if(SHammer.data1[key].result == id){
					return [convertRecipe(SHammer.data1[key].result)];
				}
			}
			return [];
		}
	});

});




