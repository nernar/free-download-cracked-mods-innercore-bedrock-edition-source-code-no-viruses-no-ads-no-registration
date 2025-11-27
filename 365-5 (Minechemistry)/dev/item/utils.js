IDRegistry.genItemID("obsidian_breaker");
Item.createItem("obsidian_breaker", "Obsidian Breaker", {name: "obsidian_breaker"});
Recipes2.addShaped(ItemID.obsidian_breaker, "ab:ba", {a: {id: ItemID.chem_element, data: ElemMeta.S}, b: {id: ItemID.chem_element, data: ElemMeta.K}});

Item.registerUseFunction("obsidian_breaker", function(coords, item, block){
    if(block.id === VanillaBlockID.obsidian){
        World.destroyBlock(coords.x, coords.y, coords.z, true);
        Player.decreaseCarriedItem();
    }
});