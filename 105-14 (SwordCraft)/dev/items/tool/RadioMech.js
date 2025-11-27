importLib("ToolType", "*");
IDRegistry.genItemID("RadioMech");
Item.createItem("RadioMech", "Радиоактивный меч", {name: "RadioMech", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("RadioMech", {durability: 130, level: 0, efficiency: 20, damage: 9, enchantability: 30});
ToolAPI.setTool(ItemID.RadioMech, "RadioMech", ToolType.sword);
Callback.addCallback("tick", function()
{
if(Player.getCarriedItem().id == ItemID.RadioMech){
Entity.addEffect(Player.get(), 19, 60, 1, false, false)}
});