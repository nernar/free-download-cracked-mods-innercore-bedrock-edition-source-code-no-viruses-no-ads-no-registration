alert("You Play With Mod MultiCraft");

IMPORT("ToolLib");
importLib("BackpackAPI", '*');
	
ToolAPI.addToolMaterial("multi", {
    durability: 3000,//Долговечность(Сколько блоков можно сломать)
    level: 10,//Уровень инструмента, влияет на блоки которые инструмент может ломать 
    efficiency: 20,//Эффективность, чем больше эффективность, тем быстрее ломается нужный блок
    damage: 20,//Урон наносимый инструментами данного материала
    enchantability: 14
});

IDRegistry.genItemID("multiingot");
Item.createItem("multiingot", "Мульти слиток", {name: "multiingot", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.multiingot, count: 1, data: 0}, [
		"abc",
		"def",
		"xyz"
	], [
	'a', 264, 0,
	'b', 265, 0,
	'c', 266, 0,
	'd', 348, 0,
	'e', 263, 0,
	'f', 331, 0,
	'x', 351, 4,
	'y', 388, 0,
	'z', 406, 0]);

IDRegistry.genItemID("mSword");
Item.createItem("mSword", "Мульти Меч", {name: "mSword", meta: 0}, {stack: 1});

IDRegistry.genItemID("mAxe");
Item.createItem("mAxe", "Мульти Топор", {name: "mAxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("mPickaxe");
Item.createItem("mPickaxe", "Мульти Кирка", {name: "mPickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("mShovel");
Item.createItem("mShovel", "Мульти Лопата", {name: "mShovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("mHoe");
Item.createItem("mHoe", "Мульти Мотыга", {name: "mHoe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID["mSword"], "multi", ToolType.sword);

ToolAPI.setTool(ItemID["mPickaxe"], "multi", ToolType.pickaxe);

ToolAPI.setTool(ItemID["mAxe"], "multi", ToolType.axe);

ToolAPI.setTool(ItemID["mShovel"], "multi", ToolType.shovel);

ToolAPI.setTool(ItemID["mHoe"], "multi", ToolType.hoe);

Recipes.addShaped({id: ItemID.mSword, count: 1, data: 0}, [
		" a ",
		" a ",
		" b "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mAxe, count: 1, data: 0}, [
		"aa ",
		"ab ",
		" b "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mPickaxe, count: 1, data: 0}, [
		"aaa",
		" b ",
		" b "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mShovel, count: 1, data: 0}, [
		" a ",
		" b ",
		" b "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mHoe, count: 1, data: 0}, [
		"aa ",
		" b ",
		" b "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
	
var BLOCK_TYPE_LOW_LIGHT = Block.createSpecialType({ // блок этого типа будет абсолютно прозрачен для света и сам будет слабо светиться
     lightlevel: 15,
     explosionres: 99999
});


IDRegistry.genBlockID("multiblock"); // регистрация
Block.createBlock("multiblock", [
     {name: "Мульти Блок",meta:0,  texture: [["multiblock", 0], ["multiblock", 0], ["multiblock", 0], ["multiblock", 0], ["multiblock", 0], ["multiblock", 0]], inCreative: true}
],BLOCK_TYPE_LOW_LIGHT) // создание простого блока на ID "testBlock" с текстурой досок на всех сторонах, будет добавлен в креатив

Recipes.addShaped({id: BlockID.multiblock, count: 1, data: 0}, [
	"aaa",
	"aaa",
	"aaa"
], ['a', ItemID.multiingot, 0]); 


IDRegistry.genItemID("mHelmet");//создаем новый ID для шлема
IDRegistry.genItemID("mChestplate");//создаем новый ID для нагрудника
IDRegistry.genItemID("mLeggings");//создаем новый ID для понож
IDRegistry.genItemID("mBoots");//создаем новый ID для ботинок

Item.createArmorItem("mHelmet", "Мульти Шлем", {name: "mHelmet"}, {type: "helmet", armor: 6, durability: 1500, texture: "armor/multi_0.png"});//применяем наш ID helmet, добавляем имя Helmet, задаем текстуру предмета и объект описания.
Item.createArmorItem("mChestplate", "Мульти Нагрудник", {name: "mChestplate"}, {type: "chestplate", armor: 12, durability: 2500, texture: "armor/multi_0.png"});//применяем наш ID chestplate, добавляем имя ChestPlate, задаем текстуру предмета и объект описания.
Item.createArmorItem("mLeggings", "Мульти Поножи", {name: "mLeggings"}, {type: "leggings", armor: 8, durability: 2000, texture: "armor/multi_1.png"});//применяем наш ID leggins, добавляем имя Leggins, задаем текстуру предмета и объект описания.
Item.createArmorItem("mBoots", " Мульти Ботинки", {name: "mBoots"}, {type: "boots", armor: 6, durability: 1500, texture: "armor/multi_0.png"});//применяем наш ID boots, добавляем имя Boots, задаем текстуру предмета и объект описания.



Recipes.addShaped({id: ItemID.mBoots, count: 1, data: 0}, [
		"   ",
		"a a",
		"a a"
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mHelmet, count: 1, data: 0}, [
		"aaa",
		"a a",
		"   "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mLeggings, count: 1, data: 0}, [
		"aaa",
		"a a",
		"a a"
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.mChestplate, count: 1, data: 0}, [
		"a a",
		"aaa",
		"aaa"
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
Recipes.addShaped({id: ItemID.multiingot, count: 9, data: 0}, [
		"abb",
		"bbb",
		"bbb"
	], ['a', BlockID.multiblock, 0]);
	

	
	
	var multi = false
	
	

		
Callback.addCallback("tick", function(){
	if(World.getThreadTime()%120 == 0){
		if(World.getBlock(Player.getPosition().x-0.5, Player.getPosition ().y-0.8, Player.getPosition ().z-0.6).id == BlockID.hexibiscus){
			Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 0, 20*5);
		}
	}
	var armor = [Player.getArmorSlot(0), Player.getArmorSlot(1), Player.getArmorSlot(2), Player.getArmorSlot(3)];
	
if(armor[0].id == ItemID.mHelmet&&armor[1].id == ItemID.mChestplate&&armor[2].id == ItemID.mLeggings&&armor[3].id == ItemID.mBoots){
			multi = true;
			Entity.addEffect(Player.get(), Native.PotionEffect.damageResistance, 2, 20*2);
			Entity.addEffect(Player.get(), Native.PotionEffect.absorption, 2, 20*2);
		}else if(multi) multi = false;
	});
	

  
  
  
  
  
  
Callback.addCallback("tick", function()
{
		if (World.getThreadTime() % 20 == 0){
var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
for(var xx = -2; xx <= 2; xx++)
{
for(var yy = -2; yy <= 2; yy++)
{
for(var zz = -2; zz <= 2; zz++)
{
if(World.getBlockID(pos.x+xx, pos.y+yy, pos.z+zz) == BlockID.multiblock)
{
    Entity.addEffect(Player.get(), 5, 1, 20*10)
    Entity.addEffect(Player.get(), 1, 1, 20*10)
    Entity.addEffect(Player.get(), 8, 1, 20*10)
    Entity.addEffect(Player.get(), 3, 1, 20*10)
   }
}
}

}
}
});



var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
    lightlevel: 7,
	explosionres: 2
});

IDRegistry.genBlockID("multiore");
Block.createBlock("multiore", [
	{name: "Мульти Руда", texture: [["multiore", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.multiore, "stone", 3, true);


Block.registerDropFunction("multiore", function(coords, blockID, blockData, level, enchant){
	if(level > 2){
		if(enchant.silk){
			return [[blockID, 1, 0]];
		}
		
		return [[BlockID.multiore, 1, 0]]
	}
	return [];
}, 3);


Recipes.addFurnace(BlockID.multiore, ItemID.multiingot, 0);

Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<0.2;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 7, 15);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.multiore, 1,4);
    }
}
);


IDRegistry.genItemID("multispear");
Item.createThrowableItem("multispear", "Мульти Копьё", {name: "multispear", meta: 0}, {});

Item.registerThrowableFunction("multispear", function(projectile, item, target)
{
if(target.entity == -1){} else {
var targetEntity = target.entity;
var coords = Entity.getPosition(targetEntity);
Entity.damageEntity(targetEntity, 7);
if(Math.random() < 1){
World.drop(coords.x, coords.y, coords.z, ItemID.multispear, 1);
}
}
});

Recipes.addShaped({id: ItemID.multispear, count: 5, data: 0}, [
		"  a",
		" b ",
		"b  "
	], ['a', ItemID.multiingot, 0,'b', 280,0]);
	
	
IDRegistry.genItemID("mBackpack");
Item.createItem("mBackpack",  "Мульти Рюкзак", {name: "mBackpack" , meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.mBackpack, {
	slots: 54,
	slotsCenter: true,
	inRow: 9
});





















IDRegistry.genItemID("mTrans");
Item.createItem("mTrans", "Мульти Трасформатор", {name: "mTrans", meta:0}, {stack:1});



Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mTrans && block.id == 1)
	{
World.setBlock(coords.x, coords.y, coords.z, 2, 0);
}});

Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mTrans && block.id == 2)
	{
World.setBlock(coords.x, coords.y, coords.z, 3, 0);
}});

Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mTrans && block.id == 3)
	{
World.setBlock(coords.x, coords.y, coords.z, 12, 0);
}});





Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mTrans && block.id == 12)
	{
World.setBlock(coords.x, coords.y, coords.z, 13, 0);
}});

Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mTrans && block.id == 13)
	{
World.setBlock(coords.x, coords.y, coords.z, 17, 0);
}});

Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mTrans && block.id == 17)
	{
World.setBlock(coords.x, coords.y, coords.z, 1, 0);
}});



