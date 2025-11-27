/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 36
*/



// file: header.js

/*
 _ _                   _       _   _             _ _ _      _ _
|  _ \                |_|     | | |_|           |_ _ _|   / _ _|                
| | | |  _ _   _   _   _     _| |  _     _        | |    | |       
| | | | |  _| | | | | | |  / _  | | |  / _|       | |    | |       
| |_| | | |   | |_| | | | | |_| | | | | |_       _|_|_   | |_ _   
|_ _ /  |_|    \_ _ | |_|  \ _ _| |_|  \ _|     |_ _ _|   \ _ _|

by Denys Dzhuhalik (https://vk.com/id235887284);

*/

importLib("ToolType", "*");
IMPORT ("BackpackAPI", "BackpackRegistry");
IMPORT ("BaublesAPI", "Baubles");
IMPORT("#modpacker");

Callback.addCallback("LevelLoaded", function () {
Game.message("Druidic Craft Loaded!");
});

const empty = 0;

IDRegistry.genItemID("fenixFeather"); 
Item.createItem("fenixFeather", "Fenix feather", {name: "fenix", meta: 0}, {stack: 16});




// file: API/AltarRenderHelper.js

var RenderHelper = {
setAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					
					model.addBox (0/16, 0.88, 0/16, 16/16, 1, 1/16, blockID, 0);
					  model.addBox (0/16, 0.88, 15/16, 16/16, 1, 16/16, blockID, 0);
					   model.addBox (0/16, 0.88, 1/16, 1/16, 1, 15/16, blockID, 0);
					    model.addBox (15/16, 0.88, 1/16, 16/16, 1, 15/16, blockID, 0);
				   model.addBox(0/16, 0.79, 0/16, 16/16, 0.88, 16/16, blockID, 0);
                 model.addBox(3/16, 0.21, 3/16, 13/16, 0.78, 13/16, blockID, 0);
			   model.addBox(0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					
					
					/*model.addBox (0, 0.88, 0, 1, 1, 0.1, blockID, 0);
					  model.addBox (0, 0.88, 0.9, 1, 1, 1, blockID, 0);
					   model.addBox (0, 0.88, 0.1, 0.1, 1, 0.9, blockID, 0);
					    model.addBox (0.9, 0.88, 0.1, 1, 1, 0.9, blockID, 0);
				   model.addBox(0, 0.79, 0, 1, 0.88, 1, blockID, 0);
                 model.addBox(0.2, 0.21, 0.2, 0.8, 0.78, 0.8, blockID, 0);
			   model.addBox(0, 0, 0, 1, 0.20, 1, blockID, 0);*/
     }
},

setRackRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					 model.addBox (0/16, 0, 0/16, 16/16, 0.133, 16/16, blockID, 0);
					  model.addBox (4/16, 0.134, 4/16, 12/16, 0.246, 12/16, blockID, 0);
					  model.addBox (10/16, 0.247, 10/16, 6/16, 0.95, 6/16, blockID, 0);
			
					  model.addBox (4/16, 0.96, 4/16, 12/16, 1, 12/16, blockID, 0);
     }
},

setRitualAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					model.addBox (0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					model.addBox (4/16, 0.21, 4/16, 12/16, 0.80, 12/16, blockID, 0);
					model.addBox (0/16, 0.81, 0/16, 16/16, 1, 16/16, blockID, 0);
					
     }
},

setRitualAltarControllerRender: function(blockID, normal){
    if(normal){
     Block.setBlockShape(blockID, {x: 0, y: 0, z: 0}, {x: 1, y: 0.4, z: 1});			
     }
}
};




// file: API/RuneHelper.js

var RuneRegistry = {
	
registerRune: function (r){
IDRegistry.genItemID(r.RuneID);	
Item.createItem(r.RuneID, r.Name, {name: r.Texture, meta: 0}, {stack: 64});
 },
 
 dropMobs: function (drop) {
  Callback.addCallback("EntityDeath", function(entity){
    if(Entity.getType(entity) == drop.MobsID){
 		var coords = Entity.getPosition(entity);
	if (coords && (!drop.Сhance || Math.random() < drop.Сhance)) {  
      World.drop(coords.x, coords.y, coords.z, drop.ResultID, 1, 0);
  }
	}
  });
 },
 
  dropBlock: function (block) {
	 Block.registerDropFunction(block.BlockID, function(coords, blockID, blockData, level, enchant){
  var source = [[block.BlockID, 1, 0]];
if (source && (!block.Сhance || Math.random() < block.Сhance)) {
		 World.drop(coords.x, coords.y, coords.z, block.DropID, 1, 0);
		 World.drop(coords.x, coords.y, coords.z, block.BlockID, 1, 0);
      } else {
return source;
}
});
 }
};




// file: API/features/AutoReplacement.js

var InventoryTweaks = {
    
   ReplacementItems: function (){
       
       Callback.addCallback("DestroyBlock", function(){
           var unical = Player.getCarriedItem();
           var maxDamage = Item.getMaxDamage(unical.id);
           
        if (unical.id > 0){
            unical.data++;
            if (unical.data++ === maxDamage){
               for(var i = 0; i <= 36; i++){
                 var slot = Player.getInventorySlot(i);
                if ((slot.id === unical.id) && (slot.data++ < maxDamage)){
                    Player.setCarriedItem(slot.id, 1, 0);
                    Player.setInventorySlot(i, 0, -1, 0);
                    } 
                }
            }
        }
           
       });
      },
      
      ReplacementBlock: function (){
       
       Callback.addCallback("ItemUse", function(){

           var block = Player.getCarriedItem();
           
        if ((block.id > 0) && (block.count === 1)){
               for(var i = 0; i <= 36; i++){
                 var slot = Player.getInventorySlot(i);
                if ((slot.id === block.id) && (slot.count > 1)){
                    Player.setCarriedItem(block.id, slot.count+1, 0);
                    Player.setInventorySlot(i, 0, -slot.count, 0);
                }
               }
        }
           
       });
      }
};

if(__config__.access("Auto Replacement") == true){
InventoryTweaks.ReplacementItems();
InventoryTweaks.ReplacementBlock();
}




// file: API/features/ItemInfo.js

var currenDurb;

var ItemInfo = {

regiserInfo: function (name){
	
Callback.addCallback("ItemUse", function(){
	var item = Player.getCarriedItem();
		
		if ((item.id === name)){
			
			var maxDamage = Item.getMaxDamage(item.id);
			var damage = maxDamage;
			damage-= item.data;
		
		if (Entity.getSneaking(Player.get())) {
			 Game.tipMessage("Durability: " + damage + "/" + maxDamage);
		    }
		}
});
   }
};




// file: API/MaterialRegistry.js

//Material
IDRegistry.genItemID("ingotAdamantite");	
Item.createItem("ingotAdamantite", "Adamantite ingot", {name: "adamantite_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ingotAmethist");	
Item.createItem("ingotAmethist", "Amethist ingot", {name: "amethist_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ingotCobolt");	
Item.createItem("ingotCobolt", "Cobolt ingot", {name: "cobolt_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ruby");	
Item.createItem("ruby", "Ruby", {name: "ruby", meta: 0}, {stack: 64});

IDRegistry.genItemID("saphire");	
Item.createItem("saphire", "Saphire", {name: "saphire", meta: 0}, {stack: 64});

IDRegistry.genItemID("nephrite");	
Item.createItem("nephrite", "Nephrite", {name: "nephrite", meta: 0}, {stack: 64});

IDRegistry.genItemID("ingotSilver");	
Item.createItem("ingotSilver", "Silver ingot", {name: "silver_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("ingotTroadamantite");	
Item.createItem("ingotTroadamantite", "Troadamantite ingot", {name: "troadamantite_ingot", meta: 0}, {stack: 64});






// file: API/BottlesAPI/BottlesAPI.js

/*Name: "BottlesAPI",
  Version: 0.1,
  Anchor: "Denys Dzhuhalik"
 */
var BottlesAPI = {
	
	register: function (reg) {
		
	Callback.addCallback("ItemUse", function(coords, item){ 
if (item.id == reg.DISBottlesID){
	Player.setCarriedItem(reg.ACTBottlesID, 1, 0);
}
});
Callback.addCallback("tick", function(coords, item){ 
var item = Player.getCarriedItem(); 
if (item.id == reg.ACTBottlesID){
	var MobEffect = Native.PotionEffect;
	var player = Player.get();
	Entity.addEffect(player, reg.First_EffectID, reg.First_levelEffect, reg.FirstTime_Effect, true, true);
	Entity.addEffect(player, reg.Second_EffectID, reg.Second_levelEffect, reg.SecondTime_Effect, true, true);
	Player.setCarriedItem(reg.ResultBottleID, 1, 0);
}
});
	}
};




// file: API/BottlesAPI/BottlesFunctionRegistry.js

//Sbareis Registry
BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbaerisFull,
	ACTBottlesID: ItemID.BottleSbaerisFullA,
	
	First_EffectID: 8,
	First_levelEffect: 1,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 1,
	Second_levelEffect: 1,
	SecondTime_Effect: 8000,
	
	ResultBottleID: ItemID.BottleSbaeris3
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbaeris3,
	ACTBottlesID: ItemID.BottleSbaeris3A,
	
	First_EffectID: 8,
	First_levelEffect: 2,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 1,
	Second_levelEffect: 2,
	SecondTime_Effect: 8000,
	
	ResultBottleID: ItemID.BottleSbaeris1
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbaeris1,
	ACTBottlesID: ItemID.BottleSbaeris1A,
	
	First_EffectID: 8,
	First_levelEffect: 3,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 1,
	Second_levelEffect: 3,
	SecondTime_Effect: 8000,
	
	ResultBottleID: ItemID.BottleSbaeris0
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbaeris0,
	ACTBottlesID: ItemID.BottleSbaeris0A,
	
	First_EffectID: 8,
	First_levelEffect: 4,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 1,
	Second_levelEffect: 4,
	SecondTime_Effect: 8000,
	
	ResultBottleID: ItemID.BottleEmpty
});
////////////////////////////////////////////////////////////////////////////////////////////////
//Sbinfernos Registry

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbinfernosFull,
	ACTBottlesID: ItemID.BottleSbinfernosFullA,
	
	First_EffectID: 12,
	First_levelEffect: 1,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleSbinfernos2
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbinfernos2,
	ACTBottlesID: ItemID.BottleSbinfernos2A,
	
	First_EffectID: 12,
	First_levelEffect: 2,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleSbinfernos1
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbinfernos1,
	ACTBottlesID: ItemID.BottleSbinfernos1A,
	
	First_EffectID: 12,
	First_levelEffect: 3,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleSbinfernos0
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbinfernos0,
	ACTBottlesID: ItemID.BottleSbinfernos0A,
	
	First_EffectID: 12,
	First_levelEffect: 4,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleEmpty
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sbterros Registry
BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbterrosFull,
	ACTBottlesID: ItemID.BottleSbterrosFullA,
	
	First_EffectID: 11,
	First_levelEffect: 1,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleSbterros2
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbterros2,
	ACTBottlesID: ItemID.BottleSbterros2A,
	
	First_EffectID: 11,
	First_levelEffect: 2,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleSbterros1
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbterros1,
	ACTBottlesID: ItemID.BottleSbterros1A,
	
	First_EffectID: 11,
	First_levelEffect: 3,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleSbterros0
});

BottlesAPI.register({
	DISBottlesID: ItemID.BottleSbterros0,
	ACTBottlesID: ItemID.BottleSbterros0A,
	
	First_EffectID: 11,
	First_levelEffect: 4,
	FirstTime_Effect: 8000,
	
	Second_EffectID: 0,
	Second_levelEffect: 0,
	SecondTime_Effect: 0,
	
	ResultBottleID: ItemID.BottleEmpty
});




// file: API/RecipesRegistry.js

var RecipeRegistry = {

    recipesRack: [],
	recipesAltar: [],

   recipesRackRecipe: function (recipe) {
        this.recipesRack.push(recipe);
    },

    getRackRecipe: function (id, data) {
        for (var key in this.recipesRack) {
            var recipe = this.recipesRack[key];
            if (recipe.input.id === id && recipe.input.data === data) {
                return recipe;
            }
        }
    },
	
	recipesAltarRecipe: function (recipe) {
        this.recipesAltar.push(recipe);
    },
	
   getAltarRecipe: function (input) {
         for (var i = 0; i < this.recipesAltar.length; i++) {

            if (input[0].id == this.recipesAltar[i].Source1.id) {
                if (input[0].data == this.recipesAltar[i].Source1.data) {
                    if (input[0].count >= this.recipesAltar[i].Source1.count) {

                        if (input[1].id == this.recipesAltar[i].Source2.id) {
                            if (input[1].data == this.recipesAltar[i].Source2.data) {
                                if (input[1].count >= this.recipesAltar[i].Source2.count) {
									
	 if (input[2].id == this.recipesAltar[i].Source3.id) {
                            if (input[2].data == this.recipesAltar[i].Source3.data) {
                                if (input[2].count >= this.recipesAltar[i].Source3.count) {
									
									 if (input[3].id == this.recipesAltar[i].Source4.id) {
                            if (input[3].data == this.recipesAltar[i].Source4.data) {
                                if (input[3].count >= this.recipesAltar[i].Source4.count) {
									
									 if (input[4].id == this.recipesAltar[i].Source5.id) {
                            if (input[4].data == this.recipesAltar[i].Source5.data) {
                                if (input[4].count >= this.recipesAltar[i].Source5.count) {
									
									 if (input[5].id == this.recipesAltar[i].Source6.id) {
                            if (input[5].data == this.recipesAltar[i].Source6.data) {
                                if (input[5].count >= this.recipesAltar[i].Source6.count) {
									
									 if (input[6].id == this.recipesAltar[i].Source7.id) {
                            if (input[6].data == this.recipesAltar[i].Source7.data) {
                                if (input[6].count >= this.recipesAltar[i].Source7.count) {
									
				 if (input[7].id == this.recipesAltar[i].Source8.id) {
                            if (input[7].data == this.recipesAltar[i].Source8.data) {
                                if (input[7].count >= this.recipesAltar[i].Source8.count) {
									
                                    return this.recipesAltar[i];

                                }
							}
				 }
								}
							}
									 }
								}
							}
									 }
								}
							}
									 }
								}
							}
									 }
								}
								
							}
	 }
								}
							}
						}
					}
				}
			}

        }
	  }		
};




// file: API/InstrumentRegister.js

ToolAPI.addToolMaterial("adamantite", {durability: 780, level: 5, efficiency: 12, damage: 10, enchantability: 20});
ToolAPI.addToolMaterial("amethyst", {durability: 1001, level: 4, efficiency: 14, damage: 15, enchantability: 20});
ToolAPI.addToolMaterial("cobolt", {durability: 800, level: 4, efficiency: 11, damage: 11, enchantability: 20});
ToolAPI.addToolMaterial("silver", {durability: 750, level: 4, efficiency: 11, damage: 10, enchantability: 20});
ToolAPI.addToolMaterial("troadamantite", {durability: 3000, level: 6, efficiency: 18, damage: 18, enchantability: 20});

var MaterialRegistry = {

    defineMaterial: function (vanilla, name, armor, durabilityModifier, blockTexture) {

        if (!vanilla) {

            IDRegistry.genItemID("axe" + name);
            Item.createItem("axe" + name, name + " axe", {name: "axe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("pickaxe" + name);
            Item.createItem("pickaxe" + name, name + " pickaxe", {
                name: "pickaxe_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("shovel" + name);
            Item.createItem("shovel" + name, name + " shovel", {
                name: "shovel_" + name.toLowerCase(), meta: 0}, {stack: 1});

            IDRegistry.genItemID("sword" + name);
            Item.createItem("sword" + name, name + " sword", {
                name: "sword_" + name.toLowerCase(), meta: 0}, {stack: 1});
				
            IDRegistry.genItemID("helmet" + name);
            Item.createArmorItem("helmet" + name, name + " helmet", {name: "helmet_" + name.toLowerCase()}, {
                type: "helmet",
                armor: armor[0],
                durability: durabilityModifier * 11,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("chestplate" + name);
            Item.createArmorItem("chestplate" + name, name + " chestplate", {name: "chestplate_" + name.toLowerCase()}, {
                type: "chestplate",
                armor: armor[1],
                durability: durabilityModifier * 16,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });

            IDRegistry.genItemID("leggings" + name);
            Item.createArmorItem("leggings" + name, name + " leggings", {name: "leggings_" + name.toLowerCase()}, {
                type: "leggings",
                armor: armor[2],
                durability: durabilityModifier * 15,
                texture: "armor/"+name.toLowerCase() + "_2.png"
            });

            IDRegistry.genItemID("boots" + name);
            Item.createArmorItem("boots" + name, name + " boots", {name: "boots_" + name.toLowerCase()}, {
                type: "boots",
                armor: armor[3],
                durability: durabilityModifier * 13,
                texture: "armor/"+name.toLowerCase() + "_1.png"
            });
            
            ToolAPI.setTool(ItemID["axe" + name], name.toLowerCase(), ToolType.axe);
            ToolAPI.setTool(ItemID["pickaxe" + name], name.toLowerCase(), ToolType.pickaxe);
            ToolAPI.setTool(ItemID["shovel" + name], name.toLowerCase(), ToolType.shovel);
            ToolAPI.setTool(ItemID["sword" + name], name.toLowerCase(), ToolType.sword);
			
			ItemInfo.regiserInfo(ItemID["axe" + name]);
			ItemInfo.regiserInfo(ItemID["pickaxe" + name]);
			ItemInfo.regiserInfo(ItemID["shovel" + name]);
			ItemInfo.regiserInfo(ItemID["sword" + name]);
			
			if(__config__.access("Show durability") == true){
				
			var vanilaItem = [269, 270, 271, 273, 274, 275, 277, 278, 279, 284, 285, 286, 256, 257, 258];
			
			var magicItem = [ItemID.molotTor, ItemID.gungnir];
			
			for (var i=0; i<=magicItem.length; i++){
				ItemInfo.regiserInfo(magicItem[i]);
			}
			
			for (var i=0; i<=vanilaItem.length; i++){
			ItemInfo.regiserInfo(vanilaItem[i]);
			     }
			}
	
        }


    }

};

MaterialRegistry.defineMaterial(false, "Adamantite", [6, 8, 6, 6], 15, "adamentiteblock");
MaterialRegistry.defineMaterial(false, "Amethyst", [7, 8, 8, 7], 19, "amethystblock");
MaterialRegistry.defineMaterial(false, "Cobolt", [6, 7, 6, 6], 12, "coboltblock");
MaterialRegistry.defineMaterial(false, "Silver", [6, 7, 6, 6], 11, "silverblock");
MaterialRegistry.defineMaterial(false, "Troadamantite", [8, 10, 8, 8], 17, "silverblock");





// file: API/RingsHelper.js

/*Name: "RingsHelper",
  Version: 0.5,
  Anchor: "Denys Dzhuhalik"
 */

 
var Infernos = 0;
var Aeris = 0;
var Terros = 0;

//var Amoung = 20000;

var Special;
var elementType;
var Essence;

Saver.addSavesScope("BackpacksScope",
    function read(scope) {
        Infernos = scope.InfernosSaves || 20000;
        Aeris = scope.AerisSaves || 20000;
        Terros = scope.TerrosSaves || 20000;
    },

    function save() {
        return {
            InfernosSaves: Infernos,
            AerisSaves: Aeris,
            TerrosSaves: Terros
        };
    }
);


var RingsHelper = {
	
	registerRing: function (register, bool){
	let normal = bool;
		if (normal==true){
		IDRegistry.genItemID(register.id);	
        Item.createItem(register.id, register.name, {name: register.texture, meta: register.meta}, {stack: register.stack});

		}
	},
	
	
	registerInfernos: function (id, maxInfernos){
		Infernos = maxInfernos;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Infernos >= 0)){
			Game.tipMessage("Curren essence: " + Infernos + "/20000");
		}
		});
		
        },
		
			registerAeris: function (id, maxAeris){
		Aeris = maxAeris;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Aeris >= 0)){
			Game.tipMessage("Curren essence: " + Aeris + "/20000");
		}
		});
		
        },
		
				registerTerros: function (id, maxTerros){
		Terros = maxTerros;
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)&&(Terros >= 0)){
			Game.tipMessage("Curren essence: " + Terros + "/20000");
		}
		});
		
        },
		
		registerFullColor: function (id, enable){
			if (enable === true){	
	Recipes.addShaped({id: id, count: 1, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', ItemID.rubuRing, 0, 'b', ItemID.saphireRing, 0, 'c', ItemID.nephriteRing, 0]);
			
		 Callback.addCallback("ItemUse", function(coords, item){ 
		if ((item.id === id)){
			Game.tipMessage("Curren essence: terros: " + Terros + ", aeris: " + Aeris + ", infernos: " + Infernos);
		}
		});
			}
		},
		
		registerRecipes: function (source, enable){
			if (enable === true){
				
    Recipes.addShaped({id: 302, count: 1, data: 0}, [
        "aaa",
        "a a",
        "   "
    ], ['a', source, 0]);
	
	Recipes.addShaped({id: 303, count: 1, data: 0}, [
        "a a",
        "aaa",
        "aaa"
    ], ['a', source, 0]);
	
	Recipes.addShaped({id: 304, count: 1, data: 0}, [
        "aaa",
        "a a",
        "a a"
    ], ['a', source, 0]);
	
	Recipes.addShaped({id: 305, count: 1, data: 0}, [
        "   ",
        "a a",
        "a a"
    ], ['a', source, 0]);	
	
			}
		}
};




// file: API/EssenseCompusion.js

const comusion = 2000;
	
var ready = false; 

	
var EssenceCompusion = {
	
registerItem: function (id, value, enable){
	if (enable === true){
IDRegistry.genItemID(id);	
Item.createItem(id, value.name, {name: value.texture, meta: value.meta}, {stack: value.stack});
	}
 },
 
 melner: function (hammer){  
	 Callback.addCallback("ItemUse", function(coords, item){
		var item = Player.getCarriedItem();
		if (item.id === hammer){
			if ((Infernos >= comusion) && (Terros >= comusion) && (Aeris >= comusion)){	
			if (ready === true){
        if (Entity.getSneaking(Player.get())){
			Entity.addEffect(Player.get(), 12, 2, 10, true, true);
			Entity.spawn(coords.x, coords.y-1, coords.z, 93);
			Infernos-=comusion;
			Terros-=comusion;
			Aeris-=comusion;
		    }
		}
	}
}
	});
	 
 }
};




// file: API/BaublesRegister.js

var fly = false;		
	
Baubles.registerBauble({
    id: ItemID.fullcolorRing,
    type: "ring",
    onEquip: function () {
		ready = true;
        EssenceCompusion.melner(ItemID.molotTor);
    },
    onTakeOff: function () {
        ready = false;
        EssenceCompusion.melner(ItemID.molotTor);
    }
});



Baubles.registerBauble({
    id: ItemID.megicBelt,
    type: "belt",
    tick: function () {
        Entity.addEffect(Player.get(), 5, 5, 5, true, true);
    }
});


Baubles.registerBauble({
    id: ItemID.saphireRing,
    type: "ring",
    onEquip: function () {
		fly = true;
    },
    onTakeOff: function () {
        fly = false;
    }
});
	 
   Baubles.registerBauble({
    id: ItemID.Wings,
    type: "body",
	onTakeOff: function () {
        Player.setFlyingEnabled(false);
    },
    tick: function () {
		let flying = Player.getFlying();
		let velocity = Player.getVelocity();
        if ((Aeris >= 1) && (fly === true)){
			Player.setFlyingEnabled(true);
		}
		if ((Aeris >= 1) && (fly === true) && (flying === true)){
			Aeris--;
		}
		if ((Aeris < 1) || (fly === false)){
			Player.setFlyingEnabled(false);
						Player.setVelocity(velocity.x, -0.1, velocity.z);
		}
	
    }
});


var Wings = {
	
	registerBaubleWings: function (id, count){
		
		Baubles.registerBauble({
    id: id,
    type: "body",
	onTakeOff: function () {
        Player.setFlyingEnabled(false);
    },
    tick: function () {
		let flying = Player.getFlying();
		let velocity = Player.getVelocity();
        if ((Aeris >= count) && (fly === true)){
			Player.setFlyingEnabled(true);
		}
		if ((Aeris >= count) && (fly === true) && (flying === true)){
			Aeris -=count;
		}
		if ((Aeris < 1) || (fly === false)){
			Player.setFlyingEnabled(false);
						Player.setVelocity(velocity.x, -0.1, velocity.z);
		}
	
    }
		});
  }
};

IDRegistry.genItemID("testW");
Item.createItem("testW", "NoNe", {name: null, meta: 0}, {stack: 1});

Wings.registerBaubleWings(ItemID.testW, 5, true);





// file: Item/rune.js

/*Base Rune*/
RuneRegistry.registerRune({
RuneID: "runeswamp",
Name: "Rune swamp",
Texture: "runeswamp",
});

RuneRegistry.registerRune({
RuneID: "runeocean",
Name: "Rune ocean",
Texture: "runeocean",
});

RuneRegistry.registerRune({
RuneID: "runehell",
Name: "Rune Hell",
Texture: "runehell",
});

RuneRegistry.registerRune({
RuneID: "runedesert",
Name: "Rune desert",
Texture: "runedesert",
});
/*Other Rune*/
RuneRegistry.registerRune({
RuneID: "runaboli",
Name: "Rune pain",
Texture: "runaboli",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runehell, data: 0, count: 1},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotSilver, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runaboli, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runastraha",
Name: "Rune of fear",
Texture: "runastraha",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runehell, data: 0, count: 1},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotCobolt, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runastraha, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runestranght",
Name: "Rune stranght",
Texture: "runestranght",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runehell, data: 0, count: 1},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runestranght, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runeThor",
Name: "Rune Thor",
Texture: "runeThor",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runaboli, data: 0, count: 1},
	Source2: {id: ItemID.runastraha, data: 0, count: 1},
	Source3: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.runestranght, data: 0, count: 1},
	Source6: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runeThor, data: 0, count: 1}
});

