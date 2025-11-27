const Office = {};
Office.inOffice = function () {
    var target = Player.getPosition();
    return target.z < 13 && target.x > 43.75 && target.x < 50.25;
};
Office.isActive = function (place, west) {
    if (place == "lightning") {
        return this.active[west] != -1 ? this.active[west] : false;
    }
    if (place == "door") {
        return this.active[west + 2] != -1 ? this.active[west + 2] : false;
    }
};
Office.getUsage = function () {
    var result = 1;
    for (var item in this.active) {
        this.active[item] == true && result++;
    }
    return result;
};
Office.lightning = function (west) {
    if (this.isActive("lightning", west == 0 ? 1 : 0)) {
        this.lightning(west == 0 ? 1 : 0);
    }
    if (this.isActive("lightning", west)) {
        switch (west) {
          case 0:
            World.setBlock(49, 5, 7, BlockID.officeButton, 0);
            World.setBlock(51, 7, 9, 0);
            break;
          case 1:
            World.setBlock(45, 5, 7, BlockID.officeButton, 1);
            World.setBlock(43, 7, 9, 0);
            break;
        }
        this.active[west] = false;
    } else {
        switch (west) {
          case 0:
            World.setBlock(49, 5, 7, BlockID.officeButton, 2);
            World.setBlock(51, 7, 9, BlockID.officeLight);
            break;
          case 1:
            World.setBlock(45, 5, 7, BlockID.officeButton, 3);
            World.setBlock(43, 7, 9, BlockID.officeLight);
            break;
        }
        this.active[west] = true;
    }
};
Office.door = function (west) {
    if (this.isActive("door", west)) {
        switch (west) {
          case 0:
            World.setBlock(49, 6, 7, BlockID.officeButton, 4);
            World.setBlock(50, 5, 8, 0);
            World.setBlock(50, 6, 8, 0);
            break;
          case 1:
            World.setBlock(45, 6, 7, BlockID.officeButton, 5);
            World.setBlock(44, 5, 8, 0);
            World.setBlock(44, 6, 8, 0);
            break;
        }
        this.active[west + 2] = false;
    } else {
        switch (west) {
          case 0:
            World.setBlock(49, 6, 7, BlockID.officeButton, 6);
            World.setBlock(50, 5, 8, BlockID.officeDoor, 0);
            World.setBlock(50, 6, 8, BlockID.officeDoor, 1);
            break;
          case 1:
            World.setBlock(45, 6, 7, BlockID.officeButton, 7);
            World.setBlock(44, 5, 8, BlockID.officeDoor, 0);
            World.setBlock(44, 6, 8, BlockID.officeDoor, 1);
            break;
        }
        this.active[west + 2] = true;
    }
};
Office.disactive = function (place) {
    if (place == "lightning") {
        if (this.isActive("lightning", 0)) {
            this.lightning(0);
        }
        if (this.isActive("lightning", 1)) {
            this.lightning(1);
        }
        officeLightningSound.stop();
    } else {
        if (place == "doors") {
            if (this.isActive("door", 0)) {
                switchDoor(0);
            }
            if (this.isActive("door", 1)) {
                switchDoor(1);
            }
        }
    }
};
Office.checkUse = function (x, y, z) {
    if (this.procent > 0) {
        if (x == 49 && y == 5 && z == 7) {
            if (this.active[0] != -1) {
                if (this.isActive("lightning", 0)) {
                    officeLightningSound.stop();
                } else {
                    officeLightningSound.setBlock(50, 5, 7);
                    officeLightningSound.play();
                }
                if (this.leftDanger) {
                    delete this.leftDanger;
                    officeDangerSound.play();
                    Ui.vibrate(100);
                    log("Office", "Player dangered at left door");
                }
                Office.lightning(0);
            } else {
                officeDisabledSound.play();
            }
            if (Robots.ai.foxy.location == "door" && !this.isActive("door", 0)) {
                Robots.ai.foxy.wait = 0;
            }
            log("Office", "Switching left light to " + this.active[0]);
        } else {
            if (x == 45 && y == 5 && z == 7) {
                if (this.active[1] != -1) {
                    if (this.isActive("lightning", 1)) {
                        officeLightningSound.stop();
                    } else {
                        officeLightningSound.setBlock(44, 5, 7);
                        officeLightningSound.play();
                    }
                    if (this.rightDanger) {
                        delete this.rightDanger;
                        officeDangerSound.play();
                        Ui.vibrate(100);
                        log("Office", "Player dangered at right door");
                    }
                    Office.lightning(1);
                } else {
                    officeDisabledSound.play();
                }
                if (Robots.ai.freddy.location == "door" && !this.isActive("door", 1)) {
                    Robots.ai.freddy.wait = 0;
                }
                log("Office", "Switching right light to " + this.active[1]);
            } else {
                if (x == 49 && y == 6 && z == 7) {
                    if (this.active[2] != -1) {
                        if (!this.leftCooldown) {
                            officeDoorSound.play();
                            switchDoor(0);
                        }
                    } else {
                        officeDisabledSound.play();
                    }
                    if (Robots.ai.foxy.location == "door" && this.isActive("door", 0)) {
                        Robots.ai.foxy.wait = 0;
                    }
                    log("Office", "Switching left door");
                } else {
                    if (x == 45 && y == 6 && z == 7) {
                        if (this.active[3] != -1) {
                            if (!this.rightCooldown) {
                                officeDoorSound.play();
                                switchDoor(1);
                            }
                        } else {
                            officeDisabledSound.play();
                        }
                        if (Robots.ai.freddy.location == "door" && this.isActive("door", 1)) {
                            Robots.ai.freddy.wait = 0;
                        }
                        log("Office", "Switching right door");
                    } else {
                        if (x == 45 && y == 6 && z == 11) {
                            phoneGuySound.stop();
                        } else {
                            if (x == 62 && y == 6 && z == 17) {
                                if (random(50) == 0) {
                                    CreepyEndScene.run();
                                } else {
                                    if (this.procent > 0) {
                                        this.procent += 0.5;
                                    }
                                }
                                if (this.procent > 100) {
                                    this.procent = 0;
                                }
                            } else {
                                if (x == 48 && y == 7 && z == 12) {
                                    freddyNoseSound.play();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};
Office.update = function () {
    World.setBlock(43, 6, 6, BlockID.hallPoster, 0);
    World.setBlock(62, 6, 24, 35, 6);
    World.setBlock(62, 7, 24, 35, 6);
    World.setBlock(62, 8, 24, 35, 6);
    World.setBlock(51, 7, 8, 0);
    World.setBlock(49, 5, 7, BlockID.officeButton, 0);
    World.setBlock(45, 5, 7, BlockID.officeButton, 1);
    World.setBlock(51, 7, 9, 0);
    World.setBlock(43, 7, 9, 0);
    World.setBlock(49, 6, 7, BlockID.officeButton, 4);
    World.setBlock(45, 6, 7, BlockID.officeButton, 5);
    World.setBlock(50, 5, 8, 0);
    World.setBlock(50, 6, 8, 0);
    World.setBlock(44, 5, 8, 0);
    World.setBlock(44, 6, 8, 0);
};