IDRegistry.genItemID("mChas");
Item.createItem("mChas", "Мульти Часы", {name: "mChas", meta:0}, {stack:1});


Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mChas)
	{
if(Entity.getSneaking(Player.get())) {World.setWorldTime(13500)}

}});

Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mChas)
	{
	    if(Entity.getSneaking(Player.get()) == false) 
 {World.setWorldTime(1000)}

}});


IDRegistry.genItemID("mGrad");
Item.createItem("mGrad", "Мульти Погодник", {name: "mGrad", meta:0}, {stack:1});

Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mGrad)
	{
if(Entity.getSneaking(Player.get())) {World.setWeather({
         rain: 3,
         thunder: 0
        })}

}});


Callback.addCallback("ItemUse", function(coords, item, block)
     {
    
	if(item.id == ItemID.mGrad)
	{
if(Entity.getSneaking(Player.get()) == false) {World.setWeather({
         rain: 0,
         thunder: 0
        })}

}});


IDRegistry.genItemID("mComp");
Item.createItem("mComp", "Мульти Компас", {name: "mComp", meta: 0}, {stack:1});

		
		Callback.addCallback("ItemUse", function (coords, item, block) {
	var pos = Player.getPosition();	
		if(item.id==ItemID.mComp){
			Game.tipMessage("X: "+Math.round(pos.x)+" Y: "+Math.round(pos.y)+" Z: "+Math.round(pos.z));
}});


