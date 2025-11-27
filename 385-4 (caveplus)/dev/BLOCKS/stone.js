//Cave Plus Mod for MC Bedrock - InnerCore Version
//This is the developer version of the script! Don´t change or use it.

//stone raw
IDRegistry.genBlockID("slateblue");
Block.createBlock("slateblue", [
  {name: "Blue Slate", texture: [["slateblue",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slateblue, "stone");
Block.setDestroyTime(BlockID.slateblue, 1.8);
Block.setDestroyLevel("slateblue", 1);
Block.registerDropFunction("slateblue", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.slatebluecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("slate");
Block.createBlock("slate", [
  {name: "Slate", texture: [["slate",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slate, "stone");
Block.setDestroyTime(BlockID.slate, 1.8);
Block.setDestroyLevel("slate", 1);
Block.registerDropFunction("slate", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.slatecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("graniteblack");
Block.createBlock("graniteblack", [
  {name: "Black Granite", texture: [["graniteblack",0]], inCreative: false}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.graniteblack, "stone");
Block.setDestroyTime(BlockID.graniteblack, 2.3);
Block.setDestroyLevel("graniteblack", 1);
IDRegistry.genBlockID("basalt");
Block.createBlock("basalt", [
  {name: "Basalt", texture: [["basalt",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basalt, "stone");
Block.setDestroyTime(BlockID.basalt, 2.8);
Block.setDestroyLevel("basalt", 1);
Block.registerDropFunction("basalt", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.basaltcobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("dacite");
Block.createBlock("dacite", [
  {name: "Dacite", texture: [["dacite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacite, "stone");
Block.setDestroyTime(BlockID.dacite, 1.9);
Block.setDestroyLevel("dacite", 1);
Block.registerDropFunction("dacite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.dacitecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("greywacke");
Block.createBlock("greywacke", [
  {name: "Greywacke", texture: [["greywacke",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywacke, "stone");
Block.setDestroyTime(BlockID.greywacke, 1.7);
Block.setDestroyLevel("greywacke", 1);
Block.registerDropFunction("greywacke", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.greywackecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("komatiite");
Block.createBlock("komatiite", [
  {name: "Komatiite", texture: [["komatiite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiite, "stone");
Block.setDestroyTime(BlockID.komatiite, 2.1);
Block.setDestroyLevel("komatiite", 1);
Block.registerDropFunction("komatiite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.komatiitecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("limestone");
Block.createBlock("limestone", [
  {name: "Limestone", texture: [["limestone",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestone, "stone");
Block.setDestroyTime(BlockID.limestone, 1.8);
Block.setDestroyLevel("limestone", 1);
Block.registerDropFunction("limestone", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.limestonecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("syenite");
Block.createBlock("syenite", [
  {name: "Syenite", texture: [["syenite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenite, "stone");
Block.setDestroyTime(BlockID.syenite, 2);
Block.setDestroyLevel("syenite", 1);
Block.registerDropFunction("syenite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.syenitecobble, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("serpentinite");
Block.createBlock("serpentinite", [
  {name: "Serpentinite", texture: [["serpentinite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.serpentinite, "stone");
Block.setDestroyTime(BlockID.serpentinite, 2);
Block.setDestroyLevel("serpentinite", 1);
Block.registerDropFunction("serpentinite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.serpentinite, 1, 0]];
    }
    return [];
});
IDRegistry.genBlockID("rhyolite");
Block.createBlock("rhyolite", [
  {name: "Rhyolite", texture: [["rhyolite",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolite, "stone");
Block.setDestroyTime(BlockID.rhyolite, 2.3);
Block.setDestroyLevel("rhyolite", 1);
Block.registerDropFunction("rhyolite", function (coords, id, data, diggingLevel) {
    if (diggingLevel > 0) {
        return [[BlockID.rhyolitecobble, 1, 0]];
    }
    return [];
});



//stone cobble
IDRegistry.genBlockID("basaltcobble");
Block.createBlock("basaltcobble", [
  {name: "Basalt Cobblestone", texture: [["basaltcobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basaltcobble, "stone");
Block.setDestroyTime(BlockID.basaltcobble, 2);
Block.setDestroyLevel("basaltcobble", 1);
IDRegistry.genBlockID("dacitecobble");
Block.createBlock("dacitecobble", [
  {name: "Dacite Cobblestone", texture: [["dacitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacitecobble, "stone");
Block.setDestroyTime(BlockID.dacitecobble, 2);
Block.setDestroyLevel("dacitecobble", 1);
IDRegistry.genBlockID("greywackecobble");
Block.createBlock("greywackecobble", [
  {name: "Greywacke Cobblestone", texture: [["greywackecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywackecobble, "stone");
Block.setDestroyTime(BlockID.greywackecobble, 2);
Block.setDestroyLevel("greywackecobble", 1);
IDRegistry.genBlockID("komatiitecobble");
Block.createBlock("komatiitecobble", [
  {name: "Komatiite Cobblestone", texture: [["komatiitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiitecobble, "stone");
Block.setDestroyTime(BlockID.komatiitecobble, 2);
Block.setDestroyLevel("komatiitecobble", 1);
IDRegistry.genBlockID("limestonecobble");
Block.createBlock("limestonecobble", [
  {name: "Limestone Cobblestone", texture: [["limestonecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestonecobble, "stone");
Block.setDestroyTime(BlockID.limestonecobble, 2);
Block.setDestroyLevel("limestonecobble", 1);
IDRegistry.genBlockID("slatecobble");
Block.createBlock("slatecobble", [
  {name: "Slate Cobblestone", texture: [["slatecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatecobble, "stone");
Block.setDestroyTime(BlockID.slatecobble, 2);
Block.setDestroyLevel("slatecobble", 1);
IDRegistry.genBlockID("slatebluecobble");
Block.createBlock("slatebluecobble", [
  {name: "Blue Slate Cobblestone", texture: [["slatebluecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebluecobble, "stone");
Block.setDestroyTime(BlockID.slatebluecobble, 2);
Block.setDestroyLevel("slatebluecobble", 1);
IDRegistry.genBlockID("syenitecobble");
Block.createBlock("syenitecobble", [
  {name: "Syenite Cobblestone", texture: [["syenitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenitecobble, "stone");
Block.setDestroyTime(BlockID.syenitecobble, 2);
Block.setDestroyLevel("syenitecobble", 1);
IDRegistry.genBlockID("rhyolitecobble");
Block.createBlock("rhyolitecobble", [
  {name: "Rhyolite Cobblestone", texture: [["rhyolitecobble",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolitecobble, "stone");
Block.setDestroyTime(BlockID.rhyolitecobble, 2);
Block.setDestroyLevel("rhyolitecobble", 1);


//stone bricks
IDRegistry.genBlockID("basaltbrick");
Block.createBlock("basaltbrick", [
  {name: "Basalt Stonebrick", texture: [["basaltbrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basaltbrick, "stone");
Block.setDestroyTime(BlockID.basaltbrick, 1.5);
Block.setDestroyLevel("basaltbrick", 1);
IDRegistry.genBlockID("dacitebrick");
Block.createBlock("dacitebrick", [
  {name: "Dacite Stonebrick", texture: [["dacitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacitebrick, "stone");
Block.setDestroyTime(BlockID.dacitebrick, 1.5);
Block.setDestroyLevel("dacitebrick", 1);
IDRegistry.genBlockID("greywackebrick");
Block.createBlock("greywackebrick", [
  {name: "Greywacke Stonebrick", texture: [["greywackebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywackebrick, "stone");
Block.setDestroyTime(BlockID.greywackebrick, 1.5);
Block.setDestroyLevel("greywackebrick", 1);
IDRegistry.genBlockID("komatiitebrick");
Block.createBlock("komatiitebrick", [
  {name: "Komatiite Stonebrick", texture: [["komatiitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiitebrick, "stone");
Block.setDestroyTime(BlockID.komatiitebrick, 1.5);
Block.setDestroyLevel("komatiitebrick", 1);
IDRegistry.genBlockID("slatebluebrick");
Block.createBlock("slatebluebrick", [
  {name: "Blue Slate Stonebrick", texture: [["slatebluebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebluebrick, "stone");
Block.setDestroyTime(BlockID.slatebluebrick, 1.5);
Block.setDestroyLevel("slatebluebrick", 1);
IDRegistry.genBlockID("slatebrick");
Block.createBlock("slatebrick", [
  {name: "Slate Stonebrick", texture: [["slatebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebrick, "stone");
Block.setDestroyTime(BlockID.slatebrick, 1.5);
Block.setDestroyLevel("slatebrick", 1);
IDRegistry.genBlockID("limestonebrick");
Block.createBlock("limestonebrick", [
  {name: "Limestone Stonebrick", texture: [["limestonebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestonebrick, "stone");
Block.setDestroyTime(BlockID.limestonebrick, 1.5);
Block.setDestroyLevel("limestonebrick", 1);
IDRegistry.genBlockID("syenitebrick");
Block.createBlock("syenitebrick", [
  {name: "Syenite Stonebrick", texture: [["syenitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenitebrick, "stone");
Block.setDestroyTime(BlockID.syenitebrick, 1.5);
Block.setDestroyLevel("syenitebrick", 1);
IDRegistry.genBlockID("rhyolitebrick");
Block.createBlock("rhyolitebrick", [
  {name: "Rhyolite Stonebrick", texture: [["rhyolitebrick",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolitebrick, "stone");
Block.setDestroyTime(BlockID.rhyolitebrick, 1.5);
Block.setDestroyLevel("rhyolitebrick", 1);



//stone chiseled
IDRegistry.genBlockID("rhyolitecarved");
Block.createBlock("rhyolitecarved", [
  {name: "Chiseled Rhyolite Stonebrick", texture: [["rhyolitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.rhyolitecarved, "stone");
Block.setDestroyTime(BlockID.rhyolitecarved, 1.5);
Block.setDestroyLevel("rhyolitecarved", 1);
IDRegistry.genBlockID("slatecarved");
Block.createBlock("slatecarved", [
  {name: "Chiseled Slate Stonebrick", texture: [["slatecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatecarved, "stone");
Block.setDestroyTime(BlockID.slatecarved, 1.5);
Block.setDestroyLevel("slatecarved", 1);
IDRegistry.genBlockID("slatebluecarved");
Block.createBlock("slatebluecarved", [
  {name: "Chiseled Blue Slate Stonebrick", texture: [["slatebluecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.slatebluecarved, "stone");
Block.setDestroyTime(BlockID.slatebluecarved, 1.5);
Block.setDestroyLevel("slatebluecarved", 1);
IDRegistry.genBlockID("basaltcarved");
Block.createBlock("basaltcarved", [
  {name: "Chiseled Basalt Stonebrick", texture: [["basaltcarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.basaltcarved, "stone");
Block.setDestroyTime(BlockID.basaltcarved, 1.5);
Block.setDestroyLevel("basaltcarved", 1);
IDRegistry.genBlockID("limestonecarved");
Block.createBlock("limestonecarved", [
  {name: "Chiseled Limestone Stonebrick", texture: [["limestonecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.limestonecarved, "stone");
Block.setDestroyTime(BlockID.limestonecarved, 1.5);
Block.setDestroyLevel("limestonecarved", 1);
IDRegistry.genBlockID("dacitecarved");
Block.createBlock("dacitecarved", [
  {name: "Chiseled Dacite Stonebrick", texture: [["dacitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.dacitecarved, "stone");
Block.setDestroyTime(BlockID.dacitecarved, 1.5);
Block.setDestroyLevel("dacitecarved", 1);
IDRegistry.genBlockID("komatiitecarved");
Block.createBlock("komatiitecarved", [
  {name: "Chiseled Komatiite Stonebrick", texture: [["komatiitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.komatiitecarved, "stone");
Block.setDestroyTime(BlockID.komatiitecarved, 1.5);
Block.setDestroyLevel("komatiitecarved", 1);
IDRegistry.genBlockID("greywackecarved");
Block.createBlock("greywackecarved", [
  {name: "Chiseled Greywacke Stonebrick", texture: [["greywackecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.greywackecarved, "stone");
Block.setDestroyTime(BlockID.greywackecarved, 1.5);
Block.setDestroyLevel("greywackecarved", 1);
IDRegistry.genBlockID("syenitecarved");
Block.createBlock("syenitecarved", [
  {name: "Chiseled Syenite Stonebrick", texture: [["syenitecarved",0]], inCreative: true}
], "opaque");
ToolAPI.registerBlockMaterial(BlockID.syenitecarved, "stone");
Block.setDestroyTime(BlockID.syenitecarved, 1.5);
Block.setDestroyLevel("syenitecarved", 1);

//Recipes
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.slatebluecobble, BlockID.slateblue, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.basaltcobble, BlockID.basalt, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.dacitecobble, BlockID.dacite, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.greywackecobble, BlockID.greywacke, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.limestonecobble, BlockID.limestone, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.komatiitecobble, BlockID.komatiite, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.slatecobble, BlockID.slate, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.rhyolitecobble, BlockID.rhyolite, 0);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addFurnace(BlockID.syenitecobble, BlockID.syenite, 0);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatebluebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slateblue, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.basaltbrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.basalt, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.dacitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.dacite, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.greywackebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.greywacke, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.komatiitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.komatiite, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slate, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.limestonebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.limestone, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.syenitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.syenite, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.rhyolitebrick, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.rhyolite, 0]);
});

Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.limestonecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.limestonebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.greywackecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.greywackebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.dacitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.dacitebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.basaltcarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.basaltbrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.komatiitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.komatiitebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slatebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.slatebluecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.slatebluebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.rhyolitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.rhyolitebrick, 0]);
});
Callback.addCallback("PostLoaded", function () {
  Recipes.addShaped({id: BlockID.syenitecarved, count: 4, data: 0}, [
    "xx ", "xx ", "   "], [
      'x', BlockID.syenitebrick, 0]);
});
