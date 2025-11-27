IDRegistry.genItemID("sageHelmet");
Item.createArmorItem("sageHelmet", "Sage Helmet", {name: "sagehelmet"}, {type: "helmet", armor: 3, durability: 1500, texture: "armor/sagelayer_1.png"});

IDRegistry.genItemID("sageChestplate");
Item.createArmorItem("sageChestplate", "Sage Chestplate", {name: "sagechest"}, {type: "chestplate", armor: 8, durability: 1500, texture: "armor/sagelayer_1.png"});

IDRegistry.genItemID("sageLeggings");
Item.createArmorItem("sageLeggings", "Sage Leggings", {name: "sagelegs"}, {type: "leggings", armor: 6, durability: 1500, texture: "armor/sagelayer_2.png"});

IDRegistry.genItemID("sageBoots");
Item.createArmorItem("sageBoots", "Sage Boots", {name: "sageboots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/sagelayer_1.png"});

IDRegistry.genItemID("scaleHelmet");
Item.createArmorItem("scaleHelmet", "Scale Helmet", {name: "scalehelmet"}, {type: "helmet", armor: 3, durability: 1500, texture: "armor/scalelayer_1.png"});

IDRegistry.genItemID("scaleChestplate");
Item.createArmorItem("scaleChestplate", "Scale Chestplate", {name: "scalechest"}, {type: "chestplate", armor: 8, durability: 1500, texture: "armor/scalelayer_1.png"});

IDRegistry.genItemID("scaleLeggings");
Item.createArmorItem("scaleLeggings", "Scale Leggings", {name: "scalelegs"}, {type: "leggings", armor: 6, durability: 1500, texture: "armor/scalelayer_2.png"});

IDRegistry.genItemID("scaleBoots");
Item.createArmorItem("scaleBoots", "Scale Boots", {name: "scaleboots"}, {type: "boots", armor: 3, durability: 176, texture: "armor/scalelayer_1.png"});

IDRegistry.genItemID("thiefHelmet");
Item.createArmorItem("thiefHelmet", "Thief Helmet", {name: "thiefhelmet"}, {type: "helmet", armor: 3, durability: 1500, texture: "armor/thieflayer_1.png"});

IDRegistry.genItemID("thiefChestplate");
Item.createArmorItem("thiefChestplate", "Thief Chestplate", {name: "thiefchest"}, {type: "chestplate", armor: 8, durability: 1500, texture: "armor/thieflayer_1.png"});

IDRegistry.genItemID("thiefLeggings");
Item.createArmorItem("thiefLeggings", "Thief Leggings", {name: "thieflegs"}, {type: "leggings", armor: 6, durability: 1500, texture: "armor/thieflayer_2.png"});

IDRegistry.genItemID("thiefBoots");
Item.createArmorItem("thiefBoots", "Thief Boots", {name: "thiefboots"}, {type: "boots", armor: 3, durability: 1500, texture: "armor/thieflayer_1.png"});

IDRegistry.genItemID("tribalHelmet");
Item.createArmorItem("tribalHelmet", "Tribal Helmet", {name: "tribalhelmet"}, {type: "helmet", armor: 3, durability: 1500, texture: "armor/tribalhelm.png"});

IDRegistry.genItemID("tribalChestplate");
Item.createArmorItem("tribalChestplate", "Tribal Chestplate", {name: "tribalchest"}, {type: "chestplate", armor: 8, durability: 1500, texture: "armor/triballayer_1.png"});

IDRegistry.genItemID("tribalLeggings");
Item.createArmorItem("tribalLeggings", "Tribal Leggings", {name: "triballegs"}, {type: "leggings", armor: 6, durability: 1500, texture: "armor/triballayer_2.png"});

IDRegistry.genItemID("tribalBoots");
Item.createArmorItem("tribalBoots", "Tribal Boots", {name: "tribalboots"}, {type: "boots", armor: 3, durability: 1500, texture: "armor/triballayer_1.png"});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
	coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	if(Math.random()< __config__.access("HexGenNumber") ){
		if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)){
			World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.hexibiscus, 0);
		}
	}
});

Recipes.addShaped({id: ItemID.sageHelmet, count: 1, data: 0}, [
	" b ",
	"cac",
	"d d"
], ['a', ItemID.diamondHexical, 0,'b', 340, 0,'c', 49, 0, 'd',35,0]);

Recipes.addShaped({id: ItemID.sageChestplate, count: 1, data: 0}, [
	"c c",
	"dad",
	"cbc"
], ['a', ItemID.diamondHexical, 0, 'b', 35, 0,'c', 266, 0, 'd',340,0]);

Recipes.addShaped({id: ItemID.sageLeggings, count: 1, data: 0}, [
	"bcb",
	"dad",
	"b b"
], ['a', ItemID.diamondHexical, 0,'b', 266, 0,'c', 35, 0, 'd',340,0]);

Recipes.addShaped({id: ItemID.sageBoots, count: 1, data: 0}, [
	"bab",
	"c c",
	"   "
], ['a', ItemID.diamondHexical, 0,'b', 340, 0, 'c',35,0]);

