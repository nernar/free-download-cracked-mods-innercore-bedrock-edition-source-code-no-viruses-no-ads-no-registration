/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 5
*/



// file: blocks and items.js


IMPORT("SoundAPI");

const Mistical = new Sound("Light.ogg");
const Opening = new Sound("Opening.ogg");

var BLOCK_TYPE_FIRE = Block.createSpecialType({
	lightlevel:8,
	rendertype: 91,
	sound: "grass"
});
var BLOCK_TYPE_PRINT = Block.createSpecialType({
	lightlevel:10,
	sound: "glass",
	destroytime: -1
});
IDRegistry.genBlockID("fironia");
Block.createBlock("fironia", [
	{name: "Fironia", texture: [["fironia",0]], inCreative: true}
],BLOCK_TYPE_FIRE);
Translation.addTranslation("Fironia", {ru: "§6Пылающий огнецвет"});

var render1 = new ICRender.Model();
var model1 = BlockRenderer.createModel();
var Fironiashape = new ICRender.CollisionShape();
var entry = Fironiashape.addEntry();
entry.addBox( 0, 0, 0, 0, 0,0 ) 
BlockRenderer.setCustomCollisionShape(BlockID.fironia, -1,Fironiashape)

render1.addEntry(model1);
IDRegistry.genBlockID("eucalyptusLog");
Block.createBlock("eucalyptusLog", [
	{name: "Eucaluptus", texture: [["eucalyptus", 0], ["eucalyptus", 0], ["eucalyptus", 1], ["eucalyptus", 1], ["eucalyptus", 1], ["eucalyptus", 1]], inCreative: true},
	{name: "Eucaluptus", texture: [["eucalyptus", 1], ["eucalyptus", 1], ["eucalyptus", 1], ["eucalyptus", 1], ["eucalyptus", 0], ["eucalyptus", 0]], inCreative: false},
	{name: "Eucaluptus", texture: [["eucalyptus", 1], ["eucalyptus", 1], ["eucalyptus", 0], ["eucalyptus", 0], ["eucalyptus", 1], ["eucalyptus", 1]], inCreative: false}
], "opaque");

IDRegistry.genBlockID("bark_eucalyptus");
Block.createBlock("bark_eucalyptus",[{name: "Bark Eucalyptus", texture: [["eucalyptus_bark", 0],["eucalyptus_bark", 0],["bark_eucalyptus", 0],["bark_eucalyptus", 0],["bark_eucalyptus", 0],["bark_eucalyptus", 0]], inCreative: true} ]);
Translation.addTranslation("Bark Eucalyptus",{
ru: "Обтёсанный эвкалипт"
})

IDRegistry.genBlockID("bark_pink");
Block.createBlock("bark_pink",[{name: "Bark Pink Log", texture: [["barkPink", 0],["barkPink", 0],["barkPink", 1],["barkPink", 1],["barkPink", 1],["barkPink", 1]], inCreative: true} ]);
Translation.addTranslation("Bark Pink Log",{
ru: "Обтёсанное розовое дерево"
})

Block.setDestroyTime(BlockID.eucalyptusLog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.eucalyptusLog, "wood");
Translation.addTranslation("Eucaluptus", {ru: "§aЭвкалипт"});
Block.createBlock("pinkLog", [
	{name: "Pink Wood", texture: [["pinkWood", 0], ["pinkWood", 0], ["pinkWood", 1], ["pinkWood", 1], ["pinkWood", 1], ["pinkWood", 1]], inCreative: true},
	{name: "Pink Wood", texture: [["pinkWood", 1], ["pinkWood", 1], ["pinkWood", 1], ["pinkWood", 1], ["pinkWood", 0], ["pinkWood", 0]], inCreative: false},
	{name: "Pink Wood", texture: [["pinkWood", 1], ["pinkWood", 1], ["pinkWood", 0], ["pinkWood", 0], ["pinkWood", 1], ["pinkWood", 1]], inCreative: false}
], "opaque");
Block.registerDropFunction("pinkLog", function(coords, blockID){
	return [[BlockID.pinkLog, 1, 0]];
});
Recipes.addShaped({id: BlockID.pink_planks, count: 4, data: 2}, ["vvv", "vlv", "vvv"], ["l", BlockID.pinkLog, -1]);
Recipes.addShaped({id: BlockID.eucalyptus_planks, count: 4, data: 2}, ["vvv", "vlv", "vvv"], ["l", BlockID.eucalyptusLog, -1]);
Block.setDestroyTime(BlockID.pinkLog, 0.4);
Block.setDestroyTime(BlockID.eucalyptusLog, 0.4);
ToolAPI.registerBlockMaterial(BlockID.pinkLog, "wood");

