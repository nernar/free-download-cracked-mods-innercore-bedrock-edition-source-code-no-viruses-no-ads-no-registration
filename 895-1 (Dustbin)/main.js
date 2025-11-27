importLib("EMRenderAPI", "*");
importLib("TileEntityTool", "*");
importLib("StorageInterface", "*");
Translation.addTranslation("Dustbin", { zh: "垃圾桶", en: "Dustbin" });
var DustbinAPI;
(function (DustbinAPI) {
    DustbinAPI.type = {};
    var ui = new UI.StandardWindow({
        standart: {
            header: { text: { text: Translation.translate("Dustbin") } },
            inventory: { standart: true },
            background: { standart: true }
        },
        elements: {
            "slotInPut": { type: "slot", x: 400, y: 140, size: 110 },
            "slotHold": { type: "slot", x: 60, y: 160, size: 80 }
        }
    });
    function registerTileEntity(id) {
        TileEntityTool.register(id);
        var tileEntity = TileEntityTool.get(id);
        tileEntity.useNetworkItemContainer = true;
        tileEntity.client = {};
        StorageInterface.createInterface(id, {
            slots: {
                "slotInPut": { input: true }
            },
            isValidInput: function (item, side, _tileEntity) {
                return true;
            }
        });
        tileEntity.getScreenName = function (player, coords) {
            return "DustbinUI";
        };
        tileEntity.getScreenByName = function (screenName) {
            return screenName == "DustbinUI" ? ui : null;
        };
        tileEntity.tick = function () {
            var slotInPut = this.container.getSlot("slotInPut");
            var slotHold = this.container.getSlot("slotHold");
            StorageInterface.checkHoppers(this);
            if (slotHold.id == 0) {
                slotHold.setSlot(slotInPut.id, slotInPut.count, slotInPut.data);
                slotInPut.setSlot(0, 0, 0);
            }
            if (slotHold.id != 0 && slotInPut.id != 0 && (slotHold.id != slotInPut.id || (slotHold.id == slotInPut.id && slotHold.data != slotInPut.data))) {
                slotHold.setSlot(slotInPut.id, slotInPut.count, slotInPut.data);
                slotInPut.setSlot(0, 0, 0);
            }
            if (slotHold.count == 64 && slotInPut.id != 0) {
                slotHold.setSlot(0, 0, 0);
            }
            if (slotHold.id != 0 && slotHold.id == slotInPut.id && slotHold.data == slotInPut.data && slotInPut.count > 0) {
                slotHold.setSlot(slotHold.id, slotHold.count + slotInPut.count > 64 ? 64 : slotHold.count + slotInPut.count, slotHold.data);
                slotInPut.setSlot(0, 0, 0);
                //this.container.validateSlot("slotInPut");
            }
            this.container.sendChanges();
        };
    }
    DustbinAPI.registerTileEntity = registerTileEntity;
    function registerDustbin(stringId, name, texture, type) {
        IDRegistry.genBlockID(stringId);
        DustbinAPI["type"][texture] = type;
        Block.createBlock(stringId, [{ name: name, texture: [[texture, 0]], inCreative: true }], { sound: "wood", solid: true });
        ToolAPI.registerBlockMaterial(BlockID[stringId], type);
        EMRenderTool.createModel({
            type: "static",
            disableCollision: false,
            blockID: BlockID[stringId],
            onCreate: function (emRender) {
                emRender.addModelBox(6 / 16, 15 / 16, 6 / 16, 1 - 6 / 16, 1, 1 - 6 / 16, [["stone_slab_top", 0]]);
                emRender.addBoxesWithArrayById(this.blockID, 0, {
                    "1": [1 / 16, 0, 1 / 16, 1 - 1 / 16, 1 / 16, 1 - 1 / 16],
                    "2": [2 / 16, 1 / 16, 1 / 16, 1 - 2 / 16, 13 / 16, 2 / 16],
                    "3": [1 - 2 / 16, 1 / 16, 2 / 16, 1 - 1 / 16, 13 / 16, 1 - 2 / 16],
                    "4": [1 - 2 / 16, 1 / 16, 1 - 1 / 16, 2 / 16, 13 / 16, 1 - 2 / 16],
                    "5": [1 / 16, 1 / 16, 2 / 16, 2 / 16, 13 / 16, 1 - 2 / 16],
                    "6": [0, 13 / 16, 0, 1, 14 / 16, 1],
                    "7": [1 / 16, 13 / 16, 1 / 16, 1 - 1 / 16, 15 / 16, 1 - 1 / 16],
                    "8": [6 / 16, 15 / 16, 6 / 16, 1 - 6 / 16, 1, 1 - 6 / 16]
                }, "default");
            }
        });
        this.registerTileEntity(BlockID[stringId]);
    }
    DustbinAPI.registerDustbin = registerDustbin;
    function registerRecipe(resultId, id1, data1, id2, data2) {
        Recipes.addShaped({ id: resultId, count: 1, data: 0 }, ["ntn", "non", "nnn"], ["n", id1, data1, "t", id2, data2]);
    }
    DustbinAPI.registerRecipe = registerRecipe;
})(DustbinAPI || (DustbinAPI = {}));
DustbinAPI.registerDustbin("Dustbin_acacia", "Acacia Dustbin", "acacia", "wood");
DustbinAPI.registerDustbin("Dustbin_oak", "Oak Dustbin", "oak", "wood");
DustbinAPI.registerDustbin("Dustbin_big_oak", "Big Oak Dustbin", "big_oak", "wood");
DustbinAPI.registerDustbin("Dustbin_birch", "Birch Dustbin", "birch", "wood");
DustbinAPI.registerDustbin("Dustbin_jungle", "Jungle Dustbin", "jungle", "wood");
DustbinAPI.registerDustbin("Dustbin_spruce", "Spruce Dustbin", "spruce", "wood");
DustbinAPI.registerRecipe(BlockID.Dustbin_acacia, VanillaBlockID.planks, 4, VanillaBlockID.smooth_stone, 0);
DustbinAPI.registerRecipe(BlockID.Dustbin_oak, VanillaBlockID.planks, 0, VanillaBlockID.smooth_stone, 0);
DustbinAPI.registerRecipe(BlockID.Dustbin_birch, VanillaBlockID.planks, 2, VanillaBlockID.smooth_stone, 0);
DustbinAPI.registerRecipe(BlockID.Dustbin_big_oak, VanillaBlockID.planks, 5, VanillaBlockID.smooth_stone, 0);
DustbinAPI.registerRecipe(BlockID.Dustbin_jungle, VanillaBlockID.planks, 3, VanillaBlockID.smooth_stone, 0);
DustbinAPI.registerRecipe(BlockID.Dustbin_spruce, VanillaBlockID.planks, 1, VanillaBlockID.smooth_stone, 0);
