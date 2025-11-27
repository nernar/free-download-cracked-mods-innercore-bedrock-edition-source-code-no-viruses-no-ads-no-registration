/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 17
*/



// file: header.js

importLib("ToolType", "*");
importLib("energylib", "*");

var OP = EnergyTypeRegistry.assureEnergyType("OP", 0.5);

Game.message("Overcraft Mod Loaded! Version: 0.1 Open Beta");




// file: api/icrender.js

function TileRenderModel(id, data) {
    this.registerAsId = function (id, data) {
        var block = Unlimited.API.GetReal(id, data || 0);
        this.id = block.id;
        this.data = block.data;
        this.convertedId = this.id * 16 + this.data;

        if (this.convertedId) {
            ICRenderLib.registerTileModel(this.convertedId, this);
        }
        else {
            Logger.Log("tile model cannot be registred: block id is undefined or 0", "ERROR");
        }
    }

    this.cloneForId = function (id, data) {
        this.registerAsId(id, data);
    }

    this.registerAsId(id, data);

    this.boxes = [];
    this.dynamic = [];

    this.formatBox = function (x1, y1, z1, x2, y2, z2, block) {
        var M = 1.0;
        var box = [
            x1 * M, y1 * M, z1 * M,
            x2 * M, y2 * M, z2 * M,
        ];

        if (block) {
            block = Unlimited.API.GetReal(block.id, block.data);
            box.push(parseInt(block.id) || 0);
            box.push(parseInt(block.data) || 0)
        }
        else {
            box.push(-1);
            box.push(-1);
        }

        return box;
    }

    this.addBoxF = function (x1, y1, z1, x2, y2, z2, block) {
        this.boxes.push(this.formatBox(x1, y1, z1, x2, y2, z2, block));
    }

    this.addBox = function (x, y, z, size, block) {
        this.boxes.push(this.formatBox(
            x, y, z,
            (x + size.x),
            (y + size.y),
            (z + size.z),
            block
            )
        );
    }

    this.createCondition = function (x, y, z, mode) {
        var model = this;
        var condition = {
            x: x, y: y, z: z,
            mode: Math.max(0, mode || 0),

            boxes: [],

            addBoxF: function (x1, y1, z1, x2, y2, z2, block) {
                this.boxes.push(model.formatBox(x1, y1, z1, x2, y2, z2, block));
            },

            addBox: function (x, y, z, size, block) {
                this.boxes.push(model.formatBox(
                    x, y, z,
                    (x + size.x),
                    (y + size.y),
                    (z + size.z),
                    block
                    )
                );
            },

            tiles: {},
            tileGroups: [],

            addBlock: function (id, data) {
                var block = Unlimited.API.GetReal(id, data || 0);
                var convertedId = block.id * 16 + block.data;
                this.tiles[convertedId] = true;
            },

            addBlockGroup: function (name) {
                this.tileGroups.push(name);
            },

            addBlockGroupFinal: function (name) {
                var group = ICRenderLib.getConnectionGroup(name);
                for (var id in group) {
                    this.tiles[id] = true;
                }
            },

            writeCondition: function () {
                var output = parseInt(this.x) + " " + parseInt(this.y) + " " + parseInt(this.z) + " " + parseInt(this.mode) + "\n";

                for (var i in this.tileGroups) {
                    this.addBlockGroupFinal(this.tileGroups[i]);
                }

                var blocks = [];
                for (var id in this.tiles) {
                    blocks.push(id);
                }
                output += blocks.length + " " + blocks.join(" ") + "\n" + condition.boxes.length + "\n";

                for (var i in condition.boxes) {
                    output += condition.boxes[i].join(" ") + "\n";
                }

                return output;
            }
        };

        this.dynamic.push(condition);
        return condition;
    }

    this.connections = {};
    this.connectionGroups = [];
    this.connectionWidth = 0.5;
    this.hasConnections = false;

    this.setConnectionWidth = function (width) {
        this.connectionWidth = width;
    }

    this.addConnection = function (id, data) {
        var block = Unlimited.API.GetReal(id, data || 0);
        var convertedId = block.id * 16 + block.data;
        this.connections[convertedId] = true;
        this.hasConnections = true;
    }

    this.addConnectionGroup = function (name) {
        this.connectionGroups.push(name);
        this.hasConnections = true;
    }

    this.addConnectionGroupFinal = function (name) {
        var group = ICRenderLib.getConnectionGroup(name);
        for (var id in group) {
            this.connections[id] = true;
        }
    }

    this.addSelfConnection = function () {
        this.connections[this.convertedId] = true;
        this.hasConnections = true;
    }

    this.writeAsId = function (id) {
        var output = "";
        output += id + " " + (this.hasConnections ? 1 : 0) + "\n";
        output += this.boxes.length + "\n";

        for (var i in this.boxes) {
            output += this.boxes[i].join(" ") + "\n";
        }

        output += this.dynamic.length + "\n";
        for (var i in this.dynamic) {
            var condition = this.dynamic[i];
            output += condition.writeCondition();
        }

        for (var i in this.connectionGroups) {
            this.addConnectionGroupFinal(this.connectionGroups[i]);
        }

        var connections = [];
        for (var id in this.connections) {
            connections.push(id);
        }

        output += connections.length + " " + this.connectionWidth + "\n" + connections.join(" ");
        return output;
    }
}


var ICRenderLib = ModAPI.requireAPI("ICRenderLib");

