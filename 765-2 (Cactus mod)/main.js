importLib("ToolType", "*")
alert("Cactus Tools By ZentaGamerVN [HMDT]");





IDRegistry.genItemID("stick_cactus");
IDRegistry.genItemID("sword_cactus");
IDRegistry.genItemID("axe_cactus");
IDRegistry.genItemID("shovel_cactus");
IDRegistry.genItemID("pickaxe_cactus");

Item.createItem("sword_cactus", "Cactus sword\n§1Damage: 5", {name: "Cactus_sword", meta: 0}, {stack: 1});
Item.createItem("axe_cactus", "Cactus axe \n§1Damage: 7", {name: "Cactus_axe", meta: 0}, {stack: 1});
Item.createItem("shovel_cactus", "Cactus shovel \n§1Damage: 4", {name: "Cactus_shovel", meta: 0}, {stack: 1});
Item.createItem("pickaxe_cactus", "Cactus pickaxe \n§1Damage: 4", {name: "Cactus_pickaxe", meta: 0}, {stack: 1});
Item.createItem("stick_cactus", "Cactus stick", {name: "Cactus_stick", meta: 0}, {stack: 64});

ToolAPI.addToolMaterial("Cactus sword", {durability: 128, level: 3, efficiency: 4, damage: 1, enchantability: 30});
ToolAPI.setTool(ItemID.sword_cactus, "Cactus_sword", ToolType.sword);
ToolAPI.addToolMaterial("Cactus axe", {durability: 128, level: 3, efficiency: 4, damage: 3, enchantability: 30});
ToolAPI.setTool(ItemID.axe_cactus, "Cactus_axe", ToolType.axe);
ToolAPI.addToolMaterial("Cactus shovel", {durability: 128, level: 3, efficiency: 4, damage: 1, enchantability: 30});
ToolAPI.setTool(ItemID.shovel_cactus, "Cactus_shovel", ToolType.shovel);
ToolAPI.addToolMaterial("Cactus pickaxe", {durability: 128, level: 3, efficiency: 4, damage: 1, enchantability: 30});
ToolAPI.setTool(ItemID.pickaxe_cactus, "Cactus_pickaxe", ToolType.pickaxe);

Recipes.addShaped({id: ItemID.stick_cactus, count: 1, data: 0}, [
        "   ",
        " c ",
        " c "
    ], ['c', 81, 0,]);

Recipes.addShaped({id: ItemID.sword_cactus, count: 1, data: 0}, [
        " c ",
        " c ",
        " s "
    ], ['c', 81, 0,'s', ItemID.stick_cactus, 0,]);

Recipes.addShaped({id: ItemID.axe_cactus, count: 1, data: 0}, [
        "cc ",
        "cs ",
        " s "
    ], ['c', 81, 0,'s', ItemID.stick_cactus, 0,]);

Recipes.addShaped({id: ItemID.shovel_cactus, count: 1, data: 0}, [
        " c ",
        " s ",
        " s "
    ], ['c', 81, 0,'s', ItemID.stick_cactus, 0,]);

Recipes.addShaped({id: ItemID.pickaxe_cactus, count: 1, data: 0}, [
        "ccc",
        " s ",
        " s "
    ], ['c', 81, 0,'s', ItemID.stick_cactus, 0,]);