RuneRegistry.registerRune({
RuneID: "runeOdin",
Name: "Rune Odin",
Texture: "runeOdin",
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.runeThor, data: 0, count: 1},
	Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.runeOdin, data: 0, count: 1}
});

if(__config__.access("Hard Mode") == true){
//rune swamp
RuneRegistry.dropMobs({
MobsID: 45,
ResultID: ItemID.runeswamp,
Сhance: 0.45,
});

RuneRegistry.dropBlock({
	BlockID: 15,
	DropID: ItemID.runeswamp,
	Сhance: 0.25,
});

//rene ocean
RuneRegistry.dropMobs({
MobsID: 17,
ResultID: ItemID.runeocean,
Сhance: 0.35,
});

RuneRegistry.dropBlock({
	BlockID: 21,
	DropID: ItemID.runeocean,
	Сhance: 0.35,
});

//rune hell
RuneRegistry.dropMobs({
MobsID: 43,
ResultID: ItemID.runehell,
Сhance: 0.35,
});

RuneRegistry.dropMobs({
MobsID: 48,
ResultID: ItemID.runehell,
Сhance: 0.35,
});

RuneRegistry.dropMobs({
MobsID: 41,
ResultID: ItemID.runehell,
Сhance: 0.4,
});

RuneRegistry.dropMobs({
MobsID: 42,
ResultID: ItemID.runehell,
Сhance: 0.4,
});

RuneRegistry.dropBlock({
	BlockID: 87,
	DropID: ItemID.runehell,
	Сhance: 0.25,
});

//rune desert
RuneRegistry.dropMobs({
MobsID: 47,
ResultID: ItemID.runedesert,
Сhance: 0.4,
});

RuneRegistry.dropBlock({
	BlockID: 24,
	DropID: ItemID.runedesert,
	Сhance: 0.3,
});
}

