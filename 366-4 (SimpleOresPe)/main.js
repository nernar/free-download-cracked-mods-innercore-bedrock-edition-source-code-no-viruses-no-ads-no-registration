IMPORT("ToolType");
IMPORT("TileRender");

var On = false;
var player;

Callback.addCallback("LevelLoaded", function(){
	player = Player.get();
});

const Set = {
block: function(id,i){
Block.registerDropFunction(id, function(coords, id, data, level, enchant){
	 if(Player.getCarriedItem().id==i){
			return [[id, 1, data]];
		}
		return [];
	});
	
},

blockFire:function(id,dr,i){
Block.registerDropFunction(id, function(coords, id){
	 if(Player.getCarriedItem().id==i){
			return [[dr, 1, 0]];
		}
	});

},
    tool: function (light, gem, tools, shears, ar, hoe, sword, name, armor, durabilityModifier, du, ef) {
    	if(!gem) {
            IDRegistry.genItemID("ingot" + name);
            Item.createItem("ingot" + name, name + " ingot", {name: "ingot_" + name.toLowerCase(), meta: 0}, {});
}
   	if(gem) {
            IDRegistry.genItemID("ingot" + name);
            Item.createItem("ingot" + name, name + " gem", {name: "gem_" + name.toLowerCase(), meta: 0}, {});
}
if(!light) {
                IDRegistry.genBlockID("block" + name);
                Block.createBlock("block" + name, [
                    {name: name + " block", texture: [["block_" + name.toLowerCase(), 0]], inCreative: true}
], "opaque");
            }
   if(light){
   	var LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: true
});

IDRegistry.genBlockID("block" + name);
Block.createBlock("block" + name, [
{name: name + " block", texture: [["block_" + name.toLowerCase(), 0]], inCreative: true}
                ], LIGHT);
     }
