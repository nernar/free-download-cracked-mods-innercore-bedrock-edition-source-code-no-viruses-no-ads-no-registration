IDRegistry.genItemID("exobatpack"); 
IDRegistry.genItemID("exoadvBatpack"); 
IDRegistry.genItemID("exoenergypack");

Item.createArmorItem("exobatpack", "Batpack", {name: "exobatpack"}, {type: "chestplate", armor: 3, durability: 60000, texture: "armor/exobatpack_1.png", isTech: true});
Item.createArmorItem("exoadvBatpack", "AdvBatpack", {name: "exoadvbatpack"}, {type: "chestplate", armor: 3, durability: 600000, texture: "armor/exoadvbatpack_1.png", isTech: true});
Item.createArmorItem("exoenergypack", "Energypack", {name: "exoenergypack"}, {type: "chestplate", armor: 3, durability: 2000000, texture: "armor/exoenergypack_1.png", isTech: true});

ChargeItemRegistry.registerItem(ItemID.exobatpack, "Eu",  60000, 1, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.exoadvBatpack, "Eu",  600000, 2, "storage", true); 
ChargeItemRegistry.registerItem(ItemID.exoenergypack, "Eu", 2000000, 3, "storage", true);

ICore.ItemName.setRarity(ItemID.exobatpack, 1);
ICore.ItemName.setRarity(ItemID.exoadvBatpack, 1);
ICore.ItemName.setRarity(ItemID.exoenergypack, 1);

Item.registerNameOverrideFunction(ItemID.exobatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.exoadvBatpack, ICore.ItemName.showItemStorage);
Item.registerNameOverrideFunction(ItemID.exoenergypack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.exobatpack, count: 1, data: Item.getMaxDamage(ItemID.exobatpack)}, ["bab","bbb","bbb"], ['a', ItemID.batpack, -1, 'b', ItemID.Exo, 0]);
Recipes.addShaped({id: ItemID.exoadvBatpack, count: 1, data: Item.getMaxDamage(ItemID.exoadvBatpack)}, ["bab","bbb","bbb"], ['a', ItemID.advBatpack, -1, 'b', ItemID.Exo, 0]);
Recipes.addShaped({id: ItemID.exoenergypack, count: 1, data: Item.getMaxDamage(ItemID.exoenergypack)}, ["bab","bbb","bbb"], ['a', ItemID.energypack, -1, 'b', ItemID.Exo, 0]);

ICore.registerEnergyPack("exobatpack", 1, 32); ICore.registerEnergyPack("exoadvBatpack", 2, 256); ICore.registerEnergyPack("exoenergypack", 3, 2048);