if(__config__.access("Hard Mode") == false){
	//rune swamp
RuneRegistry.dropMobs({
MobsID: 45,
ResultID: ItemID.runeswamp,
Сhance: 0.9,
});

RuneRegistry.dropBlock({
	BlockID: 15,
	DropID: ItemID.runeswamp,
	Сhance: 0.55,
});

//rene ocean
RuneRegistry.dropMobs({
MobsID: 17,
ResultID: ItemID.runeocean,
Сhance: 0.9,
});

RuneRegistry.dropBlock({
	BlockID: 21,
	DropID: ItemID.runeocean,
	Сhance: 0.6,
});

//rune hell
RuneRegistry.dropMobs({
MobsID: 43,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropMobs({
MobsID: 48,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropMobs({
MobsID: 41,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropMobs({
MobsID: 42,
ResultID: ItemID.runehell,
Сhance: 0.7,
});

RuneRegistry.dropBlock({
	BlockID: 87,
	DropID: ItemID.runehell,
	Сhance: 0.55,
});

//rune desert
RuneRegistry.dropMobs({
MobsID: 47,
ResultID: ItemID.runedesert,
Сhance: 0.7,
});

RuneRegistry.dropBlock({
	BlockID: 24,
	DropID: ItemID.runedesert,
	Сhance: 0.58,
});
}




// file: Item/element.js

IDRegistry.genItemID("infernos");
Item.createItem("infernos", "Infernos", {name: "infernos", meta: 0}, {stack: 64, isTech: true});
    
IDRegistry.genItemID("terros");
Item.createItem("terros", "Terros", {name: "terros", meta: 0}, {stack: 64, isTech: true});
	    
IDRegistry.genItemID("aeris");
Item.createItem("aeris", "Aeris", {name: "aeris", meta: 0}, {stack: 64, isTech: true});




// file: Item/bottles.js

Block.setPrototype("souldsGlass", {
    type: Block.TYPE_BASE,
	 getVariations: function () {
        return [
            {
                name: "Soulds Glass",
                texture: [["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0], ["soulsandglass", 0]],
                inCreative: true
            }
        ];
    },

getDrop: function () {
        return [];
    }
});
Recipes.addFurnace(88, BlockID.souldsGlass, 0); 

IDRegistry.genItemID("BottleEmpty");
Item.createItem("BottleEmpty", "Empty Bottle", {name: "soulsandbottle", meta: 0}, {isTech: false});

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: ItemID.BottleEmpty, count: 2, data: 0}, [
        "a a",
        " a ",
        "   "
    ], ['a', BlockID.souldsGlass, 0]);

});

IDRegistry.genItemID("BottleSbaeris0");
Item.createItem("BottleSbaeris0", "Sbaeris Bottle", {name: "sbaeris", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbaeris0A");
Item.createItem("BottleSbaeris0A", "Sbaeris Bottle", {name: "sbaeris", meta: 0}, {stack: 1, isTech: true});
      
IDRegistry.genItemID("BottleSbaeris1");
Item.createItem("BottleSbaeris1", "Sbaeris Bottle", {name: "sbaeris", meta: 1}, {stack: 1, isTech: true});	  

IDRegistry.genItemID("BottleSbaeris1A");
Item.createItem("BottleSbaeris1A", "Sbaeris Bottle", {name: "sbaeris", meta: 1}, {stack: 1, isTech: true});	  
      	  
IDRegistry.genItemID("BottleSbaeris3");
Item.createItem("BottleSbaeris3", "Sbaeris Bottle", {name: "sbaeris", meta: 3}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbaeris3A");
Item.createItem("BottleSbaeris3A", "Sbaeris Bottle", {name: "sbaeris", meta: 3}, {stack: 1, isTech: true});
     
IDRegistry.genItemID("BottleSbaerisFull");
Item.createItem("BottleSbaerisFull", "Sbaeris Bottle", {name: "sbaeris", meta: 4}, {stack: 1, isTech: false});

IDRegistry.genItemID("BottleSbaerisFullA");
Item.createItem("BottleSbaerisFullA", "Sbaeris Bottle", {name: "sbaeris", meta: 4}, {stack: 1, isTech: true});


IDRegistry.genItemID("BottleSbterros0");
Item.createItem("BottleSbterros0", "Sbterros Bottle", {name: "sbterros", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbterros0A");
Item.createItem("BottleSbterros0A", "Sbterros Bottle", {name: "sbterros", meta: 0}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbterros1");
Item.createItem("BottleSbterros1", "Sbterros Bottle", {name: "sbterros", meta: 1}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbterros1A");
Item.createItem("BottleSbterros1A", "Sbterros Bottle", {name: "sbterros", meta: 1}, {stack: 1, isTech: true});
	
IDRegistry.genItemID("BottleSbterros2");
Item.createItem("BottleSbterros2", "Sbterros Bottle", {name: "sbterros", meta: 2}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbterros2A");
Item.createItem("BottleSbterros2A", "Sbterros Bottle", {name: "sbterros", meta: 2}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbterrosFull");
Item.createItem("BottleSbterrosFull", "Sbterros Bottle", {name: "sbterros", meta: 3}, {stack: 1, isTech: false});	

IDRegistry.genItemID("BottleSbterrosFullA");
Item.createItem("BottleSbterrosFullA", "Sbterros Bottle", {name: "sbterros", meta: 3}, {stack: 1, isTech: true});
	

IDRegistry.genItemID("BottleSbinfernos0");
Item.createItem("BottleSbinfernos0", "Sbinfernos Bottle", {name: "sbinfernos", meta: 0}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbinfernos0A");
Item.createItem("BottleSbinfernos0A", "Sbinfernos Bottle", {name: "sbinfernos", meta: 0}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbinfernos1");
Item.createItem("BottleSbinfernos1", "Sbinfernos Bottle", {name: "sbinfernos", meta: 1}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbinfernos1A");
Item.createItem("BottleSbinfernos1A", "Sbinfernos Bottle", {name: "sbinfernos", meta: 1}, {stack: 1, isTech: true});
	
IDRegistry.genItemID("BottleSbinfernos2");
Item.createItem("BottleSbinfernos2", "Sbinfernos Bottle", {name: "sbinfernos", meta: 2}, {stack: 1, isTech: true});

IDRegistry.genItemID("BottleSbinfernos2A");
Item.createItem("BottleSbinfernos2A", "Sbinfernos Bottle", {name: "sbinfernos", meta: 2}, {stack: 1, isTech: true});
    
IDRegistry.genItemID("BottleSbinfernosFull");
Item.createItem("BottleSbinfernosFull", "Sbinfernos Bottle", {name: "sbinfernos", meta: 3}, {stack: 1, isTech: false});

IDRegistry.genItemID("BottleSbinfernosFullA");
Item.createItem("BottleSbinfernosFullA", "Sbinfernos Bottle", {name: "sbinfernos", meta: 3}, {stack: 1, isTech: true});




// file: Item/rings.js

//Gold Rings 

RingsHelper.registerRing({
	id: "rubuRing",
	name: "Ruby ring",
	texture: "rubu_ring",
	meta: 0,
	stack: 1,
}, true);

RingsHelper.registerInfernos(ItemID.rubuRing, 20000);

RingsHelper.registerRing({
	id: "saphireRing",
	name: "Saphire ring",
	texture: "saphire_ring",
	meta: 0,
	stack: 1,
}, true);

RingsHelper.registerAeris(ItemID.saphireRing, 20000);

RingsHelper.registerRing({
	id: "nephriteRing",
	name: "Nephrite ring",
	texture: "nephrite_ring",
	meta: 0,
	stack: 1,
}, true);

RingsHelper.registerTerros(ItemID.nephriteRing, 20000);

RingsHelper.registerRing({
	id: "fullcolorRing",
	name: "Full-color Ring",
	texture: "polnocvetnyy_ring",
	meta: 0,
	stack: 1,
}, true);

RingsHelper.registerFullColor(ItemID.fullcolorRing, true);

//Other

RingsHelper.registerRing({
	id: "ironRing",
	name: "Iron Ring",
	texture: "iron_ring",
	meta: 0,
	stack: 1,
}, true);

RingsHelper.registerRecipes(ItemID.ironRing, true);




// file: Item/essenceItem.js

EssenceCompusion.registerItem("molotTor", {
    name: "Mjomnir",
    texture: "melner",
    meta: 0,
    stack: 1,
}, true);



ToolAPI.addToolMaterial("light", {durability: 6000, level: 5, efficiency: 5, damage: 50, enchantability: 30});

ToolAPI.setTool(ItemID.molotTor, "light", ToolType.sword);

EssenceCompusion.melner(ItemID.molotTor);

EssenceCompusion.registerItem("gungnir", {
    name: "Gungnir",
    texture: "gungnir",
    meta: 0,
    stack: 1,
}, true);

ToolAPI.addToolMaterial("magic", {durability: 6000, level: 5, efficiency: 5, damage: 51, enchantability: 30});

ToolAPI.setTool(ItemID.gungnir, "magic", ToolType.sword);

EssenceCompusion.registerItem("megicBelt", {
    name: "Megic belt",
    texture: "megi_belt",
    meta: 0,
    stack: 1,
}, true);

EssenceCompusion.registerItem("Wings", {
    name: "Wings",
    texture: "wings",
    meta: 0,
    stack: 1,
}, true);





// file: Item/bags.js

var runeID = [ItemID.runeswamp, ItemID.runeocean, ItemID.runehell, ItemID.runedesert];

IDRegistry.genItemID("DruidicBackpack");
Item.createItem("DruidicBackpack", "Druidic Backpack", {name: "druidic_backpack", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.DruidicBackpack, {
    slots: 55,
    slotsCenter: true,
    inRow: 10
});

Callback.addCallback("PostLoaded", function () {
    Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runeswamp, 0,]);
	
	 Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runehell, 0,]);
	
	Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runeocean, 0,]);
	
	Recipes.addShaped({id: ItemID.DruidicBackpack, count: 1, data: 0}, [
        "aaa",
        "cbc",
        "aaa"
    ], ['a', 334, 0, 'b', ItemID.druidology, 0, 'c', ItemID.runedesert, 0,]);
});

/*
IDRegistry.genItemID("runeBag");
Item.createItem("runeBag", "Rune Bag", {name: "runebag", meta: 0}, {stack: 1});

BackpackRegistry.register(ItemID.runeBag, {
    slots: 20,
    slotsCenter: true,
    inRow: 10,
	 isValidItem: function (id, data, count) {
        return id === ItemID.runeswamp, ItemID.runeocean, ItemID.runehell, ItemID.runedesert;
    }
});*/




// file: Block/RuneAltar/Altar.js

var BLOCK_TYPE_ALTAR = Block.createSpecialType({
	base: 4,
	destroytime: 5.2,
	lightlevel: 10.5
});
IDRegistry.genBlockID("altar");
Block.createBlockWithRotation("altar", [
    {
        name: "Rune Altar",
        texture: [["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0]],
        inCreative: true
    }
], BLOCK_TYPE_ALTAR);
RenderHelper.setAltarRender(BlockID.altar, true);

Callback.addCallback("PostLoaded", function () {
	
	 Recipes.addShaped({id: BlockID.altar, count: 1, data: 0}, [
        "aaa",
        "bcb",
        "bbb"
    ], ['a', 266, 0, 'b', 98, 0, 'c', 264, 0]);

});

var guiAltar = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Rune Altar"}},
         inventory: {standart: true},
        background: {
               bitmap: "runealtar_fon"
          }
    },

    drawing: [
    ],

    elements: {
		"slotSource1": {type: "slot", x: 630, y: 70, bitmap: "slot"},
		"slotSource2": {type: "slot", x: 530, y: 150, bitmap: "slot"},
		"slotSource3": {type: "slot", x: 430, y: 250, bitmap: "slot"},
		"slotSource4": {type: "slot", x: 530, y: 350, bitmap: "slot"},
		"slotSource5": {type: "slot", x: 730, y: 150, bitmap: "slot"},
		"slotSource6": {type: "slot", x: 830, y: 250, bitmap: "slot"},
		"slotSource7": {type: "slot", x: 730, y: 350, bitmap: "slot"},
		"slotSource8": {type: "slot", x: 630, y: 430, bitmap: "slot"},
		"slotResult": {type: "slot", x: 630, y: 250, bitmap: "slot"}
    }
});

TileEntity.registerPrototype(BlockID.altar, {
	defaultValues: {
		progress: 0
	},
	
	getGuiScreen: function () {
        return guiAltar;
    },
		
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+0.90, this.z+.5);
	},
	

   tick: function (){
	    var slotResult = this.container.getSlot("slotResult");
		
	   
	   if(World.getWorldTime()%2==0){
			if(slotResult.id > 0){
				this.animationItem.describeItem({
			id: slotResult.id,
			count: 1,
			data: slotResult.data,
			size: 0.5,
			rotation:[3.14/2, 0, 0]
		});
		this.animationItem.load();
			}else {
				this.animationItem.destroy();
			}
		}
	  
	   var slotSource1 = this.container.getSlot("slotSource1");
	    var slotSource2 = this.container.getSlot("slotSource2");
	    var slotSource3 = this.container.getSlot("slotSource3");
	    var slotSource4 = this.container.getSlot("slotSource4");
	    var slotSource5 = this.container.getSlot("slotSource5");
	    var slotSource6 = this.container.getSlot("slotSource6");
	    var slotSource7 = this.container.getSlot("slotSource7");
	    var slotSource8 = this.container.getSlot("slotSource8");
	    var slotResult = this.container.getSlot("slotResult");

		var input = [slotSource1, slotSource2, slotSource3, slotSource4, slotSource5, slotSource6, slotSource7, slotSource8];
		
        var output = RecipeRegistry.getAltarRecipe(input);
		
	   if (output){
		   this.data.progress++;
		   if (this.data.progress++ >= 21){
 slotSource1.count--;
 slotSource2.count--;
 slotSource3.count--;
 slotSource4.count--;
 slotSource5.count--;
 slotSource6.count--;
 slotSource7.count--;
 slotSource8.count--;
 
 slotSource2.id = output.backItem1.id;
 slotSource5.id = output.backItem2.id;
 slotSource2.data = output.backItem1.data;
 slotSource5.data = output.backItem2.data;
 slotSource2.count += output.backItem1.count;
 slotSource5.count += output.backItem2.count;
 
 slotResult.id = output.Result.id;
 slotResult.data = output.Result.data;
 slotResult.count += output.Result.count;
  this.data.progress = 0;
		   }
	 }  
	 this.container.validateAll();  
   }
});




// file: Block/RuneAltar/RecipesMaterial.js

//Gems

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
	Source3: {id: 266, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
	Source6: {id: 266, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 264, data: 0, count: 1},
	
	backItem1: {id: ItemID.BottleEmpty, data: 0, count: 1},
	backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
	
	Result: {id: ItemID.ruby, data: 0, count: 3}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: ItemID.BottleSbaerisFull, data: 0, count: 1},
	Source3: {id: 266, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.BottleSbaerisFull, data: 0, count: 1},
	Source6: {id: 266, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 264, data: 0, count: 1},
	
	backItem1: {id: ItemID.BottleEmpty, data: 0, count: 1},
	backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
	
	Result: {id: ItemID.saphire, data: 0, count: 3}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: ItemID.BottleSbterrosFull, data: 0, count: 1},
	Source3: {id: 266, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.BottleSbterrosFull, data: 0, count: 1},
	Source6: {id: 266, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 264, data: 0, count: 1},
	
	backItem1: {id: ItemID.BottleEmpty, data: 0, count: 1},
	backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
	
	Result: {id: ItemID.nephrite, data: 0, count: 3}
});

//Ingot

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
	Source3: {id: 265, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
	Source6: {id: 265, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.ruby, data: 0, count: 1},
	
	backItem1: {id: ItemID.BottleEmpty, data: 0, count: 1},
	backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
	
	Result: {id: ItemID.ingotAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: ItemID.BottleSbterrosFull, data: 0, count: 1},
	Source3: {id: 265, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.BottleSbterrosFull, data: 0, count: 1},
	Source6: {id: 265, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.nephrite, data: 0, count: 1},
	
	backItem1: {id: ItemID.BottleEmpty, data: 0, count: 1},
	backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
	
	Result: {id: ItemID.ingotSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: ItemID.BottleSbaerisFull, data: 0, count: 1},
	Source3: {id: 265, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.BottleSbaerisFull, data: 0, count: 1},
	Source6: {id: 265, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: ItemID.saphire, data: 0, count: 1},
	
	backItem1: {id: ItemID.BottleEmpty, data: 0, count: 1},
	backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
	
	Result: {id: ItemID.ingotCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source2: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.ingotAmethist, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source3: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source4: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source5: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source6: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source7: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source8: {id: ItemID.ingotAmethist, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.ingotTroadamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
    Source1: {id: empty, data: 0, count: 0},
    Source2: {id: 288, data: 0, count: 1},
    Source3: {id: empty, data: 0, count: 0},
    Source4: {id: empty, data: 0, count: 0},
    Source5: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
    Source6: {id: empty, data: 0, count: 0},
    Source7: {id: empty, data: 0, count: 0},
    Source8: {id: empty, data: 0, count: 0},
    
    backItem1: {id: empty, data: 0, count: 0},
    backItem2: {id: ItemID.BottleEmpty, data: 0, count: 1},
    
    Result: {id: ItemID.fenixFeather, data: 0, count: 1}
});




// file: Block/RuneAltar/RecipesArmor.js

//Helmet

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 332, data: 0, count: 1},
	Source2: {id: 20, data: 0, count: 1},
	Source3: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source4: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source5: {id: 20, data: 0, count: 1},
	Source6: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source7: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source8: {id: ItemID.ingotCobolt, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.helmetCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 87, data: 0, count: 1},
	Source2: {id: 20, data: 0, count: 1},
	Source3: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source4: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source5: {id: 20, data: 0, count: 1},
	Source6: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source7: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.helmetAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 17, data: 0, count: 1},
	Source2: {id: 20, data: 0, count: 1},
	Source3: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source4: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source5: {id: 20, data: 0, count: 1},
	Source6: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source7: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source8: {id: ItemID.ingotSilver, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.helmetSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 266, data: 0, count: 1},
	Source2: {id: 20, data: 0, count: 1},
	Source3: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source4: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source5: {id: 266, data: 0, count: 1},
	Source6: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source7: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source8: {id: ItemID.ingotAmethist, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.helmetAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 266, data: 0, count: 1},
	Source2: {id: 20, data: 0, count: 1},
	Source3: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source4: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source5: {id: 266, data: 0, count: 1},
	Source6: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source7: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.helmetTroadamantite, data: 0, count: 1}
});

//Chestplate

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.saphire, data: 0, count: 1},
	Source2: {id: 332, data: 0, count: 1},
	Source3: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source4: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source5: {id: 332, data: 0, count: 1},
	Source6: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source7: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source8: {id: ItemID.ingotCobolt, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.chestplateCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ruby, data: 0, count: 1},
	Source2: {id: 87, data: 0, count: 1},
	Source3: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source4: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source5: {id: 87, data: 0, count: 1},
	Source6: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source7: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.chestplateAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.nephrite, data: 0, count: 1},
	Source2: {id: 17, data: 0, count: 1},
	Source3: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source4: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source5: {id: 17, data: 0, count: 1},
	Source6: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source7: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source8: {id: ItemID.ingotSilver, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.chestplateSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ruby, data: 0, count: 1},
	Source2: {id: 226, data: 0, count: 1},
	Source3: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source4: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source5: {id: 226, data: 0, count: 1},
	Source6: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source7: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source8: {id: ItemID.ingotAmethist, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.chestplateAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ruby, data: 0, count: 1},
	Source2: {id: 226, data: 0, count: 1},
	Source3: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source4: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source5: {id: 226, data: 0, count: 1},
	Source6: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source7: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.chestplateTroadamantite, data: 0, count: 1}
});

//Leggings

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: 226, data: 0, count: 1},
	Source3: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source4: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source5: {id: 226, data: 0, count: 1},
	Source6: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source7: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source8: {id: ItemID.ingotAmethist, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.leggingsAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: 87, data: 0, count: 1},
	Source3: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source4: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source5: {id: 87, data: 0, count: 1},
	Source6: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source7: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.leggingsAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: 332, data: 0, count: 1},
	Source3: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source4: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source5: {id: 332, data: 0, count: 1},
	Source6: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source7: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source8: {id: ItemID.ingotCobolt, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.leggingsCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: 17, data: 0, count: 1},
	Source3: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source4: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source5: {id: 17, data: 0, count: 1},
	Source6: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source7: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source8: {id: ItemID.ingotSilver, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.leggingsSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: empty, data: 0, count: 0},
	Source2: {id: 266, data: 0, count: 1},
	Source3: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source4: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source5: {id: 266, data: 0, count: 1},
	Source6: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source7: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.leggingsTroadamantite, data: 0, count: 1}
});

//Boots 

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source2: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.bootsSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source2: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.bootsCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.bootsAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source2: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.bootsAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source2: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.bootsAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.bootsTroadamantite, data: 0, count: 1}
});




// file: Block/RuneAltar/RecipesTools.js

//Swords

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 264, data: 0, count: 1},
	Source2: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.swordAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 264, data: 0, count: 1},
	Source2: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.swordAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 264, data: 0, count: 1},
	Source2: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.swordCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 264, data: 0, count: 1},
	Source2: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.swordSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 264, data: 0, count: 1},
	Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.swordTroadamantite, data: 0, count: 1}
});

//Pickaxe

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source2: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source3: {id: 280, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source6: {id: 280, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.pickaxeSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source3: {id: 280, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source6: {id: 280, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.pickaxeAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source2: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source3: {id: 280, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source6: {id: 280, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.pickaxeAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source2: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source3: {id: 280, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source6: {id: 280, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.pickaxeCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source3: {id: 280, data: 0, count: 1},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source6: {id: 280, data: 0, count: 1},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: empty, data: 0, count: 0},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.pickaxeTroadamantite, data: 0, count: 1}
});

//Shovel

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.shovelTroadamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source2: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.shovelCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source2: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.shovelAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source2: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.shovelSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source2: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: empty, data: 0, count: 0},
	Source5: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: empty, data: 0, count: 0},
	Source8: {id: 280, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.shovelAmethyst, data: 0, count: 1}
});

//Axe

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 280, data: 0, count: 0},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: ItemID.ingotSilver, data: 0, count: 1},
	Source8: {id: ItemID.ingotSilver, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.axeSilver, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 280, data: 0, count: 0},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotAdamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.axeAdamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 280, data: 0, count: 0},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: ItemID.ingotAmethist, data: 0, count: 1},
	Source8: {id: ItemID.ingotAmethist, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.axeAmethyst, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 280, data: 0, count: 0},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: ItemID.ingotCobolt, data: 0, count: 1},
	Source8: {id: ItemID.ingotCobolt, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.axeCobolt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
	Source1: {id: 280, data: 0, count: 0},
	Source2: {id: empty, data: 0, count: 0},
	Source3: {id: empty, data: 0, count: 0},
	Source4: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source5: {id: empty, data: 0, count: 0},
	Source6: {id: empty, data: 0, count: 0},
	Source7: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	Source8: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
	
	backItem1: {id: empty, data: 0, count: 0},
	backItem2: {id: empty, data: 0, count: 0},
	
	Result: {id: ItemID.axeTroadamantite, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
    Source1: {id: ItemID.fenixFeather, data: 0, count: 1},
    Source2: {id: ItemID.ingotAmethist, data: 0, count: 1},
    Source3: {id: empty, data: 0, count: 0},
    Source4: {id: empty, data: 0, count: 0},
    Source5: {id: ItemID.ingotCobolt, data: 0, count: 1},
    Source6: {id: empty, data: 0, count: 0},
    Source7: {id: empty, data: 0, count: 0},
    Source8: {id: ItemID.fenixFeather, data: 0, count: 1},
    
    backItem1: {id: empty, data: 0, count: 0},
    backItem2: {id: empty, data: 0, count: 0},
    
    Result: {id: ItemID.Wings, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
    Source1: {id: 373, data: 0, count: 1},
    Source2: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
    Source3: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
    Source4: {id: empty, data: 0, count: 0},
    Source5: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
    Source6: {id: ItemID.ingotTroadamantite, data: 0, count: 1},
    Source7: {id: empty, data: 0, count: 0},
    Source8: {id: ItemID.runestranght, data: 0, count: 1},
    
    backItem1: {id: empty, data: 0, count: 0},
    backItem2: {id: empty, data: 0, count: 0},
    
    Result: {id: ItemID.megicBelt, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
    Source1: {id: ItemID.runeOdin, data: 0, count: 1},
    Source2: {id: ItemID.swordTroadamantite, data: 0, count: 1},
    Source3: {id: BlockID.trueadamantiteBlock, data: 0, count: 1},
    Source4: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
    Source5: {id: ItemID.swordTroadamantite, data: 0, count: 1},
    Source6: {id: BlockID.trueadamantiteBlock, data: 0, count: 1},
    Source7: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
    Source8: {id: ItemID.BottleSbaerisFull, data: 0, count: 1},
    
    backItem1: {id: empty, data: 0, count: 0},
    backItem2: {id: empty, data: 0, count: 0},
    
    Result: {id: ItemID.gungnir, data: 0, count: 1}
});

RecipeRegistry.recipesAltarRecipe({
    Source1: {id: ItemID.axeTroadamantite, data: 0, count: 1},
    Source2: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
    Source3: {id: BlockID.trueadamantiteBlock, data: 0, count: 1},
    Source4: {id: ItemID.BottleSbaerisFull, data: 0, count: 1},
    Source5: {id: ItemID.BottleSbinfernosFull, data: 0, count: 1},
    Source6: {id: BlockID.trueadamantiteBlock, data: 0, count: 1},
    Source7: {id: ItemID.runeThor, data: 0, count: 1},
    Source8: {id: ItemID.swordTroadamantite, data: 0, count: 1},
    
    backItem1: {id: empty, data: 0, count: 0},
    backItem2: {id: empty, data: 0, count: 0},
    
    Result: {id: ItemID.molotTor, data: 0, count: 1}
});




// file: Block/CookingRack/CookingRack.js

var BLOCK_TYPE_RACK = Block.createSpecialType({
	base: 4,
	destroytime: 4.2
});
IDRegistry.genBlockID("CookingRack");
Block.createBlockWithRotation("CookingRack", [
    {
        name: "Cooking Rack",
        texture: [["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
], BLOCK_TYPE_RACK);
RenderHelper.setRackRender(BlockID.CookingRack, true);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.CookingRack, count: 1, data: 0}, [
        "aba",
        " a ",
        "cdc"
    ], ['a', ItemID.BottleEmpty, 0, 'b', 280, 0, 'c', 264, 0, 'd', 379, 0]);
	
});

const guiRack = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Cooking Rack"}},
        inventory: {standart: true},
       background: {standart: true}
    },

    drawing: [
	{type: "bitmap", x: 500, y: 100, bitmap: "guinap", scale: 4.2},
	{type: "bitmap", x: 600, y: 100, bitmap: "guinap", scale: 4.2},
	{type: "bitmap", x: 700, y: 100, bitmap: "guinap", scale: 4.2}
    ],

    elements: {
		"infernosScale": {type: "scale", x: 500, y: 100, direction: 1, bitmap: "guinapinfernos", scale: 4.2},
		"napaerisScale": {type: "scale", x: 600, y: 100, direction: 1, bitmap: "guinapaeris", scale: 4.2},
		"terrosScale": {type: "scale", x: 700, y: 100, direction: 1, bitmap: "guinapterros", scale: 4.2},
		"slotResult1": {type: "slot", x: 530, y: 245, visual: true},
		"slotResult2": {type: "slot", x: 630, y: 245, visual: true},
		"slotResult3": {type: "slot", x: 730, y: 245, visual: true},
		"slotBottles1": {type: "slot", x: 530, y: 35},
		"slotBottles2": {type: "slot", x: 630, y: 35},
		"slotBottles3": {type: "slot", x: 730, y: 35},
		"slotSource": {type: "slot", x: 630, y: 351}
    }
});

