/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 36
*/



// file: icrender.js

function setupBlockAsTube(id,type) {
EnergyTypeRegistry.assureEnergyType(type, 1).registerWire(id);
}
function setupWireRender(id, width, groupName, preventSelfAdd) {
    var render = new ICRender.Model();
    BlockRenderer.setStaticICRender(id, 0, render);
   
    var boxes = [
        {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
        {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
        {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
        {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
        {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]},
    ]
   
    var group = ICRender.getGroup(groupName);
    if (!preventSelfAdd) {
        group.add(id, -1);
    }
   
    for (var i in boxes) {
        var box = boxes[i];
       
        var model = BlockRenderer.createModel();
        model.addBox(box.box[0], box.box[1], box.box[2], box.box[3], box.box[4], box.box[5], id, 0);
       
        render.addEntry(model).asCondition(box.side[0], box.side[1], box.side[2], group, 0);
    }
   
    var model = BlockRenderer.createModel();
    model.addBox(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0);
    render.addEntry(model);
    
    width = Math.max(width, 0.5);
    Block.setBlockShape(id, {x: 0.5 - width/2, y: 0.5 - width/2, z: 0.5 - width/2}, {x: 0.5 + width/2, y: 0.5 + width/2, z: 0.5 + width/2});
}




// file: 重要的东西.js

importLib("energylib", "*");




// file: 电.js

var FuE = EnergyTypeRegistry.assureEnergyType("FuE",0.25);

LiquidRegistry.registerLiquid(
"ft_cold",
"ft_cold",
["电量"]
);

LiquidRegistry.registerLiquid(
"ft_exha",
"ft_exha",
["废气"]
);




// file: 菜谱.js

var FURNACE_FUEL_MAP = {
	5: 300,
	6: 100,
	17: 300,
	263: 1600,
	280: 100,
	268: 200,
	269: 200,
	270: 200,
	271: 200,
	85: 300,
	107: 300,
	134: 300,
	135: 300,
	158: 150,
	162: 300,
	163: 300,
	164: 300,
	184: 300,
	185: 300,
	186: 300,
	187: 300,
	53: 300,
	54: 300,
	58: 300
};

Callback.addCallback("PostLoaded", function(){
	
Recipes.addShaped({id: BlockID.ft_铁工作台, count: 1, data: 0}, [
		"xxx",
		"xyx",
		"xxx"
	], ['x', ItemID.ft_钢, -1, 'y', 58, -1]);

Recipes.addShaped({id: BlockID.ft_高炉, count: 1, data: 0}, [
		"zhz",
		"zrz",
		"zhz"
	], ['z', 45, -1, 'h', 49, -1, 'r',61,-1]);

Recipes.addShaped({id: BlockID.ft_废气管, count: 6, data: 0}, [
		"zkz",
		"ooo",
		"zkz"
	], ['z', 336, -1,'k',45,-1]);

Recipes.addShaped({id: BlockID.ft_烟囱, count: 1, data: 0}, [
		"zoz",
		"zfz",
		"zkz"
	], ['z', 336, -1, 'k', 45, -1, 'f',125,-1]);

Recipes.addShaped({id: BlockID.ft_锻造炉, count: 1, data: 0}, [
		"zrz",
		"ror",
		"zrz"
	], ['z', 4, -1, 'r', 61, -1]);
Recipes.addShaped({id: BlockID.ft_焦炉, count: 1, data: 0}, [
		"zzz",
		"zoz",
		"zrz"
	], ['z', 45, -1, 'r', 61, -1]);
Recipes.addShaped({id: ItemID.ft_火钳, count: 1, data: 0}, [
		"zoz",
		"oro",
		"ror"
	], ['z', ItemID.ft_钢, -1, 'r', 265, -1]);
Recipes.addShaped({id: ItemID.ft_铁锤, count: 1, data: 0}, [
		"zzz",
		"ozo",
		"oro"
	], ['z', 265, -1, 'r', 280, -1]);
Recipes.addShaped({id: ItemID.ft_金锤, count: 1, data: 0}, [
		"zzz",
		"ozo",
		"oro"
	], ['z', 266, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_钻石锤, count: 1, data: 0}, [
		"zzz",
		"ozo",
		"oro"
	], ['z', 264, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_钢锤, count: 1, data: 0}, [
		"zzz",
		"ozo",
		"oro"
	], ['z', ItemID.ft_钢, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_铁钳子, count: 1, data: 0}, [
		"zoz",
		"ozo",
		"ror"
	], ['z', 265, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_金钳子, count: 1, data: 0}, [
		"zoz",
		"ozo",
		"ror"
	], ['z', 266, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_钻石钳子, count: 1, data: 0}, [
		"zoz",
		"ozo",
		"ror"
	], ['z', 264, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_钢钳子, count: 1, data: 0}, [
		"zoz",
		"ozo",
		"ror"
	], ['z', ItemID.ft_钢, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_铁小刀, count: 1, data: 0}, [
		"ooo",
		"ozo",
		"oro"
	], ['z', 265, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_金小刀, count: 1, data: 0}, [
		"ooo",
		"ozo",
		"oro"
	], ['z', 266, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_钻石小刀, count: 1, data: 0}, [
		"ooo",
		"ozo",
		"oro"
	], ['z', 264, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_钢小刀, count: 1, data: 0}, [
		"ooo",
		"ozo",
		"oro"
	], ['z', ItemID.ft_钢, -1, 'r', 280, -1]);
	Recipes.addShaped({id: ItemID.ft_螺丝, count: 3, data: 0}, [
		"ozo",
		"aro",
		"ooo"
	], ['z', ItemID.ft_钢, -1, 'r', ItemID.ft_钢棒, -1,'a',ItemID.ft_钢丝,-1]);
	Recipes.addShaped({id: ItemID.ft_发电机核心, count: 1, data: 0}, [
		"ooo",
		"rzr",
		"ooo"
	], ['z', ItemID.ft_蹄型磁铁, -1, 'r',ItemID.ft_铜丝, -1]);
	Recipes.addShaped({id: ItemID.ft_蓄电池, count: 1, data: 0}, [
		"ozo",
		"zrz",
		"zzz"
	], ['z', ItemID.ft_钢板, -1, 'r',331, -1]);
	Recipes.addShaped({id: ItemID.ft_扳手, count: 1, data: 0}, [
		"zoz",
		"ozo",
		"ozo"
	], ['z', 265, -1]);
	Recipes.addShaped({id: ItemID.ft_发电机定子, count: 1, data: 0}, [
		"zzz",
		"zrz",
		"ooo"
	], ['z', ItemID.ft_钢板, -1,'r',ItemID.ft_蹄型磁铁,-1]);
	Recipes.addShaped({id: ItemID.ft_线圈, count: 1, data: 0}, [
		"zoz",
		"zrz",
		"zoz"
	], ['z', ItemID.ft_铜丝, -1,'r',ItemID.ft_钢棒,-1]);
	Recipes.addShaped({id: ItemID.ft_发电机转子, count: 1, data: 0}, [
		"zrz",
		"odo",
		"zrz"
	], ['z', ItemID.ft_钢板, -1,'r',ItemID.ft_线圈,-1,'d',ItemID.ft_钢棒,-1]);
	Recipes.addShaped({id: ItemID.ft_发电机, count: 1, data: 0}, [
		"ooo",
		"zro",
		"ooo"
	], ['z', ItemID.ft_发电机转子, -1,'r',ItemID.ft_发电机定子,-1]);
	Recipes.addShaped({id: BlockID.ft_锅炉, count: 1, data: 0}, [
		"zoz",
		"zoz",
		"zzz"
	], ['z', ItemID.ft_钢板, -1]);
	Recipes.addShaped({id: BlockID.ft_能量管, count: 3, data: 0}, [
		"zzz",
		"rrr",
		"zzz"
	], ['z', ItemID.ft_铜丝, -1,'r',406,-1]);
	Recipes.addShaped({id: BlockID.ft_水管, count: 4, data: 0}, [
		"zzz",
		"zoz",
		"zzz"
	], ['z', 1, 0]);
	Recipes.addShaped({id:ItemID.ft_电机, count: 1, data: 0}, [
		"zoo",
		"oro",
		"zoo"
	], ['z', ItemID.ft_电刷, -1,'r',ItemID.ft_发电机,-1]);
	Recipes.addShaped({id:ItemID.ft_电阻器, count: 1, data: 0}, [
		"zzz",
		"zrz",
		"zzz"
	], ['z', ItemID.ft_铜丝, -1,'r',1,0]);
	Recipes.addShaped({id:ItemID.ft_钢磨盘, count: 1, data: 0}, [
		"rzr",
		"zrz",
		"rzr"
	], ['z', ItemID.ft_钢, -1,'r',265,0]);
	Recipes.addShaped({id:ItemID.ft_金磨盘, count: 1, data: 0}, [
		"rzr",
		"zrz",
		"rzr"
	], ['z',266 , -1,'r',265,0]);
	Recipes.addShaped({id:ItemID.ft_钻石磨盘, count: 1, data: 0}, [
		"rzr",
		"zrz",
		"rzr"
	], ['z', 264, -1,'r',265,0]);
	Recipes.deleteRecipe({id: 354});
	Recipes.deleteRecipe({id: 339});
	Recipes.deleteRecipe({id: 351});
	Recipes.deleteRecipe({id: 353});
	Recipes.deleteRecipe({id: 377});
	Recipes.deleteRecipe({id: 381});
Recipes.addFurnace(BlockID.oreCopper,ItemID.ingotCopper,0)
Recipes.addFurnace(BlockID.ft_磁铁矿,ItemID.ft_磁铁锭,0)
Recipes.addFurnace(BlockID.um_铁矿砂,265, 0);
Recipes.addFurnace(BlockID.um_铜矿砂,ItemID.ingotCopper, 0);
Recipes.addFurnace(BlockID.um_金矿砂,266, 0);
});




// file: 矿物.js

var BLOCK_TYPE_STONE = Block.createSpecialType({
	base: 1,
	solid: true,
	destroytime: 3,
	explosionres: 3
}, "stone");

IDRegistry.genBlockID("oreCopper");
Block.createBlock("oreCopper", [
	{name: "Copper Ore", texture: [["ore_copper", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
IDRegistry.genBlockID("ft_磁铁矿");
Block.createBlock("ft_磁铁矿", [
	{name: "Magnet Ore", texture: [["ft_磁铁矿", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreCopper, "stone", 2, true);
Block.setDestroyLevel("oreCopper", 2);
ToolAPI.registerBlockMaterial(BlockID.ft_磁铁矿, "stone", 2, true);
Block.setDestroyLevel("ft_磁铁矿", 2);
function addnewore(id,data,count,max,min,heighest,lowest){
var amount=Math.floor(Math.random() * (max - min + 1)) + min;
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
for(var i = 0; i < count; i++){
var coords = GenerationUtils.randomCoords(chunkX, chunkZ, lowest, heighest);
GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, amount);
}});
};
addnewore(BlockID.oreCopper,0,25,10,4,1,52);
addnewore(BlockID.ft_磁铁矿,0,10,5,2,1,24);




// file: 翻译.js

Translation.addTranslation("Copper Ore", {zh:"铜矿" });
Translation.addTranslation("Magnet Ore", {zh:"磁铁矿" });
Translation.addTranslation("Battery Box", {zh:"储电箱" });
Translation.addTranslation("Generator", {zh:"发电机" });
Translation.addTranslation("Stator", {zh:"发电机定子" });
Translation.addTranslation("Rotor", {zh:"发电机转子" });
Translation.addTranslation("Steel Plate", {zh:"钢板" });
Translation.addTranslation("Copper Plate", {zh:"铜板" });
Translation.addTranslation("Screw", {zh:"螺丝" });
Translation.addTranslation("Coil", {zh:"电磁铁" });
Translation.addTranslation("Generator Core", {zh:"发电机核心" });
Translation.addTranslation("Steel Stick", {zh:"钢棒" });
Translation.addTranslation("Electric Machinery", {zh:"电动机" });
Translation.addTranslation("Electric Brush", {zh:"电刷" });
Translation.addTranslation("Hoof Magnet", {zh:"蹄型磁铁" });
Translation.addTranslation("Steel Mill", {zh:"钢磨盘" });
Translation.addTranslation("Gold Mill", {zh:"金磨盘" });
Translation.addTranslation("Diamond Mill", {zh:"钻石磨盘" });
Translation.addTranslation("Copper Wire", {zh:"铜丝" });
Translation.addTranslation("Steel Wire", {zh:"钢丝" });
Translation.addTranslation("Resistor", {zh:"电阻器" });
Translation.addTranslation("Storage Battery", {zh:"蓄电池" });
Translation.addTranslation("Coke", {zh:"焦炭" });
Translation.addTranslation("Tool", {zh:"摇柄" });
Translation.addTranslation("Wrench", {zh:"扳手" });
Translation.addTranslation("Screwdriver", {zh:"螺丝刀" });
Translation.addTranslation("Fire-Tongs", {zh:"火钳" });
Translation.addTranslation("Iron Forging Hammer", {zh:"铁锤" });
Translation.addTranslation("Iron Pliers", {zh:"铁钳子" });
Translation.addTranslation("Iron Knife", {zh:"铁小刀" });
Translation.addTranslation("Steel Forging Hammer", {zh:"钢锤" });
Translation.addTranslation("Steel Pliers", {zh:"钢钳子" });
Translation.addTranslation("Steel Knife", {zh:"钢小刀" });
Translation.addTranslation("Gold Forging Hammer", {zh:"金锤" });
Translation.addTranslation("Gold Pliers", {zh:"金钳子" });
Translation.addTranslation("Gold Knife", {zh:"金小刀" });
Translation.addTranslation("Diamond Forging Hammer", {zh:"钻石锤" });
Translation.addTranslation("Diamond Pliers", {zh:"钻石钳子" });
Translation.addTranslation("Diamond Knife", {zh:"钻石小刀" });
Translation.addTranslation("Iron Gravel", {zh:"铁矿砂" });
Translation.addTranslation("Gold Gravel", {zh:"金矿砂" });
Translation.addTranslation("Copper Gravel", {zh:"铜矿砂" });
Translation.addTranslation("Steel Ingot", {zh:"钢锭" });
Translation.addTranslation("Magnet Ingot", {zh:"磁铁锭" });
Translation.addTranslation("Copper Ingot", {zh:"铜锭" });
Translation.addTranslation("Steel Ingot(h)", {zh:"炽热的钢锭" });
Translation.addTranslation("Copper Ingot(h)", {zh:"炽热的铜锭" });
Translation.addTranslation("Mill", {zh:"研磨机" });
Translation.addTranslation("Plate Compressors", {zh:"压板机" });
Translation.addTranslation("Ore Washer", {zh:"基础洗矿机" });
Translation.addTranslation("Steel Workbench", {zh:"钢制工作台" });
Translation.addTranslation("Water Pump", {zh:"水泵" });
Translation.addTranslation("Oven", {zh:"烤箱" });
Translation.addTranslation("Machine Tool<", {zh:"机床" });
Translation.addTranslation("Forging Furnace", {zh:"锻造炉"});
Translation.addTranslation("Cake Machine", {zh:"蛋糕机" });
Translation.addTranslation("Magnetizer", {zh:"磁化机" });
Translation.addTranslation("Liquid Fuel Generator", {zh:"液体燃料发电机" });
Translation.addTranslation("God's Generators", {zh:"上帝的发电机(创造模式)" });
Translation.addTranslation("Coal-fired Generators", {zh:"燃煤发电机" });
Translation.addTranslation("Water Pipe", {zh:"管道" });
Translation.addTranslation("FuE Wire", {zh:"FuE导线" });
Translation.addTranslation("Machine Shell", {zh:"机器外壳" });
Translation.addTranslation("Large Machine Shell", {zh:"大型机器外壳" });
Translation.addTranslation("Boiler", {zh:"储罐" });
Translation.addTranslation("Coke Oven", {zh:"焦炉" });
Translation.addTranslation("Industrial Furnaces", {zh:"工业炉" });
Translation.addTranslation("Grinder", {zh:"粉碎机" });
Translation.addTranslation("Large Ore Washer", {zh:"大型洗矿机" });
Translation.addTranslation("Chimney", {zh:"烟囱" });
Translation.addTranslation("Blast Furnace", {zh:"高炉" });
Translation.addTranslation("ft_exhaust Pipe", {zh:"废气管" });




// file: 发电机/火力发电机.js

IDRegistry.genBlockID("ft_燃煤发电机");
Block.createBlockWithRotation("ft_燃煤发电机", [
	{name: "Coal-fired Generators", texture:
[["ft_机器外壳", 0], ["ft_排热口", 0],
["ft_机器外壳", 1], ["ft_火力发电机", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 1]],
inCreative: true}
]);

var hlfdjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Coal-fired Generators"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 180, bitmap: "电量槽", scale: 4},
{type: "bitmap", x: 430., y: 250, bitmap: "没火", scale: 3},
{type: "bitmap", x: 490, y: 150, bitmap: "温度计槽", scale: 5}
],
elements: {
"slot": {type: "slot", x: 420, y: 180},
"huo": {type: "scale", x: 430, y: 250,bitmap:"火",scale: 3,direction:1},
"jindu1": {type: "scale", x: 490, y: 150,bitmap:"温度",scale: 5,direction:1},
"jindu2": {type: "scale", x: 550, y: 180,bitmap:"电量",scale: 4,overlay:"电量槽外"},
"text1": {type: "text", x: 550, y: 260, width: 100, height: 30, text: "Temperature:"},
"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "26℃"},


}

});


TileEntity.registerPrototype(BlockID.ft_燃煤发电机,
{
	defaultValues:
	{
		huo:0,
		wen:0,
		hot:0,
		fue:0,
		huan:0
	},
	
	getGuiScreen: function()
		{
			return hlfdjUI;
		},

	tick:function()
	{
		var st=this.container.getSlot("slot");
		this.container.setScale("jindu1", 
		this.data.wen/230);
		this.container.setScale("jindu2", 
		this.data.fue/2000);
		this.container.setScale("huo", 
		this.data.huo/this.data.hot);
		this.container.setText("text2",this.data.wen + 20 +"℃");
		
		var qwq = World.getTileEntity(this.x, this.y-1, this.z);
		var gl=World.getBlock(this.x,this.y-1,this.z)
		
		if(
			this.data.huo>0
		){
			this.data.huo--;
			this.data.wen++;
		};

		if(
			this.data.huo<=0
		){
			this.data.hot=0;
		};


		if(
			this.data.huo<=0&&
			this.data.wen>26
		){
			this.data.wen-=1;
		};

		if(
			st.count==0
		){
			st.id=0;
		};
		
		if(
			this.data.wen>=230
		){
			this.data.wen=230;
		};
		if(
			qwq
		){
			if(
				qwq.liquidStorage.getAmount("water")>0&&
				gl.id==BlockID.ft_锅炉&&
				st.id==263&&
				st.data==0&&
				this.data.fue<2000&&
				this.data.huo<=0&&
				this.data.wen<230
			){
				this.data.hot=160;
				this.data.huo=160;
				st.count--;
			};
			
			if(
				qwq.liquidStorage.getAmount("water")>0&&
				gl.id==BlockID.ft_锅炉&&
				st.id==173&&
				st.data==0&&
				this.data.fue<2000&&
				this.data.huo<=0&&
				this.data.wen<230
			){
				this.data.hot=1500;
				this.data.huo=1500;
				st.count--;
			};
		};
		
		if(
			qwq&&
			qwq.liquidStorage.getAmount("water")>0&&
			this.data.wen>100&&this.data.fue<2000
		){
			this.data.huan++
			if(this.data.huan>=4){
			for(var i=1;i<3;i++)
				{
					Particles.addParticle(4,this.x+0.5, this.y+i+0.25, this.z+0.5,  0, 0, 0, 150);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.5, this.z+0.5, 0, 0, 0, 150);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.75, this.z+0.5, 0, 0, 0, 150);
					
				};
				this.data.huan=0;
				}
			
			qwq.liquidStorage.getLiquid("water", 0.01);
			this.data.fue+=3;
		};
		
	},
	
isGenerator:function(){
return true;
},

getEnergyStorage: function(){
		return 2000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 40;
		this.data.fue += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.fue), Math.min(TRANSFER, this.data.fue));
	}

});
ICRender.getGroup("ic-wire").add(BlockID.ft_燃煤发电机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_燃煤发电机,FuE);




// file: 发电机/太阳能发电机.js

IDRegistry.genBlockID("ft_太阳能发电机");
Block.createBlock("ft_太阳能发电机", [
	{name: "Solar Generators", texture:
[["ft_不锈钢外壳", 0], ["ft_太阳能发电机", 1],
["ft_太阳能发电机", 0], ["ft_太阳能发电机", 0],
["ft_太阳能发电机", 0], ["ft_太阳能发电机", 0]],
inCreative: true}
]);

Block.setBlockShape(BlockID.ft_太阳能发电机, 
{x: 0.5 - 0.5, y: 1 - 1 ,z: 0.5 - 0.5}, 
{x: 0.5 + 0.5, y: 1 -0.5, z: 0.5 + 0.5});

TileEntity.registerPrototype(BlockID.ft_太阳能发电机,{
isGenerator: function() {
		return true;
	},
	
	energyTick: function(type, src){
		if(World.getWorldTime()>1000&&
			World.getWorldTime()<12000){
			src.add(1);
		}
	}
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_太阳能发电机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_太阳能发电机,FuE);




// file: 发电机/液体燃料发电机.js

IDRegistry.genBlockID("ft_液体燃料发电机");
Block.createBlock("ft_液体燃料发电机", [
	{name: "Liquid Fuel Generator", texture:
[["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_液体燃料发电机", 0], ["ft_液体燃料发电机", 0],
["ft_液体燃料发电机", 0], ["ft_液体燃料发电机", 0]],
inCreative: true}
]);

var ytrlfdjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Liquid Fuel Generator"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 450, y: 75, bitmap: "液体槽", scale: 4},
{type: "bitmap", x: 570, y: 180, bitmap: "电量槽", scale: 4},
{type: "bitmap", x: 572, y: 250, bitmap: "没火", scale: 4},
{type: "bitmap", x: 353, y: 160, bitmap: "进度条down", scale: 3.2}
],
elements: {
"slot1": {type: "slot", x: 350, y: 75},
"slot2": {type: "slot", x: 350, y: 275},
"huo": {type: "scale", x: 572, y: 250,bitmap:"火",scale: 4,direction:1},
"jindu1": {type: "scale", x: 450, y: 75,bitmap:"岩浆",scale: 4,direction:1,overlay:"标记"},
"jindu2": {type: "scale", x: 570, y: 180,bitmap:"电量",scale: 4,direction:0,overlay:"电量槽外"},
"text": {type: "text", x: 570, y: 150, width: 100, height: 30, text: "0 FuE"}
}

});
TileEntity.registerPrototype(BlockID.ft_液体燃料发电机,
{
	defaultValues:
	{
		fue:0,
		huo:0
	},
	
	addLava:function(id1,id2,c2,data1,data2)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		
		if(
		st1.id==id1&&
		st1.data==data1&&
		(st2.id==id2||st2.id==0)&&
		st1.count>0&&
		st2.count<c2&&
		this.liquidStorage.getAmount("lava")<16
		){
			st1.count--;
			st2.id=id2;
			st2.count++;
			st2.data=data2;
			this.liquidStorage.addLiquid("lava", 1);
		};
		
	},
	
	tick:function()
		{
			this.container.setText("text",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu2", 
			this.data.fue/3000);
			this.container.setScale("huo", 
			this.data.huo/1);
			this.liquidStorage.updateUiScale("jindu1", "lava");
			
			if(st1.count==0)
				{
					st1.id=0;
				};
				if(st2.count==0)
				{
					st2.id=0;
				};
				
				this.addLava(325,325,16,10,0);
				
				if(
				this.liquidStorage.getAmount("lava")>0&&
				this.data.fue<3000
				){
					this.data.fue+=2;
					this.liquidStorage.getLiquid("lava", 0.005);
					this.data.huo=1;
				}else{
					this.data.huo=0;
					};
		},
	
	click:function(id, count, data)
		{
			if(id==325&&
				data==10&&
				this.liquidStorage.getAmount("lava")<=16
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("lava", 1);
					return true ;
  			  }
		},

	getGuiScreen: function()
		{
			return ytrlfdjUI;
		},
	
	init: function()
		{
			this.liquidStorage.setLimit("lava", 16);
		},
	isGenerator:function(){
		return true;
	},

	getEnergyStorage: function(){
		return 3000;
	},
	
	energyTick: function(type, src){
		var TRANSFER = 40;
		this.data.fue += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.fue), Math.min(TRANSFER, this.data.fue));
	}

});
ICRender.getGroup("ic-wire").add(BlockID.ft_液体燃料发电机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_液体燃料发电机,FuE);
ICRender.getGroup("wtube").add(BlockID.ft_液体燃料发电机, -1);




