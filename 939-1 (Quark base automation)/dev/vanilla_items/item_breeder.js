

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

