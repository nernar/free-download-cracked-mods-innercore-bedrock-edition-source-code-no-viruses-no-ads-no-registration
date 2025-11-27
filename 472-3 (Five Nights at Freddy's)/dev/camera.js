const Cameras = {current: "1A", cameras: [{id: "1A", name: "Show Stage", coords: {x: 50, y: 6.8, z: 37.92}, angle: {pitch: 740.9, yaw: 22}, ui: {x: 953, y: 333}}, {id: "1B", name: "Dining Area", coords: {x: 53.83, y: 6.8, z: 37.7}, angle: {pitch: 514.3, yaw: 19.6}, ui: {x: 933, y: 389}}, {id: "1C", name: "Pirate Cove", coords: {x: 58.71, y: 6.8, z: 24.31}, angle: {pitch: 629.4, yaw: 18.3}, ui: {x: 901, y: 467}}, {id: "2A", name: "West Hall", coords: {x: 51.3, y: 6.24, z: 12.05}, angle: {pitch: 698.6, yaw: 10.25}, ui: {x: 953, y: 583}}, {id: "2B", name: "W. Hall Corner", coords: {x: 51.3, y: 7.11, z: 7.91}, angle: {pitch: 560, yaw: 58.9}, ui: {x: 953, y: 623}}, {id: "3", name: "Supply Closet", coords: {x: 55.7, y: 6.4, z: 18.4}, angle: {pitch: 564.25, yaw: 58.75}, ui: {x: 869, y: 565}}, {id: "4A", name: "East Hall", coords: {x: 43.69, y: 6.99, z: 12.47}, angle: {pitch: 1089, yaw: 9.15}, ui: {x: 1059, y: 584}}, {id: "4B", name: "E. Hall Corner", coords: {x: 42.84, y: 6.57, z: 7.35}, angle: {pitch: 1271.35, yaw: 52.6}, ui: {x: 1059, y: 624}}, {id: "5", name: "Backstage", coords: {x: 65.21, y: 5.24, z: 30.3}, angle: {pitch: 1079.65, yaw: 9.05}, ui: {x: 827, y: 416}}, {id: "6", name: "Kitchen", coords: {x: 27, y: 5.5, z: 17}, angle: {pitch: 1953, yaw: 117}, ui: {x: 1156, y: 548}}, {id: "7", name: "Restrooms", coords: {x: 31.69, y: 6.15, z: 36.62}, angle: {pitch: 1218.6, yaw: 31.15}, ui: {x: 1165, y: 417}}]};
Cameras.update = function () {
    try {
        for (var i = 0; i < this.cameras.length; i++) {
            var camera = this.cameras[i];
            if (camera && !camera.entity) {
                camera.entity = Entity.spawnAtCoords(camera.coords, 28, "entity/camera.png");
                Entity.setLookAngle(camera.entity, camera.angle.pitch / 180 * Math.PI, -camera.angle.yaw / 180 * Math.PI);
                Entity.setMobile(camera.entity, false);
                Entity.setRender(camera.entity, 18);
            }
        }
        this.deviationAngle = this.deviationTick = 0;
        this.isBackDeviation = false;
    }
    catch (e) {
        reportError(e);
    }
};
Cameras.findCameraById = function (id) {
    for (var i = 0; i < this.cameras.length; i++) {
        var camera = this.cameras[i];
        if (id == camera.id) {
            return camera;
        }
    }
};
Cameras.switchState = function () {
    if (gameTime < 6) {
        Office.disactive("lightning");
        Office.active[4] = !Office.active[4];
        TabletWindow.updateContainer();
        if (!Office.active[4]) {
            TabletSwitch.show();
            TabletWindow.hide();
            tabletOpenSound.stop();
            tabletEjectSound.stop();
            tabletCloseSound.play();
            Player.resetCameraEntity();
            Music.resetReceiver();
            World.setBlock(43, 6, 6, BlockID.hallPoster, 0);
        } else {
            if (Office.procent > 0) {
                TabletSwitch.show();
                tabletOpenSound.play();
                handle(function () {
                    tabletEjectSound.play();
                    Cameras.choose(Cameras.current);
                }, 575);
            }
        }
    }
};
Cameras.execute = function (camera) {
    typeof camera == "undefined" && (camera = this.current);
    if (this.deviationTick > 0) {
        this.deviationTick--;
    } else {
        if (!this.isBackDeviation && this.deviationAngle > -10) {
            this.deviationAngle -= 0.0625;
        } else {
            if (this.isBackDeviation && this.deviationAngle < 10) {
                this.deviationAngle += 0.0625;
            } else {
                (this.deviationTick = 100, this.isBackDeviation = !this.isBackDeviation);
            }
        }
    }
    if (Office.active[4]) {
        var camera = Cameras.findCameraById(camera), pitch = camera.angle.pitch + this.deviationAngle;
        camera.id != "3" && Entity.setLookAngle(camera.entity, pitch / 180 * Math.PI, -camera.angle.yaw / 180 * Math.PI);
    }
};
Cameras.choose = function (camera) {
    if (gameTime < 6) {
        var next = this.findCameraById(camera);
        TabletWindow.setLocation(next.id);
        (this.execute(camera), blipSound.play());
        Player.setCameraEntity(next.entity);
        Music.setReceiver(next.entity, 50);
        if (camera == "4B") {
            if (random(40) == 0) {
                World.setBlock(43, 6, 6, BlockID.hallPoster, 1);
            } else {
                World.setBlock(43, 6, 6, BlockID.hallPoster, 0);
            }
        }
        this.current = camera;
    }
};

