/*
BUILD INFO:
  dir: core/dev
  target: main.js
  files: 37
*/



// file: info.js

IMPORT("DungeonAPI");
IMPORT("ToolLib");
IMPORT("TileRender");
IMPORT("add-onCreter");

const mod = FileTools.ReadJSON(__dir__ + 'mod.info');

var _inventory_open = false;
Callback.addCallback('NativeGuiChanged', function (screenName) {
	if (screenName == 'inventory_screen' || screenName == 'inventory_screen_pocket')
		_inventory_open = true;
	else
		_inventory_open = false;
});

const mod_tip = function (id) {
	try {
	if (BlockID[id]) id = Block.convertBlockToItemId(id);
	Callback.addCallback('PostLoaded', function () {
		var _func = Item.nameOverrideFunctions[id];
		Item.registerNameOverrideFunction(id, function (item, name) {
			if (_func) name = _func(item, name);
			if (_inventory_open) name += "\n§9" + mod.name;
			return name;
		})
	});
	}
	catch (err){
		alert (id)
		}
}

var config = FileTools.ReadJSON(__dir__+"/config.json");
const PartType = {
    mana: Particles.registerParticleType({
        texture: "mana",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    forest: Particles.registerParticleType({
        texture: "EnchantedForest_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    magic: Particles.registerParticleType({
        texture: "magic_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    magic2: Particles.registerParticleType({
        texture: "magic_particle",
        render: 2,
        size: [2, 5],
        lifetime:[25, 25],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    fire: Particles.registerParticleType({
        texture: "fire",
        render: 3,
        size: [3, 3],
        lifetime:[5, 5],
        isUsingBlockLight: true,
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    rai: Particles.registerParticleType({
        texture: "rai_particle",
        render: 2,
        size: [3, 3],
        lifetime:[40, 40],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
};
let DA = false;





const setTimeout = function(func, ticks){
  var upd = {
    ticks: 0,
      update: function(){
        this.ticks++
          if(this.ticks >= ticks){
            func();
            this.remove = true
      }
    }
  };
  Updatable.addUpdatable(upd);
}




// file: Wood.js

function setWood(xx, yy, zz){ 
World.setBlock(xx-2, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx-2, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+6, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+6, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+7, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+8, zz, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+6, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx-1, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+6, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+7, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+8, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+1, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+2, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+3, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+4, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+5, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+6, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+7, zz, BlockID.Breastya, 0); 
World.setBlock(xx, yy+8, zz, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+6, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+7, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+8, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+6, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+6, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+7, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+8, zz, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+6, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+1, yy+5, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz-2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz-1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz+1, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+4, zz+2, BlockID.Foliage, 0); 
World.setBlock(xx+2, yy+5, zz+2, BlockID.Foliage, 0); 
}
Callback.addCallback("ItemUse", function(coords, item){ 

if(item.id == 351 && item.data == 15){ 
if(World.getBlock(coords.x, coords.y, coords.z).id== BlockID.sap){
setWood(coords.x, coords.y-1, coords.z);
} 
} 
});
TileEntity.registerPrototype(BlockID.sap, {

     defaultValues: {

          

     },


     tick: function(){
        if(Math.random() * 1000 < 1){
setWood(this.x, this.y-1, this.z);
}
     },
});




















// file: command.js

function getPlayer(name){
    let arr = Network.getConnectedPlayers();
    for(let i in arr){
        if(Entity.getNameTag(arr[i])==name){
            return arr[i];
        }
    }
}
if(config.debug.command && config.debug.enabled){
    Callback.addCallback("NativeCommand", function (src){
        let arr = src.split(" ");
        if(arr[0] == "/mana"){
            if(arr[1] == "set"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                        if(mana.countMax<=parseInt(arr[3])){
                            mana.countMax = parseInt(arr[3]);
                        }
                        mana.count = parseInt(arr[3]);
                        Mp.message(player, "вам установлено количество маны - "+arr[3]);
                        ManaCore.set(player, mana);
                        Game.prevent();
                    }
                }
            }
            if(arr[1] == "setMax"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        let mana = ManaCore.get(player);
                         if(mana.count>=parseInt(arr[3])){
                            mana.count = parseInt(arr[3]);
                        }
                        mana.countMax = parseInt(arr[3]);
                        Mp.message(player, "вам установлено максимальное количество маны - "+arr[3]);
                        ManaCore.set(player, mana);
                   }
                }
            }
            if(arr[1] == "delet"){
                if(arr[2]){
                    if(arr[3]){
                        let player = getPlayer(arr[2]);
                        ManaCore.create(player);
                        Mp.message(player, "у вас было удалено сохранение маны");
                        ManaCore.set(player, mana);
                    }
                }
            }
        }
    });
}




// file: api/mana.js

var manaPlayer = {};
const manaDefult = {
    count: 0,
    countMax: 10000
};
Network.addClientPacket("dc.read", function(packetData) {
    manaPlayer = packetData;
});
Callback.addCallback("PlayerChangedDimension", function(player, currentId, lastId){
    ManaCore.read(player);
});
Saver.addSavesScope("mana",
    function read(scope) {
        manaPlayer = scope.manaPlayer || {};
    },
    function save() {
        return {
            manaPlayer: manaPlayer,
        };
    }
);
function delItem(player, item){
    let pa = new PlayerActor(player);
    if(pa.getGameMode() == 0){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data);
    }
}
var ManaCore = {
    create: function (player){
        manaPlayer[player] = manaDefult;
        Debug.message("create mana player - "+player);
    },
    read: function (player){
        if(manaPlayer[player]){
            let client = Network.getClientForPlayer(player);
            if(client != null){
                client.send("dc.read", manaPlayer);
            }
            Debug.message("read mana player - "+player);
        }else{
            Debug.message("[error]noy mana player - "+player);
            this.create(player);
            let client = Network.getClientForPlayer(player);
            if(client != null){
                client.send("dc.read", manaPlayer);
            }
        }
    },
    get: function (player){
        if(manaPlayer[player]){
            return {count: manaPlayer[player].count, countMax: manaPlayer[player].countMax};
            Debug.message("get mana player - "+player);
        }else{
            Debug.message("[error]noy mana player - "+player);
            this.create(player);
            return {count: manaPlayer[player].count, countMax: manaPlayer[player].countMax};
        }
    },
    set: function (player, obj){
        if(manaPlayer[player]){
            Callback.invokeCallback("wasteMana", player, {count: manaPlayer[player].count, countMax: manaPlayer[player].countMax}, obj);
        }else{
            Debug.message("[error]noy mana player - "+player);
        }
    }
}; 
Network.addServerPacket("dc.set", function(client, data) {
    manaPlayer = data;
});




// file: api/debug.js

var Debug = {
    lines: 0,
    message: function (text){
        if(config.debug.enabled && config.debug.log){
            this.lines += 1;
            if(this.lines >= config.debug.numberOfLines){
                this.lines = 0;
                this.clear();
            }
            FileTools.WriteText(__dir__+"/debug.log", text+"\n", true);
        }
        
    },
    clear: function (){
        FileTools.WriteJSON(__dir__+"/debug.log", ["debug"], false);
        this.message("clear log");
    }
};
Debug.clear();




// file: api/multiplayer.js

Network.addClientPacket("dc.particle", function(packetData) {
    if(config.game.particles == true && Math.random()*100<=config.game.particlesCount){
        Particles.addParticle(packetData.p, packetData.x, packetData.y, packetData.z, packetData.vx, packetData.vy, packetData.vz);
    }
});
Network.addClientPacket("dc.message", function(packetData) {
    Game.message(packetData);
});

Network.addClientPacket("dc.tip_message", function(packetData) {
    Game.tipMessage(packetData);
});

var Mp = {
    message: function (player, text){
        var client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("dc.message", text);
            Debug.message("message player - "+player+" text: "+text);
        }else{
            Debug.message("[error]message player - "+player);
        }
    },
    tipMessage: function (player, text){
        var client = Network.getClientForPlayer(player);
        if(client != null){
            client.send("dc.tip_message", text);
            Debug.message("message player - "+player+" text: "+text);
        }else{
            Debug.message("[error]message player - "+player);
        }
    },
    spawnParticle: function (type, x, y, z, vx, vy, vz, ax, ay, az){
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
                    client.send("dc.particle", {p: type, x: x, y: y, z: z, vx: vx, vy: vy, vz: vz});
                    Debug.message("spawn particle");
                }else{
                    Debug.message("[error]spawn particle");
                }
            }
        
    }
};




// file: api/renderAPI.js

let renderAPI = {
setCristalPidestal: function (id) {

var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);
modelAPI.addBox (2/16, 0, 2/16, 14/16, 0.0625, 14/16, id, 0);

modelAPI.addBox (5/16, 0.0625, 5/16, 11/16, 0.9375, 11/16, id, 0);

modelAPI.addBox (3/16, 0.9375, 3/16, 13/16, 1, 13/16, id, 0);

}, 

setGlblock1: function (id) {

var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (1/16, 0, 1/16, 15/16, 0.125, 15/16, id, 0);

modelAPI.addBox (6/16, 0.125, 6/16, 10/16, 0.9375, 10/16, id, 0);

modelAPI.addBox (4/16, 0.9375, 4/16, 12/16, 1, 12/16, id, 0);
}, 
steve: function (id) {
var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (1/16, 0, 1/16, 15/16, 0.0625, 15/16, id, 0);

modelAPI.addBox (2/16, 0.0625, 2/16, 14/16, 0.125, 14/16, id, 0);

modelAPI.addBox (10/16, 0.125, 5/16, 8/16, 1, 12/16, id, 0);
}, 
ManaGenerator: function (id) {
var renderAPI = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(id, -1, renderAPI); 
     var modelAPI = BlockRenderer.createModel(); 
           renderAPI.addEntry(modelAPI);

modelAPI.addBox (0/16, 0, 0/16, 16/16, 0.125, 16/16, id, 0);
modelAPI.addBox (0/16, 0.875, 0/16, 16/16, 1, 16/16, id, 0);
modelAPI.addBox (0/16, 0.125, 0/16, 2/16, 0.875, 2/16, id, 0);
modelAPI.addBox (14/16, 0.125, 14/16, 16/16, 0.875, 16/16, id, 0);
modelAPI.addBox (14/16, 0.125, 0/16, 16/16, 0.875, 2/16, id, 0);
modelAPI.addBox (0/16, 0.125, 14/16, 2/16, 0.875, 16/16, id, 0);
modelAPI.addBox (11/16, 0.125, 11/16, 5/16, 0.3125, 5/16, id, 0);


}, 
setblock: function (id, obj, texture) {
let file = __dir__ + "/res/model/" + obj;
var mesh = new RenderMesh();
var renderAPI = new ICRender.Model(); 
BlockRenderer.setStaticICRender(id, -1, renderAPI); 
var modelAPI = new BlockRenderer.Model(mesh);  

           renderAPI.addEntry(modelAPI);
mesh.importFromFile(file, "obj", null);
mesh.setBlockTexture(texture, 0);
} 
};




// file: api/Particles.js

Math.sign = Math.sign || function(x) { 
    x = +x;
    if (x === 0) { 
        return x; 
    } 
    return x > 0 ? -0.1 : 0.1; 
}
var ParticlesAPI = {
   particles: Particles.registerParticleType({
        texture: "mana",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    forest: Particles.registerParticleType({
        texture: "EnchantedForest_particle",
        render: 2,
        size: [2, 2],
        lifetime:[50, 50],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    rai: Particles.registerParticleType({
        texture: "rai_particle",
        render: 2,
        size: [10, 10],
        lifetime:[40, 40],
        animators: {
            alpha:{fadeIn: .4, fadeOut: .4},
            size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
        }
    }),
    getVector: function (pos1, pos2){
        let vector = {
            x: Math.sign(pos1.x-pos2.x),
            y: Math.sign(pos1.y-pos2.y),
            z: Math.sign(pos1.z-pos2.z)
        }
        return vector;
    },
    coords: function(part, x1, y1, z1, x2, y2, z2, time){
        time = time || 50;
        var vx = -((x1 + 0.5) - (x2 + 0.5)) / time;
        var vy = -((y1 + 0.5) - (y2 + 0.5)) / time;
        var vz = -((z1 + 0.5) - (z2 + 0.5)) / time;
        Mp.spawnParticle(part, x1 + 0.5, y1 + 0.5, z1 + 0.5, vx, vy, vz);
    },
    spawnLine: function (particles, x1, y1, z1, x2, y2, z2, count){
        for(i = 0; i<=count;i++){
            var x = x1 + (-(x1 - x2)) * (i / count);
            var y = y1 + (-(y1 - y2)) * (i / count);
            var z = z1 + (-(z1 - z2)) * (i / count);
            Mp.spawnParticle(particles, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0);
        }
    },
    spawnCircle: function (particles, x, y, z, radius, count, rotation){
        let angle = 0;
        let step = 360 / count;
        if(rotation == 0){
            for(i = 0;i < 360;i+=step){
                let x1 = x + radius * Math.cos(i);
                let y1 = y - radius * Math.sin(i);
                Mp.spawnParticle(particles, x1 + 0.5, y1 + 0.5, z + 0.5, 0, 0, 0);
            }
        }
        if(rotation == 1){
            for(i = 0;i < 360;i+=step){
                let z1 = z + radius * Math.cos(i);
                let y1 = y - radius * Math.sin(i);
                Mp.spawnParticle(particles, x + 0.5, y1 + 0.5, z1 + 0.5, 0, 0, 0);
            }
        }
        if(rotation == 2){
            for(i = 0;i < 360;i+=step){
                let x1 = x + radius * Math.cos(i);
                let z1 = z - radius * Math.sin(i);
                Mp.spawnParticle(particles, x1 + 0.5, y + 0.5, z1 + 0.5, 0, 0, 0);
            }
        }
    },
    spawnCircleVector: function (time, particle, x, y, z, radius, count){
        let angle = 0;
        let step = 360 / count;
        for(i = 0;i < 360;i+=step){
            let x1 = x + radius * Math.cos(i);
            let z1 = z - radius * Math.sin(i);
            Mp.spawnParticle(particle, x1 + 0.5, y + 0.5, z1 + 0.5, -Math.sign(x1 - x), 0, -Math.sign(z1 - z));
        }
    },
    spawnShellEnt: function (part, ent, distante, damage){
        let pos = Entity.getPosition(ent);
        let vel = Entity.getLookVectorByAngle(Entity.getLookAngle(ent));
        for(let i = 0;i<distante;i++){
            let coord = {
                x: pos.x+(i * vel.x / 2),
                y: pos.y+0.5+(i * vel.y / 2),
                z: pos.z+(i * vel.z / 2)
            };
            let ent3 = Entity.getAllInRange(coord, 2);
            for(let i1 in ent3){
                if(ent3[i1] != ent) Entity.damageEntity(ent3[i1], 5);
            }
             if(BlockSource.getDefaultForActor(ent).getBlockId(coord.x,coord.y,coord.z)!=0){
                break;
            }
            Mp.spawnParticle(part, coord.x, coord.y, coord.z);
        }
    },
    spawnShellCoords: function (part, x1, y1, z1, x2, y2, z2, damage){
        let count = ((-(x1 - x2)) + (-(y1 - y2)) + (-(z1 - z2))) / 3 * 10;
        for(let i = 0; i<=count;i++){
            let x = x1 + (-(x1 - x2)) * (i / count);
            let y = y1 + (-(y1 - y2)) * (i / count);
            let z = z1 + (-(z1 - z2)) * (i / count);
            Mp.spawnParticle(part, x + 0.5, y + 0.5, z + 0.5, 0, 0, 0);
            let ent = Entity.getAllInRange({x: x, y: y, z: z}, 2);
            let en = false;
            for(let i1 in ent){
               Entity.damageEntity(ent[i1], damage);
               en = true;
            }
            if(en){
                break;
            }
            if(World.getBlockID(x, y, z) != 0){
                break;
            }
        }
    },
    spawnShellEnt2: function (part, ent, distante, damage){
        let pos = Entity.getPosition(ent);
        let vel = Entity.getLookVectorByAngle(Entity.getLookAngle(ent));
        let x = 0;
        let y = 0;
        let z = 0;
        for(let i = 0;i<distante;i++){
            if(x >= 2){
                x -= 0.1;
            }else if(x <= -2){
                x += 0.1;
            }else{
                x += (Math.random() / 2) - (Math.random() / 2);
            }
            if(y >= 2){
                y -= 0.1;
            }else if(y <= -2){
                y += 0.1;
            }else{
                y += (Math.random() / 2) - (Math.random() / 2);
            }
            if(z >= 2){
                z -= 0.1;
            }else if(z <= -2){
                z += 0.1;
            }else{
                z += (Math.random() / 2) - (Math.random() / 2);
            }
            let coord = {
                x: pos.x+x+(i * vel.x / 2),
                y: pos.y+y+0.5+(i * vel.y / 2),
                z: pos.z+z+(i * vel.z / 2)
            };
            let ent3 = Entity.getAllInRange(coord, 2);
            for(let i1 in ent3){
                if(ent3[i1] != ent) Entity.damageEntity(ent3[i1], damage);
            }
             if(BlockSource.getDefaultForActor(ent).getBlockId(coord.x,coord.y,coord.z)!=0){
                break;
            }
            Mp.spawnParticle(part, coord.x, coord.y, coord.z);
        }
    }
};




// file: structure.js

function getBlockSource(dimension){
    let blockSource = BlockSource.getDefaultForDimension(dimension);
    blockSource = BlockSource.getCurrentWorldGenRegion();
    return blockSource;
}
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, id){
        if(random.nextInt(800) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("cokroviwnisa_end.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y+1, coords.z, id);
        }
});

Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(750) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("name.json", coords.x, coords.y, coords.z, 0, id);
Item2.fillChest(coords.x, coords.y+1, coords.z, id);
}
});
var StructureRuinEnd = new DungeonAPI("ruin_end.json");
StructureRuinEnd.setPrototype({
    isSetBlock: function(x, y, z, id, data, identifier, packet, dimension){
        if(id == 206){
            return false;
            let blockSource = getBlockSource(dimension);
            blockSource.setBlock(x, y, z, 121, 0);
        }else{
            return true;
        }
    }
});
Callback.addCallback("GenerateEndChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(600) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureRuinEnd.setStructure(coords.x, coords.y, coords.z, 0, id);
}
});

var StructureGrobnisa = new DungeonAPI("grobnisa.json");
StructureGrobnisa.setPrototype({
    setStructure: function (x, y, z, id, data, identifier, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        if(Math.random()<=0.5){
            switch(id){
                case 4:
                    blockSource.setBlock(x, y, z, 48, 0);
                break;
                case 98:
                    blockSource.setBlock(x, y, z, 98, 1);
                break;
                case 139:
                    blockSource.setBlock(x, y, z, 139, 8);
                break;
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(2300) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa.setStructure(coords.x, coords.y, coords.z, 0, id);
Item2.fillChest(coords.x, coords.y+2, coords.z-2, id);
Item2.fillChest(coords.x, coords.y+2, coords.z+3, id);
Item2.fillChest(coords.x+2, coords.y+2, coords.z-2, id);
Item2.fillChest(coords.x+4, coords.y+2, coords.z+3, id);
}
});


var StructureGrobnisa2 = new DungeonAPI("grobnisa2.json");
StructureGrobnisa2.setPrototype({
    setStructure: function (x, y, z, id, data, identifier, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        if(Math.random()<=0.5){
            switch(id){
                case 4:
                    blockSource.setBlock(x, y, z, 48, 0);
                break;
                case 98:
                    blockSource.setBlock(x, y, z, 98, 1);
                break;
                case 139:
                    blockSource.setBlock(x, y, z, 139, 8);
                break;
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(2825) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructureGrobnisa2.setStructure(coords.x, coords.y, coords.z);
Item6.fillChest(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x+3, coords.y+4, coords.z-3, 0, id);
Item2.fillChest(coords.x-3, coords.y+4, coords.z-3, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(2600) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("structure.json", coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(500) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            
Dungeon.setStructure("bawna_ada.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y+7, coords.z, 0, id);
            Item2.fillChest(coords.x-2, coords.y+11, coords.z+2, 0, id);
            Item2.fillChest(coords.x+2, coords.y+11, coords.z+2, 0, id);
            Item2.fillChest(coords.x-2, coords.y+11, coords.z-2, 0, id);
            Item2.fillChest(coords.x+2, coords.y+11, coords.z-2, 0, id);
}
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(550) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("cokrovewnisa.json", coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x, coords.y+2, coords.z, 0, id);
}
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(600) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("labirint_ada.json", coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x-5, coords.y+1, coords.z-2, 0, id);
Item2.fillChest(coords.x-4, coords.y+1, coords.z, 0, id);
Item2.fillChest(coords.x+3, coords.y+1, coords.z+4, 0, id);
Item2.fillChest(coords.x+4, coords.y+1, coords.z-5, 0, id);
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(1850) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("bawna.json", coords.x, coords.y, coords.z);

Item3.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(1350) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

Dungeon.setStructure("ruin.json", coords.x, coords.y, coords.z, 0, id);

Item3.fillChest(coords.x-1, coords.y+1, coords.z+1, 0, id);
Item2.fillChest(coords.x+1, coords.y+10, coords.z, 0, id);
}
});
var StructurePiramid = new DungeonAPI("piramida.json");
StructurePiramid.setPrototype({
    setStructure: function (x, y, z, id, data, identifier, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        if(Math.random()<=0.5){
            switch(id){
                case 4:
                    blockSource.setBlock(x, y, z, 48, 0);
                break;
            }
        }
    }
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(3000) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

StructurePiramid.setStructure(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x+3, coords.y+1, coords.z+3, 0, id);
Item2.fillChest(coords.x+3, coords.y+1, coords.z-3, 0, id);
Item2.fillChest(coords.x-3, coords.y+1, coords.z+3, 0, id);
Item2.fillChest(coords.x-3, coords.y+1, coords.z-3, 0, id);
}
});
Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(300) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 200);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == 87){
            Dungeon.setStructure("piramida_ada.json", coords.x, coords.y, coords.z, 0, id);
            Item2.fillChest(coords.x, coords.y, coords.z, 0, id);
        }
}      
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(1000) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("chest).json")).setStructure(coords.x, coords.y, coords.z, 0, id);

