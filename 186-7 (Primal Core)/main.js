/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 24
*/



// file: api/primal_api.js

importLib("ToolType","*");
importLib("SoundAPI","*");

var breakItem = function(){
let item = Player.getCarriedItem();
  if(item.data<=Item.getMaxDamage(item.id)){
    Player.setCarriedItem(item.id,1,item.data+1);
  } else Player.decreaseCarriedItem();
}

const Generator = {
  setItem: function(id,othr,spec){
    if(!othr.meta) othr.meta=0;
    IDRegistry.genItemID(id);
    Item.createItem(id, othr.name, {name: othr.texture, meta: othr.meta}, {stack: othr.stack});
  },
  setFoodItem: function(id,othr,spec){
    if(!othr.meta) othr.meta=0;
    IDRegistry.genItemID(id);
    Item.createFoodItem(id, othr.name, {name: othr.texture, meta: othr.meta}, {stack: othr.stack, food: othr.food});
  },
  setItems: function(id, types){
    for(i in types){
      this.setItem(id+types[i], {
        name: types[i]+" "+id, texture: id+types[i], stack: 64
      });
    }
  }
};

var DryingRack = {
  recipes: {},
  addRecipe: function(id, time, result){
    this.recipes[id] = {time: time, id: result};
  },
  getRecipe: function(id){
    if(this.recipes[id]){
      return this.recipes[id];
    } else return 0;
  },
  removeRecipe: function(id){
    if(this.recipes[id]){
      delete this.recipes[id];
    }
  },
};

var Cauldron = {
  recipes: {},
  addRecipe: function(src, result){
    this.recipes[src[0]+":"+src[1]+":"+src[2]+":"+src[3]] = {id: result.id, data: result.data, liquid: {name: result.liquid.name, amount: result.liquid.amount}};
  },
  getRecipe: function(inp){
    return this.recipes[inp[0]+":"+inp[1]+":"+inp[2]+":"+inp[3]];
  }
};

ToolType.workblade = {
	isWeapon: true,
	damage: 3,
	baseDamage: 4,
	blockTypes: ["fibre", "plant"],
	 onDestroy: function(item){
    item.data++;
  },
  onBroke: function(item){
    item.id=item.count=item.data=0;
  },
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
    if(block.id==18||block.id==161){
      return 0;
    } else destroyTime;
  }
};

ToolType.hatchet = {
	isWeapon: false,
	damage: 3,
	baseDamage: 4,
	blockTypes: ["wood"],
	 onDestroy: function(item){
    item.data++;
  },
  onBroke: function(item){
    item.id=item.count=item.data=0;
  },
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
    if(ToolAPI.blockData[block.id].material.name=="wood"){
      return destroyTime-0.1;
    } else return destroyTime;
  }
};

ToolType.shears = {
	isWeapon: false,
	damage: 1,
	baseDamage: 0,
	blockTypes: ["plant", "fibre", "fiber"],
	 onDestroy: function(item){
    item.data++;
  },
  onBroke: function(item){
    item.id=item.count=item.data=0;
  },
  calcDestroyTime: function(item, coords, block, params, destroyTime, enchant){
    if(block.id==18||block.id==161){
      return 0;
    } else return destroyTime;
  }
};


var workblades = [];
var saws = [];
var gallaghers = [];
var ToolBuilder = {
  materials: [],
  addMaterial: function(name,data,lvl,eff,dam){
    ToolAPI.addToolMaterial(name, {durability: data, level: lvl, efficiency: eff, damage: dam});
    this.materials.push(name);
  },
  setPickaxe: function(mater){
    Generator.setItem(mater+"_pickaxe", {
      name: mater+" pickaxe", texture: mater+"_pickaxe", stack: 1
    });
    ToolAPI.setTool(ItemID[mater+"_pickaxe"],mater,ToolType.pickaxe);
  },
  setSaw: function(mater, damage){
    Generator.setItem(mater+"_saw", {
      name: mater+" saw", texture: mater+"_saw", stack: 1
    });
    Item.setMaxDamage(ItemID[mater+"_saw"], damage);
    saws.push(ItemID[mater+"_saw"]);
    workblades.push(ItemID[mater+"_saw"]);
  },
  setAxe: function(mater){
    Generator.setItem(mater+"_axe", {
      name: mater+" axe", texture: mater+"_axe", stack: 1
    });
    ToolAPI.setTool(ItemID[mater+"_axe"],mater,ToolType.axe);
    Item.registerUseFunction(mater+"_axe", function(c, item, block){
      if(block.id==BlockID.stripped_log){
      breakItem();
      PlaySoundFile("tool_axe_wood.ogg");
        if(Math.random()<=0.3){
        PlaySoundFile("split_log.ogg");
          World.destroyBlock(c.x,c.y,c.z,false);
          World.drop(c.relative.x,c.relative.y,c.relative.z, BlockID.splited_log, 4, 0);
          if(item.data<=Item.getMaxDamage(item.id)){
            Player.setCarriedItem(item.id,1,item.data++);
          } else Player.decreaseCarriedItem();
        }
      }
    });
  },
  setShovel: function(mater){
    Generator.setItem(mater+"_shovel", {
      name: mater+" shovel", texture: mater+"_shovel", stack: 1
    });
    ToolAPI.setTool(ItemID[mater+"_shovel"],mater,ToolType.shovel);
  },
  setWorkblade: function(mater){
    Generator.setItem(mater+"_workblade", {
      name: mater+" workblade", texture: mater+"_workblade", stack: 1
    });
    workblades.push(ItemID[mater+"_workblade"]);
    ToolAPI.setTool(ItemID[mater+"_workblade"],mater,ToolType.workblade);
    Item.registerUseFunction(mater+"_workblade", function(c, item, block){
      if(block.id==17||block.id==162){
      breakItem();
      PlaySoundFile("tool_axe_wood.ogg");
        if(Math.random()<=0.3){
          PlaySoundFile("split_log.ogg");
          World.setBlock(c.x,c.y,c.z,BlockID.stripped_log);
          World.drop(c.relative.x+.5,c.relative.y+.5,c.relative.z+.5, ItemID.wood_bark, 1, 0);
          if(item.data<=Item.getMaxDamage(item.id)){
            Player.setCarriedItem(item.id,1,item.data++);
          } else Player.decreaseCarriedItem();
        }
      }
    });
  },
  setHoe: function(mater){
    Generator.setItem(mater+"_hoe", {
      name: mater+" hoe", texture: mater+"_hoe", stack: 1
    });
    ToolAPI.setTool(ItemID[mater+"_hoe"],mater,ToolType.hoe);
  },
  setShears: function(mater, damage){
    Generator.setItem(mater+"_shears", {
      name: mater+" shears", texture: mater+"_shears", stack: 1
    });
    ToolAPI.setTool(ItemID[mater+"_shears"],mater,ToolType.shears);
    Item.setMaxDamage(ItemID[mater+"_shears"], damage);
  },
  setGallagher: function(mater, damage){
    Generator.setItem(mater+"_gallagher", {
      name: mater+" gallagher", texture: mater+"_gallagher", stack: 1
    });
    Item.setMaxDamage(ItemID[mater+"_gallagher"], damage);
    gallaghers.push(ItemID[mater+"_gallagher"])
  }
};

