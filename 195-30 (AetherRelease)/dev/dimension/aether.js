var Aether_Plains = new CustomBiome("aether_plains")
.setCoverBlock(BlockID.grassblockAether, 0)
.setSurfaceBlock(BlockID.dirtAether, 0)
.setFillingBlock(BlockID.Holystone, 0);


var Aether = new Dimensions.CustomDimension("Aether", 1991);
Aether.setSkyColor(.4, .4, .5);
Aether.setFogColor(.3, .3, .5);

Aether.setGenerator(Dimensions.newGenerator({
    biome: Aether_Plains.id,
    layers: [
    {
                minY: 36, maxY: 45,
                yConversion: [[0.9, -0.65], [.9, -.48], [0.18, 0], [.6, -.78], [1.3, -.75]],
                material: {base: BlockID.coldAercloud},
       noise: {
                    octaves: {
                        count: 3, scale: 110
                    }
                }
            },
    //MAIN NOICE
    {
        minY: 21,
        maxY: 126,
         yConversion: [[1, -0.65], [.805, -.21], [.7, 0.09], [0.3, -.15], [0., -.8]
        ],
        material: {
            base: BlockID.Holystone,
            surface: {
                id: BlockID.quickSkyroot,
                data: 0,
                width: 3
            },
            cover: BlockID.quickSkyroot
        },
        noise: {
            octaves: {
              count: 4,
              scale: 120,
              weight: 0.918
               }
        }     
    },
    {
        minY: 26,
        maxY: 127,
         yConversion: [[1, -0.65], [.8, -.2], [.7, 0.08], [0.3, -.155], [0, -.8]
        ],
        material: {
            base: BlockID.Holystone,
            surface: {
                id: BlockID.dirtAether,
                data: 0,
                width: 4
            },
            cover: BlockID.grassblockAether
        },
        noise: {
            octaves: {
               count: 4,
               scale: 120,
               weight: .9
               }
        }     
    }]
}));

 /*
const AEBlock = new PortalUtils.PortalBlock("aetherPortal", ["aether_portal", 0], {type: "v-plane", frameId: 89}, {to: Aether.id}, false);

const AEShape = new PortalShape()
    .setPortalId(AEBlock.getId())
    .setFrameIds(89)
    .setMinSize(2, 3)
    .makeNormalTransfer(0, Aether.id)
    .makeDestroyEvent();
    */
var Campfiremesh = new RenderMesh();
Campfiremesh.setBlockTexture("outpost_campfire_on", 0);
Campfiremesh.importFromFile(__dir__+"/models/campfire.obj", "obj", {translate:[+.5 ,0, +.5]});
IDRegistry.genBlockID("CampfireTleport");
Block.createBlock("CampfireTleport", [
    {name: "Teleporter", texture: [["outpost_campfire_on", 0]], inCreative: true}]);
    
var Campfirerender = new ICRender.Model();
Campfirerender.addEntry(new BlockRenderer.Model(Campfiremesh));
BlockRenderer.setStaticICRender(BlockID.CampfireTleport,0,Campfirerender);   
Block.setShape(BlockID.CampfireTleport, 0/16, 0, 0/16, 1/16, 5/16, 1/16);

IDRegistry.genBlockID("CampfireTleportE");
Block.createBlock("CampfireTleportE", [
    {name: "Teleporter", texture: [["empty", 0]], inCreative: false}]);     
Block.setShape(BlockID.CampfireTleportE, 0/16, 0, 0/16, 1/16, 5/16, 1/16);    
 /*   
Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == 1 || Entity.getCarriedItem(player).id == 0 && block.id == BlockID.CampfireTleport) {
Dimensions.transfer(player, Aether.id);        
 }
});    */
    
Callback.addCallback("CustomDimensionTransfer", function (entity, from, to) {   
                Updatable.addUpdatable({
                    timer: 0,
                    update: function(){
                        this.timer++;
                        if(this.timer == 5){
                            (function(){
                                var region = BlockSource.getCurrentWorldGenRegion();
                                var pos = Entity.getPosition(entity);
                                var surf_1 = GenerationUtils.findSurface(pos.x, 230, pos.z);
                                Updatable.addUpdatable({
                                    age: 0,
                                    update: function () {        
                                     while (region.getBlockId(surf_1.x,surf_1.y-1,surf_1.z) == 0) {
                                       pos = Entity.getPosition(entity);
                                         surf_1 = GenerationUtils.findSurface(pos.x, 230, pos.z); 
                                        Entity.setPosition(entity, surf_1.x + 16, surf_1.y, surf_1.z + 16);          
                                        }
                                     this.remove = this.age++ > 3;
                                    }            
                                });
                               if (to == Aether.id) {
                              //Start.build(surf_1.x, surf_1.y + 1, surf_1.z, Structure.ROTATE_Y, random, region);           
                              }
                            })();
                            this.remove = true;
                        }
                    }
                });   
        });    

/*    
//THERA    
var Thera_Plains = new CustomBiome("thera_plains")
.setCoverBlock(BlockID.grasstheraAether, 0)
.setSurfaceBlock(BlockID.theraAether, 0)
.setFillingBlock(BlockID.Holystone, 0);    
    
var Thera = new Dimensions.CustomDimension("Thera", 1990);
Thera.setSkyColor(.25, .25, 1.12);
Thera.setCloudsColor(.25, .25, 1.12);
Thera.setFogColor(1.05, 1.05, 1.05);

Thera.setGenerator(Dimensions.newGenerator(
{
biome: Thera_Plains.id, 
layers: [
{
minY: 0, maxY: 45,
yConversion: [[0, 0]],
material: {base: BlockID.Holystone, surface: {id:BlockID.theraAether, data: 0, width:4}, cover: BlockID.grasstheraAether},
},
{
minY: 0, maxY: 1,
yConversion: [[0, 0]],
material: {base: 7}
}
]
}));*/
    
var Teleportermesh = new RenderMesh();
Teleportermesh.setBlockTexture("teleporter", 0);
Teleportermesh.importFromFile(__dir__+"/models/teleporter.obj", "obj", {translate:[+.5 ,0, +.5]});
IDRegistry.genBlockID("TeleporterThera");
Block.createBlock("TeleporterThera", [
    {name: "Teleporter", texture: [["teleporter", 0]], inCreative: true}]);
    
var Teleporterrender = new ICRender.Model();
Teleporterrender.addEntry(new BlockRenderer.Model(Teleportermesh));
BlockRenderer.setStaticICRender(BlockID.TeleporterThera,0,Teleporterrender);   

IDRegistry.genBlockID("TeleporterTheraE");
Block.createBlock("TeleporterTheraE", [
    {name: "Teleporter", texture: [["empty", 0]], inCreative: false}]);  

Callback.addCallback('DestroyBlock', function (coords, block, player) {
if (block.id == BlockID.TeleporterThera) {
var region = BlockSource.getDefaultForActor(player);
region.destroyBlock(coords.x, coords.y + 1, coords.z);
}
if (block.id == BlockID.TeleporterTheraE) {
var region = BlockSource.getDefaultForActor(player);
region.destroyBlock(coords.x, coords.y - 1, coords.z);
}
});

Callback.addCallback('ItemUse', function (coords, item, block, is, player) {
if(Entity.getCarriedItem(player).id == 0 && block.id == BlockID.TeleporterThera || Entity.getCarriedItem(player).id == 0 && block.id == BlockID.TeleporterTheraE) {
Dimensions.transfer(player, Aether.id);        
 }
});