TileEntity.registerPrototype(BlockID.CookingRack, {
	defaultValues: {
		progress: 0,
		progressMax: 430
	},
	
	getGuiScreen: function () {
        return guiRack;
    },
	
	init:function(){
		this.animation1 = new Animation.Item(this.x+.5, this.y+.70, this.z+.30);
		this.animation2 = new Animation.Item(this.x+.5, this.y+.70, this.z+.60);
	},

	tick:  function (){
		
	if((World.getBlock(this.x, this.y+1, this.z).id === BlockID.windmillNapo)){
			this.data.progressMax = 215;
		} else {
			this.data.progressMax = 430;
		}
		
		 var slotResult2 = this.container.getSlot("slotResult2");
		 var slotResult3 = this.container.getSlot("slotResult3");
         var slotResult1 = this.container.getSlot("slotResult1");
		  var slotBottles1 = this.container.getSlot("slotBottles1");
		 var slotBottles2 = this.container.getSlot("slotBottles2");
         var slotBottles3 = this.container.getSlot("slotBottles3");
	      var slotSource = this.container.getSlot("slotSource");
		  var slotSource1 = this.container.getSlot("slotSource1");
		  
		  if(World.getWorldTime()%2==0){
			if(slotBottles1.id > 0){
				this.animation1.describeItem({
			id: slotBottles1.id,
			count: 1,
			data: slotBottles1.data,
			size: 0.7,
			rotation: "x"
		});
		this.animation1.load();
			}else {
				this.animation1.destroy();
			}
		}
		
		if(World.getWorldTime()%2==0){
			if(slotBottles2.id > 0){
				this.animation2.describeItem({
			id: slotBottles2.id,
			count: 1,
			data: slotBottles2.data,
			size: 0.7,
			rotation: "x"
		});
		this.animation2.load();
			}else {
				this.animation2.destroy();
			}
		}
		  
		if (slotBottles1.id == ItemID.BottleEmpty && slotResult1.id == ItemID.infernos){
		slotResult1.count--;
		slotBottles1.count--;
		slotBottles1.id = ItemID.BottleSbinfernosFull;
		slotBottles1.count += 1;
		this.container.validateAll();
		}
		
		if (slotBottles2.id == ItemID.BottleEmpty && slotResult2.id == ItemID.aeris){
		slotResult2.count--;
		slotBottles2.count--;
		slotBottles2.id = ItemID.BottleSbaerisFull;
		slotBottles2.count += 1;
		this.container.validateAll();
		}
		
		if (slotBottles3.id == ItemID.BottleEmpty && slotResult3.id == ItemID.terros){
		slotResult3.count--;
		slotBottles3.count--;
		slotBottles3.id = ItemID.BottleSbterrosFull;
		slotBottles3.count += 1;
		this.container.validateAll();
		}
	
	this.container.setScale("infernosScale", this.data.progress / this.data.progressMax);
     this.container.setScale("napaerisScale", this.data.progress / this.data.progressMax);
	 this.container.setScale("terrosScale", this.data.progress / this.data.progressMax);

  var slotResult2 = this.container.getSlot("slotResult2");
		 var slotResult3 = this.container.getSlot("slotResult3");
         var slotResult1 = this.container.getSlot("slotResult1");
	      var slotSource = this.container.getSlot("slotSource");
		  var slotSource1 = this.container.getSlot("slotSource1");	
	
	 var output = RecipeRegistry.getRackRecipe(slotSource.id, slotSource.data);
	 if (output){
	this.data.progress++;
if (this.data.progress >= this.data.progressMax){	
this.data.progress = 0;
 slotSource.count--;
 
 if (slotResult1 && (!slotResult1.chance || Math.random() < slotResult1.chance)) {
	 slotResult1.id = output.result1.id;
	 slotResult1.count += output.result1.count;
	slotResult1.chance = output.result1.chance;
 }
	
if (slotResult2 && (!slotResult2.chance || Math.random() < slotResult2.chance)) {
	 slotResult2.id = output.result2.id;
	 slotResult2.count += output.result2.count;
	 slotResult2.chance = output.result2.chance;
	 }

if (slotResult3 && (!slotResult3.chance || Math.random() < slotResult3.chance)) {
	  slotResult3.id = output.result3.id;
	  slotResult3.count += output.result3.count;
	 slotResult3.chance = output.result3.chance;
	 }else if (slotSource.id == 0){
			this.data.progress = 0;
	 }
  }
}

	this.container.validateAll();

}
});





// file: Block/CookingRack/windmill.js

var BLOCK_TYPE_RACK = Block.createSpecialType({
	base: 4,
	destroytime: 4.2
});
IDRegistry.genBlockID("windmillNapo");
Block.createBlockWithRotation("windmillNapo", [
    {
        name: "Windmill",
        texture: [["windmill_Intel", 0], ["windmill_Intel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
], BLOCK_TYPE_RACK);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.windmillNapo, count: 1, data: 0}, [
        "cac",
        "aba",
        "cac"
    ], ['a', 265, 0, 'b', 152, 0, 'c', 4, 0]);
	
});

Block.setBlockShape(BlockID.windmillNapo, {x: 0, y: 0, z: 0}, {x: 1, y: 0.1, z: 1});






// file: Block/CookingRack/Recipes.js

if(__config__.access("Hard Mode") == false){
RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeocean, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.2},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.7},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.7}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeswamp, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.3},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.7},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.9}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runehell, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 1},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.5}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runedesert, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.6},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.5},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 1}
});
}

if(__config__.access("Hard Mode") == true){
	RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeocean, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.2},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.6},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.6}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runeswamp, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.1},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.6}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runehell, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.6},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.3}
});

RecipeRegistry.recipesRackRecipe({
	 input: {id: ItemID.runedesert, data: 0},
    result1: {id: ItemID.infernos, data: 0, count: 1, chance: 0.4},
	result2: {id: ItemID.aeris, data: 0, count: 1, chance: 0.3},
	result3: {id: ItemID.terros, data: 0, count: 1, chance: 0.5}
});
}




// file: Block/CloneAltar/block.js

IDRegistry.genBlockID("cloneAltar");
Block.createBlockWithRotation("cloneAltar", [
    {
        name: "Clone Altar",
        texture: [["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0], ["napolnitel", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarRender(BlockID.cloneAltar, true);

Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.cloneAltar, count: 1, data: 0}, [
        "aca",
        " a ",
        "aaa"
    ], ['a', 98, 0, 'c', 264, 0]);
    
});




// file: Block/CloneAltar/TileEntity.js

TileEntity.registerPrototype(BlockID.cloneAltar,{
    defaultValues: {
        item: null
    },
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+1.02, this.z+.5);
	},
	
	animation: function (){
		
		 var Item = Player.getCarriedItem();
		 
	  if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())){
		  if (Item.id != ItemID.fullcolorRing){
		  this.data.item = Item.id;
		Player.setCarriedItem(Item.id, Item.count-1, 0);
		 
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
		});
		
		this.animationItem.load();
		  }
		}
		
	},
	
	drop: function (){
			World.drop(this.x-1, this.y, this.z, this.data.item, 1);
			this.data.item = null;
			this.animationItem.destroy();
	},
	
	ret: function (){
			World.drop(this.x-1, this.y, this.z, this.data.item, 1);
			this.data.item = null;
			this.animationItem.destroy();
	},
	
	destroyBlock: function(){
		this.drop();
	},
	
	result: function (){
		let item = Player.getCarriedItem();
           if (item.id == ItemID.fullcolorRing){
			   if ((Infernos >= 2000) && (Aeris >= 2000) && (Terros >= 2000)){
			   Infernos-= 2000;
			   Aeris-= 2000;
			   Terros-= 2000;
			     World.drop(this.x+.5, this.y+1.1, this.z+.5, this.data.item, 1);
                   World.drop(this.x+.5, this.y+1.1, this.z+.5, this.data.item, 1);
             this.data.item = null;
			 this.animationItem.destroy();
			   }
           }
	},
  
    click: function (){
		this.animation();
		this.result();
		var Item = Player.getCarriedItem();
		if (Item.id <= 0){
		this.ret();
		}
     }
});




// file: Block/Rituals/RingsRitual/AltarsRegister.js

IDRegistry.genBlockID("druidicAltar");
Block.createBlockWithRotation("druidicAltar", [
    {
        name: "Ritual Altar",
        texture: [["runealtar_side", 0], ["ringaltar", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarRender(BlockID.druidicAltar, true);

IDRegistry.genBlockID("druidicAltarController");
Block.createBlockWithRotation("druidicAltarController", [
    {
        name: "Ritual Controller",
        texture: [["runealtar_side", 0], ["ringaltar", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0], ["runealtar_side", 0]],
        inCreative: true
    }
]);

RenderHelper.setRitualAltarControllerRender(BlockID.druidicAltarController, true);


Callback.addCallback("PostLoaded", function () {

    Recipes.addShaped({id: BlockID.druidicAltar, count: 1, data: 0}, [
        "aaa",
        "bbb",
        "bbb"
    ], ['a', 266, 0, 'b', 98, 0]);
	
	 Recipes.addShaped({id: BlockID.druidicAltarController, count: 1, data: 0}, [
        "   ",
        "bab",
        "bbb"
    ], ['a', 266, 0, 'b', 98, 0]);
	
});

//Entity.spawn(this.x, this.y, this.z, 93);







// file: Block/Rituals/RingsRitual/RitualRegistry.js

TileEntity.registerPrototype(BlockID.druidicAltar, {
	defaultValues: {
		item: 0
	},
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+1.02, this.z+.5);
	},
	
	animation: function (){
		
		 var Item = Player.getCarriedItem();
		 
	  if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())){
		  this.data.item = Item.id;
		Player.setCarriedItem(Item.id, Item.count-1, 0);
		 
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
		});
		
		this.animationItem.load();
		}
		
	},
	
	drop: function (){
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
	},
	
	tick: function (){
	},
	
	click: function (){
		var Item = Player.getCarriedItem();
		if (Item.count > 0){
		this.animation();
		} else if (Item.count <= 0){
			this.drop();
		}
	},
	
destroy: function(){
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
},

selfDestroy: function(){
	this.destroy();
}
});



TileEntity.registerPrototype(BlockID.druidicAltarController, {
		defaultValues: {
		progress: 0,
		active: false,
		charge: false,
		rings: 0,
		item: 0
	},
	
	init:function(){
		this.animationItem = new Animation.Item(this.x+.5, this.y+.41, this.z+.5);
	},
	
	animation: function (){
		
		 var Item = Player.getCarriedItem();
		 
	  if ((Item.id > 0) && (Item.count > 0) && (!this.animationItem.load())){
		  this.data.item = Item.id;
		Player.setCarriedItem(Item.id, Item.count-1, 0);
		 
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
				});
		this.animationItem.load();
	  }
	},
	
	
	drop: function (){
			this.data.active = false;
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
	},
	
	click: function (){
		var Item = Player.getCarriedItem();
		if (Item.count > 0){
		this.animation();
		} else if (Item.count <= 0){
			this.drop();
		}
	},
	
	destroy: function(){
	this.data.active = false;
	this.animationItem.destroy();
	World.drop(this.x, this.y, this.z, this.data.item, 1, 0);
	this.data.item = 0;
},

selfDestroy: function(){
	this.destroy();
},


checkRitual: function (material, source, result){
	if (World.getBlock(this.x, this.y, this.z).id === BlockID.druidicAltarController){
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x+2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z-2).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z+2).id === BlockID.druidicAltar){
		
	if(World.getTileEntity(this.x, this.y, this.z).data.item === source){
		if(World.getTileEntity(this.x-2, this.y, this.z).data.item === material){
		if(World.getTileEntity(this.x+2, this.y, this.z).data.item === material){
		if(World.getTileEntity(this.x, this.y, this.z-2).data.item === material){
		if(World.getTileEntity(this.x, this.y, this.z+2).data.item === material){
			this.data.active = true;
				this.data.item = result;
		 }
    }
		 }
		      }
	                }
	
	                     }
	                }
	          }
	     }
	}
},

result: function (){	
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
	Entity.spawn(this.x-2, this.y+1, this.z, 93);
	World.getTileEntity(this.x-2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x-2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x+2, this.y, this.z).id === BlockID.druidicAltar){
	Entity.spawn(this.x+2, this.y+1, this.z, 93);
	World.getTileEntity(this.x+2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x+2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x, this.y, this.z-2).id === BlockID.druidicAltar){
	Entity.spawn(this.x, this.y+1, this.z-2, 93);
	World.getTileEntity(this.x, this.y, this.z-2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z-2).data.item = 0;
	}
	if (World.getBlock(this.x, this.y, this.z+2).id === BlockID.druidicAltar){
	Entity.spawn(this.x, this.y+1, this.z+2, 93);
	World.getTileEntity(this.x, this.y, this.z+2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z+2).data.item = 0;
	}
				this.animationItem.describeItem({		
			id: this.data.item,
			count: 1,
			data: 0,
			size: .7,
			rotation:[3.14/2, 0, 0]
		});
		
		this.animationItem.load();
},

Infernos: function (){
	Infernos+=10;
	if (Infernos >= 20000){
				   Infernos=20000;
				   this.data.charge = true;
			}
},

Aeris: function (){
	Aeris+=10;
			if (Aeris >= 20000){
				Aeris=20000;
				this.data.charge = true;
			}
},

Terros: function (){
	Terros+=10;
			if (Terros >= 20000){
				Terros=20000;
				this.data.charge = true;
			}
},

chargeCheck: function (rings, rune, type){
	
	if (World.getBlock(this.x, this.y, this.z).id === BlockID.druidicAltarController){
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x+2, this.y, this.z).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z-2).id === BlockID.druidicAltar){
	if (World.getBlock(this.x, this.y, this.z+2).id === BlockID.druidicAltar){
	
	if(World.getTileEntity(this.x, this.y, this.z).data.item === rings){
		if(World.getTileEntity(this.x-2, this.y, this.z).data.item === rune){
		if(World.getTileEntity(this.x+2, this.y, this.z).data.item === rune){
		if(World.getTileEntity(this.x, this.y, this.z-2).data.item === rune){
		if(World.getTileEntity(this.x, this.y, this.z+2).data.item === rune){
		
		switch(type){
			
		case Infernos:
		this.Infernos();
        break;
        case Aeris:
		this.Aeris();
		break;
		case Terros:
	    this.Terros();
		break;
		
		}
		
	}
	}}
		}}}
	         }}}}
	
},

getSource(){
	
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x-2, this.y+1, this.z, 93);
	World.getTileEntity(this.x-2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x-2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x+2, this.y+1, this.z, 93);
	World.getTileEntity(this.x+2, this.y, this.z).animationItem.destroy();
	World.getTileEntity(this.x+2, this.y, this.z).data.item = 0;
	}
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x, this.y+1, this.z-2, 93);
	World.getTileEntity(this.x, this.y, this.z-2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z-2).data.item = 0;
	}
	if (World.getBlock(this.x-2, this.y, this.z).id === BlockID.druidicAltar){
		Entity.spawn(this.x, this.y+1, this.z+2, 93);
	World.getTileEntity(this.x, this.y, this.z+2).animationItem.destroy();
	World.getTileEntity(this.x, this.y, this.z+2).data.item = 0;
	}
},

tick: function (){
	this.checkRitual(266, ItemID.ruby, ItemID.rubuRing);
	this.checkRitual(266, ItemID.saphire, ItemID.saphireRing);
	this.checkRitual(266, ItemID.nephrite, ItemID.nephriteRing);
	this.checkRitual(265, 265, ItemID.ironRing);
	
	
	this.chargeCheck(ItemID.rubuRing, ItemID.runehell, Infernos);
	this.chargeCheck(ItemID.saphireRing, ItemID.runeocean, Aeris);
	this.chargeCheck(ItemID.nephriteRing, ItemID.runeswamp, Terros);
	this.chargeCheck(ItemID.nephriteRing, ItemID.runedesert, Terros);
	
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runehell, Infernos);
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runeocean, Aeris);
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runedesert, Terros);
	this.chargeCheck(ItemID.fullcolorRing, ItemID.runeswamp, Terros);
	
	if(this.data.charge == true){
		this.getSource();
		this.data.charge = false;
	}
	
	if (this.data.active === true){
		this.result();
		this.data.active = false;
	}
	}
});




// file: Block/materialBlock.js

