const handle = function (action, time) {
    context.runOnUiThread(function () {
        new android.os.Handler().postDelayed(function () {
            try {
                action();
            }
            catch (e) {
                reportError(e);
            }
        }, time || 0);
    });
};
const handleAction = function (action, condition, time) {
    var custom = new Action();
    if (typeof action != "object") {
        action && custom.setAction(action);
        condition && custom.setCondition(condition);
        time >= 0 && custom.setAwait(time / custom.sleep);
    } else {
        custom.applyParams(action);
    }
    custom.create().execute();
    return custom;
};
const random = function (min, max) {
    typeof max == "undefined" && (max = min - 1, min = 0);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const handleRobotFollow = function (name) {
    var robot = Robots.ai[name];
    if (robot && robot.data) {
        delete robot.data.listeners.pause;
        robot.data.params.followOffice = true;
        robot.data.resume();
    }
};
const handleGoldenFreddy = function () {
    laughSound.play();
};
const saveGame = function () {
    handle(function () {
        Preferences.save("night", gameNight);
    });
};
const restoreGame = function () {
    handle(function () {
        gameNight = parseInt(Preferences.get("night"));
    });
};
const checkExtraView = function () {
    if (Entity.getDistanceToCoords(Player.get(), Robots.property.freddy) < 10) {
        var position = Player.getPosition();
        Entity.lookAtCoords(Robots.property.bonnie.entity, position);
        Entity.lookAtCoords(Robots.property.chica.entity, position);
        Entity.lookAtCoords(Robots.property.freddy.entity, position);
        fixRotation(Robots.property.bonnie.entity);
        fixRotation(Robots.property.chica.entity);
        fixRotation(Robots.property.freddy.entity);
        officeDangerSound.play();
    } else {
        if (Office.active[4] && Cameras.current == "1A") {
            var position = Entity.getPosition(Cameras.findCameraById("1A").entity);
            Entity.lookAtCoords(Robots.property.bonnie.entity, position);
            Entity.lookAtCoords(Robots.property.chica.entity, position);
            Entity.lookAtCoords(Robots.property.freddy.entity, position);
            fixRotation(Robots.property.bonnie.entity);
            fixRotation(Robots.property.chica.entity);
            fixRotation(Robots.property.freddy.entity);
            officeDangerSound.play();
        } else {
            return;
        }
    }
    handle(function () {
        Entity.setLookAngle(Robots.property.bonnie.entity, Math.PI, 0);
        Entity.setLookAngle(Robots.property.chica.entity, Math.PI, 0);
        Entity.setLookAngle(Robots.property.freddy.entity, Math.PI, 0);
        fixRotation(Robots.property.bonnie.entity);
        fixRotation(Robots.property.chica.entity);
        fixRotation(Robots.property.freddy.entity);
    }, 3000);
};

