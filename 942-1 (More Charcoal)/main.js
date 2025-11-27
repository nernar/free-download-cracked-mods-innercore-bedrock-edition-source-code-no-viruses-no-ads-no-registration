/*
BUILD INFO:
  dir: script
  target: main.js
  files: 5
*/



// file: header.js

const BLOCK_STONE = Block.createSpecialType({
	solid: true,
	renderlayer: EBlockRenderLayer.BLEND,
	explosionres: 4.0,
	lightopacity: 15,
	translucency: 0.0
});

const translate = function(str, args) {
	try {
		str = Translation.translate(str);
		if (args !== undefined) {
			Array.isArray(args) || (args = [args]);
			str = java.lang.String.format(str, args);
		}
		return "" + str;
	} catch (e) {
		Logger.Log("Aboba#translate: " + e, "ERROR");
		return "" + str;
	}
};




// file: translation.js

Translation.addTranslation("Charcoal Block", {
	ru: "Блоки Древесного угля"
});

Translation.addTranslation("Charcoal", {
	ru: "Предметы Древесного угля"
});

Translation.addTranslation("Apple Charcoal", {
	ru: "Древесный уголь из яблока"
});

Translation.addTranslation("Beet Charcoal", {
	ru: "Древесный уголь из свеклы"
});

Translation.addTranslation("Chorus Fruit Charcoal", {
	ru: "Древесный уголь из плода хоруса"
});

Translation.addTranslation("Potato Charcoal", {
	ru: "Древесный уголь из картошки"
});

Translation.addTranslation("Sugarcane Charcoal", {
	ru: "Древесный уголь из тростника"
});

Translation.addTranslation("Carrot Charcoal", {
	ru: "Древесный уголь из моркови"
});

Translation.addTranslation("Bread Charcoal", {
	ru: "Древесный уголь из хлеба"
});

Translation.addTranslation("Egg Charcoal", {
	ru: "Древесный уголь из яиц"
});

Translation.addTranslation("Melon Charcoal", {
	ru: "Древесный уголь из арбуза"
});

Translation.addTranslation("Charcoal Chunk", {
	ru: "Кусочек древесного угля"
});

Translation.addTranslation("Coal Chunk", {
	ru: "Кусочек угля"
});

Translation.addTranslation("Block of Charcoal", {
	ru: "Блок Древесного угля"
});

Translation.addTranslation("Block of Apple Charcoal", {
	ru: "Блок Древесного угля из яблока"
});

Translation.addTranslation("Block of Beet Charcoal", {
	ru: "Блок Древесного угля из свеклы"
});

Translation.addTranslation("Block of Chorus Charcoal", {
	ru: "Блок Древесного угля из плода хоруса"
});

Translation.addTranslation("Block of Potato Charcoal", {
	ru: "Блок Древесного угля из картошки"
});

Translation.addTranslation("Block of Sugarcane Charcoal", {
	ru: "Блок Древесного угля из тростника"
});

Translation.addTranslation("Block of Carrot Charcoal", {
	ru: "Блок Древесного угля из моркови"
});

Translation.addTranslation("Block of Bread Charcoal", {
	ru: "Блок Древесного угля из хлеба"
});

Translation.addTranslation("Block of Egg Charcoal", {
	ru: "Блок Древесного угля из яиц"
});

Translation.addTranslation("Block of Melon Charcoal", {
	ru: "Блок Древесного угля из арбуза"
});




// file: items.js

