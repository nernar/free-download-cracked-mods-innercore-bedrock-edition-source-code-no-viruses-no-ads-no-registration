var Xenoculus = new Dimensions.CustomDimension("Xenoculus", 1899);
Xenoculus.setSkyColor(.25, .25, 1.12);
Xenoculus.setFogColor(.25, .3, 1.15);

Xenoculus.setGenerator(Dimensions.newGenerator({
    layers: [{
        minY: 0,
        maxY: 256,
        yConversion: [
              [0, -.5], [.3, -.245], [.245, -.1], [.234, -.1], [1, -.6]
        ],
        material: {
            base: BlockID.Frone,
            surface: {
                id: BlockID.dirtGryss,
                data: 0,
                width: 4
            },
            cover: BlockID.grassblockGryss
        },
        noise: {
            octaves: {
                count: 4,
                scale: [128, 40],
                weight_factor: 3,
                weight: 1.2
            }
        }
    }]
}));

/*const XEBlock = new PortalUtils.PortalBlock("xenoculusPortal", ["fulsportal", 0], {type: "v-plane", frameId: 174}, {to: Xenoculus.id}, false);

const XEShape = new PortalShape()
    .setPortalId(BlockID.xenoculusPortal)
    .setFrameIds(174)
    .setMinSize(2, 3)
    .makeNormalTransfer(0, Xenoculus.id)
    .makeDestroyEvent();
    

Callback.addCallback("tick", function(){
Logger.Flush();    
});  
*/
Item.registerUseFunction(ItemID.AncientDust, function(coords, item, block, player){
Dimensions.transfer(player, Xenoculus.id);     
});

Callback.addCallback("PostLoaded", function(){
    Recipes.addFurnace(BlockID.oreIronFrone, 265, 0); 
    Recipes.addFurnace(BlockID.oreNorthositFrone, ItemID.northositLp, 0); 
});