const GameScene = new Scene({hooks: {onRun: function (scope) {
    scope.handle(function () {
        NightWindow.hide();
    });
}, onTick: function (scope) {
    if (scope.tick % 1800 == 0) {
        gameTime++;
        scope.handle(function () {
            TabletWindow.updateContainer();
        });
        if (gameTime == 2) {
            Robots.ai.bonnie.active++;
        } else {
            if (gameTime >= 3 && gameTime <= 4) {
                Robots.ai.bonnie.active++;
                Robots.ai.chica.active++;
                Robots.ai.foxy.active++;
            } else {
                if (gameTime == 6) {
                    scope.finish();
                    CompleteScene.run();
                }
            }
        }
    }
    if (gameTime < 6) {
        if (Office.procent > 0) {
            if (Robots.ai.bonnie.active >= 2) {
                if (scope.tick % 120 == 0 && Robots.ai.bonnie.active == 2) {
                    Office.procent -= 0.1;
                } else {
                    if (scope.tick % 100 == 0 && Robots.ai.bonnie.active == 3) {
                        Office.procent -= 0.1;
                    } else {
                        if (scope.tick % 80 == 0 && Robots.ai.bonnie.active == 4) {
                            Office.procent -= 0.1;
                        } else {
                            if (scope.tick % 60 == 0 && Robots.ai.bonnie.active >= 5) {
                                Office.procent -= 0.1;
                            }
                        }
                    }
                }
            }
            if (scope.tick % 80 == 0 && Robots.ai.foxy.location == "cove") {
                random(30) == 0 && foxySongSound.play();
            }
            if (scope.tick % 100 == 0) {
                random(30) == 0 && circusSound.play();
            }
            if (scope.tick & 200 == 0 && random(50) == 1) {
                poundingSound.setBlock(random(1, 2) == 1 ? 50 : 44, 5, 8);
                poundingSound.setVolume(10 + random(40));
                poundingSound.play();
            }
            if (Robots.ai.chica.location == "kitchen" || Robots.ai.freddy.location == "kitchen") {
                if (!scope.kitchenNoise && random(2) == 0) {
                    if (Robots.ai.chica.location == "kitchen") {
                        kitchenNoiseSound.setEntity(Robots.property.chica.entity);
                        kitchenNoiseSound.play();
                    } else {
                        if (Robots.ai.freddy.location == "kitchen") {
                            kitchenNoiseSound.setEntity(Robots.property.freddy.entity);
                            kitchenNoiseSound.play();
                        }
                    }
                    scope.kitchenNoise = 80;
                } else {
                    if (scope.kitchenNoise > 0) {
                        scope.kitchenNoise--;
                    }
                }
            }
            if (scope.tick % 20 == 0) {
                Office.procent -= Office.getUsage() / 10;
                if (random(10000) == 0) {
                    handleGoldenFreddy();
                }
                if (Robots.ai.freddy.location == "door" && random(4) == 0) {
                    Robots.ai.freddy.generate();
                }
                if (random(500) == 0) {
                    checkExtraView();
                }
                scope.cameraNoise = random(1, 3);
                scope.handle(function () {
                    TabletWindow.updateContainer();
                    if (random(1000) == 0) {
                        HallucinationWindow.show();
                    }
                });
            }
            if (Office.active[4]) {
                if (Cameras.current == "1C" && Robots.ai.foxy.atCove()) {
                    Robots.ai.foxy.wait = 100;
                } else {
                    if (Cameras.current == "2A") {
                        if (Robots.ai.foxy.data.data.finished) {
                            if (Robots.ai.foxy.location == "corridor") {
                                Robots.ai.foxy.wait = 0;
                            }
                        }
                    }
                }
                scope.handle(function () {
                    TabletWindow.findWidgetById("noise").setAlpha(150 + random(50) * scope.cameraNoise);
                });
            }
        } else {
            if (scope.energyTick == 0) {
                scope.energyTick = -1;
                musicBoxSound.stop();
                musicBoxSound.resetSource();
                freddyGoingSound.play();
                World.setBlock(51, 7, 8, 0);
                handleAction(function () {
                    Robots.continue("freddy");
                    Robots.goNextPath("freddy", "door_office");
                    handleAction(function () {
                        scope.handle(function () {
                            ScreamScene.setSource("freddy");
                            ScreamScene.run();
                        });
                    }, function () {
                        return gameTime < 6 && !ScreamScene.isRunned;
                    }, 10000);
                }, function () {
                    return gameTime < 6 && !ScreamScene.isRunned;
                }, random(500, 3000));
            } else {
                if (scope.energyTick > 0) {
                    if (random(4) == 0) {
                        World.setBlock(51, 7, 8, 0);
                    } else {
                        World.setBlock(51, 7, 8, BlockID.reserveLight);
                    }
                    scope.energyTick--;
                } else {
                    if (!scope.energyTick) {
                        scope.energyTick = -1;
                        Robots.await();
                        Robots.continue("freddy");
                        Robots.ai.freddy.location = "scene";
                        Robots.goNextPath("freddy", "scene_door");
                        Music.destroy();
                        powerBackgroundSound.play();
                        powerDownSound.play();
                        Office.disactive("lightning");
                        Office.disactive("doors");
                        updateLightning();
                        scope.handle(function () {
                            Office.active[4] && Cameras.switchState();
                            TabletButton.hide();
                        });
                    }
                }
            }
        }
        Cameras.execute();
    }
    Robots.execute();
}, onFinish: function (scope) {
    delete scope.energyTick;
    delete scope.kitchenNoise;
}}});

