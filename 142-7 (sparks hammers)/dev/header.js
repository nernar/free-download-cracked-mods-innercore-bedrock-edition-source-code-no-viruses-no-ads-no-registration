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