if (!ICRenderLib) {
    var ICRenderLib = {
        /* model registry */
        tileModels: {},

        registerTileModel: function (convertedId, model) {
            this.tileModels[convertedId] = model;
        },

        /* output */
        writeAllData: function () {
            var output = "";
            var count = 0;
            for (var id in this.tileModels) {
                output += this.tileModels[id].writeAsId(id) + "\n\n";
                count++;
            }

            output = count + "\n\n" + output;
            FileTools.WriteText("games/com.mojang/mods/icrender", output);
        },

        /* connection groups functions */
        connectionGroups: {},

        addConnectionBlockWithData: function (name, blockId, blockData) {
            var group = this.connectionGroups[name];
            if (!group) {
                group = {};
                this.connectionGroups[name] = group;
            }

            var block = Unlimited.API.GetReal(blockId, blockData);
            group[block.id * 16 + block.data] = true;
        },

        addConnectionBlock: function (name, blockId) {
            for (var data = 0; data < 16; data++) {
                this.addConnectionBlockWithData(name, blockId, data);
            }
        },

        addConnectionGroup: function (name, blockIds) {
            for (var i in blockIds) {
                this.addConnectionBlock(name, blockIds[i]);
            }
        },

        getConnectionGroup: function (name) {
            return this.connectionGroups[name];
        },


        /* standart models */
        registerAsWire: function (id, connectionGroupName, width) {
            width = width || 0.5;

            var model = new TileRenderModel(id, 0);
            model.addConnectionGroup(connectionGroupName);
            model.addSelfConnection();
            model.setConnectionWidth(width);
            model.addBox(.5 - width / 2.0, .5 - width / 2.0, .5 - width / 2.0, {
                x: width,
                y: width,
                z: width,
            });

            this.addConnectionBlock(connectionGroupName, id);
        }
    };


    ModAPI.registerAPI("ICRenderLib", ICRenderLib);
    Callback.addCallback("PostLoaded", function () {
        ICRenderLib.writeAllData();
    });
    Logger.Log("ICRender API was created and shared by " + __name__ + " with name ICRenderLib", "API");
}




// file: api/Config.js

var Config = {

    /* ----- ORE GEN ----- */
    genCopper: __config__.getBool("gen.copper"),
	genOvermaz: __config__.getBool("gen.overmaz"),
    genTin: __config__.getBool("gen.tin"),
    genLead: __config__.getBool("gen.lead"),
    genSilver: __config__.getBool("gen.silver"),
    genNickel: __config__.getBool("gen.mithril"),
    genPlatinum: __config__.getBool("gen.platinum"),
    genAdamantium: __config__.getBool("gen.adamantium"),
    genTitanium: __config__.getBool("gen.titanium"),
    genOryhalk: __config__.getBool("gen.oryhalk")

};




// file: api/MaterialRegistry.js