Block.setDestroyTime(BlockID["block" + name], 2);
if(shears) {
IDRegistry.genItemID(name + "S");
Item.createItem(name + "S", name + " shears", {name:"shears_" + name.toLowerCase(), meta: 0}, {stack: 1});

ToolAPI.registerTool(ItemID[name + "S"], {level: 6, durability: du, efficiency: ef, damage: 1}, ["plant"]);

Set.block(18, ItemID[name + "S"]);
Set.block(31, ItemID[name + "S"]);
Set.block(32, ItemID[name + "S"]);
Set.block(106, ItemID[name + "S"]);
Set.block(111, ItemID[name + "S"]);
Set.block(161, ItemID[name + "S"]);
Set.block(175, ItemID[name + "S"]); 
}
if(hoe) {
IDRegistry.genItemID(name + "hoe");
Item.createItem(name + "hoe", name + " hoe", {name: "hoe_" + name.toLowerCase(), meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID[name + "hoe"], name.toLowerCase(), ToolType.hoe);
}
if(sword) {
IDRegistry.genItemID(name + "sword");
Item.createItem(name + "sword", name + " sword", {
name: "sword_" + name.toLowerCase(),
meta: 0
}, {stack: 1});

ToolAPI.setTool(ItemID[name + "sword"], name.toLowerCase(), ToolType.sword);
}
if(tools) {
            IDRegistry.genItemID(name + "axe");
            Item.createItem(name + "axe", name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

                IDRegistry.genItemID(name + "pickaxe");
                Item.createItem(name + "pickaxe", name + " pickaxe", {
                    name: "pickaxe_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});

                IDRegistry.genItemID(name + "shovel");
                Item.createItem(name + "shovel", name + " shovel", {
                    name: "shovel_" + name.toLowerCase(),
                    meta: 0
                }, {stack: 1});
                
                ToolAPI.setTool(ItemID[name + "axe"], name.toLowerCase(), ToolType.axe);
                ToolAPI.setTool(ItemID[name + "pickaxe"], name.toLowerCase(), ToolType.pickaxe);
                ToolAPI.setTool(ItemID[name + "shovel"], name.toLowerCase(), ToolType.shovel);
         }
            if(ar) {
                IDRegistry.genItemID(name + "helmet");
                Item.createArmorItem(name + "helmet", name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                    type: "helmet",
                    armor: armor[0],
                    durability: durabilityModifier * 11,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                IDRegistry.genItemID(name + "chestplate");
                Item.createArmorItem(name + "chestplate", name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                    type: "chestplate",
                    armor: armor[1],
                    durability: durabilityModifier * 16,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });

                IDRegistry.genItemID(name + "leggings");
                Item.createArmorItem(name + "leggings", name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                    type: "leggings",
                    armor: armor[2],
                    durability: durabilityModifier * 15,
                    texture: "armor/" + name.toLowerCase() + "_2.png"
                });

                IDRegistry.genItemID(name + "boots" );
                Item.createArmorItem(name + "boots", name + " boots", {name: "boots_" + name.toLowerCase()}, {
                    type: "boots",
                    armor: armor[3],
                    durability: durabilityModifier * 13,
                    texture: "armor/" + name.toLowerCase() + "_1.png"
                });
      }

        Callback.addCallback("PostLoaded", function () {
        	
                    Recipes.addShaped({id: BlockID["block" + name], count: 1, data: 0}, [
                        "aaa",
                        "aaa",
                        "aaa"
                    ], ['a', ItemID["ingot" + name], 0]);
                    
                    Recipes.addShapeless({id: ItemID["ingot" + name], count: 9, data: 0}, [{id: BlockID["block" + name], data: 0}]);
 if(shears) {
 	
Recipes.addShaped({id: ItemID[name + "S"], count: 1, data: 0}, [
		" x ",
		"x. "
	], ['x', ItemID["ingot" + name], 0]);
	
	}

if(hoe) {
	Recipes.addShaped({id: ItemID[name + "hoe"], count: 1, data: 0}, [
                        "aa ",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);
                    
          }
     if(sword){
       Recipes.addShaped({id: ItemID[name + "sword"], count: 1, data: 0}, [
                        " a ",
                        " a ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);
          }
                if(tools) {
                    Recipes.addShaped({id: ItemID[name + "pickaxe"], count: 1, data: 0}, [
                        "aaa",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID[name + "shovel"], count: 1, data: 0}, [
                        " a ",
                        " s ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);

                    Recipes.addShaped({id: ItemID[name + "axe"], count: 1, data: 0}, [
                        "aa ",
                        "as ",
                        " s "
                    ], ['a', ItemID["ingot" + name], 0, 's', 280, 0]);
              }
if(ar) {
                    Recipes.addShaped({id: ItemID[name + "helmet"], count: 1, data: 0}, [
                        "aaa",
                        "a a",
                        "   "
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID[name + "chestplate"], count: 1, data: 0}, [
                        "a a",
                        "aaa",
                        "aaa"
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID[name + "leggings"], count: 1, data: 0}, [
                        "aaa",
                        "a a",
                        "a a"
                    ], ['a', ItemID["ingot" + name], 0]);

                    Recipes.addShaped({id: ItemID[name + "boots"], count: 1, data: 0}, [
                        "   ",
                        "a a",
                        "a a"
                    ], ['a', ItemID["ingot" + name], 0]);
                }
        });
    },
armorPower:function(name,efect,p){
	Callback.addCallback("tick", function(){
var h = Player.getArmorSlot(0);
var c = Player.getArmorSlot(1);
var l = Player.getArmorSlot(2);
var b = Player.getArmorSlot(3);
if(h.id == ItemID[name + "helmet"] && c.id == ItemID[name + "chestplate"] && l.id == ItemID[name + "leggings"] && b.id == ItemID[name + "boots"]){
	Entity.addEffect(Player.get(), Native.PotionEffect[efect], p, 50)
}
});
},
itemPower:function(id,efect){
	Callback.addCallback("tick", function(){
if(Player.getCarriedItem().id == id){
	Entity.addEffect(Player.get(), Native.PotionEffect[efect], 0.5, 300)
}
});
},
hit:function(id,efect){
Callback.addCallback("PlayerAttack", function(player, ent){
  if(Player.getCarriedItem().id == id){
  	Entity.addEffect(ent, Native.PotionEffect[efect], 0.5, 300)
}
});
},
fire:function(name){
	Callback.addCallback("PlayerAttack", function(player, ent){
  if(Player.getCarriedItem().id == ItemID[name + "sword"]){
  	Entity.setFire(ent, 180);       
  }
    if(Player.getCarriedItem().id == ItemID[name + "axe"]){
  	Entity.setFire(ent, 180);       
  }
  if(Player.getCarriedItem().id == ItemID[name + "shovel"]){
  	Entity.setFire(ent, 180);       
  }
  if(Player.getCarriedItem().id == ItemID[name + "pickaxe"]){
  	Entity.setFire(ent, 180);       
  }
});
	Set.blockFire(12,20,ItemID[name + "shovel"]);
	Set.blockFire(12,20,ItemID[name + "shovel"]);
	
	Set.blockFire(17,263,ItemID[name + "axe"]);
	Set.blockFire(17,263,ItemID[name + "axe"]);
	Set.blockFire(17,263,ItemID[name + "axe"]);
	Set.blockFire(17,263,ItemID[name + "axe"]);
	Set.blockFire(162,263,ItemID[name + "axe"]);
	Set.blockFire(162,263,ItemID[name + "axe"]);
	
	Set.blockFire(4,1,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreCopper,ItemID.ingotCopper,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreTin,ItemID.ingotTin,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreMithril,ItemID.ingotMithril,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreAdamantium,ItemID.ingotAdamantium,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreOnyx,ItemID.ingotOnyx,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreArgonite,ItemID.ingotArgonite,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreAshstone,ItemID.ingotAshstone,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreIllumenite,ItemID.ingotIllumenite,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreDragonstone,ItemID.ingotDragonstone,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreFyrite,ItemID.ingotFyrite,ItemID[name + "pickaxe"]);
	Set.blockFire(BlockID.oreMalachite,ItemID.ingotMalachite,ItemID[name + "pickaxe"]);
	Set.blockFire(14,266,ItemID[name + "pickaxe"]);
	Set.blockFire(15,265,ItemID[name + "pickaxe"]);
	Set.blockFire(87,405,ItemID[name + "pickaxe"]);
  },
level:function(ore,name,level){
ToolAPI.registerBlockMaterial(BlockID["block" + name], "stone", level, true);
Block.setDestroyLevel("block" + name, level); 
if(ore){
ToolAPI.registerBlockMaterial(BlockID["ore" + name], "stone", level, true);
Block.setDestroyLevel("ore" + name, level); 
       }
    },
ore:function(furnace,name,dimension,rary,min,max,df){
IDRegistry.genBlockID("ore" + name);
                Block.createBlock("ore" + name, [
                    {name: name + " ore", texture: [["ore_" + name.toLowerCase(), 0]], inCreative: true}
], "opaque");
               

Callback.addCallback("PostLoaded", function () {
  if(furnace){ 
Recipes.addFurnace(BlockID["ore" + name], ItemID["ingot" + name], 0);
  
  }
 });

Block.setDestroyTime(BlockID["ore" + name], 2);

Callback.addCallback(dimension, function(chunkX, chunkZ){
			for(var i = 0; i < rary; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, min, max);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["ore" + name], 0, df);
			}
	});
  },
oreLight:function(name){
   	var LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: true
});
IDRegistry.genBlockID("ore" + name);
                Block.createBlock("ore" + name, [
                    {name: name + " ore", texture: [["ore_" + name.toLowerCase(), 0]], inCreative: true}
], LIGHT);
               
Block.setDestroyTime(BlockID["ore" + name], 2);

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ){
			for(var i = 0; i < 9; i++){
				var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 300);
				GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID["ore" + name], 0, 5);
		}
	});
  },
