//материалы
ToolAPI.addToolMaterial("Oshipovannaia_dybina", {durability: 200, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("Ashipovannaia_dybina", {durability: 200, level: 3, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("stal", {durability: 351, level: 3, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("Oshipovannii_nozh", {durability: 300, level: 3, efficiency: 6, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("Dshipovannii_nozh", {durability: 500, level: 4, efficiency: 6, damage: 5, enchantability: 14});
//инструменты и оружие
//шипованные дубины
IDRegistry.genItemID("shipovannaia_dybina");
Item.createItem("shipovannaia_dybina", "Шипованная дубина", {name: "шипованная_дубина", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.shipovannaia_dybina, true);
ToolAPI.setTool(ItemID.shipovannaia_dybina, "Oshipovannaia_dybina", ToolType.sword);
IDRegistry.genItemID("otravlennaia_shipovannaia_dybina");
Item.createItem("otravlennaia_shipovannaia_dybina", "Ядовитая шипованная дубина", {name: "отравленная_шипованная_дубина", meta: 0}, {stack: 1});//к сожаление покачто мобов не отравляет(а вот теперь отравляет)
Item.setToolRender(ItemID.otravlennaia_shipovannaia_dybina, true);
ToolAPI.setTool(ItemID.otravlennaia_shipovannaia_dybina, "Ashipovannaia_dybina", ToolType.sword);
//ножи с шипами стражей
IDRegistry.genItemID("nozh_s_shipom_drevnego_strazha");
Item.createItem("nozh_s_shipom_drevnego_strazha", "Нож с шипом древнего стража", {name: "нож_с_шипом_древнего_стража", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.nozh_s_shipom_drevnego_strazha, true);
ToolAPI.setTool(ItemID.nozh_s_shipom_drevnego_strazha, "Dshipovannii_nozh", ToolType.sword);
IDRegistry.genItemID("nozh_s_shipom_strazha");
Item.createItem("nozh_s_shipom_strazha", "Нож с шипом стража", {name: "нож_с_шипом_стража", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.nozh_s_shipom_strazha, true);
ToolAPI.setTool(ItemID.nozh_s_shipom_strazha, "Oshipovannii_nozh", ToolType.sword);
IDRegistry.genItemID("tnozh_s_shipom_drevnego_strazha");
Item.createItem("tnozh_s_shipom_drevnego_strazha", "Нож с шипом древнего стража", {name: "т_нож_с_шипом_древнего_стража", meta: 0}, {stack: 1, isTech: true});//аналог обычного ножа но с травяным принтом
Item.setToolRender(ItemID.tnozh_s_shipom_drevnego_strazha, true);
ToolAPI.setTool(ItemID.tnozh_s_shipom_drevnego_strazha, "Dshipovannii_nozh", ToolType.sword);
IDRegistry.genItemID("tnozh_s_shipom_strazha");
Item.createItem("tnozh_s_shipom_strazha", "Нож с шипом стража", {name: "т_нож_с_шипом_стража", meta: 0}, {stack: 1, isTech: true});//аналог обычного ножа но с травяным принтом
Item.setToolRender(ItemID.tnozh_s_shipom_strazha, true);
ToolAPI.setTool(ItemID.tnozh_s_shipom_strazha, "Oshipovannii_nozh", ToolType.sword);
//стальные интрументы
if(!primal_core){
IDRegistry.genItemID("stalnoi_mech");
Item.createItem("stalnoi_mech", "Стальной меч", {name: "стальной_меч", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnoi_mech, true);
ToolAPI.setTool(ItemID.stalnoi_mech, "stal", ToolType.sword);
}
IDRegistry.genItemID("stalnaia_motiga");
Item.createItem("stalnaia_motiga", "Стальная мотыга", {name: "стальная_мотыга", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnaia_motiga, true);
ToolAPI.setTool(ItemID.stalnaia_motiga, "stal", ToolType.hoe);
IDRegistry.genItemID("stalnaia_lopata");
Item.createItem("stalnaia_lopata", "Стальная лопата", {name: "стальная_лопата", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnaia_lopata, true);
ToolAPI.setTool(ItemID.stalnaia_lopata, "stal", ToolType.shovel);
IDRegistry.genItemID("stalnaia_kircka");
Item.createItem("stalnaia_kircka", "Стальная кирка", {name: "стальная_кирка", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnaia_kircka, true);
ToolAPI.setTool(ItemID.stalnaia_kircka, "stal", ToolType.pickaxe);
IDRegistry.genItemID("stalnoi_topor");
Item.createItem("stalnoi_topor", "Стальной топор", {name: "стальной_топор", meta: 0}, {stack: 1});
Item.setToolRender(ItemID.stalnoi_topor, true);
ToolAPI.setTool(ItemID.stalnoi_topor, "stal", ToolType.axe);
//эффекты оружия
Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.otravlennaia_shipovannaia_dybina){ 
Entity.addEffect(victim, 19, 0, 100, false,false); 
 } 
else if(Entity.getType(victim) == 28){
var coords = Entity.getPosition(victim);
if(World.getBlockID(coords.x,coords.y,coords.z)!==0)
{
    Entity.addEffect(victim, 13, 0, 99999999999999)
    Game.prevent();
   }
if(World.getBlockID(coords.x,coords.y,coords.z)==0)
{
PlayBlockSound();
}
 } 
});