// file: 大型组件/锅炉.js

IDRegistry.genBlockID("ft_锅炉");
Block.createBlock("ft_锅炉", [
	{name: "Boiler", texture:
[["ft_锅炉", 0], ["ft_锅炉", 1],
["ft_锅炉", 0], ["ft_锅炉", 0],
["ft_锅炉", 0], ["ft_锅炉", 0]],
inCreative: true}
]);

Block.setBlockShape(BlockID.ft_锅炉, 
{x: 0.5 - 0.4, y: 0.5 - 0.5, z: 0.5 - 0.4}, 
{x: 0.5 + 0.4, y: 1-0, z: 0.5 + 0.4});

var scUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Boiler"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
],
elements: {
"jindu": {type: "scale", x: 550, y: 140,bitmap:"水槽",scale: 4,direction:1,overlay:"标记"},
}

});


TileEntity.registerPrototype(BlockID.ft_锅炉,
{
	tick:function()
		{
			this.liquidStorage.updateUiScale("jindu", "water");
		},

	init: function()
		{
			this.liquidStorage.setLimit("water", 16);
		},

	click:function(id, count, data)
		{
			if(id==325&&
				data==8&&
				this.liquidStorage.getAmount("water")<=16
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("water", 1);
					return true ;
  			  }
		},

	getGuiScreen: function()
		{
			return scUI;
		}
	
	
});
ICRender.getGroup("wtube").add(BlockID.ft_锅炉, -1);




// file: 导线/电线.js

/*
／￣￣￣￣￣￣￣￣￣
|　　<求保佑无bug>
＼
　￣￣∨￣￣￣￣￣￣
　 ∧＿∧
　(　・∀・)　 
　(　 つつヾ
　 | ｜ |　吧唧吧唧
　(＿_)＿)
*/

IDRegistry.genBlockID("ft_能量管");
Block.createBlock("ft_能量管", [
	{name: "FuE Wire", texture:
[["ft_能量管", 0], ["ft_能量管", 0],
["ft_能量管", 0], ["ft_能量管", 0],
["ft_能量管", 0], ["ft_能量管", 0]],
inCreative: true}
],FuE.getWireSpecialType());

var CABLE_BLOCK_WIDTH = 0.25;

setupWireRender(BlockID.ft_能量管,0.4, "ic-wire");
setupBlockAsTube(BlockID.ft_能量管,"FuE")




// file: 蓄电器/电池箱.js

IDRegistry.genBlockID("ft_电池箱");
Block.createBlock("ft_电池箱", [
	{name: "Battery Box", texture:
[["ft_电池箱", 0], ["ft_电池箱", 1],
["ft_电池箱", 0], ["ft_电池箱", 0],
["ft_电池箱", 0], ["ft_电池箱", 0]],
inCreative: true}
]);

var dcxUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Battery Box"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 490, y: 180, bitmap: "电量槽", scale: 6},
],
elements: {
"slot": {type: "slot", x: 420, y: 180},
"jindu": {type: "scale", x: 490, y: 180,bitmap:"电量",scale: 6,overlay:"电量槽外"},
"text1": {type: "text", x: 490, y: 270, width: 100, height: 30, text: "Electricity:"},
"text2": {type: "text", x: 490, y: 290, width: 100, height: 30, text: "0 FuE"}
}

});

