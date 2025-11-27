/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 36
*/



// file: header.js

//ProjectE by Toncho (c) 2018 do not distribute.

importLib("SoundAPI", "*");
importLib("ToolType", "*");

var fallVelocity = -0.0785;

var dropItem = ModAPI.requireGlobal("Level.dropItem");
World.getGameMode = ModAPI.requireGlobal("Level.getGameMode");

Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field){
			   if(field[i].id!=tool){
				    api.decreaseFieldSlot(i);
			   }
		  }
	 });
};

//friendly
var friendlyList = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27];

//evil
var evilList = [Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];

//all
var allMobs = [Native.EntityType.BAT, Native.EntityType.CHICKEN, Native.EntityType.COW, Native.EntityType.MUSHROOM_COW, Native.EntityType.OCELOT, Native.EntityType.PIG, Native.EntityType.RABBIT, Native.EntityType.SHEEP, Native.EntityType.SNOW_GOLEM, Native.EntityType.SQUID, Native.EntityType.VILLAGER, Native.EntityType.WOLF, 23, 24, 25, 26, 27, Native.EntityType.BLAZE, Native.EntityType.CAVE_SPIDER, Native.EntityType.CREEPER, Native.EntityType.ENDERMAN, Native.EntityType.GHAST, Native.EntityType.IRON_GOLEM, Native.EntityType.LAVA_SLIME, Native.EntityType.PIG_ZOMBIE, Native.EntityType.SILVERFISH, Native.EntityType.SKELETON, Native.EntityType.SLIME, Native.EntityType.SPIDER, Native.EntityType.ZOMBIE, Native.EntityType.ZOMBIE_VILLAGER, 45, 46, 47, 48, 49, 55];


