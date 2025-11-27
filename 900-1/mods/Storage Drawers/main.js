/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 15
*/



// file: header.js

IMPORT("RenderAPI");
IMPORT("StorageInterface");




// file: api/DrawerAPI.js

let DrawerAPI = {
	setModel(id, type){
		type[0](null, id, 0).setBlockModel(id, 0);
		type[1](null, id, 1).setBlockModel(id, 1);
		type[2](null, id, 2).setBlockModel(id, 2);
		type[3](null, id, 3).setBlockModel(id, 3);
	},
	config: {},
	setConfig(id, config){
		this.config[id] = config;
	},
	getConfig(id){
		return this.config[id];
	},
	isConfig(id){
		return !!this.config[id];
	},
	addItemToSlot(item, slot, count, maxStack) {
		if (count === void 0) 
			count = 64;
		if (slot.id == 0 || slot.id == item.id && slot.data == item.data) {
			var add = Math.min(item.count, maxStack - slot.count);
			if (count < add)
				add = count;
				if (add > 0) {
					slot.id = item.id;
					slot.data = item.data;
					if (item.extra)
						slot.extra = item.extra;
					slot.count += add;
					item.count -= add;
					if (item.count == 0) {
						item.id = item.data = 0;
						item.extra = null;
					}
					return add;
				}
			}
			return 0;
    },
  drawers: [],
	register(id, max, anim){
		anim = anim || StorageType.slot_full_1;
		this.drawers.push(id);
		
		ToolAPI.registerBlockMaterial(id, "wood", 0, true);
		
		TileEntity.registerPrototype(id, {
			useNetworkItemContainer: true,
			getScreenName(player, coords){
				let item = Entity.getCarriedItem(player);
				if(item.id == 0)
					return "main";
				this.use(item.id, item.count, item.data, player, coords);
				return null;
			},
			getScreenByName(){
				return anim.gui;
			},
			getUpgradeSlots(){
				return ["update_0", "update_1", "update_2", "update_3", "update_4", "update_5", "update_6"];
			},
			getConfig(){
				let cfg = {};
				let slots = this.getUpgradeSlots();
				for(let i in slots){
					let slot = this.container.getSlot(slots[i]);
					if(DrawerAPI.isConfig(slot.id)){
						let obj = DrawerAPI.getConfig(slot.id);
						let keys = Object.keys(obj);
						for(let a in keys)
							cfg[keys[a]] = (cfg[keys[a]]||0) + obj[keys[a]];
					}
				}
				return {
					size: max*(cfg.max||1)
				};
			},
			client: {
        updateModel(r) {
        	let slots = anim.slots;
        	for(let i in slots){
        		let id = Network.serverToLocalId(this.networkData.getInt("itemId_"+i));
        		let data = this.networkData.getInt("itemData_"+i);
        		this["model_"+i].describeItem({
        			id: id,
        			count: 1,
        			data: data, 
        			size: slots[i].size,
        			rotation: r
        		});
        	}
        },
        load(){
        	let data = BlockSource.getDefaultForActor(Player.get()).getBlockData(this.x, this.y, this.z);
        	let r = DrawerAPI.getRotateAnimation(data);
        	let pos = DrawerAPI.getRelativeCoords(this.x, this.y, this.z, data, anim.anim_pos)
        	let slots = anim.slots;
        	for(let i in slots)
        		this["model_"+i] = new Animation.Item(pos.x + .55 + slots[i].offset[data].x, pos.y + .55 + slots[i].offset[data].y, pos.z + .55 + slots[i].offset[data].z);
        	this.updateModel(r);
        	for(let i in slots)
        		this["model_"+i].load();
        	let that = this;
        	this.networkData.addOnDataChangedListener(function(data, isExternal){
        		that.updateModel(r);
        	});
        },
        unload() {
        	let slots = anim.slots;
        	for(let i in slots)
        		if(this["model_"+i])
        			this["model_"+i].destroy();
        }
       },
   	 animation(){
   	 	for(let i in anim.slots){
   	 		let item = this.container.getSlot("slot_"+i);
   	 		
   	 		this.networkData.putInt("itemId_"+i, item.id);
    			this.networkData.putInt("itemData_"+i, item.data);
   	 	}
    		this.networkData.sendChanges();
			},
			add(name, id, count, data, extra){
				if(extra)
					return 0;
				let item = this.container.getSlot(name);
				if(!((item.id == id && item.data == data)||item.id==0))
					return 0;
				let cfg = this.getConfig();
				
				if(item.count + count <= cfg.size)
					return count;
				else
					return count - (item.count + count - cfg.size)
			},
			use(id, count, data, player, coords){
				let item = Entity.getCarriedItem(player);
				let name = this.getClickSlot(coords);
				if(!name)
					return;
				let slot = this.container.getSlot(name); 
				if(!Entity.getSneaking(player)){
					let count = this.add(name, item.id, item.count, item.data, item.extra);
					if(count <= 0)
    				return;
					this.container.setSlot(name, item.id, slot.count+count, item.data, item.extra);
					Entity.setCarriedItem(player, item.id, item.count-count, item.data, item.extra);
				}
				this.container.validateAll();
			},
			getSlot(x, y){
				let slots = anim.slots
				for(let i in slots){
					let pos = slots[i].click;
					if((pos[0] < x)&&(pos[1] < y)&&(pos[2] > x)&&(pos[3] > y))
						return "slot_"+i;
				}
			},
			getDataBySide(side){
				let data = null;
				switch(side){
					case 2:
						data = 1;
					break;
					case 3:
						data = 0;
					break;
					case 4:
						data = 3;
					break;
					case 5:
						data = 2;
					break;
				};
				return data;
			},
			getClickSlot(pos){
				let side = pos.side;
				if(this.getDataBySide(side) != this.blockSource.getBlockData(this.x, this.y, this.z))
					return null;
				if(side == 3)
					return this.getSlot(pos.vec.x - pos.x, pos.vec.y - pos.y);
     if(side == 2)
       return this.getSlot(1-(pos.vec.x - pos.x), pos.vec.y - pos.y);
     if(side == 1)
				 return this.getSlot(1-(pos.vec.z - pos.z), pos.vec.y - pos.y);
     return this.getSlot(pos.vec.z - pos.z, pos.vec.y - pos.y);
			},
			click(id, count, data, coords, player){
				Game.prevent();
				let item = Entity.getCarriedItem(player);
				let name = this.getClickSlot(coords);
				if(!name)
					return;
				let slot = this.container.getSlot(name); 
				if(Entity.getSneaking(player)){
					if(slot.id == 0 || slot.count <= 0)
						return;
					this.container.setSlot(name, slot.id, slot.count-1, slot.data, item.extra);
					new PlayerActor(player).addItemToInventory(slot.id, 1, slot.data, slot.extra, true);
				}
				this.container.validateAll();
			},
			destroyBlock(){
				this.networkData.putInt("itemId", 0);
				this.networkData.putInt("itemData", 0);
				this.networkData.sendChanges();
			}, 
			tick(){
				StorageInterface.checkHoppers(this);
				this.container.sendChanges();
				if(World.getThreadTime()%4==0){
					this.animation();
					let item = this.container.getSlot("slot_0");
					let sfg = this.getConfig();
					if(item.count - sfg.size > 0){
						this.blockSource.spawnDroppedItem(this.x+.5, this.y+.5, this.z+.5, item.id, item.count - sfg.size, item.data, null);
						item.count-=item.count - sfg.size;
						this.container.setSlot("slot_0", item.id, item.count-1, item.data, item.extra);
					}
				}
			}
		});
		let slots = {};
		slots["slot_^0-"+(anim.slots.length-1)] = {input: true, output: true, maxStack: max}
		StorageInterface.createInterface(id, {
			slots: slots,
			addItemToSlot(name, item, maxCount){
				if(maxCount === void 0)
					maxCount = 64;
        let slot = this.getSlot(name);
        let maxStack = this.getSlotMaxStack(name);
        let added = DrawerAPI.addItemToSlot(item, slot, Math.min(maxCount, maxStack), maxStack);
        if(added > 0)
            this.setSlot(name, slot.id, slot.count, slot.data, slot.extra);
        return added;
			},
			getSlotMaxStack(name){
				return this.tileEntity.getConfig().size;
			}
		});
	},
	getRelativeCoords(x, y, z, side, anim){
		let pos = anim[side];
		return {x: x+pos.x, y: y+pos.y, z: z+pos.z};
	},
	getRotateAnimation(side){
		return [
			[0, 0, 0],
			[0, 0, 0],
			[0, Math.PI / 2, 0],
			[0, Math.PI / 2, 0]
		][side];
	}
};
let places = {};
let isItemSpendingAllowed = Game.isItemSpendingAllowed;
Callback.addCallback("ItemUse", function(coords, item, block){
	if(DrawerAPI.drawers.indexOf(block.id) != -1 && Block.placeFuncs[item.id]){
		places[item.id] = Block.placeFuncs[item.id];
		Block.placeFuncs[item.id] = function(){};
		Game.isItemSpendingAllowed = function(){
			return false;
		}
	}
}, 2);
Callback.addCallback("ItemUse", function(coords, item, block){
	if(places[item.id]){
		Block.placeFuncs[item.id] = places[item.id];
		places[item.id] = undefined;
		Game.isItemSpendingAllowed = isItemSpendingAllowed;
	}
}, -2);