TileEntity.registerPrototype(BlockID.ft_电池箱,
{
	defaultValues:
	{
		fue:0
	},
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			this.container.setScale("jindu", 
			this.data.fue/15000);
		},

	
	getGuiScreen: function()
		{
			return dcxUI;
		},
	getEnergyStorage: function(){
		return 15000;
	},
	
	energyTick: function(type, src){
		
		if(
			src.amount()>1&&
			this.data.fue<15000
			){
				this.data.fue++;
				src.get(1);
			};
		
		var TRANSFER = 40;
		if(
			src.amount()<=0&&
			this.data.fue>0
			){
			this.data.fue += src.storage(Math.min(TRANSFER*4, this.getEnergyStorage() - this.data.fue), Math.min(TRANSFER, this.data.fue));
			}
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_电池箱,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_电池箱, -1);




// file: 机器/烤箱.js

IDRegistry.genBlockID("ft_烤箱");
Block.createBlockWithRotation("ft_烤箱", [
	{name: "Oven", texture:
[["ft_机器外壳", 0], ["ft_机器外壳", 2],
["ft_机器外壳", 1], ["ft_烤箱", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var kxUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Oven"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 450, y: 150, bitmap: "没火", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"huo": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "火", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_烤箱,
{
	defaultValues:
	{
		huo:0,
		jin:0,
		fue:0
	},
	
	makeFood:function(slot1,slot2,x,y)
		{
			var ss1 = this.container.getSlot(slot1);
			var ss2 = this.container.getSlot(slot2);
			if(
				ss1.id==x&&
				ss1.count>0&&
				this.data.huo>0&&
				(ss2.id==y||ss2.id==0)&&
				ss2.count<64
			){
				this.data.jin++;
			};
			
			if(
				this.data.jin>=200&&
				ss1.id==x&&
				ss1.count>=8&&
				(ss2.id==y||ss2.id==0)&&
				ss2.count<=56
			){
				ss2.id=y;
				ss2.count+=8;
				ss1.count-=8;
				this.data.jin=0;
			};
			if(
				this.data.jin>=200&&
				ss1.id==x&&
				ss1.count<8&&ss1.count>0&&
				(ss2.id==y||ss2.id==0)&&
				ss2.count<=64-ss1.count
			){
				ss2.id=y;
				ss2.count+=ss1.count;
				ss1.count=0;
				this.data.jin=0;
			};
		},
		addnewextramachine:function(id){
			var ex1=World.getTileEntity(this.x, this.y+1, this.z)
			var ex2=World.getTileEntity(this.x, this.y-1, this.z)
			var ex3=World.getTileEntity(this.x+1, this.y, this.z)
			var ex4=World.getTileEntity(this.x-1, this.y, this.z)
			var ex5=World.getTileEntity(this.x, this.y, this.z+1)
			var ex6=World.getTileEntity(this.x, this.y, this.z-1)
			if(World.getBlockID(this.x,this.y+1,this.z)==id&&ex1!=null){
				if(ex1.data.work==true){
					this.data.huo--;
					ex1.data.huo++;
					}
					};
					if(World.getBlockID(this.x,this.y-1,this.z)==id&&ex2!=null){
				if(ex2.data.work==true){
					this.data.huo--;
					ex2.data.huo++;
					}
					};
					if(World.getBlockID(this.x+1,this.y,this.z)==id&&ex3!=null){
				if(ex3.data.work==true){
					this.data.huo--;
					ex3.data.huo++;
					}
					};
					
					if(World.getBlockID(this.x-1,this.y,this.z)==id&&ex4!=null){
				if(ex4.data.work==true){
					this.data.huo--;
					ex4.data.huo++;
					}
					};
					if(World.getBlockID(this.x,this.y,this.z+1)==id&&ex5!=null){
				if(ex5.data.work==true){
					this.data.huo--;
					ex5.data.huo++;
					}
					};
					if(World.getBlockID(this.x,this.y,this.z-1)==id&&ex6!=null){
				if(ex6.data.work==true){
					this.data.huo--;
					ex6.data.huo++;
					}
					};
					},
	tick:function()
		{
			this.addnewextramachine(BlockID.ft_蛋糕机);
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("huo", 
			this.data.huo/160);
			this.container.setScale("jindu1", 
			this.data.jin/200);
			this.container.setScale("jindu2", 
			this.data.fue/600);
			this.container.setText("text",this.data.fue + " FuE");
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			
			
			if(this.data.huo>0)
			{this.data.huo--};
			
			if(
				this.data.fue>100&&
				this.data.huo<=0
			){
				this.data.huo=160;
				this.data.fue-=100;
			};
			
			this.makeFood("slot1","slot2",392,393);
			this.makeFood("slot1","slot2",319,320);
			this.makeFood("slot1","slot2",363,364);
			this.makeFood("slot1","slot2",349,350);
			this.makeFood("slot1","slot2",365,366);
			this.makeFood("slot1","slot2",411,412);
			this.makeFood("slot1","slot2",423,424);
			
		},

	getGuiScreen: function()
		{
			return kxUI;
		},
		energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<600
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_烤箱, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_烤箱,FuE);




// file: 机器/水泵.js

IDRegistry.genBlockID("ft_水泵");
Block.createBlock("ft_水泵", [
	{name: "Water Pump", texture:
[["ft_电池箱", 0], ["ft_机器外壳", 2],
["ft_水泵", 0], ["ft_水泵", 0],
["ft_水泵", 0], ["ft_水泵", 0]],
inCreative: true}
]);

var sbUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Water Pump"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
{type: "bitmap", x: 550, y: 80, bitmap: "电量槽", scale: 4},
],
elements: {
"jindu1": {type: "scale", x: 550, y: 140,bitmap:"水槽",scale: 4,direction:1,overlay:"标记"},
"jindu2": {type: "scale", x: 550, y: 80,bitmap:"电量",scale: 4,direction:0,overlay:"电量槽外"},
"jindu3": {type: "scale", x: 550, y: 140,bitmap:"岩浆",scale: 4,direction:1,overlay:"标记"},
"text2": {type: "text", x: 650, y: 100, width: 100, height: 30, text: "0 FuE"}
}

});

TileEntity.registerPrototype(BlockID.ft_水泵,
{
	defaultValues:
	{
		fue:0
	},
	xiangsi:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq1.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq1.liquidStorage.addLiquid("lava", 1);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq2.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq2.liquidStorage.addLiquid("lava", 1);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq3.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq3.liquidStorage.addLiquid("lava", 1);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq4.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq4.liquidStorage.addLiquid("lava", 1);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq5.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq5.liquidStorage.addLiquid("lava", 1);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq6.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq6.liquidStorage.addLiquid("lava", 1);
			}
    },
	tieba:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq1.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq1.liquidStorage.addLiquid("water", 1);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq2.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq2.liquidStorage.addLiquid("water", 1);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq3.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq3.liquidStorage.addLiquid("water", 1);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq4.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq4.liquidStorage.addLiquid("water", 1);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq5.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq5.liquidStorage.addLiquid("water", 1);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq6.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq6.liquidStorage.addLiquid("water", 1);
			}
    },
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var wat=World.getBlock(this.x,this.y-1,this.z)
			this.liquidStorage.updateUiScale("jindu1", "water");
			this.liquidStorage.updateUiScale("jindu3", "lava");
			this.container.setScale("jindu2", 
			this.data.fue/100);
			
			if(
				this.data.fue>=10&&
				wat.id==9&&this.liquidStorage.getAmount("lava")<=0&&
				this.liquidStorage.getAmount("water")<16
			){
				this.liquidStorage.addLiquid("water", 1);
				World.setBlock(this.x, this.y-1, this.z, false);
				this.data.fue-=10;
			}
			if(
				this.data.fue>=10&&
				(wat.id==10||wat.id==11)&&this.liquidStorage.getAmount("water")<=0&&
				this.liquidStorage.getAmount("lava")<16
			){
				this.liquidStorage.addLiquid("lava", 1);
				World.setBlock(this.x, this.y-1, this.z, false);
				this.data.fue-=10;
			}
			
			this.tieba(BlockID.ft_水管,1);
			this.tieba(BlockID.ft_洗矿机,16);
			this.tieba(BlockID.ft_大型洗矿机,32);
			this.tieba(BlockID.ft_锅炉,16);
			this.xiangsi(BlockID.ft_液体燃料发电机,16);
			this.xiangsi(BlockID.ft_水管,1);
		},

	init: function()
		{
			this.liquidStorage.setLimit("water", 16);
			this.liquidStorage.setLimit("lava", 16);
		},

	getGuiScreen: function()
		{
			return sbUI;
		},
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<100
			){
				this.data.fue++;
				src.get(1);
			};
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_水泵,FuE);
	ICRender.getGroup("ic-wire").add(BlockID.ft_水泵, -1);
	ICRender.getGroup("wtube").add(BlockID.ft_水泵, -1);





// file: 机器/洗矿机.js

IDRegistry.genBlockID("ft_洗矿机");
Block.createBlockWithRotation("ft_洗矿机", [
	{name: "Ore Washer", texture:
[["ft_机器外壳", 0], ["ft_洗矿机", 1],
["ft_机器外壳", 1], ["ft_洗矿机", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 2]],
inCreative: true}
]);

var xkjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Ore Washer"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "洗矿", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4},
		{type: "bitmap", x: 350, y: 75, bitmap: "液体槽", scale: 3}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "洗矿满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"jindu3": {type: "scale", x: 350, y: 75,bitmap:"水槽",scale: 3,direction:1,overlay:"标记"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});


TileEntity.registerPrototype(BlockID.ft_洗矿机,
{
	defaultValues:
	{
		jin:0,
		fue:0,
		huan:0
	},
	
	wash:function(id,id2,x,y,z,gai)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			
			if(
				st1.id==id&&
				st1.count>0&&
				(st2.id==id2||st2.id==0)&&
				st2.count<64&&
				this.data.fue>x&&
				this.liquidStorage.getAmount("water")>z
			){
				this.liquidStorage.getLiquid("water", z);
				this.data.jin++;
				this.data.fue-=x;
				this.data.huan++
				if(this.data.huan>=4){
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.5, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.45, this.y+1, this.z+0.5,  0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.45, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.55, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.55, this.y+1, this.z+0.5, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.5,  0, 0, 0, 10);
				this.data.huan=0
};
			};
			
			if(
				st1.id==id&&
				st1.count>0&&
				(st2.id==id2||st2.id==0)&&
				st2.count<64&&
				this.data.fue>x&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.count+=y;
				if(st2.count<64&&Math.random()*100<gai){
					st2.count++
					}
			};
			
		},
	
	tick:function()
		{
			this.liquidStorage.updateUiScale("jindu3", "water");
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu1", 
			this.data.jin/240);
			this.container.setScale("jindu2", 
			this.data.fue/1000);
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			this.wash(13,318,1,1,0.01,30);
			this.wash(BlockID.um_铁矿砂,265,1,1,0.01,60);
			this.wash(BlockID.um_金矿砂,266,1,1,0.01,60);
			this.wash(BlockID.um_铜矿砂,ItemID.ingotCopper,1,1,0.01,60);
		},
	click:function(id, count, data)
		{
			if(id==325&&
				data==8&&
				this.liquidStorage.getAmount("water")<=16
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("water", 1);
					return true ;
  			  }
		},

	init: function()
		{
			this.liquidStorage.setLimit("water", 16);
		},

	getGuiScreen: function()
		{
			return xkjUI;
		},
	
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<1000
			){
				this.data.fue++;
				src.get(1);
			};
	}

	
});
	ICRender.getGroup("ic-wire").add(BlockID.ft_洗矿机, -1);
	ICRender.getGroup("wtube").add(BlockID.ft_洗矿机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_洗矿机,FuE);




// file: 机器/铁工作台.js

function addrecipe(result,count,data,s1,s2,s3,s4,s5,s6,s7,s8,s9,tool,ct){
	  var st1 = ct.getSlot("slot0");
        var st2 = ct.getSlot("slot1");
        var st3 = ct.getSlot("slot2");
        var st4 = ct.getSlot("slot3");
        var st5 = ct.getSlot("slot4");
        var st6 = ct.getSlot("slot5");
        var st7 = ct.getSlot("slot6");
        var st8 = ct.getSlot("slot7");
        var st9 = ct.getSlot("slot8");
        var st10 = ct.getSlot("resultSlot");
        var ss1 = ct.getSlot("slot11");
        var ss2 = ct.getSlot("slot12");
        var ss3 = ct.getSlot("slot13");
        if(st1.id==s1&&
st2.id==s2&&
st3.id==s3&&
st4.id==s4&&
st5.id==s5&&
st6.id==s6&&
st7.id==s7&&
st8.id==s8&&
st9.id==s9&&
(ss1.id==tool||ss2.id==tool||ss3.id==tool)){
	st10.id=result;
	st10.data=data;
	st10.count+=count;
	st1.count--;
	st2.count--;
	st3.count--;
	st4.count--;
	st5.count--;
	st6.count--;
	st7.count--;
	st8.count--;
	st9.count--;
	if(ss1.id==tool){
		ss1.data++;
		}else if(ss2.id==tool){
			ss2.data++;
			}else if(ss3.id==tool){
				ss3.data++
				};}
				
				
				};
IDRegistry.genBlockID("ft_铁工作台");
Block.createBlock("ft_铁工作台", [
	{name: "Steel Workbench", texture:
[["ft_铁", 0], ["ft_铁工作台", 0],
["ft_铁工作台", 2], ["ft_铁工作台", 2],
["ft_铁工作台", 1], ["ft_铁工作台", 1]],
inCreative: true}
]);

var workbenchGui=new UI.StandartWindow({
standart: {
	header: {text: {text: "Iron Workbench"}},
	inventory: {standart: true},
	background: {standart: true}},
	
elements: {
		"slot0": {type: "slot", x: 467, y: 146, size: 60},
		"slot1": {type: "slot", x: 537, y: 146, size: 60},
		"slot2": {type: "slot", x: 607, y: 146, size: 60},
		"slot3": {type: "slot", x: 467, y: 214, size: 60},
		"slot4": {type: "slot", x: 537, y: 214, size: 60},
		"slot5": {type: "slot", x: 607, y: 214, size: 60},
		"slot6": {type: "slot", x: 467, y: 283, size: 60},
		"slot7": {type: "slot", x: 537, y: 283, size: 60},
		"slot8": {type: "slot", x: 607, y: 283, size: 60},
		"slot11": {type: "slot", x: 830, y: 42},
		"slot12": {type: "slot", x: 830, y: 102},
		"slot13": {type: "slot", x: 830, y: 162},
		"resultSlot": {type: "slot", x: 698, y: 212},
		    "button": {type: "button", x: 600, y: 400, bitmap: "button", scale: 2, clicker: {
			onClick: function(container, tileEntity){
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_铁锤,container);
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_钢锤,container);
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_金锤,container);
				addrecipe(ItemID.ft_铜板,1,0,0,0,0,0,ItemID.ft_高温铜,0,0,ItemID.ft_高温铜,0,ItemID.ft_钻石锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_铁锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_钢锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_金锤,container);
				addrecipe(ItemID.ft_钢板,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,ItemID.ft_高温钢,0,ItemID.ft_钻石锤,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_铁钳子,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钢钳子,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_金钳子,container);
				addrecipe(ItemID.ft_铜丝,3,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钻石钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_铁钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_钢钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_金钳子,container);
				addrecipe(ItemID.ft_钢丝,3,0,0,0,0,0,ItemID.ft_钢板,0,0,0,0,ItemID.ft_钻石钳子,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_铁小刀,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_钢小刀,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_金小刀,container);
				addrecipe(ItemID.ft_钢棒,1,0,0,0,0,0,ItemID.ft_高温钢,0,0,0,0,ItemID.ft_钻石小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_铁小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_金小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_钢小刀,container);
				addrecipe(ItemID.ft_螺丝刀,1,0,0,ItemID.ft_钢棒,0,0,ItemID.ft_钢棒,0,0,280,0,ItemID.ft_钻石小刀,container);
				addrecipe(BlockID.ft_机器外壳,1,0,ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,ItemID.ft_螺丝刀,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_铁锤,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_钢锤,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_金锤,container);
				addrecipe(ItemID.ft_蹄型磁铁,1,0,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,0,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_磁铁锭,ItemID.ft_钻石锤,container);
				addrecipe(BlockID.ft_机床,1,0,0,0,0,ItemID.ft_蓄电池,58,ItemID.ft_发电机核心,0,0,0,BlockID.ft_机器外壳,container);
				addrecipe(ItemID.ft_摇柄,1,0,ItemID.ft_钢,ItemID.ft_螺丝,0,0,ItemID.ft_钢,0,0,ItemID.ft_螺丝,ItemID.ft_钢,ItemID.ft_螺丝刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_铁小刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钢小刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_金小刀,container);
				addrecipe(ItemID.ft_电刷,1,0,0,0,0,0,ItemID.ft_铜板,0,0,0,0,ItemID.ft_钻石小刀,container);
				addrecipe(BlockID.ft_大型洗矿机,1,0,ItemID.ft_电机,BlockID.ft_锅炉,ItemID.ft_电机,0,BlockID.ft_洗矿机,0,ItemID.ft_蓄电池,0,ItemID.ft_蓄电池,ItemID.ft_扳手,container);
			}
}}
}
});

