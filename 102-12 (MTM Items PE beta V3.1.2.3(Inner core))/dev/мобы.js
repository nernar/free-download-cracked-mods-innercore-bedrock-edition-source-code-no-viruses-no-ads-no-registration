var ngo
var mz
var ms
var mc
var m
var o
var s
Item.registerUseFunctionForID(264, function(coords, item, entity){  
var coords = coords.relative;
 s= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 63);
 Entity.setRender(s, 3)
Entity.setSkin(s, "mob/кабан.png")
Entity.setMaxHealth (s, 1)
Entity.setHealth (s, 1)
});
Item.registerUseFunction("sozdmz", function(coords, item, entity){  
var coords = coords.relative;
var lol = parseInt(Math.random() * 3);
if(lol == 0)
{
 mz = Entity.spawn(coords.x+.5, coords.y, coords.z+.5, 32);
Entity.setSkin(mz, "mob/мзомби.png")
Entity.setMaxHealth (mz, 100)
Entity.setHealth (mz, 100)
}
if(lol == 1)
{
 mc = Entity.spawn(coords.x+.5, coords.y, coords.z+.5, 33);
Entity.setSkin(mc, "mob/мкрипер.png")
Entity.setMaxHealth (mc, 100)
Entity.setHealth (mc, 100)
}
if(lol == 2)
{
 ms = Entity.spawn(coords.x+.5, coords.y, coords.z+.5, 34);
Entity.setSkin(ms, "mob/мскелет.png")
Entity.setMaxHealth (ms, 100)
Entity.setHealth (ms, 100)
}
});
Item.registerUseFunction("sozdka", function(coords, item, entity){  
var coords = coords.relative;
 ngo= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 12);
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
});
Item.registerUseFunction("otsilka", function(coords, item, entity){  
var coords = coords.relative;
 o= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 33);
Entity.setSkin(o, "mob/крипер(отсылка).png")
Entity.setMaxHealth (o, 999)
Entity.setHealth (o, 999)
});
Item.registerUseFunction("sozdm", function(coords, item, entity){  
var coords = coords.relative;
 m= Entity.spawn(coords.x+0.5, coords.y, coords.z+0.5, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
});
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 61);
    var ra = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+ran, pos.y, pos.z-30,5+ra);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 2){
	if(Math.random() < .0001){
 ngo= Entity.spawn(pos.x, pos.y+1, pos.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
}
}
});
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 61);
    var ra = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+ran, pos.y, pos.z-30,5+ra);
			if((World.getBlockID(pos.x, pos.y, pos.z) == 12)&&(World.getBlockID(pos.x, pos.y+1, pos.z) == 0)&&(World.getBlockID(pos.x, pos.y+2, pos.z) == 0)&&(World.getBlockData(pos.x, pos.y, pos.z) == 0)){
	if(Math.random() < .0004){
 m= Entity.spawn(pos.x, pos.y+1, pos.z, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
}
}
});
Callback.addCallback("tick", function()
{
    var pos = Player.getPosition()
    var ran = parseInt(Math.random() * 61);
    var ra = parseInt(Math.random() * 61);
		pos = GenerationUtils.findSurface(pos.x-30.5+ran, pos.y, pos.z-30,5+ra);
			if(World.getBlockID(pos.x, pos.y, pos.z) == 243){
	if(Math.random() < .0002){
 ngo= Entity.spawn(pos.x, pos.y+1, pos.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 40)
Entity.setHealth (ngo, 40)
}
}
});
var drope = null;
ModAPI.addAPICallback("primal_api", function(api){
  drope = api;
});
Callback.addCallback("EntityDeath", function (ent) {
if(ent==ngo)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 2);
        
if (!drope)
{
     World.drop(coords.x, coords.y, coords.z, 334, 1+soul);
}
if (drope)
{
     World.drop(coords.x, coords.y, coords.z, ItemID.pelt_animal, 1+soul);
}
}
if(ent==o)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 64);
        
     World.drop(coords.x, coords.y, coords.z, 264, 1+soul);
}
if(ent==m)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 2);
     var sou = parseInt(Math.random() * 3);
        
    Game.prevent();
     World.drop(coords.x, coords.y, coords.z, 352, 1+soul);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_tkan, 1+sou);
     World.drop(coords.x, coords.y, coords.z, ItemID.gnilaia_kost, 1+sou);
}
if(ent==mz)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 5);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.meteoritovii_samorodok, 1+soul);
}
if(ent==ms)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 5);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.meteoritovii_samorodok, 1+soul);
}
if(ent==mc)
{
   var coords = Entity.getPosition(ent);
     var soul = parseInt(Math.random() * 5);
        
     World.drop(coords.x, coords.y, coords.z, ItemID.meteoritovii_samorodok, 1+soul);
}
});
var vishnia = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.01){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
 ngo= Entity.spawn(coords.x, coords.y+1, coords.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
			}
		}
	}
});
var vishnia = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.025){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 243)){
 ngo= Entity.spawn(coords.x, coords.y+1, coords.z, 12);
        Entity.setRender (ngo, 8)
Entity.setSkin(ngo, "mob/кабан.png")
Entity.setMaxHealth (ngo, 34)
Entity.setHealth (ngo, 34)
			}
		}
	}
});
var vishnia = [1,2,35,37,4,18,27,28,13,243];
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.03){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 12)&&(World.getBlockData(coords.x, coords.y, coords.z) == 0)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)&&(World.getBlockID(coords.x, coords.y+2, coords.z) == 0)){
 m= Entity.spawn(coords.x, coords.y+1, coords.z, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
			}
		}
	}
});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	if(Math.random() <0.06){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 200);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in vishnia ){
			if((World.getBiome((chunkX + 0.5) * 64, (chunkZ + 0.5) * 64)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 24)&&(World.getBlockID(coords.x, coords.y+1, coords.z) == 0)&&(World.getBlockID(coords.x, coords.y+2, coords.z) == 0)){
 m= Entity.spawn(coords.x, coords.y+1, coords.z, 47);
Entity.setSkin(m, "mob/мумия.png")
Entity.setMaxHealth (m, 40)
Entity.setHealth (m, 40)
			}
		}
	}
});