ToolBuilder.setGallagher("stone", 60);
Recipes.addShaped({id: ItemID.stone_gallagher, count: 1, data: 0}, 
   ["sts", 
    "srs",
    " r "],
  ["s", 1, 0, "r", 280, 0, "t", ItemID.plant_twine, 0
]);

ModAPI.registerAPI("primal_api",{
  Machine: {
    Cauldron: Cauldron,
    DryingRack: DryingRack
  },
  CrafingTool: {
    workblades: workblades,
    saws: saws,
    gallaghers: gallaghers,
  },
  ToolBuilder: ToolBuilder,
  Generator: Generator,
  EvalGlobal: function(a){
    eval(a);
  }
});

alert("primal_api shared!", "primal_core");




// file: api/other.js

LiquidRegistry.registerLiquid("tannin", "Tannin", ["tannin_liquid"])

var MTM = null;
ModAPI.addAPICallback("MTM_api", function(api){
   MTM = api;
});

if(MTM){
IDRegistry.genItemID("steel_flake");
Item.createItem("steel_flake", "Steel flake", {name: "steel_flake", meta: 0}, {stack: 64});
  for(i in workblades){
    Recipes.addCraftToolRecipeItem({id: ItemID.steel_flake, count: 4, data: 0},[{id: ItemID.ingotSteel, data: 0}],workblades[i]);
  }
}




// file: natural/plant_fibers.js

Generator.setItem("plant_fiber", {
  name: "Plant fiber", texture: "plant_fiber", stack: 64
});

Generator.setItem("plant_twine", {
  name: "Plant twine", texture: "plant_cordage", stack: 64
});

Generator.setItem("plant_tinder", {
  name: "Plant tinder", texture: "plant_tinder", stack: 64
});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.plant_twine, count: 1, data: 0}, 
   ["ff", 
    "f"],
  ["f", ItemID.plant_fiber, 0
]);

Recipes.addShaped({id: ItemID.plant_tinder, count: 1, data: 0}, 
   ["ff", 
    "ff"],
  ["f", ItemID.plant_fiber, 0
]);

});

Block.registerDropFunction(31, function(){
  if(Math.random()<=0.8){
    return [[ItemID.plant_fiber,1,0]]
  }
});

Block.registerDropFunction(106, function(){
  return [[ItemID.plant_fiber,1,0]]
});

Block.registerDropFunction(17, function(coords, blockID, data, level, enchant){
  if(level==0){
    if(data<=3){
		    return [[5,1,data]];
		  }
		} 
});

Block.registerDropFunction(162, function(coords, blockID, data, level, enchant){
  if(level==0&&data<=2){
		  return [[5,1,data+4]];
		} else if(level==0) return[[5,1,4]];
});

Block.registerDropFunction(161, function(coords, blockID, data, level, enchant){
  if(Math.random()<=0.5){
		  return [[280,1,0]];
		}
});

Block.registerDropFunction(18, function(coords, blockID, data, level, enchant){
  if(Math.random()<=0.5){
		  return [[280,1,0]];
		}
});




// file: natural/flint.js

Item.registerUseFunction(318, function(crd,i,block){
let c = crd.relative;
  if(block.id==1||block.id==4){
    if(Math.random()<=0.55){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.flint_flake,1,0);
    }
  }
});

Generator.setItem("flint_flake", {
  name: "Flint flake", texture: "flint_flake", stack: 64
});

Item.registerUseFunction(ItemID.flint_flake, function(crd,item,block){
let c = crd.relative;
  if(ToolAPI.blockData[block.id].material.name=="stone"&&Entity.getSneaking(Player.get())){
    if(Math.random()<=0.2){
      Player.decreaseCarriedItem();
      World.drop(c.x,c.y,c.z,ItemID.flint_point,1,0);
    }
  }
});

Generator.setItem("flint_point", {
  name: "Flint point", texture: "flint_point", stack: 64
});





// file: natural/bark.js

IDRegistry.genBlockID("stripped_log");
Block.createBlock("stripped_log", [
	{name: "Stripped log", texture: [
	["log_oak_top",0],	["log_oak_top",0],	["log_stripped_oak_side",0]],
	 inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.stripped_log, "wood", 0, true);

Block.setBlockShape(BlockID.stripped_log, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 1, z: 0.9});

IDRegistry.genBlockID("splited_log");
Block.createBlock("splited_log", [
	{name: "Splited log", texture: [
	["log_stripped_oak_side",0]],
	 inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.stripped_log, "wood", 0, true);

Block.setBlockShape(BlockID.splited_log, {x: 0.4, y: 0.1, z: 0.4}, {x: 0.6, y: 0.9, z: 0.6});

Generator.setItem("wood_bark", {
  name: "Bark", texture: "bark", stack: 64
});




// file: natural/rocks.js

Generator.setItem("rock_stone", {
  name: "Rock", texture: "rock_stone", stack: 64
});

Generator.setItem("rock_granite", {
  name: "Rock", texture: "rock_granite", stack: 64
});

Generator.setItem("rock_diorite", {
  name: "Rock", texture: "rock_diorite", stack: 64
});

Generator.setItem("rock_andesite", {
  name: "Rock", texture: "rock_andesite", stack: 64
});

Generator.setItem("building_mortar", {
  name: "Mortar", texture: "mortar", stack: 64
});

Block.registerDropFunction(1, function(coords, blockID, data, level, enchant){
		if(level>0){
			 if(data==0){
			   return [[ItemID.rock_stone, 4, 0]];
			 }
			 if(data==1){
			   return [[ItemID.rock_granite, 4, 0]];
			 }
    if(data==3){
			   return [[ItemID.rock_diorite, 4, 0]];
		  }
    if(data==5){
      return [[ItemID.rock_andesite, 4, 0]];
		  }
  }
});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: 4, count: 2, data: 0}, 
   ["rrr", 
    "rmr",
    "rrr"],
  ["r", ItemID.rock_stone, 0, "m", ItemID.building_mortar, 0
]);

Recipes.addShaped({id: 1, count: 2, data: 1}, 
   ["rrr", 
    "rmr",
    "rrr"],
  ["r", ItemID.rock_granite, 0, "m", ItemID.building_mortar, 0
]);

Recipes.addShaped({id: 1, count: 2, data: 3}, 
   ["rrr", 
    "rmr",
    "rrr"],
  ["r", ItemID.rock_diorite, 0, "m", ItemID.building_mortar, 0
]);

Recipes.addShaped({id: 1, count: 2, data: 5}, 
   ["rrr", 
    "rmr",
    "rrr"],
  ["r", ItemID.rock_andesite, 0, "m", ItemID.building_mortar, 0
]);

Recipes.addShaped({id: ItemID.building_mortar, count: 16, data: 0}, 
   ["scs", 
    "csc",
    "scs"],
  ["s", 12, -1, "c", 337, 0
]);

});




