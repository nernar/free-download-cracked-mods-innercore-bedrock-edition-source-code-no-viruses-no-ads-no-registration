//Import

importLib("ToolAPI", "*");
importLib("BackpackAPI", "*");
importLib("ArmorAPI", "*");

//Backpack

Item.addCreativeGroup("backpack", "Backpack", [
    IDRegistry.genItemID("bbpid"),
    IDRegistry.genItemID("lbpid"),
    IDRegistry.genItemID("ibpid"),
    IDRegistry.genItemID("sbpid"),
    IDRegistry.genItemID("ebpid")
]);

Item.createItem("bbpid", "Backpack", {name: "BackPack", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.bbpid, {
	slots: 15,
	slotsCenter: true,
	inRow: 5
});

Item.createItem("lbpid", "Lead Backpack", {name: "BackPack", meta: 1}, {stack: 1});
BackpackRegistry.register(ItemID.lbpid, {
	slots: 27,
	slotsCenter: true,
	inRow: 9
});

Item.createItem("ibpid", "Invar Backpack", {name: "BackPack", meta: 2}, {stack: 1});
BackpackRegistry.register(ItemID.ibpid, {
	slots: 50,
	slotsCenter: true,
	inRow: 10
});

Item.createItem("sbpid", "Signalum Backpack", {name: "BackPack", meta: 3}, {stack: 1});
BackpackRegistry.register(ItemID.sbpid, {
	slots: 80,
	slotsCenter: true,
	inRow: 10
});

Item.createItem("ebpid", "Enderium Backpack", {name: "BackPack", meta: 4}, {stack: 1});
BackpackRegistry.register(ItemID.ebpid, {
	slots: 120,
	slotsCenter: true,
	inRow: 10
});


//Ingots

Item.addCreativeGroup("ingot", "Ingot", [
    IDRegistry.genItemID("icid"),
    IDRegistry.genItemID("itid"),
    IDRegistry.genItemID("ilid"),
    IDRegistry.genItemID("isid"),
    IDRegistry.genItemID("inid"),
    IDRegistry.genItemID("ipid"),
    IDRegistry.genItemID("ibid"),
    IDRegistry.genItemID("iiid"),
    IDRegistry.genItemID("ieid"),
    IDRegistry.genItemID("isgid"),
    IDRegistry.genItemID("ienid")
]);

Item.createItem("icid", "Copper Ingot", {name: "Ingot", meta: 0}, {stack: 64});
Item.createItem("itid", "Tin Ingot", {name: "Ingot", meta: 1}, {stack: 64});
Item.createItem("ilid", "Lead Ingot", {name: "Ingot", meta: 2}, {stack: 64});
Item.createItem("isid", "Silver Ingot", {name: "Ingot", meta: 3}, {stack: 64});
Item.createItem("inid", "Nickel Ingot", {name: "Ingot", meta: 4}, {stack: 64});
Item.createItem("ipid", "Platinum Ingot", {name: "Ingot", meta: 5}, {stack: 64});
Item.createItem("ibid", "Bronze Ingot", {name: "Ingot", meta: 6}, {stack: 64});
Item.createItem("iiid", "Invar Ingot", {name: "Ingot", meta: 7}, {stack: 64});
Item.createItem("ieid", "Electrum Ingot", {name: "Ingot", meta: 8}, {stack: 64});
Item.createItem("isgid", "Signalum Ingot", {name: "Ingot", meta: 9}, {stack: 64});
Item.createItem("ienid", "Enderium Ingot", {name: "Ingot", meta: 10}, {stack: 64});

//Nuggets

Item.addCreativeGroup("nugget", "Nugget", [
    IDRegistry.genItemID("ncid"),
    IDRegistry.genItemID("ntid"),
    IDRegistry.genItemID("nlid"),
    IDRegistry.genItemID("nsid"),
    IDRegistry.genItemID("nnid"),
    IDRegistry.genItemID("npid"),
    IDRegistry.genItemID("nbid"),
    IDRegistry.genItemID("niid"),
    IDRegistry.genItemID("neid"),
    IDRegistry.genItemID("nsgid"),
    IDRegistry.genItemID("nenid")
]);

Item.createItem("ncid", "Copper Nugget", {name: "Nugget", meta: 0}, {stack: 64});
Item.createItem("ntid", "Tin Nugget", {name: "Nugget", meta: 1}, {stack: 64});
Item.createItem("nlid", "Lead Nugget", {name: "Nugget", meta: 2}, {stack: 64});
Item.createItem("nsid", "Silver Nugget", {name: "Nugget", meta: 3}, {stack: 64});
Item.createItem("nnid", "Nickel Nugget", {name: "Nugget", meta: 4}, {stack: 64});
Item.createItem("npid", "Platinum Nugget", {name: "Nugget", meta: 5}, {stack: 64});
Item.createItem("nbid", "Bronze Nugget", {name: "Nugget", meta: 6}, {stack: 64});
Item.createItem("niid", "Invar Nugget", {name: "Nugget", meta: 7}, {stack: 64});
Item.createItem("neid", "Electrum Nugget", {name: "Nugget", meta: 8}, {stack: 64});
Item.createItem("nsgid", "Signalum Nugget", {name: "Nugget", meta: 9}, {stack: 64});
Item.createItem("nenid", "Enderium Nugget", {name: "Nugget", meta: 10}, {stack: 64});

//Dusts


Item.addCreativeGroup("dust", "Dust", [
    IDRegistry.genItemID("dcoid"),
    IDRegistry.genItemID("dccid"),
    IDRegistry.genItemID("dirid"),
    IDRegistry.genItemID("dgid"),
    IDRegistry.genItemID("doid"),
    IDRegistry.genItemID("dntid"),
    IDRegistry.genItemID("dcid"),
    IDRegistry.genItemID("dtid"),
    IDRegistry.genItemID("dlid"),
    IDRegistry.genItemID("dsid"),
    IDRegistry.genItemID("dnid"),
    IDRegistry.genItemID("dpid"),
    IDRegistry.genItemID("dbid"),
    IDRegistry.genItemID("diid"),
    IDRegistry.genItemID("deid"),
    IDRegistry.genItemID("dsgid"),
    IDRegistry.genItemID("denid")
]);

Item.createItem("dcoid", "Coal Dust", {name: "Coal_dust", meta: 0}, {stack: 64});
Item.createItem("dccid", "Charcoal Dust", {name: "Coal_dust", meta: 1}, {stack: 64});
Item.createItem("dirid", "Iron Dust", {name: "Iron_dust", meta: 0}, {stack: 64});
Item.createItem("dgid", "Gold Dust", {name: "Gold_dust", meta: 0}, {stack: 64});
Item.createItem("doid", "Obsidian Dust", {name: "Obsidian_dust", meta: 0}, {stack: 64});
Item.createItem("dntid", "Netherite Dust", {name: "Netherite_dust", meta: 0}, {stack: 64});
Item.createItem("dcid", "Copper Dust", {name: "Dust", meta: 0}, {stack: 64});
Item.createItem("dtid", "Tin Dust", {name: "Dust", meta: 1}, {stack: 64});
Item.createItem("dlid", "Lead Dust", {name: "Dust", meta: 2}, {stack: 64});
Item.createItem("dsid", "Silver Dust", {name: "Dust", meta: 3}, {stack: 64});
Item.createItem("dnid", "Nickel Dust", {name: "Dust", meta: 4}, {stack: 64});
Item.createItem("dpid", "Platinum Dust", {name: "Dust", meta: 5}, {stack: 64});
Item.createItem("dbid", "Bronze Dust", {name: "Dust", meta: 6}, {stack: 64});
Item.createItem("diid", "Invar Dust", {name: "Dust", meta: 7}, {stack: 64});
Item.createItem("deid", "Electrum Dust", {name: "Dust", meta: 8}, {stack: 64});
Item.createItem("dsgid", "Signalum Dust", {name: "Dust", meta: 9}, {stack: 64});
Item.createItem("denid", "Enderium Dust", {name: "Dust", meta: 10}, {stack: 64});

//Itens

IDRegistry.genItemID("sfid");
Item.createItem("sfid", "Sulfur\n§6§odrop from nether mobs", {name: "Sulfur", meta: 0}, {stack: 64});
IDRegistry.genItemID("nitid");
Item.createItem("nitid", "Niter\n§e§odrop from husk", {name: "Niter", meta: 0}, {stack: 64});
IDRegistry.genItemID("ishid");
Item.createItem("ishid", "Ice Shard", {name: "Ice_shard", meta: 0}, {stack: 64});
IDRegistry.genItemID("fdid");
Item.createItem("fdid", "Firotheum Dust", {name: "Firotheum_dust", meta: 0}, {stack: 64});
IDRegistry.genItemID("cdid");
Item.createItem("cdid", "Cryotheum Dust", {name: "Cryotheum_dust", meta: 0}, {stack: 64});
IDRegistry.genItemID("ndid");
Item.createItem("ndid", "Netrotheum Dust", {name: "Netrotheum_dust", meta: 0}, {stack: 64});
IDRegistry.genItemID("pfrid");
Item.createItem("pfrid", "Petrium Fragment", {name: "Petrium_fragment", meta: 0}, {stack: 64});

//Armor

Helmet.addArmor("AHcid", "Copper", 1, 150, 6);
Chestplate.addArmor("ACcid", "Copper", 1, 180, 6);
Leggings.addArmor("ALcid", "Copper", 1, 170, 6);
Boots.addArmor("ABcid", "Copper", 1, 160, 6);


Helmet.addArmor("AHtid", "Tin", 2, 130, 7);
Chestplate.addArmor("ACtid", "Tin", 3, 150, 7);
Leggings.addArmor("ALtid", "Tin", 2, 145, 7);
Boots.addArmor("ABtid", "Tin", 1, 135, 7);


Helmet.addArmor("AHlid", "Lead", 2, 320, 3);
Chestplate.addArmor("AClid", "Lead", 4, 360, 3);
Leggings.addArmor("ALlid", "Lead", 3, 350, 3);
Boots.addArmor("ABlid", "Lead", 2, 335, 3);


Helmet.addArmor("AHsid", "Silver", 2, 180, 12);
Chestplate.addArmor("ACsid", "Silver", 5, 220, 12);
Leggings.addArmor("ALsid", "Silver", 5, 210, 12);
Boots.addArmor("ABsid", "Silver", 2, 195, 12);


Helmet.addArmor("AHnid", "Nickel", 3, 170, 8);
Chestplate.addArmor("ACnid", "Nickel", 5, 210, 8);
Leggings.addArmor("ALnid", "Nickel", 5, 200, 8);
Boots.addArmor("ABnid", "Nickel", 2, 185, 8);


Helmet.addArmor("AHpid", "Platinum", 4, 710, 16);
Chestplate.addArmor("ACpid", "Platinum", 8, 750, 16);
Leggings.addArmor("ALpid", "Platinum", 6, 740, 16);
Boots.addArmor("ABpid", "Platinum", 3, 725, 16);


Helmet.addArmor("AHbid", "Bronze", 2, 220, 9);
Chestplate.addArmor("ACbid", "Bronze", 6, 260, 9);
Leggings.addArmor("ALbid", "Bronze", 5, 250, 9);
Boots.addArmor("ABbid", "Bronze", 2, 235, 9);


Helmet.addArmor("AHiid", "Invar", 3, 330, 15);
Chestplate.addArmor("ACiid", "Invar", 7, 380, 15);
Leggings.addArmor("ALiid", "Invar", 6, 360, 15);
Boots.addArmor("ABiid", "Invar", 2, 345, 15);


Helmet.addArmor("AHeid", "Electrum", 3, 130, 19);
Chestplate.addArmor("ACeid", "Electrum", 6, 170, 19);
Leggings.addArmor("ALeid", "Electrum", 5, 160, 19);
Boots.addArmor("ABeid", "Electrum", 2, 145, 19);


Helmet.addArmor("AHsgid", "Signalum", 3, 385, 13);
Chestplate.addArmor("ACsgid", "Signalum", 7, 410, 13);
Leggings.addArmor("ALsgid", "Signalum", 5, 400, 13);
Boots.addArmor("ABsgid", "Signalum", 3, 370, 13);


Helmet.addArmor("AHenid", "Enderium", 6, 1730, 27);
Chestplate.addArmor("ACenid", "Enderium", 11, 1780, 27);
Leggings.addArmor("ALenid", "Enderium", 8, 1760, 27);
Boots.addArmor("ABenid", "Enderium", 5, 1740, 27);


ARMOR.setMode({
	id: ItemID.AHlid,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 2, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.AClid,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 2, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ALlid,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 2, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ABlid,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 2, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ACpid,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 11, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.AHenid,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 13, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.AHenid,
	type: [0],
	tick: function(){
	   Entity.addEffect(Player.get(), 16, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ACenid,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 11, 1, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ACenid,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 3, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ACenid,
	type: [1],
	tick: function(){
	   Entity.addEffect(Player.get(), 5, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ALenid,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 1, 1, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ALenid,
	type: [2],
	tick: function(){
	   Entity.addEffect(Player.get(), 10, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ABenid,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 12, 0, 14, false,false);
	}
});
ARMOR.setMode({
	id: ItemID.ABenid,
	type: [3],
	tick: function(){
	   Entity.addEffect(Player.get(), 8, 1, 14, false,false);
	}
});

//Tools

ToolAPI.addToolMaterial("Coppertool", {durability: 180, level: 2, efficiency: 3, damage: 5, enchantability: 6});
ToolAPI.addToolMaterial("Tintool", {durability: 150, level: 2, efficiency: 4, damage: 4, enchantability: 7});
ToolAPI.addToolMaterial("Leadtool", {durability: 360, level: 3, efficiency: 4, damage: 5, enchantability: 3});
ToolAPI.addToolMaterial("Silvertool", {durability: 220, level: 3, efficiency: 5, damage: 6, enchantability: 12});
ToolAPI.addToolMaterial("Nickeltool", {durability: 210, level: 3, efficiency: 7, damage: 6, enchantability: 8});
ToolAPI.addToolMaterial("Platinumtool", {durability: 750, level: 4, efficiency: 12, damage: 8, enchantability: 16});
ToolAPI.addToolMaterial("Bronzetool", {durability: 260, level: 3, efficiency: 6, damage: 6, enchantability: 9});
ToolAPI.addToolMaterial("Invartool", {durability: 380, level: 3, efficiency: 7, damage: 7, enchantability: 15});
ToolAPI.addToolMaterial("Electrumtool", {durability: 170, level: 3, efficiency: 10, damage: 6, enchantability: 19});
ToolAPI.addToolMaterial("Signalumtool", {durability: 410, level: 3, efficiency: 8, damage: 7, enchantability: 13});
ToolAPI.addToolMaterial("Enderiumtool", {durability: 1780, level: 4, efficiency: 17, damage: 11, enchantability: 27});

Item.addCreativeGroup("sword", "Sword", [
    IDRegistry.genItemID("Swcid"),
    IDRegistry.genItemID("Swtid"),
    IDRegistry.genItemID("Swlid"),
    IDRegistry.genItemID("Swsid"),
    IDRegistry.genItemID("Swnid"),
    IDRegistry.genItemID("Swpid"),
    IDRegistry.genItemID("Swbid"),
    IDRegistry.genItemID("Swiid"),
    IDRegistry.genItemID("Sweid"),
    IDRegistry.genItemID("Swsgid"),
    IDRegistry.genItemID("Swenid")
]);
Item.addCreativeGroup("axe", "Axe", [
    IDRegistry.genItemID("Axcid"),
    IDRegistry.genItemID("Axtid"),
    IDRegistry.genItemID("Axlid"),
    IDRegistry.genItemID("Axsid"),
    IDRegistry.genItemID("Axnid"),
    IDRegistry.genItemID("Axpid"),
    IDRegistry.genItemID("Axbid"),
    IDRegistry.genItemID("Axiid"),
    IDRegistry.genItemID("Axeid"),
    IDRegistry.genItemID("Axsgid"),
    IDRegistry.genItemID("Axenid")
]);
Item.addCreativeGroup("pickaxe", "Pickaxe", [
    IDRegistry.genItemID("Picid"),
    IDRegistry.genItemID("Pitid"),
    IDRegistry.genItemID("Pilid"),
    IDRegistry.genItemID("Pisid"),
    IDRegistry.genItemID("Pinid"),
    IDRegistry.genItemID("Pipid"),
    IDRegistry.genItemID("Pibid"),
    IDRegistry.genItemID("Piiid"),
    IDRegistry.genItemID("Pieid"),
    IDRegistry.genItemID("Pisgid"),
    IDRegistry.genItemID("Pienid")
]);
Item.addCreativeGroup("shovel", "Shovel", [
    IDRegistry.genItemID("Shcid"),
    IDRegistry.genItemID("Shtid"),
    IDRegistry.genItemID("Shlid"),
    IDRegistry.genItemID("Shsid"),
    IDRegistry.genItemID("Shnid"),
    IDRegistry.genItemID("Shpid"),
    IDRegistry.genItemID("Shbid"),
    IDRegistry.genItemID("Shiid"),
    IDRegistry.genItemID("Sheid"),
    IDRegistry.genItemID("Shsgid"),
    IDRegistry.genItemID("Shenid")
]);
Item.addCreativeGroup("hoe", "Hoe", [
    IDRegistry.genItemID("Hocid"),
    IDRegistry.genItemID("Hotid"),
    IDRegistry.genItemID("Holid"),
    IDRegistry.genItemID("Hosid"),
    IDRegistry.genItemID("Honid"),
    IDRegistry.genItemID("Hopid"),
    IDRegistry.genItemID("Hobid"),
    IDRegistry.genItemID("Hoiid"),
    IDRegistry.genItemID("Hoeid"),
    IDRegistry.genItemID("Hosgid"),
    IDRegistry.genItemID("Hoenid")
]);

Item.createItem("Swcid", "Copper Sword", {name: "Copper_tool", meta: 0}, {stack: 1});
Item.createItem("Swtid", "Tin Sword", {name: "Tin_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swtid, "Tintool", ToolType.sword);
Item.createItem("Swlid", "Lead Sword", {name: "Lead_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swlid, "Leadtool", ToolType.sword);
Item.createItem("Swsid", "Silver Sword", {name: "Silver_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swsid, "Silvertool", ToolType.sword);
Item.createItem("Swnid", "Nickel Sword", {name: "Nickel_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swnid, "Nickeltool", ToolType.sword);
Item.createItem("Swpid", "Platinum Sword", {name: "Platinum_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swpid, "Platinumtool", ToolType.sword);
Item.createItem("Swbid", "Bronze Sword", {name: "Bronze_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swbid, "Bronzetool", ToolType.sword);
Item.createItem("Swiid", "Invar Sword", {name: "Invar_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swiid, "Invartool", ToolType.sword);
Item.createItem("Sweid", "Electrum Sword", {name: "Electrum_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Sweid, "Electrumtool", ToolType.sword);
Item.createItem("Swsgid", "Signalum Sword", {name: "Signalum_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swsgid, "Signalumtool", ToolType.sword);
Item.createItem("Swenid", "Enderium Sword", {name: "Enderium_tool", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.Swenid, "Enderiumtool", ToolType.sword);


Item.createItem("Axcid", "Copper Axe", {name: "Copper_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axcid, "Coppertool", ToolType.axe);
Item.createItem("Axtid", "Tin Axe", {name: "Tin_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axtid, "Tintool", ToolType.axe);
Item.createItem("Axlid", "Lead Axe", {name: "Lead_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axlid, "Leadtool", ToolType.axe);
Item.createItem("Axsid", "Silver Axe", {name: "Silver_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axsid, "Silvertool", ToolType.axe);
Item.createItem("Axnid", "Nickel Axe", {name: "Nickel_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axnid, "Nickeltool", ToolType.axe);
Item.createItem("Axpid", "Platinum Axe", {name: "Platinum_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axpid, "Platinumtool", ToolType.axe);
Item.createItem("Axbid", "Bronze Axe", {name: "Bronze_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axbid, "Bronzetool", ToolType.axe);
Item.createItem("Axiid", "Invar Axe", {name: "Invar_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axiid, "Invartool", ToolType.axe);
Item.createItem("Axeid", "Electrum Axe", {name: "Electrum_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axeid, "Electrumtool", ToolType.axe);
Item.createItem("Axsgid", "Signalum Axe", {name: "Signalum_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axsgid, "Signalumtool", ToolType.axe);
Item.createItem("Axenid", "Enderium Axe", {name: "Enderium_tool", meta: 1}, {stack: 1});
ToolAPI.setTool(ItemID.Axenid, "Enderiumtool", ToolType.axe);


Item.createItem("Picid", "Copper Pickaxe", {name: "Copper_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Picid, "Coppertool", ToolType.pickaxe);
Item.createItem("Pitid", "Tin Pickaxe", {name: "Tin_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pitid, "Tintool", ToolType.pickaxe);
Item.createItem("Pilid", "Lead Pickaxe", {name: "Lead_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pilid, "Leadtool", ToolType.pickaxe);
Item.createItem("Pisid", "Silver Pickaxe", {name: "Silver_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pisid, "Silvertool", ToolType.pickaxe);
Item.createItem("Pinid", "Nickel Pickaxe", {name: "Nickel_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pinid, "Nickeltool", ToolType.pickaxe);
Item.createItem("Pipid", "Platinum Pickaxe", {name: "Platinum_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pipid, "Platinumtool", ToolType.pickaxe);
Item.createItem("Pibid", "Bronze Pickaxe", {name: "Bronze_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pibid, "Bronzetool", ToolType.pickaxe);
Item.createItem("Piiid", "Invar Pickaxe", {name: "Invar_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Piiid, "Invartool", ToolType.pickaxe);
Item.createItem("Pieid", "Electrum Pickaxe", {name: "Electrum_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pieid, "Electrumtool", ToolType.pickaxe);
Item.createItem("Pisgid", "Signalum Pickaxe", {name: "Signalum_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pisgid, "Signalumtool", ToolType.pickaxe);
Item.createItem("Pienid", "Enderium Pickaxe", {name: "Enderium_tool", meta: 2}, {stack: 1});
ToolAPI.setTool(ItemID.Pienid, "Enderiumtool", ToolType.pickaxe);


Item.createItem("Shcid", "Copper Shovel", {name: "Copper_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shcid, "Coppertool", ToolType.shovel);
Item.createItem("Shtid", "Tin Shovel", {name: "Tin_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shtid, "Tintool", ToolType.shovel);
Item.createItem("Shlid", "Lead Shovel", {name: "Lead_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shlid, "Leadtool", ToolType.shovel);
Item.createItem("Shsid", "Silver Shovel", {name: "Silver_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shsid, "Silvertool", ToolType.shovel);
Item.createItem("Shnid", "Nickel Shovel", {name: "Nickel_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shnid, "Nickeltool", ToolType.shovel);
Item.createItem("Shpid", "Platinum Shovel", {name: "Platinum_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shpid, "Platinumtool", ToolType.shovel);
Item.createItem("Shbid", "Bronze Shovel", {name: "Bronze_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shbid, "Bronzetool", ToolType.shovel);
Item.createItem("Shiid", "Invar Shovel", {name: "Invar_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shiid, "Invartool", ToolType.shovel);
Item.createItem("Sheid", "Electrum Shovel", {name: "Electrum_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Sheid, "Electrumtool", ToolType.shovel);
Item.createItem("Shsgid", "Signalum Shovel", {name: "Signalum_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shsgid, "Signalumtool", ToolType.shovel);
Item.createItem("Shenid", "Enderium Shovel", {name: "Enderium_tool", meta: 3}, {stack: 1});
ToolAPI.setTool(ItemID.Shenid, "Enderiumtool", ToolType.shovel);


Item.createItem("Hocid", "Copper Hoe", {name: "Copper_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hocid, "Coppertool", ToolType.hoe);
Item.createItem("Hotid", "Tin Hoe", {name: "Tin_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hotid, "Tintool", ToolType.hoe);
Item.createItem("Holid", "Lead Hoe", {name: "Lead_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Holid, "Leadtool", ToolType.hoe);
Item.createItem("Hosid", "Silver Hoe", {name: "Silver_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hosid, "Silvertool", ToolType.hoe);
Item.createItem("Honid", "Nickel Hoe", {name: "Nickel_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Honid, "Nickeltool", ToolType.hoe);
Item.createItem("Hopid", "Platinum Hoe", {name: "Platinum_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hopid, "Platinumtool", ToolType.hoe);
Item.createItem("Hobid", "Bronze Hoe", {name: "Bronze_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hobid, "Bronzetool", ToolType.hoe);
Item.createItem("Hoiid", "Invar Hoe", {name: "Invar_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hoiid, "Invartool", ToolType.hoe);
Item.createItem("Hoeid", "Electrum Hoe", {name: "Electrum_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hoeid, "Electrumtool", ToolType.hoe);
Item.createItem("Hosgid", "Signalum Hoe", {name: "Signalum_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hosgid, "Signalumtool", ToolType.hoe);
Item.createItem("Hoenid", "Enderium Hoe", {name: "Enderium_tool", meta: 4}, {stack: 1});
ToolAPI.setTool(ItemID.Hoenid, "Enderiumtool", ToolType.hoe);

//Blocks

Item.addCreativeGroup("blocks", "Bolcks", [
    IDRegistry.genBlockID("bcid"),
    IDRegistry.genBlockID("btid"),
    IDRegistry.genBlockID("blid"),
    IDRegistry.genBlockID("bsid"),
    IDRegistry.genBlockID("bnid"),
    IDRegistry.genBlockID("bpid"),
    IDRegistry.genBlockID("bbid"),
    IDRegistry.genBlockID("biid"),
    IDRegistry.genBlockID("beid"),
    IDRegistry.genBlockID("bsgid"),
    IDRegistry.genBlockID("benid"),
    IDRegistry.genBlockID("bpeid")
]);

Block.createBlock("bcid", [{name: "Copper Block", texture: [["Copper_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bcid, "stone", 2, true);
Block.setDestroyTime(BlockID.bcid, 2.0);

Block.createBlock("btid", [{name: "Tin Block", texture: [["Tin_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.btid, "stone", 2, true);
Block.setDestroyTime(BlockID.btid, 1.8);

Block.createBlock("blid", [{name: "Lead Block", texture: [["Lead_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.blid, "stone", 3, true);
Block.setDestroyTime(BlockID.blid, 3.1);

Block.createBlock("bsid", [{name: "Silver Block", texture: [["Silver_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bsid, "stone", 3, true);
Block.setDestroyTime(BlockID.bsid, 2.5);

Block.createBlock("bnid", [{name: "Nickel Block", texture: [["Nickel_block", 0],["Nickel_block", 1],["Nickel_block", 2],["Nickel_block", 2],["Nickel_block", 3],["Nickel_block", 3],], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bnid, "stone", 3, true);
Block.setDestroyTime(BlockID.bnid, 2.7);

Block.createBlock("bpid", [{name: "Platinum Block", texture: [["Platinum_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bpid, "stone", 4, true);
Block.setDestroyTime(BlockID.bpid, 4.8);

Block.createBlock("bbid", [{name: "Bronze Block", texture: [["Bronze_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bbid, "stone", 3, true);
Block.setDestroyTime(BlockID.bbid, 2.4);

Block.createBlock("biid", [{name: "Invar Block", texture: [["Invar_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.biid, "stone", 3, true);
Block.setDestroyTime(BlockID.biid, 3.2);

Block.createBlock("beid", [{name: "Electrum Block", texture: [["Electrum_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.beid, "stone", 3, true);
Block.setDestroyTime(BlockID.beid, 3.4);

Block.createBlock("bsgid", [{name: "Signalum Block", texture: [["Signalum_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bsgid, "stone", 3, true);
Block.setDestroyTime(BlockID.bsgid, 4.2);

Block.createBlock("benid", [{name: "Enderium Block", texture: [["Enderium_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.benid, "stone", 4, true);
Block.setDestroyTime(BlockID.benid, 5.6);

Block.createBlock("bpeid", [{name: "Petrium Block", texture: [["Petrium_block", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.bpeid, "stone", 3, true);
Block.setDestroyTime(BlockID.bpeid, 26.6);

//Ores

Item.addCreativeGroup("ores", "Ores", [
    IDRegistry.genBlockID("ocid"),
    IDRegistry.genBlockID("otid"),
    IDRegistry.genBlockID("olid"),
    IDRegistry.genBlockID("osid"),
    IDRegistry.genBlockID("onid"),
    IDRegistry.genBlockID("opid"),
    IDRegistry.genBlockID("opeid")
]);

Block.createBlock("ocid", [{name: "Copper Ore", texture: [["Ore_Copper", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.ocid, "stone", 2, true);
Block.setDestroyTime(BlockID.ocid, 2.0);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 20, 80);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ocid, 0, 12);
	}
});

Block.createBlock("otid", [{name: "Tin Ore", texture: [["Ore_Tin", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.otid, "stone", 1, true);
Block.setDestroyTime(BlockID.otid, 1.8);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 60);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.otid, 0, 11);
	}
});

Block.createBlock("olid", [{name: "Lead Ore", texture: [["Ore_Lead", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.olid, "stone", 3, true);
Block.setDestroyTime(BlockID.olid, 3.1);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 45);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.olid, 0, 9);
	}
});

Block.createBlock("osid", [{name: "Silver Ore", texture: [["Ore_Silver", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.osid, "stone", 3, true);
Block.setDestroyTime(BlockID.osid, 2.5);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 45);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.osid, 0, 9);
	}
});

Block.createBlock("onid", [{name: "Nickel Ore", texture: [["Ore_Nickel", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.onid, "stone", 3, true);
Block.setDestroyTime(BlockID.onid, 2.7);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.onid, 0, 6);
	}
});

Block.createBlock("opid", [{name: "Platinum Ore", texture: [["Ore_Platinum", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.opid, "stone", 4, true);
Block.setDestroyTime(BlockID.opid, 4.8);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 25);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.opid, 0, 2);
	}
});

Block.createBlock("opeid", [{name: "Petrium Ore", texture: [["Ore_Petrium", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.opeid, "stone", 3, true);
Block.setDestroyTime(BlockID.opeid, 21.8);
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	for(var i = 0; i < 10; i++){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 85);
		GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.opeid, 0, 8);
	}
});
Block.registerDropFunction("opeid", function(coords, blockID, blockData, level){
	if (level > 3){
		return [[ItemID.pfrid,1 + Math.random() * 0,0]]
	}
	return [];
}, 1);


//Craft

  Recipes.addShaped({id: ItemID.bbpid, count: 1, data: 0 }, ["aaa", "bcb", "aaa"], ['a', VanillaItemID.leather, 0, 'b', VanillaItemID.string, 0, 'c', VanillaBlockID.chest, 0]);

  Recipes.addShaped({id: ItemID.lbpid, count: 1, data: 0 }, ["aaa", "aba", "aaa"], ['a', ItemID.ilid, 0, 'b', ItemID.bbpid, 0]);

  Recipes.addShaped({id: ItemID.ibpid, count: 1, data: 0 }, ["aca", "aba", "aaa"], ['a', ItemID.iiid, 0, 'b', ItemID.lbpid, 0, 'c', BlockID.biid, 0]);

  Recipes.addShaped({id: ItemID.sbpid, count: 1, data: 0 }, ["aca", "aba", "aaa"], ['a', ItemID.isgid, 0, 'b', ItemID.ibpid, 0, 'c', BlockID.bsgid, 0]);

  Recipes.addShaped({id: ItemID.ebpid, count: 1, data: 0 }, ["aaa", "aba", "aaa"], ['a', ItemID.ienid, 0, 'b', ItemID.sbpid, 0]);



  Recipes.addShaped({id: ItemID.icid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dcid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.icid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ncid, 0]);

  Recipes.addShaped({id: ItemID.icid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bcid, 0]);

  Recipes.addShaped({id: ItemID.itid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dtid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.itid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ntid, 0]);

  Recipes.addShaped({id: ItemID.itid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.btid, 0]);

  Recipes.addShaped({id: ItemID.ilid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dlid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.ilid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.nlid, 0]);

  Recipes.addShaped({id: ItemID.ilid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.blid, 0]);

  Recipes.addShaped({id: ItemID.isid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dsid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.isid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.nsid, 0]);

  Recipes.addShaped({id: ItemID.isid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bsid, 0]);

  Recipes.addShaped({id: ItemID.inid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dnid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.inid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.nnid, 0]);

  Recipes.addShaped({id: ItemID.inid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bnid, 0]);

  Recipes.addShaped({id: ItemID.ipid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dpid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.ipid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.npid, 0]);

  Recipes.addShaped({id: ItemID.ipid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bpid, 0]);

  Recipes.addShaped({id: ItemID.ibid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dbid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.ibid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.nbid, 0]);

  Recipes.addShaped({id: ItemID.ibid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bbid, 0]);

  Recipes.addShaped({id: ItemID.iiid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.diid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.iiid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.niid, 0]);

  Recipes.addShaped({id: ItemID.iiid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.biid, 0]);

  Recipes.addShaped({id: ItemID.ieid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.deid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.ieid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.neid, 0]);

  Recipes.addShaped({id: ItemID.ieid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.beid, 0]);

  Recipes.addShaped({id: ItemID.isgid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dsgid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.isgid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.nsgid, 0]);

  Recipes.addShaped({id: ItemID.isgid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bsgid, 0]);

  Recipes.addShaped({id: ItemID.ienid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.denid, 0, 'b', ItemID.cdid, 0]);

  Recipes.addShaped({id: ItemID.ienid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.nenid, 0]);

  Recipes.addShaped({id: ItemID.ienid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.benid, 0]);

  Recipes.addShaped({id: ItemID.pfrid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', BlockID.bpeid, 0]);



  Recipes.addShaped({id: ItemID.ncid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.icid, 0]);

  Recipes.addShaped({id: ItemID.ntid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.itid, 0]);

  Recipes.addShaped({id: ItemID.nlid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: ItemID.nsid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.isid, 0]);

  Recipes.addShaped({id: ItemID.nnid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.inid, 0]);

  Recipes.addShaped({id: ItemID.npid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.ipid, 0]);

  Recipes.addShaped({id: ItemID.nbid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.ibid, 0]);

  Recipes.addShaped({id: ItemID.niid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.iiid, 0]);

  Recipes.addShaped({id: ItemID.neid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.ieid, 0]);

  Recipes.addShaped({id: ItemID.nsgid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.isgid, 0]);

  Recipes.addShaped({id: ItemID.nenid, count: 9, data: 0 }, ["abb", "bbb", "bbb"], ['a', ItemID.ienid, 0]);



  Recipes.addShaped({id: ItemID.dcoid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaItemID.coal, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dcoid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.coal_ore, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dcoid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.coal_ore, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaItemID.charcoal, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.log, 1, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.log, 2, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.log, 3, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.log2, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.log2, 1, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.stripped_oak_log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.stripped_spruce_log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.stripped_birch_log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.stripped_jungle_log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.stripped_acacia_log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dccid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.stripped_dark_oak_log, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dirid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.iron_ore, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dirid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.iron_ore, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dirid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaItemID.iron_ingot, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dgid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.gold_ore, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dgid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.gold_ore, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dgid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaItemID.gold_ingot, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.doid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.obsidian, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.doid, count: 4, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.obsidian, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dntid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaItemID.netherite_scrap, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dntid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaItemID.netherite_scrap, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dntid, count: 4, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.ancient_debris, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dcid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.ocid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dcid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.ocid, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dcid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.icid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dtid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.otid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dtid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.otid, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dtid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.itid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dlid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.olid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dlid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.olid, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dlid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.ilid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dsid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.osid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dsid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.osid, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dsid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.isid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dnid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.onid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dnid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.onid, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dnid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.inid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dpid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.opid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dpid, count: 3, data: 0 }, ["abc", "ccc", "ccc"], ['a', BlockID.opid, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.dpid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.ipid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dbid, count: 4, data: 0 }, ["aac", "abc", "ccc"], ['a', ItemID.dcid, 0, 'b', ItemID.dtid, 0]);

  Recipes.addShaped({id: ItemID.dbid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.ibid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.diid, count: 3, data: 0 }, ["bac", "acc", "ccc"], ['a', ItemID.dirid, 0, 'b', ItemID.dnid, 0]);

  Recipes.addShaped({id: ItemID.diid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.iiid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.deid, count: 2, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dgid, 0, 'b', ItemID.dsid, 0]);

  Recipes.addShaped({id: ItemID.deid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.ieid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dsgid, count: 2, data: 0 }, ["aae", "abe", "cde"], ['a', ItemID.dcid, 0, 'b', ItemID.dsid, 0, 'c', VanillaBlockID.redstone_block, 0, 'd', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.dsgid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.isgid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: ItemID.denid, count: 1, data: 0 }, ["aac", "ebc", "dcc"], ['a', ItemID.dsid, 0, 'b', ItemID.dpid, 0, 'c', VanillaItemID.ender_pearl, 0, 'd', ItemID.ndid, 0, 'e', ItemID.dtid, 0]);

  Recipes.addShaped({id: ItemID.denid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.ienid, 0, 'b', ItemID.fdid, 0]);



  Recipes.addShaped({id: ItemID.ishid, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', VanillaBlockID.blue_ice, 0, 'b', ItemID.ndid, 0]);

  Recipes.addShaped({id: ItemID.fdid, count: 2, data: 0 }, ["abe", "cde", "eee"], ['a', VanillaItemID.redstone, 0, 'b', ItemID.dcoid, 0, 'c', VanillaItemID.blaze_powder, 0, 'd', ItemID.sfid, 0]);

  Recipes.addShaped({id: ItemID.fdid, count: 2, data: 0 }, ["abe", "cde", "eee"], ['a', VanillaItemID.redstone, 0, 'b', ItemID.dccid, 0, 'c', VanillaItemID.blaze_powder, 0, 'd', ItemID.sfid, 0]);

  Recipes.addShaped({id: ItemID.cdid, count: 2, data: 0 }, ["abe", "cde", "eee"], ['a', VanillaItemID.redstone, 0, 'b', ItemID.nitid, 0, 'c', VanillaItemID.snowball, 0, 'd', ItemID.ishid, 0]);

  Recipes.addShaped({id: ItemID.ndid, count: 2, data: 0 }, ["abe", "cde", "eee"], ['a', ItemID.fdid, 0, 'b', ItemID.doid, 0, 'c', ItemID.pfrid, 0, 'd', ItemID.dntid, 0]);



  Recipes.addShaped({id: ItemID.AHcid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.icid, 0]);

  Recipes.addShaped({id: ItemID.AHtid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.itid, 0]);

  Recipes.addShaped({id: ItemID.AHlid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: ItemID.AHsid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.isid, 0]);

  Recipes.addShaped({id: ItemID.AHnid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.inid, 0]);

  Recipes.addShaped({id: ItemID.AHpid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: ItemID.AHbid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.ibid, 0]);

  Recipes.addShaped({id: ItemID.AHiid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.iiid, 0]);

  Recipes.addShaped({id: ItemID.AHeid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.ieid, 0]);

  Recipes.addShaped({id: ItemID.AHsgid, count: 1, data: 0 }, ["aaa", "aba", "bbb"], ['a', ItemID.isgid, 0]);

  Recipes.addShaped({id: ItemID.AHenid, count: 1, data: 0 }, ["bab", "aca", "ccc"], ['a', ItemID.ienid, 0, 'b', ItemID.nenid, 0]);



  Recipes.addShaped({id: ItemID.ACcid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.icid, 0]);

  Recipes.addShaped({id: ItemID.ACtid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.itid, 0]);

  Recipes.addShaped({id: ItemID.AClid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: ItemID.ACsid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.isid, 0]);

  Recipes.addShaped({id: ItemID.ACnid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.inid, 0]);

  Recipes.addShaped({id: ItemID.ACpid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.ipid, 0]);

  Recipes.addShaped({id: ItemID.ACbid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.ibid, 0]);

  Recipes.addShaped({id: ItemID.ACiid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.iiid, 0]);

  Recipes.addShaped({id: ItemID.ACeid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.ieid, 0]);

  Recipes.addShaped({id: ItemID.ACsgid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.isgid, 0]);

  Recipes.addShaped({id: ItemID.ACenid, count: 1, data: 0 }, ["aba", "aaa", "aaa"], ['a', ItemID.ienid, 0]);



  Recipes.addShaped({id: ItemID.ALcid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.icid, 0]);

  Recipes.addShaped({id: ItemID.ALtid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.itid, 0]);

  Recipes.addShaped({id: ItemID.ALlid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: ItemID.ALsid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.isid, 0]);

  Recipes.addShaped({id: ItemID.ALnid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.inid, 0]);

  Recipes.addShaped({id: ItemID.ALpid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.ipid, 0]);

  Recipes.addShaped({id: ItemID.ALbid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.ibid, 0]);

  Recipes.addShaped({id: ItemID.ALiid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.iiid, 0]);

  Recipes.addShaped({id: ItemID.ALeid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.ieid, 0]);

  Recipes.addShaped({id: ItemID.ALsgid, count: 1, data: 0 }, ["aaa", "aba", "aba"], ['a', ItemID.isgid, 0]);

  Recipes.addShaped({id: ItemID.ALenid, count: 1, data: 0 }, ["aaa", "aca", "bcb"], ['a', ItemID.ienid, 0, 'b', ItemID.nenid, 0]);



  Recipes.addShaped({id: ItemID.ABcid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.icid, 0]);

  Recipes.addShaped({id: ItemID.ABtid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.itid, 0]);

  Recipes.addShaped({id: ItemID.ABlid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: ItemID.ABsid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.isid, 0]);

  Recipes.addShaped({id: ItemID.ABnid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.inid, 0]);

  Recipes.addShaped({id: ItemID.ABpid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.ipid, 0]);

  Recipes.addShaped({id: ItemID.ABbid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.ibid, 0]);

  Recipes.addShaped({id: ItemID.ABiid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.iiid, 0]);

  Recipes.addShaped({id: ItemID.ABeid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.ieid, 0]);

  Recipes.addShaped({id: ItemID.ABsgid, count: 1, data: 0 }, ["bbb", "aba", "aba"], ['a', ItemID.isgid, 0]);

  Recipes.addShaped({id: ItemID.ABenid, count: 1, data: 0 }, ["bcb", "aca", "aca"], ['a', ItemID.ienid, 0, 'b', ItemID.nenid, 0]);



  Recipes.addShaped({id: ItemID.Swcid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.icid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swtid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.itid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swlid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.ilid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swsid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.isid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swnid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.inid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swpid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.ipid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swbid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.ibid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swiid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.iiid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Sweid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.ieid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swsgid, count: 1, data: 0 }, ["cac", "cac", "cbc"], ['a', ItemID.isgid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Swenid, count: 1, data: 0 }, ["dad", "dbd", "dcd"], ['a', ItemID.nenid, 0, 'b', ItemID.ienid, 0, 'c', VanillaItemID.stick, 0]);



  Recipes.addShaped({id: ItemID.Axcid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.icid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axtid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.itid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axlid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.ilid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axsid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.isid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axnid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.inid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axpid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.ipid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axbid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.ibid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axiid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.iiid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axeid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.ieid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axsgid, count: 1, data: 0 }, ["aac", "abc", "cbc"], ['a', ItemID.isgid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Axenid, count: 1, data: 0 }, ["aca", "aba", "dbd"], ['a', ItemID.ienid, 0, 'b', VanillaItemID.stick, 0, 'c', ItemID.nenid, 0]);



  Recipes.addShaped({id: ItemID.Picid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.icid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pitid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.itid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pilid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.ilid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pisid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.isid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pinid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.inid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pipid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.ipid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pibid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.ibid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Piiid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.iiid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pieid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.ieid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pisgid, count: 1, data: 0 }, ["aaa", "cbc", "cbc"], ['a', ItemID.isgid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Pienid, count: 1, data: 0 }, ["aaa", "cbc", "dbd"], ['a', ItemID.ienid, 0, 'b', VanillaItemID.stick, 0, 'c', ItemID.nenid, 0]);



  Recipes.addShaped({id: ItemID.Shcid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.icid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shtid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.itid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shlid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.ilid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shsid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.isid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shnid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.inid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shpid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.ipid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shbid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.ibid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shiid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.iiid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Sheid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.ieid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shsgid, count: 1, data: 0 }, ["cac", "cbc", "cbc"], ['a', ItemID.isgid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Shenid, count: 1, data: 0 }, ["dab", "dca", "cdd"], ['a', ItemID.nenid, 0, 'b', ItemID.ienid, 0, 'c', VanillaItemID.stick, 0]);




  Recipes.addShaped({id: ItemID.Hocid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.icid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hotid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.itid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Holid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.ilid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hosid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.isid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Honid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.inid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hopid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.ipid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hobid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.ibid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hoiid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.iiid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hoeid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.ieid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hosgid, count: 1, data: 0 }, ["aac", "cbc", "cbc"], ['a', ItemID.isgid, 0, 'b', VanillaItemID.stick, 0]);

  Recipes.addShaped({id: ItemID.Hoenid, count: 1, data: 0 }, ["abb", "dcd", "cdd"], ['a', ItemID.nenid, 0, 'b', ItemID.ienid, 0, 'c', VanillaItemID.stick, 0]);



  Recipes.addShaped({id: BlockID.bcid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.icid, 0]);

  Recipes.addShaped({id: BlockID.btid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.itid, 0]);

  Recipes.addShaped({id: BlockID.blid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ilid, 0]);

  Recipes.addShaped({id: BlockID.bsid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.isid, 0]);

  Recipes.addShaped({id: BlockID.bnid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.inid, 0]);

  Recipes.addShaped({id: BlockID.bpid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ipid, 0]);

  Recipes.addShaped({id: BlockID.bbid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ibid, 0]);

  Recipes.addShaped({id: BlockID.biid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.iiid, 0]);

  Recipes.addShaped({id: BlockID.beid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ieid, 0]);

  Recipes.addShaped({id: BlockID.bsgid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.isgid, 0]);

  Recipes.addShaped({id: BlockID.benid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.ienid, 0]);

  Recipes.addShaped({id: BlockID.bpeid, count: 1, data: 0 }, ["aaa", "aaa", "aaa"], ['a', ItemID.pfrid, 0]);



  Recipes.addShaped({id: VanillaItemID.blaze_powder, count: 2, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaItemID.blaze_rod, 0]);

  Recipes.addShaped({id: VanillaBlockID.blue_ice, count: 1, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.cdid, 0, 'b', VanillaBlockID.ice, 0]);

  Recipes.addShaped({id: VanillaItemID.bone_meal, count: 4, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', VanillaItemID.bone, 0]);

  Recipes.addShaped({id: VanillaItemID.bone_meal, count: 6, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaItemID.bone, 0]);

  Recipes.addShaped({id: VanillaItemID.charcoal, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dccid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: VanillaItemID.coal, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dcoid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: VanillaItemID.diamond, count: 2, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', VanillaBlockID.diamond_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.diamond, count: 3, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaBlockID.diamond_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.emerald, count: 2, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', VanillaBlockID.emerald_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.emerald, count: 3, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaBlockID.emerald_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.gold_ingot, count: 1, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', ItemID.dgid, 0]);

  Recipes.addShaped({id: VanillaItemID.iron_ingot, count: 1, data: 0 }, ["abc", "ccc", "ccc"], ['a', ItemID.dirid, 0, 'b', ItemID.fdid, 0]);

  Recipes.addShaped({id: VanillaItemID.lapis_lazuli, count: 6, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', VanillaBlockID.lapis_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.lapis_lazuli, count: 12, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaBlockID.lapis_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.netherite_ingot, count: 1, data: 0 }, ["aaa", "acb", "bbb"], ['a', ItemID.dgid, 0, 'b', ItemID.dntid, 0, 'c', ItemID.fdid, 0]);

  Recipes.addShaped({id: VanillaItemID.quartz, count: 2, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', VanillaBlockID.quartz_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.quartz, count: 3, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaBlockID.quartz_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.redstone, count: 6, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.fdid, 0, 'b', VanillaBlockID.redstone_ore, 0]);

  Recipes.addShaped({id: VanillaItemID.redstone, count: 12, data: 0 }, ["bac", "ccc", "ccc"], ['a', ItemID.ndid, 0, 'b', VanillaBlockID.redstone_ore, 0]);

//Furnace

Recipes.addFurnace(BlockID.ocid, ItemID.icid);
Recipes.addFurnace(ItemID.dcid, ItemID.icid);
Recipes.addFurnace(ItemID.icid, ItemID.dcid);

Recipes.addFurnace(BlockID.otid, ItemID.itid);
Recipes.addFurnace(ItemID.dtid, ItemID.itid);
Recipes.addFurnace(ItemID.itid, ItemID.dtid);

Recipes.addFurnace(BlockID.olid, ItemID.ilid);
Recipes.addFurnace(ItemID.dlid, ItemID.ilid);
Recipes.addFurnace(ItemID.ilid, ItemID.dlid);

Recipes.addFurnace(BlockID.osid, ItemID.isid);
Recipes.addFurnace(ItemID.dsid, ItemID.isid);
Recipes.addFurnace(ItemID.isid, ItemID.dsid);

Recipes.addFurnace(BlockID.onid, ItemID.inid);
Recipes.addFurnace(ItemID.dnid, ItemID.inid);
Recipes.addFurnace(ItemID.inid, ItemID.dnid);

Recipes.addFurnace(BlockID.opid, ItemID.ipid);
Recipes.addFurnace(ItemID.dpid, ItemID.ipid);
Recipes.addFurnace(ItemID.ipid, ItemID.dpid);

Recipes.addFurnace(ItemID.dbid, ItemID.ibid);
Recipes.addFurnace(ItemID.ibid, ItemID.dbid);

Recipes.addFurnace(ItemID.diid, ItemID.iiid);
Recipes.addFurnace(ItemID.iiid, ItemID.diid);

Recipes.addFurnace(ItemID.dsid, ItemID.isid);
Recipes.addFurnace(ItemID.ieid, ItemID.deid);

Recipes.addFurnace(ItemID.dsgid, ItemID.isgid);
Recipes.addFurnace(ItemID.isgid, ItemID.dsgid);

Recipes.addFurnace(ItemID.dcoid, VanillaItemID.coal);
Recipes.addFurnace(ItemID.dccid, VanillaItemID.charcoal);

//Drop mob

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 39){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 20);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.nitid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 36){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 41){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);

      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 42){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 43){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 48){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 52){
        var coords = Entity.getPosition(entity);
      var leth = 3 + parseInt(Math.random() * 50);
      var mea = 6 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 123){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 124){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 125){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 126){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 127){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.sfid, leth);
 }
});

Callback.addCallback("EntityDeath", function(entity){
 if(Entity.getType(entity) == 47){
        var coords = Entity.getPosition(entity);
      var leth = parseInt(Math.random() * 2);
      var mea = 3 + parseInt(Math.random() * 100);
      World.drop(coords.x, coords.y, coords.z, ItemID.nitid, leth);
 }
});

//Translation

Translation.addTranslation("Backpack", {pt: "Mochila"});
Translation.addTranslation("Lead Backpack", {pt: "Mochila de Chumbo"});
Translation.addTranslation("Invar Backpack", {pt: "Mochila de Invar"});
Translation.addTranslation("Signalum Backpack", {pt: "Mochila de Signalum"});
Translation.addTranslation("Enderium Backpack", {pt: "Mochila de Enderium"});



Translation.addTranslation("Copper Ingot", {pt: "Barra de Cobre"});
Translation.addTranslation("Tin Ingot", {pt: "Barra de Estanho"});
Translation.addTranslation("Lead Ingot", {pt: "Barra de Chumbo"});
Translation.addTranslation("Silver Ingot", {pt: "Barra de Prata"});
Translation.addTranslation("Nickel Ingot", {pt: "Barra de Níquel"});
Translation.addTranslation("Platinum Ingot", {pt: "Barra de Platina"});
Translation.addTranslation("Bronze Ingot", {pt: "Barra de Bronze"});
Translation.addTranslation("Invar Ingot", {pt: "Barra de Invar"});
Translation.addTranslation("Electrum Ingot", {pt: "Barra de Electrum"});
Translation.addTranslation("Signalum Ingot", {pt: "Barra de Signalum"});
Translation.addTranslation("Enderium Ingot", {pt: "Barra de Enderium"});



Translation.addTranslation("Copper Nugget", {pt: "Pepita de Cobre"});
Translation.addTranslation("Tin Nugget", {pt: "Pepita de Estanho"});
Translation.addTranslation("Lead Nugget", {pt: "Pepita de Chumbo"});
Translation.addTranslation("Silver Nugget", {pt: "Pepita de Prata"});
Translation.addTranslation("Nickel Nugget", {pt: "Pepita de Níquel"});
Translation.addTranslation("Platinum Nugget", {pt: "Pepita de Platina"});
Translation.addTranslation("Bronze Nugget", {pt: "Pepita de Bronze"});
Translation.addTranslation("Invar Nugget", {pt: "Pepita de Invar"});
Translation.addTranslation("Electrum Nugget", {pt: "Pepita de Electrum"});
Translation.addTranslation("Signalum Nugget", {pt: "Pepita de Signalum"});
Translation.addTranslation("Enderium Nugget", {pt: "Pepita de Enderium"});



Translation.addTranslation("Coal Dust", {pt: "Pó de Carvão"});
Translation.addTranslation("Charcoal Dust", {pt: "Pó de Carvão Vegetal"});
Translation.addTranslation("Iron Dust", {pt: "Pó de Ferro"});
Translation.addTranslation("Gold Dust", {pt: "Pó de Ouro"});
Translation.addTranslation("Obsidian Dust", {pt: "Pó de Obsidiana"});
Translation.addTranslation("Netherite Dust", {pt: "Pó de Netherita"});
Translation.addTranslation("Copper Dust", {pt: "Pó de Cobre"});
Translation.addTranslation("Tin Dust", {pt: "Pó de Estanho"});
Translation.addTranslation("Lead Dust", {pt: "Pó de Chumbo"});
Translation.addTranslation("Silver Dust", {pt: "Pó de Prata"});
Translation.addTranslation("Nickel Dust", {pt: "Pó de Níquel"});
Translation.addTranslation("Platinum Dust", {pt: "Pó de Platina"});
Translation.addTranslation("Bronze Dust", {pt: "Pó de Bronze"});
Translation.addTranslation("Invar Dust", {pt: "Pó de Invar"});
Translation.addTranslation("Electrum Dust", {pt: "Pó de Electrum"});
Translation.addTranslation("Signalum Dust", {pt: "Pó de Signalum"});
Translation.addTranslation("Enderium Dust", {pt: "Pó de Enderium"});



Translation.addTranslation("Sulfur\n§6§odrop from nether mobs", {pt: "Enxofre\n§6§odropado pelos mobs do nether"});
Translation.addTranslation("Niter\n§e§odrop from husk", {pt: "Nitro\n§e§odropado do husk"});
Translation.addTranslation("Ice Shard", {pt: "Pedaço de gelo"});
Translation.addTranslation("Firotheum Dust", {pt: "Pó de Firotheum"});
Translation.addTranslation("Cryotheum Dust", {pt: "Pó de Cryotheum"});
Translation.addTranslation("Netrotheum Dust", {pt: "Pó de Netrotheum"});
Translation.addTranslation("Petrium Fragment", {pt: "Fragmento de Petrium"});



Translation.addTranslation("Copper Helmet", {pt: "Capacete de Cobre"});
Translation.addTranslation("Tin Helmet", {pt: "Capacete de Estanho"});
Translation.addTranslation("Lead Helmet", {pt: "Capacete de Chumbo"});
Translation.addTranslation("Silver Helmet", {pt: "Capacete de Prata"});
Translation.addTranslation("Nickel Helmet", {pt: "Capacete de Níquel"});
Translation.addTranslation("Platinum Helmet", {pt: "Capacete de Platina"});
Translation.addTranslation("Bronze Helmet", {pt: "Capacete de Bronze"});
Translation.addTranslation("Invar Helmet", {pt: "Capacete de Invar"});
Translation.addTranslation("Electrum Helmet", {pt: "Capacete de Electrum"});
Translation.addTranslation("Signalum Helmet", {pt: "Capacete de Signalum"});
Translation.addTranslation("Enderium Helmet", {pt: "Capacete de Enderium"});



Translation.addTranslation("Copper Chestplate", {pt: "Peitoral de Cobre"});
Translation.addTranslation("Tin Chestplate", {pt: "Peitoral de Estanho"});
Translation.addTranslation("Lead Chestplate", {pt: "Peitoral de Chumbo"});
Translation.addTranslation("Silver Chestplate", {pt: "Peitoral de Prata"});
Translation.addTranslation("Nickel Chestplate", {pt: "Peitoral de Níquel"});
Translation.addTranslation("Platinum Chestplate", {pt: "Peitoral de Platina"});
Translation.addTranslation("Bronze Chestplate", {pt: "Peitoral de Bronze"});
Translation.addTranslation("Invar Chestplate", {pt: "Peitoral de Invar"});
Translation.addTranslation("Electrum Chestplate", {pt: "Peitoral de Electrum"});
Translation.addTranslation("Signalum Chestplate", {pt: "Peitoral de Signalum"});
Translation.addTranslation("Enderium Chestplate", {pt: "Peitoral de Enderium"});



Translation.addTranslation("Copper Leggings", {pt: "Calça de Cobre"});
Translation.addTranslation("Tin Leggings", {pt: "Calça de Estanho"});
Translation.addTranslation("Lead Leggings", {pt: "Calça de Chumbo"});
Translation.addTranslation("Silver Leggings", {pt: "Calça de Prata"});
Translation.addTranslation("Nickel Leggings", {pt: "Calça de Níquel"});
Translation.addTranslation("Platinum Leggings", {pt: "Calça de Platina"});
Translation.addTranslation("Bronze Leggings", {pt: "Calça de Bronze"});
Translation.addTranslation("Invar Leggings", {pt: "Calça de Invar"});
Translation.addTranslation("Electrum Leggings", {pt: "Calça de Electrum"});
Translation.addTranslation("Signalum Leggings", {pt: "Calça de Signalum"});
Translation.addTranslation("Enderium Leggings", {pt: "Calça de Enderium"});



Translation.addTranslation("Copper Boots", {pt: "Botas de Cobre"});
Translation.addTranslation("Tin Boots", {pt: "Botas de Estanho"});
Translation.addTranslation("Lead Boots", {pt: "Botas de Chumbo"});
Translation.addTranslation("Silver Boots", {pt: "Botas de Prata"});
Translation.addTranslation("Nickel Boots", {pt: "Botas de Níquel"});
Translation.addTranslation("Platinum Boots", {pt: "Botas de Platina"});
Translation.addTranslation("Bronze Boots", {pt: "Botas de Bronze"});
Translation.addTranslation("Invar Boots", {pt: "Botas de Invar"});
Translation.addTranslation("Electrum Boots", {pt: "Botas de Electrum"});
Translation.addTranslation("Signalum Boots", {pt: "Botas de Signalum"});
Translation.addTranslation("Enderium Boots", {pt: "Botas de Enderium"});



Translation.addTranslation("Copper Sword", {pt: "Espada de Cobre"});
Translation.addTranslation("Tin Sword", {pt: "Espada de Estanho"});
Translation.addTranslation("Lead Sword", {pt: "Espada de Chumbo"});
Translation.addTranslation("Silver Sword", {pt: "Espada de Prata"});
Translation.addTranslation("Nickel Sword", {pt: "Espada de Níquel"});
Translation.addTranslation("Platinum Sword", {pt: "Espada de Platina"});
Translation.addTranslation("Bronze Sword", {pt: "Espada de Bronze"});
Translation.addTranslation("Invar Sword", {pt: "Espada de Invar"});
Translation.addTranslation("Electrum Sword", {pt: "Espada de Electrum"});
Translation.addTranslation("Signalum Sword", {pt: "Espada de Signalum"});
Translation.addTranslation("Enderium Sword", {pt: "Espada de Enderium"});



Translation.addTranslation("Copper Axe", {pt: "Machado de Cobre"});
Translation.addTranslation("Tin Axe", {pt: "Machado de Estanho"});
Translation.addTranslation("Lead Axe", {pt: "Machado de Chumbo"});
Translation.addTranslation("Silver Axe", {pt: "Machado de Prata"});
Translation.addTranslation("Nickel Axe", {pt: "Machado de Níquel"});
Translation.addTranslation("Platinum Axe", {pt: "Machado de Platina"});
Translation.addTranslation("Bronze Axe", {pt: "Machado de Bronze"});
Translation.addTranslation("Invar Axe", {pt: "Machado de Invar"});
Translation.addTranslation("Electrum Axe", {pt: "Machado de Electrum"});
Translation.addTranslation("Signalum Axe", {pt: "Machado de Signalum"});
Translation.addTranslation("Enderium Axe", {pt: "Machado de Enderium"});



Translation.addTranslation("Copper Pickaxe", {pt: "Picareta de Cobre"});
Translation.addTranslation("Tin Pickaxe", {pt: "Picareta de Estanho"});
Translation.addTranslation("Lead Pickaxe", {pt: "Picareta de Chumbo"});
Translation.addTranslation("Silver Pickaxe", {pt: "Picareta de Prata"});
Translation.addTranslation("Nickel Pickaxe", {pt: "Picareta de Níquel"});
Translation.addTranslation("Platinum Pickaxe", {pt: "Picareta de Platina"});
Translation.addTranslation("Bronze Pickaxe", {pt: "Picareta de Bronze"});
Translation.addTranslation("Invar Pickaxe", {pt: "Picareta de Invar"});
Translation.addTranslation("Electrum Pickaxe", {pt: "Picareta de Electrum"});
Translation.addTranslation("Signalum Pickaxe", {pt: "Picareta de Signalum"});
Translation.addTranslation("Enderium Pickaxe", {pt: "Picareta de Enderium"});



Translation.addTranslation("Copper Shovel", {pt: "Pá de Cobre"});
Translation.addTranslation("Tin Shovel", {pt: "Pá de Estanho"});
Translation.addTranslation("Lead Shovel", {pt: "Pá de Chumbo"});
Translation.addTranslation("Silver Shovel", {pt: "Pá de Prata"});
Translation.addTranslation("Nickel Shovel", {pt: "Pá de Níquel"});
Translation.addTranslation("Platinum Shovel", {pt: "Pá de Platina"});
Translation.addTranslation("Bronze Shovel", {pt: "Pá de Bronze"});
Translation.addTranslation("Invar Shovel", {pt: "Pá de Invar"});
Translation.addTranslation("Electrum Shovel", {pt: "Pá de Electrum"});
Translation.addTranslation("Signalum Shovel", {pt: "Pá de Signalum"});
Translation.addTranslation("Enderium Shovel", {pt: "Pá de Enderium"});



Translation.addTranslation("Copper Hoe", {pt: "Enxada de Cobre"});
Translation.addTranslation("Tin Hoe", {pt: "Enxada de Estanho"});
Translation.addTranslation("Lead Hoe", {pt: "Enxada de Chumbo"});
Translation.addTranslation("Silver Hoe", {pt: "Enxada de Prata"});
Translation.addTranslation("Nickel Hoe", {pt: "Enxada de Níquel"});
Translation.addTranslation("Platinum Hoe", {pt: "Enxada de Platina"});
Translation.addTranslation("Bronze Hoe", {pt: "Enxada de Bronze"});
Translation.addTranslation("Invar Hoe", {pt: "Enxada de Invar"});
Translation.addTranslation("Electrum Hoe", {pt: "Enxada de Electrum"});
Translation.addTranslation("Signalum Hoe", {pt: "Enxada de Signalum"});
Translation.addTranslation("Enderium Hoe", {pt: "Enxada de Enderium"});



Translation.addTranslation("Copper Block", {pt: "Bloco de Cobre"});
Translation.addTranslation("Tin Block", {pt: "Bloco de Estanho"});
Translation.addTranslation("Lead Block", {pt: "Bloco de Chumbo"});
Translation.addTranslation("Silver Block", {pt: "Bloco de Prata"});
Translation.addTranslation("Nickel Block", {pt: "Bloco de Níquel"});
Translation.addTranslation("Platinum Block", {pt: "Bloco de Platina"});
Translation.addTranslation("Bronze Block", {pt: "Bloco de Bronze"});
Translation.addTranslation("Invar Block", {pt: "Bloco de Invar"});
Translation.addTranslation("Electrum Block", {pt: "Bloco de Electrum"});
Translation.addTranslation("Signalum Block", {pt: "Bloco de Signalum"});
Translation.addTranslation("Enderium Block", {pt: "Bloco de Enderium"});
Translation.addTranslation("Petrium Block", {pt: "Bloco de Petrium"});



Translation.addTranslation("Copper Ore", {pt: "Minério de Cobre"});
Translation.addTranslation("Tin Ore", {pt: "Minério de Estanho"});
Translation.addTranslation("Lead Ore", {pt: "Minério de Chumbo"});
Translation.addTranslation("Silver Ore", {pt: "Minério de Prata"});
Translation.addTranslation("Nickel Ore", {pt: "Minério de Níquel"});
Translation.addTranslation("Platinum Ore", {pt: "Minério de Platina"});
Translation.addTranslation("Petrium Ore", {pt: "Minério de Petrium"});
