//imports

//methods for mods
var nativeGetLightLevel = World.getLightLevel;

/*defines*/
Block.setPrototype("SPL",{ 
 type: Block.TYPE_BASE, 
 
 getVariations: function(){ 
 return [ 
   {name: "Lead Solar Panel", texture: [["SPL", 1], ["SPL", 0], ["SPL", 1], ["SPL", 1],["SPL", 1],["SPL", 1]], inCreative: false},   
 {name: "sgbottom", texture: [["SPL", 1],["SPL", 1], ["SPL", 1],["SPL", 1],["SPL", 1]]}, 
   ]; 
 } 
 
}); 

Block.setBlockShape(BlockID.SPL, {x: 0, y: 0, z: 0}, {x: 0.8, y: 0.7, z: 0.8}); 

Block.setPrototype("SPR",{ 
 type: Block.TYPE_BASE, 
 
 getVariations: function(){ 
 return [ 
   {name: "Redstone Solar Panel", texture: [["SPR", 1], ["SPR", 0], ["SPR", 1]], inCreative: false},   
 {name: "sgbottom", texture: [["SPR", 1]]}, 
   ]; 
 } 
 
}); 

Block.setBlockShape(BlockID.SPR, {x: 0, y: 0, z: 0}, {x: 0.8, y: 0.7, z: 0.8}); 
Block.setPrototype("SP",{ 
 type: Block.TYPE_BASE, 
 
 getVariations: function(){ 
 return [ 
   {name: "Reson Solar Panel", texture: [["SP", 1], ["SP", 0], ["SP", 1],["SP",1],["SP",1],["SP",1]], inCreative: false},   
 {name: "sgbottom", texture: [["SP", 2], ["SP", 1],["SP",1],["SP",1],["SP",1]]}, 
   {name: "sgstick", texture: [["SPH", 1],["SPH", 1],["SPH",1],["SPH",1],["SPH",1]]} 
   ]; 
 } 
 
}); 

Block.setBlockShape(BlockID.SP, {x: 0, y: 0, z: 0}, {x: 0.8, y: 0.7, z: 0.8}); 

  
Block.setPrototype("SPA",{ 
 type: Block.TYPE_BASE, 
 
 getVariations: function(){ 
 return [ 
   {name: "Advanced Solar Panel", texture: [["SPA", 1], ["SPA", 0], ["SPA", 1]], inCreative: false},   
 {name: "sgbottom", texture: [["SPA", 1]]}, 
   ]; 
 } 
 
}); 

Block.setBlockShape(BlockID.SPA, {x: 0, y: 0, z: 0}, {x: 0.8, y: 0.7, z: 0.8});

Block.setPrototype("SPU",{ 
 type: Block.TYPE_BASE, 
 
 getVariations: function(){ 
 return [ 
   {name: "Ultimate Solar Panel", texture: [["SPU", 1], ["SPU", 0], ["SPU", 1],["SPU",1],["SPU",1],["SPU",1]], inCreative: false},   
 {name: "sgbottom", texture: [["SPU", 1],["SPU",1],["SPU",1],["SPU",1],["SPU",1]]}, 
   ]; 
 } 
 
}); 
 
Block.setBlockShape(BlockID.SPU, {x: 0, y: 0, z: 0}, {x: 0.8, y: 0.7, z: 0.8}); 

MachineRegistry.registerPrototype(BlockID.SPL, {
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(nativeGetLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(8);
		}
	}
});

MachineRegistry.registerPrototype(BlockID.SPR, {
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(nativeGetLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(250);
		}
	}
});

MachineRegistry.registerPrototype(BlockID.SP, {
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(nativeGetLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(1000);
		}
	}
});

MachineRegistry.registerPrototype(BlockID.SPA, {
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(nativeGetLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(2500);
		}
	}
});

MachineRegistry.registerPrototype(BlockID.SPU, {
	isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(nativeGetLightLevel(this.x, this.y + 1, this.z) == 15){
			src.add(5000);
		}
		else {
		    src.add(30);
		}
	}
});

IDRegistry.genItemID("steel");
Item.createItem("steel", "Steel Ingot", {name: "steel"});
IDRegistry.genItemID("steel1");
Item.createItem("steel1", "Steel Nugget", {name: "steel", meta: 1});
IDRegistry.genItemID("lead");
Item.createItem("lead", "Lead Ingot", {name: "lead"});
IDRegistry.genItemID("lapisshard");
Item.createItem("lapisshard", "Lapis Shard", {name: "lapisShard"});
IDRegistry.genItemID("scl");
Item.createItem("scl", "Solar Core Lead", {name: "scl"});
IDRegistry.genItemID("scred");
Item.createItem("scred", "Solar Core Redstone", {name: "scred"});
IDRegistry.genItemID("scr");
Item.createItem("scr", "Solar Core Resonant", {name: "scr"});
IDRegistry.genItemID("sca");
Item.createItem("sca", "Solar Core Advanced", {name: "sca"});
IDRegistry.genItemID("scu");
Item.createItem("scu", "Solar Core Ultimate", {name: "scu"});
IDRegistry.genItemID("sepanel");
Item.createItem("sepanel", "Photovoltaic Cell", {name: "panel"});
//panels
IDRegistry.genItemID("SPL");
Item.createItem("SPL", "Solar Panel Lead", {name: "item_spl"});

