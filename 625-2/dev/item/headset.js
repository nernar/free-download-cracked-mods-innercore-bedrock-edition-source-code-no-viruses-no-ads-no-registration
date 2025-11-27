
//headset

IDRegistry.genItemID(PREFIX + "headsetRed");

Item.createArmorItem(PREFIX + "headsetRed","Headset",{name:"itemHeadsetRed",meta:0},
{
	isTech: false, 
	armor: 1, 
	type:  "helmet" ,
	texture: "armor/headsetRed_1.png",
	durability: 1 
}
);

Translation.addTranslation("Headset", {zh: "耳机"});

Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "headsetRed"], count: 1, data: 0}, [
		"xxx",
		"x x",
		"   "
	], ['x', ItemID[PREFIX + "note_steel"], 0]);
});