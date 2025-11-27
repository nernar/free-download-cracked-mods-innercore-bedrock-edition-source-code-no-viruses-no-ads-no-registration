var player_injector = null;
var LadderAPI = {};
LadderAPI.isClimbing = function () {
    return player_injector.getBoolResult("_ZNK5Actor16onClimbableBlockEv");
}; //get true/false on climable block like ladder
LadderAPI.isFacingDown = function () {
    return (Entity.getLookAngle(Player.get()).pitch < 0.0);
};
LadderAPI.isFacingUp = function () {
    return (Entity.getLookAngle(Player.get()).pitch > 0.0);
};
LadderAPI.getSpeed = function () {
    var pitch = Entity.getLookAngle(Player.get()).pitch;
    return Math.abs(pitch / 90) * 10;
}; //getting evaluation speed by pitch angle
Callback.addCallback("LocalTick", function () {
    var ent = Player.get();
    player_injector = new Injector(GlobalContext.getLocalPlayer()).setDebug(true); //init injector for LocalPlayer
    var input_pointer = player_injector.getPointerResult("_ZN11LocalPlayer19getMoveInputHandlerEv"); //get MoveInputHandler
    var input_handler = new Injector(input_pointer); //init injector for MoveInputHandler
    var move_forward = input_handler.getData().getFloat(8) == 1 ? true : false; //get move_forward / move_backward by offset
    if (LadderAPI.isClimbing()) {
        var yaw = Entity.getLookAngle(ent).yaw;
        var vel = Entity.getVelocity(ent);
        var pos = Entity.getPosition(Player.get());
        var speed = LadderAPI.getSpeed();
        if (LadderAPI.isFacingUp() && move_forward) {
            var vec = new Vec3(0, speed * 2, 0); //creating new vec3 to send by args 
            player_injector.setArgsTypes("ptr").call("_ZN5Actor7moveBBsERK4Vec3", [
                Parameter.getPointer(vec)
            ]); //move entity by vec3
        }
        if (LadderAPI.isFacingDown() && move_forward) {
            var vec = new Vec3(0, (speed * -4), 0);
            player_injector.setArgsTypes("ptr").call("_ZN5Actor7moveBBsERK4Vec3", [
                Parameter.getPointer(vec)
            ]);
        }
    }
    player_injector.free(); //delete from memory 
    input_handler.free(); //delete from memory 
});
