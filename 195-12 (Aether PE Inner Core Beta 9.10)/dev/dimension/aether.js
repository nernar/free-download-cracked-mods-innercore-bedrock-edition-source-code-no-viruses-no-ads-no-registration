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