IDRegistry.genItemID("apple_charcoal");
Item.createItem("apple_charcoal", "Apple Charcoal", { name: "apple_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.apple, ItemID.apple_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.apple_charcoal, 0, 600);


IDRegistry.genItemID("beet_charcoal");
Item.createItem("beet_charcoal", "Beet Charcoal", { name: "beet_charcoal", meta: 0 });
Recipes.addFurnace(457, ItemID.beet_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.beet_charcoal, 0, 600);


IDRegistry.genItemID("chorus_charcoal");
Item.createItem("chorus_charcoal", "Chorus Fruit Charcoal", { name: "chorus_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.popped_chorus_fruit, ItemID.chorus_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.chorus_charcoal, 0, 1200);


IDRegistry.genItemID("potato_charcoal");
Item.createItem("potato_charcoal", "Potato Charcoal", { name: "potato_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.baked_potato, ItemID.potato_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.potato_charcoal, 0, 800);


IDRegistry.genItemID("sugarcane_charcoal");
Item.createItem("sugarcane_charcoal", "Sugarcane Charcoal", { name: "sugarcane_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.sugar_cane, ItemID.sugarcane_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.sugarcane_charcoal, 0, 800);


IDRegistry.genItemID("carrot_charcoal");
Item.createItem("carrot_charcoal", "Carrot Charcoal", { name: "carrot_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.carrot, ItemID.carrot_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.carrot_charcoal, 0, 600);


IDRegistry.genItemID("bread_charcoal");
Item.createItem("bread_charcoal", "Bread Charcoal", { name: "bread_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.bread, ItemID.bread_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.bread_charcoal, 0, 1200);


IDRegistry.genItemID("egg_charcoal");
Item.createItem("egg_charcoal", "Egg Charcoal", { name: "egg_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.egg, ItemID.egg_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.egg_charcoal, 0, 800);


IDRegistry.genItemID("melon_charcoal");
Item.createItem("melon_charcoal", "Melon Charcoal", { name: "melon_charcoal", meta: 0 });
Recipes.addFurnace(VanillaItemID.melon_slice, ItemID.melon_charcoal, 0);
Recipes.addFurnaceFuel(ItemID.melon_charcoal, 0, 600);


IDRegistry.genItemID("charcoal_chunk");
Item.createItem("charcoal_chunk", "Charcoal Chunk", { name: "charcoal_chunk", meta: 0 });
Recipes.addFurnaceFuel(ItemID.charcoal_chunk, 0, 200);
const charcoalRecipes = [
    { item: ItemID.apple_charcoal, count: 3 },
    { item: ItemID.beet_charcoal, count: 3 },
    { item: ItemID.sugarcane_charcoal, count: 3 },
    { item: ItemID.carrot_charcoal, count: 3 },
    { item: ItemID.potato_charcoal, count: 4 },
    { item: ItemID.melon_charcoal, count: 3 },
    { item: ItemID.egg_charcoal, count: 4 },
    { item: ItemID.chorus_charcoal, count: 6 },
    { item: ItemID.bread_charcoal, count: 6 },
    { item: VanillaItemID.charcoal, count: 8 },
];

charcoalRecipes.forEach(recipe => {
    Recipes.addShapeless({ id: ItemID.charcoal_chunk, count: recipe.count, data: 0 }, [
        { id: recipe.item, data: 0 }
    ]);
});
Recipes.addShapeless({ id: VanillaItemID.charcoal, count: 1, data: 0 }, [
    { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, 
    { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }, { id: ItemID.charcoal_chunk, data: 0 }
]);


IDRegistry.genItemID("coal_chunk");
Item.createItem("coal_chunk", "Coal Chunk", { name: "coal_chunk", meta: 0 });
Recipes.addFurnaceFuel(ItemID.coal_chunk, 0, 200);
Recipes.addShapeless({ id: ItemID.coal_chunk, count: 8, data: 0 }, [
    { id: VanillaItemID.coal, data: 0 }
]);
Recipes.addShapeless({ id: VanillaItemID.coal, count: 1, data: 0 }, [
    { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, 
    { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }, { id: ItemID.coal_chunk, data: 0 }
]);




// file: blocks.js

IDRegistry.genBlockID("charcoal_block");
Block.createBlock("charcoal_block", [
	{ name: "Block of Charcoal", texture: [["charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.charcoal_block, 0, 16000);
Recipes.addShaped({ id: BlockID.charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", VanillaItemID.charcoal, 0]);


IDRegistry.genBlockID("sugarcane_charcoal_block");
Block.createBlock("sugarcane_charcoal_block", [
	{ name: "Block of Sugarcane Charcoal", texture: [["sugarcane_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.sugarcane_charcoal_block, 0, 8000);
Recipes.addShaped({ id: BlockID.sugarcane_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.sugarcane_charcoal, 0]);


IDRegistry.genBlockID("carrot_charcoal_block");
Block.createBlock("carrot_charcoal_block", [
	{ name: "Block of Carrot Charcoal", texture: [["carrot_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.carrot_charcoal_block, 0, 6000);
Recipes.addShaped({ id: BlockID.carrot_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.carrot_charcoal, 0]);


IDRegistry.genBlockID("beet_charcoal_block");
Block.createBlock("beet_charcoal_block", [
	{ name: "Block of Beet Charcoal", texture: [["beet_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.beet_charcoal_block, 0, 6000);
Recipes.addShaped({ id: BlockID.beet_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.beet_charcoal, 0]);


IDRegistry.genBlockID("apple_charcoal_block");
Block.createBlock("apple_charcoal_block", [
	{ name: "Block of Apple Charcoal", texture: [["apple_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.apple_charcoal_block, 0, 6000);
Recipes.addShaped({ id: BlockID.apple_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.apple_charcoal, 0]);


IDRegistry.genBlockID("chorus_charcoal_block");
Block.createBlock("chorus_charcoal_block", [
	{ name: "Block of Chorus Charcoal", texture: [["chorus_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.chorus_charcoal_block, 0, 12000);
Recipes.addShaped({ id: BlockID.chorus_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.chorus_charcoal, 0]);


IDRegistry.genBlockID("potato_charcoal_block");
Block.createBlock("potato_charcoal_block", [
	{ name: "Block of Potato Charcoal", texture: [["potato_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.potato_charcoal_block, 0, 8000);
Recipes.addShaped({ id: BlockID.potato_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.potato_charcoal, 0]);


IDRegistry.genBlockID("egg_charcoal_block");
Block.createBlock("egg_charcoal_block", [
	{ name: "Block of Egg Charcoal", texture: [["egg_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.egg_charcoal_block, 0, 8000);
Recipes.addShaped({ id: BlockID.egg_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.egg_charcoal, 0]);


IDRegistry.genBlockID("bread_charcoal_block");
Block.createBlock("bread_charcoal_block", [
	{ name: "Block of Bread Charcoal", texture: [["bread_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.bread_charcoal_block, 0, 12000);
Recipes.addShaped({ id: BlockID.bread_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.bread_charcoal, 0]);


IDRegistry.genBlockID("melon_charcoal_block");
Block.createBlock("melon_charcoal_block", [
	{ name: "Block of Melon Charcoal", texture: [["melon_charcoal_block", 0]], inCreative: true }
], BLOCK_STONE);
Recipes.addFurnaceFuel(BlockID.melon_charcoal_block, 0, 6000);
Recipes.addShaped({ id: BlockID.melon_charcoal_block, count: 1, data: 0 }, [
	"###",
	"###",
	"###"
], ["#", ItemID.melon_charcoal, 0]);




// file: footer.js

Item.addCreativeGroup("charcoalBlock", translate("Charcoal Block"), [
	BlockID.charcoal_block,
    BlockID.apple_charcoal_block,
    BlockID.beet_charcoal_block,
    BlockID.chorus_charcoal_block,
    BlockID.potato_charcoal_block,
    BlockID.sugarcane_charcoal_block,
    BlockID.carrot_charcoal_block,
    BlockID.bread_charcoal_block,
    BlockID.egg_charcoal_block,
    BlockID.melon_charcoal_block
]);

Item.addCreativeGroup("charcoalItem", translate("Charcoal"), [
	ItemID.apple_charcoal,
    ItemID.beet_charcoal,
    ItemID.chorus_charcoal,
    ItemID.potato_charcoal,
    ItemID.sugarcane_charcoal,
    ItemID.carrot_charcoal,
    ItemID.bread_charcoal,
    ItemID.egg_charcoal,
    ItemID.melon_charcoal,
    ItemID.charcoal_chunk,
    ItemID.coal_chunk
]);




