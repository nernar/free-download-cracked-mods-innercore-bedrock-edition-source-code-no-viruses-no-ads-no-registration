/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 21
*/



// file: lib.js

IMPORT("ToolType");




// file: ресурсы/для_ножей.js

var ICTool = {
	wrenchData: {},
	
	registerWrench: function(id, chance, energyOnUse){
		this.wrenchData[id] = {chance: chance, energy: energyOnUse}
	},
	
	getWrenchData: function(id){
		return this.wrenchData[id];
	},
	
	isValidWrench: function(id, data, damage){
		var wrench = this.getWrenchData(id);
		if(wrench && (!wrench.energy || data + wrench.energy * damage <= Item.getMaxDamage(id))){
			return true;
		}
		return false;
	},
	
	useWrench: function(id, data, damage){
		var wrench = this.getWrenchData(id);
		if(!wrench.energy){
			ToolAPI.breakCarriedTool(damage);
		}else{
			this.useElectricItem({id: id, data: data}, wrench.energy * damage);
		}
		SoundAPI.playSound("Tools/Wrench.ogg");
	},
	
	addRecipe: function(result, data, tool){
		data.push({id: tool, data: -1});
		Recipes.addShapeless(result, data, function(api, field, result){
			for (var i in field){
				if (field[i].id == tool){
					field[i].data++;
					if (field[i].data >= Item.getMaxDamage(tool)){
						field[i].id = field[i].count = field[i].data = 0;
					}
				}
				else {
					api.decreaseFieldSlot(i);
				}
			}
		});
	},
	
	dischargeItem: function(item, consume){
		var energy = 0;
		var armor = Player.getArmorSlot(1);
		var armorChargeData = ChargeItemRegistry.getItemData(armor.id);
		var itemChargeLevel = ChargeItemRegistry.getItemData(item.id).level;
		if(armorChargeData && armorChargeData.level >= itemChargeLevel){
			energy = ChargeItemRegistry.getEnergyFrom(armor, "Eu", consume, consume, 100);
			consume -= energy;
		}
		if(item.data + consume <= Item.getMaxDamage(item.id)){
			if(energy > 0){
				Player.setArmorSlot(1, armor.id, 1, armor.data, armor.extra);
			}
			item.data += consume;
			return true;
		}
		return false;
	},
	
	useElectricItem: function(item, consume){
		if(this.dischargeItem(item, consume)){
			Player.setCarriedItem(item.id, 1, item.data, item.extra);
			return true;
		}
		return false;
	},
	
	registerElectricHoe: function(nameID){
		Item.registerUseFunction(nameID, function(coords, item, block){
			if((block.id==2 || block.id==3 || block.id==110 || block.id==243) && coords.side==1 && ICTool.useElectricItem(item, 50)){ 
				World.setBlock(coords.x, coords.y, coords.z, 60);
				World.playSoundAtEntity(Player.get(), "step.grass", 0.5, 0.75);
			}
		});
	},
	
	registerElectricTreerap: function(nameID){
		Item.registerUseFunction(nameID, function(coords, item, block){
			if(block.id == BlockID.rubberTreeLogLatex && block.data - 2 == coords.side && ICTool.useElectricItem(item, 50)){
				SoundAPI.playSound("Tools/Treetap.ogg");
				World.setBlock(coords.x, coords.y, coords.z, BlockID.rubberTreeLogLatex, block.data - 4);
				Entity.setVelocity(
					World.drop(
						coords.relative.x + 0.5,
						coords.relative.y + 0.5,
						coords.relative.z + 0.5,
						ItemID.latex, 1 + parseInt(Math.random() * 3), 0
					),
					(coords.relative.x - coords.x) * 0.25,
					(coords.relative.y - coords.y) * 0.25,
					(coords.relative.z - coords.z) * 0.25
				);
			}
		});
	}
}




// file: инструменты/материалы.js

ToolAPI.addToolMaterial("palka_volokno", {
    durability: 68, 
    level: 1, 
    efficiency: 2, 
    damage: 2, 
    enchantability: 1
});

ToolAPI.addToolMaterial("palka_loza", {
    durability: 118, 
    level: 1, 
    efficiency: 2, 
    damage: 2, 
    enchantability: 1
});

