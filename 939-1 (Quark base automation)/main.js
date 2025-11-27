/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 9
*/



// file: header.js

IMPORT('StorageInterface');
const ScriptableObjectHelper = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ScriptableObjectHelper');
const JavaFONT = WRAP_JAVA('com.zhekasmirnov.innercore.api.mod.ui.types.Font');

var _players = [];
Callback.addCallback('ServerPlayerLoaded', function(player__){
	_players =  Network.getConnectedPlayers();
});




// file: commands.js





// file: other.js

const placeableBlocks = [
    VanillaBlockID.cake,
    VanillaBlockID.bed,
    VanillaItemID.repeater,
    VanillaBlockID.brewing_stand,
    VanillaBlockID.hopper,
    VanillaBlockID.frame,
    VanillaBlockID.flower_pot,
    VanillaItemID.comparator,
    VanillaItemID.banner,
    VanillaBlockID.campfire,
    VanillaBlockID.soul_campfire,
    VanillaBlockID.chain,
    VanillaBlockID.nether_sprouts,
    VanillaItemID.sign,
    VanillaItemID.birch_sign,
    VanillaItemID.acacia_sign,
    VanillaItemID.jungle_sign,
    VanillaItemID.warped_sign,
    VanillaItemID.spruce_sign,
    VanillaItemID.crimson_sign,
    VanillaItemID.darkoak_sign,
    VanillaBlockID.iron_door,
    VanillaBlockID.birch_door,
    VanillaBlockID.acacia_door,
    VanillaBlockID.jungle_door,
    VanillaBlockID.spruce_door,
    VanillaBlockID.warped_door,
    VanillaBlockID.wooden_door,
    VanillaBlockID.crimson_door,
    VanillaBlockID.dark_oak_door,
    VanillaItemID.wheat_seeds,
    VanillaItemID.melon_seeds,
    VanillaItemID.pumpkin_seeds,
    VanillaItemID.beetroot_seeds,
    VanillaBlockID.nether_wart,
    ItemID.flaxSeeds
];

const delay = function(action, tick) {
    Updatable.addUpdatable({
        update: function() {
            tick--;
            if (tick <= 0) {
                this.remove = action();
            }
        }
    });
};




// file: translate.js

Translation.addTranslation("Chute", {ru: "Желоб"});
Translation.addTranslation("Feeding Trough", {ru: "Кормушка"});




// file: mechanics/breeding.js

let breedingRange = 1; 

function breedEntitiesInRange(x, y, z, EntityType) {

    let entityList = Entity.getAllInRange({x: x, y: y, z: z}, breedingRange, EntityType);
	//Game.message("list made");

    	let entity = {
    		uniqueID: 0,
    		found: false
    	}
        
        SearchBreedable(entityList, entity);
        
 	if(entity.found){
        
        let nbtData = Entity.getCompoundTag(entity.uniqueID);
        
        //Game.message("entity: ");
        //Game.message("Love Cause: " + nbtData.getInt("LoveCause"));
        //Game.message("BreedCooldown: " + nbtData.getInt("BreedCooldown"));
        //Game.message("InLove: " + nbtData.getInt("InLove"));

		nbtData.putInt("InLove", 600);  
		nbtData.putInt("LoveCause", 0); 

        Entity.setCompoundTag(entity.uniqueID, nbtData);

        //Game.message("enitity breeded successfully!");
        //Game.message("enitity: ");
        //Game.message("Love Cause: " + nbtData.getInt("LoveCause"));
        //Game.message("BreedCooldown: " + nbtData.getInt("BreedCooldown"));
        //Game.message("InLove: " + nbtData.getInt("InLove"));
        return true;
	}
    return false;
} 

