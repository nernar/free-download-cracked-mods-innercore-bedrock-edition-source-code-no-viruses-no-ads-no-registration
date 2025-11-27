IMPORT("BackpackAPI");
IDRegistry.genItemID("backpackTest");
Item.createItem("backpackTest", "Хранилище канистр", {name: "Storage Of Canisters", meta: 0}, {stack: 1});
BackpackRegistry.register(ItemID.backpackTest, {
    title: "Хранилище для канистр",
    slots: 15,
    slotsCenter: true,
    inRow: 5,
    items: [
        "^fuel.+",
        "^oil.+",
        "^empty.+",
        {id: 345, data: "^[1-3]$"}
    ]
});