// file: models/storage_0.js

//create Reider ___ size - 16
let storage_0 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0.0625, 1, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0, 0, 1, 0.0625, 0.0625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0, 0.0625, 0, 0.0625, 1, 0.0625, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.9375, 0.0625, 0, 1, 1, 0.0625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.0625, 0.9375, 0, 0.9375, 1, 0.0625, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/storage_1.js

//create Reider ___ size - 16
let storage_1 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0, 0.9375, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.9375, 0, 0, 1, 0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.9375, 0.0625, 0.9375, 1, 1, 1, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.9375, 0.0625, 0, 1, 1, 0.0625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.9375, 0.9375, 0.0625, 1, 1, 0.9375, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/storage_2.js

//create Reider ___ size - 16
let storage_2 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.0625, 0, 0, 1, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0, 0, 0.0625, 0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0, 0.0625, 0.9375, 0.0625, 1, 1, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0, 0.0625, 0, 0.0625, 1, 0.0625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0, 0.9375, 0.0625, 0.0625, 1, 0.9375, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/storage_3.js

//create Reider ___ size - 16
let storage_3 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0, 1, 1, 0.9375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0, 0.9375, 1, 0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0, 0.0625, 0.9375, 0.0625, 1, 1, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.9375, 0.0625, 0.9375, 1, 1, 1, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.0625, 0.9375, 0.9375, 0.9375, 1, 1, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/half_storage_0.js