Item5.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(1000) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("dc2_sektant.json")).setStructure(coords.x, coords.y, coords.z, 0, id);


}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(500) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("dc2_xram.json")).setStructure(coords.x, coords.y, coords.z, 0, id);
Item3.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(1000) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("dc2_xram2.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

Item2.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
if (random.nextInt(1500) <= 1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

(new DungeonAPI("teleport_rai.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

Item3.fillChest(coords.x, coords.y, coords.z, 0, id);
}
});




// file: block/magisBlock.js

IDRegistry.genBlockID("MagicStorage"); 
Block.createBlock("MagicStorage", [{name: "Magic storage", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true, opaque: true, lightopacity: 1, renderlayer: 2}]);
Translation.addTranslation("Magic storage", {ru: "магичиский накопитель"});

mod_tip(BlockID.MagicStorage)

TileEntity.registerPrototype(BlockID.MagicStorage, {
     defaultValues: {
          player: null,
     },
     client: {
         events: {
             particles: function (packet){
                 Particles.addParticle(7, packet.x+Math.random(), packet.y+1+Math.random(), packet.z+Math.random(), 0, 0, 0, 0);
             }
         }
     },
     tick: function(){
         if(this.data.player)
if (this.blockSource.getBlock(this.x-1, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z+1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z+1).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z+2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z+2).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z-1).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z-1).id != BlockID.MagicStorage){

if (this.blockSource.getBlock(this.x-1, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x-2, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+2, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x+1, this.y, this.z-2).id != BlockID.MagicStorage){
if (this.blockSource.getBlock(this.x, this.y, this.z-2).id != BlockID.MagicStorage){
         let mana = ManaCore.get(this.data.player);
         let per1 = mana.countMax
         per1 = mana.countMax / 100 * 20; 
         per1 = mana.countMax - per1;
         if(mana.count+1<=per1){
mana.count++;
Mp.spawnParticle(7, this.x+Math.random(), this.y+1+Math.random(), this.z+Math.random(), 0, 0, 0);
ManaCore.set(this.data.player, mana);
} 

}
}
}
} 

} 
} 
} 
} 
} 

}
}
}
}
}

}
}
}
}
}
}
}
}
}
}
     },
     click: function (id, count, data, coords, player){
         this.data.player = player;
         Mp.message(player, "блок привязан к вам");
     }
});




// file: block/BlockRegister.js

function randomInt(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

IDRegistry.genBlockID("paradiseGrass")
Block.createBlock("paradiseGrass", 
[{
	name: "Paradise Grass",
	inCreative: true,
	texture: [
             ["aether_dirt", 0],
             ["aether_grass_top", 0],
             ["aether_grass_side", 0]
       ]
   }
], {
	sound: "grass",
	solid: true,
	base: 2
});

mod_tip(BlockID.paradiseGrass)
Translation.addTranslation("Paradise Grass", {ru: "Райский Блок Травы"});

Block.registerDropFunctionForID(BlockID.paradiseGrass, function (){ return [[BlockID.paradiseDirt, 1, 0]]});

IDRegistry.genBlockID("paradiseDirt")
Block.createBlock("paradiseDirt", 
[{
	name: "Paradise Dirt",
	inCreative: true,
	texture: [["aether_dirt", 0]]
   }
], {
	sound: "dirt",
	solid: true
});

mod_tip(BlockID.paradiseDirt)

Translation.addTranslation("Paradise Dirt", {ru: "Райская Земля"});

//лень переписывать все blockid.dirt2 и blockid.grass2. Поэтому просто сделаю так:

BlockID.dirt2 = BlockID.paradiseDirt
BlockID.grass2 = BlockID.paradiseGrass

IDRegistry.genBlockID("crimsonGrass")
Block.createBlock("crimsonGrass",
[{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom", 0],
             ["cursed_grass_top", 0],
             ["cursed_grass_side", 0]
       ]
   },
{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom", 1],
             ["cursed_grass_top", 1],
             ["cursed_grass_side", 1]
       ]
   },
{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom_2", 0],
             ["cursed_grass_top_2", 0],
             ["cursed_grass_side_2", 0]
       ]
   },
{
	name: "Crimson Paradise Grass",
	inCreative: true,
	texture: [
             ["cursed_grass_bottom_3", 0],
             ["cursed_grass_top_3", 0],
             ["cursed_grass_side_3", 0]
       ]
   }
], {
	sound: "grass",
	solid: true
});

mod_tip(BlockID.crimsonGrass)

Translation.addTranslation("Crimson Paradise Grass", {ru: "Зараженный Райский Блок Травы"});

Block.registerDropFunctionForID(BlockID.crimsonGrass, function (){ return [[BlockID.crimsonDirt, 1, 0]]});

IDRegistry.genBlockID("crimsonDirt")
Block.createBlock("crimsonDirt",
[{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom", 0]]
   },
{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom", 1]]
   },
{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom_2", 0]]
   },
{
	name: "Crimson Paradise Dirt",
	inCreative: true,
	texture: [["cursed_grass_bottom_3", 0]]
   }
], {
	sound: "dirt",
	solid: true
});

mod_tip(BlockID.crimsonDirt)

Translation.addTranslation("Crimson Paradise Dirt", {ru: "Зараженная Райская Земля"});



IDRegistry.genBlockID("brick2");
Block.createBlock("brick2", [ {name: "Paradise Bricks", texture: [["brick2", 0]], inCreative: true}], {solid:true});

mod_tip(BlockID.brick2)
Translation.addTranslation("Paradise Bricks", {ru: "кирпичи рая"});

IDRegistry.genBlockID("vase");
Block.createBlock("vase", [ {name: "vase", texture: [["stone", 0]], inCreative: true}], {solid:true});

mod_tip(BlockID.vase)
Translation.addTranslation("vase", {ru: "ваза"});
renderAPI.setblock(BlockID.vase, "vase.obj", "vase");

Block.registerDropFunctionForID(BlockID.werep, function(coords, id, data, diggingLevel, toolLevel){
     return [[264, randomInt (1,4), 0]];
});

Block.registerDropFunctionForID(BlockID.vase, function(coords, id, data, diggingLevel, toolLevel){

     return [[0, 0, 0]];

});


ToolAPI.registerBlockMaterial(BlockID.vase, "stone", 1, true);
Block.setDestroyTime(BlockID.vase, 1);
Block.setDestroyLevel(BlockID.vase, 1);


IDRegistry.genBlockID("werep");
Block.createBlock("werep", [ {name: "werep", texture: [["stone", 0]], inCreative: true}], {solid: true});

mod_tip(BlockID.werep)

Translation.addTranslation("werep", {ru: "череп"});
renderAPI.setblock(BlockID.werep, "werep.obj", "werep");

Block.registerDropFunctionForID(BlockID.vase, function(coords, id, data, diggingLevel, toolLevel){

     return [[371, randomInt (1, 16), 0]];

});

ToolAPI.registerBlockMaterial(BlockID.werep, "stone", 1, true);
Block.setDestroyTime(BlockID.werep, 1);
Block.setDestroyLevel(BlockID.werep, 1);

ToolAPI.registerBlockMaterial(BlockID.brick2, "stone", 3, true);
Block.setDestroyTime(BlockID.brick2, 1);

IDRegistry.genBlockID("glass2");
Block.createBlock("glass2", [ {name: "Glass of paradise", texture: [["glass2", 0]], inCreative: true} ], {sound:"grass", solid: true});

mod_tip(BlockID.glass2)

Translation.addTranslation("Glass of paradise", {ru: "стекло"});

Block.setDestroyTime(BlockID.glass2, 0.1);

Block.createSpecialType({
	base: 17,
	solid: true,
	destroytime: 2,
	explosionres: 10,
	lightopacity: 15,
	renderlayer: 2,
	translucency: 0,
	sound:"wood"
}, "log");
Block.createSpecialType({
	base: 18,
	destroytime: 0.2,
	explosionres: 1,
	renderallfaces: true, 
	renderlayer: 1,
	lightopacity: 1,
	translucency: 0.5,
	sound:"grass"
}, "log2");

IDRegistry.genBlockID("Breastya");
Block.createBlockWithRotation("Breastya", [ {name: "Breastya", texture: [["Breastya", 1], ["Breastya", 1], ["Breastya", 0], ["Breastya", 0], ["Breastya", 0], ["Breastya", 0]], inCreative: true} ], "log");

mod_tip(BlockID.Breastya)

Translation.addTranslation("Breastya", {ru: "бревно рая"});

Block.setRandomTickCallback(BlockID.Breastya, function (x,y,z,id,data,region){
	let index = randomInt (0,7)
	let xx = x + blockCoordsArr [index][0]
	let zz = z + blockCoordsArr [index][1]
	let yy = GenerationUtils.findSurface(xx,y,zz).y
    let block = region.getBlockId(xx,yy,zz)
    if(block == BlockID.crimsonGrass || block == BlockID.crimsonDirt) region.setBlock(x,y,z, BlockID.deadBreastya)
    else if(!Block.isSolid(block) && (region.getBlockId(xx,yy-1,zz) == BlockID.crimsonGrass || region.getBlockId(xx,yy-1,zz) == BlockID.crimsonDirt)) region.setBlock(x,y,z, BlockID.deadBreastya)
	})

//Block.setDestroyTime(BlockID.Breastya, 1);
//Block.setDestroyLevel(BlockID.Breastya, 1);

IDRegistry.genBlockID("Foliage");
Block.createBlock("Foliage", [ {name: "Foliage of paradise", texture: [["Foliage", 0]], inCreative: true} ], "log2");

mod_tip(BlockID.Foliage)

Translation.addTranslation("Foliage of paradise", {ru: "листва"});

IDRegistry.genBlockID("deadBreastya");
Block.createBlockWithRotation("deadBreastya", [ {name: "deadBreastya", texture: [["deadBreastya", 1], ["deadBreastya", 1], ["deadBreastya", 0], ["deadBreastya", 0], ["deadBreastya", 0], ["deadBreastya", 0]], inCreative: true} ], "log");

mod_tip(BlockID.deadBreastya)

Translation.addTranslation("deadBreastya", {ru: "заражённое бревно рая"});

Block.setRandomTickCallback(BlockID.deadBreastya, function (x,y,z,id,data, region){
	let blockTop = region.getBlockId(x,y+1,z)
	if(blockTop == BlockID.Breastya) region.setBlock(x,y+1,z,id)
	else if(blockTop == BlockID.Foliage) region.setBlock(x,y+1,z,BlockID.deadFoliage)
	let blockBot = region.getBlockId(x,y-1,z)
	if(blockBot == BlockID.Breastya) region.setBlock(x,y-1,z,id)
	for(let i = 0; i < 6; i++){
	let index = randomInt (0,5)
	let xx = x+foliageBlockCoords [index][0]
	let yy = y+foliageBlockCoords [index][1]
	let zz = z+foliageBlockCoords [index][2]
	if(region.getBlockId(xx,yy,zz) == BlockID.Foliage){
	region.setBlock(xx,yy,zz,BlockID.deadFoliage)
	break
}}})

//Block.setDestroyTime(BlockID.Breastya, 1);
//Block.setDestroyLevel(BlockID.Breastya, 1);

IDRegistry.genBlockID("deadFoliage");
Block.createBlock("deadFoliage", [ {name: "deadFoliage of paradise", texture: [["deadFoliage", 0]], inCreative: true} ], "log2");

mod_tip(BlockID.deadFoliage)

Translation.addTranslation("deadFoliage of paradise", {ru: "зараженная листва"});

Block.setDestroyTime(BlockID.Foliage, 0.1);
Block.setDestroyTime(BlockID.deadFoliage, 0.1);
ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.Foliage, -1, ["Foliage", 0]);
    BetterFoliage.setupLeavesModel(BlockID.deadFoliage, -1, ["deadFoliage", 0]);
});

Block.registerDropFunctionForID(BlockID.Foliage, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.sapling10, 1, 0]];

});

Block.registerDropFunctionForID(BlockID.Foliage, function(coords, id, data, diggingLevel, toolLevel){

     return [[0, 0, 0]];

});

IDRegistry.genBlockID("sap");
Block.createBlock("sap", [ {name: "sapling", texture: [["Sapling2", 0]], inCreative: false} ],{sound:"grass"});

mod_tip(BlockID.sap)

TileRenderer.setPlantModel(BlockID.sap, 0, "Sapling2", 0);

Block.setDestroyTime(BlockID.sap, 0.2);

Block.createSpecialType({
 opaque: false, 
	lightopacity: 0,
	solid: false,
  lightlevel: 8, 
 	explosionres: 0,
 sound:"grass"
}, "trava");

IDRegistry.genBlockID("trava");
Block.createBlock("trava", [ {name: "trava", texture: [["trava", 0]], inCreative: false} ], "trava");

mod_tip(BlockID.trava)

TileRenderer.setPlantModel(BlockID.trava, 0, "trava", 0);

Block.setDestroyTime(BlockID.trava, 0.2);

Block.setRandomTickCallback(BlockID.trava, function (x,y,z,id,data,region){
	if(region.getBlockId(x, y - 1, z) == BlockID.crimsonGrass || region.getBlockId(x,y-1,z) == BlockID.crimsonDirt) region.setBlock(x,y,z,BlockID.deadtrava)
	})

IDRegistry.genBlockID("deadtrava");
Block.createBlock("deadtrava", [ {name: "deadtrava", texture: [["deadtrava", 0]], inCreative: false} ], "trava");

mod_tip(BlockID.deadtrava)

TileRenderer.setPlantModel(BlockID.deadtrava, 0, "deadtrava", 0);

Block.setDestroyTime(BlockID.deadtrava, 0.2);

IDRegistry.genBlockID("board");
Block.createBlock("board", [ {name: "board", texture: [["board", 0]], inCreative: true} ], "log");

mod_tip(BlockID.board)

Translation.addTranslation("board", {ru: "доски рая"});

IDRegistry.genBlockID("a0");
Block.createBlock("a0", [ {name: "ggg", texture: [["a", 0]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.a0)

Block.setDestroyTime(BlockID.a0, 0.1);

Block.registerDropFunctionForID(BlockID.a0, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.Berries, 1, 0]];

});

IDRegistry.genBlockID("a1");
Block.createBlock("a1", [ {name: "ggg", texture: [["a", 1]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.a1)

Block.setDestroyTime(BlockID.a1, 0.1);

Block.registerDropFunctionForID(BlockID.a1, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.Berries, 3, 0]];

});

Block.setRandomTickCallback(BlockID.a0, function (x,y,z,id,data, region){
        if(Math.random() * 5 < 1){
region.setBlock(x, y, z, BlockID.a1, 0);
     }
     if(region.getBlockId(x,y-1, z) == BlockID.crimsonGrass)
     region.setBlock(x,y,z, BlockID.deada0)
});

Block.setRandomTickCallback(BlockID.a1, function (x,y,z,id,data, region){
     if(region.getBlockId(x,y-1, z) == BlockID.crimsonGrass)
     region.setBlock(x,y,z, BlockID.deada1)
});

Block.setBlockShape(BlockID.a0, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8}) 

Block.setBlockShape(BlockID.a1, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8})

TileEntity.registerPrototype(BlockID.a1, {
     defaultValues: {
     },
     click: function(id, count, data, coords, player){
let b = BlockSource.getDefaultForActor(player);
b.spawnDroppedItem(this.x, this.y+1, this.z, ItemID.Berries, 1, 0, null);
b.setBlock(this.x, this.y, this.z, BlockID.a0, 0);
     }
});

IDRegistry.genBlockID("deada0");
Block.createBlock("deada0", [ {name: "deadggg", texture: [["deada", 0]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.deada0)

Block.setDestroyTime(BlockID.deada0, 0.1);

Block.registerDropFunctionForID(BlockID.deada0, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.deadBerries, 1, 0]];

});

IDRegistry.genBlockID("deada1");
Block.createBlock("deada1", [ {name: "deadggg", texture: [["deada", 1]], inCreative: false} ], {sound:"grass", solid: false});

mod_tip(BlockID.deada1)

Block.setDestroyTime(BlockID.deada1, 0.1);

Block.registerDropFunctionForID(BlockID.deada1, function(coords, id, data, diggingLevel, toolLevel){

     return [[ItemID.deadBerries, 3, 0]];

});

Block.setRandomTickCallback(BlockID.deada0, function (x,y,z,id,data, region){
        if(Math.random() * 5 < 1){
region.setBlock(x, y, z, BlockID.deada1, 0);
     }
});

Block.setBlockShape(BlockID.deada0, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8}) 

Block.setBlockShape(BlockID.deada1, {x: 0.2, y: 0, z: 0.2}, {x: 0.8, y: 0.8, z: 0.8})

TileEntity.registerPrototype(BlockID.deada1, {
     defaultValues: {
     },
     click: function(id, count, data, coords, player){
let b = BlockSource.getDefaultForActor(player);
b.spawnDroppedItem(this.x, this.y+1, this.z, ItemID.deadBerries, 1, 0, null);
b.setBlock(this.x, this.y, this.z, BlockID.deada0, 0);
     }
});


IDRegistry.genBlockID("altar");
Block.createBlock("altar", [ {name: "Altarial block", texture: [["stone-1", 0], ["stone-1", 0], ["stone-1", 0]], inCreative: true}], {solid:true});

mod_tip(BlockID.altar)

Translation.addTranslation("Altarial block", {ru: "алтарьный блок"});

Block.setDestroyTime(BlockID.altar, 1);
ToolAPI.registerBlockMaterial(BlockID.altar, "stone", 1, true);

IDRegistry.genBlockID("altar1");
Block.createBlock("altar1", [ {name: "Altarial block", texture: [["rityalBlock", 0], ["rityalBlock", 0], ["rityalBlock", 0]], inCreative: true} ], {solid: true});

mod_tip(BlockID.altar1)

Block.setDestroyTime(BlockID.altar1, 1);
ToolAPI.registerBlockMaterial(BlockID.altar1, "stone", 1, true);

IDRegistry.genBlockID("altar3");
Block.createBlock("altar3", [ {name: "Altarial block", texture: [["rityalBlock", 2], ["rityalBlock", 2], ["rityalBlock", 2]], inCreative: true} ], {solid: true});

mod_tip(BlockID.altar3)

Block.setDestroyTime(BlockID.altar3, 1);
ToolAPI.registerBlockMaterial(BlockID.altar3, "stone", 1, true);

