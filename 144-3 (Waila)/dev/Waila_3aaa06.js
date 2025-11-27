const Waila = {container: new UI.Container(), enableToShow: false, growthStages: {}, extensions: {}, globalExtensions: [], height: 35, init: function () {
    this.setGrowthStages(59, 7);
    this.setGrowthStages(141, 7);
    this.setGrowthStages(142, 7);
    this.setGrowthStages(244, 7);
    this.popupWindow = new UI.Window({location: {x: WailaConfig.x, y: WailaConfig.y, width: 300, height: this.height}, drawing: [{type: "color", color: Style.COLOR}], elements: {"frame": {type: "frame", x: 0, y: 0, z: -1, width: 1000, height: 300, bitmap: Style.TEX_FRAME, scale: 5}, "slot": {type: "slot", x: 10, y: 10, size: 210, bitmap: "_default_slot_empty", isTransparentBackground: true, visual: true}, "name": {type: "text", text: "", x: 200, y: 30, font: {color: Style.DEF, size: 50}}}});
    this.popupWindow.setAsGameOverlay(true);
}, translate: function (key, defaultValue) {
    let translated = Translation.translate(key);
    if (translated !== key) {
        return translated;
    }
    return defaultValue;
}, buildBlockInfo: function (id, data, elements) {
    let y = 100;
    let tile = World.getTileEntity(this.blockPos.x, this.blockPos.y, this.blockPos.z);
    let extension = this.extensions[id];
    if (extension) {
        let info = extension(id, data, elements, tile, y);
        if (info) {
            y = info;
        }
    }
    for (let i in this.globalExtensions) {
        let info = this.globalExtensions[i](id, data, elements, tile, y);
        if (info) {
            y = info;
        }
    }
    if (WailaConfig.extModName) {
        elements["modName"] = {type: "text", text: BlockList.getModName(id), x: 200, y: y, font: {color: Style.MOD, size: 40}};
        Waila.requireHeight(15);
    }
}, buildEntityInfo: function (entity, type, elements) {
    elements["entityType"] = {type: "text", text: Waila.translate("waila.entity_type", "Entity Type") + ": " + type, x: 200, y: 100, font: {color: Style.DEF, size: 40}};
    if (type < 64 || type > 103) {
        this.addBar({elements: elements, progress: Entity.getHealth(entity), progressMax: Entity.getMaxHealth(entity), prefix: "health"});
    }
}, showPopup: function (block, entity, type) {
    let elements = this.popupWindow.getContent().elements;
    for (let i in elements) {
        if (i !== "slot" && i !== "name" && i !== "frame") {
            elements[i] = null;
        }
    }
    let slot = this.container.getSlot("slot");
    slot.count = 1;
    if (block) {
        slot.id = block.id;
        slot.data = block.data;
        let name = Item.getName(block.id, block.data);
        elements["name"].text = name.length <= 18 ? name : name.substr(0, 18) + "...";
        this.buildBlockInfo(block.id, block.data, elements);
    } else {
        slot.id = 383;
        slot.data = type;
        elements["name"].text = this.translate("waila.entity", "Entity");
        this.buildEntityInfo(entity, type, elements);
    }
    this.height = Math.max(this.height, MINIMAL_WINDOW_HEIGHT);
    if (this.lastHeight !== this.height || !this.container.isOpened()) {
        let location = this.popupWindow.getLocation();
        location.setSize(300, this.height);
        this.lastHeight = this.height;
        elements["frame"].height = location.globalToWindow(this.height);
        UI.getContext().runOnUiThread(new java.lang.Runnable({run: function () {
            Waila.container.openAs(Waila.popupWindow);
        }}));
    }
    this.height = 35;
}, addBar: function (obj) {
    let elements = obj.elements;
    let prefix = obj.prefix;
    if (!elements || !prefix) {
        Logger.Log("Elements or prefix property for Waila bar is not set", "ERROR");
        return;
    }
    obj.progress = obj.progress || 0;
    obj.barTexture = obj.barTexture || "waila_bar";
    obj.barBgTexture = obj.barBgTexture || Style.TEX_BAR_FRAME;
    let yPos = obj.yPos || 160;
    elements[prefix + "Bar"] = {type: "scale", x: 200, y: yPos, value: obj.progressMax < 0 ? 1 : obj.progress / obj.progressMax, bitmap: obj.barTexture, scale: 3};
    elements[prefix + "BarBg"] = {type: "image", bitmap: obj.barBgTexture, x: 200, y: yPos, scale: 3};
    elements[prefix] = {type: "text", text: obj.progress + "/" + obj.progressMax, x: 215, y: yPos + 8, font: {color: obj.fontColor || Color.WHITE, size: 40}};
}, isValidTool: function (material, blockLevel) {
    if (material === "unbreaking") {
        return false;
    }
    if (!blockLevel) {
        return true;
    }
    let toolData = ToolAPI.getToolData(this.lastTool);
    return toolData && toolData.blockMaterials && toolData.blockMaterials[material] && toolData.toolMaterial.level >= blockLevel;
}, getGrowthStages: function (id) {
    let stages = this.growthStages[id];
    if (stages) {
        return stages;
    }
    if (CropRegistry.isCrop(id)) {
        return 2;
    }
    return -1;
}, setGrowthStages: function (blockId, stages) {
    this.growthStages[blockId] = stages;
}, addExtension: function (id, func) {
    if (!id) {
        Logger.Log("Block id is not correct (Extension Registration)", "ERROR");
        return;
    }
    if (!func) {
        Logger.Log("Function is not correct (Extension Registration)", "ERROR");
        return;
    }
    this.extensions[id] = func;
}, addGlobalExtension: function (func) {
    if (!func) {
        Logger.Log("Function is not correct (Global Extension Registration)", "ERROR");
        return;
    }
    this.globalExtensions.push(func);
}, requireHeight: function (value) {
    this.height += value;
}};
Waila.init();
Callback.addCallback("tick", function () {
    if (Waila.enableToShow) {
        if (World.getThreadTime() % WailaConfig.checkTime === 0) {
            let pointed = getPointed();
            let pos = pointed.pos;
            let lastPos = Waila.blockPos;
            let entity = Waila.pointedEntity;
            Waila.lastTool = Player.getCarriedItem().id;
            if (lastPos && lastPos.x === pos.x && lastPos.y === pos.y && lastPos.z === pos.z) {
                return;
            }
            if (entity !== -1 && pointed.entity === entity) {
                return;
            }
            Waila.blockPos = pos;
            entity = Waila.pointedEntity = pointed.entity;
            if (pos.x !== 0 || pos.y !== 0 || pos.z !== 0) {
                Waila.showPopup(World.getBlock(pos.x, pos.y, pos.z));
                return;
            }
            let type = Entity.getType(entity);
            if (entity !== -1 && type !== 71) {
                Waila.showPopup(null, entity, type);
                return;
            }
            Waila.container.close();
        }
    } else {
        if (Waila.container.isOpened()) {
            Waila.container.close();
        }
    }
});
Callback.addCallback("NativeGuiChanged", function (screenName) {
    if (!(Waila.enableToShow = screenName === "hud_screen" || screenName === "in_game_play_screen")) {
        Waila.container.close();
    }
});

