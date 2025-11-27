const SKY_COLOR = [1.4, 0.4, 0.5];
const FOG_COLOR = [0.3, 0.6, 0.1];

var Jungle = new Dimension({
    name: "Jungle",
    
    generation: {
        layers: [
            //island
            {
                range: [5, 256],
                noise: {
                    octaves: {
                        count: 4,
                        weight: 0.9,
                        scale: [.015, .0275, .016]
                    }
                },
                
                gradient: [[0, -1], [.2, -.3], [0.5, .1], [.8, -.3], [1, -1]],
                terrain: {
                    base: 1,
                    cover: {
                        height: 4,
                        top: BlockID.Jungle_dirt,
                        block: 3
                    }
                }
            },
        ],
        
        decoration: {
            
        }
    },
    
    environment: {
        sky: SKY_COLOR,
        fog: FOG_COLOR
    },
    callbacks: {
       tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("JungleChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
    }
});


var JungleTs = new TransferSequence(Jungle);
JungleTs.setPortalTimeout(40);

JungleTs.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

JungleTs.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("jungle_portal", ["null_portal", 0], JungleTs.getPortal(), {type: "u-plane", frameId: 48}, false);
JungleTs.setPortalTiles(BlockID.jungle_portal);





var shape = new PortalShape();
shape.setPortalId(BlockID.jungle_portal);
shape.setFrameIds(48);
shape.setMinSize(3, 3);

JungleTs.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.jungle_key) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 48 || block.id == BlockID.jungle_portal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.jungle_portal, [4]);
    }
});

var Particles = ModAPI.requireGlobal("Particles");

var jungle_part = Particles.registerParticleType({
 texture: "portal_particle",
 render: 2,
 size:[1, 3],
 lifetime:[40, 100],
 
 animators: {
  alpha:{fadeIn: .4, fadeOut: .4},
  size:{fadeOut: .5, fadeIn:0.2, start:0, end:0}
 }
});
TileEntity.registerPrototype(BlockID.jungle_portal, {
			tick:function(){
				if(Math.random()<0.4){
					Particles.addFarParticle(jungle_part,this.x+Math.random()/1, this.y+Math.random()/1, this.z+Math.random()/1, 0, 0, 0,1);
				}
			}
			});