Ace3.addItem("chocolate_cake_item", "Chocolate Cake", {name: "ChocolateCake", meta: 0}, {stack: 1});
Ace3.addItem("cheese_cake_item", "Cheese Cake", {name: "CheeseCake", meta: 0}, {stack: 1});
Ace3.addItem("nether_cake_item", "Nether Cake", {name: "NetherCake", meta: 0}, {stack: 1});
Ace3.addItem("pumpkin_cake_item", "Pumpkin Cake", {name: "PumpkinCake", meta: 0}, {stack: 1});
Ace3.addItem("strawberry_cake_item", "Strawberry Cake", {name: "StrawberryCake", meta: 0}, {stack: 1});
Ace3.addItem("oreo_cake_item", "Oreo Cake", {name: "OreoCake", meta: 0}, {stack: 1});
Ace3.addItem("pizza_item", "Pizza", {name: "PizzaBlock", meta: 0}, {stack: 1});
IDRegistry.genBlockID("chocolate_cake");
IDRegistry.genBlockID("nether_cake");
IDRegistry.genBlockID("cheese_cake");
IDRegistry.genBlockID("pumpkin_cake");
IDRegistry.genBlockID("strawberry_cake");
IDRegistry.genBlockID("oreo_cake");
IDRegistry.genBlockID("pizza");
Ace3.addCake({blockID: "chocolate_cake", name: "Chocolate Cake", texture: "chocolate", useItem: ItemID.chocolate_cake_item, saturation: 3});
Ace3.addCake({blockID: "nether_cake", name: "Nether Cake", texture: "nether", useItem: ItemID.nether_cake_item, saturation: 3});
Ace3.addCake({blockID: "cheese_cake", name: "Cheese Cake", texture: "cheese", useItem: ItemID.cheese_cake_item, saturation: 3});
Ace3.addCake({blockID: "pumpkin_cake", name: "Pumpkin Cake", texture: "pumpkin", useItem: ItemID.pumpkin_cake_item, saturation: 3});
Ace3.addCake({blockID: "strawberry_cake", name: "Strawberry Cake", texture: "strawberry", useItem: ItemID.strawberry_cake_item, saturation: 3});
Ace3.addCake({blockID: "oreo_cake", name: "Oreo Cake", texture: "oreo", useItem: ItemID.oreo_cake_item, saturation: 3});
Ace3.addCake({blockID: "pizza", name: "Pizza", texture: "pizza", useItem: ItemID.pizza_item, saturation: 3}, function (effects) {
}, function (render) {
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 15 / 16, y: 3 / 16, z: 15 / 16}, 0);
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 13 / 16, y: 3 / 16, z: 15 / 16}, 1);
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 11 / 16, y: 3 / 16, z: 15 / 16}, 2);
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 9 / 16, y: 3 / 16, z: 15 / 16}, 3);
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 7 / 16, y: 3 / 16, z: 15 / 16}, 4);
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 5 / 16, y: 3 / 16, z: 15 / 16}, 5);
    Block.setBlockShape(BlockID.pizza, {x: 1 / 16, y: 0, z: 1 / 16}, {x: 3 / 16, y: 3 / 16, z: 15 / 16}, 6);
});
Callback.addCallback("NativeCommand", function (str) {
    var cmd = str.split(" ");
    if (cmd[0] == "/h") {
        Player.setHunger(parseInt(cmd[1]));
    }
});