IDRegistry.genItemID("mPolet");
Item.createArmorItem("mPolet", "Мульти Элитры", {name: "mPolet"}, {type: "chestplate", armor: 1, durability: 3000, texture: "armor/mPolet_0.png"});

Callback.addCallback("tick", function(){
	var chest = Player.getArmorSlot(1);
	
if (chest.id == ItemID.mPolet&&Player.getFlyingEnabled()==false) 
{
Player.setFlyingEnabled(true);
}
else
if (chest.id !== ItemID.mPolet&&Player.getFlyingEnabled()==true) 
{
Player.setFlyingEnabled(false);

}
});



var BLOCK_TYPE_FUR = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 2,
    lightlevel: 15,
	explosionres: 2
});


var FURNACE_FUEL_MAP = { 	5: 300, 	6: 100, 	17: 300, 	263: 1600, 	280: 100, 	268: 200, 	269: 200, 	270: 200, 	271: 200, 	85: 300, 	107: 300, 	134: 300, 	135: 300, 	158: 150, 	162: 300, 	163: 300, 	164: 300, 	184: 300, 	185: 300, 	186: 300, 	187: 300, 	53: 300, 	54: 300, 	58: 300 };

var guiTnyFurnace = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Мульти Печь"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "furnace_bar_background", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "fire_scale", scale: 3.2}
	],
	
	elements: {
		"progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "furnace_bar_scale", scale: 3.2},
		"slotSource": {type: "slot", x: 441, y: 75},
		"slotResult": {type: "slot", x: 625, y: 142},
	}
});



