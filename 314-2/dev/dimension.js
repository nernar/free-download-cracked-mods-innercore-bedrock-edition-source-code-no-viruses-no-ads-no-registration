const SKY_COLOR = [0, 0.2, 0.1];
IMPORT("dimensions");

var OutLands = new Dimension({
    name: "OutLands", // ???????? ?????????
    
    generation: { //?????????
        layers: [
             //???? ????????? 
             
             { 
    range: [0, 80],
    noise: {
        octaves: {
            count: 4,
            weight: 0.6,
            scale: [1, 0.4, 1]
        }
    },
                
    gradient: [[0, 1], [0.4, 1], [0.5, 0], [0.6, -1], [1, -1], [1, -1]],
    terrain: {
        base: BlockID.olstone,
        cover: {
             height: 10,
             top: BlockID.olgrass,
             block: BlockID.oldirt
        },
        filling: {
           	height: 10,
               block: 8,
               },
    }
},

        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: SKY_COLOR,
        fog: SKY_COLOR,
    },
    
    callbacks: { 
        // ???????? ???????? ?????????
        // ????? ????????? ??? ???????? ?????????, ???????? ????? ????????.
        tick: function() { 
            
        },
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("OutLandsChunk",chunkX,chunkZ);
},
        loaded: function() {
            // ???????? ?????????
        },

        unloaded: function() {
            // ????????  ?????????
        },
        },
});



























var teleporter = OutLands.getTeleporter(); 
 
var teleporterBack = teleporter.OVERWORLD; 
// alert(dimension.id);
 
 
 Callback.addCallback("ItemUse", function(coords, item){ 
if(item.id == ItemID.extraterrestrialstaff){ 
teleporter.enter(); 
}
if(item.id == ItemID.ankh){ 
teleporterBack.enter(); 
}
});


/*
var Particles = ModAPI.requireGlobal("Particles");

var flyfire = Particles.registerParticleType({
texture: "flyfire", 
    size: [1, 10],  
    lifetime: [60, 1200], 
    render: 2, 
   addLifetimeAfterImpact: 20, 
});


function getSign(n){
	  if(n>0)return 1;
	  if(n==0)return 0;
	  if(n<0)return -1;
  }
  function random(min, max){
	  var rnd = Math.random();
	  var dot = getSign(Math.random()*2-1);
	  return Math.floor(rnd*(max-min)*dot+min*dot);
  }
function getMinDistance(min, max){
	var x = random(0,max);
	var z = random(0,max);
	if(x*x+z*z>min*min){
		return {x:x, z:z};
	}else{
		return getMinDistance(min, max);
	}
}

function addFFire(){
	var xz = getMinDistance(30,80);
	var x = xz.x;
	var y = random(0,1);
	var z = xz.z;
	var xz = getMinDistance(3,5);
	var xV = xz.x/80;
	var yV = random(3,5)/600;
	var zV = xz.z/80;
	
		Particles.addFarParticle(flyfire,Player.getPosition().x+x, Player.getPosition().y+y, Player.getPosition().z+z,xV,yV,zV,0);
}

Callback.addCallback("tick", function(coords, item){ 
	if(Player.getDimension()==OutLands.id){
		addFFire();
	}
	*/
	/*
	addFFire();
	for(var i = 0; i<2; i++){
		addFFire();
	}
	
});
*/