var BLOCK_TYPE_MATERIALS = Block.createSpecialType({
	base: 4,
	destroytime: 5.1
});
IDRegistry.genBlockID("adamentiteBlock");
Block.createBlock("adamentiteBlock", [
	{name: "Block Adamentite", texture: [["adamentiteblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);

    Recipes.addShaped({id: BlockID.adamentiteBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotAdamantite, 0]);

IDRegistry.genBlockID("amethystBlock");
Block.createBlock("amethystBlock", [
	{name: "Block Amethyst", texture: [["amethystblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);

 Recipes.addShaped({id: BlockID.amethystBlock, count: 1, data: 0}, [
        "   ",
        "abc",
        "   "
    ], ['a', BlockID.adamentiteBlock, 0, 'b', BlockID.coboltBlock, 0, 'c', BlockID.silverBlock, 0]);
	
	IDRegistry.genBlockID("coboltBlock");
Block.createBlock("coboltBlock", [
	{name: "Block Cobolt", texture: [["coboltblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.coboltBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotCobolt, 0]);
	
	IDRegistry.genBlockID("nephriteBlock");
Block.createBlock("nephriteBlock", [
	{name: "Block Nephrite", texture: [["nephriteblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.nephriteBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.nephrite, 0]);
	
	IDRegistry.genBlockID("rubyBlock");
Block.createBlock("rubyBlock", [
	{name: "Block Ruby", texture: [["rubyblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.rubyBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ruby, 0]);
	
	IDRegistry.genBlockID("saphireBlock");
Block.createBlock("saphireBlock", [
	{name: "Block Saphire", texture: [["saphireblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.saphireBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.saphire, 0]);
	
	IDRegistry.genBlockID("silverBlock");
Block.createBlock("silverBlock", [
	{name: "Block Silver", texture: [["silverblock", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.silverBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotSilver, 0]);
	
IDRegistry.genBlockID("trueadamantiteBlock");
Block.createBlock("trueadamantiteBlock", [
	{name: "Block Troadamantite", texture: [["trueadamantite_block", 0]], inCreative: true}
], BLOCK_TYPE_MATERIALS);
	
	Recipes.addShaped({id: BlockID.trueadamantiteBlock, count: 1, data: 0}, [
        "aaa",
        "aaa",
        "aaa"
    ], ['a', ItemID.ingotTroadamantite, 0]);
	
	




// file: druidology/ru.js

if(__config__.access("Druidology language(RU - EN)") == false){

IDRegistry.genItemID("druidology"); 
Item.createItem("druidology", "Druidology", {name: "druidology", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runeswamp, 0]);
    
    Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runeocean, 0]);
    
    Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runehell, 0]);
    
        Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runedesert, 0]);
    
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
        
GuideAPI.registerGuide("druidology", { 
item: ItemID.druidology, 
debug: false, 
textures: { 
background: "druidogui", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 

                
pages: {
 
            "default": {
                nextLink: "test",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Предметы", size: 25, link: "items"},
                        {text: "Блоки", size: 25, link: "blocks"},
                        {text: "Кольца и амулеты", size: 25, link: "rings and amulets"},
                        {text: "Броня", size: 25, link: "armor"},
                        {text: "Оружие  и инструменты", size: 25, link: "weapons_and_instruments"},
                        {text: "Ритуалы", size: 25, link: "rituals"},
                        {text: "Другое", size: 25, link: "other"},
                        
                    ]
                }
            },
            
            "items": {
                preLink: "default",
                nextLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Руны", size: 25, link: "rune"},
                        {text: "Баночки с эссенциями", size: 25, link: "bottles with essence"},
                        {text: "Драгоценные камни", size: 25, link: "gems"},
                        {text: "Металлы", size: 25, link: "metals"},
                    ]
                }
            },
            
//Rune

    "rune": {
                preLink: "items",
                nextLink: "rune_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.runeswamp, data: 0, clicker: {onClick: function(){alert("Rune swamp");}}},
     {id: ItemID.runeocean, data: 0, clicker: {onClick: function(){alert("Rune ocean");}}},
     {id: ItemID.runehell, data: 0, clicker: {onClick: function(){alert("Rune Hell");}}},
     {id: ItemID.runedesert, data: 0, clicker: {onClick: function(){alert("Rune desert");}}},

 ],
 elements: [
 {text: "Руны нужны для создания эссенций. Виды рун: руна океана, ада, пустыни, болота.Для создания эссенций положите руну в наполнитель.Руна океана падает со спрута или лазуритовой руды, ада - с мобов ада или адского камня, пустыни - с кадавров или песчаника и руна болота из ведьм и слизней или железной руды", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runaboli}
                    ],
                    elements: [
                    {text: "Руна боли", size: 20},
                        {text: "Руна боли нужна для крафта некоторых рун и магических вещей", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - серебряный слиток", size: 18}
                    ]
                },
    },
            
         
               "rune_1": {
                preLink: "rune",
                nextLink: "rune_2",
    left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runastraha}
                    ],
                    elements: [
                    {text: "Руна страха", size: 20},
                        {text: "Руна страха нужна для крафта некоторых рун и магических вещей", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - слиток кобольта", size: 18}
                    ]
                },
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runestranght}
                    ],
                    elements: [
                    {text: "Руна силы", size: 20},
                        {text: "Руна силы нужна для крафта некоторых рун и магических вещей", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - адамантитовый слиток", size: 18}
                    ]
                },
    },
    
            
                    "rune_2": {
                preLink: "rune_1",
                nextLink: "items",
    left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeThor}
                    ],
                    elements: [
                    {text: "Руна Тора", size: 20},
                        {text: "Руна Тора - руна созданая самим богом Тором для создания более мощных артефактов.", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна тора, верхний левий слот - слиток труадамантита, верхний правий лот - слиток труадамантита, нижний слот - слиток труадамантита", size: 18}
                    ]
                },
                
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeOdin}
                    ],
                    elements: [
                    {text: "Руна Одина", size: 20},
                        {text: "Руна Одина как и руна Тора создана для создания более мощных артефактов, но создана не Тором, а его отцом Одином.", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - руна ада, нижний слот - адамантитовый слиток", size: 18}
                    ]
                },
    },       
            
    "bottles with essence": {
                preLink: "items",
                nextLink: "bottles with essence_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.BottleEmpty}
                    ],
                    elements: [
                        {text: "Пустая банка в основном нужна для сохранения и использования ессенции", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["b", "", "b"],
 ["", "b", ""],
 ["", "", ""]
 ],
 materials: {
 "b": {id: BlockID.souldsGlass, data: 0}
 },
 result: {id: ItemID.BottleEmpty, count: 2}
 }
 ],
 elements: [
 ],
 }
},
 
 "bottles with essence_1": {
                preLink: "bottles with essence",
                nextLink: "items",
                left: {
 controller: PageControllers.ITEM_GRID_PAGE,
 columns: 3,
 item_size: 73,
 items: [
  {id: ItemID.BottleSbaerisFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbaeris");}}},
     {id: ItemID.BottleSbterrosFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbterros");}}},
     {id: ItemID.BottleSbinfernosFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbinfernos");}}},
 ],
 elements: [
 {text: "Баночки с эссенцией", size: 20},
 {text: "Эссенцию можно налить в баночки с помощью наполнителя (баночку в верхние слоты). Выпив эссенцию вы получите эффекты:Инфернос - огнестойкость, аэрис - скорость и прыгучесть, террос - защита.Чем меньше в баночке ессенции, тем больше у вас уровень эффектов.", size: 18}
 ]
                }
 },
 
 "gems": {
                preLink: "items",
                nextLink: "gems_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ruby}
                    ],
                    elements: [
                        {text: "Рубин - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка инфернос, правый и левый вторие слота - слиток золота, нижний слот алмаз.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphire}
                    ],
                    elements: [
                        {text: "Сапфир - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка аэрис, правый и левый вторие слота - слиток золота, нижний слот алмаз.", size: 18}
                    ]
                }
      },
      
"gems_1": {
                preLink: "items",
                nextLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephrite}
                    ],
                    elements: [
                        {text: "Нефрит - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка террос, правый и левый вторие слота - слиток золота, нижний слот алмаз.", size: 18}
                    ]
                },
      },
      
    
    "metals": {
                preLink: "items",
                nextLink: "metals_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый слиток - металл нужен для крафта некоторой брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка инфернос, правый и левый вторие слота - слиток железа, нижний слот рубин.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовий слиток - металл нужен для крафта некоторой брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка аэрис, правый и левый вторие слота - слиток железа, нижний слот сапфир.", size: 18}
                    ]
                }
      },
      
      
      "metals_1": {
                preLink: "items",
                nextLink: "metals_2",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotSilver}
                    ],
                    elements: [
                        {text: "Серебряный слиток - металл нужен для крафта некоторой брони и инструментов.Его можно получить только в алтаре рун.Рецепт: левый и правый первые слота - баночка террос, правый и левый вторие слота - слиток железа, нижний слот нефрит.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAmethist}
                    ],
                    elements: [
                        {text: "Аметистовый слиток - драгоценный камень нужный в крафт брони и инструментов.Его можно получить только в алтаре рун.Рецепт: верхний слот - кобольтовий слиток, правый первый слот - серебряный слиток, левый первый слот - адамантиевий слиток.", size: 18}
                    ]
                }
      },
      
      "metals_2": {
                preLink: "items",
                nextLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовым слитком - сильный металл добавляемий модификациею.Из нее крафтяться крепкая броня и острые оружие.Рецепт: верхний середний слот - слиток адамантита, первий правий и левий слота - слиток адамантита, средний левый и правий слота - серебряный слиток, нижний левый и правий слота - аметистовый слиток, нижний середний слот - аметистовый слиток", size: 18}
                    ]
                }
      },
      
    

    "blocks": {
                preLink: "default",
                nextLink: "blocks_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.souldsGlass}
                    ],
                    elements: [
                        {text: "Стекло душ", size: 20},
                        {text: "С стекла душ можно скрафтить бутылки для хранения эссенции", size: 18}
                    ]
                },
 
right: {
 controller: PageControllers.OTO_RECIPE_PAGE,
 title: "Рецепт в печке",
 type: 0,
 bar_texture: "furnace_bar_guide",
 recipes: [
 {
 input: {
 id: 88,
 data: 0
 },

 output: {
 id: BlockID.souldsGlass,
 data: 0,
 count: 1
 }
 }
 ],
 elements: [] 
        }
 },
 
 "blocks_1": {
                preLink: "blocks",
                nextLink: "blocks_2",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.altar}
                    ],
                    elements: [
                        {text: "Алтар рун", size: 20},
                        {text: "Именно в алтаре рун крафтяться камни, слитки, руны, броня, инструменти и оружие.Рецепты предметов в алтаре можно посмотреть в их описании.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "c", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.altar, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"blocks_2": {
                preLink: "blocks_1",
                nextLink: "blocks_3",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.CookingRack}
                    ],
                    elements: [
                        {text: "Наполнитель", size: 20},
                        {text: "Наполнитель служит для разложения рун на элементы и наполнение их в банки.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "b", "a"],
 ["", "a", ""],
 ["c", "d", "c"]
 ],
 materials: {
 "a": {id: ItemID.BottleEmpty, data: 0},
 "b": {id: 280, data: 0},
 "d": {id: 379, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.CookingRack, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"blocks_3": {
                preLink: "blocks_2",
                nextLink: "blocks_4",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.adamentiteBlock},
                        {id: BlockID.amethystBlock},
                        {id: BlockID.coboltBlock},
                        {id: BlockID.nephriteBlock},
                        {id: BlockID.saphireBlock},
                        {id: BlockID.rubyBlock},
                        {id: BlockID.silverBlock},
                        {id: BlockID.trueadamantiteBlock},
                    ],
                    elements: [
                        {text: "Блоки драгоценных камней камней и слитков металлов", size: 20},
                        {text: "Они служат лишь для удобного хранения слитки металлов и драгоценных каминь.Так же могут быть декором.Скрафтиты их можно в обычном верстаке с их же предметов", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.windmillNapo}
                    ],
                    elements: [
                        {text: "Ветрогенератор", size: 20},
                        {text: "Ветрогенератор - блок который ускоряет в 2 раза разложения рун в наполнители.Для цьго нужно поставинты его сверху наполнителя.", size: 18}
                    ]
                }
},

"blocks_4": {
                preLink: "blocks_3",
                nextLink: "blocks_5",
                left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["c", "a", "c"],
 ["a", "b", "a"],
 ["c", "a", "c"]
 ],
 materials: {
 "a": {id: 265, data: 0},
 "b": {id: 152, data: 0},
 "c": {id: 4, data: 0}
 },
 result: {id: BlockID.windmillNapo, count: 1}
 }
 ],
 elements: [
 ],
},

right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.cloneAltar}
                    ],
                    elements: [
                        {text: "Алтарь клонирования", size: 20},
                        {text: "С помощью алтаря клонирования вы можете клонировать любой блок или предмет потратив на это по 2000 ессенции кожного типа. Для этого нужно положить предмет для клонирования на алтарь и тапнуть по ним полноцветным кольцом.", size: 18}
                    ]
                }
},

"blocks_5": {
                preLink: "blocks_4",
                nextLink: "default",
                left: {
                                       controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "c", "a"],
 ["", "a", ""],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 98, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.cloneAltar, count: 1}
 }
 ],
 elements: [
 ]
  }
},

"rings and amulets": {
                preLink: "default",
                nextLink: "rings",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Кольца", size: 25, link: "rings"},
                        {text: "Амулети", size: 25, link: "amulets"}
                    ]
                }
            },
            
      
  "rings": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Кольца", size: 30},
                        {text: "Кольца можно получити с помощью ритуала колец(подробнее читайте в разделе ритуалы).Все кольца содержат определенное количество ессенции, которая нужна для использования магических инструментив.Если тапнуть кольцом по блоку, то можно увидеть количество ессенции в этом кольце.Кольца можно зарядить только на тем самым ритуале (подробнее читайте в разделе ритуалы).", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.rubuRing}
                    ],
                    elements: [
                        {text: "Рубиновое кольцо", size: 20},
                        {text: "Рубиновое кольцо - хранит в себе ессенцию инфернос в количестве 20000.Для его крафта нужно положить на контроллер ритуала рубин, а на крайние алтаре слиток золота.", size: 18}
                    ]
                },
            },
            
            "rings_1": {
                preLink: "rings",
                nextLink: "rings_2",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphireRing}
                    ],
                    elements: [
                        {text: "Сапфировое кольцо", size: 20},
                        {text: "Сапфировое кольцо - хранит в себе ессенцию аерис в количестве 20000.Для его крафта нужно положить на контроллер ритуала сапфир, а на крайние алтаре слиток золота.", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephriteRing}
                    ],
                    elements: [
                        {text: "Нефритовое кольцо", size: 20},
                        {text: "Нефритовое кольцо - хранит в себе ессенцию террос в количестве 20000.Для его крафта нужно положить на контроллер ритуала нефрит, а на крайние алтаре слиток золота.", size: 18}
                    ]
                },
            },
            
            "rings_2": {
                preLink: "rings_1",
                nextLink: "rings_3",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fullcolorRing}
                    ],
                    elements: [
                        {text: "Полноцветное кольцо", size: 20},
                        {text: "Полноцветное кольцо - сохраняет в себе все три ессенции по 20000 Его можно получити на обычном верстаке", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 [" ", " ", " "],
 ["a", "b", "c"],
 [" ", " ", " "]
 ],
 materials: {
 "a": {id: ItemID.rubuRing, data: 0},
 "b": {id: ItemID.saphireRing, data: 0},
 "c": {id: ItemID.nephriteRing, data: 0}
 },
 result: {id: ItemID.fullcolorRing, count: 1}
 }
 ],
 elements: [
 ],
}
     },
     
     "rings_3": {
                preLink: "rings_2",
                nextLink: "rings_4",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironRing}
                    ],
                    elements: [
                        {text: "Железное кольцо", size: 20},
                        {text: "Из него можно в обычном алтаре аналогично железной броне можно скрафтиты кольчужную броню Для его крафта нужно положить на контроллер и боковые алтари железный слиток.", size: 18}
                    ]
                },
          }, 
		  
		  
		  "rituals": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Ритуальный алтарь", size: 25, link: "Ritual_creation_of_rings"},
                    ]
                }
            },
			
			"Ritual_creation_of_rings": {
                preLink: "rituals",
                nextLink: "Ritual_creation_of_rings_1",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltar}
                    ],
                    elements: [
                        {text: "Ритуальный алтарь", size: 20},
                        {text: "Ритуальный алтарь нужен для ритуала создания и подзарядки колец.Его нужно разместить во всех 4 сторонах от контроллера алтаря с отступом в 1 блок.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "b", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0}
 },
 result: {id: BlockID.druidicAltar, count: 1}
 }
 ],
 elements: [
 ],
}
            },
			
			"Ritual_creation_of_rings_1": {
                preLink: "Ritual_creation_of_rings",
                nextLink: "Ritual_creation_of_rings_2",
				
              left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Ритуал создания колец", size: 20},
                        {text: "Для создания колец надо положить на ритуальные алтари по золотому слитку и в контроллера алтаря положить рубин, нефрит или сапфир.", size: 18},
                        {text: "Ритуал зарядки колец", size: 20},
                        {text: "Для зарядки колец надо положить на контроллер кольцо которое булем заряжать и вокруг положить руны. Для пополнения разных эссенций разные руны", size: 18},
                    ]
                },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltarController}
                    ],
                    elements: [
                        {text: "Контроллера алтаря", size: 20},
                        {text: "Должен находиться по середине ритуальных алтарей.", size: 18},
                    ]
                },
            },
			
			"Ritual_creation_of_rings_2": {
                preLink: "Ritual_creation_of_rings_1",
                nextLink: "rituals",
				
                              left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 [" ", " ", " "],
 ["b", "a", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0}
 },
 result: {id: BlockID.druidicAltarController, count: 1}
 }
 ],
 elements: [
 ],
}
            },
            
         

 "armor": {
                preLink: "default",
                nextLink: "Adamantite_armor",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Адамантитовая броня", size: 25, link: "Adamantite_armor"},
                        {text: "Серебряная броня", size: 25, link: "Silver_armor"},
                        {text: "Кобольтовая броня", size: 25, link: "Cobolt_armor"},
                        {text: "Аметистовая броня", size: 25, link: "Amethist_armor"},
                        {text: "Труадамантитовая броня", size: 25, link: "Troadamantite_armor"},
                    ]
                }
            },
    
    
"Adamantite_armor": {
                preLink: "armor",
                nextLink: "Adamantite_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 165;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - адский камень, правый и левый верхние слоты - стекло, все остальные слоты - слиток адамантита", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 240;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - рубин, правый и левый верхние слоты - адский камень, все остальные слоты - слиток адамантита", size: 18}
                    ]
                }
},
    
                
"Adamantite_armor_1": {
               preLink: "Adamantite_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 225;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пустой, правый и левый верхние слоты - адский камень, все остальные слоты - слиток адамантита", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 195;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - слиток адамантита, правый и левый верхние слоты - слиток адамантита", size: 18}
                    ]
                },
},

//
"Silver_armor": {
                preLink: "armor",
                nextLink: "Silver_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetSilver}
                    ],
                    elements: [
                        {text: "Серебряный шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 121;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - древесина, правый и левый верхние слоты - стекло, все остальные слоты - серебряный слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateSilver}
                    ],
                    elements: [
                        {text: "Серебряный нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 176;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - нефрит, правый и левый верхние слоты - древесина, все остальные слоты - серебряный слиток", size: 18}
                    ]
                }
},
    
                
"Silver_armor_1": {
               preLink: "Silver_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsSilver}
                    ],
                    elements: [
                        {text: "Серебряные поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 165;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пустой, правый и левый верхние слоты - адский камень, все остальные слоты - серебряный слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsSilver}
                    ],
                    elements: [
                        {text: "Адамантитовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 143;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - серебряный слиток, правый и левый верхние слоты - серебряный слиток", size: 18}
                    ]
                },
},

//
"Cobolt_armor": {
                preLink: "armor",
                nextLink: "Cobolt_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 132;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - снег, правый и левый верхние слоты - стекло, все остальные слоты - слиток кобольта", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 192;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - сапфир, правый и левый верхние слоты - снег, все остальные слоты - слиток кобольта", size: 18}
                    ]
                }
},
    
                
"Cobolt_armor_1": {
               preLink: "Cobolt_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 180;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пусто, правый и левый верхние слоты - адский камень, все остальные слоты - серебряный слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 6;", size: 18},
                        {text: "-прочность 156;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - слиток кобольта, правый и левый верхние слоты - слиток кобольта", size: 18}
                    ]
                },
},

///
"Amethist_armor": {
                preLink: "armor",
                nextLink: "Amethist_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 209;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - золотой слиток, правый и левый верхние слоты - стекло, все остальные слоты - аметистовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 304;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - рубин, правый и левый верхние слоты - слиток золота, все остальные слоты - аметистовый слиток", size: 18}
                    ]
                }
},
    
                
"Amethist_armor_1": {
               preLink: "Amethist_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 285;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пусто, правый и левый верхние слоты - золотой слиток, все остальные слоты - аметистовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 7;", size: 18},
                        {text: "-прочность 247;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - аметистовый слиток, правый и левый верхние слоты - аметистовый слиток", size: 18}
                    ]
                },
},

///
"Troadamantite_armor": {
                preLink: "armor",
                nextLink: "Troadamantite_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовый шлем", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 187;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - золотой слиток, правый и левый верхние слоты - стекло, все остальные слоты - труадамантитовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовый нагрудник", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 10;", size: 18},
                        {text: "-прочность 272;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - рубин, правый и левый верхние слоты - слиток золота, все остальные слоты - труадамантитовый слиток", size: 18}
                    ]
                }
},
    
                
"Troadamantite_armor_1": {
               preLink: "Troadamantite_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовые поножи", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 255;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - пусто, правый и левый верхние слоты - золотой слиток, все остальные слоты - труадамантитовый слиток", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовые ботинки", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-количество защити 8;", size: 18},
                        {text: "-прочность 221;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - труадамантитовый слиток, правый и левый верхние слоты - труадамантитовый слиток", size: 18}
                    ]
                },
},

