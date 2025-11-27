Translation.addTranslation("Wooden Transport Pipe", {
	ru: "Деревянная транспортная труба"
});
IDRegistry.genBlockID("pipeItemWooden"); 
Block.createBlock("pipeItemWooden", [
	{name: "Wooden Transport Pipe", texture: [["pipe_wood",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemWooden,count: 4,data: 0}, [ 
	"aba"
],[
	'a', 5,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemWooden, 0, [
	{ id: 5, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */


FactAPI.render.setupWireasRender(BlockID.pipeItemWooden,0.5,[
	{name:"item-pipe",add:false},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemWooden,{});

ICRender.getGroup("item-wood-pipe").add(BlockID.pipeItemWooden, -1); 
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemWooden, -1); 


TileEntity.registerPrototype(BlockID.pipeItemWooden, {
	defaultValues: {
		containerIndex: 0
	},

	getTransportSlots: function () {
		return {};
	},
	
	getTransportingDirections:function(item){
		var pos = item.position;
		var dir = item.direction;
		var list = Pipe.findDirections(pos.x,pos.y,pos.z);
		var res = Pipe.filterDirections(list,dir);
		var cur = [];
		for(var i in res){
			var d = res[i];
			if(World.getBlockID(this.x+d.x,this.y+d.y,this.z+d.z)!=BlockID.pipeItemEmerald&&
				World.getBlockID(this.x+d.x,this.y+d.y,this.z+d.z)!=BlockID.pipeItemWooden
			){
				cur.push(d)
			}
		}
		return cur;
	},

	tick: function () {
		if(World.getThreadTime()%20!=0)return
		var containerData = this.findContainer();
		if (containerData && containerData.container) {
			var item = this.getItemFrom(containerData.container,1);
			if (item) {
				var transportedItem =Pipe.item.deploy();
				transportedItem.setPosition(containerData.position);
				transportedItem.setItem(item);
				transportedItem.setTarget(this);
				transportedItem.setFriction(-0.03);
			}
			else {
				this.data.containerIndex++;
			}
		}
	},

	findContainer: function () {
		var directions = Pipe.findContainers(this.x,this.y,this.z);
		var dir = directions[this.data.containerIndex % directions.length];

		if (dir) {
			var container = World.getContainer(this.x + dir.x, this.y + dir.y, this.z + dir.z);
			return {
				container: container,
				direction: dir,
				position: {x: this.x + dir.x, y: this.y + dir.y, z: this.z + dir.z}
			};
		}
	},

	getItemFrom: function (container, maxCount) {

		var tileEntity = container.tileEntity;
		var slots = [];
		var slotsInitialized = false;
		var notNative = container.isContainer;

		if (tileEntity) {
			if (tileEntity.getTransportedItem) {
				tileEntity.getTransportedItem();
			}
			if (tileEntity.getTransportSlots) {
				slots = tileEntity.getTransportSlots().output || [];
				slotsInitialized = true;
			}
			if(tileEntity.getTransportSlotsOutput){
				var d = tileEntity.getTransportSlotsOutput();
				slotsInitialized = true;
				for(var i in (d.directions)){
					var dir = d.directions[i];
					if(tileEntity.x+dir.x==this.x&&tileEntity.y+dir.y==this.y&&tileEntity.z+dir.z==this.z){
						slots = d.slots || [];
						slotsInitialized = true;
					}
				}
			}
		}

		if (!slotsInitialized) {
			if (notNative) {
				for (var name in container.slots) {
					slots.push(name);
				}
			} else {
				for (var index = 0; index < container.getSize(); index++) {
					slots.push(index);
				}
			}
		}

		var item = null;
		for (var i in slots) {
			var slot = container.getSlot(slots[i]);
			if (slot.id > 0) {
				var count = Math.min(maxCount, slot.count);
				item = {id: slot.id, count: count, data: slot.data};
				slot.count -= count;

				if(!notNative)
					container.setSlot(i, slot.id, slot.count, slot.data);
				break;
			}
		}
		if (notNative)
			container.validateAll();

		return item;
	}
});