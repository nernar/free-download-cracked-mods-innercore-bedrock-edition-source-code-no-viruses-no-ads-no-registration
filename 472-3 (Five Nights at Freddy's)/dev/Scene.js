var Scene = function (params) {
    var count = Scene.instances.push(this);
    this.id = "scene" + count;
    this.tick = this.real = 0;
    this.isRunned = false;
    this.sleep = 50;
    this.setOnInitializationListener = function (action) {
        this.__init = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.applyParams = function (params) {
        for (var item in params) {
            var param = params[item];
            switch (item) {
              case "hooks":
              case "actions":
              case "listeners":
                param.onInit && this.setOnInitializationListener(param.onInit);
                param.onRun && this.setOnRunListener(param.onRun);
                param.onTick && this.setOnTickListener(param.onTick);
                param.onFinish && this.setOnFinishListener(param.onFinish);
                param.onPause && this.setOnPauseListener(param.onPause);
                param.onDestroy && this.setOnDestroyListener(param.onDestroy);
                break;
              case "game":
              case "time":
                if (typeof param == "number") {
                    this.setTickTime(param);
                } else {
                    if (typeof param == "object" && !Array.isArray(param)) {
                        param.isStatic && this.setStatic(param.isStatic);
                        param.tick && this.setTickTime(param.tick);
                    }
                }
                break;
              case "tick":
              case "wait":
              case "sleep":
                this.setTickTime(param);
                break;
              case "static":
              case "isStatic":
                this.setStatic(param);
                break;
            }
        }
    };
    this.create = function () {
        var scope = this;
        if (this.thread) {
            return;
        }
        this.tick = this.real = 0;
        this.thread = new java.lang.Thread(function () {
            while (scope && scope.thread && scope.sleep > 0) {
                try {
                    if (scope.isRunned) {
                        scope.tick == 0 && java.lang.Thread.sleep(scope.sleep);
                        (scope.tick++, scope.real += scope.sleep);
                        scope.__tick && scope.__tick(scope);
                        java.lang.Thread.sleep(scope.sleep);
                    } else {
                        java.lang.Thread.sleep(1);
                    }
                }
                catch (e) {
                    reportError(e);
                }
            }
        });
        this.thread.start();
        this.__create && this.__create(this);
        return this;
    };
    this.run = function (post) {
        var scope = this;
        if (this.isRunned) {
            return;
        }
        this.isRunned = true;
        this.tick = this.real = 0;
        this.__run && this.__run(this);
        post && handle(function () {
            post(scope);
        }, 50);
        log("Scene", "Running " + this.id);
        isDevelop && menuType == 1 && (removeMenu(), createMenu(1));
    };
    this.setStatic = function (static) {
        static && (this.sleep = 0);
    };
    this.handle = function (action) {
        var scope = this;
        context.runOnUiThread(function () {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        });
    };
    this.setTickTime = function (time) {
        typeof time == "number" && (this.sleep = time);
    };
    this.pause = function (time) {
        var scope = this;
        this.isRunned = false;
        time && handle(function () {
            scope.isRunned = true;
        }, time);
        this.__pause && this.__pause(this);
    };
    this.finish = function () {
        this.isRunned = false;
        this.__finish && this.__finish(this);
        this.tick = this.real = 0;
        log("Scene", "Finishing " + this.id);
        isDevelop && menuType == 1 && (removeMenu(), createMenu(1));
    };
    this.destroy = function () {
        delete this.thread;
        this.isRunned = false;
        this.tick = this.real = 0;
        Scene.instances.splice(count - 1, 1);
        this.__destroy && this.__destroy(this);
    };
    this.setOnRunListener = function (action) {
        this.__run = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnTickListener = function (action) {
        this.__tick = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnPauseListener = function (action) {
        this.__pause = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnFinishListener = function (action) {
        this.__finish = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnDestroyListener = function (action) {
        this.__destroy = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    this.setOnCreateListener = function (action) {
        this.__create = function (scope) {
            try {
                action(scope);
            }
            catch (e) {
                reportError(e);
            }
        };
    };
    params && this.applyParams(params);
    this.__init && this.__init(this);
};
Scene.instances = [];
Scene.prepare = function () {
    Scene.instances.forEach(function (i) {
        i.sleep > 0 && i.create();
    });
};
Scene.destroy = function () {
    Scene.instances.forEach(function (i) {
        i.thread && i.destroy();
    });
};

