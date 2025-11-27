IDRegistry.genItemID("ultimateLappack");
Item.createArmorItem("ultimateLappack", "Ultimate Lappack", {name: "ultimate_lappack"}, {type: "chestplate", armor: 5, durability: 6e7, texture: "armor/ultimateLappack.png", isTech: true});
ChargeItemRegistry.registerItem(ItemID.ultimateLappack, "Eu", 6e7, 100000, 4, "storage", true);
ICore.ItemName.setRarity(ItemID.ultimateLappack, 2);
Item.registerNameOverrideFunction(ItemID.ultimateLappack, ICore.ItemName.showItemStorage);

Recipes.addShaped({id: ItemID.ultimateLappack, count: 1, data: Item.getMaxDamage(ItemID.ultimateLappack)}, [
	"aba",
	"aea",
	"asa"
], ['a', ItemID.storageLapotronCrystal, -1, 'e', ItemID.lappack, -1, 'b', ItemID.plateReinforcedIridium, 0, 's', ItemID.superconductor, 0], ChargeItemRegistry.transferEnergy);

ICore.registerEnergyPack("ultimateLappack", 4, 100000);