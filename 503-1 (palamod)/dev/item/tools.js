importLib("ToolType", "*");

IDRegistry.genItemID("PalaFastsword");
Item.createItem("PalaFastsword", "Paladium Fastsword", {name: "PalaFastsword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.palaSword, "pala", ToolType.FastSword);

Callback.addCallback("ItemUse", function(id, item, block){
    if(item.id == ItemID.PalaFastsword){
	   Entity.addEffect(Player.get(), 3, 4, 2, true, true);
    }
});