ToolAPI.addToolMaterial("palka_kozha", {
    durability: 168, 
    level: 1, 
    efficiency: 2, 
    damage: 2, 
    enchantability: 1
});

ToolAPI.addToolMaterial("kost_volokno", {
    durability: 68, 
    level: 2, 
    efficiency: 3, 
    damage: 3, 
    enchantability: 2
});

ToolAPI.addToolMaterial("kost_loza", {
    durability: 118, 
    level: 2, 
    efficiency: 3, 
    damage: 3, 
    enchantability: 2
});

ToolAPI.addToolMaterial("kost_kozha", {
    durability: 168, 
    level: 2, 
    efficiency: 3, 
    damage: 3, 
    enchantability: 2
});

ToolAPI.addToolMaterial("ost", {
    durability: 48, 
    level: 1, 
    efficiency: 1, 
    damage: 0.3, 
    enchantability: 1
});




// file: ресурсы/предметы.js

IDRegistry.genItemID("verevka_iz_volokna");
Item.createItem("verevka_iz_volokna", "Веревка Из Волокна", {name: "verevka_iz_volokna"});

IDRegistry.genItemID("verevka_iz_lozy");
Item.createItem("verevka_iz_lozy", "Веревка Из Лозы", {name: "verevka_iz_lozy"});

IDRegistry.genItemID("verevka_iz_kozhi");
Item.createItem("verevka_iz_kozhi", "Веревка Из Кожи", {name: "verevka_iz_kozhi"});

IDRegistry.genItemID("kusok_kremnya");
Item.createItem("kusok_kremnya", "Кусок Кремня", {name: "kusok_kremnya"});

IDRegistry.genItemID("oskolok_kremnya");
Item.createItem("oskolok_kremnya", "Осколок Кремня", {name: "oskolok_kremnya"});

IDRegistry.genItemID("ostryi_kusok_kremnya");
Item.createItem("ostryi_kusok_kremnya", "Острый Кусок Кремня", {name: "ostryi_kusok_kremnya"});

IDRegistry.genItemID("kost_igla");
Item.createItem("kost_igla", "Острая Кость", {name: "kost_igla"}, {stack:1});

IDRegistry.genItemID("rast_volokno");
Item.createItem("rast_volokno", "Растительное Волокно", {name: "rast_volokno"});




// file: инструменты/предметы/палки/волокно.js

