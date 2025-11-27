Translation.addTranslation("Stone", { ru: "Камень" });
Translation.addTranslation("Wood Pickaxe Stone", { ru: "Камень Деревянного Кирка" });
Translation.addTranslation("Stone Pickaxe Stone", { ru: "Камень Каменного Кирка" });
Translation.addTranslation("Iron Pickaxe Stone", { ru: "Камень Железного Кирка" });
Translation.addTranslation("Gold Pickaxe Stone", { ru: "Камень Золотого Кирка" });
Translation.addTranslation("Diamond Pickaxe Stone", { ru: "Камень Алмазного Кирка" });
Translation.addTranslation("Netherite Pickaxe Stone", { ru: "Камень Незеритовый Кирка" });

Item.addCreativeGroup("Stone", Translation.translate("Stone"), [
 BlockID.WoodPickOre,
 BlockID.PickaxeOre,
 BlockID.IronPickOre,
 BlockID.GoldPickaxeOre,
 BlockID.DiamondPickaxeOre,
 BlockID.NetheritePickaxeOre
]);