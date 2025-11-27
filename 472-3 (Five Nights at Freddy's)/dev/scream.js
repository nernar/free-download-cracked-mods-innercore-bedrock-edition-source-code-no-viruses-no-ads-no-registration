const ScreamScene = new Scene({hooks: {onRun: function (scope) {
    scope.fov = 70;
    delete scope.isBack;
    if (!TabletWindow.isShowed) {
        TabletButton.hide();
        OverlayWindow.show();
    }
    breathSound.play();
}, onTick: function (scope) {
    if (scope.tick > 40) {
        if (scope.tick == 41) {
            if (TabletWindow.isShowed) {
                scope.tick--;
                if (scope.await + "" == "undefined") {
                    scope.await = 900;
                } else {
                    if (scope.await > 0) {
                        scope.await--;
                    } else {
                        scope.handle(function () {
                            Cameras.switchState();
                            TabletButton.hide();
                        });
                    }
                }
                !breathSound.isPlaying() && breathSound.play();
            } else {
                !OverlayWindow.isShowed && scope.handle(function () {
                    OverlayWindow.show();
                });
                Ui.vibrate(3000);
                GameScene.finish();
                Music.destroy();
                screamSound.play();
            }
        } else {
            if (scope.tick < 101) {
                if (!scope.isBack) {
                    scope.fov < 75 ? (scope.fov += 1) : (scope.isBack = true);
                } else {
                    scope.fov > 65 ? (scope.fov -= 1) : (scope.isBack = false);
                }
                Player.setFov(scope.fov);
            } else {
                if (scope.tick == 141) {
                    scope.handle(function () {
                        OverlayWindow.translate(1000);
                    });
                } else {
                    if (scope.tick == 161) {
                        scope.finish();
                    }
                }
            }
        }
    } else {
        if (scope.tick == 1) {
            var entity = Robots.property[scope.source].entity, position = Entity.getPosition(entity), angle = Entity.getLookAngle(Player.get());
            scope.angle = Entity.getLookAt(Player.get(), position.x, position.y + 1.75, position.z);
            scope.angle.pitch -= angle.pitch;
            scope.angle.yaw -= angle.yaw;
        } else {
            var angle = Entity.getLookAngle(Player.get());
            angle.pitch += scope.angle.pitch / 40;
            angle.yaw += scope.angle.yaw / 40;
            Entity.setLookAngle(Player.get(), angle.yaw, angle.pitch);
        }
    }
}, onFinish: function (scope) {
    delete scope.angle;
    delete scope.source;
    delete scope.await;
    DeathScene.run(function () {
        Player.resetFov();
    });
}}});
ScreamScene.setSource = function (id) {
    ScreamScene.source = id;
};