function BreedCooldownEntitiesInRange(x, y, z, EntityType) {

    let entityList = Entity.getAllInRange({x: x, y: y, z: z}, breedingRange, EntityType);
	//Game.message("list made");

    	let entity = {
    		uniqueID: 0,
    		found: false
    	}
        
        SearchBreedable(entityList, entity);
        
 	if(entity.found){
        
        let nbtData = Entity.getCompoundTag(entity.uniqueID);
        
        //Game.message("entity: ");
        //Game.message("Love Cause: " + nbtData.getInt("LoveCause"));
        //Game.message("BreedCooldown: " + nbtData.getInt("BreedCooldown"));
        //Game.message("InLove: " + nbtData.getInt("InLove"));

		nbtData.putInt("BreedCooldown", 1200);  
		nbtData.putInt("LoveCause", 0); 

        Entity.setCompoundTag(entity.uniqueID, nbtData);

        //Game.message("enitity breeded successfully!");
        //Game.message("enitity: ");
        //Game.message("Love Cause: " + nbtData.getInt("LoveCause"));
        //Game.message("BreedCooldown: " + nbtData.getInt("BreedCooldown"));
        //Game.message("InLove: " + nbtData.getInt("InLove"));
        return true;
	}
    return false;
} 


function SearchBreedable(entityList, enitity){
    //Game.message("searchin breedable vaca");
	for (let i = 0; i < entityList.length; i++) {

	    let nbtData = Entity.getCompoundTag(entityList[i]);
	    if (nbtData.getInt("InLove") === 0 && nbtData.getInt("BreedCooldown") === 0 && nbtData.getInt("Age") >= 0){
	    	//Game.message("gasit");
	    	//return enitityList[i];
	    	enitity.uniqueID = entityList[i];
	    	enitity.found = true;
	    	break;
	    }

	}
}



function moveToTargetCoords(entityList, targetX, targetY, targetZ) {
    let speed = 1.5;
            //Game.message("start moving");

    for (let i = 0; i < entityList.length; i++) {
      let nbtData = Entity.getCompoundTag(entityList[i]);

      if (nbtData.getInt("InLove") === 0 && nbtData.getInt("BreedCooldown") === 0 && nbtData.getInt("Age") >= 0){
            //Game.message("setting pathNavigation");
        let pathNavigation = Entity.getPathNavigation(entityList[i]);
            //Game.message("pathNaviagigation made");
        pathNavigation.moveToCoords(targetX, targetY, targetZ, speed);
            //Game.message("path set");
      }

    }   
}

function stopEntityMovement(entityList) {
    for (let i = 0; i < entityList.length; i++) {

        let pathNavigation = Entity.getPathNavigation(entityList[i]);

        pathNavigation.stop();
    }   
}


