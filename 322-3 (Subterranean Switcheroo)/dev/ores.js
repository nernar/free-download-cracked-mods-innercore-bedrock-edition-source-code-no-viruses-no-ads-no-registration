IDRegistry.genBlockID("rediron");
Block.createBlock("rediron", [
	{name: "Rediron Ore", texture: [["new_rediron", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rediron, "stone", 4, true);
Block.setDestroyTime(BlockID.rediron, 3);
Block.setDestroyLevel("rediron", 3);
Block.registerDropFunction("rediron", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.rediron, 1, 0]];
        }
        var drop = [[ItemID.ironred, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("redgold");
Block.createBlock("redgold", [
	{name: "Redgold Ore", texture: [["new_redgold", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.redgold, "stone", 4, true);
Block.setDestroyTime(BlockID.redgold, 3);
Block.setDestroyLevel("redgold", 3);
Block.registerDropFunction("redgold", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.redgold, 1, 0]];
        }
        var drop = [[ItemID.goldred, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("golddiamond");
Block.createBlock("golddiamond", [
	{name: "Stunning Ore", texture: [["new_golddiamond", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.golddiamond, "stone", 4, true);
Block.setDestroyTime(BlockID.golddiamond, 3);
Block.setDestroyLevel("golddiamond", 3);
Block.registerDropFunction("golddiamond", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.golddiamond, 1, 0]];
        }
        var drop = [[ItemID.diamondgold, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("coaliron");
Block.createBlock("coaliron", [
	{name: "Hard-Carbon Ore", texture: [["new_coaliron", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.coaliron, "stone", 4, true);
Block.setDestroyTime(BlockID.coaliron, 3);
Block.setDestroyLevel("coaliron", 3);
Block.registerDropFunction("coaliron", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.coaliron, 1, 0]];
        }
        var drop = [[ItemID.ironcoal, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 1/3){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);


IDRegistry.genBlockID("obsidianstone");
Block.createBlock("obsidianstone", [
	{name: "Obsidian Ore", texture: [["new_obsidianstone", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.obsidianstone, "stone", 4, true);
Block.setDestroyTime(BlockID.obsidianstone, 3);
Block.setDestroyLevel("obsidianstone", 3);
Block.registerDropFunction("obsidianstone", function(coords, blockID, blockData, level, enchant){
    if(level > 2){
        if(enchant.silk){
            return [[BlockID.obsidianstone, 1, 0]];
        }
        var drop = [[ItemID.obsidianore, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 3/5){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);

IDRegistry.genBlockID("clayore");
Block.createBlock("clayore", [
	{name: "Clay Ore", texture: [["new_clayore", 0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.clayore, "stone", 4, true);
Block.setDestroyTime(BlockID.clayore, 3);
Block.setDestroyLevel("clayore", 3);
Block.registerDropFunction("clayore", function(coords, blockID, blockData, level, enchant){
    if(level > 3){
        if(enchant.silk){
            return [[BlockID.clayore, 1, 0]];
        }
        var drop = [[BlockID.clayore, 1, 0]];
        if(Math.random() < enchant.fortune/3 - 3/5){drop.push(drop[0]);}
        ToolAPI.dropOreExp(coords, 3, 7, enchant.experience);
        return drop;
    }
    return [];
}, 1);