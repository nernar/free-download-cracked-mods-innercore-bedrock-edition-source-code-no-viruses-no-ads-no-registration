IDRegistry.genItemID("basic_magic_wand");
Item.createItem("basic_magic_wand", "Basic magic wand", {name: "basic_magic_wand", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.basic_magic_wand, count: 1, data: 0}, [
    "a  ",
    " b ",
    "  b"
], ['a', ItemID.YellowStoneShard, 0, 'b', 280, 0]);
IDRegistry.genItemID("wand_master");
Item.createItem("wand_master", "wand master", {name: "wand_master", meta: 0}, {stack: 64});
IDRegistry.genItemID("YellowStoneShard");
Item.createItem("YellowStoneShard", "YellowStoneShard", {name: "YellowStoneShard", meta: 0}, {stack: 64});