IDRegistry.genBlockID("stone2"); 
Block.createBlock("stone2", [{name: "Stone of paradise", texture: [["holystone", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.stone2)

Translation.addTranslation("Stone of paradise", {ru: "камень рая"});

IDRegistry.genBlockID("ore"); 
Block.createBlock("ore", [{name: "Ore of paradise", texture: [["ore", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.ore)

Translation.addTranslation("Ore of paradise", {ru: "руда рая"});

ModAPI.addAPICallback("ICore", function (api){
    IDRegistry.genItemID("crushedOreParadise"); 
    Item.createItem("crushedOreParadise", "crushed ore of paradise", {name: "crushed_ore_paradise", meta: 0}, {stack: 64});
    mod_tip(ItemID.crushedOreParadise)
    Translation.addTranslation("crushed ore of paradise", {ru: "раздробленная руда рая"});
    Callback.addCallback("PostLoaded", function (){
        Recipes.addFurnace(ItemID.crushedOreParadise, ItemID.clitok, 0);
        api.Recipe.addRecipeFor("macerator", BlockID.ore, {id: ItemID.crushedOreParadise, count: 3, data: 0});
    });
});

IDRegistry.genBlockID("blockmetal"); 
Block.createBlock("blockmetal", [{name: "Blocks of divine methal", texture: [["blockmetal", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.blockmetal)

Translation.addTranslation("Blocks of divine methal", {ru: "блок божественного метала"});

Block.setDestroyTime(BlockID.blockmetal, 1);
ToolAPI.registerBlockMaterial(BlockID.blockmetal, "stone", 1, true);

IDRegistry.genBlockID("block1"); 
Block.createBlock("block1", [{name: "Controller of the worlds", texture: [["altar", 0]],inCreative: true}], "opaque");

mod_tip(BlockID.block1)

Translation.addTranslation("Controller of the worlds", {ru: "контролер миров"});

ToolAPI.registerBlockMaterial(BlockID.stone2, "stone", 1, true);
ToolAPI.registerBlockMaterial(BlockID.ore, "stone", 3, true);

Block.setDestroyTime(BlockID.stone2, 2);
Block.setDestroyTime(BlockID.block1, 99999999999);
Block.setDestroyLevel(BlockID.stone2, 1);
Block.setDestroyTime(BlockID.ore, 3);
Block.setDestroyLevel(BlockID.ore, 3);


IDRegistry.genBlockID("kristalFire");
Block.createBlock("kristalFire", [ {name: "crictal fire", texture: [["crictal",0]], inCreative: false} ], {solid: false});

mod_tip(BlockID.kristalFire)
TileRenderer.setPlantModel(BlockID.kristalFire, 0, "crictal", 0);

Block.registerDropFunctionForID(BlockID.kristalFire, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalfire, 1, 0]];
});
Block.setDestroyTime(BlockID.kristalFire, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalFire, "stone", 0.1, true);

IDRegistry.genBlockID("kristaldirt");
Block.createBlock("kristaldirt", [ {name: "Кристалл земли", texture: [["crictal" ,2]], inCreative: false} ], {solid: false});

mod_tip(BlockID.kristaldirt)
TileRenderer.setPlantModel(BlockID.kristaldirt, 0, "crictal", 2);
Block.registerDropFunctionForID(BlockID.kristaldirt, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalearth, 1, 0]];
});

Block.setDestroyTime(BlockID.kristaldirt, 1);
ToolAPI.registerBlockMaterial(BlockID.kristaldirt, "stone", 0.1, true);

IDRegistry.genBlockID("kristalLight");
Block.createBlock("kristalLight", [ {name: "проигрыватель", texture: [["crictal", 3]], inCreative: false} ], {solid: false});

mod_tip(BlockID.kristalLight)
TileRenderer.setPlantModel(BlockID.kristalLight, 0, "crictal", 3);
Block.registerDropFunctionForID(BlockID.kristalLight, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalLightning, 1, 0]];
});

Block.setDestroyTime(BlockID.kristalLight, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalLight, "stone", 0.1, true);

IDRegistry.genBlockID("kristalwind");
Block.createBlock("kristalwind", [ {name: "проигрыватель", texture: [["crictal", 1]], inCreative: false} ], {solid: false});
mod_tip(BlockID.kristalwind)
TileRenderer.setPlantModel(BlockID.kristalwind, 0, "crictal", 1);
Block.registerDropFunctionForID(BlockID.kristalwind, function(coords, id, data, diggingLevel, toolLevel){
     return [[ItemID.crystalWind, 1, 0]];
});

Block.setDestroyTime(BlockID.kristalwind, 1);
ToolAPI.registerBlockMaterial(BlockID.kristalwind, "stone", 0.1, true);

IDRegistry.genBlockID("rityal1"); 
Block.createBlock("rityal1", [{name: "magis altar block", texture: [["nis", 0],["vverx", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true}], { opaque: true, lightopacity: 1, renderlayer: 2, solid: true});

mod_tip(BlockID.rityal1)
Translation.addTranslation("magis altar block", {ru: "магический ритуальный блок"});

Block.setDestroyTime(BlockID.rityal1, 1);
ToolAPI.registerBlockMaterial(BlockID.rityal1, "stone", 1, true);

var Render = {
setAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					
					model.addBox (0/16, 0.88, 0/16, 16/16, 1, 1/16, blockID, 0);
					  model.addBox (0/16, 0.88, 15/16, 16/16, 1, 16/16, blockID, 0);
					   model.addBox (0/16, 0.88, 1/16, 1/16, 1, 15/16, blockID, 0);
					    model.addBox (15/16, 0.88, 1/16, 16/16, 1, 15/16, blockID, 0);
				   model.addBox(0/16, 0.79, 0/16, 16/16, 0.88, 16/16, blockID, 0);
                 model.addBox(3/16, 0.21, 3/16, 13/16, 0.78, 13/16, blockID, 0);
			   model.addBox(0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					
					
					
     }
},

setRackRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					 model.addBox (0/16, 0, 0/16, 16/16, 0.133, 16/16, blockID, 0);
					  model.addBox (4/16, 0.134, 4/16, 12/16, 0.246, 12/16, blockID, 0);
					  model.addBox (10/16, 0.247, 10/16, 6/16, 0.95, 6/16, blockID, 0);
			
					  model.addBox (4/16, 0.96, 4/16, 12/16, 1, 12/16, blockID, 0);
     }
},

setRitualAltarRender: function(blockID, normal){
    if(normal){
     let render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(blockID, -1, render); 
     let model = BlockRenderer.createModel(); 
           render.addEntry(model);
                    
					model.addBox (0/16, 0, 0/16, 16/16, 0.20, 16/16, blockID, 0);
					model.addBox (4/16, 0.21, 4/16, 12/16, 0.80, 12/16, blockID, 0);
					model.addBox (0/16, 0.81, 0/16, 16/16, 1, 16/16, blockID, 0);
					
     }
},

setRitualAltarControllerRender: function(blockID, normal){
    if(normal){
     Block.setBlockShape(blockID, {x: 0, y: 0, z: 0}, {x: 1, y: 0.4, z: 1});			
     }
}
};

Render.setRitualAltarRender(BlockID.rityal1, true);

TileEntity.registerPrototype(BlockID.rityal1, {
    defaultValues: {
        item: {
            id: 0,
            data: 0
        }
    }, 
    init: function(){
        this.isItem();
        if(this.data.item){
            if(this.data.item.id) this.networkData.putInt("itemId", this.data.item.id);
            if(this.data.item.data) this.networkData.putInt("itemData", this.data.item.data);
            this.networkData.sendChanges();
        }
    }, 
    client: {
        updateModel: function() {
            var id = Network.serverToLocalId(this.networkData.getInt("itemId"));
            var data = this.networkData.getInt("itemData");
            this.model.describeItem({
                id: id,
                count: 1,
                data: data, 
                size: 1,
                rotation: [3.14/2, 0, 0]
            });
        },
        load: function() {
            this.model = new Animation.Item(this.x + .5, this.y + 1.02, this.z + .5);
            this.updateModel();
            this.model.load();
            var that = this;
            this.networkData.addOnDataChangedListener(function(data, isExternal) {
                that.updateModel();
            });
        },
        unload: function() {
            this.model.destroy();
        }
    },
    customAnimation: function(item){
        this.networkData.putInt("itemId", item.id);
        this.networkData.putInt("itemData", item.data);
        this.networkData.sendChanges();
        this.data.item = {
            id: item.id,
            data: item.data
        };
    }, 
    animation: function(item){
        this.networkData.putInt("itemId", item.id);
        this.networkData.putInt("itemData", item.data);
        this.networkData.sendChanges();
        this.data.item = {
            id: item.id,
            data: item.data
        };
    }, 
    drop: function(player){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        let PA = new PlayerActor(player);
        if(PA.getGameMode() == 0){
            this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
        }
        for(var i in Idal.arr){
            if(this.data.item.id == Idal.arr[i]){
                 this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
            }
        }
        this.data.item = {
            id: 0,
            data: 0
        };
    }, 
    tick: function (){
        for(var i in Idal.arr){
            if(this.data.item.id == Idal.arr[i] && this.data.item.data <= 999){
                if(World.getThreadTime()%60 == 0){
                     if(Dungeon.isStructure("IdalUpdate.json", this.x, this.y, this.z, 0, this.dimension)){
                         Mp.spawnParticle(ParticlesAPI.particles, this.x + Math.random()*3-Math.random()*2, this.y - 0.5, this.z + Math.random()*3-Math.random()*2, 0, Math.random()/9, 0);
                        Callback.invokeCallback("RitualDC", 0, "idal", {x: this.x, y: this.y, z: this.z});
 this.data.item.data++;
                         if(Math.random()<=0.00){
                             this.blockSource.setBlock(this.x+2, this.y+1, this.z+2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x + 2, this.y + 1, this.z + 2, 0, Math.random()/9, 0);
                         }
                         if(Math.random()<=0.005){
                             this.blockSource.setBlock(this.x-2, this.y+1, this.z+2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x - 2, this.y + 1, this.z + 2, 0, Math.random()/9, 0);
                         }
                         if(Math.random()<=0.005){
                             this.blockSource.setBlock(this.x+2, this.y+1, this.z-2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x + 2, this.y + 1, this.z - 2, 0, Math.random()/9, 0);
                         }
                         if(Math.random()<=0.005){
                             this.blockSource.setBlock(this.x-2, this.y+1, this.z-2, 0, 0);
                             Mp.spawnParticle(ParticlesAPI.forest, this.x - 2, this.y + 1, this.z - 2, 0, Math.random()/9, 0);
                         }
                    }
                }
            }
        }
    },
    destroyAnimation: function(){
        this.networkData.putInt("itemId", 0);
        this.networkData.putInt("itemData", 0);
        this.networkData.sendChanges();
        this.data.item = {
            id: 0,
            data: 0
        };
    }, 
    isItem: function(){
        if(!this.data.item) this.data.item = {id: 0, data: 0};
        if(!this.data.item.id) this.data.item.id = 0;
        if(!this.data.item.data) this.data.item.data = 0;
    },
    click: function(id, count, data, coords, player) {
        Game.prevent();
        this.isItem();
        if(this.data.item.id != 0){
            if(id != ItemID.RitualActivator)
                this.drop(player);
        }else{
            if(id != ItemID.RitualActivator){
                let item = Entity.getCarriedItem(player);
                delItem(player, {id:id,data:data,count:count}) ;
                let PA = new PlayerActor(player);
                if(PA.getGameMode() != 0){
                    for(var i in Idal.arr){
                        if(id == Idal.arr[i]){
                             Entity.setCarriedItem(player, item.id, item.count-1, item.data);
                        }
                    }
                }
                this.animation(item);
            }
        }
    },
    destroyBlock: function(coords, player){
        let PA = new PlayerActor(player);
        var B = new BlockSource.getDefaultForActor(player);
        if(PA.getGameMode() == 0){
            B.spawnDroppedItem(this.x, this.y+1,this.z, this.data.item.id, 1, this.data.item.data, null);
        }
    }
});

let blockCoordsArr = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]

Block.setRandomTickCallback(BlockID.paradiseGrass, function (x,y,z, id, data, region){
	let surfaceBlock = region.getBlockId(x, y+1, z)
	if(Block.isSolid(surfaceBlock)) region.setBlock(x,y,z,BlockID.paradiseDirt)
	for(let i = 0; i < 8;i++){
	let index = randomInt (0, 7)
	let xx = x + blockCoordsArr [index][0]
	let zz = z + blockCoordsArr [index][1]
	let yy = GenerationUtils.findSurface(xx,y,zz).y
    let block = region.getBlock(xx,yy,zz)
    if((yy - y) <= 1 && (yy-y) >=-1){
    if(block.id == BlockID.paradiseDirt ){
region.setBlock(xx,yy,zz, id)
break
}
    else if(!Block.isSolid(block.id) && region.getBlockId(xx,yy-1,zz) == BlockID.paradiseDirt){
region.setBlock(xx,yy-1,zz,id)
break
}}
    }
})

Block.setRandomTickCallback(BlockID.crimsonGrass, function (x,y,z, id, data, region){
	let surfaceBlock = region.getBlockId(x, y+1, z)
	if(Block.isSolid(surfaceBlock)) region.setBlock(x,y,z,BlockID.crimsonDirt, data)
	else if(Math.random() > 0.4 && data<3) region.setBlock(x,y,z,id,data+1)
	for(let i = 0; i < 8;i++){
	let index = randomInt (0, 7)
	let xx = x + blockCoordsArr [index][0]
	let zz = z + blockCoordsArr [index][1]
	let yy = GenerationUtils.findSurface(xx,y,zz).y
    let block = region.getBlock(xx,yy,zz)
    if((yy-y)<=1&&(y-yy)>=-1){
    if(block.id == BlockID.paradiseGrass){
region.setBlock(xx,yy,zz,id,0)
break
}
    else if(block.id == BlockID.crimsonDirt && block.data == data){ 
region.setBlock(xx,yy,zz, id, data)
    break
}
    else if(!Block.isSolid(block.id) && region.getBlockId(xx,yy-1,zz) == BlockID.paradiseGrass){
    region.setBlock(xx,yy-1,zz,id,0)
    break
    }
    else if(block.id == BlockID.paradiseDirt){
region.setBlock(xx,yy,zz,BlockID.crimsonDirt, 0)
break
}
       }
    }
})

Block.setRandomTickCallback(BlockID.paradiseDirt, function (x,y,z,id,data, region){
	if(Math.random()<0.1){
	let block = region.getBlockId(x,y+1,z)
	if(block == BlockID.crimsonGrass || block == BlockID.crimsonDirt)
	region.setBlock(x,y,z, BlockID.crimsonDirt)
	}
	})
	

Block.setRandomTickCallback(BlockID.crimsonDirt, function (x,y,z,id,data, region){
	if(Math.random()>0.7 && data < 3)
	region.setBlock(x,y,z,id,data+1)
	});

let foliageBlockCoords = [
[0,0,1],
[1,0,0],
[-1,0,0],
[0,0,-1],
[0,1,0],
[0,-1,0]
]
Block.setRandomTickCallback(BlockID.deadFoliage, function (x,y,z,id,data,region){
	for(let i = 0; i < 6; i++){
	let index = randomInt (0,5)
	let xx = x+foliageBlockCoords [index][0]
	let yy = y+foliageBlockCoords [index][1]
	let zz = z+foliageBlockCoords [index][2]
	if(region.getBlockId(xx,yy,zz) == BlockID.Foliage){
	region.setBlock(xx,yy,zz,id)
	break
}}});

var stories = {}

Saver.addSavesScope("stories",
    function read(scope) {
        stories = scope.stories || {};
    },
    function save() {
        return {
            stories: stories,
        };
    }
);

function Story(storyName){
this.name = storyName
if(!stories[this.name]){
stories[storyName] = {}
}
this.isCompletedStory = function(player, name){
	return stories [this.name][player][name]
	}
this.createEvent = function (name){
	var players = Network.getServer().getConnectedClients();
	if(!players.size()){
		let local = Player.get()
		if(!stories[this.name][local])
		stories[this.name][local] = {}
		if(!stories[this.name][local][name])
		stories[this.name][local][name] = false;
		}
	     for (let i = 0; i < players.size(); i++) {
		var player = players.get(i).getPlayerUid();
		if(!stories[this.name][player]){
		stories[this.name][player] = {}
		}
	if(!stories[this.name][player][name])
	stories[this.name][player][name] = false
}
}
this.completeStory = function(player, key){
	if(stories[this.name][player])
	stories[this.name][player][key] = true
	}
}
let wandererStory
Callback.addCallback("LevelLoaded", function (){
wandererStory = new Story("wandererStory");
wandererStory.createEvent("start")
wandererStory.createEvent("theFirstMeeting")
wandererStory.createEvent("theFirstMeeting2")
wandererStory.createEvent("theFirstMeeting3")
wandererStory.createEvent("giveStone")
wandererStory.createEvent("giveStone2")
wandererStory.createEvent("giveStone3")
wandererStory.createEvent("howToFix")
wandererStory.createEvent("howToFix2")
wandererStory.createEvent("howToFix3")
wandererStory.createEvent("platform")
})

Callback.addCallback("PlayerAttack", function(attacker, victim){
	if(Entity.getCompoundTag(victim).getString("identifier") == "test:man"){
	if(wandererStory.isCompletedStory(attacker, "start") && !wandererStory.isCompletedStory(attacker, "theFirstMeeting")){
      Mp.message(attacker, "[???]: Ай, кто это?")
	}
	else if(!wandererStory.isCompletedStory(attacker, "theFirstMeeting3")){
		wandererStory.completeStory(attacker,"theFirstMeeting3")
	Mp.message(attacker,"[???]: Все! Хватит!")
	let dialog = ["Меня зовут Dray", "Не мог бы ты помочь мне, найти один камень?", "Поможешь?    Класс!","Давай сначала я расскажу, что это вообще за камень...","Когда я был маленьким, я со своим братом играли на этой поляне", "Играя, мы надкнулись на кирпичное здание с сундуком", "В сундуке был синий камень. Мой брат решил взять его и отнести домой", "Прошло какое-то время", "Мой брат сделал из этого камня украшение", "Камень был действительно красивым...", "Одной ночью, мы вышли на охоту и по пути встретили здание, похоже на то, которое мы нашли в детстве", "Но зайдя внутрь, вместо сундука мы обнаружили...", "*Задумался*", "Это был какой-то синий алтарь, укутанный ярким светом", "Такого же цвета, что и камень моего брата", "Брат поднес свой камень, к этому алтарю и...", "Я его больше не видел", "Уже 12 лет, как его нет с нами", "Возможно, я его уже никогда не увижу", "Но я хотя бы буду знать, что произошло с ним в ту ночь", "Только с помощью этого камня, я узнаю, что произошло с моим братом 12 лет назад", "Я буду ждать тебя"]
	for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(attacker,"Dray: "+text)
			}, (1+i)*100)
		}
		setTimeout (function (){
			wandererStory.completeStory(attacker,"theFirstMeeting2")
			}, dialog.length*100)
	}
	wandererStory.completeStory(attacker,"theFirstMeeting")
	}
	})
	
