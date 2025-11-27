var Leaves = Block.createSpecialType({
    base: 18,
    sound: "grass",
    destroytime: 0.15
});
IDRegistry.genBlockID("ex_infestedRaw0");
IDRegistry.genBlockID("ex_infestedRaw1");
IDRegistry.genBlockID("ex_infestedRaw2");
IDRegistry.genBlockID("ex_infestedLeaf0");
IDRegistry.genBlockID("ex_infestedLeaf1");
IDRegistry.genBlockID("ex_infestedLeaf2");
Block.createBlock("ex_infestedRaw0", [{
    name: "Raw Infested Leaves",
    texture: [
        ["enr_RawInfestedLeaves0", 0]
    ],
    inCreative: true
}], Leaves);
Block.createBlock("ex_infestedRaw1", [{
    name: "Raw Infested Leaves",
    texture: [
        ["enr_RawInfestedLeaves1", 0]
    ],
    inCreative: true
}], Leaves);
Block.createBlock("ex_infestedRaw2", [{
    name: "Raw Infested Leaves",
    texture: [
        ["enr_RawInfestedLeaves2", 0]
    ],
    inCreative: true
}], Leaves);
Block.createBlock("ex_infestedLeaf0", [{
    name: "Infested Leaves",
    texture: [
        ["enr_InfestedLeaves0", 0]
    ],
    inCreative: true
}], Leaves);
Block.createBlock("ex_infestedLeaf1", [{
    name: "Infested Leaves",
    texture: [
        ["enr_InfestedLeaves1", 0]
    ],
    inCreative: true
}], Leaves);
Block.createBlock("ex_infestedLeaf2", [{
    name: "Infested Leaves",
    texture: [
        ["enr_InfestedLeaves2", 0]
    ],
    inCreative: true
}], Leaves);
ToolAPI.registerBlockMaterial(BlockID.ex_infestedRaw0, "plant");
ToolAPI.registerBlockMaterial(BlockID.ex_infestedRaw1, "plant");
ToolAPI.registerBlockMaterial(BlockID.ex_infestedRaw2, "plant");
ToolAPI.registerBlockMaterial(BlockID.ex_infestedLeaf0, "plant");
ToolAPI.registerBlockMaterial(BlockID.ex_infestedLeaf1, "plant");
ToolAPI.registerBlockMaterial(BlockID.ex_infestedLeaf2, "plant");

(function(){
	let arr = [[BlockID.ex_infestedRaw0, "enr_RawInfestedLeaves0"], [BlockID.ex_infestedRaw1, "enr_RawInfestedLeaves1"], [BlockID.ex_infestedRaw2, "enr_RawInfestedLeaves2"], [BlockID.ex_infestedLeaf0, "enr_InfestedLeaves0"], [BlockID.ex_infestedLeaf1, "enr_InfestedLeaves1"], [BlockID.ex_infestedLeaf0, "enr_InfestedLeaves2"]];
	ModAPI.addAPICallback("BetterFoliageLeaves", function(api){
		for(let i in arr)
			api.setupLeavesModel(arr[i][0], 0, [arr[i][1], 0]);
	});
	ModAPI.addAPICallback("AirLeaves", function(api){
		for(let i in arr)
			api.setupLeavesModel(arr[i][0], 0);
	});
})();

