IDRegistry.genItemID("frozenPickaxe");
Item.createItem("frozenPickaxe", "Frozen pickaxe", {name: "frozen_pickaxe"}, {stack: "1"});
ToolAPI.setTool(ItemID.frozenPickaxe, "lapadin", ToolType.pickaxe);
Callback.addCallback("ItemUse", function (coords, item, block) {
    if (item.id == ItemID.frozenPickaxe) {
        World.setBlock(coords.x, coords.y, coords.z, 79);
    }
});

