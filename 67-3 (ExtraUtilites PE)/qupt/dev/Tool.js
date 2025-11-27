ToolAPI.addToolMaterial("unstable", {level: 4, efficiency: 45, damage: 3, enchantability: 15, durablility: 1350});
ToolLIB.register({params: {uid: "unstableSword", name: "Unstable Sword", textures: {name: "unstablesword"}}, funcs: {material: "unstable", enchantType: Native.EnchantType.weapon, prototype: {damage: 4, blockTypes: ["fibre", "plant"]}}});
ToolLIB.register({params: {uid: "unstableShovel", name: "Unstable Shovel", textures: {name: "unstableshovel"}}, funcs: {material: "unstable", enchantType: Native.EnchantType.shovel, prototype: {damage: 1, blockTypes: ["dirt"]}}});
ToolLIB.register({params: {uid: "unstablePickaxe", name: "Unstable Pickaxe", textures: {name: "unstablepickaxe"}}, funcs: {prototype: {damage: 2, blockTypes: ["stone", "dirt"]}, material: "unstable", enchantType: Native.EnchantType.pickaxe}});
ToolLIB.register({params: {uid: "unstableAxe", name: "Unstable Axe", textures: {name: "unstableaxe"}}, funcs: {material: "unstable", enchantType: Native.EnchantType.axe, prototype: {damage: 3, blockTypes: ["wood"]}}});
Item.setToolRender(ItemID.unstableAxe, true);
Item.setToolRender(ItemID.unstableShovel, true);
Item.setToolRender(ItemID.unstableSword, true);
Item.setToolRender(ItemID.unstablePickaxe, true);
Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.unstableSword, count: 1, data: 0}, ["a", "a", "b"], ["a", ItemID.unstableIngot, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstableShovel, count: 1, data: 0}, ["a", "b", "b"], ["a", ItemID.unstableIngot, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstablePickaxe, count: 1, data: 0}, ["aaa", " b ", " b "], ["a", ItemID.unstableIngot, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstableAxe, count: 1, data: 0}, ["aa", "ab", " b"], ["a", ItemID.unstableIngot, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstableSword, count: 1, data: 0}, ["a", "a", "b"], ["a", ItemID.unstableIngot1, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstableShovel, count: 1, data: 0}, ["a", "b", "b"], ["a", ItemID.unstableIngot1, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstablePickaxe, count: 1, data: 0}, ["aaa", " b ", " b "], ["a", ItemID.unstableIngot1, 0, "b", 49, -1]);
    Recipes.addShaped({id: ItemID.unstableAxe, count: 1, data: 0}, ["aa", "ab", " b"], ["a", ItemID.unstableIngot1, 0, "b", 49, -1]);
});