Callback.addCallback("EntityInteract", function (entity, player, coords){
	if(Entity.getCompoundTag(entity).getString("identifier") == "test:man"){
		if(wandererStory.isCompletedStory(player, "theFirstMeeting2") && !wandererStory.isCompletedStory(player, "giveStone")){
			let item = Entity.getCarriedItem(player)
			if(item.id == ItemID.breakGem){
				Entity.setCarriedItem(player, 0, 0, 0)
				Entity.setCarriedItem(entity, ItemID.breakGem, 1, 0)
				let dialog = ["Хмм", "Да, это тот самый камень. Но...", "Кажется он давным-давно сломан", "Возможно я найду способ починить его", "Спасибо, возвращайся позже", "Возможно, тебе тоже, когда-нибудь, пригодится такой же камень"]
				for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(player,"Dray: "+text)
			}, i*110)
		}
		wandererStory.completeStory(player, "giveStone")
		setTimeout (function (){
			wandererStory.completeStory(player, "giveStone2")
			}, 8000)
		setTimeout (function (){
			wandererStory.completeStory(player, "giveStone3")
			Entity.setCarriedItem(entity, 0,0,0)
			}, dialog.length*110)
				}
			}
			else if(wandererStory.isCompletedStory(player, "theFirstMeeting2") && wandererStory.isCompletedStory(player, "giveStone3") && !wandererStory.isCompletedStory(player, "giveStone2")){
				Mp.message(player,"Я ещё не нашел способ починить камень, возвращайся позже")
			}
			else if(wandererStory.isCompletedStory(player, "giveStone2") && !wandererStory.isCompletedStory(player, "howToFix")) {
				let dialog = ["Привет", "Ты какраз вовремя", "Я долго изучал этот камень и заметил, что по структуре этот камень схож с алмазом", "Возможно, если как-то заполнить трещины, алмазной пылью, получится починить его!", "Полагаю, что одной алмазной пыли не достаточно, нужны хоть какие-то познания в магии", "Надо подучиться и поэкспериментировать", "Если у тебя все получится, дай знать!", "Удачи тебе в познании магии"]
	for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(player,"Dray: "+text)
			}, i*110)
		}
		setTimeout (function (){
			wandererStory.completeStory(player, "howToFix3")
			}, dialog.length*110)
		wandererStory.completeStory(player, "howToFix")
			}
		else if (wandererStory.isCompletedStory(player, "howToFix3") && !wandererStory.isCompletedStory(player, "howToFix2")){
			let item = Entity.getCarriedItem(player)
			if(item.id == ItemID.Gem){
				wandererStory.completeStory(player, "howToFix2")
				let dialog = ["О, это ты?", "Давно не виделись", "Вижу ты смог починить этот камень", "Я тоже! Вот, смотри", "Если хочешь посмотреть на камень в действии, тебе надо найти кирпичное здание с синим алтарем по центру", "Их ещё много осталось по миру", "Почти все алтари идеально сохранились", "Я уже побывал.. Ой, тоесть..., Я уже знаю что делает камень", "Не хочу портить тебе впечатление", "Когда найдешь алтарь, просто поднеси его к нему", "Спасибо тебе!", "Думаю на этом наши пути расходятся", "Вот держи это в качестве благодарности от меня"]
				for(let i = 0; i < dialog.length; i++){
		let text = dialog [i]
		setTimeout (function (){
			Mp.message(player,"Dray: "+text)
			}, i*110)
		}
		setTimeout (function (){
			Entity.setCarriedItem(entity, ItemID.Gem, 1, 0)
			}, 3*110)
		setTimeout (function (){
			Entity.setCarriedItem(entity, 0, 0, 0)
			}, 5*110)
		setTimeout (function (){
			(new PlayerActor (player)).addItemToInventory(ItemID.regularBag, Math.random()*15, 0, null, true)
			}, dialog.length * 110)
				}
			}
		}
	})
	
	Callback.addCallback("ServerPlayerTick", function (player){
		if(World.getThreadTime()%20==0){
		if(wandererStory.isCompletedStory(player, "theFirstMeeting") && !wandererStory.isCompletedStory(player, "howToFix2")){
		let ents = Entity.getAllInRange(Entity.getPosition(player), 10)
		for(let i in ents){
		let entity = ents[i]
		if(Entity.getCompoundTag(entity).getString("identifier") == "test:man"){
			Entity.addEffect(entity, 2, 100, 40, false, false)
			        }
		        }
			}
		}
	})

function getId(id){
        if(typeof id == "string")
            return BlockID[id];
        else
            return id;
}

function setStructure(name, x, y, z, region){
        region = region || BlockSource.getCurrentWorldGenRegion();
        let stru = FileTools.ReadJSON(__dir__+"/structure/"+name+".dc");
        for(let i in stru){
            region.setBlock(parseInt(stru[i][1].split(".")[1]) + x, parseInt(stru[i][1].split(".")[2]) + y, parseInt(stru[i][1].split(".")[3]) + z, new BlockState(getId(stru[i][0]), stru[i][2]));
     }
}

Callback.addCallback("ItemUse", function (c, i, b, is, p){
if(i.id == BlockID.electricFurnace && !wandererStory.isCompletedStory(p, "start")){
	let dimension = Entity.getDimension(p)
	for(let i = 0; i < 100; i++){
		let rx = randomInt (-100, 100)
		let rz = randomInt (-100, 100)
		if((rx > 30 || rx < -30) && (rz > 30 || rz < -30)){
			rx+=c.x
			rz+=c.z
			let y = GenerationUtils.findSurface(rx, c.y, rz).y;
			if(BlockSource.getDefaultForActor(p).getBlockId(rx,y,rz) == VanillaBlockID.grass){
			Game.message(rx+" "+y+" "+rz)
			BlockSource.getDefaultForActor(p). spawnEntity(rx,c.y+1,rz,'test:man')
		    setStructure("house", rx, y, rz, 0, dimension)
			wandererStory.completeStory(p, "start")
			break
                }
			}
		}
	}
})

let cleaning = false
let isDeads = []

Callback.addCallback("ServerPlayerTick", function (player, isDead){
	if(World.getThreadTime()%200 == 0 && ! cleaning && isDeads.indexOf(player) == -1){
		let pos = Entity.getPosition(player)
		let drops = Entity.getAllInRange(pos, 40)
		let dropss = []
		for(let i in drops){
			let drop = drops[i]
			if(Entity.getType(drop) == 64){
				dropss.push(drop)
				}
			}
			if(dropss.length > 10){
				cleaning = true
				Mp.message(player, "§cСлишком много дропа!!!")
				setTimeout (function (){
					Mp.message(player, "§eОтойдите, проводится очистка дропа")
				}, 60)
				let aro = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
				for(let s = 0; s <= 10; s++){
					let sec = aro[s]
					setTimeout (function (){
						Mp.tipMessage(player, "§bОсталось "+sec+" сек.")
				    }, 80 + (20 * s))
				}
				setTimeout (function (){
					for(let i in dropss){
						Entity.remove(dropss[i])
				        }
				Mp.message(player, "§aОчистка завершена!")
				cleaning = false
				}, 320)
			}
		}
	})
	
Callback.addCallback("EntityDeath", function (entity){
	if(Entity.getType(entity) == 63){
		isDeads.push(entity)
		Mp.message(entity, "§9Очистка дропа отключена")
		setTimeout (function (){
			isDeads.splice(isDeads.indexOf(entity), 1)
			Mp.message(entity, "§9Очистка дропа включена")
		}, 1000)
	}
})
	




// file: block/generation.js

Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ, random){
if (random.nextInt(10) <= 2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 0, 40);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlockID(coords.x, coords.y, coords.z)==1){
if(World.getBlockID(coords.x, coords.y+1, coords.z)==0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristaldirt, 0);
} 
}
} 
});

Callback.addCallback("GenerateNetherChunk", function(chunkX, chunkZ, random){
if (random.nextInt(10) <= 2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 0, 40);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlockID(coords.x, coords.y, coords.z)==87){
if(World.getBlockID(coords.x, coords.y+1, coords.z)==0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalFire, 0);
} 
}
} 
});



Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ, random){
if (random.nextInt(10) <= 2){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 70, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        
if(World.getBlockID(coords.x, coords.y, coords.z)==1){
if(World.getBlockID(coords.x, coords.y+1, coords.z)==0){
World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalwind, 0);
} 
}
} 
});











// file: block/key.js

IDRegistry.genBlockID("brickkey");
Block.createBlock("brickkey", [ {name: "brickkey", texture: [["brickBlock", 1],["brickBlock", 1],["keyBlock", 0],["keyBlock", 0],["brickBlock", 0]], inCreative: false}]);

mod_tip(BlockID.brickkey)

Translation.addTranslation("brickkey", {ru: "блок с входом под ключ"});

Block.setDestroyTime(BlockID.brickkey, 9999999999999);

var renderChest = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.brickkey, -1, renderChest); 
     var modelChest = BlockRenderer.createModel(); 
           renderChest.addEntry(modelChest);
modelChest.addBox (0/16, 0, 6/16, 16/16, 1, 10/16, BlockID.brickkey, 0);

IDRegistry.genBlockID("brick3");
Block.createBlock("brick3", [ {name: "brickkey2", texture: [["brickBlock", 1],["brickBlock", 1],["brick2", 0],["brick2", 0],["brickBlock", 0]], inCreative: false}]);

mod_tip(BlockID.brick3)

Block.setDestroyTime(BlockID.brick3, 9999999999999);

Translation.addTranslation("brickkey2", {ru: "тонкая стена"});

var renderChest2 = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.brick3, -1, renderChest2); 
     var modelChest2 = BlockRenderer.createModel(); 
           renderChest2.addEntry(modelChest2);
modelChest2.addBox (0/16, 0, 6/16, 16/16, 1, 10/16, BlockID.brick3, 0);





// file: block/storageMana.js

IDRegistry.genBlockID("manaStorage");
Block.createBlock("manaStorage", [ {name: "mana Storage", texture: [["brick2", 0]], inCreative: true}]);

mod_tip(BlockID.manaStorage)

Translation.addTranslation("mana Storage", {ru: "хранилище маны"});

var Particles = ModAPI.requireGlobal("Particles");
TileEntity.registerPrototype(BlockID.manaStorage, {

     defaultValues: {
         mode: "nothing",
         manaStorage: 0,
         player: null 
     },
     isData: function(){
     },
     tick: function(){
         if(this.data.mode=="give"){
             let mana = ManaCore.get(this.data.player);
             let per1 = mana.countMax;
             per1 = mana.countMax / 100 * 5; 
             per1 = mana.countMax - per1;
             if(mana.count<=per1-1){
                 if(this.data.manaStorage>=1){
                     mana.count++;
                     ManaCore.set(this.data.player, mana);
                     this.data.manaStorage--;
                     let pos = Entity.getPosition(this.data.player);
                     ParticlesAPI.coords(ParticlesAPI.rai, this.x, this.y, this.z, pos.x, pos.y, pos.z);
                 }
             }
         }
         if(this.data.mode=="accumulate"){
             let mana = ManaCore.get(this.data.player);
             if(this.data.manaStorage<=19999){
                 if(mana.count>=1){
                     mana.count--;
                     this.data.manaStorage++;
                     ManaCore.set(this.data.player, mana);
                     let pos = Entity.getPosition(this.data.player);
                     ParticlesAPI.coords(ParticlesAPI.rai, pos.x, pos.y, pos.z, this.x, this.y, this.z);
                 }
             }
         }
     },
     click: function(id, count, data, coords, player){
        if(DA) ac.give(player,  "DungeonAchievement", "storageMagic");
        if(Entity.getSneaking(player)==true){
             Mp.message(player,  "mana: " + this.data.manaStorage + ";");
         }else{
             if(this.data.player != player){
                 this.data.player = player;
                 Mp.message(player, "блок привязан к вам");
             }else{
                 let v = true;
                 if(this.data.mode=="accumulate"){
                     if(v==true){
                         v = false;
                         this.data.mode="give";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 if(this.data.mode=="nothing"){
                     if(v==true){
                         v = false;
                         this.data.mode="accumulate";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 if(this.data.mode=="give"){
                     if(v==true){
                         v = false;
                         this.data.mode="nothing";
                         Mp.message(player, "вы сменили рижим на "+this.data.mode);
                     }
                 }
                 v = true;
             }
         }
     }
});

var mesh2 = new RenderMesh();
var renderAPI2 = new ICRender.Model(); 
BlockRenderer.setStaticICRender(BlockID.manaStorage, -1, renderAPI2); 
var modelAPI2 = new BlockRenderer.Model(mesh2);  

           renderAPI2.addEntry(modelAPI2);
mesh2.importFromFile(__dir__ + "/res/model/magis_storage.obj", "obj", null);
mesh2.setBlockTexture("storage-mana", 0);






























// file: block/Rityal1.js

IDRegistry.genBlockID("statua");
Block.createBlock("statua", [ {name: "The statue of the Nezhi", texture: [["ctena", 1],["ctena", 1],["vvex", 1]], inCreative: true}]);

mod_tip(BlockID.statua)

Translation.addTranslation("The statue of the Nezhi", {ru: "статуя нежити"});

var render = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.statua, -1, render); 
     var model = BlockRenderer.createModel(); 
           render.addEntry(model);
model.addBox (6/16, 0, 6/16, 10/16, 0.29, 10/16, BlockID.statua, 0);
model.addBox (3/16, 0.30, 3/16, 13/16, 0.80, 13/16, BlockID.statua, 0);

IDRegistry.genBlockID("ritualGL");
Block.createBlock("ritualGL", [ {name: "Pedestal for statues", texture: [["testN", 0],["testV", 0],["testC", 0]], inCreative: true}]);

mod_tip(BlockID.ritualGL)

Translation.addTranslation("Pedestal for statues", {ru: "пьедестал длс статуй"});

var render1 = new ICRender.Model(); 
     BlockRenderer.setStaticICRender(BlockID.ritualGL, -1, render1); 
     var model1 = BlockRenderer.createModel(); 
           render1.addEntry(model1);
model1.addBox (2/16, 0, 2/16, 14/16, 0.90, 14/16, BlockID.ritualGL, 0);
model1.addBox (3/16, 0.91, 3/16, 13/16, 1, 13/16, BlockID.ritualGL, 0);

model1.addBox (0/16, 0, 2/16, 16/16, 0.50, 14/16, BlockID.ritualGL, 0);

model1.addBox (16/16, 0, 2/16, 0/16, 0.50, 14/16, BlockID.ritualGL, 0);

model1.addBox (0/16, 0, 16/16, 16/16, 0.50, 0/16, BlockID.ritualGL, 0);

model1.addBox (0/16, 0, 0/16, 16/16, 0.50, 16/16, BlockID.ritualGL, 0);

var Ritual = {};
Ritual.arr1 = [];
Ritual.addCraft1 = function (id, obj, func){
    Ritual.arr1.push({id: id, obj: obj, func: func});
};
Ritual.get1 = function (it){
    for(var i in Ritual.arr1){
        if(Ritual.arr1[i].id == it){
            return Ritual.arr1[i];
        }else{
            return {id: 0, obj: {xp: 0, xm: 0, zp: 0, zm: 0, mana: 0}, func: function(player, x, y, z){}};
        }
    }
};
TileEntity.registerPrototype(BlockID.statua, {
    defaultValues: {
        active: false,
        mana: 0, 
        player: null
    },
    check: function (id, x, y, z){
        if(this.blockSource.getBlockId(x, y, z)==BlockID.rityal1){
            if(TileEntity.getTileEntity(x, y, z, this.blockSource).data.item.id == id){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    },
    click: function (id, count, data, coords, player){
        if(id == ItemID.RitualActivator){
            this.data.active = true;
            this.data.player = player;
        }
    },
    manaAdd: function (x, y, z){
        if(this.blockSource.getBlockId(x, y, z)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(x, y, z, this.blockSource).data.manaStorage <= 19999){
                let mana = ManaCore.get(this.data.player);
                if(mana.count>=1){
                    let pos = Entity.getPosition(this.data.player);
                    ParticlesAPI.coords(ParticlesAPI.rai, pos.x, pos.y, pos.z, x, y, z);
                    mana.count--;
                    ManaCore.set(this.data.player, mana);
                    TileEntity.getTileEntity(x, y, z, this.blockSource).data.manaStorage++;
                }
            }
        }
    },
    getMana: function (){
        let mana = 0;
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z+2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x+2, this.y-1, this.z+2, this.blockSource).data.manaStorage;
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z+2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x-2, this.y-1, this.z+2, this.blockSource).data.manaStorage;
        }
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z-2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x+2, this.y-1, this.z-2, this.blockSource).data.manaStorage;
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z-2)==BlockID.manaStorage){
            mana += TileEntity.getTileEntity(this.x-2, this.y-1, this.z-2, this.blockSource).data.manaStorage;
        }
        return mana;
    },
    getCountStorage: function (){
        let count = 0;
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z+2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x+2, this.y-1, this.z+2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z+2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x-2, this.y-1, this.z+2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        if(this.blockSource.getBlockId(this.x+2, this.y-1, this.z-2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x+2, this.y-1, this.z-2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        if(this.blockSource.getBlockId(this.x-2, this.y-1, this.z-2)==BlockID.manaStorage){
            if(TileEntity.getTileEntity(this.x-2, this.y-1, this.z-2, this.blockSource).data.manaStorage>=1){
                count++;
            }
        }
        return count;
    },
    delMana: function (x, y, z){
        if(this.blockSource.getBlockId(x, y, z)==BlockID.manaStorage){
            ParticlesAPI.coords(ParticlesAPI.rai, x, y, z, this.x, this.y, this.z);
            let te = TileEntity.getTileEntity(x, y, z, this.blockSource);
            let mana = this.data.mana / this.getCountStorage();
            if(this.data.mana<=te.data.manaStorage){
                te.data.manaStorage = 0;
                this.data.mana = 0;
            }else{
                te.data.manaStorage = 0;
                this.data.mana = 0;
            }
            
        }
    },
    tick: function (){
        if(this.data.player){
            for(let i in Ritual.arr1){
                let obj = Ritual.arr1[i].obj;
                let func = Ritual.arr1[i].func;
                if(this.check(obj.xp, this.x+2, this.y-1, this.z)){
                    if(this.check(obj.xm, this.x-2, this.y-1, this.z)){
                        if(this.check(obj.zp, this.x, this.y-1, this.z+2)){
                            if(this.check(obj.zm, this.x, this.y-1, this.z-2)){
                                if(this.blockSource.getBlockId(this.x, this.y-1, this.z)==BlockID.ritualGL){
                                this.manaAdd(this.x+2, this.y-1, this.z+2);
                                this.manaAdd(this.x-2, this.y-1, this.z+2);
                                this.manaAdd(this.x+2, this.y-1, this.z-2);
                                this.manaAdd(this.x-2, this.y-1, this.z-2);
                                ParticlesAPI.coords(ParticlesAPI.forest, this.x+2, this.y-.5, this.z, this.x, this.y, this.z);
                                ParticlesAPI.coords(ParticlesAPI.forest, this.x-2, this.y-.5, this.z, this.x, this.y, this.z);
                                ParticlesAPI.coords(ParticlesAPI.forest, this.x, this.y-.5, this.z+2, this.x, this.y, this.z);
                                ParticlesAPI.coords(ParticlesAPI.forest, this.x, this.y-.5, this.z-2, this.x, this.y, this.z);
                                this.data.mana = this.getMana();
                                if(this.data.mana>=obj.mana){
                                    this.delMana(this.x+2, this.y-1, this.z+2);
                                    this.delMana(this.x-2, this.y-1, this.z+2);
                                    this.delMana(this.x+2, this.y-1, this.z-2);
                                    this.delMana(this.x-2, this.y-1, this.z-2);
                                    
        TileEntity.getTileEntity(this.x, this.y-1, this.z-2, this.blockSource).destroyAnimation();
        TileEntity.getTileEntity(this.x, this.y-1, this.z+2, this.blockSource).destroyAnimation();
        TileEntity.getTileEntity(this.x+2, this.y-1, this.z, this.blockSource).destroyAnimation();
        TileEntity.getTileEntity(this.x-2, this.y-1, this.z, this.blockSource).destroyAnimation();
       
Callback.invokeCallback("RitualDC", this.data.player, "statua", {x: this.x, y: this.y, z: this.z});

 this.blockSource.spawnDroppedItem(this.x, this.y+1,this.z, Ritual.arr1[i].id, 1, 0, null);
        this.blockSource.spawnEntity(this.x, this.y+1, this.z, 93);
        func(this.data.player, this.x, this.y, this.z);
        this.data.active = false;
            this.data.player = null;
                                }
                            }
                        }
                    }
                }
            }
            }
        }
    }
});
IDRegistry.genBlockID("gubok1");
Block.createBlock("gubok1", [ {name: "Pedestal for Christalov", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]],inCreative: true}]);

mod_tip(BlockID.gubok1)

renderAPI.setCristalPidestal(BlockID.gubok1);

Translation.addTranslation("Pedestal for Christalov", {ru: "Пьедестал для криссталов"});

IDRegistry.genBlockID("gubok2");
Block.createBlock("gubok2", [ {name: "Cruster's growth controller", texture: [["nis", 0],["vverx1", 0], ["ctoronS", 0],["storonO", 0], ["storonM", 0], ["ctoronl", 0]], inCreative: true}]);

mod_tip(BlockID.gubok2)

renderAPI.setGlblock1(BlockID.gubok2);