ToolType.pickaxe = {
	 isWeapon: false,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["stone"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

ToolType.axe = {
	 isWeapon: false,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["wood"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

ToolType.shovel = {
	 isWeapon: false,
  	damage: 0,
	 baseDamage: 0,
	 blockTypes: ["dirt"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

ToolType.sword = {
	 isWeapon: true,
  	damage: 3,
	 baseDamage: 4,
	 blockTypes: ["fibre","plant"],
	 onDestroy: function(item){
    item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data=0;
  }
};

function rnd(min, max){
	 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choose(arr){
  let res = arr[rnd(0, arr.length)];
  if(res){
    return res;
  } return arr[0];
}

Armor.onHurt = function(armor, func){
  Callback.addCallback("EntityHurt", function(a, v, h){
    let slot = Entity.getArmorSlot(Player.get(), armor.slot);
    if(slot.id == armor.id){
      if(v == Player.get()) func(a, v, slot, h);
    }
  });
}

Armor.onTick = function(armor, func){
  Callback.addCallback("tick", function(){
    let slot = Entity.getArmorSlot(Player.get(), armor.slot);
    if(slot.id == armor.id){
      func(slot);
    }
  });
}

function SetDescription(id, string){
  Item.registerNameOverrideFunction(id, function(item, name){
    return name+"\n"+string;
  });
}


Translation.addTranslation("Philosopher's stone", {ru: "Философский камень"});
Translation.addTranslation("Alchemical fuel", {ru: "Алхимический уголь"});
Translation.addTranslation("Mobius fuel", {ru: "Топливо Мобиуса"});
Translation.addTranslation("Astral fuel", {ru: "Астральное топливо"});
Translation.addTranslation("Dark matter", {ru: "Тёмная материя"});
Translation.addTranslation("Red matter", {ru: "Красная материя"});
Translation.addTranslation("Klein star I", {ru: "Звезда Клейна I"});
Translation.addTranslation("Klein star II", {ru: "Звезда Клейна II"});
Translation.addTranslation("Klein star III", {ru: "Звезда Клейна III"});
Translation.addTranslation("Klein star IV", {ru: "Звезда Клейна IV"});
Translation.addTranslation("Klein star V", {ru: "Звезда Клейна Омега"});
Translation.addTranslation("Klein star VI", {ru: "Звезда Клейна Сфера"});
Translation.addTranslation("Dark matter helmet", {ru: "Тёмный шлем"});
Translation.addTranslation("Dark matter chestplate", {ru: "Тёмный нагрудник"});
Translation.addTranslation("Dark matter leggings", {ru: "Тёмные поножи"});
Translation.addTranslation("Dark matter boots", {ru: "Тёмные ботинки"});
Translation.addTranslation("Red matter helmet", {ru: "Красный шлем"});
Translation.addTranslation("Red matter chestplate", {ru: "Красный нагрудник"});
Translation.addTranslation("Red matter leggings", {ru: "Красные поножи"});
Translation.addTranslation("Red matter boots", {ru: "Красные ботинки"});
Translation.addTranslation("Dark matter pickaxe", {ru: "Тёмная кирка"});
Translation.addTranslation("Dark matter axe", {ru: "Тёмный топор"});
Translation.addTranslation("Dark matter shovel", {ru: "Тёмная лопата"});
Translation.addTranslation("Dark matter sword", {ru: "Тёмный меч"});
Translation.addTranslation("Dark matter hammer", {ru: "Тёмный молот"});
Translation.addTranslation("Red matter pickaxe", {ru: "Красная кирка"});
Translation.addTranslation("Red matter axe", {ru: "Красный топор"});
Translation.addTranslation("Red matter shovel", {ru: "Красная лопата"});
Translation.addTranslation("Red matter sword", {ru: "Красный меч"});
Translation.addTranslation("Red matter hammer", {ru: "Красный молот"});
Translation.addTranslation("Anti-matter Relay I", {ru: "Анти-предметное реле MK I"});
Translation.addTranslation("Anti-matter Relay II", {ru: "Анти-предметное реле MK II"});
Translation.addTranslation("Anti-matter Relay III", {ru: "Анти-предметное реле MK III"});
Translation.addTranslation("Energy Collector I", {ru: "Сборщик энергии MK I"});
Translation.addTranslation("Energy Collector II", {ru: "Сборщик энергии MK II"});
Translation.addTranslation("Energy Collector III", {ru: "Сборщик энергии MK III"});
Translation.addTranslation("Energy Condenser I", {ru: "Конденсатор энергии I"});
Translation.addTranslation("Energy Condenser II", {ru: "Конденсатор энергии II"});
Translation.addTranslation("Alchemical chest", {ru: "Алхимический сундук"});
Translation.addTranslation("Transmutation table", {ru: "Стол трансмутаций"});
Translation.addTranslation("Alchemical fuel block", {ru: "Блок Алхимического Угля"});
Translation.addTranslation("Mobius fuel block", {ru: "Блок Топлива Мобиуса"});
Translation.addTranslation("Aeternalis fuel block", {ru: "Блок Астрального Топлива"});
Translation.addTranslation("Dark matter block", {ru: "Блок тёмной материи"});
Translation.addTranslation("Red matter block", {ru: "Блок красной материи"});
Translation.addTranslation("Covalence dust Low", {ru: "Слабая ковалентная пыль"});
Translation.addTranslation("Covalence dust Medium", {ru: "Средняя ковалентная пыль"});
Translation.addTranslation("Covalence dust High", {ru: "Высокая ковалентная пыль"});
Translation.addTranslation("Alchemy Bag", {ru: "Алхимическая сумка"});
Translation.addTranslation("Alchemy bag", {ru: "Алхимическая сумка"});
Translation.addTranslation("Transmutation Table", {ru: "Стол трансмутаций"});
Translation.addTranslation("§bRed matter furnace", {ru: "§bПечь из красной материи"});
Translation.addTranslation("Dark matter furnace", {ru: "Печь из Темной материи"});
Translation.addTranslation("§bMatter pedestal", {ru: "§bПьедестал из темной материи"});
Translation.addTranslation("Transmute tablet", {ru: "Трансмутационный планшет"});
Translation.addTranslation("Red Matter Katar", {ru: "Красный катар"});
Translation.addTranslation("Red Matter Morning Star", {ru: "Красная Утренняя звезда"});
Translation.addTranslation("Void ring", {ru: "Кольцо чёрной дыры"});
Translation.addTranslation("Body stone", {ru: "Камень тела"});
Translation.addTranslation("Soul stone", {ru: "Камень души"});
Translation.addTranslation("Ring of harvest goodness", {ru: "Кольцо богини урожая"});
Translation.addTranslation("Talisman of repair", {ru: "Талисман починки"});
Translation.addTranslation("Watch of flowing time", {ru: "Часы текущего времени"});
Translation.addTranslation("Ring of Zero", {ru: "Кольцо полного нуля"});
Translation.addTranslation("Iron band", {ru: "Железное кольцо"});
Translation.addTranslation("Divining rod low", {ru: "Низкий Стержень поиска"});
Translation.addTranslation("Divining rod medium", {ru: "Средний Стержень поиска"});
Translation.addTranslation("Divining rod high", {ru: "Высокий Стержень поиска"});

Callback.addCallback("LevelLoaded", function (){
  if(!System.getValue(ItemID.harvestRing, 0)){
	if(Item.getName(280) == "Палка"){
      Game.message(ChatColor.YELLOW+"<ProjectE> EMC Уствновилось не на все предметы. Введите в чат команду /projecte reload.")
	} else Game.message(ChatColor.YELLOW+"<ProjectE> EMC calculated wrong. Type command /projecte reload.");
  }
});




// file: api.js

const System = {
  values: {},
  stars: {},
  setStar: function(id, storage){
    this.stars[id] = storage;
    Item.setMaxDamage(id, storage);
    
    Callback.addCallback("PreLoaded", function (){
      Item.addToCreative(id, 1, storage);
    });
    
    Item.registerNameOverrideFunction(id, function(item, name){
      return name+"\n§7EMC: "+(Item.getMaxDamage(item.id)-item.data)+"/"+Item.getMaxDamage(item.id);
    });
  },
  getStarMaxCharge: function(id){
    return this.stars[id];
  },
  isStar: function(id){
    if(this.stars[id]) return true;
    return false;
  },
  chargeStar: function (cont, data){
    star = cont.getSlot("charge");
    if(this.isStar(star.id)){
      transfer = Math.min(32, data.emc);
      if(star.data-transfer >= 0 && data.emc-transfer >= 0){
        star.data -= transfer;
        data.emc -= transfer;
      }
    }
  },
  getValue: function(id, data){
    if(!data) data = 0;
    return this.values[id+":"+data]
  },
  setValue: function(id, data, value){
    this.values[id+":"+data] = value;
    Item.registerNameOverrideFunction(id, function(item, name){
      if(!Entity.getSneaking(Player.get())){
        let stack_emc = "";
        let info = "";
        if(Item.getName(280) == "Палка"){
          info = "Присядьте, чтобы скрыть информацию о EMC";
        } else info = "Sneak to hide EMC info";
        if(item.count>1) stack_emc = "\nStack EMC: "+(value*item.count);
        return name+"\n§eEMC: "+value+stack_emc+ChatColor.GRAY+"\n"+info;
      }
    });
  },
  collector: {},
  regRecipe: function(arg){
    this.collector[arg.ing.id+":"+arg.ing.data]=arg.out.id;
  },
  getRecipe: function(id,data){
    return this.collector[id+":"+data];
  }
};
Callback.addCallback("PostLoaded", function(){
  System.regRecipe({ing: {id:263,data:1}, out: {id:331}});
  System.regRecipe({ing: {id:331,data:0}, out: {id:263}});
  System.regRecipe({ing: {id:263,data:0}, out: {id:289}});
  System.regRecipe({ing: {id:289,data:0}, out: {id:348}});
  System.regRecipe({ing: {id:348,data:0}, out: {id:ItemID.fuelAlchemical}});
  System.regRecipe({ing: {id:ItemID.fuelAlchemical,data:0}, out: {id:152}});
  System.regRecipe({ing: {id:152,data:0}, out: {id:377}});
  System.regRecipe({ing: {id:377,data:0}, out: {id:89}});
  System.regRecipe({ing: {id:89,data:0}, out: {id:ItemID.fuelAlchemical}});
  System.regRecipe({ing: {id:ItemID.fuelAlchemical,data:0}, out: {id:BlockID.blockAlchemicalFuel}});
  System.regRecipe({ing: {id:BlockID.blockAlchemicalFuel,data:0}, out: {id:ItemID.fuelMobius}});
  System.regRecipe({ing: {id:ItemID.fuelMobius,data:0}, out: {id:BlockID.blockMobiusFuel}});
  System.regRecipe({ing: {id:BlockID.blockMobiusFuel,data:0}, out: {id:BlockID.blockAstralFuel}});
});

var THINGS_FROM_MODS = [];
var second_define = false;
var define_tries = 0;

for (let i in ItemID) THINGS_FROM_MODS.push(ItemID[i]);
for (let i in BlockID) THINGS_FROM_MODS.push(BlockID[i]);

function DefineEmcFromRecipe(){
  if(__config__.getBool("auto_emc_defining")){
    for(t in THINGS_FROM_MODS){
      var array = Recipes.getWorkbenchRecipesByResult(THINGS_FROM_MODS[t], -1, 0);
      for(i = 0; i < array.size(); i ++){
        
        var arr = array.toArray()[i];
        
	    let ing = arr.getSortedEntries();
	    let res = arr.result;
	    var value = 0;
	    
	    if(!System.getValue(res.id, res.data) && !arr.getCallback()){
	      for(s = 0; s < 9; s ++){
	        try {
		      if(ing[s].id){
	            value += System.getValue(ing[s].id, ing[s].data);
	          }
	        } catch (e) {}
	      }
	      if(value){
	        System.setValue(res.id, res.data, Math.round(value/res.count));
	      }
	    }
	  }
    }
  }
}

Callback.addCallback("LevelLoaded", function (){
  DefineEmcFromRecipe();
});

Callback.addCallback("LevelSelected", function (){
  DefineEmcFromRecipe();
});

System.setValue(1, 0, 1);
System.setValue(2, 0, 1);
System.setValue(3, 0, 1);
System.setValue(4, 0, 1);
System.setValue(5, 0, 8);
System.setValue(5, 1, 8);
System.setValue(5, 2, 8);
System.setValue(5, 3, 8);
System.setValue(6, 0, 32);
System.setValue(6, 1, 32);
System.setValue(6, 2, 32);
System.setValue(6, 3, 32);
System.setValue(12, 0, 1);
System.setValue(13, 0, 4);
System.setValue(17, 0, 32);
System.setValue(17, 1, 32);
System.setValue(17, 2, 32);
System.setValue(17, 3, 32);
System.setValue(18, 0, 1);
System.setValue(18, 1, 1);
System.setValue(18, 2, 1);
System.setValue(18, 3, 1);
System.setValue(20, 0, 1);
System.setValue(22, 0, 7776);
System.setValue(23, 0, 119);
System.setValue(24, 0, 4);
System.setValue(24, 1, 4);
System.setValue(24, 2, 4);
System.setValue(25, 0, 128);
System.setValue(27, 0, 2059);
System.setValue(28, 0, 267);
System.setValue(29, 0, 380);
System.setValue(30, 0, 12);
System.setValue(31, 0, 1);
System.setValue(31, 1, 1);
System.setValue(31, 2, 1);
System.setValue(31, 3, 1);
System.setValue(32, 0, 1);
System.setValue(33, 0, 348);
System.setValue(35, 0, 48);
System.setValue(35, 1, 64);
System.setValue(35, 2, 64);
System.setValue(35, 3, 64);
System.setValue(35, 4, 64);
System.setValue(35, 5, 76);
System.setValue(35, 6, 64);
System.setValue(35, 7, 80);
System.setValue(35, 8, 64);
System.setValue(35, 9, 484);
System.setValue(35, 10, 488);
System.setValue(35, 11, 912);
System.setValue(35, 12, 176);
System.setValue(35, 13, 56);
System.setValue(35, 14, 64);
System.setValue(35, 15, 64);
System.setValue(37, 0, 16);
System.setValue(38, 0, 16);
System.setValue(39, 0, 32);
System.setValue(40, 0, 32);
System.setValue(41, 0, 18432);
System.setValue(42, 0, 2304);
System.setValue(44, 1, 2);
System.setValue(44, 4, 32);
System.setValue(44, 6, 2);
System.setValue(44, 7, 512);
System.setValue(45, 0, 64);
System.setValue(46, 0, 964);
System.setValue(47, 0, 528);
System.setValue(48, 0, 2);
System.setValue(49, 0, 64);
System.setValue(50, 0, 9);
System.setValue(53, 0, 12);
System.setValue(54, 0, 64);
System.setValue(57, 0, 73728);
System.setValue(58, 0, 32);
System.setValue(61, 0, 8);
System.setValue(65, 0, 9);
System.setValue(66, 0, 96);
System.setValue(67, 0, 1);
System.setValue(69, 0, 5);
System.setValue(70, 0, 2);
System.setValue(72, 0, 16);
System.setValue(76, 0, 68);
System.setValue(77, 0, 1);
System.setValue(79, 0, 1);
System.setValue(80, 0, 1);
System.setValue(81, 0, 8);
System.setValue(82, 0, 64);
System.setValue(84, 0, 8256);
System.setValue(85, 0, 12);
System.setValue(86, 0, 144);
System.setValue(87, 0, 1);
System.setValue(88, 0, 49);
System.setValue(89, 0, 1536);
System.setValue(91, 0, 153);
System.setValue(96, 0, 24);
System.setValue(99, 0, 1);
System.setValue(100, 0, 1);
System.setValue(101, 0, 96);
System.setValue(103, 0, 144);
System.setValue(106, 0, 8);
System.setValue(107, 0, 32);
System.setValue(108, 0, 96);
System.setValue(109, 0, 1);
System.setValue(110, 0, 2);
System.setValue(112, 0, 4);
System.setValue(113, 0, 4);
System.setValue(114, 0, 6);
System.setValue(116, 0, 16800);
System.setValue(121, 0, 1);
System.setValue(123, 0, 1792);
System.setValue(124, 0, 1792);
System.setValue(126, 0, 4);
System.setValue(126, 1, 4);
System.setValue(126, 2, 4);
System.setValue(126, 3, 4);
System.setValue(128, 0, 6);
System.setValue(130, 0, 2304);
System.setValue(131, 0, 134);
System.setValue(133, 0, 147456);
System.setValue(134, 0, 12);
System.setValue(135, 0, 12);
System.setValue(136, 0, 12);
System.setValue(138, 0, 139461);
System.setValue(139, 0, 1);
System.setValue(139, 1, 2);
System.setValue(143, 0, 8);
System.setValue(145, 0, 7936);
System.setValue(146, 0, 198);
System.setValue(147, 0, 4096);
System.setValue(148, 0, 512);
System.setValue(151, 0, 783);
System.setValue(152, 0, 576);
System.setValue(154, 0, 1344);
System.setValue(155, 0, 1024);
System.setValue(155, 1, 1024);
System.setValue(155, 2, 1024);
System.setValue(156, 0, 1536);
System.setValue(157, 0, 268);
System.setValue(158, 0, 71);
System.setValue(159, 0, 64);
System.setValue(159, 1, 64);
System.setValue(159, 2, 64);
System.setValue(159, 3, 64);
System.setValue(159, 4, 64);
System.setValue(159, 5, 64);
System.setValue(159, 6, 64);
System.setValue(159, 7, 64);
System.setValue(159, 8, 64);
System.setValue(159, 9, 64);
System.setValue(159, 10, 64);
System.setValue(159, 11, 64);
System.setValue(159, 12, 64);
System.setValue(159, 13, 64);
System.setValue(159, 14, 64);
System.setValue(159, 15, 64);
System.setValue(170, 0, 216);
System.setValue(171, 0, 32);
System.setValue(171, 1, 42);
System.setValue(171, 2, 42);
System.setValue(171, 3, 42);
System.setValue(171, 4, 42);
System.setValue(171, 5, 50);
System.setValue(171, 6, 42);
System.setValue(171, 7, 53);
System.setValue(171, 8, 42);
System.setValue(171, 9, 322);
System.setValue(171, 10, 325);
System.setValue(171, 11, 608);
System.setValue(171, 12, 117);
System.setValue(171, 13, 37);
System.setValue(171, 14, 42);
System.setValue(171, 15, 42);
System.setValue(172, 0, 64);
System.setValue(173, 0, 1152);
System.setValue(256, 0, 264);
System.setValue(257, 0, 776);
System.setValue(258, 0, 776);
System.setValue(259, 0, 260);
System.setValue(260, 0, 128);
System.setValue(261, 0, 48);
System.setValue(262, 0, 14);
System.setValue(263, 0, 128);
System.setValue(263, 1, 32);
System.setValue(264, 0, 8192);
System.setValue(265, 0, 256);
System.setValue(266, 0, 2048);
System.setValue(267, 0, 516);
System.setValue(268, 0, 20);
System.setValue(269, 0, 16);
System.setValue(270, 0, 32);
System.setValue(271, 0, 32);
System.setValue(272, 0, 6);
System.setValue(273, 0, 9);
System.setValue(274, 0, 11);
System.setValue(275, 0, 11);
System.setValue(276, 0, 16388);
System.setValue(277, 0, 8200);
System.setValue(278, 0, 24854);
System.setValue(279, 0, 24854);
System.setValue(280, 0, 4);
System.setValue(281, 0, 6);
System.setValue(282, 0, 70);
System.setValue(283, 0, 4100);
System.setValue(284, 0, 2056);
System.setValue(285, 0, 6152);
System.setValue(286, 0, 6152);
System.setValue(287, 0, 12);
System.setValue(288, 0, 48);
System.setValue(289, 0, 192);
System.setValue(290, 0, 24);
System.setValue(291, 0, 10);
System.setValue(292, 0, 520);
System.setValue(293, 0, 16392);
System.setValue(294, 0, 4104);
System.setValue(295, 0, 16);
System.setValue(296, 0, 24);
System.setValue(297, 0, 72);
System.setValue(298, 0, 320);
System.setValue(299, 0, 512);
System.setValue(300, 0, 448);
System.setValue(301, 0, 256);
System.setValue(306, 0, 1280);
System.setValue(307, 0, 2048);
System.setValue(308, 0, 1792);
System.setValue(309, 0, 1024);
System.setValue(310, 0, 40960);
System.setValue(311, 0, 65536);
System.setValue(312, 0, 57344);
System.setValue(313, 0, 32768);
System.setValue(314, 0, 10240);
System.setValue(315, 0, 16384);
System.setValue(316, 0, 14336);
System.setValue(317, 0, 8192);
System.setValue(318, 0, 4);
System.setValue(319, 0, 64);
System.setValue(320, 0, 64);
System.setValue(321, 0, 80);
System.setValue(322, 0, 16512);
System.setValue(322, 1, 147584);
System.setValue(323, 0, 17);
System.setValue(324, 0, 48);
System.setValue(325, 0, 768);
System.setValue(325, 8, 768);
System.setValue(325, 11, 832);
System.setValue(328, 0, 1280);
System.setValue(329, 0, 192);
System.setValue(330, 0, 1536);
System.setValue(331, 0, 64);
System.setValue(332, 0, 1);
System.setValue(333, 0, 40);
System.setValue(334, 0, 64);
System.setValue(335, 0, 784);
System.setValue(336, 0, 16);
System.setValue(337, 0, 16);
System.setValue(338, 0, 32);
System.setValue(339, 0, 32);
System.setValue(340, 0, 160);
System.setValue(341, 0, 32);
System.setValue(342, 0, 1344);
System.setValue(343, 0, 1288);
System.setValue(344, 0, 32);
System.setValue(345, 0, 1088);
System.setValue(346, 0, 36);
System.setValue(347, 0, 8256);
System.setValue(348, 0, 384);
System.setValue(349, 0, 64);
System.setValue(350, 0, 64);
System.setValue(351, 0, 16);
System.setValue(351, 1, 16);
System.setValue(351, 2, 8);
System.setValue(351, 3, 128);
System.setValue(351, 4, 864);
System.setValue(351, 5, 440);
System.setValue(351, 6, 436);
System.setValue(351, 7, 16);
System.setValue(351, 8, 32);
System.setValue(351, 9, 16);
System.setValue(351, 10, 28);
System.setValue(351, 11, 16);
System.setValue(351, 12, 16);
System.setValue(351, 13, 16);
System.setValue(351, 14, 16);
System.setValue(351, 15, 48);
System.setValue(352, 0, 144);
System.setValue(353, 0, 32);
System.setValue(354, 0, 216);
System.setValue(355, 0, 168);
System.setValue(356, 0, 203);
System.setValue(357, 0, 2);
System.setValue(359, 0, 512);
System.setValue(360, 0, 16);
System.setValue(361, 0, 36);
System.setValue(362, 0, 16);
System.setValue(363, 0, 64);
System.setValue(364, 0, 64);
System.setValue(365, 0, 64);
System.setValue(366, 0, 64);
System.setValue(367, 0, 32);
System.setValue(368, 0, 1024);
System.setValue(369, 0, 1536);
System.setValue(370, 0, 4096);
System.setValue(371, 0, 227);
System.setValue(372, 0, 24);
System.setValue(373, 0, 1);
System.setValue(374, 0, 1);
System.setValue(375, 0, 128);
System.setValue(376, 0, 192);
System.setValue(377, 0, 768);
System.setValue(378, 0, 800);
System.setValue(379, 0, 1539);
System.setValue(380, 0, 1792);
System.setValue(381, 0, 1792);
System.setValue(382, 0, 1832);
System.setValue(385, 0, 330);
System.setValue(386, 0, 224);
System.setValue(388, 0, 16384);
System.setValue(389, 0, 96);
System.setValue(390, 0, 48);
System.setValue(391, 0, 64);
System.setValue(392, 0, 64);
System.setValue(393, 0, 64);
System.setValue(394, 0, 64);
System.setValue(395, 0, 1344);
System.setValue(396, 0, 1880);
System.setValue(398, 0, 100);
System.setValue(399, 0, 139264);
System.setValue(400, 0, 208);
System.setValue(404, 0, 463);
System.setValue(405, 0, 1);
System.setValue(406, 0, 256);
System.setValue(407, 0, 2244);
System.setValue(408, 0, 2624);
System.setValue(417, 0, 2048);
System.setValue(418, 0, 16384);
System.setValue(419, 0, 40960);
System.setValue(420, 0, 40);
//MOD ITEMS
Callback.addCallback("PostLoaded",function(){
System.setValue(ItemID.philosophersStone, 0, 9984);
System.setValue(BlockID.antimatterRelay3, 0, 681281);
System.setValue(BlockID.antimatterRelay2, 0, 213889);
System.setValue(BlockID.antimatterRelay1, 0, 74177);
System.setValue(BlockID.energyCollector1, 0, 82953);
System.setValue(BlockID.energyCollector2, 0, 232969);
System.setValue(BlockID.energyCollector3, 0, 710665);
System.setValue(BlockID.energyCondenser1, 0, 42011);
System.setValue(BlockID.transmutationTablet, 0, 260);
System.setValue(ItemID.covDust1, 0, 1);
System.setValue(ItemID.covDust2, 0, 8);
System.setValue(ItemID.covDust3, 0, 208);
System.setValue(ItemID.fuelAlchemical, 0, 512);
System.setValue(ItemID.fuelMobius, 0, 2048);
System.setValue(ItemID.fuelAstral, 0, 8192);
System.setValue(ItemID.darkMatter, 0, 139264);
System.setValue(ItemID.redMatter, 0, 466944);
System.setValue(BlockID.dmBlock, 0, 139264*4);
System.setValue(BlockID.rmBlock, 0, 466944*4);
System.setValue(BlockID.fuelAlchemicalChest, 0, 8987);
System.setValue(ItemID.kleinStar1, 0, 24576);
System.setValue(ItemID.kleinStar2, 0, 98304);
System.setValue(ItemID.kleinStar3, 0, 393216);
System.setValue(ItemID.kleinStar4, 0, 1572864);
System.setValue(ItemID.kleinStar5, 0, 6291456);
System.setValue(ItemID.kleinStar6, 0, 25165824);
System.setValue(ItemID.ectoplasm, 0, 32);
System.setValue(ItemID.ironBand, 0, 2048);

System.setValue(ItemID.ingotCopper, 0, 85);
System.setValue(ItemID.ingotTin, 0, 128);
System.setValue(ItemID.ingotLead, 0, 512);
System.setValue(ItemID.ingotSilver, 0, 512);
System.setValue(ItemID.latex, 0, 32);
System.setValue(ItemID.rubber, 0, 32);
System.setValue(ItemID.plateIron, 0, 256);
System.setValue(ItemID.plateGold, 0, 2048);
System.setValue(ItemID.plateCopper, 0, 85);
System.setValue(ItemID.plateTin, 0, 128);
System.setValue(ItemID.plateLead, 0, 512);
});

ModAPI.registerAPI("EquivalentAPI",{
	System: System,
	Rings: Rings,
	execute: function (c){
	  return eval(c);
	}
});




// file: rings/helper.js

var Rings = {
  pedestal: {},
  inventory: {},
  activateadble: {},
  addRingFunction: function(ring, func){
    this.inventory[ring] = func;
  },
  addPedestalFunction: function(ring, func){
    this.pedestal[ring] = func;
  },
  getPedestalFunction: function(ring){
    return this.pedestal[ring]
  },
  getRingFunction: function(ring){
    return {
      inv: this.inventory[ring]
    };
  },
  get: function(id){
    for(i = 0; i <= 36; i ++){
      if(Player.getInventorySlot(i).id == id){
        obj = Player.getInventorySlot(i);
        return obj;
      }
    }
  }
};

Rings.activateRing = function(a,b,sound){
  Rings.activateable = {a: b};
  Callback.addCallback("ItemUse",function(){
  item = Player.getCarriedItem();
    if(item.id==a){
      Player.setCarriedItem(b,1,0);
      if(sound) PlaySoundFile("pecharge.ogg");
    }
    if(item.id==b){
      Player.setCarriedItem(a,1,0);
      if(sound) PlaySoundFile("peuncharge.ogg");
    }
  });
};




// file: custom.js

var CUSTOM_DIR = __dir__+"/custom.json";

Callback.addCallback("LevelLoaded", function(){
  arr = FileTools.ReadJSON(CUSTOM_DIR);
  for(i in arr){
    System.setValue(arr[i].id, arr[i].data, arr[i].emc);
  }
});

Callback.addCallback("NativeCommand", function(str){
  var arr = FileTools.ReadJSON(CUSTOM_DIR);
  cmd = str.split(" ");
  
  if(cmd[0] == "/projecte"){
    if(cmd[1] == "set"){
      var arr = FileTools.ReadJSON(CUSTOM_DIR);
      if(cmd[2] || cmd[3] || cmd[4]){
        arr.push({
          id: cmd[2], data: cmd[3], emc: cmd[4]
        });
        FileTools.WriteJSON(CUSTOM_DIR, arr);
        Game.message("Succesfully setted value for "+Item.getName(cmd[2], cmd[3])+"\nType /projecte reload, to apply changes");
      }
    } else Game.message("Aviable commands: \n/projecte set <id> <data> <value>\n/projecte reload\n/projecte clear");
    
    if(cmd[1] == "clear"){
      FileTools.WriteJSON(CUSTOM_DIR, "[]");
      Game.message("Succesfully  cleared all custom EMC configuration.");
    } else Game.message("Aviable commands: \n/projecte set <id> <data> <value>\n/projecte reload\n/projecte clear");
    
    
    if(cmd[1] == "reload"){
      for(i in arr){
        System.setValue(arr[i].id, arr[i].data, arr[i].emc);
      }
      DefineEmcFromRecipe();
      Game.message("Custom values was updated");
    }
    Game.prevent();
  }
});




// file: items/alchemical.js

IDRegistry.genItemID("philosophersStone");
Item.createItem("philosophersStone", "Philosopher's stone", {name: "philosophers_stone"}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.philosophersStone, count: 1, data: 0}, 
["rgr", 
"gdg",
"rgr"],
["r", 331, 0, "g", 348, 0, "d", 264, 0]);
});

IDRegistry.genItemID("fuelAlchemical");
Item.createItem("fuelAlchemical", "Alchemical fuel", {name: "fuelAlchemical"}, {stack: 64});

IDRegistry.genItemID("fuelMobius");
Item.createItem("fuelMobius", "Mobius fuel", {name: "fuelMobius"}, {stack: 64});

IDRegistry.genItemID("fuelAstral");
Item.createItem("fuelAstral", "Astral fuel", {name: "fuelAstral"}, {stack: 64});

Recipes.addFurnaceFuel(ItemID.fuelAlchemical,0,6400);

Recipes.addFurnaceFuel(ItemID.fuelMobius,0,25600);

Recipes.addFurnaceFuel(ItemID.fuelAstral,0,102400);

IDRegistry.genItemID("darkMatter");
Item.createItem("darkMatter", "Dark matter", {name: "darkMatter", meta: 0}, {stack: 64});

IDRegistry.genItemID("redMatter");
Item.createItem("redMatter", "Red matter", {name: "redMatter", meta: 0}, {stack: 64});

IDRegistry.genItemID("ironBand");
Item.createItem("ironBand", "Iron band", {name: "ironBand", meta: 0}, {stack: 64});

IDRegistry.genBlockID("blockAlchemicalFuel");
Block.createBlock("blockAlchemicalFuel", [{name: "Alchemical fuel block", texture: [["fuelAlchemical",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockAlchemicalFuel, 0, 6400*9);

IDRegistry.genBlockID("blockMobiusFuel");
Block.createBlock("blockMobiusFuel", [{name: "Mobius fuel block", texture: [["fuelMobius",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockMobiusFuel, 0, 518400);

IDRegistry.genBlockID("blockAstralFuel");
Block.createBlock("blockAstralFuel", [{name: "Astral fuel block", texture: [["fuelAstral",0]], inCreative: true}],"opaque");
Recipes.addFurnaceFuel(BlockID.blockAstralFuel, 0, 518400*9);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.ironBand, count: 1, data: 0}, 
["iii", 
 "ili",
 "iii"],
["l", 325, 10, "i", 265, 0]);
});

IDRegistry.genItemID("covDust1");
Item.createItem("covDust1", "Covalence dust Low", {name: "dustCovalenceLow", meta: 0}, {stack: 64});

IDRegistry.genItemID("covDust2");
Item.createItem("covDust2", "Covalence dust Medium", {name: "dustCovalenceMedium", meta: 0}, {stack: 64});

IDRegistry.genItemID("covDust3");
Item.createItem("covDust3", "Covalence dust High", {name: "dustCovalenceHigh", meta: 0}, {stack: 64});

IDRegistry.genBlockID("dmBlock");
Block.createBlock("dmBlock", [{name: "Dark matter block", texture: [["dmBlock",0]], inCreative: true}],"opaque");

IDRegistry.genBlockID("rmBlock");
Block.createBlock("rmBlock", [{name: "Red matter block", texture: [["rmBlock",0]], inCreative: true}],"opaque");

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.darkMatter, count: 1, data: 0}, 
["aaa", 
 "aba",
 "aaa"],
["a", ItemID.fuelAstral, 0, "b", 57, 0]);

Recipes.addShaped({id: ItemID.redMatter, count: 1, data: 0}, 
["aaa", 
 "bbb",
 "aaa"],
["a", ItemID.fuelAstral, 0, "b", ItemID.darkMatter, 0]);

});

var ore_emc = {
  "1": 1,
  "14": 2048,
  "15": 256,
  "16": 128,
  "56": 8192,
  "129": 16384,
  "73": 64
};

IDRegistry.genItemID("rodDivining1");
Item.createItem("rodDivining1", "Divining rod low", {name: "rodDivining", meta: 0}, {stack: 1});

IDRegistry.genItemID("rodDivining3");
Item.createItem("rodDivining3", "Divining rod high", {name: "rodDivining", meta: 1}, {stack: 1});

IDRegistry.genItemID("rodDivining2");
Item.createItem("rodDivining2", "Divining rod medium", {name: "rodDivining", meta: 2}, {stack: 1});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.covDust1, count: 40, data: 0}, 
["sii", 
 "iii",
 "iii"],
["s", 263, 1, "i", 4, 0]);

Recipes.addShaped({id: ItemID.rodDivining1, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", 280, 0, "i", ItemID.covDust1, 0]);

Recipes.addShaped({id: ItemID.rodDivining2, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", ItemID.rodDivining1, 0, "i", ItemID.covDust2, 0]);

Recipes.addShaped({id: ItemID.rodDivining3, count: 1, data: 0}, 
["iii", 
 "isi",
 "iii"],
["s", ItemID.rodDivining2, 0, "i", ItemID.covDust3, 0]);

Recipes.addShapeless({id: ItemID.covDust2, count: 40, data: 0}, [{id: 265, data: 0},{id: 331, data: 0}]);
Recipes.addShapeless({id: ItemID.covDust3, count: 40, data: 0}, [{id: 264, data: 0},{id: 263, data: 0}]);

Recipes.addShapeless({id: BlockID.dmBlock, count: 1, data: 0}, [{id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}, {id: ItemID.darkMatter, data: 0}]);
Recipes.addShapeless({id: BlockID.rmBlock, count: 1, data: 0}, [{id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}, {id: ItemID.redMatter, data: 0}]);
Recipes.addShapeless({id: ItemID.darkMatter, count: 4, data: 0}, [{id: BlockID.dmBlock, data: 0}]);
Recipes.addShapeless({id: ItemID.redMatter, count: 4, data: 0}, [{id: BlockID.rmBlock, data: 0}]);

Recipes.addShaped({id: BlockID.blockAlchemicalFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelAlchemical, 0]);

Recipes.addShaped({id: BlockID.blockMobiusFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelMobius, 0]);

Recipes.addShaped({id: BlockID.blockAstralFuel, count: 1, data: 0}, 
["aaa", 
 "aaa",
 "aaa"],
["a", ItemID.fuelAstral, 0]);

Recipes.addShapeless({id: ItemID.fuelAlchemical, count: 9, data: 0}, [{id: BlockID.blockAlchemicalFuel, data: 0}]);
Recipes.addShapeless({id: ItemID.fuelMobius, count: 9, data: 0}, [{id: BlockID.blockMobiusFuel, data: 0}]);
Recipes.addShapeless({id: ItemID.fuelAstral, count: 9, data: 0}, [{id: BlockID.blockAstralFuel, data: 0}]);
});

Item.registerUseFunction("rodDivining1", function(crd, b, i){
  let total = 0;
  c = crd.relative
  for(let xx = -1; xx <= 1; xx++){
    for(let yy = -1; yy <= 1; yy++){
      for(let zz = -1; zz <= 1; zz++){
        let val = ore_emc[World.getBlockID(c.x+xx, c.y+yy, c.z+zz)];
        if(val){
          total+=val;
        }
      }
    }
  }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining2", function(crd, b, i){
  let total = 0;
  c = crd.relative
  for(let xx = -2; xx <= 2; xx++){
    for(let yy = -2; yy <= 2; yy++){
      for(let zz = -2; zz <= 2; zz++){
        let val = ore_emc[World.getBlockID(c.x+xx, c.y+yy, c.z+zz)];
        if(val){
          total+=val;
        }
      }
    }
  }
  Game.message("Total EMC in this area: "+total);
});

Item.registerUseFunction("rodDivining3", function(crd, b, i){
  let total = 0;
  c = crd.relative
  for(let xx = -3; xx <= 3; xx++){
    for(let yy = -2; yy <= 2; yy++){
      for(let zz = -3; zz <= 3; zz++){
        let val = ore_emc[World.getBlockID(c.x+xx, c.y+yy, c.z+zz)];
        if(val){
          total+=val;
        }
      }
    }
  }
  Game.message("Total EMC in this area: "+total);
});




// file: items/matter.js

ToolAPI.addToolMaterial("dm", {level: 5, efficiency: 6, damage: 12, enchantability: 30});

IDRegistry.genItemID("dmPickaxe");
Item.createItem("dmPickaxe", "Dark matter pickaxe", {name: "dm_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("dmAxe");
Item.createItem("dmAxe", "Dark matter axe", {name: "dm_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("dmShovel");
Item.createItem("dmShovel", "Dark matter shovel", {name: "dm_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("dmSword");
Item.createItem("dmSword", "Dark matter sword", {name: "dm_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.dmPickaxe, "dm", ToolType.pickaxe);
ToolAPI.setTool(ItemID.dmAxe, "dm", ToolType.axe);
ToolAPI.setTool(ItemID.dmShovel, "dm", ToolType.shovel);
ToolAPI.setTool(ItemID.dmSword, "dm", ToolType.sword);

IDRegistry.genItemID("dmHelm");
IDRegistry.genItemID("dmChest");
IDRegistry.genItemID("dmLegg");
IDRegistry.genItemID("dmBoots");

Item.createArmorItem("dmHelm", "Dark matter helmet", {name: "dm_armor", meta: 2}, {type: "helmet", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});
Item.createArmorItem("dmChest", "Dark matter chestplate", {name: "dm_armor", meta: 0}, {type: "chestplate", armor: 10, durability: 10000000, texture: "armor/dm_0.png"});
Item.createArmorItem("dmLegg", "Dark matter leggings", {name: "dm_armor", meta: 3}, {type: "leggings", armor: 6, durability: 10000000, texture: "armor/dm_1.png"});
Item.createArmorItem("dmBoots", "Dark matter boots", {name: "dm_armor", meta: 1}, {type: "boots", armor: 6, durability: 10000000, texture: "armor/dm_0.png"});

Armor.onHurt(ItemID.dmHelm, Armor.preventDamaging(ItemID.dmHelm));
Armor.onHurt(ItemID.dmChest, Armor.preventDamaging(ItemID.dmChest));
Armor.onHurt(ItemID.dmLegg, Armor.preventDamaging(ItemID.dmLegg));
Armor.onHurt(ItemID.dmBoots, Armor.preventDamaging(ItemID.dmBoots));

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.dmHelm, count: 1, data: 0}, 
["aaa", 
 "a a",
 "   "],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmChest, count: 1, data: 0}, 
["a a", 
 "aaa",
 "aaa"],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmLegg, count: 1, data: 0}, 
["aaa", 
 "a a",
 "a a"],
["a", ItemID.darkMatter, 0]);

Recipes.addShaped({id: ItemID.dmBoots, count: 1, data: 0}, 
["a a", 
 "a a",
 "   "],
["a", ItemID.darkMatter, 0]);


Recipes.addShaped({id: ItemID.dmPickaxe, count: 1, data: 0}, 
["aaa", 
 " d ",
 " d "],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmAxe, count: 1, data: 0}, 
["aa", 
 "ad",
 " d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmShovel, count: 1, data: 0}, 
["a", 
 "d",
 "d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

Recipes.addShaped({id: ItemID.dmSword, count: 1, data: 0}, 
["a", 
 "a",
 "d"],
["a", ItemID.darkMatter, 0, "d", 264, 0]);

});


ToolAPI.addToolMaterial("rm", {level: 5, efficiency: 8, damage: 16, enchantability: 30});

IDRegistry.genItemID("rmPickaxe");
Item.createItem("rmPickaxe", "Red matter pickaxe", {name: "rm_pickaxe", meta: 0}, {stack: 1});
IDRegistry.genItemID("rmAxe");
Item.createItem("rmAxe", "Red matter axe", {name: "rm_axe", meta: 0}, {stack: 1});
IDRegistry.genItemID("rmShovel");
Item.createItem("rmShovel", "Red matter shovel", {name: "rm_shovel", meta: 0}, {stack: 1});
IDRegistry.genItemID("rmSword");
Item.createItem("rmSword", "Red matter sword", {name: "rm_sword", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.rmPickaxe, "rm", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rmAxe, "rm", ToolType.axe);
ToolAPI.setTool(ItemID.rmShovel, "rm", ToolType.shovel);
ToolAPI.setTool(ItemID.rmSword, "rm", ToolType.sword);

IDRegistry.genItemID("rmHelm");
IDRegistry.genItemID("rmChest");
IDRegistry.genItemID("rmLegg");
IDRegistry.genItemID("rmBoots");

Item.createArmorItem("rmHelm", "Red matter helmet", {name: "rm_armor", meta: 2}, {type: "helmet", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});
Item.createArmorItem("rmChest", "Red matter chestplate", {name: "rm_armor", meta: 0}, {type: "chestplate", armor: 11, durability: 10000000, texture: "armor/rm_0.png"});
Item.createArmorItem("rmLegg", "Red matter leggings", {name: "rm_armor", meta: 3}, {type: "leggings", armor: 7, durability: 10000000, texture: "armor/rm_1.png"});
Item.createArmorItem("rmBoots", "Red matter boots", {name: "rm_armor", meta: 1}, {type: "boots", armor: 3, durability: 10000000, texture: "armor/rm_0.png"});

Armor.onHurt(ItemID.rmHelm, Armor.preventDamaging(ItemID.rmHelm));
Armor.onHurt(ItemID.rmChest, Armor.preventDamaging(ItemID.rmChest));
Armor.onHurt(ItemID.rmLegg, Armor.preventDamaging(ItemID.rmLegg));
Armor.onHurt(ItemID.rmBoots, Armor.preventDamaging(ItemID.rmBoots));

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.rmHelm, count: 1, data: 0}, 
["aaa", 
 "ada",
 "   "],
["a", ItemID.redMatter, 0, "d", ItemID.dmHelm, 0]);

Recipes.addShaped({id: ItemID.rmChest, count: 1, data: 0}, 
["ada", 
 "aaa",
 "aaa"],
["a", ItemID.redMatter, 0, "d", ItemID.dmChest, 0]);

Recipes.addShaped({id: ItemID.rmLegg, count: 1, data: 0}, 
["aaa", 
 "ada",
 "a a"],
["a", ItemID.redMatter, 0, "d", ItemID.dmLegg, 0]);

Recipes.addShaped({id: ItemID.rmBoots, count: 1, data: 0}, 
["ada", 
 "a a",
 "   "],
["a", ItemID.redMatter, 0, "d", ItemID.dmBoots, 0]);

Recipes.addShaped({id: ItemID.rmPickaxe, count: 1, data: 0}, 
["aaa", 
 " m ",
 " d "],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmPickaxe, 0]);

Recipes.addShaped({id: ItemID.rmAxe, count: 1, data: 0}, 
["aa", 
 "am",
 " d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmAxe, 0]);

Recipes.addShaped({id: ItemID.rmShovel, count: 1, data: 0}, 
["a", 
 "m",
 "d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmShovel, 0]);

Recipes.addShaped({id: ItemID.rmSword, count: 1, data: 0}, 
["a", 
 "m",
 "d"],
["a", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "m", ItemID.dmSword, 0]);
});


ToolType.katar = {
  isWeapon: true,
  damage: 8,
  baseDamage: 16,
  blockTypes: ["fibre", "wood", "plant"],
  onDestroy: function(item){
     item.data=0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data = 0;
  },
  useItem: function(c, i, b){
    if(b.id == 17 || b.id == 162){
      var rad = 24;
      for(x = -rad; x <= rad; x ++){
        for(y = -2; y <= rad; y ++){
          for(z = -rad; z <= rad; z ++){
            let block = World.getBlock(c.x+x, c.y+y, c.z+z);
            if(block.id == b.id){
              World.setBlock(c.x+x, c.y+y, c.z+z, 0);
              Player.addItemToInventory(block.id, 1, block.data);
            }
          }
        }
      }
    }
  }
};

ToolType.morningStar = {
  isWeapon: true,
  damage: 8,
  baseDamage: 12,
  blockTypes: ["stone", "wood", "dirt", "plant", "fibre"],
  onDestroy: function(item){
     item.data = 0;
  },
  onBroke: function(item){
    return true;
  },
  onAttack: function(item, mob){
    item.data = 0;
  },
  calcDestroyTime: function (i, c, b){
    if(b.id != 7) return 0;
  },
  useItem: function(coords, item, block){
    let x=coords.x; y=coords.y; z=coords.z;
    let rr = 6;
    if(!Entity.getSneaking(Player.get())){
      for(xx = -rr; xx <= rr; xx++){
        for(yy = -rr; yy <= rr; yy++){
          for(zz = -rr; zz <= rr; zz++){
            let block = World.getBlock(x + xx, y + yy, z + zz);
            if(!UNBREAKABLE[block.id]){
	          let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
	          
	          if(drop){
	            for(i in drop){
		          try{
	                Player.addItemToInventory(drop[i][0], drop[i][1] || 1, drop[i][2] || 0);
	              } catch (e) {}
	            }
	          }
	      	World.setBlock(x + xx, y + yy, z + zz, 0);
            }
          }
        }
      }
    }
  }
};

IDRegistry.genItemID("rmKatar");
Item.createItem("rmKatar", "Red Matter Katar", {name: "katar", meta: 0}, {stack: 1});

IDRegistry.genItemID("rmMorningStar");
Item.createItem("rmMorningStar", "Red Matter Morning Star", {name: "morning_star", meta: 0}, {stack: 1});


ToolAPI.setTool(ItemID.rmKatar, "rm", ToolType.katar);
ToolAPI.setTool(ItemID.rmMorningStar, "rm", ToolType.morningStar);

Callback.addCallback("PostLoaded", function (){
  Recipes.addShaped({id: ItemID.rmKatar, count: 1, data: 0}, 
    ["sar", 
     "rrr",
     "rrr"],
  ["s", ItemID.rmSword, 0, "a", ItemID.rmAxe, 0, "r", ItemID.redMatter, 0]);
  
  Recipes.addShaped({id: ItemID.rmMorningStar, count: 1, data: 0}, 
    ["sar", 
     "hrr",
     "rrr"],
  ["h", ItemID.rmHammer, 0, "s", ItemID.rmShovel, 0, "a", ItemID.rmPickaxe, 0, "r", ItemID.redMatter, 0]);
});

Callback.addCallback("EntityHurt", function(a, v, d){
  item = Player.getCarriedItem();
  if(a == Player.get() && (item.id == ItemID.rmKatar || item.id == ItemID.rmSword)){
    var pos = Entity.getPosition(v);
    for(m in allMobs){
      var mobs = Entity.getAllInRange(pos, 3, allMobs[m]);
      for(i in mobs){
        var mob = mobs[i];
        Entity.damageEntity(mob, 24);
      }
    }
  }
});




// file: items/gem.js

IDRegistry.genItemID("gemHelm");
IDRegistry.genItemID("gemChest");
IDRegistry.genItemID("gemLegg");
IDRegistry.genItemID("gemBoots");

Item.createArmorItem("gemHelm", "Abyss Helmet", {name: "gem_armor", meta: 2}, {type: "helmet", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemChest", "Grid Infernal Armor", {name: "gem_armor", meta: 0}, {type: "chestplate", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});
Item.createArmorItem("gemLegg", "Gravity Greaves", {name: "gem_armor", meta: 3}, {type: "leggings", armor: 5, durability: 10000000, texture: "armor/gem_1.png"});
Item.createArmorItem("gemBoots", "Hurricane Boots", {name: "gem_armor", meta: 1}, {type: "boots", armor: 5, durability: 10000000, texture: "armor/gem_0.png"});

Armor.onTick({id: ItemID.gemHelm, slot: 0}, function (s){
  Entity.addEffect(Player.get(), 16, 1, 1000, false, false);
  p = Player.getPosition();
  if(World.getBlockID(p.x, p.y, p.z) == 9){
    Entity.addEffect(Player.get(), 13, 1, 20, false, false);
  }
});

Armor.onTick({id: ItemID.gemChest, slot: 1}, function (a, v, s){
  p = Player.getPosition();
  vel = Entity.getVelocity(Player.get());
  if(!Entity.getSneaking(Player.get()) && World.getBlockID(p.x, p.y-2, p.z) == 11){
    Entity.setVelocity(Player.get(), vel.x, .015, vel.z);
    Entity.setFire(Player.get(), 0);
  }
  Entity.addEffect(Player.get(), 12, 1, 20, false, false);
});


Armor.onTick({id: ItemID.gemLegg, slot: 2}, function (s){
  if(Entity.getSneaking(Player.get())){
    for(j in allMobs){
      ent = Entity.getAllInRange(Player.getPosition(), 6, allMobs[j]);
      for(i in ent){
        var X = Player.getPosition().x, Y = Player.getPosition().y, Z = Player.getPosition().z
        var x=Entity.getPosition(ent[i]).x-Player.getPosition().x;
        var y=Entity.getPosition(ent[i]).y-Player.getPosition().y;
        var z=Entity.getPosition(ent[i]).z-Player.getPosition().z;
        if(x*x+y*y+z*z<5*5){
	      Entity.setVelocity(ent[i],x, y, z);
	    }
	  }
    }
    if(Entity.getVelocity(Player.get()).y <= fallVelocity){
      Entity.setVelocity(Player.get(), 0, -6, 0);
    }
  }
});

Armor.onTick({id: ItemID.gemBoots, slot: 3}, function (s){
  Entity.addEffect(Player.get(), 1, 1, 90, false, false);
});

Armor.onHurt({id: ItemID.gemHelm, slot: 0}, function (a, v, s){
  Armor.preventDamaging(ItemID.gemHelm);
});

Armor.onHurt({id: ItemID.gemChest, slot: 1}, function (a, v, s, h){
  if(h >= 2) {
    Game.prevent();
    if(a != Player.get()) Entity.setFire(a, 40);
  }
  Entity.setFire(Player.get(), 0);
  Armor.preventDamaging(ItemID.gemChest);
});

Armor.onHurt({id: ItemID.gemLegg, slot: 2}, function (a, v, s){
  Armor.preventDamaging(ItemID.gemLegg);
});

Armor.onHurt({id: ItemID.gemBoots, slot: 3}, function (a, v, s){
  Armor.preventDamaging(ItemID.gemBoots);
});


Callback.addCallback("tick", function (){
  if(
    Entity.getArmorSlot(Player.get(), 0).id == ItemID.gemHelm &&
    Entity.getArmorSlot(Player.get(), 1).id == ItemID.gemChest &&
    Entity.getArmorSlot(Player.get(), 2).id == ItemID.gemLegg &&
    Entity.getArmorSlot(Player.get(), 3).id == ItemID.gemBoots
  ){
    Player.setHunger(20);
  }
});




// file: items/bags.js

var BAG_CONTAINERS = {};


if(__config__.getBool("bags")){
  Saver.addSavesScope("EE2Bags",
    function read(scope){
      if(scope && scope.cont){
	    BAG_CONTAINERS = scope.cont;
      } else {
  	for(i = 0; i <= 15; i ++){
	    BAG_CONTAINERS["bag"+i] = new UI.Container();
	  }
    }
  },
  function save(){
    return {
      cont: BAG_CONTAINERS
    };
  });
  
  function setupBag(index){
    IDRegistry.genItemID("alchemyBag"+index);
    Item.createItem("alchemyBag"+index, "Alchemy bag", {name: "alchemy_bag", meta: index}, {stack: 1});
  
    Callback.addCallback("ItemUse", function (c, i, b){
      if(i.id == ItemID["alchemyBag"+index]){
        BAG_CONTAINERS["bag"+index].openAs(alchChestUI);
      }
    });
  }
  
  for(let i = 0;i<=15;i++){
    setupBag(i);
  }
  
  Callback.addCallback("PostLoaded", function(){
    for(let i = 0;i<=15;i++){
    Recipes.addShaped({id: ItemID["alchemyBag"+i], count: 1, data: 0}, 
      ["mmm", 
       "aca",
       "aaa"],
      ["a", 35, i, "m", ItemID.covDust3, 0, "c", BlockID.alchChest, 0]);
    }
  });
}




// file: items/klein stars.js

IDRegistry.genItemID("kleinStar1");
Item.createItem("kleinStar1", "Klein star I", {name: "klein_star", meta: 0}, {stack: 1});
System.setStar(ItemID.kleinStar1, 16000);

IDRegistry.genItemID("kleinStar2");
Item.createItem("kleinStar2", "Klein star II", {name: "klein_star", meta: 1}, {stack: 1});
System.setStar(ItemID.kleinStar2, 32000);

IDRegistry.genItemID("kleinStar3");
Item.createItem("kleinStar3", "Klein star III", {name: "klein_star", meta: 2}, {stack: 1});
System.setStar(ItemID.kleinStar3, 64000);

IDRegistry.genItemID("kleinStar4");
Item.createItem("kleinStar4", "Klein star VI", {name: "klein_star", meta: 3}, {stack: 1});
System.setStar(ItemID.kleinStar4, 128000);

IDRegistry.genItemID("kleinStar5");
Item.createItem("kleinStar5", "Klein star V", {name: "klein_star", meta: 4}, {stack: 1});
System.setStar(ItemID.kleinStar5, 256000);

IDRegistry.genItemID("kleinStar6");
Item.createItem("kleinStar6", "Klein star VI", {name: "klein_star", meta: 5}, {stack: 1});
System.setStar(ItemID.kleinStar6, 512000);

Callback.addCallback("PostLoaded", function (){
Recipes.addShaped({id: ItemID.kleinStar1, count: 1, data: 16000}, 
["aaa", 
 "aba",
 "aaa"],
["a", ItemID.fuelMobius, 0, "b", 264, 0]);

Recipes.addShaped({id: ItemID.kleinStar2, count: 1, data: 32000}, 
["aa", 
 "aa"],
["a", ItemID.kleinStar1, -1]);

Recipes.addShaped({id: ItemID.kleinStar3, count: 1, data: 64000}, 
["aa", 
 "aa"],
["a", ItemID.kleinStar2, -1]);

Recipes.addShaped({id: ItemID.kleinStar4, count: 1, data: 128000}, 
["aa", 
 "aa"],
["a", ItemID.kleinStar3, -1]);

Recipes.addShaped({id: ItemID.kleinStar5, count: 1, data: 256000}, 
["aa", 
 "aa"],
["a", ItemID.kleinStar4, -1]);

Recipes.addShaped({id: ItemID.kleinStar6, count: 1, data: 512000}, 
["aa", 
 "aa"],
["a", ItemID.kleinStar5, -1]);

});




// file: items/hammers.js

const dirtBlocksDrop = {
  "2": 3, "3": 3, "60": 3, "61": 3, "198": 3, "243": 3, "110": 3
};

function getBlockDrop(coords, id, data, level){
	 let dropFunc = Block.dropFunctions[id];
	 
	 if(dropFunc){
	   	return dropFunc(coords, id, data, level, {});
  	}
  	
  	if(dirtBlocksDrop[id]){
		  return [[dirtBlocksDrop[id], 1, 0]];
  	}
  	
  	return [[id, 1, data]];
}

var UNBREAKABLE = {0: true, 7: true, 8: true, 9: true, 10: true, 11: true};

IDRegistry.genItemID("dmHammer");
Item.createItem("dmHammer", "Dark matter hammer", {name: "dm_hammer", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.dmHammer, "dm", ToolType.pickaxe);

Item.registerUseFunction("dmHammer", function(coords, item, block){
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 2;
  
  if(!Entity.getSneaking(Player.get())){
    for(xx = -rr; xx <= rr; xx++){
      for(yy = -rr; yy <= rr; yy++){
        for(zz = -rr; zz <= rr; zz++){
          let block = World.getBlock(x + xx, y + yy, z + zz);
          if(!UNBREAKABLE[block.id]){
            let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
	        if(drop){
	          for(i in drop){
		        try{
			      Player.addItemToInventory(drop[i][0], drop[i][1] || 1, drop[i][2] || 0);
	            } catch (e) { }
	          }
	        }
	        World.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
      }
    }
  }
});

IDRegistry.genItemID("rmHammer");
Item.createItem("rmHammer", "Red matter hammer", {name: "rm_hammer", meta: 0}, {stack: 1});
ToolAPI.setTool(ItemID.rmHammer, "rm", ToolType.pickaxe);
ToolAPI.setTool(ItemID.rmHammer, "rm", ToolType.sword);

Item.registerUseFunction("rmHammer", function(coords, item, block){
  let x=coords.x; y=coords.y; z=coords.z;
  let rr = 4;
  
  if(!Entity.getSneaking(Player.get())){
    for(xx = -rr; xx <= rr; xx++){
      for(yy = -rr; yy <= rr; yy++){
        for(zz = -rr; zz <= rr; zz++){
          let block = World.getBlock(x + xx, y + yy, z + zz);
          if(!UNBREAKABLE[block.id]){
	        let drop = getBlockDrop({x: x + xx, y: y + yy, z: z + zz}, block.id, block.data, 5);
	        
	        if(drop){
	          for(i in drop){
		        try{
			      Player.addItemToInventory(drop[i][0], drop[i][1] || 1, drop[i][2] || 0);
	            } catch (e) {}
	          }
	        }
	    	World.setBlock(x + xx, y + yy, z + zz, 0);
          }
        }
      }
    }
  }
});

Callback.addCallback("PostLoaded", function (){
	Recipes.addShaped({id: ItemID.dmHammer, count: 1, data: 0}, 
      ["mdm", 
       " d",
       " d"],
      ["m", ItemID.darkMatter, 0, "d", 264, 0]);
      
      Recipes.addShaped({id: ItemID.rmHammer, count: 1, data: 0}, 
      ["mhm", 
       " d",
       " d"],
      ["m", ItemID.redMatter, 0, "d", ItemID.darkMatter, 0, "h", ItemID.dmHammer, 0]);
});




// file: items/mercurial_eye.js





// file: items/destiny.js





// file: tablet/learner.js

var TABLET_ITEMS = [], TABLET_EMC = 0, TABLET_PAGE = 0, TABLET_CONTAINER = new UI.Container();

System.isLearned = function(id, data){
	for(i in TABLET_ITEMS){
	    if(TABLET_ITEMS[i].id == id && TABLET_ITEMS[i].data == data){
		    return true;
	    }
	}
	return false;
}

Saver.addSavesScope("EE2Tablet",
function read(scope){
  TABLET_ITEMS = [];
  TABLET_EMC = 0;
  TABLET_PAGE = 0;
  TABLET_CONTAINER = new UI.Container();
  
  if(scope && scope.items && scope.learned){
    for(i in scope.items){
      TABLET_ITEMS.push(scope.items[i]);
    }
	
    TABLET_EMC = scope.emc;
	TABLET_CONTAINER = scope.cont;
  }
},
function save(){
  return {
    items: TABLET_ITEMS,
    emc: TABLET_EMC,
    cont: TABLET_CONTAINER
  };
});




// file: tablet/main.js

IDRegistry.genBlockID("transmutationTablet");
Block.createBlock("transmutationTablet", [
	 {name: "Transmutation Table", texture: [
	   ["table_bottom",0],
	   ["table_top",0],
	   ["table_side",0],
  ],inCreative: true}
]);

Callback.addCallback("PostLoaded",function(){

Recipes.addShapeless({id: BlockID.transmutationTablet, count: 1, data: 0}, [{id: 49, data: 0}, 
{id: 1, data: 0}, {id: 49, data: 0}, {id: 1, data: 0}, {id: ItemID.philosophersStone, data: 0}, {id: 1, data: 0}, {id: 49, data: 0}, {id: 1, data: 0}, {id: 49, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.philosophersStone){
		  	  api.decreaseFieldSlot(i);
		  }
	 }
});

Recipes.addShaped({id: ItemID.transmute_tablet, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", BlockID.dmBlock, 0, "d", 1, 0, "c", BlockID.transmutationTablet, 0]);

});

Block.setBlockShape(BlockID.transmutationTablet, {x: 0, y: 0, z: 0}, {x: 1, y: .25, z: 1});

var tabletUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Transmutation tablet"}},
		inventory: {standart: true},
		background: {standart: true}
	},
		 	elements: {
		   "burn": {type: "slot", x: 582, y: 400, bitmap: "burn"},
		   "unlearn": {type: "slot", x: 518, y: 400, bitmap: "slotUnlearn"},
           "learn0": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 200, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn0");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn0");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn1": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 320, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn1");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn1");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn2": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 560, y: 80, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn2");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn2");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn3": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 200, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn3");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn3");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn4": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 200, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn4");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn4");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn5": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 260, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn5");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn5");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn6": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 440, y: 140, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn6");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn6");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn7": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 260, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn7");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn7");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn8": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 680, y: 140, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn8");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn8");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn9": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 500, y: 320, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn9");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn9");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn10": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 620, y: 320, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn10");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn10");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn11": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 500, y: 80, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn11");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn11");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           "learn12": {type: "slot", bitmap: "nothing", isTransparentBackground: true, visual: true, x: 620, y: 80, clicker: {onClick: function(container,tile){let slot = container.getSlot("learn12");if(TABLET_EMC>=System.getValue(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data);Player.addItemToInventory(slot.id,1,slot.data);}},onLongClick: function(container, tile){let slot = container.getSlot("learn12");if(TABLET_EMC>=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data)){TABLET_EMC-=System.getValue(slot.id,slot.data)*Item.getMaxStack(slot.id,slot.data);Player.addItemToInventory(slot.id,Item.getMaxStack(slot.id,slot.data),slot.data);}}}},
           
           "text": {type: "text", x: 320, y: 30, width: 50, height: 15, text: "EMC"},
		   "buttonNxt": {type: "button", x: 700, y: 400, bitmap: "btnNext0",scale: 3.2,
		      clicker: {
			     onClick: function(container, tile){
			       if(TABLET_PAGE < TABLET_ITEMS.length-1){
			         TABLET_PAGE++
			       } else TABLET_PAGE = 0;
		      }
        }
    },
    "text_page": {type: "text", x: 550, y: 380, width: 100, height: 30, text: "Page: 0/1"},
    "buttonBck": {type: "button", x: 400, y: 400, bitmap: "btnPrev0",scale: 3.2,
	  clicker: {
        onClick: function(container, tile){
	      if(TABLET_PAGE > 0){
			TABLET_PAGE--;
		  } else TABLET_PAGE = TABLET_ITEMS.length-1;
        },
      }
    }
  }
});

