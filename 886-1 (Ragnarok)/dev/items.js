IDRegistry.genItemID("grimoire");
Item.createItem("grimoire", "Grimoire", {name: "grimoire", meta: 0}, {stack: 1});

ToolAPI.addToolMaterial("grimoire", {durability: 15, level: 1, efficiency: 5, damage: 1, enchantability: 5});
ToolLib.setTool(ItemID.grimoire, "grimoire", ToolType.grimoire);

/*let Ragnarok = {}
Ragnarok.registerClicking = function (block, id, item)

{Item.registerUseFunction(ItemID.grimoire, function(coords, item, block, player) {
    if(block.id == BlockID.arid_box) {
        var regi = BlockSource.getDefaultForActor(Player.get());
        regi.setBlock(coords.x, coords.y, coords.z, BlockID.arid_box_released, 0);
        Entity.setCarriedItem(player, item.id, item.count, item.data - 1);}})}*/

Recipes.addShaped({id: ItemID.grimoire, count: 1, data: 0}, [
    "qwe",
    "rty",
    "uio"
], ['q', ItemID.diyuite_ingot, 0, 'w', ItemID.hadesite_ingot, 0, 'e', ItemID.narakasite_ingot, 0, 'r', ItemID.helheimite_ingot, 0, 't', 340, 0, 'y', ItemID.yomite_ingot, 0, 'u', ItemID.annwinite_ingot, 0, 'i', ItemID.duatite_ingot, 0, 'o', ItemID.xibalbaite_ingot, 0]);

IDRegistry.genItemID("offering");
Item.createItem("offering", "Offering", {name: "offering"});

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.annwinite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.diyuite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.duatite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.hadesite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.helheimite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.narakasite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.xibalbaite_ingot, 0, 'x', 339, 0]);

Recipes.addShaped({id: ItemID.offering, count: 1, data: 0}, [
    "ax"
], ['a', ItemID.yomite_ingot, 0, 'x', 339, 0]);