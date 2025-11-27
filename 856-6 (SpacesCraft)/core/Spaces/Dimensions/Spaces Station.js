/*const AIR_SPACES = Block.createSpecialType({
    solid: false,
    base: 0
});

IDRegistry.genBlockID("space_air");
Block.createBlock("space_air",[{name: "Space Air", texture: [["Space Void", 0]], inCreative: true} ], AIR_SPACES);
Translation.addTranslation("Space Air",{
ru: "Космический воздух"
});

var SPACES_AIR = new ICRender.CollisionShape();
var entry = SPACES_AIR.addEntry();
entry.addBox( 0, 0, 0, 0,0, 0) 
BlockRenderer.setCustomCollisionShape(BlockID.space_air, -1,SPACES_AIR);*/

/*var Spaces = new Dimensions.CustomDimension("Spaces", 2010);
Spaces.setSkyColor(.0, .0, .0);
Spaces.setFogColor(.0, .0, .0);
Spaces.setGenerator(Dimensions.newGenerator({
    layers: [
    {
        minY: 0,
        maxY: 128,
         yConversion: [[0, 0], [0, 0], 
        ],
        material: {
            base: 7,
        },
        noise: {
            octaves: {
               count: 1,
               scale: 0,
            },
        }     
    },{ minY: 0,
       maxY: 1,
       material: {base: 
       7
       	
       }
    }]
}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_c) {
Dimensions.transfer(player, Spaces.id);        
 }
});
*/ 
   /*Callback.addCallback('LevelDisplayed', function (dimensionId, id, player) {
if(dimensionId == Spaces.id){
	var region = BlockSource.getDefaultForActor(player);
    var place = coords.relative;
    region.setBlock(place.x, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x-1, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z-1, BlockID.deco_block);  
    region.setBlock(place.x-1, place.y-40, place.z-1, BlockID.deco_block);  
    region.setBlock(place.x+1, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z+1, BlockID.deco_block);  
    region.setBlock(place.x+1, place.y-40, place.z+1, BlockID.deco_block);  
    region.setBlock(place.x+1, place.y-40, place.z-1, BlockID.deco_block);  
    region.setBlock(place.x-1, place.y-40, place.z+1, BlockID.deco_block);  
    region.setBlock(place.x-2, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z-2, BlockID.deco_block);  
    region.setBlock(place.x+2, place.y-40, place.z, BlockID.deco_block);  
    region.setBlock(place.x, place.y-40, place.z+2, BlockID.deco_block);  
    region.setBlock(place.x-2, place.y-40, place.z-2, BlockID.deco_block);  
    region.setBlock(place.x+2, place.y-40, place.z+2, BlockID.deco_block);  
    Player.setPosition(coords.x, coords.y -38, coords.z);
}
});

*/