TileEntity.registerPrototype(BlockID.transmutationTablet, {
  getGuiScreen: function(){
    return tabletUI;
  },
  init: function (){
    this.container = TABLET_CONTAINER;
  },
  tick: function(){
      let content = this.container.getGuiContent();
      if(!content) for(i = 0; i <= 12; i ++){
          this.container.setSlot("learn"+i, 0, 0, 0);
      }
  },
  destroy: function(){
    for(i = 0; i <= 12; i ++){
      this.container.setSlot("learn"+i, 0, 0, 0);
    }
  }
});


IDRegistry.genItemID("transmute_tablet");
Item.createItem("transmute_tablet", "Transmute tablet", {name: "transmute_tablet"}, {stack: 1});

Item.registerUseFunction("transmute_tablet", function(c, b, i){
  TABLET_CONTAINER.openAs(tabletUI);
});

Callback.addCallback("tick", function (){
	if(TABLET_CONTAINER.isOpened()){
		container = TABLET_CONTAINER;
		container.setText("text", "EMC: "+TABLET_EMC);
		container.setText("text_page", (TABLET_PAGE+1)+"/"+(TABLET_ITEMS.length+1));
		let slotBurn = container.getSlot("burn");
		let slotUnlearn = container.getSlot("unlearn");
		let value = System.getValue(slotBurn.id, slotBurn.data);
		
		if(System.isLearned(slotUnlearn.id, slotUnlearn.data)){
			for(i in TABLET_ITEMS){
				ti = TABLET_ITEMS[i];
				if(ti.id == slotUnlearn.id && ti.data == slotUnlearn.data){
					TABLET_ITEMS.splice(i--, 1);
					alert("Unlearned!");
					TABLET_PAGE = 0;
			    }
			}
		}
		
        if(slotBurn.id == ItemID.tomeKnowledge){
			for(i in System.values){
		        itm = i.split(":");
		        if(!System.isLearned(itm[0], itm[1])){
		          TABLET_ITEMS.push({id: itm[0], data: itm[1]});
		        }
	        }
	        slotBurn.id = 0;
	        Game.message("You got all transmutation knowledges");
		}
		
	    if(value){
	        if(!System.isLearned(slotBurn.id, slotBurn.data)){
		        TABLET_ITEMS.push({id: slotBurn.id, data: slotBurn.data});
		        alert("Learned!");
	        }
	      
	        TABLET_EMC += value*slotBurn.count;
	        slotBurn.count=0;
	        container.validateAll();
		}
		try {
			if(TABLET_ITEMS[0]){
				for(i = 0; i <= 12; i ++){
					if(System.getValue(TABLET_ITEMS[TABLET_PAGE+i].id, TABLET_ITEMS[TABLET_PAGE+i].data) <= TABLET_EMC) {
                         container.setSlot("learn"+i, TABLET_ITEMS[TABLET_PAGE+i].id, 1, TABLET_ITEMS[TABLET_PAGE+i].data);
                    } else if(container.getSlot("learn"+i).id) {
                         container.setSlot("learn"+i, 0, 0, 0);
                    }
			    }
		    }
		} catch(e) {}
	}
});


