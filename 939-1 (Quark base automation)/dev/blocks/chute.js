IMPORT('StorageInterface');

var BLOCK_TYPE_WOOD = Block.createSpecialType({
    base: 5
});

IDRegistry.genBlockID("chuteBlock");

Block.createBlock("chuteBlock", [
    {
        name: "Chute", 
        texture: [["chute_bottom", 0], ["chute_top", 0], ["chute_side", 0]],
    }
],BLOCK_TYPE_WOOD );

Recipes.addShaped({
    id: BlockID.chuteBlock,
    count: 1,
    data: 0
}, [
    "ppp",
    "p p",
    " p "
], ['p', 5, 0]);

let chuteModel = BlockRenderer.createModel();

chuteModel.addBox(0, 10/16, 0, 1, 1, 1, BlockID.chuteBlock, 0); 

chuteModel.addBox(4/16, 4/16, 4/16, 12/16, 10/16, 12/16, BlockID.chuteBlock, 0); 

chuteModel.addBox(6/16, 0, 6/16, 10/16, 4/16, 10/16, BlockID.chuteBlock, 0);  

let chuteRender = new ICRender.Model();

chuteRender.addEntry(chuteModel);

BlockRenderer.setStaticICRender(BlockID.chuteBlock, -1, chuteRender);


StorageInterface.createInterface(BlockID.chuteBlock, {
    slots: {
        "slot1": {
            input: true,
            output: false,
            maxStack: 1
        },
    },
});


TileEntity.registerPrototype(BlockID.chuteBlock,{

    defaultValues: {
        progress: 0,
        noRedstone: true
    },

    useNetworkItemContainer: true,

    init: function() {
        //useNetworkItemContainer: true;
    },

    tick: function() {

        let blockBelowID = World.getBlockID(this.x, this.y - 1, this.z);

        if (Block.isSolid(blockBelowID) || !this.data.noRedstone) {
            return;
        }
        
        StorageInterface.checkHoppers(this);
        let item = this.container.getSlot("slot1");

        if (item.id > 0) {
            let entityID = World.drop(this.x + 0.5, this.y - 0.6, this.z + 0.5, item.id, item.count, item.data);
            
            this.container.clearSlot("slot1");


            Entity.setVelocity(entityID, 0, -0.5, 0);

    
        }

        if (this.data.progress < 100) {
            this.data.progress++;
        }
    },

    redstone: function(params) {
        this.data.noRedstone = (params.power === 0);
    },


    clientPacket: function(packetData) {
        if (packetData.type === "progressUpdate") {
            this.data.progress = packetData.progress;
        }
    },

})

Callback.addCallback("BlockPlaced", function(x, y, z, id, player) {
    if (id === BlockID.chuteBlock) {
       Game.message("gg");
        let tileEntity = World.addTileEntity(x, y, z);
        if (!tileEntity) {
            Game.message("Failed to create TileEntity.");
        } else {
            Game.message("TileEntity has been successfully created!");
        }
    }
});