//create Reider ___ size - 16
let half_storage_0 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0.5625, 1, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0, 0.5, 1, 0.0625, 0.5625, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0, 0.9375, 0.5, 1, 1, 0.5625, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0, 0.0625, 0.5, 0.0625, 0.9375, 0.5625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.9375, 0.0625, 0.5, 1, 0.9375, 0.5625, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/half_storage_1.js

//create Reider ___ size - 16
let half_storage_1 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0, 1, 1, 0.4375, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0, 0, 0.4375, 1, 0.0625, 0.5, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0, 0.9375, 0.4375, 1, 1, 0.5, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0, 0.0625, 0.4375, 0.0625, 0.9375, 0.5, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.9375, 0.0625, 0.4375, 1, 0.9375, 0.5, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/half_storage_2.js

//create Reider ___ size - 16
let half_storage_2 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0.5625, 0, 0, 1, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.5, 0, 0, 0.5625, 0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.5, 0.9375, 0, 0.5625, 1, 1, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.5, 0.0625, 0, 0.5625, 0.9375, 0.0625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.5, 0.0625, 0.9375, 0.5625, 0.9375, 1, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: models/half_storage_3.js

//create Reider ___ size - 16
let half_storage_3 = (function(obj, texture_default, data_default){
	obj = obj || {};
	const texture = texture_default || 1, data = data_default || 0;
	let model = new RenderUtil.Model();
	model.addBoxByBlock("cube", 0, 0, 0, 0.4375, 1, 1, obj["cube"] ? obj["cube"].texture : texture, obj["cube"] ? obj["cube"].data : data);
	model.addBoxByBlock("cube_2", 0.4375, 0, 0, 0.5, 0.0625, 1, obj["cube_2"] ? obj["cube_2"].texture : texture, obj["cube_2"] ? obj["cube_2"].data : data);
	model.addBoxByBlock("cube_3", 0.4375, 0.9375, 0, 0.5, 1, 1, obj["cube_3"] ? obj["cube_3"].texture : texture, obj["cube_3"] ? obj["cube_3"].data : data);
	model.addBoxByBlock("cube_4", 0.4375, 0.0625, 0, 0.5, 0.9375, 0.0625, obj["cube_4"] ? obj["cube_4"].texture : texture, obj["cube_4"] ? obj["cube_4"].data : data);
	model.addBoxByBlock("cube_5", 0.4375, 0.0625, 0.9375, 0.5, 0.9375, 1, obj["cube_5"] ? obj["cube_5"].texture : texture, obj["cube_5"] ? obj["cube_5"].data : data);
	return model;
});//boxes - 5