IDRegistry.genItemID("nozh_palka_volokno");
Item.createItem("nozh_palka_volokno", "Ножик Из Палки И Волокна", {name: "nozh_palka_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["nozh_palka_volokno"], "palka_volokno", ToolType.sword);



IDRegistry.genItemID("topor_palka_volokno");
Item.createItem("topor_palka_volokno", "Топорик Из Палки И Волокна", {name: "topor_palka_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["topor_palka_volokno"], "palka_volokno", ToolType.axe);


IDRegistry.genItemID("kirka_palka_volokno");
Item.createItem("kirka_palka_volokno", "Кирка Из Палки И Волокна", {name: "kirka_palka_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["kirka_palka_volokno"], "palka_volokno", ToolType.pickaxe);


IDRegistry.genItemID("lopata_palka_volokno");
Item.createItem("lopata_palka_volokno", "Лопатка Из Палки И Волокна", {name: "lopata_palka_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["lopata_palka_volokno"], "palka_volokno", ToolType.shovel);


IDRegistry.genItemID("motyga_palka_volokno");
Item.createItem("motyga_palka_volokno", "Мотыга Из Палки И Волокна", {name: "motyga_palka_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["motyga_palka_volokno"], "palka_volokno", ToolType.hoe);




// file: инструменты/предметы/палки/лоза.js

IDRegistry.genItemID("nozh_palka_loza");
Item.createItem("nozh_palka_loza", "Ножик Из Палки И Лозы", {name: "nozh_palka_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["nozh_palka_loza"], "palka_loza", ToolType.sword);


IDRegistry.genItemID("topor_palka_loza");
Item.createItem("topor_palka_loza", "Топорик Из Палки И Лозы", {name: "topor_palka_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["topor_palka_loza"], "palka_loza", ToolType.axe);


IDRegistry.genItemID("kirka_palka_loza");
Item.createItem("kirka_palka_loza", "Кирка Из Палки И Лозы", {name: "kirka_palka_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["kirka_palka_loza"], "palka_loza", ToolType.pickaxe);


IDRegistry.genItemID("lopata_palka_loza");
Item.createItem("lopata_palka_loza", "Лопатка Из Палки И Лозы", {name: "lopata_palka_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["lopata_palka_loza"], "palka_loza", ToolType.shovel);


IDRegistry.genItemID("motyga_palka_loza");
Item.createItem("motyga_palka_loza", "Мотыга Из Палки И Лозы", {name: "motyga_palka_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["motyga_palka_loza"], "palka_loza", ToolType.hoe);




// file: инструменты/предметы/палки/кожа.js

IDRegistry.genItemID("nozh_palka_kozha");
Item.createItem("nozh_palka_kozha", "Ножик Из Палки И Кожи", {name: "nozh_palka_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["nozh_palka_kozha"], "palka_kozha", ToolType.sword);


IDRegistry.genItemID("topor_palka_kozha");
Item.createItem("topor_palka_kozha", "Топорик Из Палки И Кожи", {name: "topor_palka_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["topor_palka_kozha"], "palka_kozha", ToolType.axe);


IDRegistry.genItemID("kirka_palka_kozha");
Item.createItem("kirka_palka_kozha", "Кирка Из Палки И Кожи", {name: "kirka_palka_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["kirka_palka_kozha"], "palka_kozha", ToolType.pickaxe);


IDRegistry.genItemID("lopata_palka_kozha");
Item.createItem("lopata_palka_kozha", "Лопатка Из Палки И Кожи", {name: "lopata_palka_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["lopata_palka_kozha"], "palka_kozha", ToolType.shovel);


IDRegistry.genItemID("motyga_palka_kozha");
Item.createItem("motyga_palka_kozha", "Мотыга Из Палки И Кожи", {name: "motyga_palka_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["motyga_palka_volokno"], "palka_kozha", ToolType.hoe);




// file: инструменты/предметы/кости/волокно.js

IDRegistry.genItemID("nozh_kost_volokno");
Item.createItem("nozh_kost_volokno", "Ножик Из Кости И Волокна", {name: "nozh_kost_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["nozh_kost_volokno"], "kost_volokno", ToolType.sword);


IDRegistry.genItemID("topor_kost_volokno");
Item.createItem("topor_kost_volokno", "Топорик Из Кости И Волокна", {name: "topor_kost_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["topor_kost_volokno"], "kost_volokno", ToolType.axe);


IDRegistry.genItemID("kirka_kost_volokno");
Item.createItem("kirka_kost_volokno", "Кирка Из Кости И Волокна", {name: "kirka_kost_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["kirka_kost_volokno"], "kost_volokno", ToolType.pickaxe);


IDRegistry.genItemID("lopata_kost_volokno");
Item.createItem("lopata_kost_volokno", "Лопатка Из Кости И Волокна", {name: "lopata_kost_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["lopata_kost_volokno"], "kost_volokno", ToolType.shovel);


IDRegistry.genItemID("motyga_kost_volokno");
Item.createItem("motyga_kost_volokno", "Мотыга Из Кости И Волокна", {name: "motyga_kost_volokno", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["motyga_palka_volokno"], "kost_volokno", ToolType.hoe);




// file: инструменты/предметы/кости/лоза.js

IDRegistry.genItemID("nozh_kost_loza");
Item.createItem("nozh_kost_loza", "Ножик Из Кости И Лозы", {name: "nozh_kost_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["nozh_kost_loza"], "kost_loza", ToolType.sword);


IDRegistry.genItemID("topor_kost_loza");
Item.createItem("topor_kost_loza", "Топорик Из Кости И Лозы", {name: "topor_kost_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["topor_kost_loza"], "kost_loza", ToolType.axe);


IDRegistry.genItemID("kirka_kost_loza");
Item.createItem("kirka_kost_loza", "Кирка Из Кости И Лозы", {name: "kirka_kost_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["kirka_kost_loza"], "kost_loza", ToolType.pickaxe);


IDRegistry.genItemID("lopata_kost_loza");
Item.createItem("lopata_kost_loza", "Лопатка Из Кости И Лозы", {name: "lopata_kost_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["lopata_kost_loza"], "kost_loza", ToolType.shovel);


IDRegistry.genItemID("motyga_kost_loza");
Item.createItem("motyga_kost_loza", "Мотыга Из Кости И Лозы", {name: "motyga_kost_loza", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["motyga_kost_loza"], "kost_loza", ToolType.hoe);




// file: инструменты/предметы/кости/кожа.js

IDRegistry.genItemID("nozh_kost_kozha");
Item.createItem("nozh_kost_kozha", "Ножик Из Кости И Кожи", {name: "nozh_kost_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["nozh_kost_kozha"], "kost_kozha", ToolType.sword);


IDRegistry.genItemID("topor_kost_kozha");
Item.createItem("topor_kost_kozha", "Топорик Из Кости И Кожи", {name: "topor_kost_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["topor_kost_kozha"], "kost_kozha", ToolType.axe);


IDRegistry.genItemID("kirka_kost_kozha");
Item.createItem("kirka_kost_kozha", "Кирка Из Кости И Кожи", {name: "kirka_kost_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["kirka_kost_kozha"], "kost_kozha", ToolType.pickaxe);


IDRegistry.genItemID("lopata_kost_kozha");
Item.createItem("lopata_kost_kozha", "Лопатка Из Кости И Кожи", {name: "lopata_kost_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["lopata_kost_kozha"], "kost_kozha", ToolType.shovel);


IDRegistry.genItemID("motyga_kost_kozha");
Item.createItem("motyga_kost_kozha", "Мотыга Из Кости И Кожи", {name: "motyga_kost_kozha", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["motyga_kost_kozha"], "kost_kozha", ToolType.hoe);




// file: инструменты/предметы/остальное.js

IDRegistry.genItemID("dubin");
Item.createItem("dubin", "Деревянная Дубинка", {name: "dubin", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID["dubin"], "ost", ToolType.sword);
ToolAPI.setTool(ItemID["kost_igla"], "ost", ToolType.sword);

Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 0, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 1, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 2, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 3, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 4, 'a', 280, 0]
);
Recipes.addShaped({id: ItemID.dubin, count: 1, data: 0}, 
	["x", "x", "a"], 
	['x', 5, 5, 'a', 280, 0]
);




// file: удаление_крафтов.js

Recipes.deleteRecipe({id: 268, count: 1, data: 0});
Recipes.deleteRecipe({id: 269, count: 1, data: 0});
Recipes.deleteRecipe({id: 270, count: 1, data: 0});
Recipes.deleteRecipe({id: 271, count: 1, data: 0});
Recipes.deleteRecipe({id: 272, count: 1, data: 0});
Recipes.deleteRecipe({id: 273, count: 1, data: 0});
Recipes.deleteRecipe({id: 274, count: 1, data: 0});
Recipes.deleteRecipe({id: 275, count: 1, data: 0});
Recipes.deleteRecipe({id: 290, count: 1, data: 0});
Recipes.deleteRecipe({id: 291, count: 1, data: 0});




// file: ресурсы/крафты.js



Recipes.addShapeless(
	{id: ItemID.verevka_iz_volokna, count: 1, data: 0},
	
	[{id: ItemID.rast_volokno, data: 0}, {id: ItemID.rast_volokno, data: 0}, {id: ItemID.rast_volokno, data: 0}]
);




Callback.addCallback("PreLoaded", function(){
  var material = [ItemID.nozh_palka_volokno, 
ItemID.nozh_palka_kozha,
ItemID.nozh_palka_loza,
ItemID.nozh_kost_volokno,
ItemID.nozh_kost_loza,
ItemID.nozh_kost_kozha];  
    
for(var i in material){
	ICTool.addRecipe({id: ItemID.verevka_iz_kozhi, count: 3, data: 0}, [{id: 334, data: 0}], material[i]);
    ICTool.addRecipe({id: ItemID.verevka_iz_lozy, count: 2, data: 0}, [{id: 106, data: 0}], material[i]);
	}})  ;





// file: ресурсы/дроп_из_блоков.js

Block.registerDropFunction(31, function(){
  if(Math.random()<=0.70){
    return [[ItemID.rast_volokno,1,0]]
  }
if(Math.random()<=0.60){
    return [[295,1,0]]
  }
});


Block.registerDropFunction(175, function(coords, blockID, data, level, enchant){
  if(level==0){
    if(data==2){
       if(Math.random()<=0.70) {
		    return [[ItemID.rast_volokno,1,0]];
       }
      
		  }
		} 
});

Block.registerDropFunction(18, function(coords, blockID, data, level, enchant){
  if(level==0){
       if(Math.random()<=0.05) {
		    return [[280,1,0]];
      
		  }
		} 
});

Block.registerDropFunction(161, function(coords, blockID, data, level, enchant){
  if(level==0){
       if(Math.random()<=0.05) {
		    return [[280,1,0]];
      
		  }
		} 
});

Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(block.id == 13){
		var item = Player.getCarriedItem();
		var enchant = ToolAPI.getEnchantExtraData(item.extra);
		var toolData = ToolAPI.getToolData(item.id);
		if (toolData && toolData.modifyEnchant) {
			toolData.modifyEnchant(enchant, item);
		}
		if(ToolAPI.getToolLevelViaBlock(item.id, block.id) == 0){
	World.destroyBlock(coords.x, coords.y, coords.z);
		Entity.damageEntity(Player.get(), 1)	
		}
	}
});


Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(block.id == 17 || block.id == 162){
		var item = Player.getCarriedItem();
		var enchant = ToolAPI.getEnchantExtraData(item.extra);
		var toolData = ToolAPI.getToolData(item.id);
		if (toolData && toolData.modifyEnchant) {
			toolData.modifyEnchant(enchant, item);
		}
		if(ToolAPI.getToolLevelViaBlock(item.id, block.id) == 0 ){
	World.destroyBlock(coords.x, coords.y, coords.z);
	Entity.damageEntity(Player.get(), 1)		
		}
	}
});

Block.registerDropFunction(13, function(coords, blockID, data, level, enchant){
  if(level==0){
       if(Math.random()<=0.60) {
		    return [[13,1,0]];
      
		  }
  if(Math.random()<=0.80) {
		    return [[318,1,0]];
      
		  }
		} 
});

Block.registerDropFunction(17, function(coords, blockID, data, level, enchant){
 		    return [[17,1,data]];
});

Block.registerDropFunction(162, function(coords, blockID, data, level, enchant){
 		    return [[161,1,data]];
});








// file: ресурсы/разбивание.js

Callback.addCallback("ItemUse", function (coords, item, block) {
    if(item.id == 318 && block.id == 1){
        
    if(Math.random()<=0.1)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.kusok_kremnya, 1, 0);
    Player.decreaseCarriedItem()};
    
    if(Math.random()<=0.065)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.ostryi_kusok_kremnya, 1, 0);
    Player.decreaseCarriedItem()};
    
    if(Math.random()<=0.08)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.oskolok_kremnya, 1, 0);
    Player.decreaseCarriedItem()};
}});


Callback.addCallback("ItemUse", function (coords, item, block) {
    if(item.id == 352 && block.id == 1){
        
    if(Math.random()<=0.1)
    {World.drop(coords.x+0.5, coords.y+1, coords.z+0.5, ItemID.kost_igla, 1, 0);
    Player.decreaseCarriedItem()};

}});




// file: инструменты/крафты/кирки.js

Recipes.addShaped({id: ItemID.kirka_palka_volokno, count: 1, data: 0},
	["kv", "pg", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 280, 0, 'g', ItemID.kusok_kremnya, 0]); 
	
Recipes.addShaped({id: ItemID.kirka_palka_loza, count: 1, data: 0},
	["kv", "pg", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 280, 0, 'g', ItemID.kusok_kremnya, 0]); 
	
Recipes.addShaped({id: ItemID.kirka_palka_kozha, count: 1, data: 0},
	["kv", "pg", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 280, 0, 'g', ItemID.kusok_kremnya, 0]); 
	
Recipes.addShaped({id: ItemID.kirka_kost_volokno, count: 1, data: 0},
	["kv", "pg", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 352, 0, 'g', ItemID.kusok_kremnya, 0]); 
	
Recipes.addShaped({id: ItemID.kirka_kost_loza, count: 1, data: 0},
	["kv", "pg", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 352, 0, 'g', ItemID.kusok_kremnya, 0]); 
	
Recipes.addShaped({id: ItemID.kirka_kost_kozha, count: 1, data: 0},
	["kv", "pg", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 352, 0, 'g', ItemID.kusok_kremnya, 0]); 




// file: инструменты/крафты/ножи.js

Recipes.addShaped({id: ItemID.nozh_palka_volokno, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.nozh_palka_kozha, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0, 'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.nozh_palka_loza, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0, 'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.nozh_kost_volokno, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0, 'p', 352, 0]); 
	
Recipes.addShaped({id: ItemID.nozh_kost_kozha, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0, 'p', 352, 0]); 
	
Recipes.addShaped({id: ItemID.nozh_kost_loza, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0, 'p', 352, 0]); 





// file: инструменты/крафты/топоры.js

Recipes.addShaped({id: ItemID.topor_palka_volokno, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.topor_palka_loza, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.topor_palka_kozha, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.topor_kost_volokno, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 352, 0]);
	
Recipes.addShaped({id: ItemID.topor_kost_loza, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 352, 0]);

Recipes.addShaped({id: ItemID.topor_kost_kozha, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.oskolok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 352, 0]); 	




// file: инструменты/крафты/мотыги.js

Recipes.addShaped({id: ItemID.motyga_palka_volokno, count: 1, data: 0},
	["kg", "vp", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 280, 0, 'g', ItemID.oskolok_kremnya, 0]);
	
Recipes.addShaped({id: ItemID.motyga_palka_loza, count: 1, data: 0},
	["kg", "vp", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 280, 0, 'g', ItemID.oskolok_kremnya, 0]);
	
Recipes.addShaped({id: ItemID.motyga_palka_kozha, count: 1, data: 0},
	["kg", "vp", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 280, 0, 'g', ItemID.oskolok_kremnya, 0]);
	
Recipes.addShaped({id: ItemID.motyga_kost_volokno, count: 1, data: 0},
	["kg", "vp", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 352, 0, 'g', ItemID.oskolok_kremnya, 0]);
	
Recipes.addShaped({id: ItemID.motyga_kost_loza, count: 1, data: 0},
	["kg", "vp", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 352, 0, 'g', ItemID.oskolok_kremnya, 0]);
	
Recipes.addShaped({id: ItemID.motyga_kost_kozha, count: 1, data: 0},
	["kg", "vp", ""],
	['k', ItemID.ostryi_kusok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 352, 0, 'g', ItemID.oskolok_kremnya, 0]);




// file: инструменты/крафты/лопаты.js

Recipes.addShaped({id: ItemID.lopata_palka_volokno, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.kusok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.lopata_palka_loza, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.kusok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.lopata_palka_kozha, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.kusok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 280, 0]); 
	
Recipes.addShaped({id: ItemID.lopata_kost_volokno, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.kusok_kremnya, 0, 'v', ItemID.verevka_iz_volokna, 0,'p', 352, 0]); 
	
Recipes.addShaped({id: ItemID.lopata_kost_loza, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.kusok_kremnya, 0, 'v', ItemID.verevka_iz_lozy, 0,'p', 352, 0]);
	
Recipes.addShaped({id: ItemID.lopata_kost_kozha, count: 1, data: 0},
	["kv", " p", ""],
	['k', ItemID.kusok_kremnya, 0, 'v', ItemID.verevka_iz_kozhi, 0,'p', 352, 0]); 




// file: функция_еды.js

Callback.addCallback("FoodEaten",function(heal, satRatio)
{
    var helmet = Player.getArmorSlot(0);
    var chest = Player.getArmorSlot(1);
    var legs = Player.getArmorSlot(2);
    var boots = Player.getArmorSlot(3);
    var pos = Player.getPosition();
    
if(Player.getCarriedItem().id==319) 
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}
if(Player.getCarriedItem().id==319) 
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}

if(Player.getCarriedItem().id==349, 0)
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}
if(Player.getCarriedItem().id==349, 1)
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}
if(Player.getCarriedItem().id==363)
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}
if(Player.getCarriedItem().id==423)
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}
if(Player.getCarriedItem().id==411)
{
Entity.addEffect(Player.get(), 19, 1, 20*10)
}
}); 