var MaterialRegistry = {

    defineMaterial: function (vanilla, name, armor, durabilityModifier, blockTexture) {

        if (!vanilla) {
        
IDRegistry.genItemID("ingot"+ name);
Item.createItem("ingot"+ name, name+ "ingot", {name:"ingot_"+ name.toLowerCase(), meta:0}, {});

IDRegistry.genItemID("nugget" + name);
            Item.createItem("nugget" + name, name + " nugget", {name: "nugget_" + name.toLowerCase(), meta: 0}, {});        
            
            IDRegistry.genItemID("axe" + name);
            Item.createItem("axe" + name, name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("hoe" + name);
            Item.createItem("hoe" + name, name + " hoe", {name: "hoe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("pickaxe" + name);
            Item.createItem("pickaxe" + name, name + " pickaxe", {
                name: "pickaxe_" + name.toLowerCase(),
                meta: 0
            }, {stack: 1});

            IDRegistry.genItemID("shovel" + name);
            Item.createItem("shovel" + name, name + " shovel", {
                name: "shovel_" + name.toLowerCase(),
                meta: 0
            }, {stack: 1});

            IDRegistry.genItemID("sword" + name);
            Item.createItem("sword" + name, name + " sword", {
                name: "sword_" + name.toLowerCase(),
                meta: 0
            }, {stack: 1});
            IDRegistry.genItemID("helmet" + name);
            Item.createArmorItem("helmet" + name, name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                type: "helmet",
                armor: armor[0],
                durability: durabilityModifier * 11,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("chestplate" + name);
            Item.createArmorItem("chestplate" + name, name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                type: "chestplate",
                armor: armor[1],
                durability: durabilityModifier * 16,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("leggings" + name);
            Item.createArmorItem("leggings" + name, name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                type: "leggings",
                armor: armor[2],
                durability: durabilityModifier * 15,
                texture: "armor/"+name.toLowerCase() + "_2.png"
            });

            IDRegistry.genItemID("boots" + name);
            Item.createArmorItem("boots" + name, name + " boots", {name: "boots_" + name.toLowerCase()}, {
                type: "boots",
                armor: armor[3],
                durability: durabilityModifier * 13,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });
            
IDRegistry.genBlockID("block" + name);
            Block.createBlock("block" + name, [
                {name: name + " block", texture: [[blockTexture, 0]], inCreative: true}
            ]);            
            ToolAPI.setTool(ItemID["axe" + name], name.toLowerCase(), ToolType.axe);
            ToolAPI.setTool(ItemID["hoe" + name], name.toLowerCase(), ToolType.hoe);
            ToolAPI.setTool(ItemID["pickaxe" + name], name.toLowerCase(), ToolType.pickaxe);
            ToolAPI.setTool(ItemID["shovel" + name], name.toLowerCase(), ToolType.shovel);
            ToolAPI.setTool(ItemID["sword" + name], name.toLowerCase(), ToolType.sword);
        }

        Callback.addCallback("PostLoaded", function () {
             if(ItemID["ingot"+name]){

            Recipes.addShaped({id: ItemID["sword" + name], count: 1, data: 0}, [
                " a ",
                " a ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["pickaxe" + name], count: 1, data: 0}, [
                "aaa",
                " s ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["shovel" + name], count: 1, data: 0}, [
                " a ",
                " s ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["axe" + name], count: 1, data: 0}, [
                "aa ",
                "as ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["hoe" + name], count: 1, data: 0}, [
                "aa ",
                " s ",
                " s "
            ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

            Recipes.addShaped({id: ItemID["helmet" + name], count: 1, data: 0}, [
                "aaa",
                "a a",
                "   "
            ], ['a', ItemID["ingot" + name], 0]);

            Recipes.addShaped({id: ItemID["chestplate" + name], count: 1, data: 0}, [
                "a a",
                "aaa",
                "aaa"
            ], ['a', ItemID["ingot" + name], 0]);

            Recipes.addShaped({id: ItemID["leggings" + name], count: 1, data: 0}, [
                "aaa",
                "a a",
                "a a"
            ], ['a', ItemID["ingot" + name], 0]);

            Recipes.addShaped({id: ItemID["boots" + name], count: 1, data: 0}, [
                "   ",
                "a a",
                "a a"
            ], ['a', ItemID["ingot" + name], 0]);
			
			Recipes.addShaped({id: BlockID["block" + name], count: 1, data: 0}, [
                "aaa",
                "aaa",
                "aaa"
            ], ['a', ItemID["ingot" + name], 0]);
            }
        });


    }

};




// file: api/MachineRegistry.js

var MachineRegistry = {
	machineIDs: {},

	isMachine: function(id){
		return this.machineIDs[id];
	},

	registerPrototype: function(id, Prototype){
		// register render
		ICRender.getGroup("ic-wire").add(id, -1);
		// register ID
		this.machineIDs[id] = true;
		// setup energy value
		if (Prototype.defaultValues){
			Prototype.defaultValues.energy = 0;
		}
		else{
			Prototype.defaultValues = {
				energy: 0
			};
		}
		// copy functions
		if(!Prototype.getEnergyStorage){
			Prototype.getEnergyStorage = function(){
				return 0;
			};
		}
		
	   ToolAPI.registerBlockMaterial(id, "stone");
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
	},

	// standart functions
	getMachineDrop: function(coords, blockID, level, standartDrop){
		BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		var item = Player.getCarriedItem();
		if(item.id==ItemID.wrench){
			ToolAPI.breakCarriedTool(10);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			if(Math.random() < 0.8){return [[blockID, 1, 0]];}
			return [[standartDrop || blockID, 1, 0]];
		}
		if(item.id==ItemID.electricWrench && item.data + 500 <= Item.getMaxDamage(item.id)){
			Player.setCarriedItem(item.id, 1, item.data + 500);
			World.setBlock(coords.x, coords.y, coords.z, 0);
			return [[blockID, 1, 0]];
		}
		if(level > 0){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	initModel: function(){
		if(this.data.isActive){
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	activateMachine: function(){
		if(!this.data.isActive){
			this.data.isActive = true;
			var block = World.getBlock(this.x, this.y, this.z);
			MachineRenderer.mapAtCoords(this.x, this.y, this.z, block.id, block.data);
		}
	},
	
	deactivateMachine: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
		}
	},
	
	basicEnergyReceiveFunc: function(type, src){
		var energyNeed = this.getEnergyStorage() - this.data.energy;
		this.data.energy += src.getAll(energyNeed);
	}
}




// file: api/MagicItemHelper.js

var MagicItem = {
	
add: function (r){
	
IDRegistry.genItemID(r.Item);	
Item.createItem(r.Item, r.Name, {name: r.Texture, meta: 0}, {stack: r.Stack});
 }
};




// file: core/materials.js

ToolAPI.addToolMaterial("copper", {durability: 175, level: 1, efficiency: 4, damage: 1, enchantability: 6});
ToolAPI.addToolMaterial("tin", {durability: 200, level: 1, efficiency: 5, damage: 1, enchantability: 7});
ToolAPI.addToolMaterial("silver", {durability: 350, level: 2, efficiency: 6, damage: 3, enchantability: 20});
ToolAPI.addToolMaterial("lead", {durability: 450, level: 1, efficiency: 5, damage: 2, enchantability: 9});
ToolAPI.addToolMaterial("platinum", {durability: 1700, level: 4, efficiency: 9, damage: 4, enchantability: 9});
ToolAPI.addToolMaterial("mithril", {durability: 512, level: 3, efficiency: 7, damage: 5, enchantability: 7});
ToolAPI.addToolMaterial("oryhalk", {durability: 1024, level: 4, efficiency: 8, damage: 5, enchantability: 8});
ToolAPI.addToolMaterial("titanium", {durability: 1900, level: 5, efficiency: 10, damage: 6, enchantability: 10});
ToolAPI.addToolMaterial("adamantium", {durability: 2100, level: 5, efficiency: 12, damage: 8, enchantability: 12});


MaterialRegistry.defineMaterial(false, "Copper", [1, 3, 3, 1], 6, "block_copper");
MaterialRegistry.defineMaterial(false, "Tin", [1, 3, 4, 1], 8, "block_tin");
MaterialRegistry.defineMaterial(false, "Silver", [2, 4, 4, 1], 11, "block_silver");
MaterialRegistry.defineMaterial(false, "Lead", [1, 3, 4, 2], 12, "block_lead");
MaterialRegistry.defineMaterial(false, "Platinum", [3, 6, 8, 3], 40, "block_platinum");
MaterialRegistry.defineMaterial(false, "Mithril", [3, 6, 8, 3], 40, "block_mithril");
MaterialRegistry.defineMaterial(false, "Titanium", [3, 6, 8, 3], 40, "block_titanium");
MaterialRegistry.defineMaterial(false, "Oryhalk", [3, 6, 8, 3], 40, "block_oryhalk");
MaterialRegistry.defineMaterial(false, "Adamantium", [3, 6, 8, 3], 40, "block_adamantium");






// file: blocks/furnace/Fuel.js

IDRegistry.genItemID("Synol"); 
Item.createItem("Synol", "Synol", {name: "kamen_sinola", meta: 0});
Recipes.addFurnaceFuel(ItemID.Synol, 0, 299);




// file: blocks/furnace/FurnaceHelper.js

var MachineRenderer = {
	data: {},
	setStandartModel: function(id, texture, rotation){
		if(rotation){
			var textures = [
				[texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]],
				[texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]],
				[texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]],
				[texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]]
			]
			for(var i = 0; i < 4; i++){
				var render = new ICRender.Model();
				var model = BlockRenderer.createTexturedBlock(textures[i]);
				render.addEntry(model);
				BlockRenderer.enableCoordMapping(id, i, render);
			}
		}else{
			var render = new ICRender.Model();
			var model = BlockRenderer.createTexturedBlock(texture);
			render.addEntry(model);
			BlockRenderer.enableCoordMapping(id, -1, render);
		}
	},
	
	registerRenderModel: function(id, texture, rotation){
		if(rotation){
			this.data[id] = [];
			var textures = [
				[texture[0], texture[1], texture[2], texture[3], texture[4], texture[5]],
				[texture[0], texture[1], texture[3], texture[2], texture[5], texture[4]],
				[texture[0], texture[1], texture[5], texture[4], texture[2], texture[3]],
				[texture[0], texture[1], texture[4], texture[5], texture[3], texture[2]]
			]
			for(var i = 0; i < 4; i++){
				var render = new ICRender.Model();
				var model = BlockRenderer.createTexturedBlock(textures[i]);
				render.addEntry(model);
				this.data[id].push(render);
			}
		}else{
			var render = new ICRender.Model();
			var model = BlockRenderer.createTexturedBlock(texture);
			render.addEntry(model);
			this.data[id] = [render];
		}
	},
	
	getRenderModel: function(id, data){
		var models = this.data[id];
		if(models){
			return models[data];
		}
		return 0;
	},
	
	mapAtCoords: function(x, y, z, id, data){
		var model = this.getRenderModel(id, data);
		if(model){
			BlockRenderer.mapAtCoords(x, y, z, model);
		}
	}
}

//Sounds API 
var Music = {
playSound:function(music_file)
{
var mPlayer = new android.media.MediaPlayer(); 
var path = __dir__ + "/sounds/" + music_file; 
try{
mPlayer.setDataSource(path);
mPlayer.prepare();
mPlayer.start();
}catch(err){
Game.message("Playing error: " + err);
}}};




// file: blocks/furnace/furnace.js

IDRegistry.genBlockID("adamantiumFurnace");
Block.createBlockWithRotation("adamantiumFurnace", [
	{name: "Adamantium furnace", texture: [["adamant_side", 0], ["adamant_top", 0], ["adamant_side", 0], ["adamant_front", 0], ["adamant_side", 0], ["adamant_side", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.adamantiumFurnace, [["adamant_side", 0], ["adamant_top", 0], ["adamant_side", 0], ["adamant_front", 0], ["adamant_side", 0], ["adamant_side", 0]], true);
MachineRenderer.registerRenderModel(BlockID.adamantiumFurnace, [["adamant_side", 0], ["adamant_top", 0], ["adamant_side", 0], ["adamant_active", 0], ["adamant_side", 0], ["adamant_side", 0]], true);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.adamantiumFurnace, count: 1, data: 0}, [
		" a ",
		"aba",
		"aaa"
	], ['a', ItemID.ingotAdamantium, 0, 'b', 61, 0]);
});


var guiAdamantiumFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Adamantium Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});

MachineRegistry.registerPrototype(BlockID.adamantiumFurnace, {
defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

getGuiScreen: function(){
		return guiAdamantiumFurnace;
	},
	
		addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(ItemID.Synol && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			if(__config__.access("Furnace sounds") == true){
			   Music.playSound('furnace.ogg');
            }
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 120){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 120);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = ItemID.Synol;
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});




// file: blocks/furnace/furnace1.js

IDRegistry.genBlockID("mithrilFurnace");
Block.createBlockWithRotation("mithrilFurnace", [
	{name: "Mithril furnace", texture: [["mithril_side", 0], ["mithril_top", 0], ["mithril_side", 0], ["mithril_front", 0], ["mithril_side", 0], ["mithril_side", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.mithrilFurnace, [["mithril_side", 0], ["mithril_top", 0], ["mithril_side", 0], ["mithril_front", 0], ["mithril_side", 0], ["mithril_side", 0]], true);
MachineRenderer.registerRenderModel(BlockID.mithrilFurnace, [["mithril_side", 0], ["mithril_top", 0], ["mithril_side", 0], ["mithril_active", 0], ["mithril_side", 0], ["mithril_side", 0]], true);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.mithrilFurnace, count: 1, data: 0}, [
		" a ",
		"aba",
		"aaa"
	], ['a', ItemID.ingotMithril, 0, 'b', 61, 0]);
});

var guimithrilFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Mithril Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});

