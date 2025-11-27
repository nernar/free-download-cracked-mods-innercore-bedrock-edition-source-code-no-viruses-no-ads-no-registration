importLib("ToolType", "*")

IDRegistry.genItemID("crook");
IDRegistry.genItemID("bcrook");
IDRegistry.genItemID("worm");
IDRegistry.genItemID("cworm");


Item.createItem("crook", "Crook", {name: "Crook", meta: 0}, {stack: 1});
Item.createItem("bcrook", "Bone Crook", {name: "CrookBone", meta: 0}, {stack: 1});
Item.createItem("worm", "Silkworm", {name: "Silkworm", meta: 0}, {stack: 64});
Item.createFoodItem("cworm","Cooked Silkworm",
{name:"SilkwormCooked", meta: 0}, {food: 1});

Recipes.addShaped({id: ItemID.crook, count: 1, data: 0}, [
		"mmo",
		"omo",
		"omo"
	], ['m', 280, -1]);
Recipes.addShaped({id: ItemID.bcrook, count: 1, data: 0}, [
		"mmo",
		"omo",
		"omo"
	], ['m', 352, -1]);
	
Recipes.addFurnace(ItemID.worm,ItemID.cworm, 0);


ToolAPI.addToolMaterial("crookk", {durability: 118, level: 1, efficiency: 4, damage: 1, enchantability: 30});
ToolAPI.addToolMaterial("bcrookk", {durability: 406, level: 1, efficiency: 4, damage: 1, enchantability: 30});

ToolAPI.setTool(ItemID.crook, "crookk", ToolType.pickaxe);
ToolAPI.setTool(ItemID.bcrook, "bcrookk", ToolType.pickaxe);

Callback.addCallback("DestroyBlock", function(c,id){
	
		var it = Player.getCarriedItem();
	
		if(id.id==18&&
			(Player.getCarriedItem().id==ItemID.crook||
			Player.getCarriedItem().id==ItemID.bcrook)
			){
				if(
				Math.random()*100<6
				){
					World.drop(c.x,c.y,c.z,6,1);	
				}else if(
				Math.random()*500<2
				){
					World.drop(c.x,c.y,c.z,ItemID.worm,1);	
				}else if(
				Math.random()*480<2
				){
					World.drop(c.x,c.y,c.z,260,1);	
				}
	};
		
});	