function mainBreedingFunction(entity, EntityType){
    let item = Entity.getDroppedItem(entity);

    //Game.message("3");

    let entityPos = Entity.getPosition(entity);

    //atractBreedableEntity(entityPos.x,entityPos.y,entityPos.z, EntityType.COW);
    let entityList = Entity.getAllInRange({x: entityPos.x, y: entityPos.y, z: entityPos.z}, 10,EntityType);
    
    //Game.message("entitylist: " + entityList.length);

    let breeded = breedEntitiesInRange(entityPos.x, entityPos.y, entityPos.z, EntityType);

    //Game.message("4");

    if(breeded){
        stopEntityMovement(entityList);

        let newCount = item.count - 1;

        if(!(entityPos.x == 0 && entityPos.y == 0 && entityPos.z == 0)){
            Entity.remove(entity);
                                        

            if(newCount > 0){
                //Game.message("8");
                const region = BlockSource.getDefaultForActor(Player.get());
                region.spawnDroppedItem(entityPos.x, entityPos.y, entityPos.z, item.id, newCount, 0, null);
                //Game.message("9");
            }
        }

            let times = 10;
            let tick3 = 10;
            Updatable.addUpdatable({
            update: function() {
                tick3--;
                times--;
                if (tick3 <= 0) {
                    // Obține toate entitățile din raza dată de coordonatele blocului
                    let xplist = Entity.getAllInRange({x: entityPos.x, y: entityPos.y, z: entityPos.z}, 4, EEntityType.EXPERIENCE_ORB);
                                    
                    for (let i = 0; i < xplist.length; i++) {
                                                    
                        Entity.remove(xplist[i]);
                                                    
                    }
                    tick3 = 15;
                }

                if(times === 0){
                    this.remove = true;
                }
            }
            });
            
        return;
    }

    let tick = 20;
    Updatable.addUpdatable({
        update: function() {

            tick--;
            if (tick <= 0) {
                entityList = Entity.getAllInRange({x: entityPos.x, y: entityPos.y, z: entityPos.z}, 10,EntityType);
                    
                if(!(entityList.length == 0)){
                    
                    
                    entityPos = Entity.getPosition(entity);
                    //Game.message("5");
                    if(entityList.length > 0){
                        moveToTargetCoords(entityList, entityPos.x, entityPos.y, entityPos.z);
                    }
                    //Game.message("5");
                    //Game.message("entitylist: " + entityList.length);
                    //Game.message("6");
                                
                    let tick2 = 30;
                    
                    Updatable.addUpdatable({
                        update: function() {
                        tick2--;

                            if (tick2 <= 0) {
                                entityPos = Entity.getPosition(entity);

                                if(!(entityPos.x == 0 && entityPos.y == 0 && entityPos.z == 0)){
                                    breeded = breedEntitiesInRange(entityPos.x, entityPos.y, entityPos.z, EntityType);
                                }
                                        this.remove = true;
                                if(breeded){
                                    //Game.message("7");
                                    stopEntityMovement(entityList);

                                    let newCount = item.count - 1;

                                    if(!(entityPos.x == 0 && entityPos.y == 0 && entityPos.z == 0)){
                                        Entity.remove(entity);
                                        

                                        if(newCount > 0){
                                            //Game.message("8");
                                            const region = BlockSource.getDefaultForActor(Player.get());
                                            region.spawnDroppedItem(entityPos.x, entityPos.y, entityPos.z, item.id, newCount, 0, null);
                                            //Game.message("9");
                                        }
                                    }

                                    let times = 10;
                                    let tick3 = 10;
                                    Updatable.addUpdatable({
                                        update: function() {
                                            tick3--;
                                            times--;
                                            if (tick3 <= 0) {
                                                // Obține toate entitățile din raza dată de coordonatele blocului
                                                let xplist = Entity.getAllInRange({x: entityPos.x, y: entityPos.y, z: entityPos.z}, 4, EEntityType.EXPERIENCE_ORB);
                                    
                                                for (let i = 0; i < xplist.length; i++) {
                                                    
                                                    Entity.remove(xplist[i]);
                                                    
                                                }
                                                tick3 = 15;
                                            }

                                            if(times === 0){
                                                this.remove = true;
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    });
                            
            
                
            
            
                    this.remove = breeded;
                }
                tick = 60;
                
                if(entityPos.x == 0 && entityPos.y == 0 && entityPos.z == 0){
                    this.remove = true 
                }
              }
        }
    });

}



function feedingTroughBreedingFunction(targetX, targetY, targetZ, EntityType, ItemType, ccontainer){

    let EntityList = Entity.getAllInRange({x: targetX, y: targetY, z: targetZ}, 2, EntityType);
                
    let entity = {
        uniqueID: 0,
        found: false
    }
                
    SearchBreedable(EntityList, entity);
                
    if(entity.found){

        if(Math.random() <= 0.8) {
            let entityPos = Entity.getPosition(entity.uniqueID);

            let slot;

            let i = 0

            for (i; i < 9; i++) {
                slot = ccontainer.getSlot("slot" + i);
                
                if (slot.id == ItemType) { // wheat
                    break;
                }
            }

            const region = BlockSource.getDefaultForActor(Player.get());
            region.spawnDroppedItem(entityPos.x, entityPos.y, entityPos.z, ItemType, 1, 0, null);
                        
            slot.count--;
        
            if (slot.count <= 0) {
                slot.id = 0;
                slot.data = 0;
            }
                        
            ccontainer.setSlot("slot" + i, slot.id, slot.count, slot.data);
            ccontainer.sendChanges();


        }else{
            let slot;

            let i = 0

            for (i; i < 9; i++) {
                slot = ccontainer.getSlot("slot" + i);
                
                if (slot.id == ItemType) { // wheat
                    break;
                }
            }
            slot.count--;
        
            if (slot.count <= 0) {
                slot.id = 0;
                slot.data = 0;
            }
                        
            ccontainer.setSlot("slot" + i, slot.id, slot.count, slot.data);
            ccontainer.sendChanges();
        }        
    }

}

function feedingTroughBreedingCoolDownFunction(targetX, targetY, targetZ, EntityType, ItemType, ccontainer){

    let EntityList = Entity.getAllInRange({x: targetX, y: targetY, z: targetZ}, 2, EntityType);
                
    let entity = {
        uniqueID: 0,
        found: false
    }
                
    SearchBreedable(EntityList, entity);
                
    if(entity.found){

        if(Math.random() <= 0.8) {
            let entityPos = Entity.getPosition(entity.uniqueID);

            let slot;

            let i = 0

            for (i; i < 9; i++) {
                slot = ccontainer.getSlot("slot" + i);
                
                if (slot.id == ItemType) { // wheat
                    break;
                }
            }

            BreedCooldownEntitiesInRange(entityPos.x, entityPos.y, entityPos.z, EntityType);
                        
            slot.count--;
        
            if (slot.count <= 0) {
                slot.id = 0;
                slot.data = 0;
            }
                        
            ccontainer.setSlot("slot" + i, slot.id, slot.count, slot.data);
            ccontainer.sendChanges();


        }else{
            let slot;

            let i = 0

            for (i; i < 9; i++) {
                slot = ccontainer.getSlot("slot" + i);
                
                if (slot.id == ItemType) { // wheat
                    break;
                }
            }
            slot.count--;
        
            if (slot.count <= 0) {
                slot.id = 0;
                slot.data = 0;
            }
                        
            ccontainer.setSlot("slot" + i, slot.id, slot.count, slot.data);
            ccontainer.sendChanges();
        }        
    }

}















// file: blocks/chute.js

IMPORT('StorageInterface');

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    base: 5
});

IDRegistry.genBlockID("chuteBlock");

Block.createBlock("chuteBlock", [
    {
        name: "Chute", 
        texture: [["chute_bottom", 0], ["chute_top", 0], ["chute_side", 0]],
    }
],BLOCK_TYPE_WOOD );

Recipes.addShaped({
    id: BlockID.chuteBlock,
    count: 1,
    data: 0
}, [
    "ppp",
    "p p",
    " p "
], ['p', 5, 0]);

let chuteModel = BlockRenderer.createModel();

chuteModel.addBox(0, 10/16, 0, 1, 1, 1, BlockID.chuteBlock, 0); 

chuteModel.addBox(4/16, 4/16, 4/16, 12/16, 10/16, 12/16, BlockID.chuteBlock, 0); 

chuteModel.addBox(6/16, 0, 6/16, 10/16, 4/16, 10/16, BlockID.chuteBlock, 0);  

let chuteRender = new ICRender.Model();

chuteRender.addEntry(chuteModel);

BlockRenderer.setStaticICRender(BlockID.chuteBlock, -1, chuteRender);


StorageInterface.createInterface(BlockID.chuteBlock, {
    slots: {
        "slot1": {
            input: true,
            output: false,
            maxStack: 1
        },
    },
});


TileEntity.registerPrototype(BlockID.chuteBlock,{

    defaultValues: {
        progress: 0,
        noRedstone: true
    },

    useNetworkItemContainer: true,

    init: function() {
        //useNetworkItemContainer: true;
    },

    tick: function() {

        let blockBelowID = World.getBlockID(this.x, this.y - 1, this.z);

        if (Block.isSolid(blockBelowID) || !this.data.noRedstone) {
            return;
        }
        
        StorageInterface.checkHoppers(this);
        let item = this.container.getSlot("slot1");

        if (item.id > 0) {
            let entityID = World.drop(this.x + 0.5, this.y - 0.6, this.z + 0.5, item.id, item.count, item.data);
            
            this.container.clearSlot("slot1");


            Entity.setVelocity(entityID, 0, -0.5, 0);

    
        }

        if (this.data.progress < 100) {
            this.data.progress++;
        }
    },

    redstone: function(params) {
        this.data.noRedstone = (params.power === 0);
    },


    clientPacket: function(packetData) {
        if (packetData.type === "progressUpdate") {
            this.data.progress = packetData.progress;
        }
    },

})

Callback.addCallback("BlockPlaced", function(x, y, z, id, player) {
    if (id === BlockID.chuteBlock) {
       Game.message("gg");
        let tileEntity = World.addTileEntity(x, y, z);
        if (!tileEntity) {
            Game.message("Failed to create TileEntity.");
        } else {
            Game.message("TileEntity has been successfully created!");
        }
    }
});




// file: blocks/feedingTrough.js

IMPORT('StorageInterface');

IDRegistry.genBlockID("feedingTroughBlock");

Block.createBlock("feedingTroughBlock", [
    {
        name: "Feeding Trough", 
        texture: [["trough_bottom", 0], ["trough_top", 0], ["trough_side", 0], ["trough_side_inner", 0]],
         inCreative: true
    }
], BLOCK_TYPE_WOOD );

// Creăm modelul pentru feedingTrough
let feedingTroughModel = BlockRenderer.createModel();

// Adăugăm box-uri cu texturi diferite pentru fiecare față

// Texturi pentru partea de jos
feedingTroughModel.addBox(2/16, 0, 2/16, 14/16, 1/16, 14/16, [
    ["trough_bottom", 0],//bottom
    ["trough_bottom", 0],//top
    //["trough_side", 0],//north
    //["trough_side", 0],//south
    //["trough_side_inner", 0],//east
    //["trough_side_inner", 0]//west
]);

// Prima latură verticală
feedingTroughModel.addBox(0, 0, 0, 2/16, 7/16, 1, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side", 0],//north
    ["trough_side", 0],//south
    ["trough_side", 0],//east
    ["trough_side_inner", 0]//west
]);

// A doua latură verticală
feedingTroughModel.addBox(14/16, 0, 0, 1, 7/16, 1, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side", 0],//north
    ["trough_side", 0],//south
    ["trough_side_inner", 0],//east
    ["trough_side", 0]//west
]);

// Partea din față
feedingTroughModel.addBox(2/16, 0, 0, 14/16, 7/16, 2/16, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side", 0],//north
    ["trough_side_inner", 0],//south
    ["trough_side", 0],//east
    ["trough_side", 0]//west
]);

// Partea din spate
feedingTroughModel.addBox(2/16, 0, 14/16, 14/16, 7/16, 1, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side_inner", 0],//north
    ["trough_side", 0],//south
    ["trough_side", 0],//east
    ["trough_side", 0]//west
]);


// Setăm render-ul ICRender pentru feedingTrough
let feedingTroughRender = new ICRender.Model();
feedingTroughRender.addEntry(feedingTroughModel);

///////////////////////////second render

let feedingTroughModel_2 = BlockRenderer.createModel();


feedingTroughModel_2.addBox(2/16, 0, 2/16, 14/16, 5/16, 14/16, [
    ["trough_bottom", 0],//bottom
    ["hayblock_top", 0],//top
    //["trough_side", 0],//north
    //["trough_side", 0],//south
    //["trough_side_inner", 0],//east
    //["trough_side_inner", 0]//west
]);

feedingTroughModel_2.addBox(0, 0, 0, 2/16, 7/16, 1, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side", 0],//north
    ["trough_side", 0],//south
    ["trough_side", 0],//east
    ["trough_side_inner", 0]//west
]);

