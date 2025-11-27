/***
 *      ___      _                 _                    _    _            _     _ 
 *     / _ \    | |               | |                  | |  | |          | |   | |
 *    / /_\ \ __| |_   _____ _ __ | |_ _   _ _ __ ___  | |  | | ___  _ __| | __| |
 *    |  _  |/  ` \ \ / / _ \ '_ \| __| | | | '__/ _ \ | |/\| |/ _ \| '__| |/ _` |
 *    | | | | (_| |\ V /  __/ | | | |_| |_| | | |  __/ \  /\  / (_) | |  | | (_| |
 *    \_| |_/\__,_| \_/ \___|_| |_|\__|\__,_|_|  \___|  \/  \/ \___/|_|  |_|\__,_|
 *                                                                                
 *    by @MeduiIthron                                                                            
 */

IMPORT("ItemDictionary");
IMPORT("ToolLib");
IMPORT("EntityState");
IMPORT("ScalesRPG");
IMPORT("ThirstLib");

let __OBJECT_BLOCK_TYPE =  Block.createSpecialType({
    lightopacity: 2
})

String.prototype.rsplit = function (sep, maxsplit) {
    var split = this.split(sep);
    return maxsplit ? [split.slice(0, -maxsplit).join(sep)].concat(split.slice(-maxsplit)) : split;
}

const ChatColor = ModAPI.requireGlobal("ChatColor");
const Level = ModAPI.requireGlobal("Level");

/**
 * Возвращает дроп с блока
 * @param {*} position координаты блока
 * @param {*} id ID блока
 * @param {*} data data блока
 * @param {*} tool инструмент
 */
Block.getBlockDrop = function (position, id, data, tool) {
    var dropFunc = Block.dropFunctions[id];
    if (dropFunc) {
        return dropFunc(position, id, data, ToolAPI.getToolLevel(tool), {});
    }
    return [[id, 1, data]];
};

/**
 * Устанавливает уровень разрушения блоку
 * @param {*} id ID блока
 * @param {*} level уровень разрушения
 */
Block.setDestroyLevel = function (id, level) {
    Block.registerDropFunction(id, function (position, blockID, blockData, lvl, enchant) {
        if (lvl >= level) {
            return [[blockID, 1, 0]];
        }
        return [];
    }, level);
};

ItemDictionary.setItemCategory(17, "minecraft:wood");
ItemDictionary.setItemCategory(162, "minecraft:wood");

ItemDictionary.setItemCategory(50, "minecraft:tool.fire");
ItemDictionary.setItemCategory(259, "minecraft:tool.fire");

var Graphics = {};