Translation.addTranslation("Cruster's growth controller", {ru: "Контроллер роста криссталов"});
Ritual.arr2 = [];
Ritual.addGrowth = function (id){
    Ritual.arr2.push(id);
}
TileEntity.registerPrototype(BlockID.gubok2, {
    defaultValues: {
        progres: 0
    },
    check: function (id){
        if(this.blockSource.getBlockId(this.x+2, this.y, this.z+2)==BlockID.gubok1){
            if(this.blockSource.getBlockId(this.x-2, this.y, this.z+2)==BlockID.gubok1){
                if(this.blockSource.getBlockId(this.x+2, this.y, this.z-2)==BlockID.gubok1){
                    if(this.blockSource.getBlockId(this.x-2, this.y, this.z-2)==BlockID.gubok1){
        if(this.blockSource.getBlockId(this.x+2, this.y+1, this.z+2)==id){
            if(this.blockSource.getBlockId(this.x-2, this.y+1, this.z+2)==id){
                if(this.blockSource.getBlockId(this.x+2, this.y+1, this.z-2)==id){
                    if(this.blockSource.getBlockId(this.x-2, this.y+1, this.z-2)==id){
                        if(this.blockSource.getBlockId(this.x, this.y+1, this.z)==0){
                        if(this.data.progres>=200){
Callback.invokeCallback("RitualDC", 0, "cristal", {x: this.x, y: this.y, z: this.z});
                          this.data.progres = 0;
                           ParticlesAPI.coords(ParticlesAPI.forest, this.x+2, this.y+1, this.z+2, this.x, this.y+1, this.z);
                           ParticlesAPI.coords(ParticlesAPI.forest, this.x-2, this.y+1, this.z+2, this.x, this.y+1, this.z);
                           ParticlesAPI.coords(ParticlesAPI.forest, this.x+2, this.y+1, this.z-2, this.x, this.y+1, this.z);
                           ParticlesAPI.coords(ParticlesAPI.forest, this.x-2, this.y+1, this.z-2, this.x, this.y+1, this.z);
                            this.blockSource.setBlock(this.x, this.y+1, this.z, id, 0);
                        }else{
                            this.data.progres++;
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x+2+Math.random()-Math.random(), this.y+1+Math.random()-Math.random(), this.z+2+Math.random()-Math.random(), 0, 0, 0);
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x-2+Math.random()-Math.random(), this.y+0.9, this.z+2+Math.random()-Math.random(), 0, 0, 0);
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x+2+Math.random()-Math.random(), this.y+0.9, this.z-2+Math.random()-Math.random(), 0, 0, 0);
                            Mp.spawnParticle(Native.ParticleType.redstone, this.x-2+Math.random()-Math.random(), this.y+0.9, this.z-2+Math.random()-Math.random(), 0, 0, 0);
                        }
                     }
                 }
             }
        }
        }
                     }
                 }
             }
        }
    },
    tick: function (){
        for(var i in Ritual.arr2){
            this.check(Ritual.arr2[i]);
        }
    }
})




// file: ItemGenerate.js

ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const ItemGenerate = api.ItemGenerate;
    ItemGenerate.addItem(ItemID.manysript2, 5, {max: 1});
    ItemGenerate.addItem(ItemID.manysript1, 10, {max: 1});
    ItemGenerate.addItem(ItemID.crystalSapphire, 0.05);
});
let Item2 = new ItemGenerate();
Item2.addItem(264, 0.05, {max: 2});
Item2.addItem(266, 1, {max:4});
Item2.addItem(265, 0.5, {max:6});
Item2.addItem(283, 0.4, {max:1});
Item2.addItem(381, 0.2, {max:6});
Item2.addItem(399, 0.01, {max:1});
Item2.addItem(384, 0.2, {max:16});
Item2.addItem(322, 0.1, {max:1});
Item2.addItem(ItemID.breakGem, 0.3, {max:1});
Item2.addItem(ItemID.manysript1, 0.05, {max:1});
Callback.addCallback("ModsLoaded", function (){
    Item2.addItem(ItemID.ingotCopper, 0.2);
    Item2.addItem(ItemID.ingotTin, 0.2);
    Item2.addItem(ItemID.ingotSilver, 0.05);
    Item2.addItem(ItemID.crystalSapphire, 0.05);
});

var date = new Date();
if(date.getMonth()==0 && date.getDate()>=1 && date.getDate() <= 10){


    let biome = [12, 13, 26, 30, 31, 34, 140, 158];
    let ng = new ItemGenerate();
    ng.addItem(264, 0.1, {max:3});
    ng.addItem(266, 0.5, {max:5});
    ng.addItem(265, 1, {max:10});
    ng.addItem(80, 1, {max:10});
    ng.addItem(ItemID.koin_0, 0.2, {max:1});
    ng.addItem(ItemID.koin_1, 0.1, {max:1});

    Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
for(let i in biome){
if (random.nextInt(100) <= 0.4){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z) == biome[i]){

(new DungeonAPI("нг1.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

ng.fillChest(coords.x, coords.y+1, coords.z, 0, id);
}
}
}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ, random, id){
for(let i in biome){
if (random.nextInt(100) <= 0.3){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 100);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
if(BlockSource.getCurrentWorldGenRegion().getBiome(coords.x, coords.z) == biome[i]){

(new DungeonAPI("нг2.json")).setStructure(coords.x, coords.y, coords.z, 0, id);

ng.fillChest(coords.x, coords.y+1, coords.z+1, 0, id);
ng.fillChest(coords.x, coords.y+1, coords.z+2, 0, id);
}
}
}
});

    
    IDRegistry.genItemID("present"); 
Item.createItem("present", "present", {name: "present", meta: 0}, {stack: 1});
    Translation.addTranslation("present", {ru: "подарок"});
        Item2.addItem(ItemID.present, 0.1, {max:1});
        ng.addItem(ItemID.present, 0.3, {max:1});
        ng.registerRecipeViewer("Generate6", "генерация предметов");
    let arrPresent = [];
    let Present = {
        add: function (obj){
            arrPresent.push(obj);
        }
    };
    Present.add({
        id: 264,
        date: 0,
        min: 1,
        max: 3
    });
    Present.add({
        id: ItemID.clitok,
        date: 0,
        min: 1,
        max: 3
    });
    Present.add({
        id: ItemID.koin_0,
        date: 0,
        min: 1,
        max: 2
    });
    Present.add({
        id: ItemID.koin_1,
        date: 0,
        min: 1,
        max: 1
    });
    Item.registerUseFunction("present", function(coords, item, block, player){
        let bs = BlockSource.getDefaultForActor(player);
        let r = Math.round(Math.random() * (arrPresent.length - 1));
        bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, arrPresent[r].id, Math.floor(Math.random()*(arrPresent[r].max))+arrPresent[r].min, arrPresent[r].date, null);
        delItem(player, item);
    });
}
Item2.registerRecipeViewer("Generate2", "генерация предметов");
Item2.setPrototype({
    setFunction: function (slot, x, y, z, random, id, data, count, packet, dimension){
        let blockSource = BlockSource.getDefaultForDimension(dimension);
        blockSource = BlockSource.getCurrentWorldGenRegion();
        let container = World.getContainer(x, y, z, blockSource);
        if(id == 283){
            let extra = ItemGenerateAPI.enchantAdd("sword", 3);
            container.setSlot(slot, id, count, data, extra);
        }
    }
});

let Item3 = new ItemGenerate();
Item3.addItem(264, 0.06, {max:5});
Item3.addItem(265, 1, {max:3});
Item3.addItem(ItemID.koin_0, 0.1, {max:2});
Item3.addItem(ItemID.koin_1, 0.01, {max:1});
Item3.addItem(ItemID.bookxp, 0.01, {max: 2})
//железо
Item3.addItem(306, 0.15, {max:1});
Item3.addItem(307, 0.08, {max:1});
Item3.addItem(308, 0.08, {max:1});
Item3.addItem(309, 0.15, {max:1});
//алмазы
Item3.addItem(310, 0.02, {max:1});
Item3.addItem(311, 0.01, {max:1});
Item3.addItem(312, 0.03, {max:1});
Item3.addItem(313, 0.02, {max:1});
//кожа
Item3.addItem(298, 0.4, {max:1});
Item3.addItem(299, 0.1, {max:1});
Item3.addItem(300, 0.2, {max:1});
Item3.addItem(301, 0.4, {max:1});

//кольчуга
Item3.addItem(302, 0.2, {max:1});
Item3.addItem(303, 0.1, {max:1});
Item3.addItem(304, 0.1, {max:1});
Item3.addItem(305, 0.2, {max:1});
Callback.addCallback("ModsLoaded", function (){
    Item2.addItem(ItemID.ingotSilver, 0.05);
    Item3.addItem(ItemID.crystalSapphire, 0.05);
    Item3.registerRecipeViewer("Generate3", "генерация предметов");
});

let Item5 = new ItemGenerate();
Item5.addItem(264, 0.04, {max:3});
Item5.addItem(266, 0.5, {max:5});
Item5.addItem(265, 1, {max:10});
Item5.addItem(372, 0.10, {max:5});
Item5.addItem(384, 0.10, {max:11});
Item5.addItem(399, 0.01, {max:1});
Item5.addItem(ItemID.glas, 0.4, {max:1});
Callback.addCallback("ModsLoaded", function (){
    Item5.addItem(ItemID.ingotCopper, 0.2);
    Item5.addItem(ItemID.ingotTin, 0.2);
    Item5.addItem(ItemID.ingotSilver, 0.05);
    Item5.registerRecipeViewer("Generate5", "генерация предметов");
});

let Item6 = new ItemGenerate();
Item6.addItem(264, 0.8, {max:5});
Item6.addItem(266, 0.4, {max:7});
Item6.addItem(295, 0.8, {max:20});
Item6.addItem(291, 0.9, {max:1});
Item6.addItem(261, 0.8, {max:1});
Item6.addItem(262, 0.4, {max:20});
Item6.addItem(297, 0.8, {max:6});
Item6.addItem(322, 0.05, {max:10});
Item6.addItem(ItemID.sorcererStaff, 0.1, {max: 1});
Item6.addItem(ItemID.idal, 0.05, {max:10});
Callback.addCallback("ModsLoaded", function (){
    Item6.addItem(ItemID.ingotCopper, 0.2);
    Item6.addItem(ItemID.ingotTin, 0.2);
    Item6.addItem(ItemID.ingotSilver, 0.05);
    Item6.registerRecipeViewer("Generate6", "генерация предметов");

});




// file: items/magic.js

IDRegistry.genItemID("RitualActivator"); 
Item.createItem("RitualActivator", "Ritual activator", {name: "Ritual_activator", meta: 0}, {stack: 1});
Translation.addTranslation("Ritual activator", {ru: "Ритуальный активатор"});

mod_tip(ItemID.RitualActivator)

Item.registerUseFunctionForID(ItemID.RitualActivator, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    Mp.message(player, mana.count+"/"+mana.countMax);
    let pa = new PlayerActor(player);
    let bs = BlockSource.getDefaultForActor(player);
    if(Dungeon.isStructure("ritualUpdate.json", coords.x, coords.y, coords.z, 0, pa.getDimension())){
        for(i in Ritual.arr2){
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            let obj = Ritual.arr2[i];
            if(te.data.item.id==obj.id){
                Callback.invokeCallback("RitualDC", player, "update", coords);
                if(mana.count>=obj.mana){
                    mana.count-=obj.mana;
                    bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, obj.result, 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    }
    if(Dungeon.isStructure("ritualEnchant.json", coords.x, coords.y, coords.z, 0, pa.getDimension())){
        let keys = Object.keys(Ritual.obj3);
        for(i in keys){
            let key = keys[i];
            let te = TileEntity.getTileEntity(coords.x, coords.y, coords.z, bs);
            if(te.data.item.id==key){
                 if(mana.count>=Ritual.obj3[key].obj.mana){
                    let count = Ritual.obj3[key].arr.length - 1;
                    mana.count-=Ritual.obj3[key].obj.mana;
                    Callback.invokeCallback("RitualDC", player, "enchant", coords);
                    bs.spawnDroppedItem(coords.x, coords.y+1, coords.z, Ritual.obj3[key].arr[Math.floor(Math.random()*count)], 1, 0, null);
                    te.destroyAnimation();
                }
            }
        }
    }
    ManaCore.set(player, mana);
});

IDRegistry.genItemID("DarkSphere"); 
Item.createItem("DarkSphere", "Dark sphere", {name: "Dark_sphere", meta: 0}, {stack: 1});
Translation.addTranslation("Dark sphere", {ru: "тёмная сфера"});

mod_tip(ItemID.DarkSphere)

Item.registerUseFunctionForID(ItemID.DarkSphere, function(coords, item, block, player) {
    let mana = ManaCore.get(player);
    let random = Math.floor(Math.random()*2000);
    mana.countMax += random;
    Mp.message(player, "ваш максимальный запас маны увеличин на "+random);
    delItem(player, item);
    ManaCore.set(player, mana);
});

IDRegistry.genItemID("manysript1"); 
Item.createItem("manysript1", "Manuscript", {name: "manysript", meta: 0}, {stack: 1});
Translation.addTranslation("Manuscript", {ru: "манускрипт"});

mod_tip(ItemID.manysript1)

IDRegistry.genItemID("manysript2"); 
Item.createItem("manysript2", "Manuscript Knowledge: Basics", {name: "manysript", meta: 0}, {stack: 1});

mod_tip(ItemID.manysript2)

Translation.addTranslation("Manuscript Knowledge: Basics", {ru: "манускрипт знание: основы"});
Item.setGlint(ItemID.manysript2, true);



IDRegistry.genItemID("Drune0"); 
Item.createItem("Drune0", "Empty rune", {name: "Drune", meta: 0}, {stack: 1});

mod_tip(ItemID.Drune0)

Translation.addTranslation("Empty rune", {ru: "пустая руна"});

IDRegistry.genItemID("Drune1"); 
Item.createItem("Drune1", "fire rune", {name: "Drune", meta: 1}, {stack: 1});

mod_tip(ItemID.Drune1)

Translation.addTranslation("fire rune", {ru: "руна огня"});
Item.setGlint(ItemID.Drune1, true);

IDRegistry.genItemID("Drune2"); 
Item.createItem("Drune2", "Earth rune", {name: "Drune", meta: 2}, {stack: 1});
Translation.addTranslation("Earth rune", {ru: "руна земли"});
Item.setGlint(ItemID.Drune2, true);

mod_tip(ItemID.Drune2)

IDRegistry.genItemID("Drune3"); 
Item.createItem("Drune3", "Wind rune", {name: "Drune", meta: 3}, {stack: 1});
Translation.addTranslation("Wind rune", {ru: "руна ветра"});
Item.setGlint(ItemID.Drune3, true);

mod_tip(ItemID.Drune3)

IDRegistry.genItemID("Drune4"); 
Item.createItem("Drune4", "The rune of light", {name: "Drune", meta: 4}, {stack: 1});
Translation.addTranslation("The rune of light", {ru: "руна света"});
Item.setGlint(ItemID.Drune4, true);

mod_tip(ItemID.Drune4)

Item.addCreativeGroup("runes", Translation.translate("Runes"), [
    	ItemID.Drune0,
	   ItemID.Drune1,
	   ItemID.Drune2,
	   ItemID.Drune3,
	   ItemID.Drune4, 
]);

IDRegistry.genItemID("sapling10"); 
Item.createItem("sapling10", "sapling", {name: "sapling", meta: 0}, {stack: 64});

mod_tip(ItemID.sapling10)

Translation.addTranslation("sapling", {ru: "саженец"});

var Idal = {
    arr: [],
    getLevel: function (data){
        if(data<=100 && data >= 0){
            return 0;
        }
        if(data<=200 && data >= 100){
            return 1;
        }
        if(data<=300 && data >= 200){
            return 2;
        }
        if(data<=400 && data >= 300){
            return 3;
        }
        if(data<=500 && data >= 400){
            return 4;
        }
        if(data<=600 && data >= 500){
            return 5;
        }
        if(data<=700 && data >= 600){
            return 6;
        }
        if(data<=800 && data >= 700){
            return 7;
        }
        if(data<=900 && data >= 800){
            return 8;
        }
        if(data<=999 && data >= 900){
            return 9;
        }
        if(data<=1000 && data >= 1000){
            return 10;
        }
    },
    register: function (id){
        Item.setGlint(id, true);
        Item.setMaxDamage(id, 1000);
        Item.registerNameOverrideFunction(id, function(item, name) {
            return name  + "\n " + item.data + "/" + Item.getMaxDamage(item.id) + " \n уровень: "+ Idal.getLevel(item.data);
        });
        this.arr.push(id);
    }
};

IDRegistry.genItemID("idal"); 
Item.createItem("idal", "idal", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal", {ru: "идал"});

mod_tip(ItemID.idal)

IDRegistry.genItemID("idalSave"); 
Item.createItem("idalSave", "idal of conservation", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal of conservation", {ru: "идал сохранения"});
Idal.register(ItemID.idalSave);

mod_tip(ItemID.idalSave)

IDRegistry.genItemID("idalGifts"); 
Item.createItem("idalGifts", "idal gifts", {name: "idal", meta: 0}, {stack: 1});
Translation.addTranslation("idal gifts", {ru: "идал даров"});
Idal.register(ItemID.idalGifts);

mod_tip(ItemID.idalGifts)

const cheakItem = function (id, playerId) {
    if(id && playerId) for(var i = 0;i < 9;i++) {
        var player = new PlayerActor(playerId);
        var item = player.getInventorySlot(i);
        if(item.id == id){
            return {
                id: item.id,
                data: item.data,
                extra: item.extra,
                count: item.count,
                slot: i
			       };
		     }
	   }
};

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead){
	if(World.getThreadTime()%20==0){
    let item = cheakItem(ItemID.idalGifts, player);
    if(item) if(item.id == ItemID.idalGifts){
        if(Math.random()<=0.01){
            let mana = ManaCore.get(player);
            mana.count += Idal.getLevel(item.data) * 200;
            manaPlayer[player] = mana;
            Network.sendToServer("dc.set", manaPlayer);
            }
        }
    }
});

Callback.addCallback("wasteMana", function(player, manaNow, manaWill){
    let item = cheakItem(ItemID.idalSave, player);
    if(item){
        if(item.id == ItemID.idalSave){
            let spending = manaNow.count - manaWill.count;
            if(spending>=11){
                let per1 = spending / 100 * Idal.getLevel(item.data); 
                per1 = Math.ceil(per1);
                manaWill.count+=per1;
                Debug.message("idal save - "+player+" "+per1);
                manaPlayer[player] = manaWill;
                Network.sendToAllClients("dc.set", manaPlayer);
            }else{
                manaPlayer[player] = manaWill;
                Network.sendToAllClients("dc.set", manaPlayer);
                Debug.message("set mana player - "+player+" "+JSON.stringify(manaWill, null, true));
            }
        }else{
            manaPlayer[player] = manaWill;
            Network.sendToAllClients("dc.set", manaPlayer);
             Debug.message("set mana player - "+player+" "+JSON.stringify(manaWill, null, true));
        }
    }else{
        manaPlayer[player] = manaWill;
        Network.sendToAllClients("dc.set", manaPlayer);
        Debug.message("set mana player - "+player+" "+JSON.stringify(manaWill, null, true));
    }
});

Item.addCreativeGroup("idals", Translation.translate("idals"), [
    	ItemID.idal,
    	ItemID.idalSave,
     ItemID.idalGifts
]);




// file: items/ItemsRegister.js



Item.registerUseFunction("sapling10", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
 if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.sap, 0);
delItem(player, item);
} 
	} 
	});
/*
IDRegistry.genItemID("magis_book"); 
Item.createItem("magis_book", "magis book", {name: "magis_book", meta: 0}, {stack: 1});

Translation.addTranslation("magis book", {ru: "книга магии"});

Item.setGlint(ItemID.magis_book, true);
*/
IDRegistry.genItemID("Berries"); 
Item.createFoodItem("Berries", "Berries", {name: "Berries", meta: 0}, {stack: 64, food: 2});

mod_tip(ItemID.Berries)

Translation.addTranslation("Berries", {ru: "ягоды"});

Item.registerUseFunction("Berries", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.a0, 0);
delItem(player, item);
	} 
	});

IDRegistry.genItemID("deadBerries"); 
Item.createFoodItem("deadBerries", "Dead Berries", {name: "deadBerries", meta: 0}, {stack: 64, food: 2});

mod_tip(ItemID.deadBerries)

Translation.addTranslation("deadBerries", {ru: "заражённые ягоды"});

