ModAPI.addAPICallback("RefinedStorageAPI", function (api) {
    IDRegistry.genItemID("storageDiskInfinity2");
    Item.createItem("storageDiskInfinity2", "Infinity Storage Disk", {name: "infinityDisk"}, {stack: 1});
    function registerDisk(name, texture, storage, registerItem) {
        for (var i in this.items) {
            if (this.items[i].storage == storage && storage !== Infinity) {
                log("Disk with such storage already exists");
                return -1;
            }
        }
        var itemIDName = registerItem ? registerItem : "storageDisk" + storage;
        if (registerItem == undefined) {
            IDRegistry.genItemID(itemIDName);
            Item.createItem(itemIDName, name, {name: texture}, {stack: 1});
        }
        Callback.addCallback("PostLoaded", function () {
            var _func = Item.nameOverrideFunctions[ItemID[itemIDName]];
            Item.registerNameOverrideFunction(ItemID[itemIDName], function (item, name) {
                if (_func) {
                    name = _func(item, name);
                }
                if (_inventory_open) {
                    name += "\n\xa79" + "Extra Disks";
                }
                return name;
            });
        });
        Item.registerNameOverrideFunction(ItemID[itemIDName], function (item, name) {
            var disk_data = DiskData[item.data];
            if (!disk_data) {
                return "\xa7b" + name + "\n\xa77" + Translation.translate("Stored") + (storage != Infinity ? ": 0/" + storage : ": 0");
            }
            name += "\n\xa77" + Translation.translate("Stored") + ": " + disk_data.items_stored + (disk_data.storage != Infinity ? "/" + disk_data.storage : "");
            return name;
        });
        this.items[ItemID[itemIDName]] = {name: name, texture: texture, storage: storage};
        return ItemID[itemIDName];
    }
    api.requireGlobal("Disk.register = " + registerDisk);
    api.Disk.register("256k Storage Disk", "256Kdisk", 256000);
    api.Disk.register("1024k Storage Disk", "1024Kdisk", 1024000);
    api.Disk.register("4096k Storage Disk", "4096Kdisk", 4096000);
    api.Disk.register("16384k Storage Disk", "16384Kdisk", 16384000);
    api.Disk.register("65536k Storage Disk", "65536Kdisk", 65536000);
    api.Disk.register("262144k Storage Disk", "262144Kdisk", 262144000);
    api.Disk.register("1048576k Storage Disk", "1048576Kdisk", 1048576000);
    api.Disk.register("Infinity Storage Disk", "infinityDisk", Infinity, "storageDiskInfinity2");
    IDRegistry.genItemID("raw_withering_processor");
    Item.createItem("raw_withering_processor", "Raw Withering Processor", {name: "raw_withering_processor"}, {stack: 64});
    IDRegistry.genItemID("withering_processor");
    Item.createItem("withering_processor", "Witherin Processor", {name: "withering_processor"}, {stack: 64});
    IDRegistry.genItemID("256k_storage_part");
    Item.createItem("256k_storage_part", "256k Storage Part", {name: "256k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("1024k_storage_part");
    Item.createItem("1024k_storage_part", "1024k Storage Part", {name: "1024k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("4096k_storage_part");
    Item.createItem("4096k_storage_part", "4096k Storage Part", {name: "4096k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("16384k_storage_part");
    Item.createItem("16384k_storage_part", "16384k Storage Part", {name: "16384k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("65536k_storage_part");
    Item.createItem("65536k_storage_part", "65536k Storage Part", {name: "65536k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("262144k_storage_part");
    Item.createItem("262144k_storage_part", "262144k Storage Part", {name: "262144k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("1048576k_storage_part");
    Item.createItem("1048576k_storage_part", "1048576k Storage Part", {name: "1048576k_storage_part"}, {stack: 64});
    IDRegistry.genItemID("infinity_storage_part");
    Item.createItem("infinity_storage_part", "Infinity Storage Part", {name: "infinity_storage_part"}, {stack: 64});
    IDRegistry.genItemID("advanced_storage_housing");
    Item.createItem("advanced_storage_housing", "Advanced Storage Housing", {name: "advanced_storage_housing"}, {stack: 64});
    Recipes.addFurnace(ItemID.raw_withering_processor, 0, ItemID.withering_processor, 0);
    Recipes.addShapeless({id: ItemID["storageDisk256000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["256k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDisk1024000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["1024k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDisk4096000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["4096k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDisk16384000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["16384k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDisk65536000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["65536k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDisk262144000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["262144k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDisk1048576000"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["1048576k_storage_part"], count: 1, data: -1}]);
    Recipes.addShapeless({id: ItemID["storageDiskInfinity2"], count: 1, data: 0}, [{id: ItemID.advanced_storage_housing, count: 1, data: -1}, {id: ItemID["infinity_storage_part"], count: 1, data: -1}]);
    Recipes.addShaped({id: ItemID.advanced_storage_housing, count: 1, data: 0}, ["grg", "r r", "iai"], ["g", 20, -1, "r", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1]);
    Recipes.addShaped({id: ItemID["256k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.advanced_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["64k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["1024k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.advanced_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["256k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["4096k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.advanced_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["1024k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["16384k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.advanced_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["4096k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["65536k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.advanced_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["16384k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["262144k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.withering_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["65536k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["1048576k_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.withering_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["262144k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID["infinity_storage_part"], count: 1, data: 0}, ["aqa", "prp", "apa"], ["a", ItemID.withering_processor, -1, "q", ItemID.quartz_enriched_iron, -1, "r", 331, -1, "p", ItemID["1048576k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk256000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["256k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk1024000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["1024k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk4096000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["4096k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk16384000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["16384k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk65536000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["65536k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk262144000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["262144k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDisk1048576000, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["1048576k_storage_part"], -1]);
    Recipes.addShaped({id: ItemID.storageDiskInfinity2, count: 1, data: 0}, ["gqg", "qpq", "iai"], ["g", 20, -1, "q", ItemID.quartz_enriched_iron, -1, "i", ItemID.improved_processor, -1, "a", ItemID.advanced_processor, -1, "p", ItemID["infinity_storage_part"], -1]);
    Recipes.addShapeless({id: ItemID.raw_withering_processor, count: 1, data: -1}, [{id: ItemID.processor_binding, data: -1}, {id: VanillaItemID.nether_star, data: -1}, {id: ItemID.silicon, data: -1}, {id: VanillaItemID.redstone, data: -1}]);
});