TileEntity.registerPrototype(BlockID.ft_铁工作台, {
	tick:function()
		{
			  var st1 = this.container.getSlot("slot0");
        var st2 = this.container.getSlot("slot1");
        var st3 = this.container.getSlot("slot2");
        var st4 = this.container.getSlot("slot3");
        var st5 = this.container.getSlot("slot4");
        var st6 = this.container.getSlot("slot5");
        var st7 = this.container.getSlot("slot6");
        var st8 = this.container.getSlot("slot7");
        var st9 = this.container.getSlot("slot8");
        var st10 = this.container.getSlot("resultSlot");
        var ss1 = this.container.getSlot("slot11");
        var ss2 = this.container.getSlot("slot12");
        var ss3 = this.container.getSlot("slot13");
        if(ss1.data>Item.getMaxDamage(ss1.id) ){
					ss1.id=0;
};
					if(ss2.data>Item.getMaxDamage(ss2.id) ){
					ss2.id=0;
};
if(ss3.data>Item.getMaxDamage(ss3.id) ){
					ss3.id=0;
};
				if(st1.count<=0){
				st1.id=0;
				st1.count=0;
				};
				if(st2.count<=0){
				st2.id=0;
				st2.count=0;
				};
				if(st3.count<=0){
				st3.id=0;
				st3.count=0
				};
				if(st4.count<=0){
				st4.id=0;
				st4.count=0
				};
				if(st5.count<=0){
				st5.id=0;
				st5.count=0
				};
				if(st6.count<=0){
				st6.id=0;
				st6.count=0
				};
				if(st7.count<=0){
				st7.id=0;
				st7.count=0
				};
				if(st8.count<=0){
				st8.id=0;
				st8.count=0
				};
				if(st9.count<=0){
				st9.id=0;
				st9.count=0
				};
				if(st10.count<=0){
				st10.id=0;
				st10.count=0
				};
				if(ss1.count<=0){
				ss1.id=0;
				ss1.count=0
				};
				if(ss2.count<=0){
				ss2.id=0;
				ss2.count=0
				};
				if(ss3.count<=0){
				ss3.id=0;
				ss3.count=0
				};
				},
    getGuiScreen: function() {
        return workbenchGui;
    }
});




// file: 导线/水管.js

IDRegistry.genBlockID("ft_水管");
Block.createBlock("ft_水管", [
	{name: "Water Pipe", texture:
[["ft_水管", 0], ["ft_水管", 0],
["ft_水管", 0], ["ft_水管", 0],
["ft_水管", 0], ["ft_水管", 0]],
inCreative: true}
]);

Block.setBlockShape(BlockID.ft_水管, {x: 0.5 - CABLE_BLOCK_WIDTH, y: 0.5 - CABLE_BLOCK_WIDTH, z: 0.5 - CABLE_BLOCK_WIDTH}, {x: 0.5 + CABLE_BLOCK_WIDTH, y: 0.5 + CABLE_BLOCK_WIDTH, z: 0.5 + CABLE_BLOCK_WIDTH});
setupWireRender(BlockID.ft_水管,0.4, "wtube");

TileEntity.registerPrototype(BlockID.ft_水管,
{
	defaultValues:
	{
		time:0,
	},

	energy:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq1.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq1.liquidStorage.addLiquid("water", 1);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq2.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq2.liquidStorage.addLiquid("water", 1);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq3.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq3.liquidStorage.addLiquid("water", 1);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq4.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq4.liquidStorage.addLiquid("water", 1);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq5.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq5.liquidStorage.addLiquid("water", 1);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("water")>=1&&
				rq6.liquidStorage.getAmount("water")<=bc-1
			){
				this.liquidStorage.getLiquid("water", 1);
				rq6.liquidStorage.addLiquid("water", 1);
			}
    },
			
	trance:function(rq,zb)
		{
			if(
				rq&&
				zb.id==BlockID.ft_水管&&
				this.liquidStorage.getAmount("water")==1&&
				rq.liquidStorage.getAmount("water")==0&&
				rq.liquidStorage.getAmount("ft_cold")<=0
			){
				this.liquidStorage.getLiquid("water", 1);
				rq.liquidStorage.addLiquid("water", 1);
				this.liquidStorage.addLiquid("ft_cold", 5);
			};
			
		},
		shao:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq1.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq1.liquidStorage.addLiquid("lava", 1);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq2.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq2.liquidStorage.addLiquid("lava", 1);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq3.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq3.liquidStorage.addLiquid("lava", 1);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq4.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq4.liquidStorage.addLiquid("lava", 1);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq5.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq5.liquidStorage.addLiquid("lava", 1);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("lava")>=1&&
				rq6.liquidStorage.getAmount("lava")<=bc-1
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq6.liquidStorage.addLiquid("lava", 1);
			}
    },
			
	trancel:function(rq,zb)
		{
			if(
				rq&&
				zb.id==BlockID.ft_水管&&
				this.liquidStorage.getAmount("lava")==1&&
				rq.liquidStorage.getAmount("lava")==0&&
				rq.liquidStorage.getAmount("ft_cold")<=0
			){
				this.liquidStorage.getLiquid("lava", 1);
				rq.liquidStorage.addLiquid("lava", 1);
				this.liquidStorage.addLiquid("ft_cold", 5);
			};
			
		},
	tick:function()
		{
			this.energy(BlockID.ft_锅炉,16);
			this.energy(BlockID.ft_洗矿机,16);
			this.energy(BlockID.ft_大型洗矿机,32);
			this.shao(BlockID.ft_液体燃料发电机,16);
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			this.trancel(rq1,qqq);
			this.trancel(rq2,www);
			this.trancel(rq3,eee);
			this.trancel(rq4,rrr);
			this.trancel(rq5,ttt);
			this.trancel(rq6,yyy);
			this.trance(rq1,qqq);
			this.trance(rq2,www);
			this.trance(rq3,eee);
			this.trance(rq4,rrr);
			this.trance(rq5,ttt);
			this.trance(rq6,yyy);
			
			
			if(this.liquidStorage.getAmount("ft_cold")>0)
				{this.liquidStorage.getLiquid("ft_cold", 1)};
			
		},
		
	init: function()
		{
			this.liquidStorage.setLimit("water", 1);
			this.liquidStorage.setLimit("lava", 1);
			this.liquidStorage.setLimit("ft_cold", 50);
		}

});






// file: 发电机/上帝的发电机.js

IDRegistry.genBlockID("ft_上帝的发电机");
Block.createBlock("ft_上帝的发电机", [
	{name: "God's Generators", texture:
[["ft_机器外壳", 0], ["ft_排热口", 0],
["ft_机器外壳", 1], ["ft_机器外壳", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 1]],
inCreative: true}
]);


TileEntity.registerPrototype(BlockID.ft_上帝的发电机,{
isGenerator:function(){
return true;
},
energyTick:function(type,src){
src.add(100); //生成每刻钟产生10个RF
}
});
//绑定到这个瓦片实体我们的能量类型
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_上帝的发电机,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_上帝的发电机, -1);




// file: 大型组件/结构.js

IDRegistry.genBlockID("ft_机器外壳");
Block.createBlock("ft_机器外壳", [
	{name: "Machine Shell", texture:
[["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_机器外壳", 2], ["ft_机器外壳", 0],
["ft_机器外壳", 0], ["ft_机器外壳", 1]],
inCreative: true}
],FuE.getWireSpecialType());
setupBlockAsTube(BlockID.ft_机器外壳,"FuE");
ICRender.getGroup("ic-wire").add(BlockID.ft_机器外壳,-1);
IDRegistry.genBlockID("ft_大型机器外壳");
Block.createBlock("ft_大型机器外壳", [
	{name: "Large Machine Shell", texture:
[["ft_大型机器外壳", 2], ["ft_大型机器外壳", 1],
["ft_大型机器外壳", 1], ["ft_大型机器外壳", 0],
["ft_大型机器外壳", 0], ["ft_大型机器外壳", 2]],
inCreative: true}
]);
setupBlockAsTube(BlockID.ft_大型机器外壳,"FuE");
ICRender.getGroup("ic-wire").add(BlockID.ft_大型机器外壳,-1);




// file: 大型机械/粉碎机.js

IDRegistry.genBlockID("ft_粉碎机");
Block.createBlock("ft_粉碎机", [
{name: "Grinder", texture:
[["ft_电池箱", 0], ["ft_粉碎机", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_机器外壳", 2], ["ft_机器外壳", 0]],
inCreative: true}
]);

var fsjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Grinder"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 530, y: 146, bitmap: "粉碎", scale: 4},
{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
],

elements: {
"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "粉碎满", scale: 4},
"slot1": {type: "slot", x: 445, y: 75},
"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
"slot2": {type: "slot", x: 630, y: 142},
"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"},
"slot3": {type: "slot", x: 830, y: 42}
}

});

TileEntity.registerPrototype(BlockID.ft_粉碎机,
{
	defaultValues:
	{
		jin:0,
		jian:0,
		jia:0,
		fue:0
	},
	
	moPan:function()
		{
			var st3=this.container.getSlot("slot3");
			
			if(st3.id==ItemID.ft_钢磨盘)
				{
					this.data.jian=1;
					this.data.jia=1;
				};
				
			if(st3.id==ItemID.ft_金磨盘)
				{
					this.data.jian=1;
					this.data.jia=2;
				};
				
			if(st3.id==ItemID.ft_钻石磨盘)
				{
					this.data.jian=0.5;
					this.data.jia=2;
				};
			
		},
	
	work:function(id,id2,count2,data1,data2)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				(st3.id==ItemID.ft_钢磨盘||
				 st3.id==ItemID.ft_金磨盘||
				 st3.id==ItemID.ft_钻石磨盘)&&
			  World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
		  	World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 		 World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&

	 		 World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
		 	 World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
		 	 World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
	 		 World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 		 World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
			  World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_机器外壳

			){
				this.data.jin+=this.data.jia;
				this.data.fue-=this.data.jian;
				st3.data++;
			};
			
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				(st3.id==ItemID.ft_钢磨盘||
				 st3.id==ItemID.ft_金磨盘||
				 st3.id==ItemID.ft_钻石磨盘)&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.data=data2;
				st2.count+=count2;
			};
		},
	
	
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			this.container.setScale("jindu1", 
			this.data.jin/240);
			this.container.setScale("jindu2", 
			this.data.fue/2500);
			
			this.moPan();
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			if(st3.data>=Item.getMaxDamage(st3.id))
			{st3.id=0};
			
			this.work(1,4,1,0,0);
			this.work(4,13,1,0,0);
			this.work(13,12,1,0,0);
			this.work(338,353,1,0,0);
			this.work(352,351,3,0,15);
			this.work(89,348,4,0,0);
			this.work(369,377,1,0,0);
			this.work(15,BlockID.um_铁矿砂,1,0,0);
			this.work(14,BlockID.um_金矿砂,1,0,0);
			this.work(BlockID.oreCopper,BlockID.um_铜矿砂,1,0,0);
		},

	getGuiScreen: function()
	{
	if(
	 	 World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&
			World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
		  
	 	 World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳

		){
			return fsjUI;
		};
	},
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<2500
			){
				this.data.fue++;
				src.get(1);
			};
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_粉碎机,FuE);




// file: 大型机械/高炉/高炉.js

IDRegistry.genBlockID("ft_高炉");
Block.createBlock("ft_高炉", [
	{name: "Blast Furnace", texture:
[["ft_砖", 0], ["ft_砖", 0],
["ft_高炉", 0], ["ft_高炉", 0],
["ft_高炉", 0], ["ft_高炉", 0]],
inCreative: true}
]);

var glUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Blast Furnace"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 3.2},
		{type: "bitmap", x: 450, y: 150, bitmap: "没火", scale: 3.2},
		{type: "bitmap", x: 700, y: 75, bitmap: "液体槽", scale: 2}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 3.2},
		"jindu2": {type: "scale", x: 700, y: 75, direction: 1, value: 0.5, bitmap: "废气", scale: 2},
		"huo": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "火", scale: 3.2},
		"slot1": {type: "slot", x: 441, y: 75},
		"slot2": {type: "slot", x: 441, y: 212},
		"slot3": {type: "slot", x: 625, y: 142},
	}
});