chunk:function(name){
IDRegistry.genItemID("small"+name+"chunk");
Item.createItem("small"+name+"chunk","Small " + name + " Chunk", {name:"small_"+name.toLowerCase()+"_chunk", meta: 0}, {stack: 64}); 

IDRegistry.genItemID("medium"+name+"chunk");
Item.createItem("medium"+name+"chunk","Medium " + name + " Chunk", {name:"medium_"+name.toLowerCase()+"_chunk", meta: 0}, {stack: 64}); 

IDRegistry.genItemID("large"+name+"chunk");
Item.createItem("large"+name+"chunk","Large " + name + " Chunk", {name:"large_"+name.toLowerCase()+"_chunk", meta: 0}, {stack: 64}); 


Callback.addCallback("PostLoaded", function () {

Recipes.addShaped({id: ItemID["medium"+name+"chunk"], count: 1, data: 0}, [
		"x x",
		" x ",		
"x x"
	], ['x', ItemID["small"+name+"chunk"], 0]);
	
Recipes.addShaped({id: ItemID["large"+name+"chunk"], count: 1, data: 0}, [
		"x  ",
		" x ",		
"  x"
	], ['x', ItemID["medium"+name+"chunk"], 0]);

	Recipes.addFurnace(ItemID["large"+name+"chunk"], ItemID["ingot" + name], 0);
	
  });
 },
 blockIDs: {},

	isBlock: function(id){
		return this.blockIDs[id];
	},
	
	registerPrototype: function(id, Prototype){
		this.blockIDs[id] = true;
		Prototype.id = id;
		Prototype.onItemClick = function(id, count, data, coords){
			if (this.click(id, count, data, coords)) return true;
			if (Entity.getSneaking(player)) return false;
			var gui = this.getGuiScreen();
			if (gui){
				this.container.openAs(gui);
				return true;
			}
		};
		
		if(!Prototype.initModel){
			Prototype.initModel = this.initModel;
		}
		
		if(Prototype.defaultValues && Prototype.defaultValues.isActive !== undefined){
			if(!Prototype.init){
				Prototype.init = Prototype.initModel;
			}
			if(!Prototype.activate){
				Prototype.activate = this.activateBlock;
			}
			if(!Prototype.deactivate){
				Prototype.deactivate = this.deactivateBlock;
			}
			if(!Prototype.destroy){
				Prototype.destroy = function(){
					BlockRenderer.unmapAtCoords(this.x, this.y, this.z);
				}
			}
		}
		
		ToolAPI.registerBlockMaterial(id, "stone", 1);
		Block.setDestroyTime(id, 3);
		TileEntity.registerPrototype(id, Prototype);
	},
	
	setStoragePlaceFunction: function(id, fullRotation){
		Block.registerPlaceFunction(BlockID[id], function(coords, item, block){
			Game.prevent();
			var x = coords.relative.x
			var y = coords.relative.y
			var z = coords.relative.z
			block = World.getBlockID(x, y, z)
			if(GenerationUtils.isTransparentBlock(block)){
				World.setBlock(x, y, z, item.id, 0);
				var rotation = TileRenderer.getBlockRotation(fullRotation);
				var tile = World.addTileEntity(x, y, z);
				tile.data.meta = rotation;
				TileRenderer.mapAtCoords(x, y, z, item.id, rotation);
			}
		});
	},
	
	getBlockDrop: function(coords, blockID, level, standartDrop){
		BlockRenderer.unmapAtCoords(coords.x, coords.y, coords.z);
		var item = Player.getCarriedItem();
		if(level >= ToolAPI.getBlockDestroyLevel(blockID)){
			return [[standartDrop || blockID, 1, 0]];
		}
		return [];
	},
	
	setFacing: function(coords){
		if(Entity.getSneaking(player)){
			var facing = coords.side + Math.pow(-1, coords.side);
		}else{
			var facing = coords.side;
		}
		if(facing != this.data.meta){
			this.data.meta = facing;
			this.initModel();
			return true;
		}
		return false;
	},
	
	initModel: function(){
		var index = this.hasFullRotation? 6 : 4;
		TileRenderer.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta + (this.data.isActive? index : 0));
	},
	
	activateBlock: function(){
		var index = this.hasFullRotation? 6 : 4;
		if(!this.data.isActive){
			this.data.isActive = true;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta + index);
		}
	},
	
	deactivateBlock: function(){
		if(this.data.isActive){
			this.data.isActive = false;
			TileRenderer.mapAtCoords(this.x, this.y, this.z, this.id, this.data.meta);
		}
	},
	
	updateBlock: function(){
		var block = World.getBlock(this.x, this.y, this.z);
		if(block.id != this.id && block.id > 0){
			World.setBlock(this.x, this.y, this.z, this.id, 0);
			this.data.meta = 0;
		}
		this.initModel();
	}
};