MachineRegistry.registerPrototype(BlockID.mithrilFurnace, {
defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

getGuiScreen: function(){
		return guimithrilFurnace;
	},
	
		addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(ItemID.Synol && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			if(__config__.access("Furnace sounds") == true){
			   Music.playSound('furnace.ogg');
            }
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 130){
				if(__config__.access("Sound of the furnace")){
              Music.playSound('furnace.ogg');
            }
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 130);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = ItemID.Synol;
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});




// file: blocks/furnace/furnace2.js

IDRegistry.genBlockID("oryhalkFurnace");
Block.createBlockWithRotation("oryhalkFurnace", [
	{name: "Oryhalk furnace", texture: [["orichalk_side", 0], ["orichalk_top", 0], ["orichalk_side", 0], ["orichalk_front", 0], ["orichalk_side", 0], ["orichalk_side", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.oryhalkFurnace, [["orichalk_side", 0], ["orichalk_top", 0], ["orichalk_side", 0], ["orichalk_front", 0], ["orichalk_side", 0], ["orichalk_side", 0]], true);
MachineRenderer.registerRenderModel(BlockID.oryhalkFurnace, [["orichalk_side", 0], ["orichalk_top", 0], ["orichalk_side", 0], ["orichalk_active", 0], ["orichalk_side", 0], ["orichalk_side", 0]], true);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.oryhalkFurnace, count: 1, data: 0}, [
		" a ",
		"aba",
		"aaa"
	], ['a', ItemID.ingotOryhalk, 0, 'b', 61, 0]);
});

var guioryhalkFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Oryhalk Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});

MachineRegistry.registerPrototype(BlockID.oryhalkFurnace, {
defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

getGuiScreen: function(){
		return guioryhalkFurnace;
	},
	
		addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(ItemID.Synol && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			if(__config__.access("Furnace sounds") == true){
			   Music.playSound('furnace.ogg');
            }
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 120){
				if(__config__.access("Sound of the furnace")){
             Music.playSound('furnace.ogg');
            }
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 120);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = ItemID.Synol;
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});




// file: blocks/furnace/furnace3.js

IDRegistry.genBlockID("titaniumFurnace");
Block.createBlockWithRotation("titaniumFurnace", [
	{name: "Titanium furnace", texture: [["titan_side", 0], ["titan_top", 0], ["titan_side", 0], ["titan_front", 0], ["titan_side", 0], ["titan_side", 0]], inCreative: true}
]);
MachineRenderer.setStandartModel(BlockID.titaniumFurnace, [["titan_side", 0], ["titan_top", 0], ["titan_side", 0], ["titan_front", 0], ["titan_side", 0], ["titan_side", 0]], true);
MachineRenderer.registerRenderModel(BlockID.titaniumFurnace, [["titan_side", 0], ["titan_top", 0], ["titan_side", 0], ["titan_active", 0], ["titan_side", 0], ["titan_side", 0]], true);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.titaniumFurnace, count: 1, data: 0}, [
		" a ",
		"aba",
		"aaa"
	], ['a', ItemID.ingotTitanium, 0, 'b', 61, 0]);
});

var guititaniumFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Titanium Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_background", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "fire_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotFuel": {type: "slot", x: 441, y: 212},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});