Item.registerUseFunction("deadBerries", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.deada0, 0);
delItem(player, item);
	} 
	});


IDRegistry.genItemID("crystalfire"); 
Item.createItem("crystalfire", "crystal fire", {name: "crystalfire", meta: 0}, {stack: 1});

mod_tip(ItemID.crystalfire)

Translation.addTranslation("crystal fire", {ru: "крисстал огня"});

Item.registerUseFunction("crystalfire", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
if(Entity.getSneaking(player) == true){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalFire, 0);
delItem(player, item);
} 
} 
	} 
	});


IDRegistry.genItemID("crystalearth"); 
Item.createItem("crystalearth", "crystal earth", {name: "crystalearth", meta: 0}, {stack: 1});

mod_tip(ItemID.crystalearth)

Item.registerUseFunction("crystalearth", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
if(Entity.getSneaking(player) == true){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristaldirt, 0);
delItem(player, item);
}
} 
	} 
	});

Translation.addTranslation("crystal earth", {ru: "крисстал земли"});

IDRegistry.genItemID("crystalWind"); 
Item.createItem("crystalWind", "crystal Wind", {name: "crystalWind", meta: 0}, {stack: 1});

mod_tip(ItemID.crystalWind)

Translation.addTranslation("crystal Wind", {ru: "крисстал ветра"});

Item.registerUseFunction("crystalWind", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if(Entity.getSneaking(player) == true){
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalwind, 0);
delItem(player, item);
} 
} 
	} 
	});

IDRegistry.genItemID("crystalLightning"); 
Item.createItem("crystalLightning", "crystal Lightning", {name: "crystalLightning", meta: 0}, {stack: 1});

Item.registerUseFunction("crystalLightning", function(coords, item, block, player){
if(Entity.getSneaking(player) == true){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y+1, coords.z).id== 0){
if(b.getBlock(coords.x, coords.y, coords.z).id!= BlockID.rityal1){
b.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalLight, 0);
delItem(player, item);
} 
} 
	} 
	});
	
mod_tip(ItemID.crystalLightning)

Translation.addTranslation("crystal Lightning", {ru: "крисстал молнии"});

Item.addCreativeGroup("crystal", Translation.translate("Crystal"), [
	ItemID.crystalfire,
	ItemID.crystalearth,
	ItemID.crystalWind,
	ItemID.crystalLightning,
]);

IDRegistry.genItemID("ring"); 
Item.createItem("ring", "ring", {name: "ring", meta: 0}, {stack: 1});

mod_tip(ItemID.ring)

Translation.addTranslation("ring", {ru: "кольцо с драгоценным камнем"});

IDRegistry.genItemID("Gem"); 
Item.createItem("Gem", "Gem", {name: "Gem", meta: 0}, {stack: 1});

mod_tip(ItemID.Gem)

Translation.addTranslation("Gem", {ru: "Камень Перемещения"});

Item.setGlint(ItemID.Gem, true)

IDRegistry.genItemID("breakGem"); 
Item.createItem("breakGem", "Break Gem", {name: "breakGem", meta: 0}, {stack: 1});

mod_tip(ItemID.breakGem)

Translation.addTranslation("Break Gem", {ru: "Сломанный Камень Перемещения"});

Item.setGlint(ItemID.breakGem, true)

Item.addCreativeGroup("gem", Translation.translate("Gem"), [
	ItemID.Gem,
	ItemID.breakGem
]);

IDRegistry.genItemID("glas"); 
Item.createItem("glas", "glas", {name: "glas", meta: 0}, {stack: 16});

mod_tip(ItemID.glas)

Translation.addTranslation("glas", {ru: "глаз нежити"});
/*
IDRegistry.genItemID("poic1"); 
Item.createItem("poic1", "Search for a flight", {name: "poic", meta: 0}, {stack: 1});

Translation.addTranslation("Search for a flight", {ru: "пояс полёта"});

*/

IDRegistry.genItemID("amylet"); 
Item.createItem("amylet", "Breathing the breath", {name: "amylet", meta: 0}, {stack: 1});

mod_tip(ItemID.amylet)

Translation.addTranslation("Breathing the breath", {ru: "амулет дыхания"});

IDRegistry.genItemID("clitok"); 
Item.createItem("clitok", "Divine ingot", {name: "clitok", meta: 0}, {stack: 64});

mod_tip(ItemID.clitok)

Translation.addTranslation("Divine ingot", {ru: "божественый слиток"});

IDRegistry.genItemID("clitok1"); 
Item.createItem("clitok1", "Fur ingot", {name: "clitok", meta: 1}, {stack: 64});

mod_tip(ItemID.clitok1)

Item.addCreativeGroup("ingot", Translation.translate("Ingot"), [
	ItemID.clitok,
	ItemID.clitok1,
]);

Translation.addTranslation("Fur ingot", {ru: "слиток огня"});

IDRegistry.genItemID("gotovka"); 
Item.createItem("gotovka", "Preparation", {name: "gotovka", meta: 0}, {stack: 1});

mod_tip(ItemID.gotovka)

Translation.addTranslation("Preparation", {ru: "заготовка"});

IDRegistry.genItemID("bookxp"); 
Item.createItem("bookxp", "book xp", {name: "book_xp", meta: 0}, {stack: 64});

mod_tip(ItemID.bookxp)

Item.registerUseFunction("bookxp", function(coords, item, block, player){
delItem(player, item);
let ac = new PlayerActor(player);
ac.addExperience(1000);
});

Translation.addTranslation("book xp", {ru: "книга опыта"});

Item.setGlint(ItemID.bookxp, true);

IDRegistry.genItemID("koin_1"); 
Item.createItem("koin_1", "gold coin", {name: "koin", meta: 1}, {stack: 64});

mod_tip(ItemID.koin_1)

Translation.addTranslation("gold coin", {ru: "золотая монета"});
Item.setGlint(ItemID.koin_1, true);


IDRegistry.genItemID("koin_0"); 
Item.createItem("koin_0", "Silver coin", {name: "koin", meta: 0}, {stack: 64});

mod_tip(ItemID.koin_0)

Item.addCreativeGroup("koin", Translation.translate("Koin"), [
	ItemID.koin_0,
	ItemID.koin_1,
]);

Translation.addTranslation("Silver coin", {ru: "серебреная монета"});












// file: items/BaublesRegister.js


const searchItem = function (id, data, playeru) {
 var dat = data || -1;
 var od = id || -1;
	for(var i = 0;i < 9;i++) {
  var player = new PlayerActor(playeru);
	 var item = player.getInventorySlot(i);
		if((item.id == od || (od == -1 && item.id != 0)) && (item.data == dat || dat == -1)){
			return {
			    id: item.id,
			    data: item.data,
			    extra: item.extra,
			    count: item.count,
			    slot: i
			}
		}
	}
};

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead) {
	if(World.getThreadTime()%20==0){
  let mana = ManaCore.get(player);
if(searchItem(ItemID.amylet, 0, player)){
if(mana.count >= 20){
Entity.addEffect(player, Native.PotionEffect.waterBreathing, 20, 20, false, false)
mana.count-=20;
}
}else{
Entity.clearEffect(player, 13);
}
}
});













// file: items/armor.js

IDRegistry.genItemID("armor1");
Item.createArmorItem("armor1", "Fire helmet" , {name: "armor_fire", meta: 4}, {type: "helmet", armor: 7, durability: 6993, texture: "armor/armor1.png"}); 

mod_tip(ItemID.armor1)

Translation.addTranslation("Fire helmet", {ru: "огненый шлем"});

IDRegistry.genItemID("armor2");
Item.createArmorItem("armor2" , "fire chestplate", {name: "armor_fire", meta: 3}, {type: "chestplate", armor: 10, durability: 9102, texture: "armor/armor1.png"}); 

mod_tip(ItemID.armor2)
Translation.addTranslation("fire chestplate", {ru: "огненный нагрудник"});

IDRegistry.genItemID("armor3");
Item.createArmorItem("armor3", "fire leggings", {name: "armor_fire", meta: 2}, {type: "leggings", armor: 9, durability: 8103, texture: "armor/armor2.png"});

mod_tip(ItemID.armor3)

Translation.addTranslation("fire leggings", {ru: "огненные поножи"});

IDRegistry.genItemID("armor4");
Item.createArmorItem("armor4", "fire boots", {name: "armor_fire", meta: 1}, {type: "boots", armor: 6, durability: 6438, texture: "armor/armor1.png"});

mod_tip(ItemID.armor4)

Translation.addTranslation("fire boots", {ru: "огненые ботинки"});

IDRegistry.genItemID("armor5");
Item.createArmorItem("armor5", "Divine helmet" , {name: "armor", meta: 1}, {type: "helmet", armor: 5, durability: 2775, texture: "armor/armor4.png"}); 

mod_tip(ItemID.armor5)

Translation.addTranslation("Divine helmet", {ru: "божественый шлем"});

IDRegistry.genItemID("armor6");
Item.createArmorItem("armor6" , "Divine chestplate", {name: "armor", meta: 2}, {type: "chestplate", armor: 8, durability: 4440, texture: "armor/armor4.png"}); 

mod_tip(ItemID.armor6)

Translation.addTranslation("Divine chestplate", {ru: "божественый нагрудник"});

IDRegistry.genItemID("armor7");
Item.createArmorItem("armor7", "Divine leggings", {name: "armor", meta: 3}, {type: "leggings", armor: 7, durability: 3885, texture: "armor/armor3.png"});

mod_tip(ItemID.armor7)

Translation.addTranslation("Divine leggings", {ru: "божественые поножи"});

IDRegistry.genItemID("armor8");
Item.createArmorItem("armor8", "Divine boots", {name: "armor", meta: 4}, {type: "boots", armor: 4, durability: 2220, texture: "armor/armor4.png"});

mod_tip(ItemID.armor8)

Translation.addTranslation("Divine boots", {ru: "божественый ботинки"});

Item.addCreativeGroup("helmet", Translation.translate("Helmet"), [
	ItemID.armor1,
	ItemID.armor5,
]);
Item.addCreativeGroup("chestplate", Translation.translate("Chestplate"), [
	ItemID.armor2,
	ItemID.armor6,
]);
Item.addCreativeGroup("leggings", Translation.translate("Leggings"), [
	ItemID.armor3,
	ItemID.armor7,
]);
Item.addCreativeGroup("boots", Translation.translate("Boots"), [
	ItemID.armor4,
	ItemID.armor8,
]);

Item.setEnchantType(ItemID.armor1, Native.EnchantType.helmet, 14);

Item.setEnchantType(ItemID.armor2, Native.EnchantType.chestplate, 14);

Item.setEnchantType(ItemID.armor3, Native.EnchantType.leggings, 14);

Item.setEnchantType(ItemID.armor4, Native.EnchantType.boots, 14);

Item.setEnchantType(ItemID.armor5, Native.EnchantType.helmet, 14);

Item.setEnchantType(ItemID.armor6, Native.EnchantType.chestplate, 14);

Item.setEnchantType(ItemID.armor7, Native.EnchantType.leggings, 14);

Item.setEnchantType(ItemID.armor8, Native.EnchantType.boots, 14);

Item.addRepairItemIds(ItemID.armor1, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor2, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor3, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor4, [ItemID.clitok1]);

Item.addRepairItemIds(ItemID.armor5, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor6, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor7, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.armor8, [ItemID.clitok]);


























// file: items/инструменты_огня.js

IDRegistry.genItemID("sword_1"); 
Item.createItem("sword_1", "The sword of fire", {name: "sword_1", meta: 0}, {stack: 1});

mod_tip(ItemID.sword_1)

Translation.addTranslation("The sword of fire", {ru: "меч огня"});

Item.setEnchantType(ItemID.sword_1, Native.EnchantType.weapon, 14);

Item.addRepairItemIds(ItemID.sword_1, [ItemID.clitok1]);

IDRegistry.genItemID("pickaxe_1"); 
Item.createItem("pickaxe_1", "pickaxe Fire", {name: "pickaxe_1", meta: 0}, {stack: 1});

mod_tip(ItemID.pickaxe_1)

Item.setEnchantType(ItemID.pickaxe_1, Native.EnchantType.pickaxe, 14);

Translation.addTranslation("pickaxe Fire", {ru: "кирка огня"});

Item.addRepairItemIds(ItemID.pickaxe_1, [ItemID.clitok1]);

IDRegistry.genItemID("sword_2");
Item.createItem("sword_2", "The sword of God", {name: "sword2", meta: 0}, {stack: 1});

mod_tip(ItemID.sword_2)

Item.addRepairItemIds(ItemID.sword_2, [ItemID.clitok]);

var godSword = new RenderMesh(__dir__ + "/res/model/sword_god.obj","obj");
ItemModel.getFor(ItemID.sword_2, 0).setHandModel(godSword, "3dItem/3d_god_sword")


Translation.addTranslation("The sword of God", {ru: "меч бога"});

Item.setEnchantType(ItemID.sword_2, Native.EnchantType.weapon, 14);

IDRegistry.genItemID("pickaxe_2"); Item.createItem("pickaxe_2", "pickaxe of God", {name: "kirka", meta: 0}, {stack: 1});

mod_tip(ItemID.pickaxe_2)

Item.addRepairItemIds(ItemID.sword_2, [ItemID.clitok]);

Item.addRepairItemIds(ItemID.pickaxe_2, [ItemID.clitok]);

Translation.addTranslation("pickaxe of God", {ru: "Кирка бога"});

Item.addCreativeGroup("sword", Translation.translate("Sword"), [
	ItemID.sword_1,
	ItemID.sword_2,
]);
Item.addCreativeGroup("pickaxe", Translation.translate("Pickaxe"), [
	ItemID.pickaxe_1,
	ItemID.pickaxe_2,
]);

ToolAPI.addToolMaterial("fire", {
    durability: 4440,
    level: 4,
    efficiency: 18,
    damage: 10,
    enchantability: 14
});



ToolAPI.addToolMaterial("god", {
    durability: 2220,
    level: 5,
    efficiency: 6,
    damage: 6,
    enchantability: 14
});

ToolAPI.setTool(ItemID["sword_1"], "fire", ToolType.sword);

ToolAPI.setTool(ItemID["sword_2"], "god", ToolType.sword);

ToolAPI.setTool(ItemID["pickaxe_1"], "fire", ToolType.pickaxe);

ToolAPI.setTool(ItemID["pickaxe_2"], "god", ToolType.pickaxe);




Item.registerUseFunction("sword_1", function(coords, item, block, player)
{
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y + 1, coords.z).id==0){
b.setBlock(coords.x, coords.y + 1, coords.z, 51, 0);
}
}
);

Callback.addCallback("PlayerAttack", function (player, victim) { 
var item = Entity.getCarriedItem(player);
if(item.id==ItemID.sword_1){
Entity.setFire(victim, 80, true);
} 
});

Callback.addCallback("PlayerAttack", function (player, victim) { 
var item = Entity.getCarriedItem(player);
if(item.id==ItemID.sword_2){
var random = Math.random() * 1;
if(random <= 0.1){
var coords = Entity.getPosition(victim);
Entity.spawn(coords.x, coords.y, coords.z, 93);
World.playSoundAtEntity(victim, "ambient.weather.thunder", 50);
Entity.damageEntity(victim, 20);
}
} 
});




















// file: items/Scroll/Scroll.js

IDRegistry.genItemID("Scroll6"); 
Item.createItem("Scroll6", "Svic of the clear day", {name: "Scroll", meta: 6}, {stack: 1});

mod_tip(ItemID.Scroll6)

Translation.addTranslation("Svic of the clear day", {ru: "свиток ясного дня"});

Item.registerUseFunction("Scroll6", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=1000){
mana.count-=1000;
World.setWeather(1);
ManaCore.set(player, mana);
}
}
);

Recipes.addShaped({id: ItemID.Scroll6, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 264, 0]);




















// file: items/Scroll/Scroll2.js

IDRegistry.genItemID("Scroll2"); 
Item.createItem("Scroll2", "Milk scroll", {name: "Scroll", meta: 2}, {stack: 1});

mod_tip(ItemID.Scroll2)

Translation.addTranslation("Milk scroll", {ru: "свиток мрака"});

Item.registerUseFunction("Scroll2", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=2000){
mana.count-=2000;
World.setWorldTime(15000);
ManaCore.set(player, mana);
} 
}
);

Recipes.addShaped({id: ItemID.Scroll2, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 405, 0]);
















// file: items/Scroll/Scroll4.js

let fire = {
    set: function (x, y, z, id, data, player){
        let b = BlockSource.getDefaultForActor(player);
        if(b.getBlock(x, y, z).id==0){
            if(b.getBlock(x, y-1, z).id>=0){
            b.setBlock(x, y, z, id, data);
            }
        }
    }, 
};

IDRegistry.genItemID("Scroll4"); 
Item.createItem("Scroll4", "scroll of fire", {name: "Scroll", meta: 3}, {stack: 1});

mod_tip(ItemID.Scroll4)

Translation.addTranslation("scroll of fire", {ru: "свиток огня"});

Item.registerUseFunction("Scroll4", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=50){
mana.count-=50;
Entity.addEffect(player, Native.PotionEffect.fireResistance, 0, 150, false, false);

fire.set(coords.x, coords.y+1, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z-1, 51, 0, player);


fire.set(coords.x, coords.y, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z, 51, 0, player);

fire.set(coords.x, coords.y, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y, coords.z-1, 51, 0, player);

fire.set(coords.x, coords.y+2, coords.z, 51, 0, player);
fire.set(coords.x+1, coords.y+2, coords.z, 51, 0, player);
fire.set(coords.x-1, coords.y+2, coords.z, 51, 0, player);

fire.set(coords.x, coords.y+2, coords.z+1, 51, 0, player);
fire.set(coords.x+1, coords.y+2, coords.z+1, 51, 0, player);
fire.set(coords.x-1, coords.y+2, coords.z+1, 51, 0, player);

fire.set(coords.x, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x+1, coords.y+1, coords.z-1, 51, 0, player);
fire.set(coords.x-1, coords.y+1, coords.z-1, 51, 0, player);

ManaCore.set(player, mana);
}
}
);

Recipes.addShaped({id: ItemID.Scroll4, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 87, 0]);

Item.addCreativeGroup("sroll", Translation.translate("Sroll"), [
	ItemID.Scroll6,
 ItemID.Scroll2, 
 ItemID.Scroll4, 
 ItemID.Scroll1,
]);






















// file: items/Scroll/Scroll1.js

IDRegistry.genItemID("Scroll1"); 
Item.createItem("Scroll1", "Scroll of the day", {name: "Scroll", meta: 1}, {stack: 1});

mod_tip(ItemID.Scroll1)

Translation.addTranslation("Scroll of the day", {ru: "свиток дня"});

Item.registerUseFunction("Scroll1", function(coords, item, block, player){
let mana = ManaCore.get(player);
if(mana.count>=2000){
mana.count-=2000;
World.setWorldTime(1000);
ManaCore.set(player, mana);
}
}
);

Recipes.addShaped({id: ItemID.Scroll1, count: 1, data: 0},
	["**b", "*a*", "b**"], 
	['a', 340, 0, 'b', 348, 0]);


















// file: items/посохи/магическая_палка_0.js

var BlockID55 = [51, 52, 122, 120, 7];

IDRegistry.genItemID("stick2"); 
Item.createItem("stick2", "Postability of absorption", {name: "stick2", meta: 1}, {stack: 1});

mod_tip(ItemID.stick2)

Translation.addTranslation("Postability of absorption", {ru: "посох поглощения"});

Item.registerUseFunction("stick2", function(coords, item, block, player){
    let peremen1 = ManaCore.get(player);
    let per1 = peremen1.countMax
    per1 = peremen1.countMax / 100 * 10; 
    per1 = peremen1.countMax - per1;
    if(peremen1.count+10<=per1){
        let b = BlockSource.getDefaultForActor(player);
        if(b.getBlock(coords.x, coords.y, coords.z).id != BlockID55) {
            peremen1.count+=10;
            ManaCore.set(player, peremen1);
            b.setBlock(coords.x, coords.y, coords.z, 0, 0);
        } 
    }
});




// file: items/dungeonKey.js

IDRegistry.genItemID("keyDungeon"); 
Item.createItem("keyDungeon", "key Dungeon", {name: "keyDungeon", meta: 0}, {stack: 1});

mod_tip(ItemID.keyDungeon)

Translation.addTranslation("key Dungeon", {ru: "золотой ключ"});