ToolAPI.addToolMaterial("copper", {durability: 185, level: 2, efficiency: 3, damage: 4, enchantability: 8});
Set.tool(false, false, true, true, true, true, true, "Copper", [2, 3, 2, 1],8,185,0.5);
Set.ore(true ,"Copper","GenerateChunkUnderground",13,35,90,8);
Set.level(true,"Copper",2);

ToolAPI.addToolMaterial("tin", {durability: 200, level: 2, efficiency: 3.5, damage: 5, enchantability: 8});
Set.tool(false, false, true, true, true, true, true, "Tin", [2, 3, 2, 1],9,200,0.8);
Set.ore(true ,"Tin","GenerateChunkUnderground",12,30,90,7);
Set.level(true,"Tin",2);

ToolAPI.addToolMaterial("mithril", {durability: 800, level: 3, efficiency: 4.5, damage: 6, enchantability: 12});
Set.tool(false, false, true, true, true, true, true, "Mithril", [3, 5, 4, 3],12,800,3);
Set.ore(true ,"Mithril","GenerateChunkUnderground",11,0,30,7);
Set.level(true,"Mithril",3);

ToolAPI.addToolMaterial("adamantium", {durability: 1150, level: 4, efficiency: 5, damage: 7, enchantability: 3});
Set.tool(false, false, true, true, true, true, true, "Adamantium", [4, 6, 5, 4],19,1150,4);
Set.ore(true ,"Adamantium","GenerateChunkUnderground",4,0,20,6);
Set.level(true,"Adamantium",3);

ToolAPI.addToolMaterial("onyx", {durability: 3280, level: 5, efficiency: 6, damage: 9, enchantability: 15});
Set.tool(false, true, true, true, true, true, true, "Onyx", [4, 6, 6, 4],39,3280,5);
Set.ore(true ,"Onyx","GenerateNetherChunk",5,0,300,3);
Set.level(true,"Onyx",4);

ToolAPI.addToolMaterial("bronze", {durability: 800, level: 3, efficiency: 3.5, damage: 5, enchantability: 7});
Set.tool(false, false, true, false, true, true, true, "Bronze", [2, 4, 4, 2],12,800,23);
Set.level(false,"Bronze",3);
Set.chunk("Bronze");

ToolAPI.addToolMaterial("steel", {durability: 700, level: 3, efficiency: 4, damage: 6, enchantability: 14});
Set.tool(false, false, true, true, true, true, true, "Steel", [3, 4, 4, 3],12,800,23);
Set.level(false,"Steel",3);
Set.chunk("Steel");

ToolAPI.addToolMaterial("thyrium", {durability: 2000, level: 4, efficiency: 5.5, damage: 8, enchantability: 28});
Set.tool(false, false, true, false, true, true, true, "Thyrium", [4, 7, 6, 3],39,800,23);
Set.level(false,"Thyrium",4);
Set.chunk("Thyrium");