IDRegistry.genItemID("tomeKnowledge");
Item.createItem("tomeKnowledge", "Tome of knowledge", {name: "tomeKnowledge"}, {stack: 1});

Item.registerUseFunction("tomeKnowledge", function (c, item){
	for(i in System.values){
		itm = i.split(":");
		if(!System.isLearned(itm[0], itm[1])){
		  TABLET_ITEMS.push({id: itm[0], data: itm[1]});
		}
	}
	Game.message("You got all transmutation knowledges");
});




// file: collector/tier 1.js

Block.createSpecialType({
	destroytime: 2,
	explosionres: 0.5,
	opaque: false,
	lightopacity: 0,
	renderlayer: 3,
	lightlevel: 10
}, "light");

IDRegistry.genBlockID("energyCollector1");
Block.createBlockWithRotation("energyCollector1", [
	 {name: "Energy Collector I", texture: [
	   ["collectorOther",0],
	   ["collectorTop",0],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector1, count: 1, data: 0},
  ["glg",
   "gdg",
   "gfg"],
  ['g', 89, 0, 'd', 57, 0, 'f', 61, 0, 'l', 20, 0]);

});

var collectorUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Energy collector"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	 drawing: [
    {type: "bitmap", x: 425, y: 100, bitmap: "emcBarShort_0", scale: 5},
    {type: "bitmap", x: 750, y: 200, bitmap: "collectorProgress_0", scale: 3.5},
  ],
	 	elements: {
	   	"output": {type: "slot", x: 700, y: 100},
		  "input": {type: "slot", x: 700, y: 300},
    "progScale": {type: "scale", x: 750, y: 200, bitmap: "collectorProgress_1", scale: 3.5, direction: 1},
	   "charge": {type: "slot", x: 350, y: 100, bitmap: "starCharge"},
    "emcScale": {type: "scale", x: 425, y: 100, bitmap: "emcBarShort_1", scale: 5},
    "text": {type: "text", x: 800, y: 100, width: 100, height: 30, text: "EMC"}
  	}
});

