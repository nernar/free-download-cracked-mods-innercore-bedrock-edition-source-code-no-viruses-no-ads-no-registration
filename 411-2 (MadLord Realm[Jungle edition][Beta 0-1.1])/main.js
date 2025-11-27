/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 14
*/



// file: header.js

Callback.addCallback("LevelLoaded", function(){
Game.message("Добро пожаловать");
});
IMPORT("dimensions");
importLib("TOOLTYype", "*")




// file: config.js

var config = {
	/* --- Ores --- */
	spawn_ores: __config__.getBool("spawn_ores")
};




// file: vars.js

    var pos = Player.getPosition()

var random = function(min, max) {
    var floor = Math.floor(Math.random() * max) + min;
	if(floor > max){
		floor=floor-min;
		return floor;
	}
	return floor;
};

var BLOCK_TYPE_OLD_TREE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 1.9,
    explosionres: 1,
    opaque: true
});

var BLOCK_TYPE_ORE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3,
    opaque: true
}, "ore");

var BLOCK_TYPE_STONE = Block.createSpecialType({
 base: 1,
 solid: true,
 destroytime: 4,
 explosionres: 3
}, "stone");

var BLOCK_TYPE_BASE = Block.createSpecialType({
    base: 2,
    solid: true,
    destroytime: 0.1,
    explosionres: 1,
    opaque: true
});




// file: tool_material.js

ToolAPI.addToolMaterial("StoneTools", {durability: 80, level: 3, efficiency: 6, damage: 15, enchantability: 8});

ToolAPI.addToolMaterial("MentalTools", {durability: 150, level: 4, efficiency: 8, damage: 30, enchantability: 10});

ToolAPI.addToolMaterial("CrystasTools", {durability: 200, level: 6, efficiency: 14, damage: 50, enchantability: 30});




// file: dimension.js

const SKY_COLOR = [1.4, 0.4, 0.5];
const FOG_COLOR = [0.3, 0.6, 0.1];

var Jungle = new Dimension({
    name: "Jungle",
    
    generation: {
        layers: [
            //island
            {
                range: [5, 256],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .0275, .016]
                    }
                },
                
                gradient: [[0, -1], [.2, -.3], [0.5, .1], [.8, -.3], [1, -1]],
                terrain: {
                    base: 1,
                    cover: {
                        height: 4,
                        top: BlockID.Jungle_dirt,
                        block: 3
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: SKY_COLOR,
        fog: FOG_COLOR
    },
    callbacks: {
       tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("JungleChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
    }
});


var JungleTs = new TransferSequence(Jungle);
JungleTs.setPortalTimeout(40);

JungleTs.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

JungleTs.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("jungle_portal", ["null_portal", 0], JungleTs.getPortal(), {type: "u-plane", frameId: 48}, false);
JungleTs.setPortalTiles(BlockID.jungle_portal);





var shape = new PortalShape();
shape.setPortalId(BlockID.jungle_portal);
shape.setFrameIds(48);
shape.setMinSize(3, 3);

JungleTs.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.jungle_key) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 48 || block.id == BlockID.jungle_portal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.jungle_portal, [4]);
    }
});

var Particles = ModAPI.requireGlobal("Particles");

var jungle_part = Particles.registerParticleType({
 texture: "portal_particle",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100],
 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});
TileEntity.registerPrototype(BlockID.jungle_portal, {
			tick:function(){
				if(Math.random()<0.4){
					Particles.addFarParticle(jungle_part,this.x+Math.random()/1, this.y+Math.random()/1, this.z+Math.random()/1, 0, 0, 0,1);
				}
			}
			});




// file: tai_oan_gen.js

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.Tai_oan, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.Tai_oan, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.Tai_oan, 0);   
World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.Tai_oan, 0);   
World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.Tai_oan, 0);   //бревна тай-юанья

World.setBlock(coords.x+1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z-1, 18, 3);   

World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-1, 18, 3);   