"weapons_and_instruments": {
                preLink: "default",
                nextLink: "Adamantite_weapons_and_instruments",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Адамантитовые оружие и инструменты", size: 25, link: "Adamantite_weapons_and_instruments"},
                        {text: "Серебряные оружие и инструменты", size: 25, link: "Silver_weapons_and_instruments"},
                        {text: "Кобольтовые оружие и инструменты", size: 25, link: "Cobolt_weapons_and_instruments"},
                        {text: "Аметистовые оружие и инструменты", size: 25, link: "Amethist_weapons_and_instruments"},
                        {text: "Труадамантитовые оружие и инструменты", size: 25, link: "Troadamantite_weapons_and_instruments"},
                        {text: "Магическое оружие", size: 25, link: "Magic_weapons"},
                    ]
                }
            },
			
			
			"Magic_weapons": {
               preLink: "weapons_and_instruments",
                nextLink: "Magic_weapons_1",
           left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.molotTor}
                    ],
                    elements: [
                        {text: "Mjomnir", size: 20},
                        {text: "Мъёльнир, молот Тора - магическое оружие неизвестной силы, которое может призывать молнию.Для етого нужно присесть и тапнуть по любому блоку.Для призыва молнии нужно одеть Полноцветное кольцо в кладку мода Baubles.На 1 призыв молнии тратится по 2000 ессенции каждого элемента кольца.", size: 18}	
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Крафт в алтаре рун: верхний слот - Труадамантитовый топор, правый и левый верхние слоты - Бутылка Инфернос, правый и левый средние слоты Труадамантитовый блок, левый нижний слот - Бутылка АЭРИС, правый нижний слот - руна тора, нижний слот - Труадамантитовый меч", size: 18}
                    ]
                },
},

		"Magic_weapons_1": {
               preLink: "Magic_weapons",
                nextLink: "weapons_and_instruments",
           
		   left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.gungnir}
                    ],
                    elements: [
                        {text: "Gungnir", size: 20},
                        {text: "Гунгнир - магический копье с древней мифологии.Наносить очень большой урон.Крафт в алтаре рун: верхний слот - руна Одина, правый и левый верхние слоты - Труадамантитовый меч, правый и левый средние слоты Труадамантитовый блок, левый и правый нижние слоты - Бутылка Инфернос, нижний слот - Бутылка Аэрис", size: 18}
                    ]
                },
		   
		   
		   right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.megicBelt}
                    ],
                    elements: [
                        {text: "Мегингъёрд", size: 20},
                        {text: "При одевании в вкладку с мода Baubles дает эффект силы 5 уровня.Крафт: верхний слот - зелье силы, правый и левый верхние слоты - Труадамантитовый слиток, правый и левый средние слоты - Труадамантитовый слиток, нижний слот - руна Страха", size: 18}
						
                    ]
                },
},
            
///         
"Adamantite_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Adamantite_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 10;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - адамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовая кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 12;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - адамантитовый слиток, правый и левый верхние слоты - адамантитовый слиток,правый и левый средние слоты - палки", size: 18}
                    ]
                },
},

"Adamantite_weapons_and_instruments_1": {
               preLink: "Adamantite_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовая лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 12;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - адамантитовый слиток, правый и левый верхние слоты - адамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAdamantite}
                    ],
                    elements: [
                        {text: "Адамантитовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 12;", size: 18},
                        {text: "-прочность 780;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - адамантитовый слиток, - палки, нижний слот - адамантитовый слиток", size: 18}
                    ]
                },
},

///

"Silver_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Silver_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordSilver}
                    ],
                    elements: [
                        {text: "Серебряный меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 10;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - серебряный слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeSilver}
                    ],
                    elements: [
                        {text: "Cеребряная кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - серебряный слиток, правый и левый верхние слоты - серебряный слиток,правый и левый средние слоты - палки", size: 18}
                    ]
                },
},

"Silver_weapons_and_instruments_1": {
               preLink: "Silver_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelSilver}
                    ],
                    elements: [
                        {text: "Cеребряная лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - серебряный слиток, правый и левый верхние слоты - серебряный слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeSilver}
                    ],
                    elements: [
                        {text: "Серебряный топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 750;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - серебряный слиток, - палки, нижний слот - серебряный слиток", size: 18}
                    ]
                },
},

///

"Cobolt_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Cobolt_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - кобольтовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовая кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - кобольтовый слиток, правый и левый верхние слоты - кобольтовый слиток,правый и левый средние слоты - палки", size: 18}
                    ]
                },
},

"Cobolt_weapons_and_instruments_1": {
               preLink: "Cobolt_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовая лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - кобольтовый слиток, правый и левый верхние слоты - кобольтовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeCobolt}
                    ],
                    elements: [
                        {text: "Кобольтовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 11;", size: 18},
                        {text: "-прочность 800;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - кобольтовый слиток, - палки, нижний слот - кобольтовый слиток", size: 18}
                    ]
                },
},

///

"Amethist_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Amethist_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 15;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - аметистовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAmethyst}
                    ],
                    elements: [
                        {text: "Аметист кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 14;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - аметистовый слиток, правый и левый верхние слоты - аметистовый слиток,правый и левый средние слоты - палки", size: 18}
                    ]
                },
},

"Amethist_weapons_and_instruments_1": {
               preLink: "Amethist_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelAmethyst}
                    ],
                    elements: [
                        {text: "Аметист лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 14;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - аметистовый слиток, правый и левый верхние слоты - аметистовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAmethyst}
                    ],
                    elements: [
                        {text: "Аметистовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 14;", size: 18},
                        {text: "-прочность 1001;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - аметистовый слиток, - палки, нижний слот - аметистовый слиток", size: 18}
                    ]
                },
},

///

"Troadamantite_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Troadamantite_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовый меч", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-урон 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - алмаз, правый и левый верхние слоты - труадамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовая кирка", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - труадамантитовый слиток, правый и левый верхние слоты - труадамантитовый слиток,правый и левый средние слоты - палки", size: 18}
                    ]
                },
},

"Troadamantite_weapons_and_instruments_1": {
               preLink: "Troadamantite_weapons_and_instruments",
                nextLink: "Troadamantite_weapons_and_instruments_2",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовая лопата", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - труадамантитовый слиток, правый и левый верхние слоты - труадамантитовый слиток, нижний слот - палка", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeTroadamantite}
                    ],
                    elements: [
                        {text: "Труадамантитовый топор", size: 20},
                        {text: "Характеристики:", size: 18},
                        {text: "-эффективность 18;", size: 18},
                        {text: "-прочность 3000;", size: 18},
                        {text: "Рецепт в алтаре рун: верхний слот - палка, правый и левый нижние слоты - труадамантитовый слиток, - палки, нижний слот - труадамантитовый слиток", size: 18}
                    ]
                },
},


"other": {
               preLink: "default",
                nextLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - мод добавляющий затерянную магию друидов. С этим модом вы сможете создавать необычные инструменты, броню и даже молот Тора - мьелнир.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Крылья", size: 25, link: "wings"},
                        {text: "Рюкзак", size: 25, link: "backpack"},  
                        {text: "Druidic Структура", size: 25, link: "druidic_strukture"},  
                        {text: "Фичи Druidic Craft", size: 25, link: "features"}  
                    ]
                }
},

"druidic_strukture": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        /*{id: ItemID.fenixFeather}*/
                    ],
                    elements: [
                        {text: "Друидик структура", size: 20},
                        {text: "Друидик структура - это мультиблочна структура, генруеться в различных биомов кроме пустини.В центре структуры если сломать полублок можно увидеть сундук в которой можно найти некоторые предметы:", size: 18},
                        {text: "-алмаз (шанс: 20%, макс. количество: 2)", size: 18},
                        {text: "-золото (шанс: 30%, макс. количество: 4)", size: 18},
                        {text: "-железный слиток (шанс: 90%, макс. количество: 6)", size: 18},
                        {text: "-рубин (шанс: 20%, макс. количество: 2)", size: 18},
                        {text: "-сапфир (шанс: 30%, макс. количество: 2)", size: 18},
                        {text: "-нефрит (шанс: 30%, макс. количество: 2)", size: 18}
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "-руна болота (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "-руна океана (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "-руна ада (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "-руна пустыны (шанс: 80%, макс. количество: 3)", size: 18},
                        {text: "Внимание !!! Если вы разработчик, то вы можете использовать ДруидицAPI и добавлять свои предмети.ДруидицAPI описано в документации которую можно найти в официальной группе мода - https://vk.com/druidic_craft", size: 20, color: android.graphics.Color.RED}
						]
			 },
                 

},

"wings": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fenixFeather}
                    ],
                    elements: [
                        {text: "Перо феникса", size: 20},
                        {text: "Перо феникса нужно для крафта крыльев.", size: 18},
                        {text: "Крафт: левый верхний слот - перо курицы, правый верхний слот - бутылка Инфернос.", size: 18},
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.Wings}
                    ],
                    elements: [
                        {text: "Крылья", size: 20},
                        {text: "Крылья дают возможность летать.", size: 18},
                        {text: "Чтобы взлететь нужно одеть крылья на вкладку Baubles в слот body и сапфировое кольцо в вкладку Baubles слот для колец.Пры полете тратится ессенсия аерис в количестве 1 в тик.", size: 18},
                        {text: "Крафт: верхний слот - перо феникса, левый верхний слот - слиток аметсиста, правый верхний слот - слиток кобольта, нижний слот - перо феникса.", size: 18}
						]
			 },
                 

},

"backpack": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.DruidicBackpack}
                    ],
                    elements: [
                        {text: "Друидик рюкзак", size: 20},
                        {text: "Рюкзак для сохранения ресурсов.Имеет 55 слотов.Получиты можно в обычном верстаке", size: 18},
						]
			 },
			 
			               right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Рецепт в верстаке",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["c", "b", "c"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 334, data: 0},
 "b": {id: ItemID.druidology, data: 0},
 "c": {id: ItemID.runeswamp, data: 0}
 },
 result: {id: ItemID.DruidicBackpack, count: 1}
 }
 ],
 elements: [
 ],
}               
},

"features": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "Фичи:", size: 19},
                        {text: "-автоматическая замена сломанных инструментов (если таковые имеются в инвентарь) и Опустевший стаков предметов;", size: 18},
                        {text: "-если присесть и тапнуть ванильным инструментом, или инструментом мода покажется прочность инструмента;", size: 18},
						{text: "", size: 18},
                        {text: "Внимание: все фичи создан для полешення прохождения игры, но они не были до конца проверенные и могут работать некоректно.Поэтому их можно с легкостью выключить в конфиге.", size: 18, color: android.graphics.Color.RED},
						]
			 },             
}
}   
});
});

}




// file: druidology/en.js

if(__config__.access("Druidology language(RU - EN)") == true){

IDRegistry.genItemID("druidology"); 
Item.createItem("druidology", "Druidology", {name: "druidology", meta: 0}, {stack: 1});

Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runeswamp, 0]);
    
    Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runeocean, 0]);
    
    Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runehell, 0]);
    
        Recipes.addShaped({id: ItemID.druidology, count: 1, data: 0}, [
        "   ",
        "ab ",
        "   "
    ], ['a', 340, 0, 'b', ItemID.runedesert, 0]);
    
ModAPI.addAPICallback("GuideAPI", function(api){ 
const GuideAPI = api.GuideAPI; 
const GuideHelper = api.GuideHelper; 
const PageControllers = api.PageControllers;
        
GuideAPI.registerGuide("druidology", { 
item: ItemID.druidology, 
debug: false, 
textures: { 
background: "druidogui", 
nextLink: "next_page", 
preLink: "pre_page", 
close: "cancel", 
}, 

                
pages: {
 
            "default": {
                nextLink: "test",
                left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Items", size: 25, link: "items"},
                        {text: "Blocks", size: 25, link: "blocks"},
                        {text: "Rings and amulets", size: 25, link: "rings and amulets"},
                        {text: "Armor", size: 25, link: "armor"},
                        {text: "Weapons and tools", size: 25, link: "weapons_and_instruments"},
                        {text: "Rituals", size: 25, link: "rituals"},
                        {text: "Other", size: 25, link: "other"},
                        
                    ]
                }
            },
            
            "items": {
                preLink: "default",
                nextLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Rune", size: 25, link: "rune"},
                        {text: "Essences jars", size: 25, link: "bottles with essence"},
                        {text: "Gems", size: 25, link: "gems"},
                        {text: "Metals", size: 25, link: "metals"},
                    ]
                }
            },
            
//Rune

    "rune": {
                preLink: "items",
                nextLink: "rune_1",
            left: {
 controller: PageControllers.ITEM_PAGE,
 items: [ 
     {id: ItemID.runeswamp, data: 0, clicker: {onClick: function(){alert("Rune swamp");}}},
     {id: ItemID.runeocean, data: 0, clicker: {onClick: function(){alert("Rune ocean");}}},
     {id: ItemID.runehell, data: 0, clicker: {onClick: function(){alert("Rune Hell");}}},
     {id: ItemID.runedesert, data: 0, clicker: {onClick: function(){alert("Rune desert");}}},

 ],
 elements: [
 {text: "Runes are needed to create essences. Types of runes: the rune of the ocean, hell, desert, swamp. To create essences, put the rune into the filler. slugs or iron ore", size: 18}
 ]
 }, 
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runaboli}
                    ],
                    elements: [
                    {text: "Rune of pain", size: 20},
                        {text: "The rune of pain is needed to craft some runes and magical items.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the hell rune, the bottom slot is the silver bar", size: 18}
                    ]
                },
    },
            
         
               "rune_1": {
                preLink: "rune",
                nextLink: "rune_2",
    left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runastraha}
                    ],
                    elements: [
                    {text: "Rune of fear", size: 20},
                        {text: "The rune of fear is needed to craft some runes and magical items.", size: 18},
                        {text: "The recipe in the rune altar: the top slot - the hell rune, the bottom slot - kobolt bar", size: 18}
                    ]
                },
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runestranght}
                    ],
                    elements: [
                    {text: "Rune stranght", size: 20},
                        {text: "The rune stranght is needed to craft some runes and magical items.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the rune of hell, the bottom slot is an adamantite ingot", size: 18}
                    ]
                },
    },
    
            
                    "rune_2": {
                preLink: "rune_1",
                nextLink: "items",
    left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeThor}
                    ],
                    elements: [
                    {text: "Rune Thor", size: 20},
                        {text: "Rune Thor - rune created by the god Thor himself to create more powerful artifacts.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the rune of the torus, the top left slot is the truadamantite ingot, the upper right lot is the truadamantite ingot, the lower slot is the truadamantite ingot", size: 18}
                    ]
                },
                
    right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.runeOdin}
                    ],
                    elements: [
                    {text: "Runa Odin", size: 20},
                        {text: "The rune of Odin, like the rune of Thor, was created to create more powerful artifacts, but was created not by Thor, but by his father Odin.", size: 18},
                        {text: "The recipe in the rune altar: the top slot is the rune of hell, the bottom slot is an adamantite ingot", size: 18}
                    ]
                },
    },       
            
    "bottles with essence": {
                preLink: "items",
                nextLink: "bottles with essence_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.BottleEmpty}
                    ],
                    elements: [
                        {text: "An empty jar is mainly needed to save and use the essences.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["b", "", "b"],
 ["", "b", ""],
 ["", "", ""]
 ],
 materials: {
 "b": {id: BlockID.souldsGlass, data: 0}
 },
 result: {id: ItemID.BottleEmpty, count: 2}
 }
 ],
 elements: [
 ],
 }
},
 
 "bottles with essence_1": {
                preLink: "bottles with essence",
                nextLink: "items",
                left: {
 controller: PageControllers.ITEM_GRID_PAGE,
 columns: 3,
 item_size: 73,
 items: [
  {id: ItemID.BottleSbaerisFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbaeris");}}},
     {id: ItemID.BottleSbterrosFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbterros");}}},
     {id: ItemID.BottleSbinfernosFull, data: 0, clicker: {onClick: function(){alert("Bottle Sbinfernos");}}},
 ],
 elements: [
 {text: "Jars with essence", size: 20},
 {text: "The essence can be poured into jars with a filler (jar in the upper slots). After drinking the essence, you will get the effects: Infernos - fire resistance, aeris - speed and jumping ability, terros - protection. The smaller the essence in a jar, the more effects you have.", size: 18}
 ]
                }
 },
 
 "gems": {
                preLink: "items",
                nextLink: "gems_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ruby}
                    ],
                    elements: [
                        {text: "Ruby is a precious stone needed in the craft of armor and tools. It can be obtained only in the rune altar. Recipe: left and right first slots - jar infernos, right and left secondary slot - gold ingot, lower diamond slot.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphire}
                    ],
                    elements: [
                        {text: "Sapphire is a precious stone needed in the craft of armor and tools. It can only be obtained in the rune altar.", size: 18}
                    ]
                }
      },
      
"gems_1": {
                preLink: "items",
                nextLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephrite}
                    ],
                    elements: [
                        {text: "Nephrite is a precious stone needed in the craft of armor and tools. It can be obtained only in the rune altar. The recipe: the left and right first slots are a jar of terros, the right and left secondary slots are gold ingots, the bottom slot is a diamond.", size: 18}
                    ]
                },
      },
      
    
    "metals": {
                preLink: "items",
                nextLink: "metals_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite ingot - metal is needed for crafting some armor and tools. It can be obtained only in the rune altar. Recipe: left and right first slots - jar infernos, right and left second slot - iron ingot, lower slot ruby.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotCobolt}
                    ],
                    elements: [
                        {text: "Koboltovy ingot - metal is needed for crafting some armor and tools. It can be obtained only in the rune altar. Recipe: left and right first slots - aeris jar, right and left second slot - iron ingot, lower sapphire slot.", size: 18}
                    ]
                }
      },
      
      
      "metals_1": {
                preLink: "items",
                nextLink: "metals_2",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotSilver}
                    ],
                    elements: [
                        {text: "Silver ingot - metal is needed for crafting some armor and tools. It can be obtained only in the rune altar.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotAmethist}
                    ],
                    elements: [
                        {text: "Amethyst ingot is a precious stone needed in the craft of armor and tools. It can be obtained only in the rune altar. Recipe: the top slot is a koboltian ingot, the right first slot is a silver ingot, the left first slot is an adamantium ingot.", size: 18}
                    ]
                }
      },
      
      "metals_2": {
                preLink: "items",
                nextLink: "items",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ingotTroadamantite}
                    ],
                    elements: [
                        {text: "A truamamantite ingot is a strong metal to be added to the modification. Strong armor and sharp weapons are crafted from it. amethyst ingot, lower middle slot - amethyst ingot", size: 18}
                    ]
                }
      },
      
    

    "blocks": {
                preLink: "default",
                nextLink: "blocks_1",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.souldsGlass}
                    ],
                    elements: [
                        {text: "Glass shower", size: 20},
                        {text: "With a glass shower you can craft bottles to store essences.", size: 18}
                    ]
                },
 