TileEntity.registerPrototype(BlockID.ft_高炉,
{
	defaultValues:
	{
		huo:0,
		hot:0,
		jin:0
	},
	energy:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq1.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq1.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq2.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq2.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq3.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq3.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq4.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq4.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq5.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq5.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq6.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq6.liquidStorage.addLiquid("ft_exha", 10);
			};
			
		},
		
		tick:function()
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			this.container.setScale("huo", 
			this.data.huo/160);
			this.container.setScale("jindu1", 
			this.data.jin/1200);
			this.liquidStorage.updateUiScale("jindu2", "ft_exha");
			this.energy(BlockID.ft_废气管,100);
			
			if(this.data.huo>0)
			{this.data.huo--};
			
			if(st1.count==0){st1.id=0};
		if(st2.count==0){st2.id=0};
		if(st3.count==0){st3.id=0};
			
			if(
				World.getBlock(this.x+1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				
				World.getBlock(this.x+1,this.y+1,this.z).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z).id==45&&
				World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x,this.y+1,this.z).id==11&&
				
				World.getBlock(this.x+1,this.y+2,this.z).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z).id==108&&
				World.getBlock(this.x+1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x,this.y+2,this.z).id==0&&
				
				World.getBlock(this.x+1,this.y-1,this.z).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z).id==108&&
				World.getBlock(this.x+1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x,this.y-1,this.z).id==45&&
				st1.id==265&&
				this.liquidStorage.getAmount("ft_exha")<200&&
				st1.count>0&&
				(st3.id==ItemID.ft_钢||st3.id==0)&&
				st3.count<64&&this.data.huo>0
			){
				this.data.jin+=1;
				this.liquidStorage.addLiquid("ft_exha", 1);
			};
			if(this.data.huo<=0&&this.data.jin>0){
				this.data.jin--
				};
			if(
				st1.id==265&&
				st1.count>0&&
				(st3.id==ItemID.ft_钢||st3.id==0)&&
				st3.count<64&&
				this.data.jin>=1200
			){
				st3.id=ItemID.ft_钢;
				st3.count++;
				this.liquidStorage.addLiquid("ft_exha", 50);
				this.liquidStorage.addLiquid("ft_exha", Math.random()*100);
				st1.count--;
				this.data.jin=0;
			};
			
			if(
				st2.id==ItemID.ft_焦炭&&st2.count>0&&
				this.liquidStorage.getAmount("ft_exha")<200&&
				this.data.huo<=0
			){
				this.data.hot=160;
				this.data.huo=160;
				st2.count--;
			};
			
			/*if(
				st2.id==173&&
				st2.data==0&&
				this.liquidStorage.getAmount("ft_exha")<200&&
				this.data.huo<=0
			){
				this.data.hot=1500;
				this.data.huo=1500;
				st2.count--;
			};*/
			
			
		},
		init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 200);
		},
	getGuiScreen: function()
		{
			if(
				World.getBlock(this.x+1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y,this.z+1).id==45&&
				
				World.getBlock(this.x+1,this.y+1,this.z).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z).id==45&&
				World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z+1).id==45&&
				World.getBlock(this.x,this.y+1,this.z-1).id==45&&
				World.getBlock(this.x,this.y+1,this.z).id==11&&
				
				World.getBlock(this.x+1,this.y+2,this.z).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z).id==108&&
				World.getBlock(this.x+1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z+1).id==108&&
				World.getBlock(this.x,this.y+2,this.z-1).id==108&&
				World.getBlock(this.x,this.y+2,this.z).id==0&&
				
				World.getBlock(this.x+1,this.y-1,this.z).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z).id==108&&
				World.getBlock(this.x+1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x-1,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z+1).id==108&&
				World.getBlock(this.x,this.y-1,this.z-1).id==108&&
				World.getBlock(this.x,this.y-1,this.z).id==45
				
			){
			return glUI;
			};
		}
	
	
});
ICRender.getGroup("btube").add(BlockID.ft_高炉, -1);




// file: 大型机械/高炉/废气管.js

IDRegistry.genBlockID("ft_废气管");
Block.createBlock("ft_废气管", [
	{name: "ft_exhaust Pipe", texture:
[["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_砖", 0]],
inCreative: true}
]);

setupWireRender(BlockID.ft_废气管,0.35, "btube");

TileEntity.registerPrototype(BlockID.ft_废气管,
{
	defaultValues:
	{
		time:0,
	},

	energy:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq1.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq1.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq2.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq2.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq3.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq3.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq4.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq4.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq5.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq5.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq6.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq6.liquidStorage.addLiquid("ft_exha", 10);
			}
    },
			
	trance:function(rq,zb)
		{
			if(
				rq&&
				zb.id==BlockID.ft_废气管&&
				this.liquidStorage.getAmount("ft_exha")==100&&
				rq.liquidStorage.getAmount("ft_exha")==0&&
				rq.liquidStorage.getAmount("ft_cold")<=0
			){
				this.liquidStorage.getLiquid("ft_exha", 100);
				rq.liquidStorage.addLiquid("ft_exha", 100);
				this.liquidStorage.addLiquid("ft_cold", 5);
			};
			
		},
	tick:function()
		{
			this.energy(BlockID.ft_烟囱,200);
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			this.trance(rq1,qqq);
			this.trance(rq2,www);
			this.trance(rq3,eee);
			this.trance(rq4,rrr);
			this.trance(rq5,ttt);
			this.trance(rq6,yyy);
			
			if(this.liquidStorage.getAmount("ft_cold")>0)
				{this.liquidStorage.getLiquid("ft_cold", 1)};
			
		},
		
	init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 100);
			this.liquidStorage.setLimit("ft_cold", 50);
		}

});






// file: 大型机械/高炉/烟囱.js

IDRegistry.genBlockID("ft_烟囱");
Block.createBlock("ft_烟囱", [
	{name: "Chimney", texture:
[["ft_砖", 0], ["ft_烟囱", 0],
["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_砖", 0]],
inCreative: true}
]);

var ycUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Chimney"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
],
elements: {
"jindu": {type: "scale", x: 550, y: 140,bitmap:"废气",scale: 4,direction:1,overlay:"标记"},
}

});

TileEntity.registerPrototype(BlockID.ft_烟囱,
{
	defaultValues:
	{
		huan:0
	},
	tick:function()
		{
			if(this.liquidStorage.getAmount("ft_exha")>0&&
				World.getBlock(this.x,this.y+1,this.z).id==0)
				{this.liquidStorage.getLiquid("ft_exha", 1)
				this.data.huan++;
				if(this.data.huan>=6){
				for(var i=1;i<5;i++)
				{
					Particles.addParticle(4,this.x+0.5, this.y+i, this.z+0.5, 0, 0, 0, 200);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.25, this.z+0.5, 0, 0, 0, 200);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.5, this.z+0.5, 0, 0, 0, 200);
					Particles.addParticle(4,this.x+0.5, this.y+i+0.75, this.z+0.5, 0, 0, 0, 200);
					}
				this.data.huan=0
				}
				};
				
			this.liquidStorage.updateUiScale("jindu", "ft_exha");
		},

	init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 200);
		},
	getGuiScreen: function()
		{
			return ycUI;
		}
	
	
});
ICRender.getGroup("btube").add(BlockID.ft_烟囱, -1);




// file: 大型机械/焦炉.js

IDRegistry.genBlockID("ft_焦炉");
Block.createBlockWithRotation("ft_焦炉", [
	{name: "Coke Oven", texture:
[["ft_砖", 0], ["ft_砖", 0],
["ft_砖", 0], ["ft_焦炉", 0],
["ft_砖", 0], ["ft_砖", 0]],
inCreative: true}
]);

var jlUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Coke Oven"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 452, y: 150, bitmap: "没火", scale: 3.4},
		{type: "bitmap", x: 700, y: 75, bitmap: "液体槽", scale: 2.5},
		{type: "bitmap", x: 350, y: 75, bitmap: "温度计槽", scale: 6},
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"slot2": {type: "slot", x: 445, y: 212},
		"jindu3": {type: "scale", x: 700, y: 75, direction: 1, value: 0.5, bitmap: "废气", scale: 2.5},
		"huo": {type: "scale", x: 452, y: 150,bitmap:"火",scale: 3.4,direction:1},
		"jindu2": {type: "scale", x: 350, y: 75,bitmap:"温度",scale: 6,direction:1},
		"slot3": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "26℃"}
	}

});

TileEntity.registerPrototype(BlockID.ft_焦炉,
{
	defaultValues:
	{
		huo:0,
		wen:0,
		hot:0,
		jin:0,
		magical:false
	},
	
	energy:function(bd,bc)
		{
			var qqq=World.getBlock(this.x+1,this.y,this.z)
			var www=World.getBlock(this.x-1,this.y,this.z)
			var eee=World.getBlock(this.x,this.y,this.z+1)
			var rrr=World.getBlock(this.x,this.y,this.z-1)

			var ttt=World.getBlock(this.x,this.y+1,this.z)
			var yyy=World.getBlock(this.x,this.y-1,this.z)

			var rq1 = World.getTileEntity(this.x+1, this.y, this.z)
			var rq2 = World.getTileEntity(this.x-1, this.y, this.z)
			var rq3 = World.getTileEntity(this.x, this.y, this.z+1)
			var rq4 = World.getTileEntity(this.x, this.y, this.z-1)

			var rq5 = World.getTileEntity(this.x, this.y+1, this.z)
			var rq6 = World.getTileEntity(this.x, this.y-1, this.z)
			
			if(
				rq1&&
				qqq.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq1.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq1.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq2&&
				www.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq2.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq2.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq3&&
				eee.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq3.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq3.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq4&&
				rrr.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq4.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq4.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq5&&
				ttt.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq5.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq5.liquidStorage.addLiquid("ft_exha", 10);
			} if(
				rq6&&
				yyy.id==bd&&
				this.liquidStorage.getAmount("ft_exha")>=10&&
				rq6.liquidStorage.getAmount("ft_exha")<bc
			){
				this.liquidStorage.getLiquid("ft_exha", 10);
				rq6.liquidStorage.addLiquid("ft_exha", 10);
			};
			
		},
		
	
	fire:function(id,wen,fire)
	{
		var st2=this.container.getSlot("slot2");
		
		if(
				st2.id==id&&st2.count>0&&
				st2.data==0&&
				this.data.huo<=0&&
				this.data.wen<wen
			){
				this.data.hot=fire;
				this.data.huo=fire;
				st2.count--;
			};
			
	},
	
	work:function(id1,id2,wen)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
		
		if(
			st1.id==id1&&
			this.liquidStorage.getAmount("ft_exha")<200&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64
		){
			this.data.jin++;
			this.liquidStorage.addLiquid("ft_exha", 1);
		};
		if(this.data.wen<wen&&st2.count<=0&&this.data.jin>0){
				this.data.jin--;
};
		if(
			st1.id==id1&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64&&
			this.data.jin>=100
		){
			st1.count--;
			st3.id=id2;
			st3.count++;
			this.data.jin=0;
		};
		
		
	},
	
	tick:function()
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
		this.container.setScale("jindu1", 
		this.data.jin/100);
		this.container.setScale("jindu2", 
		this.data.wen/1200);
		this.container.setScale("huo", 
		this.data.huo/this.data.hot);
		this.liquidStorage.updateUiScale("jindu3", "ft_exha");
		this.container.setText("text2",this.data.wen + 26 +"℃");
		
		this.energy(BlockID.ft_废气管,100);
		this.energy(BlockID.ft_烟囱,200);
		if(st1.count==0){st1.id=0};
		if(st2.count==0){st2.id=0};
		if(st3.count==0){st3.id=0};
		if(
			this.liquidStorage.getAmount("ft_exha")<200&&
			this.data.huo>0
		){
			this.data.huo--;
			if(this.data.wen<1200){
			this.data.wen++;
			}
			this.liquidStorage.addLiquid("ft_exha", 1);
		};

		if(
			this.data.huo<=0
		){
			this.data.hot=0;
		};


		if(
			this.data.huo<=0&&
			this.data.wen>26
		){
			this.data.wen-=1;
		};

		if(
			st1.count==0
		){
			st1.id=0;
		};
		
		if(
			st2.count==0
		){
			st2.id=0;
		};
		
		if(
			st3.count==0
		){
			st3.id=0;
		};
		
		if(
			this.data.wen>=3000
		){
			this.data.wen=3000;
		};
			
		this.fire(263,800,160);
		this.fire(173,1200,1440);
		this.fire(ItemID.ft_焦炭,1200,1100);
		
		this.work(263,ItemID.ft_焦炭,1000);
		
		if(
	 	 	(World.getBlock(this.x+1,this.y,this.z-2).id==45&&
	 	 	World.getBlock(this.x+1,this.y,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y,this.z-1).id==45&&
	 	 	World.getBlock(this.x-1,this.y,this.z).id==45&&

	 	 	World.getBlock(this.x+1,this.y+1,this.z-2).id==45&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y+1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y+1,this.z).id==45&&

			  World.getBlock(this.x,this.y-1,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-2).id==45&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-1).id==45&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y-1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-2).id==45&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-1).id==45&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z).id==45&&
	 	 	World.getBlock(this.x,this.y-1,this.z).id==45)||

(World.getBlock(this.x+2,this.y,this.z-1).id==45&&
World.getBlock(this.x+2,this.y,this.z).id==45&&
World.getBlock(this.x+2,this.y,this.z+1).id==45&&
World.getBlock(this.x+1,this.y,this.z-1).id==45&&
World.getBlock(this.x+1,this.y,this.z+1).id==45&&
World.getBlock(this.x,this.y,this.z-1).id==45&&
World.getBlock(this.x,this.y,this.z+1).id==45&&

World.getBlock(this.x+2,this.y+1,this.z-1).id==45&&
World.getBlock(this.x+2,this.y+1,this.z).id==45&&
World.getBlock(this.x+2,this.y+1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y+1,this.z-1).id==45&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z-1).id==45&&
World.getBlock(this.x,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z).id==45&&

World.getBlock(this.x+1,this.y-1,this.z).id==45&&
World.getBlock(this.x+2,this.y-1,this.z-1).id==45&&
World.getBlock(this.x+2,this.y-1,this.z).id==45&&
World.getBlock(this.x+2,this.y-1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z-1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z-1).id==45&&
World.getBlock(this.x,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z).id==45)||

(World.getBlock(this.x+1,this.y,this.z).id==45&&
World.getBlock(this.x+1,this.y,this.z+1).id==45&&
World.getBlock(this.x+1,this.y,this.z+2).id==45&&
World.getBlock(this.x,this.y,this.z+2).id==45&&
World.getBlock(this.x-1,this.y,this.z).id==45&&
World.getBlock(this.x-1,this.y,this.z+1).id==45&&
World.getBlock(this.x-1,this.y,this.z+2).id==45&&

World.getBlock(this.x+1,this.y+1,this.z).id==45&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y+1,this.z+2).id==45&&
World.getBlock(this.x,this.y+1,this.z+2).id==45&&
World.getBlock(this.x-1,this.y+1,this.z).id==45&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x-1,this.y+1,this.z+2).id==45&&
World.getBlock(this.x,this.y+1,this.z).id==45&&

World.getBlock(this.x,this.y-1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z).id==45&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x+1,this.y-1,this.z+2).id==45&&
World.getBlock(this.x,this.y-1,this.z+2).id==45&&
World.getBlock(this.x-1,this.y-1,this.z).id==45&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x-1,this.y-1,this.z+2).id==45&&
World.getBlock(this.x,this.y-1,this.z).id==45)||