// file: api/ModelType.js

let ModelType = {
	full: [storage_3, storage_0, storage_1, storage_2],
	helf: [half_storage_1, half_storage_0, half_storage_3, half_storage_2]
};
let AnimationPos = {
	full: [{x: 0, y: 0, z: .4},
		{x: 0, y: 0, z: -.46},
		{x: .36, y: 0, z: 0},
		{x: -.5, y: 0, z: 0}],
	helf: [{x: 0, y: 0, z: .4-.5},
		{x: 0, y: 0, z: -.46+.5},
		{x: .36-.5, y: 0, z: 0},
		{x: -.5+.5, y: 0, z: 0}],
};
let AnimationOffset = {
	noy: [
		{x: 0, y: 0, z: 0},
		{x: 0, y: 0, z: 0},
		{x: 0, y: 0, z: 0},
		{x: 0, y: 0, z: 0}
	],
	up: [
		{x: 0, y: .21, z: 0},
		{x: 0, y: .21, z: 0},
		{x: 0, y: .21, z: 0},
		{x: 0, y: .21, z: 0}
	],
	down: [
		{x: 0, y: -.26, z: 0},
		{x: 0, y: -.26, z: 0},
		{x: 0, y: -.26, z: 0},
		{x: 0, y: -.26, z: 0}
	],
	
	left_up: [
		{x: -.3, y: .21, z: 0},
		{x: .18, y: .21, z: -.05},
		{x: .055, y: .21, z: -.23},
		{x: 0, y: .21, z: -.3}
	],
	right_up: [
		{x: .23, y: .21, z: 0},
		{x: -.25, y: .21, z: -.05},
		{x: .055, y: .21, z: .23},
		{x: 0, y: .21, z: .23}
	],
	left_down: [
		{x: -.3, y: -.26, z: 0},
		{x: .18, y: -.26, z: -.05},
		{x: .055, y: -.3, z: -.23},
		{x: 0, y: -.26, z: -.3}
	],
	right_down: [
		{x: .23, y: -.26, z: 0},
		{x: -.25, y: -.26, z: -.05},
		{x: .055, y: -.26, z: .23},
		{x: 0, y: -.25, z: .23}
	]
}

function createUI(obj){
	obj.elements = obj.elements||{};
	obj.drawing = obj.drawing||[];
	let draw = [];
	draw.push({type: "color", color: android.graphics.Color.argb(0, 0, 0, 0)});
	draw.push({type: "frame", bitmap: "classic_frame_bg_light", scale: 5, width: 1000, height: 824, y: 50});
	for(let i in obj.drawing)
		draw.push(obj.drawing[i]);
	obj.elements["close"] = {type: "close_button", bitmap: "classic_close_button", scale: 5, x: 925, y: 55};
	let ui = new UI.Window({ 
		location: {
			x: (1000-UI.getScreenHeight())/2,
			y: 50, 
			height: UI.getScreenHeight(),
			width: UI.getScreenHeight()
		},
		drawing: draw,
		elements: obj.elements
	});
	ui.setBlockingBackground(true);
	ui.setInventoryNeeded(true);
	let cont = ui.getContent();
	for(let i = 0;i < 7;i++)
		cont.elements["update_"+i] = {type: "slot", x: 125 + (i*105), y: 300, size: 100, isValid(id){
			return DrawerAPI.isConfig(id);
		}, maxStackSize:1};
	ui.setContent(cont);
	(function(xi, yi, size, ui){
		let cont = ui.getContent();
		for(let y = 0;y < 4;y++){
		for(let x = 0;x < 9;x++){
				cont.elements["slot"+y+x] = {type: "invSlot", x: xi+((size+5)*x), y: y == 0 ? yi : ((yi-(size+5)*3)-(size+15))+((size+5)*y), index: x+(9*y), size: size};
			}
		}
		ui.setContent(cont);
	})(75, 740, 90, ui);
	return ui;
}

let UI_Slot_1 = createUI({
	elements:{
		"slot_0": {type: "slot", x: 450, y: 100, size: 100}
	}
});

let UI_Slot_2 = createUI({
	elements:{
		"slot_0": {type: "slot", x: 400, y: 100, size: 100},
		"slot_1": {type: "slot", x: 500, y: 100, size: 100}
	}
});