IDRegistry.genBlockID("multiFurnace");
Block.createBlockWithRotation("multiFurnace", [
	{name: "Мульти Печь", texture: [["mFur", 0], ["mFur", 0], ["mFur", 0], ["mFur", 2], ["mFur", 0], ["mFur", 0]], inCreative: true}
],BLOCK_TYPE_FUR);
ToolAPI.registerBlockMaterial(BlockID.multiFurnace, "stone");

	Recipes.addShaped({id: BlockID.multiFurnace, count: 1, data: 0}, [
		"xxx",
		"xax",
		"xxx"
	], ['x', ItemID.multiingot, 0, 'a', 61, 0]);

TileEntity.registerPrototype(BlockID.multiFurnace, {
	defaultValues: {
		progress: 0
	},
	
	getGuiScreen: function(){
		return guiTnyFurnace;
	},
	
	tick: function(){
		var sourceSlot = this.container.getSlot("slotSource");
		var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
		if(result){
			var resultSlot = this.container.getSlot("slotResult");
			if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 100){
				sourceSlot.count--;
				resultSlot.id = result.id;
				resultSlot.data = result.data;
				resultSlot.count++;
				this.container.validateAll();
				this.data.progress = 0;
			}
		}
		else {
			this.data.progress = 0;
		}
		this.container.setScale("progressScale", this.data.progress / 100);
	}
});



Callback.addCallback("PlayerAttack",function(player,victim){
{
    item=Player.getCarriedItem(true);
    if(item.id==ItemID.mTrans&&Entity.getType(victim)==10)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);

Entity.spawn(coords.x, coords.y, coords.z, 11, []);}

if(item.id==ItemID.mTrans&&Entity.getType(victim)==11)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);

Entity.spawn(coords.x, coords.y, coords.z, 12, []);}

if(item.id==ItemID.mTrans&&Entity.getType(victim)==12)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);

Entity.spawn(coords.x, coords.y, coords.z, 13, []);}

if(item.id==ItemID.mTrans&&Entity.getType(victim)==13)
{
var coords = Entity.getPosition(victim);
Entity.remove(victim);

Entity.spawn(coords.x, coords.y, coords.z, 10, []);}


}});




IDRegistry.genItemID("mFire");
Item.createItem("mFire", "Мульти Огниво", {name: "mFire", meta: 0}, {stack:1});


Callback.addCallback("PlayerAttack", function (player, victim) { 
if(item.id == ItemID.mFire) {
Entity.setFire(victim, 9999);
}});

Callback.addCallback("ItemUse", function (coords, item, block) {
	if(item.id==ItemID.mFire){
		var side = coords.side;
    	coords = coords.relative;
    	block = World.getBlockID(coords.x, coords.y, coords.z);
    	if(block==0){
	   
					World.setBlock(coords.x, coords.y, coords.z, 51, (6 - side)%6) ;
}}});


Recipes.addShaped({id: ItemID.mChas, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', 347, 0,'b', ItemID.multiingot, 0]);
	
Recipes.addShaped({id: ItemID.mComp, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', 345, 0,'b', ItemID.multiingot, 0]);
	
Recipes.addShaped({id: ItemID.mGrad, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', 325, 8,'b', ItemID.multiingot, 0]);
	
Recipes.addShaped({id: ItemID.mPolet, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', 444, 0,'b', ItemID.multiingot, 0]);
	
Recipes.addShaped({id: ItemID.mTrans, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', 57, 0,'b', ItemID.multiingot, 0]);
	
Recipes.addShaped({id: ItemID.mFire, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', 259, 0,'b', ItemID.multiingot, 0]);
	
Recipes.addShaped({id: ItemID.mBackpack, count: 1, data: 0}, [
		"bbb",
		"bab",
		"bbb"
	], ['a', BlockID.multiblock, 0,'b', 334, 0]);
	
	