Recipes.addShaped({id: VanillaBlockID.chest, count: 4, data: 0}, [
    "bbb",
    "b b",
    "bbb"
], ['b', BlockID.eucalyptusLog, 0]);

Recipes.addShaped({id: VanillaBlockID.chest, count: 4, data: 0}, [
    "bbb",
    "b b",
    "bbb"
], ['b', BlockID.pinkLog, 0]);

Recipes.addShaped({id: VanillaBlockID.chest, count: 4, data: 0}, [
    "bbb",
    "b b",
    "bbb"
], ['b', BlockID.pink_planks, 0]);

Recipes.addShaped({id: VanillaBlockID.chest, count: 4, data: 0}, [
    "bbb",
    "b b",
    "bbb"
], ['b', BlockID.eucalyptus_planks, 0]);

Translation.addTranslation("Pink Wood", {ru: "Розовое Дерево"});

IDRegistry.genBlockID("pink_planks");
Block.createBlock("pink_planks", [
	{name: "Pink planks", texture: [["pink_planks",0]], inCreative: true}
]);
Translation.addTranslation("Pinks planks", {ru: "Доски из розового дерева"});

IDRegistry.genBlockID("eucalyptus_planks");
Block.createBlock("eucalyptus_planks", [
	{name: "Eucalyptus planks", texture: [["eucalyptus_planks",0]], inCreative: true}
]);
Translation.addTranslation("Eucalyptus planks", {ru: "§aДоски эвкалипта"});

IDRegistry.genBlockID("hewn_eucalyptus");
Block.createBlock("hewn_eucalyptus", [
	{name: "Eucalyptus hewn", texture: [["eucalyptus",1]], inCreative: true}
]);
Translation.addTranslation("Eucalyptus hewn", {ru: "§aКора эвкалипта"});

IDRegistry.genBlockID("hewn_pink_log");
Block.createBlock("hewn_pink_log", [
	{name: "Pink hewn", texture: [["pinkWood",1]], inCreative: true}
]);
Translation.addTranslation("Pink hewn", {ru: "Кора розового дерева"});

IDRegistry.genBlockID("dungeon_print_bricks");
Block.createBlock("dungeon_print_bricks", [
	{name: "Dungeon old brick", texture: [["dungeon_brick",0]], inCreative: true}
]);
Translation.addTranslation("Dungeon old brick", {ru: "Кирпич древнего сооружения"});
ToolAPI.registerBlockMaterial(BlockID.dungeon_print_bricks, "unbreaking", 4);
IDRegistry.genBlockID("dungeon_print_bricks_active");
Block.createBlock("dungeon_print_bricks_active", [
	{name: "Dungeon print active brick", texture: [["mysterious print",0]], inCreative: false}
], BLOCK_TYPE_PRINT);
Translation.addTranslation("Dungeon print active brick", {ru: "Кирпич древнего сооружения с магической пробуждённой печатью"});

IDRegistry.genBlockID("dungeon_print_bricks_active_1");
Block.createBlock("dungeon_print_bricks_active_1", [
	{name: "Dungeon print active brick", texture: [["print color",0]], inCreative: false}
], BLOCK_TYPE_PRINT);

IDRegistry.genBlockID("dungeon_print_bricks_deactive");
Block.createBlock("dungeon_print_bricks_deactive", [
	{name: "Dungeon print deactive brick", texture: [["deactive print",0]], inCreative: true}
]);
Translation.addTranslation("Dungeon print deactive brick", {ru: "Кирпич древнего сооружения с магической печатью"});
ToolAPI.registerBlockMaterial(BlockID.dungeon_print_bricks_deactive, "unbreaking", 4);