let UI_Slot_4 = createUI({
	elements:{
		"slot_0": {type: "slot", x: 400, y: 100, size: 100},
		"slot_1": {type: "slot", x: 500, y: 100, size: 100},
		"slot_2": {type: "slot", x: 400, y: 200, size: 100},
		"slot_3": {type: "slot", x: 500, y: 200, size: 100}
	}
});

let StorageType = {
	slot_full_1: {
		anim_pos: AnimationPos.full,
		gui: UI_Slot_1,
		slots: [
			{offset: AnimationOffset.noy, click: [0, 0, 1, 1], size: .8}
		]
	},
	slot_helf_1: {
		anim_pos: AnimationPos.helf,
		gui: UI_Slot_1,
		slots: [
			{offset: AnimationOffset.noy, click: [0, 0, 1, 1], size: .8}
		]
	},
	slot_2: {
		anim_pos: AnimationPos.full,
		gui: UI_Slot_2,
		slots: [
			{offset: AnimationOffset.up, click: [0, .5, 1, 1], size: .4},
			{offset: AnimationOffset.down, click: [0, 0, 1, .5], size: .4}
		]
	},
	slot_helf_2: {
		anim_pos: AnimationPos.helf,
		gui: UI_Slot_2,
		slots: [
			{offset: AnimationOffset.up, click: [0, .5, 1, 1], size: .4},
			{offset: AnimationOffset.down, click: [0, 0, 1, .5], size: .4}
		]
	},
	slot_4: {
		anim_pos: AnimationPos.full,
		gui: UI_Slot_4,
		slots: [
			{offset: AnimationOffset.left_up, click: [0, .5, .5, 1], size: .4},
			{offset: AnimationOffset.right_up, click: [.5, .5, 1, 1], size: .4},
			{offset: AnimationOffset.left_down, click: [0, 0, .5, .45], size: .4},
			{offset: AnimationOffset.right_down, click: [.5, 0, 1, .5], size: .4}
		]
	},
	slot_helf_4: {
		anim_pos: AnimationPos.helf,
		gui: UI_Slot_4,
		slots: [
			{offset: AnimationOffset.left_up, click: [0, .5, .5, 1], size: .4},
			{offset: AnimationOffset.right_up, click: [.5, .5, 1, 1], size: .4},
			{offset: AnimationOffset.left_down, click: [0, 0, .5, .45], size: .4},
			{offset: AnimationOffset.right_down, click: [.5, 0, 1, .5], size: .4}
		]
	},
}




// file: items/upgrade.js

Translation.addTranslation("Upgrade Template", {
	ru: "Шаблон улучшения"
});

IDRegistry.genItemID("upgrade_template"); 
Item.createItem("upgrade_template", "Upgrade Template", {name: "upgrade_template", meta: 0}, {stack: 16});

Translation.addTranslation("Storage Upgrade (I)", {
	ru: "Улучшение Хранилища (I)"
});

