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