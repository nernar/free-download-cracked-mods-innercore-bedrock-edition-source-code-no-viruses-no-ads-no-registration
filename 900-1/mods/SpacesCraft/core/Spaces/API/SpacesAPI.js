  
/*var Spaces = {
	cableAPI : cableAPI;
	AirCable : AirCable;
	battery : battery;
	oxygenStorage : oxygenStorage;
}*/





/*let Fabricator = [];
let FabricatorUI = {
	createRecept: function (recept){
	    recept = recept || {};
	    recept.Slot1 = recept.Slot1 || 0;
	    recept.ResultatSlot = recept.ResultatSlot || 0;
	    recept.DiamondSlot = recept.DiamondSlot || 0;
	    recept.FabrSlot0 = recept.FabrSlot0 || 0;
	    recept.FabrSlot1 = recept.FabrSlot1 || 0;
	    
	    Fabricator.push({Slot1: recept.Slot1,ResultatSlot: recept.ResultatSlot, DiamondSlot: recept.DiamondSlot,FabrSlot0: recept.FabrSlot0 ,FabrSlot1: recept.FabrSlot1, DustSlot: recept.DustSlot
	    });
	}, 
};*/




  // 





let batt = [];
let battery = {
    set: function (id, description){ 
        description = description || {};
        description.storage = description.storage || 1000;
        description.addMax = description.addMax || 32;
        Item.setMaxDamage(id, description.storage);
        Callback.addCallback("PreLoaded", function() {
            //Item.addToCreative(id, 1, description.storage);
        });
Item.registerNameOverrideFunction(id, function(item, name) {
              return name  + "\n§6⚡ : " + (Item.getMaxDamage(item.id) - item.data) + "§6/" + Item.getMaxDamage(item.id);
        });
        batt.push({id: id, storage: description.storage, addMax: description.addMax});
    }, 
    add: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in batt){
            if(en.id == batt[i].id){
                if(data.energy + batt[i].addMax <= data.energyMax){
                    if(en.data + 16 - batt[i].addMax <= batt[i].storage - batt[i].addMax + 16){
                        data.energy += batt[i].addMax;
                        en.data += batt[i].addMax
                    }
                }
            }
        }
    },
    setVoid: function (id, description){ 
        description = description || {};
        description.storage = description.storage || 1000;
        description.addMax = description.addMax || 32;
        Item.setMaxDamage(id, description.storage);
    	batt.push({id: id, storage: description.storage, addMax: description.addMax});
    },
    Minus: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in batt){
            if(en.id == batt[i].id){
                if(data.energy - batt[i].addMax >= 0){
                   if(en.data - batt[i].addMax >= 0){
                        data.energy -= batt[i].addMax;
                        en.data -= batt[i].addMax
                   } 
                    
                }
            }
        }
},
    getBattery: function () {
        return batt;
    }
};

var OS = []
let oxygenStorage = {
    set: function (id, description){ 
        description = description || {};
        description.storage = description.storage || 1000;
        description.addMax = description.addMax || 32;
        Item.setMaxDamage(id, description.storage);
        Callback.addCallback("PreLoaded", function() {
            //Item.addToCreative(id, 1, description.storage);
        });
Item.registerNameOverrideFunction(id, function(item, name) {
              return name  + "\n§6«» : " + (Item.getMaxDamage(item.id) - item.data) + "§6/" + Item.getMaxDamage(item.id);
        });
        OS.push({id: id, storage: description.storage, addMax: description.addMax});
    }, 
    add: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in OS){
            if(en.id == OS[i].id){
                if(data.energy + OS[i].addMax <= data.energyMax){
                    if(en.data + 16 - OS[i].addMax <= OS[i].storage - OS[i].addMax + 16){
                        data.energy += 
                        OS[i].addMax;
                        en.data += OS[i].addMax
                    }
                }
            }
        }
    },
    Minus: function (block, data, slot){
        let en = block.getSlot(slot);
        for(i in OS){
            if(en.id == OS[i].id){
                if(data.energy - OS[i].addMax >= 0){
                   if(en.data - OS[i].addMax >= 0){
                        data.energy -= OS[i].addMax;
                        en.data -= OS[i].addMax
                   } 
                    
                }
            }
        }
    }, 
    getBattery: function () {
        return OS;
    }
};



/*


*/
//cableAPI.addGroup(BlockID.electric_compressor_sj, -1);

/*};



*/
/*


*/




var SpacesCraft = {addGroup: function(id,word){
    Item.registerNameOverrideFunction(id, function(id, name){
    return name + Translation.translate("\n§9") + word;
   })},
   addElectroLevel: function(id,word){
     Item.registerNameOverrideFunction(id, function(id, name){
         if(
        !Entity.getSneaking(
            Player.getLocal())
            ){
    return name + Translation.translate("\n§7Electrolevel: ") + word;
   };
    if(
        Entity.getSneaking(
            Player.getLocal())
            ){
        return name + Translation.translate("\n§7Electrolevel 0 - don't consumer\nElectrolevel 1 - generator(sJ)\nElectrolevel 2 - storage(sJ)\nElectrolevel 3 - consumer(sJ)\nElectrolevel 4 - gas collector\nElectrolevel 5 - consumer of gas\nElectrolevel 6 - generator(stJ)\nElectrolevel 7 - consumer(stJ)")        
            }});
},addSHIFTtext:function(id,word){Item.registerNameOverrideFunction(id, function(item, name){
   if(
        Entity.getSneaking(
            Player.getLocal())
            ){
             return name + "\n§7" + Translation.translate(word);
                
            };    if(!Entity.getSneaking(Player.getLocal())){
                return name + "\n§7" + Translation.translate("Click SHIFT for view information")}
})},};
Translation.addTranslation("\n§7Electrolevel: ",{
    ru: "\n§7Электроуровень: "
})





/*FabricatorUI.createRecept({
   Slot1: VanillaItemID.comparator, 
   ResultatSlot: ItemID.wafer_advanced,
   DiamondSlot: VanillaItemID.diamond,
   FabrSlot1: ItemID.raw_silicon,
   FabrSlot0: ItemID.raw_silicon,
   DustSlot: VanillaItemID.redstone
})*/
	
	ModAPI.registerAPI("SpacesAPI", {
  	  cableAPI: cableAPI, 
  	  AirCable: AirCable, 
  	  battery: battery,
  	  oxygenStorage: oxygenStorage,
  	  RenderAPI: RenderAPI,
  	  SpacesMachine: SpacesMachine,
	requireGlobal: function(command){
		return eval(command);
	}
});