TileEntity.registerPrototype(BlockID.energyCollector1, {
  defaultValues: {
    emc: 0, max: 50000
  },
  getGuiScreen: function(){
    return collectorUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  tick: function(){
    slotInput = this.container.getSlot("input");
    slotOutput = this.container.getSlot("output");
    
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", this.data.emc+" EMC");
    
    if(World.getLightLevel(this.x, this.y + 1, this.z) >= 8){
      if(World.getThreadTime()%3 == 0 && this.data.emc <= this.data.max){
        this.data.emc++;
      }
    }
    System.chargeStar(this.container, this.data);
    /*for(i in this.dirs){
      let dir = dirs[i];
    }*/
    
    let res = System.getRecipe(Math.min(this.data.emc, this.emc_out).id,Math.min(this.data.emc, this.emc_out).data);
	 	  let val = System.getValue(Math.min(this.data.emc, this.emc_out).id,Math.min(this.data.emc, this.emc_out).data);
	 	  
    	if(val && res){
	     this.container.setScale("progScale", this.data.emc/(val*2));
    } else	this.container.setScale("progScale", this.data.emc/this.data.max);
    
    
    
    if(res && this.data.emc > val*2 && slotOutput.count<64 && (slotOutput.id==0||slotOutput.id==res)){
      this.data.emc-=val*2;
      slotOutput.id=res;
      slotOutput.count++;
      Math.min(this.data.emc, this.emc_out).count--;
      this.container.validateAll();
    }
  }
});




// file: collector/tier 2.js

IDRegistry.genBlockID("energyCollector2");
Block.createBlockWithRotation("energyCollector2", [
	 {name: "Energy Collector II", texture: [
	   ["collectorOther",0],
	   ["collectorTop",1],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector2, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.darkMatter, 0, 'c', BlockID.energyCollector1, 0]);

});

TileEntity.registerPrototype(BlockID.energyCollector2, {
  defaultValues: {
    emc: 0, max: 100000
  },
  getGuiScreen: function(){
    return collectorUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  tick: function(){
    slotInput = this.container.getSlot("input");
    slotOutput = this.container.getSlot("output");
    
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", this.data.emc+" EMC");
    
    if(World.getLightLevel(this.x, this.y + 1, this.z) >= 8){
      if(World.getThreadTime()%2 == 0 && this.data.emc <= this.data.max){
        this.data.emc++;
      }
    }
    
    /*for(i in this.dirs){
      let dir = dirs[i];
    }*/
    System.chargeStar(this.container, this.data);
    let res = System.getRecipe(Math.min(this.data.emc, this.emc_out).id,Math.min(this.data.emc, this.emc_out).data);
	 	  let val = System.getValue(Math.min(this.data.emc, this.emc_out).id,Math.min(this.data.emc, this.emc_out).data);
	 	  
    	if(val && res){
	     this.container.setScale("progScale", this.data.emc/(val*2));
    } else	this.container.setScale("progScale", this.data.emc/this.data.max);
    
    
    
    if(res && this.data.emc > val*2 && slotOutput.count<64 && (slotOutput.id==0||slotOutput.id==res)){
      this.data.emc-=val*2;
      slotOutput.id=res;
      slotOutput.count++;
      Math.min(this.data.emc, this.emc_out).count--;
      this.container.validateAll();
    }
  }
});




// file: collector/tier 3.js

IDRegistry.genBlockID("energyCollector3");
Block.createBlockWithRotation("energyCollector3", [
	 {name: "Energy Collector III", texture: [
	   ["collectorOther",0],
	   ["collectorTop",2],
	   ["collectorOther",0],
	   ["collectorFront",0],
	   ["collectorOther",0],
	   ["collectorOther",0],
  ],inCreative: true}
], "light");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCollector3, count: 1, data: 0}, 
  ["gmg",
   "gcg",
   "ggg"],
  ['g', 89, 0, 'm', ItemID.redMatter, 0, 'c', BlockID.energyCollector2, 0]);

});

TileEntity.registerPrototype(BlockID.energyCollector3, {
  defaultValues: {
    emc: 0, max: 500000
  },
  getGuiScreen: function(){
    return collectorUI;
  },
  tick: function(){
    slotInput = this.container.getSlot("input");
    slotOutput = this.container.getSlot("output");
    
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", this.data.emc+" EMC");
    
    if(World.getLightLevel(this.x, this.y + 1, this.z) >= 8){
      if(this.data.emc <= this.data.max){
        this.data.emc++;
      }
    }
    System.chargeStar(this.container, this.data);
    let res = System.getRecipe(slotInput.id,slotInput.data);
	 	  let val = System.getValue(slotInput.id,slotInput.data);
	 	  
    	if(val && res){
	     this.container.setScale("progScale", this.data.emc/(val*2));
    } else	this.container.setScale("progScale", this.data.emc/this.data.max);
    
    
    
    if(res && this.data.emc > val*2 && slotOutput.count<64 && (slotOutput.id==0||slotOutput.id==res)){
      this.data.emc-=val*2;
      slotOutput.id=res;
      slotOutput.count++;
      slotInput.count--;
      this.container.validateAll();
    }
  }
});




// file: relay/tier 1.js

IDRegistry.genBlockID("antimatterRelay1");
Block.createBlockWithRotation("antimatterRelay1", [
	 {name: "Anti-matter Relay I", texture: [
	   ["relayOther",0],
	   ["relayTop",0],
	   ["relayOther",0],
	   ["relayFront",0],
	   ["relayOther",0],
	   ["relayOther",0],
  ],inCreative: true}
], "opaque");

var relayUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Anti-matter relay"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	 drawing: [
    {type: "bitmap", x: 425, y: 100, bitmap: "emcBarShort_0", scale: 5},
  ],
	 	elements: {
		  "input1": {type: "slot", x: 400, y: 260},
		  "input2": {type: "slot", x: 464, y: 260},
		  "input3": {type: "slot", x: 528, y: 260},
		  "input4": {type: "slot", x: 592, y: 260},
		  "input5": {type: "slot", x: 400, y: 320},
		  "input6": {type: "slot", x: 464, y: 320},
		  "input7": {type: "slot", x: 528, y: 320},
		  "input8": {type: "slot", x: 592, y: 320},
		  "input9": {type: "slot", x: 400, y: 380},
		  "input10": {type: "slot", x: 464, y: 380},
		  "input11": {type: "slot", x: 528, y: 380},
		  "input12": {type: "slot", x: 592, y: 380},
    "progScale": {type: "scale", x: 750, y: 200, bitmap: "relayProgress_1", scale: 3.5, direction: 1},
	   "charge": {type: "slot", x: 350, y: 100, bitmap: "starCharge"},
    "emcScale": {type: "scale", x: 425, y: 100, bitmap: "emcBarShort_1", scale: 5},
    "text": {type: "text", x: 800, y: 100, width: 100, height: 30, text: "EMC"}
  	}
});

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.antimatterRelay1, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", 61, 0, "d", 57, 0]);

});

