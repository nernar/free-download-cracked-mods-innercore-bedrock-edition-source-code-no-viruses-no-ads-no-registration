

/*cableAPI.addGroup(BlockID.geothermalGenerator);
cableAPI.addGroup(BlockID.genWindMill);*/





ModAPI.addAPICallback("VampirismAPI", function(api){
	IDRegistry.genItemID("vampirism_battery");
Item.createItem("vampirism_battery", "Vampirism battery", {name: "blood_battery", meta: 0}, {stack: 1});
battery.set(ItemID.vampirism_battery, {storage: 600});
Translation.addTranslation("Vampirism battery",{
ru: "§4Батарейка Вампира"
})
Recipes.addShaped({id: ItemID.vampirism_battery, count: 1, data: 0}, [
    " g ",
    "gbg",
    "gag"
], ['a', ItemID.bloodBottle, 3, 'b', ItemID.humanHeart, 0, 'g', ItemID.compressed_titanium, 0]);
});


/*Callback.addCallback("LocalTick", function() {

	if(Player.getDimension()==Moon.id){
	if(World.getThreadTime%300 == 2)	SpaceRace.play();
	}
});
*/