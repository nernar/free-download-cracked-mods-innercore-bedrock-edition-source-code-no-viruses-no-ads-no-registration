var coffeeSys = {
	
};

coffeeSys.tips = function(){
	
};
IDRegistry.genBlockID("coffeeworkshop$espresso");
Block.createBlock("coffeeworkshop$espresso", [
{name: "浓缩咖啡", texture: [["texture1", 0],["wood", 0],["anvil_base", 0]], inCreative: false}]);

IDRegistry.genItemID("coffeeworkshop$espresso");
Item.createItem("coffeeworkshop$espresso", "浓缩咖啡", {name:"ns"}, {inTech: true,stack: 64});
//ItemID.coffeeworkshop$espresso = 8200;

//bundBlockToItem(ItemID.coffeeworkshop$espresso,BlockID.coffeeworkshop$espresso,false);


function espressoModel(id){
var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();    
 model.addBox (6/16,1/16,7/16,7/16,4/16,9/16,[["texture", 0]]);
model.addBox (7/16, 1/16, 9/16, 9/16,4/16, 10/16,[["texture", 0]]);
model.addBox (7/16, 1/16, 6/16, 9/16,4/16, 7/16,[["texture", 0]]);
model.addBox (9/16, 1/16, 7/16, 10/16,4/16, 9/16,[["texture", 0]]);
model.addBox (7/16, 0/16, 7/16, 9/16,1/16,9/16,[["texture", 0]]);
model.addBox (7/16, 2/16, 7/16, 9/16,3/16, 9/16,[["texture5", 0]]);
render.addEntry(model);

BlockRenderer.setStaticICRender(id, -1, render);
 }
 espressoModel(BlockID.coffeeworkshop$espresso);
 
 IDRegistry.genBlockID("coffeeworkshop$plate");
Block.createBlock("coffeeworkshop$plate", [
{name: "盘子", texture: [["杯子", 0],["wood", 0],["anvil_base", 0]], inCreative: false}]);

IDRegistry.genItemID("coffeeworkshop$plate");
Item.createItem("coffeeworkshop$plate", "盘子", {name:"pz"}, {inTech: true,stack: 64});

bundBlockToItem(ItemID.coffeeworkshop$plate,BlockID.coffeeworkshop$plate,false);

function plateModel(id){
var render = new ICRender.Model();
 var Model =   BlockRenderer.createModel();  
 Model.addBox (3/16,1/16,14/16,13/16,2/16,15/16,[["texture", 0]]);
Model.addBox (3/16, 1/16, 1/16, 13/16,2/16, 2/16,[["texture", 0]]);
Model.addBox (3/16, 0/16, 2/16, 13/16,1/16, 3/16,[["texture", 0]]);
Model.addBox (3/16, 0/16, 13/16, 13/16,1/16, 14/16,[["texture", 0]]);
Model.addBox (13/16, 1/16, 13/16, 14/16,2/16,14/16,[["texture", 0]]);
Model.addBox (2/16, 1/16, 13/16, 3/16,2/16, 14/16,[["texture", 0]]);
Model.addBox (2/16, 1/16, 2/16, 3/16,2/16, 3/16,[["texture", 0]]);
Model.addBox (13/16, 1/16, 2/16, 14/16,2/16, 3/16,[["texture", 0]]);
Model.addBox (14/16, 1/16, 3/16, 15/16,2/16, 13/16,[["texture", 0]]);
Model.addBox (1/16, 1/16, 3/16, 2/16,2/16, 13/16,[["texture", 0]]);
Model.addBox (2/16, 0/16, 3/16, 14/16,1/16, 13/16,[["texture", 0]]);

render.addEntry(Model);

BlockRenderer.setStaticICRender(id, -1, render);
 }
 plateModel(BlockID.coffeeworkshop$plate);
 Block.setShape(BlockID.coffeeworkshop$plate, 0, 0, 0, 1, 1/16, 1);
 IDRegistry.genItemID("coffeeworkshop$cup_glass");
Item.createItem("coffeeworkshop$cup_glass", "玻璃杯", {name:"blb"}, {inTech: true,stack: 64});

IDRegistry.genItemID("coffeeworkshop$cup");
Item.createItem("coffeeworkshop$cup", "杯子", {name:"b"}, {inTech: true,stack: 64});

//bundBlockToItem(ItemID.coffeeworkshop$cup,BlockID.coffeeworkshop$cup,true);

Recipes.addShaped({id: ItemID.coffeeworkshop$cup_glass, count: 1, data: 0}, [
"x x",
"x x",
" x "
], [ 'x', 20, 0]);
Recipes.addShaped({id: ItemID.coffeeworkshop$cup, count: 1, data: 0}, [
"x x",
"x x",
" x "
], [ 'x',4, 0]);
setfood("kbqn","卡布奇诺",64,3);

//bundBlockToItem(ItemID.coffeeworkshop$kbqn,BlockID.coffeeworkshop$kbqn,false);

