importLib("marines", "*");

IDRegistry.genItemID("ruby");
IDRegistry.genItemID("sapphire");
IDRegistry.genItemID("amethyst");
IDRegistry.genItemID("topaz");
IDRegistry.genItemID("tanzanite");
IDRegistry.genItemID("amber");

Item.createItem("ruby", "Ruby", {name: "ruby"});
Item.createItem("sapphire", "Sapphire", {name: "sapphire"});
Item.createItem("amethyst", "Amethyst", {name: "amethyst"});
Item.createItem("topaz", "Topaz", {name: "topaz"});
Item.createItem("tanzanite", "Tanzanite", {name: "tanzanite"});
Item.createItem("amber", "Amber", {name: "amber"});

Marines.setArmorSet("ruby", {
	name: "Ruby",
	armor: 5,
	durability: 1642,
	craftID: ItemID.ruby
});
Marines.setArmorSet("sapphire", {
	name: "Sapphire",
	armor: 5,
	durability: 2142,
	craftID: ItemID.sapphire
});
Marines.setArmorSet("amethyst", {
	name: "Amethyst",
	armor: 5,
	durability: 3018,
	craftID: ItemID.amethyst
});
Marines.setArmorSet("topaz", {
	name: "Topaz",
	armor: 5,
	durability: 3980,
	craftID: ItemID.topaz
});
Marines.setArmorSet("tanzanite", {
	name: "Tanzanite",
	armor: 5,
	durability: 5245,
	craftID: ItemID.tanzanite
});
Marines.setArmorSet("amber", {
	name: "Amber",
	armor: 5,
	durability: 3512,
	craftID: ItemID.amber
});
Marines.setArmorSet("obsidian", {
	name: "Obsidian",
	armor: 5,
	durability: 9680,
	craftID: 49
});

Marines.createTools({
	Create: {
		Uid: "ruby",
		Name: "Ruby",
		CraftID: ItemID.ruby
	},
	Material: {
		MaxDamage: 1642,
		Level: 4,
		Efficiency: 13,
		Enchantability: 12,
		Damage: 3.5
	}
});

Marines.createTools({
	Create: {
		Uid: "sapphire",
		Name: "Sapphire",
		CraftID: ItemID.sapphire
	},
	Material: {
		MaxDamage: 2142,
		Level: 4,
		Efficiency: 15,
		Enchantability: 12,
		Damage: 4
	}
});

Marines.createTools({
	Create: {
		Uid: "amethyst",
		Name: "Amethyst",
		CraftID: ItemID.amethyst
	},
	Material: {
		MaxDamage: 3018,
		Level: 4,
		Efficiency: 17,
		Enchantability: 12,
		Damage: 4.5
	}
});

Marines.createTools({
	Create: {
		Uid: "topaz",
		Name: "Topaz",
		CraftID: ItemID.topaz
	},
	Material: {
		MaxDamage: 3980,
		Level: 4,
		Efficiency: 18,
		Enchantability: 12,
		Damage: 5
	}
});

Marines.createTools({
	Create: {
		Uid: "tanzanite",
		Name: "Tanzanite",
		CraftID: ItemID.tanzanite
	},
	Material: {
		MaxDamage: 5245,
		Level: 4,
		Efficiency: 31,
		Enchantability: 12,
		Damage: 9
	}
});

Marines.createTools({
	Create: {
		Uid: "amber",
		Name: "amber",
		CraftID: ItemID.amber
	},
	Material: {
		MaxDamage: 3512,
		Level: 4,
		Efficiency: 18,
		Enchantability: 12,
		Damage: 5
	}
});

Block.setOre("rubyOre", {
	name: "Ruby",
	texture: {
		name: "ruby_ore",
		index: 0
	},
	dropID: ItemID.ruby,
	genChunk: 15
});

Block.setOre("sapphireOre", {
	name: "Sapphire",
	texture: {
		name: "sapphire_ore",
		index: 0
	},
	dropID: ItemID.sapphire,
	genChunk: 15
});

Block.setOre("amethystOre", {
	name: "Amethyst",
	texture: {
		name: "amethyst_ore",
		index: 0
	},
	dropID: ItemID.amethyst,
	genChunk: 15
});

Block.setOre("topazOre", {
	name: "Topaz",
	texture: {
		name: "topaz_ore",
		index: 0
	},
	dropID: ItemID.topaz,
	genChunk: 15
});

Block.setOre("tanzaniteOre", {
	name: "Tanzanite",
	texture: {
		name: "tanzanite_ore",
		index: 0
	},
	dropID: ItemID.tanzanite,
	genChunk: 15
});

Block.setOre("amberOre", {
	name: "Amber",
	texture: {
		name: "amber_ore",
		index: 0
	},
	dropID: ItemID.amber,
	genChunk: 15
});

Block.createMetalBlock("ruby", "ruby_block", 0, ItemID.ruby);
Block.createMetalBlock("sapphire", "sapphire_block", 0, ItemID.sapphire);
Block.createMetalBlock("amethyst", "amethyst_block", 0, ItemID.amethyst);
Block.createMetalBlock("topaz", "topaz_block", 0, ItemID.topaz);
Block.createMetalBlock("tanzanite", "tanzanite_block", 0, ItemID.tanzanite);
Block.createMetalBlock("amber", "amber_block", 0, ItemID.amber);