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