Item.setGlint(ItemID.keyDungeon, true);

Item.registerUseFunction("keyDungeon", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey){
if (b.getBlock(coords.x, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x-1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x+1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y-1, coords.z).id == BlockID.brick3){


b.setBlock(coords.x, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x, coords.y, coords.z, 0, 0);
b.setBlock(coords.x, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x-1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x+1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y-1, coords.z, 0, 0);
Entity.setCarriedItem(player, 0, 0, 0);

}
}
}

}
}
}

} 
} 

} 
});


IDRegistry.genItemID("keyDungeon2"); 
Item.createItem("keyDungeon2", "update key", {name: "key", meta: 2}, {stack: 1});

mod_tip(ItemID.keyDungeon2)

Translation.addTranslation("update key", {ru: "огненный ключ"});

Item.setGlint(ItemID.keyDungeon2, true);

Item.addCreativeGroup("keyDungeon", Translation.translate("Key"), [
	ItemID.keyDungeon,
	ItemID.keyDungeon2,
]);

Item.registerUseFunction("keyDungeon2", function(coords, item, block, player){
let b = BlockSource.getDefaultForActor(player);
if (b.getBlock(coords.x, coords.y, coords.z).id == BlockID.brickkey){
if (b.getBlock(coords.x, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x-1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x-1, coords.y-1, coords.z).id == BlockID.brick3){

if (b.getBlock(coords.x+1, coords.y, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y+1, coords.z).id == BlockID.brick3){
if (b.getBlock(coords.x+1, coords.y-1, coords.z).id == BlockID.brick3){


b.setBlock(coords.x, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x, coords.y, coords.z, 0, 0);
b.setBlock(coords.x, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x-1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x-1, coords.y-1, coords.z, 0, 0);

b.setBlock(coords.x+1, coords.y+1, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y, coords.z, 0, 0);
b.setBlock(coords.x+1, coords.y-1, coords.z, 0, 0);
Entity.setCarriedItem(player, 0, 0, 0);

}
}
}

}
}
}

} 
} 

} 
});






// file: items/book.js





// file: rai.js


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==rai1.id){
if (Math.random() <= 0.6){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if(World.getBlock(coords.x, coords.y, coords.z)==BlockID.stone2) World.setBlock(coords.x, coords.y+1, coords.z, BlockID.kristalLight, 0);

} 
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==rai1.id){
if (Math.random() <= 0.04){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 100, 200);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.stone2, 2, 100, true);

} 
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        if(Math.random()<=0.01){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
           let bs = BlockSource.getDefaultForDimension(dimensionId);
 Dungeon.setStructure("rai_home.json", coords.x, coords.y, coords.z, 0, dimensionId);
bs = BlockSource.getCurrentWorldGenRegion();
bs.spawnEntity(coords.x, coords.y+3, coords.z, "dc:angel");
} 
} 
});

var rai1 = new Dimensions.CustomDimension("rai1", 1345); 
rai1.setSkyColor(0, 128, 188) 
rai1.setFogColor(0, 128, 188); 

rai1.setGenerator(Dimensions.newGenerator({
    layers: [   
        {
            minY: 2, 
            maxY: 75, 
            yConversion: [[0, 0]],
            material: {base: 9}
        },
        {
            minY: 1, 
            maxY: 82, 
            yConversion: [[.7, 1], [1, -0.5]],
            material: {base: BlockID.stone2, surface: {id:BlockID.dirt2, data: 0, width:4}, cover: BlockID.grass2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        },
        {
            minY: 0, 
            maxY: 1, 
            yConversion: [[0, 0]],
            material: {base: 7}
        }
    ]
}));

var rai_particle = Particles.registerParticleType({
 texture: "rai_particle",
 render: 2,
 size:[4, 10],
 lifetime: [40, 100],
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});

IDRegistry.genItemID("angelHeart"); 
Item.createItem("angelHeart", "Angel Heart", {name: "angel_heart", meta: 0}, {stack: 16});
Translation.addTranslation("Angel Heart", {ru: "Ангельское Сердце"});

mod_tip(ItemID.angelHeart)

IDRegistry.genItemID("angelAmulet"); 
Item.createItem("angelAmulet", "Angel Amulet", {name: "angel_amulet", meta: 0}, {stack: 1});
Translation.addTranslation("Angel Amulet", {ru: "Ангельский Амулет"});

mod_tip(ItemID.angelAmulet)

Item.setMaxDamage(ItemID.angelAmulet, 100)
Recipes.addShaped({id: ItemID.angelAmulet, data: Item.getMaxDamage(ItemID.angelAmulet), count: 1}, [
" x ",
"xox",
" x "
], ["x", ItemID.clitok, 0, "o", ItemID.angelHeart, 0]);

Callback.addCallback("ServerPlayerTick", function(player, isPlayerDead) {
var actor = new PlayerActor (player)
if(actor.getDimension()==rai1.id) {
var coords = Entity.getPosition(player)
if(Math.random() <= 0.4){
Mp.spawnParticle(rai_particle, coords.x+Math.random() * 15 - Math.random() * 15, coords.y+Math.random() * 5 - Math.random() * 5, coords.z+Math.random() * 15 - Math.random() * 15, Math.random()*0.1-Math.random()*0.1, Math.random()*0.1-Math.random()*0.1, Math.random()*0.1-Math.random()*0.1, 0);
}
} 
});

Callback.addCallback("ServerPlayerTick", function (player){
	var actor = new PlayerActor (player)
	if(actor.getDimension()==rai1.id) {
	var region = BlockSource.getDefaultForActor(player)
	var coords = Entity.getPosition(player)
	var surf = GenerationUtils.findSurface(Math.floor(coords.x), coords.y, Math.floor(coords.z))
	if(region.getBlockId(Math.floor(coords.x), surf.y, Math.floor(coords.z)) == BlockID.crimsonGrass || region.getBlockId(Math.floor(coords.x), surf.y, Math.floor(coords.z)) == BlockID.crimsonDirt){
		var slot = itemInHotbar (ItemID.angelAmulet, player)
		if(slot.id && slot.data < Item.getMaxDamage(slot.id)){
Mp.spawnParticle(rai_particle, Math.floor(coords.x) + Math.random(), coords.y + Math.random(), Math.floor(coords.z) + Math.random(), 0, -0.01, 0)
	Mp.spawnParticle(rai_particle, Math.floor(coords.x) + Math.random(), (coords.y - 1) + Math.random(), Math.floor(coords.z) + Math.random(), 0, -0.01, 0)
if(World.getThreadTime()%100 == 0){
actor.setInventorySlot(slot.slot, slot.id, slot.count, slot.data + 1, slot.extra)}
                }
                else {
                	Entity.setFire(player, 40, true)
			}
		}
		else if(World.getThreadTime()%100==0){
			let slot = itemInHotbar(ItemID.angelAmulet, player)
				if(slot.id && slot.data > 0){
					actor.setInventorySlot(slot.slot, slot.id, slot.count, slot.data - 1, slot.extra)
				}
			}
		}
	});

function itemInHotbar(id, player){
	let actor = new PlayerActor (player)
	for(let i = 0; i < 8; i++){
		let slot = actor.getInventorySlot(i)
		if(slot.id == id) return {slot:i,id:slot.id,count:slot.count,data:slot.data,extra:slot.extra}
		}
		return {}
	}

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
for(i = 0; i < 4; i++){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            setWood(coords.x, coords.y-1, coords.z);
}
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
    	if(random.nextFloat() < 0.01){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            World.setBlock(coords.x, coords.y, coords.z, BlockID.deadGrass)
}
} 
});



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {
    for(i = 0; i < 15; i++){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            if(World.getBlock(coords.x, coords.y+1, coords.z).id==0){
            World.setBlock(coords.x, coords.y+1, coords.z, BlockID.trava, 0);

} 
}
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId == rai1.id) {
    if(Math.random() * 20<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.grass2){
            if(World.getBlock(coords.x, coords.y+1, coords.z).id==0){
                World.setBlock(coords.x, coords.y+1, coords.z, BlockID.a0, 0);
            }
}
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==rai1.id){
if (Math.random()*5 <= 3){
    for(var i = 0; i < 4; i++){
        
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 0, 20);
        GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.ore, 10, 30, true);

} 
} 
}
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        if(Math.random() * 20<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("wood.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        if(Math.random() * 100<=0.4){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("wood.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId == rai1.id){
        if(Math.random() * 10<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("dc2_rtualRai.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
	if(dimensionId == rai1.id){
        let random1 = Math.random() * 10;
        if(random1<=1){
            var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 10);
            coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
            Dungeon.setStructure("wood3.json", coords.x, coords.y, coords.z, 0);
} 
} 
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.Gem){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
Dimensions.transfer(player, rai1.id);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
Entity.setCarriedItem(player, ItemID.GemEarth, 1, 0);
Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
coords = GenerationUtils.findHighSurface(coords.x, coords.z)
setTimeout (function (){
Entity.setPosition(player, coords.x, coords.y, coords.z)}, 200)
} 
}
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){

if(item.id==ItemID.Gem2){
let b = BlockSource.getDefaultForActor(player);
if(b.getBlock(coords.x, coords.y, coords.z).id == BlockID.block1) {
Dimensions.transfer(player, rai1.id);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
Entity.setCarriedItem(player, ItemID.GemEarth2, 1, 0);
Entity.addEffect(player, Native.PotionEffect.damageResistance, 9, 100);
coords = GenerationUtils.findHighSurface(coords.x, coords.z)
setTimeout (function (){
Entity.setPosition(player, coords.x, coords.y, coords.z)}, 200)
} 
}
});

Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.GemEarth){
Dimensions.transfer(player, 0);
Entity.setCarriedItem(player, item.id, item.count-1, item.data);
coords = GenerationUtils.findSurface(coords.x, 255,coords.z)
setTimeout (function (){
Entity.setPosition(player, coords.x, coords.y, coords.z)}, 300)

}
});
Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player){ 
if(item.id==ItemID.GemEarth2){
Dimensions.transfer(player, 0);
Entity.setCarriedItem(player, ItemID.Gem2, 1, 0);
coords = GenerationUtils.findSurface(coords.x, 255, coords.z)
setTimeout (function (){
Entity.setPosition(player, coords.x, coords.y, coords.z)}, 300)
}
});





// file: boss.js

Item.registerUseFunction("glas", function(coords, item, block, player)
{
let b = BlockSource.getDefaultForActor(player);

if(b.getBlockId(coords.x, coords.y, coords.z)==BlockID.altar3){
if(b.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.altar1){
if(b.getBlockId(coords.x, coords.y - 1, coords.z + 1)==41){
if(b.getBlockId(coords.x, coords.y - 1, coords.z - 1)==41){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z)==41){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z)==41){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z + 1)==BlockID.altar){
if(b.getBlockId(coords.x - 1, coords.y - 1, coords.z - 1)==BlockID.altar){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z + 1)==BlockID.altar){
if(b.getBlockId(coords.x + 1, coords.y - 1, coords.z - 1)==BlockID.altar){

b.setBlock(coords.x, coords.y, coords.z, 0, 0)
let boss = b.spawnEntity(coords.x, coords.y, coords.z, "dc:boss0");
Entity.addEffect(boss,
Native.PotionEffect.regeneration, 2, 9999999, true, false) ;
b.setBlock(coords.x, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z, 0, 0)
b.setBlock(coords.x, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x, coords.y - 1, coords.z - 1, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x + 1, coords.y - 1, coords.z - 1, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z + 1, 0, 0)
b.setBlock(coords.x - 1, coords.y - 1, coords.z - 1, 0, 0)

}
}
}
}
}
}
}
}
} 
}} 
);
Callback.addCallback('EntityDeath', function (entity, attacker, damageType) {
if(Entity.getTypeName(entity) == "dc:boss0<>"){
let B = BlockSource.getDefaultForActor(entity);
let pos = Entity.getPosition(entity);
if(Math.random()<=0.8){
B.spawnDroppedItem(pos.x, pos.y+1, pos.z, BlockID.statua, 1, 0, null);
}
if(Math.random()<=0.05){
B.spawnDroppedItem(pos.x, pos.y+1, pos.z, ItemID.clitok1, Math.floor(Math.random()*2), 0, null);
}

}
});
Callback.addCallback("EntityHurt", function (attacker, victim, damageValue, damageType, someBool1, someBool2) {
    if(Entity.getTypeName(attacker) == "dc:boss0<>"){
        Entity.addEffect(victim, 15, 1, 100, false, false)
        Entity.addEffect(victim, 15, 1, 120, false, false)
    }
});




// file: api/Ritual.js

Ritual.arr2 = [];
Ritual.addCraft2 = function (id, result, mana){
    Ritual.arr2.push({id: id, result: result, mana: mana});
};
Ritual.get2 = function (id){
    for(i in Ritual.arr2){
        if(Ritual.arr2[i].id == id){
            return Ritual.arr2[i];
        }
    }
};
Ritual.obj3 = {};
Ritual.register3 = function (id, mana){
    Ritual.obj3[id] = {obj: {mana: mana}, arr: []};
};
Ritual.addCraft3 = function (id, result){
    Ritual.obj3[id].arr.push(result);
};
Ritual.get3 = function (id){
    return Ritual.obj3[id];
};




// file: items/посохи/sorcerer_staff.js

IDRegistry.genItemID("sorcererStaff"); 
Item.createItem("sorcererStaff", "sorcerer staff", {name: "sorcerer_staff", meta: 0}, {stack: 1});
Translation.addTranslation("sorcerer staff", {ru: "посох чародея"});

mod_tip(ItemID.sorcererStaff)

Item.registerUseFunction("sorcererStaff", function(coords, item, block, player){
    if(block.id == BlockID.blockmetal){
        for(let i = 0;i<=15;i++){
            Mp.spawnParticle(PartType.magic, coords.x + Math.random(), coords.y + Math.random(), coords.z + Math.random(), 0, Math.random()/10, 0);
        }
        let bs = BlockSource.getDefaultForActor(player);
        bs.setBlock(coords.x, coords.y, coords.z, BlockID.manaStorage, 0);
        World.addTileEntity(coords.x, coords.y, coords.z);
    }
});
Item.addCreativeGroup("staff", Translation.translate("staff"), [
	  ItemID.sorcererStaff,
	  ItemID.stick2,
]);
/*
name: "mage", 
magisMax: 100, 
magis: 5,
        ProtectionMax: 40,
        Protection: 0,
        necromancerMax: 10,
        necromancer: 0,
        AspectsMax: 100000,
        AspectsNow: 5000,
        Aspects: 0
*/
function isItem(ent){
    
}
ModAPI.addAPICallback("AncientWondersAPI", function(api){
    api.Wands.addStick({
        id: ItemID.sorcererStaff, 
        time: 13,
        texture: {
            name: "sorcerer_staff"
        },
        bonus: {
            necromancer: 5,
            magis: 5,
            aspects: 5
        }
    });
    IDRegistry.genItemID("srollAttack"); 
    Item.createItem("srollAttack", "scroll: attacks \n will hit mobs within a 5 block radius", {name: "sroll", meta: 0}, {stack: 1});
    
    mod_tip(ItemID.srollAttack)
    Translation.addTranslation("scroll: attacks \n will hit mobs within a 5 block radius", {ru: "свиток: атаки \n отакует мобов в радиусе 5 блоков"});
    
    IDRegistry.genItemID("srollRegen"); 
    Item.createItem("srollRegen", "Scroll: Recovery \n sucks from the nearest mobs mana", {name: "sroll", meta: 0}, {stack: 1});
    
    mod_tip(ItemID.srollRegen)
    
    Translation.addTranslation("Scroll: Recovery \n sucks from the nearest mobs mana", {ru: "свиток: восстановления \n высасывает из ближайших мобов ману"});
    Ritual.register3(ItemID.sroll3, 1000);
    Ritual.addCraft3(ItemID.sroll3, ItemID.srollAttack);
    Ritual.addCraft3(ItemID.sroll3, ItemID.srollRegen);

 api.Wands.setPrototype(ItemID.srollAttack, {
    type: "function", 
    compatibility: [ItemID.sroll1], 
    activate: {
        necromancer: 10,
        magis: 15,
        aspects: 20
    },
    setFunction: function(packet){
        let class = {};
        class.mana = ManaCore.get(packet.player);
        if(class.mana.count >= 50){
            class.mana.count-=50;
            ManaCore.set(packet.player, class.mana);
            let pos = Entity.getPosition(packet.entity);
            let ents = Entity.getAllInRange(pos, 5);
            Entity.damageEntity(packet.entity, 5);
            for(let i in ents){
			            if(Entity.getTypeName(ents[i])!="minecraft:item<>"){
                     Entity.damageEntity(ents[i], 5);
                    pos = Entity.getPosition(ents[i]);
                    for(let i = 0;i<=5;i++){
                         Mp.spawnParticle(PartType.magic, pos.x + Math.random(), pos.y + Math.random(), pos.z + Math.random(), 0, Math.random()/10, 0);
                    }
                }
            }
        }else{
            Mp.message(packet.player,  "нужна маны 50");
        }
    }, 
    installation: function (player, item){
        Entity.setCarriedItem(player, item.id, item.count-1, item.data, null);
    }
});
    
    api.Wands.setPrototype(ItemID.srollRegen, {
        type: "function",
        compatibility: [ItemID.sroll1, ItemID.sroll3],
        activate: {
            necromancer: 15,
            magis: 30,
            aspects: 20
        },
        setFunction: function (packet){
            let pos = Entity.getPosition(packet.player);
            let m = ManaCore.get(packet.player);
            let ents = Entity.getAllInRange(pos,5);
            for(let i in ents){
                if(ents[i] != packet.player) if(Player.isPlayer(ents[i])){
                    let m2 = ManaCore.get(ents[i]);
                    let pos2 = Entity.getPosition(ents[i]);
                    if(m2.count <= 0){
                        Entity.setHealth(ents[i], 0);
                    }else{
                        m2.count -= 5;
                        ManaCore.set(ents[i], m2);
                        Entity.damageEntity(ents[i], 5);
                    }
                    if(m.count + 5 <= m.countMax){
                        ParticlesAPI.coords(PartType.magic, pos2.x, pos2.y, pos2.z, pos.x, pos.y, pos.z, 50);
                        m.count += 5;
                    }
                }else{
                    let pos2 = Entity.getPosition(ents[i]);
                    Entity.damageEntity(ents[i], 5);
                    if(m.count + 5 <= m.countMax){
                        ParticlesAPI.coords(PartType.magic, pos2.x, pos2.y, pos2.z, pos.x, pos.y, pos.z, 50);
                        m.count += 5;
                    }
                }
            }
            ManaCore.set(packet.player, m);
        },
        installation: function (player, item){
            Entity.setCarriedItem(player, item.id, item.count-1, item.data, null);
        }
    });
});




// file: entity.js

Entity.tradeArr = [];
Entity.addTrade = function (item, result, count){
    count = count || {};
    count.min = count.min || 1;
    count.max = count.max || 1;
    item.data = item.data || 0;
    item.count = item.count || 1;
    result.data = result.data || 0;
    Entity.tradeArr.push({item: item, result: result, count: count});
};
Callback.addCallback("EntityInteract", function (entity, player) {
    if(Entity.getTypeName(entity) == "dc:angel<>"){
        let item = Entity.getCarriedItem(player); 
        let bs = BlockSource.getDefaultForActor(player);
        let coords = Entity.getPosition(entity);
        for(i in Entity.tradeArr){
            let obj = Entity.tradeArr[i];
            if(item.id == obj.item.id && item.count >= obj.item.count){
                if(DA) ac.give(player,  "DungeonAchievement", "trade");
                let count = Math.floor(Math.random()*(obj.count.min))+obj.count.min;
                bs.spawnDroppedItem(coords.x, coords.y, coords.z, obj.result.id, count, obj.result.data, null);
                delItem(player, {id: obj.item.id, count: item.count-(obj.item.count-1), data: obj.item.data});
            }
        }
    }
});




// file: mods.js