right: {
 controller: PageControllers.OTO_RECIPE_PAGE,
 title: "Furnace recipe",
 type: 0,
 bar_texture: "furnace_bar_guide",
 recipes: [
 {
 input: {
 id: 88,
 data: 0
 },

 output: {
 id: BlockID.souldsGlass,
 data: 0,
 count: 1
 }
 }
 ],
 elements: [] 
        }
 },
 
 "blocks_1": {
                preLink: "blocks",
                nextLink: "blocks_2",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.altar}
                    ],
                    elements: [
                        {text: "Altar rune", size: 20},
                        {text: "It is in the altar of runes that stones, ingots, runes, armor, tools and weapons can be crafted. Recipes of objects in the altar can be found in their description.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "c", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.altar, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"blocks_2": {
                preLink: "blocks_1",
                nextLink: "blocks_3",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.CookingRack}
                    ],
                    elements: [
                        {text: "Cooking Rack", size: 20},
                        {text: "Cooking Rack serves to decompose runes into elements and fill them into jars.", size: 18}
                    ]
                },
 
right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "b", "a"],
 ["", "a", ""],
 ["c", "d", "c"]
 ],
 materials: {
 "a": {id: ItemID.BottleEmpty, data: 0},
 "b": {id: 280, data: 0},
 "d": {id: 379, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.CookingRack, count: 1}
 }
 ],
 elements: [
 ],
 }
},

"blocks_3": {
                preLink: "blocks_2",
                nextLink: "blocks_4",
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.adamentiteBlock},
                        {id: BlockID.amethystBlock},
                        {id: BlockID.coboltBlock},
                        {id: BlockID.nephriteBlock},
                        {id: BlockID.saphireBlock},
                        {id: BlockID.rubyBlock},
                        {id: BlockID.silverBlock},
                        {id: BlockID.trueadamantiteBlock},
                    ],
                    elements: [
                        {text: "Gemstone blocks of stones and metal bars", size: 20},
                        {text: "They serve only for convenient storage of ingots of metals and precious fires. They can also be decorated. They can be scrapped in the usual workbench from their own objects.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.windmillNapo}
                    ],
                    elements: [
                        {text: "Wind generator", size: 20},
                        {text: "A wind generator is a block that speeds up 2 times the decomposition of runes into fillers.", size: 18}
                    ]
                }
},

"blocks_4": {
                preLink: "blocks_3",
                nextLink: "blocks_5",
                left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["c", "a", "c"],
 ["a", "b", "a"],
 ["c", "a", "c"]
 ],
 materials: {
 "a": {id: 265, data: 0},
 "b": {id: 152, data: 0},
 "c": {id: 4, data: 0}
 },
 result: {id: BlockID.windmillNapo, count: 1}
 }
 ],
 elements: [
 ],
},

 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.cloneAltar}
                    ],
                    elements: [
                        {text: "Clone Altar", size: 20},
                        {text: "With the help of сlone altar you can clone any block or item spending in 2000 essencia skin type. To do this, put the object for cloning on the altar and tapnut them full-color ring.", size: 18}
                    ]
                }
},

"blocks_5": {
                preLink: "blocks_4",
                nextLink: "default",     
                left: {
                                       controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "c", "a"],
 ["", "a", ""],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 98, data: 0},
 "c": {id: 264, data: 0}
 },
 result: {id: BlockID.cloneAltar, count: 1}
 }
 ],
 elements: [
 ]
  }
},

"rings and amulets": {
                preLink: "default",
                nextLink: "rings",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Rings", size: 25, link: "rings"},
                        {text: "Amulets", size: 25, link: "amulets"}
                    ]
                }
            },
            
      
  "rings": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Rings", size: 30},
                        {text: "Rings can be obtained using the ritual of the rings (read more in the rituals section). All the rings contain a certain amount of essences that are needed to use magical tools. most ritual (read more in the section rituals).", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.rubuRing}
                    ],
                    elements: [
                        {text: "Ruby ring", size: 20},
                        {text: "A ruby ring - contains in itself an essentia of infernos in the amount of 20,000. For its craft, you need to put a ruby on the ritual controller, and an ingot of gold on the extreme altar.", size: 18}
                    ]
                },
            },
            
            "rings_1": {
                preLink: "rings",
                nextLink: "rings_2",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.saphireRing}
                    ],
                    elements: [
                        {text: "Sapphire ring", size: 20},
                        {text: "The sapphire ring - stores in itself the sense of aeris in the amount of 20000. For its craft, you need to put sapphire on the ritual controller, and an ingot of gold on the extreme altar.", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.nephriteRing}
                    ],
                    elements: [
                        {text: "Nephrite ring", size: 20},
                        {text: "Nephrite ring - stores in itself the esense of terros in the amount of 20,000. For its craft, you need to put nephrite on the ritual controller, and an ingot of gold on the extreme altar.", size: 18}
                    ]
                },
            },
            
            "rings_2": {
                preLink: "rings_1",
                nextLink: "rings_3",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fullcolorRing}
                    ],
                    elements: [
                        {text: "Full color ring", size: 20},
                        {text: "Full-color ring - saves in itself all three essences of 20,000. It can be received on an ordinary workbench.", size: 18}
                    ]
                },
                
        right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 [" ", " ", " "],
 ["a", "b", "c"],
 [" ", " ", " "]
 ],
 materials: {
 "a": {id: ItemID.rubuRing, data: 0},
 "b": {id: ItemID.saphireRing, data: 0},
 "c": {id: ItemID.nephriteRing, data: 0}
 },
 result: {id: ItemID.fullcolorRing, count: 1}
 }
 ],
 elements: [
 ],
}
     },
     
     "rings_3": {
                preLink: "rings_2",
                nextLink: "rings_4",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.ironRing}
                    ],
                    elements: [
                        {text: "Iron ring", size: 20},
                        {text: "From it you can in the usual altar, like iron armor, you can use scraft armor to armor. To craft it, you need to put an iron ingot on the controller and side altars.", size: 18}
                    ]
                },
          }, 
		  
		  
		  "rituals": {
                preLink: "rings and amulets",
                nextLink: "rings_1",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Ritual altar", size: 25, link: "Ritual_creation_of_rings"},
                    ]
                }
            },
			
			"Ritual_creation_of_rings": {
                preLink: "rituals",
                nextLink: "Ritual_creation_of_rings_1",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltar}
                    ],
                    elements: [
                        {text: "Ritual altar", size: 20},
                        {text: "The ritual altar is needed for the ritual of creating and recharging rings. It should be placed on all 4 sides of the altar controller with an indentation of 1 block.", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["b", "b", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0}
 },
 result: {id: BlockID.druidicAltar, count: 1}
 }
 ],
 elements: [
 ],
}
            },
			
			"Ritual_creation_of_rings_1": {
                preLink: "Ritual_creation_of_rings",
                nextLink: "Ritual_creation_of_rings_2",
				
              left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Ritual of creating rings", size: 20},
                        {text: "To create rings, one should put on ritual altars on a gold ingot and put a ruby, jade or sapphire in the altar controller.", size: 18},
                        {text: "Ritual charging the rings", size: 20},
                        {text: "To charge the rings, you need to put a ring on the controller that will charge the bullet and put the runes around. To replenish different essences different runes", size: 18},
                    ]
                },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: BlockID.druidicAltarController}
                    ],
                    elements: [
                        {text: "Altar controller", size: 20},
                        {text: "Must be in the middle of the ritual altars.", size: 18},
                    ]
                },
            },
			
			"Ritual_creation_of_rings_2": {
                preLink: "Ritual_creation_of_rings_1",
                nextLink: "rituals",
				
                              left: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 [" ", " ", " "],
 ["b", "a", "b"],
 ["b", "b", "b"]
 ],
 materials: {
 "a": {id: 266, data: 0},
 "b": {id: 98, data: 0}
 },
 result: {id: BlockID.druidicAltarController, count: 1}
 }
 ],
 elements: [
 ],
}
            },
            
         

 "armor": {
                preLink: "default",
                nextLink: "Adamantite_armor",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Adamantite armor", size: 25, link: "Adamantite_armor"},
                        {text: "Silver armor", size: 25, link: "Silver_armor"},
                        {text: "Cobolt armor", size: 25, link: "Cobolt_armor"},
                        {text: "Amethist armor", size: 25, link: "Amethist_armor"},
                        {text: "Troadamantite armor", size: 25, link: "Troadamantite_armor"},
                    ]
                }
            },
    
    
"Adamantite_armor": {
                preLink: "armor",
                nextLink: "Adamantite_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 165;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a hell-stone, the right and left upper slots are glass, all other slots are an adamantite ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 240;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a ruby, the right and left top slots are hell-stone, all other slots are adamantite ingot", size: 18}
                    ]
                }
},
    
                
"Adamantite_armor_1": {
               preLink: "Adamantite_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite Leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 225;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are hell-stone, all other slots are adamantite ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 195;", size: 18},
                        {text: "Recipe in the rune altar: top slot - adamantite ingot, right and left top slots - adamantite ingot", size: 18}
                    ]
                },
},

//
"Silver_armor": {
                preLink: "armor",
                nextLink: "Silver_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetSilver}
                    ],
                    elements: [
                        {text: "Silver helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 121;", size: 18},
                        {text: "The recipe in the rune altar: top slot - wood, right and left top slots - glass, all other slots - silver ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateSilver}
                    ],
                    elements: [
                        {text: "Silver chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 176;", size: 18},
                        {text: "The recipe in the rune altar: top slot - jade, right and left top slots - wood, all other slots - silver ingot", size: 18}
                    ]
                }
},
    
                
"Silver_armor_1": {
               preLink: "Silver_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsSilver}
                    ],
                    elements: [
                        {text: "Silver Leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 165;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are hell-stone, all other slots are silver ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsSilver}
                    ],
                    elements: [
                        {text: "Silver boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 143;", size: 18},
                        {text: "Recipe in the rune altar: top slot - silver bar, right and left top slots - silver bar", size: 18}
                    ]
                },
},

//
"Cobolt_armor": {
                preLink: "armor",
                nextLink: "Cobolt_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetCobolt}
                    ],
                    elements: [
                        {text: "Cobolt Helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 132;", size: 18},
                        {text: "The recipe in the rune altar: top slot - snow, right and left top slots - glass, all other slots - kobolt bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateCobolt}
                    ],
                    elements: [
                        {text: "Cobolt chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 192;", size: 18},
                        {text: "The recipe in the rune altar: top slot - sapphire, right and left top slots - snow, all other slots - kobolt bar", size: 18}
                    ]
                }
},
    
                
"Cobolt_armor_1": {
               preLink: "Cobolt_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsCobolt}
                    ],
                    elements: [
                        {text: "Cobolt leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 180;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are hell-stone, all other slots are silver ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsCobolt}
                    ],
                    elements: [
                        {text: "Cobolt boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 6;", size: 18},
                        {text: "-durability 156;", size: 18},
                        {text: "Recipe in the rune altar: top slot - kobolt bar, right and left upper slots - kobolt bar", size: 18}
                    ]
                },
},

///
"Amethist_armor": {
                preLink: "armor",
                nextLink: "Amethist_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 209;", size: 18},
                        {text: "The recipe in the rune altar: top slot - gold bar, right and left top slots - glass, all other slots - amethyst bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 304;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a ruby, the right and left top slots are gold ingots, all other slots are amethyst ingots", size: 18}
                    ]
                }
},
    
                
"Amethist_armor_1": {
               preLink: "Amethist_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 285;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are gold ingot, all other slots are amethyst ingot", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 7;", size: 18},
                        {text: "-durability 247;", size: 18},
                        {text: "Recipe in the rune altar: top slot - amethyst ingot, right and left top slots - amethyst ingot", size: 18}
                    ]
                },
},

///
"Troadamantite_armor": {
                preLink: "armor",
                nextLink: "Troadamantite_armor_1",
                
                left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.helmetTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite helmet", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 187;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a gold bar, the right and left top slots are glass, all other slots are a Troadamantite bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.chestplateTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite chestplate", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 10;", size: 18},
                        {text: "-durability 272;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a ruby, the right and left top slots are gold ingots, all other slots are Troadamantite ingots", size: 18}
                    ]
                }
},
    
                
"Troadamantite_armor_1": {
               preLink: "Troadamantite_armor",
                nextLink: "armor",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.leggingsTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite leggings", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 255;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is empty, the right and left top slots are gold bar, all other slots are Troadamantite bar", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.bootsTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite boots", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-protect amount 8;", size: 18},
                        {text: "-durability 221;", size: 18},
                        {text: "Recipe in the rune altar: top slot - labor-mantitic ingot, right and left top slots - Troadamantite ingot", size: 18}
                    ]
                },
},

"weapons_and_instruments": {
                preLink: "default",
                nextLink: "Adamantite_weapons_and_instruments",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
        right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Adamantite weapons and instruments", size: 25, link: "Adamantite_weapons_and_instruments"},
                        {text: "Silver weapons and instruments", size: 25, link: "Silver_weapons_and_instruments"},
                        {text: "Cobolt weapons and instruments", size: 25, link: "Cobolt_weapons_and_instruments"},
                        {text: "Amethist weapons and instruments", size: 25, link: "Amethist_weapons_and_instruments"},
                        {text: "Troadamantite weapons and instruments", size: 25, link: "Troadamantite_weapons_and_instruments"},
                        {text: "Magic weapons", size: 25, link: "Magic_weapons"},
                    ]
                }
            },
			
			
			"Magic_weapons": {
               preLink: "weapons_and_instruments",
                nextLink: "Magic_weapons_1",
           left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.molotTor}
                    ],
                    elements: [
                        {text: "Mjomnir", size: 20},
                        {text: "Mjolnir, the hammer of Thor is a magical weapon of unknown force that can invoke lightning. For this, you need to sit down and tap on any block. To call for lightning, you need to wear a full-color ring in a Baubles fashion masonry.", size: 18}	
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Kraft in the rune altar: top slot - Truadamantitovy ax, right and left upper slots - Bottle Infernos, right and left middle slots Truadamantitovy block, left bottom slot - Bottle AERIS, right lower slot - rune of the torus, bottom slot - Truadamantite sword", size: 18}
                    ]
                },
},

		"Magic_weapons_1": {
               preLink: "Magic_weapons",
                nextLink: "weapons_and_instruments",
           
		   left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.gungnir}
                    ],
                    elements: [
                        {text: "Gungnir", size: 20},
                        {text: "Gungnir - a magic spear from ancient mythology. To inflict a lot of damage. Crafts in the rune altar: top slot - Odin's rune, right and left upper slots - Truadamantite sword, right and left middle slots bottom slot - Aeris Bottle", size: 18}
                    ]
                },
		   
		   
		   right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.megicBelt}
                    ],
                    elements: [
                        {text: "Megdingjord", size: 20},
                        {text: "When dressing in a tab with the Baubles mod gives a power effect of level 5. Craft: top slot - power potion, right and left top slots - Truadamantitovy ingot, right and left middle slots - Truadamantitovy ingot, lower slot - Fear rune", size: 18}
						
                    ]
                },
},
            
///         
"Adamantite_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Adamantite_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 10;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - diamond, right and left upper slots - adamantite ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAdamantite}
                    ],
                    elements: [
                        {text: "pickaxe Adamantite", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 12;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: top slot - adamantite ingot, right and left upper slots - adamantite ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Adamantite_weapons_and_instruments_1": {
               preLink: "Adamantite_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 12;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - adamantite ingot, right and left upper slots - adamantite ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAdamantite}
                    ],
                    elements: [
                        {text: "Adamantite axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 12;", size: 18},
                        {text: "-durability 780;", size: 18},
                        {text: "The recipe in the rune altar: top slot - stick, right and left bottom slots - adamantite ingot, - sticks, bottom slot - adamantite ingot", size: 18}
                    ]
                },
},

///

"Silver_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Silver_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordSilver}
                    ],
                    elements: [
                        {text: "Silver sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 10;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - diamond, right and left top slots - silver ingot, bottom slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeSilver}
                    ],
                    elements: [
                        {text: "Silver pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - silver ingot, right and left upper slots - silver ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Silver_weapons_and_instruments_1": {
               preLink: "Silver_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelSilver}
                    ],
                    elements: [
                        {text: "Silver shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - silver ingot, right and left upper slots - silver ingot, bottom slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeSilver}
                    ],
                    elements: [
                        {text: "Silver axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 750;", size: 18},
                        {text: "The recipe in the rune altar: top slot - stick, right and left bottom slots - silver ingot, - sticks, bottom slot - silver ingot", size: 18}
                    ]
                },
},

///

"Cobolt_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Cobolt_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordCobolt}
                    ],
                    elements: [
                        {text: "Cobolt sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - diamond, right and left upper slots - koboltovy ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeCobolt}
                    ],
                    elements: [
                        {text: "Cobolt pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: top slot - koboltovy ingot, right and left upper slots - koboltovy ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Cobolt_weapons_and_instruments_1": {
               preLink: "Cobolt_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelCobolt}
                    ],
                    elements: [
                        {text: "Cobolt shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: top slot - koboltovy ingot, right and left upper slots - koboltovy ingot, bottom slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeCobolt}
                    ],
                    elements: [
                        {text: "Cobolt axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 11;", size: 18},
                        {text: "-durability 800;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - stick, right and left lower slots - koboltovy ingot, - sticks, lower slot - koboltovy ingot", size: 18}
                    ]
                },
},

///

"Amethist_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Amethist_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 15;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - diamond, right and left upper slots - amethyst ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 14;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: top slot - amethyst ingot, right and left upper slots - amethyst ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Amethist_weapons_and_instruments_1": {
               preLink: "Amethist_weapons_and_instruments",
                nextLink: "weapons_and_instruments",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 14;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - amethyst ingot, right and left upper slots - amethyst ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeAmethyst}
                    ],
                    elements: [
                        {text: "Amethyst axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 14;", size: 18},
                        {text: "-durability 1001;", size: 18},
                        {text: "The recipe in the rune altar: top slot - stick, right and left bottom slots - amethyst ingot, - sticks, bottom slot - amethyst ingot", size: 18}
                    ]
                },
},

///

"Troadamantite_weapons_and_instruments": {
               preLink: "weapons_and_instruments",
                nextLink: "Troadamantite_weapons_and_instruments_1",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.swordTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite sword", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-damage 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: the top slot is a diamond, the right and left top slots are a truadamantite ingot, the bottom slot is a stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.pickaxeTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite pickaxe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: top slot - labor-mantitus ingot, right and left upper slots - labor-mantitic ingot, right and left middle slots - sticks", size: 18}
                    ]
                },
},