World.setBlock(coords.x,coords.y+6,  coords.z, 18, 3);   
}}});


Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.Moss_log, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.Moss_log, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.Moss_log, 0);   
World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.Moss_log, 0);   
World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.Moss_log, 0);   //бревно мус_луг

World.setBlock(coords.x+1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+4,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+4,  coords.z-1, 18, 3);   

World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 18, 3);   
World.setBlock(coords.x+2,coords.y+4,  coords.z-2, 18, 3);   
World.setBlock(coords.x-2,coords.y+4,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-1, 18, 3);   

World.setBlock(coords.x,coords.y+6,  coords.z, 18, 3);   
}}});



Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.log_peach, 0);
World.setBlock(coords.x,coords.y+2,  coords.z, BlockID.log_peach, 0);  
World.setBlock(coords.x,coords.y+3,  coords.z, BlockID.log_peach, 0);   
World.setBlock(coords.x,coords.y+4,  coords.z, BlockID.log_peach, 0);   
World.setBlock(coords.x,coords.y+5,  coords.z, BlockID.log_peach, 0);   
World.setBlock(coords.x,coords.y+6,  coords.z, BlockID.log_peach, 0);  
  //бревно лог-пейч

World.setBlock(coords.x+1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+5,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+5,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-1, 18, 3);   

World.setBlock(coords.x+1,coords.y+5,  coords.z+2, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z+2, 18, 3);   
World.setBlock(coords.x+1,coords.y+5,  coords.z-2, 18, 3);   
World.setBlock(coords.x-1,coords.y+5,  coords.z-2, 18, 3);   

World.setBlock(coords.x+2,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 18, 3);   
World.setBlock(coords.x+2,coords.y+5,  coords.z-1, 18, 3);   
World.setBlock(coords.x-2,coords.y+5,  coords.z-1, 18, 3);   


World.setBlock(coords.x+1,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x+2,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x-2,coords.y+6,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z-1, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z+2, 18, 3);   
World.setBlock(coords.x,coords.y+6,  coords.z-2, 18, 3);   

World.setBlock(coords.x+1,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x+1,coords.y+6,  coords.z-1, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z-1, 18, 3);   

World.setBlock(coords.x+1,coords.y+6,  coords.z+2, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z+2, 18, 3);   
World.setBlock(coords.x+1,coords.y+6,  coords.z-2, 18, 3);   
World.setBlock(coords.x-1,coords.y+6,  coords.z-2, 18, 3);   

World.setBlock(coords.x+2,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 18, 3);   
World.setBlock(coords.x+2,coords.y+6,  coords.z-1, 18, 3);   
World.setBlock(coords.x-2,coords.y+6,  coords.z-1, 18, 3);   

World.setBlock(coords.x+1,coords.y+7,  coords.z, 18, 3);   
World.setBlock(coords.x-1,coords.y+7,  coords.z, 18, 3);   
World.setBlock(coords.x,coords.y+7,  coords.z+1, 18, 3);   
World.setBlock(coords.x,coords.y+7,  coords.z-1, 18, 3);   

World.setBlock(coords.x,coords.y+8,  coords.z, 18, 3);   
}}});




// file: tower_structure.js

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 0.03){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y,  coords.z+1, 4, 0);
World.setBlock(coords.x+1,coords.y,  coords.z+1, 4, 0);  
World.setBlock(coords.x-1,coords.y,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x+1,coords.y,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y,  coords.z+3, 4, 0);

World.setBlock(coords.x,coords.y+1, coords.z, 4, 0);
World.setBlock(coords.x,coords.y+2, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+3, coords.z, 71, 0);
World.setBlock(coords.x,coords.y+4, coords.z, 97, 3);
World.setBlock(coords.x,coords.y+5, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+5, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+6, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+7, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+8, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z, 97, 5);
World.setBlock(coords.x,coords.y+9, coords.z-1, 50, 0);
World.setBlock(coords.x,coords.y+10, coords.z, 101, 0);
World.setBlock(coords.x,coords.y+11, coords.z, 97, 2);
World.setBlock(coords.x,coords.y+12, coords.z, 97, 2);

