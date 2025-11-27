/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 48
*/



// file: header.js

/*
 Aether Mod
 Open-Source example of dimensions module usage for Inner Core.
*/
IMPORT("Inventory");
//IMPORT("Structures");
//IMPORT("StructuresAPI");
IMPORT("TileRender");
IMPORT("PortalUtils");

const DIR = __dir__+"structures/";

let Flowers = WRAP_NATIVE("FlowerModule");

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var ctx = UI.getContext();

function runAsUI(func){
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            func();
        }catch(err){
            Game.message(err);
            alert(err);
        }}
    }));
}

Native.EntityType.HORSE = 23;
Native.EntityType.DONKEY = 24;
Native.EntityType.MULE = 25;
Native.EntityType.HORSE_SKELETON = 26;
Native.EntityType.HORSE_ZOMBIE = 27;
Native.EntityType.SKELETON_WITHER = 48;
Native.EntityType.WITCH = 45;
Native.EntityType.STRAY = 46;
Native.EntityType.HUSK = 47;
Native.EntityType.GUARDIAN = 49;
Native.EntityType.GUARDIAN_ELDER = 50;
Native.EntityType.ENDERMITE = 55;
Native.EntityType.SHULKER = 54;
Native.EntityType.END_DRAGON = 53;
Native.EntityType.WITHER = 52;

var Figure = function(id, x, y, z, mn, mx) {
let N = randomInt(mn, mx);
center = N / 2;
for(var i = 0; i < N; i++) {
 for(var l = 0; l < i; l++) {
   if(i <= center){
     if (l >= center - i && l <= center + i) {
     World.setBlock(x, y, z, id);
        } else {    
     World.setBlock(x, y, z, 0);       
        }
        } else {
      if (l >= center + i - N + 1 && l <= center - i + N - 1) {
       World.setBlock(x, y, z, id);
        } else {
       World.setBlock(x, y, z, 0);       
        }
      } 
    }  
  }
}




// file: api/GunRegistry.js


//some stuff
var Color = android.graphics.Color;
var LinearLayout = android.widget.LinearLayout;
var LayoutParams = android.widget.RelativeLayout.LayoutParams;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var View = android.view.View;


var GunRegistry = {
    guns: [],
    bullets: [],
    hurt: [],
    inGame: false,

    registerGun: function(gun){
gun.shooting = false;
GunRegistry.guns.push(gun);
        if(gun.automatic){
Item.registerNoTargetUseFunction(gun.gun, GunRegistry.switchShooting);

Item.registerUseFunction(gun.gun, GunRegistry.switchShooting);
        }else{
Item.registerNoTargetUseFunction(gun.gun, GunRegistry.shoot);

Item.registerUseFunction(gun.gun, GunRegistry.shoot);
        }
    },

    

getGun: function(gunId){
        for(var i in GunRegistry.guns){
            let gun = GunRegistry.guns[i];
            if(gun.gun == gunId)
                return gun;
        }
        return false;
    },

switchShooting: function(){
let gun = GunRegistry.getGun(Player.getCarriedItem().id);
gun.shooting = !gun.shooting;

   },

    disableShooting: function(){
for(var i in GunRegistry.guns){

GunRegistry.guns[i].shooting = false;
        }
    },

    

shoot: function(){
let gun = GunRegistry.getGun(Player.getCarriedItem().id);

if(PlayerInventory.retrieveItem(gun.bullet)){

let coords = Entity.getPosition(Player.get());

let lookAngle = Entity.getLookAngle(Player.get()); 
let velocity = {
                x: -Math.sin(lookAngle.yaw) * gun.speed,
                y: Math.sin(lookAngle.pitch) * gun.speed,
                z: Math.cos(lookAngle.yaw) * gun.speed
            }

let entity = Entity.spawn(coords.x, coords.y, coords.z, 80);

GunRegistry.bullets.push({"entity": entity, damage: gun.damage});

Entity.setSkin(entity, gun.skin);

Entity.setVelocity(entity, velocity.x, velocity.y, velocity.z);
        }
    },
  
showAim: function(gun){
if(GunRegistry.aimShown || !GunRegistry.inGame) return;

runAsUI(function(){
GunRegistry.aimShown = true;
GunRegistry.aimImage.setImageBitmap(gun.aim);

GunRegistry.windowAim.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 0, 0);
        });
        if(gun.fov){
Player.setFov(gun.fov);
        }
    },   
hideAim: function(){

        if(!GunRegistry.aimShown) return;

runAsUI(function(){
GunRegistry.windowAim.dismiss();
GunRegistry.aimShown = false;
GunRegistry.disableShooting();
        });
        Player.resetFov();
    }
};

runAsUI(function(){
//Main layout of the whole window
var layoutMain = new LinearLayout(ctx);

layoutMain.setOrientation(0);

layoutMain.setGravity(Gravity.CENTER);

var params = new LinearLayout.LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);

layoutMain.setLayoutParams(params);
GunRegistry.aimImage = new android.widget.ImageView(ctx);

layoutMain.addView(GunRegistry.aimImage);

    
//Popup Window for displaying the staff
GunRegistry.windowAim = new android.widget.PopupWindow(layoutMain, LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);

GunRegistry.windowAim.setTouchable(false);

GunRegistry.windowAim.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
});


Callback.addCallback("ProjectileHit", function (projectile, item, target) {
GunRegistry.bullets = GunRegistry.bullets.filter(function(bullet){

if(bullet.entity == projectile){
Entity.remove(projectile);
if(target.entity != -1){
GunRegistry.hurt.push({entity: target.entity, damage: bullet.damage});
            }
            return false;
        }
        return true;
    });
});

Callback.addCallback("EntityHurt", function(attacker, victim, damage){
var entity = -1;
let gun = GunRegistry.getGun(Player.getCarriedItem().id);
GunRegistry.hurt = GunRegistry.hurt.filter(function(ent){
        if(ent.entity == victim){
entity = ent;
            return false;
    }
    if(entity != -1){   
Entity.damageEntity(entity.entity, entity.damage);

Entity.addEffect(entity.entity, gun.effect, 1, gun.efftime, false,false);

Entity.addEffect(Player.get(), gun.playereff, 1, gun.plefftime, false,false);

Entity.setFire(entity.entity, gun.ftime);  

Game.prevent();
    }
    return true;
}
)}) ;

Callback.addCallback("tick", function(){
let gun = GunRegistry.getGun(Player.getCarriedItem().id);
let ticks = World.getThreadTime();
    if (ticks % 5 === 0) {
        if(gun){
            if(gun != GunRegistry.currentGun){
GunRegistry.currentGun = gun;
GunRegistry.hideAim();
            }
GunRegistry.showAim(gun);
        }else{
GunRegistry.hideAim();
        }
    }

    

if(gun && gun.automatic && gun.shooting && ticks % gun.automatic === 0){

GunRegistry.shoot();

    }

});


Callback.addCallback("NativeGuiChanged", function (screenName) {

if(screenName == "hud_screen" || 

screenName == "in_game_play_screen"){
GunRegistry.inGame = true;
    }
    else{
GunRegistry.inGame = false;
GunRegistry.hideAim();
    }
});

Callback.addCallback("DestroyBlockStart", function(){   if(GunRegistry.getGun(Player.getCarriedItem().id) != false){
        Game.prevent();
    }
});
/*
function radiuseInFlat(coords, code, r){
        for(var x = coords.x - r; x < coords.x + r; x++){
            for(var z = coords.z -r; z < coords.z + r; z++){
                code();
            }
        }
    }*/
    

function radiuse(coordsp, icrds, did){ 
let rand1 = randomInt(2,7); 
if(rand1!==0){ 
rand1++; 
for(var x = coordsp.x - icrds; x < coordsp.x + icrds; x++){ 
for(var y = coordsp.y - icrds; y < coordsp.y + icrds; y++){ 
for(var z = coordsp.z- icrds; z < coordsp.z + icrds; z++){ 
World.setBlock(coordsp.x,coordsp.y,coordsp.z,did,0);
} 
} 
} 
} 
}




// file: api/Structures.js

const UniqueGen = { 
    randomCoords: function(random, chunkX, chunkZ, minHeight, maxHeight){
        minHeight = minHeight || 0;
        maxHeight = maxHeight || 220;
        return {
            x: chunkX * 16 + random.nextInt(16),
            y: random.nextInt(maxHeight - minHeight + 1) - minHeight,
            z: z = chunkZ * 16 + random.nextInt(16)
        }
    }, 
    generateOre: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOre(coords.x, coords.y, coords.z, id, data, params.size, false, random.nextInt());
        }
    }, 
    generateOreInDimension: function(id, data, chunkX, chunkZ, random, params){
        for(let i=0; i<params.veinCounts; i++){
            let coords = this.randomCoords(random, chunkX, chunkZ, params.minY, params.maxY);
            GenerationUtils.generateOreCustom(coords.x, coords.y, coords.z, id, data, params.size, params.mode, params.check);
        }
    }
}


const AetherGenerator = {
   generateRotateble: function(name, x, y, z, region) {
    Structure.set(StructureUtility.rotate(StructureLoader.getStructurePoolByName(pool).get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);       
    },
   generateTree: function(pool, name, x, y, z, region) {   
    StructurePiece.addStructure(name, x, y, z, region);  
     Structure.set(StructureUtility.rotate(pool.get(name), StructureRotation.getAllY()[randomInt(0,3)]), x, y, z, region);
    },
   generateBuilds: function(pool, namee, obj) {     
        StructurePiece.register(StructurePiece.getDefault({
        type: "default",
        dimension: Aether.id,
        white_list_blocks: true,
        blocks: [obj.check],
        name: pool,
        chance: obj.chance,
        distance: obj.distance,
        isSet: true,
        offset: {x: obj.offset.x, y: obj.offset.y, z: obj.offset.z},
        structure: new Structure.advanced(namee)
        }));
    },
   generateMazeLine: function(obj, height, wight, depth, region) { 
    for (var i = 0; i < width; i++) {
     for (var l = 0; l < height; l++) { 
      for (var k = 0; k < depth; k++) {  
       region.setDestroyParticlesEnabled(false);
        region.destroyBlock(obj.crds.x + i, obj.crds.y + l, obj.crds.z + l, false, false);    
                }        
            }
        } 
    }, 
    generateMaze: function(obj, region) {
     var region = BlockSource.getCurrentWorldGenRegion();   
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
      coords = GenerationUtils.findSurface(coords.x, 142, coords.z);
       obj.width = width;  obj.height = height;  obj.depth = depth;
     AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.boss), chunkX * 16, coords.y - 19, chunkZ * 16, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, depth, height, width, region);
     //this.generateMazeLine({x: coords.x -6, y: coords.y +1, z: coords.z +6}, -depth, height, width, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z -6}, width, height, depth, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, -width, height, depth, region);  
      for (var c = 0; c < randomint(3, 5); c++) {
          x = chunkX * 16 * randomInt(2, 6); z = chunkZ * 16 * randomInt(2, 6);
       AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.loot), x, coords.y -19, z, region);
        } 
    }
}


generateMazee = function(obj, region) {
     var region = BlockSource.getCurrentWorldGenRegion();   
      var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
      coords = GenerationUtils.findSurface(coords.x, 142, coords.z);
       obj.width = width;  obj.height = height;  obj.depth = depth;
     AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.name), chunkX * 16, coords.y - 19, chunkZ * 16, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, depth, height, width, region);
     //this.generateMazeLine({x: coords.x -6, y: coords.y +1, z: coords.z +6}, -depth, height, width, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z -6}, width, height, depth, region);
     //this.generateMazeLine({x: coords.x +6, y: coords.y +1, z: coords.z +6}, -width, height, depth, region);  
      for (var c = 0; c < randomint(3, 5); c++) {
          x = chunkX * 16 * randomInt(2, 6); z = chunkZ * 16 * randomInt(2, 6);
       AetherGenerator.generateRotateble(StructureLoader.getStructurePoolByName(pool).get(obj.name), x, coords.y -19, z, region);
        } 
    }




// file: api/Decorations.js

var FixedRotateble = function(id, data, texture, mesh, render) {
    mesh.variable.setBlockTexture(texture.texture, texture.meta);
    mesh.variable.importFromFile(__dir__ + "models/" + mesh.name + ".obj", "obj", {
        translate: [Math.random() - .1, 0, Math.random() - .1]
    });
    for (var i in data) {
        var current = data[i];
            let datas_mesh = mesh.variable.clone();
            let step = (Math.PI * 2) / current;
            datas_mesh.rotate(0, current * step, 0);
            render.addEntry(new BlockRenderer.Model(datas_mesh));
            BlockRenderer.setStaticICRender(id, current, render);
            var shape = new ICRender.CollisionShape();
            BlockRenderer.setCustomCollisionShape(id, data, shape);      
    }
}




// file: blocks/terrain.js

var BLOCK_TYPE_CLOUD = Block.createSpecialType({ 
    explosionres: 9999999,
    lightopacity: 1,
    destroytime: 1,
    renderlayer: 1,
    sound: "cloth"
});

var BLOCK_TYPE_AGLASS = Block.createSpecialType({ 
    explosionres: 5,
    lightopacity: 1,
    destroytime: .4,
    renderlayer: 1,
    sound: "glass"
});

var BLOCK_TYPE_STAIRS_WOOD = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 10,
    sound: "wood"
});

var BLOCK_TYPE_STAIRS_STONE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 10
});

var BLOCK_TYPE_AGRASS = Block.createSpecialType({
    destroytime: 1,
    renderlayer: 3,
    sound: "grass"
});

var BLOCK_TYPE_ADIRT = Block.createSpecialType({ 
    destroytime: 1,
    renderlayer: 3,
    sound: "grass"
});

var BLOCK_TYPE_FENCE_WOOD = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2, 
    rendertype: 11,
    sound: "wood"
});

var BLOCK_TYPE_FENCE_STONE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 2,
    rendertype: 32
});

var BLOCK_TYPE_ACLOUD = Block.createSpecialType({
    explosionres: 9999999,
    lightopacity: 1,
    destroytime: 1,
    renderlayer: 1
});

var BLOCK_TYPE_PLANE = Block.createSpecialType({
    lightopacity: 1,
    renderlayer: 1,
    rendertype: 87,
    translucency: 1,
    sound: "glass"
});

var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_PLANT_DOUBLE = Block.createSpecialType({
    base: 38,
    solid: false,
    destroytime: 0.1,
    explosionres: 1,
    //renderlayer: 1,
    rendertype: 91,
    lightopacity: 0,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: false
});

var BLOCK_TYPE_DECORATIVE = Block.createSpecialType({ 
    solid: false,
    explosionres: 5,
    lightopacity: 1,
    destroytime: .1,
    destroylevel: 0,
    renderlayer: 1,
    sound: "glass"
});

var BLOCK_TYPE_ROCKS = Block.createSpecialType({ 
    solid: false,
    explosionres: 3,
    destroytime: .1,
    destroylevel: 0,
    renderlayer: 1
});

var BLOCK_TYPE_WOOL = Block.createSpecialType({ 
    solid: true,
    explosionres: 4,
    destroytime: .9,
    renderlayer: 3,
    sound: "cloth"
});


IDRegistry.genBlockID("dirtAether"); 
Block.createBlock("dirtAether", [
    {name: "Aether Dirt", texture: [["aether_dirt", 0]],inCreative: true}], BLOCK_TYPE_ADIRT);
Block.setDestroyTime(BlockID.dirtAether,1);
ToolAPI.registerBlockMaterial(BlockID.dirtAether, "dirt", 0, true);

IDRegistry.genBlockID("grassblockAether");
Block.createBlock("grassblockAether", [
    {name: "Aether Grass", texture: [["aether_dirt", 0], ["aether_grass_top", 0], ["aether_grass_side", 0]],inCreative: true}], BLOCK_TYPE_AGRASS);
ToolAPI.registerBlockMaterial(BlockID.grassblockAether, "dirt", 0, true);
Block.registerDropFunction("grassblockAether", function(){
return [[BlockID.dirtAether, 1, 0]];});

IDRegistry.genBlockID("theraAether"); 
Block.createBlock("theraAether", [
    {name: "Aether Dirt", texture: [["thera_dirt", 0]],inCreative: true}], BLOCK_TYPE_ADIRT);
Block.setDestroyTime(BlockID.theraAether,1);
ToolAPI.registerBlockMaterial(BlockID.theraAether, "dirt", 0, true);

IDRegistry.genBlockID("grasstheraAether");
Block.createBlock("grasstheraAether", [
    {name: "Aether Grass", texture: [["thera_dirt", 0], ["thera_grass_top", 0], ["thera_grass_side", 0]],inCreative: true}], BLOCK_TYPE_AGRASS);
ToolAPI.registerBlockMaterial(BlockID.grasstheraAether, "dirt", 0, true);
Block.registerDropFunction("grasstheraAether", function(){
return [[BlockID.theraAether, 1, 0]];});

IDRegistry.genBlockID("nestSkyroot");
Block.createBlock("nestSkyroot", [
    {name: "Skyroot nest", texture: [["woven_skyroot_sticks", 0]],inCreative: true}], {solid: true, explosionres: 4, destroytime: .9, renderlayer: 3, sound: "sweet_berry_bush"
});
ToolAPI.registerBlockMaterial(BlockID.nestSkyroot, "wood", 0, true);

IDRegistry.genBlockID("quickSkyroot");
Block.createBlock("quickSkyroot", [
    {name: "Qucksoil sand", texture: [["quicksoil", 0]],inCreative: true}], {sound: "sand", friction: 1});
ToolAPI.registerBlockMaterial(BlockID.quickSkyroot, "dirt", 0, true);

Block.registerEntityStepOnFunction(BlockID.quickSkyroot, function(coords, block, entity){
 Entity.addEffect(entity, 1, 2, 300, false,false);
});

