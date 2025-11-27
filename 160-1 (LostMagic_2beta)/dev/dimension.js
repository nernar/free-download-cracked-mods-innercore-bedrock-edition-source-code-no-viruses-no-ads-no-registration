var Aether = new Dimension({
    name: "magic world",
    
    generation: {
        layers: [
            // major islands
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
                    base: BlockID.magic_world_coblestone,
                    cover: {
                        height: 4,
                        top: BlockID.magic_world_dirt,
                        block: 3
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        
    },
    
    callbacks: {
        tick: function() {
            Aether.getWrappedObject().(Math.random(), Math.random(), Math.random());
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
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("aetherPortall", ["aether_portall", 0], AetherTransferSequence.getPortal(), {type: "u-plane", frameId: 4}, false);
AetherTransferSequence.setPortalTiles(BlockID.aetherPortall);





var shape = new PortalShape();
shape.setPortalId(BlockID.aetherPortall);
shape.setFrameIds(BlockID.green_piece);
shape.setMinSize(2, 3);

AetherTransferSequence.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.basic_magic_wand) {
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

























/*

var UndergroundJungle = new Dimension({
    name: "undergroundJungle",
    
    generation: {
        layers: [
            // main
            { 
                range: [0, 128],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 1.1,
                        scale: [.015, .0275, .015]
                    }
                },
                
                gradient: [
                    [0, 1],
                    [0.075, 1],
                    [0.125, .6],
                    [0.25, -.33],
                    [0.4, .1],
                    [0.5, .3],
                    [0.8, .3],
                    [0.925, 1],
                    [1, 1]
                ],
                
                terrain: {
                    base: BlockID.aetherDirt
                }
            },
        ],
        
        decoration: {
            biome: 4,
            features: true
        }
    },
    
    environment: {
        
    },
    
    transfer: {
        handler: {
            correctPosition: function(pos) {
                var y = 120;
                while (World.getBlockID(pos.x, y, pos.z) > 0 && y > 0) {
                    y--;
                }
                
                if (y < 10) {
                    y = 120;
                }
                
                pos.y = y;
            },
            
            buildPortal: function(pos) {
                for (var x = -1; x < 2; x++) {
                    for (var z = -1; z < 2; z++) {
                        for (var y = -2; y < 2; y++) {
                            World.setBlock(Math.floor(pos.x + x), Math.floor(pos.y + y), Math.floor(pos.z + z), y > -2 ? 0 : 1, 0);
                        }
                    }
                }
            }
        }
    },
    
    callbacks: {
        
    }
});

*/


















