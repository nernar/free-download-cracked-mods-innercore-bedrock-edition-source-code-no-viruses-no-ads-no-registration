IMPORT("RecipeTileEntity");
IMPORT("extends", "__extends");
IDRegistry.genBlockID("craftingTable");
Block.createBlockWithRotation("craftingTable", [{name: "Stone Crafting Table", texture: [["craftingTable_botton", 0], ["craftingTable_top", 0], ["craftingTable_side", 0], ["craftingTable_front", 0], ["craftingTable_side", 0], ["craftingTable_side", 0]], inCreative: true}], "opaque");
Block.setDestroyTime(BlockID.craftingTable, 2);
let getHeight = UI.getScreenHeight();
let sizeSlots = getHeight / 10;
let craftingTableUI = new UI.StandartWindow({standart: {header: {text: {text: "Stone Crafting Table"}}, inventory: {standart: true}, background: {color: android.graphics.Color.parseColor("#c6c6c6")}}, drawing: [], elements: {"inputSlot0": {type: "slot", x: getHeight * 1.1, y: getHeight / 3.4, size: sizeSlots}, "inputSlot1": {type: "slot", x: getHeight * 1.1 + sizeSlots, y: getHeight / 3.4, size: sizeSlots}, "inputSlot2": {type: "slot", x: getHeight * 1.1 + sizeSlots * 2, y: getHeight / 3.4, size: sizeSlots}, "inputSlot3": {type: "slot", x: getHeight * 1.1, y: getHeight / 3.4 + sizeSlots, size: sizeSlots}, "inputSlot4": {type: "slot", x: getHeight * 1.1 + sizeSlots, y: getHeight / 3.4 + sizeSlots, size: sizeSlots}, "inputSlot5": {type: "slot", x: getHeight * 1.1 + sizeSlots * 2, y: getHeight / 3.4 + sizeSlots, size: sizeSlots}, "inputSlot6": {type: "slot", x: getHeight * 1.1, y: getHeight / 3.4 + sizeSlots * 2, size: sizeSlots}, "inputSlot7": {type: "slot", x: getHeight * 1.1 + sizeSlots, y: getHeight / 3.4 + sizeSlots * 2, size: sizeSlots}, "inputSlot8": {type: "slot", x: getHeight * 1.1 + sizeSlots * 2, y: getHeight / 3.4 + sizeSlots * 2, size: sizeSlots}, "outputSlot": {type: "slot", x: getHeight * 1.1 + sizeSlots * 4.8, y: getHeight / 3.4 + sizeSlots, size: sizeSlots}, "arrow": {type: "image", x: getHeight * 1.1 + sizeSlots * 3.1, y: getHeight / 3.4 + sizeSlots, bitmap: "arrow", scale: 3}}});
const SBworkbench = new RecipeTE.Workbench({columns: 3, rows: 3});
let __extends = (this && this.__extends) || (function () {
    let extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf || ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) || function (d, b) {
            for (let p in b) {
                if (Object.prototype.hasOwnProperty.call(b, p)) {
                    d[p] = b[p];
                }
            }
        };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null) {
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        }
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
let SBworkbenchTE = (function (_super) {
    __extends(SBworkbenchTE, _super);
    function SBworkbenchTE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBworkbenchTE.prototype.getScreenName = function () {
        return "main";
    };
    SBworkbenchTE.prototype.getScreenByName = function () {
        return craftingTableUI;
    };
    SBworkbenchTE.prototype.getInputSlots = function () {
        return "inputSlot";
    };
    SBworkbenchTE.prototype.getOutputSlot = function () {
        return "outputSlot";
    };
    return SBworkbenchTE;
}(RecipeTE.WorkbenchTileEntity));
TileEntity.registerPrototype(BlockID["craftingTable"], new SBworkbenchTE(SBworkbench));