if(config.debug.prohibitedItems){
    Item.addToCreative(BlockID.sap, 1, 0, null);
    Item.addToCreative(BlockID.trava, 1, 0, null);
    Item.addToCreative(BlockID.a0, 1, 0, null);
    Item.addToCreative(BlockID.a1, 1, 0, null);
    Item.addToCreative(BlockID.kristaldirt, 1, 0, null);
    Item.addToCreative(BlockID.kristalFire, 1, 0, null);
    Item.addToCreative(BlockID.kristalwind, 1, 0, null);
    Item.addToCreative(BlockID.kristalLight, 1, 0, null);
    Item.addToCreative(BlockID.brickkey, 1, 0, null);
    Item.addToCreative(BlockID.brick3, 1, 0, null);
    Item.addCreativeGroup("prohibited", Translation.translate("prohibited"), [
	      BlockID.sap,
	      BlockID.trava,
	      BlockID.a0,
	      BlockID.a1,
	      BlockID.kristaldirt,
	      BlockID.kristalFire,
	      BlockID.kristalwind,
	      BlockID.kristalLight,
	      BlockID.brickkey,
	      BlockID.brick3
    ]);
}


ModAPI.registerAPI("DungeonAPI", {
    ManaCore: ManaCore,
    Ritual: Ritual,
    Debug: Debug,
    Mp: Mp,
    ParticlesAPI: ParticlesAPI
});
let ac;
ModAPI.addAPICallback("AchievementsAPI", function(api){
    DA = true;
    ac = api.AchievementAPI;
	api.AchievementAPI.registerGroup({
        uid: "DungeonAchievement",
        name: "Dungeon craft",
        width: 600,
        height: 600,
        size: 100,
        background: "stone",
        icon: {
            id: BlockID.grass2
        }
    });
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "visitRai",
        name: Translation.translate("new world"),
        description: Translation.translate("visit paradise"),
        column: 1,
        row: 2,
        icon: {
            id: ItemID.Gem
        }
    });
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "visitRai2",
        name: Translation.translate("conqueror of worlds"),
        description: Translation.translate("survive in paradise and get out"),
        column: 1,
        row: 3,
        parent: "visitRai",
        icon: {
            id: ItemID.GemEarth
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "oreRai",
        name: Translation.translate("mysterious thing"),
        description: Translation.translate("get the ore of paradise"),
        column: 3,
        row: 3,
        parent: "visitRai",
        icon: {
            id: ItemID.clitok
        }
    });
    
   api.AchievementAPI.register("DungeonAchievement", {
        uid: "trade",
        name: Translation.translate("full of paradise?"),
        description: Translation.translate("trade with an angel"),
        column: 4,
        row: 2,
        parent: "visitRai",
        icon: {
            id: ItemID.koin_1
        }
    });
   
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "manaMax",
        name: Translation.translate("powerful magician"),
        description: Translation.translate("pump your mana pool to 100,000"),
        column: 5,
        row: 1,
        type: "challenge",
        parent: "trade",
        icon: {
            id: ItemID.DarkSphere
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "manaMax2",
        name: Translation.translate("powerful magician"),
        description: Translation.translate("pump your mana pool to 1,000,000"),
        column: 6,
        row: 1,
        type: "challenge",
        parent: "trade",
        icon: {
            id: ItemID.DarkSphere
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "killBoss0",
        name: Translation.translate("bloody eye"),
        description: Translation.translate("kill the boss of the eye"),
        column: 1,
        row: 8,
        type: "challenge",
        icon: {
            id: ItemID.glas
        }
    });
   
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "storageMagic",
        name: Translation.translate("storing magic"),
        description: Translation.translate("find a way to store magic"),
        column: 4,
        row: 4,
        parent: "oreRai",
        icon: {
            id: ItemID.RitualActivator
        }
    });
    
    api.AchievementAPI.register("DungeonAchievement", {
        uid: "Ritual1",
        name: Translation.translate("old magic"),
        description: Translation.translate("use new ore and boss statue"),
        column: 6,
        row: 4,
        parent: "storageMagic",
        icon: {
            id: BlockID.statua
        }
    });
    
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.Gem && block.id == BlockID.block1) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai");
    });
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.Gem2 && block.id == BlockID.block1) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai");
    });
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.GemEarth) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai2");
    });
    
    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.GemEarth2) api.AchievementAPI.give(player,  "DungeonAchievement", "visitRai2");
    });
    
    Callback.addCallback("DestroyBlock", function (coords, block, player) {
        if(block.id==BlockID.ore) api.AchievementAPI.give(player,  "DungeonAchievement", "oreRai");
    });
    

    Callback.addCallback("ItemUse", function(coords, item, block, isExternal, player) {
        if(item.id == ItemID.DarkSphere && ManaCore.get(player).countMax >= 100000) api.AchievementAPI.give(player,  "DungeonAchievement", "manaMax");
        if(item.id == ItemID.DarkSphere && ManaCore.get(player).countMax >= 1000000) api.AchievementAPI.give(player,  "DungeonAchievement", "manaMax2");
    });
    
    Callback.addCallback("EntityDeath", function (entity, attacker, damageType) {
        if(Entity.getTypeName(entity) == "dc:boss0<>" && Player.isPlayer(attacker)) api.AchievementAPI.give(attacker,  "DungeonAchievement", "killBoss0");
    });
    
    
    Translation.addTranslation("new world", {ru: "иной мир"});
    Translation.addTranslation("visit paradise", {ru: "посетите рай"});
    Translation.addTranslation("conqueror of worlds", {ru: "покоритель миров"});
    Translation.addTranslation("survive in paradise and get out", {ru: "выживите в раю и выберетесь"});
    Translation.addTranslation("mysterious thing", {ru: "загадочная вещь"});
    Translation.addTranslation("get the ore of paradise", {ru: "добудьте руду рая"});
    Translation.addTranslation("full of paradise?", {ru: "насатый рая?"});
    Translation.addTranslation("trade with an angel", {ru: "по торгуйте с ангелом"});
    Translation.addTranslation("powerful magician", {ru: "мощный маг"});
    Translation.addTranslation("pump your mana pool to 100,000", {ru: "прокачайте запас маны до 100.000"});
    Translation.addTranslation("pump your mana pool to 1,000,000", {ru: "прокачайте запас маны до 1,000,000"});
    Translation.addTranslation("bloody eye", {ru: "кровавое око"});
    Translation.addTranslation("kill the boss of the eye", {ru: "убейте босса око"});
    Translation.addTranslation("old magic", {ru: "древняя магия"});
    Translation.addTranslation("use new ore and boss statue", {ru: "используете новую руду и статую босса"});
    Translation.addTranslation("storing magic", {ru: "хранение магии"});
    Translation.addTranslation("find a way to store magic", {ru: "найдите способ хранить магию"});
    Translation.addTranslation("improvement time", {ru: "время улучшения"});
    Translation.addTranslation("use all basic rituals", {ru: "используете все базовые ритуалы"});
});
Callback.addCallback("RitualDC", function(player, type, coords){
    if(DA && type == "statua") ac.give(player,  "DungeonAchievement", "Ritual1");
});
ModAPI.addAPICallback("RecipeViewer", function(api){
    Callback.addCallback("LevelLoaded", function(){
        let RV = api.Core;
        let recipe = Ritual.arr1;
        let recipeList = [];
        let result;
        for(var i in recipe){
            result = recipe[i].obj;
            recipeList.push({
                mana: result.mana,
                input: [
                    {id: result.xp, count: 0, data: 0},
                    {id: result.xm, count: 0, data: 0},
                    {id: result.zp, count: 0, data: 0},
                    {id: result.zm, count: 0, data: 0}
                ],
                output: [
                    {id: recipe[i].id, count: 1, data: 0}
                ]
            });
        }
        RV.registerRecipeType("ritual1", {
            title: "ритуал создания/ritul create",
            contents: {
                icon: BlockID.statua,
                params: {slot: "_default_slot_light"},
                drawing: [],
                elements: {
                    output0: {x: 440, y: 150, size: 120},
                    input0: {x: 440, y: 0, size: 120},
                    input1: {x: 440, y: 300, size: 120}, 
                    input2: {x: 590, y: 150, size: 120},
                    input3: {x: 290, y: 150, size: 120},
                    textMana: {type: "text", x: 150, y: 350, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+data.mana);
            }
        });
        recipe = Ritual.arr2;
        recipeList = [];
        let obj;
        for(var i in recipe){
            obj = recipe[i];
            recipeList.push({
                input: [
                    {id: obj.id, count: 0, data: 0},
                ],
                output: [
                    {id: obj.result, count: 1, data: 0}
                ]
            });
        }
        RV.registerRecipeType("ritual2", {
            title: "ритуал улучшения/ritul update",
            contents: {
                icon: BlockID.rityal1,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                    textMana: {type: "text", x: 400, y: 150, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+Ritual.get2(data.input[0].id).mana);
            }
        });
        recipeList = [];
        let keys = Object.keys(Ritual.obj3);
        for(var g in keys){
            let key = keys[g];
            for(var i in Ritual.obj3[key].arr){
                recipeList.push({
                    input: [
                        {id: parseInt(key), data: 0},
                    ],
                    output: [
                        {id: Ritual.obj3[key].arr[i], count: 1, data: 0}
                    ] 
                });
            }
        }
        RV.registerRecipeType("ritual3", {
            title: "ритуал зачарование/ritul enchantment",
            contents: {
                icon: BlockID.rityal1,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                    textMana: {type: "text", x: 400, y: 150, font: {size: 40}},
                },
            },
            recipeList: recipeList,
            onOpen: function(elements, data){
                 elements.get("textMana").onBindingUpdated("text", "mana: "+Ritual.get3(data.input[0].id).obj.mana);
            }
        });
        recipeList = [];
        for(var g in Entity.tradeArr){
            let obj = Entity.tradeArr[g];
            recipeList.push({
                input: [
                    {id: obj.item.id, count: obj.item.count, data: obj.item.data},
                ],
                output: [
                    {id: obj.result.id, count: obj.count.max, data: obj.result.data}
                ] 
            });
        }
        RV.registerRecipeType("tradeAngel", {
            title: "торговля/trade",
            contents: {
                icon: 388,
                params: {slot: "_default_slot_light"},
                drawing: [
                    {type: "bitmap", x: 410, y: 200, scale: 7.5, bitmap: "furnace_bar_guide"}
                ],
                elements: {
                    output0: {x: 640, y: 200, size: 120},
                    input0: {x: 240, y: 200, size: 120},
                },
            },
            recipeList: recipeList,
        });
    });
});
ModAPI.addAPICallback("AncientWondersAPI", function(api){
    const MagicCore = api.MagicCore;
    Item.registerUseFunctionForID(ItemID.manysript2, function(coords, item, block, player) {
        let mana = ManaCore.get(player);
        if(mana.count >= 5000){
            MagicCore.piece(player, "magis");
            MagicCore.piece(player, "Protection");
            MagicCore.piece(player, "necromancer");
            if(MagicCore.isClass(player)){
                mana.count-=5000;
            }
            ManaCore.set(player, mana);
        }else{
            Mp.message(player, "у вас не хватает маны, нужно не меньше 5000");
        }
        
    });
    MagicCore.setArmor(ItemID.armor1, "Protection", 70);
    MagicCore.setArmor(ItemID.armor2, "Protection", 70);
    MagicCore.setArmor(ItemID.armor3, "Protection", 70);
    MagicCore.setArmor(ItemID.armor4, "Protection", 70);
    MagicCore.setArmor(ItemID.armor5, "Protection", 60);
    MagicCore.setArmor(ItemID.armor6, "Protection", 60);
    MagicCore.setArmor(ItemID.armor7, "Protection", 60);
    MagicCore.setArmor(ItemID.armor8, "Protection", 60);
});




// file: craft/ritual.js

Callback.addCallback("ModsLoaded", function () {
    Ritual.register3(ItemID.manysript1, 1000);
    Ritual.addCraft3(ItemID.manysript1, ItemID.manysript2);
    Ritual.register3(ItemID.Drune0, 1000);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune1);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune2);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune3);
    Ritual.addCraft3(ItemID.Drune0, ItemID.Drune4);
    Ritual.register3(ItemID.idal, 5000);
    Ritual.addCraft3(ItemID.idal, ItemID.idalSave);
    Ritual.addCraft3(ItemID.idal, ItemID.idalGifts);


    
    Ritual.addCraft2(ItemID.armor5, ItemID.armor1, 40000);
    Ritual.addCraft2(ItemID.armor6, ItemID.armor2, 40000);
    Ritual.addCraft2(ItemID.armor7, ItemID.armor3, 40000);
    Ritual.addCraft2(ItemID.armor8, ItemID.armor4, 40000);
    Ritual.addCraft2(ItemID.sword_2, ItemID.sword_1, 30000);
    Ritual.addCraft2(ItemID.pickaxe_2, ItemID.pickaxe_1, 30000);
    Ritual.addCraft2(ItemID.clitok, ItemID.clitok1, 20000);
    Ritual.addCraft2(ItemID.keyDungeon, ItemID.keyDungeon2, 10000);
    
    Entity.addTrade({id: ItemID.crystalLightning}, {id: ItemID.ring});
    Entity.addTrade({id: ItemID.koin_0}, {id: ItemID.clitok1});
    Entity.addTrade({id: ItemID.koin_1}, {id: ItemID.DarkSphere});
    Entity.addTrade({id: ItemID.Drune2}, {id: ItemID.keyDungeon});
    Entity.addTrade({id: 266, count: 8}, {id: ItemID.gotovka});
    
    Ritual.addCraft1(0, {
        xp: ItemID.Gem2,
        xm: ItemID.Gem2,
        zp: ItemID.Gem2,
        zm: ItemID.Gem2,
        mana: 0
     }, function(player, x, y, z){
         let mana = ManaCore.get(player);
         if(mana.count+4000<=mana.countMax){
             mana.count += 4000;
         }else{
             mana.count = mana.countMax;
         }
         ManaCore.set(player, mana);
     });
     Ritual.addCraft1(0, {
        xp: ItemID.Gem,
        xm: ItemID.Gem,
        zp: ItemID.Gem,
        zm: ItemID.Gem,
        mana: 0
     }, function(player, x, y, z){
         let mana = ManaCore.get(player);
         if(mana.count+1000<=mana.countMax){
             mana.count += 1000;
         }else{
             mana.count = mana.countMax;
         }
         ManaCore.set(player, mana);
     });
     /*Ritual.addCraft1(ItemID.poic1, {
        xp: ItemID.gotovka,
        xm: ItemID.Gem,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        xp: ItemID.Gem,
        xm: ItemID.gotovka,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        zp: ItemID.Gem,
        zm: ItemID.gotovka,
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.poic1, {
        zp: ItemID.gotovka,
        zm: ItemID.Gem,
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});*/
     Ritual.addCraft1(ItemID.clitok, {
        zp: ItemID.crystalearth,
        zm: ItemID.crystalearth,
        xp: ItemID.crystalLightning,
        xm: ItemID.crystalLightning,
        mana: 1000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok, {
        xp: ItemID.crystalearth,
        xm: ItemID.crystalearth,
        zp: ItemID.crystalLightning,
        zm: ItemID.crystalLightning,
        mana: 1000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok1, {
        zp: ItemID.crystalearth,
        zm: ItemID.crystalearth,
        xp: ItemID.crystalfire,
        xm: ItemID.crystalfire,
        mana: 15000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.clitok1, {
        xp: ItemID.crystalearth,
        xm: ItemID.crystalearth,
        zp: ItemID.crystalfire,
        zm: ItemID.crystalfire,
        mana: 15000
     }, function(player, x, y, z){});
     Ritual.addCraft1(ItemID.Gem, {
        xp: ItemID.clitok,
        xm: ItemID.clitok,
        zp: ItemID.clitok,
        zm: ItemID.clitok,
        mana: 5000
     }, function(player, x, y, z){});
     
     Ritual.addGrowth(BlockID.kristalFire);
     Ritual.addGrowth(BlockID.kristaldirt);
     Ritual.addGrowth(BlockID.kristalwind);
     Ritual.addGrowth(BlockID.kristalLight);
});




// file: craft/block.js

Callback.addCallback("LevelLoaded", function () {


Recipes.addShaped({id: BlockID.blockmetal, count: 1, data: 0}, 
	["aaa", "aaa", "aaa"],
	['a', ItemID.clitok, 0]);

Recipes.addShaped({id: BlockID.board, count: 4, data: 0}, 
	["###", "#a#", "###"],
	['a', BlockID.Breastya, 0]);

Recipes.addShaped({id: 58, count: 1, data: 0}, 
	["aa#", "aa#", "###"],
	['a', BlockID.board, 0]);

Recipes.addShaped({id: 54, count: 1, data: 0}, 
	["aaa", "a*a", "aaa"],
	['a', BlockID.board, 0]);

Recipes.addShaped({id: BlockID.rityal1, count: 1, data: 0}, 
	["aga", "aba", "aba"],
	['a', ItemID.clitok, 0, 'b', 1, 0, 'g', 264, 0]);

Recipes.addShaped({id: BlockID.brick2, count: 8, data: 0}, 
	["bbb", "bab", "bbb"],
	['a', ItemID.clitok, 0, 'b', BlockID.stone2, 0]);

Recipes.addShaped({id: BlockID.ritualGL, count: 1, data: 0}, 
	["gag", "bab", "bab"],
	['b', ItemID.clitok, 0, 'a', 1, 0, 'g', ItemID.clitok1, 0]);

Recipes.addShaped({id: BlockID.MagicStorage, count: 1, data: 0}, 
	["gbg", "bab", "gbg"],
	['b', ItemID.clitok, 0, 'a', 1, 0, 'g', ItemID.clitok1, 0]);

Recipes.addShaped({id: BlockID.gubok1, count: 1, data: 0}, 
	["aaa", "aga", "aga"],
	['a', ItemID.clitok, 0,'g', 1, 0,]);
	Recipes.addShaped({id: BlockID.gubok2, count: 1, data: 0}, 
["aga", "aga", "aga"],
	['a', ItemID.clitok, 0,'g', 1, 0,]);
});


















// file: craft/item.js

Callback.addCallback("LevelLoaded", function () {


Recipes.addShaped({id: ItemID.stick2, count: 1, data: 0},
	["**a", "*b*", "b**"], 
	['a', BlockID.blockmetal, 0, 'b', 280, 0]);


Recipes.addShaped({id: ItemID.Drune0, count: 4, data: 0},
	["***", "*b*", "***"], 
	['b', BlockID.altar, 0]);


Recipes.addShaped({id: ItemID.RitualActivator, count: 1, data: 0}, 
	["*a*", "a*a", "*a*"], 
	['a', ItemID.clitok, 0]
); 

Recipes.addShaped({id: ItemID.armor5, count: 1, data: 0}, 
	["aaa", "a*a", "***"], 
	['a', ItemID.clitok, 0]
);


Recipes.addShaped({id: ItemID.armor6, count: 1, data: 0}, 
	["a*a", "aaa", "aaa"], 
	['a', ItemID.clitok, 0] 
);


Recipes.addShaped({id: ItemID.armor7, count: 1, data: 0}, 
	["aaa", "a*a", "a*a"], 
	['a', ItemID.clitok, 0] 
);


Recipes.addShaped({id: ItemID.armor8, count: 1, data: 0}, 
	["***", "a*a", "a*a"], 
	['a', ItemID.clitok, 0] 
);

/*
Recipes.addShaped({id: ItemID.sword_2, count: 1, data: 0}, 
	["*a*", "*a*", "*b*"], 
	['a', ItemID.clitok, 0, 'b', 280, 0] 
);
*/

Recipes.addShaped({id: 280, count: 1, data: 0}, 
	["#a#", "#a#", "###"],
	['a', BlockID.board, 0]);

Recipes.addShaped({id: 270, count: 1, data: 0}, 
	["aaa", "#b#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 268, count: 1, data: 0}, 
	["#a#", "#a#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 269, count: 1, data: 0}, 
	["#a#", "#b#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 271, count: 1, data: 0}, 
	["aa#", "ab#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: 290, count: 1, data: 0}, 
	["aa#", "#b#", "#b#"],
	['a', BlockID.board, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.sword_2, count: 1, data: 0}, 
	["*a*", "*a*", "*g*"], 
	['a', ItemID.clitok, 0, 'b', 280, 0, 'g', 399, 0]);

Recipes.addShaped({id: ItemID.pickaxe_2, count: 1, data: 0}, 
	["aaa", "*g*", "*b*"], 
	['a', ItemID.clitok, 0, 'b', 280, 0, 'g', 399, 0]);

Recipes.addFurnace(BlockID.ore, ItemID.clitok, 0);
Recipes.addFurnace(BlockID.blockmetal, BlockID.glass2, 0);
});




