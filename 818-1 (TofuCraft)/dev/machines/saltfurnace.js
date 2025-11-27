IDRegistry.genBlockID("tofucraft_saltfurnace");
Block.createBlock("tofucraft_saltfurnace", [{
    name: "saltfurnace",
    texture: [
        ["saltfurnace_bottom", 0],
        ["saltfurnace_top", 0],
        ["saltfurnace_side", 0],
        ["saltfurnace_front", 0],
        ["saltfurnace_side", 0],
        ["saltfurnace_side", 0]
    ],
    inCreative: true
}], {
    sound: "stone"
});
ToolAPI.registerBlockMaterial(BlockID.tofucraft_saltfurnace, "stone");

var tofucraft_saltfurnaceGui = new UI.StandardWindow({
    standart: {
        header: {
            color: android.graphics.Color.rgb(241, 242, 230),
            frame: "tofuheadergui",
            text: {
                text: Translation.translate("saltfurnace")
            }
        },
        inventory: {
            standart: true
        },
        background: {
            color: android.graphics.Color.rgb(241, 242, 230)
        }
    },
    drawing: [
        {type: "bitmap", x: 240, y: 180, bitmap: "tofu_arrow_0", scale: 6}, 
        {type: "bitmap", x: 123, y: 200, bitmap: "tofucraftfire_0", scale: 4.5}
    ],
    elements: {
        "arrowScale": {type: "scale", x: 240, y: 180, direction: 0, value: 0.5, bitmap: "tofu_arrow_1", scale: 6},
        "fireScale": {type: "scale", x: 123, y: 200, direction: 1, value: 0.5, bitmap: "tofucraftfire_1", scale: 4.5},
        "gui": {type: "image", x: 110, y: 80, bitmap: "saltfurnaceEmpty", scale: 5},
        "ingredient1": {type: "slot", bitmap: "tofucraftSlot", x: 108, y: 320, size: 90},
        "result1": {type: "slot", bitmap: "tofucraftSlot", x: 400, y: 170, size: 110},
    }
});
tofucraft_saltfurnaceGui.setStyle({"selection": "tofucraftSelect"});
tcMachineAPI.baseRegister(BlockID.tofucraft_saltfurnace, 4, [
    ["saltfurnace_bottom", 0],
    ["saltfurnace_top", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_front", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_side", 0]
], [
    ["saltfurnace_bottom", 0],
    ["saltfurnace_top_lit", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_front_lit", 0],
    ["saltfurnace_side", 0],
    ["saltfurnace_side", 0]
], {
    useNetworkItemContainer: true,
    defaultValues: {
        isActive: false,
        liquid: 0,
        burn: 0,
        burnMax: 200,
        make: 0,
        check: false,
        water: 0
    },
    getFacing: function() {
        return this.blockSource.getBlockData(this.x, this.y, this.z);
    },
    tick: function() {
        var topBlock = this.blockSource.getBlock(this.x, this.y + 1, this.z);
        if (topBlock.id == VanillaTileID.cauldron ) {
            if (topBlock.data > 0) {
                this.data.check = true;
                this.data.water = 1;
                this.container.sendEvent("refreshUI", "saltfurnaceWater");
            } else {
                this.container.sendEvent("refreshUI", "saltfurnaceContianer");
            };
        } else {
            this.container.sendEvent("refreshUI", "saltfurnaceEmpty");
        };
        this.container.sendChanges();
        this.container.setScale("fireScale", this.data.burn / this.data.burnMax);
        this.container.setScale("arrowScale", this.data.make / 200);
    },
    client: {
        containerEvents: {
            refreshUI: function (container, window, content, data) {
                if (content) {
                    content.elements.gui.bitmap = data;
                };
            }
        }
    },
    renderModel: function() {
        if (this.networkData.getBoolean("isActive")) {
            let blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
            let blockData = this.networkData.getInt("blockData");
            TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, blockData);
        };
        if (!this.networkData.getBoolean("isActive")) {
            let blockId = Network.serverToLocalId(this.networkData.getInt("blockId"));
            let meta = this.networkData.getInt("meta");
            TileRenderer.mapAtCoords(this.x, this.y, this.z, blockId, meta);
        };
    },
    clientLoad: function() {
        this.renderModel();
        var self = this;
        this.networkData.addOnDataChangedListener(function(data, isExternal) {
            self.renderModel();
        });
    },
    getScreenByName: function(screenName) {
        return tofucraft_saltfurnaceGui;
    },
    getScreenName: function(screenName) {
        return "tofucraft_saltfurnaceGui";
    },
    setActive: function(isActive) {
        if (this.networkData.getBoolean("isActive") != isActive) {
            this.networkData.putBoolean("isActive", isActive);
            this.networkData.sendChanges();
        }
    }
});