feedingTroughModel_2.addBox(14/16, 0, 0, 1, 7/16, 1, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side", 0],//north
    ["trough_side", 0],//south
    ["trough_side_inner", 0],//east
    ["trough_side", 0]//west
]);

feedingTroughModel_2.addBox(2/16, 0, 0, 14/16, 7/16, 2/16, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side", 0],//north
    ["trough_side_inner", 0],//south
    ["trough_side", 0],//east
    ["trough_side", 0]//west
]);

feedingTroughModel_2.addBox(2/16, 0, 14/16, 14/16, 7/16, 1, [
    ["trough_bottom", 0],//bottom
    ["trough_top", 0],//top
    ["trough_side_inner", 0],//north
    ["trough_side", 0],//south
    ["trough_side", 0],//east
    ["trough_side", 0]//west
]);

let feedingTroughRender_2 = new ICRender.Model();
feedingTroughRender_2.addEntry(feedingTroughModel_2);

///////////////////////////
BlockRenderer.enableCoordMapping(BlockID.feedingTroughBlock, -1, feedingTroughRender);

//BlockRenderer.setStaticICRender(BlockID.feedingTroughBlock, -1, feedingTroughRender);


Recipes.addShaped({
    id: BlockID.feedingTroughBlock,
    count: 1,
    data: 0
}, [
    "f f",
    "ppp"
], ['p', 5, 0, 'f', 107, 0]);



