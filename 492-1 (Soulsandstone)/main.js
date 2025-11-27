IDRegistry.genBlockID("soulSandstone");
Block.createBlock("soulSandstone", [{name: "Soul Sandstone", texture: [["soulsandstonetop", 0], ["soulsandstonetop", 0], ["soulsandstone", 0], ["soulsandstone", 0], ["soulsandstone", 0], ["soulsandstone", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.soulSandstone, count: 1, data: 0}, [ "   ", "aa ", "aa "], ['a', 88, 0]);

IDRegistry.genBlockID("soulSandstoneglassed");
Block.createBlock("soulSandstoneglassed", [{name: "Soul Sandstone Smooth", texture: [["soulsandstoneglassedtop", 0], ["soulsandstoneglassedtop", 0], ["soulsandstoneglassed", 0], ["soulsandstoneglassed", 0], ["soulsandstoneglassed", 0], ["soulsandstoneglassed", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.soulSandstoneglassed, count: 2, data: 0}, [ "   ", "aa ", "aa "], ['a', BlockID.soulSandstone, 0]);

IDRegistry.genBlockID("soulSandstonechiseled");
Block.createBlock("soulSandstonechiseled", [{name: "Soul Sandstone Chiseled", texture: [["soulsandstoneglassedtop", 0], ["soulsandstoneglassedtop", 0], ["soulsandstonechiseled", 0], ["soulsandstonechiseled", 0], ["soulsandstonechiseled", 0], ["soulsandstonechiseled", 0]], inCreative: true}]);
Recipes.addShaped({id: BlockID.soulSandstonechiseled, count: 2, data: 0}, [ "   ", "aa ", "aa "], ['a', BlockID.soulSandstoneglassed, 0]);