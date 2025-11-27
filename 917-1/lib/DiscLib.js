LIBRARY({name: "DiscLib", version: 1, api: "CoreEngine"});
IMPORT("SoundAPI");
let DiscLib = {createMusicDisc: function (discName, songName, tex) {
    if (typeof discName != "string" || typeof songName != "string") {
        alert("DiscLib: Parameter data type error");
        return;
    }
    if (typeof tex != "string" || tex == "") {
        tex = "record_strad";
    }
    let song = new Sound(songName + ".ogg");
    let item_id = IDRegistry.genItemID(discName);
    let block_id = IDRegistry.genBlockID("jukebox_" + discName);
    let block_coords = undefined;
    Item.createItem(discName, "\xa7bMusic Disc\n\xa77Name: " + discName + "\xa7r", {name: tex}, {stack: 1});
    Block.createBlock("jukebox_" + discName, [{texture: [["jukebox_side", 0], ["jukebox_top", 0], ["jukebox_side", 0], ["jukebox_side", 0], ["jukebox_side", 0], ["jukebox_side", 0]], inCreative: false}], Block.createSpecialType({base: 5}));
    Callback.addCallback("ItemUse", function (coords, item, block, isExternal, player) {
        if (item.id == item_id && block.id == 84) {
            Commands.exec("/title @p actionbar \xa79Now playing: " + discName);
            Entity.setCarriedItem(player, item_id, item.count - 1, 0);
            World.setBlock(coords.x, coords.y, coords.z, block_id, 0);
            song.setInBlock(coords.x, coords.y, coords.z, 10);
            song.play();
            block_coords = [coords.x, coords.y, coords.z];
        }
        if (block.id == block_id) {
            World.drop(coords.x, coords.y + 1, coords.z, item_id, 1, 0);
            World.setBlock(coords.x, coords.y, coords.z, 84, 0);
            song.stop();
            block_coords = undefined;
        }
    });
    Callback.addCallback("LevelPreLeft", function () {
        song.stop();
    });
    Callback.addCallback("tick", function () {
        if (block_coords == undefined) {
            return;
        }
        if (World.getBlock(block_coords[0], block_coords[1], block_coords[2]).id != block_id) {
            song.stop();
            block_coords = undefined;
        }
    });
    Block.registerDropFunction(block_id, function () {
        song.stop();
        return [[84, 1, 0], [item_id, 1, 0]];
    });
    return item_id;
}};
EXPORT("DiscLib", DiscLib);

