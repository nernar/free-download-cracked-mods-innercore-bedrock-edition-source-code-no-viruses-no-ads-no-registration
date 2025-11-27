var lastFixRotation = [];
const fixRotation = function (ent) {
    typeof ent != "undefined" && lastFixRotation.push(ent);
};
var prevFixRotation = [];
Callback.addCallback("tick", function () {
    while (prevFixRotation.length > 0) {
        var ent = prevFixRotation.shift();
        Entity.setVelocity(ent, 0.1, 0, 0.1);
    }
    while (lastFixRotation.length > 0) {
        var ent = lastFixRotation.shift();
        Entity.setVelocity(ent, -0.1, 0, -0.1);
        prevFixRotation.push(ent);
    }
});
Player.resetCameraEntity = function () {
    Player.setCameraEntity(Player.get());
};

