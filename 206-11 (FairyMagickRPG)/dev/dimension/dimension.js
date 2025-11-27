
var Signius = new Dimension({
    name: "Signius",
 
    generation: {
        layers: [
            { 
                range: [0, 150],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .02752, .015]
                    }
                },
                
                gradient: [[0, -3], [.1, -.2], [0.5, .1], [.9, -.2], [2, -1]],
                
                terrain: {
                    base: 49,
                    cover: {
                        height: 4,
                        top: BlockID.blooddirt,
                        block: 49
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    }, 
    environment: {
        sky: [.178, .034, .034], 
        fog: [.178, .034, .034]
    }
    
});


var SigniusTransferSequence = new TransferSequence(Signius);
SigniusTransferSequence.setPortalTimeout(40);

SigniusTransferSequence.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

SigniusTransferSequence.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("aetherPortall", ["aether_portall", 0], SigniusTransferSequence.getPortal(), {type: "u-plane", frameId: 4}, false);
SigniusTransferSequence.setPortalTiles(BlockID.aetherPortall);


var shape = new PortalShape();
shape.setPortalId(BlockID.aetherPortall);
shape.setFrameIds(BlockID.portalblock);
shape.setMinSize(2, 3);

SigniusTransferSequence.setPortalBuilder(shape.getBuilder());

IDRegistry.genItemID("key");

Item.createItem("key", "Dimension Key", {name: "key", meta: 0}, {stack: 64});

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.key) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 4 || block.id == BlockID.aetherPortall) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.aetherPortall, [4]);
    }
});