var GrowGroup = {
    ex_infestedRaw0: BlockID.ex_infestedLeaf0,
    ex_infestedRaw1: BlockID.ex_infestedLeaf1,
    ex_infestedRaw2: BlockID.ex_infestedLeaf2
}
var LeafGroup = {
    18: {
        0: BlockID.ex_infestedRaw0,
        1: BlockID.ex_infestedRaw2,
        2: BlockID.ex_infestedRaw0,
        3: BlockID.ex_infestedRaw1,
15: BlockID.ex_infestedRaw0
    },
    161: {
        0: BlockID.ex_infestedRaw0,
        1: BlockID.ex_infestedRaw0
    },
    registerLeafRaw: function(blockID, StringId) {
        TileEntity.registerPrototype(blockID, {
            defaultValues: {
                growTime: 1000
            },
            check: function(block, x, y, z) {
            	let data = block.getNamedStatesScriptable().old_leaf_type||0;
                if (!!(LeafGroup[block.id] && LeafGroup[block.id][data])) {
                    this.blockSource.setBlock(this.x + x, this.y + y, this.z + z, LeafGroup[block.id][data], 0);
                    TileEntity.addTileEntity(this.x + x, this.y + y, this.z + z, this.blockSource);
                };
            },
            tick: function() {
                this.data.growTime -= 1;
                if (this.data.growTime <= 0) {
                    this.check(this.blockSource.getBlock(this.x + 1, this.y, this.z), 1, 0, 0);
                    this.check(this.blockSource.getBlock(this.x - 1, this.y, this.z), -1, 0, 0);
                    this.check(this.blockSource.getBlock(this.x, this.y + 1, this.z), 0, 1, 0);
                    this.check(this.blockSource.getBlock(this.x, this.y - 1, this.z), 0, -1, 0);
                    this.check(this.blockSource.getBlock(this.x, this.y, this.z + 1), 0, 0, 1);
                    this.check(this.blockSource.getBlock(this.x, this.y, this.z -1), 0, 0, -1);
                    this.blockSource.setBlock(this.x, this.y, this.z, GrowGroup[StringId], 0);
                    TileEntity.destroyTileEntity(this);
                };
            }
        });
    },
    registerDrop: function(blockID) {
        Block.registerDropFunctionForID(blockID,
        function(id, data) {
/*            var random = Math.random() * 100;
            var id = Player.getCarriedItem().id;
            if (id == 359) {
                ToolAPI.breakCarriedTool(1);
                return [[BlockID.ex_infestedLeaves, 1, 0]]
            };
            return random < 42.5 ? [[287, 1, 0]] : random < 10 ? [[287, 2, 0]] : [[0, 0, 0]]*/
            return [[0, 0, 0]];
        });
        Callback.addCallback("DestroyBlock",
        function(coords, block, player) {
            if (block.id != blockID) return;
            let blockSource = BlockSource.getDefaultForActor(player);
            let random = Math.random() * 100;
            let data = random < 42.5 ? [[287, 1, 0]] : random < 10 ? [[287, 2, 0]] : [[0, 0, 0]];
            let id = Entity.getCarriedItem(player).id;
            if (id == 359) {
                ToolAPI.breakCarriedTool(1);
                data = [[block.id, 1, 0]];
            };
            let item = data[0];
if(item[0] == 287)
ScrutinyAPI_V1.giveScrutiny(player, "skyblock", "gl", "crock", true);
            blockSource.spawnDroppedItem(coords.x, coords.y, coords.z, item[0], item[1], item[2]);
        });
    },
};
LeafGroup.registerLeafRaw(BlockID.ex_infestedRaw0, "ex_infestedRaw0");
LeafGroup.registerLeafRaw(BlockID.ex_infestedRaw1, "ex_infestedRaw1");
LeafGroup.registerLeafRaw(BlockID.ex_infestedRaw2, "ex_infestedRaw2");

LeafGroup.registerDrop(BlockID.ex_infestedLeaf0);
LeafGroup.registerDrop(BlockID.ex_infestedLeaf1);
LeafGroup.registerDrop(BlockID.ex_infestedLeaf2);

Block.registerDropFunctionForID(BlockID.ex_infestedRaw0,

function(id, data) {
    return []
});
Block.registerDropFunctionForID(BlockID.ex_infestedRaw1,

function(id, data) {
    return []
});
Block.registerDropFunctionForID(BlockID.ex_infestedRaw2,

function(id, data) {
    return []
});