ToolAPI.addToolMaterial("sinisite", {durability: 4100, level: 6, efficiency: 7, damage: 10, enchantability: 11});
Set.tool(false, false, true, false, true, true, true, "Sinisite", [4, 8, 7, 3],56,800,23);
Set.level(false,"Sinisite",4);
Set.chunk("Sinisite");

ToolAPI.addToolMaterial("argonite", {durability: 1300, level: 3, efficiency: 6, damage: 8, enchantability: 16});
Set.tool(false, false, true, false, false, true, true, "Argonite", [4, 8, 7, 3],56,800,23);
Set.ore(true ,"Argonite","GenerateNetherChunk",6,0,300,5);
Set.level(true,"Argonite",4);

ToolAPI.addToolMaterial("ashstone", {durability: 900, level: 3, efficiency: 8, damage: 6, enchantability: 12});
Set.tool(false, true, true, false, false, true, true, "Ashstone", [4, 8, 7, 3],56,800,23);
Set.ore(true ,"Ashstone","GenerateNetherChunk",5,0,300,4);
Set.level(true,"Ashstone",4);

ToolAPI.addToolMaterial("illumenite", {durability: 700, level: 3, efficiency: 3, damage: 10, enchantability: 15});
Set.tool(true, false, false, false, true, false, true, "Illumenite", [4, 6, 6, 4],12,800,23);
Set.itemPower(ItemID.Illumenitesword,"nightVision");
Set.hit(ItemID.Illumenitesword,"blindness");
Set.armorPower("Illumenite","damageResistance",0.5);
Set.oreLight("Illumenite");
Set.level(true,"Illumenite",3);

ToolAPI.addToolMaterial("dragonstone", {durability: 4000, level: 6, efficiency: 9, damage: 11, enchantability: 27});
Set.tool(false, true, true, false, true, true, true, "Dragonstone", [3, 9, 7, 3],48,3280,5);
Set.ore(true ,"Dragonstone","GenerateNetherChunk",2,0,300,2);
Set.level(true,"Dragonstone",4);

ToolAPI.addToolMaterial("fyrite", {durability: 150, level: 3, efficiency: 8, damage: 5, enchantability: 7});
Set.tool(false, false, true, false, true, false, true, "Fyrite", [3, 5, 4, 3],5,3280,5);
Set.fire("Fyrite");
Set.armorPower("Fyrite","fireResistance",1);
Set.ore(true ,"Fyrite","GenerateNetherChunk",9,0,300,4);
Set.level(true,"Fyrite",3);

ToolAPI.addToolMaterial("malachite", {durability: 700, level: 3, efficiency: 9, damage: 8, enchantability: 7});
Set.tool(false, false, true, false, true, true, true, "Malachite", [2, 4, 4, 2],16,800,23);
Set.armorPower("Malachite","jump",1);
Set.ore(true ,"Malachite","GenerateNetherChunk",5,0,300,4);
Set.level(true,"Malachite",3);

