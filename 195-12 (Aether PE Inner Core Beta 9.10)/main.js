/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 41
*/



// file: header.js

/*
 Aether Mod
 
 Open-Source example of dimension library usage for Inner Core.
*/
IMPORT("Inventory");
IMPORT("dimensions");
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




// file: blocks/terrain.js

IMPORT("EntityState");
var BLOCK_TYPE_CLOUD = Block.createSpecialType({
    lightopacity: 1,
    destroytime: 1,
    opaque: false,
    renderlayer: 2
});

var BLOCK_TYPE_Ladder = Block.createSpecialType({
    lightopacity: 5,
    destroytime: 2,
    opaque: false,
    base:65
});

var BLOCK_TYPE_ACLOUD = Block.createSpecialType({
    lightopacity: 1,
    destroytime: 1,
    opaque: false
});

var BLOCK_LIGHT = Block.createSpecialType({
    lightlevel: 13,
    opaque: false
});
/*
var angle = Entity.getLookAngle(Player.get()); 
var vector = {}; 
vector.x = -Math.sin((angle.yaw)/ 180 * Math.PI);
vector.y = Math.sin((angle.pitch-180)/ 180 * Math.PI); 
vector.z = Math.cos((angle.yaw)/ 180 * Math.PI); 
*/
IDRegistry.genBlockID("dirtAether"); 
Block.createBlock("dirtAether", [
    {name: "Aether Dirt", texture: [["aether_dirt", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.dirtAether,2);
ToolAPI.registerBlockMaterial(BlockID.dirtAether, "dirt", 0, true);

IDRegistry.genBlockID("grassblockAether");
Block.createBlock("grassblockAether", [
    {name: "Aether Grass", texture: [["aether_dirt", 0], ["aether_grass_top", 0], ["aether_grass_side", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.grassblockAether, "dirt", 0, true);
Block.registerDropFunction("grassblockAether", function(){
return [[BlockID.dirtAether, 1, 0]];});

IDRegistry.genBlockID("theraAether"); 
Block.createBlock("theraAether", [
    {name: "Aether Dirt", texture: [["thera_dirt", 0]],inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.theraAether,2);
ToolAPI.registerBlockMaterial(BlockID.theraAether, "dirt", 0, true);

IDRegistry.genBlockID("grasstheraAether");
Block.createBlock("grasstheraAether", [
    {name: "Aether Grass", texture: [["thera_dirt", 0], ["thera_grass_top", 0], ["thera_grass_side", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.grasstheraAether, "dirt", 0, true);
Block.registerDropFunction("grassblockAether", function(){
return [[BlockID.theraAether, 1, 0]];});

IDRegistry.genBlockID("nestSkyroot");
Block.createBlock("nestSkyroot", [
    {name: "Skyroot nest", texture: [["woven_skyroot_sticks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.nestSkyroot, "wood", 0, true);

IDRegistry.genBlockID("quickSkyroot");
Block.createBlock("quickSkyroot", [
    {name: "Quckskoil sand", texture: [["quicksoil", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.nestSkyroot, "dirt", 0, true);
/*
Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var blockP = World.getBlockID(entP.x, entP.y-1, entP.z);
if(blockP == BlockID.quickSkyroot){
if(EntityState.getPlayerState(EntityState.WALKING || EntityState.RUNNING))return   
Entity.addVelocity(Player.get(),vector.x, entP.y, vector.z); 
}
});
*/
IDRegistry.genBlockID("Holystone"); 
Block.createBlock("Holystone", [
    {name: "Holystone", texture: [["holystone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Holystone, "stone", 2, true);

IDRegistry.genBlockID("brickHolystone"); 
Block.createBlock("brickHolystone", [
    {name: "Holystone Bricks", texture: [["holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickHolystone, "stone", 2, true);

Recipes.addShaped({id: BlockID.brickHolystone, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.Holystone, 0]);

IDRegistry.genBlockID("fbrickHolystone"); 
Block.createBlock("fbrickHolystone", [
    {name: "Faded Holystone Bricks", texture:[["faded_holystone_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.fbrickHolystone, "stone", 3, true);

IDRegistry.genBlockID("Agiosite"); 
Block.createBlock("Agiosite", [
    {name: "Agiosite", texture: [["agiosite", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.Agiosite, "stone", 2, true);

IDRegistry.genBlockID("brickAgiosite"); 
Block.createBlock("brickAgiosite", [
    {name: "Agiosite bricks", texture: [["agiosite_brick", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.brickAgiosite, "stone", 3, true);

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
    
IDRegistry.genBlockID("AcoldAercloud"); 
Block.createBlock("AcoldAercloud", [
    {name: "Cold Aercloud", texture: 
    [["aercloud_cold", 1]],inCreative: false}],BLOCK_TYPE_ACLOUD);    

IDRegistry.genBlockID("blueAercloud"); 
Block.createBlock("blueAercloud", [
    {name: "Blue Aercloud", texture:[["aercloud_blue", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
/*    
Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var blockP = World.getBlockID(entP.x, entP.y-1, entP.z);
if(blockP == BlockID.blueAercloud){
if(EntityState.getPlayerState(EntityState.WALKING || EntityState.RUNNING))return   
Entity.addVelocity(Player.get(),entP.x, vector.y+12, entP.z); 
}
});
*/
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
    
/*    
Callback.addCallback("tick",function() {
var entP = Entity.getPosition(Player.get());
var blockP = World.getBlockID(entP.x, entP.y-1, entP.z);
if(blockP == BlockID.stormAercloud){
if(EntityState.getPlayerState(EntityState.WALKING || EntityState.RUNNING))return   
Entity.addVelocity(Player.get(),vector.x, entP.y, vector.z); 
}
});    
*/
IDRegistry.genBlockID("grassblockFrostpine");
Block.createBlock("grassblockFrostpine", [
    {name: "Frostroot", texture:[["frostroot_side", 0], ["frostroot_top", 0], ["frostroot_side", 0]],inCreative: true}], "opaque");
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
    {name: "Highlands ice", texture:[["highlands_packedice", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pIce, "stone", 3, true);

IDRegistry.genBlockID("iceS");
Block.createBlock("iceS", [
    {name: "Ice stone", texture:[["icestone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.iceS, "stone", 2, true);

IDRegistry.genBlockID("bS");
Block.createBlock("bS", [
    {name: "Ice stone bricks", texture:[["icestone_bricks", 0]],inCreative: true}],BLOCK_TYPE_CLOUD);
ToolAPI.registerBlockMaterial(BlockID.bS, "stone", 2, true);

Recipes.addShaped({id: BlockID.bS, count: 4, data: 0}, [
    "xx ",
    "xx "
], ['x', BlockID.iceS, 0]);

var Renderer={
        setFireRender:function(id,x){
        var shape = new ICRender.CollisionShape();
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, .4999, 0, 0, .501, 0.99, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.98, 0, 0, 0.99, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.98, 1, 1, 0.99, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0.01, 0, 0, 0.02, 1, 1, id, 0);
                api.renderBoxId(coords.x, coords.y, coords.z, 0 , 0, 0.01, 1, 1, 0.02, id, 0);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};
ToolAPI.registerBlockMaterial(BlockID.coldFire, "cobweb");

Renderer.setFireRender(BlockID.coldFire, 0);

Callback.addCallback("tick",function() {
var ent = Entity.getPosition(Player.get());
var block = World.getBlockID(ent.x, ent.y - 1, ent.z);
if(block == BlockID.coldFire){
Entity.setFire(Player.get(), 180);       
}
});


Block.registerDropFunction("coldFire", function(){
    if(Math.random() < .070){
        return [[ItemID.icestone, 1, 0]]
    }
    else {
        return [];
    }
});




// file: blocks/ores.js

function randomInt(min, max){ 
return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var BLOCK_TYPE_STONE = Block.createSpecialType({
    base: 1,
    solid: true,
    destroytime: 3,
    explosionres: 3,
    opaque: true
}, "stone");
IDRegistry.genBlockID("oreAmbrosium"); 
Block.createBlock("oreAmbrosium", [
    {name: "Ambrosium Ore", texture:[["ambrosium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreAmbrosium, "stone", 1, true);
Block.setDestroyLevel("oreAmbrosium", 1);
Block.registerDropFunction("oreAmbrosium", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[BlockID.oreAmbrosium, 1, 0]];
        }
        var drop = [[ItemID.Ambrosium, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 27; i++){ 
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z)==BlockID.Holystone){ 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreAmbrosium, 0, randomInt(4, 6),true);     
            }
          } 
});
IDRegistry.genBlockID("oreIcestone"); 
Block.createBlock("oreIcestone", [
    {name: "icestone Ore", texture:[["icestone_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreIcestone, "stone", 1, true);
Block.setDestroyLevel("oreIcestone", 1);
Block.registerDropFunction("oreIcestone", function(coords, blockID, blockData, level, enchant){
    if(level > 0){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.icestone, randomInt(1,4), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 22; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
   if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreIcestone, 0, randomInt(2, 5),true);       
             }
          } 
});
IDRegistry.genBlockID("oreZanite"); 
Block.createBlock("oreZanite", [
    {name: "Zanite Ore", texture:[["zanite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreZanite, "stone", 2, true);
Block.registerDropFunction("oreZanite", function(coords, blockID, blockData, level, enchant){
    if(level > 1){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.zaniteGemstone, randomInt(1,5), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 21; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreZanite, 0, randomInt(4, 8),true);     
            }
          } 
});
IDRegistry.genBlockID("oreArkenium"); 
Block.createBlock("oreArkenium", [
    {name: "Arkenium Ore", texture: [["arkenium_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreArkenium, "stone", 2, true);
Block.setDestroyLevel("oreArkenium", 2);
Block.registerDropFunction("oreArkenium", function(coords, blockID, blockData, level, enchant){
    if(level > 1){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.oreArkenium, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 20; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreArkenium, 0, randomInt(4, 7),true);
              }
          } 
});
IDRegistry.genBlockID("oreGravitite"); 
Block.createBlock("oreGravitite", [
    {name: "Gravitite Ore", texture: 
    [["gravitite_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreGravitite, "stone", 3, true);
Block.registerDropFunction("oreGravitite", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.oreGravitite, randomInt(1,2), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 3);
 
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 13; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){  
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreGravitite, 0, randomInt(1, 4),true);
               }
          } 
});
IDRegistry.genBlockID("oreContinuum"); 
Block.createBlock("oreContinuum", [
    {name: "Continuum Ore", texture:[["continuum_ore", 0]],inCreative: true}],BLOCK_TYPE_STONE);
ToolAPI.registerBlockMaterial(BlockID.oreContinuum, "stone", 3, true);
Block.setDestroyLevel("oreContinuum", 3);
Block.registerDropFunction("oreContinuum", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[blockID, 1, 0]];
        }
        var drop = [[ItemID.continuumOrb, randomInt(1,3), 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 2);

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
for(var i = 0; i < 16; i++){
   var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 108, 180);
    if(World.getBlockID(coords.x,coords.y,coords.z).id==BlockID.Holystone){ 
   GenerationUtils.generateOre(coords.x, coords.y, coords.z, BlockID.oreContinuum, 0, randomInt(1, 4),true);
               }
          } 
});




// file: blocks/decorations.js

IDRegistry.genBlockID("ambrosiumTorch");
Block.createBlock("ambrosiumTorch", [
    {name: "Aether Torch", texture:[["aetherbookshelf", 1], ["ambrosium_torch", 1], ["ambrosium_torch", 0]],inCreative: false}], BLOCK_LIGHT);
Block.setBlockShape(BlockID.ambrosiumTorch, {x: 0.45, y: 0, z: 0.45}, {x: 0.55, y: 0.6, z: 0.55})   
    
IDRegistry.genItemID("ambrosiumTorch");
Item.createItem("ambrosiumTorch", "Aether Torch", {name: "ambrosium_torch"});
        
Item.registerUseFunction("ambrosiumTorch", function(coords, item, block){
var place = coords.relative;
 if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x,place.y,place.z,BlockID.ambrosiumTorch,0);       
        Player.setCarriedItem(item.id, item.count - 1, item.data);
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
 var drop = getPresentDropItem();
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
        return drop;    
});

IDRegistry.genBlockID("ladderSkyroot");
Block.createBlock("ladderSkyroot", [
    {name: "Skyroot ladder", texture: [["skyroot_ladder", 0]],inCreative: true}], BLOCK_TYPE_Ladder);
ToolAPI.registerBlockMaterial(BlockID.ladderSkyroot, "wood", 0, true);

IDRegistry.genBlockID("pillarHolystone");
Block.createBlock("pillarHolystone", [
    {name: "Holystone pillar", texture: [["holystone", 0], ["holystone_base_top", 0], ["holystone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksHolystone");
Block.createBlock("basebricksHolystone", [
    {name: "Holystone base bricks", texture: [["holystone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("basepillarHolystone");
Block.createBlock("basepillarHolystone", [
    {name: "Holystone base pillar", texture: [["holystone_base_bricks", 0], ["holystone_base_top", 0], ["holystone_basepillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksHolystone");
Block.createBlock("capstonebricksHolystone", [
    {name: "Holystone capstone bricks", texture: [["holystone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("capstonepillarHolystone");
Block.createBlock("capstonepillarHolystone", [
    {name: "Holystone capstone pillar", texture: [["holystone_capstone_bricks", 0], ["holystone_base_top", 0], ["holystone_capstone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonepillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("flagstonebricksHolystone");
Block.createBlock("flagstonebricksHolystone", [
    {name: "Holystone flagstone bricks", texture: [["holystone_flagstones", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.flagstonebricksHolystone, "stone", 2, true);

IDRegistry.genBlockID("headstoneHolystone");
Block.createBlock("headstoneHolystone", [
    {name: "Holystone headstone", texture: [["holystone_headstone", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.headstoneHolystone, "stone", 3, true);


IDRegistry.genBlockID("pillarIcestone");
Block.createBlock("pillarIcestone", [
    {name: "Icestone pillar", texture: [["icestone", 0], ["icestone_keystone", 0], ["icestone_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.pillarHolystone, "stone", 2, true);

IDRegistry.genBlockID("basebricksIcestone");
Block.createBlock("basebricksIcestone", [
    {name: "Icestone base bricks", texture: [["icestone_base_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basebricksIcestone, "stone", 2, true);

IDRegistry.genBlockID("basepillarIcestone");
Block.createBlock("basepillarIcestone", [
    {name: "Icestone base pillar", texture: [["icestone_base_bricks", 0], ["icestone_keystone", 0], ["icestone_base_pillar", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarIcestone, "stone", 2, true);

IDRegistry.genBlockID("capstonebricksIcestone");
Block.createBlock("capstonebricksIcestone", [
    {name: "Icestone capstone bricks", texture: [["icestone_capstone_bricks", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.capstonebricksIcestone, "stone", 2, true);

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

IDRegistry.genBlockID("basepillarSkyroot");
Block.createBlock("basepillarSkyroot", [
    {name: "Skyroot base pillar", texture: [["skyroot_base_planks", 0], ["skyroot_base_top", 0], ["skyroot_base_beam", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basepillarSkyroot, "wood", 0, true);

IDRegistry.genBlockID("floorboardsSkyroot");
Block.createBlock("floorboardsSkyroot", [
    {name: "Skyroot floorboards", texture: [["skyroot_floorboards", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.floorboardsSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilesSkyroot");
Block.createBlock("tilesSkyroot", [
    {name: "Skyroot tiles", texture: [["skyroot_tiles_small", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilesSkyroot, "wood", 0, true);

IDRegistry.genBlockID("tilessSkyroot");
Block.createBlock("tilessSkyroot", [
    {name: "Skyroot tiles small", texture: [["skyroot_tiles", 0]],inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.tilessSkyroot, "wood", 0, true);

IDRegistry.genBlockID("CCglass");
Block.createBlock("CCglass", [{name: "Crude scatterglass", texture: [["crude_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("SCglass");
Block.createBlock("SCglass", [{name: "Scatterglass", texture: [["scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("fSCglass");
Block.createBlock("fSCglass", [{name: "Framed scatterglass", texture: [["skyroot_frame_scatterglass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("SQglass");
Block.createBlock("SQglass", [{name: "Quicksoil glass", texture: [["quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);

IDRegistry.genBlockID("fSQglass");
Block.createBlock("fSQglass", [{name: "Framed quicksoil glass", texture: [["skyroot_frame_quicksoil_glass", 0]],inCreative: true}], BLOCK_TYPE_CLOUD);




// file: blocks/plants/grass.js

var Renderer={
        setSaplingRender:function(id,x){
        var shape = new ICRender.CollisionShape();     
        BlockRenderer.setCustomCollisionShape(Block.getNumericId(id), -1, shape);    
        BlockRenderer.addRenderCallback(id, function(api, coords,block) {
            if(x!=0){
                for(var i = 0;i < 1/x;i+=x){
                api.renderBoxId(coords.x, coords.y, coords.z,0+i, 0.01, 0+i, x+i, 0.99, x+i,id, block.data);
                api.renderBoxId(coords.x, coords.y, coords.z,(1-x)-i, 0.01, 0+i,1-i, 0.99, x+i,id, block.data);
                }
            }
            else{
                api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1,id, block.data);
                api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, id, block.data);
            }
        })
        BlockRenderer.enableCustomRender(id);
    }
};

IDRegistry.genBlockID("grassAether");
Block.createBlock("grassAether", [
    {name: "Aether Grass", texture: [["empty", 0], ["empty", 0], ["normal_aether", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.grassAether, "plant");

IDRegistry.genItemID("grassAether");
Item.createItem("grassAether", "Aether Grass", {name: "normal_aether"});

Item.registerUseFunction("grassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.grassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.grassAether,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 12; i++){ 
coords=GenerationUtils.randomCoords(x,z,114,154); 
for(var k=114;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.grassAether,0); 
} 
} 
} 
});

IDRegistry.genBlockID("shortgrassAether");
Block.createBlock("shortgrassAether", [
    {name: "Aether Grass", texture: [["empty", 0], ["empty", 0], ["short_aether", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.shortgrassAether, "plant");

IDRegistry.genItemID("shortgrassAether");
Item.createItem("shortgrassAether", "Aether Grass", {name: "short_aether"});

Item.registerUseFunction("shortgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.shortgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.shortgrassAether,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 1; i < 13; i++){ 
coords=GenerationUtils.randomCoords(x,z,112,154); 
for(var k=112;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.shortgrassAether,0); 
} 
} 
} 
});


IDRegistry.genBlockID("longgrassAether");
Block.createBlock("longgrassAether", [
    {name: "Aether Grass", texture: [["empty", 0], ["empty", 0], ["long_aether", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.longgrassAether, "plant");

IDRegistry.genItemID("longgrassAether");
Item.createItem("longgrassAether", "Aether Grass", {name: "long_aether"});

Item.registerUseFunction("longgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.longgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.longgrassAether,0);
/*
Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 4; i++){ 
coords=GenerationUtils.randomCoords(x,z,100,154); 
for(var k=100;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.longgrassAether,0); 
} 
} 
} 
});
*/
Block.registerDropFunction("grassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.grassAether, 1, 0);
});
Block.registerDropFunction("shortgrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.shortgrassAether, 1, 0);
});
Block.registerDropFunction("longgrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.shortgrassAether, 1, 0);
});




// file: blocks/plants/valkyrie.js

IDRegistry.genBlockID("vgrassAether");
Block.createBlock("vgrassAether", [
    {name: "Valkyrie Grass", texture: [["empty", 0], ["empty", 0], ["valkyrie_grass", 0]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.vgrassAether, "plant");

IDRegistry.genItemID("vgrassAether");
Item.createItem("vgrassAether", "Valkyrie Grass", {name: "valkyrie_grass"});

Item.registerUseFunction("vgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.vgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.addTileEntity(place.x, place.y, place.z);
    }
});
Renderer.setSaplingRender(BlockID.vgrassAether,0);
/*
Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 13; i++){ 
coords=GenerationUtils.randomCoords(x,z,1,111); 
for(var k=0;k<111;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.vgrassAether,0); 
} 
} 
} 
});*/

IDRegistry.genBlockID("vlonggrassAether");
Block.createBlock("vlonggrassAether", [
    {name: "Valkyrie Grass", texture: [["empty", 0], ["empty", 0], ["valkyrie_grass", 2]], inCreative: false}
]);
ToolAPI.registerBlockMaterial(BlockID.vlonggrassAether, "plant");

IDRegistry.genItemID("vlonggrassAether");
Item.createItem("vlonggrassAether", "Valkyrie Grass", {name: "valkyriel_grass"});

IDRegistry.genItemID("kirridflower");
Item.createItem("kirridflower", "Kirrid flowers", {name: "kirrid_flower"});

Item.registerUseFunction("longgrassAether", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.longgrassAether);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.addTileEntity(place.x, place.y, place.z);
    }
});
Renderer.setSaplingRender(BlockID.vlonggrassAether,0);

Callback.addCallback("AetherChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=108;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.vlonggrassAether,0); 
} 
} 
} 
});

Block.registerDropFunction("vgrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.vgrassAether, 1, 0);
});

Block.registerDropFunction("vlonggrassAether", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.kirridflower, 1, 0);
});




// file: blocks/plants/frostpinegrass.js

IDRegistry.genBlockID("grassFrostpine");
Block.createBlock("grassFrostpine", [
    {name: "Frostpine Grass", texture: [["empty", 0], ["empty", 0], ["normal_frostroot", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.grassFrostpine, "plant");

IDRegistry.genItemID("grassFrostpine");
Item.createItem("grassFrostpine", "Frostpine Grass", {name: "normal_frostroot"});

Block.setBlockShape(BlockID.grassFrostpine, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("grassFrostpine", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.grassFrostpine);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Renderer.setSaplingRender(BlockID.grassFrostpine,0);

Block.registerDropFunction("grassFrostpine", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.grassFrostpine, 1, 0);
});




// file: blocks/plants/flower.js

IDRegistry.genBlockID("flowerPurple");
Block.createBlock("flowerPurple", [
    {name: "Purple Flower", texture: [["empty", 0], ["empty", 0], ["purple_flowern", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerPurple");
Item.createItem("flowerPurple", "Purple Flower", {name: "purple_flower"});

Block.setBlockShape(BlockID.flowerPurple, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("flowerPurple", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.flowerPurple);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.flowerPurple,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 10; i++){ 
coords=GenerationUtils.randomCoords(x,z,113,154); 
for(var k=113;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.flowerPurple,0); 
} 
} 
} 
});

Block.registerDropFunction("flowerPurple", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.flowerPurple, 1, 0);
});


IDRegistry.genBlockID("flowerAechor");
Block.createBlock("flowerAechor", [
    {name: "Aechor Flower", texture: [["empty", 0], ["empty", 0], ["aechor_sprout", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.flowerPurple, "plant");

IDRegistry.genItemID("flowerAechor");
Item.createItem("flowerAechor", "Aechor Flower", {name: "aechor_sprout"});

Block.setBlockShape(BlockID.flowerPurple, {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.05, z: 0.9});

Item.registerUseFunction("flowerAechor", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.flowerAechor);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Renderer.setSaplingRender(BlockID.flowerAechor,0);

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,114,154); 
for(var k=114;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.flowerAechor,0); 
} 
} 
} 
});

Block.registerDropFunction("flowerAechor", function(coords, blockID){
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, ItemID.flowerAechor, 1, 0);
});




// file: blocks/plants/rose.js

IDRegistry.genBlockID("roseWhite");
Block.createBlock("roseWhite", [
    {name: "White Rose", texture: [["empty", 0], ["empty", 0], ["white_rosen", 0]], inCreative: false}
]);

IDRegistry.genItemID("roseWhite");
Item.createItem("roseWhite", "White Rose", {name: "white_rosen"});

Item.registerUseFunction("roseWhite", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.roseWhite);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

Renderer.setSaplingRender(BlockID.roseWhite,0);

Callback.addCallback("AetherChunk", function(x,z){ 
for(var i = 0; i < 10; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=1098;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.roseWhite,0); 
} 
} 
} 
});




// file: blocks/plants/blueberry.js

IDRegistry.genBlockID("bushBerry");
Block.createBlock("bushBerry", [
    {name: "Blueberry Bush", texture: [["berrybush", 1]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.bushBerry, "plant");

IDRegistry.genBlockID("bush");
Block.createBlock("bush", [
    {name: "Bush", texture: [["green_skyrootleaves", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.bush, "plant");

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=108;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.bushBerry,0); 
} 
} 
} 
});

Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bushBerry){
World.drop(coords.x, coords.y+1, coords.z, ItemID.blueBerry, 3);
World.setBlock(coords.x,coords.y,coords.z,BlockID.bush,0); 
}
});

Block.setRandomTickCallback(BlockID.bush, function(x, y, z, id, data){    
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerry,0);  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block) {        
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bush && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
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

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,108,154); 
for(var k=108;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.bushBerryf,0); 
} 
} 
} 
});

Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bushBerryf){
World.drop(coords.x, coords.y+1, coords.z, ItemID.whidBerry, 3);
World.setBlock(coords.x,coords.y,coords.z,BlockID.bushf,0); 
}
});

Block.setRandomTickCallback(BlockID.bushf, function(x, y, z, id, data){        
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerryf,0);  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block) {         
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.bushf && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
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

Callback.addCallback("GenerateChunk", function(x,z){ 
for(var i = 0; i < 3; i++){ 
coords=GenerationUtils.randomCoords(x,z,112,154); 
for(var k=112;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
World.setBlock(coords.x,k+1,coords.z,BlockID.enbushBerry,0); 
} 
} 
} 
});

Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.enbushBerry){
World.drop(coords.x, coords.y+1, coords.z, ItemID.enchantedBerry, 3);
World.setBlock(coords.x,coords.y,coords.z,BlockID.enbush,0); 
}
});

Block.setRandomTickCallback(BlockID.enbush, function(x, y, z, id, data){       
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.bushBerryf,0);  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block){       
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.enbush && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
                }         
});     




// file: blocks/plants/orange.js

IDRegistry.genBlockID("orangeoBush");
Block.createBlock("orangeoBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangeotree", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.orangeoBush, "plant");
Renderer.setSaplingRender(BlockID.orangeoBush,0);

IDRegistry.genBlockID("orangetBush");
Block.createBlock("orangetBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangettree", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.orangetBush, "plant");
Renderer.setSaplingRender(BlockID.orangetBush,0);

IDRegistry.genBlockID("orangetrBush");
Block.createBlock("orangetrBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangetrtree", 0]], inCreative: false}]);
ToolAPI.registerBlockMaterial(BlockID.orangetrBush, "plant");
Renderer.setSaplingRender(BlockID.orangetrBush,0);

IDRegistry.genBlockID("orangefrBush");
Block.createBlock("orangefrBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangefrtree", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.orangefrBush, "plant");
Renderer.setSaplingRender(BlockID.orangefrBush,0);

IDRegistry.genBlockID("orangefiBush");
Block.createBlock("orangefiBush", [
    {name: "Orange bush", texture: [["empty", 0], ["empty", 0], ["orangefitree", 0]], inCreative: true}]);
ToolAPI.registerBlockMaterial(BlockID.orangefiBush, "plant");
Renderer.setSaplingRender(BlockID.orangefiBush,0);


IDRegistry.genItemID("orangeoBush");
Item.createItem("orangeoBush", "Orange bush sapling", {name: "orange_tree", meta: 0});

Item.registerUseFunction("orangeoBush", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
        World.setBlock(place.x, place.y, place.z, BlockID.orangeoBush);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }});
     
Block.setRandomTickCallback(BlockID.orangeoBush, function(x, y, z, id, data){      
                if (World.getBlockID(coords.x, coords.y - 1, coords.z)==BlockID.grassblockAether){
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  structureGenerationHelper.placeor({x: coords.x, y: coords.y, z: coords.z});  
                    }
  });     
Callback.addCallback("DestroyBlock", function (coords, block){       
 if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.orangeoBush && World.getBlockID(coords.x, coords.y-1, coords.z)!=BlockID.grassblockAether){
World.destroyBlock(coords.x, coords.y, coords.z, false);
                }         
});        
     

     
Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.orangefiBush){
World.drop(coords.x, coords.y+1, coords.z, ItemID.Orange, 1);
World.setBlock(coords.x,coords.y,coords.z,BlockID.orangetrBush,0); 
}
});

Block.setRandomTickCallback(BlockID.orangetrBush, function(x, y, z, id, data){      
               World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.orangefiBush,0);                      
  });     
    
          
Callback.addCallback("ItemUse", function (coords,item,block) {
if (World.getBlockID(coords.x, coords.y, coords.z)==BlockID.orangefrBush){
World.drop(coords.x, coords.y+1, coords.z, ItemID.Orange, 1);
World.setBlock(coords.x,coords.y,coords.z,BlockID.orangetBush,0); 
}
});

Block.setRandomTickCallback(BlockID.orangetBush, function(x, y, z, id, data){
var coords = World.getBlockID(x,y,z);    
                 World.destroyBlock(coords.x,coords.y,coords.z,false);                      
                  World.setBlock(coords.x,coords.y,coords.z,BlockID.orangefrBush,0);                      
  });     

var orangesGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generateBushes:function(crds, block){
        var block = {
            upO: BlockID.orangefiBush,
            downO: BlockID.orangefrBush,
            upT: BlockID.orangetrBush,
            downT: BlockID.orangetBush
        }
        if(this.random()){                       
            this.p(crds.x, crds.y, crds.z, block.downO);
            this.p(crds.x, crds.y+1, crds.z, block.upO);                                          
            }if(this.random()){            
            this.p(crds.x, crds.y, crds.z, block.downT);
            this.p(crds.x, crds.y+1, crds.z, block.upT);                       
            }
      }
}

Callback.addCallback("AetherChunk", function(x,z){ 
for(var i = 0; i < 2; i++){ 
coords=GenerationUtils.randomCoords(x,z,112,154); 
for(var k=112;k<154;k++){ 
if(World.getBlockID(coords.x,k,coords.z)==BlockID.grassblockAether){ 
if(World.getBlockID(coords.x,k+1,coords.z)!=0)return 
orangesGenerationHelper.generateBushes({x: coords.x, y: k+1, z: coords.z});
} 
} 
} 
});




// file: items/items.js

IDRegistry.genItemID("stickSkyroot");
Item.createItem("stickSkyroot", "Stick Skyroot", {name: "skyroot_stick"});

IDRegistry.genItemID("icestone");
Item.createItem("icestone", "Icestone", {name: "icestone"});

IDRegistry.genItemID("zaniteGemstone");
Item.createItem("zaniteGemstone", "Zanite Gemstone", {name: "zanite_gemstone"});

IDRegistry.genItemID("oreArkenium");
Item.createItem("oreArkenium", "Arkenium Ore", {name: "arkenium_ore"});

IDRegistry.genItemID("oreGravitite");
Item.createItem("oreGravitite", "Gravitite Ore", {name: "gravitite_ore"});

IDRegistry.genItemID("continuumOrb");
Item.createItem("continuumOrb", "Continuum Orb", {name: "continuum_orb"},{isTech:false,stack: 1});

IDRegistry.genItemID("plateArkenium");
Item.createItem("plateArkenium", "Arkenium Plate", {name: "arkenium_plate"});

IDRegistry.genItemID("plateGravitite");
Item.createItem("plateGravitite", "Gravitite Plate", {name: "gravitite_plate"});

IDRegistry.genItemID("Ambrosium");
Item.createItem("Ambrosium", "Ambrosium Shard", {name: "ambrosium_shard"});

IDRegistry.genItemID("itemPortal");
Item.createItem("itemPortal", "Aether Portal", {name: "aether_portal", meta: 1},{isTech:false,stack: 1});

IDRegistry.genItemID("itemAPortal");
Item.createItem("itemAPortal", "Aether Portal Active", {name: "aether_portal", meta: 0},{isTech:false,stack: 1});

IDRegistry.genItemID("goldAmber");
Item.createItem("goldAmber", "Golden Amber", {name: "golden_amber", meta: 0});

IDRegistry.genItemID("ironBuble");
Item.createItem("ironBuble", "Iron Buble", {name: "iron_bubble", meta: 0});

var portalGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generatePortal:function(crds, block){
        var block = {
            frame: 89,
            portal: BlockID.aetherPortal
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.frame);
            this.p(crds.x+1, crds.y, crds.z, block.frame);
            this.p(crds.x-1, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y, crds.z, block.frame);
            this.p(crds.x+2, crds.y+1, crds.z, block.frame);
            this.p(crds.x+2, crds.y+2, crds.z, block.frame);
            this.p(crds.x+2, crds.y+3, crds.z, block.frame);
            this.p(crds.x+2, crds.y+4, crds.z, block.frame);
            this.p(crds.x+1, crds.y+4, crds.z, block.frame);
            this.p(crds.x, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+4, crds.z, block.frame);
            this.p(crds.x-1, crds.y+3, crds.z, block.frame);
            this.p(crds.x-1, crds.y+2, crds.z, block.frame);
            this.p(crds.x-1, crds.y+1, crds.z, block.frame);
            
            this.p(crds.x, crds.y+1, crds.z, block.portal);
            this.p(crds.x+1, crds.y+1, crds.z, block.portal);
            this.p(crds.x, crds.y+2, crds.z, block.portal);
            this.p(crds.x+1, crds.y+2, crds.z, block.portal);
            this.p(crds.x, crds.y+3, crds.z, block.portal);
            this.p(crds.x+1, crds.y+3, crds.z, block.portal);                                  
            }
      }
}

Item.registerUseFunction("itemAPortal", function(coords, item, block){
    var place = coords.relative;
    if(GenerationUtils.isTransparentBlock(World.getBlockID(place.x, place.y, place.z))){
    portalGenerationHelper.generatePortal({x: place.x, y: place.y, z: place.z});    
    }
});

Recipes.addShaped({id: ItemID.itemPortal, count: 1, data: 0}, [
    "aaa",
    "a a",
    "aaa"
], ['a', 89, 0]);

Recipes.addShaped({id: ItemID.itemAPortal, count: 1, data: 0}, [
    "ab"
], ['a', ItemID.itemPortal, 0, 'b', 325, 8]);

Item.registerUseFunction("continuumOrb", function(coords, item, block){
    var drop = getContinumDropItem();
    World.drop(coords.relative.x + 0.5, coords.relative.y + 0.1, coords.relative.z + 0.5, drop.id, 1, drop.data);
    item.id--;
    if(!item.count){item.id = 0;}
    Player.setCarriedItem(item.id, item.count, 0);
});

var CONTINUM_RANDOM_DROP = [   
    {chance: 41, id: ItemID.Ambrosium, data: 0},
    {chance: 31, id: ItemID.skyrootSword, data: 0},
    {chance: 28, id: ItemID.skyrootShovel, data: 0},
    {chance: 36, id: ItemID.skyrootPickaxe, data: 0},
    {chance: 32, id: ItemID.skyrootAxe, data: 0},
    {chance: 30, id: ItemID.ambrosiumTorch, data: 0},
    {chance: 1.2, id: ItemID.plateGravitite, data: 0},
    {chance: .1, id: ItemID.gravititeSword, data: 0},
    {chance: .7, id: ItemID.valkiriaSword, data: 0},
    {chance: 1.5, id: BlockID.oreGravitite, data: 0},
    {chance: .27, id: BlockID.oreZanite, data: 0},
    {chance: 20, id: BlockID.oreArkenium, data: 0},
    {chance: 29, id: ItemID.zaniteGemstone, data: 0},
    {chance: 12, id: ItemID.zanitePickaxe, data: 0},
    {chance: .75, id: ItemID.vampireSword, data: 0},
    {chance: .55, id: ItemID.holySword, data: 0},
    {chance: .83, id: ItemID.flamingSword, data: 0},
    {chance: .70, id: ItemID.lightingSword, data: 0},
    {chance: .85, id: ItemID.pigsSword, data: 0},
    {chance: .76, id: ItemID.neptuneHelmet, data: 0},
    {chance: .69, id: ItemID.neptuneChestplate, data: 0},
    {chance: .72, id: ItemID.neptuneLeggings, data: 0},
    {chance: .79, id: ItemID.neptuneBoots, data: 0},
    {chance: 8.9, id: ItemID.phoenixHelmet, data: 0},
    {chance: 8, id: ItemID.phoenixChestplate, data: 0},
    {chance: 8.1, id: ItemID.phoenixLeggings, data: 0},
    {chance: 8.4, id: ItemID.phoenixBoots, data: 0}
];

function getContinumDropItem(){
    var total = 0;
    for (var i in CONTINUM_RANDOM_DROP){
        total += CONTINUM_RANDOM_DROP[i].chance;
    }
    var random = Math.random() * total * 1.3;
    var current = 0;
    for (var i in CONTINUM_RANDOM_DROP){
        var drop = CONTINUM_RANDOM_DROP[i];
        if (current < random && current + drop.chance > random){
            return drop;
        }
        current += drop.chance;
    }    
    return {id: ItemID.ambrosiumTorch, data: 0};
}




// file: items/food/food.js

IDRegistry.genItemID("blueBerry");
Item.createFoodItem("blueBerry", "Blue berry", {name: "blueberries", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.blueBerry){
Entity.addEffect(Player.get(), 13, 0, 600, false,false);
}});

IDRegistry.genItemID("blueBerryl");
Item.createFoodItem("blueBerryl", "Blue berry lollipop", {name: "blue_berry_lollipop", meta: 0},{isTech:false,stack: 32,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.blueBerryl){
Entity.addEffect(Player.get(), 13, 0, 666, false,false);
}});

Recipes.addShaped({id: ItemID.blueBerryl, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.blueBerry, 0]);

IDRegistry.genItemID("whidBerry");
Item.createFoodItem("whidBerry", "Whynd berry", {name: "wyndberry", meta: 0},{isTech:false,stack: 64,food: 3});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.whidBerry){
Entity.addEffect(Player.get(), 18, 0, 360, false,false);
}});

IDRegistry.genItemID("enwhidBerry");
Item.createFoodItem("enwhidBerry", "Enchanted whynd berry", {name: "enchanted_wyndberry", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.enwhidBerry){
Entity.addEffect(Player.get(), 18, 0, 120, false,false);
}});

IDRegistry.genItemID("rawhidBerry");
Item.createFoodItem("rawhidBerry", "Rainbow whynd berry", {name: "rainbow_strawberry", meta: 0},{isTech:false,stack: 64,food: 5});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.rawhidBerry){
Entity.addEffect(attacker, 10, 1, 180, false,false);
}});

IDRegistry.genItemID("Orange");
Item.createFoodItem("Orange", "Orange", {name: "orange", meta: 0},{isTech:false,stack: 64,food: 7});

IDRegistry.genItemID("Whiteapl");
Item.createFoodItem("Whiteapl", "White apple", {name: "white_apple", meta: 0},{isTech:false,stack: 64,food: 5});

IDRegistry.genItemID("Orangel");
Item.createFoodItem("Orangel", "Orange lollipop", {name: "orange_lollipop", meta: 0},{isTech:false,stack: 32,food: 7});

Recipes.addShaped({id: ItemID.Orangel, count: 1, data: 0}, [
    "b",
    "a"
], ['a', ItemID.stickSkyroot, 0, 'b', ItemID.Orange, 0]);

IDRegistry.genItemID("enchantedBerry");
Item.createFoodItem("enchantedBerry", "Enchanted berry", {name: "enchanted_blueberry", meta: 0},{isTech:false,stack: 64,food: 4});
Callback.addCallback("FoodEaten",function(heal, satRatio){
if(Player.getCarriedItem().id==ItemID.enchantedBerry){
Player.addExperience(4);
}});

IDRegistry.genItemID("candyCane");
Item.createFoodItem("candyCane", "Candy Cane", {name: "candy_cane", meta: 0},{isTech:false,stack: 64,food: 4});

IDRegistry.genItemID("candyCorn");
Item.createFoodItem("candyCorn", "Candy Corn", {name: "candy_corn", meta: 0},{isTech:false,stack: 64,food: 3});

IDRegistry.genItemID("shardLife");
Item.createFoodItem("shardLife", "Shard of life", {name: "shard_of_life", meta: 0},{isTech:false,stack: 4,food: 1});
Callback.addCallback("FoodEaten",function(heal, satRatio){
var Ph = Entity.getMaxHealth(Player.get());
if(Player.getCarriedItem().id==ItemID.shardLife){
Entity.setMaxHealth(Player.get(), Ph+2);    
if(Entity.getMaxHealth(Player.get()) == 40)return false    
}});




// file: blocks/machines/workbench.js

IDRegistry.genBlockID("skyrootWorkbench"); 
Block.createBlock("skyrootWorkbench", [
    {name: "Skyroot Workbench", texture: 
    [["skyroot_plank", 0], ["skyroot_workbench", 1], ["skyroot_workbench", 0],["skyroot_workbench", 0], ["skyroot_workbench", 2],["skyroot_workbench", 2]],inCreative: true}], "opaque");

IDRegistry.genBlockID("blightwillowWorkbench"); 
Block.createBlock("blightwillowWorkbench", [
    {name: "Blightwillow Workbench", texture: 
    [["blightwillow_planks", 0], ["blightwillow_craftingtabletop", 0], ["blightwillow_craftingtableside", 0],["blightwillow_craftingtablefront", 0], ["blightwillow_craftingtableside", 0],["blightwillow_craftingtableside", 0]],inCreative: true}], "opaque");

IDRegistry.genBlockID("frostpineWorkbench"); 
Block.createBlock("frostpineWorkbench", [
    {name: "Frostpine Workbench", texture: 
    [["frostpine_planks", 0], ["frostpine_crafting_tabletop", 0], ["frostpine_crafting_tableside", 0],["frostpine_crafting_tablefront", 0], ["frostpine_crafting_tableside", 0],["frostpine_crafting_tableside", 0]],inCreative: true}], "opaque");
Callback.addCallback("PostLoaded", function (){    
Recipes.addShaped({id: BlockID.skyrootWorkbench, count: 1, data: 0}, [
    " xx",
    " xx",

], ['x', BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: BlockID.blightwillowWorkbench, count: 1, data: 0}, [
    " xx",
    " xx",

], ['x', BlockID.blightwillowSkyroot, 0]);

Recipes.addShaped({id: BlockID.frostpineWorkbench, count: 1, data: 0}, [
    " xx",
    " xx",

], ['x', BlockID.plankFrostpine, 0]);
});




// file: blocks/machines/chest.js

IDRegistry.genBlockID("skyrootChest");
Block.createBlockWithRotation("skyrootChest",[{name:"Skyroot chest",texture:[["skyrootchest",2],["skyrootchest",2],["skyrootchest",1],["skyrootchest",0],["skyrootchest",1],["skyrootchest",1]],inCreative:true}]);
Block.setBlockShape(BlockID.skyrootChest,{x:.0625,y:0,z:.0625},{x:.9375,y:.875,z:.9375});


var skyrootChestUI=new UI.StandartWindow({standart:{header:{text:{text:"Skyroot Chest"}},inventory:{standart:!0},background:{standart:!0}},drawing:[],elements:{slot1:{type:"slot",x:425,y:40,size:50},slot2:{type:"slot",x:475,y:40,size:50},slot3:{type:"slot",x:525,y:40,size:50},slot4:{type:"slot",x:575,y:40,size:50},slot5:{type:"slot",x:625,y:40,size:50},slot6:{type:"slot",x:675,y:40,size:50},slot7:{type:"slot",x:725,y:40,size:50},slot8:{type:"slot",x:775,y:40,size:50},slot9:{type:"slot",x:825,y:40,size:50},
slot10:{type:"slot",x:425,y:90,size:50},slot11:{type:"slot",x:475,y:90,size:50},slot12:{type:"slot",x:525,y:90,size:50},slot13:{type:"slot",x:575,y:90,size:50},slot14:{type:"slot",x:625,y:90,size:50},slot15:{type:"slot",x:675,y:90,size:50},slot16:{type:"slot",x:725,y:90,size:50},slot17:{type:"slot",x:775,y:90,size:50},slot18:{type:"slot",x:825,y:90,size:50},slot19:{type:"slot",x:425,y:140,size:50},slot20:{type:"slot",x:475,y:140,size:50},slot21:{type:"slot",x:525,y:140,size:50},slot22:{type:"slot",
x:575,y:140,size:50},slot23:{type:"slot",x:625,y:140,size:50},slot24:{type:"slot",x:675,y:140,size:50},slot25:{type:"slot",x:725,y:140,size:50},slot26:{type:"slot",x:775,y:140,size:50},slot27:{type:"slot",x:825,y:140,size:50}}});TileEntity.registerPrototype(BlockID.skyrootChest,{getGuiScreen:function(){return skyrootChestUI}});




// file: blocks/machines/furnace.js

IMPORT("MachineRender");
IDRegistry.genBlockID("aetherFurnace");
Block.createBlockWithRotation("aetherFurnace",[{name:"Holystone Furnace",texture:[["holystone_brick",0],["holystonefurnace_top",0],["holystonefurnace_side",0],["offholystonefurnace_front",0],["holystonefurnace_side",0],["holystonefurnace_side",0]],inCreative:true}], "opaque");
/*
MachineRenderer.setStandartModel(BlockID.aetherFurnace, [["holystone_brick", 0], ["holystonefurnace_top", 0], ["holystonefurnace_side", 0], ["offholystonefurnace_front", 0], ["holystonefurnace_side", 0], ["holystonefurnace_side", 0]] true);
MachineRenderer.registerRenderModel(BlockID.aetherFurnace, [["holystone_brick", 0], ["holystonefurnace_top", 0], ["holystonefurnace_side", 0], ["onholystonefurnace_front", 1], ["holystonefurnace_side", 0], ["holystonefurnace_side", 0]] true);
*/
var FURNACE_FUEL_MAP = {5: 150, 6: 50, 17: 150, 263: 800, 280: 50, 268: 100, 269: 100, 270: 100, 271: 100, 85: 150, 107: 150, 134: 150, 135: 150, 158: 75, 162: 150, 163: 150, 164: 150, 184: 150, 185: 150, 186: 150, 187: 150, 53: 150, 54: 150, 58: 150};


var aetherFurnaceGUI = new UI.StandartWindow({
    standart: {
        header: {text: {text: "Holystone Furnace"}},
        inventory: {standart: true},
        background: {standart: true}
    },
    
    drawing: [
        {type: "bitmap", x: 530, y: 146, bitmap: "progf", scale: 3.2},
        {type: "bitmap", x: 450, y: 150, bitmap: "burnf", scale: 3.2}
    ],
    
    elements: {
     "progressScale": {type: "scale", x: 530, y: 146, direction: 0, value: 0.5, bitmap: "progo", scale: 3.2},
        "burningScale": {type: "scale", x: 450, y: 150, direction: 1, value: 0.5, bitmap: "burno", scale: 3.2},
        "slotSource": {type: "slot", x: 441, y: 75},
        "slotFuel": {type: "slot", x: 441, y: 212},
        "slotResult": {type: "slot", x: 625, y: 142},
    }
});

TileEntity.registerPrototype(BlockID.aetherFurnace, {
    defaultValues: {
        progress: 0,
        burn: 0,
        burnMax: 0
    },
    
    getGuiScreen: function(){
        return aetherFurnaceGUI;
    },
    
    addTransportedItem: function(self, item, direction){
        var fuelSlot = this.container.getSlot("slotFuel");
        if(FURNACE_FUEL_MAP[item.id] && (fuelSlot.id==0 || fuelSlot.id==item.id && fuelSlot.data==item.data && fuelSlot.count < 64)){
            var add = Math.min(item.count, 64 - slotFuel.count);
            item.count -= add;
            fuelSlot.id = item.id;
            fuelSlot.data = item.data;
            fuelSlot.count += add;
            if(!item.count){return;}
        }
        
        var sourceSlot = this.container.getSlot("slotSource");
        if(sourceSlot.id==0 || sourceSlot.id==item.id && sourceSlot.data==item.data && sourceSlot.count < 64){
            var add = Math.min(item.count, 64 - sourceSlot.count);
            item.count -= add;
            sourceSlot.id = item.id;
            sourceSlot.data = item.data;
            sourceSlot.count += add;
            if(!item.count){return;}
        }
    },
    
    getTransportSlots: function(){
        return {input: ["slotSource", "slotFuel"], output: ["slotResult"]};
    },
    
    tick: function(){
        var sourceSlot = this.container.getSlot("slotSource");
        var result = Recipes.getFurnaceRecipeResult(sourceSlot.id, "iron");
        if(result && this.data.burn > 0){
            var resultSlot = this.container.getSlot("slotResult");
            if((resultSlot.id == result.id && resultSlot.data == result.data && resultSlot.count < 64 || resultSlot.id == 0) && this.data.progress++ >= 90){
                sourceSlot.count--;
                resultSlot.id = result.id;
                resultSlot.data = result.data;
                resultSlot.count++;
                this.container.validateAll();
                this.data.progress = 0;
            }
        }
        else {
            this.data.progress = 0;
        }
        
        if(this.data.burn > 0){
            this.data.burn--;
        }
        else if(result){
            this.data.burn = this.data.burnMax = this.getFuel("slotFuel");
        }
        
        this.container.setScale("burningScale", this.data.burn / this.data.burnMax || 0);
        this.container.setScale("progressScale", this.data.progress / 90);
    },
    
    getFuel: function(slotName){
        var fuelSlot = this.container.getSlot(slotName);
        if(fuelSlot.id > 0){
            var burn = FURNACE_FUEL_MAP[fuelSlot.id];
            if(burn){
                fuelSlot.count--;
                this.container.validateSlot(slotName);
                return burn;
            }
            if(LiquidRegistry.getItemLiquid(fuelSlot.id, fuelSlot.data) == "lava"){
                var empty = LiquidRegistry.getEmptyItem(fuelSlot.id, fuelSlot.data);
                fuelSlot.id = empty.id;
                fuelSlot.data = empty.data;
                return 20000;
            }
        }
        return 0;
    }
});




// file: blocks/machines/freezer.js

IDRegistry.genBlockID("freezer"); 
Block.createBlock("freezer", [
    {name: "freezer", texture: 
    [["skyroot_plank", 0],["freezer", 1],  ["freezer", 0]],inCreative: true}], "opaque");




// file: blocks/machines/incubator.js


IDRegistry.genBlockID("incubator"); 
Block.createBlock("incubator", [
    {name: "incubator", texture: 
    [["skyroot_plank", 0],["incubator", 1],  ["incubator", 0]],inCreative: true}], "opaque");





// file: trees/greenskyroot.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroygLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.greenskyrootLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.greenskyrootLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.greenskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("skyrootLog");
Block.createBlock("skyrootLog", [
    {name: "Skyroot Log", texture: [["aether_log", 1], ["aether_log", 1], ["aether_log", 0], ["aether_log", 0], ["aether_log", 0], ["aether_log", 0]], inCreative: true}
]);

IDRegistry.genBlockID("plankSkyroot");
Block.createBlock("plankSkyroot", [
    {name: "Skyroot Planks", texture: [["skyroot_planks", 0]], inCreative: true}
]);

Block.registerDropFunction("skyrootLog", function(coords, blockID){
    destroyLeaves(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.skyrootLog, 2);
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
Block.createBlock("greenskyrootSapling", [{name: "green Skyroot Tree Sapling", texture: [["green_skyrootsapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.greenskyrootSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("greenskyrootSapling", function(){
    return [[ItemID.greenskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("greenskyrootSapling");
Item.createItem("greenskyrootSapling", "green Skyroot Tree Sapling", {name: "green_skyrootsapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.greenskyrootSapling, function(api, coords, block) {

var box = BlockID.greenskyrootSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.greenskyrootSapling);



ToolAPI.registerBlockMaterial(BlockID.greenskyrootSapling, "plant");


Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.greenskyrootSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.greenskyrootSapling,0);
        World.addTileEntity(pl.x,pl.y,pl.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateChunk", function(a,b){
  for(var i = 0; i < 26; i++){
   d=GenerationUtils.randomCoords(a,b,100,151);
    for(var k=100;k<151;k++){
     if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
      for(var q=1;q<10;q++){
       if(World.getBlockID(d.x,k+q,d.z)!=0){
GtreeGenerationHelper.generateGtree({x: d.x, y: k+1, z: d.z});
return}
}
return}
}
}
});

var GtreeGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generateGtree:function(crds, block){
        var block = {
            stik: BlockID.skyrootLog,
            leaves: BlockID.greenskyrootLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-2, block.leaves);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("greenskyrootSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y-1, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == BlockID.grassblockAether){
        World.setBlock(place.x, place.y, place.z, BlockID.greenskyrootSapling);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.greenskyrootSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockAether){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
 GtreeGenerationHelper.generateGtree({x: this.x, y: this.y, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
 GtreeGenerationHelper.generateGtree({x: this.x, y: this.y, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });
Callback.addCallback("PostLoaded", function () {        
Recipes.addShaped({id: BlockID.plankSkyroot, count: 4, data: 0}, [

        "a  ",
        "   ",
        "   "
    ], ['a',BlockID.skyrootLog, 0]);

Recipes.addShaped({id: BlockID.skyrootWorkbench, count: 1, data: 0}, [

        "aa ",
        "aa ",
        "   "
    ], ['a',BlockID.plankSkyroot, 0]);
    
Recipes.addShaped({id: BlockID.skyrootChest, count: 4, data: 0}, [

        "aaa",
        "a a",
        "aaa"
    ], ['a',BlockID.plankSkyroot, 0]);

Recipes.addShaped({id: ItemID.stickSkyroot, count: 4, data: 0}, [

        "a  ",
        "a  ",
        "   "
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


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.blueskyrootLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.blueskyrootLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.blueskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

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
Block.createBlock("blueskyrootSapling", [{name: "blue Skyroot Tree Sapling", texture: [["blue_skyrootsapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.blueskyrootSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("blueskyrootSapling", function(){
    return [[ItemID.blueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("blueskyrootSapling");
Item.createItem("blueskyrootSapling", "blue Skyroot Tree Sapling", {name: "skyroot_sapling", data: 1});



BlockRenderer.addRenderCallback(BlockID.blueskyrootSapling, function(api, coords, block) {

var box = BlockID.blueskyrootSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.blueskyrootSapling);



ToolAPI.registerBlockMaterial(BlockID.blueskyrootSapling, "plant");

var BtreeGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generateBtree:function(crds, block){
        var block = {
            stik: BlockID.skyrootLog,
            leaves: BlockID.blueskyrootLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);            
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.blueskyrootSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.blueskyrootSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateChunk", function(a,b){
    for(var i = 0; i < 24; i++){
     d=GenerationUtils.randomCoords(a,b,100,152);
      for(var k=100;k<152;k++){
       if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
        for(var q=1;q<10;q++){
         if(World.getBlockID(d.x,k+q,d.z)!=0){
BtreeGenerationHelper.generateBtree({x: d.x, y: k+1, z: d.z});             
return}
} 
return}
}
}
});
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("blueskyrootSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.blueskyrootSapling);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.blueskyrootSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockAether){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
 BtreeGenerationHelper.generateBtree({x: this.x, y: this.y, z:this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
 BtreeGenerationHelper.generateBtree({x: this.x, y: this.y, z:this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });




// file: trees/darkblueskyroot.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.darkblueskyrootLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.darkblueskyrootLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.darkblueskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

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
Block.createBlock("darkblueskyrootSapling", [{name: "Darkblue Skyroot Tree Sapling", texture: [["dark_blue_skyrootsapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.darkblueskyrootSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("darkblueskyrootSapling", function(){
    return [[ItemID.darkblueskyrootSapling, 1, 0]];
});

IDRegistry.genItemID("darkblueskyrootSapling");
Item.createItem("darkblueskyrootSapling", "Darkblue Skyroot Tree Sapling", {name: "dark_blue_skyrootsapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.darkblueskyrootSapling, function(api, coords, block) {

var box = BlockID.darkblueskyrootSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.darkblueskyrootSapling);



ToolAPI.registerBlockMaterial(BlockID.darkblueskyrootSapling, "plant");

function darkblueTree(x,y,z){
    for(var i=0;i<5;i++){
        for(var b=0;b<3;b++){
            for(var k=0;k<5;k++){
                if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.darkblueskyrootLeaves,0);
            }
        }
    }
    for(var i=0;i<5;i++){
        if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.darkblueskyrootLeaves)World.setBlock(x,y+i,z,BlockID.skyrootLog,0);
    }
    World.setBlock(x+1,y+5,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x+1,y+6,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x-1,y+5,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x-1,y+6,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+5,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+6,z,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+5,z+1,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+6,z+1,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+5,z-1,BlockID.darkblueskyrootLeaves,0);
    World.setBlock(x,y+6,z-1,BlockID.darkblueskyrootLeaves,0);
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.darkblueskyrootSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.darkblueskyrootSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("AetherChunk", function(a,b){
    for(var i = 0; i < 25; i++){
     d=GenerationUtils.randomCoords(a,b,100,151);
      for(var k=100;k<151;k++){
       if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
        for(var q=1;q<10;q++){
         if(World.getBlockID(d.x,k+q,d.z)!=0){
      darkblueTree(d.x,k+1,d.z);     
return}
}
return}
}
}
});
    
/*==Перенести на рандом тик==*/
TileEntity.registerPrototype(BlockID.darkblueskyrootSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockAether){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
                        darkblueTree(this.x,this.y,this.z);
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
                    darkblueTree(this.x,this.y,this.z);
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });




// file: trees/golden.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.goldenLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.goldenLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.goldenSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("goldenLog");
Block.createBlock("goldenLog", [
    {name: "Golden Log", texture: [["goldenoak_log", 1], ["goldenoak_log", 1], ["goldenoak_log", 0], ["goldenoak_log", 0], ["goldenoak_log", 0], ["goldenoak_log", 0]], inCreative: true}
]);

Block.setDestroyTime(BlockID.goldenLog, 2);
ToolAPI.registerBlockMaterial(BlockID.goldenLog, "wood");

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
Block.createBlock("goldenSapling", [{name: "gold Skyroot Tree Sapling", texture: [["golden_oaksapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.goldenSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("goldenSapling", function(){
    return [[ItemID.goldenSapling, 1, 0]];
});

IDRegistry.genItemID("goldenSapling");
Item.createItem("goldenSapling", "gold Skyroot Tree Sapling", {name: "golden_oaksapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.goldenSapling, function(api, coords, block) {

var box = BlockID.goldenSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.goldenSapling);
ToolAPI.registerBlockMaterial(BlockID.goldenSapling, "plant");

function buildGoldTree(x, y, z){   for(var i in structureGenerationHelper.goldTree){       const src = structureGenerationHelper.goldTree[i];   if(typeof src[1] == "string"){
  let minmax = src[1].split("-");      for(var i = minmax[0]; i < minmax[1]; i++){                World.setBlock(x+src[0], y+i, z+src[2], src[3]);
            }
        }else{           World.setBlock(x+src[0], y+src[1], z+src[2], src[3])
        }
    }
}

const wood = BlockID.goldenLog;
const leaves = BlockID.goldenLeaves;

var structureGenerationHelper = {
    goldTree:[
        [-1, "2-5", 0, leaves],
        [-1, "6-7", 0, wood],
        [-1, 8, 0, leaves],
        [-1, "3-8", 1, leaves],
        [-1, "3-7", -1, leaves],
        [-1, "3-4", -2, leaves],
        [-1, 5, -2, wood],
        [-1, 6, -2, wood],
        [-1, "3-8", 0, leaves],
        [-1, "4-7", 1, leaves],
        [-2, "5-6", 0, leaves],
        [-3, "5-7", 1, leaves],
        [-1, "4-5", -1, leaves],
        [-1, "4-5", -2, leaves],
        [-2, "4-5", -3, leaves],
        [-1, "5-8", 2, leaves],
        [-1, "5-7", 3, leaves],
        [0, "2-4", 1, leaves],
        [0, 5, 1, leaves],
        [0, "6-8", 1, leaves],
        [0, "3-8", 2, leaves],
        [0, "5-7", 3, leaves],
        [-2, "5-6", 2, leaves],
        [-2, 6, 3, leaves],
        [-1, "3-5", -3, leaves],
        [0, 2, -1, leaves],
        [0, 2, -2, leaves],
        [0, 2, -3, leaves],
        [0, 3, -1, wood],
        [0, 3, -2, wood],
        [0, 3, -2, wood],
        [0, 3, -3, leaves],
        [0, 4, -1, leaves],
        [0, "4-7", -2, leaves],
        [0, "4-5", -3, leaves],
        [0, 4, -4, leaves],
        [0, 5, -1, wood],
        [0, "6-8", -1, leaves],
        [1, "3-8", 1, leaves],
        [1, "3-8", 2, leaves],
        [1, "2-8", 0, leaves],
        [1, "3-8", -1, leaves],
        [1, "2-7", -2, leaves],
        [1, "3-6", -3, leaves],
        [1, "4-5", -4, leaves],
        [2, "3-7", 0, leaves],
        [2, "3-4", -1, leaves],
        [2, 5, -1, wood],
        [2, "6-7", -1, leaves],
        [2, "3-6", -2, leaves],
        [2, "4-6", -3, leaves],
        [2, "4-7", 1, leaves],
        [2, "5-6", 2, leaves],
        [3, "4-5", 0, leaves],
        [3, "5-6", 1, leaves],
        [3, "4-6", -1, leaves],
        [3, "4-6", -2, leaves],
        [3, 5, -3, leaves],      
        [3, "7-8", 0, leaves],
        [0, "0-6", 0, wood]]
};
Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.goldenSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.goldenSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
/*
Callback.addCallback("AetherChunk", function(a,b){
    for(var i = 0; i < 33; i++){
        d=GenerationUtils.randomCoords(a,b,23,189);
        for(var k=0;k<189;k++){
        if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
for(var q=1;q<10;q++){
if(World.getBlockID(d.x,k+q,d.z)!=0){
return
buildGoldTree(d.x,k+1,d.z);
}
}
return}
        }
    }
    });
    */
/*==Перенести на рандом тик==*/

Item.registerUseFunction("goldenSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.goldenSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.goldenSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockAether){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
                        buildGoldTree(this.x,this.y,this.z);
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
                    buildGoldTree(this.x,this.y,this.z);
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });




// file: trees/blightwillow.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.darkblueskyrootLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.blightwillowleaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.darkblueskyrootSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("blightwillowLog");
Block.createBlock("blightwillowLog", [
    {name: "Blightwillow Log", texture: [["blightwillow_logtop", 0], ["blightwillow_logtop", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0], ["blightwillow_logside", 0]], inCreative: true}
]);

IDRegistry.genBlockID("blightwillowSkyroot");
Block.createBlock("blightwillowSkyroot", [
    {name: "Blightwillow Planks", texture: [["blightwillow_planks", 0]], inCreative: true}
]);

IDRegistry.genBlockID("blightwillowleaves");
Block.createBlock("blightwillowleaves", [
    {name: "blight willow Leaves", texture: [["blightwillow_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("darkblueskyrootLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.blightwillowSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.blightwillowleaves, "plant");

IDRegistry.genBlockID("blightwillowSapling");
Block.createBlock("blightwillowSapling", [{name: "Blightwillow Skyroot Tree Sapling", texture: [["blightwillow_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.blightwillowSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("blightwillowSapling", function(){
    return [[ItemID.blightwillowSapling, 1, 0]];
});

IDRegistry.genItemID("blightwillowSapling");
Item.createItem("blightwillowSapling", "Blightwillow Skyroot Tree Sapling", {name: "blightwillow_sapling", data: 0});

BlockRenderer.addRenderCallback(BlockID.blightwillowSapling, function(api, coords, block) {

var box = BlockID.blightwillowSapling;
api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);                 
});
BlockRenderer.enableCustomRender(BlockID.blightwillowSapling);
ToolAPI.registerBlockMaterial(BlockID.blightwillowSapling, "plant");

function blightwillowTree(x,y,z){
    for(var i=0;i<5;i++){
        for(var b=0;b<3;b++){
            for(var k=0;k<5;k++){
                if(World.getBlockID(x-2+i,y+2+b,z-2+k)==0)World.setBlock(x-2+i,y+2+b,z-2+k,BlockID.blightwillowleaves,0);
            }
        }
    }
    for(var i=0;i<5;i++){
        if(World.getBlockID(x,y+i,z)==0||World.getBlockID(x,y+i,z)==BlockID.blightwillowleaves)World.setBlock(x,y+i,z,BlockID.blightwillowLog,0);
    }
    World.setBlock(x+1,y+5,z,BlockID.blightwillowleaves,0);
    World.setBlock(x+1,y+6,z,BlockID.blightwillowleaves,0);
    World.setBlock(x-1,y+5,z,BlockID.blightwillowleaves,0);
    World.setBlock(x-1,y+6,z,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+5,z,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+6,z,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+5,z+1,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+6,z+1,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+5,z-1,BlockID.blightwillowleaves,0);
    World.setBlock(x,y+6,z-1,BlockID.blightwillowleaves,0);   
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.blightwillowSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.blightwillowSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
Callback.addCallback("GenerateChunk", function(a,b){
    for(var i = 0; i < 19; i++){
     d=GenerationUtils.randomCoords(a,b,100,150);
      for(var k=100;k<150;k++){
       if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
        for(var q=1;q<10;q++){
         if(World.getBlockID(d.x,k+q,d.z)!=0){
blightwillowTree(d.x,k+1,d.z);             
return}
}
return}
}
}
});
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("blightwillowSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == 2){
        World.setBlock(place.x, place.y, place.z, BlockID.blightwillowSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.blightwillowSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockAether){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
                        blightwillowTree(this.x,this.y,this.z);
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
                    blightwillowTree(this.x,this.y,this.z);
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });




// file: trees/frostpine.js

var BLOCK_TYPE_LEAVES = Block.createSpecialType({
    base: 18,
    destroytime: 0.2,
});


function destroyLeaves(x,y,z){
    var max = 0;
    if(World.getBlockID(x, y+1, z)==BlockID.frostpineLeaves){max = 4;}
    for(var yy = y; yy <= y+max; yy++){
        for(var xx = x-2; xx <= x+2; xx++){
            for(var zz = z-2; zz <= z+2; zz++){
                if(World.getBlockID(xx, yy, zz)==BlockID.frostpineLeaves){
                    if(Math.random() < .075){
                        World.drop(xx, yy, zz, ItemID.frostpineSapling, 1, 0);
                    }
                    World.setBlock(xx, yy, zz, 0);
                }
            }
        }
    }
}

IDRegistry.genBlockID("frostpineLog");
Block.createBlock("frostpineLog", [
    {name: "Frostpine Log", texture: [["frostpine_log_top", 0], ["frostpine_log_top", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0], ["frostpine_log_side", 0]], inCreative: true}
]);

IDRegistry.genBlockID("plankFrostpine");
Block.createBlock("plankFrostpine", [
    {name: "frostpine Planks", texture: [["frostpine_planks", 0]], inCreative: true}
]);

Block.registerDropFunction("frostpineLog", function(coords, blockID){
    destroyLeaves(coords.x, coords.y, coords.z);
    return [[blockID, 1, 0]];
});
Block.setDestroyTime(BlockID.frostpineLog, 2);
ToolAPI.registerBlockMaterial(BlockID.frostpineLog, "wood");

IDRegistry.genBlockID("frostpineLeaves");
Block.createBlock("frostpineLeaves", [
    {name: "frostpine Leaves", texture: [["frostpine_leaves", 0]], inCreative: true}
], BLOCK_TYPE_LEAVES);
Block.registerDropFunction("frostpineLeaves", function(){
    if(Math.random() < .075){
        return [[ItemID.frostpineSapling, 1, 0]]
    }
    else {
        return [];
    }
});
ToolAPI.registerBlockMaterial(BlockID.frostpineLeaves, "plant");



IDRegistry.genBlockID("frostpineSapling");
Block.createBlock("frostpineSapling", [{name: "Frostpine Tree Sapling", texture: [["frostpine_sapling", 0]], inCreative: false}]);
Block.setBlockShape(BlockID.frostpineSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.002, z: 0.999});
Block.registerDropFunction("frostpineSapling", function(){
    return [[ItemID.frostpineSapling, 1, 0]];
});

IDRegistry.genItemID("frostpineSapling");
Item.createItem("frostpineSapling", "Frostpine Tree Sapling", {name: "frostpine_sapling", data: 0});



BlockRenderer.addRenderCallback(BlockID.frostpineSapling, function(api, coords, block) {

var box = BlockID.frostpineSapling;

api.renderBoxId(coords.x, coords.y, coords.z, .499, 0, 0, .501, 0.90, 1, box, 0);
api.renderBoxId(coords.x, coords.y, coords.z, 0, 0, .499, 1, 0.90, .501, box, 0);

                 
});
BlockRenderer.enableCustomRender(BlockID.frostpineSapling);



ToolAPI.registerBlockMaterial(BlockID.frostpineSapling, "plant");

var FtreeGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generateFtree:function(crds, block){
        var block = {
            stik: BlockID.frostpineLog,
            leaves: BlockID.frostpineLeaves
        }
        if(this.random()){
            var a = [];            
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+5, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+2, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+2, crds.z-2, block.leaves);
            }
            if(!this.random()){//2 version may be 32 versions of structure
            this.p(crds.x, crds.y, crds.z, block.stik);
            this.p(crds.x, crds.y+1, crds.z, block.stik);
            this.p(crds.x, crds.y+2, crds.z, block.stik);
            this.p(crds.x, crds.y+3, crds.z, block.stik);
            this.p(crds.x, crds.y+4, crds.z, block.stik);
            this.p(crds.x, crds.y+5, crds.z, block.stik);
            
            //up2
            this.p(crds.x, crds.y+6, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+6, crds.z, block.leaves);
            this.p(crds.x, crds.y+6, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+6, crds.z-1, block.leaves);
            //up1
            this.p(crds.x+1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+5, crds.z, block.leaves);
            this.p(crds.x, crds.y+5, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+5, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+5, crds.z+1, block.leaves);
            //medium2
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+4, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+2, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+4, crds.z-2, block.leaves);
            //medium1
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);           
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x+2, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+2, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-1, crds.y+3, crds.z-2, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z+1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-1, block.leaves);
            this.p(crds.x-2, crds.y+3, crds.z-2, block.leaves);
            }
    }
}

Callback.addCallback("ItemUse",function(crd,item){
    pl=crd.relative;
    if(item.id==ItemID.frostpineSapling&&World.getBlockID(pl.x,pl.y-1,pl.z)==BlockID.grassblockAether){
        World.setBlock(pl.x,pl.y,pl.z,BlockID.frostpineSapling,0);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});
    
/*==Перенести на рандом тик==*/

Item.registerUseFunction("frostpineSapling", function(coords, item, tile){
    var place = coords.relative;
    var tile1 = World.getBlock(place.x, place.y, place.z);
    var tile2 = World.getBlock(place.x, place.y - 1, place.z);
    
    if (GenerationUtils.isTransparentBlock(tile1.id) && tile2.id == BlockID.grassblockFrostpine){
        World.setBlock(place.x, place.y, place.z, BlockID.frostpineSapling);
        World.addTileEntity(place.x, place.y, place.z);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
    }
});

TileEntity.registerPrototype(BlockID.frostpineSapling,{
    defaultValues:{
        age:0
    },
    tick: function(){
            if(!this.data.age)this.data.age=0;
            this.data.age++;
                if (World.getBlockID(this.x, this.y - 1, this.z)!=BlockID.grassblockFrostpine){
                    World.destroyBlock(this.x, this.y, this.z, true);
                }
                if (this.data.age>1000&&Math.random()<0.3){
                        World.destroyBlock(this.x,this.y,this.z,false);
            FtreeGenerationHelper.generateFtree({x: this.x, y: this.y, z: this.z});
                    }
            },  
            click: function(id, count, data){
                if (id == 351 && data == 15){
                    World.destroyBlock(this.x,this.y,this.z,false);
            FtreeGenerationHelper.generateFtree({x: this.x, y: this.y, z: this.z});
                    Player.setCarriedItem(id, count - 1, data);
                }
            }
    });




// file: items/tools/skyroot.js

importLib("ToolType", "*");

IDRegistry.genItemID("skyrootSword");
Item.createItem("skyrootSword", "Skyroot Sword", {name: "skyroot_sword", meta: 1}, {stack: 1});
 
IDRegistry.genItemID("skyrootShovel");
Item.createItem("skyrootShovel", "Skyroot Shovel", {name: "skyroot_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootPickaxe");
Item.createItem("skyrootPickaxe", "Skyroot Pickaxe", {name: "skyroot_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootAxe");
Item.createItem("skyrootAxe", "Skyroot Axe", {name: "skyroot_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("skyrootCrosb");
Item.createItem("skyrootCrosb", "Skyroot Crosbow", {name: "skyroot_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("skyrootB");
Item.createItem("skyrootB", "Skyroot Bolt", {name: "skyroot_bolt", meta: 0});

ToolAPI.addToolMaterial("skyrootsw", {durability: 60, level: 2, efficiency: 1, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("skyrootsh", {durability: 60, level: 2, efficiency: 1, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("skyrootpi", {durability: 63, level: 2, efficiency: 1, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("skyrootaxe", {durability: 61, level: 2, efficiency: 1, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("skyrootcb", {durability: 64, level: 2, efficiency: 1, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.skyrootSword, "skyrootsw", ToolType.sword);
Item.setToolRender(ItemID.skyrootSword, true);

ToolAPI.setTool(ItemID.skyrootShovel, "skyrootsh", ToolType.shovel);
Item.setToolRender(ItemID.skyrootShovel, true);

ToolAPI.setTool(ItemID.skyrootPickaxe, "skyrootpi", ToolType.pickaxe);
Item.setToolRender(ItemID.skyrootPickaxe, true);

ToolAPI.setTool(ItemID.skyrootAxe, "skyrootaxe", ToolType.axe);
Item.setToolRender(ItemID.skyrootAxe, true);

ToolAPI.setTool(ItemID.skyrootCrosb, "skyrootcb", ToolType.sword);
Item.setToolRender(ItemID.skyrootCrosb, true);

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

ToolAPI.addToolMaterial("zanitecb", {durability: 258, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("zaniteCrosb");
Item.createItem("zaniteCrosb", "Zanite Crosbow", {name: "zanite_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("zaniteB");
Item.createItem("zaniteB", "Zanite Bolt", {name: "zanite_bolt", meta: 0}, {stack: 64});

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

ToolAPI.addToolMaterial("zanitesw", {durability: 251, level: 3, efficiency: 3, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("zanitesh", {durability: 251, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("zanitepi", {durability: 251, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("zaniteaxe", {durability: 251, level: 3, efficiency: 6, damage: 4, enchantability: 14});


ToolAPI.setTool(ItemID.zaniteSword, "zanitesw", ToolType.sword);
Item.setToolRender(ItemID.zaniteSword, true);

ToolAPI.setTool(ItemID.zaniteShovel, "zanitesh", ToolType.shovel);
Item.setToolRender(ItemID.zaniteShovel, true);

ToolAPI.setTool(ItemID.zanitePickaxe, "zanitepi", ToolType.pickaxe);
Item.setToolRender(ItemID.zanitePickaxe, true);

ToolAPI.setTool(ItemID.zaniteAxe, "zaniteaxe", ToolType.axe);
Item.setToolRender(ItemID.zaniteAxe, true);


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
Item.createItem("gravititeCrosb", "Gravitite Crosbow", {name: "gravitite_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("gravititeB");
Item.createItem("gravititeB", "Gravitite Bolt", {name: "gravitite_bolt", meta: 0}, {stack: 64});

//งงอะ\tool matireals
ToolAPI.addToolMaterial("gravititesw", {durability: 1129, level: 5, efficiency: 4, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("gravititesh", {durability: 1562, level: 4, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("gravititepi", {durability: 1568, level: 4, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("gravititeaxe", {durability: 1562, level: 4, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("gravititecb", {durability: 1570, level: 4, efficiency: 1, damage: 2, enchantability: 14});

ToolAPI.setTool(ItemID.gravititeSword, "gravititesw", ToolType.sword);
Item.setToolRender(ItemID.gravititeSword, true);

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.gravititeSword){
if(Entity.getType(victim)== 32 || Entity.getType(victim)== 33 || Entity.getType(victim)== 44 || Entity.getType(victim)== 41 || Entity.getType(victim)== 34 || Entity.getType(victim)== 35 || Entity.getType(victim)== 38 || Entity.getType(victim)==36){    
var pos = Entity.getPosition(victim);
Entity.addVelocity(victim,pos.x, pos.y+18, pos.z);
   }
 }
});

ToolAPI.setTool(ItemID.gravititeShovel, "gravititesh", ToolType.shovel);
Item.setToolRender(ItemID.gravititeShovel, true);

ToolAPI.setTool(ItemID.gravititePickaxe, "gravititepi", ToolType.pickaxe);
Item.setToolRender(ItemID.gravititePickaxe, true);

ToolAPI.setTool(ItemID.gravititeAxe, "gravititeaxe", ToolType.axe);
Item.setToolRender(ItemID.gravititeAxe, true);

ToolAPI.setTool(ItemID.gravititeAxe, "gravititecb", ToolType.axe);
Item.setToolRender(ItemID.gravititeAxe, true);

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
], ['a', ItemID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.plateGravitite, 0]);




// file: items/tools/arkenium.js

IDRegistry.genItemID("arkeniumSword");
Item.createItem("arkeniumSword", "Arkenium Sword", {name: "arkenium_sword", meta: 0}, {stack: 1});

IDRegistry.genItemID("arkeniumSabber");
Item.createItem("arkeniumSabber", "Arkenium Saber", {name: "arkenium_saber", meta: 0}, {stack: 1});

IDRegistry.genItemID("arkeniumShovel");
Item.createItem("arkeniumShovel", "Arkenium Shovel", {name: "arkenium_shovel", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumPickaxe");
Item.createItem("arkeniumPickaxe", "Arkenium Pickaxe", {name: "arkenium_pickaxe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumAxe");
Item.createItem("arkeniumAxe", "Arkenium Axe", {name: "arkenium_axe", meta: 1}, {stack: 1});

IDRegistry.genItemID("arkeniumCrosb");
Item.createItem("arkeniumCrosb", "Arkenium Crosbow", {name: "arkenium_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("arkeniumBolt");
Item.createItem("arkeniumBolt", "Arkenium Bolt", {name: "arkenium_bolt", meta: 0}, {stack: 64});

//งงอะ
ToolAPI.addToolMaterial("arkeniumsw", {durability: 251, level: 4, efficiency: 3, damage: 7, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsab", {durability: 216, level: 4, efficiency: 3, damage: 8, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumsh", {durability: 221, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumpi", {durability: 228, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("arkeniumaxe", {durability: 252, level: 3, efficiency: 6, damage: 4, enchantability: 14});

ToolAPI.addToolMaterial("arkeniumcb", {durability: 256, level: 4, efficiency: 3, damage: 4, enchantability: 14});

ToolAPI.setTool(ItemID.arkeniumSword, "arkeniumsw", ToolType.sword);
Item.setToolRender(ItemID.arkeniumSword, true);

ToolAPI.setTool(ItemID.arkeniumSabber, "arkeniumsab", ToolType.sword);
Item.setToolRender(ItemID.arkeniumSabber, true);

ToolAPI.setTool(ItemID.arkeniumShovel, "arkeniumsh", ToolType.shovel);
Item.setToolRender(ItemID.arkeniumShovel, true);

ToolAPI.setTool(ItemID.arkeniumPickaxe, "arkeniumpi", ToolType.pickaxe);
Item.setToolRender(ItemID.arkeniumPickaxe, true);

ToolAPI.setTool(ItemID.arkeniumAxe, "arkeniumaxe", ToolType.axe);
Item.setToolRender(ItemID.arkeniumAxe, true);

ToolAPI.setTool(ItemID.arkeniumAxe, "arkeniumcb", ToolType.sword);
Item.setToolRender(ItemID.arkeniumCrosb, true);

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
6
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
], ['a', BlockID.plateArkenium, 0, 'b', ItemID.stickSkyroot, 0, 'c', 287, 0]);




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
Item.createItem("holystoneCrosb", "Holystone Crosbow", {name: "holystone_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("holystoneB");
Item.createItem("holystoneB", "Holystone Bolt", {name: "holystone_bolt", meta: 0}, {stack: 64});

//งงอะ
ToolAPI.addToolMaterial("holystonesw", {durability: 251, level: 4, efficiency: 3, damage: 3, enchantability: 14});
ToolAPI.addToolMaterial("holystonesh", {durability: 221, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("holystonepi", {durability: 228, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("holystoneaxe", {durability: 252, level: 3, efficiency: 6, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("holystonecb", {durability: 256, level: 2, efficiency: 1, damage: 2, enchantability: 14});


ToolAPI.setTool(ItemID.holystoneSword, "holystonesw", ToolType.sword);
Item.setToolRender(ItemID.holystoneSword, true);

ToolAPI.setTool(ItemID.holystoneShovel, "holystonesh", ToolType.shovel);
Item.setToolRender(ItemID.holystoneShovel, true);

ToolAPI.setTool(ItemID.holystonePickaxe, "holystonepi", ToolType.pickaxe);
Item.setToolRender(ItemID.holystonePickaxe, true);

ToolAPI.setTool(ItemID.holystoneAxe, "holystoneaxe", ToolType.axe);
Item.setToolRender(ItemID.holystonePickaxe, true);

ToolAPI.setTool(ItemID.holystoneCrosb, "holystonecb", ToolType.sword);
Item.setToolRender(ItemID.holystoneCrosb, true);

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
], ['a', BlockID.stickSkyroot, 0, 'b', 288, 0, 'c', BlockID.Holystone, 0]);
});




// file: items/tools/vampire.js

IDRegistry.genItemID("vampireSword");
Item.createItem("vampireSword", "Vampire Sword", {name: "vampire_blade", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("vampiresw", {durability: 1000, level: 4, efficiency: 4, damage: 4, enchantability: 14});
ToolAPI.addToolMaterial("vampirecb", {durability: 1024, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("vampireCrosb");
Item.createItem("vampireCrosb", "Vampire Crosbow", {name: "vampire_crossbow", meta: 0}, {stack: 1});

IDRegistry.genItemID("vampireB");
Item.createItem("vampireB", "Vampire Bolt", {name: "scatterglass_bolt", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.vampireCrosb, "vampirecb", ToolType.sword);
Item.setToolRender(ItemID.vampireCrosb, true);

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

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.vampireSword){
Entity.addEffect(victim, 19, 1, 500, false,false);
Entity.addEffect(attacker, 10, 1, 500, false,false);    
}
});

ToolAPI.setTool(ItemID.vampireSword, "vampiresw", ToolType.sword);
Item.setToolRender(ItemID.vampireSword, true);

IDRegistry.genItemID("holySword");
Item.createItem("holySword", "Holy Sword", {name: "holy_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("holysw", {durability: 503, level: 4, efficiency: 4, damage: 4, enchantability: 14});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.holySword){
if(Entity.getType(victim)== 32 || Entity.getType(victim)== 44 || Entity.getType(victim)== 34 || Entity.getType(victim)==36) {    
Entity.addEffect(victim, 6, 4, 500, false,false);
   }
 }
});
ToolAPI.setTool(ItemID.holySword, "holysw", ToolType.sword);
Item.setToolRender(ItemID.holySword, true);

IDRegistry.genItemID("flamingSword");
Item.createItem("flamingSword", "Flaming Sword", {name: "flaming_sword", meta: 0}, {stack: 1});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.flamingSword){
Entity.setFire(victim, 800);
}
});

ToolAPI.setTool(ItemID.flamingSword, "holysw", ToolType.sword);
Item.setToolRender(ItemID.flamingSword, true);

IDRegistry.genItemID("lightingSword");
Item.createItem("lightingSword", "Lighting Sword", {name: "lightning_sword", meta: 0}, {stack: 1});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.lightingSword){
var pos = Entity.getPosition(victim);      
Entity.spawn(pos.x, pos.y, pos.z, 93);
}
});

ToolAPI.setTool(ItemID.lightingSword, "holysw", ToolType.sword);
Item.setToolRender(ItemID.lightingSword, true);
/*
IDRegistry.genItemID("lightingKnife");
Item.createThrowableItem("lightingKnife", "Lighting k ife", {name: "lightning_knife", meta: 0}, {stack: 1});

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
});*/

IDRegistry.genItemID("pigsSword");
Item.createItem("pigsSword", "Pig Slayer", {name: "pig_slayer", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("pigssw", {durability: 350, level: 4, efficiency: 4, damage: 6, enchantability: 14});

Callback.addCallback("EntityHurt", function (attacker, victim, damage) { 
if(Player.getCarriedItem().id==ItemID.pigsSword){
if(Entity.getType(victim)== 14 || Entity.getType(victim)== 17 || Entity.getType(victim)== 13 || Entity.getType(victim)==18 || Entity.getType(victim)==28 || Entity.getType(victim)==22 || Entity.getType(victim)==11 || Entity.getType(victim)==16 || Entity.getType(victim)==10) {    
Entity.addEffect(victim, 7, 5, 560, false,false);
   }
 }
});

ToolAPI.setTool(ItemID.pigsSword, "pigssw", ToolType.sword);
Item.setToolRender(ItemID.pigsSword, true);




// file: items/tools/candy.js

IDRegistry.genItemID("candySword");
Item.createItem("candySword", "Candy Sword", {name: "candy_cane_sword", meta: 0}, {stack: 1});
ToolAPI.addToolMaterial("candysw", {durability: 65, level: 2, efficiency: 2, damage: 5, enchantability: 14});

ToolAPI.setTool(ItemID.candySword, "candysw", ToolType.sword);
Item.setToolRender(ItemID.candySword, true);

Recipes.addShaped({id: ItemID.candySword, count: 1, data: 0}, [
    "a",
    "a",
    "b"
], ['a', ItemID.candyCane, 0, 'b', ItemID.candyCorn, 0]);




// file: items/tools/valkiria.js

IDRegistry.genItemID("valkiriaSword");
Item.createItem("valkiriaSword", "Valkyrie Lance", {name: "valkyrie_lance", meta: 0}, {stack: 1});

IDRegistry.genItemID("valkiriaShovel");
Item.createItem("valkiriaShovel", "Valkyrie Shovel", {name: "valkyrie_shovel", meta: 0}, {stack: 1});

IDRegistry.genItemID("valkiriaPickaxe");
Item.createItem("valkiriaPickaxe", "Valkyrie Pickaxe", {name: "valkyrie_pickaxe", meta: 0}, {stack: 1});

IDRegistry.genItemID("valkiriaAxe");
Item.createItem("valkiriaAxe", "Valkyrie Axe", {name: "valkyrie_axe", meta: 0}, {stack: 1});

//LOL
ToolAPI.addToolMaterial("valkyriesw", {durability: 1001, level: 4, efficiency: 3, damage: 6, enchantability: 14});
ToolAPI.addToolMaterial("valkyriesh", {durability: 1562, level: 3, efficiency: 6, damage: 1, enchantability: 14});
ToolAPI.addToolMaterial("valkyriepi", {durability: 1568, level: 3, efficiency: 6, damage: 2, enchantability: 14});
ToolAPI.addToolMaterial("valkyrieaxe", {durability: 1562, level: 3, efficiency: 6, damage: 6, enchantability: 14});


ToolAPI.setTool(ItemID.valkiriaSword, "valkyriesw", ToolType.sword);
Item.setToolRender(ItemID.valkiriaSword, true);

ToolAPI.setTool(ItemID.valkiriaShovel, "valkyriesh", ToolType.shovel);
Item.setToolRender(ItemID.valkiriaShovel, true);

ToolAPI.setTool(ItemID.valkiriaPickaxe, "valkyriepi", ToolType.pickaxe);
Item.setToolRender(ItemID.valkiriaPickaxe, true);

ToolAPI.setTool(ItemID.valkiriaAxe, "valkyrieaxe", ToolType.axe);
Item.setToolRender(ItemID.valkiriaAxe, true);




// file: trees/nest.js

var nesstGenerationHelper = {
    p: function(x, y, z, id){
        World.setBlock(x, y, z, id, 0);
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
    generateNest:function(crds, block){
        var block = {
            nest: BlockID.nestSkyroot
        }
        if(this.random()){
            var a = [];
            //start
            this.p(crds.x, crds.y, crds.z, block.nest);
            //x1
            this.p(crds.x+1, crds.y, crds.z, block.nest);
            this.p(crds.x-1, crds.y, crds.z, block.nest);
            this.p(crds.x, crds.y, crds.z+1, block.nest);
            this.p(crds.x, crds.y, crds.z-1, block.nest);
            //diagh 1
            this.p(crds.x+1, crds.y, crds.z+1, block.nest);
            this.p(crds.x-1, crds.y, crds.z-1, block.nest);
            this.p(crds.x+1, crds.y, crds.z-1, block.nest);
            this.p(crds.x-1, crds.y, crds.z+1, block.nest);
            //x2(1)
            this.p(crds.x+2, crds.y+1, crds.z, block.nest);
            this.p(crds.x-2, crds.y+1, crds.z, block.nest);
            this.p(crds.x, crds.y+1, crds.z+2, block.nest);
            this.p(crds.x, crds.y+1, crds.z-2, block.nest);
            //x2(2)
            this.p(crds.x+2, crds.y+1, crds.z+1, block.nest);
            this.p(crds.x+2, crds.y+1, crds.z-1, block.nest);
            this.p(crds.x-2, crds.y+1, crds.z+1, block.nest);
            this.p(crds.x-2, crds.y+1, crds.z-1, block.nest);
            //x3(1)
            this.p(crds.x+1, crds.y+1, crds.z+2, block.nest);
            this.p(crds.x-1, crds.y+1, crds.z+2, block.nest);
            this.p(crds.x+1, crds.y+1, crds.z-2, block.nest);
            this.p(crds.x-1, crds.y+1, crds.z-2, block.nest);
            //x3(2)
            this.p(crds.x+3, crds.y+2, crds.z, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z, block.nest);
            this.p(crds.x, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x, crds.y+2, crds.z-3, block.nest);
            //#3(1)
            this.p(crds.x+3, crds.y+2, crds.z+1, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z-1, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z+1, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z-1, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z+2, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z-2, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z+2, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z-2, block.nest);
            //#3(2)
            this.p(crds.x+1, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-1, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x+1, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x-1, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x+2, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-2, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x+2, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x-2, crds.y+2, crds.z-3, block.nest);
            //diagh 2
            this.p(crds.x+3, crds.y+2, crds.z-3, block.nest);
            this.p(crds.x+3, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z+3, block.nest);
            this.p(crds.x-3, crds.y+2, crds.z-3, block.nest);
            }            
    }
}

Callback.addCallback("GenerateChunk", function(a,b){
for(var i = 0; i < 1; i++){
 d=GenerationUtils.randomCoords(a,b,100,146);
  for(var k=100;k<146;k++){
   if(World.getBlockID(d.x,k,d.z)==BlockID.grassblockAether){
     for(var q=1;q<10;q++){
      if(World.getBlockID(d.x,k+q,d.z)!=0){
nesstGenerationHelper.generateNest({x: d.x, y: k, z: d.z});          
return}
}
return}
}
}
});




// file: items/armors/zanite.js

IDRegistry.genItemID("zaniteHelmet");
Item.createArmorItem("zaniteHelmet", "Zanite Helmet", {name: "zanite_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/Zanite_1.png"});

IDRegistry.genItemID("zaniteChestplate");
Item.createArmorItem("zaniteChestplate", "Zanite Chestplate", {name: "zanite_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/Zanite_1.png"});

IDRegistry.genItemID("zaniteLeggings");
Item.createArmorItem("zaniteLeggings", "Zanite Leggings", {name: "zanite_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/Zanite_2.png"});

IDRegistry.genItemID("zaniteBoots");
Item.createArmorItem("zaniteBoots", "Zanite Boots", {name: "zanite_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/Zanite_1.png"});

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
Item.createArmorItem("arkeniumHelmet", "Arkenium Helmet", {name: "arkenium_helmet"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/Arkenium_1.png"});

IDRegistry.genItemID("arkeniumChestplate");
Item.createArmorItem("arkeniumChestplate", "Arkenium Chestplate", {name: "arkenium_chestplate"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/Arkenium_1.png"});

IDRegistry.genItemID("arkeniumLeggings");
Item.createArmorItem("arkeniumLeggings", "Arkenium Leggings", {name: "arkenium_leggings"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/Arkenium_2.png"});

IDRegistry.genItemID("arkeniumBoots");
Item.createArmorItem("arkeniumBoots", "Arkenium Boots", {name: "arkenium_boots"}, {type: "boots", armor: 2, durability: 176, texture: "armor/Arkenium_1.png"});

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
Item.createArmorItem("gravititeHelmet", "Gravitite Helmet", {name: "gravitite_helmet"}, {type: "helmet", armor: 5, durability: 1001, texture: "armor/Gravitite_1.png"});

IDRegistry.genItemID("gravititeChestplate");
Item.createArmorItem("gravititeChestplate", "Gravitite Chestplate", {name: "gravitite_chestplate"}, {type: "chestplate", armor: 7, durability: 1562, texture: "armor/Gravitite_1.png"});

IDRegistry.genItemID("gravititeLeggings");
Item.createArmorItem("gravititeLeggings", "Gravitite Leggings", {name: "gravitite_leggings"}, {type: "leggings", armor: 6, durability: 1520, texture: "armor/Gravitite_2.png"});

IDRegistry.genItemID("gravititeBoots");
Item.createArmorItem("gravititeBoots", "Gravitite Boots", {name: "gravitite_boots"}, {type: "boots", armor: 4, durability: 1342, texture: "armor/Gravitite_1.png"});

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

//PHEONIX
IDRegistry.genItemID("phoenixHelmet");
Item.createArmorItem("phoenixHelmet", "Phoenix Helmet", {name: "phoenix_helmet"}, {type: "helmet", armor: 2, durability: 1001, texture: "armor/Phoenix_1.png"});

IDRegistry.genItemID("phoenixChestplate");
Item.createArmorItem("phoenixChestplate", "Phoenix Chestplate", {name: "phoenix_chestplate"}, {type: "chestplate", armor: 5, durability: 1562, texture: "armor/Phoenix_1.png"});

IDRegistry.genItemID("phoenixLeggings");
Item.createArmorItem("phoenixLeggings", "Phoenix Leggings", {name: "phoenix_leggings"}, {type: "leggings", armor: 4, durability: 1520, texture: "armor/Phoenix_2.png"});

IDRegistry.genItemID("phoenixBoots");
Item.createArmorItem("phoenixBoots", "Phoenix Boots", {name: "phoenix_boots"}, {type: "boots", armor: 2, durability: 1342, texture: "armor/Phoenix_1.png"});

//OBSIDIAN
IDRegistry.genItemID("obsidianHelmet");
Item.createArmorItem("obsidianHelmet", "Obsidian Helmet", {name: "obsidian_helmet"}, {type: "helmet", armor: 2, durability: 1234, texture: "armor/Obsidian_1.png"});

IDRegistry.genItemID("obsidianChestplate");
Item.createArmorItem("obsidianChestplate", "Obsidian Chestplate", {name: "obsidian_chestplate"}, {type: "chestplate", armor: 6, durability: 1666, texture: "armor/Obsidian_1.png"});

IDRegistry.genItemID("obsidianLeggings");
Item.createArmorItem("obsidianLeggings", "Obsidian Leggings", {name: "obsidian_leggings"}, {type: "leggings", armor: 5, durability: 1524, texture: "armor/Obsidian_2.png"});

IDRegistry.genItemID("obsidianBoots");
Item.createArmorItem("obsidianBoots", "Obsidian Boots", {name: "obsidian_boots"}, {type: "boots", armor: 2, durability: 1353, texture: "armor/Obsidian_1.png"});

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




// file: projectiles.js

//golden
ToolAPI.addToolMaterial("goldends", {durability: 192, level: 2, efficiency: 1, damage: 2, enchantability: 14});

IDRegistry.genItemID("goldenDshoot");
Item.createItem("goldenDshoot", "Golden dart shooter", {name: "golden_dart_shooter", meta: 0}, {stack: 1});

IDRegistry.genItemID("goldenD");
Item.createItem("goldenD", "Golden Dart", {name: "golden_dart", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.goldenD, count: 4, data: 0}, [
    " a ",
    " b ",
    " c "
], ['a', ItemID.goldAmber, 0, 'b', ItemID.stickSkyroot, 0, 'c', 288, 0]);

ToolAPI.setTool(ItemID.goldenDshoot, "goldends", ToolType.sword);
Item.setToolRender(ItemID.goldenDshoot, true);

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
Item.createItem("poisonDshoot", "Poison dart shooter", {name: "poison_dart_shooter", meta: 0}, {stack: 1});

IDRegistry.genItemID("poisonD");
Item.createItem("poisonD", "Poison Dart", {name: "poison_dart", meta: 0}, {stack: 64});

Recipes.addShaped({id: ItemID.poisonD, count: 4, data: 0}, [
    " a ",
    " b "
], ['a', ItemID.goldenD, 0, 'b', ItemID.flowerAechor, 0]);

ToolAPI.setTool(ItemID.poisonDshoot, "poisonds", ToolType.sword);
Item.setToolRender(ItemID.poisonDshoot, true);

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
Item.createItem("encantedDshoot", "Enchanted dart shooter", {name: "enchanted_dart_shooter", meta: 0}, {stack: 1});

IDRegistry.genItemID("encantedD");
Item.createItem("encantedD", "Enchanted Dart", {name: "enchanted_dart", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.encantedDshoot, "poisonds", ToolType.sword);
Item.setToolRender(ItemID.encantedDshoot, true);

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
Item.createItem("phoenixDshoot", "Phoenix dart shooter", {name: "phoenix_dart_shootter", meta: 0}, {stack: 1});

IDRegistry.genItemID("phoenixD");
Item.createItem("phoenixD", "Phoenix Dart", {name: "phoenix_dart", meta: 0}, {stack: 64});

ToolAPI.setTool(ItemID.phoenixDshoot, "goldends", ToolType.sword);
Item.setToolRender(ItemID.phoenixDshoot, true);

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

/*
//notch
ToolAPI.addToolMaterial("notchh", {durability: 999999999, level: 8, efficiency: 3, damage: 9, enchantability: 16});

IDRegistry.genItemID("NotchH");
Item.createItem("NotchH", "Notch Hammer", {name: "hammer_of_notch", meta: 0}, {stack: 1});

IDRegistry.genItemID("NotchHk");
Item.createItem("NotchHk", "Notch hamer part", {name: "hammer_of_notch_wave", meta: 1}, {stack: 64});

ToolAPI.setTool(ItemID.NotchH, "notchh", ToolType.sword);
Item.setToolRender(ItemID.NotchH, true);

Item.registerNoTargetUseFunction(="NotchH", function(item,coords){ 
shoot(Player.get(), Native.EntityType.SMALL_FIREBALL, 10, "hammer_ofnotch.png"); 
//Player.setCarriedItem(ItemID.goldenD, item.count-1, item.data); 
});
Callback.addCallback("DestroyBlockStart", function (coords, block, player){
if(Player.getCarriedItem().id==ItemID.NotchH){ 
  Game.prevent(); 
 } 
});*/




// file: dimension/aether.js

const SKY_COLOR = [0.4, 0.4, 0.5];
const FOG_COLOR = [0.3, 0.3, 0.5];

var Aether = new Dimension({
    name: "aether",
    
    generation: {
        layers: [
            // clouds
            {
                range: [89, 256],
                noise: {
                    octaves: {
                        count: 3,
                        weight: 0.7,
                        scale: [.02, .1, .02]
                    }
                },
                
                terrain: {
                    base: BlockID.AcoldAercloud
                }
            },
            
            // major islands
            { 
                range: [0, 225],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.014, .0275, .015]
                    }
                },
                
                gradient: [[0, -1], [.2, -.3], [0.5, .1], [.8, -.3], [1, -1]],
                
                terrain: {
                    base: BlockID.Holystone,
                    cover: {
                        height: 4,
                        top: BlockID.grassblockAether,
                        block: BlockID.dirtAether
                    }
                }
            },
        ],
        
        decoration: {
        // biome: 34   
        }
    },
    
    environment: {
        sky: SKY_COLOR,
        fog: FOG_COLOR
    },
    callbacks: {
       tick: function() { 
},
loaded: function() {
},
unloaded: function() {
}
    }
});


var AetherTransferSequence = new TransferSequence(Aether);
AetherTransferSequence.setPortalTimeout(40);

AetherTransferSequence.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

AetherTransferSequence.setLoadingScreenParams({
    texture: "hue_background"
});

PortalRegistry.newPortalBlock("aetherPortal", ["aether_portal", 0], AetherTransferSequence.getPortal(), {type: "u-plane", frameId: 4}, true);
AetherTransferSequence.setPortalTiles(BlockID.aetherPortal);





var shape = new PortalShape();
shape.setPortalId(BlockID.aetherPortal);
shape.setFrameIds(89);
shape.setMinSize(2, 3);

AetherTransferSequence.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == 373) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 89 || block.id == BlockID.aetherPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.aetherPortal, [4]);
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
Translation.addTranslation("Aether Portal", {ru: "Портал в рай"});
Translation.addTranslation("Aether Portal Active", {ru: "Активный портал в рай"});
Translation.addTranslation("Blue berry", {ru: "Голубика"});
Translation.addTranslation("Blue berry lollipop", {ru: "Голубичный чупачупс"});
Translation.addTranslation("Whynd berry", {ru: "Ягода ветров"});
Translation.addTranslation("Enchanted whynd berry", {ru: "Зачарованная ягода ветров"});
Translation.addTranslation("Orange", {ru: "Апельсин"});
Translation.addTranslation("Orange lollipop", {ru: "Апельсин карамелизованный"});
Translation.addTranslation("Enchanted berry", {ru: "Зачарованная ягода"});
Translation.addTranslation("Candy Cane", {ru: "Рождественская конфета"});
Translation.addTranslation("Candy Corn", {ru: "Желеобазная конфета"});
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
//Блоки
Translation.addTranslation("Aether Dirt", {ru: "Святая земля"});
Translation.addTranslation("Aether Grass", {ru: "Святой дерн"});
Translation.addTranslation("Holystone", {ru: "Святокамень"});
Translation.addTranslation("Holystone Bricks", {ru: "Святокаменные кирпичи"});
Translation.addTranslation("Faded Holystone Bricks", {ru: "Забытые святокаменные кирпичи"});
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
Translation.addTranslation("Agiosite bricks", {ru: "Агиоситовые кирпичи"});
Translation.addTranslation("Ferrosite", {ru: "Ферросит"});
Translation.addTranslation("Rusted ferrosite", {ru: "Ржавый ферросит"});
Translation.addTranslation("Ferrosite sand", {ru: "Ферроситовый песок"});
Translation.addTranslation("Highlands ice", {ru: "Святой лед"});
Translation.addTranslation("Ice stone", {ru: "Ледяной камень"});
Translation.addTranslation("Ice stone bricks", {ru: "Кирпичи из ледяного камня"});
Translation.addTranslation("Skyroot nest", {ru: "Святодеревянное гнездо"});
Translation.addTranslation("Valkyrie Grass", {ru: "Трава валькирий"});
Translation.addTranslation("Aechor Flower", {ru: "Ихоровый лепесток"});
Translation.addTranslation("Kirrid flowers", {ru: "Окрыленный лепесток"});
Translation.addTranslation("Quckskoil sand", {ru: "Ускоряющий песок"});
Translation.addTranslation("White apple", {ru: "Белое яблоко"});

Translation.addTranslation("Skyroot pillar", {ru: "Святодеревянная колонна"});
Translation.addTranslation("Skyroot Planks", {ru: "Святодеревянные доски"});
Translation.addTranslation("Skyroot base planks", {ru: "Святодеревянные базовые доски"});
Translation.addTranslation("Skyroot base pillar", {ru: "Святодеревянная базовая колонна"});
Translation.addTranslation("Skyroot floorboards", {ru: "Святодеревянные половицы"});
Translation.addTranslation("Skyroot tiles", {ru: "Святодеревянныая черепица"});
Translation.addTranslation("Skyroot tiles small", {ru: "Мелкая святодеревянная черепица"});

Translation.addTranslation("Holystone pillar", {ru: "Святокаменная колонна"});
Translation.addTranslation("Holystone base bricks", {ru: "Святокаменные базовые кирпичи"});
Translation.addTranslation("Holystone base pillar", {ru: "Святокаменная базовая колонна"});
Translation.addTranslation("Holystone capstone bricks", {ru: "Святокаменные капстоун кирпичи"});
Translation.addTranslation("Holystone capstone pillar", {ru: "Святокаменная капстоун колонна"});
Translation.addTranslation("Holystone flagstone bricks", {ru: "Святокаменные флагстоун кирпичи"});
Translation.addTranslation("Holystone headstone", {ru: "Святокаменные хедстоун кирпичи"});

Translation.addTranslation("Icestone pillar", {ru: "Ледокаменная колонна"});
Translation.addTranslation("Icestone base bricks", {ru: "Ледокаменные базовые кирпичи"});
Translation.addTranslation("Icestone base pillar", {ru: "Ледокаменная базовая колонна"});
Translation.addTranslation("Icestone capstone bricks", {ru: "Ледокаменные капстоун кирпичи"});
Translation.addTranslation("Icestone capstone pillar", {ru: "Ледокаменная капстоун колонна"});

Translation.addTranslation("Blightwillow Log", {ru: "Ужасное бревно ивы"});
Translation.addTranslation("Blightwillow Planks", {ru: "Ужасные доски ивы"});
Translation.addTranslation("blight willow Leaves", {ru: "Ужасная листва ивы"});
Translation.addTranslation("Blightwillow Skyroot Tree Sapling", {ru: "Ужасный саженец ивы"});

Translation.addTranslation("Golden Log", {ru: "Золотое бревно"});
Translation.addTranslation("golden Skyroot Leaves", {ru: "Золотые доски"});
Translation.addTranslation("golden Skyroot Leaves", {ru: "Золотая листва"});
Translation.addTranslation("gold Skyroot Tree Sapling", {ru: "Золотой саженец"});

Translation.addTranslation("Frostpine Log", {ru: "Морозное бревно"});
Translation.addTranslation("frostpine Planks", {ru: "Морозные доски"});
Translation.addTranslation("frostpine Leaves", {ru: "Морозныая листва"});
Translation.addTranslation("Frostpine Tree Sapling", {ru: "Морозный саженец"});

Translation.addTranslation("darkblue Skyroot Leaves", {ru: "Темно-голубая святая листва"});
Translation.addTranslation("Darkblue Skyroot Tree Sapling", {ru: "Темно-голубой святой саженец"});
Translation.addTranslation("Blue Skyroot Leaves", {ru: "Голубая святая листва"});
Translation.addTranslation("blue Skyroot Tree Sapling", {ru: "Голубой святой саженец"});

Translation.addTranslation("Skyroot Log", {ru: "Святое бревно"});
Translation.addTranslation("green Skyroot Leaves", {ru: "Святые доски"});
Translation.addTranslation("green Skyroot Tree Sapling", {ru: "Святая листва"});
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

Translation.addTranslation("tile.portal.aetherPortal", {ru: "Блок телепортации рая"});