MachineRegistry.registerPrototype(BlockID.titaniumFurnace, {
defaultValues: {
		progress: 0,
		burn: 0,
		burnMax: 0,
		isActive: false
	},

getGuiScreen: function(){
		return guititaniumFurnace;
	},
	
		addTransportedItem: function(self, item, direction){
		var fuelSlot = this.container.getSlot("slotFuel");
		if(ItemID.Synol && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
			var add = Math.min(item.count, 64 - slotFuel.count);
			item.count -= add;
			fuelSlot.id = item.id;
			fuelSlot.data = item.data;
			fuelSlot.count += add;
			if(!item.count){return;}
		}
		
		var sourceSlot = this.container.getSlot("slotSource");
		if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
			var add = Math.min(item.count, 64 - sourceSlot.count);
			item.count -= add;
			sourceSlot.id = item.id;
			sourceSlot.data = item.data;
			sourceSlot.count += add;
			if(!item.count){return;}
		}
	},
	
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		
		if(this.data.burn > 0){
			this.data.burn--;
		}
		if(this.data.burn==0 && result){
			this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
		}
		
		if(result && this.data.burn > 0){
			if(__config__.access("Furnace sounds") == true){
			   Music.playSound('furnace.ogg');
            }
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 105){
				if(__config__.access("Sound of the furnace")){
                Music.playSound('furnace.ogg');
            }
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else{
			this.data.progress = 0;
		}
		
		if(this.data.burn > 0){
			this.activate();
		}else{
			this.deactivate();
		}
		
		this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
		this.container.setScale("progressScale", this.data.progress / 105);
	},
	
	getFuel: function(slotName){
		var fuelSlot = this.container.getSlot(slotName);
		if(fuelSlot.id > 0){
			var burn = ItemID.Synol;
			if(burn){
				if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
					var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
					fuelSlot.id = empty.id;
					fuelSlot.data = empty.data;
					return burn;
				}
				fuelSlot.count--;
				this.container.validateSlot(slotName);
				return burn;
			}
		}
		return 0;
	},
	
	init: MachineRegistry.initModel,
	activate: MachineRegistry.activateMachine,
	deactivate: MachineRegistry.deactivateMachine,
});




// file: blocks/ores.js