IDRegistry.genItemID("blueCrystal");
Item.createItem("blueCrystal", "Blue Crystal", {name: "blue_crystal"});
Translation.addTranslation("Blue Crystal", {ru: "§9Сумеречный кристалл"});
IDRegistry.genItemID("orangeCrystal");
Item.createItem("orangeCrystal", "Orange Crystal", {name: "orange_crystal"});
Translation.addTranslation("Orange Crystal", {ru: "§6Пылающий кристалл"}); Recipes.addShaped({id: ItemID.blueCrystal, count: 1, data: 0}, ["ldl", "lsl", "ddd"], ["d", 264, -1, "d", 3, -1, "l", 18, -1, "s", 6, -1]);

IDRegistry.genItemID("infinite_print");
Item.createItem("infinite_print", "Castle print", {name: "print"});
Translation.addTranslation("Castle print", {ru: "§6Печать замка"});

IDRegistry.genItemID("infinite_print_1");
Item.createItem("infinite_print_1", "Castle print", {name: "print color"});

Callback.addCallback("ItemUse", function(coords, item, block, isExter, player){ 
if(item.id == ItemID.blueCrystal){ 
Dimensions.transfer(player, InfinityForest.id);
}
if(item.id == ItemID.orangeCrystal){ 
Dimensions.transfer(player, 0);
}
if(item.id == ItemID.infinite_print && block.id == BlockID.dungeon_print_bricks_deactive){var region = BlockSource.getDefaultForActor(player);
if(region.getBlockId(coords.x,coords.y-1,coords.z)==BlockID.dungeon_print_bricks_deactive&&region.getBlockId(coords.x,coords.y,coords.z)==BlockID.dungeon_print_bricks_deactive&&
region.getBlockId(coords.x,coords.y+1,coords.z)==BlockID.dungeon_print_bricks_deactive&&
region.getBlockId(coords.x+1,coords.y,coords.z)==BlockID.dungeon_print_bricks_deactive&&
region.getBlockId(coords.x-1,coords.y,coords.z)==BlockID.dungeon_print_bricks_deactive){region.setBlock(coords.x,coords.y,coords.z,BlockID.dungeon_print_bricks_active,0);

Mistical.play();
}

}

if(item.id == ItemID.infinite_print_1 && block.id == BlockID.dungeon_print_bricks_deactive){var region = BlockSource.getDefaultForActor(player);
if(region.getBlockId(coords.x,coords.y-1,coords.z)==BlockID.dungeon_print_bricks_deactive&&region.getBlockId(coords.x,coords.y,coords.z)==BlockID.dungeon_print_bricks_deactive&&
region.getBlockId(coords.x,coords.y+1,coords.z)==BlockID.dungeon_print_bricks_deactive&&
region.getBlockId(coords.x+1,coords.y,coords.z)==BlockID.dungeon_print_bricks_deactive&&
region.getBlockId(coords.x-1,coords.y,coords.z)==BlockID.dungeon_print_bricks_deactive){region.setBlock(coords.x,coords.y,coords.z,BlockID.dungeon_print_bricks_active_1,0);

Mistical.play();
}

}
});