IDRegistry.genBlockID("Holystone"); 
Block.createBlock("Holystone", [
    {name: "Holystone", texture: [["holystone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Holystone, "stone", 2, true);

IDRegistry.genBlockID("brickHolystone"); 
Block.createBlock("brickHolystone", [
    {name: "Holystone Bricks", texture: [["holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickHolystone, "stone", 2, true);

IDRegistry.genBlockID("brickHolystoneS");
Block.createBlock("brickHolystoneS", [
    {name: "Holystone Bricks Slab", texture: [["holystone_brick", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.brickHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.brickHolystoneS, BlockID.brickHolystone);

IDRegistry.genBlockID("stairsHolystone");
Block.createBlock("stairsHolystone", [
    {name: "Holystone Stairs", texture: [["holystone_brick", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

Recipes.addShaped({id: BlockID.brickHolystone, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.Holystone, 0]);

IDRegistry.genBlockID("fbrickHolystone"); 
Block.createBlock("fbrickHolystone", [
    {name: "Faded Holystone Bricks", texture:[["faded_holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.fbrickHolystone, "stone", 3, true);

IDRegistry.genBlockID("fbrickHolystoneS");
Block.createBlock("fbrickHolystoneS", [
    {name: "Faded Holystone Bricks Slab", texture: [["faded_holystone_brick", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.fbrickHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.fbrickHolystoneS, BlockID.fbrickHolystone);

IDRegistry.genBlockID("fstairsHolystone");
Block.createBlock("fstairsHolystone", [
    {name: "Faded Holystone Stairs", texture: [["faded_holystone_brick", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("Agiosite"); 
Block.createBlock("Agiosite", [
    {name: "Agiosite", texture: [["agiosite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Agiosite, "stone", 2, true);

IDRegistry.genBlockID("brickAgiosite"); 
Block.createBlock("brickAgiosite", [
    {name: "Agiosite Bricks", texture: [["agiosite_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickAgiosite, "stone", 3, true);

IDRegistry.genBlockID("brickAgiositeS");
Block.createBlock("brickAgiositeS", [
    {name: "Agiosite Bricks Slab", texture: [["agiosite_brick", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.brickAgiositeS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.brickAgiositeS, BlockID.brickAgiosite);

IDRegistry.genBlockID("stairsAgiosite");
Block.createBlock("stairsAgiosite", [
    {name: "Agiosite Stairs", texture: [["agiosite_brick", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

Recipes.addShaped({id: BlockID.brickAgiosite, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.Agiosite, 0]);

IDRegistry.genBlockID("Zanite"); 
Block.createBlock("Zanite", [
    {name: "Block Zanite", texture: [["zanite_block", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Zanite, "stone", 3, true);

Recipes.addShaped({id: BlockID.Zanite, count: 1, data: 0}, [
    "xxx",
    "xxx",
    "xxx"
], ['x', ItemID.zaniteGemstone, 0]);

IDRegistry.genBlockID("Gravitite"); 
Block.createBlock("Gravitite", [
    {name: "Block Gravitite", texture: [["gravitite_block", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Gravitite, "stone", 3, true);

Recipes.addShaped({id: BlockID.Gravitite, count: 1, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.oreGravitite, 0]);

IDRegistry.genBlockID("enGravitite"); 
Block.createBlock("enGravitite", [
    {name: "Block Gravitite Enchanted", texture:[["enchanted_gravitite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.enGravitite, "stone", 3, true);

IDRegistry.genBlockID("coldAercloud"); 
Block.createBlock("coldAercloud", [
    {name: "Cold Aercloud", texture: 
    [["aercloud_cold", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
    
Callback.addCallback('EntityHurt', function (a, v, damageValue, damageType) {
if(damageType == 5 && World.getBlockID(Entity.getPosition(v).x, Entity.getPosition(v).y-1, Entity.getPosition(v).z) == BlockID.coldAercloud ||damageType == 5 && World.getBlockID(Entity.getPosition(v).x, Entity.getPosition(v).y-2, Entity.getPosition(v).z) == BlockID.coldAercloud) {
Game.message("hi");
 //Game.prevent();
Entity.addEffect(v, 28, 400, 0, false, false); 
    }
if(damageType == 12 && Network.getConnectedPlayers().indexOf(v)) {
   if(Entity.getDimension(v) == Aether.id) { 
Game.message("hi");       
 //Game.prevent();
Dimensions.transfer(v, 0);
        }    
    }
});    
    
IDRegistry.genBlockID("AcoldAercloud"); 
Block.createBlock("AcoldAercloud", [
    {name: "Cold Aercloud", texture: 
    [["aercloud_cold", 1]],inCreative: false}],BLOCK_TYPE_ACLOUD);    

IDRegistry.genBlockID("blueAercloud"); 
Block.createBlock("blueAercloud", [
    {name: "Blue Aercloud", texture:[["aercloud_blue", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("goldenAercloud"); 
Block.createBlock("goldenAercloud", [
    {name: "Golden Aercloud", texture:[["aercloud_golden", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("greenAercloud"); 
Block.createBlock("greenAercloud", [
    {name: "Green Aercloud", texture:[["aercloud_green", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("stormAercloud"); 
Block.createBlock("stormAercloud", [
    {name: "Storm Aercloud", texture:[["aercloud_storm", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
    
IDRegistry.genBlockID("purpuleAercloud"); 
Block.createBlock("purpuleAercloud", [
    {name: "Purpule Aercloud", texture:[["purple_aercloud_back", 0]],inCreative: true}],BLOCK_TYPE_CLOUD) ;    
    
IDRegistry.genBlockID("grassblockFrostpine");
Block.createBlock("grassblockFrostpine", [
    {name: "Frostroot", texture:[["frostroot_side", 0], ["frostroot_top", 0], ["frostroot_side", 0]],inCreative: true}], BLOCK_TYPE_AGRASS);
ToolAPI.registerBlockMaterial(BlockID.grassblockFrostpine, "dirt", 0, true);
Block.registerDropFunction("grassblockFrostpine", function(){
return [[BlockID.dirtAether, 1, 0]];});

IDRegistry.genBlockID("Ferro");
Block.createBlock("Ferro", [
    {name: "Ferrosite", texture:[["ferrosite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Ferro, "stone", 3, true);

IDRegistry.genBlockID("rFerro");
Block.createBlock("rFerro", [
    {name: "Rusted ferrosite", texture:[["rusted_ferrosite", 0]],inCreative: true}], "opaque");       
ToolAPI.registerBlockMaterial(BlockID.rFerro, "stone", 3, true);

IDRegistry.genBlockID("sandFiosite"); 
Block.createBlock("sandFiosite", [
    {name: "Ferrosite sand", texture: [["ferrosite_sand", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.sandFiosite, "dirt", 0, true);

IDRegistry.genBlockID("coldFire");
Block.createBlock("coldFire", [
{name: "Cold Fire", texture: [["ColdFire", 0]], inCreative: true}], BLOCK_LIGHT);

IDRegistry.genBlockID("pIce");
Block.createBlock("pIce", [
    {name: "Highlands ice", texture:[["highlands_packedice", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.pIce, "stone", 3, true);

IDRegistry.genBlockID("aetherGell"); 
Block.createBlock("aetherGell", [
    {name: "Aether Gell", texture:[["sentrygel", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("iceS");
Block.createBlock("iceS", [
    {name: "Ice stone", texture:[["icestone", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.iceS, "stone", 2, true);

IDRegistry.genBlockID("bS");
Block.createBlock("bS", [
    {name: "Ice stone bricks", texture:[["icestone_bricks", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.bS, "stone", 2, true);

IDRegistry.genBlockID("bSS");
Block.createBlock("bSS", [
    {name: "Ice stone bricks Slab", texture: [["icestone_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.bSS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.bSS, BlockID.bS);

IDRegistry.genBlockID("stairsSS");
Block.createBlock("stairsSS", [
    {name: "Ice stone Stairs", texture: [["icestone_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

Recipes.addShaped({id: BlockID.bS, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.iceS, 0]);

var CFiremesh = new RenderMesh();
CFiremesh.setBlockTexture("altarent",0);
CFiremesh.importFromFile(__dir__+"/models/Blue.obj","obj",{translate:[+.5 ,0, +.5]});

var CFirerender = new ICRender.Model();
CFirerender.addEntry(new BlockRenderer.Model(CFiremesh));
BlockRenderer.setStaticICRender(BlockID.coldFire,0,CFirerender);

Block.registerDropFunction("coldFire", function(){
    if(Math.random() < .070){
        return [[ItemID.icestone, 1, 0]]
    }
    else {
        return [];
    }
});




// file: blocks/ores.js

var BLOCK_TYPE_STONE = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    destroytime: 0.9,
    explosionres: 20,
    translucency: 0
});

IDRegistry.genBlockID("oreAmbrosium"); 
Block.createBlock("oreAmbrosium", [
    {name: "Ambrosium Ore", texture:[["ambrosium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreAmbrosium, 1);
Block.registerDropFunction("oreAmbrosium", function(coords, blockID, blockData, level, enchant){ 
    return [[ItemID.Ambrosium, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreAmbrosium, 0, chunkX, chunkZ, random, { 
 veinCounts: 34,
 minY: 26,
 maxY: 128,
 size: randomInt(5, 12),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreIcestone"); 
Block.createBlock("oreIcestone", [
    {name: "icestone Ore", texture:[["icestone_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreIcestone, 2); 
Block.registerDropFunction("oreIcestone", function(coords, blockID, blockData, level, enchant){
    return [[ItemID.icestone, randomInt(1,2), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreIcestone, 0, chunkX, chunkZ, random, { 
 veinCounts: 34, 
 minY: 26,
 maxY: 128,
 size: randomInt(3, 5),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreZanite"); 
Block.createBlock("oreZanite", [
    {name: "Zanite Ore", texture:[["zanite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreZanite, 2);  
Block.registerDropFunction("oreZanite", function(coords, blockID, blockData, level, enchant){
    return [[ItemID.zaniteGemstone, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreZanite, 0, chunkX, chunkZ, random, {  
 veinCounts: 30, 
 minY: 26,
 maxY: 128,
 size: randomInt(2, 6),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreArkenium"); 
Block.createBlock("oreArkenium", [
    {name: "Arkenium Ore", texture: [["arkenium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreArkenium, 3);   
Block.registerDropFunction("oreArkenium", function(coords, blockID, blockData, level, enchant){
    return [[BlockID.oreArkenium, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreArkenium, 0, chunkX, chunkZ, random, { 
 veinCounts: 26, 
 minY: 26,
 maxY: 128,
 size: randomInt(2, 5),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreGravitite"); 
Block.createBlock("oreGravitite", [
    {name: "Gravitite Ore", texture: 
    [["gravitite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreGravitite, 3);    
Block.registerDropFunction("oreGravitite", function(coords, blockID, blockData, level, enchant){
    return [[BlockID.oreGravitite, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreGravitite, 0, chunkX, chunkZ, random, { 
 veinCounts: 18, 
 minY: 26,
 maxY: 128,
 size: randomInt(1, 5),
 mode: true,
 check: [BlockID.Holystone]
}); 
});

IDRegistry.genBlockID("oreContinuum"); 
Block.createBlock("oreContinuum", [
    {name: "Continuum Ore", texture:[["continuum_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
Block.setDestroyLevel(BlockID.oreGravitite, 1);     
Block.registerDropFunction("oreContinuum", function(coords, blockID, blockData, level, enchant){
    return [[ItemID.continuumOrb, randomInt(1,3), 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.oreContinuum, 0, chunkX, chunkZ, random, { 
 veinCounts: 20, 
 minY: 26,
 maxY: 128,
 size: randomInt(1, 3),
 mode: true,
 check: [BlockID.Holystone]
}); 
});




// file: blocks/decorations.js

IDRegistry.genBlockID("cloudWool"); 
Block.createBlock("cloudWool", [
    {name: "Cloudwool", texture: [["cloudwool_block", 0]],inCreative: true}], BLOCK_TYPE_ADIRT);
ToolAPI.registerBlockMaterial(BlockID.cloudWool, "cloth", 0, true);

IDRegistry.genBlockID("TwigsAther");
Block.createBlockWithRotation("TwigsAther", [
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: true},
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: false},
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: false},
    {name: "Stick Skyroot", texture: [["skyroot_twigs", 0]], inCreative: false}
], BLOCK_TYPE_ROCKS);
twigs = new RenderMesh();
Twigsrender = new ICRender.Model();
FixedRotateble(BlockID.TwigsAther, [0, 1, 2, 3], {texture:"skyroot_twigs", meta:0}, {variable: twigs, name: "twigs"}, Twigsrender);

Callback.addCallback('BuildBlock', function (coords, block, player) {
if (block.id == BlockID.TwigsAther) {
var region = BlockSource.getDefaultForActor(player);
World.destroyBlock(coords.x, coords.y, coords.z);
region.setBlock(coords.x, coords.y, coords.z, BlockID.TwigsAther, randomInt(0, 3));
}
});  

Block.registerDropFunction("TwigsAther", function(coords, blockID){
    return [[ItemID.stickSkyroot, 1, 0]] 
});

IDRegistry.genBlockID("RocksAther");
Block.createBlockWithRotation("RocksAther", [
    {name: "Holystone", texture: [["holystone", 0]], inCreative: true},
    {name: "Holystone", texture: [["holystone", 0]], inCreative: false},
    {name: "Holystone", texture: [["holystone", 0]], inCreative: false},
    {name: "Holystone", texture: [["holystone", 0]], inCreative: false}
], BLOCK_TYPE_ROCKS);
rock = new RenderMesh();
Rockrender = new ICRender.Model();
FixedRotateble(BlockID.RocksAther, [0, 1, 2, 3], {texture:"holystone", meta:0}, {variable: rock, name: "rock"}, Rockrender);

Callback.addCallback('BuildBlock', function (coords, block, player) {
if (block.id == BlockID.RocksAther) {
var region = BlockSource.getDefaultForActor(player);
World.destroyBlock(coords.x, coords.y, coords.z);
region.setBlock(coords.x, coords.y, coords.z, BlockID.RocksAther, randomInt(0, 3));
}
});  

Block.registerDropFunction("RocksAther", function(coords, blockID){
    return [[BlockID.Holystone, 1, 0]] 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 45) return;
   for(let i=0; i<randomInt(20, 21); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
  if(random.nextFloat() < .80){  
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.RocksAther, randomInt(0, 3)); 
        } else {
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.TwigsAther, randomInt(0, 3));
        }             
    }
}});

IDRegistry.genBlockID("CrystalAther");
Block.createBlockWithRotation("CrystalAther", [
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: true},
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: false},
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: false},
    {name: "Ice stone", texture: [["crude_scatterglass", 0]], inCreative: false}
], BLOCK_TYPE_DECORATIVE);
crystal = new RenderMesh();
Crystalrender = new ICRender.Model();
FixedRotateble(BlockID.CrystalAther, [0, 1, 2, 3], {texture:"crude_scatterglass", meta:0}, {variable: crystal, name: "crystal"}, Crystalrender);

Callback.addCallback('BuildBlock', function (coords, block, player) {
if (block.id == BlockID.CrystalAther) {
var region = BlockSource.getDefaultForActor(player);
World.destroyBlock(coords.x, coords.y, coords.z);
region.setBlock(coords.x, coords.y + 1, coords.z, BlockID.CrystalAther, randomInt(0, 3));
}
});  

Block.registerDropFunction("CrystalAther", function(coords, blockID){
    return [];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 if(Math.random() < 0.004){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 98, coords.z);
  if (coords.y < 45) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.quickSkyroot){ 
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.CrystalAther, randomInt(0, 3));     
    }
}
}});

IDRegistry.genBlockID("ambrosiumTorch");
Block.createBlock("ambrosiumTorch", [
    {name: "Aether Torch", texture:[["aetherbookshelf", 1], ["ambrosium_torch", 1], ["ambrosium_torch", 0]],inCreative: false}], BLOCK_LIGHT);
Block.setBlockShape(BlockID.ambrosiumTorch, {x: 0.45, y: 0, z: 0.45}, {x: 0.55, y: 0.6, z: 0.55})   
    
IDRegistry.genItemID("ambrosiumTorch");
Item.createItem("ambrosiumTorch", "Aether Torch", {name: "ambrosium_torch"});    

Item.registerUseFunction("ambrosiumTorch", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(GenerationUtils.isTransparentBlock(region.getBlockId(place.x,place.y-1,place.z))){ 
        region.setBlock(place.x, place.y, place.z, BlockID.ambrosiumTorch);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Recipes.addShaped({id: BlockID.ambrosiumTorch, count: 1, data: 0}, [
    "a",
    "b",
], ['a', ItemID.Ambrosium, 0, 'b', ItemID.stickSkyroot, 0]);

IDRegistry.genBlockID("boockselfAether");
Block.createBlockWithRotation("boockselfAether", [
{name: "Aether Boockself", texture: [["aetherbookshelf", 1], ["aetherbookshelf", 1], ["aetherbookshelf", 0], ["aetherbookshelf", 0], ["aetherbookshelf", 0], ["aetherbookshelf", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.boockselfAether, "wood", 0, true);

Recipes.addShaped({id: BlockID.boockselfAether, count: 3, data: 0}, [
    "xxx",
    "ccc",
    "xxx"
], ['c', 340, 0, 'x', BlockID.plankSkyroot, 0]);

IDRegistry.genBlockID("presentAether");
Block.createBlockWithRotation("presentAether", [
{name: "Aether Present", texture: [["present", 0], ["present", 1], ["present", 0], ["present", 0], ["present", 0], ["present", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.presentAether, "wood", 0, true);

var PRESENT_RANDOM_DROP = [
    {chance: 40, id: ItemID.candyCane, data: 0},
    {chance: 38, id: ItemID.candyCorn, data: 0},
    {chance: 21, id: ItemID.zaniteGemstone, data: 0},
];

function getPresentDropItem(){
    var total = 0;
    for (var i in PRESENT_RANDOM_DROP){
        total += PRESENT_RANDOM_DROP[i].chance;
    }
    var random = Math.random() * total * 1.4;
    var current = 0;
    for (var i in PRESENT_RANDOM_DROP){
        var drop = PRESENT_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.ambrosiumTorch, data: 0};
}

Block.registerDropFunction("presentAether", function(coords,item, block){
var region = BlockSource.getCurrentWorldGenRegion();
 var drop = getPresentDropItem();
    region.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
});

/*IDRegistry.genBlockID("ladderSkyroot");
Block.createBlock("ladderSkyroot", [
    {name: "Skyroot ladder", texture: [["skyroot_ladder", 0]],inCreative: true}], BLOCK_TYPE_Ladder);
ToolAPI.registerBlockMaterial(BlockID.ladderSkyroot, "wood", 0, true);*/

IDRegistry.genBlockID("pillarHolystone");
Block.createBlock("pillarHolystone", [
    {name: "Holystone pillar", texture: [["holystone", 0], ["holystone_base_top", 0], ["holystone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("fenceHolystone");
Block.createBlock("fenceHolystone", [
    {name: "Holystone Wall", texture: [["holystone", 0]], inCreative: true}
], BLOCK_TYPE_FENCE_STONE);

IDRegistry.genBlockID("basebricksHolystone");
Block.createBlock("basebricksHolystone", [
    {name: "Holystone base bricks", texture: [["holystone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksHolystoneS");
Block.createBlock("basebricksHolystoneS", [
    {name: "Holystone base bricks Slab", texture: [["holystone_base_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.basebricksHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.basebricksHolystoneS, BlockID.basebricksHolystone);

IDRegistry.genBlockID("stairsbasebricksH");
Block.createBlock("stairsbasebricksH", [
    {name: "Holystone base bricks Stairs", texture: [["holystone_base_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("basepillarHolystone");
Block.createBlock("basepillarHolystone", [
    {name: "Holystone base pillar", texture: [["holystone_base_bricks", 0], ["holystone_base_top", 0], ["holystone_basepillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksHolystone");
Block.createBlock("capstonebricksHolystone", [
    {name: "Holystone capstone bricks", texture: [["holystone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksHolystoneS");
Block.createBlock("capstonebricksHolystoneS", [
    {name: "Holystone capstone bricks Slab", texture: [["holystone_capstone_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.capstonebricksHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.capstonebricksHolystoneS, BlockID.capstonebricksHolystone);

IDRegistry.genBlockID("stairscapstonebricksH");
Block.createBlock("stairscapstonebricksH", [
    {name: "Holystone capstone bricks Stairs", texture: [["holystone_capstone_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("capstonepillarHolystone");
Block.createBlock("capstonepillarHolystone", [
    {name: "Holystone capstone pillar", texture: [["holystone_capstone_bricks", 0], ["holystone_base_top", 0], ["holystone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("flagstonebricksHolystone");
Block.createBlock("flagstonebricksHolystone", [
    {name: "Holystone flagstone bricks", texture: [["holystone_flagstones", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.flagstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("flagstonebricksHolystoneS");
Block.createBlock("flagstonebricksHolystoneS", [
    {name: "Holystone flagstone bricks Slab", texture: [["holystone_flagstones", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.flagstonebricksHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.flagstonebricksHolystoneS, BlockID.flagstonebricksHolystone);

IDRegistry.genBlockID("stairsflagstonebricksH");
Block.createBlock("stairsflagstonebricksH", [
    {name: "Holystone flagstone bricks Stairs", texture: [["holystone_flagstones", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("headstoneHolystone");
Block.createBlock("headstoneHolystone", [
    {name: "Holystone headstone", texture: [["holystone_headstone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.headstoneHolystone, "stone", 3, true);

IDRegistry.genBlockID("headstoneHolystoneS");
Block.createBlock("headstoneHolystoneS", [
    {name: "Holystone headstone Slab", texture: [["holystone_headstone", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.headstoneHolystoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.headstoneHolystoneS, BlockID.headstoneHolystoneS);

IDRegistry.genBlockID("stairsflagstonebricksH");
Block.createBlock("stairsflagstonebricksH", [
    {name: "Holystone headstone Stairs", texture: [["holystone_headstone", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("pillarIcestone");
Block.createBlock("pillarIcestone", [
    {name: "Icestone pillar", texture: [["icestone", 0], ["icestone_keystone", 0], ["icestone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksIcestone");
Block.createBlock("basebricksIcestone", [
    {name: "Icestone base bricks", texture: [["icestone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("basebricksIcestoneS");
Block.createBlock("basebricksIcestoneS", [
    {name: "Icestone base bricks Slab", texture: [["icestone_base_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.basebricksIcestoneS, BlockID.basebricksIcestone);

IDRegistry.genBlockID("stairsbasebricksIce");
Block.createBlock("stairsbasebricksIce", [
    {name: "Icestone base Stairs", texture: [["icestone_base_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("basepillarIcestone");
Block.createBlock("basepillarIcestone", [
    {name: "Icestone base pillar", texture: [["icestone_base_bricks", 0], ["icestone_keystone", 0], ["icestone_base_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksIcestone");
Block.createBlock("capstonebricksIcestone", [
    {name: "Icestone capstone bricks", texture: [["icestone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksIcestoneS");
Block.createBlock("capstonebricksIcestoneS", [
    {name: "Icestone capstone bricks Slab", texture: [["icestone_capstone_bricks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestoneS, "stone", 2, true);
TileRenderer.makeSlab(BlockID.basebricksIcestoneS, BlockID.basebricksIcestone);

IDRegistry.genBlockID("stairscapstonebricksIce");
Block.createBlock("stairscapstonebricksIce", [
    {name: "Icestone capstone Stairs", texture: [["icestone_capstone_bricks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_STONE);

IDRegistry.genBlockID("capstonepillarIcestone");
Block.createBlock("capstonepillarIcestone", [
    {name: "Icestone capstone pillar", texture: [["icestone_capstone_bricks", 0], ["icestone_keystone", 0], ["icestone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarIcestone, "stone", 2, true);


IDRegistry.genBlockID("pillarSkyroot");
Block.createBlock("pillarSkyroot", [
    {name: "Skyroot pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("baseplanksSkyroot");
Block.createBlock("baseplanksSkyroot", [
    {name: "Skyroot base planks", texture: [["skyroot_base_planks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.baseplanksSkyroot, "wood", 0, true);

IDRegistry.genBlockID("baseplanksSkyrootS");
Block.createBlock("baseplanksSkyrootS", [
    {name: "Skyroot base planks Slab", texture: [["skyroot_base_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.baseplanksSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.baseplanksSkyrootS, BlockID.baseplanksSkyroot);

IDRegistry.genBlockID("stairsbaseSkyroot");
Block.createBlock("stairsbaseSkyroot", [
    {name: "Skyroot base Stairs", texture: [["skyroot_planks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("basepillarSkyroot");
Block.createBlock("basepillarSkyroot", [
    {name: "Skyroot base pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_base_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("floorboardsSkyroot");
Block.createBlock("floorboardsSkyroot", [
    {name: "Skyroot floorboards", texture: [["skyroot_floorboards", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.floorboardsSkyroot, "wood", 0, true);

IDRegistry.genBlockID("floorboardsSkyrooS");
Block.createBlock("floorboardsSkyrooS", [
    {name: "Skyroot floorboards Slab", texture: [["skyroot_floorboards", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.tilesSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.tilesSkyrootS, BlockID.tilesSkyroot);

IDRegistry.genBlockID("stairsfloorboardsSkyroot");
Block.createBlock("stairsfloorboardsSkyroot", [
    {name: "Skyroot floorboards Stairs", texture: [["skyroot_floorboards", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("tilesSkyroot");
Block.createBlock("tilesSkyroot", [
    {name: "Skyroot tiles", texture: [["skyroot_tiles_small", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilesSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilesSkyrootS");
Block.createBlock("tilesSkyrootS", [
    {name: "Skyroot tiles Slab", texture: [["skyroot_tiles_small", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.tilesSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.tilesSkyrootS, BlockID.tilesSkyroot);

IDRegistry.genBlockID("stairstilesSkyrootSkyroot");
Block.createBlock("stairstilesSkyrootSkyroot", [
    {name: "Skyroot tiles Stairs", texture: [["skyroot_tiles_small", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("tilessSkyroot");
Block.createBlock("tilessSkyroot", [
    {name: "Skyroot tiles small", texture: [["skyroot_tiles", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilessSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilessSkyrootS");
Block.createBlock("tilessSkyrootS", [
    {name: "Skyroot small tiles Slab", texture: [["skyroot_tiles", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.tilessSkyrootS, "wood", 2, true);
TileRenderer.makeSlab(BlockID.tilessSkyrootS, BlockID.tilessSkyroot);

IDRegistry.genBlockID("stairstilesSkyrootSkyroot");
Block.createBlock("stairstilesSkyrootSkyroot", [
    {name: "Skyroot small tiles Stairs", texture: [["skyroot_tiles", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("CCglass");
Block.createBlock("CCglass", [{name: "Crude scatterglass", texture: [["crude_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genItemID("CCglassP");
Item.createItem("CCglassP", "Crude scatterglass Plane", {name: "crude_scatterglass"});

Item.registerUseFunction("CCglassP", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.CCglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
}); 
 
IDRegistry.genBlockID("CCglassP");
Block.createBlock("CCglassP", [{name: "Crude scatterglass Plane", texture: [["crude_scatterglass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("SCglass");
Block.createBlock("SCglass", [{name: "Scatterglass", texture: [["scatterglass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);

IDRegistry.genItemID("SCglassP");
Item.createItem("SCglassP", "Scatterglass Plane", {name: "scatterglass"});

Item.registerUseFunction("SCglassP", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.SCglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});  
 
IDRegistry.genBlockID("SCglassP");
Block.createBlock("SCglassP", [{name: "Scatterglass Plane", texture: [["crude_scatterglass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
UniqueGen.generateOreInDimension(BlockID.CCglass, 0, chunkX, chunkZ, random, { 
 veinCounts: 21,
 minY: 40,
 maxY: 230,
 size: randomInt(5, 11),
 mode: true,
 check: [BlockID.Holystone]
}); 
});
Callback.addCallback('PostLoaded', function () {
Recipes.addShaped({id: ItemID.scatterglassShard, count: 4, data: 0}, [
    "xoo" 
], ['x', BlockID.SCglassP, 0]);
});

IDRegistry.genBlockID("fSCglass");
Block.createBlock("fSCglass", [{name: "Framed scatterglass", texture: [["skyroot_frame_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);

IDRegistry.genItemID("fSCglassP");
Item.createItem("fSCglassP", "Framed Scatterglass Plane", {name: "scatterglass"});

Item.registerUseFunction("fSCglassP", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.fSCglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
}); 
 
IDRegistry.genBlockID("fSCglassP");
Block.createBlock("fSCglassP", [{name: "Framed Scatterglass Plane", texture: [["skyroot_frame_scatterglass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("SQglass");
Block.createBlock("SQglass", [{name: "Quicksoil glass", texture: [["quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);

IDRegistry.genItemID("SQglassP");
Item.createItem("SQglassP", "Quicksoil glass Plane", {name: "quicksoil_glass"});

Item.registerUseFunction("SQglassP", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.SQglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});  
 
IDRegistry.genBlockID("SQlassP");
Block.createBlock("SQlassP", [{name: "Quicksoil glass Plane", texture: [["quicksoil_glass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);

IDRegistry.genBlockID("fSQglass");
Block.createBlock("fSQglass", [{name: "Framed Quicksoil Plane", texture: [["skyroot_frame_quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_AGLASS);
    
IDRegistry.genItemID("fSQglassP");
Item.createItem("fSQglassP", "Framed Quicksoil glass Plane", {name: "quicksoil_glass"});

Item.registerUseFunction("fSQglassP", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
        region.setBlock(place.x, place.y, place.z, BlockID.fSQglassP);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data); 
});   
 
IDRegistry.genBlockID("fSQlassP");
Block.createBlock("fSQlassP", [{name: "Framed Quicksoil Plane", texture: [["quicksoil_glass", 0]],inCreative: false}], BLOCK_TYPE_PLANE);




// file: blocks/plants/grass.js

function setPlantModel(id, isDouble) {
var shape = new ICRender.CollisionShape();
BlockRenderer.setCustomCollisionShape(id, 0, shape);    
Flowers.registerFlower(id, isDouble); 
}

IDRegistry.genBlockID("grassAether");
Block.createBlock("grassAether", [
    {name: "Aether Grass", texture: [["normal_aether", 0], ["normal_aether", 0], ["normal_aether", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.grassAether, "plant");
setPlantModel(BlockID.grassAether, false);

IDRegistry.genItemID("grassAether");
Item.createItem("grassAether", "Aether Grass", {name: "normal_aether"});

Item.registerUseFunction("grassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.grassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(5, 9); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.grassAether,0);     
    }
}});

IDRegistry.genBlockID("shortgrassAether");
Block.createBlock("shortgrassAether", [
    {name: "Aether Grass", texture: [["short_aether", 0], ["short_aether", 0], ["short_aether", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.shortgrassAether, "plant");

IDRegistry.genItemID("shortgrassAether");
Item.createItem("shortgrassAether", "Aether Grass", {name: "short_aether"});

Item.registerUseFunction("shortgrassAether", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shortgrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shortgrassAether, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(5, 12); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.shortgrassAether,0);   
    }
}});

IDRegistry.genBlockID("longgrassAether");
Block.createBlock("longgrassAether", [
    {name: "Aether Grass", texture: [["long_aether", 0], ["long_aether", 0], ["long_aether", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.longgrassAether, "plant");

IDRegistry.genItemID("longgrassAether");
Item.createItem("longgrassAether", "Aether Grass", {name: "long_aether"});

Item.registerUseFunction("longgrassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
       region.setBlock(place.x,place.y+1,place.z,BlockID.grassAether,0);   
        region.setBlock(place.x, place.y+2, place.z, BlockID.longgrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.longgrassAether, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 34) return;
   for(let i=0; i<randomInt(0, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
       //World.setBlock(coords.x,coords.y+1,coords.z,BlockID.grassAether,0);   
       World.setBlock(coords.x, coords.y+1, coords.z, BlockID.longgrassAether);  
    }
}});

Block.registerDropFunction("grassAether", function(coords, blockID){ 
    [[ItemID.grassAether, 1, 0]];
});
Block.registerDropFunction("shortgrassAether", function(coords, blockID){ 
    [[ItemID.shortgrassAether, 1, 0]];
});
Block.registerDropFunction("longgrassAether", function(coords, blockID){ 
    [[ItemID.shortgrassAether, 1, 0]];
});




// file: blocks/plants/valkyrie.js

IDRegistry.genBlockID("vgrassAether");
Block.createBlock("vgrassAether", [
    {name: "Valkyrie Grass", texture: [["valkyrie_grass", 0], ["valkyrie_grass", 0], ["valkyrie_grass", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.vgrassAether, "plant");

IDRegistry.genItemID("vgrassAether");
Item.createItem("vgrassAether", "Valkyrie Grass", {name: "valkyrie_grass"});

Item.registerUseFunction("vgrassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.vgrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
TileRenderer.setPlantModel(BlockID.vgrassAether, 0, "valkyrie_grass", 0);

IDRegistry.genBlockID("vlonggrassAether");
Block.createBlock("vlonggrassAether", [
    {name: "Valkyrie Grass", texture: [["valkyrie_grass", 2], ["valkyrie_grass", 2], ["valkyrie_grass", 2]], inCreative: false}
], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.vlonggrassAether, "plant");

IDRegistry.genItemID("vlonggrassAether");
Item.createItem("vlonggrassAether", "Valkyrie Grass", {name: "valkyriel_grass"});

IDRegistry.genItemID("kirridflower");
Item.createItem("kirridflower", "Kirrid flowers", {name: "kirrid_flower"});

Item.registerUseFunction("vlonggrassAether", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.vlonggrassAether);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
TileRenderer.setPlantModel(BlockID.vlonggrassAether, 0, "valkyrie_grass", 2);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 40) return;
   for(let i=0; i<randomInt(2, 5); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.vlonggrassAether,0);     
    }
}});

Block.registerDropFunction("vgrassAether", function(coords, blockID){ 
    [[ItemID.vgrassAether, 1, 0]];
});

Block.registerDropFunction("vlonggrassAether", function(coords, blockID){
    [[ItemID.kirridflower, 1, 0]];
});




// file: blocks/plants/frostpinegrass.js

IDRegistry.genBlockID("grassFrostpine");
Block.createBlock("grassFrostpine", [
    {name: "Frostpine Grass", texture: [["normal_frostroot", 0], ["normal_frostroot", 0], ["normal_frostroot", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.grassFrostpine, "plant");

IDRegistry.genItemID("grassFrostpine");
Item.createItem("grassFrostpine", "Frostpine Grass", {name: "normal_frostroot"});

Item.registerUseFunction("grassFrostpine", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.grassFrostpine);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.grassFrostpine, false);

Block.registerDropFunction("grassFrostpine", function(coords, blockID){
     [[ItemID.grassFrostpine, 1, 0]];
});




// file: blocks/plants/flower.js

IDRegistry.genBlockID("flowerPurple");
Block.createBlock("flowerPurple", [
    {name: "Purple Flower", texture: [["purple_flowern", 0], ["purple_flowern", 0], ["purple_flowern", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerPurple");
Item.createItem("flowerPurple", "Purple Flower", {name: "purple_flowern"});

Item.registerUseFunction("flowerPurple", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.flowerPurple);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.flowerPurple, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(2, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.flowerPurple,0);
    }
}});

Block.registerDropFunction("flowerPurple", function(coords, blockID){ 
    [[ItemID.flowerPurple, 1, 0]];
});


IDRegistry.genBlockID("flowerAechor");
Block.createBlock("flowerAechor", [
    {name: "Aechor Flower", texture: [["aechor_sprout", 0], ["aechor_sprout", 0], ["aechor_sprout", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerAechor");
Item.createItem("flowerAechor", "Aechor Flower", {name: "aechor_sprout"});

Item.registerUseFunction("flowerAechor", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.flowerAechor);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.flowerAechor, false);

Block.registerDropFunction("flowerAechor", function(coords, blockID){ 
    [[ItemID.flowerAechor, 1, 0]];
});

//NEW
IDRegistry.genBlockID("swingtipGreen");
Block.createBlock("swingtipGreen", [
    {name: "Swingtip Green", texture: [["green_swingtip", 0], ["green_swingtip", 0], ["green_swingtip", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.swingtipGreen, "plant");

IDRegistry.genItemID("swingtipGreen");
Item.createItem("swingtipGreen", "Swingtip Green", {name: "green_swingtip"});

Item.registerUseFunction("swingtipGreen", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.swingtipGreen);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.swingtipGreen, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(1, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.swingtipGreen,0);
    }
}});

Block.registerDropFunction("swingtipGreen", function(coords, blockID){
    [[ItemID.swingtipGreen, 1, 0]];
});


IDRegistry.genBlockID("swingtipBlue");
Block.createBlock("swingtipBlue", [
    {name: "Swingtip Blue", texture: [["blue_swingtip", 0], ["blue_swingtip", 0], ["blue_swingtip", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.swingtipBlue, "plant");

IDRegistry.genItemID("swingtipBlue");
Item.createItem("swingtipBlue", "Swingtip Blue", {name: "blue_swingtip"});

Item.registerUseFunction("swingtipBlue", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.swingtipBlue);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.swingtipBlue, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 2); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.swingtipBlue,0);
    }
}});

Block.registerDropFunction("swingtipBlue", function(coords, blockID){
    [[ItemID.swingtipBlue, 1, 0]];
});


IDRegistry.genBlockID("swingtipPink");
Block.createBlock("swingtipPink", [
    {name: "Swingtip Pink", texture: [["pink_swingtip", 0], ["pink_swingtip", 0], ["pink_swingtip", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.swingtipPink, "plant");

IDRegistry.genItemID("swingtipPink");
Item.createItem("swingtipPink", "Swingtip Pink", {name: "pink_swingtip"});

Item.registerUseFunction("swingtipPink", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.swingtipPink);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.swingtipPink, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.swingtipPink,0);
    }
}});

Block.registerDropFunction("swingtipPink", function(coords, blockID){
    [[ItemID.swingtipPink, 1, 0]];
});


IDRegistry.genBlockID("burstblossom");
Block.createBlock("burstblossom", [
    {name: "Burstblossom", texture: [["burstblossom", 0], ["burstblossom", 0], ["burstblossom", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.burstblossom, "plant");

IDRegistry.genItemID("burstblossom");
Item.createItem("burstblossom", "Burstblossom", {name: "burstblossom"});

Item.registerUseFunction("burstblossom", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.burstblossom);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.burstblossom, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.burstblossom,0);
    }
}});

Block.registerDropFunction("burstblossom", function(coords, blockID){
    [[ItemID.burstblossom, 1, 0]];
});


IDRegistry.genBlockID("HighlandsTulips");
Block.createBlock("HighlandsTulips", [
    {name: "Highlands Tulips", texture: [["highlands_tulips", 0], ["highlands_tulips", 0], ["highlands_tulips", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.HighlandsTulips, "plant");

IDRegistry.genItemID("HighlandsTulips");
Item.createItem("HighlandsTulips", "Highlands Tulips", {name: "highlands_tulips"});

Item.registerUseFunction("HighlandsTulips", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.HighlandsTulips);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.HighlandsTulips, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.HighlandsTulips,0);
    }
}});

Block.registerDropFunction("HighlandsTulips", function(coords, blockID){ 
    [[ItemID.HighlandsTulips, 1, 0]];
});


IDRegistry.genBlockID("quickshoot");
Block.createBlock("quickshoot", [
    {name: "Quickshoot", texture: [["quickshoot", 0], ["quickshoot", 0], ["quickshoot", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.quickshoot, "plant");

IDRegistry.genItemID("quickshoot");
Item.createItem("quickshoot", "Quickshoot", {name: "quickshoot"});

Item.registerUseFunction("quickshoot", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.quickshoot);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.quickshoot, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 33) return;
   for(let i=0; i<randomInt(0, 6); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.quickshoot,0);
    }
}});

Block.registerDropFunction("quickshoot", function(coords, blockID){
    [[ItemID.HighlandsTulips, 1, 0]];
});


IDRegistry.genBlockID("neverbloom");
Block.createBlock("neverbloom", [
    {name: "Neverbloom", texture: [["neverbloom", 0], ["neverbloom", 0], ["neverbloom", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.neverbloom, "plant");

IDRegistry.genItemID("neverbloom");
Item.createItem("neverbloom", "Neverbloom", {name: "neverbloom"});

Item.registerUseFunction("neverbloom", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.neverbloom);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.neverbloom, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 70) return;
   for(let i=0; i<randomInt(0, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.neverbloom,0);
    }
}});

Block.registerDropFunction("neverbloom", function(coords, blockID){ 
    [[ItemID.neverbloom, 1, 0]];
});


IDRegistry.genBlockID("arcticSpkikespring");
Block.createBlock("arcticSpkikespring", [
    {name: "Arctic spikespring", texture: [["arctic_spikespring", 0], ["arctic_spikespring", 0], ["arctic_spikespring", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.arcticSpkikespring, "plant");

IDRegistry.genItemID("arcticSpkikespring");
Item.createItem("arcticSpkikespring", "Arctic spikespring", {name: "arctic_spikespring"});

Item.registerUseFunction("arcticSpkikespring", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.arcticSpkikespring);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.arcticSpkikespring, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 70) return;
   for(let i=0; i<randomInt(0, 9); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.arcticSpkikespring,0);
    }
}});

Block.registerDropFunction("arcticSpkikespring", function(coords, blockID){ 
    [[ItemID.arcticSpkikespring, 1, 0]];
});


IDRegistry.genBlockID("irradiated");
Block.createBlock("irradiated", [
    {name: "Irradiated", texture: [["irradiated_flower", 0], ["irradiated_flower", 0], ["irradiated_flower", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.irradiated, "plant");

IDRegistry.genItemID("irradiated");
Item.createItem("irradiated", "Irradiated", {name: "irradiated_flower"});

Item.registerUseFunction("irradiated", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.irradiated);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.irradiated, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 100, coords.z);
  if (coords.y < 60) return;
   for(let i=0; i<randomInt(0, 1); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.irradiated,0);
    }
}});

Block.registerDropFunction("irradiated", function(coords, blockID){ 
    [[ItemID.irradiated, 1, 0]];
});




// file: blocks/plants/rose.js

IDRegistry.genBlockID("roseWhite");
Block.createBlock("roseWhite", [
    {name: "White Rose", texture: [["white_rosen", 0], ["white_rosen", 0], ["white_rosen", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("roseWhite");
Item.createItem("roseWhite", "White Rose", {name: "white_rosen"});

Item.registerUseFunction("roseWhite", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.roseWhite);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.roseWhite, false);

Block.registerDropFunction("roseWhite", function(coords, blockID){ 
     [[ItemID.roseWhite, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 4); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.roseWhite,0);     
    }
}});


IDRegistry.genBlockID("roseWhiteForgoten");
Block.createBlock("roseWhiteForgoten", [
    {name: "White Rose", texture: [["forgotten_rose", 0], ["forgotten_rose", 0], ["forgotten_rose", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("roseWhiteForgoten");
Item.createItem("roseWhiteForgoten", "White Rose", {name: "forgotten_rose"});

Item.registerUseFunction("roseWhiteForgoten", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.roseWhiteForgoten);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.roseWhiteForgoten, false);

Block.registerDropFunction("roseWhiteForgoten", function(coords, blockID){
    [[ItemID.roseWhiteForgoten, 1, 0]];
});

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 32) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.roseWhiteForgoten,0);     
    }
}});




// file: blocks/plants/blueberry.js

IDRegistry.genBlockID("bushBerry");
Block.createBlock("bushBerry", [
    {name: "Blueberry Bush", texture: [["berrybush", 0]], inCreative: true}], {solid: false,  destroytime: 0.1, explosionres: 1, lightopacity: 5,  translucency: 0.5, sound: "grass"});
ToolAPI.registerBlockMaterial(BlockID.bushBerry, "plant");

IDRegistry.genBlockID("bush");
Block.createBlock("bush", [
    {name: "Bush", texture: [["highlands_bush_outer", 0]], inCreative: false}], {solid: false,  destroytime: 0.1, explosionres: 1, lightopacity: 5,  translucency: 0.5, sound: "grass"});
ToolAPI.registerBlockMaterial(BlockID.bush, "plant");


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 if(Math.random() < 0.2){
for(var i = 0; i < 5; i++){
  for(var k = 0; k < randomInt(0,5); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
 if (coords.y < 33) return;
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether && World.getBlockID(coords.x + k,coords.y, coords.z + k) == BlockID.grassblockAether){ 
World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.bushBerry,0);
          }
       }    
    }
}});

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl= coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.bushBerry){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.blueBerry, randomInt(2,5), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.bush,0); 
}
});

Block.setRandomTickCallback(BlockID.bush, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();
  if (region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
    region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerry,0);  
    }
});     
//FROSTY

IDRegistry.genBlockID("bushBerryf");
Block.createBlock("bushBerryf", [
    {name: "Frosty Blueberry Bush", texture: [["berrybush", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.bushBerryf, "plant");

IDRegistry.genBlockID("bushf");
Block.createBlock("bushf", [
    {name: "Frosty Bush", texture: [["green_skyrootleaves", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.bushf, "plant");


/*Callback.addCallback("GenerateChunk", function (chunkX, chunkZ){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 200, coords.z);
 if (coords.y < 87) return;
  if(Math.random() < 6){
   for(var i = 0; i < 7; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.bushBerryf,0);
 World.setBlock(coords.x,coords.y+2,coords.z,BlockID.bushBerryf,0);
  World.setBlock(coords.x-1,coords.y+1,coords.z,BlockID.bushBerryf,0);   
       }    
    }
}});*/

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl=coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.bushBerryf){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.whidBerry, randomInt(1, 5), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.bushf,0); 
}
});

Block.setRandomTickCallback(BlockID.bushf, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();
  if (region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
    region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerryf,0);  
    }
});   

//Enchanted
IDRegistry.genBlockID("enbushBerry");
Block.createBlock("enbushBerry", [
    {name: "Blueberry Bush Enchanted", texture: [["enchanted_blueberrybush", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.enbushBerry, "plant");

IDRegistry.genBlockID("enbush");
Block.createBlock("enbush", [
{name: "Bush Enchanted", texture: [["earthshifter_leaves", 0]],inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.enbush, "plant");

/*Callback.addCallback("GenerateChunk", function (chunkX, chunkZ){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 200, coords.z);
 if (coords.y < 87) return;
  if(Math.random() < 6){
   for(var i = 0; i < 7; i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.enbushBerry,0);
 World.setBlock(coords.x,coords.y+2,coords.z,BlockID.enbushBerry,0);
  World.setBlock(coords.x+1,coords.y+1,coords.z,BlockID.enbushBerry,0);   
       }    
    }
}});*/

Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
pl=coords.relative;
  var region = BlockSource.getDefaultForActor(player);
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.enbushBerry){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.enwhidBerry, randomInt(2, 3), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.enbush,0); 
}
});

Block.setRandomTickCallback(BlockID.enbush, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();
  if (region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
    region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.enbushBerry,0);  
    }
});   




// file: blocks/plants/orange.js

IDRegistry.genBlockID("orangeoBush");
Block.createBlock("orangeoBush", [
    {name: "Orange bush", texture: [["orangeotree", 0], ["orangeotree", 0], ["orangeotree", 0]], inCreative: false}], BLOCK_TYPE_PLANT);
ToolAPI.registerBlockMaterial(BlockID.orangeoBush, "plant");
setPlantModel(BlockID.orangeoBush, false);

Block.registerDropFunction("orangeoBush", function(coords, blockID){
    [[ItemID.orangeoBush, 1, 0]];
});

IDRegistry.genBlockID("orangetBush");
Block.createBlock("orangetBush", [
    {name: "Orange bush", texture: [["orangettree", 0], ["orangettree", 0], ["orangettree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangetBush, "plant");
setPlantModel(BlockID.orangetBush, true);

Block.registerDropFunction("orangetBush", function(){ 
  return [];
});

IDRegistry.genBlockID("orangetrBush");
Block.createBlock("orangetrBush", [
    {name: "Orange bush", texture: [["orangetrtree", 0], ["orangetrtree", 0], ["orangetrtree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangetrBush, "plant");
setPlantModel(BlockID.orangetrBush, true);

Block.registerDropFunction("orangetrBush", function(){ 
  return [];
});

IDRegistry.genBlockID("orangefrBush");
Block.createBlock("orangefrBush", [
    {name: "Orange bush", texture: [["orangefrtree", 0], ["orangefrtree", 0], ["orangefrtree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangefrBush, "plant");
setPlantModel(BlockID.orangefrBush, true);

Block.registerDropFunction("orangefrBush", function(){
    if(Math.random() < .15){
        return [[ItemID.orangeoBush, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("orangefiBush");
Block.createBlock("orangefiBush", [
    {name: "Orange bush", texture: [["orangefitree", 0], ["orangefitree", 0], ["orangefitree", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.orangefiBush, "plant");
setPlantModel(BlockID.orangefiBush, true);

Block.registerDropFunction("orangefiBush", function(){
    if(Math.random() < .65){
        return [[ItemID.orangeoBush, randomInt(1,2), 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genItemID("orangeoBush");
Item.createItem("orangeoBush", "Orange bush sapling", {name: "orange_tree", meta: 0});
     
Item.registerUseFunction("orangeoBush", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.grassblockAether){ 
        region.setBlock(place.x, place.y, place.z, BlockID.orangeoBush);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});    
    
Block.setRandomTickCallback(BlockID.orangeoBush, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();    
  if(region.getBlockId(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
      region.destroyBlock(coords.x,coords.y,coords.z,false);                      
  orangesGenerationHelper.generateBushes(region, {x: coords.x, y: coords.y, z: coords.z});  
     }
});            
     
Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
var region = BlockSource.getDefaultForActor(player); 
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.orangefiBush){
region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.Orange, randomInt(1, 3), 0);
region.setBlock(coords.x,coords.y,coords.z,BlockID.orangetrBush,0);
}
});

Block.setRandomTickCallback(BlockID.orangetrBush, function(x, y, z, id, data){   
var region = BlockSource.getDefaultForActor(player);   
var coords = region.getBlockId(x,y,z);   
   region.destroyBlock(coords.x,coords.y,coords.z,false);                      
    region.setBlock(coords.x,coords.y,coords.z,BlockID.orangefiBush,0);    
});     
    
          
Callback.addCallback("ItemUse", function (coords,item,block, is, player) {
var region = BlockSource.getDefaultForActor(player); 
if (region.getBlockId(coords.x, coords.y, coords.z)==BlockID.orangefrBush){
   region.spawnDroppedItem(coords.x, coords.y+1, coords.z, ItemID.Orange, randomInt(1, 3), 0);
    region.setBlock(coords.x,coords.y,coords.z,BlockID.orangetBush,0); 
}
});

Block.setRandomTickCallback(BlockID.orangetBush, function(x, y, z, id, data){
var region = BlockSource.getDefaultForActor(player); 
var coords = region.getBlockId(x,y,z);    
     region.destroyBlock(coords.x,coords.y,coords.z,false);                      
      region.setBlock(coords.x,coords.y,coords.z,BlockID.orangefrBush,0);                      
  });     

var orangesGenerationHelper = {
    p: function(region, x, y, z, id){ 
        region.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generateBushes:function(region, crds, block){
        var block = {
            upO: BlockID.orangefiBush,
            downO: BlockID.orangefrBush,
            upT: BlockID.orangetrBush,
            downT: BlockID.orangetBush
        }
        if(this.random()){                       
            this.p(region, crds.x, crds.y, crds.z, block.downO);
            this.p(region, crds.x, crds.y+1, crds.z, block.upO);                                          
            }if(this.random()){            
            this.p(region, crds.x, crds.y, crds.z, block.downT);
            this.p(region, crds.x, crds.y+1, crds.z, block.upT);                       
            }
      }
}

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
var region = BlockSource.getCurrentWorldGenRegion(); 
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 59) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether){  
   if(Math.random() < .38) 
orangesGenerationHelper.generateBushes(region, {x: coords.x, y: coords.y+1, z: coords.z});  
    }
}});




// file: blocks/plants/brettle.js

IDRegistry.genItemID("brettleC");
Item.createItem("brettleC", "Brettl Cane", {name: "brettl_cane", meta: 0},{stack: 8});

IDRegistry.genItemID("brettleGrass");
Item.createItem("brettleGrass", "Brettl Grass", {name: "brettl_grass", meta: 0},{stack: 64});

IDRegistry.genItemID("brettleRope");
Item.createItem("brettleRope", "Brettl Rope", {name: "brettl_rope", meta: 0},{stack: 16});

Recipes.addShaped({id: ItemID.brettleRope, count: 1, data: 0}, [
    "oox",
    "oxo"
], ['x', ItemID.brettleGrass, 0]);


IDRegistry.genBlockID("brettleCB");
Block.createBlock("brettleCB", [
    {name: "Brettle plant", texture: [["brettl_plant_base", 0], ["brettl_plant_base", 0], ["brettl_plant_base", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCB, "plant");
setPlantModel(BlockID.brettleCB, true);     

Block.registerDropFunction("brettleCB", function(){
    if(Math.random() < .5){
        return [[ItemID.brettleC, 1, 0]]
    }
    else {
        return [];
    }
});

IDRegistry.genBlockID("brettleCBf");
Block.createBlock("brettleCBf", [
    {name: "Brettle plant", texture: [["brettl_plant_base_g", 0], ["brettl_plant_base_g", 0], ["brettl_plant_base_g", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCBf, "plant");
setPlantModel(BlockID.brettleCBf, true);

Block.registerDropFunction("brettleCB", function(){
    if(Math.random() < .65){
        return [[ItemID.brettleGrass, 1, 0]]
    }
    else {
        return [[ItemID.brettleC, 1, 0]];
    }
});

IDRegistry.genBlockID("brettleM");
Block.createBlock("brettleM", [
    {name: "Brettle plant", texture: [["brettl_plant_mid", 0], ["brettl_plant_mid", 0], ["brettl_plant_mid", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleM, "plant");
setPlantModel(BlockID.brettleM, true);

Block.registerDropFunction("brettleM", function(){ 
  return [];
});

IDRegistry.genBlockID("brettleMf");
Block.createBlock("brettleMf", [
    {name: "Brettle plant", texture: [["brettl_plant_mid_g", 0], ["brettl_plant_mid_g", 0], ["brettl_plant_mid_g", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleMf, "plant");
setPlantModel(BlockID.brettleMf, true);

Block.registerDropFunction("brettleMf", function(){ 
  return [];
});

IDRegistry.genBlockID("brettleCT");
Block.createBlock("brettleCT", [
    {name: "Brettle plant", texture: [["brettl_plant_top", 0], ["brettl_plant_top", 0], ["brettl_plant_top", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCT, "plant");
setPlantModel(BlockID.brettleCT, true);

Block.registerDropFunction("brettleCT", function(){ 
  return [];
});

IDRegistry.genBlockID("brettleCTf");
Block.createBlock("brettleCTf", [
    {name: "Brettle plant", texture: [["brettl_plant_top_g", 0], ["brettl_plant_top_g", 0], ["brettl_plant_top_g", 0]], inCreative: false}], BLOCK_TYPE_PLANT_DOUBLE);
ToolAPI.registerBlockMaterial(BlockID.brettleCTf, "plant");
setPlantModel(BlockID.brettleCTf, true);

Block.registerDropFunction("brettleCTf", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.brettleCB, randomInt(1,3), 0);
});

IDRegistry.genItemID("brettleCB");
Item.createItem("brettleCB", "Brettle Plant Flower", {name: "brettl_plant_top_g", meta:1});

Item.registerUseFunction("brettleCB", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.quickSkyroot){ 
        region.setBlock(place.x, place.y, place.z, BlockID.brettleCB);
         region.setBlock(place.x, place.y+1, place.z, BlockID.brettleM);
          region.setBlock(place.x, place.y+2, place.z, BlockID.brettleCT);
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});

 
 
Block.setRandomTickCallback(BlockID.brettleCB, function(x, y, z, id, data){
var coords = coords.relative; 
 var region = BlockSource.getCurrentWorldGenRegion();    
  if(region.getBlockId(coords.x, coords.y - 3, coords.z)==BlockID.quickSkyroot){
      region.destroyBlock(coords.x,coords.y,coords.z,false);  
       region.destroyBlock(coords.x,coords.y - 1,coords.z,false);
        region.destroyBlock(coords.x,coords.y - 2,coords.z,false);
         region.setBlock(coords.x, coords.y, coords.z, BlockID.brettleCBf);
          region.setBlock(coords.x, coords.y-1, coords.z, BlockID.brettleMf);
           region.setBlock(coords.x, coords.y-2, coords.z, BlockID.brettleCTf);
     }
});
Block.registerEntityInsideFunction(BlockID.brettleMf, function(coords, id, entity){
if(World.getThreadTime() % 30) 
 Entity.addEffect(entity, 20, 2, 200, false,false);   
});
  
Block.registerEntityInsideFunction(BlockID.brettleCBf, function(coords, id, entity){
if(World.getThreadTime() % 30) 
 Entity.addEffect(entity, 20, 2, 200, false,false);   
});
//FOR SAND-CLIFFS BIOME.

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
   if(coords.y < 33) return;
   if(World.getBlockID(coords.x, coords.y, coords.z) == BlockID.quickSkyroot && Math.random() < .55){ 
       for(let i=0; i<randomInt(1, 4); i++){
         World.setBlock(coords.x, coords.y+1, coords.z, BlockID.brettleCBf);
          World.setBlock(coords.x, coords.y+2, coords.z, BlockID.brettleMf);
           World.setBlock(coords.x, coords.y+3, coords.z, BlockID.brettleCTf);    
         } 
     }      
});
       




// file: blocks/plants/shrooms.js

IDRegistry.genBlockID("shroomStone");
Block.createBlock("shroomStone", [
    {name: "Stone Shroom", texture: [["stoneshroom", 0], ["stoneshroom", 0], ["stoneshroom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("shroomStone");
Item.createItem("shroomStone", "Stone Shroom", {name: "stoneshroom"});

Item.registerUseFunction("shroomStone", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Holystone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shroomStone);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shroomStone, false);

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 95) return;
   for(let i=0; i<randomInt(0, 7); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Holystone){ 
World.setBlock(coords.x,coords.y+1,coords.z,BlockID.shroomStone,0);     
    }
}});


IDRegistry.genBlockID("shroomBark");
Block.createBlock("shroomBark", [
    {name: "Bark Shroom", texture: [["barkshroom", 0], ["barkshroom", 0], ["barkshroom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("shroomBark");
Item.createItem("shroomBark", "Bark Shroom", {name: "barkshroom"});

Item.registerUseFunction("shroomBark", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.skyrootBark){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shroomBark);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shroomBark, false);

Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
  if (coords.y < 50) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z) == BlockID.skyrootBark){ 
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.shroomBark,0);     
    }
}});


IDRegistry.genBlockID("shroomMagnetic");
Block.createBlock("shroomMagnetic", [
    {name: "Magnetic Shroom", texture: [["magnetic_shroom", 0], ["magnetic_shroom", 0], ["magnetic_shroom", 0]], inCreative: false}
], BLOCK_TYPE_PLANT);

IDRegistry.genItemID("shroomMagnetic");
Item.createItem("shroomMagnetic", "Magnetic Shroom", {name: "magnetic_shroom"});

Item.registerUseFunction("shroomMagnetic", function(coords, item, block, player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
   if(region.getBlockId(place.x,place.y-1,place.z)==BlockID.Holystone){ 
        region.setBlock(place.x, place.y, place.z, BlockID.shroomMagnetic);  
         Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    } 
});
setPlantModel(BlockID.shroomMagnetic, false);
/*
Callback.addCallback("GenerateChunkUniversal", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 225, coords.z);
  if (coords.y < 95) return;
   for(let i=0; i<randomInt(0, 3); i++){
 if(World.getBlockID(coords.x,coords.y,coords.z) == BlockID.Holystone){ 
World.setBlock(coords.x,coords.y+1,coords.z, BlockID.shroomMagnetic,0);     
    }
}});*/




// file: blocks/plants/plump.js

IDRegistry.genBlockID("plump");
Block.createBlock("plump", [
    {name: "Plump", texture: [["plumproot_bottom", 0],["plumproot_top", 0],["plumproot_side", 0]], inCreative: false}], {solid: true,  destroytime: 0.4, explosionres: 1, lightopacity: 5,  translucency: 0.5, sound: "bamboo"});
ToolAPI.registerBlockMaterial(BlockID.plump, "plant");


Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimensionId){
if (dimensionId != Aether.id) return;
 if(Math.random() < 0.1){
for(var i = 0; i < 3; i++){
  for(var k = 0; k < randomInt(1,3); k++){
let coords = GenerationUtils.randomCoords(chunkX, chunkZ);
  coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
 if (coords.y < 38) return;
 if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.grassblockAether && World.getBlockID(coords.x + k,coords.y, coords.z + k) == BlockID.grassblockAether){ 
World.setBlock(coords.x + k,coords.y+1,coords.z + k,BlockID.plump,0);
          }
       }    
    }
}});




// file: items/items.js

IDRegistry.genItemID("stickSkyroot");
Item.createItem("stickSkyroot", "Stick Skyroot", {name: "skyroot_stick"});

IDRegistry.genItemID("icestone");
Item.createItem("icestone", "Icestone", {name: "icestone"});

IDRegistry.genItemID("scatterglassShard");
Item.createItem("scatterglassShard", "Crude Scatterglass Shard", {name: "crude_scatterglass_shard"});

IDRegistry.genItemID("zaniteGemstone");
Item.createItem("zaniteGemstone", "Zanite Gemstone", {name: "zanite_gemstone"});

IDRegistry.genItemID("oreArkenium");
Item.createItem("oreArkenium", "Arkenium Ore", {name: "arkenium_ore"});

IDRegistry.genItemID("oreGravitite");
Item.createItem("oreGravitite", "Gravitite Ore", {name: "gravitite_ore"});

IDRegistry.genItemID("continuumOrb");
Item.createItem("continuumOrb", "Continuum Orb", {name: "continuum_orb"},{stack: 1});

IDRegistry.genItemID("plateArkenium");
Item.createItem("plateArkenium", "Arkenium Plate", {name: "arkenium_plate"});
Callback.addCallback('PostLoaded', function () {
Recipes.addFurnace(BlockID.oreArkenium, 0, ItemID.plateArkenium, 0);
});

IDRegistry.genItemID("plateGravitite");
Item.createItem("plateGravitite", "Gravitite Plate", {name: "gravitite_plate"});

IDRegistry.genItemID("EnAmbrosium");
Item.createItem("EnAmbrosium", "Ambrosium", {name: "ambrosium_shard"});

IDRegistry.genItemID("Ambrosium");
Item.createItem("Ambrosium", "Ambrosium Shard", {name: "ambrosium_shard", meta: 1});
Recipes.addFurnaceFuel(ItemID.Ambrosium, 0, 400);

IDRegistry.genItemID("chunkAmbrosium");
Item.createItem("chunkAmbrosium", "Ambrosium Chunk", {name: "ambrosium_chunk"});

Recipes.addShaped({id: ItemID.Ambrosium, count: 1, data: 0}, [
    "xx",
    "xx"
], ['x', ItemID.chunkAmbrosium, 0]);

Recipes.addShaped({id: ItemID.EnAmbrosium, count: 1, data: 0}, [
    "xx",
    "xx"
], ['x', ItemID.Ambrosium, 0]);

Recipes.addShaped({id: ItemID.chunkAmbrosium, count: 4, data: 0}, [
    "x"
], ['x', ItemID.Ambrosium, 0]);

IDRegistry.genItemID("itemPortal");
Item.createItem("itemPortal", "Aether Portal", {name: "aether_portal", meta: 1},{stack: 1});

IDRegistry.genItemID("itemAPortal");
Item.createItem("itemAPortal", "Aether Portal Active", {name: "aether_portal", meta: 0},{stack: 1});

IDRegistry.genItemID("goldAmber");
Item.createItem("goldAmber", "Golden Amber", {name: "golden_amber"});

IDRegistry.genItemID("ironBuble");
Item.createItem("ironBuble", "Iron Buble", {name: "iron_bubble"});

IDRegistry.genItemID("taegoreSkin");
Item.createItem("taegoreSkin", "Taegore Skin", {name: "taegore_hide"});

IDRegistry.genItemID("burrukaiSkin");
Item.createItem("burrukaiSkin", "Burrukai Pelt", {name: "burrukai_pelt"});

IDRegistry.genItemID("cloudWool");
Item.createItem("cloudWool", "Cloudwool", {name: "cloudwool"});

Callback.addCallback("PostLoaded", function () {        
Recipes.addShaped({id: BlockID.cloudWool, count: 1, data: 0}, [
    "bb",
    "bb"
], ['b', ItemID.cloudWool, 0]);
});

/*
var portalGenerationHelper = {
    p: function(region, x, y, z, id){
        region.setBlock(x, y, z, id, 0);
    },
    random:function(){if(Math.floor(Math.random() * (150 - 0 + 1)) <= 70){return true}else if((Math.floor(Math.random() * (150 - 0 + 1))) >= 68){return false}},
    radiuse:function(coords, code, i){
        for(var x = coords.x - i; x < coords.x + i; x++){
            for(var y = coords.y - i; y < coords.y + i; y++){
                for(var z = coords.z- i; z < coords.z + i; z++){
                    code();
                }
            }
        }
    },    
    generatePortal:function(region, crds, block){
        var block = {
            frame: 89,
            portal: BlockID.aetherPortal
        }
        if(this.random()){
            var a = [];            
            this.p(region, crds.x, crds.y, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(region, crds.x, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x, crds.y+3, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }if(this.random()){
            var a = [];            
            this.p(region, crds.x, crds.y, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(region, crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(region, crds.x, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(region, crds.x, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(region, crds.x, crds.y+3, crds.z, block.portal);
            this.p(region, crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }
      }
}*/

Item.registerUseFunction("itemAPortal", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
  if(GenerationUtils.isTransparentBlock(region.getBlockId(place.x, place.y, place.z))){
    //    portalGenerationHelper.generatePortal(region, {x: place.x, y: place.y, z: place.z});    
Network.sendServerMessage(Translation.translate("Now player MUST create aether teleporter item using 1 golden ingot 4 stones and 4 iron ingots"));      
    } 
});

Recipes.addShaped({id: ItemID.itemPortal, count: 1, data: 0}, [
    "aaa",
    "a a",
    "aaa"
], ['a', 89, 0]);

Recipes.addShaped({id: ItemID.itemAPortal, count: 1, data: 0}, [
    "ab"
], ['a', ItemID.itemPortal, 0, 'b', 866, 0]);

Item.registerUseFunction("continuumOrb", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
var random = new java.util.Random();
   var drop = getContinumDropItem();
    region.spawnDroppedItem(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, drop.count, drop.data);
    //item.id--;
    //if(!item.count){item.id = 0;}
    Entity.setCarriedItem(player, item.id, item.count - 1, 0);
});

var CONTINUM_RANDOM_DROP = [   
    {chance: 41, id: ItemID.Ambrosium, count: randomInt(1, 4), data: 0},
    {chance: 35, id: ItemID.icestone, count: randomInt(1, 3), data: 0},
    {chance: 31, id: ItemID.skyrootSword, count: 1, data: 0},
    {chance: 28, id: ItemID.skyrootShovel, count: 1, data: 0},
    {chance: 35, id: ItemID.skyrootPickaxe, count: 1, data: 0},
    {chance: 32, id: ItemID.skyrootAxe, count: 1, data: 0},
    {chance: 30, id: ItemID.ambrosiumTorch, count: 4, data: 0},
    {chance: .96, id: ItemID.plateGravitite, count: randomInt(1, 2), data: 0},
    {chance: .1, id: ItemID.gravititeSword, count: 1, data: 0},
    {chance: .7, id: ItemID.valkiriaSword, count: 1, data: 0},
    {chance: 1.5, id: BlockID.oreGravitite, count: randomInt(1, 2), data: 0},
    {chance: .27, id: BlockID.oreZanite, count: randomInt(1, 3), data: 0},
    {chance: 20, id: BlockID.oreArkenium, count: randomInt(1, 2), data: 0},
    {chance: 22, id: ItemID.zaniteGemstone, count: randomInt(1, 3), data: 0},
    {chance: 12, id: ItemID.zanitePickaxe, count: 1, data: 0},
    {chance: .75, id: ItemID.vampireSword, count: 1, data: 0},
    {chance: .55, id: ItemID.holySword, count: 1, data: 0},
    {chance: .83, id: ItemID.flamingSword, count: 1, data: 0},
    {chance: .70, id: ItemID.lightingSword, count: randomInt(1, 2), data: 0},
    {chance: .85, id: ItemID.pigsSword, count: randomInt(1, 2), data: 0},
    {chance: .76, id: ItemID.neptuneHelmet, count: 1, data: 0},
    {chance: .69, id: ItemID.neptuneChestplate, count: 1, data: 0},
    {chance: .72, id: ItemID.neptuneLeggings, count: 1, data: 0},
    {chance: .79, id: ItemID.neptuneBoots, count: 1, data: 0},
    {chance: 8.5, id: ItemID.phoenixHelmet, count: 1, data: 0},
    {chance: 8, id: ItemID.phoenixChestplate, count: 1, data: 0},
    {chance: 8.1, id: ItemID.phoenixLeggings, count: 1, data: 0},
    {chance: 8.4, id: ItemID.phoenixBoots, count: 1, data: 0}
];

function getContinumDropItem(){
    var total = 0;
    for (var i in CONTINUM_RANDOM_DROP){
        total += CONTINUM_RANDOM_DROP[i].chance; 
    var random = Math.random() * total * 1.3;
    var current = 0; 
        var drop = CONTINUM_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }     
}

IDRegistry.genItemID("APortal");
Item.createItem("APortal", "Aether Teleporter", {name: "aether_teleporter", meta: 0},{stack: 1});

Recipes.addShaped({id: ItemID.APortal, count: 1, data: 0}, [
    "sis",
    "igi",
    "sis"
], ['s', 1, 0, 'g', 266, 0, 'i', 265, 0]);

Item.registerUseFunction("APortal", function(coords, item, block,  player){
var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
  if(GenerationUtils.isTransparentBlock(region.getBlockId(place.x, place.y, place.z))){ 
//Dimensions.transfer(player, Aether.id);
Network.sendServerMessage(Translation.translate("Dimension is under construction, lags bug and wreked balance are normal for now and some time before mod be completed"));
region.setBlock(place.x, place.y, place.z, BlockID.TeleporterThera);
region.setBlock(place.x, place.y + 1, place.z, BlockID.TeleporterTheraE);        
    } 
});

IDRegistry.genItemID("irradiatedDust");
Item.createItem("irradiatedDust", "Irradiated Dust", {name: "irradiated_dust"});

IDRegistry.genItemID("irradiatedChunk");
Item.createItem("irradiatedChunk", "Irradiated Chunk", {name: "irradiated_chunk"}, {stack: 16});
Item.setGlint(ItemID.irradiatedChunk, true);

IDRegistry.genItemID("irradiatedCharm");
Item.createItem("irradiatedCharm", "Irradiated Charm", {name: "irradiated_charm"}, {stack: 1});
Item.setGlint(ItemID.irradiatedCharm, true);

IDRegistry.genItemID("irradiatedNeckwear");
Item.createItem("irradiatedNeckwear", "Irradiated Neckwear", {name: "irradiated_neckwear"}, {stack: 1});
Item.setGlint(ItemID.irradiatedNeckwear, true);

Callback.addCallback("PostLoaded", function () {
Recipes.addFurnace(ItemID.irradiatedDust, 0, ItemID.irradiatedChunk, 0);
        
Recipes.addShaped({id: ItemID.irradiatedCharm, count: 1, data: 0}, [
    "a",
   "aoa",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);

Recipes.addShaped({id: ItemID.irradiatedCharm, count: 1, data: 0}, [
   "aaa",
   "aoa",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);

Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "aaa",
    "aoa",
    "aaa"
], ['b', BlockID.Holystone, 0]);
});





// file: items/food/food.js

IDRegistry.genItemID("blueBerry");
Item.createFoodItem("blueBerry", "Blue berry", {name: "blueberries"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.blueBerry){
Entity.addEffect(player, 13, 0, 600, false,false);
}});

IDRegistry.genItemID("blueBerryl");
Item.createFoodItem("blueBerryl", "Blue berry lollipop", {name: "blue_berry_lollipop"},{isTech:false,stack: 32,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.blueBerryl){
Entity.addEffect(player, 13, 0, 666, false,false);
}});

Recipes.addShaped({id: ItemID.blueBerryl, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.blueBerry, 0]);

IDRegistry.genItemID("whidBerry");
Item.createFoodItem("whidBerry", "Whynd berry", {name: "wyndberry"},{isTech:false,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.whidBerry){
Entity.addEffect(player, 18, 0, 360, false,false);
}});

IDRegistry.genItemID("enwhidBerry");
Item.createFoodItem("enwhidBerry", "Enchanted whynd berry", {name: "enchanted_wyndberry"},{isTech:false,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.enwhidBerry){
Entity.addEffect(player, 18, 0, 120, false,false);
}});

IDRegistry.genItemID("rawhidBerry");
Item.createFoodItem("rawhidBerry", "Rainbow whynd berry", {name: "rainbow_strawberry"},{isTech:false,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
if(Entity.getCarriedItem(player).id==ItemID.rawhidBerry){
Entity.addEffect(player, 10, 1, 180, false,false);
}});

IDRegistry.genItemID("Orange");
Item.createFoodItem("Orange", "Orange", {name: "orange"},{isTech:false,food: 7});

IDRegistry.genItemID("Whiteapl");
Item.createFoodItem("Whiteapl", "White apple", {name: "white_apple"},{isTech:false,food: 5});

IDRegistry.genItemID("Orangel");
Item.createFoodItem("Orangel", "Orange lollipop", {name: "orange_lollipop"},{isTech:false,stack: 32,food: 7});

Recipes.addShaped({id: ItemID.Orangel, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.Orange, 0]);

IDRegistry.genItemID("enchantedBerry");
Item.createFoodItem("enchantedBerry", "Enchanted berry", {name: "enchanted_blueberry"},{isTech:false,food: 4});

IDRegistry.genItemID("candyCane");
Item.createFoodItem("candyCane", "Candy Cane", {name: "candy_cane"},{isTech:false,food: 4});

IDRegistry.genItemID("candyCorn");
Item.createFoodItem("candyCorn", "Candy Corn", {name: "candy_corn"},{isTech:false,food: 3});

IDRegistry.genItemID("shardLife");
Item.createFoodItem("shardLife", "Shard of life", {name: "shard_of_life"},{isTech:false,stack: 4,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.shardLife){
Entity.setMaxHealth(player, Ph+2);    
if(Entity.getMaxHealth(player) == 40)return false    
}});

IDRegistry.genItemID("shardRegen");
Item.createFoodItem("shardRegen", "Shard of regeneration", {name: "regeneration_stone"},{isTech:false,stack: 8,food: 2});
Callback.addCallback("FoodEaten",function(heal, satRatio, player){
var Ph = Entity.getMaxHealth(player);
if(Entity.getCarriedItem(player).id==ItemID.shardRegen){
Entity.addEffect(player, 10, 4, 200, false,false);
if(Entity.getMaxHealth(player) == Ph)return false    
}});

IDRegistry.genItemID("gelSwetB");
Item.createFoodItem("gelSwetB", "Blue Swet Jelly", {name: "blue_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelSwetG");
Item.createFoodItem("gelSwetG", "Golden Swet Jelly", {name: "golden_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelSwetD");
Item.createFoodItem("gelSwetD", "Dark Swet Jelly", {name: "dark_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelSwetC");
Item.createFoodItem("gelSwetC", "Cream Swet Jelly", {name: "cream_swet_jelly"},{isTech:false,food: 5});

IDRegistry.genItemID("gelP");
Item.createFoodItem("gelP", "Pumpkin Jelly", {name: "jelly_pumpkin"},{isTech:false,food: 6});

IDRegistry.genItemID("taegorMeat");
Item.createFoodItem("taegorMeat", "Raw Taegor Meat", {name: "raw_taegore_meat"},{isTech:false,food: 5});

IDRegistry.genItemID("taegorMeatS");
Item.createFoodItem("taegorMeatS", "Taegor Steak", {name: "taegore_steak"},{isTech:false,food: 11});

IDRegistry.genItemID("kirridMeat");
Item.createFoodItem("kirridMeat", "Kirrid Loin", {name: "kirrid_loin"},{isTech:false,food: 6});

IDRegistry.genItemID("kirridMeatS");
Item.createFoodItem("kirridMeatS", "Kirrid Steak", {name: "kirrid_cutlet"},{isTech:false,food: 12});

IDRegistry.genItemID("burrukaiRibs");
Item.createFoodItem("burrukaiRibs", "Raw Burrukai Ribs", {name: "burrukai_rib_cut"},{isTech:false,food: 5});

IDRegistry.genItemID("burrukaiRibsF");
Item.createFoodItem("burrukaiRibsF", "Burrukai Ribs", {name: "burrukai_ribs"},{isTech:false,food: 13});

IDRegistry.genItemID("moaEgg");
Item.createFoodItem("moaEgg", "Moa Egg", {name: "moa_egg"},{isTech:false,food: 2});

IDRegistry.genItemID("moaEggF");
Item.createFoodItem("moaEggF", "Moa Egg Fried", {name: "fried_moa_egg"},{isTech:false,food: 9});

IDRegistry.genItemID("plumpMash");
Item.createFoodItem("plumpMash", "Plump Mash", {name: "plumproot_mash"},{isTech:false,food: 8});

IDRegistry.genItemID("plumpPie");
Item.createFoodItem("plumpPie", "Plump Pie", {name: "plumproot_pie"},{isTech:false,food: 14});

Callback.addCallback("PostLoaded", function () {
Recipes.addFurnace(ItemID.taegorMeat, 0, ItemID.taegorMeatS, 0);
Recipes.addFurnace(ItemID.burrukaiRibs, 0, ItemID.burrukaiRibsF, 0);
Recipes.addFurnace(ItemID.moaEgg, 0, ItemID.moaEggF, 0);
        
Recipes.addShaped({id: ItemID.plumpMash, count: 1, data: 0}, [
    "b",
    "a"
], ['a', 281, 0, 'b', BlockID.plump, 0]);

Recipes.addShaped({id: ItemID.plumpPie, count: 3, data: 0}, [
    "cb",
    "a"
], ['a', 296, 0, 'b', BlockID.plump, 0, 'c', 344, 0]);

});




// file: blocks/machines/chest.js

IDRegistry.genBlockID("skyrootChest");
Block.createBlockWithRotation("skyrootChest",[{name:"Skyroot chest",texture:[["skyrootchest",2],["skyrootchest",2],["skyrootchest",1],["skyrootchest",0],["skyrootchest",1],["skyrootchest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.skyrootChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});


var skyrootChestUI = new UI.StandartWindow({standart:{header:{text:{text:"Skyroot Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",
x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50}}});
TileEntity.registerPrototype(BlockID.skyrootChest,{getGuiScreen:function(){return skyrootChestUI}});




// file: blocks/machines/altar.js

var Altamesh = new RenderMesh();
Altamesh.setBlockTexture("altarent",0);
Altamesh.importFromFile(__dir__+"/models/Altar.obj","obj",null);
IDRegistry.genBlockID("AltarAether");
Block.createBlock("AltarAether", [
    {name: "Altar", texture: [["altar", 0],["altar", 1],["altar", 2],["altar", 3],["altar", 4],["altar", 5]], inCreative: true}
]);
var Altarender = new ICRender.Model();
Altarender.addEntry(new BlockRenderer.Model(Altamesh));
BlockRenderer.setStaticICRender(BlockID.AltarAether,0,Altarender);

Recipes.addShaped({id: BlockID.AltarAether, count: 1, data: 0}, [
    "###",
    "#s#",
    "###"
], ['s', ItemID.zaniteGemstone, 0, '#', BlockID.Holystone, 0 ]);




// file: blocks/machines/moa_egg.js

var Meggmesh = new RenderMesh();
Meggmesh.setBlockTexture("moa_egg",0);
Meggmesh.importFromFile(__dir__+"/models/moa_egg.obj","obj",{translate: [.5, 0, .5]});
IDRegistry.genBlockID("MoaEgg");
Block.createBlock("MoaEgg", [
    {name: "Moa Egg", texture: [["moa_egg", 0]], inCreative: true}
]);
var Meggrender = new ICRender.Model();
Meggrender.addEntry(new BlockRenderer.Model(Meggmesh));
BlockRenderer.setStaticICRender(BlockID.MoaEgg,0,Meggrender);

Block.registerDropFunction("MoaEgg", function(coords, blockID){
    return [[ItemID.moaEgg, 1, 0]] 
});




// file: trees/greenskyroot.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.7,
    explosionres: 1,
    renderallfaces: true,
    renderlayer: 1,
    lightopacity: 1,
    translucency: 0.5,
    sound: "grass"
});

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    solid: true,
    renderlayer: 3,
    explosionres: 8,
    translucency: 0,
    sound: "wood"
});

(function(){
    let constructVariationsSet = function(name, top, side){
        return [
            {name: name, texture: [[top, 0], [top, 0], [side, 0]], inCreative: true},
            {name: name, texture: [[side, 0], [side, 0], [top, 0], [top, 0], [side, 1]], inCreative: false},
            {name: name, texture: [[side, 1], [side, 1], [side, 1], [side, 1], [top, 0]], inCreative: false}
        ]
    }
    let makeDropFunction = function(id){
        Block.registerDropFunction(id, function(coords, blockID, blockData, level, enchant, item, region){
            return [[blockID, 1, 0]];
        });
    }
    let makePlaceFunction = function(id){
        Block.registerPlaceFunction(id, function(coords, item, block, player, region){
            let r = coords.relative;
            switch(coords.side){
                case 0: case 1:
                    region.setBlock(r.x, r.y, r.z, id, 0); break;
                case 2: case 3:
                    region.setBlock(r.x, r.y, r.z, id, 1); break;
                case 4: case 5:
                    region.setBlock(r.x, r.y, r.z, id, 2); break;
            }
        });
    };
    (function(ids){
        for(let i in ids){
            let block = ids[i];
            let bid = block[0], 
                name = block[1], 
                topt = block[2], 
                sidet = block[3];
            IDRegistry.genBlockID(bid);
            Block.createBlock(bid, constructVariationsSet(name, topt, sidet), BLOCK_TYPE_WOOD);
            ToolAPI.registerBlockMaterial(BlockID[bid], "wood", 0, false);
            makeDropFunction(BlockID[bid]);
            makePlaceFunction(BlockID[bid]);
        }
    })([
        ["skyrootLog", "Skyroot Log", "aether_log_top", "aether_log"],
        ["skyrootBark", "Skyroot Bark", "aether_log", "aether_log"],
        ["wisprootLog", "Wisproot Log", "wisproot_log_top", "wisproot_log"],
        ["goldenLog", "Golden Log", "goldenoak_log_top", "goldenoak_log"]
    ]);
})();


IDRegistry.genBlockID("plankSkyroot");
Block.createBlock("plankSkyroot", [
    {name: "Skyroot Planks", texture: [["skyroot_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankSkyroot, "wood");

IDRegistry.genBlockID("plankSkyrootS");
Block.createBlock("plankSkyrootS", [
    {name: "Skyroot Planks Slab", texture: [["skyroot_planks", 0]], inCreative: true}
]);
ToolAPI.registerBlockMaterial(BlockID.plankSkyrootS, "wood");
TileRenderer.makeSlab(BlockID.plankSkyrootS, BlockID.plankSkyroot);

IDRegistry.genBlockID("stairsSkyroot");
Block.createBlock("stairsSkyroot", [
    {name: "Skyroot Stairs", texture: [["skyroot_planks", 0]], inCreative: true}
], BLOCK_TYPE_STAIRS_WOOD);

IDRegistry.genBlockID("fenceSkyroot");
Block.createBlock("fenceSkyroot", [
    {name: "Skyroot Fence", texture: [["skyroot_planks", 0]], inCreative: true}
], BLOCK_TYPE_FENCE_WOOD);

ToolAPI.registerBlockMaterial(BlockID.skyrootLog, "wood");

IDRegistry.genBlockID("greenskyrootLeaves");
Block.createBlock("greenskyrootLeaves", [
    {name: "green Skyroot Leaves", texture: [["green_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("greenskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.greenskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.greenskyrootLeaves, "plant");



IDRegistry.genBlockID("greenskyrootSapling");
Block.createBlock("greenskyrootSapling", [{name: "green Skyroot Tree Sapling", texture: [["green_skyroot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("greenskyrootSapling", function(){
    return [[ItemID.greenskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("greenskyrootSapling");
Item.createItem("greenskyrootSapling", "green Skyroot Tree Sapling", {name: "green_skyroot_sapling", data: 0});

setPlantModel(BlockID.greenskyrootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.greenskyrootSapling, "plant");


Callback.addCallback("ItemUse",function(crd,item, b, is, player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.greenskyrootSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.greenskyrootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});
 
Block.setRandomTickCallback(BlockID.greenskyrootSapling, function(x, y, z, id, data){  
var coords = coords.relative; 
 var rnd = new java.util.Random(); 
  if(World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
      if(rnd.nextFloat() < 0.7){
      greenN.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd); 
         }else{       
      greenNM.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd);    
         }
     }
});

Callback.addCallback("PostLoaded", function () {        
Recipes.addShaped({id: BlockID.plankSkyroot, count: 4, data: 0}, [
        "a"
    ], ['a',BlockID.skyrootLog, 0]);

Recipes.addShaped({id: BlockID.skyrootBark, count: 4, data: 0}, [
        "aa",
        "aa"
    ], ['a',BlockID.skyrootLog, 0]);
/*
Recipes.addShaped({id: BlockID.skyrootWorkbench, count: 1, data: 0}, [

        "aa ",
        "aa ",
        "   "
    ], ['a',BlockID.plankSkyroot, 0]);*/
    
Recipes.addShaped({id: BlockID.skyrootChest, count: 4, data: 0}, [

        "aaa",
        "a a",
        "aaa"
    ], ['a',BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: ItemID.stickSkyroot, count: 4, data: 0}, [
        "a",
        "a"
    ], ['a',BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.skyrootAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
});




// file: trees/blueskyroot.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});

IDRegistry.genBlockID("blueskyrootLeaves");
Block.createBlock("blueskyrootLeaves", [
    {name: "Blue Skyroot Leaves", texture: [["blue_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("blueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.blueskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.blueskyrootLeaves, "plant");



IDRegistry.genBlockID("blueskyrootSapling");
Block.createBlock("blueskyrootSapling", [{name: "blue Skyroot Tree Sapling", texture: [["blue_skyroot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("blueskyrootSapling", function(){
    return [[ItemID.blueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("blueskyrootSapling");
Item.createItem("blueskyrootSapling", "blue Skyroot Tree Sapling", {name: "blue_skyroot_sapling", data: 0});

setPlantModel(BlockID.blueskyrootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.blueskyrootSapling, "plant");

Callback.addCallback("ItemUse",function(crd,item, b, is,  player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.blueskyrootSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.blueskyrootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.blueskyrootSapling, function(x, y, z, id, data) { 
var coords = coords.relative;
 var rnd = new java.util.Random();     
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
      if(rnd.nextFloat() < 0.7){
      //Structure.setInWorld("SkyrootB", coords.x, coords.y, coords.z); 
         }else{       
      //Structure.setInWorld("SkyrootBB", coords.x, coords.y, coords.z);    
         }
     }
});




// file: trees/darkblueskyroot.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


IDRegistry.genBlockID("darkblueskyrootLeaves");
Block.createBlock("darkblueskyrootLeaves", [
    {name: "darkblue Skyroot Leaves", texture: [["dark_blue_skyrootleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("darkblueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.darkblueskyrootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootLeaves, "plant");



IDRegistry.genBlockID("darkblueskyrootSapling");
Block.createBlock("darkblueskyrootSapling", [{name: "Darkblue Skyroot Tree Sapling", texture: [["dark_blue_skyroot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("darkblueskyrootSapling", function(){
    return [[ItemID.darkblueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("darkblueskyrootSapling");
Item.createItem("darkblueskyrootSapling", "Darkblue Skyroot Tree Sapling", {name: "dark_blue_skyroot_sapling", data: 0});

setPlantModel(BlockID.darkblueskyrootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootSapling, "plant");
    
Callback.addCallback("ItemUse",function(crd,item, b, is, player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.darkblueskyrootSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.darkblueskyrootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.darkblueskyrootSapling, function(x, y, z, id, data) { 
var coords = coords.relative;
 var rnd = new java.util.Random();     
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
      if(rnd.nextFloat() < 0.7){
      //Structure.setInWorld("SkyrootB", coords.x, coords.y, coords.z); 
         }else{       
      //Structure.setInWorld("SkyrootBB", coords.x, coords.y, coords.z);    
         }
     }
});




// file: trees/golden.js

IDRegistry.genBlockID("goldenLeaves");
Block.createBlock("goldenLeaves", [
    {name: "golden Skyroot Leaves", texture: [["golOakleaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("goldenLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.goldenSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.goldenLeaves, "plant");

IDRegistry.genBlockID("goldenSapling");
Block.createBlock("goldenSapling", [{name: "gold Skyroot Tree Sapling", texture: [["amberoot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("goldenSapling", function(){
    return [[ItemID.goldenSapling, 1, 0]];
});

IDRegistry.genItemID("goldenSapling");
Item.createItem("goldenSapling", "gold Skyroot Tree Sapling", {name: "amberoot_sapling", data: 0});

setPlantModel(BlockID.goldenSapling, false);
ToolAPI.registerBlockMaterial(BlockID.goldenSapling, "plant");

Callback.addCallback("ItemUse",function(crd,item, b, is,  player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.goldenSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.goldenSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.goldenSapling, function(x, y, z, id, data) {
var coords = coords.relative;
 var rnd = new java.util.Random(); 
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
     golden.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd);    
     }
});




// file: trees/wisproot.js

IDRegistry.genBlockID("wisprootLeaves");
Block.createBlock("wisprootLeaves", [
    {name: "wisproot Skyroot Leaves", texture: [["wisproot_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("wisprootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.wisprootSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.wisprootLeaves, "plant");

IDRegistry.genBlockID("wisprootSapling");
Block.createBlock("wisprootSapling", [{name: "Wisproot Tree Sapling", texture: [["green_wisproot_sapling", 0]], inCreative: false}], BLOCK_TYPE_PLANT);

Block.registerDropFunction("wisprootSapling", function(){
    return [[ItemID.wisprootSapling, 1, 0]];
});

IDRegistry.genItemID("wisprootSapling");
Item.createItem("wisprootSapling", "Wisproot Tree Sapling", {name: "green_wisproot_sapling", data: 0});

setPlantModel(BlockID.wisprootSapling, false);
ToolAPI.registerBlockMaterial(BlockID.wisprootSapling, "plant");

Callback.addCallback("ItemUse",function(crd,item, b, is,  player){
 pl=crd.relative;
  var region = BlockSource.getDefaultForActor(player);
    if (item.id==ItemID.goldenSapling && region.getBlockId(pl.x,pl.y-1,pl.z) == BlockID.grassblockAether) {
        region.setBlock(pl.x,pl.y,pl.z,BlockID.wisprootSapling,0);  
        Entity.setCarriedItem(player, item.id, item.count - 1, item.data);
    }
});

Block.setRandomTickCallback(BlockID.wisprootSapling, function(x, y, z, id, data) {
var coords = coords.relative;
 var rnd = new java.util.Random(); 
  if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether) {
     golden.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, rnd);    
     }
});




// file: trees/generation.js

//BETTER FOILAGE SETUP
ModAPI.addAPICallback("BetterFoliageLeaves", function(BetterFoliage) {
    BetterFoliage.setupLeavesModel(BlockID.greenskyrootLeaves, -1, ["green_skyrootleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.goldenLeaves, -1, ["golOakleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.blueskyrootLeaves, -1, ["blue_skyrootleaves", 0]);
    BetterFoliage.setupLeavesModel(BlockID.darkblueskyrootLeaves, -1, ["dark_blue_skyrootleaves", 0]);
});


var TreesPool = new StructurePool("Aether_Trees");  

 //greenN = new Structure("Ntree1");
 TreesPool.load(DIR+"Ntree1.struct", "greenN", "Structures");
 //greenNM = new Structure("Ntree2");
 TreesPool.load(DIR+"Ntree2.struct", "greenNM", "Structures");
 //greenL = new Structure("Ntree4");
 TreesPool.load(DIR+"Ntree4.struct", "greenL", "Structures");
 //greenNest = new Structure("NestTree");
 TreesPool.load(DIR+"NestTree.struct", "greenNest", "Structures");
 //goldenS = new Structure("GoldenS");
 TreesPool.load(DIR+"GoldenS.struct", "goldenS", "Structures");
 
 
 //greenBG = new Structure("Ntree3");
  TreesPool.load(DIR+"Ntree3.struct", "greenBG", "Structures");
 //greenBGM = new Structure("Ntree5");
  TreesPool.load(DIR+"Ntree5.struct", "greenBGM", "Structures");
 //greenBGML = new Structure("Ntree7");
  TreesPool.load(DIR+"Ntree7.struct", "greenBGML", "Structures");
 //greenM = new Structure("Ntree6");
  TreesPool.load(DIR+"Ntree6.struct", "greenM", "Structures");
 //wisprootN = new Structure("WisprootN");
  TreesPool.load(DIR+"WisprootN.struct", "wisprootN", "Structures");
 
 
 //BUILDINGS
var BuildingsPool = new StructurePool("Aether_Buildings"); 

 //nest = new Structure("NestWild");
 BuildingsPool.load(DIR+"NestWild.struct", "nest", "Structures");
 //tower = new Structure("Tower");
 BuildingsPool.load(DIR+"Tower.struct", "tower", "Structures");
 //Shaft = new Structure("Shaft");
 BuildingsPool.load(DIR+"Shaft.struct", "Shaft", "Structures");
 //ShaftBase = new Structure("ShaftB");
 BuildingsPool.load(DIR+"ShaftB.struct", "ShaftBase", "Structures");
 
/*
Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
if(dimeID != Aether.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
        coords = GenerationUtils.findSurface(coords.x, 248, coords.z);
        if(coords.y < 37) return;
        if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenN.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .52 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenNM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .50 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenBGM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .33 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenBGML.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .33 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenM.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .003 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) goldenS.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .008 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) tower.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .09 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) wisprootN.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .03 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) greenNest.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .009 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) nest.build(coords.x, coords.y + 1, coords.z, Structure.ROTATE_Y, random, region);
        if(random.nextFloat() < .001 && World.getBlockID(coords.x, coords.y - 9, coords.z) == BlockID.Holystone) {
         Shaft.build(coords.x, coords.y, coords.z, Structure.ROTATE_Y, random, region);
         ShaftBase.build(coords.x, coords.y - 1, coords.z, Structure.ROTATE_Y, random, region);
        }
});*/

Callback.addCallback("GenerateCustomDimensionChunk", function(chunkX, chunkZ, random, dimeID){
if(dimeID != Aether.id) return; 
var region = BlockSource.getCurrentWorldGenRegion();
        var coords = GenerationUtils.randomCoords(chunkX, chunkZ);
        coords = GenerationUtils.findSurface(coords.x, 128, coords.z);
        if(coords.y < 37) return;  
        if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenN", coords.x, coords.y + 1, coords.z, region);  
        if(random.nextFloat() < .52 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenN", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .48 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenL", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .43 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenBG", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .50 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenBGM", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .31 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenBGML", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .34 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "greenM", coords.x, coords.y + 1, coords.z, region);
        if(random.nextFloat() < .004 && World.getBlockID(coords.x, coords.y, coords.z) == BlockID.grassblockAether) AetherGenerator.generateTree(TreesPool, "goldenS", coords.x, coords.y + 1, coords.z, region);    
        /*if(random.nextFloat() < .008 && World.getBlockID(coords.x, coords.y - 9, coords.z) == BlockID.Holystone) {
         AetherGenerator.generateRotateble("Shaft", coords.x, coords.y + 1, coords.z, region);
         AetherGenerator.generateRotateble("ShaftBase", coords.x, coords.y - 10, coords.z, region);
        }*/
});
 
Callback.addCallback("StructureLoadOne", function(){
 AetherGenerator.generateBuilds("BuildingsPool", "tower", {offset: {x:0, y:1, z:0}, chance: 3, distance: 85, check:BlockID.grassblockAether});
 AetherGenerator.generateBuilds("TreesPool", "wisprootN", {offset: {x:0, y:1, z:0}, chance: 7, distance: 25, check:BlockID.grassblockAether});
 AetherGenerator.generateBuilds("TreesPool", "greenNest", {offset: {x:0, y:1, z:0}, chance: 5, distance: 5, check:BlockID.grassblockAether});
 AetherGenerator.generateBuilds("BuildingsPool", "nest", {offset: {x:0, y:1, z:0}, chance: 9, distance: 48, check:BlockID.grassblockAether});  
});




// file: items/tools/skyroot.js

IMPORT("ToolLib");

IDRegistry.genItemID("skyrootSword");
Item.createItem("skyrootSword", "Skyroot Sword", {name: "skyroot_sword", meta: 1}, {stack: 1});
 
IDRegistry.genItemID("skyrootShovel");
Item.createItem("skyrootShovel", "Skyroot Shovel", {name: "skyroot_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootPickaxe");
Item.createItem("skyrootPickaxe", "Skyroot Pickaxe", {name: "skyroot_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootAxe");
Item.createItem("skyrootAxe", "Skyroot Axe", {name: "skyroot_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootCrosb");
Item.createItem("skyrootCrosb", "Skyroot Crosbow", {name: "skyroot_crossbow"}, {stack: 1});

IDRegistry.genItemID("skyrootB");
Item.createItem("skyrootB", "Skyroot Bolt", {name: "skyroot_bolt"});

ToolAPI.addToolMaterial("skyrootsw", {durability: 124, level: 2, efficiency: 0, damage: 3, enchantability: 4});
ToolAPI.addToolMaterial("skyrootsh", {durability: 113, level: 2, efficiency: 1, damage: 1, enchantability: 4});
ToolAPI.addToolMaterial("skyrootpi", {durability: 136, level: 2, efficiency: 1, damage: 2, enchantability: 4});
ToolAPI.addToolMaterial("skyrootaxe", {durability: 131, level: 2, efficiency: 1, damage: 3, enchantability: 4});
ToolAPI.addToolMaterial("skyrootcb", {durability: 128, level: 2, efficiency: 0, damage: 2, enchantability: 4});

ToolLib.setTool(ItemID.skyrootSword, "skyrootsw", ToolType.sword);

ToolLib.setTool(ItemID.skyrootShovel, "skyrootsh", ToolType.shovel);

ToolLib.setTool(ItemID.skyrootPickaxe, "skyrootpi", ToolType.pickaxe);

ToolLib.setTool(ItemID.skyrootAxe, "skyrootaxe", ToolType.axe);

ToolLib.setTool(ItemID.skyrootCrosb, "skyrootcb", ToolType.sword);


GunRegistry.registerGun({
    gun:ItemID.skyrootCrosb,
    bullet:ItemID.skyrootB,
    skin:"entities/projectiles/skyroot_bolt.png",
    speed:6,
    damage:6,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.skyrootSword, [BlockID.plankSkyroot, ItemID.skyrootSword]);
Item.addRepairItemIds(ItemID.skyrootShovel, [BlockID.plankSkyroot, ItemID.skyrootShovel]);
Item.addRepairItemIds(ItemID.skyrootPickaxe, [BlockID.plankSkyroot, ItemID.skyrootPickaxe]);
Item.addRepairItemIds(ItemID.skyrootAxe, [BlockID.plankSkyroot, ItemID.skyrootAxe]);
Item.addRepairItemIds(ItemID.skyrootCrosb, [BlockID.plankSkyroot, ItemID.skyrootCrosb]);

Recipes.addShaped({id: ItemID.skyrootSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.skyrootCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', BlockID.plankSkyroot, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);
Recipes.addShaped({id: ItemID.skyrootB, count: 4, data: 0}, [
    "c",
    "a",
    "b"
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.plankSkyroot, 0]);
});




// file: items/tools/zanite.js

IDRegistry.genItemID("zaniteSword");
Item.createItem("zaniteSword", "Zanite Sword", {name: "zanite_sword", meta: 1}, {stack: 1});

IDRegistry.genItemID("zaniteShovel");
Item.createItem("zaniteShovel", "Zanite Shovel", {name: "zanite_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("zanitePickaxe");
Item.createItem("zanitePickaxe", "Zanite Pickaxe", {name: "zanite_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("zaniteAxe");
Item.createItem("zaniteAxe", "Zanite Axe", {name: "zanite_axe", meta: 1}, {stack: 1});

ToolAPI.addToolMaterial("zanitecb", {durability: 492, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("zaniteCrosb");
Item.createItem("zaniteCrosb", "Zanite Crosbow", {name: "zanite_crossbow"}, {stack: 1});

IDRegistry.genItemID("zaniteB");
Item.createItem("zaniteB", "Zanite Bolt", {name: "zanite_bolt"});

ToolAPI.setTool(ItemID.zaniteCrosb, "zanitecb", ToolType.sword);
Item.setToolRender(ItemID.zaniteCrosb, true);

GunRegistry.registerGun({
    gun:ItemID.zaniteCrosb,
    bullet:ItemID.zaniteB,
    skin:"entities/projectiles/zanite_bolt.png",
    speed:6,
    damage:7,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

ToolAPI.addToolMaterial("zanitesw", {durability: 513, level: 3, efficiency: 0, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("zanitesh", {durability: 532, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("zanitepi", {durability: 502, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("zaniteaxe", {durability: 480, level: 3, efficiency: 6, damage: 4, enchantability: 14});


ToolLib.setTool(ItemID.zaniteSword, "zanitesw", ToolType.sword);

ToolLib.setTool(ItemID.zaniteShovel, "zanitesh", ToolType.shovel);

ToolLib.setTool(ItemID.zanitePickaxe, "zanitepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.zaniteAxe, "zaniteaxe", ToolType.axe);

Item.addRepairItemIds(ItemID.zaniteSword, [ItemID.zaniteGemstone, ItemID.zaniteSword]);
Item.addRepairItemIds(ItemID.skyrootShovel, [ItemID.zaniteGemstone, ItemID.zaniteShovel]);
Item.addRepairItemIds(ItemID.zanitePickaxe, [ItemID.zaniteGemstone, ItemID.zanitePickaxe]);
Item.addRepairItemIds(ItemID.zaniteAxe, [ItemID.zaniteGemstone, ItemID.zaniteAxe]);
Item.addRepairItemIds(ItemID.zaniteCrosb, [ItemID.zaniteGemstone, ItemID.zaniteCrosb]);

Recipes.addShaped({id: ItemID.zaniteSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.zaniteShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.zanitePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.zaniteAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.zaniteGemstone, 0, 'b', ItemID.stickSkyroot, 0]);




// file: items/tools/gravitite.js

IDRegistry.genItemID("gravititeSword");
Item.createItem("gravititeSword", "Gravitite Sword", {name: "gravitite_sword", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititeShovel");
Item.createItem("gravititeShovel", "Gravitite Shovel", {name: "gravitite_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititePickaxe");
Item.createItem("gravititePickaxe", "Gravitite Pickaxe", {name: "gravitite_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititeAxe");
Item.createItem("gravititeAxe", "Gravitite Axe", {name: "gravitite_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("gravititeCrosb");
Item.createItem("gravititeCrosb", "Gravitite Crosbow", {name: "gravitite_crossbow"}, {stack: 1});

IDRegistry.genItemID("gravititeB");
Item.createItem("gravititeB", "Gravitite Bolt", {name: "gravitite_bolt"});

//งงอะ\tool matireals
ToolAPI.addToolMaterial("gravititesw", {durability: 1429, level: 5, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("gravititesh", {durability: 1662, level: 4, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("gravititepi", {durability: 1598, level: 4, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("gravititeaxe", {durability: 1562, level: 4, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("gravititecb", {durability: 1570, level: 4, efficiency: 1, damage: 2, enchantability: 14});

ToolLib.setTool(ItemID.gravititeSword, "gravititesw", ToolType.sword);

Callback.addCallback("PlayerAttack", function (attacker, victim) { 
if(Entity.getCarriedItem(attacker).id==ItemID.gravititeSword){
if(Entity.getType(victim)== 32 || Entity.getType(victim)== 33 || Entity.getType(victim)== 44 || Entity.getType(victim)== 41 || Entity.getType(victim)== 34 || Entity.getType(victim)== 35 || Entity.getType(victim)== 38 || Entity.getType(victim)==36){    
var pos = Entity.getPosition(victim);
Entity.addVelocity(victim,pos.x, pos.y+18, pos.z);
   }
 }
});

ToolLib.setTool(ItemID.gravititeShovel, "gravititesh", ToolType.shovel);

ToolLib.setTool(ItemID.gravititePickaxe, "gravititepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.gravititeAxe, "gravititeaxe", ToolType.axe);

ToolLib.setTool(ItemID.gravititeCrosb, "gravititecb", ToolType.sword);

Item.addRepairItemIds(ItemID.gravititeSword, [ItemID.plateGravitite, ItemID.gravititeSword]);
Item.addRepairItemIds(ItemID.gravititeShovel, [ItemID.plateGravitite, ItemID.gravititeShovel]);
Item.addRepairItemIds(ItemID.gravititePickaxe, [ItemID.plateGravitite, ItemID.gravititePickaxe]);
Item.addRepairItemIds(ItemID.gravititeAxe, [ItemID.plateGravitite, ItemID.gravititeAxe]);
Item.addRepairItemIds(ItemID.gravititeCrosb, [ItemID.plateGravitite, ItemID.gravititeCrosb]);

GunRegistry.registerGun({
    gun:ItemID.gravititeCrosb,
    bullet:ItemID.gravititeB,
    skin:"entities/projectiles/gravitite_bolt.png",
    speed:7,
    damage:9,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Recipes.addShaped({id: ItemID.gravititeSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititeShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititeAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.gravititeCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', ItemID.plateGravitite, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);

Recipes.addShaped({id: ItemID.gravititeB, count: 4, data: 0}, [
    "c",
    "a",
    "b"
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', ItemID.plateGravitite, 0]);




// file: items/tools/arkenium.js

IDRegistry.genItemID("arkeniumSword");
Item.createItem("arkeniumSword", "Arkenium Sword", {name: "arkenium_sword"}, {stack: 1});

IDRegistry.genItemID("arkeniumSabber");
Item.createItem("arkeniumSabber", "Arkenium Saber", {name: "arkenium_saber"}, {stack: 1});

IDRegistry.genItemID("arkeniumShovel");
Item.createItem("arkeniumShovel", "Arkenium Shovel", {name: "arkenium_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumPickaxe");
Item.createItem("arkeniumPickaxe", "Arkenium Pickaxe", {name: "arkenium_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumAxe");
Item.createItem("arkeniumAxe", "Arkenium Axe", {name: "arkenium_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumCrosb");
Item.createItem("arkeniumCrosb", "Arkenium Crosbow", {name: "arkenium_crossbow"}, {stack: 1});

IDRegistry.genItemID("arkeniumBolt");
Item.createItem("arkeniumBolt", "Arkenium Bolt", {name: "arkenium_bolt"});

//งงอะ
ToolAPI.addToolMaterial("arkeniumsw", {durability: 778, level: 4, efficiency: 0, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsab", {durability: 752, level: 4, efficiency: 0, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsh", {durability: 735, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumpi", {durability: 786, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumaxe", {durability: 780, level: 3, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumcb", {durability: 720, level: 4, efficiency: 0, damage: 4, enchantability: 14});

ToolLib.setTool(ItemID.arkeniumSword, "arkeniumsw", ToolType.sword);

ToolLib.setTool(ItemID.arkeniumSabber, "arkeniumsab", ToolType.sword);

ToolLib.setTool(ItemID.arkeniumShovel, "arkeniumsh", ToolType.shovel);

ToolLib.setTool(ItemID.arkeniumPickaxe, "arkeniumpi", ToolType.pickaxe);

ToolLib.setTool(ItemID.arkeniumAxe, "arkeniumaxe", ToolType.axe);

ToolLib.setTool(ItemID.arkeniumCrosb, "arkeniumcb", ToolType.sword);

Item.addRepairItemIds(ItemID.arkeniumSword, [ItemID.plateArkenium, ItemID.arkeniumSword]);
Item.addRepairItemIds(ItemID.arkeniumSabber, [ItemID.plateArkenium, ItemID.arkeniumSabber]);
Item.addRepairItemIds(ItemID.arkeniumShovel, [ItemID.plateArkenium, ItemID.arkeniumShovel]);
Item.addRepairItemIds(ItemID.arkeniumPickaxe, [ItemID.plateArkenium, ItemID.arkeniumPickaxe]);
Item.addRepairItemIds(ItemID.arkeniumAxe, [ItemID.plateArkenium, ItemID.arkeniumAxe]);
Item.addRepairItemIds(ItemID.arkeniumCrosb, [ItemID.plateArkenium, ItemID.arkeniumCrosb]);

GunRegistry.registerGun({
    gun:ItemID.arkeniumCrosb,
    bullet:ItemID.arkeniumBolt,
    skin:"entities/projectiles/arkenium_bolt.png",
    speed:7,
    damage:6,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Recipes.addShaped({id: ItemID.arkeniumSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumPickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0]);

Recipes.addShaped({id: ItemID.arkeniumCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', ItemID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);




// file: items/tools/holystone.js

IDRegistry.genItemID("holystoneSword");
Item.createItem("holystoneSword", "Holystone Sword", {name: "holystone_sword", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystoneShovel");
Item.createItem("holystoneShovel", "Holystone Shovel", {name: "holystone_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystonePickaxe");
Item.createItem("holystonePickaxe", "Holystone Pickaxe", {name: "holystone_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystoneAxe");
Item.createItem("holystoneAxe", "Holystone Axe", {name: "holystone_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("holystoneCrosb");
Item.createItem("holystoneCrosb", "Holystone Crosbow", {name: "holystone_crossbow"}, {stack: 1});

IDRegistry.genItemID("holystoneB");
Item.createItem("holystoneB", "Holystone Bolt", {name: "holystone_bolt"});

//งงอะ
ToolAPI.addToolMaterial("holystonesw", {durability: 332, level: 4, efficiency: 0, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("holystonesh", {durability: 312, level: 3, efficiency: 5, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("holystonepi", {durability: 354, level: 3, efficiency: 5, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("holystoneaxe", {durability: 339, level: 3, efficiency: 5, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("holystonecb", {durability: 282, level: 2, efficiency: 0, damage: 2, enchantability: 14});


ToolLib.setTool(ItemID.holystoneSword, "holystonesw", ToolType.sword);

ToolLib.setTool(ItemID.holystoneShovel, "holystonesh", ToolType.shovel);

ToolLib.setTool(ItemID.holystonePickaxe, "holystonepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.holystoneAxe, "holystoneaxe", ToolType.axe);

ToolLib.setTool(ItemID.holystoneCrosb, "holystonecb", ToolType.sword);


GunRegistry.registerGun({
    gun:ItemID.holystoneCrosb,
    bullet:ItemID.holystoneB,
    skin:"entities/projectiles/stone_bolt.png",
    speed:6,
    damage:7,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Callback.addCallback("PostLoaded", function (){

Item.addRepairItemIds(ItemID.holystoneSword, [BlockID.Holystone, ItemID.holystoneSword]);
Item.addRepairItemIds(ItemID.holystoneShovel, [BlockID.Holystone, ItemID.holystoneShovel]);
Item.addRepairItemIds(ItemID.holystonePickaxe, [BlockID.Holystone, ItemID.holystonePickaxe]);
Item.addRepairItemIds(ItemID.holystoneAxe, [BlockID.Holystone, ItemID.holystoneAxe]);
Item.addRepairItemIds(ItemID.holystoneCrosb, [BlockID.Holystone, ItemID.holystoneCrosb]);

Recipes.addShaped({id: ItemID.holystoneSword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystoneShovel, count: 1, data: 0}, [
    "a",
    "b",
    "b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystonePickaxe, count: 1, data: 0}, [
    "aaa",
    " b ",
    " b "
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystoneAxe, count: 1, data: 0}, [
    "aa",
    "ab",
    " b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0]);
Recipes.addShaped({id: ItemID.holystoneCrosb, count: 1, data: 0}, [
    "aaa",
    "cac",
    " b"
], ['a', BlockID.Holystone, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);
Recipes.addShaped({id: ItemID.holystoneB, count: 4, data: 0}, [
    "c",
    "a",
    "b"
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.Holystone, 0]);

Recipes.addShaped({id: 61, count: 1, data: 0}, [
    "ccc",
    "coc",
    "ccc"
], ['c', BlockID.Holystone, 0]);
});




// file: items/tools/vampire.js

IDRegistry.genItemID("vampireSword");
Item.createItem("vampireSword", "Vampire Sword", {name: "vampire_blade"}, {stack: 1});
ToolAPI.addToolMaterial("vampiresw", {durability: 1211, level: 4, efficiency: 4, damage: 4, enchantability: 12});
ToolAPI.addToolMaterial("vampirecb", {durability: 1048, level: 2, efficiency: 1, damage: 2, enchantability: 12});

IDRegistry.genItemID("vampireCrosb");
Item.createItem("vampireCrosb", "Vampire Crosbow", {name: "vampire_crossbow"}, {stack: 1});

IDRegistry.genItemID("vampireB");
Item.createItem("vampireB", "Vampire Bolt", {name: "scatterglass_bolt"});

ToolLib.setTool(ItemID.vampireCrosb, "vampirecb", ToolType.sword);

GunRegistry.registerGun({
    gun:ItemID.vampireCrosb,
    bullet:ItemID.vampireB,
    skin:"entities/projectiles/scatterglass_bolt.png",
    effect: 19,
    efftime: 150,
    playereff: 10,
    plefftime:150,
    speed:8,
    damage:10,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

Callback.addCallback("PlayerAttack", function (attacker, victim) { 
if(Entity.getCarriedItem(attacker).id==ItemID.vampireSword){
Entity.addEffect(victim, 19, 1, 500, false,false);
Entity.addEffect(attacker, 10, 1, 500, false,false);    
}
});

ToolLib.setTool(ItemID.vampireSword, "vampiresw", ToolType.sword);

Item.addRepairItemIds(ItemID.vampireSword, [ItemID.vampireSword]);
Item.addRepairItemIds(ItemID.vampireCrosb, [ItemID.vampireCrosb]);

IDRegistry.genItemID("holySword");
Item.createItem("holySword", "Holy Sword", {name: "holy_sword"}, {stack: 1});
ToolAPI.addToolMaterial("holysw", {durability: 503, level: 4, efficiency: 4, damage: 4, enchantability: 14});

Callback.addCallback("PlayerAttack", function (attacker, victim) { 
if(Entity.getCarriedItem(attacker).id==ItemID.holySword){
if(Entity.getType(victim)== 32 || Entity.getType(victim)== 44 || Entity.getType(victim)== 34 || Entity.getType(victim)==36) {    
Entity.addEffect(victim, 6, 4, 500, false,false);
   }
 }
});

ToolLib.setTool(ItemID.holySword, "holysw", ToolType.sword);

Item.addRepairItemIds(ItemID.holySword, [ItemID.holySword]);

IDRegistry.genItemID("flamingSword");
Item.createItem("flamingSword", "Flaming Sword", {name: "flaming_sword"}, {stack: 1});

Callback.addCallback("PlayerAttack", function (attacker, victim) { 
if(Entity.getCarriedItem(attacker).id==ItemID.flamingSword){
Entity.setFire(victim, 800);
}
});

ToolLib.setTool(ItemID.flamingSword, "holysw", ToolType.sword);


IDRegistry.genItemID("lightingSword");
Item.createItem("lightingSword", "Lighting Sword", {name: "lightning_sword"}, {stack: 1});

Callback.addCallback("PlayerAttack", function (attacker, victim) { 
if(Entity.getCarriedItem(attacker).id==ItemID.lightingSword){
var pos = Entity.getPosition(victim);      
Entity.spawn(pos.x, pos.y, pos.z, 93);
}
});

ToolLib.setTool(ItemID.lightingSword, "holysw", ToolType.sword);

Item.addRepairItemIds(ItemID.lightingSword, [ItemID.lightingSword]);

IDRegistry.genItemID("lightingKnife");
Item.createThrowableItem("lightingKnife", "Lighting k ife", {name: "lightning_knife", meta: 0}, {stack: 1});

IDRegistry.genItemID("pigsSword");
Item.createItem("pigsSword", "Pig Slayer", {name: "pig_slayer"}, {stack: 1});
ToolAPI.addToolMaterial("pigssw", {durability: 480, level: 4, efficiency: 4, damage: 6, enchantability: 14});

Callback.addCallback("PlayerAttack", function (attacker, victim) { 
if(Entity.getCarriedItem(attacker).id==ItemID.pigsSword){
if(Entity.getType(victim)== 14 || Entity.getType(victim)== 17 || Entity.getType(victim)== 13 || Entity.getType(victim)==18 || Entity.getType(victim)==28 || Entity.getType(victim)==22 || Entity.getType(victim)==11 || Entity.getType(victim)==16 || Entity.getType(victim)==10) {    
Entity.addEffect(victim, 7, 5, 560, false,false);
   }
 }
});

ToolLib.setTool(ItemID.pigsSword, "pigssw", ToolType.sword);
Item.addRepairItemIds(ItemID.pigsSword, [ItemID.pigsSword]);




// file: items/tools/candy.js

IDRegistry.genItemID("candySword");
Item.createItem("candySword", "Candy Sword", {name: "candy_cane_sword"}, {stack: 1});
ToolAPI.addToolMaterial("candysw", {durability: 69, level: 2, efficiency: 0, damage: 5, enchantability: 6});

ToolLib.setTool(ItemID.candySword, "candysw", ToolType.sword);

Recipes.addShaped({id: ItemID.candySword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.candyCane, 0, 'b', ItemID.candyCorn, 0]);

Item.addRepairItemIds(ItemID.candySword, [ItemID.candyCorn, ItemID.candySword]);




// file: items/tools/valkiria.js

IDRegistry.genItemID("valkiriaSword");
Item.createItem("valkiriaSword", "Valkyrie Lance", {name: "valkyrie_lance"}, {stack: 1});

IDRegistry.genItemID("valkiriaShovel");
Item.createItem("valkiriaShovel", "Valkyrie Shovel", {name: "valkyrie_shovel"}, {stack: 1});

IDRegistry.genItemID("valkiriaPickaxe");
Item.createItem("valkiriaPickaxe", "Valkyrie Pickaxe", {name: "valkyrie_pickaxe"}, {stack: 1});

IDRegistry.genItemID("valkiriaAxe");
Item.createItem("valkiriaAxe", "Valkyrie Axe", {name: "valkyrie_axe"}, {stack: 1});

//LOL
ToolAPI.addToolMaterial("valkyriesw", {durability: 1111, level: 4, efficiency: 1, damage: 6, enchantability: 9});
ToolAPI.addToolMaterial("valkyriesh", {durability: 1662, level: 3, efficiency: 6, damage: 1, enchantability: 9});
ToolAPI.addToolMaterial("valkyriepi", {durability: 1668, level: 3, efficiency: 6, damage: 2, enchantability: 9});
ToolAPI.addToolMaterial("valkyrieaxe", {durability: 1662, level: 3, efficiency: 6, damage: 6, enchantability: 9});


ToolLib.setTool(ItemID.valkiriaSword, "valkyriesw", ToolType.sword);

ToolLib.setTool(ItemID.valkiriaShovel, "valkyriesh", ToolType.shovel);

ToolLib.setTool(ItemID.valkiriaPickaxe, "valkyriepi", ToolType.pickaxe);

ToolLib.setTool(ItemID.valkiriaAxe, "valkyrieaxe", ToolType.axe);

Item.addRepairItemIds(ItemID.valkiriaSword, [ItemID.valkiriaSword]);
Item.addRepairItemIds(ItemID.valkiriaShovel, [ItemID.valkiriaShovel]);
Item.addRepairItemIds(ItemID.valkiriaPickaxe, [ItemID.valkiriaPickaxe]);
Item.addRepairItemIds(ItemID.valkiriaAxe, [ItemID.valkiriaAxe]);




// file: Items/tools/irradiated.js

IDRegistry.genItemID("irradiatedSword");
Item.createItem("irradiatedSword", "Irradiated Sword", {name: "irradiated_sword"}, {stack: 1});
Item.setGlint(ItemID.irradiatedSword, true);

IDRegistry.genItemID("irradiatedPickaxe");
Item.createItem("irradiatedPickaxe", "Irradiated Pickaxe", {name: "irradiated_tool"}, {stack: 1});
Item.setGlint(ItemID.irradiatedPickaxe, true);

ToolAPI.addToolMaterial("irradiatedsw", {durability: 1000, level: 0, efficiency: 4, damage: 8, enchantability: 16});
ToolAPI.addToolMaterial("irradiatedpi", {durability: 1000, level: 6, efficiency: 8, damage: 3, enchantability: 16});

ToolLib.setTool(ItemID.irradiatedSword, "irradiatedsw", ToolType.sword);

ToolLib.setTool(ItemID.irradiatedPickaxe, "irradiatedpi", ToolType.pickaxe);

Item.addRepairItemIds(ItemID.irradiatedSword, [ItemID.irradiatedChunk, ItemID.irradiatedSword]);
Item.addRepairItemIds(ItemID.irradiatedPickaxe, [ItemID.irradiatedChunk, ItemID.irradiatedPickaxe]);

Recipes.addShaped({id: ItemID.irradiatedSword, count: 1, data: 0}, [
    "a",
    "a",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);

Recipes.addShaped({id: ItemID.irradiatedPickaxe, count: 1, data: 0}, [
   "aaa",
    "a",
    "a"
], ['a', ItemID.irradiatedChunk, 0]);




// file: items/tools/group.js

Item.addCreativeGroup("swordAether", Translation.translate("Aether Sword"), [
    ItemID.skyrootSword,
    ItemID.holystoneSword,
    ItemID.arkeniumSword,
    ItemID.arkeniumSabber,
    ItemID.zaniteSword,
    ItemID.gravititeSword,
    ItemID.valkiriaSword,
    ItemID.vampireSword,
    ItemID.candySword,
    ItemID.holySword,
    ItemID.pigsSword,
    ItemID.flamingSword,
    ItemID.lightingSword,
    ItemID.lightingKnife,
    ItemID.irradiatedSword
]);

Item.addCreativeGroup("pickaxeAether", Translation.translate("Aether Pickaxe"), [
    ItemID.skyrootPickaxe,
    ItemID.holystonePickaxe,
    ItemID.arkeniumPickaxe,
    ItemID.zanitePickaxe,
    ItemID.gravititePickaxe,
    ItemID.valkiriaPickaxe,
    ItemID.irradiatedPickaxe
]);

Item.addCreativeGroup("axeAether", Translation.translate("Aether Axe"), [
    ItemID.skyrootAxe,
    ItemID.holystoneAxe,
    ItemID.arkeniumAxe,
    ItemID.zaniteAxe,
    ItemID.gravititeAxe,
    ItemID.valkiriaAxe
]);

Item.addCreativeGroup("shovelAether", Translation.translate("Aether Shovel"), [
    ItemID.skyrootShovel,
    ItemID.holystoneShovel,
    ItemID.arkeniumShovel,
    ItemID.zaniteShovel,
    ItemID.gravititeShovel,
    ItemID.valkiriaShovel
]);

Item.addCreativeGroup("crossbowAether", Translation.translate("Aether Crossbow"), [
    ItemID.skyrootCrosb,
    ItemID.holystoneCrosb,
    ItemID.arkeniumCrosb,
    ItemID.zaniteCrosb,
    ItemID.gravititeCrosb,
    ItemID.vampireCrosb
]);

Item.addCreativeGroup("boltAether", Translation.translate("Aether Bolt"), [
    ItemID.skyrootB,
    ItemID.holystoneB,
    ItemID.arkeniumBolt,
    ItemID.zaniteB,
    ItemID.gravititeB,
    ItemID.vampireB
]);




// file: Items/armors/burrukai.js

IDRegistry.genItemID("burrukaiHelmet");
Item.createArmorItem("burrukaiHelmet", "Burrukai Helmet", {name: "burrukai_pelt_helmet"}, {type: "helmet", armor: 3, durability: 132, texture: "armor/burrukai_pelt_layer_1.png"});

IDRegistry.genItemID("burrukaiChestplate");
Item.createArmorItem("burrukaiChestplate", "Burrukai Chestplate", {name: "burrukai_pelt_chestplate"}, {type: "chestplate", armor: 5, durability: 178, texture: "armor/burrukai_pelt_layer_1.png"});

IDRegistry.genItemID("burrukaiLeggings");
Item.createArmorItem("burrukaiLeggings", "Burrukai Leggings", {name: "burrukai_pelt_leggings"}, {type: "leggings", armor: 3, durability: 162, texture: "armor/burrukai_pelt_layer_2.png"});

IDRegistry.genItemID("burrukaiBoots");
Item.createArmorItem("burrukaiBoots", "Burrukai Boots", {name: "burrukai_pelt_boots"}, {type: "boots", armor: 2, durability: 123, texture: "armor/burrukai_pelt_layer_1.png"});

Item.addRepairItemIds(ItemID.burrukaiHelmet, [ItemID.burrukaiSkin, ItemID.burrukaiHelmet]);
Item.addRepairItemIds(ItemID.burrukaiChestplate, [ItemID.burrukaiSkin, ItemID.burrukaiChestplate]);
Item.addRepairItemIds(ItemID.burrukaiLeggings, [ItemID.burrukaiSkin, ItemID.burrukaiLeggings]);
Item.addRepairItemIds(ItemID.burrukaiBoots, [ItemID.burrukaiSkin, ItemID.burrukaiBoots]);

Recipes.addShaped({id: ItemID.burrukaiHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.burrukaiSkin, 0]);

Recipes.addShaped({id: ItemID.burrukaiChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.burrukaiSkin, 0]);

Recipes.addShaped({id: ItemID.burrukaiLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.burrukaiSkin, 0]);

Recipes.addShaped({id: ItemID.burrukaiBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.burrukaiSkin, 0]);




// file: items/armors/zanite.js

IDRegistry.genItemID("taegoreHelmet");
Item.createArmorItem("taegoreHelmet", "Taegore Helmet", {name: "taegore_hide_helmet"}, {type: "helmet", armor: 3, durability: 132, texture: "armor/taegore_hide_layerb_1.png"});

IDRegistry.genItemID("taegoreChestplate");
Item.createArmorItem("taegoreChestplate", "Taegore Chestplate", {name: "taegore_hide_chestplate"}, {type: "chestplate", armor: 4, durability: 178, texture: "armor/taegore_hide_layerb_1.png"});

IDRegistry.genItemID("taegoreLeggings");
Item.createArmorItem("taegoreLeggings", "Taegore Leggings", {name: "taegore_hide_leggings"}, {type: "leggings", armor: 3, durability: 162, texture: "armor/taegore_hide_layer_2.png"});

IDRegistry.genItemID("taegoreBoots");
Item.createArmorItem("taegoreBoots", "Taegore Boots", {name: "taegore_hide_boots"}, {type: "boots", armor: 2, durability: 123, texture: "armor/taegore_hide_layerb_1.png"});

Item.addRepairItemIds(ItemID.taegoreHelmet, [ItemID.taegoreSkin, ItemID.taegoreHelmet]);
Item.addRepairItemIds(ItemID.taegoreChestplate, [ItemID.taegoreSkin, ItemID.taegoreChestplate]);
Item.addRepairItemIds(ItemID.taegoreLeggings, [ItemID.taegoreSkin, ItemID.taegoreLeggings]);
Item.addRepairItemIds(ItemID.taegoreBoots, [ItemID.taegoreSkin, ItemID.taegoreBoots]);

Recipes.addShaped({id: ItemID.taegoreHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.taegoreSkin, 0]);

Recipes.addShaped({id: ItemID.taegoreChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.taegoreSkin, 0]);

Recipes.addShaped({id: ItemID.taegoreLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.taegoreSkin, 0]);

Recipes.addShaped({id: ItemID.taegoreBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.taegoreSkin, 0]);


IDRegistry.genItemID("zaniteHelmet");
Item.createArmorItem("zaniteHelmet", "Zanite Helmet", {name: "zanite_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/zanite_layerb_1.png"});

IDRegistry.genItemID("zaniteChestplate");
Item.createArmorItem("zaniteChestplate", "Zanite Chestplate", {name: "zanite_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/zanite_layerb_1.png"});

IDRegistry.genItemID("zaniteLeggings");
Item.createArmorItem("zaniteLeggings", "Zanite Leggings", {name: "zanite_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/zanite_layer_2.png"});

IDRegistry.genItemID("zaniteBoots");
Item.createArmorItem("zaniteBoots", "Zanite Boots", {name: "zanite_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/zanite_layerb_1.png"});

Item.addRepairItemIds(ItemID.zaniteHelmet, [ItemID.zaniteGemstone, ItemID.zaniteHelmet]);
Item.addRepairItemIds(ItemID.zaniteChestplate, [ItemID.zaniteGemstone, ItemID.zaniteChestplate]);
Item.addRepairItemIds(ItemID.zaniteLeggings, [ItemID.zaniteGemstone, ItemID.zaniteLeggings]);
Item.addRepairItemIds(ItemID.zaniteBoots, [ItemID.zaniteGemstone, ItemID.zaniteBoots]);


Recipes.addShaped({id: ItemID.zaniteHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.zaniteGemstone, 0]);

Recipes.addShaped({id: ItemID.zaniteBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.zaniteGemstone, 0]);





// file: items/armors/arkenium.js

IDRegistry.genItemID("arkeniumHelmet");
Item.createArmorItem("arkeniumHelmet", "Arkenium Helmet", {name: "arkenium_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/arkenium_layerb_1.png"});

IDRegistry.genItemID("arkeniumChestplate");
Item.createArmorItem("arkeniumChestplate", "Arkenium Chestplate", {name: "arkenium_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/arkenium_layerb_1.png"});

IDRegistry.genItemID("arkeniumLeggings");
Item.createArmorItem("arkeniumLeggings", "Arkenium Leggings", {name: "arkenium_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/arkenium_layer_2.png"});

IDRegistry.genItemID("arkeniumBoots");
Item.createArmorItem("arkeniumBoots", "Arkenium Boots", {name: "arkenium_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/arkenium_layerb_1.png"});

Item.addRepairItemIds(ItemID.arkeniumHelmet, [ItemID.plateArkenium, ItemID.arkeniumHelmet]);
Item.addRepairItemIds(ItemID.arkeniumChestplate, [ItemID.plateArkenium, ItemID.arkeniumChestplate]);
Item.addRepairItemIds(ItemID.arkeniumLeggings, [ItemID.plateArkenium, ItemID.arkeniumLeggings]);
Item.addRepairItemIds(ItemID.arkeniumBoots, [ItemID.plateArkenium, ItemID.arkeniumBoots]);


Recipes.addShaped({id: ItemID.arkeniumHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.plateArkenium, 0]);

Recipes.addShaped({id: ItemID.arkeniumChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.plateArkenium, 0]);

Recipes.addShaped({id: ItemID.arkeniumLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.plateArkenium, 0]);

Recipes.addShaped({id: ItemID.arkeniumBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.plateArkenium, 0]);





// file: items/armors/gravitite.js

IDRegistry.genItemID("gravititeHelmet");
Item.createArmorItem("gravititeHelmet", "Gravitite Helmet", {name: "gravitite_helmet"}, {type: "helmet", armor: 5, durability: 1001, texture: "armor/gravitite_layerb_1.png"});

IDRegistry.genItemID("gravititeChestplate");
Item.createArmorItem("gravititeChestplate", "Gravitite Chestplate", {name: "gravitite_chestplate"}, {type: "chestplate", armor: 7, durability: 1562, texture: "armor/gravitite_layerb_1.png"});

IDRegistry.genItemID("gravititeLeggings");
Item.createArmorItem("gravititeLeggings", "Gravitite Leggings", {name: "gravitite_leggings"}, {type: "leggings", armor: 6, durability: 1520, texture: "armor/gravitite_layer_2.png"});

IDRegistry.genItemID("gravititeBoots");
Item.createArmorItem("gravititeBoots", "Gravitite Boots", {name: "gravitite_boots"}, {type: "boots", armor: 4, durability: 1342, texture: "armor/gravitite_layerb_1.png"});

Item.addRepairItemIds(ItemID.gravititeHelmet, [ItemID.plateGravitite, ItemID.gravititeHelmet]);
Item.addRepairItemIds(ItemID.gravititeChestplate, [ItemID.plateGravitite, ItemID.gravititeChestplate]);
Item.addRepairItemIds(ItemID.gravititeLeggings, [ItemID.plateGravitite, ItemID.gravititeLeggings]);
Item.addRepairItemIds(ItemID.gravititeBoots, [ItemID.plateGravitite, ItemID.gravititeBoots]);

Recipes.addShaped({id: ItemID.gravititeHelmet, count: 1, data: 0}, [
    "xxx",
    "x x"
], ['x', ItemID.plateGravitite, 0]);

Recipes.addShaped({id: ItemID.gravititeChestplate, count: 1, data: 0}, [
    "x x",
    "xxx",
    "xxx"
], ['x', ItemID.plateGravitite, 0]);

Recipes.addShaped({id: ItemID.gravititeLeggings, count: 1, data: 0}, [
    "xxx",
    "x x",
    "x x"
], ['x', ItemID.plateGravitite, 0]);

Recipes.addShaped({id: ItemID.gravititeBoots, count: 1, data: 0}, [
    "x x",
    "x x"
], ['x', ItemID.plateGravitite, 0]);




// file: items/armors/valkyria.js

IDRegistry.genItemID("valkyriaHelmet");
Item.createArmorItem("valkyriaHelmet", "Valkyrie Helmet", {name: "valkyrie_helmet"}, {type: "helmet", armor: 5, durability: 1025, texture: "armor/Valkyrie_1.png"});

IDRegistry.genItemID("valkyriaChestplate");
Item.createArmorItem("valkyriaChestplate", "Valkyrie Chestplate", {name: "valkyrie_chestplate"}, {type: "chestplate", armor: 7, durability: 1596, texture: "armor/Valkyrie_1.png"});

IDRegistry.genItemID("valkyriaLeggings");
Item.createArmorItem("valkyriaLeggings", "Valkyrie Leggings", {name: "valkyrie_leggings"}, {type: "leggings", armor: 6, durability: 1541, texture: "armor/Valkyrie_2.png"});

IDRegistry.genItemID("valkyriaBoots");
Item.createArmorItem("valkyriaBoots", "Valkyrie Boots", {name: "valkyrie_boots"}, {type: "boots", armor: 5, durability: 1355, texture: "armor/Valkyrie_1.png"});

Item.addRepairItemIds(ItemID.valkyriaHelmet, [ItemID.valkyriaHelmet]);
Item.addRepairItemIds(ItemID.valkyriaChestplate, [ItemID.valkyriaChestplate]);
Item.addRepairItemIds(ItemID.valkyriaLeggings, [ItemID.valkyriaLeggings]);
Item.addRepairItemIds(ItemID.valkyriaBoots, [ItemID.valkyriaBoots]);

//PHEONIX
IDRegistry.genItemID("phoenixHelmet");
Item.createArmorItem("phoenixHelmet", "Phoenix Helmet", {name: "phoenix_helmet"}, {type: "helmet", armor: 2, durability: 1001, texture: "armor/Phoenix_1.png"});

IDRegistry.genItemID("phoenixChestplate");
Item.createArmorItem("phoenixChestplate", "Phoenix Chestplate", {name: "phoenix_chestplate"}, {type: "chestplate", armor: 5, durability: 1562, texture: "armor/Phoenix_1.png"});

IDRegistry.genItemID("phoenixLeggings");
Item.createArmorItem("phoenixLeggings", "Phoenix Leggings", {name: "phoenix_leggings"}, {type: "leggings", armor: 4, durability: 1520, texture: "armor/Phoenix_2.png"});

IDRegistry.genItemID("phoenixBoots");
Item.createArmorItem("phoenixBoots", "Phoenix Boots", {name: "phoenix_boots"}, {type: "boots", armor: 2, durability: 1342, texture: "armor/Phoenix_1.png"});

Item.addRepairItemIds(ItemID.phoenixHelmet, [ItemID.phoenixHelmet]);
Item.addRepairItemIds(ItemID.phoenixChestplate, [ItemID.phoenixChestplate]);
Item.addRepairItemIds(ItemID.phoenixLeggings, [ItemID.phoenixLeggings]);
Item.addRepairItemIds(ItemID.phoenixBoots, [ItemID.phoenixBoots]);

//OBSIDIAN
IDRegistry.genItemID("obsidianHelmet");
Item.createArmorItem("obsidianHelmet", "Obsidian Helmet", {name: "obsidian_helmet"}, {type: "helmet", armor: 2, durability: 1234, texture: "armor/Obsidian_1.png"});

IDRegistry.genItemID("obsidianChestplate");
Item.createArmorItem("obsidianChestplate", "Obsidian Chestplate", {name: "obsidian_chestplate"}, {type: "chestplate", armor: 6, durability: 1666, texture: "armor/Obsidian_1.png"});

IDRegistry.genItemID("obsidianLeggings");
Item.createArmorItem("obsidianLeggings", "Obsidian Leggings", {name: "obsidian_leggings"}, {type: "leggings", armor: 5, durability: 1524, texture: "armor/Obsidian_2.png"});

IDRegistry.genItemID("obsidianBoots");
Item.createArmorItem("obsidianBoots", "Obsidian Boots", {name: "obsidian_boots"}, {type: "boots", armor: 2, durability: 1353, texture: "armor/Obsidian_1.png"});

Item.addRepairItemIds(ItemID.obsidianHelmet, [ItemID.obsidianHelmet]);
Item.addRepairItemIds(ItemID.obsidianChestplate, [ItemID.obsidianChestplate]);
Item.addRepairItemIds(ItemID.obsidianLeggings, [ItemID.obsidianLeggings]);
Item.addRepairItemIds(ItemID.obsidianBoots, [ItemID.obsidianBoots]);

Recipes.addShaped({id: ItemID.obsidianHelmet, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixHelmet, 0]);

Recipes.addShaped({id: ItemID.obsidianChestplate, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixChestplate, 0]);

Recipes.addShaped({id: ItemID.obsidianLeggings, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixLeggings, 0]);

Recipes.addShaped({id: ItemID.obsidianBoots, count: 1, data: 0}, [
    "xxx",
    "xcx",
    "xxx"
], ['x', ItemID.icestone, 0, 'c', ItemID.phoenixBoots, 0]);

//Neptune
IDRegistry.genItemID("neptuneHelmet");
Item.createArmorItem("neptuneHelmet", "Neptune Helmet", {name: "neptune_helmet"}, {type: "helmet", armor: 3, durability: 4334, texture: "armor/Neptune_1.png"});

IDRegistry.genItemID("neptuneChestplate");
Item.createArmorItem("neptuneChestplate", "Neptune Chestplate", {name: "neptune_chestplate"}, {type: "chestplate", armor: 8, durability: 4777, texture: "armor/Neptune_1.png"});

IDRegistry.genItemID("neptuneLeggings");
Item.createArmorItem("neptuneLeggings", "Neptune Leggings", {name: "neptune_leggings"}, {type: "leggings", armor: 6, durability: 4625, texture: "armor/Neptune_2.png"});

IDRegistry.genItemID("neptuneBoots");
Item.createArmorItem("neptuneBoots", "Neptune Boots", {name: "neptune_boots"}, {type: "boots", armor: 3, durability: 4400, texture: "armor/Neptune_1.png"});

Item.addRepairItemIds(ItemID.neptuneHelmet, [ItemID.neptuneHelmet]);
Item.addRepairItemIds(ItemID.neptuneChestplate, [ItemID.neptuneChestplate]);
Item.addRepairItemIds(ItemID.neptuneLeggings, [ItemID.neptuneLeggings]);
Item.addRepairItemIds(ItemID.neptuneBoots, [ItemID.neptuneBoots]);




// file: items/armors/group.js

Item.addCreativeGroup("helmetAether", Translation.translate("Aether Helmets"), [
    ItemID.taegoreHelmet,
    ItemID.burrukaiHelmet,
    ItemID.arkeniumHelmet,
    ItemID.zaniteHelmet,
    ItemID.gravititeHelmet,
    ItemID.valkyriaHelmet,
    ItemID.neptuneHelmet,
    ItemID.phoenixHelmet,
    ItemID.obsidianHelmet
]);


Item.addCreativeGroup("chestplateAether", Translation.translate("Aether Chestplates"), [
    ItemID.taegoreChestplate,
    ItemID.burrukaiChestplate,
    ItemID.arkeniumChestplate,
    ItemID.zaniteChestplate,
    ItemID.gravititeChestplate,
    ItemID.valkyriaChestplate,
    ItemID.neptuneChestplate,
    ItemID.phoenixChestplate,
    ItemID.obsidianChestplate
]);

Item.addCreativeGroup("leggingsAether", Translation.translate("Aether Leggings"), [
    ItemID.taegoreLeggings,
    ItemID.burrukaiLeggings,
    ItemID.arkeniumLeggings,
    ItemID.zaniteLeggings,
    ItemID.gravititeLeggings,
    ItemID.valkyriaLeggings,
    ItemID.neptuneLeggings,
    ItemID.phoenixLeggings,
    ItemID.obsidianLeggings
]);

Item.addCreativeGroup("bootsAether", Translation.translate("Aether Boots"), [
    ItemID.taegoreBoots,
    ItemID.burrukaiBoots,
    ItemID.arkeniumBoots,
    ItemID.zaniteBoots,
    ItemID.gravititeBoots,
    ItemID.valkyriaBoots,
    ItemID.neptuneBoots,
    ItemID.phoenixBoots,
    ItemID.obsidianBoots
]);




// file: projectiles.js

//golden
ToolAPI.addToolMaterial("goldends", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("goldenDshoot");
Item.createItem("goldenDshoot", "Golden dart shooter", {name: "golden_dart_shooter"}, {stack: 1});

IDRegistry.genItemID("goldenD");
Item.createItem("goldenD", "Golden Dart", {name: "golden_dart"});

Recipes.addShaped({id: ItemID.goldenD, count: 4, data: 0}, [
    " a ",
    " b ",
    " c "
], ['a', ItemID.goldAmber, 0, 'b', ItemID.stickSkyroot, 0, 'c', 288, 0]);

ToolLib.setTool(ItemID.goldenDshoot, "goldends", ToolType.sword);

GunRegistry.registerGun({
    gun:ItemID.goldenDshoot,
    bullet:ItemID.goldenD,
    skin:"entities/projectiles/golden_dart.png",
    speed:9,
    damage:7,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

//poison
ToolAPI.addToolMaterial("poisonds", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("poisonDshoot");
Item.createItem("poisonDshoot", "Poison dart shooter", {name: "poison_dart_shooter"}, {stack: 1});

IDRegistry.genItemID("poisonD");
Item.createItem("poisonD", "Poison Dart", {name: "poison_dart"});

Recipes.addShaped({id: ItemID.poisonD, count: 4, data: 0}, [
    " a ",
    " b "
], ['a', ItemID.goldenD, 0, 'b', ItemID.flowerAechor, 0]);

ToolLib.setTool(ItemID.poisonDshoot, "poisonds", ToolType.sword);

GunRegistry.registerGun({
    gun:ItemID.poisonDshoot,
    bullet:ItemID.poisonD,
    skin:"entities/projectiles/poison_dart.png",
    effect: 19,
    efftime:140,
    speed:9,
    damage:8,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

//enchanted
ToolAPI.addToolMaterial("encantedds", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("encantedDshoot");
Item.createItem("encantedDshoot", "Enchanted dart shooter", {name: "enchanted_dart_shooter"}, {stack: 1});

IDRegistry.genItemID("encantedD");
Item.createItem("encantedD", "Enchanted Dart", {name: "enchanted_dart"});

ToolLib.setTool(ItemID.encantedDshoot, "poisonds", ToolType.sword);

GunRegistry.registerGun({
    gun:ItemID.encantedDshoot,
    bullet:ItemID.encantedD,
    skin:"entities/projectiles/enchanted_dart.png",
    speed:11,
    damage:8,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});

//phoenix
ToolAPI.addToolMaterial("phoenixds", {durability: 1234, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("phoenixDshoot");
Item.createItem("phoenixDshoot", "Phoenix dart shooter", {name: "phoenix_dart_shootter"}, {stack: 1});

IDRegistry.genItemID("phoenixD");
Item.createItem("phoenixD", "Phoenix Dart", {name: "phoenix_dart"});

ToolLib.setTool(ItemID.phoenixDshoot, "goldends", ToolType.sword);

GunRegistry.registerGun({
    gun:ItemID.phoenixDshoot,
    bullet:ItemID.phoenixD,
    skin:"entities/projectiles/phoenix_dart.png",
    ftime:100,
    speed:10,
    damage:8,
    aim: BitmapFactory.decodeFile(__dir__ + "gui/aim_0.png"),
    fov: 62
});




// file: groupdart.js

Item.addCreativeGroup("shooterAether", Translation.translate("Aether Dart Shooters"), [
	ItemID.goldenDshoot,
	ItemID.poisonDshoot,
	ItemID.encantedDshoot,
	ItemID.phoenixDshoot
]);


Item.addCreativeGroup("dartAether", Translation.translate("Aether Darts"), [
	ItemID.goldenD,
	ItemID.poisonD,
	ItemID.encantedD,
	ItemID.phoenixD
]);




// file: dimension/aether.js

var Aether_Plains = new CustomBiome("aether_plains")
.setCoverBlock(BlockID.grassblockAether, 0)
.setSurfaceBlock(BlockID.dirtAether, 0)
.setFillingBlock(BlockID.Holystone, 0);


var Aether = new Dimensions.CustomDimension("Aether", 1991);
Aether.setSkyColor(.4, .4, .5);
Aether.setFogColor(.3, .3, .5);

Aether.setGenerator(Dimensions.newGenerator({
    biome: Aether_Plains.id,
    layers: [
    {
                minY: 36, maxY: 45,
                yConversion: [[0.9, -0.65], [.9, -.48], [0.18, 0], [.6, -.78], [1.3, -.75]],
                material: {base: BlockID.coldAercloud},
       noise: {
                    octaves: {
                        count: 3, scale: 110
                    }
                }
            },
    //MAIN NOICE
    {
        minY: 21,
        maxY: 126,
         yConversion: [[1, -0.65], [.805, -.21], [.7, 0.09], [0.3, -.15], [0., -.8]
        ],
        material: {
            base: BlockID.Holystone,
            surface: {
                id: BlockID.quickSkyroot,
                data: 0,
                width: 3
            },
            cover: BlockID.quickSkyroot
        },
        noise: {
            octaves: {
              count: 4,
              scale: 120,
              weight: 0.918
               }
        }     
    },
    {
        minY: 26,
        maxY: 127,
         yConversion: [[1, -0.65], [.8, -.2], [.7, 0.08], [0.3, -.155], [0, -.8]
        ],
        material: {
            base: BlockID.Holystone,
            surface: {
                id: BlockID.dirtAether,
                data: 0,
                width: 4
            },
            cover: BlockID.grassblockAether
        },
        noise: {
            octaves: {
               count: 4,
               scale: 120,
               weight: .9
               }
        }     
    }]
}));

 /*
const AEBlock = new PortalUtils.PortalBlock("aetherPortal", ["aether_portal", 0], {type: "v-plane", frameId: 89}, {to: Aether.id}, false);

const AEShape = new PortalShape()
    .setPortalId(AEBlock.getId())
    .setFrameIds(89)
    .setMinSize(2, 3)
    .makeNormalTransfer(0, Aether.id)
    .makeDestroyEvent();
    */
var Campfiremesh = new RenderMesh();
Campfiremesh.setBlockTexture("outpost_campfire_on", 0);
Campfiremesh.importFromFile(__dir__+"/models/campfire.obj", "obj", {translate:[+.5 ,0, +.5]});
IDRegistry.genBlockID("CampfireTleport");
Block.createBlock("CampfireTleport", [
    {name: "Teleporter", texture: [["outpost_campfire_on", 0]], inCreative: true}]);
    
var Campfirerender = new ICRender.Model();
Campfirerender.addEntry(new BlockRenderer.Model(Campfiremesh));
BlockRenderer.setStaticICRender(BlockID.CampfireTleport,0,Campfirerender);   
Block.setShape(BlockID.CampfireTleport, 0/16, 0, 0/16, 1/16, 5/16, 1/16);

IDRegistry.genBlockID("CampfireTleportE");
Block.createBlock("CampfireTleportE", [
    {name: "Teleporter", texture: [["empty", 0]], inCreative: false}]);     
Block.setShape(BlockID.CampfireTleportE, 0/16, 0, 0/16, 1/16, 5/16, 1/16);    
 /*   
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == 1 || Entity.getCarriedItem(player).id == 0 && block.id == BlockID.CampfireTleport) {
Dimensions.transfer(player, Aether.id);        
 }
});    */
    
Callback.addCallback("CustomDimensionTransfer", function (entity, from, to) {   
                Updatable.addUpdatable({
                    timer: 0,
                    update: function(){
                        this.timer++;
                        if(this.timer == 5){
                            (function(){
                                var region = BlockSource.getCurrentWorldGenRegion();
                                var pos = Entity.getPosition(entity);
                                var surf_1 = GenerationUtils.findSurface(pos.x, 230, pos.z);
                                Updatable.addUpdatable({
                                    age: 0,
                                    update: function () {        
                                     while (region.getBlockId(surf_1.x,surf_1.y-1,surf_1.z) == 0) {
                                       pos = Entity.getPosition(entity);
                                         surf_1 = GenerationUtils.findSurface(pos.x, 230, pos.z); 
                                        Entity.setPosition(entity, surf_1.x + 16, surf_1.y, surf_1.z + 16);          
                                        }
                                     this.remove = this.age++ > 3;
                                    }            
                                });
                               if (to == Aether.id) {
                              //Start.build(surf_1.x, surf_1.y + 1, surf_1.z, Structure.ROTATE_Y, random, region);           
                              }
                            })();
                            this.remove = true;
                        }
                    }
                });   
        });    

/*    
//THERA    
var Thera_Plains = new CustomBiome("thera_plains")
.setCoverBlock(BlockID.grasstheraAether, 0)
.setSurfaceBlock(BlockID.theraAether, 0)
.setFillingBlock(BlockID.Holystone, 0);    
    
var Thera = new Dimensions.CustomDimension("Thera", 1990);
Thera.setSkyColor(.25, .25, 1.12);
Thera.setCloudsColor(.25, .25, 1.12);
Thera.setFogColor(1.05, 1.05, 1.05);

Thera.setGenerator(Dimensions.newGenerator(
{
biome: Thera_Plains.id, 
layers: [
{
minY: 0, maxY: 45,
yConversion: [[0, 0]],
material: {base: BlockID.Holystone, surface: {id:BlockID.theraAether, data: 0, width:4}, cover: BlockID.grasstheraAether},
},
{
minY: 0, maxY: 1,
yConversion: [[0, 0]],
material: {base: 7}
}
]
}));*/
    
var Teleportermesh = new RenderMesh();
Teleportermesh.setBlockTexture("teleporter", 0);
Teleportermesh.importFromFile(__dir__+"/models/teleporter.obj", "obj", {translate:[+.5 ,0, +.5]});
IDRegistry.genBlockID("TeleporterThera");
Block.createBlock("TeleporterThera", [
    {name: "Teleporter", texture: [["teleporter", 0]], inCreative: true}]);
    
var Teleporterrender = new ICRender.Model();
Teleporterrender.addEntry(new BlockRenderer.Model(Teleportermesh));
BlockRenderer.setStaticICRender(BlockID.TeleporterThera,0,Teleporterrender);   

IDRegistry.genBlockID("TeleporterTheraE");
Block.createBlock("TeleporterTheraE", [
    {name: "Teleporter", texture: [["empty", 0]], inCreative: false}]);  

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if (block.id == BlockID.TeleporterThera) {
var region = BlockSource.getDefaultForActor(player);
region.destroyBlock(coords.x, coords.y + 1, coords.z);
}
if (block.id == BlockID.TeleporterTheraE) {
var region = BlockSource.getDefaultForActor(player);
region.destroyBlock(coords.x, coords.y - 1, coords.z);
}
});

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.TeleporterThera || Entity.getCarriedItem(player).id == 0 && block.id == BlockID.TeleporterTheraE) {
Dimensions.transfer(player, Aether.id);        
 }
});




// file: Translation.js

Translation.addTranslation("Stick Skyroot", {ru: "Палка святого дерева"});
Translation.addTranslation("Icestone", {ru: "Ледяной камень"});
Translation.addTranslation("Zanite Gemstone", {ru: "Занитовый самоцвет"});
Translation.addTranslation("Arkenium Ore", {ru: "Кусочек аркениумовой руды"});
Translation.addTranslation("Gravitite Ore", {ru: "Кусочек граветитовой руды"});
Translation.addTranslation("Continuum Orb", {ru: "Сфера континума"});
Translation.addTranslation("Arkenium Plate", {ru: "Аркениумовая пластина"});
Translation.addTranslation("Gravitite Plate", {ru: "Гравтитовая пластина"});
Translation.addTranslation("Ambrosium Shard", {ru: "Осколок амброзиума"});
Translation.addTranslation("Ambrosium", {ru: "Амброзиум"});
Translation.addTranslation("Ambrosium Chunk", {ru: "Кусочек амброзиума"});
Translation.addTranslation("Aether Portal", {ru: "Портал в рай"});
Translation.addTranslation("Aether Portal Active", {ru: "Активный портал в рай"});
Translation.addTranslation("Blue berry", {ru: "Голубика"});
Translation.addTranslation("Blue berry lollipop", {ru: "Голубичный чупачупс"});
Translation.addTranslation("Whynd berry", {ru: "Ягода ветров"});
Translation.addTranslation("Enchanted whynd berry", {ru: "Зачарованная ягода ветров"});
Translation.addTranslation("Orange", {ru: "Апельсин"});
Translation.addTranslation("Orange lollipop", {ru: "Апельсин карамелизованный"});
Translation.addTranslation("Rainbow whynd berry", {ru: "Радужная ягода"});
Translation.addTranslation("Shard of life", {ru: "Осколок жизни"});
Translation.addTranslation("Shard of regeneration", {ru: "Осколок регенерации"});
Translation.addTranslation("Candy Cane", {ru: "Рождественская конфета"});
Translation.addTranslation("Candy Corn", {ru: "Желеобазная конфета"});
Translation.addTranslation("Blue Swet Jelly", {ru: "Желе синего Милашки"});
Translation.addTranslation("Golden Swet Jelly", {ru: "Желе золотого Милашки"});
Translation.addTranslation("Dark Swet Jelly", {ru: "Желе пурпурного Милашки"});
Translation.addTranslation("Cream Swet Jelly", {ru: "Желе кремового Милашки"});
Translation.addTranslation("Arkenium Sword", {ru: "Аркениумовый меч"});
Translation.addTranslation("Arkenium Shovel", {ru: "Аркениумовая лопата"});
Translation.addTranslation("Arkenium Pickaxe", {ru: "Аркениумовая кирка"});
Translation.addTranslation("Arkenium Axe", {ru: "Аркениумовый топор"});
Translation.addTranslation("Gravitite Sword", {ru: "Граветитовый меч"});
Translation.addTranslation("Gravitite Shovel", {ru: "Граветитовая лопата"});
Translation.addTranslation("Gravitite Pickaxe", {ru: "Граветитовая кирка"});
Translation.addTranslation("Gravitite Axe", {ru: "Граветитовый топор"});
Translation.addTranslation("Holystone Sword", {ru: "Святокаменный меч"});
Translation.addTranslation("Holystone Shovel", {ru: "Святокаменая лопата"});
Translation.addTranslation("Holystone Pickaxe", {ru: "Святокаменая кирка"});
Translation.addTranslation("Holystone Axe", {ru: "Святокаменный топор"});
Translation.addTranslation("Skyroot Sword", {ru: "Святодеревянный меч"});
Translation.addTranslation("Skyroot Shovel", {ru: "Святодеревянная лопата"});
Translation.addTranslation("Skyroot Pickaxe", {ru: "Святодеревянная кирка"});
Translation.addTranslation("Skyroot Axe", {ru: "Святодеревянный топор"});
Translation.addTranslation("Valkyrie Lance", {ru: "Копье валькирии"});
Translation.addTranslation("Valkyrie Shovel", {ru: "Лопата валькирии"});
Translation.addTranslation("Valkyrie Pickaxe", {ru: "Кирка валькирии"});
Translation.addTranslation("Valkyrie Axe", {ru: "Топр валькирии"});
Translation.addTranslation("Vampire Sword", {ru: "Вампирский меч"});
Translation.addTranslation("Holy Sword", {ru: "Святой меч"});
Translation.addTranslation("Flaming Sword", {ru: "Поджигающий меч"});
Translation.addTranslation("Lighting Sword", {ru: "Молниевый меч"});
Translation.addTranslation("Pig Slayer", {ru: "Свинорез"});
Translation.addTranslation("Zanite Sword", {ru: "Занитовый меч"});
Translation.addTranslation("Zanite Shovel", {ru: "Занитовая лопата"});
Translation.addTranslation("Zanite Pickaxe", {ru: "Занитовая кирка"});
Translation.addTranslation("Zanite Axe", {ru: "Занитовый топор"});
Translation.addTranslation("Candy Sword", {ru: "Леденцовый меч"});
Translation.addTranslation("Arkenium Helmet", {ru: "Аркениумовый шлем"});
Translation.addTranslation("Arkenium Chestplate", {ru: "Аркениумовый нагрудник"});
Translation.addTranslation("Arkenium Leggings", {ru: "Аркениумовые поножи"});
Translation.addTranslation("Arkenium Boots", {ru: "Аркениумовые ботинки"});
Translation.addTranslation("Gravitite Helmet", {ru: "Граветитовый шлем"});
Translation.addTranslation("Gravitite Chestplate", {ru: "Граветитовый нагрудник"});
Translation.addTranslation("Gravitite Leggings", {ru: "Граветитовые поножи"});
Translation.addTranslation("Gravitite Boots", {ru: "Граветитовые ботинки"});
Translation.addTranslation("Valkyrie Helmet", {ru: "Шлем валькирии"});
Translation.addTranslation("Valkyrie Chestplate", {ru: "Нагрудник валькирии"});
Translation.addTranslation("Valkyrie Leggings", {ru: "Поножи валькирии"});
Translation.addTranslation("Valkyrie Boots", {ru: "Ботинки валькирии"});
Translation.addTranslation("Phoenix Helmet", {ru: "Шлем феникса"});
Translation.addTranslation("Phoenix Chestplate", {ru: "Нагрудник феникса"});
Translation.addTranslation("Phoenix Leggings", {ru: "Поножи феникса"});
Translation.addTranslation("Phoenix Boots", {ru: "Ботинки феникса"});
Translation.addTranslation("Zanite Helmet", {ru: "Занитовый шлем"});
Translation.addTranslation("Zanite Chestplate", {ru: "Занитовый нагрудник"});
Translation.addTranslation("Zanite Leggings", {ru: "Занитовые поножи"});
Translation.addTranslation("Zanite Boots", {ru: "Занитовые ботинки"});
Translation.addTranslation("Burrukai Helmet", {ru: "Накидка буррукаи"});
Translation.addTranslation("Burrukai Chestplate", {ru: "Накидка буррукаи"});
Translation.addTranslation("Burrukai Leggings", {ru: "Поножи буррукаи"});
Translation.addTranslation("Burrukai Boots", {ru: "Поножи буррукаи"});
Translation.addTranslation("Taegore Helmet", {ru: "Накидка тэгор"});
Translation.addTranslation("Taegore Chestplate", {ru: "Накидка тэгор"});
Translation.addTranslation("Taegore Leggings", {ru: "Поножи тэгор"});
Translation.addTranslation("Taegore Boots", {ru: "Поножи тэгор"});
Translation.addTranslation("Brettl Cane", {ru: "Трубка ломкого куста"});
Translation.addTranslation("Brettl Grass", {ru: "Ворс ломкого куста"});
Translation.addTranslation("Brettl Rope", {ru: "Веревка ломкого куста"});
Translation.addTranslation("Taegore Skin", {ru: "Мех тэгор"});
Translation.addTranslation("Burrukai Pelt", {ru: "Мех буррукаи"});

Translation.addTranslation("Raw Taegor Meat", {ru: "Сырое мясо тэгор"});
Translation.addTranslation("Taegor Steak", {ru: "Стейк тэгор"});
Translation.addTranslation("Kirrid Loin", {ru: "Вырезка киррид"});
Translation.addTranslation("Kirrid Steak", {ru: "Стейк киррид"});
Translation.addTranslation("Raw Burrukai Ribs", {ru: "Сырые ребрышки буррукаи"});
Translation.addTranslation("Burrukai Ribs", {ru: "Ребрышки буррукаи"});
Translation.addTranslation("Moa Egg", {ru: "Яйцо моа"});
Translation.addTranslation("Moa Egg Fried", {ru: "яичница моа"});
Translation.addTranslation("Plump Mash", {ru: "Пюре корковой тыквы"});
Translation.addTranslation("Plump Pie", {ru: "Пирог с корковой тыквой"});

Translation.addTranslation("Irradiated Dust", {ru: "Облученная пыль"});
Translation.addTranslation("Irradiated Chunk", {ru: "Облученный кусочек"});
Translation.addTranslation("Irradiated Charm", {ru: "Облученный талисман"});
Translation.addTranslation("Irradiated Neckwear", {ru: "Облученный амулет"});
Translation.addTranslation("Irradiated Sword", {ru: "Облученный меч"});
Translation.addTranslation("Irradiated Pickaxe", {ru: "Облученная кирка"});
//Блоки
Translation.addTranslation("Aether Dirt", {ru: "Святая земля"});
Translation.addTranslation("Aether Grass", {ru: "Святой дерн"});
Translation.addTranslation("Holystone", {ru: "Святокамень"});
Translation.addTranslation("Holystone Bricks", {ru: "Святокаменные кирпичи"});
Translation.addTranslation("Holystone Bricks Slab", {ru: "Плита из святокаменных кирпичей"});
Translation.addTranslation("Faded Holystone Bricks", {ru: "Забытые святокаменные кирпичи"});
Translation.addTranslation("Faded Holystone Bricks Slab", {ru: "Плита из забытых святокаменных кирпичей"});
Translation.addTranslation("Block Zanite", {ru: "Занитовый блок"});
Translation.addTranslation("Block Gravitite", {ru: "Граветитовый блок"});
Translation.addTranslation("Block Gravitite Enchanted", {ru: "Зачарованый граветитовый блок"});
Translation.addTranslation("Cold Aercloud", {ru: "Холодное облако"});
Translation.addTranslation("Blue Aercloud", {ru: "Голубое облако"});
Translation.addTranslation("Golden Aercloud", {ru: "Золотистое облако"});
Translation.addTranslation("Green Aercloud", {ru: "Зеленое облако"});
Translation.addTranslation("Storm Aercloud", {ru: "Штормовое облако"});
Translation.addTranslation("Frostroot", {ru: "Морозная трава"});
Translation.addTranslation("Cold Fire", {ru: "Холодный огонь"});
Translation.addTranslation("Ambrosium Ore", {ru: "Амброзиумовая руда"});
Translation.addTranslation("icestone Ore", {ru: "Морознокаменная руда"});
Translation.addTranslation("Zanite Ore", {ru: "Занитовая руда"});
Translation.addTranslation("Arkenium Ore", {ru: "Аркениумовая руда"});
Translation.addTranslation("Continuum Ore", {ru: "Руда континума"});
Translation.addTranslation("Gravitite Ore", {ru: "Граветитовая руда"});
Translation.addTranslation("Aether Torch", {ru: "Амброзиумовый факел"});
Translation.addTranslation("Aether Boockself", {ru: "Святая книжная полка"});
Translation.addTranslation("Aether Present", {ru: "Святой подарок"});
Translation.addTranslation("Blueberry Bush", {ru: "Голубичный куст"});
Translation.addTranslation("Bush", {ru: "Куст"});
Translation.addTranslation("Frosty Blueberry Bush", {ru: "Куст веторв"});
Translation.addTranslation("Frosty Bush", {ru: "Холодный куст"});
Translation.addTranslation("Blueberry Bush Enchanted", {ru: "Зачарованный ягодный куст"});
Translation.addTranslation("Bush Enchanted", {ru: "Зачарованый куст"});
Translation.addTranslation("Purple Flower", {ru: "Пурпурный цветок"});
Translation.addTranslation("Brittle plant", {ru: "Ломкий куст"});
Translation.addTranslation("Brettle Plant Flower", {ru: "Цветок ломкого куста"});
Translation.addTranslation("Frostpine Grass", {ru: "Морозная трава"});
Translation.addTranslation("Aether Grass", {ru: "Святая трава"});
Translation.addTranslation("Orange bush", {ru: "Апельсиновый куст"});
Translation.addTranslation("Orange bush sapling", {ru: "Росток апельсинового куста"});
Translation.addTranslation("White Rose", {ru: "Белая роза"});
Translation.addTranslation("Skyroot chest", {ru: "Святодеревянный сундук"});
Translation.addTranslation("freezer", {ru: "Морозильник"});
Translation.addTranslation("Holystone Furnace", {ru: "Святокаменная печь"});
Translation.addTranslation("incubator", {ru: "Инкубатор"});
Translation.addTranslation("Skyroot Workbench", {ru: "Святодревянный верстак"});
Translation.addTranslation("Blightwillow Workbench", {ru: "Ужасный верстак"});
Translation.addTranslation("Frostpine Workbench", {ru: "Морозный верстак"});
Translation.addTranslation("Holy Bunny Egg", {ru: "Яйцо спавна святого кролика"});
Translation.addTranslation("Faded Holystone Bricks", {ru: "Потрескавшиеся святокаменые кирпичи"});
Translation.addTranslation("Agiosite", {ru: "Агиосит"});
Translation.addTranslation("Agiosite Bricks", {ru: "Агиоситовые кирпичи"});
Translation.addTranslation("Agiosite Bricks Slab", {ru: "Плита из агиоситовых кирпичей"});
Translation.addTranslation("Ferrosite", {ru: "Ферросит"});
Translation.addTranslation("Rusted ferrosite", {ru: "Ржавый ферросит"});
Translation.addTranslation("Ferrosite sand", {ru: "Ферроситовый песок"});
Translation.addTranslation("Highlands ice", {ru: "Святой лед"});
Translation.addTranslation("Ice stone", {ru: "Ледяной камень"});
Translation.addTranslation("Ice stone bricks", {ru: "Кирпичи из ледяного камня"});
Translation.addTranslation("Ice stone bricks Slab", {ru: "Плита из кирпичей ледяного камня"});
Translation.addTranslation("Skyroot nest", {ru: "Святодеревянное гнездо"});
Translation.addTranslation("Valkyrie Grass", {ru: "Трава валькирий"});
Translation.addTranslation("Aechor Flower", {ru: "Ихоровый лепесток"});
Translation.addTranslation("Kirrid flowers", {ru: "Окрыленный лепесток"});
Translation.addTranslation("Qucksoil sand", {ru: "Ускоряющий песок"});
Translation.addTranslation("White apple", {ru: "Белое яблоко"});
Translation.addTranslation("Cloudwool", {ru: "Облачная шерсть"});
Translation.addTranslation("wisproot Skyroot Leaves", {ru: "Листва извевающегося дерева"});
Translation.addTranslation("Wisproot Tree Sapling", {ru: "Саженец извевающегося дерева"});
Translation.addTranslation("Plump", {ru: "Корковая тыква"});

Translation.addTranslation("Skyroot pillar", {ru: "Святодеревянная колонна"});
Translation.addTranslation("Skyroot Planks", {ru: "Святодеревянные доски"});
Translation.addTranslation("Skyroot Planks Slab", {ru: "Плита из святодеревянных досок"});
Translation.addTranslation("Skyroot base planks", {ru: "Святодеревянные базовые доски"});
Translation.addTranslation("Skyroot base planks Slab", {ru: "Плита из базовых святодеревянных досок"});
Translation.addTranslation("Skyroot base pillar", {ru: "Святодеревянная базовая колонна"});
Translation.addTranslation("Skyroot floorboards", {ru: "Святодеревянные половицы"});
Translation.addTranslation("Skyroot tiles", {ru: "Святодеревянная черепица"});
Translation.addTranslation("Skyroot tiles Slab", {ru: "Плита из святодеревянной черепицы"});
Translation.addTranslation("Skyroot tiles small", {ru: "Мелкая святодеревянная черепица"});
Translation.addTranslation("Skyroot small tiles Slab", {ru: "Плита из мелкой святодеревянной черепицы"});

Translation.addTranslation("Holystone pillar", {ru: "Святокаменная колонна"});
Translation.addTranslation("Holystone base bricks", {ru: "Святокаменные базовые кирпичи"});
Translation.addTranslation("Holystone base pillar", {ru: "Святокаменная базовая колонна"});
Translation.addTranslation("Holystone capstone bricks", {ru: "Святокаменные капстоун кирпичи"});
Translation.addTranslation("Holystone capstone bricks Slab", {ru: "Плита из капстоуновых кирпичей"});
Translation.addTranslation("Holystone capstone pillar", {ru: "Святокаменная капстоун колонна"});
Translation.addTranslation("Holystone flagstone bricks", {ru: "Святокаменные флагстоун кирпичи"});
Translation.addTranslation("Holystone flagstone bricks Slab", {ru: "Плита из флагстоуновых кирпичей"});
Translation.addTranslation("Holystone headstone", {ru: "Святокаменные хедстоун кирпичи"});

Translation.addTranslation("Icestone pillar", {ru: "Ледокаменная колонна"});
Translation.addTranslation("Icestone base bricks", {ru: "Ледокаменные базовые кирпичи"});
Translation.addTranslation("Icestone base bricks Slab", {ru: "Плита из ледокаменных базовых кирпичей"});
Translation.addTranslation("Icestone base pillar", {ru: "Ледокаменная базовая колонна"});
Translation.addTranslation("Icestone capstone bricks", {ru: "Ледокаменные капстоун кирпичи"});
Translation.addTranslation("Icestone capstone bricks Slab", {ru: "Плита из ледокаменных капстоун кирпичей"});
Translation.addTranslation("Icestone capstone pillar", {ru: "Ледокаменная капстоун колонна"});

Translation.addTranslation("Blightwillow Log", {ru: "Ужасное бревно ивы"});
Translation.addTranslation("Blightwillow Planks", {ru: "Ужасные доски ивы"});
Translation.addTranslation("Blightwillow Planks Slab", {ru: "Плита из досок ужасной ивы"});
Translation.addTranslation("blight willow Leaves", {ru: "Ужасная листва ивы"});
Translation.addTranslation("Blightwillow Skyroot Tree Sapling", {ru: "Ужасный саженец ивы"});

Translation.addTranslation("Golden Log", {ru: "Золотое бревно"});
Translation.addTranslation("golden Skyroot Leaves", {ru: "Золотая листва"});
Translation.addTranslation("gold Skyroot Tree Sapling", {ru: "Золотой саженец"});

Translation.addTranslation("Frostpine Log", {ru: "Морозное бревно"});
Translation.addTranslation("Frostpine Planks", {ru: "Морозные доски"});
Translation.addTranslation("frostpine Leaves", {ru: "Морозныая листва"});
Translation.addTranslation("Frostpine Tree Sapling", {ru: "Морозный саженец"});
Translation.addTranslation("Frostpine Planks", {ru: "Морозные доски"});
Translation.addTranslation("Frostpine Planks Slab", {ru: "Плита из морозных досок"});

Translation.addTranslation("darkblue Skyroot Leaves", {ru: "Темно-голубая святая листва"});
Translation.addTranslation("Darkblue Skyroot Tree Sapling", {ru: "Темно-голубой святой саженец"});
Translation.addTranslation("Blue Skyroot Leaves", {ru: "Голубая святая листва"});
Translation.addTranslation("blue Skyroot Tree Sapling", {ru: "Голубой святой саженец"});

Translation.addTranslation("Skyroot Log", {ru: "Святое бревно"});
Translation.addTranslation("Wisproot Log", {ru: "Святая береза"});
Translation.addTranslation("Skyroot Planks", {ru: "Святые доски"});
Translation.addTranslation("Skyroot Planks Slab", {ru: "Плита из святых досок"});
Translation.addTranslation("green Skyroot Leaves", {ru: "Святая листва"});
Translation.addTranslation("green Skyroot Tree Sapling", {ru: "Святой саженец"});

Translation.addTranslation("Vampire Crosbow", {ru: "Вампирский арбалет"});

Translation.addTranslation("Arkenium Crosbow", {ru: "Аркениумовый арбалет"});
Translation.addTranslation("Skyroot Crosbow", {ru: "Святодеревянный арбалет"});
Translation.addTranslation("Zanite Crosbow", {ru: "Занитовый арбалет"});
Translation.addTranslation("Gravitite Crosbow", {ru: "Граветитовый арбалет"});
Translation.addTranslation("Holystone Crosbow", {ru: "Святокаменный арбалет"});
Translation.addTranslation("Golden dart shooter", {ru: "Духовая трубка"});
Translation.addTranslation("Enchanted dart shooter", {ru: "Зачарованная духовая трубка"});
Translation.addTranslation("Poison dart shooter", {ru: "Отравленная духовая трубка"});
Translation.addTranslation("Phoenix dart shooter", {ru: "Духовая трубка феникса"});
Translation.addTranslation("Poison Dart", {ru: "Ядовитый дротик"});
Translation.addTranslation("Golden Dart", {ru: "Золотой дротик"});
Translation.addTranslation("Enchanted Dart", {ru: "Зачарованный дротик"});
Translation.addTranslation("Phoenix Dart", {ru: "Фениксовый дротик"});

Translation.addTranslation("Skyroot Bolt", {ru: "Святодеревянный болт"});

Translation.addTranslation("Arkenium Bolt", {ru: "Аркениумовый болт"});

Translation.addTranslation("Zanite Bolt", {ru: "Занитовый болт"});

Translation.addTranslation("Gravetite Bolt", {ru: "Граветитовый болт"});

Translation.addTranslation("Vampire Bolt", {ru: "Вампирсий болт"});

Translation.addTranslation("Golden Amber", {ru: "Золотой шарик"});
Translation.addTranslation("Iron Buble", {ru: "Железный шарик"});



Translation.addTranslation("Crude scatterglass", {ru: "Сырое потрескавшееся стекло"});
Translation.addTranslation("Scatterglass", {ru: "Потрескавшееся стекло"});
Translation.addTranslation("Framed scatterglass", {ru: "Потрескавшееся стекло в раме"});

Translation.addTranslation("Quicksoil glass", {ru: "Скользкое стекло"});
Translation.addTranslation("Framed quicksoil glass", {ru: "Скользкое стекло в раме"});
Translation.addTranslation("Purple Aercloud", {ru: "Пурпурное облако"});
Translation.addTranslation("Pumpkin Jelly", {ru: "Тыквенное желе"});

Translation.addTranslation("Skyroot Stairs", {ru: "Святодеревянные ступеньки"});
Translation.addTranslation("Holystone Stairs", {ru: "Святкаменные ступеньки"});
Translation.addTranslation("Faded Holystone Stairs", {ru: "Забытые Святкаменные ступеньки"});
Translation.addTranslation("Agiosite Stairs", {ru: "Агиоситовые ступеньки"});
Translation.addTranslation("Ice stone Stairs", {ru: "Ледокаменные ступеньки"});
Translation.addTranslation("Holystone base bricks Stairs", {ru: "Святокаменные базовые ступеньки"});
Translation.addTranslation("Holystone capstone bricks Stairs", {ru: "Святокаменные капстоун ступеньки"});
Translation.addTranslation("Holystone flagstone bricks Stairs", {ru: "Святокаменные флагстоун ступеньки"});
Translation.addTranslation("Holystone headstone Slab", {ru: "Святокаменная хедстоун плита"});
Translation.addTranslation("Holystone headstone Stairs", {ru: "Святокаменные хедстоун ступеньки"});
Translation.addTranslation("Icestone base Stairs", {ru: "Ледокаменные базовые ступеньки"});
Translation.addTranslation("Icestone capstone Stairs", {ru: "Ледокаменные капстоун ступеньки"});
Translation.addTranslation("Skyroot base Stairs", {ru: "Святодеревянные базовые ступеньки"});
Translation.addTranslation("Skyroot floorboards Stairs", {ru: "Святодеревянные половые ступеньки"});
Translation.addTranslation("Skyroot floorboards Slab", {ru: "Святодеревянная половая плита"});
Translation.addTranslation("Skyroot small tiles", {ru: "Святодеревянные черепичные ступеньки"});
Translation.addTranslation("Skyroot tiles Stairs", {ru: "Святодеревянные черепичные ступеньки"});

Translation.addTranslation("Crude scatterglass Plane", {ru: "Панель из сырого стекла"});
Translation.addTranslation("Scatterglass Plane", {ru: "Панель из потрескавшегося стекла"});
Translation.addTranslation("Framed Scatterglass Plane", {ru: "Рамочная Панель из потрескавшегося стекла"});
Translation.addTranslation("Quicksoil glass Plane", {ru: "Панель из скользкого стекла"});
Translation.addTranslation("Framed Quicksoil Plane", {ru: "Рамочная Пвнель из скользкого стекла"});

Translation.addTranslation("Skyroot Fence", {ru: "Святодеревянный забор"});
Translation.addTranslation("Holystone Wall", {ru: "Святокаменная стена"});

Translation.addTranslation("Skyroot Bark", {ru: "Святодеревянная кора"});
Translation.addTranslation("Teleporter", {ru: "Телепортер"});
Translation.addTranslation("Crude Scatterglass Shard", {ru: "Осколок сырого стекла"});

Translation.addTranslation("Stone Shroom", {ru: "Камнегриб"});
Translation.addTranslation("Bark Shroom", {ru: "Коркогриб"});
Translation.addTranslation("Magnetic Shroom", {ru: "Магнитогриб"});

Translation.addTranslation("Swingtip Green", {ru: "Зелёный колокольчик"});
Translation.addTranslation("Swingtip Blue", {ru: "Голубой колокольчик"});
Translation.addTranslation("Swingtip Pink", {ru: "Розовый колокольчик"});

Translation.addTranslation("Burstblossom", {ru: "Лопнувший цветок"});
Translation.addTranslation("Highlands Tulips", {ru: "Райский Тюльпан"});
Translation.addTranslation("Quickshoot", {ru: "Скоророст"});

Translation.addTranslation("Neverbloom", {ru: "Незабудка"});
Translation.addTranslation("Arctic spikespring", {ru: "Арктический шипорост"});
Translation.addTranslation("Irradiated", {ru: "Высохший цветок"});
Translation.addTranslation("Moa Egg", {ru: "Яйцо Моа"});

Translation.addTranslation("Aether Teleporter", {ru: "Телепортер рая"});
Translation.addTranslation("Now player MUST create aether teleporter item using 1 golden ingot 4 stones and 4 iron ingots", {ru: "Теперь НУЖНО сделать телепортер рая, для чего нужно 1 слиток золота 4 камня и 4 слитка железа"});
Translation.addTranslation("Dimension is under construction, lags bug and wreked balance are normal for now and some time before mod be completed", {ru: "Измерение в разработке, лаги баги и сломаный баланс нормальны для этой стадии и буду нормальны некоторе время до окончани я разработки"});

Translation.addTranslation("Aether Helmets", {ru: "Шлемы рая"});
Translation.addTranslation("Aether Chestplates", {ru: "Кирасы рая"});
Translation.addTranslation("Aether Leggings", {ru: "Поножи рая"});
Translation.addTranslation("Aether Boots", {ru: "Обувь рая"});

Translation.addTranslation("Aether Sword", {ru: "Мечи рая"});
Translation.addTranslation("Aether Pickaxe", {ru: "Кирки рая"});
Translation.addTranslation("Aether Axe", {ru: "Топоры рая"});
Translation.addTranslation("Aether Crossbow", {ru: "Арбалеты рая"});
Translation.addTranslation("Aether Bolt", {ru: "Болты рая"});

Translation.addTranslation("Aether Dart Shooters", {ru: "Дротикомёты рая"});
Translation.addTranslation("Aether Darts", {ru: "Дротики рая"});