(World.getBlock(this.x,this.y,this.z+1).id==45&&
World.getBlock(this.x,this.y,this.z-1).id==45&&
World.getBlock(this.x-1,this.y,this.z-1).id==45&&
World.getBlock(this.x-1,this.y,this.z+1).id==45&&
World.getBlock(this.x-2,this.y,this.z-1).id==45&&
World.getBlock(this.x-2,this.y,this.z).id==45&&
World.getBlock(this.x-2,this.y,this.z+1).id==45&&

World.getBlock(this.x,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y-1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==45&&
World.getBlock(this.x-2,this.y-1,this.z-1).id==45&&
World.getBlock(this.x-2,this.y-1,this.z).id==45&&
World.getBlock(this.x-2,this.y-1,this.z+1).id==45&&
World.getBlock(this.x,this.y-1,this.z).id==45&&

World.getBlock(this.x-1,this.y-1,this.z).id==45&&
World.getBlock(this.x,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y+1,this.z-1).id==45&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==45&&
World.getBlock(this.x-2,this.y+1,this.z-1).id==45&&
World.getBlock(this.x-2,this.y+1,this.z).id==45&&
World.getBlock(this.x-2,this.y+1,this.z+1).id==45&&
World.getBlock(this.x,this.y+1,this.z).id==45)
			
				)
			{this.data.magical=true}else{
				this.data.magical=false};
			
	},
	

	init: function()
		{
			this.liquidStorage.setLimit("ft_exha", 200);
		},
	
	
	getGuiScreen: function()
		{
			if(
	 	 	this.data.magical==true
				)
			{return jlUI;}
		}
	
	
});




// file: 大型机械/大型洗矿机.js

IDRegistry.genBlockID("ft_大型洗矿机");
Block.createBlock("ft_大型洗矿机", [
{name: "Large Ore Washer", texture:
[["ft_电池箱", 0], ["ft_洗矿机", 2],
["ft_机器外壳", 2], ["ft_机器外壳", 1],
["ft_机器外壳", 0], ["ft_机器外壳", 0]],
inCreative: true}
]);

var dxxkjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Large Ore Washer"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "洗矿", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4},
		{type: "bitmap", x: 350, y: 75, bitmap: "液体槽", scale: 3}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "洗矿满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"jindu3": {type: "scale", x: 350, y: 75,bitmap:"水槽",scale: 3,direction:1,overlay:"标记"},
		"slot2": {type: "slot", x: 630, y: 77},
		"slot3": {type: "slot", x: 630, y: 142},
		"slot4": {type: "slot", x: 630, y: 207},
		"text": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_大型洗矿机,
{
	defaultValues:
	{
		jin:0,
		fue:0,
		huan:0,
		magical:false
	},
	
	wash:function(id,id2,y,id3,yy,id4,yyy,x,z,gl1,gl2,gl3)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			var st4=this.container.getSlot("slot4");
			
			if(
				this.data.magical==true&&
				st1.id==id&&
				st1.count>0&&
				(st2.id==id2||st2.id==0)&&
				st2.count<64&&
				(st3.id==id3||st3.id==0)&&
				st3.count<64&&
				(st4.id==id4||st4.id==0)&&
				st4.count<64&&
				this.data.fue>x&&
				this.liquidStorage.getAmount("water")>z
			){
				this.liquidStorage.getLiquid("water", z);
				this.data.jin++;
				this.data.fue-=x;
				this.data.huan++
				if(this.data.huan>=4){
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.5, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.45, this.y+1, this.z+0.5, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.45, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.55, 0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.55, this.y+1, this.z+0.5,  0, 0, 0, 15);
				Particles.addParticle(19,this.x+0.5, this.y+1, this.z+0.5, 0, 0, 0, 10);
				this.data.huan=0
				};

			};
			
			if(
				this.data.magical==true&&
				st1.id==id&&
				st1.count>0&&
				(st2.id==id2||st2.id==0)&&
				st2.count<64&&
				(st3.id==id3||st3.id==0)&&
				st3.count<64&&
				(st4.id==id4||st4.id==0)&&
				st4.count<64&&
				this.data.fue>x&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.count+=y;
				if(Math.random()*100<gl1&&st2.count<64){
					st2.count++
					};
					if(Math.random()*100<gl2&&st3.count<64){
				st3.id=id3;
				st3.count+=yy;
				};
				if(Math.random()*100<gl3&&st4.count<64){
				st4.id=id4;
				st4.count+=yyy;
				};
			};
			
		},
	
	tick:function()
		{
			this.liquidStorage.updateUiScale("jindu3", "water");
			this.container.setText("text",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu1", 
			this.data.jin/240);
			this.container.setScale("jindu2", 
			this.data.fue/2500);
			
			if(
		  World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&

	 	 World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_机器外壳&&
	 	 World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_机器外壳&&
	
		  World.getBlock(this.x+1,this.y-2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-2,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x-1,this.y-2,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x+1,this.y-2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-2,this.z+1).id==BlockID.ft_大型机器外壳&&
	 	 World.getBlock(this.x,this.y-2,this.z-1).id==BlockID.ft_大型机器外壳

			){
				this.data.magical=true;
			}else{
				this.data.magical=false;
				};
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			this.wash(13,318,1,264,1,0,0,1,0.01,90,5,0);
			this.wash(BlockID.um_铁矿砂,265,2,266,1,ItemID.ingotCopper,1,1,0.01,40,20,20);
			this.wash(BlockID.um_金矿砂,266,2,265,1,ItemID.ingotCopper,1,1,0.01,40,20,20);
			this.wash(BlockID.um_铜矿砂,ItemID.ingotCopper,2,265,1,266,1,1,0.01,40,20,20);
			this.wash(12,289,1,264,1,0,0,1,0.01,40,5,0);
		},
	click:function(id, count, data)
		{
			if(id==325&&
				data==8&&
				this.liquidStorage.getAmount("water")<=16
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("water", 1);
					return true ;
  			  }
		},

	init: function()
		{
			this.liquidStorage.setLimit("water", 32);
		},

	getGuiScreen: function()
		{
			if(
			this.data.magical==true
			){
				return dxxkjUI;
			};
		},
	
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<2500
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_大型洗矿机,FuE);
ICRender.getGroup("wtube").add(BlockID.ft_大型洗矿机, -1);




// file: 大型机械/工业炉.js

IDRegistry.genBlockID("ft_工业炉");
Block.createBlockWithRotation("ft_工业炉", [
	{name: "Industrial Furnaces", texture:
[["ft_机器外壳", 0], ["ft_机器外壳", 2],
["ft_机器外壳", 1], ["ft_工业炉", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var gylUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Industrial Furnaces"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 450, y: 150, bitmap: "没火", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "热满", scale: 4},
		"huo": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "火", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_工业炉,
{
	defaultValues:
	{
		huo:0,
		jin:0,
		fue:0,
		magical:false
	},
		
	work:function(id,id2,co)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		
		if(
		st1.id==id&&
		st1.count>0&&
		(st2.id==id2||st2.id==0)&&
		st2.count<64&&
		this.data.magical==true&&
		this.data.fue>0
		){
			this.data.jin+=co;
			this.data.fue--;
		};
		
		if(
		st1.id==id&&
		st1.count>0&&
		(st2.id==id2||st2.id==0)&&
		st2.count<64&&
		this.data.magical==true&&
		this.data.jin>=380
		){
			this.data.jin=0;
			st1.count--;
			st2.id=id2;
			st2.count++;
		};
		
	},
		
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("huo", 
			this.data.huo/1);
			this.container.setScale("jindu1", 
			this.data.jin/380);
			this.container.setScale("jindu2", 
			this.data.fue/3000);
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			
			this.work(15,265,10);
			this.work(14,266,10);
			this.work(12,20,10);
			this.work(337,336,10);
			this.work(4,1,10);
			this.work(BlockID.oreCopper,ItemID.ingotCopper,10);
			this.work(BlockID.ft_磁铁矿,ItemID.ft_磁铁锭,10);
			this.work(BlockID.um_铁矿砂,265,10);
			this.work(BlockID.um_金矿砂,266,10);
			this.work(BlockID.um_铜矿砂,ItemID.ingotCopper,10);
			this.work(263,ItemID.ft_焦炭,5);
			this.work(265,ItemID.ft_钢,3);
			this.work(ItemID.ingotCopper,ItemID.ft_高温铜,7);
			this.work(ItemID.ft_钢,ItemID.ft_高温钢,7);
			this.work(368,381,1);
			if(
				st1.id!=0&&
				this.data.huo<=0
			){
				this.data.huo=1;
			}else{
				this.data.huo=0;
				};
			
			if(
	 	 	(World.getBlock(this.x+1,this.y,this.z-2).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x,this.y,this.z-2).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x-1,this.y,this.z-2).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
	 	 	World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&

	 	 	World.getBlock(this.x+1,this.y+1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
	
			  World.getBlock(this.x,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+2,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+2,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+2,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&

			  World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y-1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-2).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
	 	 	World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳)||

(World.getBlock(this.x+2,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+2,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+2,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&

World.getBlock(this.x+1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x+2,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+2,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳)||

(World.getBlock(this.x+1,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x+1,this.y,this.z+2).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z+2).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z+2).id==BlockID.ft_机器外壳&&

World.getBlock(this.x+1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y+2,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x+1,this.y-1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z+2).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳)||

(World.getBlock(this.x,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-1,this.y,this.z+1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-2,this.y,this.z-1).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-2,this.y,this.z).id==BlockID.ft_机器外壳&&
World.getBlock(this.x-2,this.y,this.z+1).id==BlockID.ft_机器外壳&&

World.getBlock(this.x,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x-1,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y-1,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y-1,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y-1,this.z).id==BlockID.ft_大型机器外壳&&

World.getBlock(this.x-1,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-1,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+2,this.z-1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+2,this.z).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x-2,this.y+2,this.z+1).id==BlockID.ft_大型机器外壳&&
World.getBlock(this.x,this.y+2,this.z).id==BlockID.ft_大型机器外壳)
			
				)
			{this.data.magical=true}else{
				this.data.magical=false};
			
		},

	getGuiScreen: function()
		{
			if(this.data.magical==true)
			{
				return gylUI;
			}
		},
		energyTick: function(type, src){
			if(
			src.amount()>2&&
			this.data.fue<3000
			){
				this.data.fue+=2;
				src.get(2);
			};
	}
	
	
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_工业炉,FuE);




// file: 物品/锭.js

IDRegistry.genItemID("ft_钢");
Item.createItem("ft_钢","Steel Ingot",
{name:"ft_钢", meta:   0  });

IDRegistry.genItemID("ft_磁铁锭");
Item.createItem("ft_磁铁锭","Magnet Ingot",
{name:"ft_磁铁锭", meta:   0  });

IDRegistry.genItemID("ingotCopper");
Item.createItem("ingotCopper", "Copper Ingot", {name: "ingot_copper"});

IDRegistry.genItemID("ft_高温钢");
Item.createItem("ft_高温钢","Steel Ingot(h)",
{name:"ft_高温金属", meta:   0  });

IDRegistry.genItemID("ft_高温铜");
Item.createItem("ft_高温铜","Copper Ingot(h)",
{name:"ft_高温金属", meta:   0  });





// file: 物品/零件.js



IDRegistry.genItemID("ft_发电机");
Item.createItem("ft_发电机","Generator",
{name:"ft_发电机", meta:   0  });

IDRegistry.genItemID("ft_发电机定子");
Item.createItem("ft_发电机定子","Stator",
{name:"ft_发电机定子", meta:   0  });

IDRegistry.genItemID("ft_发电机转子");
Item.createItem("ft_发电机转子","Rotor",
{name:"ft_发电机转子", meta:   0  });



IDRegistry.genItemID("ft_钢板");
Item.createItem("ft_钢板","Steel Plate",
{name:"ft_钢板", meta:   0  });

IDRegistry.genItemID("ft_铜板");
Item.createItem("ft_铜板","Copper Plate",
{name:"ft_铜板", meta:   0  });

IDRegistry.genItemID("ft_螺丝");
Item.createItem("ft_螺丝","Screw",
{name:"ft_螺丝", meta:   0  });



IDRegistry.genItemID("ft_发电机核心");
Item.createItem("ft_发电机核心","Generator Core",
{name:"ft_发电机核心", meta:   0  });

IDRegistry.genItemID("ft_钢棒");
Item.createItem("ft_钢棒","Steel Stick",
{name:"ft_钢棒", meta:   0  });



IDRegistry.genItemID("ft_电机");
Item.createItem("ft_电机","Electric Machinery",
{name:"ft_电机", meta:   0  });

IDRegistry.genItemID("ft_电刷");
Item.createItem("ft_电刷","Electric Brush",
{name:"ft_电刷", meta:   0  });


IDRegistry.genItemID("ft_蹄型磁铁");
Item.createItem("ft_蹄型磁铁","Hoof Magnet",
{name:"ft_蹄型磁铁", meta:   0  });

