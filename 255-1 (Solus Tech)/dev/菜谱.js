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