TileEntity.registerPrototype(BlockID.dungeon_print_bricks_active,{
    defaultValues: {onemessage: 0},
	useNetworkItemContainer: true,
    tick: function(){
        Opening.play();
        if(World.getThreadTime()%60 == 0){
 this.blockSource.destroyBlock(this.x,this.y,this.z,false);
this.blockSource.destroyBlock(this.x,this.y-1,this.z,false);
this.blockSource.destroyBlock(this.x,this.y+1,this.z,false);
this.blockSource.destroyBlock(this.x+1,this.y-1,this.z,false);
this.blockSource.destroyBlock(this.x+1,this.y+1,this.z,false);
this.blockSource.destroyBlock(this.x+1,this.y,this.z,false);

this.blockSource.setBlock(this.x-1,this.y-1,this.z-1,BlockID.dungeon_print_bricks_deactive,0);
this.blockSource.setBlock(this.x-1,this.y-1,this.z-2,BlockID.dungeon_print_bricks_deactive,0);
this.blockSource.setBlock(this.x-1,this.y,this.z-1,BlockID.dungeon_print_bricks_active_1,0);
this.blockSource.setBlock(this.x-1,this.y,this.z-2,BlockID.dungeon_print_bricks_deactive,0);
this.blockSource.setBlock(this.x-1,this.y+1,this.z-1,BlockID.dungeon_print_bricks_deactive,0);
this.blockSource.setBlock(this.x-1,this.y+1,this.z-2,BlockID.dungeon_print_bricks_deactive,0);


if(this.data.onemessage == 0){
Game.message("§9Дух леса пропустил вашу душу");
    this.data.onemessage+=1}
}

	},
	destroy: function (id,count,data,coords,block,id){
	  
	}}
	);
	
	TileEntity.registerPrototype(BlockID.dungeon_print_bricks_active_1,{
    defaultValues: {onemessage: 0},
	useNetworkItemContainer: true,
    tick: function(){
        Opening.play();
       if(World.getThreadTime()%60 == 0){
 this.blockSource.destroyBlock(this.x,this.y,this.z,false);
this.blockSource.destroyBlock(this.x,this.y-1,this.z,false);
this.blockSource.destroyBlock(this.x,this.y+1,this.z,false);
this.blockSource.destroyBlock(this.x,this.y-1,this.z+1,false);
this.blockSource.destroyBlock(this.x,this.y+1,this.z+1,false);
this.blockSource.destroyBlock(this.x,this.y,this.z+1,false);
this.blockSource.destroyBlock(this.x,this.y-1,this.z-1,false);
this.blockSource.destroyBlock(this.x,this.y+1,this.z-1,false);
this.blockSource.destroyBlock(this.x,this.y,this.z-1,false);

this.blockSource.setBlock(this.x,this.y,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x,this.y-1,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x,this.y+1,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x+1,this.y-1,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x+1,this.y+1,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x+1,this.y,this.z+1,BlockID.dungeon_print_bricks_active,0);

this.blockSource.setBlock(this.x+2,this.y-1,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x+2,this.y+1,this.z+1,BlockID.dungeon_print_bricks_deactive,0);

this.blockSource.setBlock(this.x+2,this.y,this.z+1,BlockID.dungeon_print_bricks_deactive,0);


if(this.data.onemessage == 0){
Game.message("§9Дух леса пропустил вашу душу");
    this.data.onemessage+=1}
}

	},
	destroy: function (id,count,data,coords,block,id){
	  
	}}
	);




