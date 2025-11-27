/*
BUILD INFO:
  dir: src
  target: main.js
  files: 13
*/



// file: Header.js

IMPORT("Pipe");
IMPORT("ItemDictionary");

var FactAPI={}

FactAPI.render = {
    addStandartWireConnections: function (id) {
        ICRender.getGroup("ic-wire").add(id, -1);
        ICRender.getGroup("rf-wire").add(id, -1);
    },
    addPipeConnections: function (id, item, liquid) {
        if (item) ICRender.getGroup("item-pipe").add(id, -1);
        if (liquid) ICRender.getGroup("liquid-pipe").add(id, -1);
    },
    setupWireasRender: function (id, width, groups) {
        var render = new ICRender.Model();
        BlockRenderer.setStaticICRender(id, 0, render);
        var boxes = [
            { side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2] },
            { side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2] },
            { side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2] },
            { side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2] },
            { side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1] },
            { side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2] },
        ]
        for (var i in groups) {
            var gn = groups[i];
            var group = ICRender.getGroup(gn.name);
            if (gn.add) group.add(id, -1);
            for (var i in boxes) {
                var box = boxes[i];
                var model = BlockRenderer.createModel();
                model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
                render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
            }
        }
        var model = BlockRenderer.createModel();
        model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
        render.addEntry(model);
        width = Math.max(width, 0.5);
        Block.setBlockShape(id, { x: 0.5 - width / 2, y: 0.5 - width / 2, z: 0.5 - width / 2 }, { x: 0.5 + width / 2, y: 0.5 + width / 2, z: 0.5 + width / 2 });

    }
}

FactAPI.render.addPipeConnections(54, 1);
FactAPI.render.addPipeConnections(61, 1);
FactAPI.render.addPipeConnections(62, 1);
FactAPI.render.addPipeConnections(154, 1);


Translation.addTranslation("Iron Wrench", {
    ru: "Железный ключ"
});

IDRegistry.genItemID("factoryWrench");
Item.createItem("factoryWrench", "Iron Wrench", { name: "factory_wrench", meta: 0 });


Recipes.addShaped({ id: ItemID.factoryWrench, count: 1, data: 0 }, [
    "a a",
    " a ",
    " a "
],[
    'a', 265, 0
    ]);
ItemDictionary.setItemCathegory(ItemID.factoryWrench, "wrench");




// file: pipe/Item_wooden.js