TileEntity.registerPrototype(BlockID.antimatterRelay1, {
  defaultValues: {
    emc: 0, max: 100000
  },
  getGuiScreen: function(){
    return relayUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  emc_out: 32,
  tick: function(){
    for(i = 0; i <= 12; i++){
      let slotBurn = this.container.getSlot("input"+i);
      let value = System.getValue(slotBurn.id, slotBurn.data);
      
      if(value){
        if(this.data.emc+value<=this.data.max){
          this.data.emc+=value; slotBurn.count--;
          break;
        }
      }
      if(slotBurn.count <= 0) this.container.validateAll();
    }
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", "EMC: "+this.data.emc);
    System.chargeStar(this.container, this.data);
    for(i in this.dirs){
      let dir = this.dirs[i];
      
      let tile = World.getTileEntity(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      
      if(tile && (World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector1 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector2 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector3)){
        if(tile.data.emc > 0 && this.data.emc < this.data.max){
          this.data.emc+=Math.min(this.data.emc, this.emc_out);
          tile.data.emc-=Math.min(this.data.emc, this.emc_out);
        }
      }
      let block = World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      if((block == BlockID.energyCondenser1 || block == BlockID.energyCondenser2) && tile){
    	if(tile.data.emc <= tile.data.maxEmc && this.data.emc > 0){
    	  if(this.data.emc-Math.min(this.data.emc, this.emc_out) >= 0){
    	    this.data.emc-=Math.min(this.data.emc, this.emc_out);
            tile.data.emc+=Math.min(this.data.emc, this.emc_out);
          }
        }
      }
    }
  }
});




// file: relay/tier 2.js

IDRegistry.genBlockID("antimatterRelay2");
Block.createBlockWithRotation("antimatterRelay2", [
	 {name: "Anti-matter Relay II", texture: [
	   ["relayOther",0],
	   ["relayTop",1],
	   ["relayOther",0],
	   ["relayFront",0],
	   ["relayOther",0],
	   ["relayOther",0],
  ],inCreative: true}
], "opaque");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.antimatterRelay2, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay1, 0, "d", ItemID.darkMatter, 0]);

});

TileEntity.registerPrototype(BlockID.antimatterRelay2, {
  defaultValues: {
    emc: 0, max: 1000000
  },
  getGuiScreen: function(){
    return relayUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  emc_out: 64,
  getOut: function(){if(this.data.emc>=this.emc_out) {return this.emc_out} else return 1;},
  tick: function(){
    for(i = 0; i <= 12; i++){
      let slotBurn = this.container.getSlot("input"+i);
      let value = System.getValue(slotBurn.id, slotBurn.data);
      
      if(value){
        if(this.data.emc+value<=this.data.max){
          this.data.emc+=value*slotBurn.count;
          slotBurn.count = 0;
          break;
        }
      }
      if(slotBurn.count <= 0) this.container.validateAll();
    }
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", "EMC: "+this.data.emc);
    System.chargeStar(this.container, this.data);
    for(i in this.dirs){
      let dir = this.dirs[i];
      
      let tile = World.getTileEntity(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      
      if(tile && (World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector1 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector2 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector3)){
        if(tile.data.emc > 0 && this.data.emc < this.data.max){
          this.data.emc+=Math.min(this.data.emc, this.emc_out);
          tile.data.emc-=Math.min(this.data.emc, this.emc_out);
        }
      }
      let block = World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      if((block == BlockID.energyCondenser1 || block == BlockID.energyCondenser2) && tile){
    	if(tile.data.emc <= tile.data.maxEmc && this.data.emc > 0){
    	  if(this.data.emc-Math.min(this.data.emc, this.emc_out) >= 0){
    	    this.data.emc-=Math.min(this.data.emc, this.emc_out);
            tile.data.emc+=Math.min(this.data.emc, this.emc_out);
          }
        }
      }
    }
  }
});




// file: relay/tier 3.js

IDRegistry.genBlockID("antimatterRelay3");
Block.createBlockWithRotation("antimatterRelay3", [
	 {name: "Anti-matter Relay III", texture: [
	   ["relayOther",0],
	   ["relayTop",2],
	   ["relayOther",0],
	   ["relayFront",0],
	   ["relayOther",0],
	   ["relayOther",0],
  ],inCreative: true}
], "opaque");

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.antimatterRelay3, count: 1, data: 0}, 
["odo", 
 "ofo",
 "ooo"],
["o", 49, 0, "f", BlockID.antimatterRelay2, 0, "d", ItemID.redMatter, 0]);

});

TileEntity.registerPrototype(BlockID.antimatterRelay3, {
  defaultValues: {
    emc: 0, max: 10000000
  },
  getGuiScreen: function(){
    return relayUI;
  },
  dirs: [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ],
  emc_out: 128,
  getOut: function(){if(this.data.emc>=this.emc_out) {return this.emc_out} else return 1;},
  tick: function(){
    for(i = 0; i <= 12; i++){
      let slotBurn = this.container.getSlot("input"+i);
      let value = System.getValue(slotBurn.id, slotBurn.data);
      
      if(value){
        if(this.data.emc+value<=this.data.max){
          this.data.emc+=value*slotBurn.count;
          slotBurn.count = 0;
          break;
        }
      }
      if(slotBurn.count <= 0) this.container.validateAll();
    }
    this.container.setScale("emcScale", this.data.emc/this.data.max);
    this.container.setText("text", "EMC: "+this.data.emc);
    System.chargeStar(this.container, this.data);
    for(i in this.dirs){
      let dir = this.dirs[i];
      
      let tile = World.getTileEntity(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      
      if(tile && (World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector1 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector2 || World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z) == BlockID.energyCollector3)){
        if(tile.data.emc > 0 && this.data.emc < this.data.max){
          this.data.emc+=Math.min(this.data.emc, this.emc_out);
          tile.data.emc-=Math.min(this.data.emc, this.emc_out);
        }
      }
      let block = World.getBlockID(this.x+dir.x, this.y+dir.y, this.z+dir.z);
      if((block == BlockID.energyCondenser1 || block == BlockID.energyCondenser2) && tile){
    	if(tile.data.emc <= tile.data.maxEmc && this.data.emc > 0){
    	  if(this.data.emc-Math.min(this.data.emc, this.emc_out) >= 0){
    	    this.data.emc-=Math.min(this.data.emc, this.emc_out);
            tile.data.emc+=Math.min(this.data.emc, this.emc_out);
          }
        }
      }
    }
  }
});




// file: condenser/chest.js

IDRegistry.genBlockID("alchChest");
Block.createBlockWithRotation("alchChest",[{name:"Alchemical chest",texture:[
["alchemicalChestBottom",0],["alchemicalChestBottom",0],["alchemicalChestSide",0],["alchemicalChestFront",0],["alchemicalChestSide",0],["alchemicalChestSide",0]],inCreative:true}]);
Block.setBlockShape(BlockID.alchChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});

var alchChestUI = new UI.StandartWindow({
standart: {
		header: {text: {text: "Alchemical storage"}},
		inventory: {standart: true},
		background: {standart: true}
},
elements: {
slot1:{type:"slot",x:350,y:40,size:50},
slot2:{type:"slot",x:400,y:40,size:50},
slot3:{type:"slot",x:450,y:40,size:50},
slot4:{type:"slot",x:500,y:40,size:50},
slot5:{type:"slot",x:550,y:40,size:50},
slot6:{type:"slot",x:600,y:40,size:50},
slot7:{type:"slot",x:650,y:40,size:50},
slot8:{type:"slot",x:700,y:40,size:50},
slot9:{type:"slot",x:750,y:40,size:50},
slot10:{type:"slot",x:800,y:40,size:50},
slot11:{type:"slot",x:850,y:40,size:50},
slot12:{type:"slot",x:900,y:40,size:50},
slot13:{type:"slot",x:350,y:90,size:50},
slot14:{type:"slot",x:400,y:90,size:50},
slot15:{type:"slot",x:450,y:90,size:50},
slot16:{type:"slot",x:500,y:90,size:50},
slot17:{type:"slot",x:550,y:90,size:50},
slot18:{type:"slot",x:600,y:90,size:50},
slot19:{type:"slot",x:650,y:90,size:50},
slot20:{type:"slot",x:700,y:90,size:50},
slot21:{type:"slot",x:750,y:90,size:50},
slot22:{type:"slot",x:800,y:90,size:50},
slot23:{type:"slot",x:850,y:90,size:50},
slot24:{type:"slot",x:900,y:90,size:50},
slot25:{type:"slot",x:350,y:140,size:50},
slot26:{type:"slot",x:400,y:140,size:50},
slot27:{type:"slot",x:450,y:140,size:50},
slot28:{type:"slot",x:500,y:140,size:50},
slot29:{type:"slot",x:550,y:140,size:50},
slot30:{type:"slot",x:600,y:140,size:50},
slot31:{type:"slot",x:650,y:140,size:50},
slot32:{type:"slot",x:700,y:140,size:50},
slot33:{type:"slot",x:750,y:140,size:50},
slot34:{type:"slot",x:800,y:140,size:50},
slot35:{type:"slot",x:850,y:140,size:50},
slot36:{type:"slot",x:900,y:140,size:50},
slot37:{type:"slot",x:350,y:190,size:50},
slot38:{type:"slot",x:400,y:190,size:50},
slot39:{type:"slot",x:450,y:190,size:50},
slot40:{type:"slot",x:500,y:190,size:50},
slot41:{type:"slot",x:550,y:190,size:50},
slot42:{type:"slot",x:600,y:190,size:50},
slot43:{type:"slot",x:650,y:190,size:50},
slot44:{type:"slot",x:700,y:190,size:50},
slot45:{type:"slot",x:750,y:190,size:50},
slot46:{type:"slot",x:800,y:190,size:50},
slot47:{type:"slot",x:850,y:190,size:50},
slot48:{type:"slot",x:900,y:190,size:50},
slot49:{type:"slot",x:350,y:240,size:50},
slot50:{type:"slot",x:400,y:240,size:50},
slot51:{type:"slot",x:450,y:240,size:50},
slot52:{type:"slot",x:500,y:240,size:50},
slot53:{type:"slot",x:550,y:240,size:50},
slot54:{type:"slot",x:600,y:240,size:50},
slot55:{type:"slot",x:650,y:240,size:50},
slot56:{type:"slot",x:700,y:240,size:50},
slot57:{type:"slot",x:750,y:240,size:50},
slot58:{type:"slot",x:800,y:240,size:50},
slot59:{type:"slot",x:850,y:240,size:50},
slot60:{type:"slot",x:900,y:240,size:50},
slot61:{type:"slot",x:350,y:290,size:50},
slot62:{type:"slot",x:400,y:290,size:50},
slot63:{type:"slot",x:450,y:290,size:50},
slot64:{type:"slot",x:500,y:290,size:50},
slot65:{type:"slot",x:550,y:290,size:50},
slot66:{type:"slot",x:600,y:290,size:50},
slot67:{type:"slot",x:650,y:290,size:50},
slot68:{type:"slot",x:700,y:290,size:50},
slot69:{type:"slot",x:750,y:290,size:50},
slot70:{type:"slot",x:800,y:290,size:50},
slot71:{type:"slot",x:850,y:290,size:50},
slot72:{type:"slot",x:900,y:290,size:50},
slot73:{type:"slot",x:350,y:340,size:50},
slot74:{type:"slot",x:400,y:340,size:50},
slot75:{type:"slot",x:450,y:340,size:50},
slot76:{type:"slot",x:500,y:340,size:50},
slot77:{type:"slot",x:550,y:340,size:50},
slot78:{type:"slot",x:600,y:340,size:50},
slot79:{type:"slot",x:650,y:340,size:50},
slot80:{type:"slot",x:700,y:340,size:50},
slot81:{type:"slot",x:750,y:340,size:50},
slot82:{type:"slot",x:800,y:340,size:50},
slot83:{type:"slot",x:850,y:340,size:50},
slot84:{type:"slot",x:900,y:340,size:50}
}
});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: BlockID.alchChest, count: 1, data: 0}, 
["lmh", 
 "sds",
 "ici"],
["l", ItemID.covDust1, 0, "m", ItemID.covDust2, 0, "h", ItemID.covDust3, 0, "s", 1, 0, "i", 265, 0, "c", 54, 0, "d", 264, 0]);

});

TileEntity.registerPrototype(BlockID.alchChest, {
	 getGuiScreen: function(){
	   	return alchChestUI;
	 	},
	 getTransportSlots: function(){
		let inputC = [];
	   let outputC = [];
	 	  for(i=0;i<84;i++){
	     inputC.push("slot"+i); 
	     outputC.push("slot"+i);
	   }
   	 
	   return {input: inputC, output: outputC}
	 	},
});





// file: condenser/tier 1.js

IDRegistry.genBlockID("energyCondenser1");
Block.createBlockWithRotation("energyCondenser1", [
	 {name: "Energy Condenser I", texture: [
	   ["condenserBottom",0],
	   ["condenserTop",0],
	   ["condenserSide",0],
	   ["condenserFront",0],
	   ["condenserSide",0],
	   ["condenserSide",0],
  ],inCreative: true}
]);

Block.setBlockShape(BlockID.energyCondenser1,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ICRender.getGroup("item-pipe").add(BlockID.energyCondenser1, -1);
ICRender.getGroup("bc-container").add(BlockID.energyCondenser1, -1);

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCondenser1, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", 49, 0, "d", 264, 0, "c", BlockID.alchChest, 0]);

});

var condenserUI = new UI.StandartWindow({
	 standart: {
		  header: {text: {text: "Energy condenser"}},
		  inventory: {standart: true},
		  background: {standart: true},
		  //minHeight: 640
	 }, 
	 drawing: [
    {type: "bitmap", x: 500, y: 100, bitmap: "emcBar_0", scale: 4},
  ],
  	elements: {
    "item": {type: "slot", x: 420, y: 100},
    "emcScale": {type: "scale", x: 500, y: 100, bitmap: "emcBar_1", scale: 4},
    "emcText": {type: "text", x: 500, y: 50, width: 100, height: 30, text: ""},
    "slotCatalyst0": {type: "slot", x: 400, y: 240},
    "slotCatalyst1": {type: "slot", x: 460, y: 240},
    "slotCatalyst2": {type: "slot", x: 520, y: 240},
    "slotCatalyst3": {type: "slot", x: 580, y: 240},
    "slotCatalyst4": {type: "slot", x: 640, y: 240},
    "slotCatalyst5": {type: "slot", x: 700, y: 240},
    "slotCatalyst6": {type: "slot", x: 760, y: 240},
    "slotCatalyst7": {type: "slot", x: 820, y: 240},
    "slotCatalyst8": {type: "slot", x: 400, y: 300},
    "slotCatalyst9": {type: "slot", x: 460, y: 300},
    "slotCatalyst10": {type: "slot", x: 520, y: 300},
    "slotCatalyst11": {type: "slot", x: 580, y: 300},
    "slotCatalyst12": {type: "slot", x: 640, y: 300},
    "slotCatalyst13": {type: "slot", x: 700, y: 300},
    "slotCatalyst14": {type: "slot", x: 760, y: 300},
    "slotCatalyst15": {type: "slot", x: 820, y: 300},
    "slotCatalyst16": {type: "slot", x: 400, y: 360},
    "slotCatalyst17": {type: "slot", x: 460, y: 360},
    "slotCatalyst18": {type: "slot", x: 520, y: 360},
    "slotCatalyst19": {type: "slot", x: 580, y: 360},
    "slotCatalyst20": {type: "slot", x: 640, y: 360},
    "slotCatalyst21": {type: "slot", x: 700, y: 360},
    "slotCatalyst22": {type: "slot", x: 760, y: 360},
    "slotCatalyst23": {type: "slot", x: 820, y: 360},
    "slotCatalyst24": {type: "slot", x: 400, y: 420},
    "slotCatalyst25": {type: "slot", x: 460, y: 420},
    "slotCatalyst26": {type: "slot", x: 520, y: 420},
    "slotCatalyst27": {type: "slot", x: 580, y: 420},
    "slotCatalyst28": {type: "slot", x: 640, y: 420},
    "slotCatalyst29": {type: "slot", x: 700, y: 420},
    "slotCatalyst30": {type: "slot", x: 760, y: 420},
    "slotCatalyst31": {type: "slot", x: 820, y: 420},
	 }
});