World.setBlock(coords.x-1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+3,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x-1,coords.y+5,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+6,  coords.z, 97, 4);  
World.setBlock(coords.x-1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+1,coords.y+1,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z, 4, 0);  
World.setBlock(coords.x+1,coords.y+3,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+4,  coords.z, 97, 3);  
World.setBlock(coords.x+1,coords.y+5,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x+2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x+2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+1, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+1, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+1, 101, 0);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+2, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+2, 101, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+2, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+2, 97, 2);  

World.setBlock(coords.x-2,coords.y+1,  coords.z+3, 4, 0);  
World.setBlock(coords.x-2,coords.y+2,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+3,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+4,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+5,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+6,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+7,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+8,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+9,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+10,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+11,  coords.z+3, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+3, 101, 0);  

World.setBlock(coords.x,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x+1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x+1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+1,coords.y+12,  coords.z+4, 101, 0);  

World.setBlock(coords.x-1,coords.y+1,  coords.z+4, 4, 0);  
World.setBlock(coords.x-1,coords.y+2,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+3,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+4,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+5,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+6,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+7,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+8,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+9,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+10,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-1,coords.y+12,  coords.z+4, 101, 0);  
//СОНГЫ ЭТАЖ
World.setBlock(coords.x+2,coords.y+11,  coords.z, 48, 0);  
World.setBlock(coords.x+2,coords.y+12,  coords.z, 48, 0);  

World.setBlock(coords.x-2,coords.y+11,  coords.z, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z, 97, 2);  

World.setBlock(coords.x+2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x+2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-2,coords.y+11,  coords.z+4, 97, 2);  
World.setBlock(coords.x-2,coords.y+12,  coords.z+4, 97, 2);  

World.setBlock(coords.x-1,coords.y+10,  coords.z+1, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+2, 4, 0);   
World.setBlock(coords.x,coords.y+10,  coords.z+3, 4, 0);   
World.setBlock(coords.x-1,coords.y+10,  coords.z+3, 4, 0);

//лестница
World.setBlock(coords.x-1,coords.y+1,  coords.z+1, 4, 0);
World.setBlock(coords.x-1,coords.y+2,  coords.z+2, 4, 0);
World.setBlock(coords.x,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+3,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+4,  coords.z+2, 4, 0);
World.setBlock(coords.x-1,coords.y+5,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+6,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+7,  coords.z+3, 4, 0);
World.setBlock(coords.x+1,coords.y+8,  coords.z+1, 4, 0);
World.setBlock(coords.x,coords.y+9,  coords.z+1, 4, 0);
}}});




// file: tools.js