// file: natural/charcoal.js

var setStackRender = function(id, tex){
let render = new ICRender.Model();
BlockRenderer.setStaticICRender(id, -1, render);
let model = BlockRenderer.createModel();
Block.setDestroyTime(id, 0);
model.addBox(0/16, 0/16, 11/16, 16/16, 4/16, 15/16, tex, 0);
model.addBox(0/16, 0/16, 6/16, 16/16, 4/16, 10/16, tex, 0);
model.addBox(0/16, 0/16, 1/16, 16/16, 4/16, 5/16, tex, 0);
model.addBox(0/16, 5/16, 11/16, 16/16, 9/16, 15/16, tex, 0);
model.addBox(0/16, 5/16, 1/16, 16/16, 9/16, 5/16, tex, 0);
model.addBox(0/16, 5/16, 6/16, 16/16, 9/16, 10/16, tex, 0);
model.addBox(0/16, 10/16, 1/16, 16/16, 14/16, 5/16, tex, 0);
model.addBox(0/16, 10/16, 11/16, 16/16, 14/16, 15/16, tex, 0);
model.addBox(0/16, 10/16, 6/16, 16/16, 14/16, 10/16, tex, 0);
model.addBox(7/16, 0/16, 15/16, 9/16, 15/16, 16/16, "stack_belt", 0);
model.addBox(7/16, 0/16, 0/16, 9/16, 15/16, 1/16, "stack_belt", 0);
model.addBox(7/16, 14/16, 1/16, 9/16, 15/16, 15/16, "stack_belt", 0);
render.addEntry(model);
}

IDRegistry.genBlockID("log_stack");
Block.createBlock("log_stack", [
	{name: "Stacked stripped log", texture: [
	["log_stripped_oak_side",0]],
	 inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.log_stack, "wood", 0);

setStackRender(BlockID.log_stack, "log_stripped_oak_side");

var LIGHT = Block.createSpecialType({
  lightlevel: 15
});

Callback.addCallback("PostLoaded", function(){

  Recipes.addShaped({id: BlockID.log_stack, count: 1, data: 0}, 
     ["lll", 
      "ltl",
      "lll"],
    ["l", BlockID.splited_log, 0, "t", ItemID.plant_tinder, 0
  ]);

});

IDRegistry.genBlockID("log_stack_burn");
Block.createBlock("log_stack_burn", [
	{name: "Stacked stripped log burn", texture: [
	["log_stripped_oak_side",0]],
	 inCreative: false}
], LIGHT);
ToolAPI.registerBlockMaterial(BlockID.log_stack_burn, "wood", 0);

setStackRender(BlockID.log_stack_burn, "log_stripped_oak_side");

IDRegistry.genBlockID("charcoal_stack");
Block.createBlock("charcoal_stack", [
	{name: "Charcoal block", texture: [
	["charcoal_block",0]],
	 inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.charcoal_stack, "wood", 0);

setStackRender(BlockID.charcoal_stack, "charcoal_block");

Block.setRandomTickCallback(BlockID.log_stack_burn, function(x,y,z,id,data){
  if(Math.random()<=0.5&&World.getBlockID(x,y+1,z)!=0){
    World.setBlock(x,y,z,BlockID.charcoal_stack);
  }
});

Block.registerDropFunction(BlockID.charcoal_stack, function(){
  return [[263, Math.random()*8, 1]];
});

Block.registerDropFunction(BlockID.log_stack_burn, function(){
  return [[0,0,0]];
});




// file: natural/firebow.js

Generator.setItem("fire_bow", {
  name: "Fire bow", texture: "fire_bow_empty", stack: 1
});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.fire_bow, count: 1, data: 0}, 
   ["  s", 
    " st",
    "s t"],
  ["s", 280, 0, "t", ItemID.plant_twine, 0
]);

});

Item.setMaxDamage(ItemID.fire_bow, 15);

Item.registerUseFunction(ItemID.fire_bow, function(c,item,block){
  let tile = World.getTileEntity(c.x,c.y,c.z);
  if(block.id==BlockID.log_stack){
    World.setBlock(c.x,c.y,c.z,BlockID.log_stack_burn);
    breakItem();
  } else if(tile==null) {
    World.setBlock(c.relative.x,c.relative.y,c.relative.z, 51);
    breakItem();
  }
});




// file: natural/leather.js

Generator.setItem("tannin_ground", {
  name: "Tannin ground", texture: "tannin_ground", stack: 64
});

Generator.setItem("tannin_bottle", {
  name: "Bottle of tannin", texture: "tannin_bottle", stack: 64
});
LiquidRegistry.registerItem("tannin", {id: 374, data: 0}, {id: ItemID.tannin_bottle, data: 0});

Generator.setItem("pelt_animal", {
  name: "Animal pelt", texture: "pelt_animal", stack: 64
});

Generator.setItem("pelt_animal_large", {
  name: "Animal pelt large", texture: "pelt_animal_large", stack: 64
});

Generator.setItem("hide_raw", {
  name: "Raw hide", texture: "hide_raw", stack: 64
});

Generator.setItem("hide_salted", {
  name: "Salted hide", texture: "hide_salted", stack: 64
});

Generator.setItem("hide_dried", {
  name: "Dried hide", texture: "hide_dried", stack: 64
});

Generator.setItem("hide_tanned", {
  name: "Tanned hide", texture: "hide_tanned", stack: 64
});

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: ItemID.tannin_ground, count: 1, data: 0}, 
  ["bb"],
  ["b", ItemID.wood_bark, 0
]);

Recipes.addShaped({id: ItemID.tannin_bottle, count: 1, data: 0}, 
  ["wt"],
  ["w", 373, 0, "t", ItemID.tannin_ground, 0
]);

Recipes.addShapeless({id: ItemID.hide_salted, count: 1, data: 0}, [{id: ItemID.hide_raw, data: 0}, {id: ItemID.salt_rock, data: 0}]);