var directions = [
  {x:0,y:1,z:0},
  {x:0,y:-1,z:0},
  {x:1,y:0,z:0},
  {x:-1,y:0,z:0},
  {x:0,y:0,z:1},
  {x:0,y:0,z:-1},
];

TileEntity.registerPrototype(BlockID.energyCondenser1, {
  	defaultValues: {
	   	emc: 0, maxEmc: 0, work: false
		},	
	 getGuiScreen: function(){
		  return condenserUI;
	 	},
	 	getTransportSlots: function(){
	 	let inp = [];
	 	
	 	for(let i = 0; i <= 31; i ++){
	 	  inp.push("slotCatalyst"+i);
	 	}
	 	out = [];
	     if(this.container.getSlot("item").count > 1) out.push("item");
	 	return {
             input: inp,
             output: out
           }
	 	},
	 tick: function(){
   	this.container.setText("emcText",this.data.emc);
	   let slotItem = this.container.getSlot("item");
	   for(let i = 0; i <= 31; i ++){
	     let slotCatalyst = this.container.getSlot("slotCatalyst"+i);
	     let val = System.getValue(slotCatalyst.id, slotCatalyst.data);
	     if(val && System.getValue(slotItem.id, slotItem.data) && slotItem.count <= 64 && slotItem.id != slotCatalyst.id){
	       this.data.emc+=val;
	       slotCatalyst.count--;
	       this.container.validateAll();
	       break;
	     }
	   }
	   
	   if(System.getValue(slotItem.id, slotItem.data)){
	     this.data.maxEmc = System.getValue(slotItem.id, slotItem.data);
	     this.container.setScale("emcScale", this.data.emc/this.data.maxEmc);
	     if(!this.data.work) this.data.work = true;
	   } else {
		 if(this.data.work) this.data.work = false;
	     this.data.maxEmc = 0;
	     this.container.setScale("emcScale", 0);
	   }
	   
    if(System.getValue(slotItem.id, slotItem.data) && this.data.emc >= System.getValue(slotItem.id, slotItem.data) && slotItem.count < 64){
	  this.data.emc -= System.getValue(slotItem.id, slotItem.data);
	  slotItem.count++;
    }
  }
});




// file: condenser/tier 2.js

IDRegistry.genBlockID("energyCondenser2");
Block.createBlockWithRotation("energyCondenser2", [
	 {name: "Energy Condenser II", texture: [
	   ["condenserBottom",0],
	   ["condenserTop",0],
	   ["condenserSide",0],
	   ["condenserFront",0],
	   ["condenserSide",0],
	   ["condenserSide",0],
  ],inCreative: true}
]);

Block.setBlockShape(BlockID.energyCondenser2,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});
ICRender.getGroup("item-pipe").add(BlockID.energyCondenser2, -1);
ICRender.getGroup("bc-container").add(BlockID.energyCondenser2, -1);

Callback.addCallback("PostLoaded",function(){

Recipes.addShaped({id: BlockID.energyCondenser2, count: 1, data: 0}, 
["odo", 
 "dcd",
 "odo"],
["o", BlockID.dmBlock, 0, "d", BlockID.rmBlock, 0, "c", BlockID.energyCondenser1, 0]);

});

TileEntity.registerPrototype(BlockID.energyCondenser2, {
  	defaultValues: {
	   	emc: 0, maxEmc: 0, work: false
		},	
	     getGuiScreen: function(){
		  return condenserUI;
	 	},
	 	getTransportSlots: function(){
	 	let inp = [];
	 	
	 	for(let i = 0; i <= 31; i ++){
	 	  inp.push("slotCatalyst"+i);
	 	}
	 	out = [];
	     if(this.container.getSlot("item").count > 1) out.push("item");
	 	return {
             input: inp,
             output: out
           }
	 	},
	 tick: function(){
   	 this.container.setText("emcText",this.data.emc);
	   let slotItem = this.container.getSlot("item");
	   for(let i = 0; i <= 31; i ++){
	     let slotCatalyst = this.container.getSlot("slotCatalyst"+i);
	     let val = System.getValue(slotCatalyst.id, slotCatalyst.data);
	     if(val && System.getValue(slotItem.id, slotItem.data) && slotItem.count <= 64 && slotItem.id != slotCatalyst.id){
	       this.data.emc+=val*slotCatalyst.count;
	       slotCatalyst.count = 0;
	       this.container.validateAll();
	       break;
	     }
	   }
	   
	   if(System.getValue(slotItem.id, slotItem.data)){
	     this.data.maxEmc = System.getValue(slotItem.id, slotItem.data);
	     this.container.setScale("emcScale", this.data.emc/this.data.maxEmc);
	     if(!this.data.work) this.data.work = true;
	   } else {
		 if(this.data.work) this.data.work = false;
	     this.data.maxEmc = 0;
	     this.container.setScale("emcScale", 0);
	   }
	   
    if(System.getValue(slotItem.id, slotItem.data) && slotItem.count < 64){
      while(this.data.emc >= System.getValue(slotItem.id, slotItem.data)){
        if(slotItem.count < 64){
	      this.data.emc -= System.getValue(slotItem.id, slotItem.data);
	      slotItem.count++;
	    } else break;
	  }
    }
  }
});




// file: rings/black hole.js

IDRegistry.genItemID("ringBlackHoleInactive");
Item.createItem("ringBlackHoleInactive", "Void ring", {name: "ringBlackHole", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.ringBlackHoleInactive, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", ItemID.ironBand, 0, "d", ItemID.darkMatter, 0, "s", 287, 0]);
});

IDRegistry.genItemID("ringBlackHole");
Item.createItem("ringBlackHole", "Void ring", {name: "ringBlackHole", meta: 1}, {stack: 1, isTech: true});

SetDescription(ItemID.ringBlackHoleInactive, "§3Suck nearest items into your inventory.\n§4Inactive");
SetDescription(ItemID.ringBlackHole, "§3Suck nearest items into your inventory.\n§2Active");

Rings.activateRing(ItemID.ringBlackHoleInactive, ItemID.ringBlackHole, true);

Rings.addRingFunction(ItemID.ringBlackHole, function(){
  let player = Player.getPosition();
  let _item = Entity.getAllInRange({x: player.x, y: player.y, z: player.z}, 7, 64);
  
  for(i in _item){
    let item = _item[i];
    
    if(item){
      
    }
  }
});

function getEmptyContainerSlot(cont){
  if(!cont.tileEntity){
    for(i = 0; i <= cont.getSize(); i ++){
      return true;
      break;
    }
  }
  return false;
}

Rings.addPedestalFunction(ItemID.ringBlackHoleInactive, function(tile){
  var dirs = [
    {x: 0, y: 1, z: 0},
    {x: 0, y:-1, z: 0},
    {x: 1, y: 0, z: 0},
    {x:-1, y: 0, z: 0},
    {x: 0, y: 0, z: 1},
    {x: 0, y: 0, z:-1},
  ];
  
  for(_d in dirs){
    let d = dirs[_d];
    let cont = World.getContainer(tile.x+d.x, tile.y+d.y, tile.z+d.z);
    if(cont && !cont.tileEntity){
      for(i = 0; i <= cont.getSize(); i ++){
        let _item = Entity.getAllInRange({x: tile.x, y: tile.y, z: tile.z}, 7, 64);
        for(i in _item){
          item = Entity.getDroppedItem(_item[i]);
          slot = cont.getSlot(i);
          if(!slot.id && item && getEmptyContainerSlot(cont)){
            slot.id = item.id;
            slot.count = item.count;
            slot.data = item.data;
            cont.setSlot(i, slot.id, slot.count, slot.data);
            Entity.remove(_item[i]);
            break
          } else if(slot.id == item.id && slot.count+item.count <= 64) {
            slot.count+=item.count;
            cont.setSlot(i, slot.id, slot.count, slot.data);
            Entity.remove(_item[i]);
            break
          }
        }
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.ringBlackHole)){
    Rings.getRingFunction(ItemID.ringBlackHole).inv();
  }
});




// file: rings/talisman of repair.js

IDRegistry.genItemID("talismanRepair");
Item.createItem("talismanRepair", "Talisman of repair", {name: "talismanRepair", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.talismanRepair, count: 1, data: 0}, 
["abc", 
 "pps",
 "abc"],
["a", ItemID.covDust1, 0, "b", ItemID.covDust2, 0, "c", ItemID.covDust3, 0, "p", 339, 0, "s", 287, 0]);
});


var toolList = {
  //etc
  261: true, 259: true, 359: true,
  //iron
  256: true, 257: true, 258: true, 267: true, 256: true, 292: true,
  //wooden
  268: true, 269: true, 270: true, 271: true, 290: true, 
  //stone
  272: true, 273: true, 274: true, 275: true, 291: true,
  //diamond
  276: true, 277: true, 278: true, 279: true, 293: true, 
  //golden
  283: true, 284: true, 285: true, 286: true, 294: true
};

Rings.addRingFunction(ItemID.talismanRepair, function(){
  for(i = 0; i < 36; i ++){
    let item = Player.getInventorySlot(i);
    if(toolList[item.id]){
      if(World.getThreadTime()%15 == 0 && item.data > 0){
        Player.setInventorySlot(i, item.id, item.count, item.data-1, item.extra);
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.talismanRepair)){
    Rings.getRingFunction(ItemID.talismanRepair).inv();
  }
});




// file: rings/pedestal.js

IDRegistry.genBlockID("pedestalMatter");
Block.createBlock("pedestalMatter", [
	 {name: "§bMatter pedestal", texture: [
	   ["dmBlock",0],
  ],inCreative: __config__.getBool("matter_pedestal")}
]);

Block.setBlockShape(BlockID.pedestalMatter, {x: 0.3, y: 0, z: 0.3}, {x: 0.7, y: .7, z: 0.7});

Callback.addCallback("PostLoaded", function (){
if(__config__.getBool("matter_pedestal")) Recipes.addShaped({id: BlockID.pedestalMatter, count: 1, data: 0}, 
["rir", 
 "rir",
 "iii"],
["r", ItemID.redMatter, 0, "i", BlockID.dmBlock, 0]);
});

var pedestalUI = new UI.StandartWindow({
	 standart: {
	   	header: {text: {text: "Pedestal"}},
		  inventory: {standart: true},
		  background: {standart: true}
	 },
	 	elements: {
		  "ring": {type: "slot", x: 550, y: 100},
  }
});

TileEntity.registerPrototype(BlockID.pedestalMatter, {
  defaultValues: {
    active: false
  },
  initAnimation: function(id){
	this.animation = new Animation.Item(this.x + .5, this.y+1, this.z + .5);
	 if(this.container.getSlot("ring").id != 0){
	   this.animation.describeItem({
		 id: this.container.getSlot("ring").id,
	     count: this.container.getSlot("ring").count,
	     data: this.container.getSlot("ring").data,
	     rotation: "y",
	     size: 0.6
	   });
	   this.animation.load();
	 }
   },
   init: function(){
 	this.initAnimation();
   },
   destroy: function(){
    if(this.animation) this.animation.destroy();
  },
  updateAnim: function(){
	 if(this.animation){
	  this.animation.destroy();
	  this.initAnimation();
    }
  },
  getGuiScreen: function(){
    return pedestalUI;
  },
  click: function(){
    if(Entity.getSneaking(Player.get()) && Rings.getPedestalFunction(this.container.getSlot("ring").id, this)){
      this.data.active = !this.data.active;
      if(this.data.active){
        Game.message("Ring activated!");
        PlaySoundFile("pecharge.ogg");
      } else {
        Game.message("Ring disabled!");
        PlaySoundFile("peuncharge.ogg");
      }
    }
  },
  tick: function(){
    let ring = this.container.getSlot("ring");
    if(World.getThreadTime()%10 == 0) this.updateAnim();
    if(this.data.active && Rings.getPedestalFunction(ring.id)){
      Rings.getPedestalFunction(ring.id)(this);
    }
  }
});




// file: rings/time watch.js

IDRegistry.genItemID("watchTime");
Item.createItem("watchTime", "Watch of flowing time", {name: "timeWatch", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.watchTime, count: 1, data: 0}, 
["dsd", 
 "gcg",
 "dsd"],
["c", 351, 4, "g", 89, 0, "c", 347, 0, "d", ItemID.darkMatter, 0, "s", 49, 0]);
});

Rings.addPedestalFunction(ItemID.watchTime, function(tile){
  for(xx = -6; xx < 6; xx++){
    for(yy = -6; yy < 6; yy++){
      for(zz = -6; zz < 6; zz++){
        let tile_ent = World.getTileEntity(tile.x + xx, tile.y + yy, tile.z + zz);
        let block = World.getBlock(tile.x + xx, tile.y + yy, tile.z + zz);
        if(tile_ent && block.id != BlockID.pedestalMatter){
          if(tile_ent.tick){
            //for(i = 0; i <= 7; i ++){
              tile_ent.tick();
            //}
            //Game.message(tile_ent.tick.toString());
          }
        }
      }
    }
  }
});




// file: rings/body stone.js

IDRegistry.genItemID("bodyStone");
Item.createItem("bodyStone", "Body stone", {name: "bodyStone", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.bodyStone, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", 351, 4, "d", ItemID.redMatter, 0, "s", 353, 0]);
});

SetDescription(ItemID.bodyStone, "§3On pedestal: restores hunger to nearest player every 0.2 sec.");

Rings.addPedestalFunction(ItemID.bodyStone, function(tile){
  if(World.getThreadTime()%5 == 0){
    let player = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, Player.get(), 11);
    
    Player.setHunger(Player.getHunger()+2);
  }
});




// file: rings/soul stone.js

IDRegistry.genItemID("soulStone");
Item.createItem("soulStone", "Soul stone", {name: "soulStone", meta: 0}, {stack: 1});

SetDescription(ItemID.soulStone, "§3On pedestal: restores health to nearest player every 0.5 sec.");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.soulStone, count: 1, data: 0}, 
["sss", 
 "dbd",
 "sss"],
["b", 351, 4, "d", ItemID.redMatter, 0, "s", 348, 0]);
});

Rings.addPedestalFunction(ItemID.soulStone, function(tile){
  if(World.getThreadTime()%10 == 0 && Entity.getHealth(Player.get()) < 20){
    let player = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, Player.get(), 11);
    
    Entity.setHealth(Player.get(), Entity.getHealth(Player.get())+2);
  }
});




// file: rings/harvest ring.js

IDRegistry.genItemID("harvestRing");
Item.createItem("harvestRing", "Ring of harvest goodness", {name: "harvestRing", meta: 0}, {stack: 1});

SetDescription(ItemID.harvestRing, "§3On pedestal: instantly growths plants and harvest them every 1 sec.");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.harvestRing, count: 1, data: 0}, 
["sfs", 
 "dbd",
 "sfs"],