Translation.addTranslation("Wooden Transport Pipe", {
	ru: "Деревянная транспортная труба"
});
IDRegistry.genBlockID("pipeItemWooden"); 
Block.createBlock("pipeItemWooden", [
	{name: "Wooden Transport Pipe", texture: [["pipe_wood",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemWooden,count: 1,data: 0}, [ 
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




// file: pipe/Item_emerald.js

Translation.addTranslation("Emerald Transport Pipe", {
	ru: "Изумрудная транспортная труба"
});
IDRegistry.genBlockID("pipeItemEmerald"); 
Block.createBlock("pipeItemEmerald", [
	{name: "Emerald Transport Pipe", texture: [["pipe_emerald",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemEmerald,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 388,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemEmerald, 0, [
	{ id: 388, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */


FactAPI.render.setupWireasRender(BlockID.pipeItemEmerald,0.5,[
	{name:"item-pipe",add:false},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemEmerald,{});

ICRender.getGroup("item-wood-pipe").add(BlockID.pipeItemEmerald, -1); 
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemEmerald, -1); 


var ui_emerald_pipe= new UI.StandartWindow({
	standart: {
		header: {text: {text: "Emerald Pipe/Изумрудная труба"}},
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

TileEntity.registerPrototype(BlockID.pipeItemEmerald, {
	defaultValues: {
		containerIndex: 0
	},

	getGuiScreen:function(){
		return ui_emerald_pipe;
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
			if (slot.id > 0&&this.canGet(slot)) {
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
	},
	canGet:function(item){
		for(var i = 1;i<7;i++){
			var slot=this.container.getSlot("slot"+i);
			if(slot.id==item.id&&slot.data==item.data){
				return true
			}
		}
		return false
	}
});




// file: pipe/Item_cobblestone.js

Translation.addTranslation("Cobblestone Transport Pipe", {
	ru: "Булыжниковая транспортная труба"
});
IDRegistry.genBlockID("pipeItemCobblestone"); 
Block.createBlock("pipeItemCobblestone", [
	{name: "Cobblestone Transport Pipe", texture: [["pipe_cobblestone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemCobblestone,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 4,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemCobblestone, 0, [
	{ id: 4, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemCobblestone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemCobblestone,{
	friction:0.001
});




// file: pipe/Item_stone.js

Translation.addTranslation("Stone Transport Pipe", {
	ru: "Каменая транспортная труба"
});
IDRegistry.genBlockID("pipeItemStone"); 
Block.createBlock("pipeItemStone", [
	{name: "Stone Transport Pipe", texture: [["pipe_stone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemStone,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 1,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemStone, 0, [
	{ id: 1, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemStone,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
	{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemStone,{
	friction:0.0005
});




// file: pipe/Item_void.js

Translation.addTranslation("Void Transport Pipe", {
	ru: "Пустотная транспортная труба"
});
IDRegistry.genBlockID("pipeItemVoid"); 
Block.createBlock("pipeItemVoid", [
	{name: "Void Transport Pipe", texture: [["pipe_void",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemVoid,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 263,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemVoid, 0, [
	{ id: 263, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); 
*/
FactAPI.render.setupWireasRender(BlockID.pipeItemVoid,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemVoid,{
	friction:-0.0005
});

TileEntity.registerPrototype(BlockID.pipeItemVoid,{
	setPipeFunctions:function(item){
		item.destroySelf();
	}
});




// file: pipe/Item_quartz.js

Translation.addTranslation("Quartz Transport Pipe", {
	ru: "Кварцевая транспортная труба"
});
IDRegistry.genBlockID("pipeItemQuartz"); 
Block.createBlock("pipeItemQuartz", [
	{name: "Quartz Transport Pipe", texture: [["pipe_quartz",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemQuartz,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 406,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemQuartz, 0, [
	{ id: 406, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemQuartz,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemQuartz,{
	friction:0
});




// file: pipe/Item_golden.js

Translation.addTranslation("Golden Transport Pipe", {
	ru: "Золотая транспортная труба"
});
IDRegistry.genBlockID("pipeItemGolden"); 
Block.createBlock("pipeItemGolden", [
	{name: "Golden Transport Pipe", texture: [["pipe_gold",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemGolden,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 266,0,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemGolden, 0, [
	{ id: 266, data:0, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemGolden,0.5,[
	{name:"item-pipe",add:true},
	{name:"item-wood-pipe",add:false},
		{name:"item-item-pipe",add:true},
	{name:"item-sandstone-pipe",add:false}
]);

Pipe.registerTile(BlockID.pipeItemGolden,{
	friction:-0.005
});




// file: pipe/Item_iron.js

Translation.addTranslation("Iron Transport Pipe", {ru: "Железная транспортная труба"});
IDRegistry.genBlockID("pipeItemIron");
Block.createBlock("pipeItemIron", [
	{name: "Iron Transport Pipe", texture: [["pipe_iron",0]], inCreative: true},
]);


IDRegistry.genBlockID("pipeItemIron_a");
Block.createBlock("pipeItemIron_a", [
	{name: "Iron Pipe", texture: [["pipe_iron",1]], inCreative: false}
]);

Recipes.addShaped({id: BlockID.pipeItemIron, count: 1, data: 0}, [
		"aba"
	], ['a', 265,0,'b',20,0]);

Pipe.registerTile(BlockID.pipeItemIron);

//model
var var1 = new ICRender.Model();
var var2 = new ICRender.Model();
var var3= new ICRender.Model();
var var4 = new ICRender.Model();
var var5 = new ICRender.Model();
var var6 = new ICRender.Model();

var width=0.5;

var box1=[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2];
var box2= [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2];
var box3=[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2];
var box4=[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2];
var box5=[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1];
var box6=[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2];

var group = ICRender.getGroup("item-pipe");
	group.add(BlockID.pipeItemIron, -1);
var group2 = ICRender.getGroup("item-wood-pipe");
var group3 = ICRender.getGroup("item-sandstone-pipe");
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemIron, -1);
Block.setBlockShape(BlockID.pipeItemIron, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});

var model = BlockRenderer.createModel();
model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, BlockID.pipeItemIron, 0);
var1.addEntry(model);
var2.addEntry(model);
var3.addEntry(model);
var4.addEntry(model);
var5.addEntry(model);
var6.addEntry(model);


var boxes1=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron}
];
var boxes2=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes3=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes4=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes5=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];
var boxes6=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemIron_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemIron_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemIron},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemIron_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemIron_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemIron_a}
];



for (var i in boxes1) {
	var box = boxes1[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes2) {
	var box = boxes2[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes3) {
	var box = boxes3[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes4) {
	var box = boxes4[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);	
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes5) {
	var box = boxes5[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes6) {
	var box = boxes6[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

	}


BlockRenderer.enableCoordMapping(BlockID.pipeItemIron,-1,var1);

TileEntity.registerPrototype(BlockID.pipeItemIron,{
	getTransportingDirections:function(item){
		var a=[];
		a.push(Pipe.directions[this.data.index]);
		return a
	},
	tick:function(){
		if(!this.data.index)this.data.index=0;
	},
	click:function(){
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			if(this.data.index<5)this.data.index++;
			else this.data.index=0;
			this.map();
			return;
		}
	},
	destroy:function(){
		BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
	},
	map:function(){
		var vis=[
			var1,var2,var3,var4,var5,var6
		];
		BlockRenderer.mapAtCoords(this.x,this.y,this.z,vis[this.data.index]);
	}
});




// file: pipe/Item_redstone.js

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




// file: pipe/Item_diamond.js

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
Recipes.addShaped({id: BlockID.pipeItemDiamond, count: 1, data: 0}, [
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




// file: pipe/Item_sandstone.js

Translation.addTranslation("Sandstone Transport Pipe", {
	ru: "Песчаниковая транспортная труба"
});
IDRegistry.genBlockID("pipeItemSandstone"); 
Block.createBlock("pipeItemSandstone", [
	{name: "Sandstone Transport Pipe", texture: [["pipe_sandstone",0]], inCreative: true}
]);

Recipes.addShaped({id: BlockID.pipeItemSandstone,count: 1,data: 0}, [ 
	"aba"
],[
	'a', 24,-1,
	'b', 20,0
]); 
/*
FactAPI.recipe.assemblerStation.register(BlockID.pipeItemSandstone, 0, [
	{ id: 24, data:-1, count: 2},
	{ id: 20, data: 0, count: 1}
]); */

FactAPI.render.setupWireasRender(BlockID.pipeItemSandstone,0.5,[
	{name:"item-wood-pipe",add:false},
	{name:"item-item-pipe",add:false},
	{name:"item-sandstone-pipe",add:true}
]);

Pipe.registerTile(BlockID.pipeItemSandstone,{
	friction:0.005,
	stopContainerAdding:true,
	getTransportingDirections: function(item){
		var pos = item.position;
		var dir = item.direction;
		var list = Pipe.findDirections(pos.x, pos.y, pos.z,true);
		var res = Pipe.filterDirections(list, dir);
		return res
	}
});




// file: integration/IC.js

//renders
ModAPI.addAPICallback("ICore", function(api){
	FactAPI.render.addPipeConnections(BlockID.primalGenerator,1);
	FactAPI.render.addPipeConnections(BlockID.geothermalGenerator,1);
	FactAPI.render.addPipeConnections(BlockID.compressor,1);
	FactAPI.render.addPipeConnections(BlockID.electricFurnace,1);
	FactAPI.render.addPipeConnections(BlockID.extractor,1);
	FactAPI.render.addPipeConnections(BlockID.inductionFurnace,1);
	FactAPI.render.addPipeConnections(BlockID.ironFurnace,1);
	FactAPI.render.addPipeConnections(BlockID.macerator,1);
	FactAPI.render.addPipeConnections(BlockID.massFabricator,1);
	FactAPI.render.addPipeConnections(BlockID.metalFormer,1);
	FactAPI.render.addPipeConnections(BlockID.oreWasher,1);
	FactAPI.render.addPipeConnections(BlockID.recycler,1);
	FactAPI.render.addPipeConnections(BlockID.thermalCentrifuge,1);
	FactAPI.render.addPipeConnections(BlockID.miner,1);
	FactAPI.render.addPipeConnections(BlockID.pump,1);

	
	
	
	Translation.addTranslation("Bronze Transport Pipe", {ru: "Бронзовая транспортная труба"});
IDRegistry.genBlockID("pipeItemBronze");
Block.createBlock("pipeItemBronze", [
	{name: "Bronze Transport Pipe", texture: [["pipe_bronze",0]], inCreative: true},
]);


IDRegistry.genBlockID("pipeItemBronze_a");
Block.createBlock("pipeItemBronze_a", [
	{name: "Iron Pipe", texture: [["pipe_bronze",1]], inCreative: false}
]);

Recipes.addShaped({id: BlockID.pipeItemBronze, count: 1, data: 0}, [
		"aba"
	], ['a',ItemID.ingotBronze,0,'b',20,0]);

Pipe.registerTile(BlockID.pipeItemBronze,{friction:0.002});

//model
var var1 = new ICRender.Model();
var var2 = new ICRender.Model();
var var3= new ICRender.Model();
var var4 = new ICRender.Model();
var var5 = new ICRender.Model();
var var6 = new ICRender.Model();

var width=0.5;

var box1=[0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2];
var box2= [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2];
var box3=[0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2];
var box4=[0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2];
var box5=[0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1];
var box6=[0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2];

var group = ICRender.getGroup("item-pipe");
	group.add(BlockID.pipeItemBronze, -1);
var group2 = ICRender.getGroup("item-wood-pipe");
var group3 = ICRender.getGroup("item-sandstone-pipe");
ICRender.getGroup("item-item-pipe").add(BlockID.pipeItemBronze, -1);
Block.setBlockShape(BlockID.pipeItemBronze, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});

var model = BlockRenderer.createModel();
model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, BlockID.pipeItemBronze, 0);
var1.addEntry(model);
var2.addEntry(model);
var3.addEntry(model);
var4.addEntry(model);
var5.addEntry(model);
var6.addEntry(model);


var boxes1=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze}
];
var boxes2=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes3=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes4=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes5=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze_a},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];
var boxes6=[
	{side: [1, 0, 0], box: box1, id:BlockID.pipeItemBronze_a},
	{side: [-1, 0, 0],box: box2, id:BlockID.pipeItemBronze_a},
	{side: [0, 1, 0], box: box3, id:BlockID.pipeItemBronze},
	{side: [0, -1, 0], box: box4,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, 1], box: box5,id:BlockID.pipeItemBronze_a},
	{side: [0, 0, -1], box: box6,id:BlockID.pipeItemBronze_a}
];



for (var i in boxes1) {
	var box = boxes1[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var1.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes2) {
	var box = boxes2[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var2.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);
}
for (var i in boxes3) {
	var box = boxes3[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var3.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes4) {
	var box = boxes4[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);	
	var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var4.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes5) {
	var box = boxes5[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
	var5.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

}
for (var i in boxes6) {
	var box = boxes6[i];
	var model = BlockRenderer.createModel();
	model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], box.id, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
	var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group2, 0);
		var6.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group3, 0);

	}


BlockRenderer.enableCoordMapping(BlockID.pipeItemBronze,-1,var1);

TileEntity.registerPrototype(BlockID.pipeItemBronze,{
	getTransportingDirections:function(item){
		var a=[];
		a.push(Pipe.directions[this.data.index]);
		return a
	},
	tick:function(){
		if(!this.data.index)this.data.index=0;
	},
	click:function(){
		if(ItemDictionary.isItemInCathegory(Player.getCarriedItem().id,"wrench")){
			if(this.data.index<5)this.data.index++;
			else this.data.index=0;
			this.map();
			return;
		}
	},
	destroy:function(){
		BlockRenderer.unmapAtCoords(this.x,this.y,this.z);
	},
	map:function(){
		var vis=[
			var1,var2,var3,var4,var5,var6
		];
		BlockRenderer.mapAtCoords(this.x,this.y,this.z,vis[this.data.index]);
	}
});
	
	
ItemDictionary.setItemCathegory(ItemID.wrench, "wrench");

});