Callback.addCallback("EntityDeath", function(ent,attacker,damageType){
  let c = Entity.getPosition(ent);
  if((Entity.getType(ent)==11||Entity.getType(ent)==23||Entity.getType(ent)==24||Entity.getType(ent)==25)){
    Game.prevent();
    World.drop(c.x+.5,c.y+.5,c.z+.5,ItemID.pelt_animal, Math.random()*5, 0);
    if(Entity.getType(ent)==11) World.drop(c.x+.5,c.y+.5,c.z+.5,363, Math.random()*2, 0);
    if(Math.random()<0.5) World.drop(c.x+.5,c.y+.5,c.z+.5,ItemID.pelt_animal_large, 1, 0);
  }
});

for(i in workblades){
  Recipes.addCraftToolRecipeItem({id: ItemID.hide_raw, count: 3, data: 0},[{id: ItemID.pelt_animal, data: 0}],workblades[i]);
  Recipes.addCraftToolRecipeItem({id: ItemID.hide_raw, count: 6, data: 0},[{id: ItemID.pelt_animal_large, data: 0}],workblades[i]);
}

/*
Recipes.addShapeless({id: ItemID.hide_tanned, data: 0, count: 1}, [{id: ItemID.hide_dried, data: 0}, {id: ItemID.tannin_bottle, data: 0}], function(api, field, result){
  for(var i in field){
	   	if(field[i].id==ItemID.tannin_bottle){
		    Player.addItemToInventory(374, 1, 0);
	   	}
	   	api.decreaseFieldSlot(i);
		}
});
*/

Cauldron.addRecipe([ItemID.hide_dried, 0, 0, 0], 
  {id: ItemID.hide_tanned, data: 0, liquid: {name: "tannin", amount: 1}});

});




// file: natural/salt.js

Generator.setItem("salt_rock", {
  name: "Salt", texture: "salt_dust_rock", stack: 64
});

IDRegistry.genBlockID("salt_rock");
Block.createBlock("salt_rock", [
	 {name: "Salt rock", texture: [
	   ["salt_rock",0]],
	 inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.salt_rock, "stone", 1, true);

Callback.addCallback("PostLoaded", function(){

Recipes.addShapeless({id: ItemID.salt_rock, count: 9, data: 0}, [{id: BlockID.salt_rock, data: 0}]);

Recipes.addShaped({id: BlockID.salt_rock, count: 1, data: 0}, 
  ["sss",
   "sss",
   "sss"],
  ["s", ItemID.salt_rock, 0
]);

  Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
    if(Math.random()<0.5){
	     for(let i = 0; i < 24; i++){
	     let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 6, 64);
	       if(World.getBlockID(coords.x,coords.y,coords.z)===1){
		        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.salt_rock, 0, 7, true);
		      }
		    }
	   	}
	 });
});




// file: misc/food.js

Generator.setFoodItem("monster_flesh_dried", {
  name: "Dried monster flesh", texture: "monster_flesh_dried", stack: 64, food: 3
});

Generator.setFoodItem("fish_cod_salted", {
  name: "Salted fish", texture: "fish_cod_salted", stack: 64, food: 1
});

Generator.setFoodItem("fish_salmon_salted", {
  name: "Salted salmon", texture: "fish_salmon_salted", stack: 64, food: 1
});

Generator.setFoodItem("wolf_meat_raw", {
  name: "Raw wolf meat", texture: "wolf_meat_raw", stack: 64, food: 4
});

Generator.setFoodItem("wolf_meat_cooked", {
  name: "Wolf steak", texture: "wolf_meat_cooked", stack: 64, food: 8
});

Generator.setFoodItem("fish_puffer_salted", {
  name: "Salted puffer fish", texture: "fish_puffer_salted", stack: 64, food: 1
});



Generator.setFoodItem("fish_cod_dried", {
  name: "Fish (dried)", texture: "fish_cod_dried", stack: 64, food: 4
});

Generator.setFoodItem("fish_salmon_dried", {
  name: "Dried salmon", texture: "fish_salmon_dried", stack: 64, food: 4
});

Generator.setFoodItem("fish_puffer_dried", {
  name: "Dried puffer fish", texture: "fish_puffer_dried", stack: 64, food: 5
});

Callback.addCallback("PostLoaded", function(){
  Recipes.addFurnace(ItemID.wolf_meat_raw, ItemID.wolf_meat_cooked, 0);
  
  Recipes.addShapeless({id: ItemID.fish_cod_salted, count: 1, data: 0}, [{id: 349, data: 0}, {id: ItemID.salt_rock, data: 0}]);
  Recipes.addShapeless({id: ItemID.fish_salmon_salted, count: 1, data: 0}, [{id: 349, data: 1}, {id: ItemID.salt_rock, data: 0}]);
  Recipes.addShapeless({id: ItemID.fish_puffer_salted, count: 1, data: 0}, [{id: 349, data: 3}, {id: ItemID.salt_rock, data: 0}]);
  
  DryingRack.addRecipe(ItemID.fish_cod_salted, 700, ItemID.fish_cod_dried);
  DryingRack.addRecipe(ItemID.fish_salmon_salted, 700, ItemID.fish_salmon_dried);
  DryingRack.addRecipe(ItemID.fish_puffer_salted, 700, ItemID.fish_puffer_dried);
});




// file: misc/parts.js

