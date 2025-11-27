  
/*var Spaces = {
	cableAPI : cableAPI;
	AirCable : AirCable;
	battery : battery;
	oxygenStorage : oxygenStorage;
}*/




var group = ICRender.getGroup("sj-wire"); 
let cableAPI = {
    renderSet: function (idblock, siz){
var id = idblock;
var width = siz; 
group.add(id, -1); 

var boxes = [
    {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
    {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
    {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
    {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}
];

var model = new ICRender.Model(); 

model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 

for(var i in boxes){
   
    var box = boxes[i].box; 
    var side = boxes[i].side;

    model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
        .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group, false));
}

BlockRenderer.setStaticICRender(id, -1, model);
    }, 
    addGroup: function (id) {
         group.add(id, -1); 
    }
};

var group2 = ICRender.getGroup("sc-wire");
var AirCable = {
    set: function (idblock, siz){
        var id = idblock;
var width = siz; 
group2.add(id, -1); 

var boxes = [
    {side: [1, 0, 0], box: [0.5 + width / 2, 0.5 - width / 2, 0.5 - width / 2, 1, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [-1, 0, 0], box: [0, 0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2]},
    {side: [0, 1, 0], box: [0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2, 1, 0.5 + width / 2]},
    {side: [0, -1, 0], box: [0.5 - width / 2, 0, 0.5 - width / 2, 0.5 + width / 2, 0.5 - width / 2, 0.5 + width / 2]},
    {side: [0, 0, 1], box: [0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, 1]},
    {side: [0, 0, -1], box: [0.5 - width / 2, 0.5 - width / 2, 0, 0.5 + width / 2, 0.5 + width / 2, 0.5 - width / 2]}
];

var model = new ICRender.Model(); 

model.addEntry(new BlockRenderer.Model(0.5 - width / 2, 0.5 - width / 2, 0.5 - width / 2, 0.5 + width / 2, 0.5 + width / 2, 0.5 + width / 2, id, 0)); 

for(var i in boxes){
   
    var box = boxes[i].box; 
    var side = boxes[i].side;

    model.addEntry(new BlockRenderer.Model(box[0], box[1], box[2], box[3], box[4], box[5], id, 0))
        .setCondition(new ICRender.BLOCK(side[0], side[1], side[2], group2, false));
}

BlockRenderer.setStaticICRender(id, -1, model);
    }, 
    addGroup: function (id){
        group2.add(id, -1); 
    }
};








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


cableAPI.addGroup(BlockID.enclosed_aluminum_wire);
cableAPI.addGroup(BlockID.coal_generator);
cableAPI.addGroup(BlockID.oxygen_compressor);
cableAPI.addGroup(BlockID.oxygen_decompressor);


AirCable.addGroup(BlockID.oxygen_compressor);
AirCable.addGroup(BlockID.oxygen_decompressor);

cableAPI.addGroup(BlockID.compressor_sj);
cableAPI.addGroup(BlockID.enclosed_heavy_aluminum_wire);

cableAPI.addGroup(BlockID.collector_sc);
AirCable.addGroup(BlockID.collector_sc);


AirCable.addGroup(BlockID.oxygen_storage_module);
cableAPI.addGroup(BlockID.oxygen_storage_module);
AirCable.addGroup(BlockID.enclosed_fluid_pipe);
cableAPI.addGroup(BlockID.refinery_sc);
cableAPI.addGroup(BlockID.fuel_loader);

ModAPI.registerAPI("SpacesAPI", {
  	  cableAPI: cableAPI, 
  	  AirCable: AirCable, 
  	  battery: battery,
  	  oxygenStorage: oxygenStorage,
  	  RenderAPI: RenderAPI,
	requireGlobal: function(command){
		return eval(command);
	}
});
