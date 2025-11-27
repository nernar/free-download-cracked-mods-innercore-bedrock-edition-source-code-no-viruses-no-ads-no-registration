IDRegistry.genItemID("DjungleSword");
IDRegistry.genItemID("DjungleShovel");
IDRegistry.genItemID("DjunglePickaxe");
IDRegistry.genItemID("DjungleAxe");
Item.createItem("DjungleSword", "Копье", {name: "DjungleSword", meta:  0}, {stack: 1});
Item.createItem("DjungleShovel", "Лопата Джунгли", {name: "DjungleShovel", meta: 0}, {stack: 1});
Item.createItem("DjunglePickaxe", "Кирка Джунгли", {name: "DjunglePickaxe", meta: 0}, {stack: 1});
Item.createItem("DjungleAxe", "Топор Джунгли", {name: "DjungleAxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.DjungleSword, "StoneTools", ToolType.sword);
ToolAPI.setTool(ItemID.DjungleShovel, "StoneTools", ToolType.shovel);
ToolAPI.setTool(ItemID.DjunglePickaxe, "StoneTools", ToolType.pickaxe);
ToolAPI.setTool(ItemID.DjungleAxe, "StoneTools", ToolType.axe);

Recipes.addShaped({id: ItemID.DjungleSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.Djcobblestone, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.DjungleShovel, count: 1, data: 0}, [
    "a",
    "c",
    "b"
], ['a', BlockID.Djcobblestone, 0, 'c', ItemID.djunglestring, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.DjunglePickaxe, count: 1, data: 0}, [
    "aaa",
    " c ",
    " b "
], ['a', BlockID.Djcobblestone, 0, 'c', ItemID.djunglestring, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.DjungleAxe, count: 1, data: 0}, [
    "aa",
    "ac",
    " b"
], ['a', BlockID.Djcobblestone, 0, 'c', ItemID.djunglestring, 0, 'b', 280, 0]);



IDRegistry.genItemID("CrystasSword");
IDRegistry.genItemID("CrystasShovel");
IDRegistry.genItemID("CrystasPickaxe");
IDRegistry.genItemID("CrystasAxe");
Item.createItem("CrystasSword", "Кристас Меч", {name: "Crystas_sword", meta:  0}, {stack: 1});
Item.createItem("CrystasShovel", "Кристас Лопата", {name: "Crystas_shovel", meta: 0}, {stack: 1});
Item.createItem("CrystasPickaxe", "Кристас Кирка", {name: "Crystas_pickaxe", meta: 0}, {stack: 1});
Item.createItem("CrystasAxe", "Кристас Топор", {name: "Crystas_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.CrystasSword, "CrystasTools", ToolType.sword);
ToolAPI.setTool(ItemID.CrystasShovel, "CrystasTools", ToolType.shovel);
ToolAPI.setTool(ItemID.CrystasPickaxe, "CrystasTools", ToolType.pickaxe);
ToolAPI.setTool(ItemID.CrystasAxe, "CrystasTools", ToolType.axe);

Recipes.addShaped({id: ItemID.CrystasSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.CrystasShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.CrystasPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.CrystasAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);



IDRegistry.genItemID("MentalSword");
IDRegistry.genItemID("MentalShovel");
IDRegistry.genItemID("MentalPickaxe");
IDRegistry.genItemID("MentalAxe");
Item.createItem("MentalSword", "Ментал Меч", {name: "mental_sword", meta:  0}, {stack: 1});
Item.createItem("MentalShovel", "Ментал Лопата", {name: "mental_shovel", meta: 0}, {stack: 1});
Item.createItem("MentalPickaxe", "Ментал Кирка", {name: "mental_pickaxe", meta: 0}, {stack: 1});
Item.createItem("MentalAxe", "Ментал Топор", {name: "mental_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.MentalSword, "MentalTools", ToolType.sword);
ToolAPI.setTool(ItemID.MentalShovel, "MentalTools", ToolType.shovel);
ToolAPI.setTool(ItemID.MentalPickaxe, "MentalTools", ToolType.pickaxe);
ToolAPI.setTool(ItemID.MentalAxe, "MentalTools", ToolType.axe);

Recipes.addShaped({id: ItemID.MentalSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.MentalShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.MentalPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.MentalAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);