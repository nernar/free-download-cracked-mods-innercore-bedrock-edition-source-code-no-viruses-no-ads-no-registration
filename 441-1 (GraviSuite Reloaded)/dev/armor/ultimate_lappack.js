IDRegistry.genItemID("ultimateLappack");
Item.createArmorItem("ultimateLappack", "Ultimate Lappack", {name: "ultimate_lappack"}, {type: "chestplate", armor: 5, durability: 6e7, texture: "armor/ultimateLappack"});
ICore.ChargeRegistry.registerItem(ItemID.ultimateLappack, "Eu", 6e7, 4);
Item.registerNameOverrideFunction(ItemID.ultimateLappack, ICore.ItemName.showRareItemStorage);

Recipes.addShaped({id: ItemID.ultimateLappack, count: 1, data: Item.getMaxDamage(ItemID.ultimateLappack)}, [
	"aba",
	"aea",
	"asa"
], ['a', ItemID.storageLapotronCrystal, -1, 'e', ItemID.lappack, -1, 'b', ItemID.plateReinforcedIridium, 0, 's', ItemID.superconductor, 0], ICore.ChargeRegistry.transportEnergy);

ICore.registerEnergyPack("ultimateLappack", 4, 100000);