// file: dimension.js

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
                  /*  Debug.message("spawn particle");*/
                }else{
                    Debug.message("[error]spawn particle");
                }
            } 
    }
    
    function randomInt(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const UniqueGen = {
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight) {
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    },
    generateOre: function(id, data, chunkX, chunkZ, random, params) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    },
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params) {
        for (let i = 0; i < params.veinCounts; i++) {
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
};

var InfinityForest = new Dimensions.CustomDimension("InfinityForest", 75); 

 //InfinityForest.setFogColor(0, .6, .3);
 InfinityForest.setSkyColor(.4, .4, .5);

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
InfinityForest.setGenerator(generator);


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId,block,id,coords){
if (dimensionId != InfinityForest.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(2, 3); i++){

 if(World.getBlock(coords.x,coords.y,coords.z)==0){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.fironia,0);   
    }
}});

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
	if(Player.getDimension()==InfinityForest.id){
		addGlowworm(pos);
	for(var i = 0; i<3; i++){
		addFire(pos);
	}
	}
	if(Player.getDimension()==InfinityForest.id){
	   
		World.setWorldTime(13300);
	}
});




Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.andesite, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 120, 
 size: randomInt(4, 40), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.diorite, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 120, 
 size: randomInt(4, 40), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.granite, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 120, 
 size: randomInt(4, 40), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.iron_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 60, 
 size: randomInt(4, 7), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.redstone_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 35, 
 size: randomInt(4, 6), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.lapis_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 30, 
 size: randomInt(4, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.coal_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 4, 
 minY:2, 
 maxY: 100, 
 size: randomInt(4, 8), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.gold_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 40, 
 size: randomInt(3, 5), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.emerald_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 1, 
 minY:2, 
 maxY: 15, 
 size: randomInt(1, 4), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(VanillaBlockID.diamond_ore, 0, chunkX, chunkZ, random, { 
 veinCounts: 1, 
 minY:2, 
 maxY:20, 
 size: randomInt(2, 7), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

ModAPI.addAPICallback("ICore", function(api){
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(BlockID.oreCopper, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 60, 
 size: randomInt(1, 3,9,5,4), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
 



Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
 UniqueGen.generateOreInDimension(BlockID.oreTin, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 50, 
 size: randomInt(1, 3,6), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
 
 
});


 
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
UniqueGen.generateOreInDimension(BlockID.oreSilver, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 40, 
 size: randomInt(1, 3,5), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
UniqueGen.generateOreInDimension(BlockID.oreUranium, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 40, 
 size: randomInt(2, 4), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});

 
 
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
UniqueGen.generateOreInDimension(BlockID.oreIridium, 0, chunkX, chunkZ, random, { 
 veinCounts: 2, 
 minY:2, 
 maxY: 40, 
 size: randomInt(2, 4,3), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
 
});
})});
 

ModAPI.addAPICallback("SpacesAPI", function(api){
     
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
UniqueGen.generateOreInDimension(BlockID.ore_copper_sc, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 60, 
 size: randomInt(2, 4,3,7), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
UniqueGen.generateOreInDimension(BlockID.ore_tin_sc, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 60, 
 size: randomInt(2, 4,3), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId, player) { 
 if (dimensionId != InfinityForest.id) return; 
UniqueGen.generateOreInDimension(BlockID.ore_aluminum_sc, 0, chunkX, chunkZ, random, { 
 veinCounts: 3, 
 minY:2, 
 maxY: 60, 
 size: randomInt(2, 4,6,7), 
 mode: true, 
 check: [VanillaBlockID.stone] 
 }); 
});



});




// file: structure.js

//для старых структур 
function setStructureWorld(name, coords, rotation){
let stru = FileTools.ReadJSON(__dir__+"/objects/"+name);
for(let i in stru){
switch(rotation || 0){
case 0:
var x1 = stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 1:
var x1 = stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
case 2:
var x1 = -stru[i].x;
var y1 = stru[i].y;
var z1 = stru[i].z;
break;
case 3:
var x1 = -stru[i].z;
var y1 = stru[i].y;
var z1 = stru[i].x;
break;
}
World.setBlock(x1+coords.x, y1+coords.y, z1+coords.z, stru[i].id, stru[i].data);
}
}
//для новых структур 
IMPORT("DungeonCore");
IMPORT("TileRender");
DungeonCore.setPath("objects/");
//генератор предметов 
let gen = new ItemGenerate.advanced();
gen.addItem(264, 0.1);
gen.addItem(266, 0.2, {slotMax: 3, slotMin: 0, max: 3});
gen.addItem(VanillaItemID.totem, 0.01);
gen.addItem(VanillaItemID.bone, 0.8, {slotMax: 3, slotMin: 1, max: 2});
gen.addItem(265, 0.6, {slotMax: 3, slotMin: 1, max: 3});
gen.addItem(VanillaItemID.rotten_flesh, 1, {slotMax: 4, slotMin: 1, max: 2});
Callback.addCallback("ModsLoaded", function (){
    gen.addItem(ItemID.clitok, 0.3, {slotMax: 2, max: 2});
    gen.addItem(ItemID.keyDungeon, 0.2);
    gen.addItem(ItemID.koin_1, 0.1);
    gen.addItem(ItemID.manysript1, 0.3)
    gen.addItem(ItemID.piece4, 0.5)
    gen.addItem(ItemID.ingotCopper, 0.4, {slotMax: 2, max: 2})
    gen.addItem(ItemID.ingotBlue, 0.2, {slotMax: 2, max: 2})
});
gen.addItem(ItemID.orange_crystal, 0.2);
Callback.addCallback("PreProcessChunk", function(chunkX, chunkZ, random, dimension){
if(dimension == InfinityForest.id){
    for(let i = 0;i <= random.nextInt(14)+2;i++){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(4+i), 96, chunkZ*16 + random.nextInt(4+i));
if(World.getBlock(coords.x, coords.y+1, coords.z).id==0)World.setBlock(coords.x, coords.y+1, coords.z, 31, random.nextInt(2));
}
let r = random.nextInt(1000);
if(r == 1){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
Utility.setStruc("structure2", coords);
gen.fillChest(coords.x, coords.y, coords.z);
}else if(r <= 3){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
DungeonCore.setStructure("structure1", coords.x, coords.y, coords.z);
gen.fillChest(coords.x, coords.y+2, coords.z);
}else if(r <= 8){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("cottage.json", coords, 0);
}else if(r <= 30){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("chest.json", coords, 0);
gen.fillChestSid(coords.x, coords.y+8, coords.z, random);
}/*else if(r <= 830){
let coords = GenerationUtils.findSurface(chunkX*16 + random.nextInt(16), 96, chunkZ*16 + random.nextInt(16));
setStructureWorld("oak_"+(random.nextInt(1)+1)+".json", coords, random.nextInt(3));
}*/
}
});




