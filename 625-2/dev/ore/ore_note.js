NC.createNoteOre = function(texture){
IDRegistry.genBlockID(PREFIX + "ore_note");
Block.createBlock(PREFIX + "ore_note",[{name:"Note Ore",texture: [[texture, 0]],inCreative: true
}],"ore_tone");
Translation.addTranslation("Note Ore", {zh: "音符矿"});

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
if(Math.random() < 0.01){
		for(var i = 0; i < 1 + Math.random() * 6; i++){
			var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
			coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
			if(World.getBlockID(coords.x, coords.y, coords.z) == 2){

				World.setBlock(coords.x, coords.y+1, coords.z,BlockID[PREFIX + "ore_note"]);
				World.addTileEntity(coords.x,coords.y+1,coords.z);
			}
		}
	}
});


//Block.setBlockMaterial(PREFIX + "ore_tone",133,0);

NC.particleEmitter.setVelocity(0.3,0.3,0.3)
Block.setAnimateTickCallback(BlockID[PREFIX + "ore_note"],function(x, y, z, id, data){
   // for(let i = 0;i <= 3;i++)
    NC.particleEmitter.emit(36, ((1&255)<<24)|((220&255)<<16)|((20&255)<<8)|(60&255), x - 0.5 + Math.random(), y + 0.5 + Math.random(), z - 0.5 + Math.random(), x, y, z);
});
Block.registerDropFunction(PREFIX + "ore_note", function(coords, id, data, diggingLevel, toolLevel){
   // if(Player.getCarriedItem().id === ItemID[PREFIX + "tone_drill"]) return [[id,1,data]];
    return[
        [ItemID[PREFIX + "note"],Math.floor(Math.random()*3+2),0]
    ]; 
});
return this;
};
NC.createNoteOre("nc_lapis_block");