Item.setUseAnimation(ItemID.coffeeworkshop$kbqn, 2) 
Recipes.addShaped({id: ItemID.coffeeworkshop$kbqn, count: 1, data: 0}, [
"ab",
"cd"
], [ 'a', 325, 1, 'b',ItemID.coffeeworkshop$espresso, 0,'c',ItemID.coffeeworkshop$cream_milk,0,'d',ItemID.coffeeworkshop$cup,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
Player.addItemToInventory(325, 1);
});
setfood("nt","拿铁咖啡",64,3);
//bundBlockToItem(ItemID.coffeeworkshop$nt,BlockID.coffeeworkshop$nt,false);
Item.setUseAnimation(ItemID.coffeeworkshop$nt, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$nt, count: 1, data: 0}, [
"ab",
"d"
], [ 'a', 325, 1, 'b',ItemID.coffeeworkshop$espresso, 0,'d',ItemID.coffeeworkshop$cup,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
Player.addItemToInventory(325, 1);
});
setfood("mk","摩卡奇诺",64,3);
//bundBlockToItem(ItemID.coffeeworkshop$mk,BlockID.coffeeworkshop$mk,false);
Item.setUseAnimation(ItemID.coffeeworkshop$mk, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$mk, count: 1, data: 0}, [
"ab",
"cde"
], [ 'a', 325, 1, 'b',ItemID.coffeeworkshop$espresso, 0,'c',ItemID.coffeeworkshop$Cocoapowder,0,'d',ItemID.coffeeworkshop$cup,0,'e',ItemID.coffeeworkshop$Chocolatechip,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
Player.addItemToInventory(325, 1);
});
setfood("jtmqd","焦糖玛奇朵",64,3);
//bundBlockToItem(ItemID.coffeeworkshop$jtmqd,BlockID.coffeeworkshop$jtmqd,false);
Item.setUseAnimation(ItemID.coffeeworkshop$jtmqd, 2) 
Recipes.addShaped({id: ItemID.coffeeworkshop$jtmqd, count: 1, data: 0}, [
"ab",
"cd"
], [ 'a', 325, 1, 'b',ItemID.coffeeworkshop$espresso, 0,'c',353,0,'d',ItemID.coffeeworkshop$cup,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
Player.addItemToInventory(325, 1);
});
setfood("ms","美式咖啡",64,3);
Item.setUseAnimation(ItemID.coffeeworkshop$ms, 2) 
Recipes.addShaped({id: ItemID.coffeeworkshop$ms, count: 1, data: 0}, [
"ab",
"d"
], [ 'a', 325, 8, 'b',ItemID.coffeeworkshop$espresso, 0,'d',ItemID.coffeeworkshop$cup,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
Player.addItemToInventory(325, 1);
});
setItem("mkh","摩卡壶");
setItem("mkhs","摩卡壶上座");
setItem("mkhx","摩卡壶下座");
setItem("mkhf","摩卡壶-萃取完成");
Recipes.addShaped({id: ItemID.coffeeworkshop$mkh, count: 1, data: 0}, [
"ea",
"bc"
], [ 'a', ItemID.coffeeworkshop$mkhs, 0, 'b',ItemID.coffeeworkshop$mkhx, 0,'c',325,8,'e',ItemID.coffeeworkshop$coffeepowder,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
Player.addItemToInventory(325, 1);
});


Recipes.addShaped({id: ItemID.coffeeworkshop$mkhx, count: 1, data: 0}, [
"aaa",
"bab",
" b "
], [ 'a', 1, 0, 'b',265, 0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
//Player.addItemToInventory(325, 1);
});


Recipes.addShaped({id: ItemID.coffeeworkshop$mkhs, count: 1, data: 0}, [
"aaa",
"aaa",
"b"
], [ 'a', 265, 0, 'b',351, 0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mixing_bowl, 1);
//Player.addItemToInventory(325, 1);
});

addFurnace(ItemID.coffeeworkshop$mkh,ItemID.coffeeworkshop$mkhf,0);


setfood("hkf","黑咖啡",64,3);
Item.setUseAnimation(ItemID.coffeeworkshop$hkf, 2);
Callback.addCallback("FoodEaten", function(heal, satRatio){
	
if(
isCoffee(Player.getCarriedItem().id)){
	//coffeeSys.tips();
	Player.addItemToInventory(ItemID.coffeeworkshop$cup, 1);
	CFMState.addState("relax",5,1000,0);
	
}
});

Recipes.addShaped({id: ItemID.coffeeworkshop$hkf, count: 1, data: 0}, [
"c",
"d"
], [ 'c',ItemID.coffeeworkshop$mkhf,0,'d',ItemID.coffeeworkshop$cup,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
Player.addItemToInventory(ItemID.coffeeworkshop$mkhx, 1);
});
//Item.registerUseFunction(ItemID.coffeeworkshop$hkf, function(){Player.setCarriedItem(ItemID.coffeeworkshop$cup,count + 1)});

