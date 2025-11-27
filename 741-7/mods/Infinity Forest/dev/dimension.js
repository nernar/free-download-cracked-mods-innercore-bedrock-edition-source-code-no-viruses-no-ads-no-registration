Network.addClientPacket("if.particle", function(packetData) {
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
});

function spawnParticle (type, x, y, z, vx, vy, vz, ax, ay, az){
            vx = vx || 0;
            vy = vy || 0;
            vz = vz || 0;
            ax = ax || 0;
            ay = ay || 0;
            az = az || 0;
            var players = Network.getConnectedPlayers();
            for(var i in players){
                var client = Network.getClientForPlayer(players[i]);
                if(client){
                    client.send("if.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
                    Debug.message("spawn particle");
                }else{
                    Debug.message("[error]spawn particle");
                }
            } 
    }

var infinityForest = new Dimensions.CustomDimension("infinityForest", 936); 

let generator = Dimensions.newGenerator({
    layers: [
        {
            minY: 2, 
            maxY: 75, 
            yConversion: [[0, 0]],
            material: {base: 9}
        },
        {
            minY: 0, 
            maxY: 82, 
            yConversion: [[.7, 1], [1, -0.5]],
            material: {base: 1, surface: {id: 3, data: 0, width:3}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        },
        {
            minY: 2, 
            maxY: 4, 
            yConversion: [[.7, 1]],
            material: {base: 7}
        },
    ]
});
infinityForest.setGenerator(generator);

IDRegistry.genItemID("blueCrystal");
Item.createItem("blueCrystal", "Blue Crystal", {name: "blue_crystal"});
Translation.addTranslation("Blue Crystal", {ru: "Голубой кристалл"});
IDRegistry.genItemID("orangeCrystal");
Item.createItem("orangeCrystal", "Orange Crystal", {name: "orange_crystal"});
Translation.addTranslation("Orange Crystal", {ru: "Оранжевый кристалл"});
 Recipes.addShaped({id: ItemID.blueCrystal, count: 1, data: 0}, ["ldl", "lsl", "ddd"], ["d", 264, -1, "d", 3, -1, "l", 18, -1, "s", 6, -1]);

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){ 
if(item.id == ItemID.blueCrystal){ 
Dimensions.transfer(player, infinityForest.id);
}
if(item.id == ItemID.orangeCrystal){ 
Dimensions.transfer(player, 0);
}
});

var Particles = ModAPI.requireGlobal("Particles");

var glowworm = Particles.registerParticleType({
 texture: "part_1",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100],
 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});
var fire = Particles.registerParticleType({
 texture: "part_1",
 render: 2,
 color:[1,.5,.5],
 size:[2, 4],
 lifetime:[40, 100],
 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
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
function addGlowworm(coords){
	var xz = getMinDistance(10,30);
	var x = xz.x;
	var y = random(0,1);
	var z = xz.z;
	var xz = getMinDistance(3,5);
	var xV = xz.x/80;
	var yV = random(3,5)/600;
	var zV = xz.z/80;
	
		spawnParticle(glowworm,coords.x+x, coords.y + y, coords.z + z,xV,yV,zV,0);
}
function addFire(coords){
	var xz = getMinDistance(30,80);
	var x = xz.x;
	var y = random(0,1);
	var z = xz.z;
	var xz = getMinDistance(3,5);
	var xV = xz.x/80;
	var yV = random(3,5)/600;
	var zV = xz.z/80;
	
	spawnParticle(fire,coords.x+x, coords.y + y, coords.z + z,xV,yV,zV,0);
}
Callback.addCallback("LocalTick", function() {
	let pos = Player.getPosition()
	if(Player.getDimension()==infinityForest.id){
		addGlowworm(pos);
	for(var i = 0; i<3; i++){
		addFire(pos);
	}
	}
});
