IDRegistry.genBlockID("orelol");
Block.createBlock("orelol", [
    {name: "Руда души", texture: [["lol_ore", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.orelol, "stone", 2, true);
Block.setDestroyTime(BlockID.orelol, 3);
Block.setDestroyLevel("orelol", 3);

IDRegistry.genBlockID("golem_ore");
Block.createBlock("golem_ore", [
    {name: "Руда голема", texture: [["golem_ore", 0]], inCreative: true}], "opaque");
ToolAPI.registerBlockMaterial(BlockID.golem_ore, "stone", 2, true);
Block.setDestroyTime(BlockID.golem_ore, 3);
Block.setDestroyLevel("golem_ore", 3);

IDRegistry.genBlockID("oreare");
Block.createBlock("oreare", [
    {name: "Руда Древней стали", texture: [["are_ore", 0]], inCreative: true}], "opaque");