IDRegistry.genItemID("ft_钢磨盘");
Item.createItem("ft_钢磨盘","Steel Mill",
{name:"ft_钢磨盘", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钢磨盘, 24000);

IDRegistry.genItemID("ft_金磨盘");
Item.createItem("ft_金磨盘","Gold Mill",
{name:"ft_金磨盘", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_金磨盘, 18000);

IDRegistry.genItemID("ft_钻石磨盘");
Item.createItem("ft_钻石磨盘","Diamond Mill",
{name:"ft_钻石磨盘", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钻石磨盘, 36000);

IDRegistry.genItemID("ft_铜丝");
Item.createItem("ft_铜丝","Copper Wire",
{name:"ft_铜丝", meta:   0  });

IDRegistry.genItemID("ft_钢丝");
Item.createItem("ft_钢丝","Steel Wire",
{name:"ft_铁丝", meta:   0  });

IDRegistry.genItemID("ft_线圈");
Item.createItem("ft_线圈","Coil",
{name:"ft_线圈", meta:   0  });

IDRegistry.genItemID("ft_电阻器");
Item.createItem("ft_电阻器","Resistor",
{name:"ft_电阻器", meta:   0  });

IDRegistry.genItemID("ft_蓄电池");
Item.createItem("ft_蓄电池","Storage Battery",
{name:"ft_蓄电池", meta:   0  });

IDRegistry.genItemID("ft_焦炭");
Item.createItem("ft_焦炭","Coke",
{name:"ft_焦炭", meta:   0  });











// file: 物品/工具.js

IDRegistry.genItemID("ft_摇柄");
Item.createItem("ft_摇柄","Tool",
{name:"ft_摇柄", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_摇柄, 300);
IDRegistry.genItemID("ft_扳手");
Item.createItem("ft_扳手","Wrench",
{name:"ft_扳手", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_扳手, 50);

IDRegistry.genItemID("ft_螺丝刀");
Item.createItem("ft_螺丝刀","Screwdriver",
{name:"ft_螺丝刀", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_螺丝刀, 18000);


IDRegistry.genItemID("ft_火钳");
Item.createItem("ft_火钳","Fire-Tongs",
{name:"ft_火钳", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_火钳, 64);


IDRegistry.genItemID("ft_铁锤");
Item.createItem("ft_铁锤","Iron Forging Hammer",
{name:"ft_铁锤", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_铁锤, 18);

IDRegistry.genItemID("ft_铁钳子");
Item.createItem("ft_铁钳子","Iron Pliers",
{name:"ft_铁钳子", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_铁钳子, 18);

IDRegistry.genItemID("ft_铁小刀");
Item.createItem("ft_铁小刀","Iron Knife",
{name:"ft_铁小刀", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_铁小刀, 20);


IDRegistry.genItemID("ft_钢锤");
Item.createItem("ft_钢锤","Steel Forging Hammer",
{name:"ft_钢锤", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钢锤, 36);

IDRegistry.genItemID("ft_钢钳子");
Item.createItem("ft_钢钳子","Steel Pliers",
{name:"ft_钢钳子", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钢钳子, 36);

IDRegistry.genItemID("ft_钢小刀");
Item.createItem("ft_钢小刀","Steel Knife",
{name:"ft_钢小刀", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钢小刀, 40);


IDRegistry.genItemID("ft_金锤");
Item.createItem("ft_金锤","Gold Forging Hammer",
{name:"ft_金锤", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_金锤, 8);

IDRegistry.genItemID("ft_金钳子");
Item.createItem("ft_金钳子","Gold Pliers",
{name:"ft_金钳子", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_金钳子, 8);

IDRegistry.genItemID("ft_金小刀");
Item.createItem("ft_金小刀","Gold Knife",
{name:"ft_金小刀", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_金小刀, 7);


IDRegistry.genItemID("ft_钻石锤");
Item.createItem("ft_钻石锤","Diamond Forging Hammer",
{name:"ft_钻石锤", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钻石锤, 90);

IDRegistry.genItemID("ft_钻石钳子");
Item.createItem("ft_钻石钳子","Diamond Pliers",
{name:"ft_钻石钳子", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钻石钳子, 80);

IDRegistry.genItemID("ft_钻石小刀");
Item.createItem("ft_钻石小刀","Diamond Knife",
{name:"ft_钻石小刀", meta:   0  }, {stack: 1});
Item.setMaxDamage(ItemID.ft_钻石小刀, 100);




// file: 物品/方块.js

IDRegistry.genBlockID("um_铁矿砂"); 
Block.createBlock("um_铁矿砂", [
	{name: "Iron Gravel", texture: 
[["um_铁矿砂", 0], ["um_铁矿砂", 0], 
["um_铁矿砂", 0], ["um_铁矿砂", 0], 
["um_铁矿砂", 0], ["um_铁矿砂", 0]], inCreative: true}
]) ;

IDRegistry.genBlockID("um_金矿砂"); 
Block.createBlock("um_金矿砂", [
	{name: "Gold Gravel", texture: 
[["um_金矿砂", 0], ["um_金矿砂", 0], 
["um_金矿砂", 0], ["um_金矿砂", 0], 
["um_金矿砂", 0], ["um_金矿砂", 0]], inCreative: true}
]) ;
IDRegistry.genBlockID("um_铜矿砂"); 
Block.createBlock("um_铜矿砂", [
	{name: "Copper Gravel", texture: 
[["um_铜矿砂", 0], ["um_铜矿砂", 0], 
["um_铜矿砂", 0], ["um_铜矿砂", 0], 
["um_铜矿砂", 0], ["um_铜矿砂", 0]], inCreative: true}
]) ;





// file: 机器/锻造炉.js

IDRegistry.genBlockID("ft_锻造炉");
Block.createBlockWithRotation("ft_锻造炉", [
	{name: "Forging Furnace", texture:
[["ft_锻造炉", 2], ["ft_锻造炉", 0],
["ft_锻造炉", 2], ["ft_锻造炉", 1],
["ft_锻造炉", 2], ["ft_锻造炉", 2]],
inCreative: true}
]);

var dzlUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Forging Furnace"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 452, y: 150, bitmap: "没火", scale: 3.4},
		{type: "bitmap", x: 350, y: 75, bitmap: "温度计槽", scale: 6},
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"slot2": {type: "slot", x: 445, y: 212},
		"huo": {type: "scale", x: 452, y: 150,bitmap:"火",scale: 3.4,direction:1},
		"jindu2": {type: "scale", x: 350, y: 75,bitmap:"温度",scale: 6,direction:1},
		"slot3": {type: "slot", x: 630, y: 142,clicker: {
			
				onClick: function(position, container, tileEntity){
					
					
					
					
				},
				onLongClick: function(position, container, tileEntity){
					this.onClick(position, container, tileEntity);
				}
			
		
	}},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "26℃"}
	}

});

TileEntity.registerPrototype(BlockID.ft_锻造炉,
{
	defaultValues:
	{
		huo:0,
		wen:0,
		hot:0,
		jin:0
	},
	
	fire:function(id,wen,fire)
	{
		var st2=this.container.getSlot("slot2");
		
		if(
				st2.id==id&&
				st2.data==0&&
				this.data.huo<=0&&
				this.data.wen<wen
			){
				this.data.hot=fire;
				this.data.huo=fire;
				st2.count--;
			};
	},
	
	work:function(id1,id2,wen)
	{
		var st1=this.container.getSlot("slot1");
		var st3=this.container.getSlot("slot3");
		
		if(
			st1.id==id1&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64
		){
			this.data.jin++;
		};
		
		if(
			st1.id==id1&&
			(st3.id==0||st3.id==id2)&&
			this.data.wen>=wen&&
			st1.count>0&&
			st3.count<64&&
			this.data.jin>=230
		){
			st1.count--;
			st3.id=id2;
			st3.count++;
			this.data.jin=0;
		};
		
		
	},
	
	tick:function()
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		var st3=this.container.getSlot("slot3");
		this.container.setScale("jindu1", 
		this.data.jin/230);
		this.container.setScale("jindu2", 
		this.data.wen/3000);
		this.container.setScale("huo", 
		this.data.huo/this.data.hot);
		this.container.setText("text2",this.data.wen + 26 +"℃");
		
		if(
			this.data.huo>0
		){
			this.data.huo--;
			this.data.wen++;
		};

		if(
			this.data.huo<=0
		){
			this.data.hot=0;
		};


		if(
			this.data.huo<=0&&
			this.data.wen>26
		){
			this.data.wen-=1;
		};

		if(
			st1.count==0
		){
			st1.id=0;
		};
		
		if(
			st2.count==0
		){
			st2.id=0;
		};
		
		if(
			st3.count==0
		){
			st3.id=0;
		};
		
		if(
			this.data.wen>=3000
		){
			this.data.wen=3000;
		};
			
		this.fire(263,800,160);
		this.fire(173,1200,1440);
		this.fire(ItemID.ft_焦炭,3000,180);
		
		
		this.work(ItemID.ingotCopper,ItemID.ft_高温铜,2000);
		this.work(ItemID.ft_钢,ItemID.ft_高温钢,2500);
			
			
	},
	
	click:function(id, count, data)
		{
			var st3=this.container.getSlot("slot3");
			
			if(id==ItemID.ft_火钳&&
				st3.id!=0&&st3.count>0&&
				data<Item.getMaxDamage(id)
				){
					st3.count--;
					World.drop(this.x, this.y, this.z, st3.id, 1, 0)
					Player.setCarriedItem(ItemID.ft_火钳, 1, data+1);
					return true ;
  			  }
  
  		if(
  			id==ItemID.ft_火钳&&
  			data>=Item.getMaxDamage(ItemID.ft_火钳)
  		){
      		Player.setCarriedItem(0, 0, 0);
  		};
		},

	
	
	getGuiScreen: function()
		{
			return dzlUI;
		}
	
	
});




// file: 机器/压板机.js

IDRegistry.genBlockID("ft_压板机");
Block.createBlockWithRotation("ft_压板机", [
	{name: "Plate Compressors", texture:
[["ft_机器外壳", 0], ["ft_压板机", 0],
["ft_机器外壳", 0], ["ft_压板机", 1],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var ybjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Plate Compressors"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"slot1": {type: "slot", x: 445, y: 75},
		"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"}
	}

});

TileEntity.registerPrototype(BlockID.ft_压板机,
{
	defaultValues:
	{
		jin:0,
		fue:0
	},
	
	work:function(id,id2,co)
	{
		var st1=this.container.getSlot("slot1");
		var st2=this.container.getSlot("slot2");
		
		if(
			st1.id==id&&
			st1.count>=co&&
			(st2.id==id2||st2.id==0)&&
			st2.count<64&&
			this.data.fue>0
		){
			this.data.jin++;
			this.data.fue--;
		};
		
		if(
			st1.id==id&&
			st1.count>=co&&
			(st2.id==id2||st2.id==0)&&
			st2.count<64&&
			this.data.jin>=200
		){
			st1.count-=co;
			st2.id=id2;
			st2.count++;
			this.data.jin=0
		};
		
	},
		
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			this.container.setScale("jindu1", 
			this.data.jin/200);
			this.container.setScale("jindu2", 
			this.data.fue/1200);
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
				
				this.work(ItemID.ft_高温钢,ItemID.ft_钢板,1);
				this.work(ItemID.ft_高温铜,ItemID.ft_铜板,1);
				this.work(5,339,1);
			this.work(53,339,1);
			this.work(5,339,1);
			this.work(65,339,1);
			this.work(96,339,1);
			this.work(126,339,1);
			this.work(135,339,1);
			this.work(323,339,1);
			this.work(324,339,1);
			this.work(333,339,1);
			this.work(85,339,1);
			this.work(107,339,1);
		},

	getGuiScreen: function()
		{
			return ybjUI;
		},
		energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<1199
			){
				this.data.fue+=2;
				src.get(2);
			};
	}
	
	
});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_压板机,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_压板机, -1);




// file: 机器/机床.js

IDRegistry.genBlockID("ft_机床");
Block.createBlock("ft_机床", [
	{name: "Machine Tool<", texture:
[["ft_机器外壳", 0], ["ft_机床", 3],
["ft_机床", 1], ["ft_机床", 0],
["ft_机床", 2], ["ft_机床", 4]],
inCreative: true}
]);

var jcUI=new UI.StandartWindow({
standart: {
	header: {text: {text: "Machine Tool"}},
	inventory: {standart: true},
	background: {standart: true}},
	
drawing: [
		{type: "bitmap", x: 680, y: 216, bitmap: "进度条", scale: 4},
		{type: "bitmap", x: 467, y: 80, bitmap: "电量槽", scale: 4}
	],
	
elements: {
		"jindu1": {type: "scale", x: 680, y: 216, direction: 0, value: 0.5, bitmap: "进度条满", scale: 4},
		"jindu2": {type: "scale", x: 467, y: 80,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"text": {type: "text", x: 580, y: 80, width: 100, height: 30, text: "0 FuE"},
		"slot0": {type: "slot", x: 467, y: 146, size: 60},
		"slot1": {type: "slot", x: 537, y: 146, size: 60},
		"slot2": {type: "slot", x: 607, y: 146, size: 60},
		"slot3": {type: "slot", x: 467, y: 214, size: 60},
		"slot4": {type: "slot", x: 537, y: 214, size: 60},
		"slot5": {type: "slot", x: 607, y: 214, size: 60},
		"slot6": {type: "slot", x: 467, y: 283, size: 60},
		"slot7": {type: "slot", x: 537, y: 283, size: 60},
		"slot8": {type: "slot", x: 607, y: 283, size: 60},
		"slot11": {type: "slot", x: 870, y: 75},
		"slot14": {type: "slot", x: 870, y: 252},
		 "button": {type: "button", x: 700, y: 340, bitmap: "button", scale: 2, clicker: {
			onClick: function(container, tileEntity){
		var st14=container.getSlot("slot14");
		if(container.tileEntity.data.fue<500&&st14.id==ItemID.ft_摇柄){
			
			container.tileEntity.data.fue+=5;
			st14.data++;
			}}}},
		"resultSlot": {type: "slot", x: 788, y: 212, size: 60, clicker: {
			
				onClick: function(position, container, tileEntity){
					
				},
				onLongClick: function(position, container, tileEntity){
					this.onClick(position, container, tileEntity);
				}
			}
		}
	}


});

TileEntity.registerPrototype(BlockID.ft_机床,
{
	defaultValues:
	{
		jin:0,
		fue:0
	},
	
	work:function(q,w,e,r,t,y,u,i,o,p,a,qq,ww,ee,rr,tt,yy,uu,ii,oo)
		{
			var st1=this.container.getSlot("slot0");
			var st2=this.container.getSlot("slot1");
			var st3=this.container.getSlot("slot2");
			var st4=this.container.getSlot("slot3");
			var st5=this.container.getSlot("slot4");
			var st6=this.container.getSlot("slot5");
			var st7=this.container.getSlot("slot6");
			var st8=this.container.getSlot("slot7");
			var st9=this.container.getSlot("slot8");
			var st10=this.container.getSlot("resultSlot");
			
			var ss1=this.container.getSlot("slot11");
			
			if(
				st1.id==q&&
				st2.id==w&&
				st3.id==e&&st4.id==r&&st5.id==t&&st6.id==y&&st7.id==u&&st8.id==i&&st9.id==o&&
				(st10.id==0||st10.id==p)&&
				ss1.id==a&&
				st1.count>=qq&&st2.count>=ww&&
				st3.count>=ee&&st4.count>=rr&&
				st5.count>=tt&&st6.count>=yy&&
				st7.count>=uu&&st8.count>=ii&&
				st9.count>=oo&&this.data.jin<=300&&this.data.fue>0&&World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_机器外壳
			){
				this.container.setSlot("resultSlot", p,1, 0);
				this.data.jin++;
				this.data.fue--;
			}
			
		},
	
	
	tick:function()
	{
		if(this.container.getSlot("slot14").data>=Item.getMaxDamage(this.container.getSlot("slot14").id)){
			this.container.getSlot("slot14").id=0;
			}
		this.work(
						ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,
						ItemID.ft_钢板,0,ItemID.ft_钢板,
						ItemID.ft_螺丝,ItemID.ft_钢板,ItemID.ft_螺丝,
						BlockID.ft_大型机器外壳,/*成品*/
						ItemID.ft_螺丝刀,/*tool*/
						1,1,1,	1,0,1,	1,1,1
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,325,ItemID.ft_发电机,
						0,61,0,
						BlockID.ft_燃煤发电机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	0,1,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,325,ItemID.ft_电机,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_水泵,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	0,1,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,ItemID.ft_线圈,ItemID.ft_电机,
						0,0,0,
						BlockID.ft_磁化机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	0,0,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,BlockID.ft_燃煤发电机,ItemID.ft_发电机,
						BlockID.ft_锅炉,BlockID.ft_锅炉,BlockID.ft_锅炉,
						BlockID.ft_液体燃料发电机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	1,1,1
						);
						this.work(
						334,334,334,
						0,ItemID.ft_钢板,0,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_蛋糕机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	0,1,0,	0,1,0
						);
						this.work(
						0,0,0,
						ItemID.ft_蓄电池,ItemID.ft_钢板,0,
						ItemID.ft_电阻器,ItemID.ft_电阻器,ItemID.ft_电阻器,
						BlockID.ft_烤箱,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,0,	1,1,1
						);
						this.work(
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						ItemID.ft_蓄电池,ItemID.ft_蓄电池,ItemID.ft_蓄电池,
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						BlockID.ft_电池箱,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	1,1,1
						);
						this.work(
						0,0,0,
						ItemID.ft_电机,ItemID.ft_蓄电池,ItemID.ft_电机,
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						BlockID.ft_压板机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						0,0,0,	1,1,1,	1,1,1
						);
						this.work(
						ItemID.ft_电机,ItemID.ft_蓄电池,ItemID.ft_电机,
						1,1,1,
						ItemID.ft_钢板,ItemID.ft_钢板,ItemID.ft_钢板,
						BlockID.ft_研磨机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	1,1,1
						);
						this.work(
						ItemID.ft_电机,ItemID.ft_蓄电池,ItemID.ft_电机,
						ItemID.ft_钢板,ItemID.ft_蓄电池,ItemID.ft_钢板,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_粉碎机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	0,1,0
						);
						this.work(
						ItemID.ft_蓄电池,ItemID.ft_电机,0,
						ItemID.ft_钢板,ItemID.ft_钢棒,ItemID.ft_钢板,
						0,BlockID.ft_锅炉,0,
						BlockID.ft_洗矿机,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,0,	1,1,1,	0,1,0
						);
						this.work(
						ItemID.ft_电阻器,ItemID.ft_电阻器,ItemID.ft_电阻器,
						ItemID.ft_电阻器,BlockID.ft_高炉,ItemID.ft_电阻器,
						ItemID.ft_蓄电池,ItemID.ft_蓄电池,ItemID.ft_蓄电池,
						BlockID.ft_工业炉,/*成品*/
						ItemID.ft_扳手,/*tool*/
						1,1,1,	1,1,1,	1,1,1
						);
		this.container.setText("text",this.data.fue + " FuE");
			this.container.setScale("jindu1", 
			this.data.jin/300);
			this.container.setScale("jindu2", 
			this.data.fue/500);
			var st1=this.container.getSlot("slot0");
			var st2=this.container.getSlot("slot1");
			var st3=this.container.getSlot("slot2");
			var st4=this.container.getSlot("slot3");
			var st5=this.container.getSlot("slot4");
			var st6=this.container.getSlot("slot5");
			var st7=this.container.getSlot("slot6");
			var st8=this.container.getSlot("slot7");
			var st9=this.container.getSlot("slot8");
			var st10=this.container.getSlot("resultSlot");
			
			var ss1=this.container.getSlot("slot11");
			
			
						
			
			if(st1.count==0){
		st1.id=0;
	}
	
if(st2.count==0){
		st2.id=0;
	}
	
if(st3.count==0){
		st3.id=0;
	}
	
if(st4.count==0){
		st4.id=0;
	}
	
if(st5.count==0){
		st5.id=0;
	}
	
if(st6.count==0){
		st6.id=0;
	}
	
if(st7.count==0){
		st7.id=0;
	}
if(st8.count==0){
		st8.id=0;
	}
if(st9.count==0){
		st9.id=0;
	};

		if(ss1.data>=Item.getMaxDamage(ss1.id))
		{ss1.id=0};
		

			
			if(
				this.data.jin>=300&&
				st10.id!=0&&
				World.getBlock(this.x,this.y+1,this.z).id==BlockID.ft_机器外壳
			){
				ss1.data++;
						if(st1.count>0)
						{st1.count-=1;}
						if(st2.count>0)
						{st2.count-=1;}
						if(st3.count>0)
						{st3.count-=1;}
						if(st4.count>0)
						{st4.count-=1;}
						if(st5.count>0)
						{st5.count-=1;}
						if(st6.count>0)
						{st6.count-=1;}
						if(st7.count>0)
						{st7.count-=1;}
						if(st8.count>0)
						{st8.count-=1;}
						if(st9.count>0)
						{st9.count-=1;}
				this.data.jin=0;
				World.setBlock(this.x,this.y+1,this.z,st10.id);
				this.container.setSlot("resultSlot", 0, 0, 0);
			};
		
	},
	
	getGuiScreen: function()
		{
			return jcUI;
		},
		energyTick: function(type, src){
			
			if(
			src.amount()>1&&
			this.data.fue<500
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_机床, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_机床,FuE);




// file: 机器/研磨机.js

IDRegistry.genBlockID("ft_研磨机");
Block.createBlock("ft_研磨机", [
	{name: "Mill", texture:
[["ft_机器外壳", 0], ["ft_研磨机", 0],
["ft_机器外壳", 1], ["ft_机器外壳", 0],
["ft_机器外壳", 2], ["ft_机器外壳", 1]],
inCreative: true}
]);

var ymjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Mill"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 530, y: 146, bitmap: "粉碎", scale: 4},
{type: "bitmap", x: 441, y: 212, bitmap: "电量槽", scale: 4}
],

elements: {
"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "粉碎满", scale: 4},
"slot1": {type: "slot", x: 445, y: 75},
"jindu2": {type: "scale", x: 441, y: 212,bitmap:"电量",scale: 4,overlay:"电量槽外"},
"slot2": {type: "slot", x: 630, y: 142},
"slot3": {type: "slot", x: 630, y: 202},
"text2": {type: "text", x: 550, y: 280, width: 100, height: 30, text: "0 FuE"},
"slot4": {type: "slot", x: 830, y: 42}
}

});

TileEntity.registerPrototype(BlockID.ft_研磨机,
{
	defaultValues:
	{
		jin:0,
		jian:0,
		jia:0,
		fue:0
	},
	
	moPan:function()
		{
			var st3=this.container.getSlot("slot4");
			
			if(st3.id==ItemID.ft_钢磨盘)
				{
					this.data.jian=1;
					this.data.jia=1;
				};
				
			if(st3.id==ItemID.ft_金磨盘)
				{
					this.data.jian=1;
					this.data.jia=2;
				};
				
			if(st3.id==ItemID.ft_钻石磨盘)
				{
					this.data.jian=0.5;
					this.data.jia=2;
				};
			
		},
	
	work:function(id,id2,id3,lz,count2,count3,data1,data2,data3)
		{
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			var st4=this.container.getSlot("slot4");
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				(st3.id==0||st3.id==id3)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				st3.count<64&&
				(st4.id==ItemID.ft_钢磨盘||
				 st4.id==ItemID.ft_金磨盘||
				 st4.id==ItemID.ft_钻石磨盘)
			){
				Particles.addParticle(this.x+0.5, this.y+1, this.z+0.5, 16, 0, 0, 0, lz);
				this.data.jin+=this.data.jia;
				this.data.fue-=this.data.jian;
				st4.data++;
			};
			
			if(
				st1.id==id&&st1.data==data1&&
				(st2.id==0||st2.id==id2)&&
				(st3.id==0||st3.id==id3)&&
				this.data.fue>this.data.jian&&
				st1.count>0&&
				st2.count<64&&
				st3.count<64&&
				(st4.id==ItemID.ft_钢磨盘||
				 st4.id==ItemID.ft_金磨盘||
				 st4.id==ItemID.ft_钻石磨盘)&&
				this.data.jin>=240
			){
				this.data.jin=0;
				st1.count--;
				st2.id=id2;
				st2.data=data2;
				st2.count+=count2;
				st3.id=id3;
				st3.data=data3;
				if(id3!=0)
				{st3.count+=count3;}
			};
		},
	
	
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			var st4=this.container.getSlot("slot4");
			this.container.setScale("jindu1", 
			this.data.jin/240);
			this.container.setScale("jindu2", 
			this.data.fue/2500);
			
			this.moPan();
			
			if(st1.count==0)
				{
					st1.id=0;
					this.data.jin=0;
				};
			if(st4.data>=Item.getMaxDamage(st4.id))
			{st4.id=0};
			
			this.work(13,12,0,13,1,0,0,0,0);
			this.work(338,353,0,334,1,0,0,0,0);
			this.work(352,351,0,352,3,0,0,15,0);
			this.work(37,351,0,37,1,0,0,11,0);
			this.work(38,351,0,38,1,0,0,1,0);
			this.work(38,351,0,38,1,0,1,12,0);
			this.work(38,351,0,38,1,0,2,5,0);
			this.work(38,351,0,38,1,0,3,7,0);
			this.work(38,351,0,38,1,0,4,1,0);
			this.work(38,351,0,38,1,0,5,14,0);
			this.work(38,351,0,38,1,0,6,7,0);
			this.work(38,351,0,38,1,0,7,9,0);
			this.work(38,351,351,38,1,1,8,7,11);
			this.work(81,351,0,81,1,0,0,2,0);
			this.work(106,351,0,106,1,0,0,2,0);
			this.work(111,351,0,111,1,0,0,2,0);
		},

	getGuiScreen: function()
	{
			return ymjUI;
	},
	energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<1000
			){
				this.data.fue++;
				src.get(1);
			};
	}

});
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_研磨机,FuE);
ICRender.getGroup("ic-wire").add(BlockID.ft_研磨机, -1);




// file: 机器/蛋糕机.js

IDRegistry.genBlockID("ft_蛋糕机");
Block.createBlock("ft_蛋糕机", [
	{name: "Cake Machine", texture:
[["ft_机器外壳", 2], ["ft_蛋糕机", 0],
["ft_蛋糕机", 1], ["ft_蛋糕机", 2],
["ft_蛋糕机", 2], ["ft_蛋糕机", 1]],
inCreative: true}
]);

var dgjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Cake Machine"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
{type: "bitmap", x: 550, y: 140, bitmap: "液体槽", scale: 4},
{type: "bitmap", x: 400, y: 220, bitmap: "没火", scale: 4},
{type: "bitmap", x: 450, y: 150, bitmap: "进度条up", scale: 4},
],
elements: {
"slot1": {type: "slot", x: 650, y: 140},
"slot2": {type: "slot", x: 650, y: 200},
"slot3": {type: "slot", x: 650, y: 260},
"jindu1": {type: "scale", x: 550, y: 140,bitmap:"废气",scale: 4,direction:1,overlay:"标记"},
"jindu2": {type: "scale", x: 400, y: 220,bitmap:"火",scale: 4,direction:1},
"jindu3": {type: "scale", x: 450, y: 150,bitmap:"进度条满up",scale: 4,direction:1}
}

});

TileEntity.registerPrototype(BlockID.ft_蛋糕机,
{
	defaultValues:
	{
		huo:0,
		work:false,
		jin:0
	},
	
	tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
			var st3=this.container.getSlot("slot3");
			this.container.setScale("jindu2", 
			this.data.huo/80);
			this.container.setScale("jindu3", 
			this.data.jin/40);
			this.liquidStorage.updateUiScale("jindu1", "milk");
			
			if(st1.count==0)
				{
					st1.id=0;
				};
				if(st2.count==0)
				{
					st2.id=0;
				};
				if(st3.count==0)
				{
					st3.id=0;
				};
				if(this.data.huo<=80){
				this.data.work=true
}else{this.data.work=false};

				
			if(
			World.getBlock(this.x,this.y+1,this.z).id==0&&
			this.liquidStorage.getAmount("milk")>=3&&
			st1.id==296&&
			st2.id==353&&
			st3.id==344&&
			st1.count>=3&&
			st2.count>=2&&
			st3.count>=1&&
			this.data.huo>=0
			){this.data.jin++;
			this.data.huo--;
			if(this.data.jin>=40){
				this.data.jin=0;
				this.liquidStorage.getLiquid("milk", 3);
				st1.count-=3;
				st2.count-=2;
				st3.count--;
				World.setBlock(this.x,this.y+1,this.z,92);
				}
			}else{this.data.jin=0
			};
			
			
		},

	init: function()
		{
			this.liquidStorage.setLimit("milk", 32);
		},

	click:function(id, count, data)
		{
			if(id==325&&
				data==1&&
				this.liquidStorage.getAmount("milk")<=32
				){
					Player.setCarriedItem(325, 1, 0);
					this.liquidStorage.addLiquid("milk", 1);
					return true ;
  			  }
		},

	getGuiScreen: function()
		{
			return dgjUI;
		}

});





// file: 机器/磁化机.js

IDRegistry.genBlockID("ft_磁化机");
Block.createBlock("ft_磁化机", [
	{name: "Magnetizer", texture:
[["ft_机器外壳", 0], ["ft_磁化机", 0],
["ft_磁化机", 1], ["ft_磁化机", 2],
["ft_磁化机", 1], ["ft_磁化机", 2]],
inCreative: true}
]);

var chjUI=new UI.StandartWindow({
standart: {
header: {text: {text: "Magnetizer"}},
inventory: {standart: true},
background: {standart: true}},

drawing: [
		{type: "bitmap", x: 530, y: 146, bitmap: "磁化", scale: 4},
		{type: "bitmap", x: 550, y: 235, bitmap: "电量槽", scale: 4}
	],
	
	elements: {
		"jindu1": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "磁化满", scale: 4},
		"slot1": {type: "slot", x: 460, y: 142},
		"jindu2": {type: "scale", x: 550, y: 235,bitmap:"电量",scale: 4,overlay:"电量槽外"},
		"slot2": {type: "slot", x: 630, y: 142},
		"text2": {type: "text", x: 550, y: 300, width: 100, height: 30, text: "0 FuE"}
	}

});
TileEntity.registerPrototype(BlockID.ft_磁化机,
{
	defaultValues:
	{
		jin:0,
		fue:0
	},
	work:function(x,y){
		var st1 = this.container.getSlot("slot1");
			var st2 = this.container.getSlot("slot2");
			if(st1.id==x&&st1.count>0&&(st2.id==y||st2.id==0)&&this.data.fue>0&&this.data.jin<400){
				this.data.fue--;
				this.data.jin++;
				};
				if(this.data.jin>=400&&st1.id==x&&st1.count>0&&(st2.id==y||st2.id==0)&&this.data.fue>0){
					st2.id=y;
					st2.count++;
					st1.count--;
					this.data.jin=0;
					this.data.fue--;
					};
					},
					tick:function()
		{
			this.container.setText("text2",this.data.fue + " FuE");
			var st1=this.container.getSlot("slot1");
			var st2=this.container.getSlot("slot2");
	this.container.setScale("jindu1", 
			this.data.jin/400);
			this.container.setScale("jindu2", 
			this.data.fue/600);
			this.work(ItemID.ft_钢,ItemID.ft_磁铁锭);
			this.work(ItemID.ft_磁铁锭,265);
			if(st1.count<=0)
				{
					st1.id=0;
					this.data.jin=0;
				};
				if(st2.count<=0){
					st2.id==0;
					};
					},
					getGuiScreen: function()
		{
			return chjUI;
		},
		energyTick: function(type, src){
			if(
			src.amount()>1&&
			this.data.fue<600
			){
				this.data.fue++;
				src.get(1);
			};
	}
	
	
});
ICRender.getGroup("ic-wire").add(BlockID.ft_磁化机, -1);
EnergyTileRegistry.addEnergyTypeForId(BlockID.ft_磁化机,FuE);




