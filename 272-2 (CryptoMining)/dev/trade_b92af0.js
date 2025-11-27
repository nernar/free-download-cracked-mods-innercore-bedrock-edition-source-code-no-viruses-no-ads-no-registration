IDRegistry.genBlockID("cryptoTrade");
Block.createBlockWithRotation("cryptoTrade", [{name: "Crypto-Currency Exchanger", texture: [["trader_bottom", 0], ["trader_top", 0], ["trader_side", 0], ["trader_front", 0], ["trader_side", 0], ["trader_side", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
Recipes.addShaped({id: BlockID.cryptoTrade, count: 1, data: 0}, ["aaa", "aba", "aca"], ["a", 265, 0, "b", ItemID.peercoin, 0, "c", 337, 0]);
var guicryptotrade = new UI.StandartWindow({standart: {header: {text: {text: "Crypto-Currency Exchanger"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 625, y: 145, bitmap: "trade_dollar", scale: 2}, {type: "bitmap", x: 525, y: 150, bitmap: "trade_scale", scale: 3.8}], elements: {"slotSource": {type: "slot", x: 450, y: 150}}});
TileEntity.registerPrototype(BlockID.cryptoTrade, {defaultValues: {}, tick: function () {
    if (this.container.getSlot("slotSource").id == ItemID.bitcoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 34, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.peercoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.buzcoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 2, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.dogecoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 3, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.litecoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.dollar, 4, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.windcoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 7, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.ripple && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 11, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.monero && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 12, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.dashcoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 14, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.zerocash && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 15, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.firecoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 17, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.lisk && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 19, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.augur && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 20, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.cosmocash && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 22, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.wondercoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 23, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.concoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 25, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.arkcoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 26, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.ethereum && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 28, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.mooncoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 42, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.marscoin && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 54, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.oneDollar && this.container.getSlot("slotSource").count == 2) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.twoDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.twoDollar && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 2, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.oneDollar && this.container.getSlot("slotSource").count == 5) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.fiveDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.fiveDollar && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneDollar, 5, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.fiveDollar && this.container.getSlot("slotSource").count == 2) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.tenDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.tenDollar && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.fiveDollar, 2, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.tenDollar && this.container.getSlot("slotSource").count == 2) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.twentyDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.twentyDollar && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.tenDollar, 2, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.tenDollar && this.container.getSlot("slotSource").count == 5) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.fiftyDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.fiftyDollar && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.tenDollar, 5, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.fiftyDollar && this.container.getSlot("slotSource").count == 2) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.oneHandredDollar, 1, 0);
    }
    if (this.container.getSlot("slotSource").id == ItemID.oneHandredDollar && this.container.getSlot("slotSource").count == 1) {
        this.container.clearSlot("slotSource");
        Player.addItemToInventory(ItemID.fiftyDollar, 2, 0);
    }
}, click: function (id, count, data, coords) {
}, getGuiScreen: function () {
    return guicryptotrade;
}});
IDRegistry.genBlockID("shop");
Block.createBlockWithRotation("shop", [{name: "Shop", texture: [["trader_bottom", 0], ["trader_top", 0], ["trader_side", 0], ["shop_front", 0], ["trader_side", 0], ["trader_side", 0]], inCreative: true}], BLOCK_TYPE_CRYPTO);
Recipes.addShaped({id: BlockID.shop, count: 1, data: 0}, ["aaa", "aba", "aca"], ["a", 265, 0, "b", ItemID.dollar, 0, "c", 337, 0]);
var guicryptoshop = new UI.StandartWindow({standart: {header: {text: {text: "Shop"}}, inventory: {standart: true}, background: {standart: true}}, drawing: [{type: "bitmap", x: 525, y: 45, bitmap: "trade_diamond", scale: 4}, {type: "bitmap", x: 425, y: 50, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 525, y: 120, bitmap: "trade_emerald", scale: 4}, {type: "bitmap", x: 425, y: 125, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 525, y: 195, bitmap: "trade_iron_ingot", scale: 4}, {type: "bitmap", x: 425, y: 200, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 525, y: 270, bitmap: "trade_gold_ingot", scale: 4}, {type: "bitmap", x: 425, y: 275, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 525, y: 345, bitmap: "trade_lapis_lazuri", scale: 4}, {type: "bitmap", x: 425, y: 350, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 525, y: 420, bitmap: "trade_redstone_dust", scale: 4}, {type: "bitmap", x: 425, y: 425, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 825, y: 45, bitmap: "trade_quartz", scale: 4}, {type: "bitmap", x: 725, y: 50, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 825, y: 120, bitmap: "trade_coal", scale: 4}, {type: "bitmap", x: 725, y: 125, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 825, y: 195, bitmap: "trade_saddle", scale: 4}, {type: "bitmap", x: 725, y: 200, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 825, y: 270, bitmap: "trade_name_tag", scale: 4}, {type: "bitmap", x: 725, y: 275, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 825, y: 345, bitmap: "trade_dragons_breath", scale: 4}, {type: "bitmap", x: 725, y: 350, bitmap: "trade_scale", scale: 3.8}, {type: "bitmap", x: 825, y: 420, bitmap: "trade_elytra", scale: 4}, {type: "bitmap", x: 725, y: 425, bitmap: "trade_scale", scale: 3.8}], elements: {"slotSource1": {type: "slot", x: 350, y: 50}, "slotSource2": {type: "slot", x: 350, y: 125}, "slotSource3": {type: "slot", x: 350, y: 200}, "slotSource4": {type: "slot", x: 350, y: 275}, "slotSource5": {type: "slot", x: 350, y: 350}, "slotSource6": {type: "slot", x: 350, y: 425}, "slotSource7": {type: "slot", x: 650, y: 50}, "slotSource8": {type: "slot", x: 650, y: 125}, "slotSource9": {type: "slot", x: 650, y: 200}, "slotSource10": {type: "slot", x: 650, y: 275}, "slotSource11": {type: "slot", x: 650, y: 350}, "slotSource12": {type: "slot", x: 650, y: 425}}});
TileEntity.registerPrototype(BlockID.shop, {defaultValues: {}, tick: function () {
    if (this.container.getSlot("slotSource1").id == ItemID.dollar && this.container.getSlot("slotSource1").count == 24) {
        this.container.clearSlot("slotSource2");
        Player.addItemToInventory(264, 1, 0);
    }
    if (this.container.getSlot("slotSource2").id == ItemID.dollar && this.container.getSlot("slotSource2").count == 26) {
        this.container.clearSlot("slotSource2");
        Player.addItemToInventory(388, 1, 0);
    }
    if (this.container.getSlot("slotSource3").id == ItemID.dollar && this.container.getSlot("slotSource3").count == 6) {
        this.container.clearSlot("slotSource3");
        Player.addItemToInventory(265, 1, 0);
    }
    if (this.container.getSlot("slotSource4").id == ItemID.dollar && this.container.getSlot("slotSource4").count == 18) {
        this.container.clearSlot("slotSource4");
        Player.addItemToInventory(266, 1, 0);
    }
    if (this.container.getSlot("slotSource5").id == ItemID.dollar && this.container.getSlot("slotSource5").count == 4) {
        this.container.clearSlot("slotSource5");
        Player.addItemToInventory(351, 1, 4);
    }
    if (this.container.getSlot("slotSource6").id == ItemID.dollar && this.container.getSlot("slotSource6").count == 3) {
        this.container.clearSlot("slotSource6");
        Player.addItemToInventory(331, 1, 0);
    }
    if (this.container.getSlot("slotSource7").id == ItemID.dollar && this.container.getSlot("slotSource7").count == 4) {
        this.container.clearSlot("slotSource7");
        Player.addItemToInventory(406, 1, 0);
    }
    if (this.container.getSlot("slotSource8").id == ItemID.dollar && this.container.getSlot("slotSource8").count == 1) {
        this.container.clearSlot("slotSource8");
        Player.addItemToInventory(263, 1, 0);
    }
    if (this.container.getSlot("slotSource9").id == ItemID.dollar && this.container.getSlot("slotSource9").count == 36) {
        this.container.clearSlot("slotSource9");
        Player.addItemToInventory(329, 1, 0);
    }
    if (this.container.getSlot("slotSource10").id == ItemID.dollar && this.container.getSlot("slotSource10").count == 26) {
        this.container.clearSlot("slotSource10");
        Player.addItemToInventory(421, 1, 0);
    }
    if (this.container.getSlot("slotSource11").id == ItemID.dollar && this.container.getSlot("slotSource11").count == 48) {
        this.container.clearSlot("slotSource11");
        Player.addItemToInventory(437, 1, 0);
    }
    if (this.container.getSlot("slotSource12").id == ItemID.dollar && this.container.getSlot("slotSource12").count == 62) {
        this.container.clearSlot("slotSource12");
        Player.addItemToInventory(444, 1, 0);
    }
}, click: function (id, count, data, coords) {
}, getGuiScreen: function () {
    return guicryptoshop;
}});

