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


