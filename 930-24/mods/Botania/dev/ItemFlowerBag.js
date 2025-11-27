let ItemFlowerBag = (function (_super) {
    __extends(ItemFlowerBag, _super);
    const vanillizedContainers = [];
    function ItemFlowerBag(nameID) {
        _super.apply(this, arguments);
        this.setMaxStack(1);
        this.containers = {};
        this.nextUnique = 1;
        this.guiVanillized = false;
        let that = this;
        Saver.addSavesScope(nameID + "ContainerScope", function read(scope) {
            that.nextUnique = scope.nextUnique || 1;
            that.containers = scope.containers || {};
        }, function save() {
            return {nextUnique: that.nextUnique, containers: that.containers};
        });
        this.createUI();
        ItemContainer.registerScreenFactory(this.icon.name + "_container.ui", function (container, name) {
            return that.getUI();
        });
        return this;
    }
    ItemFlowerBag.prototype.vanillize = function (key) {
        if (vanillizedContainers.indexOf(key) == -1) {
            vanillizedContainers.push(key);
            if (this.guiVanillized) {
                VanillaSlots.registerServerEventsForContainer(this.containers[key]);
            } else {
                VanillaSlots.registerForWindow(this.getUI(), this.containers[key]);
                this.guiVanillized = true;
            }
        }
    };
    ItemFlowerBag.prototype.setupContainer = function (container) {
        container.setClientContainerTypeName(this.icon.name + "_container.ui");
        container.setGlobalAddTransferPolicy(function (container, name, id, count, data) {
            return (id == ModBlocks.mysticalFlower.id && name == "slot" + data) ? (count || -1) : -1;
        });
        container.setGlobalDirtySlotListener(function (container, _name, _slot) {
            let dirty = false;
            for (let i = 0; i < 16; i++) {
                let slot = container.getSlot("slot" + i);
                if (slot.isEmpty() || slot.id != ModBlocks.mysticalFlower.id) {
                    dirty = true;
                    container.setSlot("slot" + i, ModBlocks.mysticalFlower.id, 0, i);
                }
            }
            if (dirty) {
                container.sendChanges();
            }
        });
        for (let i = 0; i < 16; i++) {
            container.setSlot("slot" + i, ModBlocks.mysticalFlower.id, 0, i);
        }
        container.sendChanges();
    };
    ItemFlowerBag.prototype.openGuiFor = function (item, player) {
        let client = player.getClient();
        if (!client) {
            return;
        }
        let key;
        let container;
        if (item.getData() === 0) {
            item.setData(this.nextUnique++);
        }
        key = "d" + item.getData();
        container = this.containers[key];
        if (!container) {
            container = new ItemContainer();
            this.containers[key] = container;
        }
        if (!container.getClientContainerTypeName()) {
            this.setupContainer(container);
        }
        this.vanillize(key);
        container.openFor(client, this.icon.name);
    };
    ItemFlowerBag.prototype.onItemUse = function (coords, item, block, player) {
        this.openGuiFor(item, player);
    };
    ItemFlowerBag.prototype.getUI = function () {
        return this.ui;
    };
    ItemFlowerBag.prototype.createUI = function () {
        let header = Translation.translate("item.botania." + this.icon.name);
        let screenHeight = UI.getScreenHeight();
        let windowHeight = screenHeight * 0.8;
        let windowWidth = windowHeight * 1.0602;
        let xPadding = (1000 - windowWidth) / 2;
        let yPadding = (screenHeight - windowHeight) / 2;
        this.ui = new UI.Window({location: {x: 0, y: 0, width: 1000, height: UI.getScreenHeight()}, drawing: [{type: "background", color: Color.argb(90, 0, 0, 0)}, {type: "frame", bitmap: "flower_bag_frame", scale: 2.5, x: xPadding, y: yPadding, width: windowWidth, height: windowHeight}], elements: (function () {
            let result = {textHeader: {type: "text", x: 500, y: yPadding + windowHeight * 0.01, font: {color: DyeColor.GRAY.getColorValue(), size: 15, alignment: UI.Font.ALIGN_CENTER}, text: header}, textInventory: {type: "text", x: xPadding + (windowWidth * 0.03), y: yPadding + (windowHeight * 0.42), font: {color: DyeColor.GRAY.getColorValue(), size: 15}, text: Translation.translate("botaniamisc.inventory")}, closeButton: {type: "closeButton", bitmap: "classic_close_button", bitmap2: "classic_close_button_down", scale: 3, x: 1000 - xPadding - windowWidth * 0.1, y: yPadding + windowHeight * 0.01}};
            let slotSize = (windowWidth - (windowWidth * 0.06)) / 9;
            for (let i = 0; i < 9; i++) {
                result["invSlot" + i] = {type: "invSlot", x: (xPadding + windowWidth * 0.03) + slotSize * i, y: screenHeight - yPadding - (windowHeight * 0.03) - slotSize, size: slotSize, index: i};
            }
            for (let i = 9; i < 36; i++) {
                result["invSlot" + i] = {type: "invSlot", x: (xPadding + windowWidth * 0.03) + slotSize * (i % 9), y: (yPadding + windowHeight - slotSize - 4 * slotSize - windowHeight * 0.07) + Math.floor(i / 9) * slotSize, size: slotSize, index: i};
            }
            for (let i = 0; i < 16; i++) {
                result["slot" + i] = {type: "slot", x: (xPadding + windowWidth * 0.03 + slotSize / 2) + slotSize * (i % 8), y: (yPadding + windowHeight * 0.13) + Math.floor(i / 8) * slotSize, size: slotSize, visual: false};
            }
            return result;
        }())});
        this.ui.setInventoryNeeded(true);
        this.ui.setCloseOnBackPressed(true);
    };
    return ItemFlowerBag;
}(ItemMod));