const guiFeedingTroughBlock = new UI.StandardWindow({
    standard: {
        header: {text: {text: "Feeding Trough"}},
        inventory: {standard: true},
        background: {standard: true}
    },
    drawing: [],
    elements: {
        "slot0": {type: "slot", x: 502, y: 112},
        "slot1": {type: "slot", x: 562, y: 112},
        "slot2": {type: "slot", x: 622, y: 112},
        "slot3": {type: "slot", x: 502, y: 172},
        "slot4": {type: "slot", x: 562, y: 172},
        "slot5": {type: "slot", x: 622, y: 172},
        "slot6": {type: "slot", x: 502, y: 232},
        "slot7": {type: "slot", x: 562, y: 232},
        "slot8": {type: "slot", x: 622, y: 232}
    }
});

TileEntity.registerPrototype(BlockID.feedingTroughBlock, {
    defaultValues: {
    	lastHasAnyItem: true,
        lastHasWheet: false,
        lastHasCarrot: false,
        lastHasSeed: false,
        tick:0,
    },

    getScreenName: function(player, coords) {
        return "master"; 
    },

    getScreenByName: function(screenName) {
        return screenName === "master" ? guiFeedingTroughBlock : null;  
    },

    useNetworkItemContainer: true,

    init: function () {
    	//StorageInterface.checkTransfer(this);
    },

    //click: function(id, count, data, coords, player, extra) {
    //    return true;
    //},

    tick: function() {
    	//const storage = StorageInterface.getInterface(this);
        //if (!storage) {
         //   return;
        //}
    
    	StorageInterface.checkHoppers(this);
        
        let hasWheet = false;
        let hasCarrot = false;
        let hasSeed = false;
        let hasAnyItem = false;


        for (let i = 0; i < 9; i++) {
            let slot = this.container.getSlot("slot" + i);

            //Game.message("Slot " + i + ": " + JSON.stringify(slot));

            if (slot.id == 296) { // wheat
                hasWheet = true;
            }

            if (slot.id == 391) { // carrot
                hasCarrot = true;
            }

            if (slot.id == 295) { // seeds
                hasSeed = true;
            }

            if (slot.id != 0) {
                //Game.message("1");
                hasAnyItem = true;
            }
        }

    	if (this.data.lastHasAnyItem != hasAnyItem) {
    		if(hasAnyItem){
    			//Game.message("2");
     	  		this.sendPacket("updateRender", { renderModel: 1});
    		} else{
    			///Game.message("3");
     	   		this.sendPacket("updateRender", { renderModel: 0 });
    		}
    		this.data.lastHasAnyItem = hasAnyItem;
    	}

        if(this.data.tick == 0){
            if(hasWheet){
            	//Game.message("1");
                let CowEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.COW);
                moveToTargetCoords(CowEntityList, this.x, this.y, this.z);
            }else{
            	//Game.message("2");
                let CowEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.COW);
                stopEntityMovement(CowEntityList);
            }

            if(hasCarrot){
                let PigEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.PIG);
                moveToTargetCoords(PigEntityList, this.x, this.y, this.z);
            }else{
                let PigEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.PIG);
                stopEntityMovement(PigEntityList);
            }

            if(hasSeed){
                let ChickenEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.CHICKEN);
                moveToTargetCoords(ChickenEntityList, this.x, this.y, this.z);
            }else{
                let ChickenEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.CHICKEN);
                stopEntityMovement(ChickenEntityList);
            }

            this.data.tick = 40;
        }

        this.data.tick--;

        let entityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10);

        if(entityList.length <= 32){
            
            if(hasWheet){

                feedingTroughBreedingFunction(this.x, this.y, this.z, EEntityType.COW, 296, this.container);

            }else{
                let CowEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.COW);
                stopEntityMovement(CowEntityList);
            }

            if(hasCarrot){

                feedingTroughBreedingFunction(this.x, this.y, this.z, EEntityType.PIG, 391, this.container);

            }else{
                let PigEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.PIG);
                stopEntityMovement(PigEntityList);
            }

            if(hasSeed){

                feedingTroughBreedingFunction(this.x, this.y, this.z, EEntityType.CHICKEN, 295, this.container);

            }else{
                let ChickenEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.CHICKEN);
                stopEntityMovement(ChickenEntityList);
            }

        }else{

            if(hasWheet){

                feedingTroughBreedingCoolDownFunction(this.x, this.y, this.z, EEntityType.COW, 296, this.container);

            }else{
                let CowEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.COW);
                stopEntityMovement(CowEntityList);
            }

            if(hasCarrot){

                feedingTroughBreedingCoolDownFunction(this.x, this.y, this.z, EEntityType.PIG, 391, this.container);

            }else{
                let PigEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.PIG);
                stopEntityMovement(PigEntityList);
            }

            if(hasSeed){

                feedingTroughBreedingCoolDownFunction(this.x, this.y, this.z, EEntityType.CHICKEN, 295, this.container);

            }else{
                let ChickenEntityList = Entity.getAllInRange({x: this.x, y: this.y, z: this.z}, 10, EEntityType.CHICKEN);
                stopEntityMovement(ChickenEntityList);
            }

        }
    },
    
    client: {
        events: {
            updateRender(data, extra) {
            //Game.message("4");
            BlockRenderer.mapAtCoords(this.x, this.y, this.z, data.renderModel == 1 ? feedingTroughRender_2 : feedingTroughRender, false);		
            //Game.message("5");
            }
            
        }
    },

    destroy: function() {
        //StorageInterface.checkTransfer(this);
    }
});






// file: vanilla_items/item_breeder.js



Callback.addCallback("EntityAdded", function(entity) {
    //Game.message("1");
    if (Entity.getType(entity) === EEntityType.ITEM) {
        //Game.message("2");
        let item = Entity.getDroppedItem(entity);
        
        if (item.id === 296) { //wheat

            mainBreedingFunction(entity, EEntityType.COW);

        }else if (item.id === 391) { //Carrot
            
            mainBreedingFunction(entity, EEntityType.PIG);

        }else if (item.id === 295) { //Wheat Seeds
            
            mainBreedingFunction(entity, EEntityType.CHICKEN);

        }
    }
});





// file: shared.js





