IDRegistry.genItemID("jazzium_ingot");
Item.createItem("jazzium_ingot", "Jazzium Ingot", {name: "jazzium_ingot"});

IDRegistry.genItemID("flamed_jazzium_ingot");
Item.createItem("flamed_jazzium_ingot", "Flamed Jazzium Ingot", {name: "flamed_jazzium_ingot"});

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

IDRegistry.genBlockID("jazzium_block");
Block.createBlock("jazzium_block", [
    {name: "Block of Jazzium", texture: [["jazzium_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.jazzium_block, "stone");
Block.setDestroyLevel("jazzium_block", 2);

IDRegistry.genBlockID("flamed_jazzium_block");
Block.createBlock("flamed_jazzium_block", [
    {name: "Block of Flamed Jazzium", texture: [["flamed_jazzium_block", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.flamed_jazzium_block, "stone");
Block.setDestroyLevel("flamed_jazzium_block", 2);

Recipes.addShaped({id: BlockID.jazzium_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
    ], ['x', ItemID.jazzium_ingot, 0]);

Recipes.addShaped({id: BlockID.flamed_jazzium_block, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
    ], ['x', ItemID.flamed_jazzium_ingot, 0]);

Recipes.addShaped({id: ItemID.jazzium_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.jazzium_block, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_ingot, count: 9, data: 0}, [
    " x "
], ['x', BlockID.flamed_jazzium_block, 0]);

Recipes.addShaped({id: ItemID.flamed_jazzium_ingot, count: 1, data: 0}, [
    "xa"
], ['x', ItemID.jazzium_ingot, 0, 'a', 377, 0]);

Recipes.addFurnace(BlockID.jazzium_ore, ItemID.jazzium_ingot, 0); 