Generator.setItems("dust", ["Brass", "Bronze", "Copper", "Lead", "Pigiron", "Silver", "Tin", "Iron", "Wootz", "Zinc", "Gold"]);
Generator.setItems("ingot", ["Brass", "Bronze", "Copper", "Lead", "Pigiron", "Silver", "Steel", "Tamahagane", "Tin", "Wootz", "Zinc"]);
Generator.setItems("nugget", ["Brass", "Bronze", "Copper", "Lead", "Pigiron", "Silver", "Iron", "Tin", "Wootz", "Zinc"]);
Generator.setItems("plate", ["Brass", "Bronze", "Copper", "Gold", "Lead", "Pigiron", "Silver", "Iron", "Steel", "Tamahagane", "Tin", "Wootz", "Zinc", "Obsidian"]);
Generator.setItems("shard", ["Obsidian"]);
Callback.addCallback("PostLoaded", function(){

for(i in gallaghers){
  Recipes.addCraftToolRecipeItem({id: ItemID.plateBrass, count: 1, data: 0},
    [
      {id: ItemID.ingotBrass, data: 0},
      {id: ItemID.ingotBrass, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.shardObsidian, count: 4, data: 0},
    [
      {id: 49, data: 0},
    ], gallaghers[i]
  );
  Recipes.addFurnace(ItemID.shardObsidian, ItemID.plateObsidian, 0);
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateBronze, count: 1, data: 0},
    [
      {id: ItemID.ingotBronze, data: 0},
      {id: ItemID.ingotBronze, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateCopper, count: 1, data: 0},
    [
      {id: ItemID.ingotCopper, data: 0},
      {id: ItemID.ingotCopper, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateLead, count: 1, data: 0},
    [
      {id: ItemID.ingotLead, data: 0},
      {id: ItemID.ingotLead, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.platePigiron, count: 1, data: 0},
    [
      {id: ItemID.ingotPigiron, data: 0},
      {id: ItemID.ingotPigiron, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateSilver, count: 1, data: 0},
    [
      {id: ItemID.ingotSilver, data: 0},
      {id: ItemID.ingotSilver, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateIron, count: 1, data: 0},
    [
      {id: 265, data: 0},
      {id: 265, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateSteel, count: 1, data: 0},
    [
      {id: ItemID.ingotSteel, data: 0},
      {id: ItemID.ingotSteel, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateTamahagane, count: 1, data: 0},
    [
      {id: ItemID.ingotTamahagane, data: 0},
      {id: ItemID.ingotTamahagane, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateTin, count: 1, data: 0},
    [
      {id: ItemID.ingotTin, data: 0},
      {id: ItemID.ingotTin, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateWootz, count: 1, data: 0},
    [
      {id: ItemID.ingotWootz, data: 0},
      {id: ItemID.ingotWootz, data: 0},
    ], gallaghers[i]
  );
  
  Recipes.addCraftToolRecipeItem({id: ItemID.plateZinc, count: 1, data: 0},
    [
      {id: ItemID.ingotZinc, data: 0},
      {id: ItemID.ingotZinc, data: 0},
    ], gallaghers[i]
  );
  
}

});




// file: misc/armor.js

Generator.setItem("pelt_wolf", {
  name: "Wolf pelt", texture: "pelt_wolf", stack: 64
});


IDRegistry.genItemID("primalObsidianHelmet");
IDRegistry.genItemID("primalObsidianChestplate");
IDRegistry.genItemID("primalObsidianLeggings");
IDRegistry.genItemID("primalObsidianBoots");

Item.createArmorItem("primalObsidianHelmet", "Obsidian helmet", {name: "primalObsidian_helmet", meta: 0}, {type: "helmet", armor: 1, durability: 1753, texture: "armor/obsidian_layer_1.png"});
Item.createArmorItem("primalObsidianChestplate", "Obsidian chestplate", {name: "primalObsidian_body", meta: 0}, {type: "chestplate", armor: 4, durability: 1865, texture: "armor/obsidian_layer_1.png"});
Item.createArmorItem("primalObsidianLeggings", "Obsidian leggings", {name: "primalObsidian_legs", meta: 0}, {type: "leggings", armor: 2, durability: 1798, texture: "armor/obsidian_layer_2.png"});
Item.createArmorItem("primalObsidianBoots", "Obsidian boots", {name: "primalObsidian_boots", meta: 0}, {type: "boots", armor: 1, durability: 1763, texture: "armor/obsidian_layer_1.png"});


IDRegistry.genItemID("wolfHelmet");
IDRegistry.genItemID("wolfChestplate");
IDRegistry.genItemID("wolfLeggings");
IDRegistry.genItemID("wolfBoots");

Item.createArmorItem("wolfHelmet", "Wolf head", {name: "wolf_head", meta: 0}, {type: "helmet", armor: 1, durability: 153, texture: "armor/wolf_layer_1.png"});
Item.createArmorItem("wolfChestplate", "Wolf body", {name: "wolf_body", meta: 0}, {type: "chestplate", armor: 4, durability: 165, texture: "armor/wolf_layer_1.png"});
Item.createArmorItem("wolfLeggings", "Wolf leggings", {name: "wolf_legs", meta: 0}, {type: "leggings", armor: 3, durability: 198, texture: "armor/wolf_layer_2.png"});
Item.createArmorItem("wolfBoots", "Wolf boots", {name: "wolf_boots", meta: 0}, {type: "boots", armor: 1, durability: 163, texture: "armor/wolf_layer_1.png"});


Callback.addCallback("EntityDeath", function(ent,attacker,damageType){
  let c = Entity.getPosition(ent);
  if(Entity.getType(ent)==14){
    World.drop(c.x+.5,c.y+.5,c.z+.5,ItemID.pelt_wolf, 1, 0);
    if(Math.random()<0.5) World.drop(c.x+.5,c.y+.5,c.z+.5,ItemID.pelt_wolf, 1, 0);
  }
});

Callback.addCallback("PostLoaded", function(){
  Recipes.addShaped({id: ItemID.primalObsidianHelmet, count: 1, data: 0}, 
    ["sss", 
     "shs"],
    ["s", ItemID.plateObsidian, 0, "h", 298, 0
  ]);
  
  Recipes.addShaped({id: ItemID.primalObsidianChestplate, count: 1, data: 0}, 
    ["shs", 
     "sss",
     "sss"],
    ["s", ItemID.plateObsidian, 0, "h", 299, 0
  ]);
  
  Recipes.addShaped({id: ItemID.primalObsidianLeggings, count: 1, data: 0}, 
    ["sss", 
     "shs",
     "s s"],
    ["s", ItemID.plateObsidian, 0, "h", 300, 0
  ]);
  
  Recipes.addShaped({id: ItemID.primalObsidianBoots, count: 1, data: 0}, 
    ["shs", 
     "s s"],
    ["s", ItemID.plateObsidian, 0, "h", 301, 0
  ]);
  
  Recipes.addShaped({id: ItemID.wolfHelmet, count: 1, data: 0}, 
    ["sss", 
     "s s"],
    ["s", ItemID.pelt_wolf, 0
  ]);
  
  Recipes.addShaped({id: ItemID.wolfChestplate, count: 1, data: 0}, 
    ["s s", 
     "sss",
     "sss"],
    ["s", ItemID.pelt_wolf, 0
  ]);
  
  Recipes.addShaped({id: ItemID.wolfLeggings, count: 1, data: 0}, 
    ["sss", 
     "s s",
     "s s"],
    ["s", ItemID.pelt_wolf, 0
  ]);
  
  Recipes.addShaped({id: ItemID.wolfBoots, count: 1, data: 0}, 
    ["s s", 
     "s s"],
    ["s", ItemID.pelt_wolf, 0
  ]);
});




// file: machines/drying_rack.js

IDRegistry.genBlockID("drying_rack");
Block.createBlock("drying_rack", [
	{name: "Drying rack", texture: [
	["planks",0]],
	 inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.drying_rack, "wood", 0, true);

Block.setBlockShape(BlockID.drying_rack, {x: 0.4, y: 0.4, z: 0.4}, {x: 0.6, y: 1, z: 0.6});

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: BlockID.drying_rack, count: 2, data: 0}, 
   ["s", 
    "s",
    "s"],
  ["s", 158, -1
]);

});

DryingRack.addRecipe(ItemID.hide_salted, 1000, ItemID.hide_dried);
DryingRack.addRecipe(ItemID.hide_tanned, 1000, 334);

TileEntity.registerPrototype(BlockID.drying_rack, {
  defaultValues: {
    item: 0, progress: 0
  },
  initAnimation: function(){
		this.animation = new Animation.Item(this.x + .5, this.y, this.z + .5);
		if(this.data.item!=0){
		  this.animation.describeItem({
		    	id: this.data.item,
			   count: 1,
			   data: 0,
			   rotation: "y",
			   size: 1
	   	});
		    this.animation.load();
		  }
	 },
	 destroyAnimation: function(){
	  	if(this.animation){
		    	this.animation.destroy();
    }
	 },
	 updateAnimation: function(){
	  	this.destroyAnimation();
		 this.initAnimation();
	 },
	
	 init: function(){
	  	 this.initAnimation();
	 },
	 destroy: function(){
	   World.drop(this.x+.5, this.y+.5, this.z+.5, this.data.item, 1, 0);
		  this.destroyAnimation();
		  this.data.item = 0;
  	},
  	click: function(){
  	  Game.prevent();
  	  let item = Player.getCarriedItem();
  	  if(DryingRack.getRecipe(item.id)&&this.data.item==0){
  	    this.data.item = item.id;
  	    this.updateAnimation();
  	    Player.decreaseCarriedItem();
  	  } 
  	  if(this.data.item!=0&&Entity.getSneaking(Player.get())){
  	    World.drop(this.x+.5, this.y+.5, this.z+.5, this.data.item, 1, 0);
      this.destroyAnimation();
      this.data.item = 0;
    }
  	},
  	tick: function(){
  	  if(World.getThreadTime()%30==0) this.updateAnimation();
  	  let recipe = DryingRack.getRecipe(this.data.item)
  	  if(recipe){
  	  this.data.progress++;
  	    if(this.data.progress>=recipe.time){
  	      this.data.progress=0;
  	      this.data.item = recipe.id;
  	    }
  	  } else if(this.data.progress>0) this.data.progress=0;
  	  if(this.animation&&this.data.item==0) this.destroyAnimation();
  	}
});




// file: machines/cauldron.js

IDRegistry.genBlockID("primal_cauldron");
Block.createBlock("primal_cauldron", [{"name":"Cauldron","texture":[["cauldron",0]],"inCreative":true}]);

var cauldron_render = new ICRender.Model();
BlockRenderer.setStaticICRender(BlockID.primal_cauldron, -1, cauldron_render);
var model = BlockRenderer.createModel();

model.addBox(12/16, 0/16, 12/16, 14/16, 2/16, 14/16, 4, 0);
model.addBox(12/16, 0/16, 2/16, 14/16, 2/16, 4/16, 4, 0);
model.addBox(2/16, 0/16, 2/16, 4/16, 2/16, 4/16, 4, 0);
model.addBox(2/16, 0/16, 12/16, 4/16, 2/16, 14/16, 4, 0);
model.addBox(2/16, 2/16, 2/16, 14/16, 3/16, 14/16, 42, 0);
model.addBox(1/16, 3/16, 2/16, 2/16, 12/16, 14/16, 42, 0);
model.addBox(2/16, 3/16, 1/16, 14/16, 12/16, 2/16, 42, 0);
model.addBox(14/16, 3/16, 2/16, 15/16, 12/16, 14/16, 42, 0);
model.addBox(2/16, 3/16, 14/16, 14/16, 12/16, 15/16, 42, 0);
model.addBox(2/16, 3/16, 2/16, 14/16, 9/16, 14/16, 9, 0);

cauldron_render.addEntry(model);

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: BlockID.primal_cauldron, count: 1, data: 0}, 
   ["f f", 
    "fbf",
    "fff"],
  ["f", 265, 0, "b", 325, 0
]);

Cauldron.addRecipe([4, 13, 13, 4], {id: 87, data: 0, liquid: {name: "lava", amount: 4}});
Cauldron.addRecipe([331, 348, 289, 263], {id: 377, data: 0, liquid: {name: "lava", amount: .5}});
Cauldron.addRecipe([457, 457, 457, 281], {id: 459, data: 0, liquid: {name: "water", amount: 1.5}});

});

Block.setBlockShape(BlockID.primal_cauldron, {"x":0.125,"y":0,"z":0.125}, {"x":0.875,"y":0.6875,"z":0.875});

Block.setDestroyTime(BlockID.primal_cauldron, 0);


var CauldronGUI = new UI.StandartWindow({
	standart: {
		header: {text: {text: "Cauldron"}},
		inventory: {standart: true},
		background: {standart: true}
	},
	
	drawing: [
	  	{type: "bitmap", x: 580, y: 220, bitmap: "bubble_0", scale: 3.2},
 ],
	
	elements: {
	   "slotInput0": {type: "slot", x: 450, y: 200},
	   "slotInput1": {type: "slot", x: 510, y: 200},
	   "slotInput2": {type: "slot", x: 450, y: 260},
	   "slotInput3": {type: "slot", x: 510, y: 260},
	   "progressScale": {type: "scale", x: 580, y: 220, direction: 1, bitmap: "bubble_1", scale: 3.2},
	   "textInput": {type: "text", x: 450, y: 100, width: 100, height: 30, text: "Fluid: "},
	   "textAmount": {type: "text", x: 450, y: 150, width: 100, height: 30, text: "Amount: "},
	   "slotOutput": {type: "slot", x: 650, y: 230},
  	}
});
TileEntity.registerPrototype(BlockID.primal_cauldron, {
  defaultValues: {
    progress: 0
  },
  getGuiScreen: function(){
    return CauldronGUI;
  },
	 init: function(){
	  	 this.liquidStorage.setLimit(null, 16);
	 },
  	tick: function(){
  	  this.container.setText("textInput", "Fluid: "+this.liquidStorage.getLiquidStored())
  	  this.container.setText("textAmount", "Amount: "+Math.round((this.liquidStorage.getAmount(this.liquidStorage.getLiquidStored()))*1000)+"/16000 mB")
    let stored = this.liquidStorage.getLiquidStored()
  	  let ing0 = this.container.getSlot("slotInput0");
  	  let ing1 = this.container.getSlot("slotInput1");
  	  let ing2 = this.container.getSlot("slotInput2");
  	  let ing3 = this.container.getSlot("slotInput3");
  	  let output = this.container.getSlot("slotOutput");
  	  let recipe = Cauldron.getRecipe([ing0.id, ing1.id, ing2.id, ing3.id]);
  	  this.container.setScale("progressScale", this.data.progress/500);
  	  
  	  if(recipe && stored == recipe.liquid.name && this.liquidStorage.getAmount(recipe.liquid.name) >= recipe.liquid.amount && (output.id == recipe.id && output.count < 64 && output.data == recipe.data || output.id == 0)){
  	    if(World.getBlockID(this.x, this.y-1, this.z)==51){
  	      this.data.progress++;
  	      if(this.data.progress>=500){
  	        this.data.progress = 0;
  	        output.id = recipe.id
  	        output.data = recipe.data
  	        output.count++;
  	        for(i = 0; i <= 3; i++){
  	          this.container.getSlot("slotInput"+i).count--;
  	        }
  	        this.liquidStorage.getLiquid(stored, recipe.liquid.amount);
  	        this.container.validateAll()
  	      }
  	    }
  	  } else if(this.data.progress>0) this.data.progress = 0
  	},
  	click: function(){
  	  let stored = this.liquidStorage.getLiquidStored()
  	  let item = Player.getCarriedItem();
    let liquid = LiquidRegistry.getItemLiquid(item.id,item.data);
    let empty = LiquidRegistry.getEmptyItem(item.id,item.data);
    
    if(liquid && (stored == liquid && this.liquidStorage.getAmount(stored)+1 <= 16 || stored == null)){
      Game.prevent();
  	    this.liquidStorage.addLiquid(liquid, 1);
  	    Player.addItemToInventory(empty.id, 1, empty.data);
      Player.decreaseCarriedItem();
  	  }
  	}
});




// file: recipes/remove.js

Callback.addCallback("PostLoaded", function(){
  if(!__config__.getBool("enable_vannila_tools")){
    for(let i = 267; i<=287; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 290; i<=294; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    for(let i = 306; i<=317; i++){
      Recipes.deleteRecipe({id: i, count: 1, data: 0});
    }
    Recipes.deleteRecipe({id: 256, count: 1, data: 0});
    Recipes.deleteRecipe({id: 257, count: 1, data: 0});
    Recipes.deleteRecipe({id: 258, count: 1, data: 0});
  }
  
  Recipes.deleteRecipe({id: 54, count: 1, data: 0});
  for(let i = 0; i<5; i++){
    Recipes.deleteRecipe({id: 5, count: 4, data: i});
  }
});




// file: recipes/pattern.js

Recipes.addCraftToolRecipeItem = function(result, data, tool){
	data.push({id: tool, data: -1});
	Recipes.addShapeless(result, data, function(api, field, result){
	   for(var i in field){
			   if(field[i].id==tool){
				    field[i].data++;
				    if(field[i].data>=Item.getMaxDamage(tool)){
					     field[i].id = field[i].count = field[i].data = 0;
				    }
			   }
			   else {
				    api.decreaseFieldSlot(i);
			   }
		  }
	 });
};




// file: recipes/tweaks.js

Callback.addCallback("PostLoaded", function(){
  Recipes.removeFurnaceRecipe({id: 162, data: 0});
  Recipes.removeFurnaceRecipe({id: 162, data: 1});
  Recipes.removeFurnaceRecipe({id: 263, data: 1});
  Recipes.addFurnace(17, 17, 0);

  for(i in saws){
    for(d = 0; d<4; d++){
      Recipes.addCraftToolRecipeItem({id: 5, count: 2, data: d},[{id: 17, data: d}],saws[i]);
    }
    Recipes.addCraftToolRecipeItem({id: 5, count: 2, data: 4},[{id: 162, data: 0}],saws[i]);
    Recipes.addCraftToolRecipeItem({id: 5, count: 2, data: 5},[{id: 162, data: 1}],saws[i]);
  }
  
  Recipes.addShaped({id: 54, count: 1, data: 0}, 
    ["sss", 
     "pip",
     "ppp"],
    ["p", 5, -1, "i", 265, 0, "s", 158, -1
  ]);
  
  Recipes.addShaped({id: 306, count: 1, data: 0}, 
    ["sss", 
     "shs"],
    ["s", ItemID.plateIron, 0, "h", 298, 0
  ]);
  
  Recipes.addShaped({id: 307, count: 1, data: 0}, 
    ["shs", 
     "sss",
     "sss"],
    ["s", ItemID.plateIron, 0, "h", 299, 0
  ]);
  
  Recipes.addShaped({id: 308, count: 1, data: 0}, 
    ["sss", 
     "shs",
     "s s"],
    ["s", ItemID.plateIron, 0, "h", 300, 0
  ]);
  
  Recipes.addShaped({id: 309, count: 1, data: 0}, 
    ["shs", 
     "s s"],
    ["s", ItemID.plateIron, 0, "h", 301, 0
  ]);
  
  //diamond
  
  Recipes.addShaped({id: 310, count: 1, data: 0}, 
    ["sss", 
     "s s"],
    ["s", 264, 0
  ]);
  
  Recipes.addShaped({id: 311, count: 1, data: 0}, 
    ["s s", 
     "sss",
     "sss"],
    ["s", 264, 0
  ]);
  
  Recipes.addShaped({id: 312, count: 1, data: 0}, 
    ["sss", 
     "s s",
     "s s"],
    ["s", 264, 0
  ]);
  
  Recipes.addShaped({id: 313, count: 1, data: 0}, 
    ["s s", 
     "s s"],
    ["s", 264, 0
  ]);
});




// file: tool/flint.js

ToolBuilder.addMaterial("flint", 70, 2, 2, 3);

Generator.setItem("flint_hatchet", {
  name: "flint hatchet", texture: "flint_hatchet", stack: 1
});
ToolAPI.setTool(ItemID.flint_hatchet,"flint",ToolType.hatchet);

ToolBuilder.setPickaxe("flint");
ToolBuilder.setAxe("flint");
ToolBuilder.setShovel("flint");
ToolBuilder.setWorkblade("flint");
ToolBuilder.setHoe("flint");
ToolBuilder.setShears("flint", 70);
ToolBuilder.setSaw("flint", 75);

Callback.addCallback("PostLoaded", function(){
Recipes.addShaped({id: 318, count: 1, data: 0}, 
   [" g", 
    "g"],
  ["g", 13, 0
]);

Recipes.addShaped({id: ItemID.flint_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_hatchet, count: 1, data: 0}, 
   ["ft", 
    " s"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 318, 0, "f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.flint_shears, count: 1, data: 0}, 
   ["f ", 
    "tf"],
  ["f", ItemID.flint_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

});




// file: tool/bone.js

ToolBuilder.addMaterial("bone", 90, 1, 2, 3);

Generator.setItem("bone_shard", {
  name: "Bone shard", texture: "bone_shard", stack: 64
});

Generator.setItem("sharp_bone", {
  name: "Sharp bone", texture: "sharp_bone", stack: 1
});
ToolBuilder.addMaterial("sharp_bone", 90, 1, 2, 3);
ToolAPI.setTool(ItemID.sharp_bone,"sharp_bone",ToolType.sword);

Generator.setItem("bone_sword", {
  name: "Bone sword", texture: "bone_sword", stack: 1
});
ToolAPI.setTool(ItemID.bone_sword,"bone",ToolType.sword);

Item.registerUseFunction(352, function(c,item,block){
  if(block.id==1||block.id==4){
    if(Math.random()<=0.55){
      Player.decreaseCarriedItem();
      Player.addItemToInventory(ItemID.sharp_bone,1,0);
    }
  }
});

Item.registerUseFunction(ItemID.sharp_bone, function(c,item,block){
  if(block.id==1||block.id==4){
    if(Math.random()<=0.55){
      Player.decreaseCarriedItem();
      Player.addItemToInventory(ItemID.bone_shard,Math.random()*2,0);
    }
  }
});

ToolBuilder.setPickaxe("bone");
ToolBuilder.setAxe("bone");
ToolBuilder.setShovel("bone");
ToolBuilder.setWorkblade("bone");

Callback.addCallback("PostLoaded", function(){

Recipes.addShaped({id: ItemID.bone_pickaxe, count: 1, data: 0}, 
   ["btb", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.bone_shovel, count: 1, data: 0}, 
   [" fb", 
    " tf",
    "s  "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.bone_workblade, count: 1, data: 0}, 
   [" fb", 
    "ftf",
    "sf "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.bone_axe, count: 1, data: 0}, 
   ["bft", 
    "fsf",
    " s "],
  ["b", ItemID.sharp_bone, 0, "f", ItemID.bone_shard, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

});




// file: tool/iron.js

ToolBuilder.addMaterial("primaliron", 290, 3, 4, 5);

ToolBuilder.setPickaxe("primaliron");
ToolBuilder.setAxe("primaliron");
ToolBuilder.setShovel("primaliron");
ToolBuilder.setWorkblade("primaliron");
ToolBuilder.setHoe("primaliron");
ToolBuilder.setSaw("primaliron", 125);
ToolBuilder.setGallagher("primaliron", 125);

Generator.setItem("iron_flake", {
  name: "Iron flake", texture: "iron_flake", stack: 64
});

Callback.addCallback("PostLoaded", function(){

for(i in workblades){
  Recipes.addCraftToolRecipeItem({id: ItemID.iron_flake, count: 4, data: 0},[{id: 265, data: 0}],workblades[i]);
}

Recipes.addShaped({id: ItemID.primaliron_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaliron_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaliron_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaliron_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaliron_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaliron_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 265, 0, "f", ItemID.iron_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaliron_gallagher, count: 1, data: 0}, 
   ["iti", 
    "iri",
    " r "],
  ["r", 280, 0, "t", ItemID.plant_twine, 0, "i", 265, 0
]);

});




// file: tool/diamond.js

ToolBuilder.addMaterial("primaldiamond", 1400, 5, 6, 7);

ToolBuilder.setPickaxe("primaldiamond");
ToolBuilder.setAxe("primaldiamond");
ToolBuilder.setShovel("primaldiamond");
ToolBuilder.setWorkblade("primaldiamond");
ToolBuilder.setHoe("primaldiamond");
ToolBuilder.setSaw("primaldiamond", 400);
ToolBuilder.setGallagher("primaldiamond", 400);

Generator.setItem("diamond_flake", {
  name: "Diamond flake", texture: "diamond_flake", stack: 64
});

Callback.addCallback("PostLoaded", function(){

for(i in workblades){
  Recipes.addCraftToolRecipeItem({id: ItemID.diamond_flake, count: 4, data: 0},[{id: 264, data: 0}],workblades[i]);
}

Recipes.addShaped({id: ItemID.primaldiamond_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaldiamond_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaldiamond_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaldiamond_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaldiamond_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaldiamond_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 264, 0, "f", ItemID.diamond_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.primaldiamond_gallagher, count: 1, data: 0}, 
   ["sts", 
    "iri",
    " r "],
  ["s", 49, 0, "r", 280, 0, "t", ItemID.plant_twine, 0, "i", 264, 0
]);

});




// file: tool/obsidian.js

ToolBuilder.addMaterial("obsidian", 5000, 2, 3, 4);

ToolBuilder.setPickaxe("obsidian");
ToolBuilder.setAxe("obsidian");
ToolBuilder.setShovel("obsidian");
ToolBuilder.setWorkblade("obsidian");
ToolBuilder.setHoe("obsidian");

Generator.setItem("obsidian_flake", {
  name: "Obsidian flake", texture: "obsidian_flake", stack: 64
});

Callback.addCallback("PostLoaded", function(){

for(i in workblades){
  Recipes.addCraftToolRecipeItem({id: ItemID.obsidian_flake, count: 4, data: 0},[{id: 49, data: 0}],workblades[i]);
}

Recipes.addShaped({id: ItemID.obsidian_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.obsidian_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.obsidian_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.obsidian_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.obsidian_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 49, 0, "f", ItemID.obsidian_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

});




// file: tool/emerald.js

ToolBuilder.addMaterial("emerald", 1900, 5, 5, 5);

ToolBuilder.setPickaxe("emerald");
ToolBuilder.setAxe("emerald");
ToolBuilder.setShovel("emerald");
ToolBuilder.setWorkblade("emerald");
ToolBuilder.setHoe("emerald");
ToolBuilder.setSaw("emerald", 700);

Generator.setItem("emerald_flake", {
  name: "Emerald flake", texture: "emerald_flake", stack: 64
});

Callback.addCallback("PostLoaded", function(){

for(i in workblades){
  Recipes.addCraftToolRecipeItem({id: ItemID.emerald_flake, count: 4, data: 0},[{id: 388, data: 0}],workblades[i]);
}

Recipes.addShaped({id: ItemID.emerald_saw, count: 1, data: 0}, 
   ["f  ", 
    " ft",
    " ss"],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.emerald_pickaxe, count: 1, data: 0}, 
   ["ftf", 
    "fsf",
    " s "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.emerald_shovel, count: 1, data: 0}, 
   [" ff", 
    " tf",
    "s  "],
  ["f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.emerald_workblade, count: 1, data: 0}, 
   [" fh", 
    "ftf",
    "sf "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.emerald_hoe, count: 1, data: 0}, 
   ["fot", 
    " s ",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

Recipes.addShaped({id: ItemID.emerald_axe, count: 1, data: 0}, 
   ["fht", 
    "fsf",
    " s "],
  ["h", 388, 0, "f", ItemID.emerald_flake, 0, "s", 280, 0, "t", ItemID.plant_twine, 0
]);

});




