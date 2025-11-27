//Register ID
IDRegistry.genBlockID("tw_planks_dark_wood");
IDRegistry.genBlockID("tw_planks_mangrove");
IDRegistry.genBlockID("tw_planks_canopy");
IDRegistry.genBlockID("tw_planks_twilight_oak");
IDRegistry.genBlockID("tw_planks_mine");
IDRegistry.genBlockID("tw_planks_sort");
IDRegistry.genBlockID("tw_planks_time");
IDRegistry.genBlockID("tw_planks_trans");

//Create Blocks
Block.createBlock("tw_planks_dark_wood", [{
    name: "Dark Wood Planks",
    texture: [
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],
        ["tw_planks_darkwood", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_dark_wood, "wood", 0, true);
Block.setDestroyLevel("tw_planks_dark_wood", 0);
    

    
    
    
    
Block.createBlock("tw_planks_mangrove", [{
    name: "Mangrove Planks",
    texture: [
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],
        ["tw_planks_mangrove", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_mangrove, "wood", 1, true);
Block.setDestroyLevel("tw_planks_mangrove", 0);
    


    
    
    
    
Block.createBlock("tw_planks_canopy", [{
    name: "Canopy Planks",
    texture: [
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],
        ["tw_planks_canopy", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_canopy, "wood", 1, true);
Block.setDestroyLevel("tw_planks_canopy", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_mine", [{
    name: "Mine Planks",
    texture: [
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],
        ["tw_planks_mine", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_mine, "wood", 1, true);
Block.setDestroyLevel("tw_planks_mine", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_twilight_oak", [{
    name: "Twilight Oak Planks",
    texture: [
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],
        ["tw_planks_twilight_oak", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_twilight_oak, "wood", 1, true);
Block.setDestroyLevel("tw_planks_twilight_oak", 0);
    

    
    
    
    
    
Block.createBlock("tw_planks_time", [{
    name: "Time Planks",
    texture: [
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],
        ["tw_planks_time", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_time, "wood", 1, true);
Block.setDestroyLevel("tw_planks_time", 0);
    

    
    
    
    
    
    
Block.createBlock("tw_planks_sort", [{
    name: "Sort Planks",
    texture: [
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],
        ["tw_planks_sort", 0],],inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_sort, "wood", 1, true);
Block.setDestroyLevel("tw_planks_sort", 0);
    

    
    
    
    
Block.createBlock("tw_planks_trans", [{
    name: "Transformation Planks",
    texture: [
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],
        ["tw_planks_trans", 0],], inCreative: true, }
], {destroytime: 2.25, sound: "wood"});
ToolAPI.registerBlockMaterial(BlockID.tw_planks_trans, "wood", 1, true);
Block.setDestroyLevel("tw_planks_trans", 0);
    
