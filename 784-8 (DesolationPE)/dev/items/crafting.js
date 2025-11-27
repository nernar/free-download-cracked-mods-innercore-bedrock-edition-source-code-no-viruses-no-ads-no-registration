IDRegistry.genItemID("ashPile");
Item.createItem("ashPile", "Ash Pile", {name: "ash_pile"});

Item.registerUseFunction(ItemID.ashPile, function(coords, item, block, player) {
    let region = BlockSource.getDefaultForActor(player);
    if (block.id == BlockID.soilCharred) {
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ashPiled, 0);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
    if (block.id == BlockID.ashPiled && block.data < 3) {
        region.destroyBlock(coords.x,coords.y,coords.z,false);
        region.setBlock(coords.relative.x, coords.relative.y, coords.relative.z, BlockID.ashPiled, block.data + 1);
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data, item.extra);
    }
});

IDRegistry.genItemID("charcoalBit");
Item.createItem("charcoalBit", "Charcoal Bit", {name: "charcoal_bit"});

IDRegistry.genItemID("charcoalActivated");
Item.createItem("charcoalActivated", "Charcoal Activated", {name: "activated_charcoal"});

IDRegistry.genItemID("charcoalActivatedFilter");
Item.createItem("charcoalActivatedFilter", "Charcoal Activated Filter", {name: "air_filter"});

IDRegistry.genItemID("ashPrimed");
Item.createItem("ashPrimed", "Ash Pile Primed", {name: "primed_ash"});

IDRegistry.genItemID("charcoalInfused");
Item.createItem("charcoalInfused", "Charcoal Activated Infused", {name: "infused_powder"});

IDRegistry.genItemID("glassBit");
Item.createItem("glassBit", "Glass Bit", {name: "glass_bit"});

IDRegistry.genItemID("cinderHeart");
Item.createItem("cinderHeart", "Heart of Cinder", {name: "heart_of_cinder"});
Item.setGlint(ItemID.cinderHeart, true);






Callback.addCallback("PostLoaded", function (){

Recipes.addShaped({id: 263, count: 1, data: 0}, [
    "aaa",
    "aaa"
], ['a', ItemID.charcoalBit, 0]);

Recipes.addShaped({id: ItemID.charcoalBit, count: 6, data: 0}, [
    "ooa",
], ['a', 263, 0]);

Recipes.addShaped({id: ItemID.charcoalActivatedFilter, count: 1, data: 0}, [
    "aaa",
    "aba",
    "aaa"
], ['a', ItemID.charcoalActivated, 0, 'b', 339, 0]);

Recipes.addShaped({id: ItemID.glassBit, count: 6, data: 0}, [
    "ooa",
], ['a', 20, 0]);

Recipes.addShaped({id: 102, count: 1, data: 0}, [
    "aaa",
    "aaa"
], ['a', ItemID.glassBit, 0]);

});

