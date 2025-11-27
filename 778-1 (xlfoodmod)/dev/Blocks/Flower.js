Block.createSpecialType({
    base: 31,
    opaque: false,
    rendertype: 6,
    lightopacity: 0,
    destroytime: 0,
    sound: "grass"
}, "flower");

var Config = {
	"Vanilla_Flower": __config__.access("Generate.Vanilla_Flower"),
    "Grass": __config__.access("Generate.Grass")
};

IDRegistry.genItemID("vanilla_flower");
Item.createItem("vanilla_flower", "Vanilla Flower", {name: "vanilla_flower", meta:0});
Item.addCreativeGroup("XLSeeds", Translation.translate("XL Seeds"),[
    ItemID.vanilla_flower
]);

IDRegistry.genBlockID("vanilla_flower");
Block.createBlock("vanilla_flower", [{name: "Vanilla Flower", texture: [["vanilla_flower", 0]], inCreative: false}], "flower");
Block.setBlockShape(BlockID.vanilla_flower, {x: 0, y: 0, z: 0}, {x: 1, y: 0.001, z: 1});
BlockRenderer.addRenderCallback("vanilla_flower", function(api, coords, block){
	api.renderBoxId(coords.x, coords.y, coords.z, 0.4999, 0.01, 0, 0.5, 0.99, 1, "vanilla_flower", 0);
	api.renderBoxId(coords.x, coords.y, coords.z, 0, 0.01, 0.4999, 1, 0.99, 0.5, "vanilla_flower", 0);
});
BlockRenderer.enableCustomRender("vanilla_flower");
Block.registerDropFunction("vanilla_flower", function (coords, id, data){
    return [[ItemID.vanilla_flower, 1, 0]];
});

Callback.addCallback("ItemUse", function(coords, item, block){ 
    let c = coords;
    if((item.id == ItemID.vanilla_flower && (block.id == 2 || block.id == 3)) && World.getBlockID(c.x, c.y+1, c.z) == 0){
        World.setBlock(c.x, c.y+1, c.z, BlockID.vanilla_flower, 0);
        PlaySound("grass", 0.5);
        Player.decreaseCarriedItem(1);
    }
});

Callback.addCallback("GenerateChunk", function (chunkX, chunkZ) {
    if(Config.Vanilla_Flower){
        let coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
        coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
        var grassTest = World.getBlockID(coords.x, coords.y, coords.z);
        if(Math.random() <= 0.05){
            if(grassTest == 2){
                World.setBlock(coords.x, coords.y+1, coords.z, BlockID.vanilla_flower, 0);
            }
        }
    }
});

//Grass
Callback.addCallback("DestroyBlock", function(coords, block, player){
    if(block.id == 31){
        XLRegistry.DropOnGrass();
    }
});