// file: Eucalyptus Tree.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.2){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
   World.setBlock(coords.x-6,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-6,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-5,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-5,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-5,coords.y+17,coords.z-2,18,0);                  World.setBlock(coords.x-5,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-4,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-4,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x-4,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+10,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-5,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z+0,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+5,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-4,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+10,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+6,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+13,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y0,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+1,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+2,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+3,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+4,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+5,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+12,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+13,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z+0,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-1,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+13,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+14,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+4,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+5,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-4,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+2,coords.y+13,coords.z-2,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+1,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+4,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+4,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+5,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+5,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-4,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-4,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-3,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-2,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-2,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+3,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+5,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+7,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-5,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-4,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-4,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+4,coords.y+14,coords.z-4,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-5,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-4,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-4,BlockID.eucalyptusLog,0);                  World.setBlock(coords.x+5,coords.y+14,coords.z-4,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+6,coords.y+13,coords.z-4,18,0);                  World.setBlock(coords.x+6,coords.y+13,coords.z-3,18,8)
    
}}}})




// file: Pink Tree and oak & birch.js

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
   World.setBlock(coords.x-6,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-6,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-5,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-5,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-5,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-5,coords.y+17,coords.z-2,18,0);                  World.setBlock(coords.x-5,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-4,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-4,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-4,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x-4,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x-4,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-4,coords.y+10,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-5,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-4,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-3,18,0);                  World.setBlock(coords.x-3,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-2,18,0);                  World.setBlock(coords.x-3,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+17,coords.z-1,18,0);                  World.setBlock(coords.x-3,coords.y+16,coords.z+0,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+1,18,0);                  World.setBlock(coords.x-3,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+3,BlockID.pinkLog,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+3,18,0);                  World.setBlock(coords.x-3,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+4,18,0);                  World.setBlock(coords.x-3,coords.y+10,coords.z+5,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-4,18,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-4,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-2,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+14,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+16,coords.z+0,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+1,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-2,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+10,coords.z+2,18,0);                  World.setBlock(coords.x-2,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x-2,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-3,18,0);                  World.setBlock(coords.x-1,coords.y+6,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-2,18,0);                  World.setBlock(coords.x-1,coords.y+6,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+16,coords.z-1,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+13,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x-1,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+1,BlockID.pinkLog,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+14,coords.z+1,18,0);                  World.setBlock(coords.x-1,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x-1,coords.y+9,coords.z+2,18,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z-2,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y+15,coords.z-1,18,0);                  World.setBlock(coords.x+0,coords.y0,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+1,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+2,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+3,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+4,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+5,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+10,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+11,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+12,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+13,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z+0,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+15,coords.z+0,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+1,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+14,coords.z+1,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x+0,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x+0,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z-1,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+13,coords.z-1,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+11,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+12,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+13,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+14,coords.z+0,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+10,coords.z+1,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+2,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x+1,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+3,BlockID.pinkLog,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+4,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x+1,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+5,18,0);                  World.setBlock(coords.x+1,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-4,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-2,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+13,coords.z-2,18,0);                  World.setBlock(coords.x+2,coords.y+10,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+1,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+2,18,0);                  World.setBlock(coords.x+2,coords.y+6,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+3,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+3,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+4,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+4,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x+2,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+5,BlockID.pinkLog,0);                  World.setBlock(coords.x+2,coords.y+9,coords.z+5,18,0);                  World.setBlock(coords.x+2,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-4,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-3,BlockID.pinkLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-2,BlockID.pinkLog,0);                  World.setBlock(coords.x+3,coords.y+13,coords.z-2,18,0);                  World.setBlock(coords.x+3,coords.y+11,coords.z-1,18,0);                  World.setBlock(coords.x+3,coords.y+12,coords.z-1,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+3,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+3,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+9,coords.z+4,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+5,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+5,18,0);                  World.setBlock(coords.x+3,coords.y+7,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+6,18,0);                  World.setBlock(coords.x+3,coords.y+8,coords.z+7,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-5,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-4,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+4,coords.y+14,coords.z-4,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+4,coords.y+11,coords.z-2,18,0);                  World.setBlock(coords.x+4,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-5,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-5,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-4,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-4,BlockID.pinkLog,0);                  World.setBlock(coords.x+5,coords.y+14,coords.z-4,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-3,18,0);                  World.setBlock(coords.x+5,coords.y+13,coords.z-3,18,0);                  World.setBlock(coords.x+5,coords.y+12,coords.z-2,18,0);                  World.setBlock(coords.x+6,coords.y+13,coords.z-4,18,0);                  World.setBlock(coords.x+6,coords.y+13,coords.z-3,18,8)
    
}}}})

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
World.setBlock(coords.x,coords.y+1,coords.z,17,0);   
World.setBlock(coords.x,coords.y+2,coords.z,17,0);   
World.setBlock(coords.x,coords.y+3,coords.z,17,0);   


