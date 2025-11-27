IDRegistry.genItemID("tele_portation");
Item.createItem("tele_portation", "Tele Portation \n Sneaking Click", {name: "tele_portation", meta: 0}, {stack: 1}, {damage: 10});
Item.registerUseFunction("tele_portation", function (coords, item, block) {
    if (Entity.getSneaking(Player.get())) {
        Tele_Ui.openGui();
    }
});

