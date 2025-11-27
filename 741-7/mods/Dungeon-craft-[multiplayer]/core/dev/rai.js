
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