IDRegistry.genBlockID("fusion");
Block.createBlock("fusion", [{name: "Fusion furnace", texture: [["fusion", 4], ["fusion", 4], ["fusion", 3], ["fusion", 1], ["fusion", 3], ["fusion", 3]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.fusion, "stone");
Block.setDestroyTime(BlockID.fusion, 3);
TileRenderer.setStandartModel(BlockID.fusion, [["fusion", 4], ["fusion", 4], ["fusion", 3], ["fusion", 1], ["fusion", 3], ["fusion", 3]]);
TileRenderer.registerRotationModel(BlockID.fusion, 0, [["fusion", 4], ["fusion", 4], ["fusion", 3], ["fusion", 1], ["fusion", 3], ["fusion", 3]]);
TileRenderer.registerRotationModel(BlockID.fusion, 4, [["fusion", 4], ["fusion", 4], ["fusion", 3], ["fusion", 2], ["fusion", 3], ["fusion", 3]]);

Block.registerDropFunction("fusion", function(coords, blockID, blockData, level){
	return Set.getBlockDrop(coords, blockID, level);
});

Recipes.addShaped({id: BlockID.fusion, count: 1, data: 0}, [
		"xbx",
		"ana",
		"xbx"
	], ['x', 45,0,"b",265,0,"a",263,0,"n",61,0]);

let Guide;
ModAPI.addAPICallback("GuideAPI", function(api){
  Guide = api.GuideAPI;
api.PageControllers.ex = function(params, elements, con, section){
    const xp = {left: 70, right: 570}[section];
      let yp = 200;
      let link;
      for(let i = 0; i < params.items.length; i++){
        elements["slot0_" + params.items[i].name] = {type: "slot", x: xp+150, y: yp-100, size: 50,visual: true};
        con.setSlot("slot0_" + params.items[i].name, params.items[i].id0, 1, 0);
        elements["slot1_" + params.items[i].name] = {type: "slot", x: xp, y: yp, size: 50,visual: true};
        con.setSlot("slot1_" + params.items[i].name, ItemID[params.items[i].id2], 1, 0);
        elements["slot2_" + params.items[i].name] = {type: "slot", x: xp+150, y: yp, size: 50,visual: true};
        con.setSlot("slot2_" + params.items[i].name, ItemID[params.items[i].id1], 1, 0);
        elements["slot3_" + params.items[i].name] = {type: "slot", x: xp+300, y: yp, size: 50,visual: true};
        con.setSlot("slot3_" + params.items[i].name, ItemID[params.items[i].id3], 1, 0);
        elements["image" + params.items[i].name] = {type: "image", x: xp+55, y: yp-10, bitmap: "btf2", scale: 4.0};
        elements["imageTw" + params.items[i].name] = {type: "image", x: xp+205, y: yp-10, bitmap: "btfx2", scale: 4.0};
        elements["imageb" + params.items[i].name] = {type: "image", x: xp+100, y: yp-140, bitmap: "b1", scale: 4.0};
        elements["imagebw" + params.items[i].name] = {type: "image", x: xp+205, y: yp-140, bitmap: "b1d", scale: 4.0};

        elements["slot0a_" + params.items[i].name] = {type: "slot", x: xp+150, y: yp-100+250, size: 50,visual: true};
        con.setSlot("slot0a_" + params.items[i].name, params.items[i].id0, 1, 0);
        elements["slot1j_" + params.items[i].name] = {type: "slot", x: xp, y: yp+250, size: 50,visual: true};
        con.setSlot("slot1j_" + params.items[i].name, 265, 1, 0);
        elements["slot2i_" + params.items[i].name] = {type: "slot", x: xp+150, y: yp+250, size: 50,visual: true};
        con.setSlot("slot2i_" + params.items[i].name, ItemID[params.items[i].ids], 1, 0);
        elements["slot3k_" + params.items[i].name] = {type: "slot", x: xp+300, y: yp+250, size: 50,visual: true};
        con.setSlot("slot3k_" + params.items[i].name, 263, 1, 0);
        elements["imasge" + params.items[i].name] = {type: "image", x: xp+55, y: yp-10+250, bitmap: "btf2", scale: 4.0};
        elements["imasgedTw" + params.items[i].name] = {type: "image", x: xp+205, y: yp-10+250, bitmap: "btfx2", scale: 4.0};
        elements["imasgeb" + params.items[i].name] = {type: "image", x: xp+100, y: yp-140+250, bitmap: "b1", scale: 4.0};
        elements["imasgebw" + params.items[i].name] = {type: "image", x: xp+205, y: yp-140+250, bitmap: "b1d", scale: 4.0};
         yp += 250;
     }
  };
  
api.PageControllers.bs = function(params, elements, con, section){
    const xp = {left: 70, right: 570}[section];
      let yp = 200;
      let link;
      for(let i = 0; i < params.items.length; i++){
        elements["slot0_" + params.items[i].name] = {type: "slot", x: xp+150, y: yp-100, size: 50,visual: true};
        con.setSlot("slot0_" + params.items[i].name, params.items[i].id0, 1, 0);
        elements["slot1_" + params.items[i].name] = {type: "slot", x: xp, y: yp, size: 50,visual: true};
        con.setSlot("slot1_" + params.items[i].name, ItemID[params.items[i].id2], 1, 0);
        elements["slot2_" + params.items[i].name] = {type: "slot", x: xp+150, y: yp, size: 50,visual: true};
        con.setSlot("slot2_" + params.items[i].name, ItemID[params.items[i].id1], 1, 0);
        elements["slot3_" + params.items[i].name] = {type: "slot", x: xp+300, y: yp, size: 50,visual: true};
        con.setSlot("slot3_" + params.items[i].name, ItemID[params.items[i].id3], 1, 0);
        elements["image" + params.items[i].name] = {type: "image", x: xp+55, y: yp-10, bitmap: "btf2", scale: 4.0};
        elements["imageTw" + params.items[i].name] = {type: "image", x: xp+205, y: yp-10, bitmap: "btfx2", scale: 4.0};
        elements["imageb" + params.items[i].name] = {type: "image", x: xp+100, y: yp-140, bitmap: "b1", scale: 4.0};
        elements["imagebw" + params.items[i].name] = {type: "image", x: xp+205, y: yp-140, bitmap: "b1d", scale: 4.0};
         yp += 250;
     }
  };

  api.GuideAPI.registerGuide("SimplyEnchantingGuide", {
    pages: {

      default: {
        nextLink: "page2",
        left: {
          controller: api.PageControllers.ex,
          items: [
            {name: "aloo", id0: 263, id1: "smallBronzechunk",id2: "ingotCopper",id3: "ingotTin", ids: "smallSteelchunk"}
          ]       
        },
        right: {
          controller: api.PageControllers.bs,
     items: [
         {name: "xaloo", id0: 263, id1: "smallThyriumchunk", id2: "ingotMithril",id3: "ingotAdamantium"},
       {name: "xalzoo", id0: 263, id1: "smallSinisitechunk", id2: "ingotOnyx",id3: "ingotMithril"}
          ]
        }
      },
      
    page2: {
    	preLink: "default",
        nextLink: "page3",
        left: {
          controller: api.PageControllers.ex,
          items: [
            {name: "aloo", id0: 289, id1: "mediumBronzechunk",id2: "ingotCopper",id3: "ingotTin", ids: "mediumSteelchunk"}
          ]       
        },
        right: {
          controller: api.PageControllers.bs,
     items: [
         {name: "xaloo", id0: 289, id1: "mediumThyriumchunk", id2: "ingotMithril",id3: "ingotAdamantium"},
       {name: "xalzoo", id0: 289, id1: "mediumSinisitechunk", id2: "ingotOnyx",id3: "ingotMithril"}
          ]
        }
      },
      
      page3: {
        preLink: "page2",
        left: {
          controller: api.PageControllers.ex,
          items: [
            {name: "aloo", id0: 331, id1: "largeBronzechunk",id2: "ingotCopper",id3: "ingotTin", ids: "largeSteelchunk"}
          ]       
        },
        right: {
          controller: api.PageControllers.bs,
     items: [
         {name: "xaloo", id0: 331, id1: "largeThyriumchunk", id2: "ingotMithril",id3: "ingotAdamantium"},
       {name: "xalzoo", id0: 331, id1: "largeSinisitechunk", id2: "ingotOnyx",id3: "ingotMithril"}
          ]
        }
      }

    }
  });

});

Callback.addCallback("LevelLoaded", function(){
	elementsUI = new UI.StandartWindow({
		standart: {
			header: {text: {text: "Fusion furnace"}},
			inventory: {standart: true},
			background: {standart: true}
		},
		drawing: [
{type:"bitmap","x":730,"y":70,"bitmap":"b1d","scale":4.0 },
{type:"bitmap","x":590,"y":70,"bitmap":"b1","scale":4.0},
{type:"bitmap","x":725,"y":207,"bitmap":"btfx2","scale":4.0},
{type:"bitmap","x":545,"y":207,"bitmap":"btf2","scale":4.0},
{type:"bitmap","x":728,"y":334,"bitmap":"fs","scale":4.0},
{type:"bitmap","x":580,"y":334,"bitmap":"fs","scale":4.0},
],
elements: {
"book": {"type": "button", "x": 825,"y": 360, "bitmap": "bg","bitmap2": "bgp","scale": 4.0, "clicker": {onClick: function(con){
Guide ?
Guide.openGuide("SimplyEnchantingGuide") :
 alert("Please Install Mod GuideAPI.");
}}},
"s1":{"type":"slot","x":645,"y":90,"size":70},
"s2":{"type":"slot","x":645,"y":207,"size":70},
"s3":{"type":"slot","x":645,"y":318,"size":70},
"s4":{"type":"slot","x":465,"y":207,"size":70},
"s5":{"type":"slot","x":825,"y":207,"size":70},
"sc1": {"type": "scale", "x": 545, "y": 207, "direction": 0, "value": 0.5, "bitmap": "btf", "scale": 4.0},
"sc2": {"type": "scale", "x": 725, "y": 207, "direction": 2, "value": 0.5, "bitmap": "btsf", "scale": 4.0},
"sc3": {"type": "scale", "x": 730, "y": 70, "direction": 1, "value": 0.5, "bitmap": "b2d", "scale": 4.0},
"sc4": {"type": "scale", "x": 590, "y": 70, "direction": 1, "value": 0.5, "bitmap": "b2", "scale": 4.0},
"sc5": {"type": "scale", "x": 728, "y": 334, "direction": 1, "value": 0.5, "bitmap": "fof", "scale": 4.0},
"sc6": {"type": "scale", "x": 580, "y": 334, "direction": 1, "value": 0.5, "bitmap": "fof", "scale": 4.0}
		}
	});
});

Set.registerPrototype(BlockID.fusion,{
defaultValues: {
burn: 0,
ex: 0,
burnMaxp: 0,
isActive: false
},
getGuiScreen: function(){
return elementsUI;
},
craft:function(r,p,s1,s2){
var stp=this.container.getSlot("s1");
var str=this.container.getSlot("s2");
var st1=this.container.getSlot("s4");
var st2=this.container.getSlot("s5");

if(stp.id==p&&stp.count <= Item.getMaxStack(stp.id)&&st2.id==s2&&st2.count <= Item.getMaxStack(st2.id)&&st1.id==s1&&st1.count <= Item.getMaxStack(st1.id)&&(str.id==r||str.id==0)&&str.count <= Item.getMaxStack(str.id)){
On = true; 
}

if(this.data.burn>0&&this.data.ex<400&&stp.id==p&&stp.count <= Item.getMaxStack(stp.id)&&st2.id==s2&&st2.count <= Item.getMaxStack(st2.id)&&st1.id==s1&&st1.count <= Item.getMaxStack(st1.id)&&(str.id==r||str.id==0)&&str.count <= Item.getMaxStack(str.id)){
this.data.ex++;

if(this.data.ex>=400){
this.data.ex=0
str.id=r
stp.count--;
st2.count--;
st1.count--;
str.count++;
On = false;
}}

if(stp.id==p&&stp.count <= Item.getMaxStack(stp.id)&&st1.id==s2&&st1.count <= Item.getMaxStack(st1.id)&&st2.id==s1&&st2.count <= Item.getMaxStack(st2.id)&&(str.id==r||str.id==0)&&str.count <= Item.getMaxStack(str.id)){
On = true;
}

if(this.data.burn>0&&this.data.ex<400&&stp.id==p&&stp.count <= Item.getMaxStack(stp.id)&&st1.id==s2&&st1.count <= Item.getMaxStack(st1.id)&&st2.id==s1&&st2.count <= Item.getMaxStack(st2.id)&&(str.id==r||str.id==0)&&str.count <= Item.getMaxStack(str.id)){
this.data.ex++;

if(this.data.ex>=400){
this.data.ex=0
str.id=r
stp.count--;
st2.count--;
st1.count--;
str.count++;
On = false;
}}},

tick:function(){
	
var stp=this.container.getSlot("s1");
var str=this.container.getSlot("s2");
var st1=this.container.getSlot("s4");
var st2=this.container.getSlot("s5");

this.craft(ItemID.smallBronzechunk,263,ItemID.ingotCopper,ItemID.ingotTin);
this.craft(ItemID.mediumBronzechunk,289,ItemID.ingotCopper,ItemID.ingotTin);
this.craft(ItemID.largeBronzechunk,331,ItemID.ingotCopper,ItemID.ingotTin);

this.craft(ItemID.smallSteelchunk,263,263,265);
this.craft(ItemID.mediumSteelchunk,289,263,265);
this.craft(ItemID.largeSteelchunk,331,263,265);

this.craft(ItemID.smallThyriumchunk,263,ItemID.ingotMithril,ItemID.ingotAdamantium);
this.craft(ItemID.mediumThyriumchunk,289,ItemID.ingotMithril,ItemID.ingotAdamantium);
this.craft(ItemID.largeThyriumchunk,331,ItemID.ingotMithril,ItemID.ingotAdamantium);

this.craft(ItemID.smallSinisitechunk,263,ItemID.ingotOnyx,ItemID.ingotMithril);
this.craft(ItemID.mediumSinisitechunk,289,ItemID.ingotOnyx,ItemID.ingotMithril);
this.craft(ItemID.largeSinisitechunk,331,ItemID.ingotOnyx,ItemID.ingotMithril);

if(stp.count<=0){
stp.id=0;this.data.ex=0;
};
if(st1.count<=0){
st1.id=0;this.data.ex=0;
};
if(st2.count<=0){
st2.id=0;this.data.ex=0;
};

if(this.data.burn==0&&On==true){
this.data.burn = this.data.burnMax = this.getFuel();
this.activate();
}


if(this.data.burn==0&&this.data.ex>0){
this.data.ex--;
}

if(this.data.ex==0){
this.data.ex=0;
}

if(this.data.burn>0){
this.data.burn--;
}

if(this.data.burn==0){
this.deactivate();
}

this.container.setScale("sc1", this.data.ex / 400);
this.container.setScale("sc2", this.data.ex / 400);
this.container.setScale("sc3", this.data.ex / 400);
this.container.setScale("sc4", this.data.ex / 400);
this.container.setScale("sc5", this.data.burn / this.data.burnMax || 0);
this.container.setScale("sc6", this.data.burn / this.data.burnMax || 0);
},

getFuel: function(){
var fuelSlot = this.container.getSlot("s3");
if(fuelSlot.id > 0){
	
var burn = Recipes.getFuelBurnDuration(fuelSlot.id, fuelSlot.data);
if(burn){
	
if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data)){
var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
fuelSlot.id = empty.id;
fuelSlot.data = empty.data;
return burn;
}
fuelSlot.count--;
this.container.validateSlot("s3");
return burn;
   }
}
return 0;
     },
     
 init: Set.updateBlock,
});

TileRenderer.setRotationPlaceFunction(BlockID.fusion);
  
ModAPI.addAPICallback("ICore", function (api) {
    industrial_loaded = true;
});

ModAPI.addAPICallback("ThermalExpansionAPI", function (api) {
    industrial_loaded = true;
});

ModAPI.addAPICallback("ForestryAPI", function (api) {
    industrial_loaded = true;
});

ModAPI.addAPICallback("ATCore", function (api) {
    industrial_loaded = true;
});