IDRegistry.genItemID("shammer_mjolnir");
Item.createItem("shammer_mjolnir", "Mjolnir", {name: "shammer_iron"}, {stack: 1});
Item.setGlint("shammer_mjolnir", true);
ToolLib.setTool(ItemID.shammer_mjolnir, {level: 10, durability: 1, efficiency: 10, damage: 10, range: 1, infrangible: true}, ToolType.sparks_hammer);


Item.registerNoTargetUseFunction("shammer_mjolnir", function(item){
    const pointed = Player.getPointed().pos;
    if(pointed.x === 0 && pointed.y === 0 && pointed.z === 0){
        const pos = Entity.getPosition(player);
        const vec = Entity.getLookVector(player);
        const entity = Entity.getAll();
        const coords = {x: 0, y: 0, z: 0};
        let i = 0;
        attack:
        for(let t = 0; t < 256; t++){
            coords.x = pos.x + vec.x * t;
            coords.y = pos.y + vec.y * t;
            coords.z = pos.z + vec.z * t;
            for(i = 0; i < entity.length; i++){
                if(Entity.getType(entity[i]) !== 1 && Entity.getDistanceToCoords(entity[i], coords) < 4){
                    Entity.setHealth(entity[i], Entity.getHealth(entity[i]) - 10);
                    Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.LIGHTNING_BOLT);
                    World.playSound(coords.x, coords.y, coords.z, "ambient.weather.lightning.impact", 100);
                    break attack;
                }
            }
            if(World.getBlockID(coords.x, coords.y, coords.z) !== 0){
                Entity.spawn(coords.x, coords.y, coords.z, Native.EntityType.LIGHTNING_BOLT);
                World.playSound(coords.x, coords.y, coords.z, "ambient.weather.lightning.impact", 100);
                break attack;
            }
        }
    }
});