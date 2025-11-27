IMPORT("AxisAlignedBB");
IMPORT("StorageInterface");
function addTooltip(id, tooltip) {
    Item.registerNameOverrideFunction(id, function (item, translation, name) {
        return translation + "\n§7" + Translation.translate(tooltip);
    });
}
function extractSpecifiedItemsFromContainer(inputTile, container, side, item, maxCount, oneStack) {
    var outputTile = container.tileEntity;
    var count = 0;
    var slots = [];
    var slotsInitialized = false;
    var outputSide = side ^ 1;
    if (outputTile) {
        if (outputTile.interface) {
            slots = outputTile.interface.getOutputSlots(outputSide);
            slotsInitialized = true;
        }
        else if (outputTile.getTransportSlots) {
            slots = outputTile.getTransportSlots().output || [];
            slotsInitialized = true;
        }
    }
    if (!slotsInitialized) {
        slots = StorageInterface.getContainerSlots(container, 2, outputSide);
    }
    for (var i in slots) {
        var slot = container.getSlot(slots[i]);
        if (slot.id == item.id && slot.data == item.data) {
            var added = (function (item, side, maxCount) {
                if (!this.isValidInput(item))
                    return 0;
                var count = 0;
                for (var name in this.slots) {
                    var slotData = this.slots[name];
                    if (slotData.input && (!slotData.isValid || slotData.isValid(item, side, this.tileEntity))) {
                        var slot_1 = inputTile.getSlot(name);
                        count += StorageInterface.addItemToSlot(item, slot_1, maxCount - count);
                        if (item.count == 0 || count >= maxCount) {
                            break;
                        }
                    }
                }
                return count;
            })(slot, side, maxCount - count);
            if (added > 0) {
                count += added;
                if (!container.slots) {
                    container.setSlot(slots[i], slot.id, slot.count, slot.data);
                }
                if (oneStack || count >= maxCount) {
                    break;
                }
            }
        }
    }
    return count;
}
IDRegistry.genBlockID("wireless_core");
Block.createBlock("wireless_core", [
    { name: "Wireless Core", texture: [["wireless_core", 1]], inCreative: true }
], "solid");
IDRegistry.genBlockID("wireless_point");
Block.createBlock("wireless_point", [
    { name: "Wireless Point", texture: [["wireless_point", 0]], inCreative: true }
], "solid");
IDRegistry.genBlockID("wireless_input");
Block.createBlock("wireless_input", [
    { name: "Wireless Input", texture: [["wireless_input", 0]], inCreative: true }
], "solid");
// IDRegistry.genBlockID("wireless_output");
// Block.createBlock("wireless_output", [
//     {name: "Wireless Output", texture: [["wireless_output", 0]], inCreative: true}
// ], "solid");
IDRegistry.genBlockID("wireless_requester");
Block.createBlock("wireless_requester", [
    { name: "Wireless Requester", texture: [["wireless_requester", 0]], inCreative: true }
], "solid");
IDRegistry.genBlockID("wireless_clipboard");
Block.createBlock("wireless_clipboard", [
    { name: "Wireless Clipboard", texture: [["wireless_clipboard", 0]], inCreative: true }
], "solid");
Translation.addTranslation("Wireless Core", { ru: "Ядро беспроводной сети" });
Translation.addTranslation("Wireless Point", { ru: "Обьект беспроводной сети" });
Translation.addTranslation("Wireless Requester", { ru: "Поисковик беспроводной сети" });
Translation.addTranslation("Wireless Input", { ru: "Импортер безпроводной сети" });
Translation.addTranslation("Wireless Output", { ru: "Экспортер безпроводной сети" });
Translation.addTranslation("Wireless Clipboard", { ru: "Буфер обмена безпроводной сети" });
var wirelessCore = "The heart of wireless network\nAllows to form network within\n8 blocks radius";
Translation.addTranslation(wirelessCore, { ru: "Сердце беспроводной сети\nПозволяет создать сеть\nиз блоков в радиусе 8 метров" });
var wirelessPoint = "The object of wireless network\nRepresents inventory\nabove it";
Translation.addTranslation(wirelessPoint, { ru: "Член беспроводной сети\nОтображает в сети\nинвентарь над собой" });
var wirelessRequester = "The searcher in wireless network\nAllows to search items in network's inventories\nThe format of query:\n'count, item";
Translation.addTranslation(wirelessRequester, { ru: "Ищет в беспроводной сети\nПозволяет искать предметы в инвентарях сети\nФормат запроса: 'количество, предмет'" });
var wirelessInput = "The insertion point of network\nPushes items into connected network";
Translation.addTranslation(wirelessInput, { ru: "Отправная точка в сети\nОтправляет предметы в сеть, к которой подключен" });
var wirelessOutput = "The extraction point of network\nPulls configured item from network into above inventory";
Translation.addTranslation(wirelessOutput, { ru: "Выходная точка беспроводной сети\nВытаскивает настроенный тип предмета\nиз сети и кладёт в инвентарь выше" });
var wirelessClipboard = "The storage of network's requests\nStores last request and executes it on redstone pulse";
Translation.addTranslation(wirelessClipboard, { ru: "Хранилище запросов беспроводной сети\nХранит последний запрос и исполняет его при получении\nредстоун-импульса" });
addTooltip(BlockID["wireless_core"], wirelessCore);
addTooltip(BlockID["wireless_point"], wirelessPoint);
addTooltip(BlockID["wireless_requester"], wirelessRequester);
addTooltip(BlockID["wireless_input"], wirelessInput);
addTooltip(BlockID["wireless_clipboard"], wirelessClipboard);
// addTooltip(BlockID["wireless_output"], wirelessOutput);
Callback.addCallback("PreLoaded", function () {
    Recipes.addShaped({ id: BlockID["wireless_core"], count: 1, data: 0 }, [
        "ibi",
        "bdb",
        "ibi"
    ], ['i', VanillaItemID.iron_ingot, 0, 'b', VanillaItemID.dye, 4, 'd', VanillaItemID.diamond, 0]);
    Recipes.addShaped({ id: BlockID["wireless_point"], count: 1, data: 0 }, [
        "ibi",
        "i i",
        "ibi"
    ], ['i', VanillaItemID.iron_ingot, 0, 'b', VanillaItemID.dye, 13]);
    Recipes.addShaped({ id: BlockID["wireless_input"], count: 1, data: 0 }, [
        "ibi",
        "i i",
        "ibi"
    ], ['i', VanillaItemID.iron_ingot, 0, 'b', VanillaItemID.dye, 2]);
    Recipes.addShaped({ id: BlockID["wireless_clipboard"], count: 1, data: 0 }, [
        "ibi",
        "i i",
        "ibi"
    ], ['i', VanillaItemID.iron_ingot, 0, 'b', VanillaItemID.dye, 11]);
});
var NetworkPoint = /** @class */ (function () {
    function NetworkPoint() {
    }
    NetworkPoint.prototype.setCoords = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    };
    ;
    NetworkPoint.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    ;
    NetworkPoint.prototype.setPriority = function (priority) {
        this.priority = priority;
        return this;
    };
    ;
    NetworkPoint.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    return NetworkPoint;
}());
var NetworkPartTypes;
(function (NetworkPartTypes) {
    NetworkPartTypes[NetworkPartTypes["Point"] = 0] = "Point";
    NetworkPartTypes[NetworkPartTypes["Requester"] = 1] = "Requester";
    NetworkPartTypes[NetworkPartTypes["Input"] = 2] = "Input";
    NetworkPartTypes[NetworkPartTypes["Output"] = 3] = "Output";
    NetworkPartTypes[NetworkPartTypes["Monitor"] = 4] = "Monitor";
    NetworkPartTypes[NetworkPartTypes["Clipboard"] = 5] = "Clipboard";
})(NetworkPartTypes || (NetworkPartTypes = {}));
var SCAN_SIZE = 8;
// class NetworkHelper {
//     public points : NetworkPoint[];
//     public addPoint(x : number, y : number, z : number) : void {
//         this.points.push(new NetworkPoint(x, y, z));
//     }
//     public insertPoint(point: NetworkPoint) : void {
//         this.points.push(point);
//     }
//     public accessPoint(x : number, y : number, z : number, color? : number) : NetworkPoint {
//         this.points.forEach(element => {
//             if (color != null) {
//                 if (element.x == x && element.y == y && element.z == z && element.color == color){
//                     return element;
//                 }
//             } else if (element.x == x && element.y == y && element.z == z && element.color == color){
//                 return element;
//             }
//         });
//         return null;
//     }
// }
var network_object = /** @class */ (function () {
    function network_object() {
    }
    network_object.createPoint = function (x, y, z, color, priority, type) {
        var point = new NetworkPoint().setCoords(x, y, z);
        if (color != null)
            point.setColor(color);
        else
            point.setColor(0);
        if (priority != null)
            point.setPriority(priority);
        else
            point.setPriority(0);
        if (type != null)
            point.setType(type);
        else
            point.setType(NetworkPartTypes.Point);
        return point;
    };
    ;
    network_object.submitAddition = function (x, y, z, color, priority, type) {
        this.additionList.push(this.createPoint(x, y, z, color, priority, type));
    };
    ;
    network_object.submitDeletion = function (x, y, z, color, priority, type) {
        this.deletionList.push(this.createPoint(x, y, z, color, priority, type));
    };
    ;
    network_object.additionList = new Array();
    network_object.deletionList = new Array();
    return network_object;
}());
var WirelessRegistry = /** @class */ (function () {
    function WirelessRegistry() {
    }
    WirelessRegistry.registerNetworkPart = function (id, prototype) {
        prototype.created = prototype.created || function () {
            network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, this.defaultValues.type);
        };
        prototype.destroy = prototype.destroy || function () {
            network_object.submitDeletion(this.x, this.y, this.z, this.data.color, this.data.priority, this.defaultValues.type);
            return false;
        };
        ToolAPI.registerBlockMaterial(id, "stone", 1, true);
        Block.setDestroyTime(id, 3);
        TileEntity.registerPrototype(id, prototype);
    };
    return WirelessRegistry;
}());
var guiWirelessCore = new UI.StandartWindow({
    standart: {
        header: { text: { text: "Wireless Core" } },
        inventory: { standart: true },
        background: { standart: true }
    },
    elements: {
        "explainingText": { type: "text", x: 500, y: 172, width: 300, height: 30, text: "Insert item to change network's ID" },
        "slotID": { type: "slot", x: 600, y: 210 }
    }
});
WirelessRegistry.registerNetworkPart(BlockID["wireless_core"], {
    defaultValues: {
        scan_radius: 8,
        color: 0,
        network: []
    },
    scanRadius: function () {
        return this.data.scan_radius;
    },
    getGuiScreen: function () {
        return guiWirelessCore;
    },
    created: function () { },
    destroy: function () { return false; },
    reloadNetwork: function () {
        var _this = this;
        var aabb = new AxisAlignedBB(this.x - this.scanRadius(), this.y - this.scanRadius(), this.z - this.scanRadius(), this.x + this.scanRadius(), this.y + this.scanRadius(), this.z + this.scanRadius());
        network_object.additionList.forEach(function (element) {
            if (aabb.contains({ x: element.x, y: element.y, z: element.z }) && element.color == _this.data.color) {
                _this.data.network.push(network_object.additionList.splice(network_object.additionList.indexOf(element))[0]);
                var te = World.getTileEntity(element.x, element.y, element.z);
                if (te.onRegistering)
                    te.onRegistering(_this);
            }
        });
        network_object.deletionList.forEach(function (element) {
            if (aabb.contains({ x: element.x, y: element.y, z: element.z }) && element.color == _this.data.color) {
                network_object.deletionList.splice(network_object.deletionList.indexOf(element));
                _this.data.network.splice(network_object.deletionList.indexOf(element));
            }
        });
        this.data.network.sort(function (a, b) {
            var distance1 = (_this.x - a.x) * (_this.x - a.x) + (_this.y - a.y) * (_this.y - a.y) +
                (_this.z - a.z) * (_this.z - a.z);
            var distance2 = (_this.x - b.x) * (_this.x - b.x) + (_this.y - b.y) * (_this.y - b.y) +
                (_this.z - b.z) * (_this.z - b.z);
            if (distance1 < distance2)
                return -1;
            if (distance1 > distance2)
                return 1;
            return 0;
        });
    },
    tick: function () {
        this.reloadNetwork();
        var fuelSlot = this.container.getSlot("slotID");
        if (fuelSlot.id > 0) {
            this.data.color = fuelSlot.id;
        }
    },
    getNameAndCount: function (thing) {
        var data = thing.split(", ");
        var item = { count: 1, name: "" };
        switch (data.length) {
            case 1:
                item = { count: 1, name: data[0] };
                break;
            default:
                (function (data) {
                    var count, name;
                    if (typeof (parseInt(data[0])) == "number") {
                        count = parseInt(data[0]);
                        name = data[1];
                    }
                    else if (typeof (parseInt(data[1])) == "number") {
                        count = parseInt(data[1]);
                        name = data[0];
                    }
                    item = { count: count, name: name };
                })(data);
                break;
        }
        return item;
    },
    processItemRequest: function (request) {
        var _this = this;
        var actualID = { id: 0, data: 0 };
        var thing = this.getNameAndCount(request);
        var name = thing.name;
        var count = thing.count;
        var count1 = count;
        if (name == "this") {
            var heldItem = Player.getCarriedItem(false, false);
            if (heldItem.id > 0) {
                name = Item.getName(heldItem.id, heldItem.data);
            }
        }
        this.data.network.forEach(function (element) {
            var _a;
            if (count > 0 && element.type == NetworkPartTypes.Point) {
                var cont = World.getContainer(element.x, element.y + 1, element.z);
                if (cont != null) {
                    var slots = StorageInterface.getContainerSlots(cont, 2, 0);
                    for (var slotName in slots) {
                        var slot = cont.getSlot(slotName);
                        if (_this.compareIDAndName(name, slot)) {
                            actualID = _this.name_and_item2ID(name, slot);
                            cont.setSlot(slotName, count > slot.count ? 0 : slot.id, count > slot.count ? 0 : slot.count - count, count > slot.count ? 0 : slot.data);
                            count = Math.max(count - slot.count, 0);
                            if (count == 0)
                                return;
                        }
                    }
                }
            }
            else if (element.type == NetworkPartTypes.Clipboard) {
                (_a = World.getTileEntity(element.x, element.y, element.z)) === null || _a === void 0 ? void 0 : _a.onRequest(request);
            }
        });
        if (actualID.id > 0) {
            var playerPos = Player.getPosition();
            World.drop(playerPos.x, playerPos.y + 1, playerPos.z, actualID.id, count1, actualID.data);
        }
        Game.tipMessage("Requested " + count1.toString() + " of " + name + ", got " + (count1 - count).toString());
    },
    compareIDAndName: function (name, item) { return Item.getName(item.id, item.data) == name; },
    name_and_item2ID: function (name, item) {
        if (Item.getName(item.id, item.data) == name) {
            return { id: item.id, data: item.data };
        }
    },
    processInput: function (item) {
        for (var i = 0; i < this.data.network.length; i++) {
            var element = this.data.network[i];
            if (element.type == NetworkPartTypes.Point) {
                var cont = World.getContainer(element.x, element.y + 1, element.z);
                if (cont != null) {
                    var left = StorageInterface.putItemToContainer(item, cont, 0, undefined);
                    if (left == 0)
                        break;
                }
            }
        }
    },
    findItem: function (item) {
        for (var i = 0; i < this.data.network.length; i++) {
            var element = this.data.network[i];
            if (element.type == NetworkPartTypes.Point) {
                var cont = World.getContainer(element.x, element.y + 1, element.z);
                if (cont != null) {
                    var slots = StorageInterface.getContainerSlots(cont, 2, 1);
                    Debug.m(slots);
                    for (var slot in slots) {
                        var slot_item = cont.getSlot(i);
                        if (slot_item.id == item.id && slot_item.data == item.data) {
                            return cont;
                        }
                    }
                }
            }
        }
        return null;
    }
});
var guiWirelessPoint = new UI.StandartWindow({
    standart: {
        header: { text: { text: "Wireless Point" } },
        inventory: { standart: true },
        background: { standart: true }
    },
    elements: {
        "explainingText": { type: "text", x: 500, y: 172, width: 300, height: 30, text: "Insert item to change network's ID" },
        "slotID": { type: "slot", x: 600, y: 210 }
    }
});
WirelessRegistry.registerNetworkPart(BlockID["wireless_point"], {
    defaultValues: {
        color: 0,
        priority: 0,
        type: NetworkPartTypes.Point,
    },
    getGuiScreen: function () {
        return guiWirelessPoint;
    },
    tick: function () {
        var fuelSlot = this.container.getSlot("slotID");
        if (fuelSlot.id > 0 && this.data.color != fuelSlot.id) {
            network_object.submitDeletion(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
            this.data.color = fuelSlot.id;
            network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
        }
    }
});
var guiWirelessRequester = new UI.StandartWindow({
    standart: {
        header: { text: { text: "Wireless Requester" } },
        inventory: { standart: true },
        background: { standart: true }
    },
    elements: {
        "explainingText": { type: "text", x: 500, y: 172, width: 300, height: 30, text: "Insert item to change network's ID" },
        "slotID": { type: "slot", x: 600, y: 210 }
    }
});
WirelessRegistry.registerNetworkPart(BlockID["wireless_requester"], {
    defaultValues: {
        color: 0,
        priority: 0,
        type: NetworkPartTypes.Requester,
        core: {}
    },
    created: function () {
        network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, 1);
    },
    onItemClick: function () {
        var screen = this.getGuiScreen();
        if (screen) {
            this.container.openAs(screen);
            return true;
        }
        else if (screen == null) {
            var _this = this;
            UI.getContext().runOnUiThread(new java.lang.Runnable({
                run: function () {
                    try {
                        var editText_1 = new android.widget.EditText(UI.getContext());
                        editText_1.setHint("Query");
                        new android.app.AlertDialog.Builder(UI.getContext()).
                            setTitle("Please type query into Wire-less network").
                            setView(editText_1).
                            setPositiveButton("Query", new android.content.DialogInterface.OnClickListener({
                            onClick: function () {
                                if (_this.data.core.x)
                                    World.getTileEntity(_this.data.core.x, _this.data.core.y, _this.data.core.z).processItemRequest(editText_1.getText().toString());
                            }
                        })).show();
                    }
                    catch (e) {
                        alert(e.toString());
                    }
                }
            }));
        }
    },
    onRegistering: function (networkCore) {
        this.data.core = { x: networkCore.x, y: networkCore.y, z: networkCore.z };
    },
    getGuiScreen: function () {
        if (Entity.getSneaking(Player.get()))
            return guiWirelessRequester;
        else
            return null;
    },
    tick: function () {
        var fuelSlot = this.container.getSlot("slotID");
        if (fuelSlot.id > 0 && this.data.color != fuelSlot.id) {
            network_object.submitDeletion(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
            this.data.color = fuelSlot.id;
            network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
        }
    }
});
var guiWirelessInput = new UI.StandartWindow({
    standart: {
        header: { text: { text: "Wireless Input" } },
        inventory: { standart: true },
        background: { standart: true }
    },
    elements: {
        "explainingText": { type: "text", x: 500, y: 172, width: 300, height: 30, text: "Insert item to change network's ID" },
        "slotID": { type: "slot", x: 600, y: 210 },
        "explainingText2": { type: "text", x: 500, y: 272, width: 300, height: 30, text: "Put items into network" },
        "slotInput": { type: "slot", x: 600, y: 310 }
    }
});
WirelessRegistry.registerNetworkPart(BlockID["wireless_input"], {
    defaultValues: {
        color: 0,
        priority: 0,
        type: NetworkPartTypes.Input,
        core: {}
    },
    getGuiScreen: function () {
        return guiWirelessInput;
    },
    created: function () {
        network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, 2);
    },
    tick: function () {
        var fuelSlot = this.container.getSlot("slotID");
        if (fuelSlot.id > 0 && this.data.color != fuelSlot.id) {
            network_object.submitDeletion(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
            this.data.color = fuelSlot.id;
            network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
        }
        var slot = this.container.getSlot("slotInput");
        if (slot.id)
            World.getTileEntity(this.data.core.x, this.data.core.y, this.data.core.z).processInput(slot);
    },
    onRegistering: function (networkCore) {
        this.data.core = { x: networkCore.x, y: networkCore.y, z: networkCore.z };
    }
});
StorageInterface.createInterface(BlockID["wireless_input"], {
    slots: {
        "slotInput": { input: true, isValid: function (_item, _side, _tileEntity) {
                return true;
            } }
    }
});
var guiWirelessClipboard = new UI.StandartWindow({
    standart: {
        header: { text: { text: "Wireless Clipboard" } },
        inventory: { standart: true },
        background: { standart: true }
    },
    elements: {
        "explainingText": { type: "text", x: 500, y: 172, width: 300, height: 30, text: "Insert item to change network's ID" },
        "slotID": { type: "slot", x: 600, y: 210 },
        "explainingText2": { type: "text", x: 500, y: 272, width: 300, height: 30, text: "Last request: none" }
    }
});
WirelessRegistry.registerNetworkPart(BlockID["wireless_clipboard"], {
    defaultValues: {
        color: 0,
        priority: 0,
        type: NetworkPartTypes.Clipboard,
        core: {},
        request: "",
        redstonePostedOnLoad: null,
        lastRedstonePower: -1,
        currentRedstonePower: -1
    },
    getGuiScreen: function () {
        return guiWirelessClipboard;
    },
    created: function () {
        network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, 5);
    },
    onRequest: function (request) {
        this.data.request = request;
    },
    tick: function () {
        var fuelSlot = this.container.getSlot("slotID");
        if (fuelSlot.id > 0 && this.data.color != fuelSlot.id) {
            network_object.submitDeletion(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
            this.data.color = fuelSlot.id;
            network_object.submitAddition(this.x, this.y, this.z, this.data.color, this.data.priority, this.data.type);
        }
        if (this.data.request != "")
            this.container.setText("explainingText2", "Last request: " + this.data.request);
        else
            this.container.setText("explainingText2", "Last request: none");
    },
    onRegistering: function (networkCore) {
        this.data.core = { x: networkCore.x, y: networkCore.y, z: networkCore.z };
    },
    redstone: function (signal) {
        if (this.data.currentRedstonePower != signal.power) {
            this.data.lastRedstonePower = this.data.currentRedstonePower;
            this.data.currentRedstonePower = signal.power;
            var redstoneData = { power: signal.power, last: this.data.lastRedstonePower, onLoad: this.data.lastRedstonePower != -1 };
            if (this.isLoaded && this.__initialized) {
                this.data.redstonePostedOnLoad = null;
                if (this.data.core.x && this.data.request != "" && (this.data.currentRedstonePower > this.data.lastRedstonePower)) {
                    World.getTileEntity(this.data.core.x, this.data.core.y, this.data.core.z).processItemRequest(this.data.request);
                    this.data.request = "";
                }
            }
            else {
                this.data.redstonePostedOnLoad = redstoneData;
            }
        }
    }
});
