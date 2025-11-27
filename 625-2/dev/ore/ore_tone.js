

NC.ore_tone_list = {};

NC.createToneOre = function(color,texture,rate){
IDRegistry.genBlockID(PREFIX + "ore_tone" + "_" + color);
Block.createBlock(PREFIX + "ore_tone" + "_" + color,[{name:"Tone Ore",texture: [[texture, 0]],inCreative: true
}]);

NC.ore_tone_list[BlockID[PREFIX + "ore_tone" + "_" + color]] = color;

Callback.addCallback("PreLoaded", function(){
NC.ovenMachine.registerRecipe(BlockID[PREFIX + "ore_tone" + "_" + color], rate);
});

Translation.addTranslation("Tone Ore", {zh: "音矿"});
Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
if(Math.random() < 0.002){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){

				World.setBlock(coords.x, coords.y+1, coords.z,BlockID[PREFIX + "ore_tone" + "_" + color]);
				World.addTileEntity(coords.x,coords.y+1,coords.z);
			}
		}
	}
});

(function(texture,color){

var render = new ICRender.Model();
 var model =   BlockRenderer.createModel();
model.addBox (5/16, 1/16, 5/16, 11/16,3/16, 11/16,[[texture, 0]]);
model.addBox (3/16, 3/16, 3/16, 13/16,13/16, 13/16,[[texture, 0]]);
model.addBox (5/16, 5/16, 1/16, 11/16,11/16, 3/16,[[texture, 0]]);
model.addBox (1/16, 5/16, 5/16, 3/16,11/16, 11/16,[[texture, 0]]);
model.addBox (5/16, 13/16, 5/16, 11/16,15/16, 11/16,[[texture, 0]]);
model.addBox (5/16, 5/16, 13/16, 11/16,11/16, 15/16,[[texture, 0]]);
model.addBox (13/16, 5/16, 5/16, 15/16,11/16, 11/16,[[texture, 0]]);

render.addEntry(model);

BlockRenderer.setStaticICRender(BlockID[PREFIX + "ore_tone" + "_" + color], -1, render);
ItemModel.getFor(BlockID[PREFIX + "ore_tone" + "_" + color], -1).setModel(render);

})(texture,color);

//Block.setBlockMaterial(PREFIX + "ore_tone",133,0);

NC.particleEmitter.setVelocity(0.3,0.3,0.3);
Block.setAnimateTickCallback(BlockID[PREFIX + "ore_tone" + "_" + color],function(x, y, z, id, data){
    for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});
Block.registerDropFunction(PREFIX + "ore_tone" + "_" + color, function(coords, id, data, diggingLevel, toolLevel){
    if(Player.getCarriedItem().id === ItemID[PREFIX + "tone_drill"]) return [[id,1,data]];
    return[]; 
});
return this;
};

NC
.createToneOre("green","emerald_block",0.15)
.createToneOre("purple","lapis_block",0.1)
.createToneOre("red","redstone_block",0.1)
.createToneOre("silver","iron_block",0.1)
.createToneOre("gold","gold_block",0.2)
.createToneOre("blue","diamond_block",0.25);
Callback.addCallback("PreLoaded", function(){
Recipes.addShaped({id: ItemID[PREFIX + "record_empty"], count: 1, data: 0}, [
		"xxx",
		"x x",
		"xxx"
], ['x', ItemID[PREFIX + "note_steel"], 0]);
});