["b", ItemID.ironBand, 0, "d", ItemID.darkMatter, 0, "s", 6, 0, "f", 38, 0]);
});

var PLANT_LIST = {
  141: 7, 142: 7, 244: 7, 59: 7, 127: 3
}

Rings.addRingFunction(ItemID.harvestRing, function(){
  if(World.getThreadTime()%20 == 0){
    for(xx = -4; xx <= 4; xx ++){
      for(zz = -4; zz <= 4; zz ++){
        let block = World.getBlock(Player.getPosition().x+xx, Player.getPosition().y-1, Player.getPosition().z+zz);
        if(PLANT_LIST[block.id]){
          World.setBlock(Player.getPosition().x+xx, Player.getPosition().y-1, Player.getPosition().z+zz, block.id, PLANT_LIST[block.id]);
        }
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.harvestRing)){
    Rings.getRingFunction(ItemID.harvestRing).inv();
  }
});

Rings.addPedestalFunction(ItemID.harvestRing, function(tile){
  if(World.getThreadTime()%10 == 0){
    for(xx = -4; xx <= 4; xx ++){
      for(zz = -4; zz <= 4; zz ++){
        let block = World.getBlock(tile.x+xx, tile.y, tile.z+zz);
        if(PLANT_LIST[block.id]){
          World.setBlock(tile.x+xx, tile.y, tile.z+zz, block.id, PLANT_LIST[block.id]);
        }
        if(block.data >= PLANT_LIST[block.id]){
          World.destroyBlock(tile.x+xx, tile.y, tile.z+zz, true);
          World.setBlock(tile.x+xx, tile.y, tile.z+zz, block.id, 0);
        }
      }
    }
  }
});




// file: rings/zero.js

IDRegistry.genItemID("ringZero");
Item.createItem("ringZero", "Ring of Zero", {name: "ringZero", meta: 0}, {stack: 1});

IDRegistry.genItemID("ringZeroActivated");
Item.createItem("ringZeroActivated", "Ring of Zero", {name: "ringZero", meta: 1}, {stack: 1, isTech: true});

SetDescription(ItemID.ringZero, "§3On pedestal: harm nearest hostle creature with ice.\nFreezes water\nActivates every 2 seconds");
SetDescription(ItemID.ringZeroActivated, "§3On pedestal: harm nearest hostle creature with ice.\nFreezes water\nActivates every 2 seconds");

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.ringZero, count: 1, data: 0}, 
["sas", 
 "dbd",
 "sas"],
["b", ItemID.ironBand, 0, "d", ItemID.darkMatter, 0, "s", 80, 0, "a", 332, 0]);
});


Rings.activateRing(ItemID.ringZero, ItemID.ringZeroActivated, true);

Rings.addPedestalFunction(ItemID.ringZero, function(tile){
  if(World.getThreadTime()%40 == 0){
    for(i in evilList){
      let entity = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, evilList[i], 4);
      
      if(entity){
        Entity.damageEntity(entity, 4);
      }
    }
    
    for(xx = -4; xx <= 4; xx ++){
      for(zz = -4; zz <= 4; zz ++){
        let block = World.getBlock(tile.x+xx, tile.y-1, tile.z+zz);
        if(block.id == 9){
          World.setBlock(tile.x+xx, tile.y-1, tile.z+zz, 79, 0);
        }
      }
    }
  }
});

Rings.addRingFunction(ItemID.ringZeroActivated, function(){
  let tile = Player.getPosition();
  for(xx = -1; xx <= 1; xx ++){
    for(zz = -1; zz <= 1; zz ++){
      let block = World.getBlock(tile.x+xx, tile.y-2, tile.z+zz);
      if(block.id == 9){
        World.setBlock(tile.x+xx, tile.y-2, tile.z+zz, 79, 0);
      }
    }
  }
});

Callback.addCallback("tick", function(){
  if(Rings.get(ItemID.ringZeroActivated)){
    Rings.getRingFunction(ItemID.ringZeroActivated).inv();
  }
});




// file: rings/swift.js

IDRegistry.genItemID("swiftWolfRendingGale");
Item.createItem("swiftWolfRendingGale", "Swift Wolf's Rending Gale", {name: "swiftWolfRendingGale", meta: 0}, {stack: 1});

SetDescription(ItemID.swiftWolfRendingGale, "§3On pedestal: shoots ligthning into nearest hostle creature every 1 sec.");

Rings.addPedestalFunction(ItemID.swiftWolfRendingGale, function(tile){
  if(World.getThreadTime()%15 == 0){
    for(i in evilList){
      let entity = Entity.findNearest({x: tile.x, y: tile.y, z: tile.z}, evilList[i], 20);
      if(entity){
        let crd = Entity.getPosition(entity);
        Entity.spawn(crd.x, crd.y, crd.z, 93);
      }
    }
  }
});




// file: rings/amulets.js

IDRegistry.genItemID("evertideAmulet");
Item.createItem("evertideAmulet", "Evertide Amulet", {name: "evertideAmulet", meta: 0}, {stack: 1});
LiquidRegistry.registerItem("water", {id: ItemID.everideAmulet, data: 0}, {id: ItemID.everideAmulet, data: 0});

IDRegistry.genItemID("vulcaniteAmulet");
Item.createItem("vulcaniteAmulet", "Vulcanite Amulet\n§7Doesn't work...", {name: "vulcaniteAmulet", meta: 0}, {stack: 1});

Callback.addCallback("PostLoaded", function (){
  Recipes.addShaped({id: ItemID.evertideAmulet, count: 1, data: 0}, 
     ["www", 
      "mmm",
      "www"],
    ["w", 325, 8, "m", ItemID.darkMatter, 0
  ]);
  
  Recipes.addShaped({id: ItemID.vulcaniteAmulet, count: 1, data: 0}, 
     ["www", 
      "mmm",
      "www"],
    ["w", 325, 11, "m", ItemID.darkMatter, 0
  ]);
});

Item.registerUseFunction("evertideAmulet", function (crd, i, b){
  var c = crd.relative;
  if(World.getBlockID(c.x, c.y, c.z) == 0){
    World.setBlock(c.x, c.y, c.z, 8, 0);
  }
});




// file: philosophers stone.js

function addPhilosophersStoneRecipe(item, input){
  let ingridients = [];
  for(i = 0; i < input.count; i++){
    ingridients.push({id: input.id, data: input.data});
  }
  
  Recipes.addCraftToolRecipeItem(
    {id: item.id, count: item.count, data: item.data}, ingridients, ItemID.philosophersStone
  );
}

Callback.addCallback("PostLoaded", function(){
Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelAlchemical, count: 1, data: 0}, [
    {id: 263, data: 0},
    {id: 263, data: 0},
    {id: 263, data: 0},
    {id: 263, data: 0},
  ], ItemID.philosophersStone
);

Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelMobius, count: 1, data: 0}, [
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
    {id: ItemID.fuelAlchemical, data: 0},
  ], ItemID.philosophersStone
);

Recipes.addCraftToolRecipeItem(
  {id: ItemID.fuelAstral, count: 1, data: 0}, [
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
    {id: ItemID.fuelMobius, data: 0},
  ], ItemID.philosophersStone
);

addPhilosophersStoneRecipe({id: 263, data: 0, count: 4}, {id: ItemID.fuelAlchemical, count: 1, data: 0});
addPhilosophersStoneRecipe({id: ItemID.fuelAlchemical, data: 0, count: 4}, {id: ItemID.fuelMobius, count: 1, data: 0});
addPhilosophersStoneRecipe({id: ItemID.fuelMobius, data: 0, count: 4}, {id: ItemID.fuelAstral, count: 1, data: 0});

addPhilosophersStoneRecipe({id: 368, data: 0, count: 1}, {id: 265, count: 4, data: 0});
addPhilosophersStoneRecipe({id: 263, data: 1, count: 4}, {id: 263, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 263, data: 0, count: 1}, {id: 263, count: 4, data: 1});
addPhilosophersStoneRecipe({id: 266, data: 0, count: 1}, {id: 265, count: 8, data: 0});
addPhilosophersStoneRecipe({id: 265, data: 0, count: 8}, {id: 266, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 264, data: 0, count: 1}, {id: 266, count: 4, data: 0});
addPhilosophersStoneRecipe({id: 266, data: 0, count: 4}, {id: 264, count: 1, data: 0});
addPhilosophersStoneRecipe({id: 388, data: 0, count: 1}, {id: 264, count: 2, data: 0});
addPhilosophersStoneRecipe({id: 264, data: 0, count: 2}, {id: 388, count: 1, data: 0});
});



Item.registerUseFunction("philosophersStone", function(crd, item, block){
  if(Entity.getSneaking(Player.get())){
    switch(block.id){
      case 1:
        World.setBlock(crd.x,crd.y,crd.z,2);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 2:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 4:
        World.setBlock(crd.x,crd.y,crd.z,2);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 12:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 24:
        World.setBlock(crd.x,crd.y,crd.z,13);
        PlaySoundFile("petransmute.ogg");
      break;
    }
  } else {
    switch(block.id){
      case 1:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 4:
        World.setBlock(crd.x,crd.y,crd.z,1);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 2:
        World.setBlock(crd.x,crd.y,crd.z,12);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 12:
        World.setBlock(crd.x,crd.y,crd.z,2);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 13:
        World.setBlock(crd.x,crd.y,crd.z,24);
        PlaySoundFile("petransmute.ogg");
      break;
      
      case 87:
        World.setBlock(crd.x,crd.y,crd.z,4);
        PlaySoundFile("petransmute.ogg");
      break;
    }
  }
});

//mobs

Callback.addCallback("PlayerAttack", function(player,victim){
  let item = Player.getCarriedItem();
  
  if(item.id==ItemID.philosophersStone){
  Game.prevent();
    for(let i = 0; i < 36; i++){
      if(Player.getInventorySlot(i).id==348){
        Player.setInventorySlot(i, 348, Player.getInventorySlot(i).count-1, 0);
        if(!Player.getInventorySlot(i).count) Player.setInventorySlot(i, 0, 0, 0);
        for(h in evilList){
          if(Entity.getType(victim)==evilList[h]){
            Entity.spawn(Entity.getPosition(victim).x, Entity.getPosition(victim).y, Entity.getPosition(victim).z, choose(evilList));
            Entity.remove(victim);
            PlaySoundFile("phiball.ogg");
          }
        }
        for(a in friendlyList){
          if(Entity.getType(victim)==friendlyList[a]){
            Entity.spawn(Entity.getPosition(victim).x, Entity.getPosition(victim).y, Entity.getPosition(victim).z, choose(friendlyList));
            Entity.remove(victim);
            PlaySoundFile("phiball.ogg");
          }
        }
      }
      break;
    }
  }
});




// file: explosive.js

IDRegistry.genBlockID("explosive1");
Block.createBlock("explosive1", [
	 {name: "Nova catalyst", texture: [
	   ["explosiveTop",0],
	   ["explosiveBottom",0],
	   ["explosiveSide",0],
  ],inCreative: true}
], "opaque");

IDRegistry.genBlockID("explosive2");
Block.createBlock("explosive2", [
	 {name: "Astral catalyst", texture: [
	   ["explosiveTop",0],
	   ["explosiveBottom",0],
	   ["explosiveSide",1],
  ],inCreative: true}
], "opaque");

Callback.addCallback("ItemUse", function (c, i, b){
  if(i.id == 259 && (b.id == BlockID.explosive1 || b.id == BlockID.explosive2)){
    World.getTileEntity(c.x, c.y, c.z).data.flame = 1;
    Game.prevent();
    Game.message("Catalyst will explode in 4 sec.! Run away!");
  }
});

TileEntity.registerPrototype(BlockID.explosive1, {
  defaultValues: {
    flame: 0, time: 110
  },
  radius: 3,
  tick: function (){
    if(this.data.flame){
      this.data.time--;
    }
    if(!this.data.time){
      for(x = -this.radius; x <= this.radius; x++){
        for(y = -this.radius; y <= this.radius; y++){
          for(z = -this.radius; z <= this.radius; z++){
            block = World.getBlock(this.x+x, this.y+y, this.z+z);
            if(block.id == BlockID.explosive1 || block.id == BlockID.explosive2){
              World.getTileEntity(this.x+x, this.y+y, this.z+z).time = 0;
            }
            if(System.getValue(block.id, block.data) <= 1){
              World.setBlock(this.x+x, this.y+y, this.z+z, 0);
            }
          }
        }
      }
      for(x1 = -this.radius*2; x1 <= this.radius*2; x1 ++){
        for(y1 = -this.radius*2; y1 <= this.radius*2; y1 ++){
          for(z1 = -this.radius*2; z1 <= this.radius*2; z1 ++){
            if(Math.random()<=.8){
              World.setBlock(this.x+x1, this.y+y1, this.z+z1, 0);
            }
          }
        }
      }
    }
  }
});

TileEntity.registerPrototype(BlockID.explosive2, {
  defaultValues: {
    flame: 0, time: 120
  },
  radius: 5,
  tick: function (){
    if(this.data.flame){
      this.data.time--;
    }
    if(!this.data.time){
      for(x = -this.radius; x <= this.radius; x++){
        for(y = -this.radius; y <= this.radius; y++){
          for(z = -this.radius; z <= this.radius; z++){
            block = World.getBlock(this.x+x, this.y+y, this.data+z);
            if(block.id == BlockID.explosive1 || block.id == BlockID.explosive2){
              World.getTileEntity(this.x+x, this.y+y, this.z+z).time = 0;
            }
            if(System.getValue(block.id, block.data) <= 1){
              World.setBlock(this.x+x, this.y+y, this.z+z, 0);
            }
          }
        }
      }
      for(x1 = -this.radius*2; x1 <= this.radius*2; x1 ++){
        for(y1 = -this.radius*2; y1 <= this.radius*2; y1 ++){
          for(z1 = -this.radius*2; z1 <= this.radius*2; z1 ++){
            if(Math.random()<=.8){
              World.setBlock(this.x+x1, this.y+y1, this.z+z1, 0);
            }
          }
        }
      }
    }
  }
});




// file: custom.js

var CUSTOM_DIR = __dir__+"/custom.json";

Callback.addCallback("LevelLoaded", function(){
  arr = FileTools.ReadJSON(CUSTOM_DIR);
  for(i in arr){
    System.setValue(arr[i].id, arr[i].data, arr[i].emc);
  }
});

Callback.addCallback("NativeCommand", function(str){
  var arr = FileTools.ReadJSON(CUSTOM_DIR);
  cmd = str.split(" ");
  
  if(cmd[0] == "/projecte"){
    if(cmd[1] == "set"){
      var arr = FileTools.ReadJSON(CUSTOM_DIR);
      if(cmd[2] || cmd[3] || cmd[4]){
        arr.push({
          id: cmd[2], data: cmd[3], emc: cmd[4]
        });
        FileTools.WriteJSON(CUSTOM_DIR, arr);
        Game.message("Succesfully setted value for "+Item.getName(cmd[2], cmd[3])+"\nType /projecte reload, to apply changes");
      }
    } else Game.message("Aviable commands: \n/projecte set <id> <data> <value>\n/projecte reload\n/projecte clear");
    
    if(cmd[1] == "clear"){
      FileTools.WriteJSON(CUSTOM_DIR, "[]");
      Game.message("Succesfully  cleared all custom EMC configuration.");
    } else Game.message("Aviable commands: \n/projecte set <id> <data> <value>\n/projecte reload\n/projecte clear");
    
    
    if(cmd[1] == "reload"){
      for(i in arr){
        System.setValue(arr[i].id, arr[i].data, arr[i].emc);
      }
      DefineEmcFromRecipe();
      Game.message("Custom values was updated");
    }
    Game.prevent();
  }
});




