Translation.addTranslation("Depth Meter", {ru: "\u0412\u044b\u0441\u043e\u0442\u043e\u043c\u0435\u0440"});
Translation.addTranslation("You are \xa7a", {ru: "\u0422\u044b \u043d\u0430 \xa7a"});
Translation.addTranslation(" blocks \xa73above the sea level", {ru: " \u0431\u043b\u043e\u043a\u0430(-\u043e\u0432) \xa73\u0432\u044b\u0448\u0435 \u0443\u0440\u043e\u0432\u043d\u044f \u043c\u043e\u0440\u044f"});
Translation.addTranslation(" blocks \xa73below the sea level", {ru: " \u0431\u043b\u043e\u043a\u0430(-\u043e\u0432) \xa73\u043d\u0438\u0436\u0435 \u0443\u0440\u043e\u0432\u043d\u044f \u043c\u043e\u0440\u044f"});
IDRegistry.genItemID("depthmeter");
Item.createItem("depthmeter", "Depth Meter", {name: "depth_surf", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.depthmeter, count: 1, data: 0}, [" x ", "xax", " x "], ["x", 336, 0, "a", 331, 0]);
Network.addClientPacket("depthmeter.message", function (packet) {
    Game.tipMessage(packet.message);
});
let lastRandom = java.util.Random(1);
let nextRandom = java.util.Random(1);
nextRandom.nextFloat();
function interpolate(a, b, x) {
    let ft = x * Math.PI;
    let f = (1 - Math.cos(ft)) * 0.5;
    return a * (1 - f) + b * f;
}
const F_COUNT = 18;
const SPEED = 0.1;
let k = 0;
let lastPoint = 0;
let nextPoint = 8;
function updatePoints() {
    k = 0;
    lastPoint = lastRandom.nextFloat() * F_COUNT;
    nextPoint = nextRandom.nextFloat() * F_COUNT;
}
Callback.addCallback("LocalTick", function () {
    k += SPEED;
    if (k > 1) {
        updatePoints();
    }
});
Item.registerIconOverrideFunction(ItemID.depthmeter, function (item, isModUI) {
    let height = Math.floor(Player.getPosition().y) - 1;
    let frame = Math.round(Math.max(Math.min(height + 40, 154), 0) / 8.6);
    if (Player.getDimension() != 0) {
        frame = Math.round(interpolate(lastPoint, nextPoint, k));
    }
    return {name: "depth", data: frame};
});
Item.registerUseFunction("depthmeter", function (coords, item, block, player) {
    let height = Math.floor(Entity.getPosition(player).y);
    let higher = height >= 64;
    height = higher ? height - 64 : 64 - height;
    Network.sendToAllClients("depthmeter.message", {message: Translation.translate("You are \xa7a") + height + (higher ? Translation.translate(" blocks \xa73above the sea level") : Translation.translate(" blocks \xa73below the sea level"))});
});