World.setBlock(coords.x + 1,coords.y+3,coords.z,18,0);  
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,0);   
World.setBlock(coords.x + 1,coords.y+3,coords.z+ 1,18,0);  
World.setBlock(coords.x - 1,coords.y+3,coords.z- 1,18,0);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,0);   
World.setBlock(coords.x - 1,coords.y+3,coords.z+ 1,18,0);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,0);   
World.setBlock(coords.x + 1,coords.y+3,coords.z,18,0);   
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,0);   
World.setBlock(coords.x,coords.y+4,coords.z-1,18,0);   


    
    World.setBlock(coords.x,coords.y+4,coords.z,18,0);   
    World.setBlock(coords.x,coords.y+4,coords.z- 1,18,0); 
    World.setBlock(coords.x,coords.y+4,coords.z+ 1,18,0);   
    World.setBlock(coords.x - 1,coords.y+4,coords.z,18,0);   
    World.setBlock(coords.x + 1,coords.y+4,coords.z,18,0);   
    
    World.setBlock(coords.x,coords.y+5,coords.z,18,0); 
    
}}}})

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.6){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {
World.setBlock(coords.x,coords.y+1,coords.z,17,2);   
World.setBlock(coords.x,coords.y+2,coords.z,17,2);   
World.setBlock(coords.x,coords.y+3,coords.z,17,2);   


World.setBlock(coords.x + 1,coords.y+3,coords.z,18,2);  
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,2);   
World.setBlock(coords.x + 1,coords.y+3,coords.z+ 1,18,2);  
World.setBlock(coords.x - 1,coords.y+3,coords.z- 1,18,2);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,2);   
World.setBlock(coords.x - 1,coords.y+3,coords.z+ 1,18,2);  
World.setBlock(coords.x + 1,coords.y+3,coords.z- 1,18,2);   
World.setBlock(coords.x + 1,coords.y+3,coords.z,18,2);   
World.setBlock(coords.x - 1,coords.y+3,coords.z,18,2);   
World.setBlock(coords.x,coords.y+3,coords.z-1,18,2);   


    
    World.setBlock(coords.x,coords.y+4,coords.z,18,2);   
    World.setBlock(coords.x,coords.y+4,coords.z- 1,18,2); 
    World.setBlock(coords.x,coords.y+4,coords.z+ 1,18,2);   
    World.setBlock(coords.x - 1,coords.y+4,coords.z,18,2);   
    World.setBlock(coords.x + 1,coords.y+4,coords.z,18,2);   
    
    World.setBlock(coords.x,coords.y+5,coords.z,18,2); 
    
}}}})


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
    if(dimensionId==InfinityForest.id){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 120);                  
    if(Math.random() < 0.4){
    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);                  

if(World.getBlock(coords.x,coords.y+1,coords.z).id === 0 && GenerationUtils.canSeeSky(coords.x, coords.y + 1, coords.z)) {  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.fironia,0);   
    }
    
}}})