Recipes.addShaped({id: ItemID.scaleHelmet, count: 1, data: 0}, [
	"bbb",
	"cac"
], ['a', ItemID.diamondHexical, 0,'b', 49, 0,'c', 266, 0]);

Recipes.addShaped({id: ItemID.scaleChestplate, count: 1, data: 0}, [
	"c c",
	"bab",
	"cbc"
], ['a', ItemID.diamondHexical, 0, 'b', 49, 0,'c', 266, 0]);

Recipes.addShaped({id: ItemID.scaleLeggings, count: 1, data: 0}, [
	"bbb",
	"cac",
	"b b"
], ['a', ItemID.diamondHexical, 0,'b', 49, 0,'c', 266, 0]);

Recipes.addShaped({id: ItemID.scaleBoots, count: 1, data: 0}, [
	"bab",
	"b b"
], ['a', ItemID.diamondHexical, 0,'b', 49, 0]);


Recipes.addShaped({id: ItemID.thiefHelmet, count: 1, data: 0}, [
	"bbb",
	"bab"
], ['a', ItemID.diamondHexical, 0,'b', 35, 14]);

Recipes.addShaped({id: ItemID.thiefChestplate, count: 1, data: 0}, [
	"b b",
	"cac",
	"ccc"
], ['a', ItemID.diamondHexical, 0, 'b', 35, 14,'c', 334, 0]);

Recipes.addShaped({id: ItemID.thiefLeggings, count: 1, data: 0}, [
	"bab",
	"bcb",
	"b b"
], ['a', ItemID.diamondHexical, 0,'b', 334, 0,'c', 287, 0]);

Recipes.addShaped({id: ItemID.thiefBoots, count: 1, data: 0}, [
	"cac",
	"b b"
], ['a', ItemID.diamondHexical, 0, 'b', 35, 7,'c', 334, 0]);


Recipes.addShaped({id: ItemID.tribalHelmet, count: 1, data: 0}, [
	"bbb",
	"bab"
], ['a', ItemID.diamondHexical, 0,'b', 352, 0]);

Recipes.addShaped({id: ItemID.tribalChestplate, count: 1, data: 0}, [
	"c c",
	"bab",
	"cbc"
], ['a', ItemID.diamondHexical, 0, 'b', 334, 0,'c', 265, 0]);

Recipes.addShaped({id: ItemID.tribalLeggings, count: 1, data: 0}, [
	"bbb",
	"cac",
	"b b"
], ['a', ItemID.diamondHexical, 0,'b', 334, 0,'c', 265, 0]);

Recipes.addShaped({id: ItemID.tribalBoots, count: 1, data: 0}, [
	"cac",
	"b b"
], ['a', ItemID.diamondHexical, 0,'b', 334, 0,'c', 287, 0]);

var sageArmor = false;
var scaleArmor = false;
var thiefArmor = false;
var tribalArmor = false;
Callback.addCallback("tick", function(){
	if(World.getThreadTime()%120 == 0){
		if(World.getBlock(Player.getPosition().x-0.5, Player.getPosition ().y-0.8, Player.getPosition ().z-0.6).id == BlockID.hexibiscus){
			Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 0, 20*5);
			Entity.addEffect(Player.get(), Native.PotionEffect.regeneration, 0, 20*5);
		}
	}
	var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
	if(World.getThreadTime()%50 == 0){
		if(armor[0].id == ItemID.sageHelmet&&armor[1].id == ItemID.sageChestplate&&armor[2].id == ItemID.sageLeggings&&armor[3].id == ItemID.sageBoots){
			sageArmor = true;
			Entity.addEffect(Player.get(), Native.PotionEffect.waterBreathing, 0, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 2, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 0, 20*15);
		}else if(sageArmor) Entity.clearEffects (Player.get()), sageArmor = false;
		
		if(armor[0].id == ItemID.scaleHelmet&&armor[1].id == ItemID.scaleChestplate&&armor[2].id == ItemID.scaleLeggings&&armor[3].id == ItemID.scaleBoots){
			scaleArmor = true;
			Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 0, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 0, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.fireResistance, 1, 20*15);
		}else if(scaleArmor) Entity.clearEffects (Player.get()), scaleArmor = false;

		if(armor[0].id == ItemID.thiefHelmet&&armor[1].id == ItemID.thiefChestplate&&armor[2].id == ItemID.thiefLeggings&&armor[3].id == ItemID.thiefBoots){
			thiefArmor = true;
			Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 0, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.movementSpeed, 2, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.damageBoost, 0, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.jump, 0, 20*15);
		}else if(thiefArmor) Entity.clearEffects (Player.get()), thiefArmor = false;

		if(armor[0].id == ItemID.tribalHelmet&&armor[1].id == ItemID.tribalChestplate&&armor[2].id == ItemID.tribalLeggings&&armor[3].id == ItemID.tribalBoots){
			tribalArmor = true;
			Entity.addEffect(Player.get(), Native.PotionEffect.nightVision, 0, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.digSpeed, 1, 20*15);
			Entity.addEffect(Player.get(), Native.PotionEffect.jump, 2, 20*15);
		}else if(tribalArmor) Entity.clearEffects (Player.get()), tribalArmor = false;
	}


});