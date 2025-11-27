IDRegistry.genItemID("classicAdvLappack");
Item.createArmorItem("classicAdvLappack", "Advanched Lappack", {name: "advanced_lappack"}, {type: "chestplate", armor: 5, durability: 6e7, texture: "armor/advancedlappack_1.png"});
ICore.ChargeRegistry.registerItem(ItemID.classicAdvLappack, "Eu", 600000, 3);
Item.registerNameOverrideFunction(ItemID.classicAdvLappack, ICore.ItemName.showItemStorage);

ICore.registerEnergyPack("classicAdvLappack", 4, 100000);