IDRegistry.genItemID("SPR");
Item.createItem("SPR", "Solar Panel Redstone", {name: "item_spr"});

IDRegistry.genItemID("SP");
Item.createItem("SP", "Solar Panel Resonant", {name: "item_spr",meta: 1});

IDRegistry.genItemID("SPA");
Item.createItem("SPA", "Solar Panel Advanced", {name: "item_spa"});

IDRegistry.genItemID("SPU");
Item.createItem("SPU", "Solar Panel Ultumate", {name: "item_spu"});
//recipes inputs
Callback.addCallback("PostLoaded", function(){
Recipes.addFurnace(266, ItemID.steel, 0);

Recipes.addFurnace(BlockID.lead_ore,ItemID.lead,0);

//crafts

Recipes.addShaped({id: ItemID.sepanel, count: 1, data: 0}, [
		"aaa",
		"bbb",
		"ccc"
	], ['a', 102, 0, 'b',ItemID.lapisshard,0,'c', ItemID.lead,0]);
Recipes.addShaped({id: ItemID.lapisshard, count: 9, data: 0}, [
		"a"
	], ['a', 351, 4]);
Recipes.addShaped({id: ItemID.scl, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "
	], ['a', ItemID.lead, 0,'b', 265, 0]);
Recipes.addShaped({id: ItemID.scred, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "
	], ['a', 371, 0,'b', ItemID.scl, 0]);
Recipes.addShaped({id: ItemID.scr, count: 1, data: 0}, [
		" a ",
		"abc",
		" a "
	], ['a', ItemID.steel, 0,'b', ItemID.scl, 0,'c', 388, 0]);
Recipes.addShaped({id: ItemID.sca, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "
	], ['a', 351, 4,'b', ItemID.scr, 0]);
Recipes.addShaped({id: ItemID.scu, count: 1, data: 0}, [
		" a ",
		"aba",
		" a "
	], ['a', 351, 5,'b', ItemID.scl, 0]);

Recipes.addShaped({id: ItemID.SPL, count: 1, data: 0}, [
		"aaa",
		"cbc",
		"ddd"
	], ['a', ItemID.sepanel, 0,'c', 331, 0,'b', ItemID.scl, 0,'d', ItemID.steel1, 0]);
Recipes.addShaped({id: ItemID.SPR, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', ItemID.SPL,0,'c', 331, 0,'b', ItemID.scred, 0]);
Recipes.addShaped({id: ItemID.SP, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', ItemID.SPR,0,'c', 331, 0,'b', ItemID.scr, 0]);
	 Recipes.addShaped({id: ItemID.SPA, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', ItemID.SP, 0,'c', 331, 0,'b', ItemID.sca, 0]);
	 Recipes.addShaped({id: ItemID.SPU, count: 1, data: 0}, [
		"aaa",
		"aba",
		"aaa"
	], ['a', ItemID.SPA, 0,'c', 331, 0,'b', ItemID.scu, 0]);
	});
//ores
IDRegistry.genBlockID("lead_ore");
Block.createBlock("lead_ore", [
	{name: "Leadstone Ore", texture: [["lore", 0]], inCreative: true}
], Block.createSpecialType({
	base: 1,
	destroytime: 3
}, "ore"));
ToolAPI.registerBlockMaterial(BlockID.lead_ore, "stone", 2);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
        for (var i = 0; i < 9; i++) {
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 10, 57);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.lead_ore, 0, 1);
    }
});

addSolarGenerator = function(id, itemid){
Item.registerUseFunction(itemid, function(coords, item, block){
	var place = coords.relative;
	if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
		World.setBlock(place.x, place.y, place.z, BlockID[id]);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

 BlockRenderer.addRenderCallback(BlockID[id], function(api, coords) {
            api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0, 0.1, (0.1 + 0.8), (0 + 0.1), (0.8 + 0.1), BlockID[id], 1);
			
			api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.1, 0.3, (0.3 + 0.4), (0.1 + 0.1), (0.3 + 0.4), BlockID[id], 1);
			api.renderBoxId(coords.x, coords.y, coords.z, 0.4, 0.2, 0.4, (0.4 + 0.2), (0.2 + 0.4), (0.4 + 0.2), BlockID.SP, 2);
			api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.3, 0.3, (0.3 + 0.4), (0.3 + 0.1), (0.3 + 0.4), BlockID[id], 1);
			api.renderBoxId(coords.x, coords.y, coords.z, 0.3, 0.5, 0.3, (0.3 + 0.4), (0.5 + 0.1), (0.3 + 0.4), BlockID[id], 1);
			api.renderBoxId(coords.x, coords.y, coords.z, 0.1, 0.6, 0.1, (0.1 + 0.8), (0.6 + 0.1), (0.1 + 0.8), BlockID[id], 1);
			api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.7, 0, (0 + 1), (0.7 + 0.1), (0 + 1), BlockID[id], 0);    
			
        });

BlockRenderer.enableCustomRender(BlockID[id]);
Block.registerDropFunction(id, function(coords, blockID, blockData){
return [[ItemID[itemid], 1, 0]]
});
}

addSolarGenerator("SPL", "SPL");
addSolarGenerator("SPR", "SPR");
addSolarGenerator("SP", "SP");
addSolarGenerator("SPA", "SPA");
addSolarGenerator("SPU", "SPU");