IDRegistry.genItemID("DjungleSword");
IDRegistry.genItemID("DjungleShovel");
IDRegistry.genItemID("DjunglePickaxe");
IDRegistry.genItemID("DjungleAxe");
Item.createItem("DjungleSword", "Копье", {name: "DjungleSword", meta:  0}, {stack: 1});
Item.createItem("DjungleShovel", "Лопата Джунгли", {name: "DjungleShovel", meta: 0}, {stack: 1});
Item.createItem("DjunglePickaxe", "Кирка Джунгли", {name: "DjunglePickaxe", meta: 0}, {stack: 1});
Item.createItem("DjungleAxe", "Топор Джунгли", {name: "DjungleAxe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.DjungleSword, "StoneTools", ToolType.sword);
ToolAPI.setTool(ItemID.DjungleShovel, "StoneTools", ToolType.shovel);
ToolAPI.setTool(ItemID.DjunglePickaxe, "StoneTools", ToolType.pickaxe);
ToolAPI.setTool(ItemID.DjungleAxe, "StoneTools", ToolType.axe);

Recipes.addShaped({id: ItemID.DjungleSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.Djcobblestone, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.DjungleShovel, count: 1, data: 0}, [
    "a",
    "c",
    "b"
], ['a', BlockID.Djcobblestone, 0, 'c', ItemID.djunglestring, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.DjunglePickaxe, count: 1, data: 0}, [
    "aaa",
    " c ",
    " b "
], ['a', BlockID.Djcobblestone, 0, 'c', ItemID.djunglestring, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.DjungleAxe, count: 1, data: 0}, [
    "aa",
    "ac",
    " b"
], ['a', BlockID.Djcobblestone, 0, 'c', ItemID.djunglestring, 0, 'b', 280, 0]);



IDRegistry.genItemID("CrystasSword");
IDRegistry.genItemID("CrystasShovel");
IDRegistry.genItemID("CrystasPickaxe");
IDRegistry.genItemID("CrystasAxe");
Item.createItem("CrystasSword", "Кристас Меч", {name: "Crystas_sword", meta:  0}, {stack: 1});
Item.createItem("CrystasShovel", "Кристас Лопата", {name: "Crystas_shovel", meta: 0}, {stack: 1});
Item.createItem("CrystasPickaxe", "Кристас Кирка", {name: "Crystas_pickaxe", meta: 0}, {stack: 1});
Item.createItem("CrystasAxe", "Кристас Топор", {name: "Crystas_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.CrystasSword, "CrystasTools", ToolType.sword);
ToolAPI.setTool(ItemID.CrystasShovel, "CrystasTools", ToolType.shovel);
ToolAPI.setTool(ItemID.CrystasPickaxe, "CrystasTools", ToolType.pickaxe);
ToolAPI.setTool(ItemID.CrystasAxe, "CrystasTools", ToolType.axe);

Recipes.addShaped({id: ItemID.CrystasSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.CrystasShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.CrystasPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.CrystasAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.Crystas_ingot, 0, 'b', 280, 0]);



IDRegistry.genItemID("MentalSword");
IDRegistry.genItemID("MentalShovel");
IDRegistry.genItemID("MentalPickaxe");
IDRegistry.genItemID("MentalAxe");
Item.createItem("MentalSword", "Ментал Меч", {name: "mental_sword", meta:  0}, {stack: 1});
Item.createItem("MentalShovel", "Ментал Лопата", {name: "mental_shovel", meta: 0}, {stack: 1});
Item.createItem("MentalPickaxe", "Ментал Кирка", {name: "mental_pickaxe", meta: 0}, {stack: 1});
Item.createItem("MentalAxe", "Ментал Топор", {name: "mental_axe", meta: 0}, {stack: 1});

ToolAPI.setTool(ItemID.MentalSword, "MentalTools", ToolType.sword);
ToolAPI.setTool(ItemID.MentalShovel, "MentalTools", ToolType.shovel);
ToolAPI.setTool(ItemID.MentalPickaxe, "MentalTools", ToolType.pickaxe);
ToolAPI.setTool(ItemID.MentalAxe, "MentalTools", ToolType.axe);

Recipes.addShaped({id: ItemID.MentalSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.MentalShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.MentalPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);

Recipes.addShaped({id: ItemID.MentalAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.mental_ingot, 0, 'b', 280, 0]);




// file: items.js

IDRegistry.genItemID("dn_real");
Item.createItem("dn_real", "Мини-квест лист", {name: "listok", meta: 0}, {stack: 1});
IDRegistry.genItemID("djunglestring");

Item.createItem("djunglestring", "Нить Джунгли", {name: "Djunglestring", meta: 0}, {stack: 64});
Block.registerDropFunctionForID(18, function(coords, blockID, blockData, level){
if (blockData == 3){
var drop = [];
if(Math.random()<3.0)
drop.push([ItemID.djunglestring, 1, 0]);
return drop;
}
});

IDRegistry.genItemID("jungle_key");
Item.createItem("jungle_key", "Ключ к вратам затерянных джунглей", {name: "junglekey", meta: 0}, {stack: 64});
Recipes.addShaped({id: ItemID.jungle_key, count: 1, data: 0}, [
    "  x",
    "xa ",
    "xx "
], ['a', ItemID.djunglestring, 0, 'x', 266, 0]);




// file: ores.js

//Руды Кусочками
IDRegistry.genItemID("mental_ore_piece");
Item.createItem("mental_ore_piece", "Образец ментальной руды", {name: "mental_ore_piece", meta: 0}, {stack: 64});

//Слитки
IDRegistry.genItemID("mental_ingot");
Item.createItem("mental_ingot", "Слиток ментальной руды", {name: "mental_ingot", meta: 0}, {stack: 64});

IDRegistry.genItemID("Crystas_ingot");
Item.createItem("Crystas_ingot", "Слиток Кристас", {name: "Crystas_ingot", meta: 0}, {stack: 64});


//Руды
IDRegistry.genBlockID("mental_ore"); 
Block.createBlock("mental_ore", [
    {name: "Ментальная руда", texture: 
    [["mental_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.mental_ore, "stone", 3, true);
Block.setDestroyTime(BlockID.mental_ore, 3.8);
Block.setDestroyLevel("mental_ore", 3);
Block.registerDropFunction("mental_ore", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[BlockID.mental_ore, 1, 0]];
        }
        var drop = [[ItemID.mental_ore_piece, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("Crystas_ore"); 
Block.createBlock("Crystas_ore", [
    {name: "Руда кристаса", texture: 
    [["Crystas_ore", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.Crystas_ore, "stone", 5, true);
Block.setDestroyTime(BlockID.Crystas_ore, 4.2);
Block.setDestroyLevel("Crystas_ore", 3);
Block.registerDropFunction("Crystas_ore", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[BlockID.Crystas_ore, 1, 0]];
        }
        var drop = [[BlockID.Crystas_ore, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

Callback.addCallback("PostLoaded", function(){
	if(config.spawn_ores){
		Callback.addCallback("GenerateChunkUnderground", function (chunkX, chunkZ) {
    for(var i=0;i<5;i++){
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 15, 55);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.mental_ore, 0, 6);
    }
}
)
Callback.addCallback("JungleChunk", function(chunkX, chunkZ){
for(var i = 0; i < 168; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 256);
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.Djcobblestone, 0, 7);
  
          } 
});
Callback.addCallback("JungleChunk", function(chunkX, chunkZ){
for(var i = 0; i < 56; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 1, 256);
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.Crystas_ore, 0, 5);
   
          } 
});
	}
});




// file: blocks.js

IDRegistry.genBlockID("Djcobblestone");
Block.createBlock("Djcobblestone", [
    {name: "Булыжник Джунгли", texture: [["Djcobblestone", 0]], inCreative: true}
], BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.Djcobblestone, "stone");

IDRegistry.genBlockID("Tai_oan");
Block.createBlock("Tai_oan", [
    {name: "Дерево тай-юань", texture: [["tai_top", 0], ["tai_top", 0], ["tai_log", 0], ["tai_log", 0], ["tai_log", 0], ["tai_log", 0]], inCreative: true}
], BLOCK_TYPE_OLD_TREE);
ToolAPI.registerBlockMaterial(BlockID.Tai_oan, "wood");

IDRegistry.genBlockID("Tai_oan_plank");
Block.createBlock("Tai_oan_plank", [
    {name: "Доски дерева тай-юань", texture: [["wood_planks", 0]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.Tai_oan_plank, "wood");

Recipes.addShaped({id: BlockID.Tai_oan_plank, count: 4, data: 0}, [
    "x  "
], ['x', BlockID.Tai_oan, 0]);

IDRegistry.genBlockID("Jungle_dirt");
Block.createBlock("Jungle_dirt", [
    {name: "Почва затерянных джунглей", texture: [["jungle_dirt", 0], ["jungle_dirt", 1], ["jungle_dirt", 2], ["jungle_dirt", 2], ["jungle_dirt", 2], ["jungle_dirt", 2]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.Jungle_dirt,"dirt",1,true);

IDRegistry.genBlockID("Moss_log");
Block.createBlock("Moss_log", [
    {name: "Замшелые бревна", texture: [["moss_log", 0], ["moss_log", 0], ["moss_log", 1], ["moss_log", 1], ["moss_log", 1], ["moss_log", 1]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.Moss_log, "wood");

IDRegistry.genBlockID("Moss_plank");
Block.createBlock("Moss_plank", [
    {name: "Замшелые доски", texture: [["moss_planks", 0]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.moss_plank, "wood");

Recipes.addShaped({id: BlockID.Moss_plank, count: 4, data: 0}, [
    "x  "
], ['x', BlockID.Moss_log, 0]);

IDRegistry.genBlockID("log_peach");
Block.createBlock("log_peach", [
    {name: "Дерево лог пейч", texture: [["log_peach_top", 0], ["log_peach_top", 0], ["log_peach", 0], ["log_peach", 0], ["log_peach", 0], ["log_peach", 0]], inCreative: true}
], BLOCK_TYPE_OLD_TREE);
ToolAPI.registerBlockMaterial(BlockID.log_peach, "wood");

IDRegistry.genBlockID("planks_peach");
Block.createBlock("planks_peach", [
    {name: "Доски лог пейч", texture: [["planks_peach", 0]], inCreative: true}
], BLOCK_TYPE_BASE);
ToolAPI.registerBlockMaterial(BlockID.planks_peach, "wood");

Recipes.addShaped({id: BlockID.planks_peach, count: 4, data: 0}, [
    "x  "
], ['x', BlockID.log_peach, 0]);




// file: furnace_craft.js

Recipes.addFurnace(ItemID.mental_ore_piece, ItemID.mental_ingot, 1);
Recipes.addFurnace(BlockID.Crystas_ore, ItemID.Crystas_ingot, 1);




// file: armor.js

IDRegistry.genItemID("DjHelmet");
IDRegistry.genItemID("DjChestplate");
IDRegistry.genItemID("DjLeggings");
IDRegistry.genItemID("DjBoots");

Item.createArmorItem("DjHelmet", "Шлем Джунглия", {name: "Djhelmet"}, {type: "helmet", armor: 2, durability: 30, texture: "armor/Djarmor_1.png"});
Item.createArmorItem("DjChestplate", "Нагрудник Джунглия", {name: "Djchestplate"}, {type: "chestplate", armor: 2, durability: 50, texture: "armor/Djarmor_1.png"});
Item.createArmorItem("DjLeggings", "Штаны Джунглия", {name: "Djleggings"}, {type: "leggings", armor: 2, durability: 40, texture: "armor/Djarmor_2.png"});
Item.createArmorItem("DjBoots", "Ботинки Джунглия", {name: "Djboots"}, {type: "boots", armor: 2, durability: 45, texture: "armor/Djarmor_1.png"});

Recipes.addShaped({id: ItemID.DjHelmet, count: 1, data: 0}, [
    "xax",
    "x x"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);

Recipes.addShaped({id: ItemID.DjChestplate, count: 1, data: 0}, [
    "a a",
    "xxx",
    "xxx"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);

Recipes.addShaped({id: ItemID.DjLeggings, count: 1, data: 0}, [
    "xxx",
    "a a",
    "x x"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);

Recipes.addShaped({id: ItemID.DjBoots, count: 1, data: 0}, [
    "a a",
    "x x"
], ['a', ItemID.djunglestring, 0, 'x', 334, 0]);



IDRegistry.genItemID("MentalHelmet");
IDRegistry.genItemID("MentalChestplate");
IDRegistry.genItemID("MentalLeggings");
IDRegistry.genItemID("MentalBoots");

Item.createArmorItem("MentalHelmet", "Ментал Шлем", {name: "mental_helmet"}, {type: "helmet", armor: 5, durability: 300, texture: "armor/mentalarmor_1.png"});
Item.createArmorItem("MentalChestplate", "Ментал Нагрудник", {name: "mental_chestplate"}, {type: "chestplate", armor: 5, durability: 500, texture: "armor/mentalarmor_1.png"});
Item.createArmorItem("MentalLeggings", "Ментал Штаны", {name: "mental_leggings"}, {type: "leggings", armor: 5, durability: 400, texture: "armor/mentalarmor_2.png"});
Item.createArmorItem("MentalBoots", "Ментал Ботинки", {name: "mental_boots"}, {type: "boots", armor: 5, durability: 450, texture: "armor/mentalarmor_1.png"});

Recipes.addShaped({id: ItemID.MentalHelmet, count: 1, data: 0}, [
    "aaa",
    "a a"
], ['a', ItemID.mental_ingot, 0]);

Recipes.addShaped({id: ItemID.MentalChestplate, count: 1, data: 0}, [
    "a a",
    "aaa",
    "aaa"
], ['a', ItemID.mental_ingot, 0]);

Recipes.addShaped({id: ItemID.MentalLeggings, count: 1, data: 0}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.mental_ingot, 0]);

Recipes.addShaped({id: ItemID.MentalBoots, count: 1, data: 0}, [
    "a a",
    "a a"
], ['a', ItemID.mental_ingot, 0]);



IDRegistry.genItemID("CrystasHelmet");
IDRegistry.genItemID("CrystasChestplate");
IDRegistry.genItemID("CrystasLeggings");
IDRegistry.genItemID("CrystasBoots");

Item.createArmorItem("CrystasHelmet", "Кристас Шлем", {name: "Crystas_helmet"}, {type: "helmet", armor: 7, durability: 500, texture: "armor/Crystas_1.png"});
Item.createArmorItem("CrystasChestplate", "Кристас Нагрудник", {name: "Crystas_chestplate"}, {type: "chestplate", armor: 7, durability: 700, texture: "armor/Crystas_1.png"});
Item.createArmorItem("CrystasLeggings", "Кристас Штаны", {name: "Crystas_leggings"}, {type: "leggings", armor: 7, durability: 600, texture: "armor/Crystas_2.png"});
Item.createArmorItem("CrystasBoots", "Кристас Ботинки", {name: "Crystas_boots"}, {type: "boots", armor: 7, durability: 650, texture: "armor/Crystas_1.png"});

Recipes.addShaped({id: ItemID.CrystasHelmet, count: 1, data: 0}, [
    "aaa",
    "a a"
], ['a', ItemID.Crystas_ingot, 0]);

Recipes.addShaped({id: ItemID.CrystasChestplate, count: 1, data: 0}, [
    "a a",
    "aaa",
    "aaa"
], ['a', ItemID.Crystas_ingot, 0]);

Recipes.addShaped({id: ItemID.CrystasLeggings, count: 1, data: 0}, [
    "aaa",
    "a a",
    "a a"
], ['a', ItemID.Crystas_ingot, 0]);

Recipes.addShaped({id: ItemID.CrystasBoots, count: 1, data: 0}, [
    "a a",
    "a a"
], ['a', ItemID.Crystas_ingot, 0]);




// file: flowers.js

IDRegistry.genItemID("flower1");
Item.createItem("flower1", "Двойной красный гладиолус", {name: "flower1", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower1"); 
 Block.createBlock("flower1", [{name: "Голубой цветок", texture: [["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0], ["flower1", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower1", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower1", 0);
render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID.flower1, -1, render);
Block.setBlockShape(BlockID.flower1, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});
Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower1){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower2");
Item.createItem("flower2", "Аконит", {name: "flower2", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower2"); 
 Block.createBlock("flower2", [{name: "Голубой цветок", texture: [["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0], ["flower2", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower2", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower2", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower2, -1, render);
Block.setBlockShape(BlockID.flower2, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower2){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});
  
IDRegistry.genItemID("flower3");
Item.createItem("flower3", "Двойной оранжевый космос", {name: "flower3", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower3"); 
  Block.createBlock("flower3", [{name: "Голубой цветок", texture: [["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0], ["flower3", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower3", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower3", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower3, -1, render);
Block.setBlockShape(BlockID.flower3, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower3){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower4");
Item.createItem("flower4", "Алое", {name: "flower4", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower4"); 
  Block.createBlock("flower4", [{name: "Голубой цветок", texture: [["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0], ["flower4", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower4", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower4", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower4, -1, render);
Block.setBlockShape(BlockID.flower4, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower4){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower5");
Item.createItem("flower5", "Желтый мак", {name: "flower5", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower5"); 
  Block.createBlock("flower5", [{name: "Голубой цветок", texture: [["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0], ["flower5", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower5", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower5", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower5, -1, render);
Block.setBlockShape(BlockID.flower5, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower5){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower6");
Item.createItem("flower6", "Эхинацея", {name: "flower6", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower6"); 
  Block.createBlock("flower6", [{name: "Голубой цветок", texture: [["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0], ["flower6", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower6", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower6", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower6, -1, render);
Block.setBlockShape(BlockID.flower6, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower6){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower7");
Item.createItem("flower7", "Двойное дно боярышника", {name: "flower7", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower7"); 
  Block.createBlock("flower7", [{name: "Голубой цветок", texture: [["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0], ["flower7", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower7", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower7", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower7, -1, render);
Block.setBlockShape(BlockID.flower7, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower7){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower8");
Item.createItem("flower8", "Маковое голубое дно", {name: "flower8", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower8"); 
  Block.createBlock("flower8", [{name: "Голубой цветок", texture: [["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0], ["flower8", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower8", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower8", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower8, -1, render);
Block.setBlockShape(BlockID.flower8, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower8){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

IDRegistry.genItemID("flower9");
Item.createItem("flower9", "Темное осто", {name: "flower9", meta: 0}, {stack: 64});
IDRegistry.genBlockID("flower9"); 
  Block.createBlock("flower9", [{name: "Голубой цветок", texture: [["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0], ["flower9", 0]], inCreative: false}]);
var model = BlockRenderer.createModel();
var render = new ICRender.Model();
model.addBox(7.999/16, 0/16, 0/16, 8.005/16, 16/16, 16/16, "flower9", 0);
model.addBox(0/16, 0/16, 7.999/16, 16/16, 16/16, 8.005/16, "flower9", 0);
render.addEntry(model);
BlockRenderer.setStaticICRender(BlockID.flower9, -1, render);
Block.setBlockShape(BlockID.flower9, {"x":0,"y":0,"z":0}, {"x":1,"y":0.008,"z":1});

Callback.addCallback("ItemUse", function(coords, item, block){
if(item.id==ItemID.flower9){
   World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0)
 Player.setCarriedItem(item.id, item.count-1, item.data, item.enchant);
}
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower1, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower2, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower3, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower4, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower5, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower6, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower7, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower8, 0);
}}});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {

    let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 5, 256);
    if(Math.random() < 1.9){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);

if(World.getBlockID(coords.x+1,coords.y,coords.z)==BlockID.Jungle_dirt){ 
       World.setBlock(coords.x,coords.y+1, coords.z, BlockID.flower9, 0);
}}});

Block.registerDropFunction(BlockID.flower1, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower1, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower2, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower2, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower3, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower3, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower4, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower4, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower5, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower5, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower6, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower6, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower7, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower7, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower8, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower8, 1, 0]);
	return drop;
});

Block.registerDropFunction(BlockID.flower9, function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.flower9, 1, 0]);
	return drop;
});




