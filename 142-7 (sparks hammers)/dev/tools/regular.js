const regRegular = function(name, param, mat){
	mat || (mat = ItemID["ingot" + name]);
	const hamID = "ham" + name;
	const excID = "exc" + name;
	IDRegistry.genItemID(hamID);
	IDRegistry.genItemID(excID);
	Item.createItem(hamID, name + " Hammer", {name: hamID}, {stack: 1});
	Item.createItem(excID, name + " Excavator", {name: excID}, {stack: 1});
	ToolAPI.registerTool(ItemID[hamID], param, ["stone"]);
	ToolAPI.registerTool(ItemID[excID], param, ["dirt"]);
	Callback.addCallback("DestroyBlock", function(c, block){
		const item = Player.getCarriedItem();
		if(item.id == ItemID[hamID]){
			for(let i = -1; i <= 1; i++){
			for(let j = -1; j <= 1; j++){
				switch(c.side & 6){
					case 0:
						if(SHammer.destroy(c.x + i, c.y, c.z + j, "stone", item))return;
						break;
					case 2:
						if(SHammer.destroy(c.x + i, c.y + j, c.z, "stone", item))return;
						break;
					case 4:
						if(SHammer.destroy(c.x, c.y + i, c.z + j, "stone", item))return;
						break;
				}
			}
			}
			Player.setCarriedItem(item.id, 1, item.data);
		}
		if(item.id == ItemID[excID]){
			for(let i = -1; i <= 1; i++){
			for(let j = -1; j <= 1; j++){
				switch(c.side & 6){
					case 0:
						if(SHammer.destroy(c.x + i, c.y, c.z + j, "dirt", item))return;
						break;
					case 2:
						if(SHammer.destroy(c.x + i, c.y + j, c.z, "dirt", item))return;
						break;
					case 4:
						if(SHammer.destroy(c.x, c.y + i, c.z + j, "dirt", item))return;
						break;
				}
			}
			}
			Player.setCarriedItem(item.id, 1, item.data);
		}
	});
	SHammer.setRecipe([mat, mat, mat, mat, mat, mat, mat, mat, mat, mat], ItemID[hamID]);
	SHammer.setRecipe([0, mat, mat, mat, 0, mat, mat, mat, mat, mat], ItemID[excID]);
};


IDRegistry.genItemID("hamHead");
IDRegistry.genItemID("excHead");
Item.createItem("hamHead", "Hammer Head", {name: "hamHead"});
Item.createItem("excHead", "Excavator Head", {name: "excHead"});

Recipes.addShaped({id: ItemID.hamHead}, ["aaa", "aaa"], ["a", 17, -1]);
Recipes.addShaped({id: ItemID.hamHead}, ["aaa", "aaa"], ["a", 162, -1]);
Recipes.addShaped({id: ItemID.excHead}, ["oao", "aaa"], ["a", 17, -1]);
Recipes.addShaped({id: ItemID.excHead}, ["oao", "aaa"], ["a", 162, -1]);

regRegular("Wood", SHammer.params.Wood, 5);
regRegular("Stone", SHammer.params.Stone, 4);
regRegular("Iron", SHammer.params.Iron, 265);
regRegular("Gold", SHammer.params.Gold, 266);
regRegular("Diamond", SHammer.params.Diamond, 264);
regRegular("Obsidian", SHammer.params.Obsidian, 49);

Recipes.addShaped({id: ItemID.hamWood}, ["a", "b", "b"], ["a", ItemID.hamHead, 0, "b", 5, -1]);
Recipes.addShaped({id: ItemID.excWood}, ["a", "b", "b"], ["a", ItemID.excHead, 0, "b", 5, -1]);
Recipes.addShaped({id: BlockID.hamCraft}, ["aba", "bcb", "aba"], ["a", 1, 0, "b", 58, 0, "c", ItemID.hamWood, 0]);

ModAPI.addAPICallback("ICore", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Lead", SHammer.params.Lead);
	regRegular("Silver", SHammer.params.Silver);
	regRegular("Steel", SHammer.params.Steel);
	regRegular("Bronze", SHammer.params.Bronze);
});

ModAPI.addAPICallback("ATCore", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Lead", SHammer.params.Lead);
	regRegular("Silver", SHammer.params.Silver);
	regRegular("Steel", SHammer.params.Steel);
	regRegular("Bronze", SHammer.params.Bronze);
	regRegular("Aluminium", SHammer.params.Aluminium);
	regRegular("Nickel", SHammer.params.Nickel);
	regRegular("Platinum", SHammer.params.Platinum);
	regRegular("Invar", SHammer.params.Invar);
	regRegular("Electrum", SHammer.params.Electrum);
	regRegular("Chrome", SHammer.params.Chrome);
	regRegular("Zinc", SHammer.params.Zinc);
	regRegular("Ruby", SHammer.params.Ruby, ItemID.gemRuby);
});

ModAPI.addAPICallback("ForestryAPI", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Bronze", SHammer.params.Bronze);
});

ModAPI.addAPICallback("ThermalExpansionAPI", function(){
	regRegular("Copper", SHammer.params.Copper);
	regRegular("Tin", SHammer.params.Tin);
	regRegular("Lead", SHammer.params.Lead);
	regRegular("Silver", SHammer.params.Silver);
	regRegular("Steel", SHammer.params.Steel);
	regRegular("Bronze", SHammer.params.Bronze);
	regRegular("Aluminium", SHammer.params.Aluminium);
	regRegular("Nickel", SHammer.params.Nickel);
	regRegular("Platinum", SHammer.params.Platinum);
	regRegular("Invar", SHammer.params.Invar);
	regRegular("Electrum", SHammer.params.Electrum);
});