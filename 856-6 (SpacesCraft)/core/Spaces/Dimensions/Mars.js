var MarsPlains = new CustomBiome ("MarsPlains")
.setSkyColor(android.graphics.Color.rgb(255, 159, 0))
.setCoverBlock(BlockID.mars_stone, 0)
.setSurfaceBlock(BlockID.cobblestone_mars, 0)
.setFillingBlock(BlockID.cobblestone_mars, 0);
var Mars = new Dimensions.CustomDimension("Mars", 2001);
Mars.setSkyColor(255, 159, 0);
Mars.setFogColor(255, 159, 0);
Mars.setGenerator(Dimensions.newGenerator({
    biome: Mars.id,
    layers: [
    {
        minY: 0,
        maxY: 128,
         yConversion: [[1, -0.99], [0.8, -.99], [.9, -0.99], [0.4, -.4], [0, 0.8]
        ],
        material: {
            base: BlockID.cobblestone_mars,
            surface: {
                id: BlockID.cobblestone_mars,
                data: 0,
                width: 4
            },
            cover: BlockID.mars_stone
        },
        noise: {
            octaves: {
               count: 4,
               scale: 260,
               weight: 1.99
               }
        }
    },{ minY: 0,
      	maxY: 1,
      	material: {base: 7}
    }]
}));
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.computer_a) {
Dimensions.transfer(player, Mars.id);        
 }
});