setItem("kfh","土耳其咖啡壶-空");
setItem("kfhh","土耳其咖啡壶");
setItem("kfhf","土耳其咖啡壶-萃取完成");
addFurnace(ItemID.coffeeworkshop$kfhh,ItemID.coffeeworkshop$kfhf,0);
Recipes.addShaped({id: ItemID.coffeeworkshop$kfh, count: 1, data: 0}, [
"  a",
"bcb",
"bbb"
], ['a',1,0,'b',265,0,'c',351,11],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
//Player.addItemToInventory(ItemID.coffeeworkshop$mkhx, 1);
});
Recipes.addShaped({id: ItemID.coffeeworkshop$kfhh, count: 1, data: 0}, [
"ab",
"cc"
], ['a',ItemID.coffeeworkshop$kfh,0,'b',325,8,'c',ItemID.coffeeworkshop$coffeepowder,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
Player.addItemToInventory(325, 1);
});

Recipes.addShaped({id: ItemID.coffeeworkshop$plate, count: 1, data: 0}, [
"a a",
" ab"
], ['a',1,0,'b',351,18],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
//Player.addItemToInventory(325, 1);
});

setfood("rekeke","热可可",64,3);
Item.setUseAnimation(ItemID.coffeeworkshop$rekeke, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$rekeke, count: 1, data: 0}, [
"ab",
"c"
], ['a',ItemID.coffeeworkshop$cup,0,'b',325,1,'c',ItemID.coffeeworkshop$Cocoapowder,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
Player.addItemToInventory(325, 1);
});

setfood("xnkeke","香浓可可",64,3);
Item.setUseAnimation(ItemID.coffeeworkshop$xnkeke, 2);
Recipes.addShaped({id: ItemID.coffeeworkshop$xnkeke, count: 1, data: 0}, [
"a",
"c"
], ['a',ItemID.coffeeworkshop$rekeke,0,'c',ItemID.coffeeworkshop$Chocolatechip,0],function(api, field, result){for(var i in field){
		api.decreaseFieldSlot(i);
	}
//Player.addItemToInventory(ItemID.coffeeworkshop$mkhs, 1);
//Player.addItemToInventory(325, 1);
});
setfood("mandarin","鸳鸯咖啡",64,3);
//bundBlockToItem(ItemID.coffeeworkshop$nt,BlockID.coffeeworkshop$nt,false);
Item.setUseAnimation(ItemID.coffeeworkshop$mandarin, 2);
setfood("smt","甜奶茶",64,3);
//bundBlockToItem(ItemID.coffeeworkshop$nt,BlockID.coffeeworkshop$nt,false);
Item.setUseAnimation(ItemID.coffeeworkshop$mandarin, 2);
var isCoffee = function(a){
if (a === ItemID.coffeeworkshop$kbqn){return true;}
else if (a === ItemID.coffeeworkshop$nt){return true;}
else if (a === ItemID.coffeeworkshop$mk){return true;}
else if (a === ItemID.coffeeworkshop$jtmqd){return true;}
else if (a === ItemID.coffeeworkshop$ms){return true;}
else if (a === ItemID.coffeeworkshop$hkf){return true;}
else if (a === ItemID.coffeeworkshop$rekeke){return true;}
else if (a === ItemID.coffeeworkshop$xnkeke){return true;}
else if (a === ItemID.coffeeworkshop$mandarin){return true;}
else if (a === ItemID.coffeeworkshop$smt){return true;}
};

TileEntity.registerPrototype(BlockID.coffeeworkshop$plate,
{
	set:function(id,id1)
	{
		if(Player.getCarriedItem().id==id){
		Game.prevent();
			World.setBlock(this.x,this.y,this.z,id1);
			Player.decreaseCarriedItem(1);
			return true;
		};
		
	},
	
	click:function(id, count, data,croods)
	{
		this.set(ItemID.coffeeworkshop$cup,BlockID.coffeeworkshop$cupPlate);
		this.set(ItemID.coffeeworkshop$kbqn,BlockID.coffeeworkshop$kbqnPlate);
		this.set(ItemID.coffeeworkshop$nt,BlockID.coffeeworkshop$ntPlate);
		this.set(ItemID.coffeeworkshop$mk,BlockID.coffeeworkshop$mkPlate);
		this.set(ItemID.coffeeworkshop$jtmqd,BlockID.coffeeworkshop$jtmqdPlate);
		this.set(ItemID.coffeeworkshop$ms,BlockID.coffeeworkshop$msPlate);
		this.set(ItemID.coffeeworkshop$hkf,BlockID.coffeeworkshop$hkfPlate);
		this.set(ItemID.coffeeworkshop$rekeke,BlockID.coffeeworkshop$rekekePlate);
		this.set(ItemID.coffeeworkshop$xnkeke,BlockID.coffeeworkshop$xnkekePlate);
		this.set(ItemID.coffeeworkshop$mandarin,BlockID.coffeeworkshop$mandarinPlate);
		this.set(ItemID.coffeeworkshop$smt,BlockID.coffeeworkshop$smtPlate);

	}
	
});
