var twilightforest1 = new Dimensions.CustomDimension("twilightforest1", 1345); 
twilightforest1.setSkyColor(.4, .4, .5)
twilightforest1.setFogColor(.3, .3, .5);
 
 Callback.addCallback("ItemUse", function(coords, item) {
    
    if (item.id == ItemID.twpo) {
        Dimensions.transfer(Player.get(), Player.getDimension() == 0 ? twilightforest1.id : 0);
    }
})
twilightforest1.setGenerator(Dimensions.newGenerator({
    layers: [
        {
            minY: 0, maxY: 70, 
            yConversion: [[.0, 0], [0, 0]],
            material: {base: 1, surface: {id: 3, data: 0, width:4}, cover: 2}, 
            noise: {
                octaves: {count: 4, scale: 20}
            }
        }
    ]
}));

PortalUtils.newPortalBlock("twPortal", ["twilightforest1_portal", 0], {type: "h-plane", frameId: 2}, true);

var shapeTw = new PortalShape();
shapeTw.setPortalId(BlockID.twPortal);
shapeTw.setFrameIds(BlockID.twPortal);
shapeTw.setMinSize(2, 3);

Callback.addCallback("ItemUse", function(coords, item, block){ 
if (Player.getCarriedItem().id == ItemID.congtw) 
var rect = shapeTw.findPortal(coords.relative.x, coords.relative.y, coords.relative.z);
  if (rect) {
            shapeTw.buildPortal(rect, false);      
   }
}); 
    
Callback.addCallback("DestroyBlock", function(pos, block) { 
    if (block.id == 2 || block.id == BlockID.twPortal) {
        DimensionHelper.eliminateIncorrectPlacedPortals(pos, BlockID.twPortal, [2]);
    }
}); 

Callback.addCallback("tick", function() {
var crdsP = Player.getPosition();
if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != twilightforest1.id) {
    Dimensions.transfer(Player.get(), twilightforest1.id);
   shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    } else {
      if (World.getBlock(crdsP.x, crdsP.y, crdsP.z).id == BlockID.twPortal && Player.getDimension().id != twilightforest1.id)
       Dimensions.transfer(Player.get(), twilightforest1.id);   
      shapeTw.buildPortal(crdsP.x, crdsP.y, crdsP.z, true); 
    }
});

