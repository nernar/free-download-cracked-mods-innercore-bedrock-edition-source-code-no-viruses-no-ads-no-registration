var crystal = Block.createSpecialType({lightlevel: 7, lightopacity: 0, rendertype: 1, destroytime: 0});
var blockcrystal = Block.createSpecialType({lightlevel: 15, lightopacity: 15, explosionres: 5, destroytime: 1});
var sandcrystal = Block.createSpecialType({lightlevel: 5, lightopacity: 15, explosionres: 9, destroytime: 0.5});
var crystals = Block.createSpecialType({lightlevel: 7, lightopacity: 0, rendertype: 1, destroytime: 0});
IDRegistry.genItemID("neon");
IDRegistry.genBlockID("neons");
IDRegistry.genItemID("lutium");
IDRegistry.genBlockID("lutiums");
IDRegistry.genItemID("bioterium");
IDRegistry.genBlockID("bioteriums");
IDRegistry.genItemID("glowlite");
IDRegistry.genBlockID("glowlites");
IDRegistry.genItemID("retium");
IDRegistry.genBlockID("retiums");
Item.createItem("neon", "neon crystal", {name: "k", data: 0});
Block.createBlock("neons", [{name: "neon", texture: [["kk", 0]], inCreative: false}], crystals);
Item.createItem("lutium", "lutium crystal", {name: "k", data: 1});
Block.createBlock("lutiums", [{name: "lutium", texture: [["kk", 1]], inCreative: false}], crystals);
Item.createItem("bioterium", "bioterium crystal", {name: "k", data: 2});
Block.createBlock("bioteriums", [{name: "bioterium", texture: [["kk", 2]], inCreative: false}], crystals);
Item.createItem("glowlite", "glowlite crystal", {name: "k", data: 3});
Block.createBlock("glowlites", [{name: "glowlite", texture: [["kk", 3]], inCreative: false}], crystals);
Item.createItem("retium", "retium crystal", {name: "k", data: 4});
Block.createBlock("retiums", [{name: "retium", texture: [["kk", 4]], inCreative: false}], crystals);
ToolAPI.registerBlockMaterial(BlockID.neons, "plant");
ToolAPI.registerBlockMaterial(BlockID.lutiums, "plant");
ToolAPI.registerBlockMaterial(BlockID.bioteriums, "plant");
ToolAPI.registerBlockMaterial(BlockID.glowlites, "plant");
ToolAPI.registerBlockMaterial(BlockID.retiums, "plant");
TileRenderer.setEmptyCollisionShape(BlockID.neons);
TileRenderer.setEmptyCollisionShape(BlockID.lutiums);
TileRenderer.setEmptyCollisionShape(BlockID.bioteriums);
TileRenderer.setEmptyCollisionShape(BlockID.glowlites);
TileRenderer.setEmptyCollisionShape(BlockID.retiums);
Block.registerDropFunction("neons", function () {
    return [[ItemID.neon, 1, 0]];
});
Block.registerDropFunction("lutiums", function () {
    return [[ItemID.lutium, 1, 0]];
});
Block.registerDropFunction("bioteriums", function () {
    return [[ItemID.bioterium, 1, 0]];
});
Block.registerDropFunction("glowlites", function () {
    return [[ItemID.glowlite, 1, 0]];
});
Block.registerDropFunction("retiums", function () {
    return [[ItemID.retium, 1, 0]];
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.neons) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.lutiums) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.bioteriums) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.glowlites) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.retiums) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Item.registerUseFunction("neon", function (coords, item, block) {
    if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.sq) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.neons);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.playSound(coords.x, coords.y, coords.z, "dig.stone", 1, 0.8);
    }
});
Item.registerUseFunction("lutium", function (coords, item, block) {
    if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.sw) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.lutiums);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.playSound(coords.x, coords.y, coords.z, "dig.stone", 1, 0.8);
    }
});
Item.registerUseFunction("bioterium", function (coords, item, block) {
    if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.se) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.bioteriums);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.playSound(coords.x, coords.y, coords.z, "dig.stone", 1, 0.8);
    }
});
Item.registerUseFunction("glowlite", function (coords, item, block) {
    if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.sr) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.glowlites);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.playSound(coords.x, coords.y, coords.z, "dig.stone", 1, 0.8);
    }
});
Item.registerUseFunction("retium", function (coords, item, block) {
    if (World.getBlock(coords.x, coords.y, coords.z).id == BlockID.st) {
        World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.retiums);
        Player.setCarriedItem(item.id, item.count - 1, item.data);
        World.playSound(coords.x, coords.y, coords.z, "dig.stone", 1, 0.8);
    }
});
Item.addCreativeGroup("Crystals", Translation.translate("\u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u044b"), [ItemID.neon, ItemID.lutium, ItemID.bioterium, ItemID.glowlite, ItemID.retium]);
IDRegistry.genBlockID("kq");
Block.createBlock("kq", [{name: "neon down", texture: [["ka", 0]], inCreative: true}], crystal);
IDRegistry.genBlockID("kw");
Block.createBlock("kw", [{name: "neon up", texture: [["kb", 0]], inCreative: true}], crystal);
IDRegistry.genBlockID("ke");
Block.createBlock("ke", [{name: "lutium down", texture: [["ka", 1]], inCreative: true}], crystal);
IDRegistry.genBlockID("kr");
Block.createBlock("kr", [{name: "lutium up", texture: [["kb", 1]], inCreative: true}], crystal);
IDRegistry.genBlockID("kt");
Block.createBlock("kt", [{name: "bioterium down", texture: [["ka", 2]], inCreative: true}], crystal);
IDRegistry.genBlockID("ky");
Block.createBlock("ky", [{name: "bioterium up", texture: [["kb", 2]], inCreative: true}], crystal);
IDRegistry.genBlockID("ku");
Block.createBlock("ku", [{name: "glowlite down", texture: [["ka", 3]], inCreative: true}], crystal);
IDRegistry.genBlockID("ki");
Block.createBlock("ki", [{name: "gliwlite up", texture: [["kb", 3]], inCreative: true}], crystal);
IDRegistry.genBlockID("ko");
Block.createBlock("ko", [{name: "retium down", texture: [["ka", 4]], inCreative: true}], crystal);
IDRegistry.genBlockID("kp");
Block.createBlock("kp", [{name: "retium up", texture: [["kb", 4]], inCreative: true}], crystal);
IDRegistry.genBlockID("bq");
Block.createBlock("bq", [{name: "neon block", texture: [["kkkk", 0]], inCreative: true}], blockcrystal);
IDRegistry.genBlockID("bw");
Block.createBlock("bw", [{name: "lutin block", texture: [["kkkk", 1]], inCreative: true}], blockcrystal);
IDRegistry.genBlockID("be");
Block.createBlock("be", [{name: "bioterium block", texture: [["kkkk", 2]], inCreative: true}], blockcrystal);
IDRegistry.genBlockID("br");
Block.createBlock("br", [{name: "glowlite block", texture: [["kkkk", 3]], inCreative: true}], blockcrystal);
IDRegistry.genBlockID("bt");
Block.createBlock("bt", [{name: "retium block", texture: [["kkkk", 4]], inCreative: true}], blockcrystal);
IDRegistry.genBlockID("sq");
Block.createBlock("sq", [{name: "neon sand", texture: [["kkk", 0]], inCreative: true}], sandcrystal);
IDRegistry.genBlockID("sw");
Block.createBlock("sw", [{name: "lutin sand", texture: [["kkk", 1]], inCreative: true}], sandcrystal);
IDRegistry.genBlockID("se");
Block.createBlock("se", [{name: "bioterium sand", texture: [["kkk", 2]], inCreative: true}], sandcrystal);
IDRegistry.genBlockID("sr");
Block.createBlock("sr", [{name: "glowlite sand", texture: [["kkk", 3]], inCreative: true}], sandcrystal);
IDRegistry.genBlockID("st");
Block.createBlock("st", [{name: "retium sand", texture: [["kkk", 4]], inCreative: true}], sandcrystal);
Item.addCreativeGroup("AdultCrystals", Translation.translate("\u0412\u0437\u0440\u043e\u0441\u043b\u044b\u0435 \u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u044b"), [BlockID.kq, BlockID.kw, BlockID.ke, BlockID.kr, BlockID.kt, BlockID.ky, BlockID.ku, BlockID.ki, BlockID.ko, BlockID.kp]);
Item.addCreativeGroup("BlockCrystals", Translation.translate("\u0411\u043b\u043e\u043a\u0438 \u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u044b"), [BlockID.bq, BlockID.bw, BlockID.be, BlockID.br, BlockID.bt]);
Item.addCreativeGroup("SandCrystals", Translation.translate("\u041f\u0435\u0441\u043e\u043a \u041a\u0440\u0438\u0441\u0442\u0430\u043b\u043b\u044b"), [BlockID.sq, BlockID.sw, BlockID.se, BlockID.sr, BlockID.st]);
Block.registerDropFunction("kq", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.neon, 1, 0]];
});
Block.registerDropFunction("kw", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.neon, 1, 0]];
});
Block.registerDropFunction("ke", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.lutium, 1, 0]];
});
Block.registerDropFunction("kr", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.lutium, 1, 0]];
});
Block.registerDropFunction("kt", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.bioterium, 1, 0]];
});
Block.registerDropFunction("ky", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.bioterium, 1, 0]];
});
Block.registerDropFunction("ku", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.glowlite, 1, 0]];
});
Block.registerDropFunction("ki", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.glowlite, 1, 0]];
});
Block.registerDropFunction("ko", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.retium, 1, 0]];
});
Block.registerDropFunction("kp", function (coords, id, data, diggingLevel, toolLevel) {
    return [[ItemID.retium, 1, 0]];
});
Block.registerDropFunction("bq", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.bq, 1, 0]];
});
Block.registerDropFunction("bw", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.bw, 1, 0]];
});
Block.registerDropFunction("be", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.be, 1, 0]];
});
Block.registerDropFunction("br", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.br, 1, 0]];
});
Block.registerDropFunction("bt", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.bt, 1, 0]];
});
Block.registerDropFunction("sq", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.sq, 1, 0]];
});
Block.registerDropFunction("sw", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.sw, 1, 0]];
});
Block.registerDropFunction("se", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.se, 1, 0]];
});
Block.registerDropFunction("sr", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.sr, 1, 0]];
});
Block.registerDropFunction("st", function (coords, id, data, diggingLevel, toolLevel) {
    return [[BlockID.st, 1, 0]];
});
TileRenderer.setEmptyCollisionShape(BlockID.kq);
TileRenderer.setEmptyCollisionShape(BlockID.kw);
TileRenderer.setEmptyCollisionShape(BlockID.ke);
TileRenderer.setEmptyCollisionShape(BlockID.kr);
TileRenderer.setEmptyCollisionShape(BlockID.kt);
TileRenderer.setEmptyCollisionShape(BlockID.ky);
TileRenderer.setEmptyCollisionShape(BlockID.ku);
TileRenderer.setEmptyCollisionShape(BlockID.ki);
TileRenderer.setEmptyCollisionShape(BlockID.ko);
TileRenderer.setEmptyCollisionShape(BlockID.kp);
ToolAPI.registerBlockMaterial(BlockID.sq, "dirt", 1);
ToolAPI.registerBlockMaterial(BlockID.sw, "dirt", 1);
ToolAPI.registerBlockMaterial(BlockID.se, "dirt", 1);
ToolAPI.registerBlockMaterial(BlockID.sr, "dirt", 1);
ToolAPI.registerBlockMaterial(BlockID.st, "dirt", 1);
ToolAPI.registerBlockMaterial(BlockID.bq, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.bw, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.be, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.br, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.bt, "stone", 2, true);
ToolAPI.registerBlockMaterial(BlockID.kq, "plant");
ToolAPI.registerBlockMaterial(BlockID.kw, "plant");
ToolAPI.registerBlockMaterial(BlockID.ke, "plant");
ToolAPI.registerBlockMaterial(BlockID.kr, "plant");
ToolAPI.registerBlockMaterial(BlockID.kt, "plant");
ToolAPI.registerBlockMaterial(BlockID.ky, "plant");
ToolAPI.registerBlockMaterial(BlockID.ku, "plant");
ToolAPI.registerBlockMaterial(BlockID.ki, "plant");
ToolAPI.registerBlockMaterial(BlockID.ko, "plant");
ToolAPI.registerBlockMaterial(BlockID.kp, "plant");
Block.setDestroyLevel("bq", 2);
Block.setDestroyLevel("bw", 2);
Block.setDestroyLevel("be", 2);
Block.setDestroyLevel("br", 2);
Block.setDestroyLevel("bt", 2);
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.kq) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
        World.destroyBlock(coords.x, coords.y + 2, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.kw) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.ke) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
        World.destroyBlock(coords.x, coords.y + 2, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.kr) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.kt) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
        World.destroyBlock(coords.x, coords.y + 2, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.ky) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.ku) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
        World.destroyBlock(coords.x, coords.y + 2, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.ki) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.ko) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
        World.destroyBlock(coords.x, coords.y + 2, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y + 1, coords.z) == BlockID.kp) {
        World.destroyBlock(coords.x, coords.y + 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y - 1, coords.z) == BlockID.kq) {
        World.destroyBlock(coords.x, coords.y - 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y - 1, coords.z) == BlockID.ke) {
        World.destroyBlock(coords.x, coords.y - 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y - 1, coords.z) == BlockID.kt) {
        World.destroyBlock(coords.x, coords.y - 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y - 1, coords.z) == BlockID.ku) {
        World.destroyBlock(coords.x, coords.y - 1, coords.z, true);
    }
});
Callback.addCallback("DestroyBlock", function (coords, block, player) {
    if (World.getBlockID(coords.x, coords.y - 1, coords.z) == BlockID.ko) {
        World.destroyBlock(coords.x, coords.y - 1, coords.z, true);
    }
});
ToolLib.addBlockDropOnExplosion("bq");
ToolLib.addBlockDropOnExplosion("bw");
ToolLib.addBlockDropOnExplosion("be");
ToolLib.addBlockDropOnExplosion("br");
ToolLib.addBlockDropOnExplosion("bt");
ToolLib.addBlockDropOnExplosion("sq");
ToolLib.addBlockDropOnExplosion("sw");
ToolLib.addBlockDropOnExplosion("se");
ToolLib.addBlockDropOnExplosion("sr");
ToolLib.addBlockDropOnExplosion("st");
Recipes.addShaped({id: ItemID.neon, count: 4, data: 0}, ["a"], ["a", BlockID.bq, 0]);
Recipes.addShaped({id: ItemID.lutium, count: 4, data: 0}, ["a"], ["a", BlockID.bw, 0]);
Recipes.addShaped({id: ItemID.bioterium, count: 4, data: 0}, ["a"], ["a", BlockID.be, 0]);
Recipes.addShaped({id: ItemID.glowlite, count: 4, data: 0}, ["a"], ["a", BlockID.br, 0]);
Recipes.addShaped({id: ItemID.retium, count: 4, data: 0}, ["a"], ["a", BlockID.bt, 0]);

