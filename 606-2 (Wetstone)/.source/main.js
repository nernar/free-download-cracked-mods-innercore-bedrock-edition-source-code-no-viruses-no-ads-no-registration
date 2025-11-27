var Wetstone = {
	addBucketRecipe: function (output, input, type) {
		Recipes.addShapeless(output, [{
			id: 325,
			data: type ? 10 : 8
		}, input], function (api, field, output) {
			Player.addItemToInventory(325, 1, 0);
		});
	},
	addWetstoneRecipe: function (block, raw, max, type) {
		for (let i = 0; i < max; i++)
			this.addBucketRecipe({
				id: typeof block == "number" ? block : BlockID[block],
				data: i,
				count: 1
			}, {
				id: raw,
				data: i
			}, type)
	},
	setupWetstone: function (stone, raw, type) {
		Callback.addCallback("ItemUse", function (coords, item, block) {
			if (item.id == 325 && !item.data && block.id == BlockID[stone]){
				World.setBlock(coords.x, coords.y, coords.z, raw, block.data);
				Player.decreaseCarriedItem();
				Player.addItemToInventory(325, 1, type ? 10 : 8);
				if (type)
					World.playSoundAtEntity(Player.get(), "bucket.fill_lava", 1);
				else
					World.playSoundAtEntity(Player.get(), "bucket.fill_water", 1);
			}
		});
	}
}

IDRegistry.genBlockID("wetstone");

Block.createBlock("wetstone",
	[{
			name: "Wetstone Bricks",
			texture: [
				["wetstone", 0]
			],
			inCreative: true
		},
		{
			name: "Mossy Wetstone Bricks",
			texture: [
				["wetstone_mossy", 0]
			],
			inCreative: true
		},
		{
			name: "Cracked Wetstone Bricks",
			texture: [
				["wetstone_cracked", 0]
			],
			inCreative: true
		},
		{
			name: "Chiseled Wetstone Bricks",
			texture: [
				["wetstone_chiseled", 0]
			],
			inCreative: true
		}
	],
	Block.createSpecialType({
		solid: true,
		base: 8
	})
);
ToolAPI.registerBlockMaterial(BlockID.wetstone, "stone", 1, true);
Block.setDestroyLevel("wetstone", 1);


IDRegistry.genBlockID("magmastone");

Block.createBlock("magmastone",
	[{
			name: "Magmastone Bricks",
			texture: [
				["magmastone", 0]
			],
			inCreative: true
		},
		{
			name: "Mossy Magmastone Bricks",
			texture: [
				["magmastone_mossy", 0]
			],
			inCreative: true
		},
		{
			name: "Cracked Magmastone Bricks",
			texture: [
				["magmastone_cracked", 0]
			],
			inCreative: true
		},
		{
			name: "Chiseled Magmastone Bricks",
			texture: [
				["magmastone_chiseled", 0]
			],
			inCreative: true
		}
	],
	Block.createSpecialType({
		solid: true,
		base: 10
	})
);
ToolAPI.registerBlockMaterial(BlockID.magmastone, "stone", 1, true);
Block.setDestroyLevel("magmastone", 1);

Wetstone.addWetstoneRecipe("wetstone", 98, 4);
Wetstone.addWetstoneRecipe("magmastone", 98, 4, 1);
Wetstone.setupWetstone("wetstone", 98);
Wetstone.setupWetstone("magmastone", 98, 1);

Translation.addTranslation("Wetstone Bricks", {zh: "湿石砖"});
Translation.addTranslation("Mossy Wetstone Bricks", {zh: "苔湿石砖"});
Translation.addTranslation("Cracked Wetstone Bricks", {zh: "裂湿石砖"});
Translation.addTranslation("Chiseled Wetstone Bricks", {zh: "錾制湿石砖"});
Translation.addTranslation("Magmastone Bricks", {zh: "岩浆石砖"});
Translation.addTranslation("Mossy Magmastone Bricks", {zh: "苔岩浆石砖"});
Translation.addTranslation("Cracked Magmastone Bricks", {zh: "裂岩浆石砖"});
Translation.addTranslation("Chiseled Magmastone Bricks", {zh: "錾制岩浆石砖"});