IDRegistry.genBlockID("oreLead");
Block.createBlock("oreLead", [
    {name: "Lead ore", texture: [["ore_lead", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreAdamantium");
Block.createBlock("oreAdamantium", [
    {name: "Adamantium ore", texture: [["ore_adamantium", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreOryhalk");
Block.createBlock("oreOryhalk", [
    {name: "Oryhalk ore", texture: [["ore_oryhalk", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreTitanium");
Block.createBlock("oreTitanium", [
    {name: "Titanium ore", texture: [["ore_titanium", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreMithril");
Block.createBlock("oreMithril", [
    {name: "Mithril ore", texture: [["ore_mithril", 0]], inCreative: true}
]);

IDRegistry.genBlockID("orePlatinum");
Block.createBlock("orePlatinum", [
    {name: "Platinum ore", texture: [["ore_platinum", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreSilver");
Block.createBlock("oreSilver", [
    {name: "Silver ore", texture: [["ore_silver", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreTin");
Block.createBlock("oreTin", [
    {name: "Tin ore", texture: [["ore_tin", 0]], inCreative: true}
]);

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
    {name: "Copper ore", texture: [["ore_copper", 0]], inCreative: true}
]);

IDRegistry.genBlockID("SynolOre");
Block.createBlock("SynolOre", [
    {name: "Synol ore", texture: [["senol", 0]], inCreative: true}
]);

ToolAPI.registerBlockMaterialAsArray("stone", [BlockID.oreLead, BlockID.oreMithil, BlockID.orePlatinum, BlockID.oreSilver, BlockID.oreTin, BlockID.oreCopper, BlockID.oreAdamantium, BlockID.oreTitanium, BlockID.oreOryhalk, BlockID.SynolOre, BlockID.oreOvermaz]);
ToolAPI.registerBlockDiggingLevel(BlockID.SynolOre, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreLead, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreMithil, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.orePlatinum, 3);
ToolAPI.registerBlockDiggingLevel(BlockID.oreAdamantium, 4);
ToolAPI.registerBlockDiggingLevel(BlockID.oreSilver, 2);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTin, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreCopper, 1);
ToolAPI.registerBlockDiggingLevel(BlockID.oreTitanium, 4);
ToolAPI.registerBlockDiggingLevel(BlockID.oreOryhalk, 3);

Block.registerDropFunction("SynolOre", function(coords, blockID, blockData, level, enchant){
        return [[ItemID.Synol, 1, 0]]
		Player.addExperience(2);
    return [];
	
});

var OreGenerator = {
    random: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    generate: function (x, y, z, maxCount) {
        if (World.getBlock(x, y, z).id === 1) {
            GenerationUtils.setLockedBlock(x, y, z);
            for (var i = 1; i < this.random(1, maxCount); i++) {
                GenerationUtils.setLockedBlock(x + this.random(-1, 1), y + this.random(-1, 1), z + this.random(-1, 1));
            }
        }
    }
};

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {

    if (Config.genSinol) {
   
GenerationUtils.lockInBlock(BlockID.SynolOre, 0);
            for (var i = 0; i < 9; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 56, 85);
                OreGenerator.generate(coords.x, coords.y, coords.z, 10);
            }
}            

        if (Config.genCopper) {
            GenerationUtils.lockInBlock(BlockID.oreCopper, 0);
            for (var i = 0; i < 10; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 40, 75);
                OreGenerator.generate(coords.x, coords.y, coords.z, 10);
            }
        }

        if (Config.genTin) {
            GenerationUtils.lockInBlock(BlockID.oreTin, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 55);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
		
		if (Config.genOvermaz) {
            GenerationUtils.lockInBlock(BlockID.oreOvermaz, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 19, 54);
                OreGenerator.generate(coords.x, coords.y, coords.z, 5);
            }
        }

        if (Config.genLead) {
            GenerationUtils.lockInBlock(BlockID.oreLead, 0);
            for (var i = 0; i < 8; i++) {
                var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 35);
                OreGenerator.generate(coords.x, coords.y, coords.z, 8);
            }
        }
    

    if (Config.genSilver) {
        GenerationUtils.lockInBlock(BlockID.oreSilver, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 6);
        }
    }

    if (Config.genPlatinum) {
        GenerationUtils.lockInBlock(BlockID.orePlatinum, 0);
        for (var i = 0; i < 8; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 30);
            OreGenerator.generate(coords.x, coords.y, coords.z, 1);
        }
    }


});

Callback.addCallback("GenerateNetherChunk", function (chunkX, chunkZ) {
    if (Config.genMithril) {
        GenerationUtils.lockInBlock(BlockID.oreMithril, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 3);
        }
    }
    
if (Config.genAdamantium) {
        GenerationUtils.lockInBlock(BlockID.oreAdamantium, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 2);
        }
    }
});

Callback.addCallback("GenerateEndChunk", function (chunkX, chunkZ) {
    if (Config.genTitanium) {
        GenerationUtils.lockInBlock(BlockID.oreTitanium, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 3);
        }
    }
    
if (Config.genOryhalk) {
        GenerationUtils.lockInBlock(BlockID.oreOryhalk, 0);
        for (var i = 0; i < 6; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 3, 123);
            OreGenerator.generate(coords.x, coords.y, coords.z, 4);
        }
    }
});




// file: infobook.js

IDRegistry.genItemID("infobook"); 
Item.createItem("infobook", "Holy Book", {name: "info_book", meta: 0});

if(__config__.access("Holy book RU-EN") == false){
	
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("infobook", { 
item: ItemID.infobook, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "arrowRight", 
preLink: "arrowLeft", 
close: "cancel", 
}, 
				
pages: {
		
			"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Добро пожаловать, Искатель!", size: 22},
						{text: "Искатель, эта книга поможет и подскажет тебе в трудную минуту. Всего в ней 4 части: Основы, Магия, Индустрия и Исследования. Эта книга даст тебе основные знания о окружающем мире. Если ты хочешь узнать более, то тебе следует создать более продвинутые книги по одной из трех тем.", size: 15},
					]
				},
				
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Основы", size: 25, link: "basics"},
						{text: "Магия", size: 25, link: "magic"},
						{text: "Индустрия", size: 25, link: "industry"},
						{text: "Исследования", size: 25, link: "searching"},
						
					]
				}
			},
			
			"basics": {
				preLink: "default",
				nextLink: "basics2",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreCopper}
					],
					elements: [
						{text: "Медная руда", size: 20},
						{text: "Медная руда - это руда которую вы можете добыть даже деревянной киркой, инструменты из нее чуть хуже железных и чуть лучше каменных. Золотая середина, так сказать"},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTin}
					],
					
					elements: [
						{text: "Оловянная руда", size: 20},
						{text: "Эта руда практически аналогична железной, в чем то лучше, в чем то хуже. Олово или железо, решать вам"},
					]
				},
			},
			
			"basics2": {
				preLink: "basics",
				nextLink: "basics3",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreSilver}
					],
					elements: [
						{text: "Серебряная руда", size: 20}, 
						{text: "Руда, которая мощнее железа и олова вместе взятых. Если вы оборотень, то ее лучше не использовать."},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreLead}
					],
					elements: [
						{text: "Свинцовая руда", size: 20},
						{text: "Если вы хотите сделать из свинца инструменты, то лучше не надо. Сделайте из серебра или сразу из платины. Делать их из свинца не вижу смысла."},
					]
				}
			},
			
			
			"basics3": {
				preLink: "basics2",
				nextLink: "basics4",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.SynolOre}
					],
					elements: [
						{text: "Синол", size: 20}, 
						{text: "Синол используетса в качестве топлива для печек."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.orePlatinum}
					],
					elements: [
						{text: "Платиновая руда", size: 20}, 
						{text: "Довольно-таки неплохая руда. Лучшая руда в обычнoм мире."},
					]
				   }
			},
			
			
			"basics4": {
				preLink: "basics3",
				nextLink: "basics5",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreMithril}
					],
					elements: [
						{text: "Мифриловая руда", size: 20}, 
						{text: "Мифриловая руда которую можно найти только в аду.Вона не является лучше платиновой, но лучше оловянной и медной."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreAdamantium}
					],
					elements: [
						{text: "Адамантиевая руда", size: 20}, 
						{text: "Адамантиевая руда лучшая руда с всех.Из нее выходят лучшие инструменты и прочна броня.Адамантиеву руду можно найти в аду."},
					]
				   }
			},
			
			"basics5": {
				preLink: "basics4",
				nextLink: "default",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTitanium}
					],
					elements: [
						{text: "Титановая руда", size: 20}, 
						{text: "Титановую руду добыть не так просто.Сначала вам придется победить Эндер дракона.Титанова руда немного слабее адамантиевой."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreOryhalk}
					],
					elements: [
						{text: "Орхилаковая руда", size: 20}, 
						{text: "Орхилаковая руда последняя руда которая добавляется этой модификацией.Найти ее можно только в Эндер мире.По характеристикам она немного хуже титановой."},
					]
					
				   }
			},
}
});
});
}

