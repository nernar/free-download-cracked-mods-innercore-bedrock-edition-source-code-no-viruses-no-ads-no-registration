IDRegistry.genItemID("eplus_upgrade");
Item.createItem("eplus_upgrade", "Table Upgrade", {name: "eplus_upgrade"});
Recipes2.addShaped(ItemID.eplus_upgrade, "aba:c_c:ada", {a: VanillaItemID.gold_ingot, b: VanillaItemID.writable_book, c: VanillaBlockID.obsidian, d: VanillaItemID.ender_eye});

Item.registerUseFunctionForID(ItemID.eplus_upgrade, (coords, item, block) => {
    if(block.id === VanillaBlockID.enchanting_table){
        World.setBlock(coords.x, coords.y, coords.z, BlockID.eplus_table, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
        Player.decreaseCarriedItem();
    }
});