"Troadamantite_weapons_and_instruments_1": {
               preLink: "Troadamantite_weapons_and_instruments",
                nextLink: "Troadamantite_weapons_and_instruments_2",
            left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.shovelTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite shovel", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - labor-mantitic ingot, right and left upper slots - labor-mantitic ingot, lower slot - stick", size: 18}
                    ]
                },
                
                right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.axeTroadamantite}
                    ],
                    elements: [
                        {text: "Troadamantite axe", size: 20},
                        {text: "Specifications:", size: 18},
                        {text: "-efficiency 18;", size: 18},
                        {text: "-durability 3000;", size: 18},
                        {text: "The recipe in the rune altar: upper slot - stick, right and left lower slots - truadamantitovy ingot, - sticks, lower slot - truadamantitovy ingot", size: 18}
                    ]
                },
},


"other": {
               preLink: "default",
                nextLink: "default",
            left: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Druidic Craft", size: 30},
                        {text: "Druidic Craft - mod adds the lost magic of the druids. With this mod you will be able to create unusual tools, armor and even Thor's hammer - mjelnir.", size: 18},
                    ]
                },
                
                right: {
                    controller: PageControllers.BASIC_PAGE,
                    elements: [
                        {text: "Wings", size: 25, link: "wings"},
                        {text: "Backpack", size: 25, link: "backpack"},  
                        {text: "Druidic Structure", size: 25, link: "druidic_strukture"},  
                        {text: "Features Druidic Craft", size: 25, link: "features"}  
                    ]
                }
},

"druidic_strukture": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        /*{id: ItemID.fenixFeather}*/
                    ],
                    elements: [
                        {text: "Druidic structure", size: 20},
                        {text: "Druidic structure is a multiblock structure, it is generated in different biomes besides empty leaves. In the center of the structure, if you break a half block, you can see a chest in which you can find some objects:", size: 18},
                        {text: "-diamond (chance: 20%, max count: 2)", size: 18},
                        {text: "-gold ingot (chance: 30%, max count: 4)", size: 18},
                        {text: "-iron ingot (chance: 90%, max count: 6)", size: 18},
                        {text: "-ruby (chance: 20%, max count: 2)", size: 18},
                        {text: "-sapphire (chance: 30%, max count: 2)", size: 18},
                        {text: "-nephrite (chance: 30%, max count: 2)", size: 18}
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "-rune swamp (chance: 80%, max count: 3)", size: 18},
                        {text: "-ocean rune (chance: 80%, max count: 3)", size: 18},
                        {text: "-rune of hell (chance: 80%, max count: 3)", size: 18},
                        {text: "-desert rune (chance: 80%, max count: 3)", size: 18},
                        {text: "Attention !!! If you are a developer, then you can use DruiditsAPI and add your items. DruiditsAPI is described in the documentation which can be found in the official mod group - https://vk.com/druidic_craft", size: 20, color: android.graphics.Color.RED}
						]
			 },
                 

},

"wings": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.fenixFeather}
                    ],
                    elements: [
                        {text: "Phoenix Feather", size: 20},
                        {text: "The phoenix feather is needed for crafting wings.", size: 18},
                        {text: "Craft: left upper slot - chicken feather, right upper slot - bottle Infernos.", size: 18},
						]
			 },
			 
			 right: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.Wings}
                    ],
                    elements: [
                        {text: "Wings", size: 20},
                        {text: "Wings make it possible to fly.", size: 18},
                        {text: "To take off, you need to put wings on the Baubles tab in the body slot and the sapphire ring in the Baubles tab on the slot for the rings. Essencia aeris in the amount of 1 per teak is spent on flight.", size: 18},
                        {text: "Kraft: top slot - phoenix feather, left top slot - ametsista ingot, right upper slot - kobolt ingot, bottom slot - phoenix feather.", size: 18}
						]
			 },
                 

},

"backpack": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.ITEM_PAGE,
                    items: [
                        {id: ItemID.DruidicBackpack}
                    ],
                    elements: [
                        {text: "Druidic backpack", size: 20},
                        {text: "Backpack for saving resources. It has 55 slots. You can get it in a usual workbench", size: 18},
						]
			 },
			 
			               right: {
                    controller: PageControllers.GRID_3x3_PAGE,
 title: "Recipe in the workbench",
 recipes: [
 {
 grid: [
 ["a", "a", "a"],
 ["c", "b", "c"],
 ["a", "a", "a"]
 ],
 materials: {
 "a": {id: 334, data: 0},
 "b": {id: ItemID.druidology, data: 0},
 "c": {id: ItemID.runeswamp, data: 0}
 },
 result: {id: ItemID.DruidicBackpack, count: 1}
 }
 ],
 elements: [
 ],
}               
},

"features": {
               preLink: "other",
                nextLink: "other",
             left: {
                    controller: PageControllers.BASIC_PAGE,
                    items: [
                    ],
                    elements: [
                        {text: "Features:", size: 19},
                        {text: " automatic replacement of broken tools (if any in the inventory) and empty stacks of items;", size: 18},
                        {text: "-If you sit down and tapnut with a vanilla instrument, or a mod tool will show the strength of the instrument;", size: 18},
						{text: "", size: 18},
                        {text: "Warning: all features are created for the passing game, but they have not been fully tested and may not work correctly. Therefore, they can be easily turned off in the config.", size: 18, color: android.graphics.Color.RED},
						]
			 },             
}
}   
});
});

}




// file: localize.js

/*Druidic Craft LOCALIZE(RU)*/

//Base Rune
Translation.addTranslation("Rune swamp", {ru: "Руна болота"});
Translation.addTranslation("Rune ocean", {ru: "Руна океана"});
Translation.addTranslation("Rune Hell", {ru: "Руна ада"});
Translation.addTranslation("Rune desert", {ru: "Руна пустыны"});
//Other Rune
Translation.addTranslation("Rune of fear", {ru: "Руна страха"});
Translation.addTranslation("Rune pain", {ru: "Руна боли"});
Translation.addTranslation("Rune stranght", {ru: "Руна силы"});
Translation.addTranslation("Rune Thor", {ru: "Руна Тора"});
Translation.addTranslation("Rune Odin", {ru: "Руна Одина"});
//Bottles
Translation.addTranslation("Empty Bottle", {ru: "Пустая бутылка"});
Translation.addTranslation("Sbaeris Bottle", {ru: "Бутылка Аэрис"});
Translation.addTranslation("Sbterros Bottle", {ru: "Бутылка Террос"});
Translation.addTranslation("Sbinfernos Bottle", {ru: "Бутылка Инфернос"});
//Block
Translation.addTranslation("Rune Altar", {ru: "Рунический алтарь"});
Translation.addTranslation("Ritual Altar", {ru: "Ритуальный Алтарь"});
Translation.addTranslation("Ritual Controller", {ru: "Ритуальный контроллер"});
Translation.addTranslation("Clone Altar", {ru: "Алтарь клонирования"});
Translation.addTranslation("Cooking Rack", {ru: "Наполнитель"});
Translation.addTranslation("Block Adamentite", {ru: "Адамантиевый блок"});
Translation.addTranslation("Block Amethyst", {ru: "Аметистовый блок"});
Translation.addTranslation("Block Cobolt", {ru: "Кобольтовый блок"});
Translation.addTranslation("Block Nephrite", {ru: "Нефритовый блок"});
Translation.addTranslation("Block Ruby", {ru: "Рубиновый блок"});
Translation.addTranslation("Block Saphire", {ru: "Сапфировый блок"});
Translation.addTranslation("Block Silver", {ru: "Серебряный блок"});
Translation.addTranslation("Block Troadamantite", {ru: "Труадамантитовый блок"});
Translation.addTranslation("Soulds Glass", {ru: "Стекло душ"});
Translation.addTranslation("Windmill", {ru: "Ветрогенератор"});
//Ingot and Gems
Translation.addTranslation("Adamantite ingot", {ru: "Адамантитовый слиток"});
Translation.addTranslation("Troadamantite ingot", {ru: "Труадамантитовый слиток"});
Translation.addTranslation("Amethist ingot", {ru: "Аметистовый слиток"});
Translation.addTranslation("Cobolt ingot", {ru: "Кобольтовый слиток"});
Translation.addTranslation("Silver ingot", {ru: "Серебряный слиток"});
Translation.addTranslation("Ruby", {ru: "Рубин"});
Translation.addTranslation("Saphire", {ru: "Сапфир"});
Translation.addTranslation("Nephrite", {ru: "Нефрит"});
//Swords
Translation.addTranslation("Adamantite sword", {ru: "Адамантитовый меч"});
Translation.addTranslation("Troadamantite sword", {ru: "Труадамантитовый меч"});
Translation.addTranslation("Amethyst sword", {ru: "Аметистовый меч"});
Translation.addTranslation("Cobolt sword", {ru: "Кобольтовый меч"});
Translation.addTranslation("Silver sword", {ru: "Серебряный меч"});
//Pickaxe
Translation.addTranslation("Adamantite pickaxe", {ru: "Адамантитовая кирка"});
Translation.addTranslation("Troadamantite pickaxe", {ru: "Труадамантитовая кирка"});
Translation.addTranslation("Amethyst pickaxe", {ru: "Аметистовая кирка"});
Translation.addTranslation("Cobolt pickaxe", {ru: "Кобольтовая кирка"});
Translation.addTranslation("Silver pickaxe", {ru: "Cеребряная кирка"});
//Shovel
Translation.addTranslation("Adamantite shovel", {ru: "Адамантитовая лопата"});
Translation.addTranslation("Troadamantite shovel", {ru: "Труадамантитовая лопата"});
Translation.addTranslation("Amethyst shovel", {ru: "Аметистовая лопата"});
Translation.addTranslation("Cobolt shovel", {ru: "Кобольтовая лопата"});
Translation.addTranslation("Silver shovel", {ru: "Cеребряная лопата"});
//Axe
Translation.addTranslation("Adamantite axe", {ru: "Адамантитовый топор"});
Translation.addTranslation("Troadamantite axe", {ru: "Труадамантитовый топор"});
Translation.addTranslation("Amethyst axe", {ru: "Аметистовый топор"});
Translation.addTranslation("Cobolt axe", {ru: "Кобольтовый топор"});
Translation.addTranslation("Silver axe", {ru: "Серебряный топор"});
//Helmet
Translation.addTranslation("Adamantite helmet", {ru: "Адамантитовый шлем"});
Translation.addTranslation("Troadamantite helmet", {ru: "Труадамантитовый шлем"});
Translation.addTranslation("Amethyst helmet", {ru: "Аметистовый шлем"});
Translation.addTranslation("Cobolt helmet", {ru: "Кобольтовый шлем"});
Translation.addTranslation("Silver helmet", {ru: "Серебряный шлем"});
//Chestplate
Translation.addTranslation("Adamantite chestplate", {ru: "Адамантитовый нагрудник"});
Translation.addTranslation("Troadamantite chestplate", {ru: "Труадамантитовый нагрудник"});
Translation.addTranslation("Amethyst chestplate", {ru: "Аметистовый нагрудник"});
Translation.addTranslation("Cobolt chestplate", {ru: "Кобольтовый нагрудник"});
Translation.addTranslation("Silver chestplate", {ru: "Серебряный нагрудник"});
//Leggings
Translation.addTranslation("Adamantite leggings", {ru: "Адамантитовые поножи"});
Translation.addTranslation("Troadamantite leggings", {ru: "Труадамантитовые поножи"});
Translation.addTranslation("Amethyst leggings", {ru: "Аметистовые поножи"});
Translation.addTranslation("Cobolt leggings", {ru: "Кобольтовые поножи"});
Translation.addTranslation("Silver leggings", {ru: "Серебряные поножи"});
//Boots
Translation.addTranslation("Adamantite boots", {ru: "Адамантитовые ботинки"});
Translation.addTranslation("Troadamantite boots", {ru: "Труадамантитовые ботинки"});
Translation.addTranslation("Amethyst boots", {ru: "Аметистовые ботинки"});
Translation.addTranslation("Cobolt boots", {ru: "Кобольтовые ботинки"});
Translation.addTranslation("Silver boots", {ru: "Серебряные ботинки"});
//Rings
Translation.addTranslation("Ruby ring", {ru: "Рубиновое кольцо"});
Translation.addTranslation("Saphire ring", {ru: "Сапфировое кольцо"});
Translation.addTranslation("Nephrite ring", {ru: "Нефритовое кольцо"});
Translation.addTranslation("Full-color Ring", {ru: "Полноцветное кольцо"});
Translation.addTranslation("Iron Ring", {ru: "Железное кольцо"});
//Magic Item
Translation.addTranslation("Mjomnir", {ru: "Мьелнир"});
Translation.addTranslation("Gungnir", {ru: "Гунгнир"});
Translation.addTranslation("Megic belt", {ru: "Волшебный пояс"});
Translation.addTranslation("Wings", {ru: "Крылья"});
//Other
Translation.addTranslation("Druidology", {ru: "Друидология"});
Translation.addTranslation("Druidic Backpack", {ru: "Друидный рюкзак"});






// file: Structures/DruidicStructure.js

if(__config__.access("Druidic Structure") == true){

var structure = FileTools.ReadJSON(__dir__+"/json/structure.json");

var generateItems =[
];

var DruidicStructure = {

  addItems: function (id, random, count, data){
    random = random||1;
    count = count||{};
    count.min = count.min||1;
    count.max = count.max||1;
    data = data||0;
    generateItems.push({id:id, data:data, random:random, count:count});
}

};

DruidicStructure.addItems(264, 0.15, {max:2});

DruidicStructure.addItems(266, 0.25, {max:4});

DruidicStructure.addItems(265, 0.75, {max:6});

DruidicStructure.addItems(ItemID.ruby, 0.1, {max:2});
DruidicStructure.addItems(ItemID.saphire, 0.05, {max:2});
DruidicStructure.addItems(ItemID.nephrite, 0.1, {max:2});

DruidicStructure.addItems(ItemID.runeswamp, 0.8, {max:3});

DruidicStructure.addItems(ItemID.runeocean, 0.7, {max:3});
DruidicStructure.addItems(ItemID.runehell, 0.8, {max:3});

DruidicStructure.addItems(ItemID.runedesert, 0.7, {max:3});


function fillChest(x,y,z){
    var container = World.getContainer(x, y, z);
    var size = container.getSize();
    var random = Math.random();
    var slot = 0;
    for(var i in generateItems){
        if(random<generateItems[i].random){
            var count = Math.floor(Math.random()*(generateItems[i].count.max-generateItems[i].count.min))+generateItems[i].count.min;
            container.setSlot(slot, generateItems[i].id, count, generateItems[i].data);
            slot++;
        }
    }
}


function setStructure(coords){
   World.setBlock(coords.x, coords.y, coords.z, 54, 0);
   
    World.setBlock(coords.x-1, coords.y, coords.z, 4, 0);
     World.setBlock(coords.x+1, coords.y, coords.z, 4, 0);
      World.setBlock(coords.x, coords.y, coords.z-1, 4, 0);
       World.setBlock(coords.x, coords.y, coords.z+1, 4, 0);
       
        World.setBlock(coords.x+2, coords.y, coords.z, 4, 0);
         World.setBlock(coords.x-2, coords.y, coords.z, 4, 0);
          World.setBlock(coords.x, coords.y, coords.z+2, 4, 0);
           World.setBlock(coords.x, coords.y, coords.z-2, 4, 0);
           
           World.setBlock(coords.x+1, coords.y+1, coords.z+1, 4, 0);
         World.setBlock(coords.x+1, coords.y+1, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+1, coords.z+1, 4, 0);
           World.setBlock(coords.x-1, coords.y+1, coords.z-1, 4, 0);
           
            World.setBlock(coords.x+1, coords.y+2, coords.z+1, 4, 0);
         World.setBlock(coords.x+1, coords.y+2, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+2, coords.z+1, 4, 0);
           World.setBlock(coords.x-1, coords.y+2, coords.z-1, 4, 0);

        World.setBlock(coords.x+1, coords.y+3, coords.z+1, 4, 0);
         World.setBlock(coords.x+1, coords.y+3, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+3, coords.z+1, 4, 0);
           World.setBlock(coords.x-1, coords.y+3, coords.z-1, 4, 0);
           
           World.setBlock(coords.x, coords.y+3, coords.z+1, 4, 0);
         World.setBlock(coords.x, coords.y+3, coords.z-1, 4, 0);
          World.setBlock(coords.x-1, coords.y+3, coords.z, 4, 0);
           World.setBlock(coords.x+1, coords.y+3, coords.z, 4, 0);
           
            World.setBlock(coords.x, coords.y+4, coords.z, 44, 3);
            World.setBlock(coords.x, coords.y+1, coords.z, 44, 3);
            
             World.setBlock(coords.x-2, coords.y+1, coords.z+1, 44, 3);
         World.setBlock(coords.x-2, coords.y+1, coords.z+2, 44, 3);
         World.setBlock(coords.x-1, coords.y+1, coords.z+2, 44, 3);
         
         World.setBlock(coords.x-2, coords.y+1, coords.z-1, 44, 3);
         World.setBlock(coords.x-2, coords.y+1, coords.z-2, 44, 3);
         World.setBlock(coords.x-1, coords.y+1, coords.z-2, 44, 3);
         
          World.setBlock(coords.x+2, coords.y+1, coords.z-1, 44, 3);
         World.setBlock(coords.x+2, coords.y+1, coords.z-2, 44, 3);
         World.setBlock(coords.x+1, coords.y+1, coords.z-2, 44, 3);
         
          World.setBlock(coords.x+2, coords.y+1, coords.z+1, 44, 3);
         World.setBlock(coords.x+2, coords.y+1, coords.z+2, 44, 3);
         World.setBlock(coords.x+1, coords.y+1, coords.z+2, 44, 3);
       
         
         fillChest(coords.x, coords.y, coords.z);
       }
       
  


Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
var random = Math.random()*3000;
if (random <= 95){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 2){
            if (World.getBlock(coords.x+1, coords.y, coords.z).id == 2){
                if (World.getBlock(coords.x-1, coords.y, coords.z).id == 2){
                    if (World.getBlock(coords.x, coords.y, coords.z+1).id == 2){
                        if (World.getBlock(coords.x, coords.y, coords.z-1).id == 2){
                            setStructure(coords);
                            }
                        }
                    }
                }
            }  
}        
});

}




// file: shared.js

ModAPI.registerAPI("DruidicAPI", {
	RuneRegistry: RuneRegistry,
	RecipeRegistry: RecipeRegistry,
	ItemInfo: ItemInfo,
	Wings: Wings,
	DruidicStructure: DruidicStructure,
	
	requireGlobal: function(command){
		return eval(command);
	}
});

Logger.Log("Druidic API shared for mods", "API");




