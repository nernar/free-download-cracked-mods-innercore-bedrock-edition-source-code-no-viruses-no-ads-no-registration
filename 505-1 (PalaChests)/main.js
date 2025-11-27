IMPORT ("DrawerAPI", "Drawer");

// file: block.js

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    base: 4
});

IDRegistry.genBlockID("oakDrawer");
Block.createBlockWithRotation("oakDrawer", [
    {
        name: "Oak Drawer",
        texture: [["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0], ["drawers_oak_front", 0], ["drawers_oak_side", 0], ["drawers_oak_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);


IDRegistry.genBlockID("brichDrawer");
Block.createBlockWithRotation("brichDrawer", [
    {
        name: "Brich Drawer",
        texture: [["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0], ["drawers_birch_front", 0], ["drawers_birch_side", 0], ["drawers_birch_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);


IDRegistry.genBlockID("bigDrawer");
Block.createBlockWithRotation("bigDrawer", [
    {
        name: "Big oak Drawer",
        texture: [["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_front", 0], ["drawers_big_oak_side", 0], ["drawers_big_oak_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);


IDRegistry.genBlockID("acaciaDrawer");
Block.createBlockWithRotation("acaciaDrawer", [
    {
        name: "Acacia Drawer",
        texture: [["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0], ["drawers_acacia_front", 0], ["drawers_acacia_side", 0], ["drawers_acacia_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("spruceDrawer");
Block.createBlockWithRotation("spruceDrawer", [
    {
        name: "Spruce Drawer",
        texture: [["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0], ["drawers_spruce_front", 0], ["drawers_spruce_side", 0], ["drawers_spruce_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);

IDRegistry.genBlockID("jungleDrawer");
Block.createBlockWithRotation("jungleDrawer", [
    {
        name: "Jungle Drawer",
        texture: [["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0], ["drawers_jungle_front", 0], ["drawers_jungle_side", 0], ["drawers_jungle_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_WOOD);

Drawer.registerStorage(BlockID.oakDrawer);
Drawer.registerStorage(BlockID.brichDrawer);
Drawer.registerStorage(BlockID.bigDrawer);
Drawer.registerStorage(BlockID.acaciaDrawer);
Drawer.registerStorage(BlockID.spruceDrawer);
Drawer.registerStorage(BlockID.jungleDrawer);




// file: recipes.js

Drawer.registerRecipes(BlockID.oakDrawer, 17, 0);
Drawer.registerRecipes(BlockID.brichDrawer, 17, 2);
Drawer.registerRecipes(BlockID.bigDrawer, 162, 1);
Drawer.registerRecipes(BlockID.acaciaDrawer, 162, 0);
Drawer.registerRecipes(BlockID.spruceDrawer, 17, 1);
Drawer.registerRecipes(BlockID.jungleDrawer, 17, 3);

//paladiumChest\\
IDRegistry.genBlockID("paladiumChest");
Block.createBlockWithRotation("paladiumChest",[{name:"paladium Chest",texture:[["paladiumChest",2],["paladiumChest",2],["paladiumChest",1],["paladiumChest",0],["paladiumChest",1],["paladiumChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.paladiumChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.paladiumChest, "metal", 1, true);
//Block.setDestroyLevel("paladiumChest", 1);
var paladiumChestUI=new UI.StandartWindow({standart:{header:{text:{text:"Paladium Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50},slot28:{type:"slot",x:425,y:190,size:50},slot29:{type:"slot",x:475,y:190,size:50},slot30:{type:"slot",x:525,y:190,size:50},slot31:{type:"slot",x:575,y:190,size:50},slot32:{type:"slot",x:625,y:190,size:50},slot33:{type:"slot",x:675,y:190,size:50},slot34:{type:"slot",x:725,y:190,size:50},slot35:{type:"slot",x:775,y:190,size:50},slot36:{type:"slot",x:825,y:190,size:50},slot37:{type:"slot",x:425,y:240,size:50},slot38:{type:"slot",x:475,y:240,size:50},slot39:{type:"slot",x:525,y:240,size:50},slot40:{type:"slot",x:575,y:240,size:50},slot41:{type:"slot",x:625,y:240,size:50},slot42:{type:"slot",x:675,y:240,size:50},slot43:{type:"slot",x:725,y:240,size:50},slot44:{type:"slot",x:775,y:240,size:50},slot45:{type:"slot",x:825,y:240,size:50},slot46:{type:"slot",x:425,y:290,size:50},slot47:{type:"slot",x:475,y:290,size:50},slot48:{type:"slot",x:525,y:290,size:50},slot49:{type:"slot",x:575,y:290,size:50},slot50:{type:"slot",x:625,y:290,size:50},slot51:{type:"slot",x:675,y:290,size:50},slot52:{type:"slot",x:725,y:290,size:50},slot53:{type:"slot",x:775,y:290,size:50},slot54:{type:"slot",x:825,y:290,size:50},slot55:{type:"slot",x:425,y:340,size:50},slot56:{type:"slot",x:475,y:340,size:50},slot57:{type:"slot",x:525,y:340,size:50},slot58:{type:"slot",x:575,y:340,size:50},slot59:{type:"slot",x:625,y:340,size:50},slot60:{type:"slot",x:675,y:340,size:50},slot61:{type:"slot",x:725,y:340,size:50},slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},slot73:{type:"slot",x:425,y:390,size:50},slot74:{type:"slot",x:475,y:390,size:50},slot75:{type:"slot",x:525,y:390,size:50},slot76:{type:"slot",x:575,y:390,size:50},slot77:{type:"slot",x:625,y:390,size:50},slot78:{type:"slot",x:675,y:390,size:50},slot79:{type:"slot",x:725,y:390,size:50},slot80:{type:"slot",x:775,y:390,size:50},slot81:{type:"slot",x:825,y:390,size:50},slot82:{type:"slot",x:425,y:390,size:50},slot83:{type:"slot",x:475,y:390,size:50},slot84:{type:"slot",x:525,y:390,size:50},slot85:{type:"slot",x:575,y:390,size:50},slot86:{type:"slot",x:625,y:390,size:50},slot87:{type:"slot",x:675,y:390,size:50},slot88:{type:"slot",x:725,y:390,size:50},slot89:{type:"slot",x:775,y:390,size:50},slot90:{type:"slot",x:825,y:390,size:50},slot100:{type:"slot",x:425,y:440,size:50},slot101:{type:"slot",x:475,y:440,size:50},slot102:{type:"slot",x:525,y:440,size:50},slot103:{type:"slot",x:575,y:440,size:50},slot104:{type:"slot",x:625,y:440,size:50},slot105:{type:"slot",x:675,y:440,size:50},slot106:{type:"slot",x:725,y:440,size:50},slot107:{type:"slot",x:775,y:440,size:50},slot108:{type:"slot",x:825,y:440,size:50}}});TileEntity.registerPrototype(BlockID.paladiumChest,{getGuiScreen:function(){return paladiumChestUI}});

IDRegistry.genBlockID("paladiumChest2");
Block.createBlockWithRotation("paladiumChest2",[{name:"paladium chest claimed",texture:[["paladiumChest",2],["paladiumChest",2],["paladiumChest",1],["paladiumChest",0],["paladiumChest",1],["paladiumChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.paladiumChest2,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.paladiumChest2, "metal", 1, true);
Block.setDestroyTime(BlockID.paladiumChest2, -1);
Block.setDestroyLevel("paladiumChest2", -1);

TileEntity.registerPrototype(BlockID.paladiumChest2,{click: function(id){
if(id == ItemID.chestexplorer){
return false;
} else{
alert("You must have a chest explorer to open a claimed chest");
return true;
}
},
getGuiScreen:function(){return paladiumChestUI}});

//endiumChest\\
IDRegistry.genBlockID("endiumChest");
Block.createBlockWithRotation("endiumChest",[{name:"endium Chest",texture:[["endiumChest",2],["endiumChest",2],["endiumChest",1],["endiumChest",0],["endiumChest",1],["endiumChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.endiumChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.endiumChest, "stone", 1, true);
//Block.setDestroyLevel("endiumChest", 1);
var endiumChestUI=new UI.StandartWindow({standart:{header:{text:{text:"endium Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",
x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50}}});TileEntity.registerPrototype(BlockID.endiumChest,{getGuiScreen:function(){return endiumChestUI}});

IDRegistry.genItemID("claimer");
Item.createItem("claimer", "Chest Claimer", {name: "claimer"}, {stack: 32});

Callback.addCallback("ItemUse", function (c, item, block) {
if (item.id==ItemID.claimer && block.id==BlockID.paladiumChest)
{
      World.setBlock(c.x, c.y, c.z, BlockID.paladiumChest2) &
      Player.decreaseCarriedItem();
        }
  });

Recipes.addShaped({id: ItemID.claimer}, [" o ", "opo", " o "], ["p", ItemID.paladium_ingot, 0, "o", 49, 0]);

//ironChest\\
IDRegistry.genBlockID("ironChest");
Block.createBlockWithRotation("ironChest",[{name:"iron chest",texture:[["ironChest",2],["ironChest",2],["ironChest",1],["ironChest",0],["ironChest",1],["ironChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.ironChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.ironChest, "metal", 1, true);
//Block.setDestroyLevel("ironChest", 1);
var ironChestUI=new UI.StandartWindow({standart:{header:{text:{text:"iron chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50},slot28:{type:"slot",x:425,y:190,size:50},slot29:{type:"slot",x:475,y:190,size:50},slot30:{type:"slot",x:525,y:190,size:50},slot31:{type:"slot",x:575,y:190,size:50},slot32:{type:"slot",x:625,y:190,size:50},slot33:{type:"slot",x:675,y:190,size:50},slot34:{type:"slot",x:725,y:190,size:50},slot35:{type:"slot",x:775,y:190,size:50},slot36:{type:"slot",x:825,y:190,size:50},slot37:{type:"slot",x:425,y:240,size:50},slot38:{type:"slot",x:475,y:240,size:50},slot39:{type:"slot",x:525,y:240,size:50},slot40:{type:"slot",x:575,y:240,size:50},slot41:{type:"slot",x:625,y:240,size:50},slot42:{type:"slot",x:675,y:240,size:50},slot43:{type:"slot",x:725,y:240,size:50},slot44:{type:"slot",x:775,y:240,size:50},slot45:{type:"slot",x:825,y:240,size:50},slot46:{type:"slot",x:425,y:290,size:50},slot47:{type:"slot",x:475,y:290,size:50},slot48:{type:"slot",x:525,y:290,size:50},slot49:{type:"slot",x:575,y:290,size:50},slot50:{type:"slot",x:625,y:290,size:50},slot51:{type:"slot",x:675,y:290,size:50},slot52:{type:"slot",x:725,y:290,size:50},slot53:{type:"slot",x:775,y:290,size:50},slot54:{type:"slot",x:825,y:290,size:50}}});TileEntity.registerPrototype(BlockID.ironChest,{getGuiScreen:function(){return ironChestUI}});

//goldChest\\
IDRegistry.genBlockID("goldChest");
Block.createBlockWithRotation("goldChest",[{name:"gold chest",texture:[["goldChest",2],["goldChest",2],["goldChest",1],["goldChest",0],["goldChest",1],["goldChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.goldChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.goldChest, "metal", 1, true);
//Block.setDestroyLevel("goldChest", 1);
var goldChestUI=new UI.StandartWindow({standart:{header:{text:{text:"gold chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50},slot28:{type:"slot",x:425,y:190,size:50},slot29:{type:"slot",x:475,y:190,size:50},slot30:{type:"slot",x:525,y:190,size:50},slot31:{type:"slot",x:575,y:190,size:50},slot32:{type:"slot",x:625,y:190,size:50},slot33:{type:"slot",x:675,y:190,size:50},slot34:{type:"slot",x:725,y:190,size:50},slot35:{type:"slot",x:775,y:190,size:50},slot36:{type:"slot",x:825,y:190,size:50},slot37:{type:"slot",x:425,y:240,size:50},slot38:{type:"slot",x:475,y:240,size:50},slot39:{type:"slot",x:525,y:240,size:50},slot40:{type:"slot",x:575,y:240,size:50},slot41:{type:"slot",x:625,y:240,size:50},slot42:{type:"slot",x:675,y:240,size:50},slot43:{type:"slot",x:725,y:240,size:50},slot44:{type:"slot",x:775,y:240,size:50},slot45:{type:"slot",x:825,y:240,size:50},slot46:{type:"slot",x:425,y:290,size:50},slot47:{type:"slot",x:475,y:290,size:50},slot48:{type:"slot",x:525,y:290,size:50},slot49:{type:"slot",x:575,y:290,size:50},slot50:{type:"slot",x:625,y:290,size:50},slot51:{type:"slot",x:675,y:290,size:50},slot52:{type:"slot",x:725,y:290,size:50},slot53:{type:"slot",x:775,y:290,size:50},slot54:{type:"slot",x:825,y:290,size:50},slot55:{type:"slot",x:425,y:340,size:50},slot56:{type:"slot",x:475,y:340,size:50},slot57:{type:"slot",x:525,y:340,size:50},slot58:{type:"slot",x:575,y:340,size:50},slot59:{type:"slot",x:625,y:340,size:50},slot60:{type:"slot",x:675,y:340,size:50},slot61:{type:"slot",x:725,y:340,size:50},slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},slot73:{type:"slot",x:425,y:390,size:50},slot74:{type:"slot",x:475,y:390,size:50},slot75:{type:"slot",x:525,y:390,size:50},slot76:{type:"slot",x:575,y:390,size:50},slot77:{type:"slot",x:625,y:390,size:50},slot78:{type:"slot",x:675,y:390,size:50},slot79:{type:"slot",x:725,y:390,size:50},slot80:{type:"slot",x:775,y:390,size:50},slot81:{type:"slot",x:825,y:390,size:50}}});TileEntity.registerPrototype(BlockID.goldChest,{getGuiScreen:function(){return goldChestUI}});

//diamondChest\\
IDRegistry.genBlockID("diamondChest");
Block.createBlockWithRotation("diamondChest",[{name:"diamond chest",texture:[["diamondChest",2],["diamondChest",2],["diamondChest",1],["diamondChest",0],["diamondChest",1],["diamondChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.diamondChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.diamondChest, "metal", 1, true);
//Block.setDestroyLevel("diamondChest", 1);
var diamondChestUI=new UI.StandartWindow({standart:{header:{text:{text:"diamond chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50},slot28:{type:"slot",x:425,y:190,size:50},slot29:{type:"slot",x:475,y:190,size:50},slot30:{type:"slot",x:525,y:190,size:50},slot31:{type:"slot",x:575,y:190,size:50},slot32:{type:"slot",x:625,y:190,size:50},slot33:{type:"slot",x:675,y:190,size:50},slot34:{type:"slot",x:725,y:190,size:50},slot35:{type:"slot",x:775,y:190,size:50},slot36:{type:"slot",x:825,y:190,size:50},slot37:{type:"slot",x:425,y:240,size:50},slot38:{type:"slot",x:475,y:240,size:50},slot39:{type:"slot",x:525,y:240,size:50},slot40:{type:"slot",x:575,y:240,size:50},slot41:{type:"slot",x:625,y:240,size:50},slot42:{type:"slot",x:675,y:240,size:50},slot43:{type:"slot",x:725,y:240,size:50},slot44:{type:"slot",x:775,y:240,size:50},slot45:{type:"slot",x:825,y:240,size:50},slot46:{type:"slot",x:425,y:290,size:50},slot47:{type:"slot",x:475,y:290,size:50},slot48:{type:"slot",x:525,y:290,size:50},slot49:{type:"slot",x:575,y:290,size:50},slot50:{type:"slot",x:625,y:290,size:50},slot51:{type:"slot",x:675,y:290,size:50},slot52:{type:"slot",x:725,y:290,size:50},slot53:{type:"slot",x:775,y:290,size:50},slot54:{type:"slot",x:825,y:290,size:50},slot55:{type:"slot",x:425,y:340,size:50},slot56:{type:"slot",x:475,y:340,size:50},slot57:{type:"slot",x:525,y:340,size:50},slot58:{type:"slot",x:575,y:340,size:50},slot59:{type:"slot",x:625,y:340,size:50},slot60:{type:"slot",x:675,y:340,size:50},slot61:{type:"slot",x:725,y:340,size:50},slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},slot73:{type:"slot",x:425,y:390,size:50},slot74:{type:"slot",x:475,y:390,size:50},slot75:{type:"slot",x:525,y:390,size:50},slot76:{type:"slot",x:575,y:390,size:50},slot77:{type:"slot",x:625,y:390,size:50},slot78:{type:"slot",x:675,y:390,size:50},slot79:{type:"slot",x:725,y:390,size:50},slot80:{type:"slot",x:775,y:390,size:50},slot81:{type:"slot",x:825,y:390,size:50},slot82:{type:"slot",x:425,y:390,size:50},slot83:{type:"slot",x:475,y:390,size:50},slot84:{type:"slot",x:525,y:390,size:50},slot85:{type:"slot",x:575,y:390,size:50},slot86:{type:"slot",x:625,y:390,size:50},slot87:{type:"slot",x:675,y:390,size:50},slot88:{type:"slot",x:725,y:390,size:50},slot89:{type:"slot",x:775,y:390,size:50},slot90:{type:"slot",x:825,y:390,size:50},slot100:{type:"slot",x:425,y:440,size:50},slot101:{type:"slot",x:475,y:440,size:50},slot102:{type:"slot",x:525,y:440,size:50},slot103:{type:"slot",x:575,y:440,size:50},slot104:{type:"slot",x:625,y:440,size:50},slot105:{type:"slot",x:675,y:440,size:50},slot106:{type:"slot",x:725,y:440,size:50},slot107:{type:"slot",x:775,y:440,size:50},slot108:{type:"slot",x:825,y:440,size:50}}});TileEntity.registerPrototype(BlockID.diamondChest,{getGuiScreen:function(){return diamondChestUI}});

//obsidianChest\\
IDRegistry.genBlockID("obsidianChest");
Block.createBlockWithRotation("obsidianChest",[{name:"obsidian chest",texture:[["obsidianChest",2],["obsidianChest",2],["obsidianChest",1],["obsidianChest",0],["obsidianChest",1],["obsidianChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.obsidianChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.obsidianChest, "metal", 1, true);
//Block.setDestroyLevel("obsidianChest", 1);
var obsidianChestUI=new UI.StandartWindow({standart:{header:{text:{text:"obsidian chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50},slot28:{type:"slot",x:425,y:190,size:50},slot29:{type:"slot",x:475,y:190,size:50},slot30:{type:"slot",x:525,y:190,size:50},slot31:{type:"slot",x:575,y:190,size:50},slot32:{type:"slot",x:625,y:190,size:50},slot33:{type:"slot",x:675,y:190,size:50},slot34:{type:"slot",x:725,y:190,size:50},slot35:{type:"slot",x:775,y:190,size:50},slot36:{type:"slot",x:825,y:190,size:50},slot37:{type:"slot",x:425,y:240,size:50},slot38:{type:"slot",x:475,y:240,size:50},slot39:{type:"slot",x:525,y:240,size:50},slot40:{type:"slot",x:575,y:240,size:50},slot41:{type:"slot",x:625,y:240,size:50},slot42:{type:"slot",x:675,y:240,size:50},slot43:{type:"slot",x:725,y:240,size:50},slot44:{type:"slot",x:775,y:240,size:50},slot45:{type:"slot",x:825,y:240,size:50},slot46:{type:"slot",x:425,y:290,size:50},slot47:{type:"slot",x:475,y:290,size:50},slot48:{type:"slot",x:525,y:290,size:50},slot49:{type:"slot",x:575,y:290,size:50},slot50:{type:"slot",x:625,y:290,size:50},slot51:{type:"slot",x:675,y:290,size:50},slot52:{type:"slot",x:725,y:290,size:50},slot53:{type:"slot",x:775,y:290,size:50},slot54:{type:"slot",x:825,y:290,size:50},slot55:{type:"slot",x:425,y:340,size:50},slot56:{type:"slot",x:475,y:340,size:50},slot57:{type:"slot",x:525,y:340,size:50},slot58:{type:"slot",x:575,y:340,size:50},slot59:{type:"slot",x:625,y:340,size:50},slot60:{type:"slot",x:675,y:340,size:50},slot61:{type:"slot",x:725,y:340,size:50},slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},slot73:{type:"slot",x:425,y:390,size:50},slot74:{type:"slot",x:475,y:390,size:50},slot75:{type:"slot",x:525,y:390,size:50},slot76:{type:"slot",x:575,y:390,size:50},slot77:{type:"slot",x:625,y:390,size:50},slot78:{type:"slot",x:675,y:390,size:50},slot79:{type:"slot",x:725,y:390,size:50},slot80:{type:"slot",x:775,y:390,size:50},slot81:{type:"slot",x:825,y:390,size:50},slot82:{type:"slot",x:425,y:390,size:50},slot83:{type:"slot",x:475,y:390,size:50},slot84:{type:"slot",x:525,y:390,size:50},slot85:{type:"slot",x:575,y:390,size:50},slot86:{type:"slot",x:625,y:390,size:50},slot87:{type:"slot",x:675,y:390,size:50},slot88:{type:"slot",x:725,y:390,size:50},slot89:{type:"slot",x:775,y:390,size:50},slot90:{type:"slot",x:825,y:390,size:50},slot100:{type:"slot",x:425,y:440,size:50},slot101:{type:"slot",x:475,y:440,size:50},slot102:{type:"slot",x:525,y:440,size:50},slot103:{type:"slot",x:575,y:440,size:50},slot104:{type:"slot",x:625,y:440,size:50},slot105:{type:"slot",x:675,y:440,size:50},slot106:{type:"slot",x:725,y:440,size:50},slot107:{type:"slot",x:775,y:440,size:50},slot108:{type:"slot",x:825,y:440,size:50}}});TileEntity.registerPrototype(BlockID.obsidianChest,{getGuiScreen:function(){return obsidianChestUI}});

//crystalChest\\
IDRegistry.genBlockID("crystalChest");
Block.createBlockWithRotation("crystalChest",[{name:"crystal chest",texture:[["crystalChest",2],["crystalChest",2],["crystalChest",1],["crystalChest",0],["crystalChest",1],["crystalChest",1]],inCreative:true}], "translucent");
Block.setBlockShape(BlockID.crystalChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.crystalChest, "metal", 1, true);
//Block.setDestroyLevel("crystalChest", 1);
var crystalChestUI=new UI.StandartWindow({standart:{header:{text:{text:"crystal chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50},slot28:{type:"slot",x:425,y:190,size:50},slot29:{type:"slot",x:475,y:190,size:50},slot30:{type:"slot",x:525,y:190,size:50},slot31:{type:"slot",x:575,y:190,size:50},slot32:{type:"slot",x:625,y:190,size:50},slot33:{type:"slot",x:675,y:190,size:50},slot34:{type:"slot",x:725,y:190,size:50},slot35:{type:"slot",x:775,y:190,size:50},slot36:{type:"slot",x:825,y:190,size:50},slot37:{type:"slot",x:425,y:240,size:50},slot38:{type:"slot",x:475,y:240,size:50},slot39:{type:"slot",x:525,y:240,size:50},slot40:{type:"slot",x:575,y:240,size:50},slot41:{type:"slot",x:625,y:240,size:50},slot42:{type:"slot",x:675,y:240,size:50},slot43:{type:"slot",x:725,y:240,size:50},slot44:{type:"slot",x:775,y:240,size:50},slot45:{type:"slot",x:825,y:240,size:50},slot46:{type:"slot",x:425,y:290,size:50},slot47:{type:"slot",x:475,y:290,size:50},slot48:{type:"slot",x:525,y:290,size:50},slot49:{type:"slot",x:575,y:290,size:50},slot50:{type:"slot",x:625,y:290,size:50},slot51:{type:"slot",x:675,y:290,size:50},slot52:{type:"slot",x:725,y:290,size:50},slot53:{type:"slot",x:775,y:290,size:50},slot54:{type:"slot",x:825,y:290,size:50},slot55:{type:"slot",x:425,y:340,size:50},slot56:{type:"slot",x:475,y:340,size:50},slot57:{type:"slot",x:525,y:340,size:50},slot58:{type:"slot",x:575,y:340,size:50},slot59:{type:"slot",x:625,y:340,size:50},slot60:{type:"slot",x:675,y:340,size:50},slot61:{type:"slot",x:725,y:340,size:50},slot62:{type:"slot",x:775,y:340,size:50},
slot63:{type:"slot",x:825,y:340,size:50},slot73:{type:"slot",x:425,y:390,size:50},slot74:{type:"slot",x:475,y:390,size:50},slot75:{type:"slot",x:525,y:390,size:50},slot76:{type:"slot",x:575,y:390,size:50},slot77:{type:"slot",x:625,y:390,size:50},slot78:{type:"slot",x:675,y:390,size:50},slot79:{type:"slot",x:725,y:390,size:50},slot80:{type:"slot",x:775,y:390,size:50},slot81:{type:"slot",x:825,y:390,size:50},slot82:{type:"slot",x:425,y:390,size:50},slot83:{type:"slot",x:475,y:390,size:50},slot84:{type:"slot",x:525,y:390,size:50},slot85:{type:"slot",x:575,y:390,size:50},slot86:{type:"slot",x:625,y:390,size:50},slot87:{type:"slot",x:675,y:390,size:50},slot88:{type:"slot",x:725,y:390,size:50},slot89:{type:"slot",x:775,y:390,size:50},slot90:{type:"slot",x:825,y:390,size:50},slot100:{type:"slot",x:425,y:440,size:50},slot101:{type:"slot",x:475,y:440,size:50},slot102:{type:"slot",x:525,y:440,size:50},slot103:{type:"slot",x:575,y:440,size:50},slot104:{type:"slot",x:625,y:440,size:50},slot105:{type:"slot",x:675,y:440,size:50},slot106:{type:"slot",x:725,y:440,size:50},slot107:{type:"slot",x:775,y:440,size:50},slot108:{type:"slot",x:825,y:440,size:50}}});TileEntity.registerPrototype(BlockID.crystalChest,{getGuiScreen:function(){return crystalChestUI}});

//dirtChest\\
IDRegistry.genBlockID("dirtChest");
Block.createBlockWithRotation("dirtChest",[{name:"dirt chest",texture:[["dirtChest",2],["dirtChest",2],["dirtChest",1],["dirtChest",0],["dirtChest",1],["dirtChest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.dirtChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ToolAPI.registerBlockMaterial(BlockID.dirtChest, "metal", 1, true);
//Block.setDestroyLevel("dirtChest", 1);
var dirtChestUI=new UI.StandartWindow({standart:{header:{text:{text:"dirt chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:625,y:190,size:55}}});TileEntity.registerPrototype(BlockID.dirtChest,{getGuiScreen:function(){return dirtChestUI}});