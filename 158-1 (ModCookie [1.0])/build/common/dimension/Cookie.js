var Cookie_World = new Dimension({
	name: "Cookie_World",
	generation: { 
	layers: [
		
		{
			range: [1,2],
			noise:{
				octaves:{
					count:8,
					weight: 0.4,
					scale: [.01,.02,.04,.08]
				}
			},
			gradient:[
				[0,1],
				[1,-1],
				[0.05,.4],
				[.2,-.8]
			],
			terrain:{
				base:7
			}
		},
		
		{
			range: [0, 90], 
			noise: { 
				octaves: { 
					count: 8, 
					weight: [0.51,0.51/2,0.51/4,0.51/8,0.51/16],
					scale: [0.01, 0.02, 0.04,0.08,0.16]
				}
			},
			gradient: [
				[.1,1],[.4,1],[1, -1]
			], 
			
			terrain: {
				base: 1,
				cover:{
					height:4,
					top:BlockID.cookie_grass,
					block:BlockID.cookie_dirt
				}
			},
		},
		
		
		{
			 range: [0, 90], 
			 noise: { 
			 	octaves: { 
					count: 3, 
					weight: [0.55,0.55/2,0.55/4],
					scale: [0.005, 0.01, 0.02] 
				} 
			}, 
			gradient: [
				[.2,.3],[.4,5],[.6,.7],[1, -1]
			], 
			
			terrain: {
				base: 4,
				cover:{
					height:4,
					top:BlockID.cookie_grass,
					block:BlockID.cookie_dirt
				}
			},
		},
		
		
		]
},
environment: {
},
callbacks: {
tick: function() { 
},
generateChunk: function(chunkX, chunkZ) { 
Callback.invokeCallback("CookieChunk",chunkX,chunkZ);
},
loaded: function() {
},
unloaded: function() {
}
	}
});


var CookieTP = new TransferSequence(Cookie_World);
CookieTP.setPortalTimeout(40);

CookieTP.setPortalOverlay(new PortalOverlayWindow({
    frames: 32, 
    rate: 20, 
    fade: 1, 
    texture: "aether_portal_overlay_animation"
}));

CookieTP.setLoadingScreenParams({
    texture: "default_dimension_loading_screen"
});

PortalRegistry.newPortalBlock("cookiePortal", ["aether_portal", 0], CookieTP.getPortal(), {type: "u-plane", frameId: 24}, true);
CookieTP.setPortalTiles(BlockID.cookiePortal);





var shape = new PortalShape();
shape.setPortalId(BlockID.cookiePortal);
shape.setFrameIds(24);
shape.setMinSize(2, 3);

CookieTP.setPortalBuilder(shape.getBuilder());

Callback.addCallback("ItemUse", function(coords, item) {
    if (item.id == ItemID.cookie_key) {
        var rect = shape.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
        if (rect) {
            shape.buildPortal(rect, false);
        }
    }
});

Callback.addCallback("DestroyBlock", function(pos, block){
    if (block.id == 24 || block.id == BlockID.cookiePortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.cookiePortal, [4]);
    }
});