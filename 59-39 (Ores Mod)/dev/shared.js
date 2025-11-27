ModAPI.registerAPI("OresAPI", {
    OresAPI:OresAPI,
    solarPanelAPI:SolarPanel,
    woodIncubator:WoodIncubatorRecipes,
    reguireGlobal:function(c){
        return eval(c)
    }
});

function p(type, x, y, z, radius){
    for(var pitch = -Math.PI/2; pitch < Math.PI/2; pitch += .02){
        for(var a = 0; a < 5; a++){
            let yaw = toRadians(random(0, 360));
            let px = x + Math.sin(yaw) * Math.cos(pitch) * radius;
            let py = y + Math.abs(Math.sin(pitch) * radius);
            let pz = z + Math.cos(yaw) * Math.cos(pitch) * radius;
            Particles.addParticle(type, px, py, pz, 0, 0, 0);
        }
    }
}

var toRadians = java.lang.Math.toRadians;



Callback.addCallback("ItemUse", function(coords, item, block){
    let x = coords.relative.x;
    let y = coords.relative.y;
    let z = coords.relative.z; 
    
    //p(Native.ParticleType.flame, x, y, z, 5); 
});