IDRegistry.genItemID("upgrade_obsidian"); 
Item.createItem("upgrade_obsidian", "Storage Upgrade (I)", {name: "upgrade_obsidian", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_obsidian, {
	max: 2
});


Translation.addTranslation("Storage Upgrade (II)", {
	ru: "Улучшение Хранилища (II)"
});
IDRegistry.genItemID("upgrade_iron"); 
Item.createItem("upgrade_iron", "Storage Upgrade (II)", {name: "upgrade_iron", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_iron, {
	max: 4
});

Translation.addTranslation("Storage Upgrade (III)", {
	ru: "Улучшение Хранилища (III)"
});
IDRegistry.genItemID("upgrade_gold"); 
Item.createItem("upgrade_gold", "Storage Upgrade (III)", {name: "upgrade_gold", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_gold, {
	max: 6
});

Translation.addTranslation("Storage Upgrade (IV)", {
	ru: "Улучшение Хранилища (IV)"
});
IDRegistry.genItemID("upgrade_diamond"); 
Item.createItem("upgrade_diamond", "Storage Upgrade (IV)", {name: "upgrade_diamond", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_diamond, {
	max: 8
});

Translation.addTranslation("Storage Upgrade (IV)", {
	ru: "Улучшение Хранилища (V)"
});
IDRegistry.genItemID("upgrade_emerald"); 
Item.createItem("upgrade_emerald", "Storage Upgrade (V)", {name: "upgrade_emerald", meta: 0}, {stack: 16});

DrawerAPI.setConfig(ItemID.upgrade_emerald, {
	max: 10
});

Item.addCreativeGroup("drawer_upgrade", "Upgrade", [
	ItemID.upgrade_obsidian,
	ItemID.upgrade_iron,
	ItemID.upgrade_gold,
	ItemID.upgrade_diamond,
 ItemID.upgrade_emerald
]);




// file: blocks/storage_1_slot.js

let BLOCK_TYPE_WOOD = Block.createSpecialType({
	base: 4,
	sound: "wood"
});

Translation.addTranslation("Oak Drawers 1x1", {
	ru: "Основной Ящик 1x1"
});
Translation.addTranslation("Oak Drawers 1x2", {
	ru: "Основной Ящик 1x2"
});
Translation.addTranslation("Oak Drawers 2x2", {
	ru: "Основной Ящик 2x2"
});

IDRegistry.genBlockID("oakDrawer");
Block.createBlockWithRotation("oakDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer");
Block.createBlockWithRotation("brichDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer");
Block.createBlockWithRotation("acaciaDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer");
Block.createBlockWithRotation("bigDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer");
Block.createBlockWithRotation("spruceDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer");
Block.createBlockWithRotation("jungleDrawer", [{name: "Oak Drawers 1x1", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer, ModelType.full);
DrawerAPI.register(BlockID.oakDrawer, 2048);

DrawerAPI.setModel(BlockID.brichDrawer, ModelType.full);
DrawerAPI.register(BlockID.brichDrawer, 2048);

DrawerAPI.setModel(BlockID.acaciaDrawer, ModelType.full);
DrawerAPI.register(BlockID.acaciaDrawer, 2048);

DrawerAPI.setModel(BlockID.bigDrawer, ModelType.full);
DrawerAPI.register(BlockID.bigDrawer, 2048);

DrawerAPI.setModel(BlockID.spruceDrawer, ModelType.full);
DrawerAPI.register(BlockID.spruceDrawer, 2048);

DrawerAPI.setModel(BlockID.jungleDrawer, ModelType.full);
DrawerAPI.register(BlockID.jungleDrawer, 2048);

IDRegistry.genBlockID("oakDrawer_helf");
Block.createBlockWithRotation("oakDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer_helf");
Block.createBlockWithRotation("brichDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer_helf");
Block.createBlockWithRotation("acaciaDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer_helf");
Block.createBlockWithRotation("bigDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer_helf");
Block.createBlockWithRotation("spruceDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer_helf");
Block.createBlockWithRotation("jungleDrawer_helf", [{name: "Oak Drawers 1x1", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);


DrawerAPI.setModel(BlockID.oakDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.oakDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.brichDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.brichDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.acaciaDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.acaciaDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.bigDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.bigDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.spruceDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.spruceDrawer_helf, 1024, StorageType.slot_helf_1);

DrawerAPI.setModel(BlockID.jungleDrawer_helf, ModelType.helf);
DrawerAPI.register(BlockID.jungleDrawer_helf, 1024, StorageType.slot_helf_1);

IDRegistry.genBlockID("oakDrawer1x2");
Block.createBlockWithRotation("oakDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 2], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer1x2");
Block.createBlockWithRotation("brichDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 2], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer1x2");
Block.createBlockWithRotation("acaciaDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 2], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer1x2");
Block.createBlockWithRotation("bigDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 2], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer1x2");
Block.createBlockWithRotation("spruceDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 2], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer1x2");
Block.createBlockWithRotation("jungleDrawer1x2", [{name: "Oak Drawers 1x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 2], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.oakDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.brichDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.brichDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.acaciaDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.acaciaDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.bigDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.bigDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.spruceDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.spruceDrawer1x2, 1024, StorageType.slot_2);

DrawerAPI.setModel(BlockID.jungleDrawer1x2, ModelType.full);
DrawerAPI.register(BlockID.jungleDrawer1x2, 1024, StorageType.slot_2);

IDRegistry.genBlockID("oakDrawer1x2_helf");
Block.createBlockWithRotation("oakDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 2], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer1x2_helf");
Block.createBlockWithRotation("brichDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 2], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer1x2_helf");
Block.createBlockWithRotation("acaciaDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 2], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer1x2_helf");
Block.createBlockWithRotation("bigDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 2], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer1x2_helf");
Block.createBlockWithRotation("spruceDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 2], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer1x2_helf");
Block.createBlockWithRotation("jungleDrawer1x2_helf", [{name: "Oak Drawers 1x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 2], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.oakDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.brichDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.brichDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.acaciaDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.acaciaDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.bigDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.bigDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.spruceDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.spruceDrawer1x2_helf, 1024, StorageType.slot_helf_2);

DrawerAPI.setModel(BlockID.jungleDrawer1x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.jungleDrawer1x2_helf, 1024, StorageType.slot_helf_2);

IDRegistry.genBlockID("oakDrawer2x2");
Block.createBlockWithRotation("oakDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 4], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer2x2");
Block.createBlockWithRotation("brichDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 4], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer2x2");
Block.createBlockWithRotation("acaciaDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 4], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer2x2");
Block.createBlockWithRotation("bigDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 4], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer2x2");
Block.createBlockWithRotation("spruceDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 4], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer2x2");
Block.createBlockWithRotation("jungleDrawer2x2", [{name: "Oak Drawers 2x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 4], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.oakDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.brichDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.brichDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.acaciaDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.acaciaDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.bigDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.bigDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.spruceDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.spruceDrawer2x2, 512, StorageType.slot_4);

DrawerAPI.setModel(BlockID.jungleDrawer2x2, ModelType.full);
DrawerAPI.register(BlockID.jungleDrawer2x2, 512, StorageType.slot_4);

IDRegistry.genBlockID("oakDrawer2x2_helf");
Block.createBlockWithRotation("oakDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 4], ["drawers_oak_side", 0], ["drawers_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("brichDrawer2x2_helf");
Block.createBlockWithRotation("brichDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 4], ["drawers_birch_side", 0], ["drawers_birch_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("acaciaDrawer2x2_helf");
Block.createBlockWithRotation("acaciaDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 4], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("bigDrawer2x2_helf");
Block.createBlockWithRotation("bigDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 4], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer2x2_helf");
Block.createBlockWithRotation("spruceDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 4], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer2x2_helf");
Block.createBlockWithRotation("jungleDrawer2x2_helf", [{name: "Oak Drawers 2x2", texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 4], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]], inCreative: true}
], BLOCK_TYPE_WOOD);

DrawerAPI.setModel(BlockID.oakDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.oakDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.brichDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.brichDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.acaciaDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.acaciaDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.bigDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.bigDrawer2x2_helf, 512, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.spruceDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.spruceDrawer2x2_helf, 128, StorageType.slot_helf_4);

DrawerAPI.setModel(BlockID.jungleDrawer2x2_helf, ModelType.helf);
DrawerAPI.register(BlockID.jungleDrawer2x2_helf, 128, StorageType.slot_helf_4);

Item.addCreativeGroup("drawer", "Drawer", DrawerAPI.drawers);




// file: Workbench.js

Callback.addCallback("PostLoaded", function () {
Recipes.addShaped({id: BlockID.oakDrawer, count: 1, data: 0}, [
"aaa",
" b ",
"aaa"
], ['a', 17, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.brichDrawer, count: 1, data: 0}, [
"aaa",
" b ",
"aaa"
], ['a', 17, 2, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.bigDrawer, count: 1, data: 0}, [
"aaa",
" b ",
"aaa"
], ['a', 162, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.acaciaDrawer, count: 1, data: 0}, [
"aaa",
" b ",
"aaa"
], ['a', 162, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.spruceDrawer, count: 1, data: 0}, [
"aaa",
" b ",
"aaa"
], ['a', 17, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.jungleDrawer, count: 1, data: 0}, [
"aaa",
" b ",
"aaa"
], ['a', 17, 3, 'b', 54, 0]);

Recipes.addShaped({id: BlockID.oakDrawer_helf, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 17, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.brichDrawer_helf, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 17, 2, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.bigDrawer_helf, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 162, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.acaciaDrawer_helf, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 162, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.spruceDrawer_helf, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 17, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.jungleDrawer_helf, count: 1, data: 0}, [
" a ",
"aba",
" a "
], ['a', 17, 3, 'b', 54, 0]);

Recipes.addShaped({id: BlockID.oakDrawer1x2, count: 1, data: 0}, [
"aba",
"aaa",
"aba"
], ['a', 17, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.brichDrawer1x2, count: 1, data: 0}, [
"aba",
"aaa",
"aba"
], ['a', 17, 2, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.bigDrawer1x2, count: 1, data: 0}, [
"aba",
"aaa",
"aba"
], ['a', 162, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.acaciaDrawer1x2, count: 1, data: 0}, [
"aba",
"aaa",
"aba"
], ['a', 162, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.spruceDrawer1x2, count: 1, data: 0}, [
"aba",
"aaa",
"aba"
], ['a', 17, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.jungleDrawer1x2, count: 1, data: 0}, [
"aba",
"aaa",
"aba"
], ['a', 17, 3, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.oakDrawer1x2_helf, count: 1, data: 0}, [
"aba",
"   ",
"aba"
], ['a', 17, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.brichDrawer1x2_helf, count: 1, data: 0}, [
"aba",
"a a",
"aba"
], ['a', 17, 2, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.bigDrawer1x2_helf, count: 1, data: 0}, [
"aba",
"a a",
"aba"
], ['a', 162, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.acaciaDrawer1x2_helf, count: 1, data: 0}, [
"aba",
"a a",
"aba"
], ['a', 162, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.spruceDrawer1x2_helf, count: 1, data: 0}, [
"aba",
"a a",
"aba"
], ['a', 17, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.jungleDrawer1x2_helf, count: 1, data: 0}, [
"aba",
"a a",
"aba"
], ['a', 17, 3, 'b', 54, 0]);



Recipes.addShaped({id: BlockID.oakDrawer2x2, count: 1, data: 0}, [
"bab",
"aaa",
"bab"
], ['a', 17, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.brichDrawer2x2, count: 1, data: 0}, [
"bab",
"aaa",
"bab"
], ['a', 17, 2, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.bigDrawer2x2, count: 1, data: 0}, [
"bab",
"aaa",
"bab"
], ['a', 162, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.acaciaDrawer2x2, count: 1, data: 0}, [
"bab",
"aaa",
"bab"
], ['a', 162, 0]);
Recipes.addShaped({id: BlockID.spruceDrawer2x2, count: 1, data: 0}, [
"bab",
"aaa",
"bab"
], ['a', 17, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.jungleDrawer2x2, count: 1, data: 0}, [
"bab",
"aaa",
"bab"
], ['a', 17, 3, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.oakDrawer2x2_helf, count: 1, data: 0}, [
"bab",
"   ",
"bab"
], ['a', 17, 0, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.brichDrawer2x2_helf, count: 1, data: 0}, [
"bab",
"   ",
"bab"
], ['a', 17, 2, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.bigDrawer2x2_helf, count: 1, data: 0}, [
"bab",
"   ",
"bab"
], ['a', 162, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.acaciaDrawer2x2_helf, count: 1, data: 0}, [
"bab",
"   ",
"bab"
], ['a', 162, 0]);
Recipes.addShaped({id: BlockID.spruceDrawer2x2_helf, count: 1, data: 0}, [
"bab",
"   ",
"bab"
], ['a', 17, 1, 'b', 54, 0]);
Recipes.addShaped({id: BlockID.jungleDrawer2x2_helf, count: 1, data: 0}, [
"bab",
"   ",
"bab"
], ['a', 17, 3, 'b', 54, 0]);


let arr = DrawerAPI.drawers;
for(let i in arr)
Recipes.addShaped({id: ItemID.upgrade_template, count: 1, data: 0}, [
"aaa",
"asa",
"aaa"
], ['a', 280, 0, "s", arr[i], 0]);

Recipes.addShaped({id: ItemID.upgrade_obsidian, count: 1, data: 0}, [
"aga",
"gsg",
"aga"
], ['a', VanillaBlockID.obsidian, 0, 'g', 280, 0, "s", ItemID.upgrade_template, 0]);

Recipes.addShaped({id: ItemID.upgrade_iron, count: 1, data: 0}, [
"aga",
"gsg",
"aga"
], ['a', 265, 0, 'g', 280, 0, "s", ItemID.upgrade_obsidian, 0]);

Recipes.addShaped({id: ItemID.upgrade_gold, count: 1, data: 0}, [
"aga",
"gsg",
"aga"
], ['a', 266, 0, 'g', 280, 0, "s", ItemID.upgrade_iron, 0]);

Recipes.addShaped({id: ItemID.upgrade_diamond, count: 1, data: 0}, [
"aga",
"gsg",
"aga"
], ['a', 264, 0, 'g', 280, 0, "s", ItemID.upgrade_gold, 0]);

Recipes.addShaped({id: ItemID.upgrade_emerald, count: 1, data: 0}, [
"aga",
"gsg",
"aga"
], ['a', VanillaItemID.emerald, 0, 'g', 280, 0, "s", ItemID.upgrade_diamond, 0]);
});




// file: api/shared.js

ModAPI.registerAPI("DrawerAPI", {
 ModelType: ModelType,
 StorageType: StorageType,
 DrawerAPI: DrawerAPI,
 requireGlobal(cmd){
  return eval(cmd);
 }
});




