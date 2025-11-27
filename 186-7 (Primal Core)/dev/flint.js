Item.registerUseFunction(318, function (crd, i, block) {
    let c = crd.relative;
    if (block.id == 1 || block.id == 4) {
        if (Math.random() <= 0.55) {
            Player.decreaseCarriedItem();
            World.drop(c.x, c.y, c.z, ItemID.flint_flake, 1, 0);
        }
    }
});
Generator.setItem("flint_flake", {name: "Flint flake", texture: "flint_flake", stack: 64});
Item.registerUseFunction(ItemID.flint_flake, function (crd, item, block) {
    let c = crd.relative;
    if (ToolAPI.blockData[block.id].material.name == "stone" && Entity.getSneaking(Player.get())) {
        if (Math.random() <= 0.2) {
            Player.decreaseCarriedItem();
            World.drop(c.x, c.y, c.z, ItemID.flint_point, 1, 0);
        }
    }
});
Generator.setItem("flint_point", {name: "Flint point", texture: "flint_point", stack: 64});