if(__config__.access("Holy book RU-EN") == true){

ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
		
GuideAPI.registerGuide("infobook", { 
item: ItemID.infobook, 
debug: false, 
textures: { 
background: "guide_background", 
nextLink: "arrowRight", 
preLink: "arrowLeft", 
close: "cancel", 
}, 
				
pages: {
	"default": {
				nextLink: "test",
				left: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Welcome, Seeker!", size: 22},
						{text: "Seeker, this book will help and tell you in a difficult moment. There are 4 parts in it: Basics, Magic, Industry and Research. This book will give you basic knowledge about the world around you. If you want to learn more, then you should create more advanced books on one of three topics.", size: 15},
					]
				},
					
				right: {
					controller: PageControllers.BASIC_PAGE,
					elements: [
						{text: "Basics", size: 25, link: "basics"},
						{text: "Magic", size: 25, link: "magic"},
						{text: "Industry", size: 25, link: "industry"},
						{text: "Research", size: 25, link: "searching"},
						
					]
				}
			},
			
			"basics": {
				preLink: "default",
				nextLink: "basics2",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreCopper}
					],
					elements: [
						{text: "Copper ore", size: 20},
						{text: "Copper ore is an ore that you can get even with a wooden pickax, tools from it are slightly worse than iron ones and slightly better than stone ones. The golden mean, so to speak."},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTin}
					],
					
					elements: [
						{text: "Tin ore", size: 20},
						{text: "This ore is almost analogous to iron, in which it is better, in something worse. Tin or iron, it's up to you."},
					]
				},
			},
			
			"basics2": {
				preLink: "basics",
				nextLink: "basics3",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreSilver}
					],
					elements: [
						{text: "Silver ore", size: 20}, 
						{text: "Ore, which is more powerful than iron and tin combined. If you are a werewolf, it's best not to use it."},
						
					]
				},
				
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreLead}
					],
					elements: [
						{text: "Lead ore", size: 20},
						{text: "If you want to make tools out of lead, then you better not. Make out of silver or immediately out of platinum. I do not see the point in making them out of lead."},
					]
				}
			},
			
			"basics3": {
				preLink: "basics2",
				nextLink: "basics4",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.SynolOre}
					],
					elements: [
						{text: "Synol", size: 20}, 
						{text: "Synol is used as fuel for furnaces."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.orePlatinum}
					],
					elements: [
						{text: "Platinum ore", size: 20}, 
						{text: "Pretty good enough ore. The best ore in the ordinary world."},
					]
				   }
			},
			
			
			
			"basics4": {
				preLink: "basics3",
				nextLink: "basics5",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreMithril}
					],
					elements: [
						{text: "Mithril Ore", size: 20}, 
						{text: "Mithril ore that can only be found in hell. It is not better platinum, but better tin and copper."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreAdamantium}
					],
					elements: [
						{text: "Adamantium ore", size: 20}, 
						{text: "Adamantium ore is the best ore from all. From it come out the best tools and strong armor. Adamantieva ore can be found in hell."},
					]
				   }
			},
			
			"basics5": {
				preLink: "basics4",
				nextLink: "default",
				left: {
					controller: PageControllers.ITEM_PAGE,
					items: [
						{id: BlockID.oreTitanium}
					],
					elements: [
						{text: "Titanium Ore", size: 20}, 
						{text: "Titanium ore is not so easy to extract. First you have to defeat the Ender dragon. Titanium ore is slightly weaker than adamantium."},
						
					]		
			},
			
				right: {
					controller: PageControllers.ITEM_PAGE,
					items: [
					{id: BlockID.oreOryhalk}
					],
					elements: [
						{text: "Orchilak ore", size: 20}, 
						{text: "Orchilak ore is the last ore that is added by this modification. It can be found only in the Ender world. According to the characteristics, it is slightly worse than the titanium ore."},
					]
				   }
			},
	
	
	
}
});
});
}




// file: localize.js

/* ---- ORES ---- */
Translation.addTranslation("Adamantium ore", {ru: "Адамантиевая руда"});
Translation.addTranslation("Copper ore", {ru: "Медная руда"});
Translation.addTranslation("Tin ore", {ru: "Оловянная руда"});
Translation.addTranslation("Silver ore", {ru: "Серебряная руда"});
Translation.addTranslation("Lead ore", {ru: "Cвинцовая руда"});
Translation.addTranslation("Oryhalk ore", {ru: "Орхилаковая руда"});
Translation.addTranslation("Mithril ore", {ru: "Мифриловая руда"});
Translation.addTranslation("Titanium ore", {ru: "Титановая руда"});
Translation.addTranslation("Platinum ore", {ru: "Платиновая руда"});
Translation.addTranslation("Synol ore", {ru: "Синольная руда"});
/* ---- INGOTS ---- */
Translation.addTranslation("Adamantiumingot", {ru: "Адамантиевый слиток"});
Translation.addTranslation("Copperingot", {ru: "Медный слиток"});
Translation.addTranslation("Leadingot", {ru: "Свинцовый слиток"});
Translation.addTranslation("Mithrilingot", {ru: "Мифриловый слиток"});
Translation.addTranslation("Oryhalkingot", {ru: "Орхилаковый слиток"});
Translation.addTranslation("Platinumingot", {ru: "Платиновый слиток"});
Translation.addTranslation("Silveringot", {ru: "Серебряный слиток"});
Translation.addTranslation("Tiningot", {ru: "Оловянный слиток"});
Translation.addTranslation("Titaniumingot", {ru: "Титановый слиток"});

