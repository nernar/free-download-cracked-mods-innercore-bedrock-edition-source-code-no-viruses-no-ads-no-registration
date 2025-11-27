const placeBookFunc = (coords: Callback.ItemUseCoordinates, item: ItemInstance, block: Tile) => {
    const place = World.canTileBeReplaced(block.id, block.data) ? coords : coords.relative;
    World.setBlock(place.x, place.y, place.z, BlockID.eplus_decoration);
    World.addTileEntity(place.x, place.y, place.z).data.skin = IDRegistry.getNameByID(item.id);
};


IDRegistry.genItemID("eplus_book_advanced");
Item.createItem("eplus_book_advanced", "Enchanting Plus Book", {name: "eplus_book_advanced"});
Item.registerUseFunction(ItemID.eplus_book_advanced, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_advanced, "_a_:aba:_a_", {a: VanillaItemID.glowstone_dust, b: VanillaItemID.enchanted_book});

IDRegistry.genItemID("eplus_book_vanilla");
Item.createItem("eplus_book_vanilla", "Enchanting Book", {name: "eplus_book_vanilla"});
Item.registerUseFunction(ItemID.eplus_book_vanilla, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_vanilla, "_a_:aba:_a_", {a: VanillaItemID.book, b: VanillaItemID.enchanted_book});

IDRegistry.genItemID("eplus_book_prismarine");
Item.createItem("eplus_book_prismarine", "Prismarine Book", {name: "eplus_book_prismarine"});
Item.registerUseFunction(ItemID.eplus_book_prismarine, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_prismarine, "_a_:aba:_a_", {a: VanillaItemID.prismarine_shard, b: VanillaItemID.enchanted_book});

IDRegistry.genItemID("eplus_book_nether");
Item.createItem("eplus_book_nether", "Nether Book", {name: "eplus_book_nether"});
Item.registerUseFunction(ItemID.eplus_book_nether, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_nether, "_a_:aba:_a_", {a: VanillaItemID.netherbrick, b: VanillaItemID.enchanted_book});

IDRegistry.genItemID("eplus_book_tartarite");
Item.createItem("eplus_book_tartarite", "Tartarite Book", {name: "eplus_book_tartarite"});
Item.registerUseFunction(ItemID.eplus_book_tartarite, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_tartarite, "_a_:aba:_a_", {a: VanillaItemID.magma_cream, b: VanillaItemID.enchanted_book});

IDRegistry.genItemID("eplus_book_white");
Item.createItem("eplus_book_white", "Pale Book", {name: "eplus_book_white"});
Item.registerUseFunction(ItemID.eplus_book_white, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_white, "_a_:aba:_a_", {a: VanillaItemID.paper, b: VanillaItemID.enchanted_book});

IDRegistry.genItemID("eplus_book_metal");
Item.createItem("eplus_book_metal", "Metal Book", {name: "eplus_book_metal"});
Item.registerUseFunction(ItemID.eplus_book_metal, placeBookFunc);
Recipes2.addShaped(ItemID.eplus_book_metal, "_a_:aba:_a_", {a: VanillaItemID.iron_ingot, b: VanillaItemID.enchanted_book});

Item.addCreativeGroup("eplus_book", "Floating Books", [
    ItemID.eplus_book_advanced,
    ItemID.eplus_book_vanilla,
    ItemID.eplus_book_prismarine,
    ItemID.eplus_book_nether,
    ItemID.eplus_book_tartarite,
    ItemID.eplus_book_white,
    ItemID.eplus_book_metal
]);