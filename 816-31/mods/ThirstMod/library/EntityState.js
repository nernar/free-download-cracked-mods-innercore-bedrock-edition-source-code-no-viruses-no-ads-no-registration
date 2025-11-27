LIBRARY({
    name: "EntityState",
    version: 1,
    shared: true,
    api: "CoreEngine"
});

var EntityState = {};

EntityState.STANDING = 1;
EntityState.STEALING = 2;
EntityState.WALKING = 4;
EntityState.RUNNING = 8;
EntityState.JUMPING = 16;
EntityState.FALLING = 32;
EntityState.SWIMMING = 64;
EntityState.FLOATING = 128;

var EntityStateInfo = function(state){
    this.state = state;
    this.checkFlags = function(flags){
        return flags & state;
    }
    this.toString = function(){
        var stat = "";
        for(var key in EntityState){
            let value = EntityState[key];
            if(Number.isInteger(value) && (state & value)){
                stat += key + " | ";
            }
        }
        if (stat == "")
            return "STANDING";
        else return stat.substr(0, stat.length - 3);
    }
}

EntityState.getEntityState = function(entity){
    var horizontal = EntityState.getSpeed(entity);
    var vertical = Entity.getVelocity(entity).y;
		let region = BlockSource.getDefaultForActor(entity);
    var state = 0;
    //horizontal parsing
    if(horizontal < 0.01)
        state |= EntityState.STANDING;
    else if(horizontal < 0.07)
        state |= EntityState.STEALING;
    else if(horizontal < 0.15)
        state |= EntityState.WALKING;
    else
        state |= EntityState.RUNNING;
    //vertical parsing
    if((vertical > -1 && vertical < -0.1) || vertical > 0) 
        state |= EntityState.JUMPING;
    else if(vertical <= -1)
        state |= EntityState.FALLING;
    //check if in water
    let pos = Entity.getPosition(entity);
    let block = region.getBlockId(pos.x, pos.y, pos.z);
    if(block == 8 || block == 9){
        state |= EntityState.SWIMMING;
    } else {
        block = region.getBlockId(pos.x, pos.y - 1.5, pos.z);
        if(block == 8 || block == 9){
            state |= EntityState.FLOATING;
        }
    }
    return new EntityStateInfo(state);
}

EntityState.getPlayerState = function(player){
    return EntityState.getEntityState(player || Player.get());
}

EntityState.getSpeed = function(entity){
    var velocity = Entity.getVelocity(entity);
    return Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z);
}

EXPORT("EntityState", EntityState);
EXPORT("EntityStateInfo", EntityStateInfo);