/* ---- NUGGETS ---- */
Translation.addTranslation("Adamantium nugget", {ru: "Адамантиевий самородок"});
Translation.addTranslation("Copper nugget", {ru: "Медный самородок"});
Translation.addTranslation("Lead nugget", {ru: "Свинцовый самородок"});
Translation.addTranslation("Mithril nugget", {ru: "Мифриловый самородок"});
Translation.addTranslation("Oryhalk nugget", {ru: "Орхилаковый самородок"});
Translation.addTranslation("Platinum nugget", {ru: "Платиновый самородок"});
Translation.addTranslation("Silver nugget", {ru: "Серебряный самородок"});
Translation.addTranslation("Tin nugget", {ru: "Оловянный самородок"});
Translation.addTranslation("Titanium nugget", {ru: "Титановый самородок"});
/* ---- ARMOR HELMET ---- */
Translation.addTranslation("Adamantium helmet", {ru: "Адамантиевый шлем"});
Translation.addTranslation("Copper helmet", {ru: "Медный шлем"});
Translation.addTranslation("Tin helmet", {ru: "Оловянный шлем"});
Translation.addTranslation("Lead helmet", {ru: "Свинцовый шлем"});
Translation.addTranslation("Mithril helmet", {ru: "Мифриловый шлем"});
Translation.addTranslation("Oryhalk helmet", {ru: "Орхилаковый шлем"});
Translation.addTranslation("Titanium helmet", {ru: "Титановый шлем"});
Translation.addTranslation("Platinum helmet", {ru: "Платиновый шлем"});
Translation.addTranslation("Aluminum helmet", {ru: "Алюминиевый шлем"});
/* ---- ARMOR CHESTPLATE ---- */
Translation.addTranslation("Adamantium chestplate", {ru: "Адамантиевый нагрудник"});
Translation.addTranslation("Copper chestplate", {ru: "Медный нагрудник"});
Translation.addTranslation("Tin chestplate", {ru: "Оловянный нагрудник"});
Translation.addTranslation("Lead chestplate", {ru: "Свинцовый нагрудник"});
Translation.addTranslation("Mithril chestplate", {ru: "Мифриловый нагрудник"});
Translation.addTranslation("Oryhalk chestplate", {ru: "Орхилаковый нагрудник"});
Translation.addTranslation("Titanium chestplate", {ru: "Титановый нагрудник"});
Translation.addTranslation("Silver chestplate", {ru: "Серебряный нагрудник"});
Translation.addTranslation("Platinum chestplate", {ru: "Платиновый нагрудник"});
/* ---- ARMOR LEGGINGS ---- */
Translation.addTranslation("Adamantium leggings", {ru: "Адамантиевые поножи"});
Translation.addTranslation("Copper leggings", {ru: "Медные поножи"});
Translation.addTranslation("Tin leggings", {ru: "Оловянные поножи"});
Translation.addTranslation("Silver leggings", {ru: "Серебряные поножи"});
Translation.addTranslation("Lead leggings", {ru: "Свинцовые поножи"});
Translation.addTranslation("Oryhalk leggings", {ru: "Орхилаковые поножи"});
Translation.addTranslation("Mithril leggings", {ru: "Мифриловые поножи"});
Translation.addTranslation("Titanium leggings", {ru: "Титановые поножи"});
Translation.addTranslation("Platinum leggings", {ru: "Платиновые поножи"});
/* ---- ARMOR BOOTS ---- */
Translation.addTranslation("Adamantium boots", {ru: "Адамантиевые ботинки"});
Translation.addTranslation("Copper boots", {ru: "Медные ботинки"});
Translation.addTranslation("Tin boots", {ru: "Оловянные ботинки"});
Translation.addTranslation("Silver boots", {ru: "Серебряные ботинки"});
Translation.addTranslation("Lead boots", {ru: "Cвинцовые ботинки"});
Translation.addTranslation("Oryhalk boots", {ru: "Орхилаковые ботинки"});
Translation.addTranslation("Mithril boots", {ru: "Мифриловые ботинки"});
Translation.addTranslation("Titanium boots", {ru: "Титановые ботинки"});
Translation.addTranslation("Platinum boots", {ru: "Платиновые ботинки"});
/* ---- SWORD ---- */
Translation.addTranslation("Adamantium sword", {ru: "Адамантиевый меч"});
Translation.addTranslation("Copper sword", {ru: "Медный меч"});
Translation.addTranslation("Tin sword", {ru: "Оловянный меч"});
Translation.addTranslation("Lead sword", {ru: "Свинцовый меч"});
Translation.addTranslation("Mithril sword", {ru: "Мифриловый меч"});
Translation.addTranslation("Oryhalk sword", {ru: "Орхилаковый меч"});
Translation.addTranslation("Titanium sword", {ru: "Титановый меч"});
Translation.addTranslation("Silver sword", {ru: "Серебряный меч"});
Translation.addTranslation("Platinum sword", {ru: "Платиновый меч"});
/* ---- PICKAXE ---- */
Translation.addTranslation("Adamantium pickaxe", {ru: "Адамантиевая кирка"});
Translation.addTranslation("Copper pickaxe", {ru: "Медная кирка"});
Translation.addTranslation("Tin pickaxe", {ru: "Оловянная кирка"});
Translation.addTranslation("Silver pickaxe", {ru: "Серебряная кирка"});
Translation.addTranslation("Lead pickaxe", {ru: "Cвинцовая кирка"});
Translation.addTranslation("Oryhalk pickaxe", {ru: "Орхилаковая кирка"});
Translation.addTranslation("Mithril pickaxe", {ru: "Мифриловая кирка"});
Translation.addTranslation("Titanium pickaxe", {ru: "Титановая кирка"});
Translation.addTranslation("Platinum pickaxe", {ru: "Платиновая кирка"});
/* ---- SHOVEL ---- */
Translation.addTranslation("Adamantium shovel", {ru: "Адамантиевая лопата"});
Translation.addTranslation("Copper shovel", {ru: "Медная лопата"});
Translation.addTranslation("Tin shovel", {ru: "Оловянная лопата"});
Translation.addTranslation("Silver shovel", {ru: "Серебряная лопата"});
Translation.addTranslation("Lead shovel", {ru: "Cвинцовая лопата"});
Translation.addTranslation("Oryhalk shovel", {ru: "Орхилаковая лопата"});
Translation.addTranslation("Mithril shovel", {ru: "Мифриловая лопата"});
Translation.addTranslation("Titanium shovel", {ru: "Титановая лопата"});
Translation.addTranslation("Platinum shovel", {ru: "Платиновая лопата"});
/* ---- HOE ---- */
Translation.addTranslation("Adamantium hoe", {ru: "Адамантиевая мотыга"});
Translation.addTranslation("Copper hoe", {ru: "Медная мотыга"});
Translation.addTranslation("Tin hoe", {ru: "Оловянная мотыга"});
Translation.addTranslation("Silver hoe", {ru: "Серебряная мотыга"});
Translation.addTranslation("Lead hoe", {ru: "Cвинцовая мотыга"});
Translation.addTranslation("Oryhalk hoe", {ru: "Орхилаковая мотыга"});
Translation.addTranslation("Mithril hoe", {ru: "Мифриловая мотыга"});
Translation.addTranslation("Titanium hoe", {ru: "Титановая мотыга"});
Translation.addTranslation("Platinum hoe", {ru: "Платиновая мотыга"});
/* ---- FURNACE ---- */
Translation.addTranslation("Adamantium furnace", {ru: "Адамантиевая печь"});
Translation.addTranslation("Oryhalk furnace", {ru: "Орхилаковая печь"});
Translation.addTranslation("Mithril furnace", {ru: "Мифриловая печь"});
Translation.addTranslation("Titanium furnace", {ru: "Титановая печь"});
/* ---- OTHER ---- */
Translation.addTranslation("Synol", {ru: "Синол"});
Translation.addTranslation("Holy Book", {ru: "Священная книга"});





// file: api/recipes/furnace.js

Callback.addCallback("PostLoaded", function () {

Recipes.addFurnace(BlockID.oreCopper, ItemID.ingotCopper, 0);
Recipes.addFurnace(BlockID.oreTin, ItemID.ingotTin, 0);
Recipes.addFurnace(BlockID.oreLead, ItemID.ingotLead, 0);
Recipes.addFurnace(BlockID.oreAdamantium, ItemID.ingotAdamantium, 0);
Recipes.addFurnace(BlockID.oreTitanium, ItemID.ingotTitanium, 0);
Recipes.addFurnace(BlockID.orePlatinum, ItemID.ingotPlatinum, 0);
Recipes.addFurnace(BlockID.oreOryhalk, ItemID.ingotOryhalk, 0);
 Recipes.addFurnace(BlockID.oreMithril, ItemID.ingotMithril, 0);
 Recipes.addFurnace(BlockID.oreSilver, ItemID.ingotSilver, 0);
 
});




